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

export default function CurriculumScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const [selectedClass, setSelectedClass] = useState<AdventurerClass>("Little Lamb");

  const classLessons = LESSONS.filter((l) => l.adventurerClass === selectedClass);
  const clsColor = CLASS_COLORS[selectedClass];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomPad + 24 }}
      >
        <View style={[styles.header, { paddingTop: topPad + 8 }]}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Feather name="arrow-left" size={22} color={colors.navy} />
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.navy }]}>Curriculum Planning</Text>
        </View>

        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          View and plan lesson sequences for each class
        </Text>

        {/* Class selector */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.classScroll}>
          <View style={styles.classRow}>
            {ADVENTURER_CLASSES.map((cls) => {
              const isSelected = cls === selectedClass;
              const clr = CLASS_COLORS[cls];
              return (
                <TouchableOpacity
                  key={cls}
                  style={[
                    styles.classChip,
                    {
                      backgroundColor: isSelected ? clr : `${clr}15`,
                      borderColor: isSelected ? clr : "transparent",
                    },
                  ]}
                  onPress={() => setSelectedClass(cls)}
                >
                  <Text
                    style={[
                      styles.classChipText,
                      { color: isSelected ? "#FFF" : clr },
                    ]}
                  >
                    {cls}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Current Curriculum Header */}
        <View style={styles.curriculumHeader}>
          <View style={[styles.classDot, { backgroundColor: clsColor }]} />
          <View>
            <Text style={[styles.curriculumTitle, { color: colors.navy }]}>
              {selectedClass}
            </Text>
            <Text style={[styles.curriculumSub, { color: colors.mutedForeground }]}>
              {classLessons.length} lesson{classLessons.length !== 1 ? "s" : ""} planned
            </Text>
          </View>
        </View>

        {/* Weekly Lesson Sequence */}
        <View style={styles.sequenceList}>
          {classLessons.map((lesson, index) => (
            <View key={lesson.id} style={styles.lessonItem}>
              <View style={styles.timeline}>
                <View style={[styles.timelineDot, { backgroundColor: clsColor }]} />
                {index < classLessons.length - 1 && (
                  <View style={[styles.timelineLine, { backgroundColor: `${clsColor}40` }]} />
                )}
              </View>
              <TouchableOpacity
                style={[styles.lessonCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                onPress={() => router.push(`/lesson/${lesson.id}`)}
                activeOpacity={0.85}
              >
                <View style={styles.lessonTop}>
                  <View style={[styles.weekBadge, { backgroundColor: `${clsColor}20` }]}>
                    <Text style={[styles.weekText, { color: clsColor }]}>
                      Week {lesson.weekNumber}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.moveBtn}>
                    <Feather name="more-vertical" size={18} color={colors.mutedForeground} />
                  </TouchableOpacity>
                </View>
                <Text style={[styles.lessonTitle, { color: colors.navy }]}>
                  {lesson.title}
                </Text>
                <Text style={[styles.lessonObj, { color: colors.mutedForeground }]}>
                  {lesson.sections.length} sections · {lesson.memoryVerseRef}
                </Text>
                <View style={styles.lessonSections}>
                  {lesson.sections.map((s) => (
                    <View
                      key={s.id}
                      style={[styles.sectionDot, { backgroundColor: `${clsColor}60` }]}
                    />
                  ))}
                </View>
              </TouchableOpacity>
            </View>
          ))}

          {classLessons.length === 0 && (
            <View style={styles.empty}>
              <Feather name="calendar" size={36} color={colors.border} />
              <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
                No lessons planned for this class yet
              </Text>
            </View>
          )}
        </View>

        <View style={[styles.infoBox, { backgroundColor: colors.blueLight, borderColor: colors.border, marginHorizontal: 20 }]}>
          <Feather name="info" size={16} color={colors.primary} />
          <Text style={[styles.infoText, { color: colors.primary }]}>
            Lesson reordering and custom sequences will be available in the next update.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 14, paddingHorizontal: 20, paddingBottom: 8 },
  backBtn: { width: 40, height: 40, alignItems: "flex-start", justifyContent: "center" },
  title: { fontSize: 22, fontFamily: "Inter_700Bold" },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", paddingHorizontal: 20, marginBottom: 20 },
  classScroll: { marginBottom: 20 },
  classRow: { flexDirection: "row", gap: 10, paddingHorizontal: 20 },
  classChip: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 24, borderWidth: 2 },
  classChipText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  curriculumHeader: { flexDirection: "row", alignItems: "center", gap: 14, paddingHorizontal: 20, marginBottom: 20 },
  classDot: { width: 12, height: 12, borderRadius: 6 },
  curriculumTitle: { fontSize: 20, fontFamily: "Inter_700Bold" },
  curriculumSub: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  sequenceList: { paddingHorizontal: 20, gap: 0 },
  lessonItem: { flexDirection: "row", gap: 12, marginBottom: 0 },
  timeline: { width: 20, alignItems: "center" },
  timelineDot: { width: 12, height: 12, borderRadius: 6, marginTop: 20 },
  timelineLine: { flex: 1, width: 2, marginTop: 4 },
  lessonCard: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
    gap: 8,
  },
  lessonTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  weekBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  weekText: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  moveBtn: { padding: 4 },
  lessonTitle: { fontSize: 16, fontFamily: "Inter_700Bold", lineHeight: 22 },
  lessonObj: { fontSize: 13, fontFamily: "Inter_400Regular" },
  lessonSections: { flexDirection: "row", gap: 4 },
  sectionDot: { width: 8, height: 8, borderRadius: 4 },
  empty: { alignItems: "center", gap: 12, paddingVertical: 40 },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center" },
  infoBox: { flexDirection: "row", gap: 10, padding: 14, borderRadius: 12, borderWidth: 1, marginTop: 12, alignItems: "flex-start" },
  infoText: { fontSize: 13, fontFamily: "Inter_400Regular", flex: 1, lineHeight: 20 },
});
