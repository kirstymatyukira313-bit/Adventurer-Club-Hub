import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const TAB_ITEMS = [
  { name: "index", label: "Home", icon: "home" },
  { name: "lessons", label: "Lessons", icon: "book-open" },
  { name: "attendance", label: "Attend", icon: "check-circle" },
  { name: "funds", label: "Funds", icon: "dollar-sign" },
  { name: "profile", label: "Profile", icon: "user" },
] as const;

type IconName = (typeof TAB_ITEMS)[number]["icon"];

interface FloatingTabBarProps {
  state: {
    index: number;
    routes: Array<{ key: string; name: string }>;
  };
  navigation: {
    navigate: (name: string) => void;
    emit: (event: {
      type: string;
      target: string;
      canPreventDefault: boolean;
    }) => { defaultPrevented: boolean };
  };
}

interface TabItemProps {
  isActive: boolean;
  label: string;
  icon: IconName;
  onPress: () => void;
  navyColor: string;
  mutedColor: string;
  activeWidth: number;
  inactiveWidth: number;
}

function TabItem({
  isActive,
  label,
  icon,
  onPress,
  navyColor,
  mutedColor,
  activeWidth,
  inactiveWidth,
}: TabItemProps) {
  const widthAnim = useSharedValue(isActive ? activeWidth : inactiveWidth);

  useEffect(() => {
    widthAnim.value = withSpring(isActive ? activeWidth : inactiveWidth, {
      damping: 22,
      stiffness: 220,
      mass: 0.4,
    });
  }, [isActive, activeWidth, inactiveWidth]);

  const animStyle = useAnimatedStyle(() => ({
    width: widthAnim.value,
    overflow: "hidden",
  }));

  return (
    <Animated.View style={animStyle}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel={label}
        accessibilityState={{ selected: isActive }}
        style={[
          styles.tabTouch,
          isActive && [styles.activePill, { backgroundColor: navyColor }],
        ]}
      >
        <Feather
          name={icon}
          size={20}
          color={isActive ? "#FFF" : mutedColor}
        />
        {isActive && (
          <Animated.Text
            style={styles.tabLabel}
            numberOfLines={1}
            entering={FadeIn.duration(180).delay(90)}
            exiting={FadeOut.duration(80)}
          >
            {label}
          </Animated.Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

function FloatingTabBar({ state, navigation }: FloatingTabBarProps) {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { width: screenWidth } = useWindowDimensions();

  const SIDE_MARGIN = 16;
  const PILL_H_PAD = 6;
  const INACTIVE_W = 46;
  const COUNT = TAB_ITEMS.length;

  const containerInner = screenWidth - SIDE_MARGIN * 2 - PILL_H_PAD * 2;
  const activeWidth = Math.max(88, containerInner - (COUNT - 1) * INACTIVE_W);
  const bottomOffset = Platform.OS === "web" ? 16 : insets.bottom + 12;

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.container, { bottom: bottomOffset }]}
      pointerEvents="box-none"
    >
      <View
        style={[
          styles.pillContainer,
          {
            backgroundColor: colors.card,
            borderColor: colors.border,
            shadowColor: colors.navy,
          },
        ]}
      >
        {TAB_ITEMS.map((tab, index) => {
          const route = state.routes[index];
          return (
            <TabItem
              key={tab.name}
              isActive={state.index === index}
              label={tab.label}
              icon={tab.icon}
              navyColor={colors.navy}
              mutedColor={colors.mutedForeground}
              activeWidth={activeWidth}
              inactiveWidth={INACTIVE_W}
              onPress={() => {
                if (!route) return;
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!event.defaultPrevented) {
                  navigation.navigate(tab.name);
                }
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...(props as unknown as FloatingTabBarProps)} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="lessons" />
      <Tabs.Screen name="attendance" />
      <Tabs.Screen name="funds" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 16,
    right: 16,
  },
  pillContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 6,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  tabTouch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 46,
    borderRadius: 24,
    gap: 7,
    paddingHorizontal: 11,
  },
  activePill: {
    paddingHorizontal: 15,
  },
  tabLabel: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
    color: "#FFF",
  },
});
