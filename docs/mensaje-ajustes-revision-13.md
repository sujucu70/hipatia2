Revisión 13 (4 sep). La 12 está aplicada y verificada (`9135b6b`); esta va encima y
la corrige en unos pocos puntos por decisiones de Susana del mismo día (bloque AI los
lista: donde choquen, manda la 13). Lo que trae: el contenido real de las once soluciones y de las cinco páginas
de práctica, sacado de los decks, fichas y one-pagers de cada Solution Manager y de
sus ficheros de estado, y cerrado con Susana el 4 de septiembre (las decisiones están
en docs/decisiones-revision-13.md; el contenido campo a campo, en los cinco
docs/contenido-v3-<práctica>.md). Este mensaje no repite ese contenido: te dice qué
sección aplicar y qué cambia respecto a lo que ahí se propone. Los textos van entre
comillas latinas; el contenido del campo es lo de dentro. Sigue mandando el canon de
pantalla (medir.js): nada de Guberna, Security, §, «revisión N», «acompañar».

Haz pull antes. Commit por bloque, con el texto que se indica.

AI · LO QUE CAMBIA DE LA REVISIÓN 12

   Decisiones del 4-sep que corrigen lo que la 12 dejó aplicado. Solo esto; el resto
   de la 12 se queda como está.

   1. Z · `propuesta_portada`. Software Development y Process Intelligence se quedan
      como dejó la 12. Las otras tres cambian (salen de las piezas de cada SM):

      data/data-intelligence.json
        «Datos que se pueden auditar: gobierno, ingeniería, analítica y modelos sobre
        dato fiable.»
      data/smart-operations.json
        «Operamos puesto de trabajo e infraestructura y respondemos del resultado, no
        de las horas.»
      data/digital-change.json
        «La tecnología ya está comprada; el retorno, no. Cultura, conocimiento y
        gobierno de la IA.»

   2. AA.1 · La Oficina se llama «Oficina de Transformación y Gobernanza» (el nombre de
      la web pública de Entelgy; decisión de Susana, sin esperar al 8). En
      `data/corporativo.json` → `relato.otg.titulo`:

        «Cuando el cambio no cabe en un proyecto: la Oficina de Transformación y
        Gobernanza»

      y cualquier otra «Transformación y Gobierno» u «OTG» que quede en
      corporativo.json o en build.js pasa a «Transformación y Gobernanza» (sin
      siglas). El texto y las tres fases de la 12 se quedan.

   3. AB.1 · El «Llevar» de Digital Change dura poco: `que_cubre` y `capacidades` de
      esa práctica se reescriben enteras en AO.

   4. AB.2 · `que_no_prometer`: Software Development se queda con el de la 12. Los
      otros cuatro cambian (bloques AK, AM, AN, AO).

   5. AB.3 · `pregunta_comun`: se quedan las de la 12 salvo Digital Change, que pasa a
      la pregunta de Alfredo para el CFO (AO).

   6. AB.5 · Data Intelligence: `que_cubre` y `primer_avance` cambian otra vez en AM
      (cinco pilares y servicio gestionado). El renombrado `solucion_global_nota` →
      `nota_interna` de AB.4 se queda.

   7. AE.1b · La 12 dejó ocho `por_que_nosotros` en `null` con el texto anterior en
      `planteamiento`. Ahora las once soluciones llevan argumento propio (bloques AK a
      AO): rellena los ocho y borra la clave `planteamiento` de todas (ya no hace
      falta). El hueco de build.js de AE.1a se queda: sirve para el futuro.

   8. AE.2 y AE.3 · `una_linea` y `pendiente.texto` de las diez soluciones cambian
      otra vez; los traen sus bloques.

   9. AD.1 · Las veinte notas de uso de la 12 se quedan salvo las de las piezas que
      los bloques AK a AO vuelven a escribir (ahora sí están leídas).

  10. AF.1 · Además de lo que hizo la 12, las capturas del as-is de `/punto-de-partida`
      se quitan: llevan caras y rótulos de confidencial. En build.js
      (`puntoPartidaPage`) no se pinta ninguna `<img>` del as-is; el texto se queda.
      Si los ficheros de captura solo se usan ahí, bórralos de public/.

  11. AF.3 · A los apellidos de la 12, AJ.5 añade el resto (Daniela, Amador, correos,
      títulos, segundos contactos).

  12. AH · `mod-autodiagnostico` y `mod-ficha-servicio` pasan a `revisar` (AJ.4). La
      12 los dejó `vigente`; Susana aplica la regla de la revisión 9 a todas las
      piezas con cambios pendientes del dueño.

   Commit: «v3: correcciones a la revisión 12 (portada, Gobernanza, capturas fuera)»

