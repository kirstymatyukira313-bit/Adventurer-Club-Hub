import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { LESSONS } from "@/data/lessons";
import type {
  AdventurerClass,
  AttendanceRecord,
  ClubInfo,
  DriveFile,
  Expense,
  LeaderRole,
  Member,
} from "@/types";

const STORAGE_KEY = "adventurer_club_state_v1";

interface LessonCompletions {
  [lessonId: string]: string[];
}

export interface ReminderSettings {
  enabled: boolean;
  meetingDay: number;
  meetingHour: number;
  meetingMinute: number;
  morningReminder: boolean;
  prepReminder: boolean;
}

interface AppState {
  isOnboardingComplete: boolean;
  club: ClubInfo;
  members: Member[];
  lessonCompletions: LessonCompletions;
  attendance: AttendanceRecord[];
  subscriptionTarget: number;
  subscriptionAmount: number;
  expenses: Expense[];
  driveFiles: DriveFile[];
  reminders: ReminderSettings;
}

const DEFAULT_REMINDERS: ReminderSettings = {
  enabled: false,
  meetingDay: 6,
  meetingHour: 8,
  meetingMinute: 0,
  morningReminder: true,
  prepReminder: true,
};

const DEFAULT_STATE: AppState = {
  isOnboardingComplete: false,
  club: {
    name: "",
    churchName: "",
    leaderName: "",
    role: "Club Leader",
    conference: "",
    district: "",
  },
  members: [],
  lessonCompletions: {},
  attendance: [],
  subscriptionTarget: 200,
  subscriptionAmount: 20,
  expenses: [],
  driveFiles: [],
  reminders: DEFAULT_REMINDERS,
};

