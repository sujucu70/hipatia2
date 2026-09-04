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
const PRACTICAS = ["process-intelligence", "software-development", "data-intelligence", "smart-operations", "digital-change"];

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
  <div class="crm-band"><div class="wrap">Hipatia alimenta al CRM, que sigue siendo el registro único.</div></div>
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
<link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/fonts/barlow-condensed-700.woff2">
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
const VIG = { vigente: "vigente", revisar: "revisar", pendiente: "pendiente" };
const USO = { si: "sale al cliente", no: "interno", con_validacion: "con validación" };
function chipEstado(estado, fecha) {
  const label = (VIG[estado] || estado) + (fecha ? " · " + fecha : "");
  return `<span class="chip is-${esc(estado)}">${esc(label)}</span>`;
}
// E8 · el chip solo pinta la excepción: «vigente» es el caso normal y no lleva chip.
function chipVigencia(estado, fecha) {
  return estado === "vigente" ? "" : chipEstado(estado, fecha);
}
// E8 · «sale al cliente» es el caso normal y no lleva chip.
function chipUso(uso) {
  if (uso === "si") return "";
  return chipUsoSiempre(uso);
}
// Siempre pinta (fila «Uso» de la ficha de pieza, donde el dato completo sí importa).
function chipUsoSiempre(uso) {
  const map = { si: "is-cliente", no: "is-interno", con_validacion: "is-validacion" };
  return `<span class="chip ${map[uso] || ""}">${esc(USO[uso] || uso)}</span>`;
}
// Fecha corta para pantalla: "2026-07-16" → "jul 2026". Passthrough si ya es corta.
const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
function fechaCorta(f) {
  if (!f) return "";
  const m = /^(\d{4})-(\d{2})-\d{2}$/.exec(f);
  return m ? `${MESES[parseInt(m[2], 10) - 1]} ${m[1]}` : f;
}
// Chip de citabilidad (referencias): «citable · sign-off jul 2026» o «confirmar por cuenta».
function chipCitable(m) {
  if (m.citable === "citable" && m.sign_off) return `<span class="chip is-citable">citable · sign-off ${esc(fechaCorta(m.sign_off.fecha))}</span>`;
  return `<span class="chip">confirmar por cuenta</span>`;
}
const LEYENDA_CITA = "Citable en presentación · el envío formal al cliente se autoriza por cuenta.";
function pendingBox(p, defOwner) {
  if (!p) return "";
  const dueno = nombreCompleto(p.dueno || defOwner || "por asignar");
  const fecha = p.fecha_objetivo || "sin fecha";
  return `<p class="pending"><b>En preparación.</b> ${esc(p.texto || "Contenido en preparación")} · dueño: ${esc(dueno)} · fecha objetivo: ${esc(fecha)}.</p>`;
}

// ---------- Materiales (índice por id) ----------
const materiales = read("materiales.json").materiales;
const MAT = {};
materiales.forEach((m) => (MAT[m.id] = m));

// ---------- Nombre completo (revisión 14 · AS) ----------
// personas.json es la única fuente de nombres; los JSON de datos siguen con el nombre de pila.
// El build resuelve el completo: mapa nombre de pila → nombre (primera entrada de cada persona).
const NOMBRE_MAP = (() => {
  const map = {};
  (read("personas.json").personas || []).forEach((p) => {
    if (p.nombre) { const first = p.nombre.split(" ")[0]; if (!map[first]) map[first] = p.nombre; }
  });
  return map;
})();
function nombreCompleto(texto) {
  if (texto == null) return texto;
  let out = String(texto);
  Object.keys(NOMBRE_MAP).forEach((first) => {
    // sustituye el nombre de pila como palabra entera, salvo si ya lleva apellido detrás
    const re = new RegExp("\\b" + first + "\\b(?!\\s+[A-ZÁÉÍÓÚÑ])", "g");
    out = out.replace(re, NOMBRE_MAP[first]);
  });
  return out;
}

const MOMENTOS = [
  { key: "primer_contacto", label: "Primer contacto" },
  { key: "reunion", label: "En la reunión" },
  { key: "para_dejar", label: "Para dejar al cliente" }
];

// Vocabulario cerrado de tipos (revisión 14 · N1). El filtro de Materiales usa este orden fijo.
const TIPOS_FILTRO = ["Deck", "One-pager", "Ficha", "Referencia", "Guía de discovery", "Guía interna", "Plantilla", "Herramienta", "Archivo"];
// El eyebrow pinta el tipo y, si hay, el subtipo (texto libre que se busca pero no filtra).
function eyebrowTipo(m) { return m.subtipo ? `${m.tipo} · ${m.subtipo}` : m.tipo; }
// E4 · cabecera de sección a dos columnas (eyebrow + H2 a la izquierda, contexto a la derecha).
function sectionHead(eyebrow, h2, nota) {
  return `<div class="section-head"><div>${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}<h2>${esc(h2)}</h2></div>${nota ? `<p>${esc(nota)}</p>` : ""}</div>`;
}

