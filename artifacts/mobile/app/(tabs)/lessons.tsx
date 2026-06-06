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

import { ProgressRing } from "@/components/ProgressRing";
import { useApp } from "@/context/AppContext";
import { LESSONS } from "@/data/lessons";
import { useColors } from "@/hooks/useColors";
import { ADVENTURER_CLASSES } from "@/types";
import type { AdventurerClass } from "@/types";

const CLASS_COLORS: Record<AdventurerClass, string> = {
  "Little Lamb": "#F87171",
  "Early Bird": "#FB923C",
  "Busy Bee": "#FBBF24",
  "Sunbeam": "#34D399",
  "Builder": "#60A5FA",
  "Helping Hand": "#A78BFA",
};

export default function LessonsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { lessonCompletions, driveFiles } = useApp();
  const driveCount = (driveFiles ?? []).length;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: topPad + 8,
          paddingBottom: bottomPad + 100,
        }}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={[styles.title, { color: colors.navy }]}>Lessons</Text>
            <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
              All classes
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.driveCard, { backgroundColor: "#35A7FF12", borderColor: "#35A7FF40" }]}
          onPress={() => router.push("/drive-files")}
          activeOpacity={0.85}
        >
          <View style={styles.driveCardLeft}>
            <View style={[styles.driveIconBox, { backgroundColor: "#35A7FF20" }]}>
              <Text style={styles.driveIcon}>📁</Text>
            </View>
            <View>
              <Text style={[styles.driveTitle, { color: "#0B132B" }]}>
                Google Drive Files
              </Text>
              <Text style={[styles.driveSubtitle, { color: "#35A7FF" }]}>
                {driveCount > 0
                  ? `${driveCount} file${driveCount !== 1 ? "s" : ""} linked`
                  : "Add your PDF lesson materials"}
              </Text>
            </View>
          </View>
          <Text style={[styles.driveArrow, { color: "#35A7FF" }]}>›</Text>
        </TouchableOpacity>

        <View style={styles.sectionLabel}>
          <Text style={[styles.sectionLabelText, { color: colors.mutedForeground }]}>
            BUILT-IN LESSONS
          </Text>
        </View>

        <View style={styles.grid}>
          {ADVENTURER_CLASSES.map((cls) => {
            const lesson = LESSONS.find((l) => l.adventurerClass === cls);
            if (!lesson) return null;
            const completed = (lessonCompletions[lesson.id] ?? []).length;
            const total = lesson.sections.length;
            const progress = total > 0 ? completed / total : 0;
            const clsColor = CLASS_COLORS[cls];

            return (
              <TouchableOpacity
                key={cls}
                style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
                onPress={() => router.push(`/lesson/${lesson.id}`)}
                activeOpacity={0.85}
              >
                <View style={styles.cardTop}>
                  <View style={[styles.classBadge, { backgroundColor: `${clsColor}20` }]}>
                    <Text style={[styles.classBadgeText, { color: clsColor }]}>{cls}</Text>
                  </View>
                  <ProgressRing
                    size={48}
                    strokeWidth={5}
                    progress={progress}
                    color={clsColor}
                    backgroundColor={`${clsColor}30`}
                  />
                </View>

                <Text style={[styles.lessonTitle, { color: colors.navy }]}>
                  {lesson.title}
                </Text>
                <Text style={[styles.weekLabel, { color: colors.mutedForeground }]}>
                  Week {lesson.weekNumber}
                </Text>

                <View style={styles.cardFooter}>
                  <View style={[styles.progressBg, { backgroundColor: colors.muted }]}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${progress * 100}%`, backgroundColor: clsColor },
                      ]}
                    />
                  </View>
                  <Text style={[styles.progressLabel, { color: colors.mutedForeground }]}>
                    {completed}/{total} sections
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: { fontSize: 28, fontFamily: "Inter_700Bold", lineHeight: 36 },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", marginTop: 4 },
  driveCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 18,
    borderWidth: 1.5,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  driveCardLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  driveIconBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  driveIcon: { fontSize: 24 },
  driveTitle: { fontSize: 15, fontFamily: "Inter_700Bold" },
  driveSubtitle: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  driveArrow: { fontSize: 28, fontFamily: "Inter_400Regular", marginLeft: 8 },
  sectionLabel: { paddingHorizontal: 20, marginBottom: 12 },
  sectionLabelText: { fontSize: 12, fontFamily: "Inter_600SemiBold", letterSpacing: 1 },
  grid: { paddingHorizontal: 20, gap: 16 },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    gap: 10,
  },
  cardTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  classBadge: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 },
  classBadgeText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  lessonTitle: { fontSize: 17, fontFamily: "Inter_700Bold", lineHeight: 24 },
  weekLabel: { fontSize: 13, fontFamily: "Inter_400Regular" },
  cardFooter: { gap: 6 },
  progressBg: { height: 6, borderRadius: 3, overflow: "hidden" },
  progressFill: { height: 6, borderRadius: 3 },
  progressLabel: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
