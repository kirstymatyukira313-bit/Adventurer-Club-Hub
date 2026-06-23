import { integer, pgTable, real, text, timestamp } from "drizzle-orm/pg-core";

import { usersTable } from "./users";

export const clubsTable = pgTable("clubs", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
  name: text("name").notNull(),
  churchName: text("church_name").notNull(),
  role: text("role").notNull().default("Club Leader"),
  conference: text("conference").default(""),
  district: text("district").default(""),
  subscriptionAmount: real("subscription_amount").default(0),
  subscriptionTarget: integer("subscription_target").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Club = typeof clubsTable.$inferSelect;
export type InsertClub = typeof clubsTable.$inferInsert;
