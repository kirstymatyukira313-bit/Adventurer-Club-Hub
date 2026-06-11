import type {
  AdventurerClassDef,
  CurriculumLesson,
  LessonSection,
  CraftSection,
  Material,
  CurriculumProgress,
  LessonCompletion,
  SectionCompletion,
} from "./types";

import littleLamb from "./classes/little-lamb";
import earlyBird from "./classes/early-bird";
import busyBee from "./classes/busy-bee";
import sunbeam from "./classes/sunbeam";
import builder from "./classes/builder";
import helpingHand from "./classes/helping-hand";

export type { AdventurerClassDef, CurriculumLesson, LessonSection, CraftSection, Material };
export type { CurriculumProgress, LessonCompletion, SectionCompletion };

export const CURRICULUM_CLASSES: AdventurerClassDef[] = [
  littleLamb,
  earlyBird,
  busyBee,
  sunbeam,
  builder,
  helpingHand,
];

export const CURRICULUM_CLASS_MAP: Record<string, AdventurerClassDef> =
  Object.fromEntries(CURRICULUM_CLASSES.map((c) => [c.id, c]));

export const ALL_LESSONS: CurriculumLesson[] = CURRICULUM_CLASSES.flatMap(
  (c) => c.lessons
);

export const LESSON_MAP: Record<string, CurriculumLesson> = Object.fromEntries(
  ALL_LESSONS.map((l) => [l.id, l])
);

export function getClassById(classId: string): AdventurerClassDef | undefined {
  return CURRICULUM_CLASS_MAP[classId];
}

export function getClassByName(name: string): AdventurerClassDef | undefined {
  return CURRICULUM_CLASSES.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
}

export function getLessonById(lessonId: string): CurriculumLesson | undefined {
  return LESSON_MAP[lessonId];
}

export function getLessonsForClass(classIdOrName: string): CurriculumLesson[] {
  const byId = CURRICULUM_CLASS_MAP[classIdOrName];
  if (byId) return byId.lessons;
  const byName = getClassByName(classIdOrName);
  return byName ? byName.lessons : [];
}

export function getLessonByClassAndWeek(
  classId: string,
  weekNumber: number
): CurriculumLesson | undefined {
  return CURRICULUM_CLASS_MAP[classId]?.lessons.find(
    (l) => l.weekNumber === weekNumber
  );
}

export function getAllMaterialsForLesson(lesson: CurriculumLesson): Material[] {
  const topLevel = lesson.materials ?? [];
  const fromCrafts: Material[] = lesson.sections
    .filter((s): s is CraftSection => s.type === "craft")
    .flatMap((s) => s.materials ?? []);

  const seen = new Set<string>();
  const merged: Material[] = [];
  for (const m of [...topLevel, ...fromCrafts]) {
    if (!seen.has(m.name)) {
      seen.add(m.name);
      merged.push(m);
    }
  }
  return merged;
}

export function getAllMaterialsForClass(classId: string): Material[] {
  const cls = CURRICULUM_CLASS_MAP[classId];
  if (!cls) return [];
  const seen = new Set<string>();
  const result: Material[] = [];
  for (const lesson of cls.lessons) {
    for (const m of getAllMaterialsForLesson(lesson)) {
      if (!seen.has(m.name)) {
        seen.add(m.name);
        result.push(m);
      }
    }
  }
  return result;
}

export function getMemoryVersesForClass(
  classId: string
): { lessonTitle: string; verse: string; reference: string }[] {
  return (CURRICULUM_CLASS_MAP[classId]?.lessons ?? []).map((l) => ({
    lessonTitle: l.title,
    verse: l.memoryVerse.text,
    reference: l.memoryVerse.reference,
  }));
}

export function isSectionCompleted(
  completion: LessonCompletion | undefined,
  sectionId: string
): boolean {
  return (
    completion?.completedSections.some((s) => s.sectionId === sectionId) ??
    false
  );
}

