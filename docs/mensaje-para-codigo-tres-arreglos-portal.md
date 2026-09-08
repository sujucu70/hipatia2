# Tres arreglos del portal · para Código (hilo nuevo)

Rama de trabajo: `claude/hipatia-v4-asistente` (la actual). Un commit por tarea.
Fecha: 8 de septiembre de 2026. **La T1 tiene que estar el miércoles 9**: Susana captura pantalla el mismo día para la presentación que Roberto da el jueves 10.

Lee antes `CLAUDE.md` del repo. Manda sobre todo lo de abajo.

---

## De dónde sale esto

Reunión de feedback con Alfredo Zurdo (Digital Change) el 8 de septiembre. Tres cosas que dijo mirando el portal en pantalla, y que no son de su área: son del portal entero.

1. La slide «¿Por dónde empezamos?» del deck corporativo se lee como un proceso secuencial. No lo es.
2. Una vez abierto un material, no hay forma de volver. Escape no hace nada; acabó usando el botón atrás del navegador.
3. Los materiales tienen que poder descargarse en PDF y en formato editable, no solo verse.

Notas completas en `Alfredo/alfredo-tareas-2026-09-08.md`.

---

## T0 · Traer los ficheros al portal (va primero)

### Por qué antes que nada

Hoy 44 de los 47 materiales con documento abren contra `https://entelgy.guberna.es/…`. Ese es el hub de trabajo de Guberna: **muere el 30 de septiembre**, cuando acaba la colaboración. El portal que sobrevive es este repo, así que el fichero bueno de cada material tiene que vivir aquí.

De ahí una regla que manda sobre todo lo que sigue:

> **`../Entelgy/` es origen de solo lectura.** Se copia desde ahí y no se edita nada dentro. Todo cambio sobre un material se hace sobre la copia de `public/archivos/`. Si se edita en los dos sitios, las dos versiones divergen en cuanto alguien vuelva a copiar.

### T0a · El deck corporativo, solo (miércoles 9)

Para no meter una copia de 137 MB en el camino crítico de la presentación, primero se trae un fichero:

```
../Entelgy/corporativo/decks/Entelgy_Executive_Deck.html
  → public/archivos/corporativo/decks/Entelgy_Executive_Deck.html
```

Son 4,65 MB. Y con él sus dos hermanos, `.pdf` y `.pptx`, que son 12,7 MB más. Actualiza `url_documento` de `corp-exec-global` a `/archivos/corporativo/decks/Entelgy_Executive_Deck.html`.

Sobre esa copia se hace T1.

### T0b · El resto

Todo lo demás va con el mismo criterio de espejar la ruta; el detalle está en T3.

**No hay que moverlo todo antes de empezar.** La copia es material a material y el script es idempotente, así que el portal aguanta perfectamente con unos materiales sirviéndose de `/archivos/` y otros todavía apuntando al hub. La prueba está hecha: `mod-autodiagnostico`, `mod-onepager` y `mod-ficha-servicio` ya viven en `public/` y conviven sin problema con los 44 que apuntan fuera.

**Pero hay una dependencia real y no es la que parece.** La barra de vuelta de T2 se inyecta *dentro* de cada HTML de material. Si se inyecta en los ficheros del hub, se está escribiendo en la carpeta de solo lectura y además ese trabajo se pierde en cuanto se copie encima. Con lo cual: **la copia completa va antes que T2 capa B, no después.** Está reflejado en el orden de commits del final.

Lo que no depende de nada: T1 (le basta con el deck copiado en T0a) y T2 capa A (abrir en pestaña nueva funciona apunte el enlace a donde apunte).

---

## T1 · La slide «¿Por dónde empezamos?»

### El problema

Diapositiva 10/24 del deck corporativo. Arriba está el método —cinco estaciones numeradas 01 a 05 unidas por una línea con flechas— y justo debajo, las cinco áreas de negocio, **también numeradas 01 a 05 y también con flecha**. Alfredo leyó lo segundo como continuación de lo primero:

