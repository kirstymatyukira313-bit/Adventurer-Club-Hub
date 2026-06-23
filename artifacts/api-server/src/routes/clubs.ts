import { Router } from "express";
import { db } from "@workspace/db";
import {
  clubsTable,
  membersTable,
  attendanceRecordsTable,
  expensesTable,
  lessonCompletionsTable,
  driveFilesTable,
  reminderSettingsTable,
} from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { randomUUID } from "crypto";
import { requireAuth, type AuthedRequest } from "../middlewares/auth";

const router = Router();

router.use(requireAuth);

router.get("/me", async (req, res) => {
  const { userId, clubId } = req as AuthedRequest;

  const clubs = await db
    .select()
    .from(clubsTable)
    .where(eq(clubsTable.id, clubId))
    .limit(1);

  if (!clubs[0]) {
    res.status(404).json({ error: "Club not found" });
    return;
  }

  res.json({ userId, club: clubs[0] });
});

router.patch("/me/club", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { name, churchName, role, conference, district } = req.body as Record<string, string>;

  await db
    .update(clubsTable)
    .set({ name, churchName, role, conference, district })
    .where(eq(clubsTable.id, clubId));

  res.json({ ok: true });
});

router.patch("/me/subscription", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { subscriptionAmount, subscriptionTarget } = req.body as {
    subscriptionAmount?: number;
    subscriptionTarget?: number;
  };

  await db
    .update(clubsTable)
    .set({ subscriptionAmount, subscriptionTarget })
    .where(eq(clubsTable.id, clubId));

  res.json({ ok: true });
});

router.get("/me/state", async (req, res) => {
  const { clubId } = req as AuthedRequest;

  const [club, members, attendance, expenses, lessonCompletions, driveFiles, reminderRows] =
    await Promise.all([
      db.select().from(clubsTable).where(eq(clubsTable.id, clubId)).limit(1),
      db.select().from(membersTable).where(eq(membersTable.clubId, clubId)),
      db.select().from(attendanceRecordsTable).where(eq(attendanceRecordsTable.clubId, clubId)),
      db.select().from(expensesTable).where(eq(expensesTable.clubId, clubId)),
      db.select().from(lessonCompletionsTable).where(eq(lessonCompletionsTable.clubId, clubId)),
      db.select().from(driveFilesTable).where(eq(driveFilesTable.clubId, clubId)),
      db.select().from(reminderSettingsTable).where(eq(reminderSettingsTable.clubId, clubId)),
    ]);

  const completionsMap: Record<string, string[]> = {};
  for (const lc of lessonCompletions) {
    completionsMap[lc.lessonId] = lc.sectionIds as string[];
  }

  res.json({
    club: club[0] ?? null,
    members,
    attendance,
    expenses,
    lessonCompletions: completionsMap,
    driveFiles,
    reminders: reminderRows[0] ?? null,
  });
});

router.get("/me/members", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const rows = await db.select().from(membersTable).where(eq(membersTable.clubId, clubId));
  res.json(rows);
});

router.post("/me/members", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { name, adventurerClass, gender, dob, guardian, phone, medicalNotes } = req.body as Record<string, string>;

  const id = randomUUID();
  await db.insert(membersTable).values({
    id,
    clubId,
    name,
    adventurerClass,
    gender,
    hasPaid: false,
    amountPaid: 0,
    dob,
    guardian,
    phone,
    medicalNotes,
  });

  const rows = await db.select().from(membersTable).where(eq(membersTable.id, id)).limit(1);
  res.status(201).json(rows[0]);
});

router.patch("/me/members/:memberId", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { memberId } = req.params;
  const updates = req.body as Partial<typeof membersTable.$inferInsert>;

  await db
    .update(membersTable)
    .set(updates)
    .where(and(eq(membersTable.id, memberId), eq(membersTable.clubId, clubId)));

  res.json({ ok: true });
});

router.delete("/me/members/:memberId", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { memberId } = req.params;

  await db
    .delete(membersTable)
    .where(and(eq(membersTable.id, memberId), eq(membersTable.clubId, clubId)));

  res.json({ ok: true });
});

router.get("/me/attendance", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const rows = await db.select().from(attendanceRecordsTable).where(eq(attendanceRecordsTable.clubId, clubId));
  res.json(rows);
});

