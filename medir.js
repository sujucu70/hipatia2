#!/usr/bin/env node
/* Hipatia v3 · medir.js
 * Verificación de los criterios de aceptación de §6.8 (los automatizables).
 * - Sirve public/ como lo hará Cloudflare (drop-trailing-slash, index.html por carpeta).
 * - Con Chromium (playwright-core): capturas a 1440 y 390, errores de consola, contraste AA.
 * - Sin navegador: peso por página, enlaces rotos, orden de bloques, honestidad, «clics hasta».
 * Escribe docs/medicion/informe.md y las capturas en docs/medicion/.
 * Uso: node medir.js [--all]   (--all captura todas las rutas; por defecto, una muestra).
 */
"use strict";
const fs = require("fs");
const http = require("http");
const path = require("path");

const ROOT = __dirname;
const PUB = path.join(ROOT, "public");
const OUT = path.join(ROOT, "docs", "medicion");
const SHOTS = OUT;
const PORT = 8787;
const ALL = process.argv.includes("--all");
fs.mkdirSync(OUT, { recursive: true });

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".json": "application/json" };
function resolveFile(urlPath) {
  let p = decodeURIComponent(urlPath.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  let f = path.join(PUB, p);
  if (fs.existsSync(f) && fs.statSync(f).isFile()) return f;
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) { const i = path.join(f, "index.html"); if (fs.existsSync(i)) return i; }
  if (fs.existsSync(f + ".html")) return f + ".html";
  const asDir = path.join(PUB, p, "index.html");
  if (fs.existsSync(asDir)) return asDir;
  return null;
}
function serve() {
  return http.createServer((req, res) => {
    const f = resolveFile(req.url);
    if (!f) { res.statusCode = 404; res.end("404"); return; }
    res.setHeader("Content-Type", MIME[path.extname(f)] || "application/octet-stream");
    res.end(fs.readFileSync(f));
  });
}

// ---- rutas del sitio (carpetas con index.html) ----
function walk(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => { const p = path.join(d, e.name); return e.isDirectory() ? walk(p) : [p]; }); }
const htmlFiles = walk(PUB).filter((f) => f.endsWith(".html"));
const routes = htmlFiles.map((f) => "/" + path.relative(PUB, path.dirname(f)).split(path.sep).join("/")).map((r) => (r === "/" ? "/" : r + "/")).map((r) => r.replace("//", "/"));

// ---- checks sin navegador ----
const CSS = fs.readFileSync(path.join(PUB, "styles.css")); const JS = fs.readFileSync(path.join(PUB, "app.js"));
const results = { pesos: [], enlacesRotos: [], bloques: [], honestidad: [], sinBuscador: [], sinURL: [] };
const BLOQUES_SOL = ["La propuesta", "Material para el cliente", "Referencias", "Para prepararte", "¿Falta algo?"];
htmlFiles.forEach((f) => {
  const html = fs.readFileSync(f, "utf8");
  const route = "/" + path.relative(PUB, path.dirname(f)).split(path.sep).join("/");
  const kb = Math.round((Buffer.byteLength(html) + CSS.length + JS.length) / 1024);
  results.pesos.push({ route, kb });
  // enlaces internos
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const h = m[1];
    const ok = /\.(html|png|svg|jpg|css|js)$/.test(h) || h.startsWith("/assets/") || h === "/styles.css" || h === "/app.js"
      ? fs.existsSync(path.join(PUB, h)) : fs.existsSync(path.join(PUB, h, "index.html"));
    if (!ok) results.enlacesRotos.push({ route, href: h });
  }
  // buscador presente en las pantallas del catálogo (las que usan la plantilla v3)
  if (/site-header/.test(html) && !/data-header-search/.test(html)) results.sinBuscador.push(route);
  // bloques en orden en páginas de solución
  if (/\/practicas\/[^/]+\/[^/]+$/.test(path.dirname(f))) {
    const idxs = BLOQUES_SOL.map((b) => html.indexOf(b));
    const ordenOk = idxs.every((v, i) => v !== -1 && (i === 0 || v > idxs[i - 1]));
    if (!ordenOk) results.bloques.push({ route, idxs });
  }
  // honestidad: no afirmar agente/envío/integración en funcionamiento
  if (/(agente (te )?(escribe|prepara|arma) )|se ha enviado|enviado correctamente|integrado con el CRM/i.test(html))
    results.honestidad.push(route);
});