AJ · TRANSVERSAL · ESTADOS, MOMENTOS, CONTACTOS Y CUATRO CAMBIOS EN BUILD.JS

   1. build.js, `solucionPage`:

      a) Las once soluciones pasan a `vigente` (AJ.2) pero cada una conserva un
         `pendiente` con lo que su SM tiene que confirmar. Hoy `pendingBox` solo se
         pinta cuando el kit está vacío. Nuevo: si `s.estado === "vigente"` y
         `s.pendiente && s.pendiente.texto`, al final del `fold-body` de «Para
         prepararte» (después del material interno, antes del botón del dossier) se
         pinta `<p class="pending"><b>En revisión por el área.</b> ${texto} · dueño:
         ${dueno} · fecha objetivo: ${fecha}.</p>`. Mismo estilo que `pendingBox`; no
         reutilices la función porque el rótulo cambia.

      b) `keynotes` no se pinta en ninguna parte. Dentro de «Para prepararte», entre
         «Preguntas de cualificación» y «Material interno», si `s.keynotes.length`:
         `<h4>Mensajes clave por dolor</h4>` y una `<ul>` con un `<li>` por keynote:
         `<b>${dolor}</b><br>${frase}<br><span class="footer-note">Prueba: ${prueba} ·
         Siguiente paso: ${paso}</span>`. Entra también en el dossier imprimible.

   2. build.js, `practicaPage`: la rejilla de `capacidades_ia` (la línea del
      `grid grid-3` bajo Capacidades) deja de pintarse. El campo se queda en el JSON.
      Solo lo usa Digital Change y sus tres soluciones ya van justo debajo.

   3. build.js, `contactosPage`: cada entrada de `personas.json` puede llevar `titulo`
      y `correo`. Si hay `titulo`, se pinta tras el nombre en `footer-note` («·
      Head of Data»); si hay `correo`, como `<a class="text-link"
      href="mailto:…">correo</a>` al final de la línea. Vale para responsable,
      especialistas y segundo contacto.

   4. Estados y momentos en `data/materiales.json`:

      a) Momento comercial según la doctrina del 15-jul (one-pager → primer contacto,
         deck → reunión, ficha → para dejar), en las cinco prácticas:

         primer_contacto: process-onepager · automation-onepager · mod-onepager ·
           software-mantenimiento-onepager · software-asistencia-onepager ·
           dataai-onepager · smartops-onepager-workplace · smartops-onepager-infra ·
           iability-onepager · preservia-privado · preservia-publico · ogh-onepager
         reunion: process-deck · automation-deck · mod-deck-ejecutivo ·
           dataai-producto · smartops-resumen · smartops-workplace · smartops-infra ·
           digital-change-deck (los decks ya están; se confirma)
         para_dejar: process-ficha · automation-ficha · software-mantenimiento-ficha ·
           software-asistencia-ficha · dataai-ficha · smartops-workplace-ficha ·
           smartops-infra-ficha · iability-ficha · preservia-ficha · ogh-ficha
           (mod-ficha-servicio ya está)

      b) A `revisar` (regla de la revisión 9: cambios pendientes del dueño, aunque
         haya enlace): smartops-workplace (deck 2026: niveles N0–N2 invertidos en la
         lámina 10 y horquillas de precio en la 14) · smartops-infra (deck: precio en
         documento público) · software-asistencia-ficha y
         software-asistencia-onepager (venden el modelo UCE, que Jorge cambió en julio
         por créditos de modernización) · mod-autodiagnostico · mod-ficha-servicio.
         mod-deck-ejecutivo ya está en revisar. Sus notas de uso las traen los bloques.

      c) `fecha_revision: "sep 2026"` en toda pieza tocada o nueva, para que
         check-data.js no avise.

      d) `dataai-mutua` y `dataai-mutua-preread` dejan de ser referencias: `tipo`
         «Deck cliente» y «Pre-read», `sale_al_cliente: "no"`, `citable: "no_aplica"`,
         `momento_comercial: "preparar"`, `nota_de_uso` «Ejemplo de deck de primer
         contacto a una cuenta objetivo (Mutua), con su nombre dentro: sirve para ver
         cómo se entra por el reloj regulatorio del sector; no se enseña a otro
         cliente.» (la del pre-read, igual con «pre-read»).

   5. `data/personas.json`. Además de los apellidos de la 12 (Herrero, Zurdo, Rode,
      González), en todas las entradas de cada persona:

        Daniela → nombre «Daniela Ongaro» · titulo «Head of Data» · correo
          «daniela.ongaro@entelgy.com»
        Amador → nombre «Amador Sobrino» · titulo «Solution Manager · Smart
          Operations» · correo «amador.sobrino@entelgy.com»
        Alfredo → titulo «Head of Digital Change» · correo «alfredo.zurdo@entelgy.com»
        Jorge, Carmen, Carla → solo nombre (correo y título cuando los tengamos)

      Segundos contactos (las entradas `Segundo contacto` con `nombre: null`):
        data-intelligence → nombre «Luis Sanz» · titulo «Technical Lead · Data
          Intelligence» · estado «validado» · sin `pendiente`
        digital-change → nombre «Cristina Aparicio» · titulo «Digital Change» · correo
          «cristina.aparicio@entelgy.com» · estado «validado» · sin `pendiente`
        Y una entrada nueva de especialista para OGH-IA: nombre «Cristina Aparicio»,
        rol «Especialista de solución», practica «digital-change», solucion «ogh-ia»,
        orden 2, mismo canal que Alfredo, estado «validado».
      Las de Process Intelligence, Software Development y Smart Operations siguen «en
      preparación».

   6. Las once soluciones: `estado: "vigente"`. `fecha_objetivo` se queda como
      referencia del `pendiente`.

   Commit: «v3: las once soluciones vigentes, piezas en su momento comercial, contactos con correo»

