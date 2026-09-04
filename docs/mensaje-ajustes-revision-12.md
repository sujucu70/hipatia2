Revisión 12 (4 sep). La 11b está bien aplicada (`fdcfc09`): subtitular nuevo, rejilla
de prácticas apilada en móvil. Ahora he leído el texto visible de las 22 páginas del
recorrido de la demo con los criterios que MA repite en cada reunión: que la frase no
valga para Minsait o Accenture, que un comercial sepa qué contar leyéndola una vez,
que la IA aterrice cómo y dónde, que nada prometa lo que solo un caso firmado puede
decir, y que el portal dé munición sin decirle a nadie cómo vender. Salen textos, no
estructura: casi todo son `data/*.json`; en build.js solo las líneas que se indican.
No cambia ninguna práctica, ningún estado, ningún uso ni las cifras de los seis
casos de Jorge. Haz pull antes (este mensaje está en docs/; la spec lleva la nota de
revisión 12). Commit por bloque. Los textos van entre comillas latinas; el contenido
del campo es lo de dentro.

Z · PORTADA · LAS PROPUESTAS DE PRÁCTICA Y LA NOTA DEL EXECUTIVE DECK

   Las cinco líneas de «La oferta» son lo primero que MA lee. Tres no pasan su filtro
   de sustitución y una nombra la IA sin aterrizarla. `propuesta_portada` de cada
   práctica (recuerda que desde la revisión 11 la cabecera de `/practicas/<id>/` la
   hereda):

   data/software-development.json
     «Modernizar y mantener aplicaciones críticas sin parar el negocio ni pedir
     partida nueva.»
   data/smart-operations.json
     «Puesto de trabajo e infraestructura como un solo servicio, medido en lo que
     nota la gente.»
   data/digital-change.json
     «Que lo desplegado se use de verdad: cultura, conocimiento y gobierno humano de
     la IA.»
   data/data-intelligence.json
     «Que el dato sirva para decidir: gobierno de datos y modelos, analítica e IA en
     producción.»

   Process Intelligence se queda como está.

   Y la tarjeta corporativa: la nota del Executive Deck es la única de las seis que
   nombra el interior del documento («slide 08», «el caso UNED»), y quien la lee en la
   demo es el CEO. El chip «revisar» se queda (revisión 9). Solo `nota_de_uso` de
   `corp-exec-global` en `data/materiales.json`:

     «Deck corporativo v6 (jul 2026): el que presentas en reunión. Las cifras de
     resultados por cliente y los logos siguen pendientes de autorización: preséntalo,
     no lo envíes en frío.»

   Commit: «v3: propuestas de práctica en portada y nota del Executive Deck (revisión 12)»

