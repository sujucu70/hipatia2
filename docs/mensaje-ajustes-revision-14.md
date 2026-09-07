Revisión 14 (4 sep, tarde). La 13 está aplicada y desplegada (`6ee3e54`) y la he
verificado contra los documentos: las once soluciones vigentes, 34 referencias con su
citabilidad, momentos y estados como se pidió, personas con correo, los tres cambios de
build.js. Bien hecho. Esta revisión es la capa editorial que el brief describe
(`docs/brief-diseno-editorial.md`, con sus decisiones ya cerradas) más los bloques
nuevos de `/entelgy/`, la biblioteca con nueve tipos y los dueños con apellido, y
arregla las dos cosas que la 13 dejó a medias. Los mocks de `docs/mockup-editorial/`
(portada y `/entelgy/`, HTML autocontenido con el `styles.css` real dentro y una capa
`.ed-*` encima) son la referencia visual: lo que ahí se ve es lo que hay que
construir, con las clases integradas en `styles.css`, no copiadas como capa aparte.
Ningún color ni fuente nuevos: todo dentro de los tokens. Alcance: las cinco páginas,
antes del 10. Si algo no llega, se recorta en este orden: biblioteca, solución,
práctica; portada y `/entelgy/` no se recortan.

Haz pull antes. Commit por bloque, con el texto que se indica. Los textos entre
comillas latinas son el contenido del campo.

AQ · LO QUE LA 13 DEJÓ A MEDIAS

   1. El índice de Materiales. Filtraste el índice a las piezas que salen al cliente
      para cumplir el peso y con eso el filtro «interno» dejó de servir. La decisión de
      Susana: dos índices estáticos. `/materiales/` lista las piezas con
      `sale_al_cliente` en `si` o `con_validacion` (como ahora) y su filtro «Uso» lleva
      una tercera opción «Interno» que no es una casilla sino un enlace a
      `/materiales/todo/`. `/materiales/todo/` lista las 112 con los mismos filtros, la
      casilla «Interno» disponible y un enlace de vuelta «Solo lo que sale al cliente
      →». Ledes: en `/materiales/`, «El material que puedes enseñar o dejar al cliente,
      con su uso, estado y dueño a la vista. Las piezas internas están en Materiales ·
      todo.»; en `/materiales/todo/`, «Todo lo que hay, interno incluido. Lo que sale
      al cliente lleva su chip; lo demás es para prepararte.» Con la tarjeta ligera de
      AU.9 el índice completo debería caber en los 150 KB; si no cabe, para y dime
      cuánto pesa antes de tocar nada más.

   2. `kit.material_interno_nota` existe en nueve soluciones y no se pinta. En
      `solucionPage`, dentro de «Para prepararte», después de la lista de material
      interno (o en su lugar si la lista está vacía): `<p class="footer-note">` con la
      nota. Es donde van los precios internos que Susana decidió visibles.

   3. Dos guías de discovery sin enlace: `smartops-pains-workplace` →
      `https://entelgy.guberna.es/digital-workplace/mapa-pains.html`;
      `smartops-pains-infra` → `https://entelgy.guberna.es/digital-workplace/mapa-pains-infra.html`.
      Las dos son internas; el enlace es para el comercial.

   Commit: «v3: Materiales en dos índices, notas internas visibles, mapas de pains enlazados (revisión 14)»

