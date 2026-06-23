import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
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

import { useAuth } from "@/context/AuthContext";
import { useColors } from "@/hooks/useColors";
import { apiFetch } from "@/utils/api";

interface LookupResult {
  userId: string;
  clubId: string;
  displayName: string;
  clubName: string;
  churchName: string;
}

export default function LoginScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { login } = useAuth();

  const [name, setName] = useState("");
  const [results, setResults] = useState<LookupResult[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  const handleSearch = async () => {
    if (!name.trim()) return;
    setLoading(true);
    setError("");
    setResults(null);
    try {
      const data = await apiFetch<LookupResult[]>(
        `/auth/lookup?name=${encodeURIComponent(name.trim())}`,
      );
      setResults(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Not found";
      if (msg.includes("No account")) {
        setError("No account found with that name. Check spelling or set up a new club.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = async (result: LookupResult) => {
    setSigningIn(true);
    try {
      await login(result.userId, result.clubId, result.displayName);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      router.replace("/(tabs)");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSigningIn(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FEFFFE" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingTop: topPad + 24, paddingBottom: bottomPad + 40 },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.back}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={[styles.backText, { color: colors.primary }]}>← Back</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { color: colors.navy }]}>Welcome Back</Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Enter the name you used when you first set up your club.
        </Text>

        <View style={styles.inputRow}>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: colors.border,
                backgroundColor: colors.input,
                color: colors.navy,
              },
            ]}
            placeholder="Your full name"
            placeholderTextColor={colors.mutedForeground}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity
            style={[
              styles.searchBtn,
              { backgroundColor: name.trim() ? colors.primary : colors.border },
            ]}
            onPress={handleSearch}
            disabled={!name.trim() || loading}
            activeOpacity={0.85}
          >
            {loading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.searchBtnText}>Find</Text>
            )}
          </TouchableOpacity>
        </View>

        {error ? (
          <View style={[styles.errorBox, { backgroundColor: colors.destructiveLight ?? "#FEE2E2" }]}>
            <Text style={[styles.errorText, { color: colors.destructive ?? "#DC2626" }]}>
              {error}
            </Text>
          </View>
        ) : null}

        {results && results.length > 0 && (
          <View style={styles.results}>
            <Text style={[styles.resultsLabel, { color: colors.mutedForeground }]}>
              {results.length === 1 ? "Found your account:" : `Found ${results.length} accounts:`}
            </Text>
            {results.map((r) => (
              <TouchableOpacity
                key={r.userId}
                style={[styles.resultCard, { borderColor: colors.border, backgroundColor: colors.card }]}
                onPress={() => handleSelect(r)}
                disabled={signingIn}
                activeOpacity={0.85}
              >
                <View style={styles.resultInfo}>
                  <Text style={[styles.resultName, { color: colors.navy }]}>{r.displayName}</Text>
                  <Text style={[styles.resultClub, { color: colors.mutedForeground }]}>
                    {r.clubName} · {r.churchName}
                  </Text>
                </View>
                {signingIn ? (
                  <ActivityIndicator color={colors.primary} size="small" />
                ) : (
                  <Text style={[styles.resultArrow, { color: colors.primary }]}>→</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 24 },
  back: { marginBottom: 32 },
  backText: { fontSize: 15, fontFamily: "Inter_500Medium" },
  title: { fontSize: 26, fontFamily: "Inter_700Bold", lineHeight: 34, marginBottom: 8 },
  subtitle: { fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 22, marginBottom: 28 },
  inputRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  input: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
  },
  searchBtn: {
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 64,
  },
  searchBtnText: { color: "#fff", fontSize: 15, fontFamily: "Inter_600SemiBold" },
  errorBox: { borderRadius: 10, padding: 14, marginBottom: 16 },
  errorText: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 20 },
  results: { gap: 10 },
  resultsLabel: { fontSize: 13, fontFamily: "Inter_500Medium", marginBottom: 4 },
  resultCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1.5,
  },
  resultInfo: { flex: 1 },
  resultName: { fontSize: 16, fontFamily: "Inter_600SemiBold", marginBottom: 2 },
  resultClub: { fontSize: 13, fontFamily: "Inter_400Regular" },
  resultArrow: { fontSize: 20, fontFamily: "Inter_600SemiBold" },
});
