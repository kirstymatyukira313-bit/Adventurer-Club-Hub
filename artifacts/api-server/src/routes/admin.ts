import { Router } from "express";
import { db } from "@workspace/db";
import { usersTable, clubsTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

router.get("/stats", async (_req, res) => {
  const users = await db
    .select({
      userId: usersTable.id,
      displayName: usersTable.displayName,
      createdAt: usersTable.createdAt,
      clubId: clubsTable.id,
      clubName: clubsTable.name,
      churchName: clubsTable.churchName,
      role: clubsTable.role,
    })
    .from(usersTable)
    .leftJoin(clubsTable, eq(clubsTable.userId, usersTable.id))
    .orderBy(usersTable.createdAt);

  res.json({
    totalLeaders: users.length,
    leaders: users,
  });
});

export default router;