> «Yo lo que veo es que eso es un proceso. Primero hago inteligencia de procesos, flecha, luego 02, hago el ciclo de software, flecha, luego hago 03… En la misma diapositiva donde explicas el método con cinco pasos y sus flechas, es psicológicamente confuso.»

El método sí es secuencial y su numeración se queda como está. Las cinco áreas no lo son: se elige una, la que le duela al cliente.

### El fichero, y por qué no se edita a mano

`public/archivos/corporativo/decks/Entelgy_Executive_Deck.html` — 4,8 MB, 213 líneas. La copia que trae T0a, no la del hub: en `../Entelgy/` no se toca nada.

**Es un bundle autoextraíble.** El markup real de las diapositivas no está en el HTML: vive como cadena JSON en la línea 210, dentro de `<script type="__bundler/template">`. Los assets van en base64 en la línea 202. Al cargar, un script de arranque descomprime, sustituye UUIDs por blob URLs y reemplaza el documento entero.

Con lo cual: **nada de sed ni de editar el fichero como texto.** El procedimiento es

1. leer el fichero y partirlo por `\n`;
2. `json.loads()` de la línea 210 (índice 209) → devuelve el HTML real, unos 256 KB;
3. editar ese HTML;
4. `json.dumps(tpl, ensure_ascii=False)` y escribir de vuelta esa línea;
5. dejar el resto del fichero intacto, byte a byte.

Escribe el script en `scripts/` para que se pueda repetir. No reformatees el fichero.

### Qué hay que cambiar

Dentro del bloque `.ct-doors` hay cinco `<a class="ct-door">`. Cada uno:

```html
<a class="ct-door" style="--ct-c:#5E3D9B; --ct-bg:#EDE3F7;" href="#pi" data-goto="Process Intelligence">
  <div class="ct-d-head"><span class="ct-d-num">01</span><span class="ct-d-arrow"><i data-lucide="arrow-right"></i></span></div>
  <i class="ct-d-wm" data-lucide="workflow"></i>
  <div class="ct-d-name">Inteligencia de Procesos</div>
  ...
```

**Fuera la numeración. En su hueco, el icono del área.** Cada tarjeta ya tiene su icono como marca de agua (`.ct-d-wm`, opacidad 0,08, esquina). Ese icono sube a la cabecera, en el color del área, y la marca de agua desaparece — no queremos el mismo icono dos veces.

Por tarjeta:

| Área | href | `--ct-c` | icono |
|---|---|---|---|
| Inteligencia de Procesos | `#pi` | `#5E3D9B` | `workflow` |
| Ciclo de Software | `#cs` | `#4D7CA8` | `cpu` |
| Data e IA | `#dai` | `#3A8E63` | `database` |
| Smart Operations | `#so` | `#9E335E` | `cloud` |
| Digital Change | `#dc` | `#C73F00` | `graduation-cap` |

La flecha (`.ct-d-arrow`) **se queda**: ahí no es conector de proceso, es la señal de que la tarjeta se pincha.

Reemplazo por tarjeta:

```html
<div class="ct-d-head"><span class="ct-d-ico"><i data-lucide="workflow"></i></span><span class="ct-d-arrow"><i data-lucide="arrow-right"></i></span></div>
```

…y se borra la línea `<i class="ct-d-wm" data-lucide="…"></i>` de esa tarjeta.

CSS nuevo, junto a la regla `.ct-d-num` (que puede quedarse muerta o borrarse):

```css
.ct-d-ico { width:38px; height:38px; display:flex; align-items:center; justify-content:center; color:var(--ct-c); }
.ct-d-ico svg { width:32px; height:32px; stroke-width:1.75; }
```

Comprueba a ojo si `.ct-d-name { margin-top:16px }` necesita ajuste: el número medía 34px de alto y el icono mide 38. Si baja el nombre y el texto de dolor se sale de la tarjeta (`min-height:274px`), ajusta el margen, no la altura.

### Ojo

