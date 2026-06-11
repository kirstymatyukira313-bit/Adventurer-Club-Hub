export interface Material {
  name: string;
  quantity?: string;
  notes?: string;
}

export interface MemoryVerse {
  text: string;
  reference: string;
}

export type SectionType =
  | "introduction"
  | "bible_story"
  | "activity"
  | "craft"
  | "closing"
  | "memory_verse"
  | "prayer"
  | "discussion";

export interface BaseSection {
  id: string;
  type: SectionType;
  title: string;
  duration: string;
  instructions: string;
  resources?: string[];
}

export interface CraftSection extends BaseSection {
  type: "craft";
  craftName: string;
  materials: Material[];
  steps: string[];
}

export interface ActivitySection extends BaseSection {
  type: "activity";
  objectiveTags?: string[];
}

export type LessonSection = BaseSection | CraftSection | ActivitySection;

export interface CurriculumLesson {
  id: string;
  classId: string;
  weekNumber: number;
  title: string;
  objective: string;
  memoryVerse: MemoryVerse;
  materials: Material[];
  sections: LessonSection[];
}

export interface AdventurerClassDef {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  color: string;
  lessons: CurriculumLesson[];
}

export interface SectionCompletion {
  sectionId: string;
  completedAt: string;
}

export interface LessonCompletion {
  lessonId: string;
  classId: string;
  completedSections: SectionCompletion[];
  isFullyCompleted: boolean;
  completedAt?: string;
  notes?: string;
}

export interface ClassProgress {
  classId: string;
  lessonCompletions: Record<string, LessonCompletion>;
}

export interface CurriculumProgress {
  classesByProgress: Record<string, ClassProgress>;
  lastUpdated: string;
}
