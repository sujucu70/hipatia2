# Auditoría de copy · Hipatia v3 · con los ojos de Miguel Ángel

*Vista previa para Susana · 3 de septiembre de 2026 · rama `claude/hipatia-v3-static-catalog-49l3yx`, build en `fdcfc09`. Leído el texto visible de cada página de `public/` (sin cabecera ni pie) y localizado cada hallazgo en `data/*.json` o en `build.js`. No he entrado en el navegador ni en las 88 fichas de material: solo en lo que se ve en el recorrido de la demo.*

---

## El problema

El jueves 10 el catálogo lo enseña un comercial delante del CEO durante diez minutos, y el martes 8 lo revisa Miguel Ángel. Lo que se ve en ese recorrido está construido, enlazado y limpio de canon (Guberna, Security América, métricas de uso, referencias a la spec). Lo que todavía no ha pasado es una lectura con los criterios que MA repite en cada reunión: que la frase no valga para Minsait o Accenture, que un comercial sepa qué contar leyéndola una vez, que la IA aterrice cómo y dónde, que nada prometa lo que solo un caso firmado puede decir, y que el portal dé munición sin decirle a nadie cómo vender.

Con esa lectura salen tres tipos de cosa. Algunas las pararía él en la demo porque contradicen algo que ha dicho con esas mismas palabras (un «Por qué Entelgy» que firmaría cualquiera, la Oficina de Transformación contada como producto, «acompañar», notas de trabajo pintadas en pantalla). Otras conviene arreglarlas antes del 8 porque le harán perder el hilo o le darán la sensación de plantilla. El resto puede esperar a que los SM entreguen contenido en septiembre.

Nada de lo que propongo reabre lo decidido: ni prácticas, ni estados, ni usos, ni las cifras de los seis casos de Jorge. El titular de portada lo trato aparte, al final, como aviso.

---

## Con qué criterio he leído (el de MA, de sus documentos)

- **Filtro de sustitución.** «Si al leer una ficha puedes reemplazar Entelgy por Accenture sin que pierda sentido, no está terminada» (`entelgy-contexto-cliente.md`, Objetivo 2; `hipatia-guidelines-diseno-contenido.md` §3).
- **Leerlo una vez y saber qué contar.** «Menos es más no es quitar cosas: es que dentro de cada área el material sea el justo para que un comercial sepa qué contar leyendo una vez» (`feedback-verano-consolidado.md`, comentado con MA el 2-sep).
- **Tangibilidad de la IA.** Toda mención aterriza el cómo y el dónde; «esto es lo que le pides a ChatGPT» (`entelgy-contexto-cliente.md`, regla transversal del 11-may). IA embebida en cada práctica, no pilar (`decisiones.md`, 2026-05-19).
- **Responde de, nunca garantiza.** Cifras solo como resultado de un caso con sign-off; toda cifra con autor, obra y año; nada de Gartner sin informe (`decisiones.md` 2026-07-01; `corporativo-estado-trabajo.md`, «Datos en el deck · criterio»; `CLAUDE.md`).
- **Los tres diferenciadores.** Organizaciones en marcha, no greenfield · las cuatro variables · resultados, no proyectos (`corporativo-estado-trabajo.md`, 25-may). Ancla: «Transformar es mucho más difícil que crear». Líneas protegidas de MA: «la tecnología es la parte fácil», «la resistencia no se vence, se gestiona».
- **El método es cómo trabajamos, no un producto.** «La diapositiva da la impresión de que lo que se vende es una oficina de transformación como producto principal» (`corporativo-estado-trabajo.md`, 25-may; `decisiones.md`, 2026-05-25).
- **Ayuda, no guion.** Roberto: que el portal no mate el discovery; MA lo compra. Y de MA el 9-jun: «no decir cómo vender; darle información de producto y munición» (`feedback-verano-consolidado.md`; `hipatia2-estado.md` §10).
- **Frontera dura interno / cliente.** Lo que no debe leer un cliente no puede sonar a material para él; ejemplo de MA: «pregúntale qué partidas presupuestarias tiene» va en interno, nunca en la presentación (`hipatia2-estado.md` §10).
- **Nada de métricas de uso de Hipatia, nada de jerga de trabajo.** «Proceso» es jerga interna; el 90% no se usa (`hipatia2-estado.md` §15; `CLAUDE.md`).
- **Cada página responde primero «qué vendemos y por qué Entelgy».** Nadie tiene que explicar cómo se usa (`docs/Auditoria_y_especificacion_Hipatia_v3.md` §0.1).
- **La unidad facturable.** «El nivel útil es el servicio mínimo que se puede vender y cotizar» (`entelgy-contexto-cliente.md`, concepto del sponsor).

---

## Caja 1 · MA lo pararía en la demo

### 1.1 · Portada · la propuesta de Software Development no aterriza la IA y la firmaría cualquiera

**Literal:** «Modernizar, mantener y evolucionar las aplicaciones críticas con IA, sin parar el negocio.»

**Por qué la tumbaría.** Es la práctica que se enseña en detalle y la única con un diferenciador firmado (reinvertir la eficiencia del mantenimiento en modernizar, sin presupuesto nuevo, medido por un externo). En portada, en cambio, el «con IA» es exactamente lo que MA llamó «lo que le pides a ChatGPT», y la frase entera aguanta con Minsait delante. Un comercial que la lee no sabe qué tiene Entelgy que no tenga el de al lado.

**Propuesta:** «Modernizar y mantener aplicaciones críticas sin parar el negocio ni pedir partida nueva.» (88 caracteres; la cabecera de `/practicas/software-development/` la hereda). El mecanismo de financiación está firmado para Modernización y Mantenimiento (DGOJ); la Asistencia técnica no lo lleva, y la línea no puede con las tres. Si Jorge prefiere que las tres quepan: «Modernizar, mantener y reforzar aplicaciones críticas sin parar el negocio, medido por un tercero.»

**Dónde:** `data/software-development.json` → `propuesta_portada`.

### 1.2 · Portada · la nota del Executive Deck le enseña al CEO la lista de pendientes de MA

**Literal:** «Deck corporativo v6 (jul 2026): el que presenta el comercial en reunión. Quedan sin cerrar las cifras de la slide 08, el caso UNED y la autorización de logos. Preséntalo; no lo envíes en frío.»