AA · /ENTELGY · LA PÁGINA QUE CUENTA MA

   Todo en `data/corporativo.json` → `relato`, salvo el eyebrow.

   1. La Oficina vuelve a leerse como un producto con fases, la misma corrección que
      MA hizo el 25 de mayo sobre el deck: es el método operado desde dentro del
      cliente, no algo que se vende aparte. Y «delegamos» apunta al revés (Entelgy no
      delega en el cliente: le devuelve la función). `relato.otg`:

      titulo
        «Cuando el cambio no cabe en un proyecto: la Oficina de Transformación y
        Gobierno»
      texto
        «Es el mismo método, operado desde dentro del cliente cuando hay que sostener
        el cambio en el tiempo. No se vende aparte ni hace falta en cada proyecto: se
        activa cuando la situación lo pide. Diagnosticamos qué hay que gobernar,
        asumimos esa función con roles y backlog acordados, y se la devolvemos al
        equipo del cliente a medida que puede llevarla.»
      fases[0]  titulo «Diagnóstico» · texto «Qué hay que gobernar y quién lo lleva hoy.»
      fases[1]  titulo «Operación» · texto «Asumimos las funciones acordadas, con roles
                y backlog.»
      fases[2]  titulo «Transferencia» · texto «Se la devolvemos al equipo del cliente,
                función a función.»

      El nombre (Transformación y Gobierno / Gobernanza) lo confirma MA el 8; hasta
      entonces se queda como está.

   2. A «Qué nos diferencia» le falta el primer diferenciador de MA (organizaciones en
      marcha, no greenfield) y lleva la versión tibia de su frase protegida. Solo el
      texto; el título se queda. `relato.entradas[1].texto` (clave `diferencia`):

        «La tecnología es la parte fácil. Lo difícil es que una organización que ya
        está en marcha cambie cómo trabaja: procesos, personas y cultura deciden si la
        transformación llega a resultados o se queda en la entrega.»

   3. «Cómo lo hacemos» habla en consultor. `relato.entradas[2].texto` (clave `como`):

        «Miramos cómo está la situación de verdad, diseñamos adónde ir y quién lo
        gobierna, lo implantamos sobre lo que ya existe, preparamos a la gente que lo
        va a usar y medimos el impacto. Gobierno, seguridad y operación sostenible van
        en todo el ciclo.»

   4. «Tensión» y «silos» son palabras de consultor y el «no X, sino Y» es de
      plantilla. `relato.entradas[3]` (clave `ayuda`):

      titulo «Entramos por el problema que el cliente tiene delante.»
      texto  «Procesos, software, datos e IA, operaciones o cambio: cada práctica es
             una entrada a la misma forma de trabajar, y se suman las que la situación
             pide.»

   5. El botón de portada dice «Cómo presentar Entelgy →» y la página abre con
      «Relato corporativo». En build.js (`entelgyPage`): eyebrow «Cómo presentar
      Entelgy» y `title` «Cómo presentar Entelgy · Hipatia». El H1 «Entelgy, en una
      conversación» se queda.

   Commit: «v3: /entelgy habla como MA: la Oficina como método, el primer diferenciador, sin tensión ni silos»

