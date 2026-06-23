import { jsonb, pgTable, text } from "drizzle-orm/pg-core";

import { clubsTable } from "./clubs";

export const attendanceRecordsTable = pgTable("attendance_records", {
  id: text("id").primaryKey(),
  clubId: text("club_id")
    .notNull()
    .references(() => clubsTable.id, { onDelete: "cascade" }),
  date: text("date").notNull(),
  sessionType: text("session_type").notNull(),
  records: jsonb("records")
    .notNull()
    .$type<{ memberId: string; present: boolean }[]>()
    .default([]),
  guests: jsonb("guests")
    .notNull()
    .$type<{ id: string; name: string }[]>()
    .default([]),
  noSessionReason: text("no_session_reason"),
  noSessionNote: text("no_session_note"),
});

export type AttendanceRecord = typeof attendanceRecordsTable.$inferSelect;
export type InsertAttendanceRecord = typeof attendanceRecordsTable.$inferInsert;
