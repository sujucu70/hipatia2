Revisión 19 (6 sep). He visto el panel en pantalla. Funciona y responde bien
(«que es smartops» da la línea de Smart Operations), pero se ve como un
formulario: tres tipos de letra a la vista, las sugerencias en cajas mono
apiladas que no se entienden («CIO de banca · Modernización» no dice qué va a
pasar al pulsar), el campo de escribir pequeño y el botón más grande que el
campo. Esta revisión son tres bloques: el cierre del peso (si ya lo has hecho
por mi mensaje anterior, sáltalo), las sugerencias, y una segunda pasada del
panel para que sea una pieza del portal y no un widget pegado encima. Sigue sin
push hasta que te confirme el Access.

BM · CIERRE DEL PESO (un commit; si ya está hecho, salta al BN)

   Ni A, ni B, ni C, ni D: la causa es que `pregunta.js` se carga con todas las
   páginas cuando solo hace falta al abrir el panel. Haz lo mismo que ya hace el
   índice: cargarlo bajo demanda.

   1. La pestaña cerrada se queda como está (HTML en el fragmento, CSS en
      `styles.css`). En el fragmento, un `<script>` inline de unas pocas líneas:
      al primer clic o al primer foco en la pestaña, inserta
      `<script src="/pregunta.js">` y, cuando carga, `pregunta.js` abre el panel
      solo, con el foco en el campo, y pide el índice. Sin `document.write`. Si
      el script no carga, la pestaña lleva a `/materiales/`, que es donde está la
      búsqueda de siempre. El panel, el Esc y la memoria de sesión no cambian.
   2. `pregunta.js` se queda a 16 KB, legible; el ≤ 12 era objetivo, no umbral.
      Nada de esbuild en el build.
   3. `medir.js`: el peso de página vuelve a contar solo lo que carga con la
      página (HTML + styles.css + app.js, con el inline de la pestaña dentro del
      HTML). `pregunta.js` pasa a la línea aparte, con el índice: «Pregunta a
      Hipatia: índice 45 KB · pregunta.js 16 KB · los dos bajo demanda». Añade
      esa frase a la nota de §0 y al bloque de CLAUDE.md.
   4. El índice a 45 KB está dentro del umbral. Si quitando `url` de las piezas
      (se deriva del id) y `subtipo` y `citable` cuando son nulos baja de 40,
      hazlo en el mismo commit; si no, se queda.

   Commit: «v4: pregunta.js bajo demanda; peso de página en verde (revisión 18)».
   Sacar Archivo y legacy de `/materiales/todo/` sigue siendo cosa de después
   del 10, como quedó en la 17.

BN · SUGERENCIAS Y LA ENTRADA CORPORATIVA

   1. Las tres sugerencias pasan a ser preguntas escritas tal cual, una por
      intención, y lo que se ve es exactamente lo que se manda al pulsar:
        «Deck corporativo»                       → material
        «A quién llamo por infraestructura»      → persona
        «Qué es Process Intelligence»            → definición
      Fuera «CIO de banca · Modernización» como sugerencia. La pregunta larga
      sigue en `preguntas.json` como prueba: el motor no cambia por esto.

   2. Para que «deck corporativo» responda «Para Entelgy · corporativo tienes 2
      piezas» y no «Con “deck corporativo” tengo 11», el índice gana una entrada
      más en `entradas`: `{ id: "corporativo", clase: "practica", nombre:
      "Entelgy · corporativo", practica: "corporativo", linea:
      <entelgy_una_frase de corporativo.json>, comercial: null, tecnico: null,
      url: "/entelgy/" }`. Con ella, «qué es entelgy» responde con la frase de
      Entelgy y «Ver la página →» a `/entelgy/`. Saca «entelgy» de la lista de
      palabras vacías. Si una entrada tiene `comercial` nulo y cae en la
      intención persona, la respuesta es la de «sin resultados» (no hay a quién
      llamar por lo corporativo).

   3. Dos remates del motor que he visto probando en seco:
        - Asunto: cuando la solución detectada es la única de su práctica o la
          pieza es de práctica (`solucion` nulo), esas piezas también suman el +3
          si su `practica` es la de la solución. Sin esto, «qué le enseño a un
          cio sobre data intelligence» daba las referencias antes que el deck de
          producto, el one-pager y la ficha, que cuelgan de la práctica y no de
          la solución. Con esto, da el deck primero.
        - Con las dos cosas de arriba, «deck corporativo» da el Executive Deck
          (revisar) y luego el de LATAM; «qué le enseño a un cio de banca sobre
          modernización» sigue dando el deck y luego la ficha Banca.

   4. `data/preguntas.json` gana dos filas (las cinco de la 18 se quedan):
        { "pregunta": "deck corporativo", "intencion": "material",
          "primero": "corp-exec-global" }
        { "pregunta": "qué es entelgy", "intencion": "definicion",
          "primero": "corporativo" }

