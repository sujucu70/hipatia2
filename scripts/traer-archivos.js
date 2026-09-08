// Trae al portal los documentos que hoy cuelgan de entelgy.guberna.es.
//
//   node scripts/traer-archivos.js --dry              solo informa, no toca nada
//   node scripts/traer-archivos.js --solo corp-exec-global
//   node scripts/traer-archivos.js                    todos
//
// Origen ../Entelgy (SOLO LECTURA) -> destino public/archivos/, espejando la ruta.
// Reescribe url_documento y rellena descargas en data/materiales.json.
// Si el destino existe y DIFIERE del origen, para: ahí hay trabajo hecho encima.

const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const ORIGEN = path.resolve(RAIZ, "..", "Entelgy");
const DESTINO = path.join(RAIZ, "public", "archivos");
const JSON_MAT = path.join(RAIZ, "data", "materiales.json");
const HOST = "https://entelgy.guberna.es/";
const FORMATOS = [".pdf", ".pptx", ".docx", ".xlsx"];

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const soloIdx = args.indexOf("--solo");
const solo = soloIdx >= 0 ? args[soloIdx + 1] : null;

if (!fs.existsSync(ORIGEN)) {
  console.error(`No encuentro el origen: ${ORIGEN}`);
  console.error("Esta tarea necesita la carpeta Entelgy al lado del repo. Para y dilo.");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(JSON_MAT, "utf8"));
const clave = Object.keys(raw)[0];
const materiales = raw[clave];

const copiados = [];
const saltados = [];
const conflictos = [];
let tocados = 0;

function copiar(rutaRel) {
  const src = path.join(ORIGEN, rutaRel);
  const dst = path.join(DESTINO, rutaRel);
  if (!fs.existsSync(src)) throw new Error(`no existe en origen: ${rutaRel}`);
  if (fs.existsSync(dst)) {
    const a = fs.readFileSync(src), b = fs.readFileSync(dst);
    if (a.equals(b)) { saltados.push(rutaRel); return; }
    conflictos.push(rutaRel);
    return;
  }
  if (!dry) {
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.copyFileSync(src, dst);
  }
  copiados.push([rutaRel, fs.statSync(src).size]);
}

for (const m of materiales) {
  const u = m.url_documento;
  if (!u || !u.startsWith(HOST)) continue;
  if (solo && m.id !== solo) continue;

  const rutaRel = decodeURIComponent(u.slice(HOST.length));
  copiar(rutaRel);

  const sinExt = rutaRel.replace(/\.[^./]+$/, "");
  const descargas = [];
  for (const ext of FORMATOS) {
    const hermano = sinExt + ext;
    // los casos de éxito de SmartOPS son un .pptx que YA es el documento:
    // no se ofrece como descarga de sí mismo
    if (hermano === rutaRel) continue;
    if (!fs.existsSync(path.join(ORIGEN, hermano))) continue;
    copiar(hermano);
    descargas.push({ formato: ext.slice(1), url: "/archivos/" + hermano.split("/").map(encodeURIComponent).join("/") });
  }

  if (!dry) {
    m.url_documento = "/archivos/" + rutaRel.split("/").map(encodeURIComponent).join("/");
    if (descargas.length) m.descargas = descargas;
  }
  tocados++;
}

if (conflictos.length) {
  console.error("\nPARO. Estos destinos existen y NO coinciden con el origen:");
  conflictos.forEach((c) => console.error("  " + c));
  console.error("\nAhí hay trabajo hecho encima de la copia (la slide editada, por ejemplo).");
  console.error("Sobrescribir se lo llevaría por delante. Decide a mano qué hacer.");
  process.exit(2);
}

if (!dry) fs.writeFileSync(JSON_MAT, JSON.stringify(raw, null, 2) + "\n");

const mb = (n) => (n / 1048576).toFixed(2);
console.log(`\nMateriales tocados: ${tocados}${solo ? ` (solo ${solo})` : ""}`);
console.log(`Ficheros copiados:  ${copiados.length}  ·  ${mb(copiados.reduce((s, c) => s + c[1], 0))} MB`);
if (saltados.length) console.log(`Ya estaban idénticos: ${saltados.length}`);
copiados.forEach(([r, s]) => console.log(`  ${mb(s).padStart(7)} MB  ${r}`));
console.log(dry ? "\n(--dry: no se ha escrito nada)" : `\nEscrito ${path.relative(RAIZ, JSON_MAT)}`);