**Por qué la tumbaría.** El chip «revisar» se queda (revisión 9, no lo toco). Pero la nota es la única de las seis que nombra el interior de un documento («slide 08», «el caso UNED»): para un comercial es jerga de trabajo, y para el CEO, que lee la tarjeta de su propio deck en la portada, es la lista de lo que MA tiene sin cerrar. La nota debe decirle al comercial qué puede hacer con la pieza, que era lo acordado en la revisión 9, sin airear el despacho.

**Propuesta:** «Deck corporativo v6 (jul 2026): el que presentas en reunión. Las cifras de resultados por cliente y los logos siguen pendientes de autorización: preséntalo, no lo envíes en frío.»

**Dónde:** `data/materiales.json` → `corp-exec-global.nota_de_uso`.

### 1.3 · /entelgy · la Oficina de Transformación y Gobierno vuelve a leerse como un producto con fases

**Literal:** «Oficinas de Transformación y Gobierno (OTG) · No son una práctica adicional ni una condición para cada proyecto. Son el vehículo transversal para los clientes que necesitan sostener el cambio en el tiempo: diagnostican una función, asumen su operación con roles y backlog definidos, y transfieren capacidad de forma progresiva.» Y las tres fases: «Diagnóstico · Identificamos qué debe gobernarse. Activación · Asumimos las funciones acordadas. Transferencia · Delegamos de forma progresiva.»

**Por qué la tumbaría.** Es la misma corrección que hizo el 25 de mayo sobre el deck: la Oficina es la metodología que Entelgy aplica siempre, «el cómo, no el qué», al mismo nivel que las prácticas y sin protagonismo propio. Aquí tiene bloque propio, tres fases numeradas y verbos de proveedor («asumen», «delegamos»), justo después del método. Además «delegamos» apunta al revés (Entelgy no delega en el cliente: le devuelve la función) y el nombre baila: en sus documentos es OTP; en la web pública de Entelgy, «Oficinas de Transformación y Gobernanza».

**Propuesta.** Título: «Cuando el cambio no cabe en un proyecto: la Oficina de Transformación y Gobierno». Texto: «Es el mismo método, operado desde dentro del cliente cuando hay que sostener el cambio en el tiempo. No se vende aparte ni hace falta en cada proyecto: se activa cuando la situación lo pide. Diagnosticamos qué hay que gobernar, asumimos esa función con roles y backlog acordados, y se la devolvemos al equipo del cliente a medida que puede llevarla.» Fases: «Diagnóstico · Qué hay que gobernar y quién lo lleva hoy.» · «Operación · Asumimos las funciones acordadas, con roles y backlog.» · «Transferencia · Se la devolvemos al equipo del cliente, función a función.» El nombre (OTG / OTP / Gobernanza) lo confirma MA el 8; va en supuestos.

**Dónde:** `data/corporativo.json` → `relato.otg.titulo`, `relato.otg.texto`, `relato.otg.fases[].titulo` y `.texto`.

### 1.4 · /entelgy · a «Qué nos diferencia» le falta el primer diferenciador de MA

**Literal:** «Respondemos de que el cambio funcione, no solo de implantarlo. La tecnología rara vez es el único problema. La diferencia está en trabajar también los procesos, las personas y la cultura que deciden si una transformación llega a resultados o se queda en la entrega.»

**Por qué la tumbaría.** Es su página, lo que él cuenta. De los tres diferenciadores que articuló en sala están el segundo (las cuatro variables) y el tercero (responder del resultado). Falta el primero, «trabajamos en organizaciones que ya están en marcha, no greenfield», que es por donde él empieza. Y «la tecnología rara vez es el único problema» es la versión tibia de su línea protegida: «la tecnología es la parte fácil».

**Propuesta** (solo el texto; el título se queda): «La tecnología es la parte fácil. Lo difícil es que una organización que ya está en marcha cambie cómo trabaja: procesos, personas y cultura deciden si la transformación llega a resultados o se queda en la entrega.»

**Dónde:** `data/corporativo.json` → `relato.entradas[1].texto` (clave `diferencia`).

### 1.5 · /practicas/data-intelligence · una nota de trabajo pintada en pantalla

**Literal:** «Data Intelligence es una única solución con el nombre de la práctica (revisión 5, 3 sep): sus cuatro capacidades —gobernar el dato, gobernar los modelos, decidir con analítica, predecir y operar— viven dentro de la página de solución. Cuando Daniela valide el desglose, se abre en soluciones.»

**Por qué la tumbaría.** «Revisión 5, 3 sep» es una referencia al proceso de construcción, del mismo tipo que los § que se quitaron en la revisión 11; medir.js no la barre porque no lleva el símbolo. Al comercial no le dice nada que no vea ya en la página (una solución, «Ver la solución»), y a MA le enseña la trastienda.

**Propuesta.** No pintarla: la nota se queda en el JSON para Código y Amparo. Si se prefiere una línea visible: «Data Intelligence se vende como una sola solución; sus cuatro capacidades están dentro.»

**Dónde:** `data/data-intelligence.json` → `solucion_global_nota` (renombrar a `nota_interna`) y `build.js` línea 309, que la pinta.

### 1.6 · /practicas/digital-change · «Acompañar», dos veces

**Literal:** «Acompañar el cambio de extremo a extremo, convertir el despliegue en uso sostenido y activar cultura, conocimiento y gobierno humano de la IA.» y, en Capacidades, «Transformar · Acompañar un cambio grande de extremo a extremo, conectando tecnología, formas de trabajar y resultados buscados.»

**Por qué la tumbaría.** «Acompañar» está en la lista de lo que no se dice (`guberna-contexto-marca.md`; `hipatia-guidelines-diseno-contenido.md` §3 y §9), y fue una de las tres palabras que la revisión 11 sacó de las cabeceras. Quedaron estas dos. Es el vocabulario del deck de noviembre que MA quiso dejar atrás («un cambio brutal en la forma de presentarnos»).

**Propuesta.** Qué cubre: «Llevar el cambio de principio a fin: convertir el despliegue en uso sostenido y activar cultura, conocimiento y gobierno humano de la IA.» Capacidad Transformar: «Llevar un cambio grande de principio a fin, conectando tecnología, formas de trabajar y el resultado que se busca.» Los títulos de las tres capacidades (Transformar · Adoptar · Concienciar) son la arquitectura de Alfredo y no se tocan.

**Dónde:** `data/digital-change.json` → `que_cubre` y `capacidades[0].texto`.

### 1.7 · Prácticas y soluciones · veinte notas de uso que son texto de relleno

