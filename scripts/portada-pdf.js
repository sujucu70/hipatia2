#!/usr/bin/env node
/* Genera un PDF de la portada a 1440 px de ancho en docs/medicion/portada-1440.pdf,
 * para que Susana revise la home tal como se ve en escritorio. Sirve public/ en local
 * y usa el Chromium preinstalado (playwright-core). Uso: node scripts/portada-pdf.js */
"use strict";
const fs = require("fs");
const path = require("path");
const http = require("http");

const ROOT = path.join(__dirname, "..");
const PUB = path.join(ROOT, "public");
const OUT = path.join(ROOT, "docs", "medicion");
const PORT = 8137;
const TIPOS = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon" };

function serve() {
  return http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p.endsWith("/")) p += "index.html";
    const file = path.join(PUB, p);
    if (!file.startsWith(PUB) || !fs.existsSync(file)) { res.statusCode = 404; return res.end("404"); }
    res.setHeader("Content-Type", TIPOS[path.extname(file)] || "application/octet-stream");
    fs.createReadStream(file).pipe(res);
  });
}

(async () => {
  let pw;
  try { pw = require("playwright-core"); } catch (e) { console.error("playwright-core no instalado:", e.message); process.exit(1); }
  const exe = path.join(process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers", "chromium");
  const srv = serve();
  await new Promise((r) => srv.listen(PORT, r));
  let browser;
  try { browser = await pw.chromium.launch({ executablePath: fs.existsSync(exe) ? exe : undefined, headless: true, args: ["--no-sandbox"] }); }
  catch (e) { console.error("no se pudo lanzar Chromium:", e.message); srv.close(); process.exit(1); }
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  const pdf = path.join(OUT, "portada-1440.pdf");
  await page.pdf({ path: pdf, width: "1440px", height: `${h}px`, printBackground: true, pageRanges: "1" });
  await browser.close();
  srv.close();
  console.log("Escrito", path.relative(ROOT, pdf), `(1440 × ${h} px)`);
})();
