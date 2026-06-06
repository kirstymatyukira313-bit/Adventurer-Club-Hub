import { Image } from "expo-image";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useEffect } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const { width } = Dimensions.get("window");

export default function SuccessScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: "#FEFFFE", paddingTop: topPad, paddingBottom: bottomPad + 24 },
      ]}
    >
      <View style={styles.progressRow}>
        {[1, 2, 3, 4, 5].map((step) => (
          <View
            key={step}
            style={[styles.progressSegment, { backgroundColor: colors.primary }]}
          />
        ))}
      </View>

      <View style={styles.body}>
        <Image
          source={require("@/assets/images/onboarding_success.png")}
          style={styles.illustration}
          contentFit="contain"
        />

        <View
          style={[styles.iconBadge, { backgroundColor: colors.successLight }]}
        >
          <Text style={[styles.iconText, { color: colors.success }]}>✓</Text>
        </View>

        <Text style={[styles.headline, { color: colors.navy }]}>Your Club Is Ready</Text>
        <Text style={[styles.subtext, { color: colors.mutedForeground }]}>
          You can now begin managing lessons, attendance and subscriptions for your Adventurer Club.
        </Text>

        <View style={[styles.featureRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
          {[
            { icon: "📖", label: "Lessons" },
            { icon: "✋", label: "Attendance" },
            { icon: "💰", label: "Funds" },
          ].map((f) => (
            <View key={f.label} style={styles.feature}>
              <Text style={styles.featureIcon}>{f.icon}</Text>
              <Text style={[styles.featureLabel, { color: colors.mutedForeground }]}>
                {f.label}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.cta, { backgroundColor: colors.primary }]}
        onPress={() => router.replace("/(tabs)")}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaText}>Go To Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24 },
  progressRow: { flexDirection: "row", gap: 6, marginBottom: 32 },
  progressSegment: { flex: 1, height: 4, borderRadius: 2 },
  body: { flex: 1, alignItems: "center", justifyContent: "center", gap: 20 },
  illustration: {
    width: width - 80,
    height: (width - 80) * 0.75,
    borderRadius: 20,
  },
  iconBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: { fontSize: 28, fontFamily: "Inter_700Bold" },
  headline: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    lineHeight: 36,
  },
  subtext: {
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 23,
    paddingHorizontal: 8,
  },
  featureRow: {
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    gap: 0,
    alignSelf: "stretch",
  },
  feature: { flex: 1, alignItems: "center", gap: 6 },
  featureIcon: { fontSize: 24 },
  featureLabel: { fontSize: 13, fontFamily: "Inter_500Medium" },
  cta: { paddingVertical: 18, borderRadius: 16, alignItems: "center" },
  ctaText: { color: "#FFF", fontSize: 17, fontFamily: "Inter_600SemiBold" },
});