**Literal** (las que se ven en el recorrido): «Síntesis cliente de la práctica.» · «Ficha de detalle de servicio.» (dos veces) · «Síntesis cliente de Data Intelligence.» · «Síntesis cliente de Digital Workplace.» · «Síntesis cliente de infraestructura.» · «Pieza de entrada para IAbility.» · «Ficha de detalle de PreservIA.» · «Presentación de consultoría de procesos y automatización.» · «Ficha de detalle de automatización.» · «Síntesis cliente de automatización.» · «Ficha de apoyo a la conversación de servicio.» · «Pieza cliente de Mantenimiento Evolutivo Inteligente.» · «Ficha de detalle de Asistencia Técnica.» · «Pieza cliente de Asistencia Técnica Aumentada.» · «Ficha cliente de IAbility.» · «Versión sector público.» · «Versión sector privado.» · «Ficha de detalle de OGH-IA.» · «Pieza de entrada para OGH-IA.»

**Por qué las tumbaría.** Las seis de portada se reescribieron en la revisión 11 para que dijeran para qué sirve cada pieza; estas veinte, que aparecen en «Material común para cliente» de las cinco prácticas y en las diez soluciones en preparación, siguen diciendo el tipo de pieza con otras palabras. Un comercial que lee «Ficha de detalle de servicio» no sabe cuándo abrirla ni qué le va a dar. MA vería «todas las áreas con presencia» con tarjetas que parecen maqueta. El principio de la spec lo dice sin rodeos: un hueco nunca lleva texto de relleno.

**Propuesta.** Aplicar la doctrina que ya está decidida para cada tipo (`decisiones.md`, 2026-07-15): el one-pager es una cara que persuade y se deja; la ficha son dos caras que validan ante quien decide dentro. Escribo cada nota con lo que la pieza es, no con lo que dice por dentro, porque no las he abierto; conviene una pasada de Susana para afinar la segunda mitad de cada frase.

| id | Nota propuesta |
|---|---|
| `process-onepager` | Una cara para dejar tras la primera reunión: qué es Process Intelligence y por qué Entelgy. |
| `process-ficha` | Dos caras para quien lo valida dentro (IT, compras): qué incluye el servicio y cómo se contrata. |
| `dataai-onepager` | Una cara para dejar tras la primera reunión: qué es Data Intelligence y por qué Entelgy. |
| `dataai-ficha` | Dos caras para quien lo valida dentro: qué incluye Data Intelligence y cómo se contrata. |
| `smartops-onepager-workplace` | Una cara para dejar tras la primera reunión: el puesto de trabajo como un solo servicio y por qué Entelgy. |
| `smartops-onepager-infra` | Una cara para dejar tras la primera reunión: infraestructura crítica operada con previsión y por qué Entelgy. |
| `iability-onepager` | Una cara para abrir una primera reunión: qué es IAbility y qué cambia en la gente que lo usa. |
| `iability-ficha` | Dos caras para quien lo valida dentro: qué incluye IAbility y cómo se contrata. |
| `preservia-ficha` | Dos caras para quien lo valida dentro: qué incluye PreservIA y cómo se contrata. Se deja tras la primera visita. |
| `preservia-publico` | Una cara para abrir una primera reunión en una administración: PreservIA contado para el sector público. |
| `preservia-privado` | Una cara para abrir una primera reunión en una empresa: PreservIA contado para el sector privado. |
| `ogh-ficha` | Dos caras para quien lo valida dentro: qué incluye la Oficina de Gobernanza Humana de la IA y cómo se contrata. |
| `ogh-onepager` | Una cara para abrir una primera reunión: qué decide una Oficina de Gobernanza Humana de la IA y por qué hace falta. |
| `automation-deck` | Deck para la reunión introductoria: del proceso a la automatización y los agentes, con criterio de negocio. |
| `automation-ficha` | Dos caras para quien lo valida dentro: qué incluye la automatización de procesos y cómo se contrata. |
| `automation-onepager` | Una cara para dejar tras la primera reunión: qué automatizamos y por qué Entelgy. |
| `software-mantenimiento-ficha` | Dos caras para quien lo valida dentro: qué incluye el mantenimiento evolutivo y cómo se contrata. |
| `software-mantenimiento-onepager` | Una cara para dejar tras la primera reunión: un mantenimiento que paga la evolución, y por qué Entelgy. |
| `software-asistencia-ficha` | Dos caras para quien lo valida dentro: qué incluye la asistencia técnica aumentada y cómo se contrata. |
| `software-asistencia-onepager` | Una cara para dejar tras la primera reunión: especialistas con una entrega que se mide, y por qué Entelgy. |

**Dónde:** `data/materiales.json` → `nota_de_uso` de cada id. Como el buscador indexa la nota (revisión 10), cambiarlas mejora también lo que se encuentra.

### 1.8 · Las diez soluciones en preparación · el «Por qué Entelgy» lo firmaría cualquiera

**Literal** (dos de las diez, las otras ocho son iguales): «Por qué Entelgy · La tecnología aporta cuando se apoya en cómo opera realmente la organización, no solo en cómo debería operar sobre un diagrama.» (Inteligencia de procesos) · «Por qué Entelgy · La automatización aporta más cuando resuelve una fricción operativa concreta y tiene un responsable claro; los agentes IA deben integrarse en un proceso con límites y supervisión.» (Automatización).

**Por qué lo tumbaría.** Es su filtro de sustitución aplicado al pie de la letra: bajo el rótulo «Por qué Entelgy» hay diez verdades generales sin Entelgy dentro. Son las plantillas de la propuesta 2 que la spec §0 ya llamó «guiones de plantilla». El 10 no se entra en ellas, pero el 8 sí las abrirá, y el rótulo promete lo que la frase no da. La spec prefiere el hueco declarado a la maqueta que parece llena (`hipatia-guidelines-diseno-contenido.md` §1.6: «MA lo prefiere así el día 10»).

**Propuesta.** Dos movimientos. Primero, en las soluciones `en_preparacion`, la fila «Por qué Entelgy» pinta el hueco con dueño y fecha («En preparación · dueño: Carla · sept 2026») cuando `por_que_nosotros` no tiene un argumento propio; las frases actuales se conservan en un campo `planteamiento` por si el SM quiere partir de ellas. Segundo, donde ya hay argumento firmado, se usa:

