import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";
import type { LeaderRole } from "@/types";

const ROLES: { key: LeaderRole; title: string; description: string; icon: string }[] = [
  {
    key: "Club Leader",
    title: "Club Leader",
    description: "I lead the Adventurer Club and oversee all activities",
    icon: "★",
  },
  {
    key: "Deputy Leader",
    title: "Deputy Leader",
    description: "I assist the Club Leader and help manage classes",
    icon: "◆",
  },
];

export default function RoleScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const [selectedRole, setSelectedRole] = useState<LeaderRole | null>(null);

  const handleSelect = (role: LeaderRole) => {
    setSelectedRole(role);
    Haptics.selectionAsync();
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: "#FEFFFE", paddingTop: topPad, paddingBottom: bottomPad + 24 },
      ]}
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
              { backgroundColor: step <= 2 ? colors.primary : colors.border },
            ]}
          />
        ))}
      </View>

      <Text style={[styles.stepLabel, { color: colors.mutedForeground }]}>Step 2 of 5</Text>

      <View style={styles.content}>
        <Text style={[styles.question, { color: colors.navy }]}>
          What best describes you?
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          This helps us personalize your experience
        </Text>

        <View style={styles.options}>
          {ROLES.map((role) => {
            const isSelected = selectedRole === role.key;
            return (
              <TouchableOpacity
                key={role.key}
                style={[
                  styles.card,
                  {
                    borderColor: isSelected ? colors.primary : colors.border,
                    backgroundColor: isSelected ? colors.blueLight : colors.card,
                    shadowColor: isSelected ? colors.primary : "#000",
                    shadowOpacity: isSelected ? 0.15 : 0.05,
                  },
                ]}
                onPress={() => handleSelect(role.key)}
                activeOpacity={0.85}
              >
                <View
                  style={[
                    styles.iconBox,
                    { backgroundColor: isSelected ? colors.primary : colors.muted },
                  ]}
                >
                  <Text style={[styles.icon, { color: isSelected ? "#FFF" : colors.mutedForeground }]}>
                    {role.icon}
                  </Text>
                </View>
                <View style={styles.cardText}>
                  <Text style={[styles.cardTitle, { color: colors.navy }]}>
                    {role.title}
                  </Text>
                  <Text style={[styles.cardDesc, { color: colors.mutedForeground }]}>
                    {role.description}
                  </Text>
                </View>
                {isSelected && (
                  <View style={[styles.check, { backgroundColor: colors.primary }]}>
                    <Text style={styles.checkMark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.cta,
          {
            backgroundColor: selectedRole ? colors.primary : colors.border,
          },
        ]}
        onPress={() =>
          selectedRole &&
          router.push({ pathname: "/(onboarding)/setup", params: { role: selectedRole } })
        }
        disabled={!selectedRole}
        activeOpacity={0.85}
      >
        <Text style={[styles.ctaText, { color: selectedRole ? "#FFF" : colors.mutedForeground }]}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24 },
  back: { marginBottom: 16 },
  backText: { fontSize: 16, fontFamily: "Inter_500Medium" },
  progressRow: { flexDirection: "row", gap: 6, marginBottom: 8 },
  progressSegment: { flex: 1, height: 4, borderRadius: 2 },
  stepLabel: { fontSize: 13, fontFamily: "Inter_400Regular", marginBottom: 32 },
  content: { flex: 1 },
  question: { fontSize: 26, fontFamily: "Inter_700Bold", marginBottom: 8, lineHeight: 34 },
  subtitle: { fontSize: 15, fontFamily: "Inter_400Regular", marginBottom: 32 },
  options: { gap: 16 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    borderWidth: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    gap: 16,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: { fontSize: 20 },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 17, fontFamily: "Inter_600SemiBold", marginBottom: 4 },
  cardDesc: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 20 },
  check: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  checkMark: { color: "#FFF", fontSize: 13, fontFamily: "Inter_700Bold" },
  cta: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  ctaText: { fontSize: 17, fontFamily: "Inter_600SemiBold" },
});