AB · LAS CINCO PÁGINAS DE PRÁCTICA

   1. «Acompañar», dos veces, en Digital Change. Está en la lista de lo que no se dice
      y fue una de las tres palabras que la revisión 11 sacó de las cabeceras.
      `data/digital-change.json`:

      que_cubre
        «Llevar el cambio de principio a fin: convertir el despliegue en uso sostenido
        y activar cultura, conocimiento y gobierno humano de la IA.»
      capacidades[0].texto (Transformar)
        «Llevar un cambio grande de principio a fin, conectando tecnología, formas de
        trabajar y el resultado que se busca.»

      Los títulos Transformar · Adoptar · Concienciar no se tocan.

   2. «Qué no prometemos» está escrito como descargo legal, en impersonal («No se
      presenta…», «No se promete…»). En primera persona. `que_no_prometer`:

      process-intelligence
        «No vendemos automatizar por automatizar ni sustituir equipos de golpe. Antes
        de proponer minería, automatización o agentes miramos el proceso, los datos y
        cómo se opera de verdad.»
      software-development
        «No cerramos plazo ni alcance de una modernización sin haber visto la
        aplicación, sus dependencias y lo crítica que es. Tampoco es solo hacer
        funcionalidades: hablamos de sostener el sistema, de su calidad y de cuánto
        cuesta cambiarlo.»
      data-intelligence
        «No vendemos IA porque sí ni prometemos resultados sin revisar antes datos,
        gobierno, riesgos y adopción. Tener datos no significa que sean de calidad,
        que se puedan usar o que sirvan para un caso de IA.»
      smart-operations
        «No proponemos una herramienta ni un cambio de operación sin entender antes el
        servicio que hay, quién lo usa y con qué restricciones se opera. Tampoco es
        arreglar la infraestructura por su cuenta: el resultado depende de la
        experiencia, de los procesos y de que la gente lo adopte.»
      digital-change
        «No es una campaña de comunicación ni una formación suelta: va pegada a un
        cambio concreto en cómo se trabaja. Adoptar IA obliga a revisar para qué, con
        quién, en qué procesos y con qué reglas; dar acceso a una herramienta no
        basta.»

   3. «La pregunta que abre» no se puede decir de un tirón: son dos preguntas en una.
      `pregunta_comun`:

      process-intelligence
        «¿En qué parte del proceso se os va más tiempo, y cómo lo sabéis?»
      software-development
        «¿Qué aplicación os frena hoy más de lo que os ayuda?»
      data-intelligence
        «¿Qué decisión tomáis hoy sin fiaros del todo del dato que tenéis?»
      smart-operations
        «¿Qué os cuesta más hoy: que la gente pueda trabajar sin fricción o que la
        infraestructura no falle?»
      digital-change
        «¿Qué tendría que cambiar en el día a día de la gente para que esto se use de
        verdad?»

      La de Data Intelligence se repite como «Cómo abres» en su solución:
      `soluciones[0].propuesta.como_abres` lleva la misma pregunta nueva (con sus
      comillas, como está ahora).

   4. Data Intelligence pinta una nota de trabajo: «…(revisión 5, 3 sep)… Cuando
      Daniela valide el desglose, se abre en soluciones.» Es una referencia al
      proceso de construcción, como los § que quitó la revisión 11. Renombra la clave
      `solucion_global_nota` a `nota_interna` (mismo texto; es para nosotros) y quita
      la línea de build.js que la pinta bajo «Soluciones» (`practicaPage`, la del
      `pr.solucion_global_nota`). No la sustituyas por otra frase: la página ya dice
      «una solución» y «Ver la solución».

   5. Dos repeticiones en Data Intelligence. `que_cubre`:

        «Gobierno del dato y de los modelos, analítica para decidir e IA aplicada,
        conectados para que el dato sirva a una decisión real.»

      y `primer_avance.nota` (hoy arranca «Primer avance para…» justo detrás del
      rótulo «Primer avance:»):

        «Contrasta caso de uso, datos implicados, gobierno y condiciones de
        producción. Plazo y alcance se validan con la especialista.»

   6. Software Development, nota bajo Capacidades: es la decisión provisional escrita
      como acta. Convertida en munición. `capacidades_nota`:

        «Si te preguntan por Spec-Driven o por la Factoría SEAS: no son soluciones
        aparte, van dentro de estas tres.»

   7. Tres líneas de build.js en las páginas de práctica:
      - `practicasIndex`, lede: «Cinco prácticas, un mismo método. Entra por la
        que responde al problema que tiene delante tu cliente.»
      - `practicaPage`, «A quién llamar»: «Especialista por solución en cada ficha.»
        pasa a «Cada solución lleva su especialista.» («ficha» es una pieza de
        material; en pantalla solo hay prácticas, soluciones y materiales).
      - `practicaPage`, `page({... desc: pr.propuesta ...})`: la previsualización que
        sale cuando alguien pega la URL en Teams sigue diciendo «Acompañamos…»,
        «Ayudamos a…». Pinta `pr.propuesta_portada || pr.propuesta`, como ya hacen
        la tarjeta y el lede.

   Commit: «v3: las prácticas hablan en primera persona y preguntan de un tirón»

