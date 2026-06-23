---
name: Auth model
description: How auth works in the Adventurer Club Manager — no email/password, display name only
---

**Rule:** Auth uses display name only — no email, no password, no third-party OAuth.

**How it works:**
- `POST /api/auth/register` — takes `{ displayName, clubName, churchName, role }`, returns `{ userId, clubId }`
- `GET /api/auth/lookup?name=` — finds existing account by name (case-insensitive), returns array
- UUID stored in AsyncStorage via AuthContext (`adventurer_auth_v1` key)
- All API requests send `X-User-Id: <uuid>` header; middleware validates against DB
- `GET /api/admin/stats` — no auth needed, returns total leader count + list

**Why:** User explicitly chose this over email/password/Google for simplicity. Club leaders are non-technical; they just type their name.

**How to apply:** If adding new API routes, use `requireAuth` middleware from `artifacts/api-server/src/middlewares/auth.ts`. It injects `req.userId` and `req.clubId`. Admin-only routes skip middleware and are public read-only.