AR · BIBLIOTECA · NUEVE TIPOS Y SUBTIPO

   Hoy hay 30 valores de `tipo` para 112 piezas y el filtro se genera de lo que hay.
   Vocabulario cerrado, nueve valores, con mayúscula inicial: «Deck», «One-pager»,
   «Ficha», «Referencia», «Guía de discovery», «Guía interna», «Plantilla»,
   «Herramienta», «Archivo». Y un campo nuevo `subtipo` (texto libre, opcional) que se
   pinta junto al tipo y entra en la búsqueda, pero no filtra.

   1. `data/materiales.json`, mapeo de cada valor actual (la tabla completa, con los
      subtipos por pieza, está en `docs/notas-susana-revision-14.md`, N1):
        deck · Deck · Deck ejecutivo · Deck cliente · Deck corporativo · Deck
          corporativo regional · Deck / caso · Pre-read / caso → «Deck»
          (subtipos: «Ejecutivo», «Corporativo», «Corporativo · LATAM», «Cliente»,
          «Técnico», «Práctica», «Vertical», «Primer contacto · Mutua», «Pre-read ·
          Mutua»)
        one-pager · One-pager · One-pager sectorial → «One-pager» (subtipo «Sector
          público» / «Sector privado» en los dos de PreservIA)
        ficha · Ficha de servicio · Ficha comercial sectorial → «Ficha» (subtipos «De
          servicio»; «Sectorial · Banca / AAPP / Industria / Telco»)
        referencia → «Referencia» (sin subtipo; el sector va en `sector[]`)
        guía de discovery · Guía de discovery → «Guía de discovery» (subtipo «Mapa de
          pains»)
        guía interna · Guía interna · análisis interno · Análisis interno ·
          Repositorio de referencias · Tarjeta comercial · Mapa corporativo ·
          formación → «Guía interna» (subtipos «Mensajes clave», «Objeciones»,
          «Argumentario», «Análisis de competencia», «Previo del área», «Repositorio
          de referencias», «Tarjeta de entrada», «Diagrama de portfolio», «Rol-play»)
        plantilla · plantilla de correo → «Plantilla» (subtipos «Correo de apertura»,
          «Business case»)
        herramienta → «Herramienta» (subtipo «Autodiagnóstico»)
        Archivo · Entrada de práctica · Entrada de subpráctica → «Archivo» (subtipos
          «Entrada editorial de hipatia2», «Versión anterior»)

   2. build.js: (a) las comparaciones con «referencia» (`chipPrincipal`, «sin
      documento aparte», la ficha de pieza, la regla de portada `m.tipo !==
      "referencia"`) pasan a «Referencia»; (b) la regla del deck corporativo en portada
      deja el `/deck corporativo/i` y elige `m.id === "corp-exec-global"`; (c) el
      filtro «Tipo» de los dos índices es la lista fija de nueve en ese orden, no
      derivada de los datos; (d) el eyebrow de tarjeta y de ficha de pieza pinta
      `tipo` y, si hay, ` · subtipo`; la fila «Tipo» de la ficha, igual; (e) `subtipo`
      entra en `data-search` junto al sector; (f) `data/corporativo.json` →
      `portada.accesos_rapidos` con los tipos nuevos («Deck», «One-pager», «Ficha»,
      «Referencia»), y comprueba que `app.js` filtra por el valor exacto.

   3. check-data.js: error duro si una pieza trae un `tipo` fuera de los nueve.

   4. Spec §6.5, una línea nueva al final del vocabulario: «Tipo de pieza (revisión
      14): Deck · One-pager · Ficha · Referencia · Guía de discovery · Guía interna ·
      Plantilla · Herramienta · Archivo; `subtipo` libre, se pinta y se busca, no
      filtra.»

   Commit: «v3: nueve tipos de pieza y subtipo; el filtro de Materiales cabe en una línea (revisión 14)»

AS · DUEÑOS CON NOMBRE Y APELLIDO

   Los datos siguen con el nombre de pila (`dueno`, `especialista`, `responsable`,
   `pendiente.dueno`); el build resuelve el nombre completo desde `personas.json`,
   que es la única fuente de nombres. Un helper `nombreCompleto(texto)`: construye
   una vez el mapa nombre de pila → `nombre` (la primera entrada de cada persona) y
   sustituye cada nombre de pila como palabra entera dentro del texto («Jorge /
   producto» → «Jorge Herrero / producto»; «Carmen · Carla» → «Carmen Rode · Carla
   González»; «Corporativo» y «por asignar» se quedan). Se aplica en: chip de dueño
   de las tarjetas de los dos índices y fila «Dueño» de la ficha de pieza;
   `pendingBox`, el hueco de «Por qué Entelgy» y la nota «En revisión por el área»;
   «Especialista:» de la cabecera de solución, «pídesela a» de Referencias y
   «Escríbele al responsable (…)»; «Responsable:» y «A quién llamar» de la práctica;
   el eyebrow de las tarjetas de práctica en portada y en `/practicas/`; el dueño de
   `/lo-que-viene`; y `s.especialista` en el `mailto`. Contactos ya lee personas.json.
   Si «01 · Carmen Rode · Carla González» no cabe en el eyebrow de la tarjeta de
   portada a 390 px, en portada solo el nombre de pila y el completo en todo lo demás;
   dímelo.

   Commit: «v3: nombre y apellido en dueños, especialistas y responsables, resueltos desde personas.json (revisión 14)»

