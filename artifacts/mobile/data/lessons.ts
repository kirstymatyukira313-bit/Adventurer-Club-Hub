import {
  ALL_LESSONS,
  getLessonById as getCurriculumLessonById,
  getLessonsForClass as getCurriculumLessonsForClass,
} from "@/curriculum";
import type { Lesson } from "@/types";

function toLesson(l: (typeof ALL_LESSONS)[0]): Lesson {
  return {
    id: l.id,
    adventurerClass: l.classId
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ") as Lesson["adventurerClass"],
    weekNumber: l.weekNumber,
    title: l.title,
    objective: l.objective,
    memoryVerse: l.memoryVerse.text,
    memoryVerseRef: l.memoryVerse.reference,
    sections: l.sections.map((s) => ({
      id: s.id,
      type: s.type as Lesson["sections"][0]["type"],
      title: s.title,
      duration: s.duration,
      instructions: s.instructions,
      resources: "resources" in s ? s.resources : undefined,
      craftName: "craftName" in s ? s.craftName : undefined,
      materials:
        "materials" in s && s.materials
          ? s.materials.map((m) => m.name)
          : undefined,
      steps: "steps" in s ? s.steps : undefined,
    })),
  };
}

export const LESSONS: Lesson[] = ALL_LESSONS.map(toLesson);

export function getLessonById(id: string): Lesson | undefined {
  const l = getCurriculumLessonById(id);
  return l ? toLesson(l) : undefined;
}

export function getLessonsForClass(adventurerClass: string): Lesson[] {
  return getCurriculumLessonsForClass(adventurerClass).map(toLesson);
}