- `Entelgy_Executive_Deck_LATAM.html` tiene la misma slide y el mismo problema. **Hazlo también, pero en commit aparte, después de que el principal esté validado y sobre su copia de `public/archivos/`** (la trae T3). El que se presenta el jueves es el global.
- `Entelgy_Executive_Deck_banca.html` no lleva estas puertas. No lo toques.
- El PDF y el PPTX que están al lado **no se regeneran**: Susana captura la pantalla del HTML y edita a mano la presentación de Roberto.
- **Desempaquetar el bundle no entra aquí.** Se podría: son 91 assets (52 PNG, 30 fuentes woff2 —que este repo ya sirve en `public/assets/fonts`—, 7 JS, 1 SVG y 1 JSX) y 250 KB de plantilla; sacarlos a fichero y reescribir los UUID a rutas relativas dejaría el deck editable para siempre. Pero el JSX necesita Babel en tiempo de carga y hoy eso lo resuelve el cargador del bundle. Es una tarea con su propia validación, no algo que se hace dos días antes de una presentación. Anótala y punto.

### Aceptación

Abre el HTML con Playwright (`medir.js` ya lanza Chromium desde `/opt/pw-browsers`), navega a la diapositiva 10 y captura a 1440. Que se vea: cinco tarjetas sin números, cada una con su icono en color arriba a la izquierda, flecha a la derecha, sin marca de agua repetida, y el bloque del método de arriba intacto. Consola sin errores.

---

## T2 · Volver desde un material abierto

### El problema

`materiales.json` tiene 47 materiales con `url_documento`. **44 apuntan a `https://entelgy.guberna.es/…`**, se abren en la misma pestaña y ninguno tiene camino de vuelta. El portal desaparece.

Además esos HTML no los genera `build.js`: vienen de fuera (Claude Design, bundles) y no comparten plantilla. Ninguno escucha la tecla Escape — lo he comprobado en el deck corporativo, no hay un solo `keydown`.

### Dos capas, y el orden importa

**Capa A · pestaña nueva.** En `build.js`, todo enlace que salga hacia un material abre en pestaña nueva. Son las cuatro funciones que ya pintan enlaces: `materialLink()` (línea ~287), `descargasMini()` (~296), `llevatelo()` (~307) y los dos sitios que enlazan `url_documento` a pelo (~762 y ~865).

```html
target="_blank" rel="noopener"
```

Con esto el portal ya no se pierde nunca: cierras la pestaña y sigues donde estabas. Es una línea por sitio y no puede romper nada. **Va primero y va sola en su commit.**

**Capa B · la barra de vuelta.** Script en `scripts/inyectar-volver.js` que mete en cada HTML de material una barra fija con «← Volver a Hipatia» y engancha la tecla Escape.

Reglas del script:

- **Idempotente.** Si el HTML ya contiene `id="hipatia-volver"`, no toca nada y lo dice.
- **Dos formas de inyectar.** Si el fichero contiene `<script type="__bundler/template">`, hay que entrar por el JSON igual que en T1 (son **16 de los 39**: `corp-exec-global`, `corp-exec-latam`, `process-deck`, `digital-change-deck`, `dataai-producto`, `automation-deck`, `mod-deck-ejecutivo`, los cuatro de SmartOPS y los dos one-pagers de PreservIA, entre otros). Los **23 restantes** son HTML plano: inyección directa antes de `</body>`.
- **Autocontenido.** CSS y JS en línea, sin dependencias, sin fuentes externas. Estos ficheros se abren detrás de Cloudflare Access y algunos desde `file://`.
- **Invisible al imprimir:** `@media print { #hipatia-volver { display:none !important } }`. Varios de estos HTML son la fuente de un PDF.

Comportamiento del botón y de Escape:

```js
// si el portal abrió esta pestaña, cerrarla devuelve al portal tal como estaba
if (window.opener && !window.opener.closed) { window.close(); return; }
location.href = PORTAL;   // si no, se navega
```

`PORTAL` es una constante única al principio del snippet: `https://hipatia2.guberna.es/`. **Déjala señalada con un comentario** — cambia el día que Entelgy se lleve esto a su dominio, y no queremos buscarla en 39 ficheros.

