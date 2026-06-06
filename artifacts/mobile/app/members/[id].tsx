import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
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

export default function MemberDetailScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { id } = useLocalSearchParams<{ id: string }>();
  const { members, addMember, updateMember, deleteMember } = useApp();

  const isNew = id === "new";
  const existing = isNew ? null : members.find((m) => m.id === id);

  const [name, setName] = useState(existing?.name ?? "");
  const [gender, setGender] = useState<"Male" | "Female">(existing?.gender ?? "Female");
  const [adventurerClass, setAdventurerClass] = useState<AdventurerClass>(
    existing?.adventurerClass ?? "Little Lamb"
  );
  const [dob, setDob] = useState(existing?.dob ?? "");
  const [guardian, setGuardian] = useState(existing?.guardian ?? "");
  const [phone, setPhone] = useState(existing?.phone ?? "");
  const [medicalNotes, setMedicalNotes] = useState(existing?.medicalNotes ?? "");

  const isValid = name.trim().length > 0;

  const handleSave = () => {
    if (!isValid) return;
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    if (isNew) {
      addMember({ name: name.trim(), gender, adventurerClass, dob, guardian, phone, medicalNotes });
    } else if (existing) {
      updateMember(existing.id, { name: name.trim(), gender, adventurerClass, dob, guardian, phone, medicalNotes });
    }
    router.back();
  };

  const handleDelete = () => {
    Alert.alert(
      "Remove Member",
      `Are you sure you want to remove ${existing?.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            if (existing) {
              deleteMember(existing.id);
              router.back();
            }
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FEFFFE" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingTop: topPad + 8, paddingBottom: bottomPad + 100 },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.navRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={22} color={colors.navy} />
          </TouchableOpacity>
          <Text style={[styles.screenTitle, { color: colors.navy }]}>
            {isNew ? "Add Member" : "Edit Member"}
          </Text>
          {!isNew && (
            <TouchableOpacity onPress={handleDelete}>
              <Feather name="trash-2" size={20} color={colors.destructive} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Full Name *</Text>
            <TextInput
              style={[styles.input, { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy }]}
              placeholder="e.g. Amara Williams"
              placeholderTextColor={colors.mutedForeground}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Gender</Text>
            <View style={styles.toggle}>
              {(["Female", "Male"] as const).map((g) => (
                <TouchableOpacity
                  key={g}
                  style={[
                    styles.toggleBtn,
                    {
                      backgroundColor: gender === g ? colors.primary : colors.muted,
                      borderColor: gender === g ? colors.primary : colors.border,
                    },
                  ]}
                  onPress={() => setGender(g)}
                >
                  <Text style={[styles.toggleText, { color: gender === g ? "#FFF" : colors.mutedForeground }]}>
                    {g}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Class</Text>
            <View style={styles.classGrid}>
              {ADVENTURER_CLASSES.map((cls) => (
                <TouchableOpacity
                  key={cls}
                  style={[
                    styles.classChip,
                    {
                      backgroundColor: adventurerClass === cls ? colors.primary : colors.muted,
                      borderColor: adventurerClass === cls ? colors.primary : colors.border,
                    },
                  ]}
                  onPress={() => setAdventurerClass(cls)}
                >
                  <Text
                    style={[
                      styles.classText,
                      { color: adventurerClass === cls ? "#FFF" : colors.mutedForeground },
                    ]}
                  >
                    {cls}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={[styles.divider, { borderColor: colors.border }]}>
            <Text style={[styles.dividerText, { color: colors.mutedForeground }]}>Optional</Text>
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Date of Birth</Text>
            <TextInput
              style={[styles.input, { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy }]}
              placeholder="YYYY-MM-DD"
              placeholderTextColor={colors.mutedForeground}
              value={dob}
              onChangeText={setDob}
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Guardian Name</Text>
            <TextInput
              style={[styles.input, { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy }]}
              placeholder="Parent or guardian's name"
              placeholderTextColor={colors.mutedForeground}
              value={guardian}
              onChangeText={setGuardian}
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Phone Number</Text>
            <TextInput
              style={[styles.input, { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy }]}
              placeholder="Guardian's phone number"
              placeholderTextColor={colors.mutedForeground}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.field}>
            <Text style={[styles.label, { color: colors.navy }]}>Medical Notes</Text>
            <TextInput
              style={[
                styles.input,
                styles.textarea,
                { borderColor: colors.border, backgroundColor: colors.input, color: colors.navy },
              ]}
              placeholder="Allergies, conditions, special needs..."
              placeholderTextColor={colors.mutedForeground}
              value={medicalNotes}
              onChangeText={setMedicalNotes}
              multiline
              numberOfLines={3}
            />
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.footer,
          { paddingBottom: bottomPad + 16, backgroundColor: "#FEFFFE", borderTopColor: colors.border },
        ]}
      >
        <TouchableOpacity
          style={[styles.saveBtn, { backgroundColor: isValid ? colors.primary : colors.border }]}
          onPress={handleSave}
          disabled={!isValid}
          activeOpacity={0.85}
        >
          <Text style={[styles.saveBtnText, { color: isValid ? "#FFF" : colors.mutedForeground }]}>
            {isNew ? "Add Member" : "Save Changes"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24 },
  navRow: { flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 28 },
  screenTitle: { flex: 1, fontSize: 20, fontFamily: "Inter_700Bold" },
  form: { gap: 20 },
  field: { gap: 10 },
  label: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  input: {
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  textarea: { minHeight: 80, textAlignVertical: "top" },
  toggle: { flexDirection: "row", gap: 10 },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: "center",
  },
  toggleText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  classGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  classChip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  classText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  divider: { borderTopWidth: 1, paddingTop: 8, marginTop: 4 },
  dividerText: { fontSize: 12, fontFamily: "Inter_500Medium", textTransform: "uppercase", letterSpacing: 0.8 },
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  saveBtn: { paddingVertical: 18, borderRadius: 16, alignItems: "center" },
  saveBtnText: { fontSize: 17, fontFamily: "Inter_600SemiBold" },
});