AC · MODERNIZACIÓN · LA ÚNICA SOLUCIÓN COMPLETA

   Todo en `data/software-development.json` → `soluciones[0]` (id `modernizacion`),
   salvo la nota de referencias, que está en build.js.

   1. La primera línea nombra la IA sin decir qué hace; el cómo está tres pantallas
      más abajo, en la ficha de NASERTIC. `propuesta.que_es`:

        «Cogemos las aplicaciones legacy que ya frenan al negocio y las modernizamos
        sin parar la operación, con el método Spec-Driven: la IA documenta y traduce
        el código que ya existe, y el equipo de Entelgy gobierna y valida cada paso.»

   2. Foreworth aparece cinco veces en la página y nunca se dice qué es. Una vez
      basta, la primera. `propuesta.por_que_nosotros`:

        «El mercado moderniza por horas y pidiendo partida nueva. Entelgy mide la
        productividad que recupera en el mantenimiento con Foreworth, una medición
        externa, y reinvierte esa eficiencia en modernizar las mismas aplicaciones sin
        aumentar el presupuesto ya comprometido. Que lo mida un tercero es lo que
        aguanta delante del CFO.»

   3. «Sin comprometer al cliente a nada» choca con el «Primer contrato» de tres
      líneas más abajo: un comercial puede regalar el Assessment.
      `propuesta.objecion_principal.respuesta`:

        «Funciona hoy. El día que se rompa, quien lo construyó ya no está, y cada año
        que sigue ahí cuesta más sostenerlo. El primer paso solo mide: el Assessment
        dice qué tocar y qué dejar, y no obliga al cliente a seguir con nosotros
        después.»

   4. El primer paso habla en clave («la estrategia, el gobierno y el método se
      quedan en Entelgy» es el guardarraíl del playbook, escrito para nosotros).
      `propuesta.primer_paso.nota`:

        «Primer contrato. Entrega el triaje del portfolio (qué se moderniza, qué no,
        qué pasa a mantenimiento) y el business case para Dirección. El método y el
        plan de gobierno no se entregan sueltos: forman parte del proyecto que viene
        después. Precio: por cuenta, con Jorge.»

   5. «Para prepararte» · las frases para la cuenta. `kit.frases_cuenta`:

      nota
        «Ejemplo sobre una cuenta ficticia, Grupo Lantia (aseguradora: core de pólizas
        Java de 11 años, sin arquitecto cloud, deuda técnica de unos 1,8 M€ al año,
        DORA encima). Cambia los datos por los de tu cuenta.»
      frases[0].texto (Por la regulación) — el AI Act pone fecha a los sistemas de IA
      de alto riesgo, no a un core de pólizas por ser antiguo; un CIO lo sabe:
        «DORA ya os pide demostrar la resiliencia del core de pólizas; y si ese core
        decide precio o riesgo con IA, el AI Act le pone fecha: diciembre de 2027.
        Documentar ese core deja de ser opcional, y lo que os propongo es que salga
        del mantenimiento que ya pagáis, no de un proyecto extra.»
      regla — era una instrucción de venta:
        «Estas frases abren y cualifican; no sostienen la reunión entera. Cuando el
        cliente muerde, el siguiente paso es traer a Jorge.»

      Las frases [1] y [2] se quedan.

   6. El pitch por rol. `kit.pitch_nota` era consejo de venta («entra por ahí siempre
      que puedas»), justo lo que MA pidió no hacer:

        «El presupuesto suele moverlo el CFO o el CCO.»

      y `kit.pitch_por_rol[3].le_mueve` (Dir. Ops) no contestaba a su pregunta y
      decía «certificada» donde el diferenciador dice «medida»:

        «salir del piloto con una entrega que se mide (Foreworth), no otro piloto.»

   7. Las objeciones. `kit.objeciones[]`.respuesta:

      [0] (Ya tenemos proveedor) — «certificada» pasa a «medida»:
        «No pedimos cambiarlo. Complementamos en la pieza que más duele, con métricas
        auditables. ¿Tu proveedor puede decirte qué productividad entregó el mes
        pasado, medida por un tercero?»
      [1] (No vemos urgencia) — «Gartner: 20–40%» es autor sin obra ni año, y la
      disciplina de fuentes no lo admite; si Jorge tiene el informe, se recupera:
        «La deuda técnica no espera: cada año cuesta más sostener lo mismo y queda
        menos gente que lo conozca. Y el AI Act pone fecha a los sistemas de alto
        riesgo: diciembre de 2027. Quien empieza ahora llega con margen; quien
        espera, con semanas.»
      [2] (Esto nos lo hace cualquiera) — «esa firma no la encuentras en otra
      propuesta» es el «nadie más lo hace» que ya se dio por indefendible:
        «Pídeles que firmen lo que firmamos nosotros: reinvertir la eficiencia
        recuperada en el propio mantenimiento, sin subir el presupuesto, con la
        productividad medida por un tercero (Foreworth). Nosotros lo ponemos por
        escrito.»

   8. build.js, `solucionPage`, bloque 4 · Referencias, el `footer-note` bajo las
      tarjetas: «Elige la referencia por parecido de situación, no por notoriedad» es
      consejo de venta. Queda:

        «Citable en presentación. El envío formal de la referencia al cliente se
        autoriza por cuenta.»

   Commit: «v3: Modernización aterriza la IA, mide en vez de certificar y no da consejos de venta»