router.put("/me/attendance/:date", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { date } = req.params;
  const { sessionType, records, guests, noSessionReason, noSessionNote } = req.body as {
    sessionType: string;
    records: { memberId: string; present: boolean }[];
    guests: { id: string; name: string }[];
    noSessionReason?: string;
    noSessionNote?: string;
  };

  const existing = await db
    .select()
    .from(attendanceRecordsTable)
    .where(and(eq(attendanceRecordsTable.clubId, clubId), eq(attendanceRecordsTable.date, date)))
    .limit(1);

  if (existing[0]) {
    await db
      .update(attendanceRecordsTable)
      .set({ sessionType, records, guests, noSessionReason, noSessionNote })
      .where(eq(attendanceRecordsTable.id, existing[0].id));
  } else {
    await db.insert(attendanceRecordsTable).values({
      id: randomUUID(),
      clubId,
      date,
      sessionType,
      records,
      guests,
      noSessionReason,
      noSessionNote,
    });
  }

  res.json({ ok: true });
});

router.get("/me/expenses", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const rows = await db.select().from(expensesTable).where(eq(expensesTable.clubId, clubId));
  res.json(rows);
});

router.post("/me/expenses", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { description, amount, date, type } = req.body as {
    description: string;
    amount: number;
    date: string;
    type?: string;
  };

  const id = randomUUID();
  await db.insert(expensesTable).values({ id, clubId, description, amount, date, type: type ?? "Other" });
  const rows = await db.select().from(expensesTable).where(eq(expensesTable.id, id)).limit(1);
  res.status(201).json(rows[0]);
});

router.patch("/me/expenses/:expenseId", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { expenseId } = req.params;
  const updates = req.body as Partial<typeof expensesTable.$inferInsert>;

  await db
    .update(expensesTable)
    .set(updates)
    .where(and(eq(expensesTable.id, expenseId), eq(expensesTable.clubId, clubId)));

  res.json({ ok: true });
});

router.delete("/me/expenses/:expenseId", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { expenseId } = req.params;

  await db
    .delete(expensesTable)
    .where(and(eq(expensesTable.id, expenseId), eq(expensesTable.clubId, clubId)));

  res.json({ ok: true });
});

router.put("/me/lessons/:lessonId", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { lessonId } = req.params;
  const { sectionIds } = req.body as { sectionIds: string[] };

  const existing = await db
    .select()
    .from(lessonCompletionsTable)
    .where(and(eq(lessonCompletionsTable.clubId, clubId), eq(lessonCompletionsTable.lessonId, lessonId)))
    .limit(1);

  if (existing[0]) {
    await db
      .update(lessonCompletionsTable)
      .set({ sectionIds })
      .where(eq(lessonCompletionsTable.id, existing[0].id));
  } else {
    await db.insert(lessonCompletionsTable).values({ id: randomUUID(), clubId, lessonId, sectionIds });
  }

  res.json({ ok: true });
});

router.get("/me/drive-files", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const rows = await db.select().from(driveFilesTable).where(eq(driveFilesTable.clubId, clubId));
  res.json(rows);
});

router.post("/me/drive-files", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { name, adventurerClass, driveUrl } = req.body as {
    name: string;
    adventurerClass: string;
    driveUrl: string;
  };

  const id = randomUUID();
  const addedAt = new Date().toISOString();
  await db.insert(driveFilesTable).values({ id, clubId, name, adventurerClass, driveUrl, addedAt });
  const rows = await db.select().from(driveFilesTable).where(eq(driveFilesTable.id, id)).limit(1);
  res.status(201).json(rows[0]);
});

router.delete("/me/drive-files/:fileId", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const { fileId } = req.params;

  await db
    .delete(driveFilesTable)
    .where(and(eq(driveFilesTable.id, fileId), eq(driveFilesTable.clubId, clubId)));

  res.json({ ok: true });
});

router.put("/me/reminders", async (req, res) => {
  const { clubId } = req as AuthedRequest;
  const settings = req.body as {
    enabled: boolean;
    meetingDay: number;
    meetingHour: number;
    meetingMinute: number;
    morningReminder: boolean;
    prepReminder: boolean;
  };

  const existing = await db
    .select()
    .from(reminderSettingsTable)
    .where(eq(reminderSettingsTable.clubId, clubId))
    .limit(1);

  if (existing[0]) {
    await db
      .update(reminderSettingsTable)
      .set(settings)
      .where(eq(reminderSettingsTable.id, existing[0].id));
  } else {
    await db.insert(reminderSettingsTable).values({ id: randomUUID(), clubId, ...settings });
  }

  res.json({ ok: true });
});

export default router;
