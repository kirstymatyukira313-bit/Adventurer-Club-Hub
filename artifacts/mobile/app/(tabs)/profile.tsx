import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";
import type { LeaderRole } from "@/types";

interface MenuItem {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  sublabel?: string;
  onPress: () => void;
  color?: string;
  future?: boolean;
}

export default function ProfileScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { club, members, logout, reminders, updateClub } = useApp();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [editClubName, setEditClubName] = useState("");
  const [editChurchName, setEditChurchName] = useState("");
  const [editLeaderName, setEditLeaderName] = useState("");
  const [editRole, setEditRole] = useState<LeaderRole>("Club Leader");

  function openEditModal() {
    setEditClubName(club.name);
    setEditChurchName(club.churchName);
    setEditLeaderName(club.leaderName);
    setEditRole((club.role as LeaderRole) ?? "Club Leader");
    setShowEditModal(true);
  }

  function handleSaveEdit() {
    const trimmedClub = editClubName.trim();
    const trimmedChurch = editChurchName.trim();
    const trimmedLeader = editLeaderName.trim();
    if (!trimmedClub || !trimmedChurch || !trimmedLeader) return;
    updateClub({
      name: trimmedClub,
      churchName: trimmedChurch,
      leaderName: trimmedLeader,
      role: editRole,
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setShowEditModal(false);
  }

  const editIsValid = editClubName.trim() && editChurchName.trim() && editLeaderName.trim();

  const handleLogout = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    logout();
    setShowLogoutModal(false);
    router.replace("/(onboarding)/welcome");
  };

  const menuSections: { title: string; items: MenuItem[] }[] = [
    {
      title: "Club Management",
      items: [
        {
          icon: "edit-2",
          label: "Edit Details",
          sublabel: "Club name, church, leader",
          onPress: openEditModal,
        },
        {
          icon: "users",
          label: "Manage Members",
          sublabel: `${members.length} member${members.length !== 1 ? "s" : ""}`,
          onPress: () => router.push("/members"),
        },
        {
          icon: "user-plus",
          label: "Invite Teachers",
          sublabel: "Coming soon",
          onPress: () => {},
          future: true,
        },
        {
          icon: "calendar",
          label: "Curriculum Planning",
          sublabel: "Manage lesson sequences",
          onPress: () => router.push("/curriculum"),
        },
      ],
    },
    {
      title: "Reminders",
      items: [
        {
          icon: "bell",
          label: "Meeting Reminders",
          sublabel: reminders?.enabled
            ? `On — ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][reminders.meetingDay]}s`
            : "Off",
          onPress: () => router.push("/reminders"),
        },
      ],
    },
    {
      title: "Reports & Support",
      items: [
        {
          icon: "download",
          label: "Export Reports",
          sublabel: "PDF & CSV reports",
          onPress: () =>
            Alert.alert("Export Reports", "Report export will be available in the next update.", [{ text: "OK" }]),
        },
        {
          icon: "help-circle",
          label: "Help & Support",
          sublabel: "FAQ, contact, WhatsApp",
          onPress: () => router.push("/help"),
        },
      ],
    },
    {
      title: "Account",
      items: [
        {
          icon: "log-out",
          label: "Log Out",
          onPress: () => setShowLogoutModal(true),
          color: colors.destructive,
        },
      ],
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: topPad + 8, paddingBottom: bottomPad + 100 }}
      >
        {/* Club Info Header */}
        <View style={[styles.clubCard, { backgroundColor: colors.navy, marginHorizontal: 20 }]}>
          <View style={styles.clubAvatar}>
            <Text style={styles.clubAvatarText}>
              {(club.name || "A")[0]?.toUpperCase() ?? "A"}
            </Text>
          </View>
          <View style={styles.clubInfo}>
            <Text style={styles.clubName}>{club.name || "My Adventurer Club"}</Text>
            <Text style={styles.churchName}>{club.churchName || "My Church"}</Text>
          </View>
          <TouchableOpacity
            style={[styles.editHeaderBtn, { backgroundColor: "rgba(255,255,255,0.15)" }]}
            onPress={openEditModal}
            activeOpacity={0.8}
          >
            <Feather name="edit-2" size={15} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={[styles.leaderRow, { backgroundColor: colors.card, borderColor: colors.border, marginHorizontal: 20 }]}>
          <View style={[styles.leaderAvatar, { backgroundColor: colors.blueLight }]}>
            <Text style={[styles.leaderAvatarText, { color: colors.primary }]}>
              {(club.leaderName || "L")[0]?.toUpperCase() ?? "L"}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.leaderName, { color: colors.navy }]}>
              {club.leaderName || "Club Leader"}
            </Text>
            {club.conference ? (
              <Text style={[styles.leaderSub, { color: colors.mutedForeground }]}>
                {club.conference}
              </Text>
            ) : null}
          </View>
          <View style={[styles.roleBadge, { backgroundColor: colors.blueLight }]}>
            <Text style={[styles.roleText, { color: colors.primary }]}>{club.role || "Leader"}</Text>
          </View>
        </View>

        {menuSections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.mutedForeground }]}>
              {section.title}
            </Text>
            <View style={[styles.menuGroup, { backgroundColor: colors.card, borderColor: colors.border }]}>
              {section.items.map((item, index) => (
                <TouchableOpacity
                  key={item.label}
                  style={[
                    styles.menuItem,
                    index < section.items.length - 1 && {
                      borderBottomWidth: 1,
                      borderBottomColor: colors.border,
                    },
                  ]}
                  onPress={item.future ? undefined : item.onPress}
                  activeOpacity={item.future ? 1 : 0.7}
                >
                  <View
                    style={[
                      styles.menuIcon,
                      { backgroundColor: item.color ? `${item.color}15` : colors.blueLight },
                    ]}
                  >
                    <Feather name={item.icon} size={18} color={item.color ?? colors.primary} />
                  </View>
                  <View style={styles.menuText}>
                    <Text style={[styles.menuLabel, { color: item.color ?? colors.navy }]}>
                      {item.label}
                    </Text>
                    {item.sublabel && (
                      <Text style={[styles.menuSublabel, { color: item.future ? colors.warning : colors.mutedForeground }]}>
                        {item.sublabel}
                      </Text>
                    )}
                  </View>
                  {!item.future && (
                    <Feather name="chevron-right" size={18} color={colors.mutedForeground} />
                  )}
                  {item.future && (
                    <View style={[styles.futureBadge, { backgroundColor: colors.warningLight }]}>
                      <Text style={[styles.futureText, { color: colors.warning }]}>Soon</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <Text style={[styles.version, { color: colors.mutedForeground }]}>
          Adventurer Club Manager v1.0
        </Text>
      </ScrollView>

      {/* ── Edit Details Modal ── */}
      <Modal visible={showEditModal} transparent animationType="slide">
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <TouchableOpacity
            style={styles.editOverlay}
            activeOpacity={1}
            onPress={() => setShowEditModal(false)}
          >
            <TouchableOpacity activeOpacity={1} onPress={() => {}}>
              <View style={[styles.editSheet, { backgroundColor: colors.card }]}>
                <View style={[styles.sheetHandle, { backgroundColor: colors.border }]} />

                <View style={styles.editHeader}>
                  <Text style={[styles.editTitle, { color: colors.navy }]}>Edit Club Details</Text>
                  <TouchableOpacity onPress={() => setShowEditModal(false)} style={styles.editCloseBtn}>
                    <Feather name="x" size={22} color={colors.mutedForeground} />
                  </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                  <View style={styles.editForm}>
                    <View style={styles.editField}>
                      <Text style={[styles.editLabel, { color: colors.navy }]}>Club Name</Text>
                      <TextInput
                        style={[styles.editInput, { borderColor: colors.border, backgroundColor: colors.background, color: colors.navy }]}
                        value={editClubName}
                        onChangeText={setEditClubName}
                        placeholder="e.g. Eastside Adventurers"
                        placeholderTextColor={colors.mutedForeground}
                        returnKeyType="next"
                      />
                    </View>

                    <View style={styles.editField}>
                      <Text style={[styles.editLabel, { color: colors.navy }]}>Church Name</Text>
                      <TextInput
                        style={[styles.editInput, { borderColor: colors.border, backgroundColor: colors.background, color: colors.navy }]}
                        value={editChurchName}
                        onChangeText={setEditChurchName}
                        placeholder="e.g. Eastside SDA Church"
                        placeholderTextColor={colors.mutedForeground}
                        returnKeyType="next"
                      />
                    </View>

                    <View style={styles.editField}>
                      <Text style={[styles.editLabel, { color: colors.navy }]}>Leader Name</Text>
                      <TextInput
                        style={[styles.editInput, { borderColor: colors.border, backgroundColor: colors.background, color: colors.navy }]}
                        value={editLeaderName}
                        onChangeText={setEditLeaderName}
                        placeholder="e.g. Kirsty Johnson"
                        placeholderTextColor={colors.mutedForeground}
                        returnKeyType="done"
                      />
                    </View>

                    <View style={styles.editField}>
                      <Text style={[styles.editLabel, { color: colors.navy }]}>Role</Text>
                      <View style={styles.roleToggle}>
                        {(["Club Leader", "Deputy Leader"] as LeaderRole[]).map((r) => (
                          <TouchableOpacity
                            key={r}
                            style={[
                              styles.roleToggleBtn,
                              {
                                backgroundColor: editRole === r ? colors.primary : colors.background,
                                borderColor: editRole === r ? colors.primary : colors.border,
                              },
                            ]}
                            onPress={() => setEditRole(r)}
                          >
                            <Text style={[styles.roleToggleText, { color: editRole === r ? "#FFF" : colors.mutedForeground }]}>
                              {r}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </View>
                </ScrollView>

                <View style={styles.editActions}>
                  <TouchableOpacity
                    style={[styles.editCancelBtn, { borderColor: colors.border }]}
                    onPress={() => setShowEditModal(false)}
                  >
                    <Text style={[styles.editCancelText, { color: colors.navy }]}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.editSaveBtn,
                      { backgroundColor: editIsValid ? colors.primary : colors.border },
                    ]}
                    onPress={handleSaveEdit}
                    disabled={!editIsValid}
                    activeOpacity={0.85}
                  >
                    <Feather name="check" size={16} color="#FFF" />
                    <Text style={styles.editSaveText}>Save Changes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modal>

      {/* Logout Modal */}
      <Modal visible={showLogoutModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={[styles.modalCard, { backgroundColor: colors.card }]}>
            <View style={[styles.modalIcon, { backgroundColor: "#FEE2E2" }]}>
              <Feather name="log-out" size={24} color={colors.destructive} />
            </View>
            <Text style={[styles.modalTitle, { color: colors.navy }]}>Log Out?</Text>
            <Text style={[styles.modalText, { color: colors.mutedForeground }]}>
              Are you sure you want to log out? Your club data will be cleared.
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.cancelBtn, { borderColor: colors.border }]}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={[styles.cancelText, { color: colors.navy }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.logoutBtn, { backgroundColor: colors.destructive }]}
                onPress={handleLogout}
              >
                <Text style={styles.logoutText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  clubCard: { borderRadius: 20, padding: 20, flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 12 },
  clubAvatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
  clubAvatarText: { color: "#FFF", fontSize: 22, fontFamily: "Inter_700Bold" },
  clubInfo: { flex: 1 },
  clubName: { color: "#FFF", fontSize: 17, fontFamily: "Inter_700Bold" },
  churchName: { color: "rgba(255,255,255,0.7)", fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  editHeaderBtn: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  leaderRow: { flexDirection: "row", alignItems: "center", gap: 14, padding: 16, borderRadius: 16, borderWidth: 1, marginBottom: 24 },
  leaderAvatar: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  leaderAvatarText: { fontSize: 18, fontFamily: "Inter_700Bold" },
  leaderName: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  leaderSub: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  roleBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  roleText: { fontSize: 12, fontFamily: "Inter_600SemiBold" },
  section: { paddingHorizontal: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 12, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 10 },
  menuGroup: { borderRadius: 16, borderWidth: 1, overflow: "hidden" },
  menuItem: { flexDirection: "row", alignItems: "center", padding: 16, gap: 14 },
  menuIcon: { width: 40, height: 40, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  menuText: { flex: 1 },
  menuLabel: { fontSize: 16, fontFamily: "Inter_600SemiBold" },
  menuSublabel: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  futureBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  futureText: { fontSize: 11, fontFamily: "Inter_600SemiBold" },
  version: { textAlign: "center", fontSize: 13, fontFamily: "Inter_400Regular", paddingVertical: 8 },
  // Edit Modal
  editOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  editSheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, paddingTop: 12, paddingHorizontal: 24, paddingBottom: 40 },
  sheetHandle: { width: 40, height: 4, borderRadius: 2, alignSelf: "center", marginBottom: 20 },
  editHeader: { flexDirection: "row", alignItems: "center", marginBottom: 24 },
  editTitle: { flex: 1, fontSize: 20, fontFamily: "Inter_700Bold" },
  editCloseBtn: { padding: 4 },
  editForm: { gap: 20, paddingBottom: 16 },
  editField: { gap: 8 },
  editLabel: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  editInput: { borderWidth: 1.5, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 14, fontSize: 15, fontFamily: "Inter_400Regular" },
  roleToggle: { flexDirection: "row", gap: 10 },
  roleToggleBtn: { flex: 1, paddingVertical: 12, borderRadius: 12, borderWidth: 1.5, alignItems: "center" },
  roleToggleText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  editActions: { flexDirection: "row", gap: 12, marginTop: 8 },
  editCancelBtn: { flex: 1, paddingVertical: 16, borderRadius: 14, alignItems: "center", borderWidth: 1.5 },
  editCancelText: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  editSaveBtn: { flex: 2, paddingVertical: 16, borderRadius: 14, alignItems: "center", flexDirection: "row", justifyContent: "center", gap: 8 },
  editSaveText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },
  // Logout Modal
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 24 },
  modalCard: { borderRadius: 24, padding: 28, width: "100%", alignItems: "center", gap: 12 },
  modalIcon: { width: 60, height: 60, borderRadius: 30, alignItems: "center", justifyContent: "center" },
  modalTitle: { fontSize: 20, fontFamily: "Inter_700Bold" },
  modalText: { fontSize: 15, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 22 },
  modalActions: { flexDirection: "row", gap: 12, width: "100%", marginTop: 8 },
  cancelBtn: { flex: 1, paddingVertical: 16, borderRadius: 14, alignItems: "center", borderWidth: 1.5 },
  cancelText: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  logoutBtn: { flex: 1, paddingVertical: 16, borderRadius: 14, alignItems: "center" },
  logoutText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },
});