AK · PROCESS INTELLIGENCE · docs/contenido-v3-process-intelligence.md

   Aplica §0 (práctica), §1.3 (`process-mining`) y §2.3 (`process-automation-ai`)
   campo a campo, incluidas las referencias nuevas de las dos tablas
   (`pi-caso-lanbide` con su sign-off, `pi-caso-universidad-latam`,
   `pi-cartera-sectores`, `pa-caso-uned`, `pa-caso-energetica-colombia`), los kits,
   los keynotes, las notas de uso que ahí se dan y los contactos de §3. Con estas
   diferencias:

   1. `pregunta_comun` de la práctica: la de la 12 («¿En qué parte del proceso se os
      va más tiempo, y cómo lo sabéis?»), no la de §0.

   2. `primer_avance` de la práctica: `titulo` «Un diagnóstico sobre un proceso real»
      · `plazo` «6–8 semanas» · `nota` como en §0, y al final de la nota: «Precio
      cerrado: 15–20 K€ en el diagnóstico de entrada de Inteligencia de procesos; el
      de Automatización se cierra con Carla.»

   3. Inteligencia de procesos (§1.3):
      - `primer_paso.nota`: donde §1.3 deja el precio a decisión, va el importe:
        «… Precio cerrado, 15–20 K€ según alcance. …» (el resto de la nota, igual).
      - `por_que_nosotros`: incluye el dato canónico de Carmen (Partner Gold de
        Celonis, más de cincuenta proyectos en España, Chile y Colombia) y la
        referencia Inverbis-GBTEC, ya verificada por Susana, con ese nombre: «… y
        somos partner de Inverbis-GBTEC, …» donde §1.3 lo deja condicionado. Nada que
        suene a «sin atarte a una licencia».
      - `pi-caso-universidad-latam`: en `que_hicimos` o `nota_de_uso`, Inverbis-GBTEC
        con nombre, sin condicional.
      - En `kit.material_interno`, nota: «Escalera de compra de Carmen (deck, jun-2026):
        diagnóstico de entrada 15–20 K€ → proyecto de mining por proceso → oficina de
        procesos en continuo. Precios orientativos, para el comercial; no van en
        documento cliente.»

   4. Automatización (§2.3):
      - `primer_paso`: `titulo` «Diagnóstico de automatización» · `plazo` «6–8
        semanas» (el del deck, decisión del 3-jul; Carla corrige la ficha, que dice
        4–6). Nada de «Data Driven» en pantalla. Sin precio: Carla no lo publica.
      - En «La propuesta», donde §2.3 nombra la oficina de gobierno y orquestación de
        agentes, añade al final de ese texto: «(La gobernanza humana de la IA, quién
        decide qué avanza y qué se frena, es la Oficina de Gobernanza Humana de la IA,
        en Digital Change.)» Las dos oficinas conviven con nombres distintos hasta que
        Carla y Alfredo lo cuadren.
      - Las dos referencias, `citable: "confirmar_por_cuenta"` hasta el F1 de Carla.
      - El «Deloitte 37%» del deck no se usa en ningún campo.

   5. Las dos soluciones: `estado: "vigente"`; `pendiente.texto`:
      process-mining «Lectura de Carmen: Celonis Gold e Inverbis-GBTEC en «Por qué
        Entelgy», precios visibles en el portal interno, ficha de Universidad LATAM.»
      process-automation-ai «Lectura de Carla: diagnóstico de 6–8 semanas y corrección
        de la ficha, F1 de UNED y de la energética, «hiperautomatización» y «Task
        Intelligence» fuera de sus piezas, contacto sin rellenar.»

   Commit: «v3: Process Intelligence con el contenido de Carmen y Carla (revisión 13)»

