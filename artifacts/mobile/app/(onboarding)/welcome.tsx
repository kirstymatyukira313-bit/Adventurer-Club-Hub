import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
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

export default function WelcomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: "#FEFFFE", paddingTop: topPad, paddingBottom: bottomPad + 24 },
      ]}
    >
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: colors.primary }]}>
          <Text style={styles.badgeText}>Adventurer Club</Text>
        </View>
      </View>

      <View style={styles.illustrationContainer}>
        <Image
          source={require("@/assets/images/onboarding_welcome.png")}
          style={styles.illustration}
          contentFit="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.headline, { color: colors.navy }]}>
          Run your Adventurer Club with less stress
        </Text>
        <Text style={[styles.subtext, { color: colors.mutedForeground }]}>
          Manage lessons, attendance, members and subscriptions in one place.
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.cta, { backgroundColor: colors.primary }]}
          onPress={() => router.push("/(onboarding)/role")}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaText}>Set Up My Club</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotActive, { backgroundColor: colors.primary }]} />
          <View style={[styles.dot, { backgroundColor: colors.border }]} />
          <View style={[styles.dot, { backgroundColor: colors.border }]} />
          <View style={[styles.dot, { backgroundColor: colors.border }]} />
          <View style={[styles.dot, { backgroundColor: colors.border }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: "center",
    paddingTop: 16,
  },
  badge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.5,
  },
  illustrationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  illustration: {
    width: width - 48,
    height: (width - 48) * 0.75,
    borderRadius: 20,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 8,
    marginBottom: 32,
  },
  headline: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    lineHeight: 36,
    marginBottom: 12,
  },
  subtext: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 24,
  },
  bottom: {
    gap: 20,
  },
  cta: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  ctaText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontFamily: "Inter_600SemiBold",
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
  },
});
