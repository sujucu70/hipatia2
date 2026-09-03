Revisión 11 (3 sep, noche). Revisión 10 correcta (`cda8a88`): buscador sobre texto
visible, 137 KB. Ahora he recorrido la build entera con el guion de MA para el
kickoff del 10 (home con mensaje corporativo, árbol de navegación, todas las áreas
visibles, detalle solo en Modernización, «menos es más») y salen cosas que no
pueden verse ese día. Ninguna cambia estructura ni regla de portada; casi todo son
textos en `data/*.json`. Haz pull antes (este mensaje está en docs/; la spec lleva la
nota de revisión 11). Commit por bloque.

Q · LO QUE NO PUEDE VERSE EL DÍA 10 (canon del proyecto)

   1. `/entelgy`, sección «Mercados»: el bloque LATAM dice «Ciberseguridad / Entelgy
      Security América». Security América está vendida: no aparece en ningún material
      de Hipatia. Además, la sección entera es un panel de estado interno (chip
      «revisar», «el deck LATAM queda en revisión hasta que Corporativo valide…»), no
      algo que un comercial necesite. → Quita la sección «Mercados» de `/entelgy`:
      borra la clave `mercados` de `data/corporativo.json` y el bloque de build.js
      que la pinta. El deck LATAM sigue en Materiales con su ficha y su nota.
   2. `/entelgy`, párrafo final «Pruebas de capacidad. «Quiénes somos» y «Sectores y
      clientes» son respaldo, plegado y no prioritario…»: es una nota editorial
      nuestra, no una frase para el comercial. → Borra `relato.pruebas` y su render.
   3. «Guberna» sale tres veces en pantalla. La marca Guberna no aparece en Hipatia
      (y el portal tiene que vivir sin nosotros). → `mod-objeciones` y
      `mod-benchmark`: `dueno: "Jorge"`. `lo_que_viene` en corporativo.json, primera
      pieza: `dueno: "Corporativo"` (fuera «Guberna · con MA»).
   4. `/punto-de-partida`: «el 90% no se abre». Decisión de MA de junio: las métricas
      de uso de Hipatia no se usan en ningún material, y esta página es justo la de
      «Demo a Dirección». → `punto_de_partida.de_donde` (o el campo que lleve ese
      texto) queda así: «Hoy el material comercial vive disperso en un SharePoint
      tipo repositorio. Buscar una pieza, saber si está vigente y si puede salir a
      cliente cuesta más que preparar la reunión.»

   Commit: «v3: fuera Security América, Guberna y la métrica de uso (canon, revisión 11)»

R · REFERENCIAS INTERNAS QUE SE VEN EN PANTALLA

   - Práctica Software Development, nota bajo Capacidades: deja solo «Spec-Driven
     Development y Factoría SEAS son capacidades de la práctica (Especificar,
     Aumentar), no soluciones.» Fuera «Decisión provisional a partir del Executive
     Deck; pendiente de confirmar con Jorge (§10.9)» — el pendiente ya consta en la
     spec, no en la pantalla del comercial.
   - `/lo-que-viene`: quita «(§6.9)» del párrafo de entrada.
   - `mod-autodiagnostico`, nota: «Herramienta de 10 preguntas para enviar al
     cliente; devuelve un índice de exposición y el siguiente paso. Ejemplo cargado:
     Grupo Lantia (78). Pendiente de que Jorge valide las diez preguntas y el índice.»
   - Práctica Smart Operations, primer avance: «Plazo y alcance con el
     especialista.» (Amador). Process Intelligence y Data Intelligence están bien
     («la especialista»: Carmen, Daniela).

   Commit: «v3: sin referencias a la spec ni jerga de trabajo en pantalla»

S · LOS DOS HUECOS DE MODERNIZACIÓN, CONTADOS COMO HUECOS

   En la revisión 7 quedó dicho que `mod-correo-apertura` y `mod-presentacion-spec`
   no tienen material en ninguna fuente. Pero siguen en `revisar · jul 2026` con
   «enlace pendiente», y la nota de la presentación Spec dice «Existe; confirmar
   edición vigente», que no es verdad. Ponlos como `mod-business-case`:
   `estado: "pendiente"`, `fecha_revision: null`, `url_documento: null`, y notas:

   mod-correo-apertura
     nota_de_uso: «En preparación · dueño: Jorge · fecha objetivo: sept 2026. Correo
     de apertura con enlace al autodiagnóstico; primero para el sector Financiero.»
   mod-presentacion-spec
     nota_de_uso: «En preparación · dueño: Jorge · fecha objetivo: sept 2026. Deck
     técnico Spec-Driven para la reunión avanzada.»

   Commit: «v3: correo de apertura y presentación Spec pasan a en preparación»