- Mantenimiento evolutivo, con el caso DGOJ (sign-off Jorge, 16-jul): «La eficiencia que la IA recupera en el mantenimiento diario se reinvierte en modernizar las mismas aplicaciones, sin partida nueva y medida por un tercero. En un regulador estatal el mantenimiento cuesta hoy entre un 40 y un 60% menos.»
- Inteligencia de procesos, con el dato canónico de Carmen (deck cerrado el 29-jun): «Partner Gold de Celonis, con más de cincuenta proyectos de Process Intelligence en España, Chile y Colombia, y un método que empieza por el proceso real antes de elegir herramienta.» Solo si Carmen lo confirma para el portal (va en supuestos; ojo, ella pidió quitar «sin atarte a una licencia», así que nada que suene a eso).

**Dónde:** `data/*.json` → `soluciones[].propuesta.por_que_nosotros` (diez soluciones) y `build.js` (`filaProp` de «Por qué Entelgy», que hoy solo pinta si hay texto).

### 1.9 · Modernización · el «Qué es» nombra la IA sin decir qué hace

**Literal:** «Cogemos las aplicaciones legacy que ya frenan al negocio y las modernizamos con enfoque Spec-Driven e IA, sin parar la operación.»

**Por qué la tumbaría.** Es la primera línea de la única solución completa, la que se enseña en detalle. «Con enfoque Spec-Driven e IA» nombra dos cosas y no aterriza ninguna; el cómo está tres pantallas más abajo, en la ficha de NASERTIC («la IA documenta y traduce el sistema existente a especificaciones y el equipo gobierna y valida»). Es la regla de tangibilidad aplicada a la frase que más se lee.

**Propuesta:** «Cogemos las aplicaciones legacy que ya frenan al negocio y las modernizamos sin parar la operación, con el método Spec-Driven: la IA documenta y traduce el código que ya existe, y el equipo de Entelgy gobierna y valida cada paso.»

**Dónde:** `data/software-development.json` → `soluciones[0].propuesta.que_es`.

### 1.10 · Modernización · la nota del autodiagnóstico deja que un comercial envíe a un cliente real un ejemplo ficticio sin validar

**Literal:** «Herramienta de 10 preguntas para enviar al cliente; devuelve un índice de exposición y el siguiente paso. Ejemplo cargado: Grupo Lantia (78). Pendiente de que Jorge valide las diez preguntas y el índice.» Con chips «sale al cliente · vigente · jul 2026».

**Por qué la tumbaría.** «Sale al cliente» y «vigente» le dicen al comercial que puede enviarla hoy; la nota dice que las preguntas no están validadas y que lo que abre es una cuenta que no existe, en jerga («ejemplo cargado», «78»). MA fue claro en junio: nada simula, y lo que no está se marca. El estado no lo toco (revisión 9); la nota sí tiene que cerrar la frontera.

**Propuesta:** «Diez preguntas que el cliente responde solo: le devuelven cuánto le expone su legacy y cuál es el siguiente paso. Lo que abre hoy es el ejemplo de Grupo Lantia, una cuenta ficticia. Antes de enviárselo a una cuenta real, Jorge tiene que validar las preguntas y el índice.»

**Dónde:** `data/materiales.json` → `mod-autodiagnostico.nota_de_uso`. Aviso aparte, en supuestos: por la regla de la revisión 9 (cambios pendientes del dueño), esta pieza y la ficha de servicio serían «revisar»; lo decide Susana.

### 1.11 · /punto-de-partida · la pantalla dice en voz alta que es para la demo

**Literal:** eyebrow «Demo a Dirección · fuera del menú» y, al pie, «Pantalla para la demo a Dirección. Accesible por URL propia, fuera del menú.»

**Por qué la tumbaría.** Si MA la abre delante del CEO, la página anuncia que está montada para él. Son dos notas de construcción (el campo `nota` del JSON y un eyebrow de `build.js`) que se están pintando.

**Propuesta.** Eyebrow: «Por qué Hipatia». Al pie, nada: la nota se queda en el JSON sin pintarse.

**Dónde:** `build.js` líneas 580 y 587; `data/corporativo.json` → `punto_de_partida.nota` (no se pinta).

---

## Caja 2 · Conviene antes del 8

### 2.1 · Portada · las otras tres propuestas de práctica

- **Smart Operations.** Literal: «Que el puesto de trabajo y la infraestructura recuperen capacidad, con operación inteligente.» «Operación inteligente» es la IA sin aterrizar; «recuperen capacidad» no le dice al comercial qué vende. Lo que Amador tiene y el resto no cuenta igual es tratar puesto e infraestructura como un solo servicio medido por la experiencia, no por la disponibilidad. Propuesta: «Puesto de trabajo e infraestructura como un solo servicio, medido en lo que nota la gente.» (90 caracteres; `data/smart-operations.json` → `propuesta_portada`).
- **Digital Change.** Literal: «Que las personas adopten, gobiernen y aprovechen la IA en la organización.» Tricolón, y vale para cualquier consultora de cambio. El área es más ancha que la IA (Alfredo: «la IA es el filo, no el perímetro») y sus tres productos son cultura, conocimiento y gobierno. Propuesta: «Que lo desplegado se use de verdad: cultura, conocimiento y gobierno humano de la IA.» (`data/digital-change.json` → `propuesta_portada`).
- **Data Intelligence.** Literal: «Convertir datos, modelos y agentes en decisiones y operación con gobierno.» Abstracta; el comercial no sabe qué contar. El diferenciador real espera a Daniela (Tinámica, en standby), así que la propuesta solo puede decir con claridad lo que la práctica hace hoy: «Que el dato sirva para decidir: gobierno de datos y modelos, analítica e IA en producción.» (`data/data-intelligence.json` → `propuesta_portada`).

Process Intelligence pasa el filtro tal como está.

### 2.2 · /entelgy · el rótulo no reconoce el botón desde el que se llega

**Literal:** en portada el botón dice «Cómo presentar Entelgy →»; la página abre con el eyebrow «Relato corporativo». El árbol de MA para el 10 es «cómo presentar la compañía / líneas de negocio». Propuesta: eyebrow «Cómo presentar Entelgy»; el H1 «Entelgy, en una conversación» se queda. (`build.js` línea 558.)

### 2.3 · /entelgy y /practicas · «tensión» y «silos»