AD · MATERIALES · LAS NOTAS DE USO DICEN PARA QUÉ SIRVE CADA PIEZA

   Todo en `data/materiales.json`, solo `nota_de_uso` (y un `contexto` al final). Los
   estados, usos y fechas no cambian.

   1. Veinte notas siguen diciendo el tipo de pieza con otras palabras («Ficha de
      detalle de servicio.», «Síntesis cliente de la práctica.»). Se ven en «Material
      común para cliente» de las cinco prácticas y en las diez soluciones en
      preparación, y parecen maqueta. Regla que ya está decidida: el one-pager es una
      cara que persuade y se deja; la ficha son dos caras que validan ante quien
      decide dentro.

      process-onepager
        «Una cara para dejar tras la primera reunión: qué es Process Intelligence y
        por qué Entelgy.»
      process-ficha
        «Dos caras para quien lo valida dentro (IT, compras): qué incluye el servicio
        y cómo se contrata.»
      dataai-onepager
        «Una cara para dejar tras la primera reunión: qué es Data Intelligence y por
        qué Entelgy.»
      dataai-ficha
        «Dos caras para quien lo valida dentro: qué incluye Data Intelligence y cómo
        se contrata.»
      smartops-onepager-workplace
        «Una cara para dejar tras la primera reunión: el puesto de trabajo como un
        solo servicio y por qué Entelgy.»
      smartops-onepager-infra
        «Una cara para dejar tras la primera reunión: infraestructura crítica operada
        con previsión y por qué Entelgy.»
      iability-onepager
        «Una cara para abrir una primera reunión: qué es IAbility y qué cambia en la
        gente que lo usa.»
      iability-ficha
        «Dos caras para quien lo valida dentro: qué incluye IAbility y cómo se
        contrata.»
      preservia-ficha
        «Dos caras para quien lo valida dentro: qué incluye PreservIA y cómo se
        contrata. Se deja tras la primera visita.»
      preservia-publico
        «Una cara para abrir una primera reunión en una administración: PreservIA
        contado para el sector público.»
      preservia-privado
        «Una cara para abrir una primera reunión en una empresa: PreservIA contado
        para el sector privado.»
      ogh-ficha
        «Dos caras para quien lo valida dentro: qué incluye la Oficina de Gobernanza
        Humana de la IA y cómo se contrata.»
      ogh-onepager
        «Una cara para abrir una primera reunión: qué decide una Oficina de
        Gobernanza Humana de la IA y por qué hace falta.»
      automation-deck
        «Deck para la reunión introductoria: del proceso a la automatización y los
        agentes, con criterio de negocio.»
      automation-ficha
        «Dos caras para quien lo valida dentro: qué incluye la automatización de
        procesos y cómo se contrata.»
      automation-onepager
        «Una cara para dejar tras la primera reunión: qué automatizamos y por qué
        Entelgy.»
      software-mantenimiento-ficha
        «Dos caras para quien lo valida dentro: qué incluye el mantenimiento evolutivo
        y cómo se contrata.»
      software-mantenimiento-onepager
        «Una cara para dejar tras la primera reunión: un mantenimiento que paga la
        evolución, y por qué Entelgy.»
      software-asistencia-ficha
        «Dos caras para quien lo valida dentro: qué incluye la asistencia técnica
        aumentada y cómo se contrata.»
      software-asistencia-onepager
        «Una cara para dejar tras la primera reunión: especialistas con una entrega
        que se mide, y por qué Entelgy.»

   2. Cuatro notas de Modernización con jerga de trabajo. La del autodiagnóstico es
      la que más importa: los chips dicen «sale al cliente · vigente» y la nota deja
      que un comercial envíe a una cuenta real un ejemplo ficticio sin validar.

      mod-autodiagnostico
        «Diez preguntas que el cliente responde solo: le devuelven cuánto le expone su
        legacy y cuál es el siguiente paso. Lo que abre hoy es el ejemplo de Grupo
        Lantia, una cuenta ficticia. Antes de enviárselo a una cuenta real, Jorge
        tiene que validar las preguntas y el índice.»
      mod-deck-ejecutivo («AT» no lo descifra un comercial nuevo)
        «Deck de la práctica para la reunión introductoria (v3, jul 2026). Jorge tiene
        tres cambios pendientes: la slide de Asistencia Técnica, la de referencias y
        un anexo de créditos. Sirve para preparar la reunión; no lo envíes hasta la
        versión corregida.»
      mod-business-case
        «En preparación · dueño: Jorge / producto · fecha objetivo: sept 2026.
        Plantilla para armar el business case tras el assessment. Uso interno hasta
        decidir qué cifras de productividad (Foreworth) pueden salir al cliente.»
      mod-ficha-servicio (el comercial no sabe qué 40% es)
        «Ficha de dos caras para dejar al cliente; valida ante IT y compras. V1
        provisional: menciona el reparto del 40% del ahorro y Jorge aún tiene que
        confirmar que puede ir en un documento público. Si el cliente pregunta por
        esa cifra, remite a Jorge.»

   3. `mod-caso-h10`, campo `contexto`: «…el mismo movimiento que propone el kit de
      visita.» «Kit» no existe en pantalla. Queda:

        «Cadena hotelera. Entró por un assessment como primer contrato, el mismo
        primer paso que propone Modernización.»

   Commit: «v3: las notas de uso dicen para qué sirve cada pieza, sin jerga de trabajo»

