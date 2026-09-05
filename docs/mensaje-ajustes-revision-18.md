Revisión 18 (5 sep). La 17 está aplicada, empujada y desplegada, y la he
verificado desde la carpeta local (`a75892e`): ámbitos de una palabra en las
fuerzas, «Qué cubre» de Smart Operations corto, nota de Contactos sin calendario,
apellidos en el primer paso; y encima el titular nuevo, el lockup de cabecera y
«La oferta» en maestro-detalle. Bien.

Esta revisión no toca la v3. Abre una rama nueva, `claude/hipatia-v4-asistente`,
desde el HEAD de `claude/hipatia-v3-static-catalog-49l3yx` (`a75892e` o el que haya
cuando hagas pull), y trabaja solo ahí. La v4 es la v3 más una pieza: «Pregunta a
Hipatia», un asistente que vive en la esquina inferior derecha de todas las páginas
y responde en frases con lo que ya hay en `data/`. Sin modelo, sin red, sin índice
externo, sin clave. Se ve en la URL de preview que Workers Builds genera para la
rama en el Worker `hipatia-v3` (el mismo que sirve la v3; formato
`<alias>-hipatia-v3.<subdominio>.workers.dev`); no se despliega en ningún dominio.
Si el martes 9 Susana decide que entra en la demo del 10, se fusiona en la rama de
la v3; si no, la rama se queda.

Haz pull antes. Un commit por bloque, con el texto que se indica. Y una regla
nueva para esta rama: no hagas el primer push hasta que yo te diga que las previews
del Worker están protegidas con Access. Hasta entonces, commits en local.

BI · PUNTO DE PARTIDA (compruébalo antes de tocar nada; si algo no cuadra, para y dímelo)

   1. La rama. `claude/hipatia-v4-asistente` desde el último commit de la rama de
      la v3. Ni un commit, ni un rebase, ni un merge en la rama de la v3 durante
      toda la revisión.

   2. Los datos, que ya he mirado y son estos. Si `check-data.js` o tu lectura dicen
      otra cosa, para.
        - `data/personas.json`: ocho personas con `id` y `nombre` completo. Cuatro
          con `correo` (Daniela, Amador, Alfredo, Cristina) y cuatro a `null`
          (Carmen, Carla, Jorge, Luis). No es un fallo: sin correo no hay
          «escribir →», y BJ.5 dice qué se pinta en su lugar. No inventes correos.
        - `data/materiales.json`: 112 piezas con `tipo` de los nueve, `subtipo` en
          67, `practica`, `solucion` (nulo en 30: piezas corporativas y de
          práctica), `sector[]`, `estado` (vigente 72 · revisar 36 · pendiente 4),
          `sale_al_cliente` con tres valores, `si`, `con_validacion` y `no`
          («interno» es la etiqueta de pantalla, no el valor), `momento_comercial`
          y `dueno` como nombre de pila («Jorge», «Amador», «Corporativo», «Jorge /
          producto»). Las cuatro `pendiente` no tienen `url_documento`: se
          responden como pendientes, con su chip; no se ocultan.
        - Definiciones: las once soluciones tienen `una_linea`; las cinco prácticas
          no la tienen y usan `propuesta_portada`. Es lo que se cita cuando alguien
          pregunta «qué es X».
        - Responsables: cada solución lleva `contactos { comercial, tecnico }` con
          ids de persona; cada práctica, `responsable_id` (una cadena, salvo
          Process Intelligence, que lleva dos: Carmen y Carla).

   3. `data/preguntas.json` lo escribe Susana el lunes 8 por la mañana, no tú:
      15–20 preguntas ensayadas. Es la prueba de aceptación. Hasta entonces, crea tú
      el fichero con las cinco de BJ.6 en el formato que se da ahí, para que ella
      solo tenga que añadir filas.

   4. Access. Las previews de rama del Worker `hipatia-v3` se protegen desde el
      panel de Cloudflare, no desde el repo, y eso lo compruebo yo. Hasta que te lo
      confirme, nada de push. Cuando te lo confirme, el primer push crea la preview
      y me pasas la URL.

   5. Conviene saberlo, no es requisito: si el equipo de Access de
      `hipatia-v3.guberna.es` y el de `entelgy.guberna.es` no son el mismo, cada
      enlace a una pieza pedirá un segundo OTP en la demo. Está anotado como
      pendiente técnico; no lo toques.

