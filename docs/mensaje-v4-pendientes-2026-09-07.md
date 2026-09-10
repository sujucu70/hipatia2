Revisiones 19b, 20 y 21 (7 sep), en un solo mensaje. La v4 ya está en
hipatia-v4.guberna.es y la he recorrido: la 19 se ve bien y el panel responde.
Desde hoy la rama `claude/hipatia-v4-asistente` es la base: todo el trabajo va
ahí, cada commit se empuja como hacíamos en la v3, y la rama de la v3 se queda
congelada tal como está (hipatia-v3.guberna.es la sigue sirviendo hasta que
decidamos apagarla). La regla de «sin push» de la 18 ya no aplica. Haz pull de
la v4 antes: hay un commit mío con la foto de Carmen
(`public/assets/personas/carmen-rode.jpg`) que necesitas para la 20. Tres
bloques, tres commits, en este orden. Al final, empuja y pásame la URL de la
build.

BQ · LA PRIMERA SUGERENCIA, EN LENGUAJE NATURAL (revisión 19b)

   1. La primera sugerencia del panel pasa de «deck corporativo» a «última
      versión de la presentación corporativa». Como en las otras dos, el texto
      del enlace es la pregunta que se manda. Las otras dos no cambian.

   2. Para que esa pregunta caiga en el Executive Deck, dos cosas en el motor:
        - Un grupo de sinónimos más: deck · decks · presentación · presentaciones
          · ppt · powerpoint · slides.
        - Palabras vacías nuevas: última, último, versión, nueva, nuevo, actual,
          vigente. La vigencia la pone el orden por `estado`, no la pregunta; y
          «versión» sola casaba con las piezas de «Versión anterior», las de
          archivo.

   3. Con «presentación» como sinónimo aparece un choque del casado por prefijo
      de cinco letras: «prese» casa con «presentación» y con «PreservIA», y
      «deck corporativo» pasaba a responder con PreservIA. La regla de casado
      cambia a esta: dos palabras casan si comparten un prefijo de al menos
      cinco letras que cubre la más corta salvo, como mucho, sus dos últimas
      letras; las de menos de cinco letras siguen casando enteras. Así
      «corporativa» casa con «corporativo», «modernización» con «modernizar» y
      «fichas» con «ficha», pero «presentación» no casa con «PreservIA» ni
      «cio» con «ciclo». Sustituye la regla en `pregunta.js` y en la nota de §0
      donde la describe.

   4. `data/preguntas.json` gana una fila:
        { "pregunta": "última versión de la presentación corporativa",
          "intencion": "material", "primero": "corp-exec-global" }
      La respuesta enseña el chip «revisar» del Executive Deck: es lo que hay.

   Commit: «v4: sugerencia 1 en lenguaje natural, sinónimos de deck y casado por
   prefijo compartido (revisión 19b)».

BR · PROCESS INTELLIGENCE SEGÚN CARMEN (revisión 20)

   Carmen Rode ha leído su página y ha contestado. Es la primera Solution
   Manager que da por buena su solución. Un commit con datos y una foto, sin
   nada más dentro.

   1. El precio del diagnóstico sale de la página de la práctica y se queda solo
      en la solución: el 15–20 K€ vale para minería de procesos, pero en la
      página común con Carla lleva a confusión con el servicio que están
      montando juntas (Process Intelligence as a Service, que es servicio y no
      proyecto). En `data/process-intelligence.json`, `primer_avance.nota` de la
      práctica pasa a:
        «Con minería si el proceso deja rastro en los sistemas (Carmen Rode) y a
        mano si no lo deja (Carla González). Baseline medida en horas y tareas,
        mejoras priorizadas y retorno estimado. Alcance y precio, con la
        responsable de cada solución.»
      En la solución Inteligencia de procesos no cambia nada: el 15–20 K€ del
      `primer_paso` y la escalera de compra de «Para prepararte» se quedan.

   2. Contacto técnico de Inteligencia de procesos: Raúl Duque. En
      `data/personas.json`, entrada nueva detrás de Carla:
        { "id": "raul-duque", "nombre": "Raúl Duque", "titulo": "Líder Técnico
          Process Intelligence", "correo": "raul.duque@entelgy.com",
          "telefono": null, "teams": null, "practica": "process-intelligence",
          "foto": null }
      y en la solución `process-mining`, `contactos.tecnico: "raul-duque"`.
      Automatización se queda con técnico nulo hasta que Carla diga.

   3. Datos de Carmen en su entrada de `personas.json`: `titulo` «Process
      Intelligence Manager», `correo` «carmen.rode@entelgy.com», `telefono`
      «+34 608 310 918», `foto` «/assets/personas/carmen-rode.jpg».

   4. La foto ya está en la rama, en mi commit
      (`public/assets/personas/carmen-rode.jpg`, cuadrada, 400 px, 23 KB, como
      pide BD.1 de la 16). Se pinta donde ya pinta `avatar()`: tabla «A quién
      llamo» y tarjeta de persona de `/contactos/`.

   5. Inteligencia de procesos deja de estar «en revisión por el área»: Carmen
      ha confirmado «Por qué Entelgy» (Partner Gold de Celonis, más de cincuenta
      proyectos en España, Chile y Colombia, Inverbis-GBTEC con ese nombre), los
      precios visibles y las referencias tal como están (Lanbide citable con su
      sign-off del 21-ago; Universidad LATAM y la cartera por sectores como
      «confirmar por cuenta» hasta su F1). Quita el objeto `pendiente` de
      `process-mining`, como no lo tiene Modernización. El `pendiente` de
      Automatización (Carla) no se toca.

   6. `data/preguntas.json` gana otra fila (nueve en total):
        { "pregunta": "a quién llamo por process intelligence",
          "intencion": "persona", "primero": "carmen-rode" }
      Con los correos nuevos, esa pregunta responde con «carmen.rode@entelgy.com
      · escribir →» y «Técnico: Raúl Duque.»; el índice se regenera con el build.

   Commit: «v4: Process Intelligence según Carmen: precio solo en la solución,
   Raúl Duque técnico, datos y foto de Carmen (revisión 20)».