AT · /ENTELGY · LOS BLOQUES QUE FALTABAN, Y TRES PREGUNTAS EN CADA PRÁCTICA

   Datos nuevos en `data/corporativo.json` → `relato` (las claves que ya hay se
   quedan). El copy es el de `docs/analisis-v2-v3-vision-corporativa.md` §2 con las
   decisiones cerradas; MA lo ve el 8 y se corrige después si cambia algo.

   1. `relato.por_que`:
      linea «Desplegar tecnología es fácil. Que mueva tu cuenta de resultados, no.»
      texto «El impacto se pierde cuando la solución no encaja con el proceso que debe
        mejorar, con la gente que tiene que usarla o con la cultura que debe
        sostenerla. Entelgy trabaja los cuatro a la vez.»
      pilares ["Tecnología", "Procesos", "Personas", "Cultura"]
      diferenciadores[0] num «01» · titulo «Organizaciones en marcha» · texto
        «Trabajamos donde el cambio tiene que funcionar mientras el negocio sigue:
        continuidad, regulación y operación no esperan al final del proyecto.»
      diferenciadores[1] num «02» · titulo «Las cuatro variables» · texto «Tecnología
        cruzada con procesos, personas y cultura. Adopción, rediseño y gobierno no son
        añadidos: forman parte de lo que se diseña y se lleva a producción.»
      diferenciadores[2] num «03» · titulo «Respondemos del resultado» · texto «Nos
        comprometemos con el impacto, no solo con la entrega: menos coste de operar,
        productividad real, riesgo bajo control y valor que se queda cuando el
        proyecto termina.»

   2. `relato.donde_entramos`: titulo «El método es común; la puerta depende de lo que
      tenga delante el cliente.» · texto «Cinco prácticas, una sola forma de trabajar.
      Entra por la que responde al problema que tiene delante.» Las cinco columnas
      salen de los JSON de práctica (`orden`, `nombre`, `propuesta_portada`,
      responsable con apellido, enlace a `/practicas/<id>/`; Data Intelligence enlaza
      a su solución).

   3. `relato.otg.funciones`: «Funciones que puede asumir: PMO/SMO, arquitectura,
      auditoría, apoyo CISO, agilidad, QMO, productividad, FinOps.» Se pinta como
      última línea del bloque de la Oficina.

   4. `relato.pruebas` (se pinta plegado, `<details>` cerrado por defecto):
      titulo «Pruebas, para cuando hagan falta»
      nota «Estos datos sostienen el relato; no lo abren.»
      quienes[] {cifra, texto}: «20+» «años en organizaciones complejas y entornos
        críticos» · «2.000» «profesionales de delivery en España, Latinoamérica y
        Estados Unidos» · «100%» «capital propio: no respondemos a ningún fabricante»
        · «>95%» «de los clientes renueva»
      certificaciones «ISO 27001 · ISO 27701 · ENS Alto · SOC 2»
      fuente «Executive Deck v6 (jul 2026)»
      sectores[] {nombre, texto}: «Financiero» «Banca, seguros y mercados: procesos
        críticos, regulación (DORA) y cores que no se pueden parar.» · «Sector
        público» «Administración y educación: continuidad, ENS y transparencia sobre
        sistemas que deciden sobre personas.» · «Gran empresa y corporación»
        «Industria, telco, energía y retail.»
      regla «Los clientes se nombran cuando su ficha de referencia lo autoriza.»

   5. `relato.material`: eyebrow «Cuando el relato necesita una pieza» · ids
      ["corp-exec-global", "corp-exec-latam"]. Se pintan con la tarjeta de pieza (la
      del corporativo, destacada; la LATAM, normal, con su chip «revisar»).

   6. `entelgyPage`, orden final: hero (eyebrow, H1, los 60 segundos) → «Por qué
      Entelgy» (banda slate con linea, texto y raíl de pilares; debajo, las tres
      tarjetas numeradas) → «Cuatro entradas al mismo relato» (cabecera a dos
      columnas: H2 «Empieza por la pregunta que tienes delante.», nota «No son cuatro
      respuestas desconectadas ni un guion: son cuatro formas naturales de entrar en
      la misma propuesta.») → «El método» (cabecera: H2 «Cada fase evita una forma
      conocida de perder el impacto.», nota con la transversal y el ciclo; en cada
      paso, el «Evita: …» separado del texto y en mono) → «Dónde entramos» (banda
      navy) → la Oficina (título, texto, fases como lista, funciones) → «Pruebas»
      plegado → «Cuando el relato necesita una pieza». Como en
      `mockup-editorial/entelgy-editorial.html`.

   7. Las cinco prácticas: bajo Capacidades, un plegable `<details class="fold">`
      «Tres preguntas para abrir» con un `footer-note` «Señales para escuchar, no un
      guion.» y las tres de `discovery[]` como lista. Data Intelligence cambia las
      suyas (las de hoy entran por «iniciativas de IA» y la práctica ya no entra por
      ahí): «¿Qué decisión tomáis hoy sin fiaros del todo del dato que tenéis?» ·
      «¿Existe un catálogo del dato y quién es dueño de cada dominio?» · «¿Cuántos
      modelos o iniciativas de IA tenéis en producción, y quién los inventaría para
      el AI Act?». Las otras cuatro se quedan como están.

   Commit: «v3: /entelgy con la tesis, los tres diferenciadores, dónde entramos y las pruebas; tres preguntas por práctica (revisión 14)»