AL · SOFTWARE DEVELOPMENT · docs/contenido-v3-software-development.md

   Aplica §1.3 (`mantenimiento`) y §2.3 (`asistencia-tecnica`) campo a campo, con sus
   referencias (`mod-caso-dgoj`, `mod-caso-miciu` y `mod-caso-h10` colgadas también de
   Mantenimiento; `at-caso-banca-latam` y `at-caso-industria-energia` nuevas,
   `confirmar_por_cuenta`), kits, keynotes y notas de uso. Y §3 sobre Modernización.
   Con estas diferencias:

   1. §0 no se aplica: `primer_avance` de la práctica se queda como está («Assessment
      de modernización») y `capacidades` también. Sí entra `capacidades_nota` de §0
      (cómo respondemos del resultado: UCE, IGE e ISA; créditos en Asistencia técnica;
      Spec-Driven y SEAS dentro de las tres), en lugar de la de la 12 (AB.6).

   2. Reparto del ahorro: en todos los campos donde §1.3 o §3 dan un porcentaje del
      ahorro reinvertido, «una parte medida» y sin cifra. Jorge decide 20 o 40 y si
      sale en documento público.

   3. Modernización (§3): se aplica. Foreworth pasa a contraste de mercado, no
      certificador; una sola vez en la página, en `por_que_nosotros` con el texto de
      §3 (sobre el que ya deja la 12 en AC.2); `diferenciador` y el kit como dice §3
      («medida sobre tus herramientas, contrastada con Foreworth»). Es la página que
      MA validó en junio: Susana se lo dice a Jorge en el mismo correo que el resto.

   4. Se quedan, y van al correo de Jorge como supuestos: «NASERTIC atiende llamadas
      de referencia» (en `mod-caso-nasertic`) y la frase del AI Act sobre el core de
      pólizas (kit de Modernización, AC.5 de la 12).

   5. Sin precios en ninguna de las tres soluciones: Jorge no los publica.

   6. Las dos soluciones nuevas: `estado: "vigente"`; `pendiente.texto`:
      mantenimiento «Lectura de Jorge: reparto del ahorro (20 o 40%) y si sale en
        documento público, Foreworth como contraste, casos DGOJ, MICIU y H10 colgados
        aquí.»
      asistencia-tecnica «Lectura de Jorge: ficha y one-pager venden UCE y el modelo
        ahora es de créditos (piezas en revisar), referencias anónimas de banca LATAM e
        industria y energía por confirmar.»

   Commit: «v3: Mantenimiento y Asistencia técnica con el contenido de Jorge; Foreworth como contraste (revisión 13)»