T · LAS NOTAS DE LAS SEIS TARJETAS DE PORTADA

   Es lo primero que se lee en la home. Hoy cuatro dicen «Presentación de X.» y la
   de Modernización lleva un aviso interno delante del uso. Solo `nota_de_uso`:

   mod-onepager
     «Una cara para la reunión introductoria: qué es modernizar con IA y por qué
     Entelgy. V1; el equipo de Jorge la revisa en septiembre.»
   process-deck
     «Deck cliente de Process Intelligence para la reunión introductoria: del proceso
     real, con datos, a la automatización y los agentes.»
   dataai-producto
     «Presentación de producto de Data Intelligence para la reunión introductoria:
     datos, analítica e IA con gobierno.»
   smartops-resumen
     «Visión global de SmartOPS para dirección: puesto de trabajo e infraestructura
     como un mismo servicio. Para la reunión introductoria; los decks de Workplace e
     Infra van después.»
   digital-change-deck
     «Deck de Digital Change para la reunión introductoria: el oficio de adopción y
     los tres productos, IAbility, PreservIA y OGH-IA.»

   (La del Executive Deck ya está bien desde la revisión 9.)

   Commit: «v3: notas de uso de las tarjetas de portada»

U · VOZ EN LAS CINCO CABECERAS DE PRÁCTICA

   En `/practicas` y en la cabecera de cada práctica se pinta `propuesta`, que viene
   del Executive Deck: «Acompañamos el ciclo de vida…», «Ayudamos a entender…»,
   «Conseguimos que…». Son verbos de consultora y no pasan el filtro de sustitución
   de MA (cambia Entelgy por cualquier competidor y la frase sigue en pie). La
   portada ya tiene la versión buena en `propuesta_portada`. → En build.js, en los
   dos sitios (tarjeta de `/practicas` y `<p class="lede">` de la página de práctica)
   pinta `pr.propuesta_portada || pr.propuesta`. `propuesta` se queda en el JSON.
   Y en `data/corporativo.json`, relato «Cómo lo hacemos»: «Con un método que lleva
   el cambio hasta que se puede medir y operar.» (fuera «acompaña»).

   Commit: «v3: las cabeceras de práctica usan la propuesta de portada»

V · GUARDARRAÍL PARA QUE ESTO NO VUELVA

   Añade a CLAUDE.md, en «Reglas de construcción», una línea: «Nunca en pantalla:
   marca Guberna, Security América, métricas de uso de Hipatia, referencias a la
   spec (§), jerga de trabajo (P0, cableado, sign-off de Px).» Y en medir.js, dentro
   del criterio 6 (honestidad), un barrido de todo `public/**/*.html` que ponga el
   criterio en rojo si aparece `Guberna`, `Security`, `§` seguido de dígito, o
   «no se abre» junto a un porcentaje. Que el informe diga en qué ruta.

   Commit: «v3: canon de pantalla en CLAUDE.md y barrido en medir.js»

W · LO QUE NO TE PIDO

   - Portada: no añadas nada. Las soluciones «pendiente · sept 2026» de las otras
     cuatro prácticas se quedan así: es exactamente lo que MA quiere ver.
   - Autodiagnóstico (`/autodiagnostico/grupo-lantia/`): es la página de julio con
     otra identidad; no se toca ahora y no se abre en la demo.
   - Contactos: los «pendiente de enlace» de Teams son verdad; se quedan.
   - Nada de build.js fuera de U y del bloque de Mercados/Pruebas de Q.

Al terminar: build, check-data.js sin errores duros, medir.js en verde (incluido el
barrido nuevo: `grep -rl "Guberna\|Security\|§" public/` tiene que devolver vacío),
PDF y PNG de portada nuevos a 1440 px en docs/medicion/ (las notas cambian), y
descripción del PR con la línea de revisión 11. Si algún texto de arriba no cabe
en su tarjeta o rompe la medición a 390 px, para y dime cuál.
