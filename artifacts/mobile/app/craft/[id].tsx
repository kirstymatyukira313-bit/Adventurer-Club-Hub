import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
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

import { getLessonById } from "@/data/lessons";
import { useColors } from "@/hooks/useColors";

export default function CraftGuideScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { id } = useLocalSearchParams<{ id: string }>();

  const [checkedMaterials, setCheckedMaterials] = useState<Record<number, boolean>>({});
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});

  const parts = (id ?? "").split("_");
  const lessonId = parts[0] ?? "";
  const sectionId = parts.slice(1).join("_");

  const lesson = getLessonById(lessonId);
  const craftSection = lesson?.sections.find(
    (s) => s.id === sectionId && s.type === "craft"
  );

  if (!lesson || !craftSection) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 20 }}>
          <Text style={{ color: colors.primary }}>← Back</Text>
        </TouchableOpacity>
        <Text style={{ color: colors.mutedForeground }}>Craft guide not found</Text>
      </View>
    );
  }

  const toggleMaterial = (i: number) => {
    setCheckedMaterials((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const toggleStep = (i: number) => {
    setCheckedSteps((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomPad + 24 }}
      >
        {/* Header */}
        <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: "#FB923C" }]}>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Feather name="arrow-left" size={20} color="#FFF" />
          </TouchableOpacity>

          <View style={[styles.badge, { backgroundColor: "rgba(255,255,255,0.2)" }]}>
            <Text style={styles.badgeText}>{lesson.adventurerClass} · Craft</Text>
          </View>

          <Text style={styles.craftTitle}>{craftSection.craftName ?? craftSection.title}</Text>
          <Text style={styles.lessonSub}>{lesson.title}</Text>

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Feather name="package" size={14} color="rgba(255,255,255,0.8)" />
              <Text style={styles.statText}>
                {craftSection.materials?.length ?? 0} materials
              </Text>
            </View>
            <View style={styles.stat}>
              <Feather name="list" size={14} color="rgba(255,255,255,0.8)" />
              <Text style={styles.statText}>
                {craftSection.steps?.length ?? 0} steps
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {/* Materials Checklist */}
          {craftSection.materials && craftSection.materials.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Feather name="package" size={18} color="#FB923C" />
                <Text style={[styles.sectionTitle, { color: colors.navy }]}>
                  Materials Checklist
                </Text>
              </View>
              <Text style={[styles.sectionHint, { color: colors.mutedForeground }]}>
                Gather everything before you start
              </Text>
              {craftSection.materials.map((material, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.checkRow,
                    {
                      backgroundColor: checkedMaterials[i] ? "#FEF3C7" : colors.card,
                      borderColor: checkedMaterials[i] ? "#FB923C" : colors.border,
                    },
                  ]}
                  onPress={() => toggleMaterial(i)}
                  activeOpacity={0.85}
                >
                  <View
                    style={[
                      styles.checkbox,
                      {
                        backgroundColor: checkedMaterials[i] ? "#FB923C" : "transparent",
                        borderColor: checkedMaterials[i] ? "#FB923C" : colors.border,
                      },
                    ]}
                  >
                    {checkedMaterials[i] && <Feather name="check" size={13} color="#FFF" />}
                  </View>
                  <Text
                    style={[
                      styles.checkText,
                      {
                        color: checkedMaterials[i] ? colors.mutedForeground : colors.navy,
                        textDecorationLine: checkedMaterials[i] ? "line-through" : "none",
                      },
                    ]}
                  >
                    {material}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Step-by-step Instructions */}
          {craftSection.steps && craftSection.steps.length > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Feather name="list" size={18} color={colors.primary} />
                <Text style={[styles.sectionTitle, { color: colors.navy }]}>
                  Step-by-Step Instructions
                </Text>
              </View>
              {craftSection.steps.map((step, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.stepRow,
                    {
                      backgroundColor: checkedSteps[i] ? colors.successLight : colors.card,
                      borderColor: checkedSteps[i] ? colors.success : colors.border,
                    },
                  ]}
                  onPress={() => toggleStep(i)}
                  activeOpacity={0.85}
                >
                  <View
                    style={[
                      styles.stepNum,
                      {
                        backgroundColor: checkedSteps[i] ? colors.success : colors.primary,
                      },
                    ]}
                  >
                    {checkedSteps[i] ? (
                      <Feather name="check" size={14} color="#FFF" />
                    ) : (
                      <Text style={styles.stepNumText}>{i + 1}</Text>
                    )}
                  </View>
                  <Text
                    style={[
                      styles.stepText,
                      {
                        color: checkedSteps[i] ? colors.mutedForeground : colors.navy,
                        textDecorationLine: checkedSteps[i] ? "line-through" : "none",
                      },
                    ]}
                  >
                    {step}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Video Placeholder */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Feather name="video" size={18} color={colors.mutedForeground} />
              <Text style={[styles.sectionTitle, { color: colors.navy }]}>Tutorial Video</Text>
            </View>
            <View
              style={[
                styles.videoPlaceholder,
                { backgroundColor: colors.muted, borderColor: colors.border },
              ]}
            >
              <View
                style={[
                  styles.playBtn,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Feather name="play" size={20} color="#FFF" />
              </View>
              <Text style={[styles.videoText, { color: colors.mutedForeground }]}>
                Tutorial video coming soon
              </Text>
            </View>
          </View>

          {/* Photo Placeholder */}
          <View style={[styles.section, { marginBottom: 0 }]}>
            <View style={styles.sectionHeader}>
              <Feather name="image" size={18} color={colors.mutedForeground} />
              <Text style={[styles.sectionTitle, { color: colors.navy }]}>Example Photos</Text>
            </View>
            <View style={styles.photosRow}>
              {[0, 1, 2].map((i) => (
                <View
                  key={i}
                  style={[
                    styles.photoPlaceholder,
                    { backgroundColor: colors.muted, borderColor: colors.border },
                  ]}
                >
                  <Feather name="image" size={24} color={colors.border} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingBottom: 24 },
  backBtn: { marginBottom: 16, width: 40, height: 40, alignItems: "flex-start", justifyContent: "center" },
  badge: { alignSelf: "flex-start", paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, marginBottom: 12 },
  badgeText: { color: "#FFF", fontSize: 13, fontFamily: "Inter_600SemiBold" },
  craftTitle: { color: "#FFF", fontSize: 24, fontFamily: "Inter_700Bold", lineHeight: 32, marginBottom: 6 },
  lessonSub: { color: "rgba(255,255,255,0.75)", fontSize: 14, fontFamily: "Inter_400Regular", marginBottom: 16 },
  stats: { flexDirection: "row", gap: 20 },
  stat: { flexDirection: "row", alignItems: "center", gap: 6 },
  statText: { color: "rgba(255,255,255,0.8)", fontSize: 13, fontFamily: "Inter_500Medium" },
  body: { padding: 20 },
  section: { marginBottom: 24 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 6 },
  sectionTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  sectionHint: { fontSize: 13, fontFamily: "Inter_400Regular", marginBottom: 12 },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    marginBottom: 8,
  },
  checkbox: { width: 26, height: 26, borderRadius: 13, borderWidth: 2, alignItems: "center", justifyContent: "center" },
  checkText: { fontSize: 15, fontFamily: "Inter_400Regular", flex: 1 },
  stepRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    marginBottom: 8,
  },
  stepNum: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  stepNumText: { color: "#FFF", fontSize: 14, fontFamily: "Inter_700Bold" },
  stepText: { fontSize: 15, fontFamily: "Inter_400Regular", flex: 1, lineHeight: 22, paddingTop: 5 },
  videoPlaceholder: {
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    paddingVertical: 40,
    alignItems: "center",
    gap: 12,
  },
  playBtn: { width: 56, height: 56, borderRadius: 28, alignItems: "center", justifyContent: "center" },
  videoText: { fontSize: 14, fontFamily: "Inter_400Regular" },
  photosRow: { flexDirection: "row", gap: 12 },
  photoPlaceholder: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
