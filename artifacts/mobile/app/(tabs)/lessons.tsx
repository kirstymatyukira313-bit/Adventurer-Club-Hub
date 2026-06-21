import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
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
import { CURRICULUM_CLASSES } from "@/curriculum";
import { useColors } from "@/hooks/useColors";

const CLASS_FILTER_LABELS: Record<string, string> = {
  "little-lamb":  "Little Lamb",
  "early-bird":   "Early Bird",
  "busy-bee":     "Busy Bee",
  "sunbeam":      "Sunbeam",
  "builder":      "Builder",
  "helping-hand": "Helping Hand",
};

const CLASS_COLORS: Record<string, string> = {
  "little-lamb": "#F87171",
  "early-bird":  "#FB923C",
  "busy-bee":    "#FBBF24",
  "sunbeam":     "#34D399",
  "builder":     "#60A5FA",
  "helping-hand":"#A78BFA",
};

export default function LessonsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { lessonCompletions } = useApp();

  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [expandedClasses, setExpandedClasses] = useState<Set<string>>(
    new Set(["little-lamb"])
  );

  const displayedClasses = selectedClassId
    ? CURRICULUM_CLASSES.filter((c) => c.id === selectedClassId)
    : CURRICULUM_CLASSES;

  const toggleClass = (classId: string) => {
    setExpandedClasses((prev) => {
      const next = new Set(prev);
      if (next.has(classId)) {
        next.delete(classId);
      } else {
        next.add(classId);
      }
      return next;
    });
  };

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
              {selectedClassId ? (CLASS_FILTER_LABELS[selectedClassId] ?? "Class") : "All classes"}
            </Text>
          </View>
        </View>

        {/* Class filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
          style={styles.filterScroll}
        >
          <TouchableOpacity
            style={[
              styles.filterChip,
              selectedClassId === null && { backgroundColor: colors.navy, borderColor: colors.navy },
              selectedClassId !== null && { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() => setSelectedClassId(null)}
            activeOpacity={0.8}
          >
            <Text style={[styles.filterChipText, { color: selectedClassId === null ? "#FFF" : colors.mutedForeground }]}>
              All
            </Text>
          </TouchableOpacity>
          {CURRICULUM_CLASSES.map((cls) => {
            const clsColor = CLASS_COLORS[cls.id] ?? colors.primary;
            const isActive = selectedClassId === cls.id;
            return (
              <TouchableOpacity
                key={cls.id}
                style={[
                  styles.filterChip,
                  isActive
                    ? { backgroundColor: clsColor, borderColor: clsColor }
                    : { backgroundColor: colors.card, borderColor: colors.border },
                ]}
                onPress={() => {
                  setSelectedClassId(cls.id);
                  setExpandedClasses(new Set([cls.id]));
                }}
                activeOpacity={0.8}
              >
                <Text style={[styles.filterChipText, { color: isActive ? "#FFF" : colors.mutedForeground }]}>
                  {CLASS_FILTER_LABELS[cls.id] ?? cls.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.sectionLabel}>
          <Text style={[styles.sectionLabelText, { color: colors.mutedForeground }]}>
            CURRICULUM
          </Text>
        </View>

        <View style={styles.classList}>
          {displayedClasses.map((cls) => {
            const clsColor = CLASS_COLORS[cls.id] ?? colors.primary;
            const isExpanded = expandedClasses.has(cls.id);

            const completedLessons = cls.lessons.filter((lesson) => {
              const done = (lessonCompletions[lesson.id] ?? []).length;
              return done === lesson.sections.length && lesson.sections.length > 0;
            }).length;
            const totalLessons = cls.lessons.length;
            const classProgress = totalLessons > 0 ? completedLessons / totalLessons : 0;

            return (
              <View
                key={cls.id}
                style={[
                  styles.classGroup,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
              >
                <TouchableOpacity
                  style={styles.classHeader}
                  onPress={() => toggleClass(cls.id)}
                  activeOpacity={0.85}
                >
                  <View
                    style={[styles.classColorDot, { backgroundColor: clsColor }]}
                  />
                  <View style={styles.classHeaderText}>
                    <Text style={[styles.className, { color: colors.navy }]}>
                      {cls.name}
                    </Text>
                    <Text
                      style={[styles.classAgeRange, { color: colors.mutedForeground }]}
                    >
                      {cls.ageRange} · {totalLessons} lesson{totalLessons !== 1 ? "s" : ""}
                    </Text>
                  </View>
                  <ProgressRing
                    size={40}
                    strokeWidth={4}
                    progress={classProgress}
                    color={clsColor}
                    backgroundColor={`${clsColor}30`}
                  />
                  <Feather
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={18}
                    color={colors.mutedForeground}
                    style={{ marginLeft: 6 }}
                  />
                </TouchableOpacity>

                {isExpanded && (
                  <View style={[styles.lessonList, { borderTopColor: colors.border }]}>
                    {cls.lessons.map((lesson, index) => {
                      const completedSections = (lessonCompletions[lesson.id] ?? []).length;
                      const totalSections = lesson.sections.length;
                      const lessonProgress =
                        totalSections > 0 ? completedSections / totalSections : 0;
                      const isComplete =
                        completedSections === totalSections && totalSections > 0;

                      return (
                        <TouchableOpacity
                          key={lesson.id}
                          style={[
                            styles.lessonRow,
                            {
                              borderTopWidth: index === 0 ? 0 : 1,
                              borderTopColor: colors.border,
                            },
                          ]}
                          onPress={() => router.push(`/lesson/${lesson.id}`)}
                          activeOpacity={0.75}
                        >
                          <View
                            style={[
                              styles.lessonNumberBadge,
                              {
                                backgroundColor: isComplete
                                  ? clsColor
                                  : `${clsColor}20`,
                              },
                            ]}
                          >
                            {isComplete ? (
                              <Feather name="check" size={13} color="#FFF" />
                            ) : (
                              <Text
                                style={[
                                  styles.lessonNumber,
                                  { color: clsColor },
                                ]}
                              >
                                {lesson.weekNumber}
                              </Text>
                            )}
                          </View>

                          <View style={styles.lessonRowText}>
                            <Text
                              style={[styles.lessonTitle, { color: colors.navy }]}
                              numberOfLines={2}
                            >
                              {lesson.title}
                            </Text>
                            <View style={styles.lessonMeta}>
                              <View
                                style={[
                                  styles.progressBar,
                                  { backgroundColor: `${clsColor}25` },
                                ]}
                              >
                                <View
                                  style={[
                                    styles.progressFill,
                                    {
                                      width: `${lessonProgress * 100}%`,
                                      backgroundColor: clsColor,
                                    },
                                  ]}
                                />
                              </View>
                              <Text
                                style={[
                                  styles.lessonSectionCount,
                                  { color: colors.mutedForeground },
                                ]}
                              >
                                {completedSections}/{totalSections}
                              </Text>
                            </View>
                          </View>

                          <Feather
                            name="chevron-right"
                            size={16}
                            color={colors.mutedForeground}
                          />
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
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
  filterScroll: { marginBottom: 16 },
  filterRow: { paddingHorizontal: 20, gap: 8, flexDirection: "row", alignItems: "center" },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  filterChipText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  sectionLabel: { paddingHorizontal: 20, marginBottom: 12 },
  sectionLabelText: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 1,
  },
  classList: { paddingHorizontal: 20, gap: 12 },
  classGroup: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  classHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  classColorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  classHeaderText: { flex: 1 },
  className: { fontSize: 16, fontFamily: "Inter_700Bold" },
  classAgeRange: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  lessonList: { borderTopWidth: 1 },
  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  lessonNumberBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  lessonNumber: { fontSize: 13, fontFamily: "Inter_700Bold" },
  lessonRowText: { flex: 1, gap: 6 },
  lessonTitle: { fontSize: 14, fontFamily: "Inter_600SemiBold", lineHeight: 20 },
  lessonMeta: { flexDirection: "row", alignItems: "center", gap: 8 },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: { height: 4, borderRadius: 2 },
  lessonSectionCount: { fontSize: 12, fontFamily: "Inter_400Regular" },
});