**Literal:** «Entramos por la tensión que tiene delante el cliente, no por un catálogo de silos.» y su texto «Procesos, software, datos e IA, operaciones o cambio: las prácticas son puntos de entrada a una misma forma de transformar. Se activa la combinación que la situación justifica.» En `/practicas/`: «Cinco prácticas, una misma forma de transformar. Entra por la que responde a la tensión que tiene delante el cliente.» «Tensión» y «silos» son palabras de consultor; el patrón «no X, sino Y» es de plantilla. Propuesta, entrada 4: título «Entramos por el problema que el cliente tiene delante, y desde ahí se suman las prácticas que hagan falta.», texto «Procesos, software, datos e IA, operaciones o cambio: cada práctica es una entrada a la misma forma de trabajar. Se activa la combinación que la situación pide.» Lede de `/practicas/`: «Cinco prácticas, un mismo método. Entra por la que responde al problema que tiene delante tu cliente.» (`data/corporativo.json` → `relato.entradas[3]`; `build.js` línea 343.)

### 2.4 · /entelgy · «Cómo lo hacemos» habla en consultor

**Literal:** «Entendemos la situación real, diseñamos un futuro gobernado, implantamos de forma integrada, preparamos la adopción y medimos el impacto.» Propuesta: «Miramos cómo está la situación de verdad, diseñamos adónde ir y quién lo gobierna, lo implantamos sobre lo que ya existe, preparamos a la gente que lo va a usar y medimos el impacto. Gobierno, seguridad y operación sostenible van en todo el ciclo.» (`data/corporativo.json` → `relato.entradas[2].texto`.)

### 2.5 · /entelgy · el ancla de MA no está

«Transformar es mucho más difícil que crear» abre y cierra el deck v6 y es la frase que MA defiende desde mayo. En `/entelgy/` no aparece. La D3 sigue abierta y las guidelines dicen no reabrirla para la home, así que no lo propongo como cambio: es una pregunta para el 8. Si él la quiere, cabe como primera línea de `relato.sesenta_segundos`: «Transformar es mucho más difícil que crear. La mayoría de las transformaciones no falla por la tecnología…».

### 2.6 · Las cinco prácticas · «Qué no prometemos» en impersonal

**Literal:** «No se presenta como…», «No se promete…», «No se vende IA como fin en sí mismo…», «No se plantea…», «No se presenta como una campaña…». El bloque es bueno (Roberto valoró «qué hacemos y qué no»), pero está escrito como descargo legal: verbos sin sujeto, patrón detectable. Propuestas, en primera persona:

- Process Intelligence: «No vendemos automatizar por automatizar ni sustituir equipos de golpe. Antes de proponer minería, automatización o agentes miramos el proceso, los datos y cómo se opera de verdad.»
- Software Development: «No cerramos plazo ni alcance de una modernización sin haber visto la aplicación, sus dependencias y lo crítica que es. Tampoco es solo hacer funcionalidades: hablamos de sostener el sistema, de su calidad y de cuánto cuesta cambiarlo.»
- Data Intelligence: «No vendemos IA porque sí ni prometemos resultados sin revisar antes datos, gobierno, riesgos y adopción. Tener datos no significa que sean de calidad, que se puedan usar o que sirvan para un caso de IA.»
- Smart Operations: «No proponemos una herramienta ni un cambio de operación sin entender antes el servicio que hay, quién lo usa y con qué restricciones se opera. Tampoco es arreglar la infraestructura por su cuenta: el resultado depende de la experiencia, de los procesos y de que la gente lo adopte.»
- Digital Change: «No es una campaña de comunicación ni una formación suelta: va pegada a un cambio concreto en cómo se trabaja. Adoptar IA obliga a revisar para qué, con quién, en qué procesos y con qué reglas; dar acceso a una herramienta no basta.»

(`data/<practica>.json` → `que_no_prometer`.)

### 2.7 · Las cinco prácticas · «La pregunta que abre» no se puede decir de un tirón

**Literal** (la de Process Intelligence, las demás son parecidas): «¿En qué parte del proceso se pierde hoy más tiempo, control o capacidad de respuesta, y qué evidencia tenéis para localizarlo?» Comparada con la de Modernización («¿Qué % del gasto IT de este año financia sistemas que vas a necesitar dentro de tres?»), las cinco de práctica son dos preguntas en una, con tricolón. Propuestas:

- Process Intelligence: «¿En qué parte del proceso se os va más tiempo, y cómo lo sabéis?»
- Software Development: «¿Qué aplicación os frena hoy más de lo que os ayuda?»
- Data Intelligence: «¿Qué decisión tomáis hoy sin fiaros del todo del dato que tenéis?»
- Smart Operations: «¿Qué os cuesta más hoy: que la gente pueda trabajar sin fricción o que la infraestructura no falle?»
- Digital Change: «¿Qué tendría que cambiar en el día a día de la gente para que esto se use de verdad?»

(`data/<practica>.json` → `pregunta_comun`. La de Data Intelligence se repite como «Cómo abres» en su solución: `soluciones[0].propuesta.como_abres`.)

### 2.8 · /practicas/software-development · una nota de taxonomía que parece una nota

**Literal:** «Spec-Driven Development y Factoría SEAS son capacidades de la práctica (Especificar, Aumentar), no soluciones.» Es la decisión provisional pendiente de Jorge, escrita como acta. Convertida en munición sirve: «Si te preguntan por Spec-Driven o por la Factoría SEAS: no son soluciones aparte, van dentro de estas tres.» (`data/software-development.json` → `capacidades_nota`.)

### 2.9 · Las cinco prácticas · «ficha» donde debía decir «solución»

**Literal:** «Responsable de la práctica: Jorge. Especialista por solución en cada ficha.» En pantalla solo existen prácticas, soluciones y materiales (`CLAUDE.md`); «ficha» es una pieza. Propuesta: «Especialista por solución en cada solución» suena mal; mejor «Cada solución lleva su especialista.» (`build.js` línea 318.)

### 2.10 · Las cinco prácticas · la descripción que viaja por Teams es la antigua

**Literal:** el `<meta name="description">` de cada página de práctica usa `pr.propuesta`: «Acompañamos el ciclo de vida de las aplicaciones…», «Ayudamos a entender…», «Conseguimos que la IA…». No se ve en la página, pero es lo que muestra la previsualización cuando alguien pega la URL en Teams o en un correo. Propuesta: usar `propuesta_portada` también ahí. (`build.js` línea 323.)

### 2.11 · Modernización · «sin comprometer al cliente a nada» choca con «primer contrato»

**Literal:** «El primer paso solo mide: el Assessment dice qué tocar y qué dejar, sin comprometer al cliente a nada.» Tres líneas más abajo: «Assessment de modernización · dos semanas · Primer contrato.» El Assessment es de pago (el gratis es el autodiagnóstico); un comercial que lea la primera frase lo puede regalar. Propuesta: «…el Assessment dice qué tocar y qué dejar, y no obliga al cliente a seguir con nosotros después.» (`data/software-development.json` → `soluciones[0].propuesta.objecion_principal.respuesta`.)

