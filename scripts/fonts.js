#!/usr/bin/env node
// Copia los woff2 (subconjunto latin) de los paquetes fontsource a
// public/assets/fonts/ con nombre corto. Repetible: `node scripts/fonts.js`.
// Requiere los devDependencies @fontsource/{barlow-condensed,roboto,jetbrains-mono}.
// Solo los pesos que usa styles.css. Licencia OFL 1.1 (permite servir desde el portal).
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DEST = path.join(ROOT, "public", "assets", "fonts");
const NM = path.join(ROOT, "node_modules", "@fontsource");

// [paquete, familia-fontsource, pesos, prefijo-destino]
// Barlow Condensed / Roboto (400-700) / JetBrains Mono (400-500): el portal v3 (styles.css).
// Barlow / Roboto 300 / JetBrains Mono 700: las dos fichas de julio de Modernización
// (public/modernizacion/materiales/*.html), servidas también desde el portal (revisión 15).
const FAMILIAS = [
  ["barlow-condensed", "barlow-condensed", [500, 600, 700], "barlow-condensed"],
  ["barlow", "barlow", [300, 400, 600, 700, 800], "barlow"],
  ["roboto", "roboto", [300, 400, 500, 700], "roboto"],
  ["jetbrains-mono", "jetbrains-mono", [400, 500, 700], "jetbrains-mono"],
];

fs.mkdirSync(DEST, { recursive: true });
let n = 0;
for (const [pkg, fam, pesos, prefijo] of FAMILIAS) {
  for (const peso of pesos) {
    const src = path.join(NM, pkg, "files", `${fam}-latin-${peso}-normal.woff2`);
    const dst = path.join(DEST, `${prefijo}-${peso}.woff2`);
    if (!fs.existsSync(src)) {
      console.error(`FALTA: ${src} — ¿instalaste @fontsource/${pkg}?`);
      process.exit(1);
    }
    fs.copyFileSync(src, dst);
    n++;
  }
}
console.log(`Copiados ${n} woff2 a public/assets/fonts/`);
