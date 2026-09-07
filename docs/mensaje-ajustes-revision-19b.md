Revisión 19b (7 sep). La 19 está bien: el panel ya se lee como una pieza del
portal. Un cambio pequeño en las sugerencias y dos remates del motor que salen
de probarlo, un solo commit. Sigue sin push hasta que te confirme el Access.

BQ · LA PRIMERA SUGERENCIA, EN LENGUAJE NATURAL

   1. La primera sugerencia pasa de «deck corporativo» a «última versión de la
      presentación corporativa». Como en las otras dos, el texto del enlace es
      la pregunta que se manda. Las otras dos no cambian.

   2. Para que esa pregunta caiga en el Executive Deck hacen falta dos cosas en
      el motor:
        - Un grupo de sinónimos más: deck · decks · presentación · presentaciones
          · ppt · powerpoint · slides.
        - Palabras vacías nuevas: última, último, versión, nueva, nuevo, actual,
          vigente. La vigencia la pone el orden por `estado`, no la pregunta;
          y «versión» sola casaba con las piezas de «Versión anterior», justo
          las de archivo.

   3. Con «presentación» como sinónimo aparece un choque del casado por prefijo
      de cinco letras: «prese» casa con «presentación» y con «PreservIA», y
      «deck corporativo» pasaba a responder con PreservIA. La regla de casado
      cambia a esta: dos palabras casan si comparten un prefijo de al menos
      cinco letras que cubre la más corta salvo, como mucho, sus dos últimas
      letras; las palabras de menos de cinco letras siguen casando enteras.
      Así «corporativa» casa con «corporativo», «modernización» con
      «modernizar» y «fichas» con «ficha», pero «presentación» no casa con
      «PreservIA» ni «cio» con «ciclo». Sustituye la regla en `pregunta.js` y
      en la nota de §0 donde la describe.

   4. `data/preguntas.json` gana una fila (las siete se quedan):
        { "pregunta": "última versión de la presentación corporativa",
          "intencion": "material", "primero": "corp-exec-global" }

   Lo he probado en seco con los datos de hoy: las ocho caen donde se espera, y
   de paso «presentación de process intelligence» da el deck de la práctica,
   «última presentación de smart operations» da el resumen ejecutivo y «decks
   para aapp» da los cuatro decks de práctica. La respuesta a la sugerencia
   nueva enseña el chip «revisar» del Executive Deck: es lo que hay, no lo
   escondas.

   Commit: «v4: sugerencia 1 en lenguaje natural, sinónimos de deck y casado por
   prefijo compartido (revisión 19b)».

Al terminar: build, `check-data.js` y `check-pregunta.js` (8/8) sin errores;
`medir --all` en verde, sin dejar las capturas de ruta en el commit; las dos
capturas de la primera sugerencia respondida (1440 y 390) regeneradas. Para y
dime si alguna de las ocho no cae en su intención o en su primer resultado.
