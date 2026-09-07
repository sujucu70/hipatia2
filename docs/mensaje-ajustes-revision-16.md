Revisión 16 (5 sep). Va después de la 15: no la empieces hasta tener la 15 aplicada y
empujada, para no pisar `styles.css` ni `build.js` a la vez. Sale de la primera vuelta
de Susana por la build desplegada de la 14 (`docs/notas-susana-revision-16.md`, con
sus decisiones al final): la práctica de Smart Operations habla del puesto de trabajo
y no del motor SmartOPS que cuenta el deck global de Amador; «La propuesta» de cada
solución es un ladrillo de seis párrafos a 150 caracteres por línea; cada pieza tiene
un solo enlace y el comercial a veces necesita el PDF o el PPT; y Contactos repite a
la misma persona cuatro veces sin decir cómo llamarla. Todo tiene que estar desplegado
antes del lunes 8. Si algo no llega, se recorta en este orden: BC (Llévatelo), BE
(carriles), BB (maqueta de la propuesta); BA y BD no se recortan.

Haz pull antes. Commit por bloque, con el texto que se indica. Los textos entre
comillas latinas son el contenido del campo, tal cual.

BA · SMART OPERATIONS, DESDE EL DECK GLOBAL

   La página de práctica se escribió en la 13 tirando de los dos decks verticales y
   salió con el puesto de trabajo delante. El marco de la práctica es el deck global
   (`smartops-resumen`, «SmartOPS · Resumen Ejecutivo Global 2026»): SmartOPS es un
   motor de cinco piezas servido a dos territorios. Cambia solo la práctica en
   `data/smart-operations.json`; las dos soluciones no se tocan.

   1. `propuesta`: «Un mismo motor operativo para los dos territorios críticos del
      CIO, el puesto de trabajo y la infraestructura, con IA en producción y gobierno
      regulatorio dentro.» (`propuesta_portada` no cambia.)

   2. `que_cubre`: «SmartOPS es el motor operativo de Entelgy, no un catálogo de
      servicios: un modelo N0–N3 que deja el volumen a la máquina y el criterio al
      equipo, dimensionamiento sobre datos reales, reporting en Power BI sobre un
      data lake del servicio, IA operativa en producción desde 2018 y gobierno ISO
      20000, 27001 y ENS alto en el diseño del servicio. Ese motor se sirve a dos
      territorios con la misma disciplina, el mismo gobierno y el mismo reporting:
      el puesto de trabajo (soporte, dispositivo y experiencia del empleado) y la
      infraestructura crítica (sistemas, redes y cloud, 24×7). Desde centros propios
      en Madrid, São Paulo y Miami.»

   3. `que_no_prometer`, `pregunta_comun` y `discovery`: no cambian.

   4. `capacidades`, cinco (Data Intelligence ya tiene cinco; misma rejilla):
      01 «Modelo operativo N0–N3», texto actual.
      02 «Dimensionamiento sobre datos», texto actual de «Dimensionar sobre datos».
      03 «Reporting en Power BI»: «Un data lake del servicio y cuadros en Power BI
         que leen el CIO y el CFO: coste por usuario y por elemento, cumplimiento,
         fricción y lo que la IA resolvió sola. El mismo reporting en los dos
         territorios.»
      04 «IA operativa en producción»: «En el CAU clasifica, prioriza, deduplica y
         redacta la respuesta; en la infraestructura suprime ruido, correlaciona y
         propone la causa raíz. En producción desde 2018, con porcentaje por
         iniciativa.»
      05 «Gobierno dentro», texto actual.

   5. Campo nuevo de práctica `pruebas_linea` (opcional; solo lo lleva Smart
      Operations por ahora): «Hoy: más de 400.000 usuarios operados, 95% de
      renovación, IA en producción desde 2018 y 174 certificaciones Microsoft.» y
      `pruebas_fuente`: «SmartOPS · Resumen Ejecutivo Global 2026». Se pinta en
      `practicaPage` debajo de las tres tarjetas de «Qué cubre y qué no», en mono
      (`footer-note`), con la fuente detrás: «… · Fuente: SmartOPS · Resumen Ejecutivo
      Global 2026». Si el campo no existe, no se pinta nada.

   6. `primer_avance.nota`: «Precio cerrado, sin compromiso posterior, sobre el
      servicio real. Te llevas cuatro cosas: el mapa de fricción y riesgo para
      decidir, el hueco NIS2/DORA/AI Act, Windows 10 y Broadcom con TCO por camino, y
      las mejoras que se pueden ejecutar en 90 días. El resultado es del cliente
      decida lo que decida. Alcance con Amador Sobrino.»

   7. Bloque nuevo «Lo que presiona al CIO», campo `presion` de práctica (opcional;
      hoy solo Smart Operations; las otras cuatro lo tendrán después del 10 desde sus
      decks). Se pinta entre «Qué cubre y qué no» y «Capacidades», con cabecera a dos
      columnas (E4): eyebrow «Lo que presiona al CIO», H2 = `titulo`, `texto` a la
      derecha. Las `fuerzas` como tarjetas bajas en una rejilla de cinco (la de
      capacidades): ámbito en mono, cifra en display a 48 px (`--font-size-5xl`), texto, y la fuente en
      `footer-note`. Los `relojes` debajo, en una tira clara con borde izquierdo
      morado, cuatro entradas en fila (apiladas en móvil): fecha en negrita y texto.
      Sin numeración fantasma (no es una secuencia). Contenido:

      "presion": {
        "titulo": "Cinco fuerzas sobre el CIO y cuatro relojes con fecha fija.",
        "texto": "Puesto e infraestructura bajo presión a la vez, mientras los plazos regulatorios y de soporte se cierran y dejan de ser negociables.",
        "fuerzas": [
          { "ambito": "Puesto de trabajo", "cifra": "14 /sem", "texto": "fricciones por empleado y semana fuera del SLA: 470.000 horas al año en una empresa media.", "fuente": "Nexthink, DEX Report 2026" },
          { "ambito": "Coste cloud", "cifra": "29%", "texto": "del gasto cloud es desperdicio recuperable, al alza empujado por la IA.", "fuente": "Flexera, State of the Cloud 2026" },
          { "ambito": "Disponibilidad", "cifra": "54%", "texto": "de las caídas cuestan más de 100.000 $. Un incidente es un evento financiero.", "fuente": "Uptime Institute, Outage Analysis 2026" },
          { "ambito": "Regulación", "cifra": "35 M€", "texto": "de multa máxima del AI Act, o el 7% de la facturación, sumada a NIS2 y DORA.", "fuente": "Reglamento (UE) 2024/1689, art. 99" },
          { "ambito": "IA sin retorno", "cifra": "80%", "texto": "no ve impacto medible en el EBIT de su IA. Sin datos ni gobierno, no escala.", "fuente": "McKinsey, The State of AI 2026" }
        ],
        "relojes": [
          { "fecha": "Octubre 2025", "texto": "Windows 10 sin soporte: seguir con ESU se paga y el precio se dobla cada año. Windows Server 2016, en enero de 2027." },
          { "fecha": "2026", "texto": "NIS2 en España: transposición e inspecciones en marcha." },
          { "fecha": "2 de diciembre de 2027", "texto": "EU AI Act: obligaciones de alto riesgo (Anexo III)." },
          { "fecha": "Ahora", "texto": "Renovación Broadcom-VMware: la ventana se cierra con cada contrato que vence." }
        ]
      }

      Son cinco fuerzas, no seis: la de virtualización («×10 en renovaciones VMware»)
      va atribuida en el deck a «Gartner · VMware TCO 2026» sin informe verificable y
      se queda fuera hasta que Amador pase la obra. No la añadas.

   8. `medir.js`, criterio 3 («mismos bloques en orden»): `presion` y `pruebas_linea`
      son bloques opcionales; el criterio sigue en verde si las prácticas que los
      tienen los pintan en la misma posición, y el informe dice cuáles los tienen.

   Commit: «v3: Smart Operations desde el deck global: el motor, cinco capacidades,
   lo que presiona al CIO (revisión 16)»

