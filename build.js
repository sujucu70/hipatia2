#!/usr/bin/env node
/* Hipatia v3 · build.js
 * Generador estático sin dependencias. Lee data/*.json y escribe carpetas con index.html.
 * Cada página pinta su contenido sin JS; la cabecera y el pie son idénticos en todas.
 * Bloques y orden según §6.3 de docs/Auditoria_y_especificacion_Hipatia_v3.md.
 * Uso: node build.js
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DATA = path.join(ROOT, "data");
const PUB = path.join(ROOT, "public");
const read = (f) => JSON.parse(fs.readFileSync(path.join(DATA, f), "utf8"));
const PRACTICAS = ["process-intelligence", "software-development", "data-ai", "smart-operations", "ia-digital-change"];

function esc(v) {
  return String(v == null ? "" : v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function write(routeDir, html) {
  const dir = path.join(PUB, routeDir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
}

// ---------- Plantilla única ----------
function header(active) {
  const item = (href, key, label) =>
    `<a href="${href}"${active === key ? ' aria-current="page"' : ""}>${label}</a>`;
  return `<a class="visually-hidden" href="#main">Saltar al contenido</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="/"><img src="/assets/entelgy-logo-white.png" alt="Entelgy"><b>Hipatia</b></a>
    <button class="btn btn-ghost menu-toggle" data-menu-toggle aria-expanded="false" aria-label="Menú">Menú</button>
    <nav class="nav" aria-label="Principal">
      ${item("/", "inicio", "Inicio")}
      ${item("/entelgy/", "entelgy", "Entelgy")}
      ${item("/practicas/", "practicas", "Prácticas")}
      ${item("/materiales/", "materiales", "Materiales")}
      ${item("/contactos/", "contactos", "Contactos")}
    </nav>
    <div class="header-search">
      <form data-header-search data-materiales="/materiales/" role="search" aria-label="Buscar materiales">
        <input type="search" name="q" placeholder="Buscar materiales…" aria-label="Buscar materiales">
      </form>
    </div>
  </div>
</header>`;
}
function footer() {
  return `<footer class="site-footer">
  <div class="crm-band"><div class="wrap">El CRM sigue siendo el registro único. <b>Hipatia lo alimenta, no lo sustituye ni lo duplica.</b></div></div>
  <div class="footer-main"><div class="wrap">
    <div><img src="/assets/entelgy-logo-white.png" alt="Entelgy"><p class="footer-note" style="margin-top:var(--space-2)">Portal comercial interno · acceso Entelgy</p></div>
    <nav class="footer-note" aria-label="Pie"><a href="/practicas/">Prácticas</a> · <a href="/materiales/">Materiales</a> · <a href="/contactos/">Contactos</a> · <a href="/lo-que-viene/">Lo que viene</a></nav>
  </div></div>
</footer>`;
}
function page({ title, desc, active, body, modal }) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc || "")}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/styles.css">
</head>
<body>
${header(active)}
<main id="main">
${body}
</main>
${footer()}
${modal || ""}
<script src="/app.js" defer></script>
</body>
</html>
`;
}

// ---------- Helpers de estado (§6.5) ----------
const VIG = { vigente: "🟢 vigente", revisar: "🟠 revisar", pendiente: "⏳ pendiente" };
const USO = { si: "sale al cliente", no: "interno", con_validacion: "con validación" };
function chipVigencia(estado, fecha) {
  const label = (VIG[estado] || estado) + (fecha ? " · " + fecha : "");
  return `<span class="chip is-${esc(estado)}">${esc(label)}</span>`;
}
function chipUso(uso) {
  const map = { si: "is-cliente", no: "is-interno", con_validacion: "is-validacion" };
  return `<span class="chip ${map[uso] || ""}">${esc(USO[uso] || uso)}</span>`;
}
function pendingBox(p, defOwner) {
  if (!p) return "";
  const dueno = (p.dueno || defOwner || "por asignar");
  const fecha = p.fecha_objetivo || "sin fecha";
  return `<p class="pending"><b>En preparación.</b> ${esc(p.texto || "Contenido en preparación")} · dueño: ${esc(dueno)} · fecha objetivo: ${esc(fecha)}.</p>`;
}

// ---------- Materiales (índice por id) ----------
const materiales = read("materiales.json").materiales;
const MAT = {};
materiales.forEach((m) => (MAT[m.id] = m));

const MOMENTOS = [
  { key: "primer_contacto", label: "Primer contacto" },
  { key: "reunion", label: "En la reunión" },
  { key: "para_dejar", label: "Para dejar al cliente" }
];

function materialLink(m) {
  if (!m) return "";
  if (m.url_documento) return `<a class="btn" href="${esc(m.url_documento)}">Abrir el documento ↗</a>`;
  return `<span class="chip">enlace pendiente</span>`;
}
function materialMini(m) {
  if (!m) return "";
  return `<article class="card" style="padding:var(--space-4)">
    <p class="eyebrow">${esc(m.tipo)}</p>
    <h4 style="font-size:var(--font-size-lg);margin:var(--space-1) 0 var(--space-2)"><a style="text-decoration:none" href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a></h4>
    <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(m.nota_de_uso || "")}</p>
    <div class="chips" style="margin-top:var(--space-3)">${chipUso(m.sale_al_cliente)}${chipVigencia(m.estado, m.fecha_revision)}</div>
    <div style="margin-top:var(--space-3)">${materialLink(m)}</div>
  </article>`;
}

// =====================================================================
// PÁGINA DE SOLUCIÓN (§6.3, orden fijo)
// =====================================================================
function solucionPage(pr, s) {
  const esModern = s.id === "modernizacion";
  const prop = s.propuesta || {};
  // 1 · Cabecera
  let body = `<section class="section"><div class="wrap">
    <p class="eyebrow"><a href="/practicas/${esc(pr.id)}/" style="color:inherit">${esc(pr.nombre)}</a> · Solución</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0">${esc(s.nombre)}</h1>
    <p class="lede">${esc(s.una_linea)}</p>
    <p style="margin-top:var(--space-2);color:var(--color-text-secondary);font-size:var(--font-size-sm)">Especialista: <b>${esc(s.especialista)}</b>${s.estado === "en_preparacion" ? " · " + chipVigencia("pendiente", s.fecha_objetivo) : ""}</p>
  </div></section>`;

  // 2 · La propuesta (qué vendemos y por qué Entelgy)
  const filaProp = (k, v) => v ? `<div class="grid-2" style="gap:var(--space-3);padding:var(--space-3) 0;border-top:1px solid var(--color-border-subtle)"><b>${esc(k)}</b><div>${v}</div></div>` : "";
  let propHtml = "";
  propHtml += filaProp("Qué es", esc(prop.que_es));
  propHtml += filaProp("A quién / la señal", esc([prop.a_quien, prop.senal].filter(Boolean).join(" ")));
  propHtml += filaProp("Por qué Entelgy", esc(prop.por_que_nosotros));
  if (prop.diferenciador) propHtml += filaProp("El diferenciador", esc(prop.diferenciador));
  if (prop.objecion_principal) propHtml += filaProp("La objeción que más vas a oír", `<i>«${esc(prop.objecion_principal.texto)}»</i><br>${esc(prop.objecion_principal.respuesta)}`);
  if (prop.como_abres) propHtml += filaProp("Cómo abres", esc(prop.como_abres));
  const pp = prop.primer_paso;
  body += `<section class="section"><div class="wrap">
    <p class="eyebrow">Qué vendemos y por qué Entelgy</p>
    <h2 style="font-size:var(--font-size-2xl);margin:var(--space-2) 0 var(--space-4)">La propuesta</h2>
    <div>${propHtml}</div>
    ${pp && pp.titulo ? `<div class="card" style="margin-top:var(--space-5);background:var(--color-brand-navy);color:#fff;border:0">
        <p class="eyebrow" style="color:var(--color-orange-300)">El primer paso que se vende</p>
        <h3 style="color:#fff;font-size:var(--font-size-2xl);margin:var(--space-2) 0">${esc(pp.titulo)}${pp.plazo ? ` · ${esc(pp.plazo)}` : ""}</h3>
        <p style="color:var(--color-slate-200)">${esc(pp.nota || "")}</p>
      </div>` : ""}
  </div></section>`;

  // 3 · Material para el cliente (por momento)
  const mats = (s.materiales || []).map((id) => MAT[id]).filter((m) => m && m.sale_al_cliente !== "no");
  let cols = MOMENTOS.map((mo) => {
    const items = mats.filter((m) => m.momento_comercial === mo.key);
    const inner = items.length ? items.map(materialMini).join("") : `<p class="pending">Sin pieza para este momento todavía.</p>`;
    return `<div><p class="eyebrow" style="margin-bottom:var(--space-2)">${esc(mo.label)}</p>${inner}</div>`;
  }).join("");
  body += `<section class="section"><div class="wrap">
    <p class="eyebrow">Qué le doy al cliente</p>
    <h2 style="font-size:var(--font-size-2xl);margin:var(--space-2) 0 var(--space-4)">Material para el cliente</h2>
    <div class="grid grid-3">${cols}</div>
  </div></section>`;

  // 4 · Referencias
  const refs = (s.referencias || []).map((id) => MAT[id]).filter(Boolean);
  let refsHtml;
  if (refs.length) {
    refsHtml = `<div class="grid grid-2">` + refs.map((r) => `<article class="card">
        <h3 style="font-size:var(--font-size-xl)">${esc(r.titulo)}</h3>
        <p style="color:var(--color-text-secondary);font-size:var(--font-size-sm);margin:var(--space-2) 0">${esc(r.resultado || "")}</p>
        <p style="font-style:italic">«${esc(r.frase_reunion || "")}»</p>
        <div class="chips" style="margin-top:var(--space-3)">${r.citable === "citable" ? `<span class="chip is-citable">citable · sign-off ${esc(r.sign_off ? r.sign_off.fecha : "")}</span>` : `<span class="chip">confirmar por cuenta</span>`}</div>
      </article>`).join("") + `</div>
      <p class="footer-note" style="margin-top:var(--space-3);color:var(--color-text-secondary)">Elige la referencia por parecido de situación, no por notoriedad. Citable en presentación; el envío formal al cliente se autoriza por cuenta.</p>`;
  } else {
    refsHtml = `<p class="pending">Sin referencia autorizada para esta solución · pídesela a <b>${esc(s.especialista)}</b>.</p>`;
  }
  body += `<section class="section"><div class="wrap">
    <h2 style="font-size:var(--font-size-2xl);margin:0 0 var(--space-4)">Referencias</h2>
    ${refsHtml}
  </div></section>`;

  // 5 · Para prepararte (plegado)
  const kit = s.kit || {};
  let prep = "";
  if (kit.frases_cuenta && kit.frases_cuenta.frases) {
    prep += `<h4>Las frases para la cuenta</h4><p class="footer-note">${esc(kit.frases_cuenta.nota || "")}</p><ul>` +
      kit.frases_cuenta.frases.map((f) => `<li><b>${esc(f.angulo)}</b> <span class="footer-note">(${esc(f.cuando)})</span><br>«${esc(f.texto)}»</li>`).join("") +
      `</ul><p class="footer-note">${esc(kit.frases_cuenta.regla || "")}</p>`;
  }
  if (kit.pitch_por_rol && kit.pitch_por_rol.length) {
    prep += `<h4>El pitch, según quién tienes delante</h4>${kit.pitch_nota ? `<p class="footer-note">${esc(kit.pitch_nota)}</p>` : ""}<ul>` +
      kit.pitch_por_rol.map((r) => `<li><b>${esc(r.rol)}</b> — «${esc(r.pregunta)}» · le mueve: <i>${esc(r.le_mueve)}</i></li>`).join("") + `</ul>`;
  }
  if (kit.objeciones && kit.objeciones.length) {
    prep += `<h4>Objeciones</h4><ul>` + kit.objeciones.map((o) => `<li><b>«${esc(o.texto)}»</b><br>${esc(o.respuesta)}</li>`).join("") + `</ul>`;
  }
  if (kit.preguntas_cualificacion && kit.preguntas_cualificacion.length) {
    prep += `<h4>Preguntas de cualificación</h4><ul>` + kit.preguntas_cualificacion.map((q) => `<li>${esc(q)}</li>`).join("") + `</ul>`;
  }
  if (kit.material_interno && kit.material_interno.length) {
    const ints = kit.material_interno.map((id) => MAT[id]).filter(Boolean);
    if (ints.length) prep += `<h4>Material interno · no sale al cliente</h4><ul>` +
      ints.map((m) => `<li><a href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a> — ${esc(m.tipo)} ${chipUso(m.sale_al_cliente)}</li>`).join("") + `</ul>`;
  }
  if (!prep) prep = pendingBox(s.pendiente, s.dueno) || `<p class="pending">Material de preparación en preparación.</p>`;
  const dossierCta = (kit.dossier_imprimible)
    ? `<p style="margin-top:var(--space-4)"><button type="button" class="btn btn-cta" data-print>Preparar dossier de visita</button> <span class="footer-note">pitch del rol, objeciones, preguntas y referencias en una hoja para imprimir.</span></p>`
    : "";
  body += `<section class="section"><div class="wrap">
    <details class="fold"><summary>Para prepararte</summary><div class="fold-body">${prep}${dossierCta}</div></details>
  </div></section>`;

  // 6 · ¿Falta algo?
  const asunto = encodeURIComponent(`Hipatia · ${pr.nombre} · ${s.nombre}: falta algo`);
  body += `<section class="section"><div class="wrap">
    <h2 style="font-size:var(--font-size-xl);margin-bottom:var(--space-2)">¿Falta algo?</h2>
    <p>¿Echas en falta un material o una referencia para esta solución? <a class="text-link" href="mailto:?subject=${asunto}">Escríbele al responsable (${esc(s.especialista)})</a>. Nada se guarda.</p>
  </div></section>`;

  return page({
    title: `${s.nombre} · ${pr.nombre} · Hipatia`,
    desc: s.una_linea, active: "practicas", body
  });
}

// =====================================================================
// PÁGINA DE PRÁCTICA (§6.3)
// =====================================================================
function practicaPage(pr) {
  const idx = [
    ["que-cubre", "Qué cubre y qué no"],
    ["capacidades", "Capacidades"],
    ["soluciones", "Soluciones"],
    ["materiales", "Material para cliente"],
    ["responsable", "A quién llamar"]
  ];
  const aside = `<nav class="side-index" aria-label="En esta página">${idx.map(([a, l]) => `<a href="#${a}">${esc(l)}</a>`).join("")}</nav>`;

  let main = `<div>
    <p class="eyebrow">Práctica</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0">${esc(pr.nombre)}</h1>
    <p class="lede">${esc(pr.propuesta)}</p>
    <p style="margin-top:var(--space-2);color:var(--color-text-secondary);font-size:var(--font-size-sm)">Responsable: <b>${esc(pr.responsable)}</b></p>`;

  main += `<section class="section" id="que-cubre"><h2 style="font-size:var(--font-size-2xl)">Qué cubre y qué no</h2>
    <div class="grid grid-2" style="margin-top:var(--space-3)">
      <div class="card"><p class="eyebrow">Qué cubre</p><p style="margin-top:var(--space-2)">${esc(pr.que_cubre)}</p></div>
      <div class="card"><p class="eyebrow">Qué no prometemos</p><p style="margin-top:var(--space-2)">${esc(pr.que_no_prometer)}</p></div>
    </div>
    <p style="margin-top:var(--space-3)"><b>La pregunta que abre:</b> ${esc(pr.pregunta_comun)}</p></section>`;

  const caps = (pr.capacidades || []).map((c) => `<article class="card"><p class="eyebrow">${esc(c.paso)}</p><h3 style="font-size:var(--font-size-xl);margin:var(--space-1) 0 var(--space-2)">${esc(c.titulo)}</h3><p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(c.texto)}</p></article>`).join("");
  const pa = pr.primer_avance || {};
  main += `<section class="section" id="capacidades"><h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--space-4)">Capacidades</h2>
    <div class="grid grid-2">${caps}</div>
    ${pa.titulo ? `<p style="margin-top:var(--space-4)"><b>Primer avance:</b> ${esc(pa.titulo)}${pa.plazo ? " · " + esc(pa.plazo) : ""}. ${esc(pa.nota || "")}</p>` : ""}
    ${(pr.capacidades_ia || []).length ? `<div class="grid grid-3" style="margin-top:var(--space-4)">${pr.capacidades_ia.map((c) => `<article class="card"><h4 style="font-size:var(--font-size-lg)">${esc(c.titulo)}</h4><p style="font-size:var(--font-size-sm);color:var(--color-text-secondary);margin-top:var(--space-2)">${esc(c.texto)}</p></article>`).join("")}</div>` : ""}
    ${pr.capacidades_nota ? `<p class="footer-note" style="margin-top:var(--space-3);color:var(--color-text-secondary)">${esc(pr.capacidades_nota)}</p>` : ""}</section>`;

  const solCards = (pr.soluciones || []).map((s) => `<a class="card" style="text-decoration:none;display:block" href="/practicas/${esc(pr.id)}/${esc(s.id)}/">
      <h3 style="font-size:var(--font-size-xl)">${esc(s.nombre)}</h3>
      <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary);margin:var(--space-2) 0">${esc(s.una_linea)}</p>
      <div class="chips">${s.estado === "vigente" ? chipVigencia("vigente", null) : chipVigencia("pendiente", s.fecha_objetivo)}<span class="chip">${esc(s.especialista)}</span></div>
    </a>`).join("");
  main += `<section class="section" id="soluciones"><h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--space-4)">Soluciones</h2>
    <div class="grid grid-2">${solCards}</div>
    ${pr.solucion_global_nota ? `<p class="footer-note" style="margin-top:var(--space-3);color:var(--color-text-secondary)">${esc(pr.solucion_global_nota)}</p>` : ""}</section>`;

  const comun = (pr.material_comun || []).map((id) => MAT[id]).filter(Boolean);
  main += `<section class="section" id="materiales"><h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--space-4)">Material común para cliente</h2>
    <div class="grid grid-3">${comun.map(materialMini).join("")}</div>
    <p style="margin-top:var(--space-4)"><a class="btn" href="/materiales/?practica=${esc(pr.id)}">Ver todo en Materiales</a></p></section>`;

  const asunto = encodeURIComponent(`Hipatia · ${pr.nombre}: consulta`);
  main += `<section class="section" id="responsable"><h2 style="font-size:var(--font-size-2xl)">A quién llamar</h2>
    <p style="margin-top:var(--space-2)">Responsable de la práctica: <b>${esc(pr.responsable)}</b>. Especialista por solución en cada ficha. <a class="text-link" href="/contactos/">Ver contactos</a>.</p>
    <p style="margin-top:var(--space-3)"><a class="btn btn-cta" href="mailto:?subject=${asunto}">¿Falta algo? Escribe al responsable</a></p></section>`;

  main += `</div>`;
  const body = `<section class="section"><div class="wrap"><div class="with-aside">${aside}<div>${main}</div></div></div></section>`;
  return page({ title: `${pr.nombre} · Hipatia`, desc: pr.propuesta, active: "practicas", body });
}

// =====================================================================
// ÍNDICE DE PRÁCTICAS
// =====================================================================
function practicasIndex(practicas) {
  const cards = practicas.map((pr) => {
    const sols = (pr.soluciones || []).map((s) => `<a class="chip" style="text-decoration:none" href="/practicas/${esc(pr.id)}/${esc(s.id)}/">${esc(s.nombre)}</a>`).join(" ");
    return `<article class="card">
      <p class="eyebrow">${esc(pr.orden)} · ${esc(pr.responsable)}</p>
      <h2 style="font-size:var(--font-size-2xl);margin:var(--space-2) 0"><a style="text-decoration:none" href="/practicas/${esc(pr.id)}/">${esc(pr.nombre)}</a></h2>
      <p style="color:var(--color-text-secondary)">${esc(pr.propuesta)}</p>
      <div class="chips" style="margin-top:var(--space-3)">${sols}</div>
      <p style="margin-top:var(--space-3)"><a class="text-link" href="/practicas/${esc(pr.id)}/">Ver práctica →</a></p>
    </article>`;
  }).join("");
  const body = `<section class="section"><div class="wrap">
    <p class="eyebrow">Catálogo</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0 var(--space-4)">Prácticas</h1>
    <p class="lede" style="margin-bottom:var(--space-6)">Cinco prácticas, una misma forma de transformar. Entra por la que responde a la tensión que tiene delante el cliente.</p>
    <div class="grid grid-2">${cards}</div>
  </div></section>`;
  return page({ title: "Prácticas · Hipatia", desc: "Las cinco prácticas de Entelgy y sus soluciones.", active: "practicas", body });
}

// =====================================================================
// MATERIALES · índice con buscador y filtros + fichas + modal
// =====================================================================
const NOMBRE_PRACTICA = {
  "process-intelligence": "Process Intelligence", "software-development": "Software Development",
  "data-ai": "Data & AI", "smart-operations": "Smart Operations", "ia-digital-change": "IA + Digital Change"
};
function fichaBody(m) {
  const fila = (k, v) => v ? `<div class="grid-2" style="gap:var(--space-3);padding:var(--space-2) 0;border-top:1px solid var(--color-border-subtle)"><b>${esc(k)}</b><div>${v}</div></div>` : "";
  let meta = "";
  meta += fila("Tipo", esc(m.tipo));
  meta += fila("Práctica", esc(NOMBRE_PRACTICA[m.practica] || m.practica));
  meta += fila("Uso", chipUso(m.sale_al_cliente) + ` <span class="footer-note">${esc(m.confidencialidad || "")}</span>`);
  meta += fila("Estado", chipVigencia(m.estado, m.fecha_revision));
  meta += fila("Dueño", esc(m.dueno) + (m.mantenida_por ? ` <span class="footer-note">(${m.mantenida_por === "agente" ? "🤖 agente" : "✍️ SM"})</span>` : ""));
  if (m.citable && m.citable !== "no_aplica") meta += fila("Citabilidad", m.citable === "citable" ? `citable · sign-off ${esc(m.sign_off ? m.sign_off.quien + " · " + m.sign_off.fecha : "")}` : "confirmar por cuenta");
  if (m.sector && m.sector.length) meta += fila("Sector", esc(m.sector.join(" · ")));
  if (m.momento_comercial) meta += fila("Momento", esc({ primer_contacto: "Primer contacto", reunion: "En la reunión", para_dejar: "Para dejar al cliente" }[m.momento_comercial] || m.momento_comercial));
  let ref = "";
  if (m.tipo === "referencia") {
    ref = `<div style="margin-top:var(--space-4)">
      ${m.contexto ? `<p><b>Contexto.</b> ${esc(m.contexto)}</p>` : ""}
      ${m.que_hicimos ? `<p style="margin-top:var(--space-2)"><b>Qué hicimos.</b> ${esc(m.que_hicimos)}</p>` : ""}
      ${m.resultado ? `<p style="margin-top:var(--space-2)"><b>Resultado.</b> ${esc(m.resultado)}</p>` : ""}
      ${m.frase_reunion ? `<p style="margin-top:var(--space-2);font-style:italic">«${esc(m.frase_reunion)}»</p>` : ""}
      ${(m.cifras && m.cifras.length) ? `<div class="chips" style="margin-top:var(--space-2)">${m.cifras.map((c) => `<span class="chip ${c.verificada ? "is-vigente" : "is-revisar"}">${esc(c.valor)}${c.verificada ? "" : " · cifra en verificación"}</span>`).join("")}</div>` : ""}
    </div>`;
  }
  return `<p class="eyebrow">${esc(m.tipo)}</p>
    <h3 style="font-size:var(--font-size-2xl);margin:var(--space-1) 0 var(--space-3)">${esc(m.titulo)}</h3>
    <p style="color:var(--color-text-secondary)">${esc(m.nota_de_uso || "")}</p>
    ${ref}
    <div style="margin-top:var(--space-4)">${meta}</div>
    <p style="margin-top:var(--space-4)">${materialLink(m)}</p>`;
}
function materialFicha(m) {
  const body = `<section class="section"><div class="wrap" style="max-width:760px">
    <p class="eyebrow"><a href="/materiales/" style="color:inherit">Materiales</a></p>
    <div style="margin-top:var(--space-3)">${fichaBody(m)}</div>
  </div></section>`;
  return page({ title: `${m.titulo} · Materiales · Hipatia`, desc: m.nota_de_uso, active: "materiales", body });
}
function materialesIndex() {
  const practicasVals = [...new Set(materiales.map((m) => m.practica))];
  const tipos = [...new Set(materiales.map((m) => m.tipo))].sort();
  const estados = ["vigente", "revisar", "pendiente"];
  const usos = [["si", "Para cliente"], ["con_validacion", "Con validación"], ["no", "Interno"]];
  const group = (dim, title, opts, checkedVal) => `<div class="filter-group"><b>${esc(title)}</b>${opts.map(([v, l]) =>
    `<label><input type="checkbox" data-filter="${esc(dim)}" value="${esc(v)}"${v === checkedVal ? " checked" : ""}> ${esc(l)}</label>`).join("")}</div>`;
  const filters = `<form class="filters" aria-label="Filtros">
    ${group("uso", "Uso", usos, "si")}
    ${group("practica", "Práctica", practicasVals.map((p) => [p, NOMBRE_PRACTICA[p] || p]))}
    ${group("tipo", "Tipo", tipos.map((t) => [t, t[0].toUpperCase() + t.slice(1)]))}
    ${group("estado", "Estado", estados.map((e) => [e, VIG[e]]))}
  </form>`;

  const cards = materiales.map((m) => `<article class="card" data-material
      data-practica="${esc(m.practica)}" data-uso="${esc(m.sale_al_cliente)}" data-tipo="${esc(m.tipo)}" data-estado="${esc(m.estado)}"
      data-search="${esc([m.titulo, m.tipo, m.nota_de_uso, (m.sector || []).join(" "), NOMBRE_PRACTICA[m.practica]].join(" "))}"
      style="padding:var(--space-4)">
      <p class="eyebrow">${esc(m.tipo)} · ${esc(NOMBRE_PRACTICA[m.practica] || m.practica)}</p>
      <h3 style="font-size:var(--font-size-lg);margin:var(--space-1) 0 var(--space-2)"><a style="text-decoration:none" href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a></h3>
      <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(m.nota_de_uso || "")}</p>
      <div class="chips" style="margin-top:var(--space-3)">${chipUso(m.sale_al_cliente)}${chipVigencia(m.estado, m.fecha_revision)}<span class="chip">${esc(m.dueno)}</span></div>
      <div style="margin-top:var(--space-3);display:flex;gap:var(--space-2);flex-wrap:wrap">
        <button type="button" class="btn btn-ghost" data-open-modal="tpl-${esc(m.id)}" data-modal-label="${esc(m.titulo)}">Ver ficha</button>
        ${materialLink(m)}
      </div>
    </article>`).join("");

  const templates = materiales.map((m) => `<div class="mat-tpl" id="tpl-${esc(m.id)}" hidden>${fichaBody(m)}</div>`).join("\n");

  const body = `<section class="section"><div class="wrap">
    <p class="eyebrow">Catálogo</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0 var(--space-4)">Materiales</h1>
    <p class="lede">Todo el material comercial, con su uso, estado y dueño a la vista. «Para cliente» viene marcado por defecto.</p>
    <div style="margin-top:var(--space-5)"><input type="search" data-materials-search placeholder="Buscar materiales…" aria-label="Buscar materiales" style="width:100%;max-width:520px;font:inherit;padding:var(--space-3);border:1px solid var(--color-border-default);border-radius:var(--radius-md)"></div>
    <div class="with-aside" style="margin-top:var(--space-5)">
      <div>${filters}</div>
      <div>
        <p class="footer-note" style="margin-bottom:var(--space-3)"><b data-materials-count>0</b> materiales</p>
        <div class="grid grid-2" data-materials-list>${cards}</div>
      </div>
    </div>
  </div></section>
  <div style="display:none">${templates}</div>`;

  const modal = `<div class="modal" data-modal hidden role="dialog" aria-modal="true">
    <div class="modal-panel"><button type="button" class="btn btn-ghost modal-close" data-modal-close aria-label="Cerrar">Cerrar ✕</button><div data-modal-body></div></div>
  </div>`;
  return page({ title: "Materiales · Hipatia", desc: "Buscador y filtros del material comercial de Entelgy.", active: "materiales", body, modal });
}

// =====================================================================
// BUILD
// =====================================================================
function build() {
  const practicas = PRACTICAS.map((id) => read(id + ".json"));
  write("practicas", practicasIndex(practicas));
  let nSol = 0;
  practicas.forEach((pr) => {
    write(path.join("practicas", pr.id), practicaPage(pr));
    (pr.soluciones || []).forEach((s) => {
      write(path.join("practicas", pr.id, s.id), solucionPage(pr, s));
      nSol++;
    });
  });
  write("materiales", materialesIndex());
  materiales.forEach((m) => write(path.join("materiales", m.id), materialFicha(m)));
  console.log(`Generadas: /practicas + ${practicas.length} prácticas + ${nSol} soluciones + /materiales + ${materiales.length} fichas`);
}
build();
