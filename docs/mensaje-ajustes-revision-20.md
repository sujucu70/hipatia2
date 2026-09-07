Revisión 20 (7 sep). Carmen Rode ha leído su página en hipatia-v3.guberna.es y
ha contestado. Es la primera Solution Manager que da por buena su solución, y sus
correcciones entran directamente en la rama v4. Un solo commit, con datos y una
foto, sin nada más dentro: si el martes la v4 no entra, ese commit se pasa tal
cual a la rama de la v3. Sigue sin push hasta que te confirme el Access.

BR · PROCESS INTELLIGENCE SEGÚN CARMEN

   1. El precio del diagnóstico sale de la página de la práctica y se queda solo
      en la solución. Carmen: el 15–20 K€ vale para minería de procesos, pero en
      la página común con Carla lleva a confusión con el servicio que están
      montando juntas (Process Intelligence as a Service, que es servicio y no
      proyecto). En `data/process-intelligence.json`, `primer_avance.nota` de la
      práctica pasa a:
        «Con minería si el proceso deja rastro en los sistemas (Carmen Rode) y a
        mano si no lo deja (Carla González). Baseline medida en horas y tareas,
        mejoras priorizadas y retorno estimado. Alcance y precio, con la
        responsable de cada solución.»
      (De paso, nombre y apellido en los dos paréntesis, como en la 17.) En la
      solución Inteligencia de procesos no cambia nada: el 15–20 K€ del
      `primer_paso` y la escalera de compra de «Para prepararte» se quedan; Carmen
      los ha confirmado.

   2. Contacto técnico de Inteligencia de procesos: Raúl Duque. En
      `data/personas.json`, entrada nueva detrás de Carla:
        { "id": "raul-duque", "nombre": "Raúl Duque", "titulo": "Líder Técnico
          Process Intelligence", "correo": "raul.duque@entelgy.com",
          "telefono": null, "teams": null, "practica": "process-intelligence",
          "foto": null }
      y en la solución `process-mining`, `contactos.tecnico: "raul-duque"`.
      Automatización se queda con técnico nulo hasta que Carla diga si Raúl
      también la cubre o es otra persona.

   3. Datos de Carmen, en su entrada de `personas.json`: `titulo` «Process
      Intelligence Manager», `correo` «carmen.rode@entelgy.com», `telefono`
      «+34 608 310 918», `foto` «/assets/personas/carmen-rode.jpg».

   4. La foto. Susana la ha dejado en la rama de la v3, en el mismo commit que
      este mensaje: `public/assets/personas/carmen-rode.jpg` (cuadrada, 400 px,
      23 KB, como pide BD.1 de la 16). Tráete solo ese fichero a la v4:
        git checkout origin/claude/hipatia-v3-static-catalog-49l3yx -- public/assets/personas/carmen-rode.jpg
      Nada más de ese commit. Se pinta donde ya pinta `avatar()`: tabla «A quién
      llamo» y tarjeta de persona de `/contactos/`.

   5. La solución Inteligencia de procesos deja de estar «en revisión por el
      área»: Carmen ha confirmado «Por qué Entelgy» (Partner Gold de Celonis,
      más de cincuenta proyectos en España, Chile y Colombia, Inverbis-GBTEC con
      ese nombre), los precios visibles y las referencias tal como están
      (Lanbide citable con su sign-off del 21-ago; Universidad LATAM y la
      cartera por sectores como «confirmar por cuenta» hasta su F1). Quita el
      objeto `pendiente` de `process-mining`, como no lo tiene Modernización; la
      nota plegada desaparece sola y los chips de las referencias siguen
      diciendo lo suyo. El `pendiente` de Automatización (Carla) no se toca.

   6. Con los correos nuevos, «a quién llamo por process intelligence» en
      Pregunta a Hipatia responde ya con «carmen.rode@entelgy.com · escribir →»
      y «Técnico: Raúl Duque.»; el índice se regenera solo con el build.
      `data/preguntas.json` gana una fila (nueve):
        { "pregunta": "a quién llamo por process intelligence",
          "intencion": "persona", "primero": "carmen-rode" }

   Commit: «v4: Process Intelligence según Carmen: precio solo en la solución,
   Raúl Duque técnico, datos y foto de Carmen (revisión 20)».

BS · LO QUE NO TE PIDO

   - Nada en la página de Automatización ni en las piezas de Carla: su lectura
     está pendiente.
   - Process Intelligence as a Service no entra: es contenido nuevo de Carmen y
     Carla y se escribe con ellas después del 10.
   - Ni un texto nuevo en la solución de Carmen fuera de lo dicho: lo demás lo
     ha dado por bueno tal como está.

Al terminar: build, `check-data.js` y `check-pregunta.js` (9/9) sin errores;
`medir --all` en verde, sin dejar las capturas de ruta en el commit; capturas de
`/practicas/process-intelligence/` y de `/contactos/` a 1440 y 390 (la foto de
Carmen tiene que verse en la tabla y en su tarjeta). Para y dime si la foto pesa
o se ve mal a 32 y 48 px, o si `check-data` protesta por la entrada nueva.