function materialLink(m) {
  if (!m) return "";
  if (m.url_documento) return `<a class="btn" href="${esc(m.url_documento)}">Abrir el documento ↗</a>`;
  // una referencia sin documento es autocontenida (su texto citable es el entregable), no un enlace por llegar
  if (m.tipo === "Referencia") return `<span class="chip">sin documento aparte</span>`;
  return `<span class="chip">enlace pendiente</span>`;
}
function materialMini(m) {
  if (!m) return "";
  const esRef = m.tipo === "Referencia";
  const chipPrincipal = esRef ? chipCitable(m) : chipUso(m.sale_al_cliente);
  const nota = esRef && m.citable === "citable" ? LEYENDA_CITA : (m.nota_de_uso || "");
  return `<article class="card" style="padding:var(--space-4)">
    <p class="eyebrow">${esc(m.tipo)}</p>
    <h4 style="font-size:var(--font-size-lg);margin:var(--space-1) 0 var(--space-2)"><a style="text-decoration:none" href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a></h4>
    <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(nota)}</p>
    <div class="chips" style="margin-top:var(--space-3)">${chipPrincipal}${chipVigencia(m.estado, m.fecha_revision)}</div>
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
    <h1 style="font-size:var(--font-size-5xl);line-height:1.02;letter-spacing:-.02em;margin:var(--space-2) 0">${esc(s.nombre)}</h1>
    <p class="lede">${esc(s.una_linea)}</p>
    <p style="margin-top:var(--space-2);color:var(--color-text-secondary);font-size:var(--font-size-sm)">Especialista: <b>${esc(nombreCompleto(s.especialista))}</b>${s.estado === "en_preparacion" ? " · " + chipVigencia("pendiente", s.fecha_objetivo) : ""}</p>
  </div></section>`;

  // 2 · La propuesta (qué vendemos y por qué Entelgy)
  const filaProp = (k, v) => v ? `<div class="grid-2" style="gap:var(--space-3);padding:var(--space-3) 0;border-top:1px solid var(--color-border-subtle)"><b>${esc(k)}</b><div>${v}</div></div>` : "";
  let propHtml = "";
  propHtml += filaProp("Qué es", esc(prop.que_es));
  propHtml += filaProp("A quién / la señal", esc([prop.a_quien, prop.senal].filter(Boolean).join(" ")));
  propHtml += prop.por_que_nosotros
    ? filaProp("Por qué Entelgy", esc(prop.por_que_nosotros))
    : (s.estado === "en_preparacion"
        ? filaProp("Por qué Entelgy", `<p class="pending" style="margin:0">En preparación · dueño: ${esc(nombreCompleto(s.dueno || "por asignar"))} · fecha objetivo: ${esc(s.fecha_objetivo || "sin fecha")}</p>`)
        : "");
  if (prop.diferenciador) propHtml += filaProp("El diferenciador", esc(prop.diferenciador));
  if (prop.objecion_principal) propHtml += filaProp("La objeción que más vas a oír", `<i>«${esc(prop.objecion_principal.texto)}»</i><br>${esc(prop.objecion_principal.respuesta)}`);
  if (prop.como_abres) propHtml += filaProp("Cómo abres", esc(prop.como_abres));
  const pp = prop.primer_paso;
  body += `<section class="section"><div class="wrap">
    <p class="eyebrow">Qué vendemos y por qué Entelgy</p>
    <h2 style="font-size:var(--font-size-2xl);margin:var(--space-2) 0 var(--space-4)">La propuesta</h2>
    <div>${propHtml}</div>
    ${pp && pp.titulo ? `<div class="card-featured" style="margin-top:var(--space-5)">
        <p class="eyebrow" style="color:var(--color-orange-300)">El primer paso que se vende</p>
        <h3 style="color:#fff;font-size:var(--font-size-2xl);margin:var(--space-2) 0">${esc(pp.titulo)}${pp.plazo ? ` · ${esc(pp.plazo)}` : ""}</h3>
        <p style="color:var(--color-slate-200)">${esc(pp.nota || "")}</p>
      </div>` : ""}
  </div></section>`;

  // 2 bis · Capacidades (solo en la solución única, p. ej. Data Intelligence · §revisión 5)
  if (s.es_solucion_unica && (pr.capacidades || []).length) {
    const caps = pr.capacidades.map((c) => `<article class="card"><p class="eyebrow">${esc(c.paso)}</p><h3 style="font-size:var(--font-size-xl);margin:var(--space-1) 0 var(--space-2)">${esc(c.titulo)}</h3><p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(c.texto)}</p></article>`).join("");
    body += `<section class="section"><div class="wrap">
      <p class="eyebrow">Lo que hacemos</p>
      <h2 style="font-size:var(--font-size-2xl);margin:var(--space-2) 0 var(--space-4)">Capacidades</h2>
      <div class="grid grid-2">${caps}</div>
    </div></section>`;
  }

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
        <div class="chips" style="margin-top:var(--space-3)">${chipCitable(r)}</div>
      </article>`).join("") + `</div>
      <p class="footer-note" style="margin-top:var(--space-3);color:var(--color-text-secondary)">Citable en presentación. El envío formal de la referencia al cliente se autoriza por cuenta.</p>`;
  } else {
    refsHtml = `<p class="pending">Sin referencia autorizada para esta solución · pídesela a <b>${esc(nombreCompleto(s.especialista))}</b>.</p>`;
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
  if (s.keynotes && s.keynotes.length) {
    prep += `<h4>Mensajes clave por dolor</h4><ul>` +
      s.keynotes.map((k) => `<li><b>${esc(k.dolor)}</b><br>${esc(k.frase)}<br><span class="footer-note">Prueba: ${esc(k.prueba)} · Siguiente paso: ${esc(k.paso)}</span></li>`).join("") + `</ul>`;
  }
  if (kit.material_interno && kit.material_interno.length) {
    const ints = kit.material_interno.map((id) => MAT[id]).filter(Boolean);
    if (ints.length) prep += `<h4>Material interno · no sale al cliente</h4><ul>` +
      ints.map((m) => `<li><a href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a> — ${esc(m.tipo)} ${chipUso(m.sale_al_cliente)}</li>`).join("") + `</ul>`;
  }
  if (kit.material_interno_nota) prep += `<p class="footer-note">${esc(kit.material_interno_nota)}</p>`;
  if (s.estado === "vigente" && s.pendiente && s.pendiente.texto) {
    prep += `<p class="pending"><b>En revisión por el área.</b> ${esc(s.pendiente.texto)} · dueño: ${esc(nombreCompleto(s.pendiente.dueno || s.dueno || "por asignar"))} · fecha objetivo: ${esc(s.pendiente.fecha_objetivo || s.fecha_objetivo || "sin fecha")}.</p>`;
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
    <p>¿Echas en falta un material o una referencia para esta solución? <a class="text-link" href="mailto:?subject=${asunto}">Escríbele al responsable (${esc(nombreCompleto(s.especialista))})</a>. Nada se guarda.</p>
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

  // Hero navy de práctica
  const hero = `<section class="section hero" style="padding:56px 0"><div class="wrap">
    <p class="eyebrow">Práctica</p>
    <h1 style="font-size:60px;line-height:1;letter-spacing:-.02em;margin:14px 0 16px">${esc(pr.nombre)}</h1>
    <p class="lede">${esc(pr.propuesta_portada || pr.propuesta)}</p>
    <p style="margin-top:var(--space-3);color:var(--color-slate-300);font-size:var(--font-size-sm)">Responsable: <b style="color:#fff">${esc(nombreCompleto(pr.responsable))}</b> · <a class="text-link" href="#materiales" style="color:var(--color-purple-300)">Material para cliente ↓</a></p>
  </div></section>`;

  let main = `<div>`;
  main += `<section class="section" id="que-cubre"><h2 style="font-size:var(--font-size-2xl)">Qué cubre y qué no</h2>
    <div class="grid grid-3" style="margin-top:var(--space-3)">
      <div class="card"><p class="eyebrow">Qué cubre</p><p style="margin-top:var(--space-2);font-size:var(--font-size-sm)">${esc(pr.que_cubre)}</p></div>
      <div class="card"><p class="eyebrow">Qué no prometemos</p><p style="margin-top:var(--space-2);font-size:var(--font-size-sm)">${esc(pr.que_no_prometer)}</p></div>
      <div class="card"><p class="eyebrow">La pregunta que abre</p><p style="margin-top:var(--space-2)">${esc(pr.pregunta_comun)}</p></div>
    </div></section>`;

  const caps = (pr.capacidades || []).map((c) => `<article class="card card-num" data-num="${esc(c.paso)}"><h3 style="font-size:var(--font-size-xl);margin:var(--space-1) 0 var(--space-2)">${esc(c.titulo)}</h3><p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(c.texto)}</p></article>`).join("");
  const pa = pr.primer_avance || {};
  main += `<section class="section" id="capacidades"><h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--space-4)">Capacidades</h2>
    <div class="grid grid-auto">${caps}</div>
    ${pa.titulo ? `<p style="margin-top:var(--space-4)"><b>Primer avance:</b> ${esc(pa.titulo)}${pa.plazo ? " · " + esc(pa.plazo) : ""}. ${esc(pa.nota || "")}</p>` : ""}
    ${pr.capacidades_nota ? `<p class="footer-note" style="margin-top:var(--space-3);color:var(--color-text-secondary)">${esc(pr.capacidades_nota)}</p>` : ""}
    ${(pr.discovery && pr.discovery.length) ? `<details class="fold" style="margin-top:var(--space-4)"><summary>Tres preguntas para abrir</summary><div class="fold-body"><p class="footer-note">Señales para escuchar, no un guion.</p><ul>${pr.discovery.map((q) => `<li>${esc(q)}</li>`).join("")}</ul></div></details>` : ""}</section>`;

  const solCards = (pr.soluciones || []).map((s) => `<a class="card" style="text-decoration:none;display:block" href="/practicas/${esc(pr.id)}/${esc(s.id)}/">
      <h3 style="font-size:var(--font-size-xl)">${esc(s.nombre)}</h3>
      <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary);margin:var(--space-2) 0">${esc(s.una_linea)}</p>
      <div class="chips">${s.estado === "vigente" ? "" : chipVigencia("pendiente", s.fecha_objetivo)}<span class="chip">${esc(nombreCompleto(s.especialista))}</span></div>
    </a>`).join("");
  main += `<section class="section" id="soluciones"><h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--space-4)">Soluciones</h2>
    <div class="grid grid-2">${solCards}</div></section>`;

  const comun = (pr.material_comun || []).map((id) => MAT[id]).filter((m) => m && m.sale_al_cliente !== "no");
  const cols = MOMENTOS.map((mo) => {
    const items = comun.filter((m) => m.momento_comercial === mo.key);
    const inner = items.length ? items.map(materialMini).join("") : `<p class="pending">Sin pieza para este momento todavía.</p>`;
    return `<div><p class="eyebrow" style="margin-bottom:var(--space-2)">${esc(mo.label)}</p>${inner}</div>`;
  }).join("");
  main += `<section class="section" id="materiales"><h2 style="font-size:var(--font-size-2xl);margin-bottom:var(--space-4)">Material común para cliente</h2>
    <div class="grid grid-3">${cols}</div>
    <p style="margin-top:var(--space-4)"><a class="btn" href="/materiales/?practica=${esc(pr.id)}">Ver todo en Materiales</a></p></section>`;

  const asunto = encodeURIComponent(`Hipatia · ${pr.nombre}: consulta`);
  main += `<section class="section" id="responsable"><h2 style="font-size:var(--font-size-2xl)">A quién llamar</h2>
    <p style="margin-top:var(--space-2)">Responsable de la práctica: <b>${esc(nombreCompleto(pr.responsable))}</b>. Cada solución lleva su especialista. <a class="text-link" href="/contactos/">Ver contactos</a>.</p>
    <p style="margin-top:var(--space-3)"><a class="btn btn-cta" href="mailto:?subject=${asunto}">¿Falta algo? Escribe al responsable</a></p></section>`;

  main += `</div>`;
  const body = hero + `<section class="section"><div class="wrap"><div class="with-aside">${aside}<div>${main}</div></div></div></section>`;
  return page({ title: `${pr.nombre} · Hipatia`, desc: pr.propuesta_portada || pr.propuesta, active: "practicas", body });
}

// =====================================================================
// ÍNDICE DE PRÁCTICAS
// =====================================================================
function practicasIndex(practicas) {
  const cards = practicas.map((pr) => {
    const sols = (pr.soluciones || []).map((s) => `<a class="chip" style="text-decoration:none" href="/practicas/${esc(pr.id)}/${esc(s.id)}/">${esc(s.nombre)}</a>`).join(" ");
    return `<article class="card">
      <p class="eyebrow">${esc(pr.orden)} · ${esc(nombreCompleto(pr.responsable))}</p>
      <h2 style="font-size:var(--font-size-2xl);margin:var(--space-2) 0"><a style="text-decoration:none" href="/practicas/${esc(pr.id)}/">${esc(pr.nombre)}</a></h2>
      <p style="color:var(--color-text-secondary)">${esc(pr.propuesta_portada || pr.propuesta)}</p>
      <div class="chips" style="margin-top:var(--space-3)">${sols}</div>
      <p style="margin-top:var(--space-3)"><a class="text-link" href="/practicas/${esc(pr.id)}/">Ver práctica →</a></p>
    </article>`;
  }).join("");
  const body = `<section class="section"><div class="wrap">
    <p class="eyebrow">Catálogo</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0 var(--space-4)">Prácticas</h1>
    <p class="lede" style="margin-bottom:var(--space-6)">Cinco prácticas, un mismo método. Entra por la que responde al problema que tiene delante tu cliente.</p>
    <div class="grid grid-2">${cards}</div>
  </div></section>`;
  return page({ title: "Prácticas · Hipatia", desc: "Las cinco prácticas de Entelgy y sus soluciones.", active: "practicas", body });
}

// =====================================================================
// MATERIALES · índice con buscador y filtros + fichas + modal
// =====================================================================
const NOMBRE_PRACTICA = {
  "process-intelligence": "Process Intelligence", "software-development": "Software Development",
  "data-intelligence": "Data Intelligence", "smart-operations": "Smart Operations", "digital-change": "Digital Change",
  "corporativo": "Corporativo"
};
function fichaBody(m) {
  const fila = (k, v) => v ? `<div class="grid-2" style="gap:var(--space-3);padding:var(--space-2) 0;border-top:1px solid var(--color-border-subtle)"><b>${esc(k)}</b><div>${v}</div></div>` : "";
  const esRef = m.tipo === "Referencia";
  let meta = "";
  meta += fila("Tipo", esc(eyebrowTipo(m)));
  meta += fila("Práctica", esc(NOMBRE_PRACTICA[m.practica] || m.practica));
  if (esRef) {
    // La referencia encabeza por su citabilidad (con sign-off), no por «con validación».
    meta += fila("Citabilidad", chipCitable(m) + (m.citable === "citable" && m.sign_off ? ` <span class="footer-note">${esc(m.sign_off.quien)} · ${esc(fechaCorta(m.sign_off.fecha))}</span>` : ""));
    meta += fila("Envío al cliente", `<span class="footer-note">${esc(LEYENDA_CITA)}</span>`);
  } else {
    meta += fila("Uso", chipUsoSiempre(m.sale_al_cliente) + ` <span class="footer-note">${esc(m.confidencialidad || "")}</span>`);
  }
  meta += fila("Vigencia", chipEstado(m.estado, m.fecha_revision));
  meta += fila("Dueño", esc(nombreCompleto(m.dueno)) + (m.mantenida_por ? ` <span class="footer-note">(${m.mantenida_por === "agente" ? "🤖 agente" : "✍️ SM"})</span>` : ""));
  if (m.sector && m.sector.length) meta += fila("Sector", esc(m.sector.join(" · ")));
  if (m.momento_comercial) meta += fila("Momento", esc({ primer_contacto: "Primer contacto", reunion: "En la reunión", para_dejar: "Para dejar al cliente" }[m.momento_comercial] || m.momento_comercial));
  let ref = "";
  if (m.tipo === "Referencia") {
    ref = `<div style="margin-top:var(--space-4)">
      ${m.contexto ? `<p><b>Contexto.</b> ${esc(m.contexto)}</p>` : ""}
      ${m.que_hicimos ? `<p style="margin-top:var(--space-2)"><b>Qué hicimos.</b> ${esc(m.que_hicimos)}</p>` : ""}
      ${m.resultado ? `<p style="margin-top:var(--space-2)"><b>Resultado.</b> ${esc(m.resultado)}</p>` : ""}
      ${m.frase_reunion ? `<p style="margin-top:var(--space-2);font-style:italic">«${esc(m.frase_reunion)}»</p>` : ""}
      ${(m.cifras && m.cifras.length) ? `<div class="chips" style="margin-top:var(--space-2)">${m.cifras.map((c) => `<span class="chip ${c.verificada ? "is-vigente" : "is-revisar"}">${esc(c.valor)}${c.verificada ? "" : " · cifra en verificación"}</span>`).join("")}</div>` : ""}
    </div>`;
  }
  return `<p class="eyebrow">${esc(eyebrowTipo(m))}</p>
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
function materialesIndex(scope) {
  const todo = scope === "todo";
  const items = todo ? materiales : materiales.filter((m) => m.sale_al_cliente !== "no" && m.tipo !== "Archivo");
  const practicasVals = [...new Set(materiales.map((m) => m.practica))];
  const estados = ["vigente", "revisar", "pendiente"];
  const usos = todo
    ? [["si", "Para cliente"], ["con_validacion", "Con validación"], ["no", "Interno"]]
    : [["si", "Para cliente"], ["con_validacion", "Con validación"]];
  const group = (dim, title, opts, checkedVal) => `<div class="filter-group"><b>${esc(title)}</b>${opts.map(([v, l]) =>
    `<label><input type="checkbox" data-filter="${esc(dim)}" value="${esc(v)}"${v === checkedVal ? " checked" : ""}> ${esc(l)}</label>`).join("")}</div>`;
  // El «Uso» del índice de cliente lleva «Interno» como enlace al índice completo, no como casilla.
  const usoGroup = `<div class="filter-group"><b>Uso</b>${usos.map(([v, l]) =>
    `<label><input type="checkbox" data-filter="uso" value="${esc(v)}"${(!todo && v === "si") ? " checked" : ""}> ${esc(l)}</label>`).join("")}` +
    (todo ? `<a class="text-link" href="/materiales/">Solo lo que sale al cliente →</a>` : `<a class="text-link" href="/materiales/todo/">Interno →</a>`) + `</div>`;
  const filters = `<form class="filters" aria-label="Filtros">
    ${usoGroup}
    ${group("practica", "Práctica", practicasVals.map((p) => [p, NOMBRE_PRACTICA[p] || p]))}
    ${group("tipo", "Tipo", TIPOS_FILTRO.map((t) => [t, t]))}
    ${group("estado", "Estado", estados.map((e) => [e, VIG[e]]))}
  </form>`;

  const cards = items.map(materialCard).join("");

  const lede = todo
    ? "Todo lo que hay, interno incluido. Lo que sale al cliente lleva su chip; lo demás es para prepararte."
    : "El material que puedes enseñar o dejar al cliente, con su uso, estado y dueño a la vista. Las piezas internas están en Materiales · todo.";
  const h1 = todo ? "Materiales · todo" : "Materiales";
  const body = `<section class="section"><div class="wrap">
    <p class="eyebrow">Catálogo</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0 var(--space-4)">${esc(h1)}</h1>
    <p class="lede">${esc(lede)}</p>
    <div style="margin-top:var(--space-5)"><input type="search" data-materials-search placeholder="Buscar materiales…" aria-label="Buscar materiales" style="width:100%;max-width:520px;font:inherit;padding:var(--space-3);border:1px solid var(--color-border-default);border-radius:var(--radius-md)"></div>
    <div class="with-aside" style="margin-top:var(--space-5)">
      <div class="filters-panel">${filters}</div>
      <div>
        <p class="footer-note" style="margin-bottom:var(--space-3)"><b data-materials-count>0</b> piezas visibles</p>
        <div class="grid grid-2" data-materials-list>${cards}</div>
      </div>
    </div>
  </div></section>
  `;

  const modal = `<div class="modal" data-modal hidden role="dialog" aria-modal="true">
    <div class="modal-panel"><button type="button" class="btn btn-ghost modal-close" data-modal-close aria-label="Cerrar">Cerrar ✕</button><div data-modal-body></div></div>
  </div>`;
  return page({ title: todo ? "Materiales · todo · Hipatia" : "Materiales · Hipatia", desc: "Buscador y filtros del material comercial de Entelgy.", active: "materiales", body, modal });
}
function materialCard(m) {
  const ds = esc([(m.sector || []).join(" "), m.subtipo || ""].filter(Boolean).join(" "));
  return `<article class="card lib" data-material data-practica="${esc(m.practica)}" data-uso="${esc(m.sale_al_cliente)}" data-tipo="${esc(m.tipo)}" data-estado="${esc(m.estado)}"${ds ? ` data-search="${ds}"` : ""}>
      <p class="eyebrow">${m.practica === "corporativo" ? esc(eyebrowTipo(m)) : esc(eyebrowTipo(m)) + " · " + esc(NOMBRE_PRACTICA[m.practica] || m.practica)}</p>
      <h3 style="font-size:var(--font-size-2xl);line-height:1.08;margin:var(--space-1) 0 var(--space-2)"><a style="text-decoration:none" href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a></h3>
      <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(m.nota_de_uso || "")}</p>
      <div class="ed-mat-foot"><div class="chips">${m.tipo === "Referencia" ? chipCitable(m) : chipUso(m.sale_al_cliente)}${chipVigencia(m.estado, m.fecha_revision)}<span class="chip">${esc(nombreCompleto(m.dueno))}</span></div><a class="ver-ficha" href="/materiales/${esc(m.id)}/">Ver ficha →</a></div>
    </article>`;
}