BB · LA PROPUESTA, SIN LADRILLO (maqueta; los datos no cambian)

   1. Regla E10 para `styles.css`: ningún párrafo pasa de 72 caracteres por línea
      (`max-width: 72ch` en la prosa de solución, práctica y pieza). Lo que necesite
      el ancho entero va a dos columnas. Apúntala en el brief
      (`docs/brief-diseno-editorial.md`, tabla de reglas).

   2. «La propuesta» (`solucionPage`) pasa a dos columnas a partir de 1024 px
      (1.1fr / .9fr; una columna en móvil). Izquierda: «Qué es» y «Por qué Entelgy».
      Derecha: «A quién / la señal», «El diferenciador», «La objeción que más vas a
      oír». Las etiquetas de bloque dejan de ser negrita y pasan a eyebrow con regla
      (E2), en mono morado.

   3. «El diferenciador»: cita destacada. Tarjeta sobre slate (`--color-brand-slate`, el de `.band-slate`),
      texto en display a 28 px en blanco, sin comillas, con el eyebrow «El
      diferenciador» en morado 300. Es la frase que el comercial tiene que
      memorizar; que se vea.

   4. «La objeción que más vas a oír»: diálogo. Dos tarjetas apiladas con borde
      izquierdo morado: la primera con eyebrow «Te dirán» y la frase en cursiva; la
      segunda con eyebrow «Respondes» y la respuesta. Mismo contenido que hoy
      (`objecion_principal.texto` y `.respuesta`).

   5. «Cómo abres» sale de la columna y se junta con el primer paso: una fila de dos
      (1fr / 1.4fr; apilada en móvil) con la tarjeta de cita a la izquierda (blanca,
      borde superior morado, eyebrow «Cómo abres», la pregunta en display a 24 px) y
      la tarjeta navy del primer paso a la derecha, que sigue siendo la destacada
      (E6). Nada más cambia en la solución.

   Commit: «v3: la propuesta a dos columnas, diferenciador como cita, objeción como
   diálogo, apertura junto al primer paso (revisión 16)»

