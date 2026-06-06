import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";
import type { Member } from "@/types";

const CLASS_ORDER = ["Little Lamb", "Early Bird", "Busy Bee", "Sunbeam", "Builder", "Helping Hand"];

export default function MembersListScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { members } = useApp();
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? members.filter(
        (m) =>
          m.name.toLowerCase().includes(search.toLowerCase()) ||
          m.adventurerClass.toLowerCase().includes(search.toLowerCase())
      )
    : members;

  const sorted = [...filtered].sort(
    (a, b) =>
      CLASS_ORDER.indexOf(a.adventurerClass) - CLASS_ORDER.indexOf(b.adventurerClass) ||
      a.name.localeCompare(b.name)
  );

  const renderMember = ({ item }: { item: Member }) => (
    <TouchableOpacity
      style={[styles.memberRow, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={() => router.push(`/members/${item.id}`)}
      activeOpacity={0.85}
    >
      <View style={[styles.avatar, { backgroundColor: colors.blueLight }]}>
        <Text style={[styles.avatarText, { color: colors.primary }]}>
          {item.name.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.info}>
        <Text style={[styles.name, { color: colors.navy }]}>{item.name}</Text>
        <View style={styles.metaRow}>
          <Text style={[styles.meta, { color: colors.mutedForeground }]}>
            {item.adventurerClass}
          </Text>
          <Text style={[styles.metaDot, { color: colors.mutedForeground }]}>·</Text>
          <Text style={[styles.meta, { color: colors.mutedForeground }]}>{item.gender}</Text>
          {item.hasPaid && (
            <>
              <Text style={[styles.metaDot, { color: colors.mutedForeground }]}>·</Text>
              <View style={[styles.paidBadge, { backgroundColor: colors.successLight }]}>
                <Text style={[styles.paidText, { color: colors.success }]}>Paid</Text>
              </View>
            </>
          )}
        </View>
      </View>
      <Feather name="chevron-right" size={18} color={colors.mutedForeground} />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: topPad + 8 }]}>
        <View style={styles.titleRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={22} color={colors.navy} />
          </TouchableOpacity>
          <Text style={[styles.title, { color: colors.navy }]}>Members</Text>
          <Text style={[styles.count, { color: colors.mutedForeground }]}>
            {members.length}
          </Text>
        </View>

        <View style={[styles.searchBar, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="search" size={18} color={colors.mutedForeground} />
          <TextInput
            style={[styles.searchInput, { color: colors.navy }]}
            placeholder="Search members..."
            placeholderTextColor={colors.mutedForeground}
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Feather name="x" size={18} color={colors.mutedForeground} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {sorted.length === 0 ? (
        <View style={styles.empty}>
          <Feather name="users" size={40} color={colors.border} />
          <Text style={[styles.emptyTitle, { color: colors.navy }]}>
            {search ? "No results found" : "No members yet"}
          </Text>
          <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
            {search ? "Try a different search" : "Tap the + button to add your first member"}
          </Text>
        </View>
      ) : (
        <FlatList
          data={sorted}
          keyExtractor={(m) => m.id}
          renderItem={renderMember}
          contentContainerStyle={[styles.list, { paddingBottom: bottomPad + 100 }]}
          showsVerticalScrollIndicator={false}
          scrollEnabled={!!sorted.length}
        />
      )}

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary, bottom: bottomPad + 24 }]}
        onPress={() => router.push("/members/new")}
        activeOpacity={0.85}
      >
        <Feather name="plus" size={22} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingBottom: 12, backgroundColor: "#F5F7FA" },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 16 },
  title: { fontSize: 24, fontFamily: "Inter_700Bold", flex: 1 },
  count: { fontSize: 18, fontFamily: "Inter_500Medium" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
  },
  searchInput: { flex: 1, fontSize: 15, fontFamily: "Inter_400Regular" },
  list: { paddingHorizontal: 20, paddingTop: 12, gap: 10 },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    gap: 14,
  },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 18, fontFamily: "Inter_700Bold" },
  info: { flex: 1 },
  name: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  metaRow: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 3 },
  meta: { fontSize: 13, fontFamily: "Inter_400Regular" },
  metaDot: { fontSize: 13 },
  paidBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  paidText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  empty: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12 },
  emptyTitle: { fontSize: 18, fontFamily: "Inter_600SemiBold" },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular", textAlign: "center", paddingHorizontal: 40 },
  fab: {
    position: "absolute",
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});