interface AppContextType extends AppState {
  isLoading: boolean;
  completeOnboarding: (
    club: ClubInfo,
    role: LeaderRole,
    members: Omit<Member, "id" | "hasPaid" | "amountPaid">[]
  ) => void;
  addMember: (member: Omit<Member, "id" | "hasPaid" | "amountPaid">) => void;
  updateMember: (id: string, updates: Partial<Member>) => void;
  deleteMember: (id: string) => void;
  saveAttendance: (date: string, records: { memberId: string; present: boolean }[]) => void;
  getAttendanceForDate: (date: string) => { memberId: string; present: boolean }[];
  markSectionComplete: (lessonId: string, sectionId: string) => void;
  unmarkSectionComplete: (lessonId: string, sectionId: string) => void;
  markMemberPaid: (memberId: string, paid: boolean) => void;
  addExpense: (expense: Omit<Expense, "id">) => void;
  getTotalCollected: () => number;
  getTotalExpenses: () => number;
  getUnpaidCount: () => number;
  addDriveFile: (file: Omit<DriveFile, "id" | "addedAt">) => void;
  deleteDriveFile: (id: string) => void;
  updateReminders: (settings: ReminderSettings) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadState();
  }, []);

  async function loadState() {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as AppState;
        setState(parsed);
      }
    } catch {
      // use default state
    } finally {
      setIsLoading(false);
    }
  }

  async function saveState(newState: AppState) {
    setState(newState);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch {
      // ignore storage errors
    }
  }

  const completeOnboarding = useCallback(
    (
      club: ClubInfo,
      role: LeaderRole,
      initialMembers: Omit<Member, "id" | "hasPaid" | "amountPaid">[]
    ) => {
      const members: Member[] = initialMembers.map((m) => ({
        ...m,
        id: generateId(),
        hasPaid: false,
        amountPaid: 0,
      }));
      saveState({
        ...state,
        isOnboardingComplete: true,
        club: { ...club, role },
        members,
      });
    },
    [state]
  );

  const addMember = useCallback(
    (member: Omit<Member, "id" | "hasPaid" | "amountPaid">) => {
      const newMember: Member = {
        ...member,
        id: generateId(),
        hasPaid: false,
        amountPaid: 0,
      };
      saveState({ ...state, members: [...state.members, newMember] });
    },
    [state]
  );

  const updateMember = useCallback(
    (id: string, updates: Partial<Member>) => {
      const members = state.members.map((m) =>
        m.id === id ? { ...m, ...updates } : m
      );
      saveState({ ...state, members });
    },
    [state]
  );

  const deleteMember = useCallback(
    (id: string) => {
      const members = state.members.filter((m) => m.id !== id);
      saveState({ ...state, members });
    },
    [state]
  );

  const saveAttendance = useCallback(
    (date: string, records: { memberId: string; present: boolean }[]) => {
      const attendance = state.attendance.filter((a) => a.date !== date);
      saveState({
        ...state,
        attendance: [...attendance, { date, records }],
      });
    },
    [state]
  );

  const getAttendanceForDate = useCallback(
    (date: string) => {
      const record = state.attendance.find((a) => a.date === date);
      if (record) return record.records;
      return state.members.map((m) => ({ memberId: m.id, present: true }));
    },
    [state]
  );

  const markSectionComplete = useCallback(
    (lessonId: string, sectionId: string) => {
      const existing = state.lessonCompletions[lessonId] ?? [];
      if (existing.includes(sectionId)) return;
      saveState({
        ...state,
        lessonCompletions: {
          ...state.lessonCompletions,
          [lessonId]: [...existing, sectionId],
        },
      });
    },
    [state]
  );

  const unmarkSectionComplete = useCallback(
    (lessonId: string, sectionId: string) => {
      const existing = state.lessonCompletions[lessonId] ?? [];
      saveState({
        ...state,
        lessonCompletions: {
          ...state.lessonCompletions,
          [lessonId]: existing.filter((id) => id !== sectionId),
        },
      });
    },
    [state]
  );

  const markMemberPaid = useCallback(
    (memberId: string, paid: boolean) => {
      const members = state.members.map((m) =>
        m.id === memberId
          ? {
              ...m,
              hasPaid: paid,
              amountPaid: paid ? state.subscriptionAmount : 0,
            }
          : m
      );
      saveState({ ...state, members });
    },
    [state]
  );

  const addExpense = useCallback(
    (expense: Omit<Expense, "id">) => {
      const newExpense: Expense = { ...expense, id: generateId() };
      saveState({ ...state, expenses: [...state.expenses, newExpense] });
    },
    [state]
  );

  const getTotalCollected = useCallback(() => {
    return state.members
      .filter((m) => m.hasPaid)
      .reduce((sum, m) => sum + m.amountPaid, 0);
  }, [state]);

  const getTotalExpenses = useCallback(() => {
    return state.expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [state]);

  const getUnpaidCount = useCallback(() => {
    return state.members.filter((m) => !m.hasPaid).length;
  }, [state]);

  const addDriveFile = useCallback(
    (file: Omit<DriveFile, "id" | "addedAt">) => {
      const newFile: DriveFile = {
        ...file,
        id: generateId(),
        addedAt: new Date().toISOString(),
      };
      saveState({ ...state, driveFiles: [...(state.driveFiles ?? []), newFile] });
    },
    [state]
  );

  const deleteDriveFile = useCallback(
    (id: string) => {
      saveState({ ...state, driveFiles: (state.driveFiles ?? []).filter((f) => f.id !== id) });
    },
    [state]
  );

  const updateReminders = useCallback(
    (settings: ReminderSettings) => {
      saveState({ ...state, reminders: settings });
    },
    [state]
  );

  const logout = useCallback(() => {
    saveState(DEFAULT_STATE);
  }, [state]);

  const _ = LESSONS; // ensure data import is used

  return (
    <AppContext.Provider
      value={{
        ...state,
        isLoading,
        completeOnboarding,
        addMember,
        updateMember,
        deleteMember,
        saveAttendance,
        getAttendanceForDate,
        markSectionComplete,
        unmarkSectionComplete,
        markMemberPaid,
        addExpense,
        getTotalCollected,
        getTotalExpenses,
        getUnpaidCount,
        addDriveFile,
        deleteDriveFile,
        updateReminders,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