BC · LLÉVATELO: PRESENTAR, ENVIAR, ADAPTAR

   Cada pieza tiene hoy un solo enlace, el HTML del hub, que sirve para presentar en
   pantalla. Para enviar después de la reunión hace falta un PDF y para adaptar a
   una cuenta, el PPT. El portal pasa a distinguir los tres usos y a enseñar solo lo
   que existe; lo que no existe se pide a su dueño, con nombre y apellido.

   1. Datos: campo opcional `descargas` en cada pieza de `materiales.json`, lista de
      `{ "formato": "pdf" | "pptx" | "docx" | "xlsx", "url": "https://…", "nota": "…" }`.
      Hoy no lo lleva ninguna pieza: no inventes ninguno. `check-data.js` valida el
      formato y que la URL sea http(s). `url_documento` sigue siendo «ver en
      pantalla».

   2. Ficha de pieza (`materialPage`): bloque «Llévatelo» después de las filas de
      meta, antes de la nota de uso. Tres filas fijas, etiqueta en mono a la
      izquierda y acción a la derecha:
        Presentar → «Abrir en pantalla ↗» (`url_documento`; si no hay, «enlace
          pendiente», como hoy).
        Enviar → «PDF ↓» si hay descarga `pdf`; si no, «pídeselo a Amador Sobrino»
          como enlace `mailto:` al correo del dueño cuando `personas.json` lo tiene,
          y texto plano cuando no.
        Adaptar → «PPT ↓» si hay `pptx` («Word ↓» y «Excel ↓» para `docx` y `xlsx`);
          si no, el mismo «pídeselo a …».
      Las referencias (`tipo: "Referencia"`) no llevan el bloque. Si una descarga
      trae `nota`, se pinta en `footer-note` debajo de su fila.

   3. Tarjetas de biblioteca y carriles de solución y práctica: el enlace principal
      pasa a llamarse «Abrir en pantalla ↗» en todo el portal (era «Abrir el
      documento ↗»); a su lado, en mono, «PDF ↓» y «PPT ↓» solo cuando existen. Sin
      iconos. Con las listas vacías, las tarjetas se ven exactamente como hoy.

   4. Una prueba, sin construir nada: abre en tu Chromium headless la ficha de
      servicio de Modernización y el one-pager de Puesto de trabajo (los HTML del
      hub) e imprímelos a PDF (A4, márgenes por defecto, fondos activados). Deja los
      dos PDF en `docs/medicion/prueba-pdf/` y dime en dos líneas cómo salen (si se
      cortan, si pierden la fuente, si el deck por iframes ni lo intentas). Con eso
      Susana decide si «Enviar» puede ser «Guardar como PDF» para las piezas de una
      página, sin ficheros que mantener.

   Commit: «v3: Llévatelo en la ficha de pieza, descargas por formato, abrir en
   pantalla (revisión 16)»

