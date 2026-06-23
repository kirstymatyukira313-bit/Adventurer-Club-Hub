import { Router } from "express";
import { db } from "@workspace/db";
import { usersTable, clubsTable } from "@workspace/db";
import { eq, ilike } from "drizzle-orm";
import { randomUUID } from "crypto";

const router = Router();

router.post("/register", async (req, res) => {
  const { displayName, clubName, churchName, role } = req.body as {
    displayName?: string;
    clubName?: string;
    churchName?: string;
    role?: string;
  };

  if (!displayName?.trim() || !clubName?.trim() || !churchName?.trim()) {
    res.status(400).json({ error: "displayName, clubName, and churchName are required" });
    return;
  }

  const userId = randomUUID();
  const clubId = randomUUID();

  await db.insert(usersTable).values({
    id: userId,
    displayName: displayName.trim(),
  });

  await db.insert(clubsTable).values({
    id: clubId,
    userId,
    name: clubName.trim(),
    churchName: churchName.trim(),
    role: role?.trim() || "Club Leader",
    conference: "",
    district: "",
    subscriptionAmount: 0,
    subscriptionTarget: 0,
  });

  res.status(201).json({ userId, clubId, displayName: displayName.trim() });
});

router.get("/lookup", async (req, res) => {
  const name = (req.query.name as string | undefined)?.trim();
  if (!name) {
    res.status(400).json({ error: "name query param is required" });
    return;
  }

  const users = await db
    .select()
    .from(usersTable)
    .where(ilike(usersTable.displayName, name));

  if (!users.length) {
    res.status(404).json({ error: "No account found with that name" });
    return;
  }

  const results = await Promise.all(
    users.map(async (user) => {
      const clubs = await db
        .select()
        .from(clubsTable)
        .where(eq(clubsTable.userId, user.id))
        .limit(1);
      return {
        userId: user.id,
        clubId: clubs[0]?.id ?? null,
        displayName: user.displayName,
        clubName: clubs[0]?.name ?? "",
        churchName: clubs[0]?.churchName ?? "",
      };
    }),
  );

  res.json(results);
});

export default router;