AE · LAS DIEZ SOLUCIONES EN PREPARACIÓN

   1. Bajo el rótulo «Por qué Entelgy» hay diez verdades generales sin Entelgy
      dentro («La tecnología aporta cuando se apoya en cómo opera realmente la
      organización…»): el filtro de sustitución de MA al pie de la letra, y el 8 las
      abrirá. La spec prefiere el hueco declarado a la maqueta que parece llena. Dos
      movimientos:

      a) build.js, `solucionPage`, la fila «Por qué Entelgy»: si `por_que_nosotros`
         está vacío y `s.estado === "en_preparacion"`, la fila se pinta igualmente
         con el hueco en el lugar del texto: «En preparación · dueño: <dueno> · fecha
         objetivo: <fecha_objetivo>», con el mismo estilo `pending` que usan los demás
         huecos. Hoy `filaProp` no pinta si no hay texto; solo esta fila cambia.

      b) Datos. En las ocho soluciones que no tienen argumento propio, el texto actual
         de `propuesta.por_que_nosotros` pasa a una clave nueva `propuesta.planteamiento`
         (se conserva por si el SM quiere partir de él; no se pinta) y
         `por_que_nosotros` queda en `null`: `process-automation-ai`,
         `data-intelligence`, `smartops-workplace`, `smartops-infra`, `iability`,
         `preservia`, `ogh-ia`, `asistencia-tecnica`.

         En las dos que sí tienen argumento firmado, `por_que_nosotros` nuevo:

         mantenimiento (`data/software-development.json`; sale del caso DGOJ, con
         sign-off de Jorge del 16-jul):
           «La eficiencia que la IA recupera en el mantenimiento diario se reinvierte
           en modernizar las mismas aplicaciones, sin partida nueva y medida por un
           tercero. En un regulador estatal el mantenimiento cuesta hoy entre un 40 y
           un 60% menos.»
           Y añade `"mod-caso-dgoj"` a `referencias` de esta solución (hoy `[]`): la
           cifra tiene que ir con su caso al lado, no con «Sin referencia autorizada»
           tres pantallas más abajo. El caso sigue también en Modernización.

         process-mining (`data/process-intelligence.json`; dato canónico de Carmen,
         deck cerrado el 29-jun):
           «Partner Gold de Celonis, con más de cincuenta proyectos y pruebas de valor
           en España, Chile y Colombia, y un método que mira el proceso real antes de
           proponer IA, automatización o agentes.»

   2. Seis líneas de una frase que no dicen qué se vende. Se ven en portada (cajas de
      solución), en la práctica y en la cabecera de cada solución. `una_linea`:

      mantenimiento
        «Mantener producción y pagar la evolución con la eficiencia que el
        mantenimiento recupera.»
      asistencia-tecnica
        «Especialistas de los Centros de Excelencia dentro de tu equipo, con una
        entrega que se mide.»
      smartops-workplace
        «Soporte, dispositivo y autoservicio como un solo servicio, medido en lo que
        nota el empleado.»
      smartops-infra
        «Operar infraestructura crítica y cloud viendo el fallo y el coste antes de
        que lleguen.»
      preservia
        «Capturar el conocimiento de los expertos antes de que se vaya con ellos, y
        ponerlo donde se usa.»
      ogh-ia
        «Decidir qué IA avanza, cuál se frena y quién responde de cada decisión.»

      Las de Inteligencia de procesos, Automatización, Data Intelligence e IAbility se
      quedan.

   3. «Tarjeta» es vocabulario de hipatia2, no del catálogo. `pendiente.texto` en las
      diez (`pendingBox` ya pone delante «En preparación.» y detrás dueño y fecha):

      en ocho: «Propuesta completa, pitch por rol, objeciones, referencias y
      materiales de esta solución»
      en mantenimiento y asistencia-tecnica: «Propuesta completa, casos y materiales
      de esta solución»

   Commit: «v3: «Por qué Entelgy» solo donde hay argumento; una línea que dice qué se vende»

