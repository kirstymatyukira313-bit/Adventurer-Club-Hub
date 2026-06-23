import { pgTable, real, text, timestamp } from "drizzle-orm/pg-core";

import { clubsTable } from "./clubs";

export const expensesTable = pgTable("expenses", {
  id: text("id").primaryKey(),
  clubId: text("club_id")
    .notNull()
    .references(() => clubsTable.id, { onDelete: "cascade" }),
  description: text("description").notNull(),
  amount: real("amount").notNull(),
  date: text("date").notNull(),
  type: text("type").notNull().default("Other"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Expense = typeof expensesTable.$inferSelect;
export type InsertExpense = typeof expensesTable.$inferInsert;
