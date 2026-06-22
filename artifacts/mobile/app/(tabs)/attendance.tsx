import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";
import type {
  AttendanceGuest,
  AttendanceRecord,
  Member,
  NoSessionReason,
  SessionType,
} from "@/types";
import { NO_SESSION_REASONS, SESSION_TYPES } from "@/types";

type AttendanceTab = "record" | "history";

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0] ?? "";
}

function formatDisplayDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function formatShortDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatHistoryDate(dateStr: string): { day: string; monthYear: string } {
  const d = new Date(dateStr + "T12:00:00");
  return {
    day: d.toLocaleDateString("en-US", { day: "numeric" }),
    monthYear: d.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
  };
}

function generateGuestId(): string {
  return "g-" + Date.now().toString() + Math.random().toString(36).substr(2, 5);
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const SESSION_TYPE_META: Record<SessionType, { icon: keyof typeof Feather.glyphMap; color: string; bg: string }> = {
  "Regular Meeting": { icon: "calendar", color: "#2563EB", bg: "#EFF6FF" },
  "Camp": { icon: "sunset", color: "#16A34A", bg: "#F0FDF4" },
  "Outreach": { icon: "heart", color: "#EA580C", bg: "#FFF7ED" },
  "Special Event": { icon: "star", color: "#7C3AED", bg: "#F5F3FF" },
  "No Session": { icon: "x-circle", color: "#6B7280", bg: "#F3F4F6" },
};

export default function AttendanceScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { members, saveAttendance, getSessionForDate, getAttendanceHistory } = useApp();
  const today = getTodayDate();

  const [activeTab, setActiveTab] = useState<AttendanceTab>("record");

  const [selectedDate, setSelectedDate] = useState(today);
  const [sessionType, setSessionType] = useState<SessionType>("Regular Meeting");
  const [noSessionReason, setNoSessionReason] = useState<NoSessionReason | "">("");
  const [noSessionNote, setNoSessionNote] = useState("");
  const [presentMap, setPresentMap] = useState<Record<string, boolean>>({});
  const [guests, setGuests] = useState<AttendanceGuest[]>([]);
  const [saved, setSaved] = useState(false);

  // Confirmation state — shown after successful save
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedPresent, setConfirmedPresent] = useState(0);
  const [confirmedAbsent, setConfirmedAbsent] = useState(0);
  const [confirmedSessionType, setConfirmedSessionType] = useState<SessionType>("Regular Meeting");
  const [confirmedDate, setConfirmedDate] = useState("");

  // FAB state for Add Guest
  const [fabExpanded, setFabExpanded] = useState(true);
  const fabWidth = useRef(new Animated.Value(1)).current;
  const fabCollapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [showAddGuest, setShowAddGuest] = useState(false);
  const [guestName, setGuestName] = useState("");

  const [viewingSession, setViewingSession] = useState<AttendanceRecord | null>(null);

  // Date picker modal
  const [showDatePicker, setShowDatePicker] = useState(false);
  const todayObj = new Date(today + "T12:00:00");
  const [calYear, setCalYear] = useState(todayObj.getFullYear());
  const [calMonth, setCalMonth] = useState(todayObj.getMonth());

  // Session type dropdown modal
  const [showSessionDropdown, setShowSessionDropdown] = useState(false);

  // FAB auto-collapse after 5 seconds on record tab with members
  useEffect(() => {
    if (activeTab === "record" && members.length > 0 && !showConfirmation) {
      setFabExpanded(true);
      Animated.timing(fabWidth, { toValue: 1, duration: 250, useNativeDriver: false }).start();
      if (fabCollapseTimer.current) clearTimeout(fabCollapseTimer.current);
      fabCollapseTimer.current = setTimeout(() => {
        collapseFab();
      }, 5000);
    }
    return () => {
      if (fabCollapseTimer.current) clearTimeout(fabCollapseTimer.current);
    };
  }, [activeTab, members.length, showConfirmation]);

  function collapseFab() {
    setFabExpanded(false);
    Animated.timing(fabWidth, { toValue: 0, duration: 300, useNativeDriver: false }).start();
  }

  function expandFab() {
    setFabExpanded(true);
    Animated.timing(fabWidth, { toValue: 1, duration: 250, useNativeDriver: false }).start();
    if (fabCollapseTimer.current) clearTimeout(fabCollapseTimer.current);
    fabCollapseTimer.current = setTimeout(() => {
      collapseFab();
    }, 5000);
  }

  function handleFabPress() {
    if (!fabExpanded) {
      expandFab();
      return;
    }
    setShowAddGuest(true);
  }

  // Build calendar grid for the currently displayed month
  const calendarDays = useMemo(() => {
    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const cells: (number | null)[] = Array(firstDay).fill(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [calYear, calMonth]);

  function calDateStr(day: number): string {
    return `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function isFutureDay(day: number): boolean {
    const d = new Date(calYear, calMonth, day);
    const t = new Date(today + "T12:00:00");
    return d > t;
  }

  function prevMonth() {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  }

  function nextMonth() {
    const now = new Date();
    const isCurrentMonth = calYear === now.getFullYear() && calMonth === now.getMonth();
    if (isCurrentMonth) return;
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  }

  const isCurrentCalMonth = useMemo(() => {
    const now = new Date();
    return calYear === now.getFullYear() && calMonth === now.getMonth();
  }, [calYear, calMonth]);

  function openDatePicker() {
    const d = new Date(selectedDate + "T12:00:00");
    setCalYear(d.getFullYear());
    setCalMonth(d.getMonth());
    setShowDatePicker(true);
  }

  function selectDay(day: number) {
    if (isFutureDay(day)) return;
    const ds = calDateStr(day);
    setSelectedDate(ds);
    setSaved(false);
    setShowConfirmation(false);
    setShowDatePicker(false);
    Haptics.selectionAsync();
  }

  // Load session data when selected date changes
  useEffect(() => {
    const existing = getSessionForDate(selectedDate);
    if (existing) {
      setSessionType(existing.sessionType);
      setNoSessionReason((existing.noSessionReason as NoSessionReason) ?? "");
      setNoSessionNote(existing.noSessionNote ?? "");
      const map: Record<string, boolean> = {};
      existing.records.forEach((r) => { map[r.memberId] = r.present; });
      members.forEach((m) => { if (!(m.id in map)) map[m.id] = true; });
      setPresentMap(map);
      setGuests(existing.guests ?? []);
      setSaved(true);
    } else {
      setSessionType("Regular Meeting");
      setNoSessionReason("");
      setNoSessionNote("");
      const map: Record<string, boolean> = {};
      members.forEach((m) => { map[m.id] = true; });
      setPresentMap(map);
      setGuests([]);
      setSaved(false);
    }
  }, [selectedDate]);

  const toggle = (memberId: string) => {
    Haptics.selectionAsync();
    setSaved(false);
    setPresentMap((prev) => ({ ...prev, [memberId]: !prev[memberId] }));
  };

  const handleSave = () => {
    const currentPresent = members.filter((m) => presentMap[m.id] !== false).length;
    const currentAbsent = members.length - currentPresent;

    if (sessionType === "No Session") {
      saveAttendance(selectedDate, "No Session", [], [], noSessionReason || undefined, noSessionNote.trim() || undefined);
    } else {
      const records = members.map((m) => ({ memberId: m.id, present: presentMap[m.id] !== false }));
      saveAttendance(selectedDate, sessionType, records, guests);
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSaved(true);

    setConfirmedPresent(currentPresent);
    setConfirmedAbsent(currentAbsent);
    setConfirmedSessionType(sessionType);
    setConfirmedDate(selectedDate);
    setShowConfirmation(true);
  };

  const handleRegisterAnother = () => {
    const prevSessionType = confirmedSessionType;
    setShowConfirmation(false);
    setSaved(false);
    setSelectedDate(today);
    setSessionType(prevSessionType);
    setGuests([]);
    const map: Record<string, boolean> = {};
    members.forEach((m) => { map[m.id] = true; });
    setPresentMap(map);
    setNoSessionReason("");
    setNoSessionNote("");
    expandFab();
  };

  const handleViewHistory = () => {
    setShowConfirmation(false);
    setActiveTab("history");
  };

  const handleAddGuest = () => {
    if (!guestName.trim()) return;
    setGuests((prev) => [...prev, { id: generateGuestId(), name: guestName.trim() }]);
    setGuestName("");
    setShowAddGuest(false);
    setSaved(false);
    Haptics.selectionAsync();
  };

  const removeGuest = (id: string) => {
    setGuests((prev) => prev.filter((g) => g.id !== id));
    setSaved(false);
  };

  const handleEditSession = (record: AttendanceRecord) => {
    setShowConfirmation(false);
    setSelectedDate(record.date);
    setActiveTab("record");
  };

  const presentCount = members.filter((m) => presentMap[m.id] !== false).length;
  const absentCount = members.length - presentCount;
  const meta = SESSION_TYPE_META[sessionType];
  const history = getAttendanceHistory();

  const isToday = selectedDate === today;
  const dateLabel = isToday ? "Today" : formatShortDate(selectedDate);
  const hasSavedForDate = !!getSessionForDate(selectedDate);

  const renderMember = ({ item }: { item: Member }) => {
    const isPresent = presentMap[item.id] !== false;
    return (
      <TouchableOpacity
        style={[
          styles.memberRow,
          {
            backgroundColor: colors.card,
            borderColor: isPresent ? colors.border : "#FEE2E2",
          },
        ]}
        onPress={() => toggle(item.id)}
        activeOpacity={0.85}
      >
        <View style={[styles.avatar, { backgroundColor: isPresent ? colors.successLight : "#FEE2E2" }]}>
          <Text style={[styles.avatarText, { color: isPresent ? colors.success : colors.destructive }]}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.memberInfo}>
          <Text style={[styles.memberName, { color: colors.navy }]}>{item.name}</Text>
          <Text style={[styles.memberClass, { color: colors.mutedForeground }]}>{item.adventurerClass}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: isPresent ? colors.successLight : "#FEE2E2" }]}>
          <Text style={[styles.statusText, { color: isPresent ? colors.success : colors.destructive }]}>
            {isPresent ? "Present" : "Absent"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const fabLabelWidth = fabWidth.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 90],
  });
  const fabLabelOpacity = fabWidth.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Fixed Header */}
      <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.navy }]}>
          {members.length === 0 ? "Register Attendance" : "Attendance"}
        </Text>

        {/* Tab Switcher — only shown when members exist */}
        {members.length > 0 && (
          <View style={[styles.tabRow, { backgroundColor: colors.muted }]}>
            {(["record", "history"] as AttendanceTab[]).map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && { backgroundColor: colors.card }]}
                onPress={() => setActiveTab(tab)}
              >
                <Feather
                  name={tab === "record" ? "edit-3" : "clock"}
                  size={14}
                  color={activeTab === tab ? colors.primary : colors.mutedForeground}
                />
                <Text style={[styles.tabText, { color: activeTab === tab ? colors.primary : colors.mutedForeground }]}>
                  {tab === "record" ? "Record" : "History"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* ── EMPTY STATE (no members) ── */}
      {members.length === 0 && (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateEmoji}>👥</Text>
          <Text style={[styles.emptyStateTitle, { color: colors.navy }]}>No Members Yet</Text>
          <Text style={[styles.emptyStateText, { color: colors.mutedForeground }]}>
            Add club members before registering attendance.
          </Text>
          <TouchableOpacity
            style={[styles.emptyStateBtn, { backgroundColor: colors.primary }]}
            onPress={() => router.push("/members")}
            activeOpacity={0.85}
          >
            <Feather name="user-plus" size={18} color="#FFF" />
            <Text style={styles.emptyStateBtnText}>Add Members</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ── RECORD TAB (members exist) ── */}
      {members.length > 0 && activeTab === "record" && (

        <>
          {/* Confirmation State */}
          {showConfirmation ? (
            <View style={styles.confirmationContainer}>
              <View style={[styles.confirmationCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={[styles.confirmationIconCircle, { backgroundColor: colors.successLight }]}>
                  <Feather name="check" size={32} color={colors.success} />
                </View>
                <Text style={[styles.confirmationTitle, { color: colors.navy }]}>Attendance Recorded</Text>

                {confirmedSessionType !== "No Session" && (
                  <View style={styles.confirmationStats}>
                    <View style={[styles.confirmationStatCard, { backgroundColor: colors.successLight }]}>
                      <Text style={[styles.confirmationStatNum, { color: colors.success }]}>{confirmedPresent}</Text>
                      <Text style={[styles.confirmationStatLabel, { color: colors.success }]}>Present</Text>
                    </View>
                    <View style={[styles.confirmationStatCard, { backgroundColor: "#FEE2E2" }]}>
                      <Text style={[styles.confirmationStatNum, { color: colors.destructive }]}>{confirmedAbsent}</Text>
                      <Text style={[styles.confirmationStatLabel, { color: colors.destructive }]}>Absent</Text>
                    </View>
                  </View>
                )}

                <Text style={[styles.confirmationSubtext, { color: colors.mutedForeground }]}>
                  {confirmedSessionType === "No Session"
                    ? "No session recorded for " + formatDisplayDate(confirmedDate)
                    : "Session saved successfully."}
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.confirmationBtn, { backgroundColor: colors.primary }]}
                onPress={handleViewHistory}
                activeOpacity={0.85}
              >
                <Feather name="clock" size={18} color="#FFF" />
                <Text style={styles.confirmationBtnText}>View Attendance History</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.confirmationBtnOutline, { borderColor: colors.border, backgroundColor: colors.card }]}
                onPress={handleRegisterAnother}
                activeOpacity={0.85}
              >
                <Feather name="edit-3" size={18} color={colors.navy} />
                <Text style={[styles.confirmationBtnOutlineText, { color: colors.navy }]}>Register Another Session</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: bottomPad + 110 }}
              keyboardShouldPersistTaps="handled"
            >
              {/* Date Dropdown */}
              <View style={[styles.section, { marginTop: 8 }]}>
                <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>Session Date</Text>
                <TouchableOpacity
                  style={[styles.dropdownBtn, { backgroundColor: colors.card, borderColor: colors.border }]}
                  onPress={openDatePicker}
                  activeOpacity={0.8}
                >
                  <View style={[styles.dropdownIconBox, { backgroundColor: colors.blueLight }]}>
                    <Feather name="calendar" size={16} color={colors.primary} />
                  </View>
                  <View style={styles.dropdownMeta}>
                    <Text style={[styles.dropdownPrimary, { color: colors.navy }]}>
                      {dateLabel}
                    </Text>
                    <Text style={[styles.dropdownSub, { color: colors.mutedForeground }]}>
                      {formatDisplayDate(selectedDate)}
                    </Text>
                  </View>
                  <View style={styles.dropdownRight}>
                    {hasSavedForDate && (
                      <View style={[styles.savedPill, { backgroundColor: colors.successLight }]}>
                        <Feather name="check" size={10} color={colors.success} />
                        <Text style={[styles.savedPillText, { color: colors.success }]}>Saved</Text>
                      </View>
                    )}
                    <Feather name="chevron-down" size={18} color={colors.mutedForeground} />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Session Type Dropdown */}
              <View style={styles.section}>
                <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>Session Type</Text>
                <TouchableOpacity
                  style={[styles.dropdownBtn, { backgroundColor: meta.bg, borderColor: meta.color }]}
                  onPress={() => setShowSessionDropdown(true)}
                  activeOpacity={0.8}
                >
                  <View style={[styles.dropdownIconBox, { backgroundColor: meta.color + "20" }]}>
                    <Feather name={meta.icon} size={16} color={meta.color} />
                  </View>
                  <View style={styles.dropdownMeta}>
                    <Text style={[styles.dropdownPrimary, { color: meta.color }]}>{sessionType}</Text>
                  </View>
                  <Feather name="chevron-down" size={18} color={meta.color} />
                </TouchableOpacity>
              </View>

              {/* ── No Session Flow ── */}
              {sessionType === "No Session" ? (
                <View style={styles.section}>
                  <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>Reason (optional)</Text>
                  <View style={styles.reasonRow}>
                    {NO_SESSION_REASONS.map((r) => (
                      <TouchableOpacity
                        key={r}
                        style={[
                          styles.reasonChip,
                          {
                            backgroundColor: noSessionReason === r ? "#F3F4F6" : colors.card,
                            borderColor: noSessionReason === r ? "#6B7280" : colors.border,
                          },
                        ]}
                        onPress={() => { setNoSessionReason(r); setSaved(false); }}
                      >
                        <Text
                          style={[
                            styles.reasonText,
                            { color: noSessionReason === r ? "#374151" : colors.mutedForeground },
                          ]}
                        >
                          {r}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <Text style={[styles.sectionLabel, { color: colors.mutedForeground, marginTop: 16 }]}>Note (optional)</Text>
                  <TextInput
                    style={[
                      styles.noteInput,
                      { borderColor: colors.border, color: colors.navy, backgroundColor: colors.card },
                    ]}
                    value={noSessionNote}
                    onChangeText={(v) => { setNoSessionNote(v); setSaved(false); }}
                    placeholder="Add a note about why the session was skipped..."
                    placeholderTextColor={colors.mutedForeground}
                    multiline
                    numberOfLines={3}
                  />

                  <View style={[styles.noSessionBanner, { backgroundColor: "#F3F4F6", borderColor: "#E5E7EB" }]}>
                    <Feather name="info" size={16} color="#6B7280" />
                    <Text style={[styles.noSessionBannerText, { color: "#4B5563" }]}>
                      This week will be saved as "No Session Held" in your attendance history.
                    </Text>
                  </View>
                </View>
              ) : (
                <>
                  {/* Attendance Summary */}
                  <View style={styles.summarySection}>
                    <View style={[styles.summaryCard, { backgroundColor: colors.successLight }]}>
                      <Text style={[styles.summaryNum, { color: colors.success }]}>{presentCount}</Text>
                      <Text style={[styles.summaryLabel, { color: colors.success }]}>Present</Text>
                    </View>
                    <View style={[styles.summaryCard, { backgroundColor: "#FEE2E2" }]}>
                      <Text style={[styles.summaryNum, { color: colors.destructive }]}>{absentCount}</Text>
                      <Text style={[styles.summaryLabel, { color: colors.destructive }]}>Absent</Text>
                    </View>
                    <View style={[styles.summaryCard, { backgroundColor: "#F3F4F6" }]}>
                      <Text style={[styles.summaryNum, { color: "#374151" }]}>{guests.length}</Text>
                      <Text style={[styles.summaryLabel, { color: "#6B7280" }]}>Guests</Text>
                    </View>
                  </View>

                  {/* Member List */}
                  <View style={styles.section}>
                    <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
                      Members · Tap to mark absent
                    </Text>
                    {members.map((m) => (
                      <View key={m.id} style={{ marginBottom: 10 }}>
                        {renderMember({ item: m })}
                      </View>
                    ))}
                  </View>

                  {/* Guests Section */}
                  {guests.length > 0 && (
                    <View style={styles.section}>
                      <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>Guests</Text>
                      <View style={styles.guestList}>
                        {guests.map((g) => (
                          <View
                            key={g.id}
                            style={[styles.guestChip, { backgroundColor: "#F5F3FF", borderColor: "#DDD6FE" }]}
                          >
                            <Feather name="user-plus" size={13} color="#7C3AED" />
                            <Text style={[styles.guestName, { color: "#5B21B6" }]}>{g.name}</Text>
                            <TouchableOpacity onPress={() => removeGuest(g.id)} hitSlop={{ top: 8, right: 8, bottom: 8, left: 8 }}>
                              <Feather name="x" size={13} color="#7C3AED" />
                            </TouchableOpacity>
                          </View>
                        ))}
                      </View>
                    </View>
                  )}
                </>
              )}
            </ScrollView>
          )}
        </>
      )}

      {/* ── HISTORY TAB ── */}
      {members.length > 0 && activeTab === "history" && (
        <>
          {history.length === 0 ? (
            <View style={styles.empty}>
              <Feather name="clock" size={40} color={colors.border} />
              <Text style={[styles.emptyTitle, { color: colors.navy }]}>No sessions recorded yet</Text>
              <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
                Record your first session in the Record tab
              </Text>
            </View>
          ) : (
            <FlatList
              data={history}
              keyExtractor={(r) => r.date}
              contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: bottomPad + 110 }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: record }) => {
                const m = SESSION_TYPE_META[record.sessionType ?? "Regular Meeting"];
                const presentC = record.records.filter((r) => r.present).length;
                const totalC = record.records.length;
                const isNoSession = record.sessionType === "No Session";
                const { day, monthYear } = formatHistoryDate(record.date);

                return (
                  <View style={[styles.historyCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <View style={[styles.historyDateBadge, { backgroundColor: colors.navy }]}>
                      <Text style={styles.historyDay}>{day}</Text>
                      <Text style={styles.historyMonth}>{monthYear}</Text>
                    </View>

                    <View style={styles.historyInfo}>
                      <View style={styles.historyTypeRow}>
                        <View style={[styles.typePill, { backgroundColor: m.bg }]}>
                          <Feather name={m.icon} size={11} color={m.color} />
                          <Text style={[styles.typePillText, { color: m.color }]}>
                            {record.sessionType}
                          </Text>
                        </View>
                      </View>

                      {isNoSession ? (
                        <Text style={[styles.historyCount, { color: "#6B7280" }]}>
                          No Session Held{record.noSessionReason ? ` · ${record.noSessionReason}` : ""}
                        </Text>
                      ) : (
                        <Text style={[styles.historyCount, { color: colors.navy }]}>
                          {presentC} / {totalC} Present
                          {record.guests.length > 0 ? ` · ${record.guests.length} Guest${record.guests.length !== 1 ? "s" : ""}` : ""}
                        </Text>
                      )}
                    </View>

                    <View style={styles.historyActions}>
                      <TouchableOpacity
                        style={[styles.historyBtn, { backgroundColor: colors.blueLight }]}
                        onPress={() => setViewingSession(record)}
                      >
                        <Feather name="eye" size={14} color={colors.primary} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.historyBtn, { backgroundColor: colors.muted }]}
                        onPress={() => handleEditSession(record)}
                      >
                        <Feather name="edit-2" size={14} color={colors.mutedForeground} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </>
      )}

      {/* ── Save Button ── */}
      {members.length > 0 && activeTab === "record" && !showConfirmation && (
        <View
          style={[
            styles.footer,
            {
              paddingBottom: bottomPad + 16,
              backgroundColor: colors.background,
              borderTopColor: colors.border,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.saveBtn,
              { backgroundColor: saved ? colors.success : (sessionType === "No Session" ? "#6B7280" : colors.primary) },
            ]}
            onPress={handleSave}
            activeOpacity={0.85}
          >
            <Feather name={saved ? "check" : "save"} size={18} color="#FFF" />
            <Text style={styles.saveBtnText}>
              {saved
                ? "Saved"
                : sessionType === "No Session"
                ? "Save — No Session"
                : "Save Attendance"}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ── Floating Action Button (Add Guest) ── */}
      {members.length > 0 && activeTab === "record" && !showConfirmation && sessionType !== "No Session" && (
        <TouchableOpacity
          style={[styles.fab, { backgroundColor: colors.primary, bottom: bottomPad + 100 }]}
          onPress={handleFabPress}
          activeOpacity={0.85}
        >
          <Feather name="user-plus" size={20} color="#FFF" />
          <Animated.View style={{ width: fabLabelWidth, overflow: "hidden" }}>
            <Animated.Text
              style={[styles.fabLabel, { opacity: fabLabelOpacity }]}
              numberOfLines={1}
            >
              {" "}Add Guest
            </Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      )}

      {/* ── Calendar Modal ── */}
      <Modal visible={showDatePicker} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowDatePicker(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.calendarSheet, { backgroundColor: colors.card }]}
            onPress={() => {}}
          >
            {/* Month nav */}
            <View style={styles.calHeader}>
              <TouchableOpacity onPress={prevMonth} style={styles.calNavBtn}>
                <Feather name="chevron-left" size={20} color={colors.navy} />
              </TouchableOpacity>
              <Text style={[styles.calMonthTitle, { color: colors.navy }]}>
                {MONTH_NAMES[calMonth]} {calYear}
              </Text>
              <TouchableOpacity
                onPress={nextMonth}
                style={[styles.calNavBtn, isCurrentCalMonth && { opacity: 0.3 }]}
                disabled={isCurrentCalMonth}
              >
                <Feather name="chevron-right" size={20} color={colors.navy} />
              </TouchableOpacity>
            </View>

            {/* Day labels */}
            <View style={styles.calDayRow}>
              {DAY_NAMES.map((d) => (
                <Text key={d} style={[styles.calDayLabel, { color: colors.mutedForeground }]}>{d}</Text>
              ))}
            </View>

            {/* Calendar grid */}
            <View style={styles.calGrid}>
              {calendarDays.map((day, idx) => {
                if (!day) return <View key={`empty-${idx}`} style={styles.calCell} />;
                const ds = calDateStr(day);
                const isSelected = ds === selectedDate;
                const isToday2 = ds === today;
                const future = isFutureDay(day);
                const hasSaved2 = !!getSessionForDate(ds);
                return (
                  <TouchableOpacity
                    key={ds}
                    style={[
                      styles.calCell,
                      isSelected && { backgroundColor: colors.navy, borderRadius: 22 },
                      !isSelected && isToday2 && { borderRadius: 22, borderWidth: 1.5, borderColor: colors.primary },
                      future && { opacity: 0.25 },
                    ]}
                    onPress={() => selectDay(day)}
                    disabled={future}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.calDayNum,
                      { color: isSelected ? "#FFF" : future ? colors.mutedForeground : colors.navy },
                      isToday2 && !isSelected && { color: colors.primary, fontFamily: "Inter_700Bold" },
                    ]}>
                      {day}
                    </Text>
                    {hasSaved2 && !isSelected && (
                      <View style={[styles.calDot, { backgroundColor: colors.success }]} />
                    )}
                    {hasSaved2 && isSelected && (
                      <View style={[styles.calDot, { backgroundColor: "#FFF" }]} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>

            <TouchableOpacity
              style={[styles.calTodayBtn, { borderColor: colors.border }]}
              onPress={() => {
                setSelectedDate(today);
                setSaved(false);
                setShowDatePicker(false);
              }}
            >
              <Text style={[styles.calTodayText, { color: colors.primary }]}>Jump to Today</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* ── Session Type Dropdown Modal ── */}
      <Modal visible={showSessionDropdown} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowSessionDropdown(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.sessionSheet, { backgroundColor: colors.card }]}
            onPress={() => {}}
          >
            <View style={[styles.sheetHandle, { backgroundColor: colors.border }]} />
            <Text style={[styles.sheetTitle, { color: colors.navy }]}>Session Type</Text>

            {SESSION_TYPES.map((type) => {
              const m = SESSION_TYPE_META[type];
              const isActive = sessionType === type;
              return (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.sessionOption,
                    {
                      backgroundColor: isActive ? m.bg : colors.background,
                      borderColor: isActive ? m.color : colors.border,
                    },
                  ]}
                  onPress={() => {
                    setSessionType(type);
                    setSaved(false);
                    setShowSessionDropdown(false);
                    Haptics.selectionAsync();
                  }}
                  activeOpacity={0.8}
                >
                  <View style={[styles.sessionOptionIcon, { backgroundColor: m.color + "20" }]}>
                    <Feather name={m.icon} size={18} color={m.color} />
                  </View>
                  <Text style={[styles.sessionOptionText, { color: isActive ? m.color : colors.navy }]}>
                    {type}
                  </Text>
                  {isActive && <Feather name="check" size={18} color={m.color} />}
                </TouchableOpacity>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* ── Add Guest Modal ── */}
      <Modal visible={showAddGuest} transparent animationType="fade">
        <KeyboardAvoidingView
          style={styles.guestOverlay}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={[styles.guestCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.guestCardTitle, { color: colors.navy }]}>Add Guest</Text>
            <Text style={[styles.guestCardHint, { color: colors.mutedForeground }]}>
              Guests are recorded for this session only and are not added to your member list.
            </Text>
            <TextInput
              style={[
                styles.guestInput,
                { borderColor: colors.border, color: colors.navy, backgroundColor: colors.background },
              ]}
              value={guestName}
              onChangeText={setGuestName}
              placeholder="Guest name"
              placeholderTextColor={colors.mutedForeground}
              autoFocus
              onSubmitEditing={handleAddGuest}
            />
            <View style={styles.guestCardActions}>
              <TouchableOpacity
                style={[styles.guestCancelBtn, { borderColor: colors.border }]}
                onPress={() => { setShowAddGuest(false); setGuestName(""); }}
              >
                <Text style={[styles.guestCancelText, { color: colors.navy }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.guestAddBtn, { backgroundColor: colors.primary }]}
                onPress={handleAddGuest}
              >
                <Text style={styles.guestAddText}>Add Guest</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* ── View Session Modal ── */}
      <Modal visible={!!viewingSession} transparent animationType="slide">
        <TouchableOpacity
          style={styles.viewOverlay}
          activeOpacity={1}
          onPress={() => setViewingSession(null)}
        >
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            {viewingSession && (() => {
              const m = SESSION_TYPE_META[viewingSession.sessionType ?? "Regular Meeting"];
              const presentMembers = members.filter((mb) =>
                viewingSession.records.find((r) => r.memberId === mb.id && r.present)
              );
              const absentMembers = members.filter((mb) =>
                viewingSession.records.find((r) => r.memberId === mb.id && !r.present)
              );
              return (
                <View style={[styles.viewSheet, { backgroundColor: colors.background }]}>
                  <View style={[styles.viewHeader, { backgroundColor: m.bg }]}>
                    <TouchableOpacity style={styles.viewCloseBtn} onPress={() => setViewingSession(null)}>
                      <Feather name="x" size={22} color={m.color} />
                    </TouchableOpacity>
                    <View style={[styles.viewTypePill, { backgroundColor: m.color }]}>
                      <Feather name={m.icon} size={13} color="#FFF" />
                      <Text style={styles.viewTypePillText}>{viewingSession.sessionType}</Text>
                    </View>
                    <Text style={[styles.viewDate, { color: colors.navy }]}>
                      {formatDisplayDate(viewingSession.date)}
                    </Text>
                    {viewingSession.sessionType !== "No Session" && (
                      <Text style={[styles.viewSummary, { color: colors.mutedForeground }]}>
                        {presentMembers.length} present · {absentMembers.length} absent
                        {viewingSession.guests.length > 0 ? ` · ${viewingSession.guests.length} guest${viewingSession.guests.length !== 1 ? "s" : ""}` : ""}
                      </Text>
                    )}
                  </View>

                  <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
                    {viewingSession.sessionType === "No Session" ? (
                      <View style={[styles.noSessionInfo, { backgroundColor: "#F3F4F6", borderColor: "#E5E7EB" }]}>
                        <Feather name="x-circle" size={32} color="#6B7280" />
                        <Text style={[styles.noSessionInfoTitle, { color: colors.navy }]}>No Session Held</Text>
                        {viewingSession.noSessionReason && (
                          <Text style={[styles.noSessionInfoReason, { color: "#6B7280" }]}>
                            Reason: {viewingSession.noSessionReason}
                          </Text>
                        )}
                        {viewingSession.noSessionNote && (
                          <Text style={[styles.noSessionInfoNote, { color: colors.mutedForeground }]}>
                            {viewingSession.noSessionNote}
                          </Text>
                        )}
                      </View>
                    ) : (
                      <>
                        {presentMembers.length > 0 && (
                          <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.viewGroupLabel, { color: colors.success }]}>
                              Present ({presentMembers.length})
                            </Text>
                            {presentMembers.map((mb) => (
                              <View key={mb.id} style={[styles.viewMemberRow, { backgroundColor: colors.successLight }]}>
                                <View style={[styles.viewAvatar, { backgroundColor: colors.success }]}>
                                  <Text style={styles.viewAvatarText}>{mb.name.charAt(0).toUpperCase()}</Text>
                                </View>
                                <Text style={[styles.viewMemberName, { color: colors.navy }]}>{mb.name}</Text>
                                <Feather name="check" size={16} color={colors.success} />
                              </View>
                            ))}
                          </View>
                        )}
                        {absentMembers.length > 0 && (
                          <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.viewGroupLabel, { color: colors.destructive }]}>
                              Absent ({absentMembers.length})
                            </Text>
                            {absentMembers.map((mb) => (
                              <View key={mb.id} style={[styles.viewMemberRow, { backgroundColor: "#FEE2E2" }]}>
                                <View style={[styles.viewAvatar, { backgroundColor: colors.destructive }]}>
                                  <Text style={styles.viewAvatarText}>{mb.name.charAt(0).toUpperCase()}</Text>
                                </View>
                                <Text style={[styles.viewMemberName, { color: colors.navy }]}>{mb.name}</Text>
                                <Feather name="x" size={16} color={colors.destructive} />
                              </View>
                            ))}
                          </View>
                        )}
                        {viewingSession.guests.length > 0 && (
                          <View style={{ marginBottom: 20 }}>
                            <Text style={[styles.viewGroupLabel, { color: "#7C3AED" }]}>
                              Guests ({viewingSession.guests.length})
                            </Text>
                            {viewingSession.guests.map((g) => (
                              <View key={g.id} style={[styles.viewMemberRow, { backgroundColor: "#F5F3FF" }]}>
                                <View style={[styles.viewAvatar, { backgroundColor: "#7C3AED" }]}>
                                  <Text style={styles.viewAvatarText}>{g.name.charAt(0).toUpperCase()}</Text>
                                </View>
                                <Text style={[styles.viewMemberName, { color: colors.navy }]}>{g.name}</Text>
                                <Feather name="user-plus" size={16} color="#7C3AED" />
                              </View>
                            ))}
                          </View>
                        )}
                      </>
                    )}

                    <TouchableOpacity
                      style={[styles.editFromViewBtn, { backgroundColor: colors.navy }]}
                      onPress={() => {
                        setViewingSession(null);
                        handleEditSession(viewingSession);
                      }}
                    >
                      <Feather name="edit-2" size={16} color="#FFF" />
                      <Text style={styles.editFromViewText}>Edit This Session</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              );
            })()}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingBottom: 12 },
  title: { fontSize: 28, fontFamily: "Inter_700Bold", lineHeight: 36, marginBottom: 12 },
  tabRow: { flexDirection: "row", borderRadius: 12, padding: 4 },
  tab: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 10, borderRadius: 10, gap: 6 },
  tabText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },

  section: { paddingHorizontal: 20, marginBottom: 12 },
  sectionLabel: { fontSize: 12, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 },

  // Dropdown button (date + session type)
  dropdownBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 12,
  },
  dropdownIconBox: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  dropdownMeta: { flex: 1 },
  dropdownPrimary: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  dropdownSub: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 1 },
  dropdownRight: { flexDirection: "row", alignItems: "center", gap: 8 },
  savedPill: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  savedPillText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },

  reasonRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 4 },
  reasonChip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1.5 },
  reasonText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  noteInput: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    minHeight: 80,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  noSessionBanner: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  noSessionBannerText: { fontSize: 13, fontFamily: "Inter_400Regular", flex: 1, lineHeight: 20 },

  summarySection: { flexDirection: "row", gap: 10, paddingHorizontal: 20, marginBottom: 16 },
  summaryCard: { flex: 1, borderRadius: 14, padding: 14, alignItems: "center", gap: 4 },
  summaryNum: { fontSize: 22, fontFamily: "Inter_700Bold" },
  summaryLabel: { fontSize: 12, fontFamily: "Inter_500Medium" },

  memberRow: { flexDirection: "row", alignItems: "center", borderRadius: 14, borderWidth: 1.5, padding: 14, gap: 14 },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 18, fontFamily: "Inter_700Bold" },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  memberClass: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  statusText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },

  guestList: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 10 },
  guestChip: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, borderWidth: 1.5 },
  guestName: { fontSize: 13, fontFamily: "Inter_600SemiBold" },

  empty: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12, paddingTop: 60 },
  emptyTitle: { fontSize: 18, fontFamily: "Inter_600SemiBold" },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", paddingHorizontal: 40 },

  // Empty state (no members)
  emptyStateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    gap: 16,
  },
  emptyStateEmoji: { fontSize: 56, lineHeight: 68 },
  emptyStateTitle: { fontSize: 22, fontFamily: "Inter_700Bold", textAlign: "center" },
  emptyStateText: { fontSize: 15, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 22 },
  emptyStateBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 16,
    marginTop: 8,
  },
  emptyStateBtnText: { color: "#FFF", fontSize: 16, fontFamily: "Inter_600SemiBold" },

  // Confirmation state
  confirmationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 14,
  },
  confirmationCard: {
    width: "100%",
    borderRadius: 24,
    borderWidth: 1,
    padding: 28,
    alignItems: "center",
    gap: 14,
    marginBottom: 6,
  },
  confirmationIconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  confirmationTitle: { fontSize: 22, fontFamily: "Inter_700Bold", textAlign: "center" },
  confirmationStats: { flexDirection: "row", gap: 12, width: "100%" },
  confirmationStatCard: { flex: 1, borderRadius: 14, padding: 14, alignItems: "center", gap: 4 },
  confirmationStatNum: { fontSize: 28, fontFamily: "Inter_700Bold" },
  confirmationStatLabel: { fontSize: 13, fontFamily: "Inter_500Medium" },
  confirmationSubtext: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 20 },
  confirmationBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    paddingVertical: 18,
    borderRadius: 16,
  },
  confirmationBtnText: { color: "#FFF", fontSize: 16, fontFamily: "Inter_600SemiBold" },
  confirmationBtnOutline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1.5,
  },
  confirmationBtnOutlineText: { fontSize: 16, fontFamily: "Inter_600SemiBold" },

  // FAB
  fab: {
    position: "absolute",
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    overflow: "hidden",
  },
  fabLabel: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },

  footer: { paddingHorizontal: 20, paddingTop: 12, borderTopWidth: 1, position: "absolute", bottom: 0, left: 0, right: 0 },
  saveBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: 18, borderRadius: 16, gap: 10 },
  saveBtnText: { color: "#FFF", fontSize: 16, fontFamily: "Inter_600SemiBold" },

  // History
  historyCard: { flexDirection: "row", alignItems: "center", borderRadius: 16, borderWidth: 1, padding: 14, marginBottom: 10, gap: 14 },
  historyDateBadge: { borderRadius: 12, padding: 10, alignItems: "center", minWidth: 48 },
  historyDay: { color: "#FFF", fontSize: 20, fontFamily: "Inter_700Bold", lineHeight: 24 },
  historyMonth: { color: "rgba(255,255,255,0.7)", fontSize: 10, fontFamily: "Inter_500Medium" },
  historyInfo: { flex: 1, gap: 6 },
  historyTypeRow: { flexDirection: "row" },
  typePill: { flexDirection: "row", alignItems: "center", gap: 4, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10 },
  typePillText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  historyCount: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  historyActions: { flexDirection: "column", gap: 6 },
  historyBtn: { width: 34, height: 34, borderRadius: 10, alignItems: "center", justifyContent: "center" },

  // Calendar modal
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 20 },
  calendarSheet: { borderRadius: 24, padding: 20, width: "100%" },
  calHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 },
  calNavBtn: { padding: 8 },
  calMonthTitle: { fontSize: 17, fontFamily: "Inter_700Bold" },
  calDayRow: { flexDirection: "row", marginBottom: 8 },
  calDayLabel: { flex: 1, textAlign: "center", fontSize: 12, fontFamily: "Inter_600SemiBold" },
  calGrid: { flexDirection: "row", flexWrap: "wrap" },
  calCell: { width: "14.28%", aspectRatio: 1, alignItems: "center", justifyContent: "center" },
  calDayNum: { fontSize: 14, fontFamily: "Inter_500Medium" },
  calDot: { width: 4, height: 4, borderRadius: 2, marginTop: 2 },
  calTodayBtn: { marginTop: 14, paddingVertical: 12, borderRadius: 12, borderWidth: 1.5, alignItems: "center" },
  calTodayText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },

  // Session type dropdown sheet
  sessionSheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, paddingBottom: 40, position: "absolute", bottom: 0, left: 0, right: 0, gap: 10 },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, alignSelf: "center", marginBottom: 12 },
  sheetTitle: { fontSize: 17, fontFamily: "Inter_700Bold", marginBottom: 4 },
  sessionOption: { flexDirection: "row", alignItems: "center", gap: 14, padding: 14, borderRadius: 14, borderWidth: 1.5 },
  sessionOptionIcon: { width: 38, height: 38, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  sessionOptionText: { flex: 1, fontSize: 15, fontFamily: "Inter_600SemiBold" },

  // Add Guest Modal
  guestOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 24 },
  guestCard: { borderRadius: 20, padding: 24, width: "100%", gap: 12 },
  guestCardTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  guestCardHint: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 18 },
  guestInput: { borderWidth: 1.5, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, fontFamily: "Inter_400Regular" },
  guestCardActions: { flexDirection: "row", gap: 10, marginTop: 4 },
  guestCancelBtn: { flex: 1, paddingVertical: 14, borderRadius: 12, alignItems: "center", borderWidth: 1.5 },
  guestCancelText: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  guestAddBtn: { flex: 2, paddingVertical: 14, borderRadius: 12, alignItems: "center" },
  guestAddText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },

  // View Session Modal
  viewOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  viewSheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, maxHeight: "90%", flex: 0, flexShrink: 1 },
  viewHeader: { borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24, paddingBottom: 20 },
  viewCloseBtn: { alignSelf: "flex-end", padding: 4, marginBottom: 8 },
  viewTypePill: { flexDirection: "row", alignItems: "center", gap: 6, alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 5, borderRadius: 12, marginBottom: 10 },
  viewTypePillText: { color: "#FFF", fontSize: 13, fontFamily: "Inter_600SemiBold" },
  viewDate: { fontSize: 20, fontFamily: "Inter_700Bold", marginBottom: 4 },
  viewSummary: { fontSize: 14, fontFamily: "Inter_400Regular" },
  viewGroupLabel: { fontSize: 13, fontFamily: "Inter_700Bold", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 },
  viewMemberRow: { flexDirection: "row", alignItems: "center", borderRadius: 12, padding: 12, marginBottom: 8, gap: 12 },
  viewAvatar: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  viewAvatarText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_700Bold" },
  viewMemberName: { flex: 1, fontSize: 15, fontFamily: "Inter_500Medium" },
  noSessionInfo: { borderRadius: 16, borderWidth: 1, padding: 24, alignItems: "center", gap: 12 },
  noSessionInfoTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  noSessionInfoReason: { fontSize: 14, fontFamily: "Inter_500Medium" },
  noSessionInfoNote: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 20 },
  editFromViewBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, paddingVertical: 16, borderRadius: 14 },
  editFromViewText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },
});