BO · EL PANEL, SEGUNDA PASADA

   Una sola idea: el panel es una tarjeta de contenido del portal (E6), con la
   misma jerarquía que una ficha de pieza, no un formulario. Todo con los tokens
   que hay; ningún color ni fuente nuevos.

   1. Tipografía. Una familia para el texto: la del cuerpo (Roboto). Mono solo
      en tres sitios, como en el resto del portal: el eyebrow de cabecera con su
      regla, «cerrar ×», y las filas de metadatos de las respuestas (eyebrow de
      pieza, «Ver ficha →», dueño). Fuera el mono de las sugerencias y de la
      línea de pie. Los titulares de respuesta (título de la pieza, nombre de la
      persona) en la display, Barlow Condensed, a 24 (el H3 de E1).

   2. Medidas. 400 px de ancho en escritorio (era 380), padding 24, separación
      de 16 entre bloques y 8 dentro. En móvil, todo el ancho menos 12 px por
      lado, alto máximo 80 vh, con cabecera y campo fijos y solo la zona de
      respuesta desplazable.

   3. Orden vertical, de arriba abajo:
        a. Cabecera: eyebrow con regla «Pregunta a Hipatia» (morado 700) a la
           izquierda, «cerrar ×» en mono a la derecha. Como está.
        b. El campo, justo debajo: es una búsqueda, no un chat, y hay una sola
           respuesta cada vez, así que lo primero que se ve al abrir es donde se
           escribe. Una fila: campo `flex: 1`, 44 px de alto, Roboto 16 (a 16 el
           móvil no hace zoom), borde 1 px `--color-border-strong`, `radius-md`,
           placeholder «Escribe tu pregunta» en `--color-slate-500`, foco con
           contorno de 2 px morado; y pegado a la derecha el botón «Buscar»,
           navy, 44 px, Roboto 14 medium, `radius-md`, sin borde. Mismos
           radios, misma altura: se leen como una sola pieza.
        c. Una línea en 14, `--color-text-secondary`: «Responde con lo que hay en
           el portal. Si no lo tiene, te lo dice.»
        d. Las tres sugerencias como enlaces de texto (`text-link`, 14), uno por
           línea, con «→» delante; sin cajas, sin etiqueta encima. Al pulsar,
           la pregunta se escribe en el campo y se responde.
        e. La zona de respuesta: filete superior de 1 px `--color-border-subtle`,
           `min-height` 96 px para que el panel no salte con la primera
           respuesta, `aria-live="polite"`. Vacía al abrir por primera vez.
      Fuera la línea de pie «No inventa: responde solo con lo que está en el
      portal.»: la línea c ya lo dice, y dos avisos en 400 px son ruido. Si
      Susana la quiere de vuelta, va en mono 11 `--color-text-secondary` al pie,
      no en cuerpo 16 como ahora.

   4. Las respuestas, dentro de la zona:
        Material: primera línea en 15 `--color-text-secondary` («Para
          Modernización de aplicaciones en Banca tienes 17 piezas. Empieza por
          esta.»). Debajo, la pieza como tarjeta ligera de biblioteca (E9:
          borde 1 px `--color-border-subtle`, `radius-md`, padding 16; sin borde
          superior morado, que ya lo lleva el panel): eyebrow mono 11 «Tipo ·
          Subtipo · Práctica», título en display 24 enlazado a la ficha, la
          línea en 14, chip solo si es excepción, y la fila mono 11 con «Ver
          ficha →» a la izquierda y el dueño a la derecha. Luego «También:» en
          14 con hasta tres enlaces de texto, uno por línea, «Tipo · Título» y
          su chip si es excepción. Y, si las hay, el eyebrow mono «Para
          prepararte» con hasta dos enlaces.
        Persona: nombre en display 24, la línea de título y lo que lleva en 14,
          la fila mono con el correo o «ver en Contactos →».
        Definición: la línea entre comillas latinas en 16, y debajo «Ver la
          página →» en mono 11 (`.ver-ficha`), no como enlace en línea.
        Sin resultados: el texto de la 18, en 15.

   5. La pestaña cerrada no cambia.

   Commit: «v4: sugerencias nuevas, entrada corporativa y segunda pasada del
   panel (revisión 19)». Si prefieres dos, separa BN de BO.

BP · LO QUE NO TE PIDO

   - Nada en la rama de la v3, nada en `data/*.json` salvo `preguntas.json`,
     nada fuera del panel y de `pregunta.js`, `build.js` (índice y fragmento),
     `styles.css`, `medir.js`, `check-pregunta.js` y `CLAUDE.md`.
   - Ningún icono, ilustración, animación ni color nuevo. Nada de sombras dentro
     del panel.
   - No toques la pestaña cerrada ni la anatomía del panel a 390 más allá de lo
     que dice BO.2.

Al terminar: build, `check-data.js` y `check-pregunta.js` (7/7) sin errores;
`medir --all` en verde en los seis criterios, sin dejar las capturas de ruta en
el commit; las diez capturas del widget regeneradas en `docs/medicion/` (portada
cerrada; portada con cada una de las tres sugerencias respondida; ficha del deck
con el panel abierto; 1440 y 390), más una de «qué es entelgy». Para y dime si
alguna página pasa de 150 KB o si a 390 el campo y el botón no caben en una
fila. Sin push hasta que te diga que el Access está.
