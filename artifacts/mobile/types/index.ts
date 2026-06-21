export type AdventurerClass =
  | "Little Lamb"
  | "Early Bird"
  | "Busy Bee"
  | "Sunbeam"
  | "Builder"
  | "Helping Hand";

export const ADVENTURER_CLASSES: AdventurerClass[] = [
  "Little Lamb",
  "Early Bird",
  "Busy Bee",
  "Sunbeam",
  "Builder",
  "Helping Hand",
];

export type SessionType =
  | "Regular Meeting"
  | "Camp"
  | "Outreach"
  | "Special Event"
  | "No Session";

export const SESSION_TYPES: SessionType[] = [
  "Regular Meeting",
  "Camp",
  "Outreach",
  "Special Event",
  "No Session",
];

export const NO_SESSION_REASONS = [
  "Public Holiday",
  "Camp Weekend",
  "Conference Event",
  "Weather",
  "Other",
] as const;
export type NoSessionReason = (typeof NO_SESSION_REASONS)[number];

export interface Member {
  id: string;
  name: string;
  gender: "Male" | "Female";
  adventurerClass: AdventurerClass;
  dob?: string;
  guardian?: string;
  phone?: string;
  medicalNotes?: string;
  hasPaid: boolean;
  amountPaid: number;
}

export interface LessonSection {
  id: string;
  type: "introduction" | "bible_story" | "activity" | "craft" | "closing";
  title: string;
  duration: string;
  instructions: string;
  resources?: string[];
  craftName?: string;
  materials?: string[];
  steps?: string[];
}

export interface Lesson {
  id: string;
  adventurerClass: AdventurerClass;
  title: string;
  objective: string;
  memoryVerse: string;
  memoryVerseRef: string;
  sections: LessonSection[];
  weekNumber: number;
}

export interface AttendanceGuest {
  id: string;
  name: string;
}

export interface AttendanceRecord {
  date: string;
  sessionType: SessionType;
  noSessionReason?: string;
  noSessionNote?: string;
  records: { memberId: string; present: boolean }[];
  guests: AttendanceGuest[];
}

export interface Expense {
  id: string;
  date: string;
  type: string;
  amount: number;
  description: string;
}

export type LeaderRole = "Club Leader" | "Deputy Leader" | "Other";

export interface ClubInfo {
  name: string;
  churchName: string;
  leaderName: string;
  role: LeaderRole;
  conference: string;
  district: string;
}

export interface DriveFile {
  id: string;
  name: string;
  adventurerClass: AdventurerClass | "General";
  driveUrl: string;
  addedAt: string;
}

export type {
  AdventurerClassDef,
  CurriculumLesson,
  LessonSection as CurriculumLessonSection,
  CraftSection,
  ActivitySection,
  BaseSection,
  Material,
  MemoryVerse,
  SectionType,
  CurriculumProgress,
  LessonCompletion,
  SectionCompletion,
  ClassProgress,
} from "@/curriculum/types";
