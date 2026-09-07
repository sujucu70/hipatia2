Ajustes tras revisar la build de la revisión 5 (revisión 6 de la especificación, 3 sep
noche). Aplícalos en tu rama del PR #1, un commit por bloque, y vuelve a pasar
check-data.js, build.js y medir.js al final. He actualizado
docs/Auditoria_y_especificacion_Hipatia_v3.md (§0 nota de revisión 6, §6.4) y el mockup
de docs/mockup-portada/ con el titular nuevo.

E · TITULAR DE PORTADA (ya aplicado en datos y mockup)

   - Ya he cambiado `data/corporativo.json` → `portada.titular` al texto nuevo: «Entelgy
     responde de que tecnología, procesos, personas y cultura avancen juntos hasta el
     resultado.» (99 caracteres). También actualicé `docs/mockup-portada/Main.dc.html` y
     `preview.html` con el mismo texto. No toques el dato; solo reconstruye (`build.js`)
     para que la portada lo recoja y compruébalo en la captura.
   - El `preview.png` del mockup se quedó con el titular viejo (es una imagen estática);
     ignóralo como fuente, el `.dc.html` manda.
   - Commit: «v3: titular de portada afinado (revisión 6)»

F · REGLA DE VIGENCIA REQUIERE ENLACE (corrección de datos, no de diseño)

   - Hoy la biblioteca tiene 88 piezas y solo 3 tienen `url_documento` (las tres de
     Modernización: one-pager, ficha de servicio, autodiagnóstico). Hay 26 piezas
     marcadas `estado: "vigente"` con `sale_al_cliente: "si"` que no tienen documento
     enlazado — el resto del material de las cuatro prácticas que no son Modernización
     (SmartOPS, Process Intelligence, Digital Change, Data Intelligence, Software
     Development). Con la regla de portada de la revisión 5 («sale_al_cliente = sí» +
     «estado = vigente»), la portada las estaba mostrando en «Lo más reciente, por
     práctica» aunque al pulsarlas dicen «enlace pendiente»: cinco de las seis piezas
     de portada no abren nada.
   - Regla nueva (ya está en §6.4 de la especificación): una pieza solo puede llevar
     `estado: "vigente"` si tiene `url_documento`. Reclasifica automáticamente a
     `estado: "revisar"` toda pieza que hoy sea `vigente` y no tenga `url_documento`
     (las 26 que listo abajo). No inventes fecha de revisión ni URL; si no tiene fecha,
     que siga sin fecha («revisar · sin fecha» es honesto, «vigente · sin fecha» no).
   - Con este cambio, vuelve a correr la regla de portada de la revisión 5: probablemente
     te quede solo el one-pager de Modernización (o ninguna si su `momento` no es
     `reunión` y hay algo mejor) más el deck corporativo, y el resto de tarjetas de
     práctica dirán «material para cliente en preparación · dueño: <SM>». Es el
     resultado correcto — la portada no puede prometer seis piezas cuando solo hay una
     con documento real.
   - Las 26 piezas a reclasificar (`estado: "vigente"` → `"revisar"`, sin tocar nada
     más): smartops-resumen, smartops-workplace, smartops-infra,
     smartops-onepager-workplace, smartops-onepager-infra,
     software-mantenimiento-onepager, software-mantenimiento-ficha,
     software-asistencia-onepager, software-asistencia-ficha, process-deck,
     process-onepager, process-ficha, digital-change-deck, iability-onepager,
     iability-ficha, preservia-publico, preservia-privado, preservia-ficha,
     ogh-onepager, ogh-ficha, dataai-producto, dataai-onepager, dataai-ficha,
     automation-deck, automation-onepager, automation-ficha.
   - Commit: «v3: piezas sin url_documento no pueden ser vigentes (26 piezas)»

G · CORNER WK (cerrado, sin acción de datos)

   - Ya lo comprobé: `[INTERNO] Corner WK 2023 · Azure.pptx` es material interno de
     Jorge (carpeta «4 · Arquitectura y Cloud»), no un caso citable. No existe como
     pieza en el catálogo actual y no debe añadirse como referencia ni como «confirmar
     por cuenta» — no es material para cliente. No hace falta que toques nada; lo dejo
     anotado para que quede cerrado y no vuelva a aparecer como pendiente.

H · LO QUE NO TE PIDO TODAVÍA (para que no te descuadres)

   - No busques ni inventes `url_documento` para las 26 piezas de F, ni subas ficheros a
     `public/`. El resto de los originales están en mi Drive y todavía no hemos decidido
     dónde va a vivir el material servido desde el portal (Hipatia/SharePoint, alojado
     en el propio Worker, o mixto) — eso es una decisión mía pendiente, fuera de este
     bloque. Cuando esté resuelta te llega su propio mensaje.

Al terminar: build completo, medir.js en verde, y una captura de la portada a 1440 px
en docs/medicion/ para que la revise (sustituye a la anterior). Dime cuántas tarjetas de
práctica quedan con «en preparación» tras el bloque F — lo espero, quiero verlo con mis
propios ojos antes de decidir el resto.
