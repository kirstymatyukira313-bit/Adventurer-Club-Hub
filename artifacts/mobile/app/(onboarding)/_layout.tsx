import { Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="role" />
      <Stack.Screen name="setup" />
      <Stack.Screen name="members" />
      <Stack.Screen name="success" />
    </Stack>
  );
}
