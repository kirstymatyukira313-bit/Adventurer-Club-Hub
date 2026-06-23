import type { NextFunction, Request, Response } from "express";
import { db } from "@workspace/db";
import { eq } from "drizzle-orm";
import { usersTable, clubsTable } from "@workspace/db";

export interface AuthedRequest extends Request {
  userId: string;
  clubId: string;
}

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const userId = req.headers["x-user-id"] as string | undefined;
  if (!userId) {
    res.status(401).json({ error: "Missing X-User-Id header" });
    return;
  }

  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, userId))
    .limit(1);

  if (!user[0]) {
    res.status(401).json({ error: "User not found" });
    return;
  }

  const club = await db
    .select()
    .from(clubsTable)
    .where(eq(clubsTable.userId, userId))
    .limit(1);

  if (!club[0]) {
    res.status(401).json({ error: "Club not found for user" });
    return;
  }

  (req as AuthedRequest).userId = userId;
  (req as AuthedRequest).clubId = club[0].id;
  next();
}