// =====================================================================
// PORTADA (§6.3 · una pantalla)
// =====================================================================
function portadaPage(corp, practicas) {
  // Hero editorial (frase de MA a 68 px, subtitular y único CTA)
  const band = `<section class="section hero" style="padding:76px 0 68px"><div class="wrap hero-grid">
    <div>
      <p class="eyebrow">Entelgy en una frase</p>
      <h1 class="hero-h1">${esc(corp.portada.titular || corp.entelgy_una_frase)}</h1>
      <p class="lede">${esc(corp.portada.subtitular || "")}</p>
    </div>
    <a class="btn btn-cta hero-cta" href="/entelgy/">Cómo presentar Entelgy →</a>
  </div></section>`;

  // La oferta · tira de prácticas sobre banda navy (cajas de solución que envuelven el texto)
  const cols = practicas.map((pr) => {
    const solUnica = (pr.soluciones || []).length === 1 && pr.soluciones[0].es_solucion_unica;
    const dest = solUnica ? `/practicas/${esc(pr.id)}/${esc(pr.soluciones[0].id)}/` : `/practicas/${esc(pr.id)}/`;
    const boxes = solUnica
      ? `<div class="sol-boxes"><a class="sol-box" href="${dest}">Data Intelligence · una sola solución</a></div>`
      : `<div class="sol-boxes">${(pr.soluciones || []).map((s) => `<a class="sol-box" href="/practicas/${esc(pr.id)}/${esc(s.id)}/">${esc(s.nombre)}</a>`).join("")}</div>`;
    return `<article class="sol-nav"><p class="num">${esc(pr.orden)}</p>
      <h3>${esc(pr.nombre)}</h3>
      <p>${esc(pr.propuesta_portada || pr.propuesta)}</p>
      ${boxes}
      <div class="sol-nav-foot"><span class="footer-note">${esc(nombreCompleto(pr.responsable))}</span><a class="text-link" href="${dest}">${solUnica ? "Ver la solución →" : "Ver práctica →"}</a></div>
    </article>`;
  }).join("");
  const oferta = `<div class="wrap"><section class="section">${sectionHead("La oferta", "Cinco prácticas. Entra por la que necesite tu cliente.", "Entra en la práctica o directamente en una de sus soluciones.")}</section></div>
    <section class="band band-navy" style="padding:40px 0 44px"><div class="wrap"><div class="grid grid-5 tira">${cols}</div></div></section>`;

  // Regla de portada (§6.3 · rev 5): una pieza por práctica + el deck corporativo.
  // Pieza = sale al cliente, vigente, no referencia; momento «reunión» preferente; a
  // igualdad, la de fecha de revisión más reciente. Referencias fuera (viven en «casos»).
  function fechaKey(m) {
    if (!m.fecha_revision) return 0;
    let x = /^(\d{4})-(\d{2})/.exec(m.fecha_revision);
    if (x) return parseInt(x[1], 10) * 100 + parseInt(x[2], 10);
    x = /([a-z]{3})\.?\s+(\d{4})/i.exec(m.fecha_revision);
    if (x) { const i = MESES.indexOf(x[1].toLowerCase()); return parseInt(x[2], 10) * 100 + (i >= 0 ? i + 1 : 0); }
    return 0;
  }
  function piezaPortada(pid) {
    const cand = materiales.filter((m) => m.practica === pid && m.sale_al_cliente === "si" && m.estado === "vigente" && m.tipo !== "Referencia");
    if (!cand.length) return null;
    const reunion = cand.filter((m) => m.momento_comercial === "reunion");
    const pool = reunion.length ? reunion : cand;
    return pool.slice().sort((a, b) => fechaKey(b) - fechaKey(a))[0];
  }
  function deckCorporativo() {
    const cand = materiales.filter((m) => m.id === "corp-exec-global");
    if (!cand.length) return null;
    return cand.slice().sort((a, b) => (a.estado === "vigente" ? -1 : 0) - (b.estado === "vigente" ? -1 : 0) || fechaKey(b) - fechaKey(a))[0];
  }
  function tarjetaPortada(m, pr, featured) {
    const cls = featured ? "card-featured ed-mat" : "card ed-mat";
    if (!m) return `<article class="card ed-mat">
      <p class="eyebrow">${esc(pr.nombre)}</p>
      <p class="pending" style="margin-top:var(--space-2)">Material para cliente en preparación · dueño: ${esc(nombreCompleto(pr.responsable))}.</p>
      <p style="margin-top:var(--space-3)"><a class="text-link" href="/practicas/${esc(pr.id)}/">Ver la práctica →</a></p>
    </article>`;
    const enlace = m.url_documento
      ? `<a class="${featured ? "text-link" : "text-link"}" href="${esc(m.url_documento)}">Abrir el documento ↗</a>`
      : `<a class="text-link" href="/materiales/${esc(m.id)}/">Ver la ficha →</a>`;
    return `<article class="${cls}">
      <p class="eyebrow">${m.practica === "corporativo" ? esc(eyebrowTipo(m)) : esc(eyebrowTipo(m)) + " · " + esc(NOMBRE_PRACTICA[m.practica] || m.practica)}</p>
      <h4 style="font-size:var(--font-size-2xl);margin:var(--space-1) 0 var(--space-2)"><a style="text-decoration:none" href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a></h4>
      <p style="font-size:var(--font-size-sm)">${esc(m.nota_de_uso || "")}</p>
      <div class="ed-mat-foot"><div class="chips">${chipUso(m.sale_al_cliente)}${chipVigencia(m.estado, m.fecha_revision)}</div>${enlace}</div>
    </article>`;
  }
  const piezas = [tarjetaPortada(deckCorporativo(), { id: "", nombre: "Corporativo", responsable: "Corporativo" }, true)]
    .concat(practicas.map((pr) => tarjetaPortada(piezaPortada(pr.id), pr)));
  const accesos = (corp.portada.accesos_rapidos || []).map((a) =>
    `<a class="quick-chip" href="/materiales/${a.filtro && a.filtro.tipo ? "?tipo=" + encodeURIComponent(a.filtro.tipo) : ""}">${esc(a.label)}</a>`).join("");
  const material = `<div class="wrap"><section class="section">
    ${sectionHead("Material para el cliente", "Lo que puedes enseñar o enviar hoy.", "Una pieza por práctica, la más reciente que sale al cliente, y el deck corporativo. Lo demás está en Materiales.")}
    <div class="quick">${accesos}</div>
    <div class="grid grid-3 ed-mats">${piezas.join("")}</div>
    <p style="margin-top:var(--space-5)"><a class="text-link" href="/materiales/">Ver todos los materiales →</a></p>
  </section></div>`;

  const body = band + oferta + material;
  return page({ title: "Hipatia · Catálogo comercial de Entelgy", desc: "Qué vende Entelgy en cada práctica y qué puedes enseñar o enviar a un cliente.", active: "inicio", body });
}