### 2.12 · Modernización · el primer paso habla en clave

**Literal:** «La estrategia, el gobierno y el método se quedan en Entelgy; sin precio en este punto.» Es el guardarraíl del playbook («no se regalan») escrito para nosotros. Un comercial puede leer «no compartimos el método» y repetirlo mal. Propuesta: «Primer contrato. Entrega el triaje del portfolio (qué se moderniza, qué no, qué pasa a mantenimiento) y el business case para Dirección. El método y el plan de gobierno no se entregan sueltos: forman parte del proyecto que viene después. Precio: por cuenta, con Jorge.» (`soluciones[0].propuesta.primer_paso.nota`.)

### 2.13 · Modernización · tres notas de material con jerga de trabajo

- Deck ejecutivo. Literal: «Jorge pidió tres cambios que esperan su documento de AT…». «AT» no lo descifra un comercial nuevo. Propuesta: «Deck de la práctica para la reunión introductoria (v3, jul 2026). Jorge tiene tres cambios pendientes: la slide de Asistencia Técnica, la de referencias y un anexo de créditos. Sirve para preparar la reunión; no lo envíes hasta la versión corregida.» (`mod-deck-ejecutivo.nota_de_uso`.)
- Business case. Literal: «Salida interna con guardarraíl Foreworth; no material cliente hasta decidirlo.» Propuesta: «En preparación · dueño: Jorge / producto · fecha objetivo: sept 2026. Plantilla para armar el business case tras el assessment. Uso interno hasta decidir qué cifras de productividad (Foreworth) pueden salir al cliente.» (`mod-business-case.nota_de_uso`.)
- Ficha de servicio. Literal: «Pendiente confirmar con Jorge la mención del 40% en documento público.» El comercial no sabe qué 40% es, y la pieza está marcada «sale al cliente · vigente». Propuesta: «Ficha de dos caras para dejar al cliente; valida ante IT y compras. V1 provisional: menciona el reparto del 40% del ahorro y Jorge aún tiene que confirmar que puede ir en un documento público. Si el cliente pregunta por esa cifra, remite a Jorge.» (`mod-ficha-servicio.nota_de_uso`.)

### 2.14 · Modernización · la nota de las referencias le dice al comercial cómo elegir

**Literal:** «Elige la referencia por parecido de situación, no por notoriedad. Citable en presentación; el envío formal al cliente se autoriza por cuenta.» La primera frase es consejo de venta, justo lo que MA pidió no hacer («el comercial cree que vender ya lo sabe»). Propuesta: «Citable en presentación. El envío formal de la referencia al cliente se autoriza por cuenta.» (`build.js` línea 215.)

### 2.15 · Modernización · «Para prepararte» · la nota de las frases y el agente futuro

**Literal:** «Muestra a partir del escenario Grupo Lantia (aseguradora sintética: …). En una futura fase las genera un agente por cuenta.» «Sintética» es jerga; el agente futuro ya vive en «Lo que viene» y aquí solo distrae. Propuesta: «Ejemplo sobre una cuenta ficticia, Grupo Lantia (aseguradora: core de pólizas Java de 11 años, sin arquitecto cloud, deuda técnica de unos 1,8 M€ al año, DORA encima). Cambia los datos por los de tu cuenta.» (`soluciones[0].kit.frases_cuenta.nota`.)

### 2.16 · Modernización · «el AI Act pone fecha» a un core de pólizas

**Literal:** «DORA ya os pide demostrar la resiliencia del core de pólizas, y el AI Act pone fecha: diciembre de 2027. Documentar ese core deja de ser opcional…». El AI Act pone fecha a los sistemas de IA de alto riesgo (en seguros, la tarificación y la evaluación de riesgo en vida y salud, Anexo III), no a un core de pólizas por ser antiguo. Un CIO lo sabe y lo devuelve. Propuesta: «DORA ya os pide demostrar la resiliencia del core de pólizas; y si ese core decide precio o riesgo con IA, el AI Act le pone fecha: diciembre de 2027. Documentar ese core deja de ser opcional, y lo que os propongo es que salga del mantenimiento que ya pagáis, no de un proyecto extra.» Que Jorge lo confirme (supuestos). (`kit.frases_cuenta.frases[0].texto`.)

### 2.17 · Modernización · dos instrucciones de venta

- Literal: «Estas frases abren la conversación y cualifican; no la sostienen entera. Si el cliente muerde, el siguiente paso es traer al especialista del área — no improvisar profundidad técnica.» Propuesta: «Estas frases abren y cualifican; no sostienen la reunión entera. Cuando el cliente muerde, el siguiente paso es traer a Jorge.» (`kit.frases_cuenta.regla`.)
- Literal: «El presupuesto lo mueven CFO/CCO. Entra por ahí siempre que puedas.» Roberto pidió atención a todas las oportunidades, no solo a las preconcebidas. Propuesta: «El presupuesto suele moverlo el CFO o el CCO.» (`kit.pitch_nota`.)

### 2.18 · Modernización · «certificada» donde el diferenciador dice «medida»

**Literal:** «productividad certificada por Foreworth» (Dir. Ops) y «certificada por un tercero» (objeción 1). Foreworth mide; certificar es una promesa de otro rango, del tipo que la regla de voz («responde de, nunca garantiza») quiere fuera. Propuesta: «medida por Foreworth» y «medida por un tercero». Y la línea del Dir. Ops no contesta a su pregunta («¿Cuántos pilotos llevan +1 año sin producción?»): mejor «le mueve: salir del piloto con una entrega que se mide (Foreworth), no otro piloto.» (`kit.pitch_por_rol[3].le_mueve`, `kit.objeciones[0].respuesta`.)

### 2.19 · Modernización · dos objeciones con cifra sin obra y con claim absoluto