AM · DATA INTELLIGENCE · docs/contenido-v3-data-intelligence.md

   Aplica §0 (práctica: cinco pilares como `capacidades`, `que_cubre`,
   `que_no_prometer`) y §1.3 (solución única `data-intelligence`) campo a campo,
   con las seis referencias (`di-caso-cnmv`, `di-caso-bankinter` y
   `di-caso-uned-dato` citables con sign-off {Daniela Ongaro · 2026-06-16};
   `di-caso-industria`, `di-caso-movilidad-aerea` y `di-caso-automocion` anonimizadas
   y `confirmar_por_cuenta`), kit, keynotes y notas de uso. Con estas diferencias:

   1. `pregunta_comun` y `como_abres`: los de la 12 (la misma pregunta en los dos,
      con sus comillas), no los de §0/§1.3.

   2. Primer paso, en la práctica y en la solución: el servicio gestionado que
      Daniela editó, no el assessment. `primer_avance` y `propuesta.primer_paso`:
        titulo «Servicio gestionado de gobierno del dato»
        plazo null
        nota «Una oficina del dato operada por Entelgy: roles con mandato, catálogo
        vivo, calidad medida y linaje trazable, en marcha cada mes. Se entra con un
        assessment de cuatro a seis semanas (dos perfiles senior, alcance acotado) que
        dice dónde está el valor, las brechas de calidad y la clasificación de
        sistemas frente al EU AI Act. Sin precio: el euro lo entrega el propio
        diagnóstico. Alcance con Daniela.»
      Sin «gobernanza» ni «IA» en el nombre: la Oficina de Gobernanza Humana de la IA
      es de Alfredo.

   3. El 60% de Gartner, en todos los campos donde aparece (`senal`, frases,
      keynotes): «(Gartner, nota de prensa, febrero de 2025)». Daniela lo confirma.

   4. La alianza nueva no se nombra en ningún campo. En `pendiente.texto`: «Lectura
      de Daniela: nombre del servicio gestionado (oficina del dato), versión
      definitiva de UNED, alcance del permiso de CNMV, Gartner como nota de prensa,
      Luis Sanz como segundo contacto. El material del área se reescribe en
      septiembre-octubre con la propuesta de valor ampliada.»

   5. `estado: "vigente"`.

   Commit: «v3: Data Intelligence con los cinco pilares y el servicio gestionado de Daniela (revisión 13)»