BJ · PREGUNTA A HIPATIA

   1. Índice. `build.js` escribe `public/indice-pregunta.json` (lo que se sirve
      sale de `public/`, como el resto; `data/` es la fuente), JSON en una línea,
      con tres listas:
        - `piezas`: una fila por pieza con `id`, `titulo`, `tipo`, `subtipo`,
          `practica`, `solucion`, `sector`, `estado`, `sale_al_cliente`, `momento`
          (el `momento_comercial`), `abre` (`true` si tiene `url_documento`),
          `citable` (solo en referencias), `dueno` (id de persona resuelto desde
          `personas.json` por el nombre de pila: «Jorge» y «Jorge / producto» →
          `jorge-herrero`; «Corporativo» → `null`) y `url` (`/materiales/<id>/`).
        - `entradas`: una fila por solución y por práctica con `id`, `clase`
          (`solucion` | `practica`), `nombre`, `practica` (en las soluciones, la
          suya), `linea` (`una_linea` en las soluciones, `propuesta_portada` en las
          prácticas), `comercial` y `tecnico` (ids; en las prácticas, `comercial` es
          `responsable_id`, que puede ser una lista) y `url`
          (`/practicas/<práctica>/` o `/practicas/<práctica>/<solución>/`).
        - `personas`: una fila por persona con `id`, `nombre`, `correo`, `titulo` y
          `lleva` (la línea que ya genera el build para las tarjetas de
          `/contactos/`: «Responsable de Software Development · Comercial en
          Modernización de aplicaciones, …»).
      Lo que NO lleva el índice: `nota_de_uso`, `material_interno_nota`, `kit`,
      `keynotes`, `cifras`, `resultado`, `frase_reunion`, precios ni nada del
      contenido de las fichas. Ahí están los precios internos y las cifras
      Foreworth. La respuesta enlaza a la ficha, no repite su contenido.
      La normalización (minúsculas, sin acentos) se hace en `pregunta.js` con la
      misma función para el índice y para la pregunta (la `norm()` de `app.js`
      vale); el índice viaja tal cual y así no se duplica el texto. Peso objetivo
      ≤ 40 KB; si pasa de 60, para y dime cuánto. Se carga solo cuando el panel se
      abre por primera vez (o al abrir con una pregunta guardada, BJ.3), nunca con
      la página.

   2. Widget. Un fragmento HTML y un `pregunta.js` sin dependencias, que `page()`
      de `build.js` mete al final del `<body>` de todas las páginas que genera
      (después de `${modal}`; el script con `defer`, detrás de `app.js`). Estilos
      en `styles.css` con los tokens que ya hay; ningún color ni fuente nuevos.
      Ids y clases con prefijo `pregunta-`. Capa entre la cabecera fija y el modal
      (`z-index` entre `--z-sticky` y `--z-modal`). Dos estados:

        Cerrado (por defecto en cada carga; nunca se abre solo ni parpadea): una
          pestaña fija en la esquina inferior derecha, navy, con el texto «Pregunta
          a Hipatia» en eyebrow mono (E2 sobre navy, sin la regla, como
          `.fuerza .eyebrow`) y delante el punto naranja del logo (el círculo del
          favicon, 7 px). Sombra suave. Es un `<button aria-expanded="false"
          aria-controls="pregunta-panel">`. Por debajo de 640 px la pestaña es
          siempre la corta, «Pregunta», pegada al borde derecho con 12 px de
          margen, para no tapar el CTA naranja de la pantalla; si en alguna
          captura a 390 lo tapa igualmente, para y dímelo con la captura.

        Abierto: un panel anclado a la esquina, 380 px de ancho en escritorio y
          todo el ancho menos los márgenes por debajo de 640, `role="dialog"` con
          `aria-label="Pregunta a Hipatia"`, con la anatomía de tarjeta de
          contenido (E6): borde superior de 3 px morado y sombra `--shadow-xl`. No
          la dura: la dura es de la tarjeta destacada de cada página, que ya la
          tienen el deck de portada o el primer paso de la solución, y con dos
          habría que explicarlo. Cabecera: eyebrow con regla «Pregunta a Hipatia»
          (morado 700) a la izquierda y un botón «cerrar ×» en mono a la derecha.
          Debajo, una línea: «Responde con lo que hay en el portal. Si no lo tiene,
          te lo dice.» Tres sugerencias como chips (E8: mono 11, `radius-sm`, sin
          punto), cada una con la pregunta que manda al pulsarla:
            «CIO de banca · Modernización» → «qué le enseño a un cio de banca sobre modernización»
            «A quién llamo · infra» → «a quién llamo por infraestructura»
            «Qué es Process Intelligence» → «qué es process intelligence»
          Zona de respuesta (`aria-live="polite"`). Al pie, un `<form>` con un
          campo de texto (placeholder «Escribe tu pregunta», `<label>` oculto) y un
          botón «Buscar» en NAVY, no en naranja: el naranja de cada pantalla ya
          está en su CTA. Enter en el campo equivale a «Buscar» y no recarga la
          página. Bajo el campo, una línea mono en gris secundario: «No inventa:
          responde solo con lo que está en el portal.»

        Sin iconos, sin avatar, sin animación de «escribiendo», sin burbujas.
          Abrir y cerrar sin transición (si hace falta un fundido para que no dé un
          salto, 120 ms y nada más). Al abrir, el foco va al campo; Esc cierra y
          devuelve el foco a la pestaña, y no toca el Esc del modal de `app.js`
          (si el modal está abierto, cierra el modal). Si el índice tarda o falla,
          la zona de respuesta dice «No puedo leer el índice del portal ahora
          mismo.» y nada más; nunca se queda en blanco.

   3. Memoria de sesión. En `sessionStorage`, una sola clave (`hipatia.pregunta`)
      con la última pregunta. Al abrir el panel en otra página se vuelve a
      responder con el índice (el motor es determinista; no se guarda HTML). No se
      guarda nada más, ni en `localStorage`. Al cerrar la pestaña del navegador se
      vacía solo.

   4. Motor. Todo en `pregunta.js`: las funciones del motor puras (reciben el
      índice y la pregunta, devuelven intención y resultados) y el cableado del
      DOM aparte, protegido con `typeof document !== "undefined"`, para que
      `check-pregunta.js` cargue el mismo fichero en Node. Sin dependencias.

      Preparación de la pregunta. Normalizar (minúsculas, sin acentos, sin
      signos; los guiones separan palabras: «one-pager» son dos). Quitar palabras
      vacías: a, al, del, de, el, la, lo, los, las, un, una, unos, unas, y, o, u,
      en, con, por, para, sobre, sin, que, como, cual, le, les, me, te, se, es,
      son, hay, tengo, tienes, puedo, quiero, necesito, hacer, algo, alguna,
      algun, sector, practica, solucion, pieza, piezas, material, materiales,
      cliente, entelgy, hipatia, portal. Lo que queda son términos. Un término
      casa con una palabra del índice si la palabra empieza por sus cinco primeras
      letras; si el término tiene menos de cinco letras (ia, rpa, cio, aapp, cau,
      one), tiene que ser igual a la palabra entera. Siempre al principio de
      palabra, nunca dentro («ia» no casa con «inteligencia»). Sin stemming: el
      prefijo de cinco letras basta.

      Sinónimos, una tabla corta en el JS; cada término se expande a todo su grupo
      antes de casar, y un sinónimo de varias palabras («data intelligence»,
      «puesto de trabajo») casa como frase, palabras consecutivas:
        banca · financiero · bancario · banco
        aapp · publico · publica · administracion · administraciones
        ia · inteligencia artificial · data intelligence
        rpa · automatizacion · robots
        cio · comite · direccion · ejecutivo · c-suite · directivo
        workplace · puesto de trabajo · puesto
        infra · infraestructura · infraestructuras · cloud
        modernizacion · modernizar · legacy · mainframe
        telco · telecomunicaciones
        process intelligence · inteligencia de procesos · process mining

      Tres intenciones por patrón, en este orden:

        Persona: si la pregunta contiene «a quién», «con quién», «quién lleva»,
          «quién es», «contacto», «responsable», «llamo» o «llamar». Esas palabras
          se quitan y con el resto de términos se busca en
          `entradas`: gana la que casa más términos con su `nombre` (con los
          sinónimos); a igualdad, la solución antes que la práctica. Se responde
          con su `comercial` (y su `tecnico`, si lo hay). Si ninguna entrada casa,
          respuesta de «sin resultados».

        Definición: si empieza por «qué es», «que es», «qué cubre», «qué hace»,
          «qué no», «en qué consiste», «qué significa». Con el resto se busca en
          `entradas`: si el nombre normalizado de una entrada es igual al resto de
          la pregunta, esa; si no, la que casa todos los términos. A igualdad, en
          los dos casos, la práctica antes que la solución (así «process
          intelligence» da la práctica y no «Inteligencia de procesos», que también
          casa, y «data intelligence» da la práctica y no la solución del mismo
          nombre). Se responde con su `linea`. Sin entrada, «sin resultados».

        Material (por defecto). Primero, tres detecciones sobre los términos: el
          asunto (la entrada, solución o práctica, que casa más términos; a
          igualdad, la solución); el sector (el valor de `sector` del índice que
          casa más términos, sin contar los términos que ya casaron con el asunto,
          para que «infraestructura» no dé el sector «Cloud» por el sinónimo; a
          igualdad, el valor que contiene la palabra tal como se escribió, y luego
          el más corto, para que «banca» dé «Banca» y no «Financiero»); y el
          momento, por el verbo de la pregunta: «enseño»,
          «enseñar», «presento», «presentar», «reunión», «llevo» → `reunion`;
          «envío», «enviar», «mando», «mandar», «correo», «primer contacto» →
          `primer_contacto`; «dejo», «dejar», «dejarle» → `para_dejar`. Los verbos
          de momento no cuentan como términos. Luego, cada pieza puntúa:
            +3 si pertenece al asunto (su `solucion` es la solución detectada, o su
               `practica` es la práctica detectada cuando no hay solución);
            +2 por cada término que casa en `sector`;
            +2 por cada término que casa en `tipo` (deck, ficha, one pager,
               referencia…);
            +1 por cada término que casa en `titulo` o `subtipo` y no ha contado
               ya en otro campo (un término puntúa una sola vez, en el campo que
               más le dé);
            +2 si su `momento` es el detectado y la pieza `abre` (lo que aún no
               existe no se puede enseñar ni enviar; las pendientes siguen
               entrando por el resto de puntos, con su chip).
          Entran las piezas con puntuación mayor que cero. Las internas
          (`sale_al_cliente: "no"`) se apartan antes de ordenar: nunca van en la
          lista principal.

      Orden de la lista principal: primero las piezas del asunto (las que suman el
      +3) y detrás las demás; dentro de cada grupo, puntuación de mayor a menor; a
      igualdad, `estado` (vigente, revisar, pendiente); a igualdad, `tipo` (Deck,
      One-pager, Ficha, Referencia y el resto detrás en el orden del filtro de la
      biblioteca); a igualdad, el orden del índice. Con esto, «qué le enseño a un
      cio de banca sobre modernización» da el deck (asunto + «ejecutivo» + título
      + reunión, 7) antes que la ficha comercial Banca (asunto + sector + título,
      6), y detrás el correo de apertura (pendiente, con su chip: entra por el
      sector Financiero) y el one-pager; las piezas de Modernización van antes que
      los decks ejecutivos de las otras prácticas, que solo casan «cio». Lo he
      probado en seco sobre los datos de hoy con estas reglas: las cinco de BJ.6
      caen donde se espera.

   5. Respuestas: plantillas fijas; el motor solo rellena. Todo el HTML sale de
      plantillas del JS con el texto escapado; nada del índice se inserta sin
      escapar.

        Material, con resultados. Primera línea según lo detectado: «Para [asunto]
          en [sector] tienes [N] piezas. Empieza por esta.» / «Para [asunto] tienes
          [N] piezas. Empieza por esta.» / «Con “[términos]” tengo [N] piezas.
          Empieza por esta.». N cuenta las piezas de la lista principal que
          pertenecen al asunto (todas las de la lista si no hay asunto). Luego la
          primera pieza con la anatomía de pieza del brief (principio 5): eyebrow
          mono «Tipo · Subtipo · Práctica» (sin subtipo si no lo tiene), titular en
          display a 22–24 enlazado a su ficha, chip solo si es excepción («revisar»,
          «pendiente», «con validación»; en las referencias, su citabilidad, como
          en la biblioteca), una línea con la `linea` de su solución o práctica
          (si la tiene; las corporativas no), y una fila mono con «Ver ficha →» a
          la izquierda y a la derecha el dueño:
          «[Nombre Apellido] · escribir →» (`mailto:`) si tiene correo; «[Nombre
          Apellido] · ver en Contactos →» (`/contactos/`) si no; «Corporativo» a
          secas si `dueno` es nulo. Debajo, «También:» y hasta tres más, cada una
          «Tipo · Título» enlazada a su ficha, con su chip si es excepción. Si hay
          internas con puntuación, al final un eyebrow «Para prepararte» con hasta
          dos, «Tipo · Título» enlazadas; nunca mezcladas con lo que se enseña.
          Sin nota de uso en ningún caso: eso está en la ficha.

        Persona: titular con el nombre completo (display 22–24), línea «[título],
          lleva [solución o práctica].» (sin título: «Lleva [solución o
          práctica].»), fila mono «[correo] · escribir →» o «ver en Contactos →»
          si no hay correo. Si la práctica tiene dos responsables (Process
          Intelligence), el segundo va en una línea más con la misma fila. Si la
          solución tiene técnico: «Técnico: [Nombre Apellido].» Si el mismo
          comercial lleva otras soluciones de la práctica: «También lleva [las
          otras, separadas por comas].»

        Definición: la `linea` entre comillas latinas y «Ver la página →» a su
          URL. Nada más: «qué cubre» y «qué no prometemos» están en la página, a
          un clic.

        Sin resultados, en las tres intenciones: «No tengo nada con esas palabras.
          Prueba con la práctica (Modernización, Smart Operations…) o el sector
          (banca, AAPP…). Si crees que debería existir, escríbeselo al responsable
          de la práctica → Contactos.», con «Contactos» enlazado a `/contactos/`.
          Nunca una respuesta vacía ni inventada.

   6. Prueba de aceptación. `check-pregunta.js` (Node, sin dependencias) carga
      `public/indice-pregunta.json` y el motor de `pregunta.js`, lee
      `data/preguntas.json` y comprueba, pregunta a pregunta, que la intención y
      el primer resultado coinciden (y que los ids de `tambien`, si los hay, están
      entre los tres de «También»); lo escribe en consola y sale con 1 si alguna
      falla. Formato de `data/preguntas.json`, el que Susana rellenará el lunes:

        [
          { "pregunta": "qué le enseño a un cio de banca sobre modernización",
            "intencion": "material", "primero": "mod-deck-ejecutivo",
            "tambien": ["software-modernizacion-sector-banca"] },
          { "pregunta": "a quién llamo por infraestructura",
            "intencion": "persona", "primero": "amador-sobrino" },
          { "pregunta": "qué es process intelligence",
            "intencion": "definicion", "primero": "process-intelligence" },
          { "pregunta": "one pager preservia sector público",
            "intencion": "material", "primero": "preservia-publico" },
          { "pregunta": "cuánto cuesta",
            "intencion": "nada", "primero": null }
        ]

      `primero` es el id de la pieza, de la persona o de la entrada; `intencion`
      toma `material`, `persona`, `definicion` o `nada`; `tambien` es opcional. La
      quinta prueba que el motor no inventa: los precios no están en el índice y
      la respuesta es la de «sin resultados». Si una pregunta de Susana no cae con
      reglas sin retorcer el motor, no la fuerces: dímelo y la quitamos de la demo.

   Commits: «v4: rama desde la v3, preguntas de ejemplo y nota de revisión 18»
   (preguntas.json con las cinco y la nota en §0 de la spec, BL.1); «v4: índice
   ligero para Pregunta a Hipatia» (build.js e índice); «v4: widget Pregunta a
   Hipatia, dos estados, capa editorial» (page(), styles.css, pregunta.js con el
   panel abriendo y cerrando; hasta el siguiente commit responde «sin resultados»);
   «v4: motor por intenciones, plantillas de respuesta y prueba de aceptación
   (revisión 18)» (motor, plantillas, check-pregunta.js, medir.js, CLAUDE.md,
   capturas). Que la build de cada commit sea navegable.