Escape: no dispares si hay un `input`, `textarea` o `[contenteditable]` con el foco, si `document.fullscreenElement` no es nulo, o si el evento ya venía con `defaultPrevented`. Alguno de estos materiales puede tener su propia navegación por teclado y no vamos a pisársela.

Sitio de la barra: arriba a la izquierda, fija, discreta, por encima de todo (`z-index` alto). Identidad Entelgy: fondo blanco, borde `#E6E8EA`, texto navy `#041C2C`, y el naranja `#FE5000` solo en el hover. Que no tape el contenido de la primera pantalla.

### Aceptación

- Los 39 HTML llevan la barra; ejecutar el script dos veces no duplica nada.
- Los 16 bundles siguen arrancando: capturas con Playwright de al menos `corp-exec-global`, `process-deck`, `digital-change-deck` y `smartops-workplace`, consola limpia.
- Escape y clic vuelven al portal desde pestaña propia y desde pestaña nueva.
- Al imprimir a PDF, la barra no sale.

---

## T3 · Descargar el material

### El problema

El motor **ya está construido** y sin usar. `build.js` tiene `descargas: [{formato, url, nota}]`, `DESCARGA_LABEL`, `DESCARGA_ORDEN`, `descargasMini()` y el bloque `llevatelo()`. Y **0 de 112 materiales tienen el campo relleno**. No falta código: falta el dato, y faltan los ficheros donde el portal pueda alcanzarlos.

Porque el segundo problema es de dependencia: esos 44 materiales cuelgan de `entelgy.guberna.es`, que es un dominio de Guberna dentro de un portal que es de Entelgy. El día que Susana cierre, el portal se queda sin materiales.

### Decisión tomada

**Los ficheros se copian dentro de `hipatia2/public/` y se sirven desde el mismo Worker.** Un solo origen, sin marca ajena, y migrable de una pieza cuando Entelgy diga dónde va esto. Son 137 MB (46 de HTML, 91 de PDF y PPTX); el repo lo aguanta y el fichero más grande son 13 MB, muy por debajo del límite de Cloudflare.

### Cómo

**1 · Copiar el resto, espejando la ruta.** El deck corporativo ya vino en T0a; esto es todo lo demás. Origen `../Entelgy/`, destino `public/archivos/`, misma estructura:

```
../Entelgy/corporativo/decks/Entelgy_Executive_Deck.html
  → public/archivos/corporativo/decks/Entelgy_Executive_Deck.html
```

Se copia solo lo que el portal enlaza: los 44 ficheros de `url_documento` **y sus hermanos** `.pdf` / `.pptx` / `.docx` / `.xlsx` con el mismo nombre base. Nada más — en la carpeta origen hay 98 HTML y solo 44 están en uso. Script en `scripts/traer-archivos.js`, con la lista que sale de leer `materiales.json`, no escrita a mano; que sea el mismo script de T0a, ejecutado sin filtro. Idempotente: si el destino existe y es idéntico, no lo vuelve a copiar.

**Y una comprobación que importa:** si el destino ya existe pero **difiere** del origen, el script **para y avisa**. Ese es el caso del deck corporativo, que T1 habrá editado. Sobrescribirlo silenciosamente se llevaría por delante la corrección de la slide.

**2 · Reescribir `url_documento`.** `https://entelgy.guberna.es/<ruta>` → `/archivos/<ruta>`. Ojo con el porcentaje-codificado: hay un fichero con espacio en el nombre (`Caso_Exito_DaaS EJIE.pptx`). Decodifica antes de resolver en disco y vuelve a codificar en la URL.

**3 · Rellenar `descargas`.** Para cada material, un elemento por hermano encontrado:

```json
"descargas": [
  { "formato": "pdf",  "url": "/archivos/corporativo/decks/Entelgy_Executive_Deck.pdf" },
  { "formato": "pptx", "url": "/archivos/corporativo/decks/Entelgy_Executive_Deck.pptx" }
]
```

Generado por script contra el disco, nunca a mano. Salen **21 materiales con descarga y 33 ficheros**.