// =====================================================================
// RELATO CORPORATIVO (/entelgy)
// =====================================================================
function entelgyPage(corp, practicas) {
  const r = corp.relato || {};
  const pq = r.por_que || {};

  // Por qué Entelgy (banda slate + tres diferenciadores)
  const pilares = (pq.pilares || []).map((p) => `<span class="chip">${esc(p)}</span>`).join("");
  const difs = (pq.diferenciadores || []).map((d) => `<article class="card card-num" data-num="${esc(d.num)}"><h3 style="font-size:var(--font-size-xl);margin:var(--space-2) 0">${esc(d.titulo)}</h3><p style="color:var(--color-text-secondary);font-size:var(--font-size-sm)">${esc(d.texto)}</p></article>`).join("");
  const porQue = pq.linea ? `<section class="section">
    <div class="band band-slate"><div class="wrap">
      <p class="eyebrow">Por qué Entelgy</p>
      <p class="h" style="font-family:var(--font-family-display);font-size:var(--font-size-3xl);line-height:1.05;margin:var(--space-2) 0 var(--space-3);max-width:24ch">${esc(pq.linea)}</p>
      <p style="max-width:62ch">${esc(pq.texto)}</p>
      <div class="chips" style="margin-top:var(--space-3)">${pilares}</div>
    </div></div>
    <div class="grid grid-3" style="margin-top:var(--space-4)">${difs}</div>
  </section>` : "";

  // Cuatro entradas
  const entradas = (r.entradas || []).map((e) => `<article class="card"><p class="eyebrow">${esc(e.eyebrow)}</p><h3 style="font-size:var(--font-size-xl);margin:var(--space-2) 0">${esc(e.titulo)}</h3><p style="color:var(--color-text-secondary);font-size:var(--font-size-sm)">${esc(e.texto)}</p></article>`).join("");

  // El método (Evita separado, en mono)
  const metodo = (r.metodo && r.metodo.pasos || []).map((p) => {
    const idx = p.texto.indexOf("Evita:");
    const main = idx >= 0 ? p.texto.slice(0, idx).trim() : p.texto;
    const evita = idx >= 0 ? p.texto.slice(idx).trim() : "";
    return `<article class="card card-num" data-num="${esc(p.paso)}"><h4 style="font-size:var(--font-size-lg);margin:var(--space-1) 0 var(--space-2)">${esc(p.titulo)}</h4><p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">${esc(main)}</p>${evita ? `<p class="evita">${esc(evita)}</p>` : ""}</article>`;
  }).join("");

  // Dónde entramos (banda navy · cinco prácticas)
  const de = r.donde_entramos || {};
  const cols = (practicas || []).map((pr) => {
    const dest = pr.id === "data-intelligence" ? `/practicas/data-intelligence/data-intelligence/` : `/practicas/${esc(pr.id)}/`;
    return `<article class="card sol-nav"><p class="num">${esc(pr.orden)}</p><h3 style="font-size:var(--font-size-lg);margin:var(--space-1) 0 var(--space-2)">${esc(pr.nombre)}</h3><p style="font-size:var(--font-size-sm)">${esc(pr.propuesta_portada || pr.propuesta)}</p><p class="footer-note" style="margin-top:var(--space-2)">${esc(nombreCompleto(pr.responsable))}</p><a class="text-link" href="${dest}">Ver práctica →</a></article>`;
  }).join("");
  const donde = de.titulo ? `<section class="section band band-navy"><div class="wrap">
    ${sectionHead("Dónde entramos", de.titulo, de.texto)}
    <div class="grid grid-5" style="margin-top:var(--space-4)">${cols}</div>
  </div></section>` : "";

  // La Oficina
  const otg = r.otg ? `<section class="section">
    <h2 style="font-size:var(--font-size-2xl)">${esc(r.otg.titulo)}</h2>
    <p class="lede" style="margin:var(--space-2) 0 var(--space-4)">${esc(r.otg.texto)}</p>
    <ol class="fases">${(r.otg.fases || []).map((f) => `<li><b>${esc(f.titulo)}</b> — ${esc(f.texto)}</li>`).join("")}</ol>
    ${r.otg.funciones ? `<p class="footer-note" style="margin-top:var(--space-3)">${esc(r.otg.funciones)}</p>` : ""}
  </section>` : "";

  // Pruebas (plegado)
  const pr2 = r.pruebas || {};
  const pruebas = pr2.titulo ? `<section class="section"><details class="fold"><summary>${esc(pr2.titulo)}</summary><div class="fold-body">
    <p class="footer-note">${esc(pr2.nota || "")}</p>
    <div class="grid grid-2">${(pr2.quienes || []).map((q) => `<p><b style="font-size:var(--font-size-2xl)">${esc(q.cifra)}</b> ${esc(q.texto)}</p>`).join("")}</div>
    <p style="margin-top:var(--space-3)"><b>Certificaciones.</b> ${esc(pr2.certificaciones || "")}</p>
    <div style="margin-top:var(--space-3)">${(pr2.sectores || []).map((s) => `<p style="margin-top:var(--space-2)"><b>${esc(s.nombre)}.</b> ${esc(s.texto)}</p>`).join("")}</div>
    <p class="footer-note" style="margin-top:var(--space-3)">${esc(pr2.regla || "")} · Fuente: ${esc(pr2.fuente || "")}</p>
  </div></details></section>` : "";

  // Cuando el relato necesita una pieza
  const mat = r.material || {};
  const deckFeat = (m) => `<article class="card-featured ed-mat">
    <p class="eyebrow">${esc(eyebrowTipo(m))}</p>
    <h3 style="font-size:28px;margin:10px 0 8px"><a style="text-decoration:none;color:#fff" href="/materiales/${esc(m.id)}/">${esc(m.titulo)}</a></h3>
    <p style="max-width:44ch">${esc(m.nota_de_uso || "")}</p>
    <div class="ed-mat-foot"><div class="chips">${chipUso(m.sale_al_cliente)}${chipVigencia(m.estado, m.fecha_revision)}</div>${m.url_documento ? `<a class="text-link" href="${esc(m.url_documento)}">Abrir el documento ↗</a>` : `<a class="text-link" href="/materiales/${esc(m.id)}/">Ver la ficha →</a>`}</div>
  </article>`;
  const matCards = (mat.ids || []).map((id, i) => MAT[id] ? (i === 0 ? deckFeat(MAT[id]) : materialCard(MAT[id])) : "").join("");
  const material = (mat.ids && mat.ids.length) ? `<section class="section">
    <p class="eyebrow">${esc(mat.eyebrow || "")}</p>
    <div class="grid grid-2" style="margin-top:var(--space-3)">${matCards}</div>
  </section>` : "";

  const body = `<section class="section hero"><div class="wrap">
    <p class="eyebrow">Cómo presentar Entelgy</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0">Entelgy, en una conversación</h1>
    <p class="lede">${esc(r.sesenta_segundos || corp.entelgy_una_frase)}</p>
  </div></section>
  <div class="wrap">
    ${porQue}
    <section class="section">${sectionHead("Cuatro entradas al mismo relato", "Empieza por la pregunta que tienes delante.", "No son cuatro respuestas desconectadas ni un guion: son cuatro formas naturales de entrar en la misma propuesta.")}
      <div class="grid grid-2" style="margin-top:var(--space-3)">${entradas}</div></section>
    <section class="section">${sectionHead("El método", "Cada fase evita una forma conocida de perder el impacto.", (r.metodo && r.metodo.nota || "") + " Transversal: " + (r.metodo && r.metodo.transversal || []).join(" · ") + ".")}
      <div class="grid grid-5" style="margin-top:var(--space-4)">${metodo}</div></section>
  </div>
  ${donde}
  <div class="wrap">
    ${otg}
    ${pruebas}
    ${material}
  </div>`;
  return page({ title: "Cómo presentar Entelgy · Hipatia", desc: r.sesenta_segundos, active: "entelgy", body });
}

