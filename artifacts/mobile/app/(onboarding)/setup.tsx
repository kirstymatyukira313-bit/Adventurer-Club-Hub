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

import { useColors } from "@/hooks/useColors";
import type { LeaderRole } from "@/types";

export default function SetupScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { role } = useLocalSearchParams<{ role: string }>();

  const [churchName, setChurchName] = useState("");
  const [clubName, setClubName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [conference, setConference] = useState("");
  const [district, setDistrict] = useState("");

  const isValid = churchName.trim() && clubName.trim() && leaderName.trim();

  const handleContinue = () => {
    if (!isValid) return;
    router.push({
      pathname: "/(onboarding)/members",
      params: {
        role: role ?? "Club Leader",
        churchName: churchName.trim(),
        clubName: clubName.trim(),
        leaderName: leaderName.trim(),
        conference: conference.trim(),
        district: district.trim(),
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FEFFFE" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingTop: topPad, paddingBottom: bottomPad + 80 },
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
                { backgroundColor: step <= 3 ? colors.primary : colors.border },
              ]}
            />
          ))}
        </View>
        <Text style={[styles.stepLabel, { color: colors.mutedForeground }]}>Step 3 of 5</Text>

        <Text style={[styles.title, { color: colors.navy }]}>Set Up Your Club</Text>
        <Text style={[styles.microcopy, { color: colors.mutedForeground }]}>
          Let's personalize your club experience.
        </Text>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Church Name *</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: colors.border,
                  backgroundColor: colors.input,
                  color: colors.navy,
                },
              ]}
              placeholder="e.g. Eastside SDA Church"
              placeholderTextColor={colors.mutedForeground}
              value={churchName}
              onChangeText={setChurchName}
              returnKeyType="next"
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Club Name *</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: colors.border,
                  backgroundColor: colors.input,
                  color: colors.navy,
                },
              ]}
              placeholder="e.g. Eastside Adventurers"
              placeholderTextColor={colors.mutedForeground}
              value={clubName}
              onChangeText={setClubName}
              returnKeyType="next"
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Your Name *</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: colors.border,
                  backgroundColor: colors.input,
                  color: colors.navy,
                },
              ]}
              placeholder="e.g. Kirsty Johnson"
              placeholderTextColor={colors.mutedForeground}
              value={leaderName}
              onChangeText={setLeaderName}
              returnKeyType="next"
            />
          </View>

          <View style={[styles.divider, { borderColor: colors.border }]}>
            <Text style={[styles.dividerText, { color: colors.mutedForeground }]}>
              Optional
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Conference</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: colors.border,
                  backgroundColor: colors.input,
                  color: colors.navy,
                },
              ]}
              placeholder="e.g. North Caribbean Conference"
              placeholderTextColor={colors.mutedForeground}
              value={conference}
              onChangeText={setConference}
              returnKeyType="next"
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>District</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderColor: colors.border,
                  backgroundColor: colors.input,
                  color: colors.navy,
                },
              ]}
              placeholder="e.g. Eastern District"
              placeholderTextColor={colors.mutedForeground}
              value={district}
              onChangeText={setDistrict}
              returnKeyType="done"
              onSubmitEditing={handleContinue}
            />
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          {
            paddingBottom: bottomPad + 16,
            backgroundColor: "#FEFFFE",
            borderTopColor: colors.border,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.cta,
            { backgroundColor: isValid ? colors.primary : colors.border },
          ]}
          onPress={handleContinue}
          disabled={!isValid}
          activeOpacity={0.85}
        >
          <Text
            style={[
              styles.ctaText,
              { color: isValid ? "#FFF" : colors.mutedForeground },
            ]}
          >
            Continue
          </Text>
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
  microcopy: { fontSize: 15, fontFamily: "Inter_400Regular", marginBottom: 32 },
  form: { gap: 20 },
  field: { gap: 8 },
  label: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  input: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  divider: {
    borderTopWidth: 1,
    paddingTop: 8,
    marginTop: 4,
  },
  dividerText: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  cta: { paddingVertical: 18, borderRadius: 16, alignItems: "center" },
  ctaText: { fontSize: 17, fontFamily: "Inter_600SemiBold" },
});
