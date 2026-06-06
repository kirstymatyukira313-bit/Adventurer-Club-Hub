import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
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

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { club, members, lessonCompletions, attendance, subscriptionTarget, subscriptionAmount } = useApp();

  const today = getTodayDate();
  const todayAttendance = attendance.find((a) => a.date === today);
  const presentCount = todayAttendance
    ? todayAttendance.records.filter((r) => r.present).length
    : members.length;
  const absentCount = todayAttendance
    ? todayAttendance.records.filter((r) => !r.present).length
    : 0;

  const featuredLesson = LESSONS[0];
  const completedSections = featuredLesson
    ? (lessonCompletions[featuredLesson.id] ?? []).length
    : 0;
  const totalSections = featuredLesson?.sections.length ?? 5;
  const lessonProgress = totalSections > 0 ? completedSections / totalSections : 0;

  const paidMembers = members.filter((m) => m.hasPaid).length;
  const totalCollected = paidMembers * subscriptionAmount;
  const unpaidCount = members.filter((m) => !m.hasPaid).length;
  const fundProgress = subscriptionTarget > 0 ? Math.min(1, totalCollected / subscriptionTarget) : 0;
  const fundPercent = Math.round(fundProgress * 100);

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
          {/* Today's Lesson */}
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
                        {
                          width: `${lessonProgress * 100}%`,
                          backgroundColor: colors.primary,
                        },
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

          {/* Attendance Snapshot */}
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={() => router.push("/(tabs)/attendance")}
            activeOpacity={0.85}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIcon, { backgroundColor: "#D1FAE5" }]}>
                <Feather name="check-circle" size={18} color={colors.success} />
              </View>
              <Text style={[styles.cardLabel, { color: colors.mutedForeground }]}>
                Attendance Snapshot
              </Text>
            </View>
            <View style={styles.attendanceRow}>
              <View style={[styles.attendanceStat, { backgroundColor: colors.successLight }]}>
                <Text style={[styles.attendanceNum, { color: colors.success }]}>{presentCount}</Text>
                <Text style={[styles.attendanceLabel, { color: colors.success }]}>Present</Text>
              </View>
              <View style={[styles.attendanceStat, { backgroundColor: "#FEE2E2" }]}>
                <Text style={[styles.attendanceNum, { color: colors.destructive }]}>{absentCount}</Text>
                <Text style={[styles.attendanceLabel, { color: colors.destructive }]}>Absent</Text>
              </View>
            </View>
            <View style={[styles.ctaRow, { borderTopColor: colors.border }]}>
              <Text style={[styles.ctaLink, { color: colors.primary }]}>Take Attendance</Text>
              <Feather name="arrow-right" size={16} color={colors.primary} />
            </View>
          </TouchableOpacity>

          {/* Subscriptions Progress */}
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={() => router.push("/(tabs)/funds")}
            activeOpacity={0.85}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.cardIcon, { backgroundColor: "#FEF3C7" }]}>
                <Feather name="dollar-sign" size={18} color={colors.warning} />
              </View>
              <Text style={[styles.cardLabel, { color: colors.mutedForeground }]}>
                Subscriptions Progress
              </Text>
            </View>
            <View style={styles.fundsRow}>
              <View style={styles.fundsNumbers}>
                <View>
                  <Text style={[styles.fundsAmount, { color: colors.navy }]}>
                    ${totalCollected}
                  </Text>
                  <Text style={[styles.fundsLabel, { color: colors.mutedForeground }]}>
                    Collected
                  </Text>
                </View>
                <View>
                  <Text style={[styles.fundsTarget, { color: colors.mutedForeground }]}>
                    ${subscriptionTarget}
                  </Text>
                  <Text style={[styles.fundsLabel, { color: colors.mutedForeground }]}>
                    Target
                  </Text>
                </View>
                <Text style={[styles.fundsPercent, { color: colors.primary }]}>
                  {fundPercent}%
                </Text>
              </View>
              <JarProgress progress={fundProgress} width={64} height={80} />
            </View>
            {unpaidCount > 0 && (
              <View style={[styles.unpaidBadge, { backgroundColor: "#FEF3C7" }]}>
                <Text style={[styles.unpaidText, { color: colors.warning }]}>
                  {unpaidCount} member{unpaidCount !== 1 ? "s" : ""} yet to pay
                </Text>
              </View>
            )}
            <View style={[styles.ctaRow, { borderTopColor: colors.border }]}>
              <Text style={[styles.ctaLink, { color: colors.primary }]}>View Funds</Text>
              <Feather name="arrow-right" size={16} color={colors.primary} />
            </View>
          </TouchableOpacity>
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
  attendanceRow: { flexDirection: "row", gap: 12, marginBottom: 4 },
  attendanceStat: { flex: 1, borderRadius: 12, padding: 16, alignItems: "center" },
  attendanceNum: { fontSize: 28, fontFamily: "Inter_700Bold" },
  attendanceLabel: { fontSize: 13, fontFamily: "Inter_500Medium", marginTop: 2 },
  fundsRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
  fundsNumbers: { gap: 12 },
  fundsAmount: { fontSize: 28, fontFamily: "Inter_700Bold" },
  fundsTarget: { fontSize: 16, fontFamily: "Inter_500Medium" },
  fundsLabel: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 2 },
  fundsPercent: { fontSize: 20, fontFamily: "Inter_700Bold" },
  unpaidBadge: { borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4 },
  unpaidText: { fontSize: 13, fontFamily: "Inter_500Medium" },
});
