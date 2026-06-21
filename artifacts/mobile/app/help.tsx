import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const FAQ_ITEMS = [
  {
    q: "How do I add club members?",
    a: "Go to Profile → Manage Members → tap the + button. You can add name, gender, class, date of birth, guardian and medical notes.",
  },
  {
    q: "How do I record attendance?",
    a: "Tap the Attendance tab. All members default to Present. Simply tap a member to mark them absent. Tap Save Attendance when done.",
  },
  {
    q: "How do subscriptions work?",
    a: "In the Funds tab, you can mark which members have paid their subscription. The progress jar fills as members pay. You can also add expenses.",
  },
  {
    q: "Can multiple leaders use the app?",
    a: "Currently the app is designed for a single device. Sharing across multiple leaders is planned for a future update.",
  },
  {
    q: "How do I plan lessons?",
    a: "Go to Profile → Curriculum Planning to view and plan the lesson sequence for each class. Tap any lesson to view its full content.",
  },
  {
    q: "Is my data backed up?",
    a: "Your data is stored on this device. We recommend keeping regular backups. Cloud sync is planned for a future update.",
  },
];

export default function HelpScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const openWhatsApp = () => {
    const url = "https://wa.me/27714653455?text=Hi%2C%20I%20need%20help%20with%20Adventurer%20Club%20Manager";
    Linking.openURL(url).catch(() => Alert.alert("Error", "Could not open WhatsApp"));
  };

  const openEmail = () => {
    Linking.openURL("mailto:support.clubmanager@gmail.com?subject=Help%20Request").catch(() =>
      Alert.alert("Error", "Could not open email")
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomPad + 24 }}
      >
        <View style={[styles.header, { paddingTop: topPad + 8 }]}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={22} color={colors.navy} />
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.navy }]}>Help & Support</Text>
        </View>

        {/* Quick Contact */}
        <View style={styles.contactRow}>
          <TouchableOpacity
            style={[styles.contactCard, { backgroundColor: "#D1FAE5", borderColor: "#A7F3D0" }]}
            onPress={openWhatsApp}
          >
            <Feather name="message-circle" size={22} color="#059669" />
            <Text style={[styles.contactLabel, { color: "#059669" }]}>WhatsApp</Text>
            <Text style={[styles.contactSub, { color: "#065F46" }]}>Quick response</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.contactCard, { backgroundColor: colors.blueLight, borderColor: colors.border }]}
            onPress={openEmail}
          >
            <Feather name="mail" size={22} color={colors.primary} />
            <Text style={[styles.contactLabel, { color: colors.primary }]}>Email</Text>
            <Text style={[styles.contactSub, { color: colors.navy }]}>Within 24 hours</Text>
          </TouchableOpacity>
        </View>

        {/* FAQ */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.navy }]}>
            Frequently Asked Questions
          </Text>
          <View style={[styles.faqGroup, { borderColor: colors.border }]}>
            {FAQ_ITEMS.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={[
                    styles.faqRow,
                    index < FAQ_ITEMS.length - 1 &&
                      expandedIndex !== index && {
                        borderBottomWidth: 1,
                        borderBottomColor: colors.border,
                      },
                  ]}
                  onPress={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  <Text style={[styles.faqQ, { color: colors.navy }]}>{item.q}</Text>
                  <Feather
                    name={expandedIndex === index ? "chevron-up" : "chevron-down"}
                    size={18}
                    color={colors.mutedForeground}
                  />
                </TouchableOpacity>
                {expandedIndex === index && (
                  <View
                    style={[
                      styles.faqAnswer,
                      {
                        backgroundColor: colors.muted,
                        borderBottomWidth: index < FAQ_ITEMS.length - 1 ? 1 : 0,
                        borderBottomColor: colors.border,
                      },
                    ]}
                  >
                    <Text style={[styles.faqA, { color: colors.navy }]}>{item.a}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* About */}
        <View style={[styles.aboutCard, { backgroundColor: colors.card, borderColor: colors.border, marginHorizontal: 20 }]}>
          <View style={[styles.aboutIcon, { backgroundColor: colors.blueLight }]}>
            <Feather name="info" size={20} color={colors.primary} />
          </View>
          <Text style={[styles.aboutTitle, { color: colors.navy }]}>About This App</Text>
          <Text style={[styles.aboutText, { color: colors.mutedForeground }]}>
            Adventurer Club Manager is built for Seventh-day Adventist Adventurer Club leaders to manage lessons, attendance, members and subscriptions in one simple, friendly place.
          </Text>
          <Text style={[styles.version, { color: colors.mutedForeground }]}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", gap: 14, paddingHorizontal: 20, paddingBottom: 20 },
  title: { fontSize: 22, fontFamily: "Inter_700Bold" },
  contactRow: { flexDirection: "row", paddingHorizontal: 20, gap: 12, marginBottom: 28 },
  contactCard: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    alignItems: "center",
    gap: 8,
  },
  contactLabel: { fontSize: 15, fontFamily: "Inter_700Bold" },
  contactSub: { fontSize: 12, fontFamily: "Inter_400Regular" },
  section: { paddingHorizontal: 20, marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontFamily: "Inter_700Bold", marginBottom: 14 },
  faqGroup: { borderRadius: 16, borderWidth: 1, overflow: "hidden", backgroundColor: "transparent" },
  faqRow: { flexDirection: "row", alignItems: "center", padding: 18, gap: 12, backgroundColor: "#FFFFFF" },
  faqQ: { flex: 1, fontSize: 15, fontFamily: "Inter_500Medium", lineHeight: 22 },
  faqAnswer: { paddingHorizontal: 18, paddingVertical: 14 },
  faqA: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 22 },
  aboutCard: { borderRadius: 20, borderWidth: 1, padding: 24, alignItems: "center", gap: 10 },
  aboutIcon: { width: 52, height: 52, borderRadius: 26, alignItems: "center", justifyContent: "center" },
  aboutTitle: { fontSize: 18, fontFamily: "Inter_700Bold" },
  aboutText: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 22 },
  version: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 4 },
});