AF · LAS DOS PÁGINAS FUERA DEL MENÚ, CONTACTOS Y EL PIE

   1. `/punto-de-partida` dice en voz alta que es para la demo: si MA la abre delante
      del CEO, la página anuncia que está montada para él. build.js, `puntoPartidaPage`:
      - eyebrow «Demo a Dirección · fuera del menú» → «Por qué Hipatia».
      - la línea `<p class="footer-note">${esc(pp.nota || "")}</p>` se quita; el campo
        `punto_de_partida.nota` se queda en el JSON sin pintarse.
      - `desc: "As-is y to-be para la demo a Dirección."` → «De dónde parte Hipatia y a
        dónde va.»
      Y el as-is juzga a quien llevaba Hipatia antes (MA pidió en junio un as-is «sin
      herir»). `data/corporativo.json` → `punto_de_partida.as_is.texto`:

        «Hoy el material comercial está repartido en un SharePoint que funciona como
        archivo: se guarda bien, pero cuesta saber cuál es la pieza buena, si está
        vigente y si puede salir a cliente.»

   2. `/lo-que-viene`, cinco huellas de trabajo y una decisión desactualizada.
      build.js, `loQueVienePage`: eyebrow «Fuera del menú» → «Hoja de ruta». Y en
      `data/corporativo.json` → `lo_que_viene`:

      intro («v3» es el número de build)
        «Lo que Hipatia deja fuera a propósito por ahora y llegará cuando el uso lo
        justifique. Nada de esto se simula hoy.»
      items[0].texto («kit» no existe en pantalla)
        «Marcar las señales oídas en una cuenta y que Hipatia proponga la solución y
        su material.»
      items[1] (el 3-sep se decidió no contar con el asistente de Digital Change y
      hacer algo propio y sencillo)
        texto «Un asistente sencillo que arma la visita a partir de la cuenta y la
              solución.»
        dueno «por asignar»
      items[3].texto
        «Llevar el autodiagnóstico de Modernización a más soluciones.»
      items[4] («el Menti» y «MA» son de puertas adentro)
        texto «La lectura de mercado y competencia que pidió el equipo comercial en
              junio, más allá del benchmark por solución.»
        dueno «Corporativo · Jorge»

   3. `/contactos`. MA, el 23 de junio: «foto + nombre + apellido… ¿a quién llamo?».
      En una compañía de dos mil personas hace falta el apellido. `data/personas.json`,
      campo `nombre` en todas las entradas de cada persona (Jorge sale cuatro veces,
      Alfredo cuatro, Carmen y Carla dos):

        Jorge → «Jorge Herrero» · Alfredo → «Alfredo Zurdo» · Carmen → «Carmen Rode» ·
        Carla → «Carla González»

      Daniela y Amador se quedan con el nombre hasta que tengamos el apellido. Solo
      este fichero: `responsable`, `especialista` y `dueno` en los demás JSON siguen
      con el nombre de pila, que es como se les llama en la práctica.

      Y build.js, `contactosPage`, lede: fuera la segunda frase, que explica el portal
      en vez de usarse. Queda «Por práctica: responsable, especialista por solución y
      canal de Teams.»

   4. La banda del CRM en todas las páginas (build.js, `page`, `.crm-band`) cumple la
      orden de Jorge y se puede decir en la mitad:

        «Hipatia alimenta al CRM, que sigue siendo el registro único.»

      (sin negrita; una sola frase).

   Commit: «v3: punto de partida, lo que viene y contactos sin huellas de trabajo»

