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

export interface AttendanceRecord {
  date: string;
  records: { memberId: string; present: boolean }[];
}

export interface Expense {
  id: string;
  date: string;
  type: string;
  amount: number;
  description: string;
}

export type LeaderRole = "Club Leader" | "Deputy Leader";

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