export function isLessonFullyCompleted(
  completion: LessonCompletion | undefined,
  lesson: CurriculumLesson
): boolean {
  if (!completion) return false;
  return lesson.sections.every((s) =>
    completion.completedSections.some((c) => c.sectionId === s.id)
  );
}

export function getLessonProgress(
  completion: LessonCompletion | undefined,
  lesson: CurriculumLesson
): { completed: number; total: number; percentage: number } {
  const total = lesson.sections.length;
  const completed = completion
    ? lesson.sections.filter((s) =>
        completion.completedSections.some((c) => c.sectionId === s.id)
      ).length
    : 0;
  return { completed, total, percentage: total > 0 ? (completed / total) * 100 : 0 };
}

export function getClassProgress(
  progress: CurriculumProgress | undefined,
  classId: string
): { completedLessons: number; totalLessons: number; percentage: number } {
  const cls = CURRICULUM_CLASS_MAP[classId];
  if (!cls) return { completedLessons: 0, totalLessons: 0, percentage: 0 };
  const totalLessons = cls.lessons.length;
  const classProgress = progress?.classesByProgress[classId];
  const completedLessons = cls.lessons.filter((l) => {
    const lc = classProgress?.lessonCompletions[l.id];
    return isLessonFullyCompleted(lc, l);
  }).length;
  return {
    completedLessons,
    totalLessons,
    percentage: totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0,
  };
}

export function createEmptyProgress(): CurriculumProgress {
  return {
    classesByProgress: {},
    lastUpdated: new Date().toISOString(),
  };
}

export function markSectionComplete(
  progress: CurriculumProgress,
  classId: string,
  lessonId: string,
  sectionId: string
): CurriculumProgress {
  const lesson = LESSON_MAP[lessonId];
  const classProgress = progress.classesByProgress[classId] ?? {
    classId,
    lessonCompletions: {},
  };
  const lessonCompletion: LessonCompletion = classProgress.lessonCompletions[
    lessonId
  ] ?? {
    lessonId,
    classId,
    completedSections: [],
    isFullyCompleted: false,
  };

  const alreadyDone = lessonCompletion.completedSections.some(
    (s) => s.sectionId === sectionId
  );

  const updatedSections: SectionCompletion[] = alreadyDone
    ? lessonCompletion.completedSections
    : [
        ...lessonCompletion.completedSections,
        { sectionId, completedAt: new Date().toISOString() },
      ];

  const isFullyCompleted = lesson
    ? lesson.sections.every((s) =>
        updatedSections.some((c) => c.sectionId === s.id)
      )
    : false;

  const updatedLesson: LessonCompletion = {
    ...lessonCompletion,
    completedSections: updatedSections,
    isFullyCompleted,
    completedAt: isFullyCompleted ? new Date().toISOString() : lessonCompletion.completedAt,
  };

  return {
    ...progress,
    classesByProgress: {
      ...progress.classesByProgress,
      [classId]: {
        ...classProgress,
        lessonCompletions: {
          ...classProgress.lessonCompletions,
          [lessonId]: updatedLesson,
        },
      },
    },
    lastUpdated: new Date().toISOString(),
  };
}

export function markSectionIncomplete(
  progress: CurriculumProgress,
  classId: string,
  lessonId: string,
  sectionId: string
): CurriculumProgress {
  const classProgress = progress.classesByProgress[classId];
  if (!classProgress) return progress;
  const lessonCompletion = classProgress.lessonCompletions[lessonId];
  if (!lessonCompletion) return progress;

  const updatedSections = lessonCompletion.completedSections.filter(
    (s) => s.sectionId !== sectionId
  );

  return {
    ...progress,
    classesByProgress: {
      ...progress.classesByProgress,
      [classId]: {
        ...classProgress,
        lessonCompletions: {
          ...classProgress.lessonCompletions,
          [lessonId]: {
            ...lessonCompletion,
            completedSections: updatedSections,
            isFullyCompleted: false,
            completedAt: undefined,
          },
        },
      },
    },
    lastUpdated: new Date().toISOString(),
  };
}