AN · SMART OPERATIONS · docs/contenido-v3-smart-operations.md

   Aplica §0 (práctica), §1.3 (`smartops-workplace`), §2.3 (`smartops-infra`), §3
   (materiales) y §4 (contactos, ya en AJ.5) campo a campo. Con estas diferencias:

   1. `pregunta_comun`: la de la 12, no la de §0. `primer_avance.titulo`: «Diagnóstico
      sobre datos reales» como en §0; en las soluciones, «Diagnóstico del puesto de
      trabajo» y «Diagnóstico de infraestructura». Nada de «Data Driven» en pantalla.

   2. Precios visibles (el portal es interno):
      - `smartops-infra` → `primer_paso.nota`: tras «Precio cerrado», «(orientativo
        30–50 K€ según alcance)».
      - `smartops-workplace` → `kit.material_interno`, nota: «Horquillas orientativas
        del deck de Workplace hasta que Amador cierre costes: CAU base 15–25 €/usuario/
        mes · Workplace 10–20 €/usuario/mes · DaaS 30–60 €/dispositivo/mes · Servicios
        de valor a medida. No van en documento cliente.»

   3. Telefónica Tech, en `so-caso-telefonica-tech` y donde §2.3 lo cite: solo las
      cifras del PDF de Servicios CAU (3.000 clientes, 25.000 elementos, 27.000
      alarmas y 12.000 tickets al mes, SLA 98%, tiempo medio de operación −25%,
      rotación <5%). El «−40% MTTD» y «Foreworth certificado» no van en ningún campo.

   4. En `por_que_nosotros` de `smartops-infra`, además de lo de §2.3, entran las dos
      cifras de cabecera de sus piezas, marcadas: «Más de 3.000 clientes operados hoy y
      hasta un 30% menos de inversión en infraestructura con IA (datos Entelgy
      SmartOPS, en validación).» Y las cifras corporativas del área (+400.000
      usuarios, 95% renovación, 97% ANS, clasificación 80/92/98, contraseña 90%) se
      usan como dice §1.3.

   5. Referencias. Las cinco piezas «Caso de éxito» que ya existen no se archivan: se
      corrigen a `tipo: "referencia"` (minúscula) y se completan sobre esas mismas
      piezas, conservando `url_documento` al .pptx:
        smartops-case-educacion-ejie → los campos de `so-caso-ejie-educacion` de §1.3
          (contexto, qué hicimos, resultado, frase, nota; `solucion`
          `smartops-workplace`; licitación verificada, EJIE-078-2021).
        smartops-case-navantia → los de `so-caso-navantia` (§1.3).
        smartops-case-izenpe → los de `so-caso-izenpe` (§2.3; `solucion` `smartops-infra`).
        smartops-case-ejie (el DaaS) → `titulo` «EJIE · Gobierno Vasco · Dispositivo
          como servicio» · `solucion` `smartops-workplace` · `contexto` «Puesto de
          trabajo del Gobierno Vasco como servicio: 11.000 puestos, 280 organismos,
          más de 400 aplicaciones bajo soporte, más de 8 años en producción.» ·
          `que_hicimos` «Gestión del parque y del ciclo de vida del dispositivo con
          cumplimiento ENS.» · `resultado` «Unos 9.000 tickets al mes; cumplimiento
          ENS del 100%.» · `frase_reunion` «Para el Gobierno Vasco llevamos 11.000
          puestos de 280 organismos como servicio desde hace más de ocho años.» ·
          `nota_de_uso` «Es un contrato distinto del de Educación (EJIE-078-2021):
          no mezclar cifras. Las cifras salen de la lámina 20 del deck de Workplace
          y están sin verificar; confirmar con Amador que son las del DaaS.» ·
          `citable` `confirmar_por_cuenta`.
        smartops-case-moodle-profuturo → se completa con lo que dice su .pptx si
          Código lo tiene a mano; si no, solo `nota_de_uso` «No es SmartOPS: es
          soporte N3 y desarrollo Moodle 8×5 para Telefónica Educación Digital
          (ProFuturo), área de Jorge. No cuelga de ninguna solución hasta decidir su
          encaje.» y `solucion: null`.
      No se crean `so-caso-navantia`, `so-caso-izenpe` ni `so-caso-ejie-educacion`
      aparte. Nuevas, con los campos de §1.3 y §2.3: `so-caso-telefonica-cau`,
      `so-caso-mefpd`, `so-caso-valoriza` (con nombre y la nota de confirmar),
      `so-caso-telefonica-tech`, `so-caso-telefonica-global-solutions`. Y
      `so-caso-mostoles`: `titulo` «Ayuntamiento de Móstoles · Help & Service Desk» ·
      `solucion` `smartops-workplace` · `sector` [Sector público] · `contexto`
      «Help & Service Desk y administración de sistemas para un ayuntamiento grande:
      cuatro sedes y 60.000 tickets al año.» · `que_hicimos` «Front-office 5×12 con
      dos coches y dos patinetes para el soporte presencial, sobre Jira, AWS y
      Azure.» · `resultado` «Eficiencia del 15% el primer año, SLA por encima del
      98%, encuestas 95%.» · `frase_reunion` «En Móstoles atendemos 60.000 tickets al
      año con el SLA por encima del 98% y la satisfacción en el 95%.» · `nota_de_uso`
      «Cifras del PDF de Servicios CAU. Dice «200.000 usuarios»: confirmar con Amador
      si son ciudadanos o empleados antes de citarlo.» · `citable`
      `confirmar_por_cuenta`.
      Las `referencias[]` de cada solución y `referencias_destacadas` del kit apuntan a
      estos ids (los antiguos `smartops-case-*` donde toque).

   6. MAPFRE no se crea en esta práctica. En `smartops-workplace` →
      `referencias[]` entra `dc-caso-mapfre` (la de PreservIA, AO.4) y en
      `kit.material_interno` una nota: «SmartHelp es la capa de contexto de PreservIA
      en MAPFRE: el caso se cuenta con las cifras de Digital Change (15.000 puestos,
      3.500 tickets menos al mes, 45 € por ticket). No se usan las del deck de
      Workplace (25.000 puestos, 157.500 €/mes).»

   7. Los dos decks de vertical, `revisar` (AJ.4b), con las notas de uso de §1.3 y
      §2.3. Los dos legacy (`smartops-workplace-legacy-deck`,
      `smartops-infra-legacy-onepager`): `tipo: "Archivo"`, fuera de `materiales[]`
      de las soluciones. `smartops-pains-workplace` nueva como en §1.3.

   8. Las dos soluciones: `estado: "vigente"`; `pendiente.texto`:
      smartops-workplace «Lectura de Amador: entidad del «+200 agentes» de Telefónica,
        MEFPD y Valoriza como los casos anonimizados de la ficha, «usuarios» de
        Móstoles, cifras del DaaS de EJIE, niveles invertidos en el deck, permisos de
        nombres y logos, sign-off de las cifras del área con MA.»
      smartops-infra «Lectura de Amador: juego de datos de Telefónica Tech (−40% MTTD,
        Foreworth), +3.000 clientes y −30% con documento, alcance real de redes,
        precio del diagnóstico, sign-off con MA.»

   Commit: «v3: Puesto de trabajo e Infraestructura crítica con el contenido de Amador (revisión 13)»

