import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

import { useApp } from "@/context/AppContext";

export default function Index() {
  const { isOnboardingComplete, isLoading } = useApp();

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#35A7FF" }}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  if (isOnboardingComplete) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(onboarding)/welcome" />;
}
