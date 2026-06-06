import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import type { ReminderSettings } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const HOURS = Array.from({ length: 24 }, (_, i) => i);

function fmt12(hour: number, minute: number) {
  const ampm = hour < 12 ? "AM" : "PM";
  const h = hour % 12 === 0 ? 12 : hour % 12;
  const m = minute.toString().padStart(2, "0");
  return `${h}:${m} ${ampm}`;
}

function prevDay(day: number) {
  return (day + 6) % 7;
}

async function requestPermission(): Promise<boolean> {
  if (Platform.OS === "web") return false;
  const current = (await Notifications.getPermissionsAsync()) as { status: string };
  if (current.status === "granted") return true;
  const result = (await Notifications.requestPermissionsAsync()) as { status: string };
  return result.status === "granted";
}

async function cancelAll() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

async function scheduleReminders(
  settings: ReminderSettings,
  clubName: string
): Promise<void> {
  await cancelAll();
  if (!settings.enabled) return;

  const name = clubName || "Adventurer Club";

  if (settings.morningReminder) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `📚 Club meeting today!`,
        body: `${name} meets today. You're ready — go lead those Adventurers!`,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
        weekday: settings.meetingDay + 1,
        hour: settings.meetingHour,
        minute: settings.meetingMinute,
      },
    });
  }

  if (settings.prepReminder) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `🗓️ Club meeting tomorrow`,
        body: `${name} meets tomorrow. Prep your lesson materials tonight!`,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
        weekday: prevDay(settings.meetingDay) + 1,
        hour: 19,
        minute: 0,
      },
    });
  }
}

