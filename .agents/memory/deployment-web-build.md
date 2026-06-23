---
name: Deployment web build
description: How the mobile artifact deploys — must run web export in build step
---

**Rule:** The mobile artifact's build step (`scripts/build.js`) must run `expo export --platform web --output-dir static-build/web` after the iOS/Android bundles. The serve.js then serves the web build for browser requests and the Expo manifest for native requests.

**Why:** Without the web export, the published URL only shows a QR code page for Expo Go — it can't be opened in Chrome. The Expo Go "downloading" loop was caused by server restarts generating new timestamps (new "versions") on every restart.

**How to apply:**
- `serve.js` checks for `expo-platform` header → serves manifest; otherwise → serves `static-build/web/index.html` (SPA fallback)
- `@expo/metro-runtime` is required for `expo export --platform web` — already installed
- Mobile API calls use Platform-conditional base URL: `/api` on web, `https://${EXPO_PUBLIC_DOMAIN}/api` on native
