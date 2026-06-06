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
  const { lessonCompletions } = useApp();

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
          <Text style={[styles.title, { color: colors.navy }]}>Lessons</Text>
          <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
            All classes
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
                  <View
                    style={[
                      styles.classBadge,
                      { backgroundColor: `${clsColor}20` },
                    ]}
                  >
                    <Text style={[styles.classBadgeText, { color: clsColor }]}>
                      {cls}
                    </Text>
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
  headerRow: { paddingHorizontal: 20, marginBottom: 20 },
  title: { fontSize: 28, fontFamily: "Inter_700Bold", lineHeight: 36 },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", marginTop: 4 },
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
  classBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  classBadgeText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  lessonTitle: { fontSize: 17, fontFamily: "Inter_700Bold", lineHeight: 24 },
  weekLabel: { fontSize: 13, fontFamily: "Inter_400Regular" },
  cardFooter: { gap: 6 },
  progressBg: { height: 6, borderRadius: 3, overflow: "hidden" },
  progressFill: { height: 6, borderRadius: 3 },
  progressLabel: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