BD · CONTACTOS: UN DIRECTORIO, NO UN LISTADO

   `personas.json` tiene 24 filas para 8 personas, sin teléfonos, sin título en
   tres, y `/contactos/` repite a Jorge cuatro veces sin responder a «¿a quién llamo
   por Infraestructura?» con un dato que sirva para llamar. Un modelo nuevo y dos
   vistas.

   1. `data/personas.json` pasa a una entrada por persona, con `id`. Sustituye el
      fichero entero por esto (los datos son los que hay hoy; los nulos son huecos
      reales que se piden a los SM después del 8):

      [
        { "id": "carmen-rode", "nombre": "Carmen Rode", "titulo": null, "correo": null, "telefono": null, "teams": null, "practica": "process-intelligence", "foto": null },
        { "id": "carla-gonzalez", "nombre": "Carla González", "titulo": null, "correo": null, "telefono": null, "teams": null, "practica": "process-intelligence", "foto": null },
        { "id": "jorge-herrero", "nombre": "Jorge Herrero", "titulo": null, "correo": null, "telefono": null, "teams": null, "practica": "software-development", "foto": null },
        { "id": "daniela-ongaro", "nombre": "Daniela Ongaro", "titulo": "Head of Data", "correo": "daniela.ongaro@entelgy.com", "telefono": null, "teams": null, "practica": "data-intelligence", "foto": null },
        { "id": "luis-sanz", "nombre": "Luis Sanz", "titulo": "Technical Lead · Data Intelligence", "correo": null, "telefono": null, "teams": null, "practica": "data-intelligence", "foto": null },
        { "id": "amador-sobrino", "nombre": "Amador Sobrino", "titulo": "Solution Manager · Smart Operations", "correo": "amador.sobrino@entelgy.com", "telefono": null, "teams": null, "practica": "smart-operations", "foto": null },
        { "id": "alfredo-zurdo", "nombre": "Alfredo Zurdo", "titulo": "Head of Digital Change", "correo": "alfredo.zurdo@entelgy.com", "telefono": null, "teams": null, "practica": "digital-change", "foto": null },
        { "id": "cristina-aparicio", "nombre": "Cristina Aparicio", "titulo": null, "correo": "cristina.aparicio@entelgy.com", "telefono": null, "teams": null, "practica": "digital-change", "foto": null }
      ]

      `foto`, cuando la haya, es una ruta bajo `/assets/personas/<id>.jpg` (cuadrada,
      400 px, ≤ 40 KB). Mientras es nulo, se pinta la inicial del nombre en un
      círculo navy (`.avatar`), 48 px en tarjetas y 32 px en tablas.

   2. Cada solución lleva `contactos: { "comercial": "<id>", "tecnico": "<id> | null" }`
      en su JSON de práctica, y cada práctica `responsable_id`. Valores:
        process-mining → comercial carmen-rode, tecnico null
        process-automation-ai → carla-gonzalez, null
        modernizacion · mantenimiento · asistencia-tecnica → jorge-herrero, null
        data-intelligence → daniela-ongaro, luis-sanz
        smartops-workplace · smartops-infra → amador-sobrino, null
        iability · preservia → alfredo-zurdo, null
        ogh-ia → alfredo-zurdo, cristina-aparicio
      `responsable_id`: process-intelligence → ["carmen-rode", "carla-gonzalez"];
      software-development → "jorge-herrero"; data-intelligence → "daniela-ongaro";
      smart-operations → "amador-sobrino"; digital-change → "alfredo-zurdo".
      Los campos `especialista`, `dueno` y `responsable` con nombre de pila se
      quedan como están (los usan las piezas y `nombreCompleto()`); el build pasa a
      leer los contactos por `id` donde los haya.

   3. `/contactos/`, vista 1, arriba, porque es la pregunta: eyebrow «Directorio»,
      H1 «A quién llamo», lede «Por solución: quien la vende y quien la sostiene.
      Donde falta el técnico, se dice quién lo está pidiendo.» Una tabla por
      práctica, con la cabecera de práctica en fila navy (nombre de la práctica y
      «Responsable: Jorge Herrero») y una fila por solución con tres columnas:
      Solución (enlace a su página) · Comercial · Técnico. Cada celda de persona:
      avatar 32 px, nombre en negrita (enlace a su tarjeta de la vista 2), título
      en `footer-note` si lo hay, correo como `mailto:` si lo hay, teléfono como
      `tel:` si lo hay. Lo que no hay no se pinta, sin «por confirmar» en título ni
      teléfono. La celda de técnico vacía dice, en mono: «por confirmar · lo pide
      Susana a Jorge Herrero» (el comercial de esa solución). En móvil, la tabla se
      apila en tarjetas por solución.

   4. Vista 2, debajo: eyebrow «Las personas», H2 «Ocho personas, todo lo que llevan»
      (el número lo calcula el build), rejilla de tarjetas de persona (tres por fila
      a 1440; una en móvil): avatar 48 px, nombre a 24, título, correo, teléfono,
      Teams si lo hay, y una línea con lo que lleva, generada desde los datos:
      «Responsable de Software Development · Comercial en Modernización de
      aplicaciones, Mantenimiento evolutivo y Asistencia técnica aumentada»;
      «Técnico en Data Intelligence». Cada tarjeta con `id` para el enlace de la
      tabla. Fuera las líneas «Teams · canal del área (pendiente de enlace)» y
      «Segundo contacto: en preparación»: la nota de pie de página ya dice que los
      canales se enlazan cuando estén validados.

   5. Solución (`solucionPage`), cabecera: «Especialista: Amador Sobrino» pasa a
      «Comercial: Amador Sobrino · Técnico: por confirmar», con el «por confirmar»
      como chip (es excepción, E8) y el nombre del técnico cuando lo hay. «¿Falta
      algo?» sigue escribiendo al comercial. Práctica, «A quién llamar»: la misma
      tabla de la vista 1, solo con sus soluciones, en vez de la frase actual.

   6. `check-data.js`: cada `contactos.comercial` y `tecnico` no nulo existe en
      `personas.json`; cada `responsable_id` también; ningún `id` repetido.

   Commit: «v3: contactos como directorio: una persona por entrada, comercial y
   técnico por solución, tabla a quién llamo (revisión 16)»