AU · LA CAPA EDITORIAL · LAS NUEVE REGLAS EN LAS CINCO PÁGINAS

   Todo según `docs/brief-diseno-editorial.md` (E1–E9 y «Cómo se aplica a cada
   página»). Las clases `.ed-*` de los dos mocks son el punto de partida: intégralas
   en `public/styles.css` con nombres del sistema (`.hero`, `.band`, `.section-head`,
   `.card-featured`, `.num`), no como capa aparte. Un commit por página para poder
   revertir.

   1. Fuente (E1). La carga de Google Fonts sale del `@import` de `styles.css` y va a
      la cabecera de `page()`: `<link rel="preconnect"
      href="https://fonts.googleapis.com">`, `<link rel="preconnect"
      href="https://fonts.gstatic.com" crossorigin>` y el `<link rel="stylesheet">`
      con Roboto 400/500/700, Barlow Condensed 500/600/700 y JetBrains Mono 400/500.
      Comprueba en la build desplegada que el H1 sale en Barlow Condensed.

   2. Escala (E1): `--font-size-5xl` y `-6xl` ya existen. H1 de portada 68 px, H1 de
      `/entelgy/`, práctica y biblioteca 60, H2 de sección 36–38, H3 de tarjeta 24–26;
      interlineado 0.98–1.05; `letter-spacing` −0.02em. En móvil, H1 42–44.

   3. Eyebrow con regla (E2), cabeceras a dos columnas (E4), numeración en fantasma
      solo donde hay secuencia (E5), tarjetas con borde superior morado y una sola
      sombra dura por página (E6), arcos en los heros (E7): como en los mocks.

   4. Chips (E8): solo se pintan las excepciones. `chipUso` no se pinta cuando
      `sale_al_cliente === "si"`; `chipVigencia` no se pinta cuando `estado ===
      "vigente"` (la fecha de revisión pasa a la fila «Vigencia» de la ficha de
      pieza). En las referencias, `chipCitable` se pinta siempre (citable o confirmar
      por cuenta): ahí la citabilidad es la información, no la excepción. Mono 11 px,
      `radius-sm`, punto solo en los de estado.

   5. Portada (`portadaPage`): hero con la frase de MA a 68 px, el subtitular y el
      único CTA; cabecera a dos columnas de «La oferta»; la tira de prácticas como
      banda navy de cinco columnas (número, nombre, `propuesta_portada`, cajas de
      solución en blanco sobre navy que envuelven el texto y se apilan en móvil,
      responsable con apellido y «Ver práctica →»); en Data Intelligence una caja
      «Data Intelligence · una sola solución» que enlaza a la solución; «Lo que puedes
      enseñar o enviar hoy» con el deck corporativo como tarjeta destacada y el resto
      sin chips salvo excepción. Como `mockup-editorial/portada-editorial.html`.
      Comprueba a 390 px que la tira apilada no se hace eterna (la referencia es que
      las cinco prácticas quepan en menos de tres pantallas); si no cabe, deja la
      rejilla clara actual y dímelo.

   6. `/entelgy/`: AT.6 con la composición del mock.

   7. Práctica (`practicaPage`): hero navy con el nombre a 60, `propuesta_portada`,
      responsable con apellido y el enlace «Material para cliente ↓»; debajo, en
      claro, «Qué cubre / Qué no prometemos / La pregunta que abre» como tres
      tarjetas en fila con borde superior; capacidades como cuatro tarjetas bajas
      numeradas; soluciones con `una_linea`; material común en tres carriles (primer
      contacto · en la reunión · para dejar) como en la solución; a quién llamar. El
      índice lateral se queda.

   8. Solución (`solucionPage`): E1, E2, E6 (la tarjeta navy del primer paso es la
      destacada, con la sombra dura) y E8. La estructura no cambia.

   9. Biblioteca (E9, los dos índices): barra de filtros sobre navy con etiqueta mono
      sobre cada grupo y los nueve tipos en una línea; «N piezas visibles» debajo,
      actualizado por `app.js` al filtrar; tarjeta ligera: eyebrow tipo · subtipo ·
      práctica, titular a 24, `nota_de_uso`, chips solo excepción (y citabilidad en
      referencias), dueño con apellido y un solo enlace «Ver ficha →» en mono (el
      botón «Abrir el documento» vive en la ficha de pieza). Es la tarjeta que hace
      que el índice completo quepa (AQ.1).

   Commits: «v3: capa editorial · fuente y escala», «… · portada», «… · /entelgy», «… · práctica», «… · solución», «… · biblioteca» (revisión 14)