AO · DIGITAL CHANGE · docs/contenido-v3-digital-change.md

   Aplica §0 (práctica: `que_cubre`, `que_no_prometer`, `pregunta_comun`,
   `capacidades` nuevas, `primer_avance`, `material_comun`), §1.3 (`iability`), §2.3
   (`preservia`), §3.3 (`ogh-ia`), §4 (materiales) y §5 (contactos, ya en AJ.5) campo
   a campo, con sus referencias (`dc-caso-entelgy-labs` citable con sign-off {Alfredo
   Zurdo · 2026-07-09}, la reunión en la que dijo que es público; `dc-caso-mapfre`
   citable con sign-off {Alfredo Zurdo · 2026-07-08}, su correo con la autorización;
   `dc-caso-admiral` `confirmar_por_cuenta`), kits, keynotes y notas de uso. Con estas diferencias:

   1. `capacidades_ia` se queda en el JSON y deja de pintarse (AJ.2). Los títulos
      Transformar · Adoptar · Concienciar desaparecen con las capacidades nuevas de
      §0; la 12 (AB.1) ya no aplica.

   2. Puerta de entrada: Readiness. `primer_avance` de la práctica y
      `propuesta.primer_paso` de IAbility como en §0 y §1.3 («Diagnóstico de madurez
      en IA · ~25 min por persona»), sin precio ni plazo del arranque.

   3. OGH-IA sin plazos: `primer_paso.plazo` null y ninguna mención a «3–4 meses» ni
      a «modelo flexible» en ningún campo (§3.3 ya lo hace así; compruébalo en el kit).

   4. PreservIA, precio visible: `primer_paso.nota` como en §2.3 y, donde dice
      «Precio cerrado en la ficha (Alfredo decide…)», «Precio cerrado: 14.900 € sin
      IVA, 50% al arranque y 50% al cierre.»

   5. `dc-caso-bahia-bizkaia` se crea vacía: `titulo` «Bahía de Bizkaia Electricidad ·
      Primera referencia de IAbility» · `tipo` `referencia` · `solucion` `iability` ·
      `sale_al_cliente: "no"` · `citable: "confirmar_por_cuenta"` · `estado:
      "pendiente"` · `nota_de_uso` «Pendiente del modelo de consentimiento
      (Marketing). Sin texto hasta la firma.» Sin contexto, qué hicimos ni resultado.
      No entra en `referencias[]` de IAbility hasta que tenga texto.

   6. Las tres soluciones: `estado: "vigente"`; `pendiente.texto`:
      iability «Lectura de Alfredo: puerta de entrada del área, permiso escrito de
        Admiral y Bahía de Bizkaia, una cifra de uso en la sombra con fuente, 151/15/9
        o 150/9, «Oficina de Gobierno» → «Gobernanza Humana» en su ficha.»
      preservia «Lectura de Alfredo: un solo juego de cifras de MAPFRE (con Amador),
        fuente del 80% tácito, precio del piloto en el portal.»
      ogh-ia «Lectura de Alfredo: plazos del arranque (flexible o 3–4 meses a precio
        cerrado), 78% u 88%, una referencia de cliente autorizada.»

   Commit: «v3: IAbility, PreservIA y OGH-IA con el contenido de Alfredo (revisión 13)»

