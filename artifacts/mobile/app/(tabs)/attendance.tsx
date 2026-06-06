import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";
import type { Member } from "@/types";

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0] ?? "";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export default function AttendanceScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { members, saveAttendance, getAttendanceForDate } = useApp();
  const today = getTodayDate();

  const [presentMap, setPresentMap] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const existing = getAttendanceForDate(today);
    const map: Record<string, boolean> = {};
    if (existing.length > 0) {
      existing.forEach((r) => {
        map[r.memberId] = r.present;
      });
    } else {
      members.forEach((m) => {
        map[m.id] = true;
      });
    }
    setPresentMap(map);
  }, [members.length]);

  const toggle = (memberId: string) => {
    Haptics.selectionAsync();
    setSaved(false);
    setPresentMap((prev) => ({ ...prev, [memberId]: !prev[memberId] }));
  };

  const handleSave = () => {
    const records = members.map((m) => ({
      memberId: m.id,
      present: presentMap[m.id] !== false,
    }));
    saveAttendance(today, records);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setSaved(true);
  };

  const presentCount = members.filter((m) => presentMap[m.id] !== false).length;
  const absentCount = members.length - presentCount;

  const renderMember = ({ item }: { item: Member }) => {
    const isPresent = presentMap[item.id] !== false;
    return (
      <TouchableOpacity
        style={[
          styles.memberRow,
          {
            backgroundColor: colors.card,
            borderColor: isPresent ? colors.border : "#FEE2E2",
          },
        ]}
        onPress={() => toggle(item.id)}
        activeOpacity={0.85}
      >
        <View
          style={[
            styles.avatar,
            { backgroundColor: isPresent ? colors.successLight : "#FEE2E2" },
          ]}
        >
          <Text style={[styles.avatarText, { color: isPresent ? colors.success : colors.destructive }]}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.memberInfo}>
          <Text style={[styles.memberName, { color: colors.navy }]}>{item.name}</Text>
          <Text style={[styles.memberClass, { color: colors.mutedForeground }]}>
            {item.adventurerClass}
          </Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: isPresent ? colors.successLight : "#FEE2E2",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: isPresent ? colors.success : colors.destructive },
            ]}
          >
            {isPresent ? "Present" : "Absent"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8, backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.navy }]}>Attendance</Text>
        <Text style={[styles.dateText, { color: colors.mutedForeground }]}>
          {formatDate(today)}
        </Text>

        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, { backgroundColor: colors.successLight }]}>
            <Feather name="check-circle" size={18} color={colors.success} />
            <Text style={[styles.summaryNum, { color: colors.success }]}>{presentCount}</Text>
            <Text style={[styles.summaryLabel, { color: colors.success }]}>Present</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: "#FEE2E2" }]}>
            <Feather name="x-circle" size={18} color={colors.destructive} />
            <Text style={[styles.summaryNum, { color: colors.destructive }]}>{absentCount}</Text>
            <Text style={[styles.summaryLabel, { color: colors.destructive }]}>Absent</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: colors.muted }]}>
            <Feather name="users" size={18} color={colors.mutedForeground} />
            <Text style={[styles.summaryNum, { color: colors.navy }]}>{members.length}</Text>
            <Text style={[styles.summaryLabel, { color: colors.mutedForeground }]}>Total</Text>
          </View>
        </View>

        {members.length > 0 && (
          <Text style={[styles.hint, { color: colors.mutedForeground }]}>
            Tap a member to mark absent
          </Text>
        )}
      </View>

      {members.length === 0 ? (
        <View style={styles.empty}>
          <Feather name="users" size={40} color={colors.border} />
          <Text style={[styles.emptyTitle, { color: colors.navy }]}>No members yet</Text>
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
            Add club members from the Profile tab
          </Text>
        </View>
      ) : (
        <FlatList
          data={members}
          keyExtractor={(m) => m.id}
          renderItem={renderMember}
          contentContainerStyle={[
            styles.list,
            { paddingBottom: bottomPad + 110 },
          ]}
          showsVerticalScrollIndicator={false}
          scrollEnabled={!!members.length}
        />
      )}

      <View
        style={[
          styles.footer,
          {
            paddingBottom: bottomPad + 16,
            backgroundColor: colors.background,
            borderTopColor: colors.border,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.saveBtn,
            { backgroundColor: saved ? colors.success : colors.primary },
          ]}
          onPress={handleSave}
          activeOpacity={0.85}
        >
          <Feather name={saved ? "check" : "save"} size={18} color="#FFF" />
          <Text style={styles.saveBtnText}>
            {saved ? "Attendance Saved" : "Save Attendance"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingBottom: 12 },
  title: { fontSize: 28, fontFamily: "Inter_700Bold", lineHeight: 36 },
  dateText: { fontSize: 14, fontFamily: "Inter_400Regular", marginTop: 4, marginBottom: 16 },
  summaryRow: { flexDirection: "row", gap: 12, marginBottom: 16 },
  summaryCard: {
    flex: 1,
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    gap: 4,
  },
  summaryNum: { fontSize: 22, fontFamily: "Inter_700Bold" },
  summaryLabel: { fontSize: 12, fontFamily: "Inter_500Medium" },
  hint: { fontSize: 13, fontFamily: "Inter_400Regular", marginBottom: 4 },
  list: { paddingHorizontal: 20, paddingTop: 8, gap: 10 },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 14,
    gap: 14,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 18, fontFamily: "Inter_700Bold" },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  memberClass: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  statusBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  statusText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  empty: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  emptyTitle: { fontSize: 18, fontFamily: "Inter_600SemiBold" },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", paddingHorizontal: 40 },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  saveBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderRadius: 16,
    gap: 10,
  },
  saveBtnText: { color: "#FFF", fontSize: 16, fontFamily: "Inter_600SemiBold" },
});