AV · LO QUE NO TE PIDO

   - Ningún color ni fuente fuera de `docs/fuentes-v3/entelgy-design-tokens.css`.
     Naranja solo en el CTA de cada pantalla. Ningún icono, ilustración, foto,
     degradado, contador ni animación (un hover discreto como máximo).
   - Los nombres de prácticas y soluciones, los textos de la 13, los estados, usos y
     citabilidades: no cambian. Las cajas de solución de portada siguen envolviendo el
     texto (revisión 11b).
   - `data/*.json` solo cambia en lo que se nombra: `tipo`/`subtipo` (AR), los dos
     `url_documento` (AQ.3), `relato.*` (AT), `discovery` de Data Intelligence (AT.7),
     `portada.accesos_rapidos` (AR.2f).
   - Autodiagnóstico (`/autodiagnostico/grupo-lantia/`): no se toca.
   - Si algo del brief o de los mocks contradice este mensaje, manda el mensaje; si
     algo no está en ninguno de los dos, para y pregunta.

Al terminar: build, check-data.js sin errores, medir.js en verde en los seis
criterios (peso incluido: cada página ≤ 150 KB, los dos índices también), barrido de
canon vacío fuera de `/autodiagnostico/` (ni «Data Driven», ni «garantiz», ni
«acompañ», ni «revisión N»), capturas a 1440 y 390 de portada, `/entelgy/`, una
práctica (Software Development), una solución (Modernización) y `/materiales/` en
`docs/medicion/`, PDF de portada nuevo, nota de revisión 14 en §0 de la spec (ya está
escrita en `docs/`; compruébala) y descripción del PR con la línea de la 14. Para y
dime si: la tira navy no cabe a 390, el índice completo no baja de 150 KB, algún H1 a
68 px rompe la medición, o Barlow Condensed no carga en la build desplegada.
