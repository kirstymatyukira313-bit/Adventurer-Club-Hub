import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { getLessonById } from "@/data/lessons";
import { useColors } from "@/hooks/useColors";
import type { LessonSection } from "@/types";

const SECTION_ICONS: Record<string, keyof typeof Feather.glyphMap> = {
  introduction: "sunrise",
  bible_story: "book",
  activity: "zap",
  craft: "scissors",
  closing: "sunset",
};

const SECTION_COLORS: Record<string, string> = {
  introduction: "#60A5FA",
  bible_story: "#A78BFA",
  activity: "#34D399",
  craft: "#FB923C",
  closing: "#F87171",
};

export default function LessonDetailScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lessonCompletions, markSectionComplete, unmarkSectionComplete } = useApp();

  const lesson = getLessonById(id ?? "");
  const completedIds = lesson ? (lessonCompletions[lesson.id] ?? []) : [];
  const [expandedSection, setExpandedSection] = useState<string | null>(
    lesson?.sections[0]?.id ?? null
  );

  if (!lesson) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: colors.mutedForeground }}>Lesson not found</Text>
      </View>
    );
  }

  const completedCount = completedIds.length;
  const totalCount = lesson.sections.length;
  const progress = totalCount > 0 ? completedCount / totalCount : 0;

  const toggleSection = (sectionId: string) => {
    Haptics.selectionAsync();
    if (completedIds.includes(sectionId)) {
      unmarkSectionComplete(lesson.id, sectionId);
    } else {
      markSectionComplete(lesson.id, sectionId);
      if (completedCount + 1 === totalCount) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    }
  };

  const renderSection = (section: LessonSection) => {
    const isCompleted = completedIds.includes(section.id);
    const isExpanded = expandedSection === section.id;
    const sectionColor = SECTION_COLORS[section.type] ?? colors.primary;
    const sectionIcon = SECTION_ICONS[section.type] ?? "circle";

    return (
      <View
        key={section.id}
        style={[
          styles.sectionCard,
          {
            backgroundColor: colors.card,
            borderColor: isCompleted ? sectionColor : colors.border,
            borderLeftWidth: 4,
            borderLeftColor: sectionColor,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => setExpandedSection(isExpanded ? null : section.id)}
          activeOpacity={0.8}
        >
          <View style={[styles.sectionIcon, { backgroundColor: `${sectionColor}20` }]}>
            <Feather name={sectionIcon} size={16} color={sectionColor} />
          </View>
          <View style={styles.sectionMeta}>
            <Text style={[styles.sectionTitle, { color: colors.navy }]}>
              {section.title}
            </Text>
            <Text style={[styles.sectionDuration, { color: colors.mutedForeground }]}>
              {section.duration}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.sectionCheck,
              {
                backgroundColor: isCompleted ? sectionColor : "transparent",
                borderColor: isCompleted ? sectionColor : colors.border,
              },
            ]}
            onPress={() => toggleSection(section.id)}
          >
            {isCompleted && <Feather name="check" size={14} color="#FFF" />}
          </TouchableOpacity>
          <Feather
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={18}
            color={colors.mutedForeground}
          />
        </TouchableOpacity>

        {isExpanded && (
          <View style={[styles.sectionBody, { borderTopColor: colors.border }]}>
            <Text style={[styles.instructionsLabel, { color: colors.mutedForeground }]}>
              Instructions
            </Text>
            <Text style={[styles.instructions, { color: colors.navy }]}>
              {section.instructions}
            </Text>

            {section.resources && section.resources.length > 0 && (
              <View style={styles.resourcesBlock}>
                <Text style={[styles.instructionsLabel, { color: colors.mutedForeground }]}>
                  Resources Needed
                </Text>
                {section.resources.map((r, i) => (
                  <View key={i} style={styles.resourceRow}>
                    <View style={[styles.bullet, { backgroundColor: sectionColor }]} />
                    <Text style={[styles.resourceText, { color: colors.navy }]}>{r}</Text>
                  </View>
                ))}
              </View>
            )}

            {section.type === "craft" && (
              <>
                {section.craftName && (
                  <View style={[styles.craftBanner, { backgroundColor: `${sectionColor}15` }]}>
                    <Feather name="scissors" size={16} color={sectionColor} />
                    <Text style={[styles.craftName, { color: sectionColor }]}>
                      {section.craftName}
                    </Text>
                  </View>
                )}
                {section.materials && section.materials.length > 0 && (
                  <View style={styles.resourcesBlock}>
                    <Text style={[styles.instructionsLabel, { color: colors.mutedForeground }]}>
                      Materials
                    </Text>
                    {section.materials.map((m, i) => (
                      <View key={i} style={styles.resourceRow}>
                        <View style={[styles.bullet, { backgroundColor: sectionColor }]} />
                        <Text style={[styles.resourceText, { color: colors.navy }]}>{m}</Text>
                      </View>
                    ))}
                  </View>
                )}
                <TouchableOpacity
                  style={[styles.craftGuideBtn, { backgroundColor: colors.primary }]}
                  onPress={() => router.push(`/craft/${lesson.id}_${section.id}`)}
                >
                  <Feather name="eye" size={15} color="#FFF" />
                  <Text style={styles.craftGuideBtnText}>View Full Craft Guide</Text>
                </TouchableOpacity>
              </>
            )}

            <TouchableOpacity
              style={[
                styles.markCompleteBtn,
                {
                  backgroundColor: isCompleted ? `${sectionColor}15` : sectionColor,
                },
              ]}
              onPress={() => toggleSection(section.id)}
            >
              <Feather
                name={isCompleted ? "rotate-ccw" : "check"}
                size={16}
                color={isCompleted ? sectionColor : "#FFF"}
              />
              <Text
                style={[
                  styles.markCompleteText,
                  { color: isCompleted ? sectionColor : "#FFF" },
                ]}
              >
                {isCompleted ? "Mark Incomplete" : "Mark Complete"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomPad + 24 }}
      >
        {/* Header */}
        <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.navy }]}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Feather name="arrow-left" size={20} color="#FFF" />
          </TouchableOpacity>

          <View style={[styles.classBadge, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
            <Text style={styles.classBadgeText}>{lesson.adventurerClass}</Text>
          </View>

          <Text style={styles.lessonTitle}>{lesson.title}</Text>

          <View style={styles.progressRow}>
            <View style={[styles.progressBg]}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${progress * 100}%` },
                ]}
              />
            </View>
            <Text style={styles.progressLabel}>
              {completedCount}/{totalCount} complete
            </Text>
          </View>

          <View style={styles.shareBtns}>
            <TouchableOpacity
              style={[styles.shareBtn, { backgroundColor: "rgba(255,255,255,0.15)" }]}
              onPress={() => Alert.alert("Share", "Sharing coming soon")}
            >
              <Feather name="share" size={15} color="#FFF" />
              <Text style={styles.shareBtnText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.shareBtn, { backgroundColor: "rgba(255,255,255,0.15)" }]}
              onPress={() => Alert.alert("Export", "PDF export coming soon")}
            >
              <Feather name="download" size={15} color="#FFF" />
              <Text style={styles.shareBtnText}>Export PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Info Cards */}
        <View style={styles.infoRow}>
          <View style={[styles.infoCard, { backgroundColor: colors.blueLight, borderColor: colors.border }]}>
            <Text style={[styles.infoLabel, { color: colors.mutedForeground }]}>Objective</Text>
            <Text style={[styles.infoText, { color: colors.navy }]}>{lesson.objective}</Text>
          </View>
        </View>

        <View style={[styles.memoryVerseCard, { backgroundColor: colors.card, borderColor: colors.border, marginHorizontal: 20 }]}>
          <View style={styles.memoryHeader}>
            <Feather name="bookmark" size={16} color={colors.orange} />
            <Text style={[styles.memoryLabel, { color: colors.orange }]}>Memory Verse</Text>
          </View>
          <Text style={[styles.memoryVerse, { color: colors.navy }]}>
            "{lesson.memoryVerse}"
          </Text>
          <Text style={[styles.memoryRef, { color: colors.mutedForeground }]}>
            {lesson.memoryVerseRef}
          </Text>
        </View>

        {/* Sections */}
        <View style={styles.sectionsHeader}>
          <Text style={[styles.sectionsTitle, { color: colors.navy }]}>Lesson Sections</Text>
        </View>

        <View style={styles.sections}>
          {lesson.sections.map(renderSection)}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingBottom: 24 },
  backBtn: { marginBottom: 16, width: 40, height: 40, alignItems: "flex-start", justifyContent: "center" },
  classBadge: { alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, marginBottom: 12 },
  classBadgeText: { color: "#FFF", fontSize: 13, fontFamily: "Inter_600SemiBold" },
  lessonTitle: { color: "#FFF", fontSize: 24, fontFamily: "Inter_700Bold", lineHeight: 32, marginBottom: 16 },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 16 },
  progressBg: { flex: 1, height: 6, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.3)", overflow: "hidden" },
  progressFill: { height: 6, borderRadius: 3, backgroundColor: "#FFF" },
  progressLabel: { color: "rgba(255,255,255,0.8)", fontSize: 13, fontFamily: "Inter_500Medium" },
  shareBtns: { flexDirection: "row", gap: 10 },
  shareBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20 },
  shareBtnText: { color: "#FFF", fontSize: 13, fontFamily: "Inter_500Medium" },
  infoRow: { paddingHorizontal: 20, marginTop: 20, marginBottom: 12 },
  infoCard: { borderRadius: 16, padding: 16, borderWidth: 1 },
  infoLabel: { fontSize: 12, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 },
  infoText: { fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 22 },
  memoryVerseCard: { borderRadius: 16, borderWidth: 1, padding: 20, marginBottom: 24 },
  memoryHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 10 },
  memoryLabel: { fontSize: 13, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  memoryVerse: { fontSize: 16, fontFamily: "Inter_400Regular", fontStyle: "italic", lineHeight: 24, marginBottom: 8 },
  memoryRef: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  sectionsHeader: { paddingHorizontal: 20, marginBottom: 12 },
  sectionsTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  sections: { paddingHorizontal: 20, gap: 12 },
  sectionCard: { borderRadius: 16, borderWidth: 1, overflow: "hidden" },
  sectionHeader: { flexDirection: "row", alignItems: "center", padding: 16, gap: 12 },
  sectionIcon: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  sectionMeta: { flex: 1 },
  sectionTitle: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  sectionDuration: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  sectionCheck: { width: 28, height: 28, borderRadius: 14, borderWidth: 2, alignItems: "center", justifyContent: "center" },
  sectionBody: { paddingHorizontal: 16, paddingBottom: 16, borderTopWidth: 1, gap: 14, paddingTop: 14 },
  instructionsLabel: { fontSize: 12, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  instructions: { fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 24 },
  resourcesBlock: { gap: 8 },
  resourceRow: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  bullet: { width: 6, height: 6, borderRadius: 3, marginTop: 8 },
  resourceText: { fontSize: 14, fontFamily: "Inter_400Regular", flex: 1 },
  craftBanner: { flexDirection: "row", alignItems: "center", gap: 8, padding: 12, borderRadius: 10 },
  craftName: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  craftGuideBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 12, borderRadius: 12 },
  craftGuideBtnText: { color: "#FFF", fontSize: 14, fontFamily: "Inter_600SemiBold" },
  markCompleteBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 14, borderRadius: 12 },
  markCompleteText: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
});
