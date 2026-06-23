import { boolean, pgTable, real, text, timestamp } from "drizzle-orm/pg-core";

import { clubsTable } from "./clubs";

export const membersTable = pgTable("members", {
  id: text("id").primaryKey(),
  clubId: text("club_id")
    .notNull()
    .references(() => clubsTable.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  adventurerClass: text("adventurer_class").notNull(),
  gender: text("gender").notNull(),
  hasPaid: boolean("has_paid").default(false).notNull(),
  amountPaid: real("amount_paid").default(0).notNull(),
  dob: text("dob"),
  guardian: text("guardian"),
  phone: text("phone"),
  medicalNotes: text("medical_notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type DbMember = typeof membersTable.$inferSelect;
export type InsertMember = typeof membersTable.$inferInsert;
