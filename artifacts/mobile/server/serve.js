/**
 * Standalone production server for Expo static builds.
 *
 * Request routing:
 * - GET /manifest (or /) with expo-platform header → Expo Go manifest JSON
 * - All other requests → web build from ./static-build/web/ (SPA with fallback to index.html)
 *
 * Zero external dependencies — uses only Node.js built-ins (http, fs, path).
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const STATIC_ROOT = path.resolve(__dirname, "..", "static-build");
const WEB_ROOT = path.join(STATIC_ROOT, "web");
const basePath = (process.env.BASE_PATH || "/").replace(/\/+$/, "");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".map": "application/json",
};

function serveManifest(platform, res) {
  const manifestPath = path.join(STATIC_ROOT, platform, "manifest.json");

  if (!fs.existsSync(manifestPath)) {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ error: `Manifest not found for platform: ${platform}` }),
    );
    return;
  }

  const manifest = fs.readFileSync(manifestPath, "utf-8");
  res.writeHead(200, {
    "content-type": "application/json",
    "expo-protocol-version": "1",
    "expo-sfv-version": "0",
  });
  res.end(manifest);
}

function serveWebBuild(urlPath, res) {
  const safePath = path.normalize(urlPath).replace(/^(\.\.(\/|\\|$))+/, "");
  const filePath = path.join(WEB_ROOT, safePath);

  if (!filePath.startsWith(WEB_ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  let resolvedPath = filePath;

  if (!fs.existsSync(resolvedPath) || fs.statSync(resolvedPath).isDirectory()) {
    const htmlPath = filePath + ".html";
    if (fs.existsSync(htmlPath)) {
      resolvedPath = htmlPath;
    } else {
      resolvedPath = path.join(WEB_ROOT, "index.html");
    }
  }

  if (!fs.existsSync(resolvedPath)) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not Found");
    return;
  }

  const ext = path.extname(resolvedPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  const cacheControl =
    ext === ".html"
      ? "no-cache, no-store, must-revalidate"
      : "public, max-age=31536000, immutable";

  const content = fs.readFileSync(resolvedPath);
  res.writeHead(200, {
    "content-type": contentType,
    "cache-control": cacheControl,
  });
  res.end(content);
}

const hasWebBuild = fs.existsSync(path.join(WEB_ROOT, "index.html"));
if (hasWebBuild) {
  console.log("Web build found — browser requests will open the app directly");
} else {
  console.warn(
    "Warning: No web build found at static-build/web/. Run the build step first.",
  );
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  let pathname = url.pathname;

  if (basePath && pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || "/";
  }

  const platform = req.headers["expo-platform"];

  if (platform === "ios" || platform === "android") {
    return serveManifest(platform, res);
  }

  serveWebBuild(pathname, res);
});

const port = parseInt(process.env.PORT || "3000", 10);
server.listen(port, "0.0.0.0", () => {
  console.log(`Serving on port ${port}`);
  if (hasWebBuild) {
    console.log("→ Browser: opens web app directly");
    console.log("→ Expo Go: scans QR code to open native app");
  }
});
