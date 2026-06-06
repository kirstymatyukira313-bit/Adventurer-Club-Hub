import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  FlatList,
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

import { JarProgress } from "@/components/JarProgress";
import { useApp } from "@/context/AppContext";
import { useColors } from "@/hooks/useColors";
import type { Member } from "@/types";

type FundsTab = "All" | "Paid" | "Unpaid";

const EXPENSE_TYPES = ["Supplies", "Craft Materials", "Food", "Transport", "Venue", "Awards", "Other"];

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0] ?? "";
}

export default function FundsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const { members, subscriptionTarget, subscriptionAmount, expenses, markMemberPaid, addExpense, getTotalCollected, getTotalExpenses } = useApp();
  const [activeTab, setActiveTab] = useState<FundsTab>("All");
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [expenseDate, setExpenseDate] = useState(getTodayDate());
  const [expenseType, setExpenseType] = useState("Supplies");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDesc, setExpenseDesc] = useState("");

  const totalCollected = getTotalCollected();
  const totalExpenses = getTotalExpenses();
  const fundProgress = subscriptionTarget > 0 ? Math.min(1, totalCollected / subscriptionTarget) : 0;
  const fundPercent = Math.round(fundProgress * 100);
  const unpaidCount = members.filter((m) => !m.hasPaid).length;
  const cashInHand = totalCollected - totalExpenses;

  const filteredMembers =
    activeTab === "All"
      ? members
      : activeTab === "Paid"
      ? members.filter((m) => m.hasPaid)
      : members.filter((m) => !m.hasPaid);

  const handleTogglePaid = (member: Member) => {
    Haptics.selectionAsync();
    markMemberPaid(member.id, !member.hasPaid);
  };

  const handleSaveExpense = () => {
    const amount = parseFloat(expenseAmount);
    if (!amount || amount <= 0) return;
    addExpense({
      date: expenseDate,
      type: expenseType,
      amount,
      description: expenseDesc.trim(),
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setShowExpenseModal(false);
    setExpenseAmount("");
    setExpenseDesc("");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: topPad + 8, paddingBottom: bottomPad + 100 }}
      >
        <View style={styles.headerRow}>
          <Text style={[styles.title, { color: colors.navy }]}>Funds</Text>
        </View>

        {/* Hero Card */}
        <View style={[styles.heroCard, { backgroundColor: colors.navy }]}>
          <View style={styles.heroContent}>
            <View>
              <Text style={styles.heroLabel}>Collected</Text>
              <Text style={styles.heroAmount}>${totalCollected}</Text>
              <Text style={styles.heroTarget}>of ${subscriptionTarget} target</Text>
              <View style={[styles.heroBadge, { backgroundColor: "rgba(255,255,255,0.15)" }]}>
                <Text style={styles.heroBadgeText}>{fundPercent}% complete</Text>
              </View>
              {unpaidCount > 0 && (
                <Text style={styles.unpaidText}>
                  {unpaidCount} member{unpaidCount !== 1 ? "s" : ""} yet to pay
                </Text>
              )}
            </View>
            <JarProgress progress={fundProgress} width={72} height={88} />
          </View>
        </View>

        {/* Summary Row */}
        <View style={styles.summaryRow}>
          <View style={[styles.summaryCard, { backgroundColor: colors.successLight, borderColor: colors.border }]}>
            <Text style={[styles.summaryLabel, { color: colors.success }]}>Cash in Hand</Text>
            <Text style={[styles.summaryAmount, { color: colors.success }]}>${cashInHand}</Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: "#FEE2E2", borderColor: colors.border }]}>
            <Text style={[styles.summaryLabel, { color: colors.destructive }]}>Expenses</Text>
            <Text style={[styles.summaryAmount, { color: colors.destructive }]}>${totalExpenses}</Text>
          </View>
        </View>

        {/* Payment List */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.navy }]}>Member Payments</Text>
          <View style={[styles.tabRow, { backgroundColor: colors.muted }]}>
            {(["All", "Paid", "Unpaid"] as FundsTab[]).map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tab && { backgroundColor: colors.card },
                ]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: activeTab === tab ? colors.primary : colors.mutedForeground },
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {filteredMembers.length === 0 ? (
            <View style={styles.emptySection}>
              <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>
                {activeTab === "Paid" ? "No payments recorded yet" : "All members have paid!"}
              </Text>
            </View>
          ) : (
            filteredMembers.map((member) => (
              <TouchableOpacity
                key={member.id}
                style={[
                  styles.memberRow,
                  { backgroundColor: colors.card, borderColor: colors.border },
                ]}
                onPress={() => handleTogglePaid(member)}
                activeOpacity={0.85}
              >
                <View
                  style={[
                    styles.avatar,
                    { backgroundColor: member.hasPaid ? colors.successLight : colors.muted },
                  ]}
                >
                  <Text
                    style={[
                      styles.avatarText,
                      { color: member.hasPaid ? colors.success : colors.mutedForeground },
                    ]}
                  >
                    {member.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.memberInfo}>
                  <Text style={[styles.memberName, { color: colors.navy }]}>{member.name}</Text>
                  <Text style={[styles.memberAmount, { color: colors.mutedForeground }]}>
                    ${subscriptionAmount}
                  </Text>
                </View>
                <View
                  style={[
                    styles.checkbox,
                    {
                      backgroundColor: member.hasPaid ? colors.success : "transparent",
                      borderColor: member.hasPaid ? colors.success : colors.border,
                    },
                  ]}
                >
                  {member.hasPaid && (
                    <Feather name="check" size={14} color="#FFF" />
                  )}
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>

        {/* Expenses */}
        {expenses.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.navy }]}>Expenses</Text>
            {expenses.map((expense) => (
              <View
                key={expense.id}
                style={[styles.expenseRow, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <View style={[styles.expenseIcon, { backgroundColor: "#FEE2E2" }]}>
                  <Feather name="shopping-bag" size={16} color={colors.destructive} />
                </View>
                <View style={styles.expenseInfo}>
                  <Text style={[styles.expenseType, { color: colors.navy }]}>{expense.type}</Text>
                  <Text style={[styles.expenseDesc, { color: colors.mutedForeground }]}>
                    {expense.description || expense.date}
                  </Text>
                </View>
                <Text style={[styles.expenseAmount, { color: colors.destructive }]}>
                  -${expense.amount}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.orange, bottom: bottomPad + 86 }]}
        onPress={() => setShowExpenseModal(true)}
        activeOpacity={0.85}
      >
        <Feather name="plus" size={22} color="#FFF" />
        <Text style={styles.fabText}>Add Expense</Text>
      </TouchableOpacity>

      {/* Add Expense Modal */}
      <Modal visible={showExpenseModal} animationType="slide" transparent>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View
            style={[
              styles.modalSheet,
              { backgroundColor: colors.card, paddingBottom: bottomPad + 24 },
            ]}
          >
            <View style={styles.modalHandle} />
            <Text style={[styles.modalTitle, { color: colors.navy }]}>Add Expense</Text>

            <View style={styles.modalForm}>
              <View style={styles.field}>
                <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Date</Text>
                <TextInput
                  style={[styles.input, { borderColor: colors.border, color: colors.navy, backgroundColor: colors.input }]}
                  value={expenseDate}
                  onChangeText={setExpenseDate}
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={colors.mutedForeground}
                />
              </View>

              <View style={styles.field}>
                <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Type</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.typeRow}>
                    {EXPENSE_TYPES.map((t) => (
                      <TouchableOpacity
                        key={t}
                        style={[
                          styles.typeChip,
                          {
                            backgroundColor: expenseType === t ? colors.primary : colors.muted,
                            borderColor: expenseType === t ? colors.primary : colors.border,
                          },
                        ]}
                        onPress={() => setExpenseType(t)}
                      >
                        <Text
                          style={[
                            styles.typeChipText,
                            { color: expenseType === t ? "#FFF" : colors.mutedForeground },
                          ]}
                        >
                          {t}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>

              <View style={styles.field}>
                <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Amount ($)</Text>
                <TextInput
                  style={[styles.input, { borderColor: colors.border, color: colors.navy, backgroundColor: colors.input }]}
                  value={expenseAmount}
                  onChangeText={setExpenseAmount}
                  placeholder="0.00"
                  placeholderTextColor={colors.mutedForeground}
                  keyboardType="decimal-pad"
                />
              </View>

              <View style={styles.field}>
                <Text style={[styles.fieldLabel, { color: colors.mutedForeground }]}>Description</Text>
                <TextInput
                  style={[styles.input, { borderColor: colors.border, color: colors.navy, backgroundColor: colors.input }]}
                  value={expenseDesc}
                  onChangeText={setExpenseDesc}
                  placeholder="Optional notes..."
                  placeholderTextColor={colors.mutedForeground}
                />
              </View>
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.cancelBtn, { borderColor: colors.border }]}
                onPress={() => setShowExpenseModal(false)}
              >
                <Text style={[styles.cancelText, { color: colors.mutedForeground }]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.saveBtn, { backgroundColor: colors.primary }]}
                onPress={handleSaveExpense}
                activeOpacity={0.85}
              >
                <Text style={styles.saveBtnText}>Save Expense</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: { paddingHorizontal: 20, marginBottom: 16 },
  title: { fontSize: 28, fontFamily: "Inter_700Bold" },
  heroCard: {
    marginHorizontal: 20,
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  heroContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  heroLabel: { color: "rgba(255,255,255,0.7)", fontSize: 13, fontFamily: "Inter_500Medium", marginBottom: 4 },
  heroAmount: { color: "#FFF", fontSize: 36, fontFamily: "Inter_700Bold" },
  heroTarget: { color: "rgba(255,255,255,0.7)", fontSize: 14, fontFamily: "Inter_400Regular", marginBottom: 8 },
  heroBadge: { alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, marginBottom: 8 },
  heroBadgeText: { color: "#FFF", fontSize: 13, fontFamily: "Inter_600SemiBold" },
  unpaidText: { color: "rgba(255,255,255,0.7)", fontSize: 13, fontFamily: "Inter_400Regular" },
  summaryRow: { flexDirection: "row", paddingHorizontal: 20, gap: 12, marginBottom: 20 },
  summaryCard: { flex: 1, borderRadius: 16, padding: 16, borderWidth: 1 },
  summaryLabel: { fontSize: 12, fontFamily: "Inter_500Medium", marginBottom: 4 },
  summaryAmount: { fontSize: 22, fontFamily: "Inter_700Bold" },
  section: { paddingHorizontal: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontFamily: "Inter_700Bold", marginBottom: 12 },
  tabRow: { flexDirection: "row", borderRadius: 12, padding: 4, marginBottom: 12 },
  tab: { flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: "center" },
  tabText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  emptySection: { paddingVertical: 20, alignItems: "center" },
  emptyText: { fontSize: 14, fontFamily: "Inter_400Regular" },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
    gap: 14,
  },
  avatar: { width: 42, height: 42, borderRadius: 21, alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 16, fontFamily: "Inter_700Bold" },
  memberInfo: { flex: 1 },
  memberName: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  memberAmount: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  checkbox: { width: 26, height: 26, borderRadius: 13, borderWidth: 2, alignItems: "center", justifyContent: "center" },
  expenseRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 10,
    gap: 12,
  },
  expenseIcon: { width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  expenseInfo: { flex: 1 },
  expenseType: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  expenseDesc: { fontSize: 13, fontFamily: "Inter_400Regular", marginTop: 2 },
  expenseAmount: { fontSize: 15, fontFamily: "Inter_700Bold" },
  fab: {
    position: "absolute",
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 30,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  fabText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },
  modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.4)" },
  modalSheet: { borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 24 },
  modalHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: "#E5E7EB", alignSelf: "center", marginBottom: 20 },
  modalTitle: { fontSize: 22, fontFamily: "Inter_700Bold", marginBottom: 20 },
  modalForm: { gap: 16 },
  field: { gap: 8 },
  fieldLabel: { fontSize: 13, fontFamily: "Inter_600SemiBold", textTransform: "uppercase", letterSpacing: 0.5 },
  input: { borderWidth: 1.5, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, fontSize: 15, fontFamily: "Inter_400Regular" },
  typeRow: { flexDirection: "row", gap: 8 },
  typeChip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1.5 },
  typeChipText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  modalActions: { flexDirection: "row", gap: 12, marginTop: 20 },
  cancelBtn: { flex: 1, paddingVertical: 16, borderRadius: 14, alignItems: "center", borderWidth: 1.5 },
  cancelText: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  saveBtn: { flex: 2, paddingVertical: 16, borderRadius: 14, alignItems: "center" },
  saveBtnText: { color: "#FFF", fontSize: 15, fontFamily: "Inter_600SemiBold" },
});
