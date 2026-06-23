import { Platform } from "react-native";

function getApiBase(): string {
  if (Platform.OS === "web") {
    return "/api";
  }
  const domain = process.env.EXPO_PUBLIC_DOMAIN;
  if (!domain) return "/api";
  return `https://${domain}/api`;
}

let _userId: string | null = null;

export function setApiUserId(userId: string | null) {
  _userId = userId;
}

export async function apiFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const base = getApiBase();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.headers as Record<string, string>),
  };

  if (_userId) {
    headers["X-User-Id"] = _userId;
  }

  const res = await fetch(`${base}${path}`, { ...options, headers });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? `HTTP ${res.status}`);
  }

  return res.json() as Promise<T>;
}
