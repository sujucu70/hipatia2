#!/usr/bin/env node
/* Hipatia v4 · check-pregunta.js
 * Prueba de aceptación de «Pregunta a Hipatia» (revisión 18 · BJ.6).
 * Carga el índice servido y el motor de pregunta.js, lee data/preguntas.json y
 * comprueba, pregunta a pregunta, que la intención y el primer resultado
 * coinciden, y que los ids de «tambien» (si los hay) están entre los tres de
 * «También». Sin dependencias. Sale con 1 si alguna falla.
 * Uso: node check-pregunta.js   (requiere haber corrido build.js antes)
 */
"use strict";
const fs = require("fs");
const path = require("path");

const idxPath = path.join(__dirname, "public", "indice-pregunta.json");
if (!fs.existsSync(idxPath)) { console.error("Falta public/indice-pregunta.json · corre node build.js antes."); process.exit(1); }
const indice = JSON.parse(fs.readFileSync(idxPath, "utf8"));
const motor = require("./public/pregunta.js").motor;
const preguntas = JSON.parse(fs.readFileSync(path.join(__dirname, "data", "preguntas.json"), "utf8"));

let fallos = 0;
for (const q of preguntas) {
  const r = motor(indice, q.pregunta) || {};
  const primero = r.primero == null ? null : r.primero;
  const esperado = q.primero == null ? null : q.primero;
  const okIntencion = r.intencion === q.intencion;
  const okPrimero = primero === esperado;
  const tambien = r.tambien || [];
  const okTambien = !q.tambien || q.tambien.every((id) => tambien.indexOf(id) >= 0);
  const ok = okIntencion && okPrimero && okTambien;
  if (!ok) {
    fallos++;
    console.log(`✗ «${q.pregunta}»`);
    if (!okIntencion) console.log(`    intención: esperada ${q.intencion}, obtenida ${r.intencion}`);
    if (!okPrimero) console.log(`    primero: esperado ${esperado}, obtenido ${primero}`);
    if (!okTambien) console.log(`    también: faltan ${q.tambien.filter((id) => tambien.indexOf(id) < 0).join(", ")} (obtenido: ${tambien.slice(0, 3).join(", ")})`);
  } else {
    console.log(`✓ «${q.pregunta}» → ${r.intencion}${primero ? " · " + primero : ""}`);
  }
}
console.log(fallos ? `\n${fallos} de ${preguntas.length} preguntas fallan.` : `\n${preguntas.length} preguntas correctas.`);
process.exit(fallos ? 1 : 0);