**4 · Un solo prefijo, para poder mudarse.** En `build.js`, `const ARCHIVOS_BASE = process.env.ARCHIVOS_BASE || ""`, antepuesto a toda URL que empiece por `/archivos/`. El día que esto se vaya a R2 o a un dominio de Entelgy, es una variable de entorno y no 47 líneas de JSON.

**5 · Los tres botones.** En la ficha de material, el bloque `llevatelo()` (línea ~300) pasa a tres botones explícitos, en este orden:

```
VER EN NAVEGADOR →     DESCARGAR PDF ↓     DESCARGAR PPTX ↓
```

El primero sólido en verde oscuro de marca, los otros dos con borde y fondo blanco. Mayúsculas, tracking amplio, mismo alto los tres. La etiqueta del tercero sigue al formato que haya: PPTX, DOCX o XLSX. Si un formato no existe, **el botón no se pinta** — nada de botones apagados. Si no hay ninguna descarga, se mantiene lo que ya hace `llevatelo()`: «pídeselo a su dueño» con el `mailto`.

En las tarjetas de listado se quedan los enlaces mini que ya existen (`descargasMini()`). Ahí no caben tres botones.

### Los 18 huecos

Dieciocho materiales no tienen **ningún** fichero descargable, solo el HTML: los cuatro de Mantenimiento y Asistencia, los cuatro de fichas comerciales por sector de Modernización, los tres de Automatización, los tres de Data e IA, `preservia-ficha`, `dataai-mutua-preread` y los dos mapas de dolores de SmartOPS.

**No inventes el PDF en esta tanda.** Generarlos con Playwright es viable —`playwright-core` ya está en el repo y `medir.js` ya lanza Chromium— pero varios de estos HTML no están maquetados para imprimir y saldrían PDF rasterizados de cuatro páginas, que es exactamente el fallo que hubo que arreglar en la ficha de IAbility en julio. Déjalos con el botón de ver y sin botones de descarga, y **abre una nota al final del commit con la lista de los 18**. Es una tarea aparte, con su pasada de `@media print`.

### Aceptación

- `node build.js` sin errores y sin ninguna URL a `entelgy.guberna.es` en el HTML generado. Compruébalo con un grep sobre `public/`.
- Los 44 materiales abren desde `/archivos/…` y devuelven 200.
- Los 21 con descarga pintan sus botones; los 18 sin ella no pintan ninguno.
- `medir.js` completo: capturas a 1440 y 390, contraste AA en los botones nuevos, consola limpia, enlaces vivos.

---

## Orden y commits

1. `v4: el deck corporativo se sirve desde el propio portal` — T0a. Un fichero y sus dos hermanos.
2. `v4: la slide «¿Por dónde empezamos?» deja de leerse como un proceso` — T1 sobre la copia de `public/`. **Miércoles 9, es la que corre.**
3. `v4: los materiales abren en pestaña nueva` — T2 capa A. No depende de nada.
4. `v4: el resto de materiales se sirve desde el propio portal` — T3 pasos 1 a 4.
5. `v4: barra de vuelta a Hipatia y tecla Escape en los materiales` — T2 capa B, **sobre las copias de `public/archivos/`**. Va después de la 4 por eso.
6. `v4: descargar el material en PDF y en formato editable` — T3 paso 5.
7. `v4: misma corrección de la slide en el deck LATAM` — T1 sobre LATAM.

Si el miércoles se tuerce y solo entra una cosa, que sea la 2. Las commits 1 y 2 juntas son un fichero copiado y una slide editada; lo demás puede caer el viernes sin que pase nada.

Susana comitea y despliega desde GitHub Desktop. No hagas push.

## Antes de tocar, pregunta

- Si la edición del bundle de T1 no cuadra —la línea 210 no parsea, el fichero arranca distinto— **para y dilo**. Ese deck se presenta el jueves y no hay copia de trabajo sin empaquetar.
- Si copiar 137 MB revienta algo del despliegue de Cloudflare, dilo antes de seguir en vez de buscar un atajo.
- Si en algún momento te ves editando un fichero dentro de `../Entelgy/`, has tomado el camino equivocado. Esa carpeta se lee, no se escribe.