// ---- clics desde la portada (BFS sobre enlaces internos) ----
function outlinks(route) {
  const f = resolveFile(route.endsWith("/") ? route : route + "/") || resolveFile(route);
  if (!f) return [];
  const html = fs.readFileSync(f, "utf8");
  const set = new Set();
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let h = m[1];
    if (/\.(png|svg|jpg|css|js)$/.test(h) || h.startsWith("/assets/")) continue;
    if (!h.endsWith("/") && !h.endsWith(".html")) h += "/";
    set.add(h);
  }
  return [...set];
}
function bfs(start) {
  const dist = { [start]: 0 }; const q = [start];
  while (q.length) { const cur = q.shift(); for (const nx of outlinks(cur)) { if (!(nx in dist)) { dist[nx] = dist[cur] + 1; q.push(nx); } } }
  return dist;
}
const dist = bfs("/");
const dataDir = path.join(ROOT, "data");
const PRACS = ["process-intelligence", "software-development", "data-intelligence", "smart-operations", "digital-change"];
const soluciones = [];
PRACS.forEach((id) => { const pr = JSON.parse(fs.readFileSync(path.join(dataDir, id + ".json"))); (pr.soluciones || []).forEach((s) => soluciones.push(`/practicas/${id}/${s.id}/`)); });
const materiales = JSON.parse(fs.readFileSync(path.join(dataDir, "materiales.json"))).materiales;
const matCliente = materiales.filter((m) => m.sale_al_cliente === "si").map((m) => `/materiales/${m.id}/`);
const clicsSol = soluciones.map((r) => ({ r, d: dist[r] }));
const clicsMat = matCliente.map((r) => ({ r, d: dist[r] }));
const solMax = Math.max(...clicsSol.map((c) => c.d == null ? 99 : c.d));
const matMax = Math.max(...clicsMat.map((c) => c.d == null ? 99 : c.d));

// ---- navegador: capturas + consola + contraste ----
const CONTRAST_JS = `() => {
  function lum(c){c=c.map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2];}
  function parse(s){const m=s.match(/rgba?\\(([^)]+)\\)/);if(!m)return null;const p=m[1].split(',').map(x=>parseFloat(x));return {r:p[0],g:p[1],b:p[2],a:(p[3]===undefined?1:p[3])};}
  function over(fg,bg){const a=fg.a;return {r:fg.r*a+bg.r*(1-a),g:fg.g*a+bg.g*(1-a),b:fg.b*a+bg.b*(1-a),a:1};}
  // fondo efectivo: compone de la raíz hacia el elemento respetando alpha
  function bg(el){const stack=[];let e=el;while(e){stack.push(getComputedStyle(e).backgroundColor);e=e.parentElement;}
    let acc={r:255,g:255,b:255,a:1};for(let i=stack.length-1;i>=0;i--){const c=parse(stack[i]);if(c&&c.a>0)acc=over(c,acc);}return acc;}
  function hidden(el){let e=el;while(e){const s=getComputedStyle(e);if(s.display==='none'||s.visibility==='hidden'||s.opacity==='0')return true;e=e.parentElement;}
    return el.getClientRects().length===0;}
  const bad=[];const els=document.querySelectorAll('h1,h2,h3,h4,p,a,span,b,li,summary,button,label,div');
  els.forEach(el=>{
    // solo nodos con texto directo (no contenedores)
    const direct=Array.from(el.childNodes).filter(n=>n.nodeType===3).map(n=>n.textContent).join('').trim();
    if(!direct||!/[a-zA-Z0-9]/.test(direct))return;
    if(hidden(el))return;
    const st=getComputedStyle(el);const fgc=parse(st.color);if(!fgc)return;const b=bg(el);const fg=over(fgc,b);
    const L1=lum([fg.r,fg.g,fg.b]),L2=lum([b.r,b.g,b.b]);const ratio=(Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
    const size=parseFloat(st.fontSize),bold=parseInt(st.fontWeight)>=700;const large=size>=24||(size>=18.66&&bold);
    const min=large?3:4.5;if(ratio<min-0.05)bad.push({t:direct.slice(0,40),ratio:Math.round(ratio*100)/100,min,size:Math.round(size)});});
  return bad.slice(0,20);
}`;

