import { boolean, integer, pgTable, text } from "drizzle-orm/pg-core";

import { clubsTable } from "./clubs";

export const reminderSettingsTable = pgTable("reminder_settings", {
  id: text("id").primaryKey(),
  clubId: text("club_id")
    .notNull()
    .unique()
    .references(() => clubsTable.id, { onDelete: "cascade" }),
  enabled: boolean("enabled").default(false).notNull(),
  meetingDay: integer("meeting_day").default(6).notNull(),
  meetingHour: integer("meeting_hour").default(8).notNull(),
  meetingMinute: integer("meeting_minute").default(0).notNull(),
  morningReminder: boolean("morning_reminder").default(true).notNull(),
  prepReminder: boolean("prep_reminder").default(true).notNull(),
});

export type ReminderSettings = typeof reminderSettingsTable.$inferSelect;
export type InsertReminderSettings = typeof reminderSettingsTable.$inferInsert;
