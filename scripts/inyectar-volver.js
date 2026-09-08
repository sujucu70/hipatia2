// Una vez abierto un material, no había forma de volver: Escape no hacía nada y
// el único camino era el botón atrás del navegador. Lo dijo Alfredo el 8-sep.
//
//   node scripts/inyectar-volver.js [--dry]
//
// Inyecta en cada HTML de public/archivos/ una barra «← Volver a Hipatia» y
// engancha la tecla Escape. Autocontenido: nada de dependencias ni fuentes
// externas; estos ficheros se abren detrás de Cloudflare Access y a veces
// desde file://. Idempotente: si ya lleva la barra, no toca nada.
//
// Dos formas de inyectar. Los HTML exportados por Claude Design son bundles
// autoextraíbles y su markup vive como cadena JSON en <script type="__bundler
// /template">: ahí hay que entrar por el JSON y reescapar los "</" al salir,
// o el primer </script> cierra la etiqueta antes de tiempo. El resto son HTML
// plano y se inyecta antes de </body>.

const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const BASE = path.join(RAIZ, "public", "archivos");
const dry = process.argv.includes("--dry");

// ↓↓ CAMBIAR AQUÍ el día que el portal se mude al dominio de Entelgy ↓↓
const PORTAL = "https://hipatia-v4.guberna.es/";

const BARRA = `<div id="hipatia-volver"><button type="button" aria-label="Volver a Hipatia">← Volver a Hipatia</button></div>
<style>
#hipatia-volver{position:fixed;top:14px;left:14px;z-index:2147483000;font:500 13px/1 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
#hipatia-volver button{display:inline-flex;align-items:center;gap:6px;padding:9px 14px;border-radius:999px;border:1px solid #E6E8EA;background:#fff;color:#041C2C;cursor:pointer;box-shadow:0 1px 3px rgba(4,28,44,.10);font:inherit;transition:color .15s,border-color .15s}
#hipatia-volver button:hover{color:#FE5000;border-color:#FE5000}
#hipatia-volver button:focus-visible{outline:2px solid #FE5000;outline-offset:2px}
@media print{#hipatia-volver{display:none !important}}
</style>
<script>
(function(){
  var PORTAL=${JSON.stringify(PORTAL)};
  function volver(){
    // el material se abre en la misma pestaña, así que hay historial: volver
    // atrás devuelve al listado exacto, con su scroll y sus filtros. Si alguien
    // llegó por la URL directa no hay historial y se va a la portada.
    if(history.length>1){ history.back(); return; }
    location.href=PORTAL;
  }
  var b=document.getElementById('hipatia-volver');
  if(b) b.firstChild.addEventListener('click',volver);
  document.addEventListener('keydown',function(e){
    if(e.key!=='Escape'||e.defaultPrevented) return;
    if(document.fullscreenElement) return;                 // Escape sale de pantalla completa
    var a=document.activeElement;
    if(a&&(a.tagName==='INPUT'||a.tagName==='TEXTAREA'||a.isContentEditable)) return;
    volver();
  });
})();
</script>`;

function htmls(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) htmls(f, acc);
    else if (e.name.endsWith(".html")) acc.push(f);
  }
  return acc;
}

const MARCA = '<script type="__bundler/template">';
let bundles = 0, planos = 0, yaEstaban = 0, fallos = [];

for (const f of htmls(BASE)) {
  const rel = path.relative(RAIZ, f);
  const original = fs.readFileSync(f, "utf8");
  // ojo: dentro de un bundle las comillas van escapadas (id=\\"hipatia-volver\\"),
  // así que se busca solo el identificador, sin comillas
  if (original.includes("hipatia-volver")) { yaEstaban++; continue; }

  let salida;
  if (original.includes(MARCA)) {
    // el JSON no siempre está en la línea siguiente: se acota por el cierre del
    // <script>, que no puede aparecer dentro (el bundle escapa todos los "</")
    const ini = original.indexOf(MARCA) + MARCA.length;
    const fin = original.indexOf("</script>", ini);
    if (fin < 0) { fallos.push(`${rel}: el <script> de la plantilla no cierra`); continue; }
    const crudo = original.slice(ini, fin);
    let tpl;
    try { tpl = JSON.parse(crudo.trim()); }
    catch (e) { fallos.push(`${rel}: la plantilla no parsea (${e.message})`); continue; }
    const j = tpl.lastIndexOf("</body>");
    if (j < 0) { fallos.push(`${rel}: la plantilla no tiene </body>`); continue; }
    tpl = tpl.slice(0, j) + BARRA + tpl.slice(j);
    const nuevo = JSON.stringify(tpl).replace(/<\//g, "<\\u002F");
    if (nuevo.includes("</script>")) { fallos.push(`${rel}: quedó un </script> suelto`); continue; }
    // se respeta el salto de línea y la sangría que rodeaban al JSON original
    const pre = crudo.slice(0, crudo.length - crudo.trimStart().length);
    const post = crudo.slice(crudo.trimEnd().length);
    salida = original.slice(0, ini) + pre + nuevo + post + original.slice(fin);
    bundles++;
  } else {
    const j = original.lastIndexOf("</body>");
    if (j < 0) { fallos.push(`${rel}: no tiene </body>`); continue; }
    salida = original.slice(0, j) + BARRA + original.slice(j); planos++;
  }
  if (!dry) fs.writeFileSync(f, salida);
}

console.log(`bundles: ${bundles} · HTML plano: ${planos} · ya la tenían: ${yaEstaban}`);
if (fallos.length) { console.log("\nNO tocados:"); fallos.forEach((x) => console.log("  " + x)); }
console.log(dry ? "\n(--dry: no se ha escrito nada)" : "");