BT · LO QUE SALE DE LA REUNIÓN DEL 7 CON MIGUEL ÁNGEL Y ROBERTO (revisión 21)

   Roberto es el comercial que presentará Hipatia el día 10, en siete minutos.
   Tres cambios pequeños, un commit.

   1. Portada, cabecera de «La oferta». El marco que Miguel Ángel quiere que la
      fuerza comercial perciba es «un método, cinco prácticas». El H2 pasa de
      «Cinco prácticas. Una forma de elegir por dónde empezar.» a:
        «Un método, cinco prácticas. Elige por dónde empezar.»
      En `build.js`, `portadaPage`, la llamada a `sectionHead("La oferta", …)`.
      El eyebrow y la nota de la derecha no cambian.

   2. `/entelgy/`, el hero. Roberto teme que quien entre a leer de arriba abajo
      no llegue nunca a la presentación corporativa, que está al final. Lo
      acordado es sutil, no mover el deck: una línea más en el hero, debajo del
      lede, con la misma anatomía que la de las prácticas («Responsable: … ·
      Material para cliente ↓», mono, morado 300 sobre navy):
        «Presentación corporativa: Abrir en pantalla ↗ · Ver la pieza ↓»
      «Abrir en pantalla ↗» va al `url_documento` del deck corporativo (el
      primer id de `relato.material.ids`, hoy `corp-exec-global`); «Ver la
      pieza ↓» ancla a la sección del material, que gana `id="material"`. Si el
      deck no tuviera `url_documento`, solo se pinta «Ver la pieza ↓».

   3. Pregunta a Hipatia, eyebrow de la pieza. La respuesta a «deck corporativo»
      pinta «Deck · Corporativo · Entelgy · corporativo»: tipo, subtipo y
      práctica dicen lo mismo tres veces. Cuando la `practica` de la pieza es
      `corporativo`, el eyebrow no lleva el tramo de práctica: «Deck ·
      Corporativo». Las demás piezas siguen con «Tipo · Subtipo · Práctica».

   Commit: «v4: un método y cinco prácticas en portada, presentación
   corporativa desde el hero de /entelgy/, eyebrow corporativo en Pregunta a
   Hipatia (revisión 21)».

BU · LO QUE NO TE PIDO

   - Nada en la página de Automatización ni en las piezas de Carla; Process
     Intelligence as a Service no entra (contenido nuevo, después del 10).
   - El orden de las cinco prácticas se queda como está: lo decide Miguel Ángel.
   - Nada en las páginas de práctica: su hero ya lleva «Material para cliente ↓».
   - El visor de los decks de Claude Design (los «Abrir en pantalla ↗» hacia
     entelgy.guberna.es) no es de este repo.
   - Ningún cambio de estructura, color ni copy fuera de lo dicho.

Al terminar: build, `check-data.js` y `check-pregunta.js` (9/9) sin errores;
`medir --all` en verde, sin dejar las capturas de ruta en el commit; capturas a
1440 y 390 de portada, `/entelgy/` (la línea nueva del hero en una sola línea a
1440 y en dos a 390, sin pisar el lede), `/practicas/process-intelligence/` y
`/contactos/` (la foto de Carmen en la tabla y en su tarjeta), más las dos de la
primera sugerencia respondida. Para y dime si alguna de las nueve preguntas no
cae en su intención o en su primer resultado, si la foto se ve mal a 32 y 48 px,
o si `check-data` protesta por la entrada nueva.