- Literal: «La deuda técnica crece sola (Gartner: 20–40% del valor de los activos). Y el AI Act obliga en sistemas de alto riesgo en diciembre de 2027.» Autor sin obra ni año, que es justo lo que la disciplina de fuentes no admite. La cifra viene del mapa de pains F3 de Jorge; si él tiene el informe, se recupera con obra y año. Mientras tanto: «La deuda técnica no espera: cada año cuesta más sostener lo mismo y queda menos gente que lo conozca. Y el AI Act pone fecha a los sistemas de alto riesgo: diciembre de 2027. Quien empieza ahora llega con margen; quien espera, con semanas.» (`kit.objeciones[1].respuesta`.)
- Literal: «Esa firma no la encuentras en otra propuesta.» Es la afirmación «nadie más lo hace» que en el área de Jorge ya se dio por indefendible una vez (D2: «primer proveedor adelantado al mercado» no aguantaba frente a Globant y EPAM). Propuesta: «…con la productividad medida por un tercero (Foreworth). Nosotros lo ponemos por escrito.» (`kit.objeciones[2].respuesta`.)

### 2.20 · Las diez soluciones en preparación · seis líneas de una frase que no dicen qué se vende

- Mantenimiento evolutivo. Literal: «Sostener y evolucionar producción con calidad y continuidad.» Propuesta: «Mantener producción y pagar la evolución con la eficiencia que el mantenimiento recupera.»
- Asistencia técnica aumentada. Literal: «Capacidad experta conectada a una entrega medible.» Propuesta: «Especialistas de los Centros de Excelencia dentro de tu equipo, con una entrega que se mide.»
- Puesto de trabajo. Literal: «Mejorar la experiencia digital del empleado de extremo a extremo.» Propuesta: «Soporte, dispositivo y autoservicio como un solo servicio, medido en lo que nota el empleado.»
- Infraestructura crítica. Literal: «Operar continuidad, capacidad y eficiencia con visión preventiva.» Propuesta: «Operar infraestructura crítica y cloud viendo el fallo y el coste antes de que lleguen.»
- PreservIA. Literal: «Convertir el conocimiento experto en un activo vivo.» Propuesta: «Capturar el conocimiento de los expertos antes de que se vaya con ellos, y ponerlo donde se usa.»
- Oficina de Gobernanza Humana de la IA. Literal: «Decidir, priorizar y gobernar la IA con las personas en el centro.» «Con las personas en el centro» lo dice todo el mercado. Propuesta: «Decidir qué IA avanza, cuál se frena y quién responde de cada decisión.»

Las de Inteligencia de procesos, Automatización, Data Intelligence e IAbility se quedan. Estas líneas se ven en portada (cajas de solución), en la práctica y en la cabecera de cada solución. (`data/<practica>.json` → `soluciones[].una_linea`.)

### 2.21 · Las diez soluciones en preparación · «Tarjeta completa»

**Literal:** «En preparación. Tarjeta completa, pitch por rol, objeciones, referencias y materiales de esta solución · dueño: … · fecha objetivo: sept 2026.» «Tarjeta» es vocabulario de hipatia2, no del catálogo. Propuesta: «En preparación: propuesta completa, pitch por rol, objeciones, referencias y materiales de esta solución · dueño · fecha.» (`soluciones[].pendiente.texto`, diez veces; en Mantenimiento y Asistencia técnica dice «Tarjeta completa, casos y materiales».)

### 2.22 · /contactos · nombres sin apellido, y una frase que explica la regla

MA, el 23 de junio, sobre la agenda de contactos: «foto + nombre + apellido… es lo que vas a agradecer: ¿a quién llamo?». El directorio dice «Jorge», «Carmen», «Amador». En una compañía de dos mil personas hace falta el apellido (de los seis, sé Jorge Herrero y Alfredo Zurdo; el resto en supuestos). Y el lede «Donde no hay dato validado, se dice «en preparación»» explica el portal en vez de usarse: sobra. (`data/personas.json` → `nombre`; `build.js` línea 633.)

### 2.23 · /lo-que-viene · cinco huellas de trabajo y una decisión desactualizada

- Literal: «Lo que la v3 deja fuera a propósito…». «v3» es el número de build. Propuesta: «Lo que Hipatia deja fuera a propósito por ahora y llegará cuando el uso lo justifique. Nada de esto se simula hoy.» (`lo_que_viene.intro`.)
- Literal: «…que Hipatia proponga la solución y su kit.» «Kit» no existe en pantalla. Propuesta: «…y que Hipatia proponga la solución y su material.» (`items[0].texto`.)
- Literal: «El agente que ya existe (Digital Change), integrado con cuatro salidas por escenario. Dueño: Digital Change.» El 3-sep se decidió no contar con el asistente de Alfredo para la v3 y hacer algo propio y sencillo. Propuesta: «Un asistente sencillo que arma la visita a partir de la cuenta y la solución. Dueño: por asignar.» (`items[1].texto`, `items[1].dueno`.)
- Literal: «Generalizar la herramienta de Lantia a más soluciones.» Propuesta: «Llevar el autodiagnóstico de Modernización a más soluciones.» (`items[3].texto`.)
- Literal: «La lectura de mercado que pidió el Menti, más allá del benchmark por solución. Dueño: con MA y Jorge.» «El Menti» y «MA» son de puertas adentro. Propuesta: «La lectura de mercado y competencia que pidió el equipo comercial en junio, más allá del benchmark por solución. Dueño: Corporativo · Jorge.» (`items[4].texto`, `items[4].dueno`.)

### 2.24 · /punto-de-partida · el «de dónde partimos» juzga

**Literal:** «Hoy el material comercial vive disperso en un SharePoint tipo repositorio. Buscar una pieza, saber si está vigente y si puede salir a cliente cuesta más que preparar la reunión.» MA pidió en junio un as-is «sin herir» y sin métricas, por quien llevaba Hipatia antes. La última frase es un juicio. Propuesta: «Hoy el material comercial está repartido en un SharePoint que funciona como archivo: se guarda bien, pero cuesta saber cuál es la pieza buena, si está vigente y si puede salir a cliente.» (`punto_de_partida.as_is.texto`.)

---

## Caja 3 · Después del 10

