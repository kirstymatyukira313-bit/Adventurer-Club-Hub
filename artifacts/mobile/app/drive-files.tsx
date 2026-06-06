import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Alert,
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
import { ADVENTURER_CLASSES } from "@/types";
import type { AdventurerClass } from "@/types";

const CLASS_COLORS: Record<AdventurerClass | "General", string> = {
  "Little Lamb": "#F87171",
  "Early Bird": "#FB923C",
  "Busy Bee": "#FBBF24",
  "Sunbeam": "#34D399",
  "Builder": "#60A5FA",
  "Helping Hand": "#A78BFA",
  "General": "#35A7FF",
};

const ALL_CLASSES: (AdventurerClass | "General")[] = ["General", ...ADVENTURER_CLASSES];

function extractFileId(url: string): string | null {
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)\//,
    /open\?id=([a-zA-Z0-9_-]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

function buildPreviewUrl(driveUrl: string): string {
  const fileId = extractFileId(driveUrl);
  if (fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return driveUrl;
}

export default function DriveFilesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const { driveFiles, addDriveFile, deleteDriveFile } = useApp();

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [selectedClass, setSelectedClass] = useState<AdventurerClass | "General">("General");

  function handleAdd() {
    const trimName = name.trim();
    const trimUrl = url.trim();
    if (!trimName) {
      Alert.alert("Name required", "Please enter a name for this file.");
      return;
    }
    if (!trimUrl) {
      Alert.alert("URL required", "Please paste a Google Drive link.");
      return;
    }
    if (!trimUrl.includes("drive.google.com") && !trimUrl.includes("docs.google.com")) {
      Alert.alert(
        "Invalid link",
        "Please paste a valid Google Drive sharing link (drive.google.com or docs.google.com)."
      );
      return;
    }
    addDriveFile({ name: trimName, driveUrl: trimUrl, adventurerClass: selectedClass });
    setName("");
    setUrl("");
    setSelectedClass("General");
    setShowForm(false);
  }

  async function openFile(driveUrl: string) {
    const previewUrl = buildPreviewUrl(driveUrl);
    try {
      await WebBrowser.openBrowserAsync(previewUrl, {
        presentationStyle: WebBrowser.WebBrowserPresentationStyle.FULL_SCREEN,
      });
    } catch {
      Alert.alert("Cannot open", "Could not open this file. Make sure it is publicly shared.");
    }
  }

  function handleDelete(id: string, fileName: string) {
    Alert.alert(
      "Remove file",
      `Remove "${fileName}" from your lesson files?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", style: "destructive", onPress: () => deleteDriveFile(id) },
      ]
    );
  }

  const groupedFiles = ALL_CLASSES.reduce<Record<string, typeof driveFiles>>((acc, cls) => {
    acc[cls] = (driveFiles ?? []).filter((f) => f.adventurerClass === cls);
    return acc;
  }, {} as Record<string, typeof driveFiles>);

  const hasAny = (driveFiles ?? []).length > 0;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingTop: topPad + 8,
          paddingBottom: bottomPad + 40,
        }}
      >
        <View style={styles.headerRow}>
          <View>
            <Text style={[styles.title, { color: colors.navy }]}>Drive Lesson Files</Text>
            <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
              PDF files from your Google Drive
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.addBtn, { backgroundColor: "#35A7FF" }]}
            onPress={() => setShowForm((v) => !v)}
            activeOpacity={0.85}
          >
            <Text style={styles.addBtnText}>{showForm ? "✕ Cancel" : "+ Add File"}</Text>
          </TouchableOpacity>
        </View>

        {showForm && (
          <View style={[styles.form, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Text style={[styles.formLabel, { color: colors.navy }]}>File name</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }]}
              placeholder="e.g. Little Lamb Week 3 Lesson"
              placeholderTextColor={colors.mutedForeground}
              value={name}
              onChangeText={setName}
            />

            <Text style={[styles.formLabel, { color: colors.navy }]}>Google Drive link</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.background, borderColor: colors.border, color: colors.foreground }]}
              placeholder="Paste sharing link here..."
              placeholderTextColor={colors.mutedForeground}
              value={url}
              onChangeText={setUrl}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
            />

            <Text style={[styles.formLabel, { color: colors.navy }]}>Adventurer class</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
              <View style={{ flexDirection: "row", gap: 8, paddingRight: 20 }}>
                {ALL_CLASSES.map((cls) => {
                  const active = selectedClass === cls;
                  const clrColor = CLASS_COLORS[cls];
                  return (
                    <TouchableOpacity
                      key={cls}
                      onPress={() => setSelectedClass(cls)}
                      style={[
                        styles.classChip,
                        {
                          backgroundColor: active ? clrColor : `${clrColor}20`,
                          borderColor: clrColor,
                        },
                      ]}
                      activeOpacity={0.8}
                    >
                      <Text style={[styles.classChipText, { color: active ? "#fff" : clrColor }]}>
                        {cls}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>

            <View style={[styles.helpBox, { backgroundColor: "#35A7FF15", borderColor: "#35A7FF40" }]}>
              <Text style={[styles.helpText, { color: "#35A7FF" }]}>
                ℹ️  Make sure your Google Drive file is set to "Anyone with the link can view" before adding it.
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.saveBtn, { backgroundColor: "#35A7FF" }]}
              onPress={handleAdd}
              activeOpacity={0.85}
            >
              <Text style={styles.saveBtnText}>Add File</Text>
            </TouchableOpacity>
          </View>
        )}

        {!hasAny && !showForm && (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📂</Text>
            <Text style={[styles.emptyTitle, { color: colors.navy }]}>No files yet</Text>
            <Text style={[styles.emptySubtitle, { color: colors.mutedForeground }]}>
              Tap "Add File" to link a Google Drive PDF to a class.
            </Text>
          </View>
        )}

        {ALL_CLASSES.map((cls) => {
          const files = groupedFiles[cls];
          if (!files || files.length === 0) return null;
          const clrColor = CLASS_COLORS[cls];
          return (
            <View key={cls} style={styles.section}>
              <View style={[styles.sectionHeader, { backgroundColor: `${clrColor}18` }]}>
                <View style={[styles.sectionDot, { backgroundColor: clrColor }]} />
                <Text style={[styles.sectionTitle, { color: clrColor }]}>{cls}</Text>
                <Text style={[styles.sectionCount, { color: clrColor }]}>
                  {files.length} {files.length === 1 ? "file" : "files"}
                </Text>
              </View>
              {files.map((file) => (
                <TouchableOpacity
                  key={file.id}
                  style={[styles.fileRow, { backgroundColor: colors.card, borderColor: colors.border }]}
                  onPress={() => openFile(file.driveUrl)}
                  activeOpacity={0.85}
                >
                  <View style={[styles.fileIcon, { backgroundColor: "#EA433520" }]}>
                    <Text style={styles.fileIconText}>📄</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.fileName, { color: colors.navy }]} numberOfLines={2}>
                      {file.name}
                    </Text>
                    <Text style={[styles.fileDate, { color: colors.mutedForeground }]}>
                      Added {new Date(file.addedAt).toLocaleDateString()}
                    </Text>
                  </View>
                  <View style={styles.fileActions}>
                    <TouchableOpacity
                      onPress={() => openFile(file.driveUrl)}
                      style={[styles.openBtn, { backgroundColor: "#35A7FF" }]}
                    >
                      <Text style={styles.openBtnText}>Open</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDelete(file.id, file.name)}
                      style={[styles.deleteBtn, { backgroundColor: "#FEF2F2" }]}
                    >
                      <Text style={[styles.deleteBtnText, { color: "#EF4444" }]}>✕</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    paddingHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: { fontSize: 26, fontFamily: "Inter_700Bold", lineHeight: 34 },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", marginTop: 4 },
  addBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 4,
  },
  addBtnText: { color: "#fff", fontSize: 14, fontFamily: "Inter_600SemiBold" },
  form: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    gap: 4,
  },
  formLabel: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    marginBottom: 4,
  },
  classChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
  },
  classChipText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
  helpBox: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    marginBottom: 4,
  },
  helpText: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 18 },
  saveBtn: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  saveBtnText: { color: "#fff", fontSize: 16, fontFamily: "Inter_700Bold" },
  empty: { alignItems: "center", paddingVertical: 60, paddingHorizontal: 40 },
  emptyIcon: { fontSize: 56, marginBottom: 16 },
  emptyTitle: { fontSize: 20, fontFamily: "Inter_700Bold", marginBottom: 8, textAlign: "center" },
  emptySubtitle: { fontSize: 15, fontFamily: "Inter_400Regular", textAlign: "center", lineHeight: 22 },
  section: { marginBottom: 8, marginHorizontal: 20 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 8,
    gap: 8,
  },
  sectionDot: { width: 8, height: 8, borderRadius: 4 },
  sectionTitle: { fontSize: 14, fontFamily: "Inter_700Bold", flex: 1 },
  sectionCount: { fontSize: 12, fontFamily: "Inter_400Regular" },
  fileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 8,
  },
  fileIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  fileIconText: { fontSize: 22 },
  fileName: { fontSize: 15, fontFamily: "Inter_600SemiBold", lineHeight: 20 },
  fileDate: { fontSize: 12, fontFamily: "Inter_400Regular", marginTop: 2 },
  fileActions: { flexDirection: "row", gap: 8, alignItems: "center" },
  openBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  openBtnText: { color: "#fff", fontSize: 13, fontFamily: "Inter_600SemiBold" },
  deleteBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtnText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
});
