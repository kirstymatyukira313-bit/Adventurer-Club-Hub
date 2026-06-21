import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { JarProgress } from "@/components/JarProgress";
import { useApp } from "@/context/AppContext";
import { LESSONS } from "@/data/lessons";
import { useColors } from "@/hooks/useColors";

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function getGreeting(name: string): string {
  const hour = new Date().getHours();
  const first = name.split(" ")[0] ?? name;
  if (hour < 12) return `Good Morning, ${first}`;
  if (hour < 17) return `Good Afternoon, ${first}`;
  return `Good Evening, ${first}`;
}

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0] ?? "";
}

function formatSessionDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function buildMonthsArray(count: number) {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (count - 1 - i), 1);
    return {
      label: `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`,
      isCurrentMonth: i === count - 1,
    };
  });
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { club, members, lessonCompletions, attendance, subscriptionTarget, subscriptionAmount } = useApp();

  // ── Lesson context-awareness ──────────────────────────────────────────
  const hasAnyProgress = Object.values(lessonCompletions).some((secs) => secs.length > 0);
  const featuredLesson = LESSONS[0];
  const completedSections = featuredLesson
    ? (lessonCompletions[featuredLesson.id] ?? []).length
    : 0;
  const totalSections = featuredLesson?.sections.length ?? 5;
  const lessonProgress = totalSections > 0 ? completedSections / totalSections : 0;

  // ── Attendance history navigation ─────────────────────────────────────
  const sortedAttendance = useMemo(
    () => [...attendance].sort((a, b) => b.date.localeCompare(a.date)),
    [attendance]
  );
  const [attendanceIdx, setAttendanceIdx] = useState(0);

  const today = getTodayDate();
  const todayAttendance = attendance.find((a) => a.date === today);
  const livePresentCount = todayAttendance
    ? todayAttendance.records.filter((r) => r.present).length
    : members.length;
  const liveAbsentCount = todayAttendance
    ? todayAttendance.records.filter((r) => !r.present).length
    : 0;

  const currentSession = sortedAttendance[attendanceIdx];
  const sessionPresentCount = currentSession
    ? currentSession.records.filter((r) => r.present).length
    : livePresentCount;
  const sessionAbsentCount = currentSession
    ? currentSession.records.filter((r) => !r.present).length
    : liveAbsentCount;
  const sessionTotalCount = currentSession
    ? currentSession.records.length
    : members.length;
  const sessionDateLabel = currentSession ? formatSessionDate(currentSession.date) : "Today";
  const hasAttendancePrev = attendanceIdx < sortedAttendance.length - 1;
  const hasAttendanceNext = attendanceIdx > 0;

  // ── Subscription month navigation ─────────────────────────────────────
  const monthsArray = useMemo(() => buildMonthsArray(6), []);
  const [subMonthIdx, setSubMonthIdx] = useState(monthsArray.length - 1);

  const currentSubMonth = monthsArray[subMonthIdx];
  const isCurrentSubMonth = currentSubMonth?.isCurrentMonth ?? true;

  const paidMembers = members.filter((m) => m.hasPaid).length;
  const totalCollected = paidMembers * subscriptionAmount;
  const unpaidCount = members.filter((m) => !m.hasPaid).length;
  const fundProgress = subscriptionTarget > 0 ? Math.min(1, totalCollected / subscriptionTarget) : 0;
  const fundPercent = Math.round(fundProgress * 100);

  const displayCollected = isCurrentSubMonth ? totalCollected : 0;
  const hasSubPrev = subMonthIdx > 0;
  const hasSubNext = subMonthIdx < monthsArray.length - 1;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: topPad + 8,
          paddingBottom: bottomPad + 100,
        }}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: colors.navy }]}>
              {getGreeting(club.leaderName || "Leader")}
            </Text>
            <Text style={[styles.clubInfo, { color: colors.mutedForeground }]}>
              {club.name ? `${club.name} · ${club.churchName}` : "Set up your club to get started"}
            </Text>
          </View>
          <View style={[styles.avatarCircle, { backgroundColor: colors.primary }]}>
            <Text style={styles.avatarText}>
              {(club.leaderName || "L")[0]?.toUpperCase() ?? "L"}
            </Text>
          </View>
        </View>

        <View style={styles.cards}>
          {/* Lesson Card — context-aware */}
          {hasAnyProgress ? (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
              onPress={() => featuredLesson && router.push(`/lesson/${featuredLesson.id}`)}
              activeOpacity={0.85}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.cardIcon, { backgroundColor: colors.blueLight }]}>
                  <Feather name="book-open" size={18} color={colors.primary} />
                </View>
                <Text style={[styles.cardLabel, { color: colors.mutedForeground }]}>
                  Today's Lesson
                </Text>
              </View>
              {featuredLesson ? (
                <>
                  <Text style={[styles.lessonClass, { color: colors.primary }]}>
                    {featuredLesson.adventurerClass}
                  </Text>
                  <Text style={[styles.lessonTitle, { color: colors.navy }]}>
                    {featuredLesson.title}
                  </Text>
                  <View style={styles.progressRow}>
                    <View style={[styles.progressBg, { backgroundColor: colors.muted }]}>
                      <View
                        style={[
                          styles.progressFill,
                          { width: `${lessonProgress * 100}%`, backgroundColor: colors.primary },
                        ]}
                      />
                    </View>
                    <Text style={[styles.progressText, { color: colors.mutedForeground }]}>
                      {completedSections}/{totalSections}
                    </Text>
                  </View>
                </>
              ) : (
                <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
                  No lessons yet
                </Text>
              )}
              <View style={[styles.ctaRow, { borderTopColor: colors.border }]}>
                <Text style={[styles.ctaLink, { color: colors.primary }]}>Open Lesson</Text>
                <Feather name="arrow-right" size={16} color={colors.primary} />
              </View>
            </TouchableOpacity>
          ) : (
            <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.cardHeader}>
                <View style={[styles.cardIcon, { backgroundColor: colors.blueLight }]}>
                  <Feather name="book-open" size={18} color={colors.primary} />
                </View>
                <Text style={[styles.cardLabel, { color: colors.mutedForeground }]}>
                  Lessons
                </Text>
              </View>
              <Text style={[styles.readyTitle, { color: colors.navy }]}>Ready to Begin?</Text>
              <Text style={[styles.readySub, { color: colors.mutedForeground }]}>
                Select a class and start your first lesson.
              </Text>
              <TouchableOpacity
                style={[styles.browseLessonsBtn, { backgroundColor: colors.primary }]}
                onPress={() => router.push("/(tabs)/lessons")}
                activeOpacity={0.85}
              >
                <Feather name="book-open" size={16} color="#FFF" />
                <Text style={styles.browseLessonsBtnText}>Browse Lessons</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Attendance Snapshot */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.cardHeader}>
              <View style={[styles.cardIcon, { backgroundColor: "#D1FAE5" }]}>
                <Feather name="check-circle" size={18} color={colors.success} />
              </View>
              <Text style={[styles.cardLabel, { color: colors.mutedForeground }]}>
                Attendance Snapshot
              </Text>
            </View>

            <View style={styles.snapshotNavRow}>
              <TouchableOpacity
                onPress={() => hasAttendancePrev && setAttendanceIdx(attendanceIdx + 1)}
                style={[styles.navBtn, { opacity: hasAttendancePrev ? 1 : 0.3 }]}
                disabled={!hasAttendancePrev}
              >
                <Feather name="chevron-left" size={18} color={colors.navy} />
                <Text style={[styles.navBtnText, { color: colors.navy }]}>Prev</Text>
              </TouchableOpacity>
              <View style={styles.snapshotDateWrap}>
                <Text style={[styles.snapshotDateText, { color: colors.navy }]} numberOfLines={1}>
                  {sessionDateLabel}
                </Text>
                {currentSession?.sessionType ? (
                  <Text style={[styles.snapshotSessionType, { color: colors.mutedForeground }]}>
                    {currentSession.sessionType}
                  </Text>
                ) : null}
              </View>
              <TouchableOpacity
                onPress={() => hasAttendanceNext && setAttendanceIdx(attendanceIdx - 1)}
                style={[styles.navBtn, { opacity: hasAttendanceNext ? 1 : 0.3 }]}
                disabled={!hasAttendanceNext}
              >
                <Text style={[styles.navBtnText, { color: colors.navy }]}>Next</Text>
                <Feather name="chevron-right" size={18} color={colors.navy} />
              </TouchableOpacity>
            </View>

            <View style={styles.attendanceRow}>
              <View style={[styles.attendanceStat, { backgroundColor: colors.successLight }]}>
                <Text style={[styles.attendanceNum, { color: colors.success }]}>{sessionPresentCount}</Text>
                <Text style={[styles.attendanceLabel, { color: colors.success }]}>Present</Text>
              </View>
              <View style={[styles.attendanceStat, { backgroundColor: "#FEE2E2" }]}>
                <Text style={[styles.attendanceNum, { color: colors.destructive }]}>{sessionAbsentCount}</Text>
                <Text style={[styles.attendanceLabel, { color: colors.destructive }]}>Absent</Text>
              </View>
            </View>
            {sessionTotalCount > 0 && (
              <Text style={[styles.sessionTotalText, { color: colors.mutedForeground }]}>
                {sessionPresentCount} / {sessionTotalCount} present
              </Text>
            )}
            <TouchableOpacity
              style={[styles.ctaRow, { borderTopColor: colors.border }]}
              onPress={() => router.push("/(tabs)/attendance")}
              activeOpacity={0.85}
            >
              <Text style={[styles.ctaLink, { color: colors.primary }]}>Take Attendance</Text>
              <Feather name="arrow-right" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {/* Subscriptions Progress */}
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.cardHeader}>
              <View style={[styles.cardIcon, { backgroundColor: "#FEF3C7" }]}>
                <Feather name="dollar-sign" size={18} color={colors.warning} />
              </View>
              <Text style={[styles.cardLabel, { color: colors.mutedForeground }]}>
                Subscriptions Progress
              </Text>
            </View>

            <View style={styles.snapshotNavRow}>
              <TouchableOpacity
                onPress={() => hasSubPrev && setSubMonthIdx(subMonthIdx - 1)}
                style={[styles.navBtn, { opacity: hasSubPrev ? 1 : 0.3 }]}
                disabled={!hasSubPrev}
              >
                <Feather name="chevron-left" size={18} color={colors.navy} />
                <Text style={[styles.navBtnText, { color: colors.navy }]}>Prev</Text>
              </TouchableOpacity>
              <Text style={[styles.snapshotDateText, { color: colors.navy }]}>
                {currentSubMonth?.label ?? ""}
              </Text>
              <TouchableOpacity
                onPress={() => hasSubNext && setSubMonthIdx(subMonthIdx + 1)}
                style={[styles.navBtn, { opacity: hasSubNext ? 1 : 0.3 }]}
                disabled={!hasSubNext}
              >
                <Text style={[styles.navBtnText, { color: colors.navy }]}>Next</Text>
                <Feather name="chevron-right" size={18} color={colors.navy} />
              </TouchableOpacity>
            </View>

            <View style={styles.fundsRow}>
              <View style={styles.fundsNumbers}>
                <View>
                  <Text style={[styles.fundsAmount, { color: colors.navy }]}>
                    ${displayCollected}
                  </Text>
                  <Text style={[styles.fundsLabel, { color: colors.mutedForeground }]}>
                    Collected
                  </Text>
                </View>
                {isCurrentSubMonth && (
                  <View>
                    <Text style={[styles.fundsTarget, { color: colors.mutedForeground }]}>
                      ${subscriptionTarget}
                    </Text>
                    <Text style={[styles.fundsLabel, { color: colors.mutedForeground }]}>
                      Target
                    </Text>
                  </View>
                )}
                {isCurrentSubMonth && (
                  <Text style={[styles.fundsPercent, { color: colors.primary }]}>
                    {fundPercent}%
                  </Text>
                )}
              </View>
              <JarProgress
                progress={isCurrentSubMonth ? fundProgress : 0}
                width={64}
                height={80}
              />
            </View>
            {isCurrentSubMonth && unpaidCount > 0 && (
              <View style={[styles.unpaidBadge, { backgroundColor: "#FEF3C7" }]}>
                <Text style={[styles.unpaidText, { color: colors.warning }]}>
                  {unpaidCount} member{unpaidCount !== 1 ? "s" : ""} yet to pay
                </Text>
              </View>
            )}
            {!isCurrentSubMonth && (
              <Text style={[styles.noHistoryText, { color: colors.mutedForeground }]}>
                Historical tracking begins from this month.
              </Text>
            )}
            <TouchableOpacity
              style={[styles.ctaRow, { borderTopColor: colors.border }]}
              onPress={() => router.push("/(tabs)/funds")}
              activeOpacity={0.85}
            >
              <Text style={[styles.ctaLink, { color: colors.primary }]}>View Funds</Text>
              <Feather name="arrow-right" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  greeting: { fontSize: 22, fontFamily: "Inter_700Bold", lineHeight: 30 },
  clubInfo: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { color: "#FFF", fontSize: 18, fontFamily: "Inter_700Bold" },
  cards: { paddingHorizontal: 20, gap: 16 },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 16 },
  cardIcon: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  cardLabel: { fontSize: 13, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  lessonClass: { fontSize: 13, fontFamily: "Inter_600SemiBold", marginBottom: 4 },
  lessonTitle: { fontSize: 18, fontFamily: "Inter_700Bold", lineHeight: 26, marginBottom: 12 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 4 },
  progressBg: { flex: 1, height: 8, borderRadius: 4, overflow: "hidden" },
  progressFill: { height: 8, borderRadius: 4 },
  progressText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  emptyText: { fontSize: 15, fontFamily: "Inter_400Regular", marginBottom: 4 },
  readyTitle: { fontSize: 20, fontFamily: "Inter_700Bold", marginBottom: 6 },
  readySub: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 20, marginBottom: 16 },
  browseLessonsBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    marginBottom: 4,
  },
  browseLessonsBtnText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },
  ctaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
    borderTopWidth: 1,
    paddingTop: 14,
    marginTop: 14,
  },
  ctaLink: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  snapshotNavRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  navBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  navBtnText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  snapshotDateWrap: { flex: 1, alignItems: "center" },
  snapshotDateText: { fontSize: 14, fontFamily: "Inter_700Bold", textAlign: "center" },
  snapshotSessionType: { fontSize: 12, fontFamily: "Inter_400Regular", textAlign: "center", marginTop: 2 },
  attendanceRow: { flexDirection: "row", gap: 12, marginBottom: 8 },
  attendanceStat: { flex: 1, borderRadius: 12, padding: 16, alignItems: "center" },
  attendanceNum: { fontSize: 28, fontFamily: "Inter_700Bold" },
  attendanceLabel: { fontSize: 13, fontFamily: "Inter_500Medium", marginTop: 2 },
  sessionTotalText: { fontSize: 13, fontFamily: "Inter_400Regular", textAlign: "center", marginBottom: 4 },
  fundsRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  fundsNumbers: { gap: 12 },
  fundsAmount: { fontSize: 28, fontFamily: "Inter_700Bold" },
  fundsTarget: { fontSize: 16, fontFamily: "Inter_500Medium" },
  fundsLabel: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 2 },
  fundsPercent: { fontSize: 20, fontFamily: "Inter_700Bold" },
  unpaidBadge: { borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4 },
  unpaidText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  noHistoryText: { fontSize: 13, fontFamily: "Inter_400Regular", textAlign: "center", marginBottom: 4, fontStyle: "italic" },
});