- **El primer paso que se vende, sin plazo ni nombre vendible.** Cuatro de las cinco prácticas dicen «plazo y alcance con el especialista», y las tres soluciones de Digital Change tienen como primer paso «Primer recorrido de adopción», «Primer ámbito de conocimiento» y «Primer perímetro de casos, roles y decisiones», que no son servicios que se puedan cotizar (la unidad facturable de MA). Con los SM: nombre, plazo y qué entrega. Mientras tanto, las tres de Digital Change podrían heredar el «Diagnóstico de madurez en adopción y gobernanza» de la práctica.
- **«Qué es» y «Cómo abres» de las diez soluciones en preparación.** Están en primera persona y son honestas, pero siguen siendo plantilla larga (`como_abres` de Smart Operations o de la OGH-IA son dos preguntas en una). Se afinan cuando cada SM entregue su tarjeta en septiembre.
- **Data Intelligence.** «Qué cubre» repite «gobierno, analítica e IA» dos veces en una frase; «Primer avance: Assessment… Primer avance para contrastar…» se repite. Cosmético.
- **NASERTIC · «el cliente atiende llamadas de referencia».** Es una promesa que hace el comercial en nombre de un tercero; que Jorge confirme que sigue siendo verdad (va en supuestos; si no, se quita esa frase y la cifra se queda).
- **Foreworth** aparece cinco veces en Modernización y nunca se dice qué es. Una vez basta: «Foreworth, la medición externa de productividad».
- **Contactos.** Practica dice «Responsable: Carmen · Carla»; el directorio, solo Carmen como responsable y Carla como especialista. Alinear con lo que decidan las dos en su sesión de septiembre.
- **Pie de todas las páginas.** «El CRM sigue siendo el registro único. Hipatia lo alimenta, no lo sustituye ni lo duplica.» Cumple la orden de Jorge; se puede acortar a «Hipatia alimenta al CRM, que sigue siendo el registro único.»
- **Rótulos meta.** «Fuera del menú» como eyebrow de «Lo que viene»; «Nada se guarda» tras «¿Falta algo?»; «Los canales de Teams se enlazan cuando estén validados» en Contactos. Honestos, pero explican el portal. Pasada de «menos es más» cuando la auditoría visual toque esas pantallas.
- **Material interno de Modernización.** «Mensajes clave del área — guía interna · interno»: el tipo y el chip dicen lo mismo. Para la auditoría visual.
- **Autodiagnóstico de julio.** Sigue con la identidad de julio (ya registrado como pendiente).

---

## Aviso aparte · el titular de portada

«Entelgy responde de que tecnología, procesos, personas y cultura avancen juntos hasta el resultado.» es decisión de la revisión 6 y no lo tumbaría: nombra a Entelgy, lleva el mantra de MA y su regla de «responde de», y con Minsait delante no aguanta igual. Dos cosas para tener en la cabeza el 8. La primera es de oído: «responde de que … avancen juntos hasta el resultado» cuesta leerlo en voz alta; si a MA le tropieza, la misma frase con la gramática al derecho es «Entelgy responde del resultado: tecnología, procesos, personas y cultura avanzando juntos.» (90 caracteres). La segunda es de contenido: su guion para el kickoff pedía «la tecnología como pieza clave del éxito de cualquier organización» más el mantra, y el titular lleva el mantra pero no la primera mitad. Si la echa de menos, no es un problema del titular sino de que la frase de bienvenida la dice quien presenta (revisión 11b), y ahí cabe.

---

## Supuestos que probaría antes de dar la auditoría por buena

1. **Que la revisión del 8 con MA recorre también `/entelgy/` y las páginas de práctica**, no solo el camino de la demo. Si solo mira el camino, 1.3, 1.4 y 1.8 bajan a la caja 2.
2. **El nombre de la Oficina.** En pantalla dice OTG (Transformación y Gobierno); en los documentos de MA, OTP; en la web pública de Entelgy, Oficinas de Transformación y Gobernanza. Lo fija MA.
3. **Que la nota del Executive Deck no estaba entre las cinco que aprobaste en el bloque T** de la revisión 11 (mi memoria dice cinco de seis). Si la aprobaste tal cual, 1.2 es tuyo, no mío.
4. **Estados del autodiagnóstico y de la ficha de servicio de Modernización.** Por la regla de la revisión 9 (cambios pendientes del dueño), serían «revisar». No los toco; lo decides tú.
5. **Dos «Por qué Entelgy» reutilizados.** El de Mantenimiento sale del caso DGOJ firmado por Jorge, pero en un sitio nuevo; el de Inteligencia de procesos usa el dato canónico de Carmen (Gold, +50 proyectos, tres países). Los dos SM tienen que verlos antes del 10.
6. **Apellidos** de Carmen, Carla, Daniela y Amador para `/contactos/`.
7. **La cifra Gartner (20–40%)** del mapa de pains F3: si Jorge tiene obra y año, se recupera en la objeción 2.
8. **NASERTIC atiende llamadas de referencia**: que siga siendo verdad hoy.
9. **La frase del AI Act sobre el core de pólizas** (2.16): que Jorge confirme el encuadre (Anexo III, seguros de vida y salud) antes de dejarla.
10. **Las veinte notas de uso** (1.7) describen el tipo de pieza; no he abierto ninguna. La segunda mitad de cada frase la afinas tú, que las conoces.
11. **El número de la siguiente revisión.** Hoy el libre en `docs/` y en el log es el 12, pero la auditoría visual del otro hilo iba a usar el 12 con bloques desde la Z. Quien vaya primero se lo queda; el otro es el 13.
12. **Las capturas del as-is** en `/punto-de-partida/` llevan caras y rótulos de confidencial (junio). Dentro del Access valen; proyectadas ante cien personas, es decisión de MA.

---

## Lo que he leído

- Proyecto: `claude/hipatia-v3-estado.md` · `hipatia-guidelines-diseno-contenido.md` · `guberna-contexto-marca.md` · `decisiones.md` · `entelgy-contexto-cliente.md` · `corporativo-estado-trabajo.md` · `feedback-verano-consolidado.md` · `hipatia2-estado.md` (§10 y §15, y el resto para contexto) · búsquedas en `jorge-herrero-estado-trabajo.md` (Foreworth, deuda técnica, casos).
- Repo: `CLAUDE.md` · `docs/Auditoria_y_especificacion_Hipatia_v3.md` (§0 con las revisiones 5–11b, §6) · `build.js` (plantilla y bloques) · `medir.js` (barrido de canon) · `data/corporativo.json`, `software-development.json`, `process-intelligence.json`, `data-intelligence.json`, `smart-operations.json`, `digital-change.json`, `personas.json` completos · las 46 piezas de `data/materiales.json` que aparecen en el recorrido.
- Texto visible extraído con un script de las 22 páginas del recorrido: portada, `/entelgy/`, `/practicas/` y las cinco prácticas, las once soluciones, `/contactos/`, `/lo-que-viene/`, `/punto-de-partida/`.

**Lo que no he mirado:** el navegador, las 88 fichas de `/materiales/<pieza>/`, `/materiales/` con sus filtros, el autodiagnóstico de julio, ni el contenido de los documentos enlazados en entelgy.guberna.es.
