import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

import { setApiUserId } from "@/utils/api";

const AUTH_KEY = "adventurer_auth_v1";

interface AuthState {
  userId: string | null;
  clubId: string | null;
  displayName: string | null;
}

interface AuthContextType extends AuthState {
  isAuthLoading: boolean;
  login: (userId: string, clubId: string, displayName: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    userId: null,
    clubId: null,
    displayName: null,
  });
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const stored = await AsyncStorage.getItem(AUTH_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as AuthState;
        setState(parsed);
        setApiUserId(parsed.userId);
      }
    } catch {
      // ignore
    } finally {
      setIsAuthLoading(false);
    }
  }

  const login = async (userId: string, clubId: string, displayName: string) => {
    const next = { userId, clubId, displayName };
    setState(next);
    setApiUserId(userId);
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(next));
  };

  const logout = async () => {
    setState({ userId: null, clubId: null, displayName: null });
    setApiUserId(null);
    await AsyncStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider value={{ ...state, isAuthLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
