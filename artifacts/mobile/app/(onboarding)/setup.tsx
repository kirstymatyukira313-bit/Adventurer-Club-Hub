import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
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
import type { LeaderRole } from "@/types";

const ROLE_OPTIONS: LeaderRole[] = ["Club Leader", "Deputy Leader", "Other"];

export default function SetupScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { completeOnboarding } = useApp();

  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<LeaderRole>("Club Leader");
  const [clubName, setClubName] = useState("");
  const [churchName, setChurchName] = useState("");

  const [showRolePicker, setShowRolePicker] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isValid = fullName.trim() && clubName.trim() && churchName.trim();

  const handleFinish = () => {
    if (!isValid) return;
    completeOnboarding(
      {
        name: clubName.trim(),
        churchName: churchName.trim(),
        leaderName: fullName.trim(),
        role,
        conference: "",
        district: "",
      },
      role,
      []
    );
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setShowSuccess(true);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FEFFFE" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingTop: topPad + 16, paddingBottom: bottomPad + 100 },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* 2-bar progress */}
        <View style={styles.progressRow}>
          <View style={[styles.progressBar, { backgroundColor: colors.border }]} />
          <View style={[styles.progressBar, { backgroundColor: colors.primary }]} />
        </View>
        <Text style={[styles.stepLabel, { color: colors.mutedForeground }]}>
          Step 2 of 2
        </Text>

        <Text style={[styles.title, { color: colors.navy }]}>Set Up Your Club</Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Just a few details to get you started.
        </Text>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
            PERSONAL INFORMATION
          </Text>

          <View style={styles.fieldGroup}>
            <View style={styles.field}>
              <Text style={[styles.label, { color: colors.navy }]}>Full Name</Text>
              <TextInput
                style={[styles.input, { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy }]}
                placeholder="e.g. Kirsty Johnson"
                placeholderTextColor={colors.mutedForeground}
                value={fullName}
                onChangeText={setFullName}
                returnKeyType="next"
                autoCapitalize="words"
              />
            </View>

            <View style={styles.field}>
              <Text style={[styles.label, { color: colors.navy }]}>Role</Text>
              <TouchableOpacity
                style={[styles.dropdownTrigger, { borderColor: colors.border, backgroundColor: colors.input }]}
                onPress={() => setShowRolePicker(true)}
                activeOpacity={0.8}
              >
                <Text style={[styles.dropdownValue, { color: colors.navy }]}>{role}</Text>
                <Text style={[styles.dropdownCaret, { color: colors.mutedForeground }]}>▾</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Club Information */}
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
            CLUB INFORMATION
          </Text>

          <View style={styles.fieldGroup}>
            <View style={styles.field}>
              <Text style={[styles.label, { color: colors.navy }]}>Club Name</Text>
              <TextInput
                style={[styles.input, { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy }]}
                placeholder="e.g. Eastside Adventurers"
                placeholderTextColor={colors.mutedForeground}
                value={clubName}
                onChangeText={setClubName}
                returnKeyType="next"
              />
            </View>

            <View style={styles.field}>
              <Text style={[styles.label, { color: colors.navy }]}>Church Name</Text>
              <TextInput
                style={[styles.input, { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy }]}
                placeholder="e.g. Eastside SDA Church"
                placeholderTextColor={colors.mutedForeground}
                value={churchName}
                onChangeText={setChurchName}
                returnKeyType="done"
                onSubmitEditing={handleFinish}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Finish Setup button */}
      <View style={[styles.footer, { paddingBottom: bottomPad + 16, borderTopColor: colors.border }]}>
        <TouchableOpacity
          style={[styles.cta, { backgroundColor: isValid ? colors.primary : colors.border }]}
          onPress={handleFinish}
          disabled={!isValid}
          activeOpacity={0.85}
        >
          <Text style={[styles.ctaText, { color: isValid ? "#FFF" : colors.mutedForeground }]}>
            Finish Setup
          </Text>
        </TouchableOpacity>
      </View>

      {/* Role picker modal */}
      <Modal visible={showRolePicker} transparent animationType="slide">
        <TouchableOpacity
          style={styles.pickerOverlay}
          activeOpacity={1}
          onPress={() => setShowRolePicker(false)}
        >
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <View style={[styles.pickerSheet, { backgroundColor: colors.card }]}>
              <View style={[styles.sheetHandle, { backgroundColor: colors.border }]} />
              <Text style={[styles.pickerTitle, { color: colors.navy }]}>Select Your Role</Text>
              {ROLE_OPTIONS.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    styles.pickerOption,
                    { borderColor: colors.border },
                    role === opt && { backgroundColor: colors.blueLight },
                  ]}
                  onPress={() => {
                    setRole(opt);
                    setShowRolePicker(false);
                  }}
                  activeOpacity={0.8}
                >
                  <Text style={[styles.pickerOptionText, { color: role === opt ? colors.primary : colors.navy }]}>
                    {opt}
                  </Text>
                  {role === opt && (
                    <Text style={[styles.pickerCheck, { color: colors.primary }]}>✓</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Success modal */}
      <Modal visible={showSuccess} transparent animationType="fade">
        <View style={styles.successOverlay}>
          <View style={[styles.successCard, { backgroundColor: colors.card }]}>
            <View style={[styles.successBadge, { backgroundColor: colors.successLight }]}>
              <Text style={styles.successEmoji}>🎉</Text>
            </View>
            <Text style={[styles.successTitle, { color: colors.navy }]}>You're All Set!</Text>
            <Text style={[styles.successSub, { color: colors.mutedForeground }]}>
              Your club is ready. Start managing lessons, attendance and subscriptions.
            </Text>
            <TouchableOpacity
              style={[styles.successCta, { backgroundColor: colors.primary }]}
              onPress={() => router.replace("/(tabs)")}
              activeOpacity={0.85}
            >
              <Text style={styles.successCtaText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24 },
  progressRow: { flexDirection: "row", gap: 8, marginBottom: 8 },
  progressBar: { flex: 1, height: 4, borderRadius: 2 },
  stepLabel: { fontSize: 13, fontFamily: "Inter_400Regular", marginBottom: 24 },
  title: { fontSize: 26, fontFamily: "Inter_700Bold", lineHeight: 34, marginBottom: 6 },
  subtitle: { fontSize: 15, fontFamily: "Inter_400Regular", marginBottom: 32 },
  section: { marginBottom: 28 },
  sectionLabel: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  fieldGroup: { gap: 18 },
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
  dropdownTrigger: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownValue: { fontSize: 15, fontFamily: "Inter_400Regular" },
  dropdownCaret: { fontSize: 16 },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    backgroundColor: "#FEFFFE",
  },
  cta: { paddingVertical: 18, borderRadius: 16, alignItems: "center" },
  ctaText: { fontSize: 17, fontFamily: "Inter_600SemiBold" },
  // Role picker
  pickerOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "flex-end" },
  pickerSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 10,
  },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, alignSelf: "center", marginBottom: 16 },
  pickerTitle: { fontSize: 18, fontFamily: "Inter_700Bold", marginBottom: 8 },
  pickerOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  pickerOptionText: { fontSize: 16, fontFamily: "Inter_500Medium" },
  pickerCheck: { fontSize: 16, fontFamily: "Inter_700Bold" },
  // Success modal
  successOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 28 },
  successCard: { borderRadius: 28, padding: 32, width: "100%", alignItems: "center", gap: 14 },
  successBadge: { width: 72, height: 72, borderRadius: 36, alignItems: "center", justifyContent: "center" },
  successEmoji: { fontSize: 36 },
  successTitle: { fontSize: 24, fontFamily: "Inter_700Bold" },
  successSub: { fontSize: 15, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 22 },
  successCta: { width: "100%", paddingVertical: 18, borderRadius: 16, alignItems: "center", marginTop: 8 },
  successCtaText: { color: "#FFF", fontSize: 17, fontFamily: "Inter_600SemiBold" },
});
