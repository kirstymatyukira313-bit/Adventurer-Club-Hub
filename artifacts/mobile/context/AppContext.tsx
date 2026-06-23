import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { LESSONS } from "@/data/lessons";
import type {
  AttendanceGuest,
  AttendanceRecord,
  ClubInfo,
  DriveFile,
  Expense,
  LeaderRole,
  Member,
  SessionType,
} from "@/types";
import { useAuth } from "@/context/AuthContext";
import { apiFetch } from "@/utils/api";

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
  club: { name: "", churchName: "", leaderName: "", role: "Club Leader", conference: "", district: "" },
  members: [],
  lessonCompletions: {},
  attendance: [],
  subscriptionTarget: 0,
  subscriptionAmount: 1,
  expenses: [],
  driveFiles: [],
  reminders: DEFAULT_REMINDERS,
};

interface AppContextType extends AppState {
  isLoading: boolean;
  isOnboardingComplete: boolean;
  completeOnboarding: (
    club: ClubInfo,
    role: LeaderRole,
    members: Omit<Member, "id" | "hasPaid" | "amountPaid">[]
  ) => Promise<void>;
  addMember: (member: Omit<Member, "id" | "hasPaid" | "amountPaid">) => void;
  updateMember: (id: string, updates: Partial<Member>) => void;
  deleteMember: (id: string) => void;
  saveAttendance: (
    date: string,
    sessionType: SessionType,
    records: { memberId: string; present: boolean }[],
    guests: AttendanceGuest[],
    noSessionReason?: string,
    noSessionNote?: string,
  ) => void;
  getSessionForDate: (date: string) => AttendanceRecord | null;
  getAttendanceHistory: () => AttendanceRecord[];
  markSectionComplete: (lessonId: string, sectionId: string) => void;
  unmarkSectionComplete: (lessonId: string, sectionId: string) => void;
  markMemberPaid: (memberId: string, paid: boolean) => void;
  addExpense: (expense: Omit<Expense, "id">) => void;
  updateExpense: (id: string, updates: Partial<Omit<Expense, "id">>) => void;
  deleteExpense: (id: string) => void;
  getTotalCollected: () => number;
  getTotalExpenses: () => number;
  getUnpaidCount: () => number;
  updateClub: (updates: Partial<ClubInfo>) => void;
  updateSubscriptionSettings: (amount: number, target: number) => void;
  addDriveFile: (file: Omit<DriveFile, "id" | "addedAt">) => void;
  deleteDriveFile: (id: string) => void;
  updateReminders: (settings: ReminderSettings) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

interface ServerState {
  club: {
    name: string;
    churchName: string;
    role: string;
    conference: string | null;
    district: string | null;
    subscriptionAmount: number | null;
    subscriptionTarget: number | null;
  } | null;
  members: Member[];
  attendance: AttendanceRecord[];
  expenses: Expense[];
  lessonCompletions: LessonCompletions;
  driveFiles: DriveFile[];
  reminders: ReminderSettings | null;
}

function mapServerState(data: ServerState, displayName: string): AppState {
  return {
    club: {
      name: data.club?.name ?? "",
      churchName: data.club?.churchName ?? "",
      leaderName: displayName,
      role: (data.club?.role ?? "Club Leader") as LeaderRole,
      conference: data.club?.conference ?? "",
      district: data.club?.district ?? "",
    },
    members: data.members ?? [],
    attendance: data.attendance ?? [],
    expenses: data.expenses ?? [],
    lessonCompletions: data.lessonCompletions ?? {},
    driveFiles: data.driveFiles ?? [],
    reminders: data.reminders ?? DEFAULT_REMINDERS,
    subscriptionAmount: data.club?.subscriptionAmount ?? 1,
    subscriptionTarget: data.club?.subscriptionTarget ?? 0,
  };
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const { userId, clubId, displayName, isAuthLoading, login, logout: authLogout } = useAuth();
  const [state, setState] = useState<AppState>(DEFAULT_STATE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthLoading) return;
    if (userId && clubId) {
      loadFromServer();
    } else {
      setIsLoading(false);
    }
  }, [userId, clubId, isAuthLoading]);

  async function loadFromServer() {
    setIsLoading(true);
    try {
      const data = await apiFetch<ServerState>("/clubs/me/state");
      setState(mapServerState(data, displayName ?? ""));
    } catch {
      // use default state on error
    } finally {
      setIsLoading(false);
    }
  }

  const isOnboardingComplete = !!userId && !!clubId;

  const completeOnboarding = useCallback(
    async (club: ClubInfo, role: LeaderRole, _initialMembers: Omit<Member, "id" | "hasPaid" | "amountPaid">[]) => {
      const data = await apiFetch<{ userId: string; clubId: string; displayName: string }>(
        "/auth/register",
        {
          method: "POST",
          body: JSON.stringify({
            displayName: club.leaderName,
            clubName: club.name,
            churchName: club.churchName,
            role,
          }),
        },
      );
      await login(data.userId, data.clubId, data.displayName);
      setState({
        ...DEFAULT_STATE,
        club: { ...club, role },
      });
    },
    [login],
  );

  const addMember = useCallback(
    (member: Omit<Member, "id" | "hasPaid" | "amountPaid">) => {
      const tempId = generateId();
      const newMember: Member = { ...member, id: tempId, hasPaid: false, amountPaid: 0 };
      setState((s) => ({ ...s, members: [...s.members, newMember] }));
      apiFetch<Member>("/clubs/me/members", {
        method: "POST",
        body: JSON.stringify(member),
      }).then((saved) => {
        setState((s) => ({
          ...s,
          members: s.members.map((m) => (m.id === tempId ? saved : m)),
        }));
      }).catch(() => {});
    },
    [],
  );

  const updateMember = useCallback((id: string, updates: Partial<Member>) => {
    setState((s) => ({
      ...s,
      members: s.members.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    }));
    apiFetch(`/clubs/me/members/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
    }).catch(() => {});
  }, []);

  const deleteMember = useCallback((id: string) => {
    setState((s) => ({ ...s, members: s.members.filter((m) => m.id !== id) }));
    apiFetch(`/clubs/me/members/${id}`, { method: "DELETE" }).catch(() => {});
  }, []);

  const saveAttendance = useCallback(
    (
      date: string,
      sessionType: SessionType,
      records: { memberId: string; present: boolean }[],
      guests: AttendanceGuest[],
      noSessionReason?: string,
      noSessionNote?: string,
    ) => {
      setState((s) => {
        const filtered = s.attendance.filter((a) => a.date !== date);
        return {
          ...s,
          attendance: [...filtered, { date, sessionType, records, guests, noSessionReason, noSessionNote }],
        };
      });
      apiFetch(`/clubs/me/attendance/${date}`, {
        method: "PUT",
        body: JSON.stringify({ sessionType, records, guests, noSessionReason, noSessionNote }),
      }).catch(() => {});
    },
    [],
  );

  const getSessionForDate = useCallback(
    (date: string): AttendanceRecord | null => {
      const record = state.attendance.find((a) => a.date === date);
      if (!record) return null;
      return {
        ...record,
        sessionType: (record.sessionType as SessionType) ?? "Regular Meeting",
        guests: record.guests ?? [],
      };
    },
    [state.attendance],
  );

  const getAttendanceHistory = useCallback(
    (): AttendanceRecord[] =>
      [...state.attendance]
        .map((r) => ({
          ...r,
          sessionType: (r.sessionType as SessionType) ?? "Regular Meeting",
          guests: r.guests ?? [],
        }))
        .sort((a, b) => b.date.localeCompare(a.date)),
    [state.attendance],
  );

  const markSectionComplete = useCallback((lessonId: string, sectionId: string) => {
    setState((s) => {
      const existing = s.lessonCompletions[lessonId] ?? [];
      if (existing.includes(sectionId)) return s;
      const updated = { ...s.lessonCompletions, [lessonId]: [...existing, sectionId] };
      apiFetch(`/clubs/me/lessons/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify({ sectionIds: updated[lessonId] }),
      }).catch(() => {});
      return { ...s, lessonCompletions: updated };
    });
  }, []);

  const unmarkSectionComplete = useCallback((lessonId: string, sectionId: string) => {
    setState((s) => {
      const existing = s.lessonCompletions[lessonId] ?? [];
      const updated = { ...s.lessonCompletions, [lessonId]: existing.filter((id) => id !== sectionId) };
      apiFetch(`/clubs/me/lessons/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify({ sectionIds: updated[lessonId] }),
      }).catch(() => {});
      return { ...s, lessonCompletions: updated };
    });
  }, []);

  const markMemberPaid = useCallback((memberId: string, paid: boolean) => {
    setState((s) => {
      const subscriptionAmount = s.subscriptionAmount;
      const members = s.members.map((m) =>
        m.id === memberId
          ? { ...m, hasPaid: paid, amountPaid: paid ? subscriptionAmount : 0 }
          : m,
      );
      const updated = members.find((m) => m.id === memberId);
      if (updated) {
        apiFetch(`/clubs/me/members/${memberId}`, {
          method: "PATCH",
          body: JSON.stringify({ hasPaid: updated.hasPaid, amountPaid: updated.amountPaid }),
        }).catch(() => {});
      }
      return { ...s, members };
    });
  }, []);

  const addExpense = useCallback((expense: Omit<Expense, "id">) => {
    const tempId = generateId();
    const newExpense: Expense = { ...expense, id: tempId };
    setState((s) => ({ ...s, expenses: [...s.expenses, newExpense] }));
    apiFetch<Expense>("/clubs/me/expenses", {
      method: "POST",
      body: JSON.stringify(expense),
    }).then((saved) => {
      setState((s) => ({
        ...s,
        expenses: s.expenses.map((e) => (e.id === tempId ? saved : e)),
      }));
    }).catch(() => {});
  }, []);

  const updateExpense = useCallback((id: string, updates: Partial<Omit<Expense, "id">>) => {
    setState((s) => ({
      ...s,
      expenses: s.expenses.map((e) => (e.id === id ? { ...e, ...updates } : e)),
    }));
    apiFetch(`/clubs/me/expenses/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updates),
    }).catch(() => {});
  }, []);

  const deleteExpense = useCallback((id: string) => {
    setState((s) => ({ ...s, expenses: s.expenses.filter((e) => e.id !== id) }));
    apiFetch(`/clubs/me/expenses/${id}`, { method: "DELETE" }).catch(() => {});
  }, []);

  const getTotalCollected = useCallback(
    () => state.members.filter((m) => m.hasPaid).reduce((sum, m) => sum + m.amountPaid, 0),
    [state.members],
  );

  const getTotalExpenses = useCallback(
    () => state.expenses.reduce((sum, e) => sum + e.amount, 0),
    [state.expenses],
  );

  const getUnpaidCount = useCallback(
    () => state.members.filter((m) => !m.hasPaid).length,
    [state.members],
  );

  const updateClub = useCallback((updates: Partial<ClubInfo>) => {
    setState((s) => ({ ...s, club: { ...s.club, ...updates } }));
    apiFetch("/clubs/me/club", {
      method: "PATCH",
      body: JSON.stringify(updates),
    }).catch(() => {});
  }, []);

  const updateSubscriptionSettings = useCallback((amount: number, target: number) => {
    setState((s) => ({ ...s, subscriptionAmount: amount, subscriptionTarget: target }));
    apiFetch("/clubs/me/subscription", {
      method: "PATCH",
      body: JSON.stringify({ subscriptionAmount: amount, subscriptionTarget: target }),
    }).catch(() => {});
  }, []);

  const addDriveFile = useCallback((file: Omit<DriveFile, "id" | "addedAt">) => {
    const tempId = generateId();
    const newFile: DriveFile = { ...file, id: tempId, addedAt: new Date().toISOString() };
    setState((s) => ({ ...s, driveFiles: [...(s.driveFiles ?? []), newFile] }));
    apiFetch<DriveFile>("/clubs/me/drive-files", {
      method: "POST",
      body: JSON.stringify(file),
    }).then((saved) => {
      setState((s) => ({
        ...s,
        driveFiles: s.driveFiles.map((f) => (f.id === tempId ? saved : f)),
      }));
    }).catch(() => {});
  }, []);

  const deleteDriveFile = useCallback((id: string) => {
    setState((s) => ({ ...s, driveFiles: (s.driveFiles ?? []).filter((f) => f.id !== id) }));
    apiFetch(`/clubs/me/drive-files/${id}`, { method: "DELETE" }).catch(() => {});
  }, []);

  const updateReminders = useCallback((settings: ReminderSettings) => {
    setState((s) => ({ ...s, reminders: settings }));
    apiFetch("/clubs/me/reminders", {
      method: "PUT",
      body: JSON.stringify(settings),
    }).catch(() => {});
  }, []);

  const logout = useCallback(() => {
    setState(DEFAULT_STATE);
    authLogout();
  }, [authLogout]);

  const _ = LESSONS;

  return (
    <AppContext.Provider
      value={{
        ...state,
        isLoading: isAuthLoading || isLoading,
        isOnboardingComplete,
        completeOnboarding,
        addMember,
        updateMember,
        deleteMember,
        saveAttendance,
        getSessionForDate,
        getAttendanceHistory,
        markSectionComplete,
        unmarkSectionComplete,
        markMemberPaid,
        addExpense,
        updateExpense,
        deleteExpense,
        getTotalCollected,
        getTotalExpenses,
        getUnpaidCount,
        updateClub,
        updateSubscriptionSettings,
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