AG · GUARDARRAÍL

   La nota de Data Intelligence («revisión 5, 3 sep») no la cazó el barrido porque no
   lleva el símbolo §. En medir.js, criterio 6, añade al barrido de canon:
   `revisión` seguido de dígito, «acompañ» (cualquier forma de acompañar) y «Demo a
   Dirección». Que el informe diga en qué ruta, como ahora. Estas tres
   comprobaciones nuevas saltan `/autodiagnostico/` (es la página de julio, lleva
   «acompañar» y no se toca). Y en CLAUDE.md, en la línea «Nunca en pantalla», añade al final: «, notas
   de revisión (“revisión N”), “acompañar”».

   Commit: «v3: el barrido de canon también caza «acompañar» y las notas de revisión»

AH · LO QUE NO TE PIDO

   - Estados: `mod-autodiagnostico` y `mod-ficha-servicio` siguen `vigente`; solo
     cambia la nota. Ningún otro estado, uso ni fecha cambia.
   - El titular de portada se queda (revisión 6). La `propuesta_portada` de Process
     Intelligence se queda.
   - Los títulos de las capacidades de Digital Change, los nombres de las once
     soluciones y las cifras de los seis casos de Jorge: no se tocan.
   - «Qué es» y «Cómo abres» de las diez soluciones en preparación (salvo el «Cómo
     abres» de Data Intelligence, AB.3) y su primer paso: esperan a que cada SM
     entregue su contenido en septiembre.
   - «Nada se guarda» tras «¿Falta algo?», «Los canales de Teams se enlazan cuando
     estén validados» en Contactos y el «guía interna · interno» del material interno
     de Modernización: van a la auditoría visual.
   - Autodiagnóstico (`/autodiagnostico/grupo-lantia/`): no se toca.
   - Nada de build.js fuera de lo que se nombra en AA.5, AB.4, AB.7, AC.8, AE.1a,
     AF.1, AF.2, AF.3 y AF.4.

Al terminar: build, check-data.js sin errores duros, medir.js en verde (incluido el
barrido ampliado: `grep -rli "acompañ\|revisión [0-9]\|Demo a Dirección" public/ |
grep -v autodiagnostico` tiene que devolver vacío), PDF y PNG de portada nuevos a
1440 px en docs/medicion/ (cambian las cinco propuestas de práctica, seis cajas de
solución y la nota del deck), y descripción del PR con la línea de revisión 12. Si
alguna `propuesta_portada` o `una_linea` no cabe en su caja a 390 px, o algún texto
rompe la medición, para y dime cuál.