BK · LO QUE NO TE PIDO

   - Nada en la rama de la v3. Ni un commit, ni un rebase, ni un merge. Si
     necesitas algo que no esté en tu punto de partida, para y dímelo.
   - Ningún modelo, ninguna llamada a red, ninguna clave. Si en algún momento te
     parece que hace falta, para.
   - Ningún cambio en `data/*.json` salvo crear `preguntas.json`. Los correos que
     faltan en `personas.json` los dan los SM; no los inventes ni los deduzcas del
     patrón de los que hay.
   - Ningún cambio en portada, `/entelgy/`, prácticas, soluciones ni biblioteca
     fuera de la inyección del widget. La portada se ve exactamente igual con la
     pestaña cerrada.
   - Ni ruta `/pregunta/` ni entrada en la navegación: todo vive en el panel. El
     único fichero nuevo que se sirve es `indice-pregunta.json`.
   - Ningún color, fuente, icono, ilustración ni animación fuera de lo que dice
     BJ.2. Ninguna etiqueta «IA», «asistente inteligente» ni parecida en pantalla:
     se llama «Pregunta a Hipatia» y dice lo que hace.
   - Los HTML de Claude Design enlazados desde las fichas, las dos fichas de julio
     y el autodiagnóstico no pasan por `build.js`: el widget no aparece ahí, y no se
     mete a mano.
   - Si una pregunta de `preguntas.json` no se resuelve con reglas sin retorcer el
     motor, no la fuerces: dímelo y la quitamos de la demo.