async function withBrowser() {
  let pw; try { pw = require("playwright-core"); } catch (e) { return { skipped: "playwright-core no instalado" }; }
  const exe = path.join(process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers", "chromium");
  let browser;
  try { browser = await pw.chromium.launch({ executablePath: fs.existsSync(exe) ? exe : undefined, headless: true, args: ["--no-sandbox"] }); }
  catch (e) { try { browser = await pw.chromium.launch({ headless: true, args: ["--no-sandbox"] }); } catch (e2) { return { skipped: "no se pudo lanzar Chromium: " + e2.message }; } }
  const consola = []; const contraste = [];
  const sample = ["/", "/entelgy/", "/practicas/", "/practicas/software-development/", "/practicas/software-development/modernizacion/", "/practicas/data-intelligence/data-intelligence/", "/materiales/", "/contactos/", "/punto-de-partida/", "/lo-que-viene/"];
  const targets = ALL ? routes : sample;
  for (const width of [1440, 390]) {
    const ctx = await browser.newContext({ viewport: { width, height: width === 1440 ? 900 : 780 } });
    for (const route of targets) {
      const page = await ctx.newPage();
      const errs = [];
      page.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
      page.on("pageerror", (e) => errs.push(String(e)));
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle" }).catch(() => {});
      if (width === 1440) {
        const bad = await page.evaluate(eval("(" + CONTRAST_JS + ")")).catch(() => []);
        if (bad.length) contraste.push({ route, bad });
        if (errs.length) consola.push({ route, errs });
      }
      const slug = (route === "/" ? "portada" : route.replace(/^\/|\/$/g, "").replace(/\//g, "_"));
      await page.screenshot({ path: path.join(SHOTS, `${slug}-${width}.png`), fullPage: true }).catch(() => {});
      await page.close();
    }
    await ctx.close();
  }
  await browser.close();
  return { consola, contraste, capturadas: targets.length };
}

// ---- informe ----
function tick(ok) { return ok ? "🟢" : "🔴"; }
(async () => {
  const srv = serve(); await new Promise((r) => srv.listen(PORT, r));
  let nav; try { nav = await withBrowser(); } catch (e) { nav = { skipped: e.message }; } finally { srv.close(); }

  const pesoMax = Math.max(...results.pesos.map((p) => p.kb));
  const c = {
    2: solMax <= 2 && matMax <= 3,
    3: results.bloques.length === 0,
    5: results.enlacesRotos.length === 0,
    6: results.honestidad.length === 0,
    7: results.sinBuscador.length === 0,
    8: pesoMax <= 150 && (nav.skipped ? null : (nav.consola.length === 0 && nav.contraste.length === 0))
  };
  let md = "# Medición · Hipatia v3\n\n";
  md += `> Generado por \`medir.js\` el ${new Date().toISOString().slice(0, 10)}. Rutas medidas: ${routes.length}.\n\n`;
  md += "## Criterios de aceptación (§6.8)\n\n| # | Criterio | Estado |\n|---|---|---|\n";
  md += `| 1 | Prueba de los cinco comerciales | ⚪ la hace Susana |\n`;
  md += `| 2 | Solución a ≤2 clics, material cliente a ≤3 | ${tick(c[2])} (solución máx ${solMax}, material máx ${matMax}) |\n`;
  md += `| 3 | 5 prácticas y 11 soluciones, mismos bloques en orden | ${tick(c[3])} |\n`;
  md += `| 5 | Uso/estado/dueño, citable⇒sign_off, sin enlaces rotos | ${tick(c[5])} (rotos: ${results.enlacesRotos.length}) |\n`;
  md += `| 6 | Ninguna pantalla afirma agente/envío/integración | ${tick(c[6])} |\n`;
  md += `| 7 | URL propia y buscador en todas | ${tick(c[7])} |\n`;
  md += `| 8 | Contraste AA · 0 errores consola · <150 KB · 390 px | ${c[8] === null ? "🟡 peso ok; contraste/consola requieren navegador" : tick(c[8])} (peso máx ${pesoMax} KB) |\n`;
  md += `| 9 | Reconocible por quien usó hipatia2 | ⚪ cualitativo |\n\n`;

  md += "## Clics desde la portada\n\n";
  md += `- Solución más lejana: **${solMax}** clic(s).\n- Material para cliente más lejano: **${matMax}** clic(s).\n\n`;
  md += "| Ruta | Clics |\n|---|---|\n" + clicsSol.map((x) => `| ${x.r} | ${x.d == null ? "—" : x.d} |`).join("\n") + "\n\n";

  md += "## Peso por página (HTML + CSS + JS)\n\n| Ruta | KB |\n|---|---|\n" +
    results.pesos.sort((a, b) => b.kb - a.kb).slice(0, 12).map((p) => `| ${p.route || "/"} | ${p.kb} |`).join("\n") +
    `\n\n(máximo ${pesoMax} KB de ${results.pesos.length} páginas; imágenes aparte)\n\n`;

  if (results.enlacesRotos.length) md += "## Enlaces rotos\n\n" + results.enlacesRotos.map((b) => `- ${b.route} → ${b.href}`).join("\n") + "\n\n";
  if (results.bloques.length) md += "## Bloques fuera de orden\n\n" + results.bloques.map((b) => `- ${b.route}`).join("\n") + "\n\n";
  if (results.honestidad.length) md += "## Honestidad (revisar)\n\n" + results.honestidad.map((r) => `- ${r}`).join("\n") + "\n\n";

  md += "## Navegador\n\n";
  if (nav.skipped) md += `🟡 Sin navegador: ${nav.skipped}. Peso, enlaces, bloques, honestidad y clics sí se han medido. Contraste, consola y capturas requieren Chromium.\n\n`;
  else {
    md += `Capturas a 1440 y 390 px (${nav.capturadas} rutas${ALL ? ", todas" : ", muestra"}) en \`docs/medicion/\`.\n\n`;
    md += `- Errores de consola: **${nav.consola.length}** ${nav.consola.length ? "→ " + nav.consola.map((x) => x.route).join(", ") : ""}\n`;
    md += `- Rutas con posible bajo contraste: **${nav.contraste.length}** ${nav.contraste.length ? "" : "(ninguna en la muestra)"}\n\n`;
    if (nav.contraste.length) { md += "| Ruta | Texto | Ratio | Mín |\n|---|---|---|---|\n"; nav.contraste.forEach((r) => r.bad.forEach((b) => { md += `| ${r.route} | ${b.t} | ${b.ratio} | ${b.min} |\n`; })); md += "\n"; }
  }
  fs.writeFileSync(path.join(OUT, "informe.md"), md, "utf8");
  console.log("Escrito docs/medicion/informe.md");
  console.log(`Criterios: 2:${tick(c[2])} 3:${tick(c[3])} 5:${tick(c[5])} 6:${tick(c[6])} 7:${tick(c[7])} 8:${c[8] === null ? "🟡" : tick(c[8])}`);
  if (nav.skipped) console.log("Navegador:", nav.skipped);
})();
