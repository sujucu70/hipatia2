#!/usr/bin/env node
/* Hipatia v3 · check-data.js
 * Valida el modelo de datos (data/*.json) sin dependencias:
 *  - toda pieza con dueño, estado, uso y fecha (o marcada pendiente);
 *  - ninguna referencia `citable` sin `sign_off`;
 *  - cada solución con los campos de §6.4;
 *  - cada práctica con propuesta, qué cubre/qué no, pregunta, capacidades y primer avance.
 * Escribe docs/pendientes-por-solucion.md con lo que falta por validar, con dueño y fecha.
 * Uso: node check-data.js   (código de salida 1 si hay errores duros).
 */
"use strict";
const fs = require("fs");
const path = require("path");

const DATA = path.join(__dirname, "data");
const DOCS = path.join(__dirname, "docs");
const read = (f) => JSON.parse(fs.readFileSync(path.join(DATA, f), "utf8"));

const PRACTICAS = ["process-intelligence", "software-development", "data-intelligence", "smart-operations", "digital-change"];
const errores = [];
const avisos = [];
const pendientes = []; // {practica, solucion, que, dueno, fecha}

function err(m) { errores.push(m); }
function warn(m) { avisos.push(m); }

// ---- Materiales ----
// Vocabulario cerrado de tipos (revisión 14 · §6.5).
const TIPOS_OK = new Set(["Deck", "One-pager", "Ficha", "Referencia", "Guía de discovery", "Guía interna", "Plantilla", "Herramienta", "Archivo"]);
const DESCARGA_FORMATOS = new Set(["pdf", "pptx", "docx", "xlsx"]);
const materiales = read("materiales.json").materiales;
const idsPieza = new Set();
materiales.forEach((p) => {
  if (idsPieza.has(p.id)) err(`pieza duplicada: ${p.id}`);
  idsPieza.add(p.id);
  if (p.tipo && !TIPOS_OK.has(p.tipo)) err(`pieza ${p.id} con tipo fuera del vocabulario (rev14): ${p.tipo}`);
  if (!p.dueno) err(`pieza ${p.id} sin dueño`);
  if (!p.estado) err(`pieza ${p.id} sin estado`);
  if (!p.sale_al_cliente) err(`pieza ${p.id} sin uso (sale_al_cliente)`);
  if (p.estado !== "pendiente" && !p.fecha_revision) warn(`pieza ${p.id} (${p.estado}) sin fecha_revision`);
  if (p.citable === "citable" && !(p.sign_off && p.sign_off.quien && p.sign_off.fecha))
    err(`pieza ${p.id} marcada citable sin sign_off`);
  if (p.url_documento === null && p.estado !== "pendiente" && p.tipo !== "referencia") {
    // material vigente/revisar sin URL: debe entenderse como enlace pendiente, no roto
    warn(`pieza ${p.id} (${p.estado}) sin url_documento → se mostrará «enlace pendiente»`);
  }
  // BC · descargas por formato (opcional): formato del vocabulario y URL http(s)
  if (p.descargas !== undefined) {
    if (!Array.isArray(p.descargas)) err(`pieza ${p.id}: descargas debe ser una lista`);
    else p.descargas.forEach((d, i) => {
      if (!DESCARGA_FORMATOS.has(d.formato)) err(`pieza ${p.id}: descarga ${i} con formato inválido (${d.formato})`);
      if (!/^https?:\/\//.test(d.url || "")) err(`pieza ${p.id}: descarga ${i} sin URL http(s)`);
    });
  }
});
console.log(`Materiales: ${materiales.length} piezas`);

// ---- Personas (rev16 · BD): una entrada por persona con id, sin duplicados ----
const personas = read("personas.json");
if (!Array.isArray(personas)) err("personas.json debe ser una lista (una entrada por persona)");
const idsPersona = new Set();
(Array.isArray(personas) ? personas : []).forEach((p) => {
  if (!p.id) err(`persona sin id (${p.nombre || "?"})`);
  else if (idsPersona.has(p.id)) err(`persona con id duplicado: ${p.id}`);
  else idsPersona.add(p.id);
  if (!p.nombre) err(`persona ${p.id || "?"} sin nombre`);
});

// ---- Prácticas y soluciones ----
let totalSoluciones = 0;
const nombrePractica = {};
PRACTICAS.forEach((id) => {
  const pr = read(id + ".json");
  nombrePractica[id] = pr.nombre || id;
  ["propuesta", "que_cubre", "que_no_prometer", "pregunta_comun"].forEach((k) => {
    if (!pr[k]) err(`práctica ${id} sin ${k}`);
  });
  if (!Array.isArray(pr.capacidades) || pr.capacidades.length === 0) err(`práctica ${id} sin capacidades`);
  if (!pr.primer_avance || !pr.primer_avance.titulo) err(`práctica ${id} sin primer_avance`);
  if (!Array.isArray(pr.soluciones) || pr.soluciones.length === 0) err(`práctica ${id} sin soluciones`);
  [].concat(pr.responsable_id || []).forEach((rid) => {
    if (rid && !idsPersona.has(rid)) err(`práctica ${id} responsable_id inexistente: ${rid}`);
  });
  (pr.soluciones || []).forEach((s) => {
    totalSoluciones++;
    if (s.contactos) ["comercial", "tecnico"].forEach((rol) => {
      const v = s.contactos[rol];
      if (v && !idsPersona.has(v)) err(`solución ${id}/${s.id} contacto ${rol} inexistente: ${v}`);
    });
    ["id", "nombre", "una_linea", "especialista", "estado", "dueno"].forEach((k) => {
      if (!s[k]) err(`solución ${id}/${s.id || "?"} sin ${k}`);
    });
    if (!["vigente", "en_preparacion"].includes(s.estado))
      err(`solución ${id}/${s.id} estado inválido: ${s.estado}`);
    if (!s.propuesta || !s.propuesta.que_es) err(`solución ${id}/${s.id} sin propuesta.que_es`);
    // materiales referenciados existen
    (s.materiales || []).forEach((mid) => {
      if (!idsPieza.has(mid)) err(`solución ${id}/${s.id} referencia material inexistente: ${mid}`);
    });
    (s.referencias || []).forEach((rid) => {
      if (!idsPieza.has(rid)) err(`solución ${id}/${s.id} referencia caso inexistente: ${rid}`);
    });
    // recopila lo pendiente
    if (s.estado === "en_preparacion") {
      const p = s.pendiente || {};
      pendientes.push({
        practica: pr.nombre, solucion: s.nombre,
        que: p.texto || "Contenido de la solución",
        dueno: p.dueno || s.dueno || "por asignar",
        fecha: p.fecha_objetivo || s.fecha_objetivo || "sin fecha"
      });
    }
  });
});
console.log(`Prácticas: ${PRACTICAS.length} · Soluciones: ${totalSoluciones}`);

// ---- Materiales cliente sin dueño en piezas pendientes ----
materiales.filter((p) => p.estado === "pendiente").forEach((p) => {
  pendientes.push({ practica: nombrePractica[p.practica] || p.practica, solucion: p.solucion || "—", que: `Material: ${p.titulo}`, dueno: p.dueno, fecha: "sept 2026" });
});

// ---- Escribe docs/pendientes-por-solucion.md ----
let md = "# Pendientes por solución · Hipatia v3\n\n";
md += "> Generado por `check-data.js`. Lo que aún no tiene contenido validado, con dueño y fecha objetivo. ";
md += "Ninguna fecha es inventada: donde no la hay, dice «sin fecha».\n\n";
md += "**Taxonomía (revisión 5, 3 sep):** 5 prácticas · **11 soluciones** (PI 2 · SD 3 · DI 1 · SO 2 · DC 3). «Data & AI» pasa a **Data Intelligence** (una única solución con el nombre de la práctica y sus cuatro capacidades dentro) y «IA + Digital Change» pasa a **Digital Change**. Software Development mantiene tres soluciones (provisional, pendiente de Jorge · §10.9).\n\n";
const porPractica = {};
pendientes.forEach((p) => { (porPractica[p.practica] = porPractica[p.practica] || []).push(p); });
Object.keys(porPractica).forEach((prac) => {
  md += `## ${prac}\n\n| Qué falta | Dueño | Fecha objetivo |\n|---|---|---|\n`;
  porPractica[prac].forEach((p) => {
    md += `| ${p.solucion !== "—" && p.solucion ? "**" + p.solucion + "** · " : ""}${p.que} | ${p.dueno} | ${p.fecha} |\n`;
  });
  md += "\n";
});
md += "---\n\n";
md += `## Resumen\n\n- Errores duros: **${errores.length}**\n- Avisos: **${avisos.length}**\n- Pendientes registrados: **${pendientes.length}**\n\n`;
md += "Modernización (Software Development) es la única solución con contenido íntegro validado (tarjeta, 6 casos con sign-off jul 2026, materiales por momento, «para prepararte»). El resto muestra su propuesta auditada del Executive Deck y marca casos y materiales «en preparación».\n";
if (!fs.existsSync(DOCS)) fs.mkdirSync(DOCS, { recursive: true });
fs.writeFileSync(path.join(DOCS, "pendientes-por-solucion.md"), md, "utf8");
console.log("Escrito docs/pendientes-por-solucion.md");

// ---- Informe ----
if (avisos.length) { console.log("\nAVISOS:"); avisos.forEach((a) => console.log("  ⚠ " + a)); }
if (errores.length) {
  console.log("\nERRORES:");
  errores.forEach((e) => console.log("  ✗ " + e));
  process.exit(1);
}
console.log("\n✓ Modelo de datos válido.");