AP · LO QUE NO TE PIDO

   - Ningún nombre de práctica ni de solución cambia. Ninguna cifra de los seis casos
     de Jorge cambia.
   - El titular de portada se queda (revisión 6). La `propuesta_portada` de Process
     Intelligence y la de Software Development (12) se quedan.
   - `capacidades` de Process Intelligence y Software Development se quedan.
   - `primer_avance` de Software Development se queda («Assessment de
     modernización»); Jorge decide el nombre.
   - `sale_al_cliente` no cambia en ninguna pieza salvo las dos de Mutua (AJ.4d) y
     las legacy de Smart Operations (AN.7).
   - Autodiagnóstico (`/autodiagnostico/grupo-lantia/`): no se toca.
   - Nada de build.js fuera de AI.10, AJ.1, AJ.2 y AJ.3.
   - Si un campo de los docs/contenido-v3-*.md contradice este mensaje, manda el
     mensaje; si contradice docs/decisiones-revision-13.md, manda ese documento. Si
     algo no está en ninguno de los dos, para y pregunta: no lo inventes.

Al terminar: build, check-data.js sin errores duros (las referencias nuevas con
`citable: "citable"` llevan `sign_off`; el resto, `confirmar_por_cuenta`), medir.js en
verde con el barrido ampliado de la 12 (y ni un «Data Driven», «garantiz» ni «acompañ»
en public/ fuera de /autodiagnostico/), PDF y PNG de portada nuevos a 1440 px en
docs/medicion/ (cambian tres propuestas de práctica y once cajas de solución), y la
descripción del PR con la línea de revisión 13. Si alguna `una_linea` no cabe en su
caja a 390 px, si un kit desborda el dossier imprimible, o si un id de referencia de
los docs no coincide con lo que te pido aquí, para y dime cuál.