export default function RemindersScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { reminders, updateReminders, club } = useApp();
  const [local, setLocal] = useState<ReminderSettings>(
    reminders ?? {
      enabled: false,
      meetingDay: 6,
      meetingHour: 8,
      meetingMinute: 0,
      morningReminder: true,
      prepReminder: true,
    }
  );
  const [saving, setSaving] = useState(false);
  const [permGranted, setPermGranted] = useState<boolean | null>(null);

  useEffect(() => {
    if (Platform.OS !== "web") {
      Notifications.getPermissionsAsync().then((r) => {
        setPermGranted((r as { status: string }).status === "granted");
      });
    }
  }, []);

  function update(patch: Partial<ReminderSettings>) {
    setLocal((prev) => ({ ...prev, ...patch }));
  }

  async function handleToggleEnabled(val: boolean) {
    if (val && Platform.OS !== "web") {
      const granted = await requestPermission();
      if (!granted) {
        Alert.alert(
          "Permission needed",
          "Please allow notifications in your phone settings so we can remind you about club meetings.",
          [{ text: "OK" }]
        );
        return;
      }
      setPermGranted(true);
    }
    update({ enabled: val });
  }

  async function handleSave() {
    setSaving(true);
    try {
      if (Platform.OS !== "web") {
        await scheduleReminders(local, club.name);
      }
      updateReminders(local);
      Alert.alert(
        local.enabled ? "Reminders set! ✅" : "Reminders off",
        local.enabled
          ? `You'll be reminded on ${DAYS_FULL[local.meetingDay]} at ${fmt12(local.meetingHour, local.meetingMinute)}.`
          : "All meeting reminders have been cancelled.",
        [{ text: "Done", onPress: () => router.back() }]
      );
    } finally {
      setSaving(false);
    }
  }

  if (Platform.OS === "web") {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={{ paddingTop: topPad + 8, paddingHorizontal: 20 }}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={[styles.backText, { color: colors.primary }]}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.navy, marginTop: 16 }]}>Reminders</Text>
        </View>
        <View style={styles.webNotice}>
          <Text style={styles.webNoticeIcon}>🔔</Text>
          <Text style={[styles.webNoticeTitle, { color: colors.navy }]}>
            Available on your phone
          </Text>
          <Text style={[styles.webNoticeText, { color: colors.mutedForeground }]}>
            Push reminders only work on the Expo Go app (iOS or Android). Open the app on your phone to set up meeting reminders.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: topPad + 8, paddingBottom: bottomPad + 40 }}
      >
        <View style={{ paddingHorizontal: 20, marginBottom: 4 }}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={[styles.backText, { color: colors.primary }]}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.navy }]}>Meeting Reminders</Text>
          <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
            Get notified before each club meeting
          </Text>
        </View>

        {/* Master toggle */}
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, marginTop: 20 }]}>
          <View style={styles.row}>
            <View style={[styles.iconBox, { backgroundColor: "#35A7FF20" }]}>
              <Text style={styles.iconText}>🔔</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.rowLabel, { color: colors.navy }]}>Enable reminders</Text>
              <Text style={[styles.rowSub, { color: colors.mutedForeground }]}>
                {local.enabled ? "Notifications are on" : "Notifications are off"}
              </Text>
            </View>
            <Switch
              value={local.enabled}
              onValueChange={handleToggleEnabled}
              trackColor={{ true: "#35A7FF", false: colors.muted }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {local.enabled && (
          <>
            {/* Meeting day */}
            <View style={[styles.section]}>
              <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
                MEETING DAY
              </Text>
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <View style={styles.dayRow}>
                  {DAYS.map((day, i) => {
                    const active = local.meetingDay === i;
                    return (
                      <TouchableOpacity
                        key={day}
                        onPress={() => update({ meetingDay: i })}
                        style={[
                          styles.dayBtn,
                          {
                            backgroundColor: active ? "#35A7FF" : colors.background,
                            borderColor: active ? "#35A7FF" : colors.border,
                          },
                        ]}
                        activeOpacity={0.8}
                      >
                        <Text style={[styles.dayText, { color: active ? "#fff" : colors.mutedForeground }]}>
                          {day}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <Text style={[styles.dayFullLabel, { color: colors.mutedForeground }]}>
                  {DAYS_FULL[local.meetingDay]}s
                </Text>
              </View>
            </View>

            {/* Reminder time */}
            <View style={styles.section}>
              <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
                MORNING REMINDER TIME
              </Text>
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <Text style={[styles.timeDisplay, { color: colors.navy }]}>
                  {fmt12(local.meetingHour, local.meetingMinute)}
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{ flexDirection: "row", gap: 8, paddingVertical: 4 }}>
                    {HOURS.map((h) => {
                      const active = local.meetingHour === h;
                      return (
                        <TouchableOpacity
                          key={h}
                          onPress={() => update({ meetingHour: h })}
                          style={[
                            styles.hourChip,
                            {
                              backgroundColor: active ? "#35A7FF" : colors.background,
                              borderColor: active ? "#35A7FF" : colors.border,
                            },
                          ]}
                          activeOpacity={0.8}
                        >
                          <Text style={[styles.hourText, { color: active ? "#fff" : colors.mutedForeground }]}>
                            {fmt12(h, 0).replace(":00 ", " ")}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>

            {/* Reminder types */}
            <View style={styles.section}>
              <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
                REMINDER TYPES
              </Text>
              <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, gap: 0 }]}>
                <View style={[styles.row, { borderBottomWidth: 1, borderBottomColor: colors.border }]}>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.rowLabel, { color: colors.navy }]}>Day-of reminder</Text>
                    <Text style={[styles.rowSub, { color: colors.mutedForeground }]}>
                      Morning of your {DAYS_FULL[local.meetingDay]} meeting
                    </Text>
                  </View>
                  <Switch
                    value={local.morningReminder}
                    onValueChange={(v) => update({ morningReminder: v })}
                    trackColor={{ true: "#35A7FF", false: colors.muted }}
                    thumbColor="#fff"
                  />
                </View>
                <View style={styles.row}>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.rowLabel, { color: colors.navy }]}>Prep reminder</Text>
                    <Text style={[styles.rowSub, { color: colors.mutedForeground }]}>
                      Evening before — get your materials ready
                    </Text>
                  </View>
                  <Switch
                    value={local.prepReminder}
                    onValueChange={(v) => update({ prepReminder: v })}
                    trackColor={{ true: "#35A7FF", false: colors.muted }}
                    thumbColor="#fff"
                  />
                </View>
              </View>
            </View>

            {/* Preview */}
            <View style={styles.section}>
              <Text style={[styles.sectionLabel, { color: colors.mutedForeground }]}>
                PREVIEW
              </Text>
              <View style={{ gap: 10 }}>
                {local.prepReminder && (
                  <View style={[styles.previewCard, { backgroundColor: "#F8FAFF", borderColor: "#35A7FF30" }]}>
                    <Text style={styles.previewTime}>
                      {DAYS_FULL[prevDay(local.meetingDay)]} at 7:00 PM
                    </Text>
                    <Text style={[styles.previewTitle, { color: colors.navy }]}>
                      🗓️ Club meeting tomorrow
                    </Text>
                    <Text style={[styles.previewBody, { color: colors.mutedForeground }]}>
                      {club.name || "Adventurer Club"} meets tomorrow. Prep your lesson materials tonight!
                    </Text>
                  </View>
                )}
                {local.morningReminder && (
                  <View style={[styles.previewCard, { backgroundColor: "#F8FAFF", borderColor: "#35A7FF30" }]}>
                    <Text style={styles.previewTime}>
                      {DAYS_FULL[local.meetingDay]} at {fmt12(local.meetingHour, local.meetingMinute)}
                    </Text>
                    <Text style={[styles.previewTitle, { color: colors.navy }]}>
                      📚 Club meeting today!
                    </Text>
                    <Text style={[styles.previewBody, { color: colors.mutedForeground }]}>
                      {club.name || "Adventurer Club"} meets today. You're ready — go lead those Adventurers!
                    </Text>
                  </View>
                )}
                {!local.morningReminder && !local.prepReminder && (
                  <Text style={[styles.rowSub, { color: colors.mutedForeground, paddingHorizontal: 4 }]}>
                    Enable at least one reminder type above.
                  </Text>
                )}
              </View>
            </View>
          </>
        )}

        <TouchableOpacity
          style={[styles.saveBtn, { backgroundColor: "#35A7FF", opacity: saving ? 0.7 : 1 }]}
          onPress={handleSave}
          disabled={saving}
          activeOpacity={0.85}
        >
          <Text style={styles.saveBtnText}>
            {saving ? "Saving…" : local.enabled ? "Save Reminders" : "Turn Off & Save"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: { marginBottom: 4 },
  backText: { fontSize: 18, fontFamily: "Inter_400Regular" },
  title: { fontSize: 26, fontFamily: "Inter_700Bold", lineHeight: 34 },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", marginTop: 4 },
  section: { paddingHorizontal: 20, marginBottom: 16 },
  sectionLabel: { fontSize: 12, fontFamily: "Inter_600SemiBold", letterSpacing: 1, marginBottom: 10 },
  card: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    gap: 12,
  },
  row: { flexDirection: "row", alignItems: "center", gap: 14, padding: 4 },
  iconBox: { width: 42, height: 42, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  iconText: { fontSize: 20 },
  rowLabel: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  rowSub: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  dayRow: { flexDirection: "row", gap: 6, justifyContent: "space-between" },
  dayBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: "center",
  },
  dayText: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  dayFullLabel: { fontSize: 13, fontFamily: "Inter_400Regular", textAlign: "center" },
  timeDisplay: { fontSize: 32, fontFamily: "Inter_700Bold", textAlign: "center" },
  hourChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  hourText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  previewCard: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 4,
  },
  previewTime: { fontSize: 11, fontFamily: "Inter_500Medium", color: "#35A7FF", textTransform: "uppercase", letterSpacing: 0.5 },
  previewTitle: { fontSize: 15, fontFamily: "Inter_700Bold" },
  previewBody: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 18 },
  saveBtn: {
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  saveBtnText: { color: "#fff", fontSize: 17, fontFamily: "Inter_700Bold" },
  webNotice: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 40, gap: 16 },
  webNoticeIcon: { fontSize: 56 },
  webNoticeTitle: { fontSize: 22, fontFamily: "Inter_700Bold", textAlign: "center" },
  webNoticeText: { fontSize: 15, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 22 },
});
