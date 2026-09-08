// La slide «¿Por dónde empezamos?» deja de leerse como un proceso.
//
//   node scripts/editar-slide-puertas.js <fichero.html> [--dry]
//
// Las cinco áreas no son cinco pasos: son cinco puertas de entrada, y se elige
// una. Numeradas 01-05 y con flecha, justo debajo del método —que sí tiene
// cinco pasos numerados y con flecha—, se leían como su continuación.
//
// Qué hace:
//   · fuera la numeración 01-05
//   · fuera la flecha, que era lo que trazaba la línea de izquierda a derecha
//   · el icono del área, que estaba de marca de agua detrás del texto, sube a
//     la cabecera dentro de una pastilla del color pálido del área (--ct-bg,
//     que estaba declarado en cada puerta y sin usar)
//   · al pasar el ratón, el borde de la tarjeta toma su color
//
// El HTML es un bundle autoextraíble: el markup real vive como cadena JSON en
// el <script type="__bundler/template">. Se entra por ahí, se edita y se vuelve
// a serializar. El resto del fichero no se toca.

const fs = require("fs");

const fichero = process.argv[2];
const dry = process.argv.includes("--dry");
if (!fichero) { console.error("Uso: node scripts/editar-slide-puertas.js <fichero.html> [--dry]"); process.exit(1); }

const original = fs.readFileSync(fichero, "utf8");
const lineas = original.split("\n");

const marca = '<script type="__bundler/template">';
let i = lineas.findIndex((l) => l.includes(marca));
if (i < 0) { console.error("Este fichero no es un bundle: no hay __bundler/template."); process.exit(2); }
i += 1;

let tpl;
try { tpl = JSON.parse(lineas[i]); }
catch (e) { console.error(`La línea ${i + 1} no parsea como JSON: ${e.message}`); process.exit(2); }
if (typeof tpl !== "string") { console.error("La plantilla no es una cadena."); process.exit(2); }
console.log(`Plantilla: línea ${i + 1}, ${Math.round(tpl.length / 1024)} KB`);

if (tpl.includes("ct-d-ico")) { console.log("Ya estaba hecho (hay ct-d-ico). No toco nada."); process.exit(0); }

const FLECHA = '<span class="ct-d-arrow"><i data-lucide="arrow-right"></i></span>';

const trozos = tpl.split('<a class="ct-door"');
if (trozos.length !== 6) { console.error(`Esperaba 5 puertas y encuentro ${trozos.length - 1}.`); process.exit(2); }

const hechas = [];
for (let n = 1; n < trozos.length; n++) {
  let t = trozos[n];
  const wm = t.match(/<i class="ct-d-wm" data-lucide="([\w-]+)"><\/i>\s*/);
  const num = t.match(/<span class="ct-d-num">(\d+)<\/span>/);
  const nombre = t.match(/<div class="ct-d-name">([^<]+)</);
  if (!wm || !num) { console.error(`Puerta ${n}: falta ${!num ? "el número" : "la marca de agua"}.`); process.exit(2); }
  if (!t.includes(FLECHA)) { console.error(`Puerta ${n}: no encuentro la flecha.`); process.exit(2); }
  t = t.replace(num[0], `<span class="ct-d-ico"><i data-lucide="${wm[1]}"></i></span>`);
  t = t.replace(FLECHA, "");
  t = t.replace(wm[0], "");
  trozos[n] = t;
  hechas.push(`  ${num[1]} · ${nombre ? nombre[1] : "?"} → pastilla con icono ${wm[1]}`);
}
tpl = trozos.join('<a class="ct-door"');

// CSS de la pastilla, junto a la regla del número que queda muerta
const reglaNum = tpl.match(/\.ct-d-num\s*\{[^}]*\}/);
if (!reglaNum) { console.error("No encuentro la regla CSS .ct-d-num."); process.exit(2); }
tpl = tpl.replace(reglaNum[0], reglaNum[0] +
  '\n.ct-d-ico { width:52px; height:52px; border-radius:14px; background:var(--ct-bg); display:flex; align-items:center; justify-content:center; color:var(--ct-c); }' +
  '\n.ct-d-ico svg { width:28px; height:28px; stroke-width:1.9; }');

// el borde toma el color del área al pasar el ratón: es lo que queda como señal de clic
const reglaHover = tpl.match(/\.ct-door:hover \{[^}]*\}/);
if (!reglaHover) { console.error("No encuentro la regla CSS .ct-door:hover."); process.exit(2); }
tpl = tpl.replace(reglaHover[0], reglaHover[0].replace(/\}$/, " border-color:var(--ct-c); }"));

console.log("Puertas cambiadas:");
hechas.forEach((h) => console.log(h));
console.log(`Marcas de agua que quedan: ${(tpl.match(/class="ct-d-wm"/g) || []).length}`);
console.log(`Flechas que quedan en las puertas: ${(tpl.match(/class="ct-d-arrow"/g) || []).length}`);

if (dry) { console.log("\n(--dry: no se ha escrito nada)"); process.exit(0); }

// JSON.stringify no escapa la barra, y este JSON vive DENTRO de un <script>:
// una sola secuencia "</script>" en la plantilla cierra la etiqueta antes de
// tiempo y el bundle no llega a desempaquetarse. El fichero original escapa
// todos los "</" como "</" justo por esto. Se replica.
lineas[i] = JSON.stringify(tpl).replace(/<\//g, "<\\u002F");
const salida = lineas.join("\n");
if (salida.includes("</script>\n  </script>") === false && lineas[i].includes("</script>")) {
  console.error("PARO: ha quedado un </script> suelto dentro de la plantilla."); process.exit(3);
}
fs.writeFileSync(fichero, salida);
console.log(`\nEscrito ${fichero}  ·  ${(salida.length / 1048576).toFixed(2)} MB`);
