import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
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
import { ADVENTURER_CLASSES } from "@/types";
import type { AdventurerClass } from "@/types";

interface NewMember {
  name: string;
  gender: "Male" | "Female";
  adventurerClass: AdventurerClass;
}

export default function MembersScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const params = useLocalSearchParams<{
    role: string;
    churchName: string;
    clubName: string;
    leaderName: string;
    conference: string;
    district: string;
  }>();

  const { completeOnboarding } = useApp();

  const [members, setMembers] = useState<NewMember[]>([
    { name: "", gender: "Female", adventurerClass: "Little Lamb" },
  ]);

  const addMember = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setMembers((prev) => [
      ...prev,
      { name: "", gender: "Female", adventurerClass: "Little Lamb" },
    ]);
  };

  const updateMember = (index: number, update: Partial<NewMember>) => {
    setMembers((prev) => prev.map((m, i) => (i === index ? { ...m, ...update } : m)));
  };

  const removeMember = (index: number) => {
    if (members.length === 1) return;
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFinish = () => {
    const validMembers = members.filter((m) => m.name.trim());
    completeOnboarding(
      {
        name: params.clubName ?? "",
        churchName: params.churchName ?? "",
        leaderName: params.leaderName ?? "",
        role: (params.role as "Club Leader" | "Deputy Leader") ?? "Club Leader",
        conference: params.conference ?? "",
        district: params.district ?? "",
      },
      (params.role as "Club Leader" | "Deputy Leader") ?? "Club Leader",
      validMembers
    );
    router.push("/(onboarding)/success");
  };

  const handleSkip = () => {
    completeOnboarding(
      {
        name: params.clubName ?? "",
        churchName: params.churchName ?? "",
        leaderName: params.leaderName ?? "",
        role: (params.role as "Club Leader" | "Deputy Leader") ?? "Club Leader",
        conference: params.conference ?? "",
        district: params.district ?? "",
      },
      (params.role as "Club Leader" | "Deputy Leader") ?? "Club Leader",
      []
    );
    router.push("/(onboarding)/success");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FEFFFE" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingTop: topPad, paddingBottom: bottomPad + 100 },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.back} onPress={() => router.back()}>
          <Text style={[styles.backText, { color: colors.primary }]}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.progressRow}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.progressSegment,
                { backgroundColor: step <= 4 ? colors.primary : colors.border },
              ]}
            />
          ))}
        </View>
        <Text style={[styles.stepLabel, { color: colors.mutedForeground }]}>Step 4 of 5</Text>

        <Text style={[styles.title, { color: colors.navy }]}>Add Club Members</Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Quickly add your first club members. You can always add more later.
        </Text>

        {members.map((member, index) => (
          <View
            key={index}
            style={[styles.memberCard, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <View style={styles.memberHeader}>
              <Text style={[styles.memberNum, { color: colors.mutedForeground }]}>
                Member {index + 1}
              </Text>
              {members.length > 1 && (
                <TouchableOpacity onPress={() => removeMember(index)}>
                  <Text style={[styles.removeBtn, { color: colors.destructive }]}>Remove</Text>
                </TouchableOpacity>
              )}
            </View>

            <TextInput
              style={[
                styles.input,
                { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy },
              ]}
              placeholder="Full Name"
              placeholderTextColor={colors.mutedForeground}
              value={member.name}
              onChangeText={(v) => updateMember(index, { name: v })}
            />

            <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Gender</Text>
            <View style={styles.toggle}>
              {(["Female", "Male"] as const).map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[
                    styles.toggleBtn,
                    {
                      backgroundColor: member.gender === g ? colors.primary : colors.muted,
                      borderColor: member.gender === g ? colors.primary : colors.border,
                    },
                  ]}
                  onPress={() => updateMember(index, { gender: g })}
                >
                  <Text
                    style={[
                      styles.toggleText,
                      { color: member.gender === g ? "#FFF" : colors.mutedForeground },
                    ]}
                  >
                    {g}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Class</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.classRow}>
                {ADVENTURER_CLASSES.map((cls) => (
                  <TouchableOpacity
                    key={cls}
                    style={[
                      styles.classChip,
                      {
                        backgroundColor:
                          member.adventurerClass === cls ? colors.primary : colors.muted,
                        borderColor:
                          member.adventurerClass === cls ? colors.primary : colors.border,
                      },
                    ]}
                    onPress={() => updateMember(index, { adventurerClass: cls })}
                  >
                    <Text
                      style={[
                        styles.classChipText,
                        {
                          color:
                            member.adventurerClass === cls ? "#FFF" : colors.mutedForeground,
                        },
                      ]}
                    >
                      {cls}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        ))}

        <TouchableOpacity
          style={[styles.addBtn, { borderColor: colors.primary }]}
          onPress={addMember}
        >
          <Text style={[styles.addBtnText, { color: colors.primary }]}>+ Add Another</Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={[
          styles.footer,
          { paddingBottom: bottomPad + 16, backgroundColor: "#FEFFFE", borderTopColor: colors.border },
        ]}
      >
        <TouchableOpacity style={styles.skipBtn} onPress={handleSkip}>
          <Text style={[styles.skipText, { color: colors.mutedForeground }]}>Skip For Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.cta, { backgroundColor: colors.primary }]}
          onPress={handleFinish}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaText}>Finish Setup</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24 },
  back: { marginBottom: 16 },
  backText: { fontSize: 16, fontFamily: "Inter_500Medium" },
  progressRow: { flexDirection: "row", gap: 6, marginBottom: 8 },
  progressSegment: { flex: 1, height: 4, borderRadius: 2 },
  stepLabel: { fontSize: 13, fontFamily: "Inter_400Regular", marginBottom: 24 },
  title: { fontSize: 26, fontFamily: "Inter_700Bold", marginBottom: 8, lineHeight: 34 },
  subtitle: { fontSize: 15, fontFamily: "Inter_400Regular", marginBottom: 24, lineHeight: 22 },
  memberCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    gap: 12,
  },
  memberHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  memberNum: { fontSize: 13, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  removeBtn: { fontSize: 14, fontFamily: "Inter_500Medium" },
  input: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  fieldLabel: { fontSize: 13, fontFamily: "Inter_500Medium" },
  toggle: { flexDirection: "row", gap: 8 },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: "center",
  },
  toggleText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  classRow: { flexDirection: "row", gap: 8 },
  classChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  classChipText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  addBtn: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  addBtnText: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    gap: 10,
  },
  skipBtn: { alignItems: "center", paddingVertical: 4 },
  skipText: { fontSize: 15, fontFamily: "Inter_500Medium" },
  cta: { paddingVertical: 18, borderRadius: 16, alignItems: "center" },
  ctaText: { color: "#FFF", fontSize: 17, fontFamily: "Inter_600SemiBold" },
});