// =====================================================================
// PUNTO DE PARTIDA · LO QUE VIENE (fuera del menú)
// =====================================================================
function puntoPartidaPage(corp) {
  const pp = corp.punto_de_partida || {};
  const body = `<section class="section"><div class="wrap" style="max-width:900px">
    <p class="eyebrow">Por qué Hipatia</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0 var(--space-4)">Punto de partida</h1>
    <div class="grid grid-2">
      <div class="card"><h2 style="font-size:var(--font-size-2xl)">${esc(pp.as_is.titulo)}</h2><p style="margin-top:var(--space-2);color:var(--color-text-secondary)">${esc(pp.as_is.texto)}</p></div>
      <div class="card" style="background:var(--color-brand-navy);color:#fff;border:0"><h2 style="color:#fff;font-size:var(--font-size-2xl)">${esc(pp.to_be.titulo)}</h2><p style="margin-top:var(--space-2);color:var(--color-slate-200)">${esc(pp.to_be.texto)}</p></div>
    </div>
  </div></section>`;
  return page({ title: "Punto de partida · Hipatia", desc: "De dónde parte Hipatia y a dónde va.", active: "", body });
}
function loQueVienePage(corp) {
  const lv = corp.lo_que_viene || {};
  const items = (lv.items || []).map((i) => `<article class="card"><div class="chips" style="margin-bottom:var(--space-2)">${chipVigencia("pendiente", null)}</div><h3 style="font-size:var(--font-size-xl)">${esc(i.titulo)}</h3><p style="margin:var(--space-2) 0;color:var(--color-text-secondary);font-size:var(--font-size-sm)">${esc(i.texto)}</p><p class="footer-note">Dueño: ${esc(nombreCompleto(i.dueno))}</p></article>`).join("");
  const body = `<section class="section"><div class="wrap">
    <p class="eyebrow">Hoja de ruta</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0 var(--space-3)">Lo que viene</h1>
    <p class="lede" style="margin-bottom:var(--space-5)">${esc(lv.intro || "")}</p>
    <div class="grid grid-3">${items}</div>
  </div></section>`;
  return page({ title: "Lo que viene · Hipatia", desc: lv.intro, active: "", body });
}

