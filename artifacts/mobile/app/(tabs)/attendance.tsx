import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useMemo, useState } from "react";
import {
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

  // Tab
  const [activeTab, setActiveTab] = useState<AttendanceTab>("record");

  // Record tab state
  const [selectedDate, setSelectedDate] = useState(today);
  const [sessionType, setSessionType] = useState<SessionType>("Regular Meeting");
  const [noSessionReason, setNoSessionReason] = useState<NoSessionReason | "">("");
  const [noSessionNote, setNoSessionNote] = useState("");
  const [presentMap, setPresentMap] = useState<Record<string, boolean>>({});
  const [guests, setGuests] = useState<AttendanceGuest[]>([]);
  const [saved, setSaved] = useState(false);

  // Guest modal
  const [showAddGuest, setShowAddGuest] = useState(false);
  const [guestName, setGuestName] = useState("");

  // View session modal
  const [viewingSession, setViewingSession] = useState<AttendanceRecord | null>(null);

  // Week date options (last 8 weeks, 7 days apart)
  const weekOptions = useMemo(() => {
    const opts: { date: string; label: string; sub: string }[] = [];
    const base = new Date();
    for (let i = 0; i < 8; i++) {
      const d = new Date(base);
      d.setDate(d.getDate() - i * 7);
      const dateStr = d.toISOString().split("T")[0] ?? "";
      opts.push({
        date: dateStr,
        label: i === 0 ? "Today" : formatShortDate(dateStr),
        sub: i === 0 ? formatShortDate(dateStr) : d.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }
    return opts;
  }, []);

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
    if (sessionType === "No Session") {
      saveAttendance(selectedDate, "No Session", [], [], noSessionReason || undefined, noSessionNote.trim() || undefined);
    } else {
      const records = members.map((m) => ({ memberId: m.id, present: presentMap[m.id] !== false }));
      saveAttendance(selectedDate, sessionType, records, guests);
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSaved(true);
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
    setSelectedDate(record.date);
    setActiveTab("record");
  };

  const presentCount = members.filter((m) => presentMap[m.id] !== false).length;
  const absentCount = members.length - presentCount;
  const meta = SESSION_TYPE_META[sessionType];
  const history = getAttendanceHistory();

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

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Fixed Header */}
      <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.navy }]}>Attendance</Text>

        {/* Tab Switcher */}
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
      </View>

      {/* ── RECORD TAB ── */}
      {activeTab === "record" && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: bottomPad + 110 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Date Selector */}
          <View style={styles.section}>
            <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>Session Date</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dateScroll}>
              {weekOptions.map((opt) => {
                const isSelected = opt.date === selectedDate;
                const hasSaved = !!getSessionForDate(opt.date);
                return (
                  <TouchableOpacity
                    key={opt.date}
                    style={[
                      styles.dateChip,
                      {
                        backgroundColor: isSelected ? colors.navy : colors.card,
                        borderColor: isSelected ? colors.navy : colors.border,
                      },
                    ]}
                    onPress={() => setSelectedDate(opt.date)}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.dateChipLabel, { color: isSelected ? "#FFF" : colors.navy }]}>
                      {opt.label}
                    </Text>
                    <Text style={[styles.dateChipSub, { color: isSelected ? "rgba(255,255,255,0.7)" : colors.mutedForeground }]}>
                      {opt.sub}
                    </Text>
                    {hasSaved && (
                      <View style={[styles.savedDot, { backgroundColor: isSelected ? "#FFF" : colors.success }]} />
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <Text style={[styles.selectedDateLabel, { color: colors.mutedForeground }]}>
              {formatDisplayDate(selectedDate)}
            </Text>
          </View>

          {/* Session Type */}
          <View style={styles.section}>
            <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>Session Type</Text>
            <View style={styles.sessionTypeGrid}>
              {SESSION_TYPES.map((type) => {
                const m = SESSION_TYPE_META[type];
                const isActive = sessionType === type;
                return (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.sessionTypeChip,
                      {
                        backgroundColor: isActive ? m.bg : colors.card,
                        borderColor: isActive ? m.color : colors.border,
                      },
                    ]}
                    onPress={() => { setSessionType(type); setSaved(false); }}
                    activeOpacity={0.8}
                  >
                    <Feather name={m.icon} size={14} color={isActive ? m.color : colors.mutedForeground} />
                    <Text
                      style={[
                        styles.sessionTypeText,
                        { color: isActive ? m.color : colors.mutedForeground },
                      ]}
                    >
                      {type}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
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
              {members.length > 0 && (
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
              )}

              {/* Member List */}
              {members.length === 0 ? (
                <View style={styles.empty}>
                  <Feather name="users" size={40} color={colors.border} />
                  <Text style={[styles.emptyTitle, { color: colors.navy }]}>No members yet</Text>
                  <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
                    Add club members from the Profile tab
                  </Text>
                </View>
              ) : (
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
              )}

              {/* Guests Section */}
              <View style={styles.section}>
                <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>Guests</Text>
                {guests.length > 0 && (
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
                )}
                <TouchableOpacity
                  style={[styles.addGuestBtn, { borderColor: colors.border, backgroundColor: colors.card }]}
                  onPress={() => setShowAddGuest(true)}
                  activeOpacity={0.8}
                >
                  <Feather name="user-plus" size={16} color={colors.primary} />
                  <Text style={[styles.addGuestText, { color: colors.primary }]}>Add Guest</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>
      )}

      {/* ── HISTORY TAB ── */}
      {activeTab === "history" && (
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
      {activeTab === "record" && (
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
                { borderColor: colors.border, color: colors.navy, backgroundColor: colors.input },
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
                <Text style={[styles.guestCancelText, { color: colors.mutedForeground }]}>Cancel</Text>
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
      <Modal visible={!!viewingSession} animationType="slide" transparent>
        {viewingSession && (
          <View style={styles.viewOverlay}>
            <View style={[styles.viewSheet, { backgroundColor: colors.background, paddingBottom: bottomPad + 16 }]}>
              {/* Header */}
              <View style={[styles.viewHeader, { backgroundColor: SESSION_TYPE_META[viewingSession.sessionType ?? "Regular Meeting"].bg }]}>
                <TouchableOpacity style={styles.viewCloseBtn} onPress={() => setViewingSession(null)}>
                  <Feather name="x" size={20} color={colors.navy} />
                </TouchableOpacity>
                <View style={[styles.viewTypePill, { backgroundColor: SESSION_TYPE_META[viewingSession.sessionType ?? "Regular Meeting"].color }]}>
                  <Feather
                    name={SESSION_TYPE_META[viewingSession.sessionType ?? "Regular Meeting"].icon}
                    size={13}
                    color="#FFF"
                  />
                  <Text style={styles.viewTypePillText}>{viewingSession.sessionType}</Text>
                </View>
                <Text style={[styles.viewDate, { color: colors.navy }]}>
                  {formatDisplayDate(viewingSession.date)}
                </Text>
                {viewingSession.sessionType !== "No Session" && (
                  <Text style={[styles.viewSummary, { color: colors.mutedForeground }]}>
                    {viewingSession.records.filter((r) => r.present).length} of {viewingSession.records.length} members present
                    {viewingSession.guests.length > 0 ? ` · ${viewingSession.guests.length} guest${viewingSession.guests.length !== 1 ? "s" : ""}` : ""}
                  </Text>
                )}
              </View>

              <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
                {viewingSession.sessionType === "No Session" ? (
                  <View style={[styles.noSessionInfo, { backgroundColor: "#F3F4F6", borderColor: "#E5E7EB" }]}>
                    <Feather name="x-circle" size={24} color="#6B7280" />
                    <Text style={[styles.noSessionInfoTitle, { color: "#374151" }]}>No Session Held</Text>
                    {viewingSession.noSessionReason ? (
                      <Text style={[styles.noSessionInfoReason, { color: "#6B7280" }]}>{viewingSession.noSessionReason}</Text>
                    ) : null}
                    {viewingSession.noSessionNote ? (
                      <Text style={[styles.noSessionInfoNote, { color: "#4B5563" }]}>{viewingSession.noSessionNote}</Text>
                    ) : null}
                  </View>
                ) : (
                  <>
                    {/* Present Members */}
                    {viewingSession.records.filter((r) => r.present).length > 0 && (
                      <View style={{ marginBottom: 20 }}>
                        <Text style={[styles.viewGroupLabel, { color: colors.success }]}>
                          Present ({viewingSession.records.filter((r) => r.present).length})
                        </Text>
                        {viewingSession.records
                          .filter((r) => r.present)
                          .map((r) => {
                            const member = members.find((m) => m.id === r.memberId);
                            if (!member) return null;
                            return (
                              <View key={r.memberId} style={[styles.viewMemberRow, { backgroundColor: colors.successLight }]}>
                                <View style={[styles.viewAvatar, { backgroundColor: colors.success }]}>
                                  <Text style={styles.viewAvatarText}>{member.name.charAt(0).toUpperCase()}</Text>
                                </View>
                                <Text style={[styles.viewMemberName, { color: colors.navy }]}>{member.name}</Text>
                                <Feather name="check-circle" size={16} color={colors.success} />
                              </View>
                            );
                          })}
                      </View>
                    )}

                    {/* Absent Members */}
                    {viewingSession.records.filter((r) => !r.present).length > 0 && (
                      <View style={{ marginBottom: 20 }}>
                        <Text style={[styles.viewGroupLabel, { color: colors.destructive }]}>
                          Absent ({viewingSession.records.filter((r) => !r.present).length})
                        </Text>
                        {viewingSession.records
                          .filter((r) => !r.present)
                          .map((r) => {
                            const member = members.find((m) => m.id === r.memberId);
                            if (!member) return null;
                            return (
                              <View key={r.memberId} style={[styles.viewMemberRow, { backgroundColor: "#FEE2E2" }]}>
                                <View style={[styles.viewAvatar, { backgroundColor: colors.destructive }]}>
                                  <Text style={styles.viewAvatarText}>{member.name.charAt(0).toUpperCase()}</Text>
                                </View>
                                <Text style={[styles.viewMemberName, { color: colors.navy }]}>{member.name}</Text>
                                <Feather name="x-circle" size={16} color={colors.destructive} />
                              </View>
                            );
                          })}
                      </View>
                    )}

                    {/* Guests */}
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
              </ScrollView>

              <View style={{ paddingHorizontal: 20 }}>
                <TouchableOpacity
                  style={[styles.editFromViewBtn, { backgroundColor: colors.navy }]}
                  onPress={() => { setViewingSession(null); handleEditSession(viewingSession); }}
                >
                  <Feather name="edit-2" size={16} color="#FFF" />
                  <Text style={styles.editFromViewText}>Edit This Session</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
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

  section: { paddingHorizontal: 20, marginBottom: 4 },
  sectionLabel: { fontSize: 12, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 10 },

  dateScroll: { paddingRight: 20, gap: 10 },
  dateChip: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1.5,
    alignItems: "center",
    minWidth: 76,
    position: "relative",
  },
  dateChipLabel: { fontSize: 14, fontFamily: "Inter_700Bold" },
  dateChipSub: { fontSize: 11, fontFamily: "Inter_400Regular", marginTop: 2 },
  savedDot: { width: 6, height: 6, borderRadius: 3, position: "absolute", top: 6, right: 6 },
  selectedDateLabel: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 10, marginBottom: 16 },

  sessionTypeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 16 },
  sessionTypeChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    width: "47%",
  },
  sessionTypeText: { fontSize: 13, fontFamily: "Inter_600SemiBold", flexShrink: 1 },

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

  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 14,
    gap: 14,
  },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 18, fontFamily: "Inter_700Bold" },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  memberClass: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  statusText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },

  guestList: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 10 },
  guestChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  guestName: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  addGuestBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderStyle: "dashed",
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  addGuestText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },

  empty: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12, paddingTop: 60 },
  emptyTitle: { fontSize: 18, fontFamily: "Inter_600SemiBold" },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", paddingHorizontal: 40 },

  footer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  saveBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 16,
    gap: 10,
  },
  saveBtnText: { color: "#FFF", fontSize: 16, fontFamily: "Inter_600SemiBold" },

  // History
  historyCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
    gap: 14,
  },
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
  viewGroupLabel: { fontSize: 13, fontFamily: "Inter_700Bold", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 10 },
  viewMemberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  viewAvatar: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  viewAvatarText: { color: "#FFF", fontSize: 14, fontFamily: "Inter_700Bold" },
  viewMemberName: { flex: 1, fontSize: 15, fontFamily: "Inter_600SemiBold" },
  noSessionInfo: { borderRadius: 16, borderWidth: 1, padding: 24, alignItems: "center", gap: 10 },
  noSessionInfoTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  noSessionInfoReason: { fontSize: 14, fontFamily: "Inter_500Medium" },
  noSessionInfoNote: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 20 },
  editFromViewBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, paddingVertical: 16, borderRadius: 16 },
  editFromViewText: { color: "#FFF", fontSize: 16, fontFamily: "Inter_600SemiBold" },
});
