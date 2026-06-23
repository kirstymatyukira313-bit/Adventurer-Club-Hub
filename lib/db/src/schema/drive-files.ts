import { pgTable, text } from "drizzle-orm/pg-core";

import { clubsTable } from "./clubs";

export const driveFilesTable = pgTable("drive_files", {
  id: text("id").primaryKey(),
  clubId: text("club_id")
    .notNull()
    .references(() => clubsTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  adventurerClass: text("adventurer_class").notNull(),
  driveUrl: text("drive_url").notNull(),
  addedAt: text("added_at").notNull(),
});

export type DriveFile = typeof driveFilesTable.$inferSelect;
export type InsertDriveFile = typeof driveFilesTable.$inferInsert;