BE · LOS CARRILES VACÍOS DE «MATERIAL COMÚN»

   Smart Operations y Digital Change enseñan «Sin pieza para este momento todavía»
   en dos de los tres carriles porque sus one-pagers y fichas cuelgan de las
   soluciones. Regla nueva en `practicaPage`: si la práctica no tiene pieza común
   para un momento, el carril toma la mejor pieza de sus soluciones para ese
   momento (misma regla que la portada: `sale_al_cliente` en `si`, `vigente`, tipo
   distinto de «Referencia», y `momento_comercial` igual al del carril; si hay
   varias, la de la primera solución en orden). El eyebrow de esa tarjeta lleva la
   solución: «One-pager · Puesto de trabajo». Solo si tampoco así hay pieza, se
   queda el aviso. Las tres prácticas que ya tienen pieza común no cambian.

   Commit: «v3: los carriles de material común toman la mejor pieza de sus
   soluciones cuando no hay pieza común (revisión 16)»

BF · LO QUE NO TE PIDO

   - Ningún cambio de copy fuera de BA, ni de estados, usos, citabilidades o momentos.
   - Las dos soluciones de Smart Operations no cambian (BA es solo la práctica).
   - La prosa de las soluciones no se parte en listas: eso es la parte B de la
     propuesta y va después del 10, con vista previa por solución.
   - Ninguna foto se inventa ni se busca; `foto` queda nulo en las ocho.
   - Ninguna descarga se inventa: `descargas` queda vacío hasta que los SM digan
     dónde están los PDF y PPT.
   - Autodiagnóstico: no se toca.
   - Si algo no está en este mensaje ni en `docs/notas-susana-revision-16.md`, para y
     pregunta.

Al terminar: build, check-data.js sin errores, medir.js en verde en los seis criterios
(criterio 3 con los bloques opcionales, peso ≤ 150 KB en todas, `/contactos/`
incluida), barrido de canon vacío, capturas a 1440 y 390 de la práctica y una solución
de Smart Operations, `/contactos/` y una ficha de pieza en `docs/medicion/`, la prueba
de PDF de BC.4 con tus dos líneas, nota de revisión 16 en §0 de la spec (ya está
escrita en `docs/`; compruébala) y descripción del PR con la línea de la 16. Para y
dime si: la rejilla de cinco fuerzas no cabe a 390, «La propuesta» a dos columnas deja
una columna mucho más larga que la otra en alguna solución (dime cuál), `/contactos/`
pasa de 150 KB, o algún `id` de contacto no cuadra con lo que hay en los JSON.