// =====================================================================
// CONTACTOS (§6.3)
// =====================================================================
function contactosPage(practicas, personas) {
  const byPractica = {};
  personas.forEach((p) => { (byPractica[p.practica] = byPractica[p.practica] || []).push(p); });
  const secciones = practicas.map((pr) => {
    const gente = byPractica[pr.id] || [];
    const responsable = gente.find((g) => g.rol.startsWith("Responsable"));
    const especialistas = gente.filter((g) => g.rol === "Especialista de solución");
    const segundo = gente.find((g) => g.rol === "Segundo contacto");
    const asunto = encodeURIComponent(`Hipatia · ${pr.nombre}: falta algo`);
    const correoLink = (g) => g.correo ? ` · <a class="text-link" href="mailto:${esc(g.correo)}">${esc(g.correo)}</a>` : "";
    let filas = "";
    if (responsable) filas += `<li><b>${esc(responsable.nombre)}</b> — Responsable de la práctica <span class="footer-note">${responsable.titulo ? "· " + esc(responsable.titulo) + " " : ""}· ${esc(responsable.canal || "")}</span>${correoLink(responsable)}</li>`;
    especialistas.forEach((e) => {
      const sol = (pr.soluciones || []).find((s) => s.id === e.solucion);
      filas += `<li><b>${esc(e.nombre)}</b> — Especialista${sol ? " · " + esc(sol.nombre) : ""}${e.titulo ? ` <span class="footer-note">· ${esc(e.titulo)}</span>` : ""}${correoLink(e)}</li>`;
    });
    filas += segundo && segundo.nombre
      ? `<li>${esc(segundo.nombre)} — Segundo contacto${segundo.titulo ? ` <span class="footer-note">· ${esc(segundo.titulo)}</span>` : ""}${correoLink(segundo)}</li>`
      : `<li class="footer-note">Segundo contacto: en preparación · dueño: los SM · sept 2026</li>`;
    return `<section class="section"><div style="display:flex;justify-content:space-between;align-items:baseline;gap:var(--space-4);flex-wrap:wrap">
        <h2 style="font-size:var(--font-size-2xl)">${esc(pr.nombre)}</h2>
        <a class="text-link" href="mailto:?subject=${asunto}">¿Falta algo? Escribe al responsable</a>
      </div>
      <ul style="margin-top:var(--space-3);line-height:1.9">${filas}</ul></section>`;
  }).join("");
  const body = `<section class="section"><div class="wrap" style="max-width:820px">
    <p class="eyebrow">Directorio</p>
    <h1 style="font-size:var(--font-size-4xl);margin:var(--space-2) 0 var(--space-2)">Contactos</h1>
    <p class="lede">Por práctica: responsable, especialista por solución y canal de Teams.</p>
    ${secciones}
    <p class="footer-note" style="margin-top:var(--space-4)">Los canales de Teams se enlazan cuando estén validados. Nada de lo que escribas en «¿falta algo?» se guarda: abre un correo al responsable.</p>
  </div></section>`;
  return page({ title: "Contactos · Hipatia", desc: "Responsables y especialistas por práctica.", active: "contactos", body });
}

