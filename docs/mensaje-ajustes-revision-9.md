Respuesta de Susana a tu salida de la revisión 7 (3 sep, noche). Tenías razón en
parar: 16 de las 42 piezas nunca fueron «vigente» antes de la revisión 6, y mi
instrucción daba por hecho que sí. Las he revisado una a una. He actualizado
docs/Auditoria_y_especificacion_Hipatia_v3.md (§0, nota de revisión 9, y la regla
de §6.4 completada) y he subido este mismo mensaje a docs/. Haz pull de la rama antes
de empezar. Aplica esto en tu rama del PR #1, commit por bloque, y vuelve a pasar
check-data.js, build.js y medir.js.

Criterio que queda fijado (§6.4): tener enlace es necesario para ser `vigente`,
pero no basta si el dueño tiene cambios pendientes sobre la pieza. La cautela de
«confirma antes de compartir» no baja el estado: eso ya lo dicen
`sale_al_cliente: "con_validacion"` y `citable: "confirmar_por_cuenta"`. Cada campo
responde a una sola pregunta: `estado`, ¿es la versión buena y abre?;
`sale_al_cliente`, ¿se la puedo dar?; `citable`, ¿puedo nombrar al cliente?

K · TRES PIEZAS VUELVEN A «revisar» (conservan su url_documento)

   Las tres tienen cambios pendientes del dueño sobre la propia pieza. Cambia
   `estado` a `"revisar"` y sustituye `nota_de_uso` por el texto de abajo (la nota
   actual es un registro de trabajo, no una instrucción para el comercial). No
   toques ningún otro campo: el enlace se queda, y `momento_comercial` también.

   mod-deck-ejecutivo
     nota_de_uso: «Deck de la práctica para la reunión introductoria (v3, jul 2026).
     Jorge pidió tres cambios que esperan su documento de AT: la slide de AT, la de
     referencias y un anexo de créditos. Sirve para preparar la reunión; no lo envíes
     hasta la versión corregida.»

   corp-exec-global
     nota_de_uso: «Deck corporativo v6 (jul 2026): el que presenta el comercial en
     reunión. Quedan sin cerrar las cifras de la slide 08, el caso UNED y la
     autorización de logos. Preséntalo; no lo envíes en frío.»

   corp-exec-latam
     nota_de_uso: «Edición LATAM del deck corporativo. Pendiente la lectura de Omar
     sobre edición y referencias antes de usarla con un cliente.»

   Commit: «v3: tres piezas con cambios pendientes del dueño vuelven a revisar (revisión 9)»

L · DOS NOTAS DE USO REESCRITAS (siguen «vigente»)

   Su «revisar» de origen era una duda de edición (había versiones legacy), y el
   enlace ya la resuelve: las legacy pasaron a uso interno en la revisión 7. La nota
   actual («confirmar la edición vigente antes de enviarla») ya no es verdad.
   Solo cambia `nota_de_uso`:

   smartops-workplace-ficha
     nota_de_uso: «Ficha de detalle del servicio SmartOPS Workplace: qué es, qué
     incluye y cómo se contrata.»

   smartops-infra-ficha
     nota_de_uso: «Ficha de detalle del servicio SmartOPS Infra: qué es, qué incluye
     y cómo se contrata.»

   Commit: «v3: notas de uso de las dos fichas de servicio SmartOPS»

M · LAS OTRAS 11 DE LAS 16 SE CONFIRMAN EN «vigente» — sin cambios

   Aquí tienes la confirmación explícita que te faltaba. Se quedan exactamente como
   las dejaste (estado, enlace, nota):

   software-modernizacion-sector-banca / -aapp / -industria / -telco
     → `con_validacion` ya obliga a validar antes de compartir.
   smartops-case-ejie / -educacion-ejie / -navantia / -moodle-profuturo / -izenpe
     → `con_validacion` + `confirmar_por_cuenta` ya cubren permiso y referencia.
   dataai-mutua / dataai-mutua-preread
     → igual que los casos SmartOPS.

N · LO QUE NO TE PIDO

   - No toques la regla de portada de build.js (§6.3). Con el bloque K la tarjeta de
     Software Development pasa sola a `mod-onepager` (mismo momento «reunión», misma
     fecha jul 2026; `mod-deck-ejecutivo` deja de ser candidato al bajar a revisar) y
     la tarjeta corporativa sigue enseñando el Executive Deck con el chip «revisar»
     y el botón «Abrir el documento», porque `deckCorporativo()` ordena por estado
     pero no filtra. Es el resultado que quiero; coincide con el mockup de portada.
   - No cambies `sale_al_cliente`, `zona`, `momento_comercial` ni `citable` de
     ninguna pieza. Las cuatro fichas comerciales sectoriales tienen una duda de
     taxonomía (¿`con_validacion` o interno?) que decido yo después del 10.
   - Sigue aparcado lo de la revisión 7: ni migración de los 42 enlaces ni
     `{ver, descargar[]}`.

O · UN ROTO COSMÉTICO EN LA PORTADA (visible el día 10)

   La tarjeta corporativa de «Lo más reciente, por práctica» lleva el eyebrow
   «Deck corporativo · corporativo», porque `NOMBRE_PRACTICA` en build.js no tiene
   entrada para `corporativo` y cae al id en minúscula. Lo mismo pasa en la
   Biblioteca (eyebrow y opción del filtro «Práctica») y en la ficha de cada pieza
   corporativa («Práctica: corporativo»). Dos cambios mínimos en build.js:
   añade `"corporativo": "Corporativo"` a `NOMBRE_PRACTICA`, y en los dos eyebrows
   (el de la lista de Biblioteca y el de `tarjetaPortada`) imprime solo `m.tipo`
   cuando `m.practica === "corporativo"`, para no leer «Deck corporativo ·
   Corporativo». Nada más en build.js.

   Commit: «v3: nombre de la práctica corporativa en portada, Biblioteca y fichas»

Al terminar: build completo, check-data.js sin errores duros, medir.js en verde y
una captura nueva de la portada a 1440 px sustituyendo la anterior en docs/medicion/.
Comprueba en la portada que (1) la tarjeta de Software Development es
`mod-onepager` y (2) la tarjeta corporativa sigue siendo el Executive Deck con chip
«revisar» — si alguna de las dos sale distinta, o la corporativa aparece como
«material para cliente en preparación», para y pregunta antes de tocar build.js.

   Commit final: «v3: medición y PDF de portada tras revisión 9»