BL · AL TERMINAR

   1. Nota de revisión 18 en §0 de la spec de la rama v4 (en la v3 no se toca).
      Pega esta, con tu ajuste si algo cambió:
        > Revisión 18 (5 sep, rama `claude/hipatia-v4-asistente`): la v4 es la v3
        > más «Pregunta a Hipatia», una pestaña en la esquina inferior derecha de
        > todas las páginas que abre un panel y responde en frases con lo que hay en
        > `data/`: qué enseñar para una práctica y un sector, a quién llamar, qué es
        > una solución. Sin modelo, sin red ni clave: un índice ligero que emite el
        > build (sin notas de uso ni precios), tres intenciones por patrón y
        > plantillas fijas; cuando no tiene nada, lo dice. Vive solo en la preview
        > de la rama; el martes 9 se decide si entra en la demo del 10. La prueba
        > de aceptación es `data/preguntas.json`, escrito por Susana.
   2. Un bloque corto en `CLAUDE.md` de la rama v4, «Pregunta a Hipatia»: sin
      modelo, sin red, sin clave; el índice no lleva notas de uso ni precios; el
      panel nunca se abre solo; las respuestas salen de plantillas fijas y enlazan
      a la ficha en vez de repetirla.
   3. `medir.js`: el peso de página pasa a contar `pregunta.js` (HTML + CSS +
      app.js + pregunta.js); el índice no cuenta en el peso, como las fuentes,
      pero el informe añade una línea «Pregunta a Hipatia: índice N KB (objetivo
      ≤ 40) · pregunta.js N KB (≤ 12)». Hoy la página más pesada está a 130 KB;
      con la pestaña y el script tiene que seguir por debajo de 150.
   4. Build, `check-data.js` y `check-pregunta.js` sin errores; `medir.js` en
      verde en los seis criterios; barrido de canon vacío (el widget incluido).
   5. Capturas en `docs/medicion/`, a 1440 y 390: portada con la pestaña cerrada;
      portada con el panel abierto y cada una de las tres sugerencias respondida
      (tres capturas por ancho); una ficha de pieza (`/materiales/mod-deck-ejecutivo/`)
      con el panel abierto. Nombres: `portada-pregunta-cerrada-*`,
      `portada-pregunta-1-*` a `-3-*`, `pieza-pregunta-*`.
   6. PR en borrador, sin fusionar, de `claude/hipatia-v4-asistente` contra
      `claude/hipatia-v3-static-catalog-49l3yx`, título «v4: Pregunta a Hipatia
      (revisión 18)», con la línea de la 18 y la URL de preview (la del check de
      Workers Builds del último commit; si el check no la enseña, te la paso yo).

   Para y dime si: el índice pasa de 60 KB, alguna página pasa de 150 KB, la
   pestaña tapa un CTA a 390, o alguna de las cinco preguntas de ejemplo no cae en
   su intención o en su primer resultado.