// =====================================================================
// BUILD
// =====================================================================
function build() {
  const corp = read("corporativo.json");
  const personas = read("personas.json").personas;
  const practicas = PRACTICAS.map((id) => read(id + ".json"));
  write("", portadaPage(corp, practicas));
  write("entelgy", entelgyPage(corp, practicas));
  write("punto-de-partida", puntoPartidaPage(corp));
  write("lo-que-viene", loQueVienePage(corp));
  write("contactos", contactosPage(practicas, personas));
  write("practicas", practicasIndex(practicas));
  let nSol = 0;
  practicas.forEach((pr) => {
    write(path.join("practicas", pr.id), practicaPage(pr));
    (pr.soluciones || []).forEach((s) => {
      write(path.join("practicas", pr.id, s.id), solucionPage(pr, s));
      nSol++;
    });
  });
  write("materiales", materialesIndex("cliente"));
  write(path.join("materiales", "todo"), materialesIndex("todo"));
  materiales.forEach((m) => write(path.join("materiales", m.id), materialFicha(m)));
  console.log(`Generadas: / · /entelgy · /punto-de-partida · /lo-que-viene · /contactos · /practicas + ${practicas.length} prácticas + ${nSol} soluciones · /materiales + ${materiales.length} fichas`);
}
build();
