import { jsonb, pgTable, text } from "drizzle-orm/pg-core";

import { clubsTable } from "./clubs";

export const lessonCompletionsTable = pgTable("lesson_completions", {
  id: text("id").primaryKey(),
  clubId: text("club_id")
    .notNull()
    .references(() => clubsTable.id, { onDelete: "cascade" }),
  lessonId: text("lesson_id").notNull(),
  sectionIds: jsonb("section_ids").notNull().$type<string[]>().default([]),
});

export type LessonCompletion = typeof lessonCompletionsTable.$inferSelect;
export type InsertLessonCompletion = typeof lessonCompletionsTable.$inferInsert;
