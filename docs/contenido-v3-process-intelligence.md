# Contenido real para la v3 · Process Intelligence · las dos soluciones

*Vista previa para Susana · 3 de septiembre de 2026 · rama `claude/hipatia-v3-static-catalog-49l3yx`. Sin cambios en la web: este documento es la materia prima del prompt a Código. Leído: el deck, la ficha y el one-pager de Carmen (`process-mining/DECKS/Process_Intelligence.html`, `fichas/ficha-process-intelligence.html`, `fichas/onepager-process-intelligence.html`), el deck, la ficha y el one-pager de Carla (`automatizacion/decks/deck_cliente.html`, `fichas/ficha-automatizacion-procesos.html`, `fichas/onepager-automatizacion-procesos.html`), y los dos ficheros de estado del proyecto (`carmen-estado-trabajo.md`, `carla-estado-trabajo.md`), que son los que dicen qué se puede decir y qué no.*

---

## El problema

Las dos soluciones de Process Intelligence tienen hoy en la v3 una página de plantilla: un «Qué es» correcto pero sin cifra, un «Por qué Entelgy» que firmaría cualquiera, «Sin pieza para este momento todavía» tres veces en Inteligencia de procesos aunque la práctica tiene deck, ficha y one-pager vigentes, «Sin referencia autorizada» aunque Lanbide está autorizado con nombre y cifras desde el 21 de agosto, y un «Para prepararte» en preparación. Mientras tanto, en las seis piezas hay todo lo que un comercial necesita: la cifra del problema con su fuente, el diferenciador con nombre propio, dos casos con números, el precio y el plazo de la entrada, por quién se entra y qué decir cuando el cliente ya tiene robots o ya hizo un piloto.

Lo que sigue saca eso de las piezas y lo coloca campo a campo en el JSON de la v3, con la misma regla que Modernización: cifras solo como resultado de un caso o con autor, obra y año; nada que el fichero de estado del área prohíba; la frontera interno / cliente marcada; y el estado de la solución sin tocar hasta que Carmen y Carla lo hayan leído.

---

## 0 · Lo que cambia en la práctica · `/practicas/process-intelligence/` (`data/process-intelligence.json`)

**Qué cubre** (`que_cubre`). Hoy: «Hacer visible el proceso real con datos, priorizar dónde está el valor, y rediseñar, automatizar y asistir el trabajo repetitivo con criterio de negocio.» Propuesta, con la frontera que fija el deck de Carla (slide 6) y Carmen (29-abr): «Ver el proceso que ejecutan de verdad tus sistemas, no el de los manuales, y decidir sobre ese dato dónde renta invertir. Después, automatizarlo: RPA donde repite, IA donde decide, rediseño donde el flujo no encaja. El mining descubre y prioriza sobre los registros; la automatización levanta a mano lo que no está en un sistema, lo ejecuta y lo deja en producción.»

**Qué no prometemos** (`que_no_prometer`). Se queda la reescritura en primera persona de la auditoría de copy (2.6), con un añadido que sale de las piezas: «No vendemos automatizar por automatizar ni sustituir equipos de golpe. Antes de proponer minería, automatización o agentes miramos el proceso, los datos y cómo se opera de verdad. Y no prometemos una mejora sin haberla medido antes: la baseline va delante de cualquier inversión.»

**La pregunta que abre** (`pregunta_comun`). «¿Cuál es el proceso que más pesa, y quién sabe cómo se ejecuta de verdad?» (de la auditoría de copy; encaja con «los sistemas empezaron a dictar los procesos», frase de Carmen).

**Primer avance** (`primer_avance`). Hoy: «Diagnóstico Data Driven · unas seis semanas. Precio cerrado…». Dos problemas: «Data Driven» es el nombre del diagnóstico de Carla, no del de Carmen (su deck lo llama «Diagnóstico de entrada»), y Carmen pidió no usar «data-driven» en su material (regla de área, jun-2026). Propuesta: `titulo` «Un diagnóstico sobre un proceso real», `plazo` «6–8 semanas», `nota` «Con minería si el proceso deja rastro en los sistemas (Carmen) y a mano si no lo deja (Carla). Baseline medida en horas y tareas, mejoras priorizadas y retorno estimado. Precio cerrado; el detalle, en cada solución.»

**Capacidades** (`capacidades`). Se quedan: Descubrir · Priorizar · Implantar · Gobernar son las cuatro fases del deck de Carla (slide 8) y el método de la práctica conjunta.

**Material común** (`material_comun`). Se queda (deck, one-pager y ficha de Carmen), con las notas de uso de la auditoría de copy.

---

## 1 · Inteligencia de procesos · Carmen Rode

### 1.1 · Lo que hay en las tres piezas (extracción para el comercial)

**El problema, con cifra y fuente.** «Los sistemas empezaron a dictar los procesos»: un proceso cruza decenas de herramientas y se acaba viendo el de los manuales, no el que ejecutan los sistemas. Sobre esa niebla la IA se despliega sin saber dónde renta: **1 de cada 20 pilotos de IA llega a impacto medible en la cuenta de resultados** (MIT NANDA) y **el 58% de los directivos reconoce que el estado de sus procesos limita lo que consigue con IA** (Celonis · Carsten Thoma). Y hay reloj: AI Act alto riesgo en diciembre de 2027, NIS2 y DORA ya en vigor; la auditoría recae sobre quien firma, y suele ser el CIO (deck slides 2–3, one-pager bloque 01).

**Qué hacemos, en tres capas.** La base son las **decisiones guiadas por el dato**: ver el proceso real y decir dónde renta invertir y dónde no hace falta («no todo pasa por IA»). Encima, **habilitador de la IA**: el contexto de negocio que agentes y modelos necesitan para rendir en negocio y no en piloto. Y **gobierno de la IA**: traza de qué decide la IA y qué la persona, lista para auditoría (deck slide 5, ficha bloque 02). La tercera capa deja el proceso listo para que la Oficina de Gobernanza Humana de Alfredo ponga el sello: «hay un nivel más, y es nuestro» (deck slide 7).

**Por qué Entelgy, cuatro razones con nombre.** Muchos hacen el análisis y se van; nosotros dejamos el proceso funcionando (Lanbide: +500 personas lo usan a diario). Tres herramientas con partner real, **Inverbis, Celonis (Gold Partner + Premio europeo 2024) y SAP Signavio**; nadie más las combina, y se elige la que encaja con el caso: Inverbis para entrar ligero y por departamento, Celonis para escalar, Signavio para el mundo SAP y la migración a S/4. Un Centro de Excelencia que ya opera, en España y Latam, con aceleradores por proceso (gestión de ayudas, expedientes). Y la adopción dentro del proyecto, «la pieza que decide si funciona» (deck slide 6, ficha bloque 04).

**Lo que respalda a terceros.** Gartner, Magic Quadrant for Process Intelligence Platforms, 5 de mayo de 2026: Celonis y SAP Signavio, Leaders; Inverbis, Honorable Mention. +50 proyectos desplegados, +12 con cifras. Capacidad en seis países (ES · CL · AR · PE · CO · BR), desplegado en tres (ES · CL · CO). CoE certificado: 29 certificados, 16 master, 78 certificaciones (deck slide 8; `carmen-estado-trabajo.md`).

**Los casos.** **Lanbide · Servicio Vasco de Empleo** (nombre y cifras autorizados por el cliente, 21-ago): gestión del Ingreso Mínimo Vital con cinco meses de atasco y aplicativos que no dejaban ver dónde se frenaba el trabajo; minería sobre los registros, subsanación de incoherencias y en tres meses en uso diario del personal tramitador: **23.000 horas al año liberadas, −84% de esfuerzo manual, +500 usuarios a diario**. **Universidad · LATAM** (cifras autorizadas sin identificar al cliente): dos procesos capturados desde sus propios registros, tres herramientas comparadas en cuenta real, decisión de escalar tomada sobre datos: **30% de matrículas recuperables, −60% de errores y bucles**. Cartera anonimizada en el deck, sujeta a autorización por cuenta: entidad financiera, 283 K€ de ahorro en consolidación de créditos; industrial, 256 K€ de retorno en 7 meses en cobro y recuperación; gran distribución, 500 K€ anuales recuperados en facturación; aseguradora, detección temprana de irregularidades en pólizas y siniestros (deck slides 9–11).

**Cómo se compra.** Por proyecto en tres fases: **Diagnóstico de entrada, 6–8 semanas, 15–20 K€, sin comité de inversión** (baseline cuantificada y mejoras priorizadas; «es la puerta, no el techo»); Operativo, 6–12 meses, 40–120 K€ (Celonis en producción, KPIs en tiempo real, ROI sobre OPEX a 6 meses); Despliegue, +1 año, 150–250 K€ (varios procesos, CoE habilitado, agentes y predicción). Las tres fases también en suscripción, sin comprar plataforma ni montar equipo, importe a dimensionar (deck slide 12). Hay además un tallaje XS–XL con duraciones y costes por complejidad (`carmen-estado-trabajo.md`): el diagnóstico de entrada es la talla S.

**Por quién se entra.** El CIO: 8 de cada 10 proyectos entran por él; se escala con negocio. El CFO existe como comprador de cierre, nunca como entrada (deck slide 14; regla de área de Carmen). Focos verticales: Administración Pública y Salud, Banca-Finanzas-Seguros e Industria.

**Frases que Carmen ya usa en reunión y que no se tocan.** «Dominar la IA empieza por dominar tus procesos.» «Los sistemas empezaron a dictar los procesos.» «Valor liberado» (en horas y tareas, no en euros si el cliente no quiere traducir). «Opaco» en vez de «poca visibilidad». «Es la puerta, no el techo.»

**Reglas del área que condicionan el copy.** Nunca «data-driven» (se dice «guiadas por el dato»). Nunca OCPM con cliente. Nunca el CFO como entrada. Celonis es Gold, no Platinum. Signavio: honestidad sobre la capacidad en España (delivery vía partner en Argentina). AI Act: lo que está en el deck (trazabilidad de qué decide la IA y qué la persona), nada más allá. Universidad LATAM: nombre o cifras, nunca las dos. Fuera «sin atarte a una licencia». Inverbis-GBTEC: la adquisición no consta en fuentes públicas; en el portal, «Inverbis» a secas hasta que Carmen pase la referencia.

### 1.2 · Lo que chirría entre las tres piezas (para que Carmen lo sepa antes de que un comercial lo abra)

- El **deck** publicado en el hub es anterior a la tanda 3: nombra a **DUOC** (la regla de Carmen es nombre o cifras, y en ficha y one-pager ya es «Universidad · LATAM»), cierra con «**Documento público**» llevando tarifas (por `decisiones.md` del 15-jul eso lo hace pieza interna), tiene el contacto «pendiente» y no lleva el «Process Intelligence» como nombre único. La ficha y el one-pager sí están al día (31-ago).
- El **one-pager y la ficha** ya dicen «**Inverbis-GBTEC**» y citan el Magic Quadrant de Digital Twin (27-jul-2026) con GBTEC como Leader, cuando `carmen-estado-trabajo.md` lo deja bloqueado a la espera de la referencia. Si la adquisición no se confirma, hay que retirarlo de las dos piezas.
- Dos precios para la fase Operativo: 40–120 K€ en el deck, 70–150 K€ en el fichero de estado. Y el modelo interno de tallaje (Café · Magdalena · Tarta) no coincide del todo con la escalera de la slide 12. No afecta al portal si solo se publica el diagnóstico de entrada; sí si se publica la escalera entera.
- El one-pager ya lleva correo y teléfono de Carmen; el deck y la v3 no. Ver contactos (§3).

### 1.3 · La página propuesta, campo a campo (`data/process-intelligence.json` → `soluciones[0]`, id `process-mining`)

**Cabecera.** `una_linea`: «Ver cómo funciona el proceso real antes de decidir qué mejorar.» Se queda. `estado`: `en_preparacion` hasta que Carmen lea esta página (un correo); después, `vigente`. Lo decides tú.

**La propuesta (`propuesta`).**

- `que_es`: «Reconstruimos cómo se ejecutan de verdad tus procesos desde los datos de tus propios sistemas, no desde los manuales, medimos dónde se pierde tiempo y esfuerzo, y convertimos esa foto en decisiones: dónde invertir en IA y automatización, y dónde no hace falta. No entregamos un informe y nos vamos: implementamos y dejamos el proceso funcionando.» (Es el «Qué es» de la ficha, literal salvo una coma.)
- `a_quien`: «Entras por el CIO: ocho de cada diez proyectos empiezan ahí, y se escala con negocio. El CFO cierra, no abre. Donde más casos hay: Administración Pública y Salud, Banca-Finanzas-Seguros e Industria.»
- `senal`: «Un proceso que cada área describe distinto y que cruza varios sistemas (SAP o no). Un atasco de expedientes, facturas o siniestros que nadie sabe dónde se frena. Un piloto de IA parado porque el modelo no entiende cómo trabaja el negocio. Una auditoría que pregunta quién decidió qué.»
- `por_que_nosotros`: «Muchos hacen el análisis y se van; nosotros dejamos el proceso funcionando. En Lanbide, más de 500 personas usan a diario lo que dejamos en producción. Trabajamos con las tres herramientas líderes con partner real en cada una, Inverbis, Celonis (Gold Partner) y SAP Signavio, y elegimos la que encaja con el caso, no la que nos conviene. Y la adopción va dentro del proyecto, que es la pieza que decide si funciona.»
- `diferenciador`: «Vemos el proceso real, decidimos sobre el dato dónde renta invertir y nos quedamos hasta que el proceso opera. Tres herramientas, un solo criterio: el del cliente.»
- `objecion_principal`: texto «¿Otra herramienta? Ya tenemos datos y cuadros de mando.» · respuesta «No vendemos la herramienta. Vemos el proceso que ejecutan tus sistemas, no el que dicen los manuales, y te decimos con números dónde renta invertir y dónde no hace falta. Empiezas con un diagnóstico de seis a ocho semanas sin comprar licencia; si escalas, la licencia es una decisión posterior, no un peaje de entrada.»
- `como_abres`: «¿Qué proceso relevante se gestiona hoy con más intuición que evidencia?» Se queda (es de Carmen).
- `primer_paso`: `titulo` «Diagnóstico de entrada» · `plazo` «6–8 semanas» · `nota` «15–20 K€, precio cerrado, sin comité de inversión. Baseline cuantificada del proceso que más pesa, en horas y tareas, y mejoras priorizadas con retorno estimado. Es la puerta, no el techo: después vienen Operativo (Celonis en producción, 6–12 meses) y Despliegue (varios procesos, CoE), o las tres fases en suscripción. Cierra alcance y disponibilidad con Carmen.» El importe está en el deck que hoy sale al cliente; que aparezca en el portal (interno) es decisión tuya y de Carmen.

**Material para el cliente (`materiales`).** Hoy la solución solo lleva dos piezas internas y la página dice «Sin pieza para este momento todavía» tres veces. Propuesta: añadir `process-onepager`, `process-deck` y `process-ficha` a `materiales` (siguen también en `material_comun` de la práctica). Y ajustar `momento_comercial` en `data/materiales.json` a la doctrina de piezas (`decisiones.md`, 15-jul): el one-pager persuade y viaja → `primer_contacto`; el deck → `reunion`; la ficha valida y se deja → `para_dejar`. Con eso las tres columnas dejan de estar vacías.

**Referencias (`referencias`).** Tres piezas nuevas en `data/materiales.json`, tipo `referencia`, práctica `process-intelligence`, solución `process-mining`, zona `referencias`, dueño Carmen:

| id | Campos |
|---|---|
| `pi-caso-lanbide` | `titulo` «Lanbide · Servicio Vasco de Empleo» · `sale_al_cliente` `con_validacion` · `citable` `citable` · `sign_off` {Carmen Rode · 2026-08-21} · `contexto` «Administración pública. Gestión del Ingreso Mínimo Vital con cinco meses de atasco y aplicativos que no dejaban ver dónde se frenaba el trabajo.» · `que_hicimos` «Minería sobre los registros del proceso y la aplicación del IMV; detección y subsanación de incoherencias; paneles de priorización y seguimiento del expediente. En tres meses, en uso diario del personal tramitador.» · `resultado` «23.000 horas al año liberadas, −84% de esfuerzo manual, +500 usuarios a diario.» · `frase_reunion` «En Lanbide la gestión del Ingreso Mínimo Vital tenía cinco meses de atasco. Vimos el proceso real desde sus propios registros, corregimos las incoherencias y en tres meses 500 tramitadores lo usaban a diario: 23.000 horas al año que ya no se pierden.» · `cifras` [23.000 h/año · −84% · +500 usuarios · 3 meses, verificadas por el cliente] · `nota_de_uso` «Nombre y cifras autorizados por el cliente. Citable en presentación; el envío formal se autoriza por cuenta.» |
| `pi-caso-universidad-latam` | `titulo` «Universidad · LATAM» · `sale_al_cliente` `con_validacion` · `citable` `citable` · `sign_off` {Carmen Rode · 2026-08-21} · `contexto` «Institución educativa grande, entre España y Chile, que no quería escalar a ciegas.» · `que_hicimos` «Capturamos dos procesos reales desde sus registros, medimos desvíos, bucles y puntos de fuga, y comparamos tres herramientas (Celonis, Signavio, Inverbis) en su cuenta real.» · `resultado` «30% de matrículas recuperables detectadas, −60% de errores y bucles de tipificación. La decisión de escalar se tomó sobre datos.» · `frase_reunion` «Una universidad grande en Latinoamérica no quería escalar a ciegas. Capturamos dos procesos desde sus registros, comparamos tres herramientas en su cuenta real, y la decisión de escalar se tomó con un 30% de matrículas recuperables encima de la mesa.» · `nota_de_uso` «Cifras autorizadas sin identificar al cliente: nunca el nombre y las cifras juntos.» |
| `pi-cartera-sectores` | `titulo` «Cartera · Banca, Seguros, Industria y Distribución» · `sale_al_cliente` `con_validacion` · `citable` `confirmar_por_cuenta` · `contexto` «Cifras de proyectos reales del área, anonimizadas en el deck.» · `resultado` «Entidad financiera: 283 K€ de ahorro en consolidación de créditos. Industrial: 256 K€ de retorno en siete meses en cobro y recuperación. Gran distribución: 500 K€ anuales recuperados en facturas impagadas. Aseguradora: detección temprana de irregularidades en pólizas y siniestros.» · `frase_reunion` «En una entidad financiera el proceso de consolidación de créditos ahorró 283.000 euros; en una industrial, el cobro devolvió 256.000 en siete meses. Son cifras del área: el nombre lo confirmo contigo por cuenta.» · `nota_de_uso` «Confirmar con Carmen antes de nombrar al cliente. Las cifras son citables sin nombre.» |

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas del deck y de la ficha. No son un guion: elige la que encaja con lo que te ha contado el cliente.»
- `frases_cuenta.frases`:
  - `angulo` «Por el proceso opaco» · `cuando` «cuando cada área cuenta el proceso de una manera» · `texto` «Los sistemas han acabado dictando el proceso: hoy cruza decenas de herramientas y lo que veis es el de los manuales, no el que ejecutan de verdad. Lo reconstruimos desde vuestros propios registros y os decimos, en horas y tareas, dónde se pierde.»
  - `angulo` «Por la IA que no llega» · `cuando` «si hay un piloto de IA parado o una iniciativa de agentes» · `texto` «Uno de cada veinte pilotos de IA llega a impacto en la cuenta de resultados, y el 58% de los directivos reconoce que sus procesos limitan lo que consiguen con IA. Antes de gastar en agentes, vemos sobre qué proceso van a trabajar y si renta.»
  - `angulo` «Por la auditoría» · `cuando` «si aparece el AI Act, DORA o NIS2» · `texto` «El AI Act no os pide otra herramienta: os pide demostrar, sobre la ejecución real, qué decidió la persona y qué decidió la IA. Con el proceso minado, esa traza queda registrada desde el primer día.»
  - `angulo` «Por el consultor que se fue» · `cuando` «si ya hicieron un análisis de procesos» · `texto` «Muchos hacen el análisis y se van. En Lanbide, tres meses después de empezar, 500 tramitadores usaban a diario lo que dejamos en producción. Nos quedamos hasta que el proceso opera.»
- `frases_cuenta.regla`: «Si la mejora que sale del diagnóstico es automatizar, la lleva Carla; si es IA o desarrollo, Jorge; la gestión del cambio va con Alfredo. Cuando el cliente muerde, el siguiente paso es traer a Carmen.»
- `pitch_por_rol`:
  - CIO — «¿Qué proceso os pide negocio mejorar y no sabéis por dónde empezar?» · le mueve: «abrir la puerta a la unidad de negocio con un diagnóstico de seis a ocho semanas que no pasa por comité.»
  - Director de negocio / operaciones — «¿Cuántas horas se van al mes en tramitar, retrabajar o esperar?» · le mueve: «el valor liberado en horas y tareas, medido sobre su proceso real.»
  - CFO (cierra, no abre) — «¿Con qué baseline justificáis hoy una inversión en automatización o IA?» · le mueve: «una baseline medida antes de invertir un euro y un business case defendible.»
  - Compliance / CISO — «¿Podéis demostrar quién decidió qué en vuestros procesos de alto riesgo?» · le mueve: «trazabilidad de qué decide la IA y qué la persona, lista para el AI Act, DORA y NIS2.»
- `pitch_nota`: «Se entra por el CIO y se escala con negocio; el CFO cierra.»
- `objeciones`:
  - «Ya tenemos Celonis / ya hicimos un piloto de process mining.» → «Entonces sobra la licencia y falta quien lo opere. Ponemos encima nuestro Centro de Excelencia rodado, con aceleradores por proceso, y nos quedamos hasta que el proceso funcione. Si la herramienta ya está, empezamos por el proceso que más pesa.»
  - «La licencia es carísima.» → «Por eso no empiezas por ahí. El diagnóstico de entrada no lleva licencia y cuesta entre 15 y 20 mil euros. Si el proceso justifica escalar, elegimos la herramienta que encaja, y si no quieres comprar plataforma ni montar equipo, lo montamos como servicio.»
  - «Nuestros datos no están limpios / no somos SAP.» → «La conexión no es intrusiva, funciona con SAP y sin SAP, y el dato se trata en vuestro entorno. Donde las trazas no bastan, levantamos el proceso a mano. Y parte del diagnóstico es precisamente decir qué dato sirve y qué no.»
  - «Una consultora ya nos dejó un informe.» → «Nosotros no entregamos un informe y nos vamos: implementamos y dejamos el proceso funcionando, con la gestión del cambio dentro. En Lanbide son 500 personas usándolo a diario.»
- `preguntas_cualificacion`:
  - «¿Qué proceso describe cada área de una manera distinta?»
  - «¿Ese proceso deja rastro en vuestros sistemas (SAP u otros) o vive en correos y hojas de cálculo?»
  - «¿Alguien mide hoy cuántas horas se van en tramitar o retrabajar?»
  - «¿Tenéis alguna iniciativa de IA o de agentes que no ha pasado del piloto?»
- `referencias_destacadas`: [`pi-caso-lanbide`, `pi-caso-universidad-latam`].
- `material_interno`: [`process-pains`, `process-mining-legacy-competition`] y, si se crea, `pi-mensajes-clave` (las cuatro keynotes de abajo como guía interna, como `mod-mensajes-clave`).
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`, para la guía interna).**

1. Dolor «No sabemos cómo se ejecuta de verdad el proceso; cada sistema cuenta una cosa.» · frase «Los sistemas han acabado dictando el proceso. Lo reconstruimos desde vuestros registros y os enseñamos, en horas, dónde se pierde.» · prueba «Lanbide: cinco meses de atasco, 23.000 horas al año liberadas, en producción en tres meses.» · paso «Un diagnóstico de seis a ocho semanas sobre el proceso que más pesa. Te presento a Carmen.»
2. Dolor «Metimos IA y no ha pasado nada.» · frase «Uno de cada veinte pilotos llega a impacto; los que llegan tienen debajo un proceso que la IA entiende.» · prueba «Universidad LATAM: la decisión de escalar se tomó sobre datos, con un 30% de matrículas recuperables detectadas.» · paso «Antes de gastar en agentes, medimos el proceso donde van a trabajar.»
3. Dolor «Auditoría nos pregunta quién decide qué, y no lo tenemos.» · frase «El AI Act pide demostrar, sobre la ejecución real, qué decidió la persona y qué la IA. Con el proceso minado esa traza existe desde el día uno.» · prueba «Es la capa de procesos del gobierno de la IA; la Oficina de Gobernanza Humana pone después el sello.» · paso «Empezamos por el proceso de alto riesgo que más os preocupe.»
4. Dolor «Ya pagamos un análisis de procesos y sigue en un cajón.» · frase «Nosotros implementamos y nos quedamos hasta que el proceso opera, con la adopción dentro.» · prueba «Lanbide: 500 personas usándolo a diario.» · paso «Diagnóstico de entrada, sin comité de inversión.»

---

## 2 · Automatización de procesos y agentes IA · Carla González

### 2.1 · Lo que hay en las tres piezas (extracción para el comercial)

**El problema, con cifra y fuente.** «Automatizar el caos da soluciones ineficientes más rápido.» Rara vez falla la herramienta: falla el proceso de debajo, documentado a medias, lleno de excepciones manuales y distinto en cada departamento. **El 95% de los pilotos de IA no llega a escalar** (MIT, State of AI in Business 2025); **hasta la mitad de las automatizaciones no llega a producción** (EY). Las frases que el comercial va a oír, tal cual las recoge el deck: «Metimos IA y no ha pasado nada», «Tenemos robots, pero el proceso sigue roto por debajo», «Una consultora nos dejó 200 mejoras; siguen en un cajón», «Compramos tres empresas y ninguna hace el proceso igual» (deck slide 3).

**La idea y la regla.** «No puedes automatizar bien lo que no conoces.» Sobre un proceso ordenado la automatización rinde y la IA suma; sobre uno roto, las dos aceleran el problema. La regla: **la IA solo escala sobre procesos que entiendes**. El RPA actúa, el agente piensa, la persona lidera (deck slide 4).

**Los tres carriles.** RPA para lo estructurado y repetitivo, lo primero que da retorno; RPA con IA (IDP) cuando el dato llega sin ordenar, un documento, un correo, una imagen; agentes donde el proceso exige razonar y decidir, la mayor capacidad y la que más gobierno pide. La mayoría del volumen es RPA; la IA entra donde el dato lo pide, no por defecto. Los proyectos de IA que llegan a producción comparten una base: proceso ordenado y RPA debajo, «patrón observado en producción» (deck slides 9, 22–23). «Hiperautomatización» se retiró del lenguaje de cliente en junio (gastada).

**Por qué Entelgy.** **Un único responsable del diagnóstico a producción**: donde la consultora tradicional entrega el plan y se va, el mismo equipo sigue operando lo que puso a funcionar (deck slide 7; diferenciador cerrado el 3-jul). Un Centro de Expertos certificado en **UiPath, Blue Prism y Microsoft**, con **más de 40 robots en producción**, que elige la plataforma por el problema del cliente y no por la licencia. Y la gestión del cambio dentro de la operación: «el piloto que no escala casi nunca falla por la tecnología: falla por la adopción» (ficha bloque 04).

**Gobierno.** Una **oficina de gobierno y orquestación dentro de la organización del cliente**: modelo de trabajo (cómo se decide, se construye y se mantiene, con entrada única de peticiones), gobierno (registro de qué hace cada robot y cada agente, trazable y auditable, listo para el AI Act y DORA), orquestación de la cartera mixta y buenas prácticas reutilizables. Es lo que evita «decenas de robots que solo una persona sabe mantener» (deck slides 10 y 25). Nombre provisional, pendiente de cuadrar con Alfredo.

**Lo que gana el negocio.** Cuatro efectos en la cuenta de resultados: menos coste de operar (OPEX), productividad que llega al EBIT porque la formación va dentro, riesgo bajo control (trazado y auditable) y valor que aguanta porque el Centro de Expertos mantiene el robot vivo cuando cambian los sistemas (deck slide 11).

**Los casos.** **UNED** (adjudicación pública, BOE / PLACSP): oficina de automatización sobre Blue Prism; **95 procesos levantados en 18 meses y los 26 primeros robots en producción en 6 meses**; el deck añade 9 áreas, +30 usuarios, +400 horas al año liberadas y roadmap hasta 75. **Ecopetrol · Colombia** (permiso de naming pendiente): unos 150 flujos de automatización que solo su autor sabía mantener; documentación del parque entero, duplicidades fuera y arquitectura con base de datos unificada. Lanbide y EJIE como descubrimiento («el mining levanta lo digitalizado y completamos a mano lo que no está sobre un sistema»). IFEMA y Gobierno de Navarra: adjudicación pública, cifras pendientes de permiso (deck slides 15 y 26; ficha bloque 05).

**Cómo se compra.** **Diagnóstico Data Driven, 6–8 semanas, precio cerrado, sin compromiso de continuidad**: levantamiento del proceso, priorización costeada por coste, riesgo y volumen, y plan con el carril correcto y el retorno estimado, sobre un primer proceso medio o simple «que se pueda mover y se vea». Al final el cliente decide qué automatizar primero con números delante, en qué orden escalar y con qué carril (deck slide 18). Entregables por fase: matriz de priorización, business case, diseño funcional (PDD), diseño técnico (SDD), manual de operaciones y manual de usuario (deck slide 24). Mantenimiento por horas, «como una aplicación» (slide 14).

**Por quién se entra.** El deck se dirige al CIO y a quien lleva operaciones o el proceso («donde de verdad se decide una automatización: en el proceso y las personas de debajo»); en los decks internos de agentes, el buyer persona es el CDO. El CFO entra por el business case y el P&L.

**Reglas del área que condicionan el copy.** Diferenciador: «un único responsable», no «una sola casa» ni «con un solo equipo». Nunca «asesoramiento de IA». Escalera: RPA · RPA con IA · Agentes, sin «hiperautomatización». No reproducir Alcorcón, Carlos III ni AESA (propuestas 🔴). Ecopetrol, IFEMA y Navarra sin cifras hasta permiso. «Task Intelligence» ha caído como nombre. Fuentes: MIT y EY con nombre; nada de Gartner sin informe (se retiró del deck el 3-jul); el «Deloitte 37%» sigue sin informe rastreable.

### 2.2 · Lo que chirría entre las tres piezas (para Carla)

- **Ficha y one-pager**, publicados el 13-jul, van por detrás del deck en tres decisiones de junio y julio: usan «**Hiperautomatización**» (retirada el 11-jun), el one-pager lleva la cejilla «**Task Intelligence**» (nombre caído en Fase 0) y los dos atribuyen a **Gartner** el «5% que escala tenía RPA de base» (el deck lo cambió a «patrón observado en producción» y a MIT el 3-jul).
- **Contacto**: la ficha y el one-pager salen al cliente con «**[contacto Entelgy] · [email · teléfono]**» sin rellenar. Un comercial que los envíe hoy manda un placeholder.
- **Tres primeros pasos distintos**: el deck vende el «Diagnóstico Data Driven · 6–8 semanas · fixed price»; la ficha, un «Diagnóstico de automatización · 4–6 semanas · precio cerrado, sin compromiso posterior»; el one-pager, «una conversación de 30 minutos». Carla fijó 6–8 semanas el 3-jul. El portal usa el del deck y lo dice.
- **Cifras del CoE**: «+40 robots», «+90 oportunidades» y «24×7 operación gobernada» (one-pager) llevan la nota «datos en validación». El «+90» cuenta dos veces (capacidad general y UNED). Pendiente de Carla desde julio.
- El deck sigue nombrando a **Ecopetrol** con permiso pendiente.

### 2.3 · La página propuesta, campo a campo (`data/process-intelligence.json` → `soluciones[1]`, id `process-automation-ai`)

**Cabecera.** `una_linea`: «Rediseñar, automatizar y asistir el trabajo repetitivo con criterio de negocio.» Propuesta, con la regla del deck: «Automatizar el proceso que ya entiendes: RPA donde repite, IA donde lee, agentes donde decide.» `estado`: `en_preparacion` hasta que Carla lo lea; después, `vigente`.

**La propuesta (`propuesta`).**

- `que_es`: «Automatizamos tus procesos de negocio de punta a punta y operamos el resultado. Arrancamos por lo que ya funciona, el RPA, subimos a RPA con IA cuando el dato llega sin ordenar (un documento, un correo) y ponemos agentes donde el proceso exige decidir. No entregamos un informe con 200 mejoras: operamos la automatización en tu casa, con un equipo certificado y el cambio dentro.»
- `a_quien`: «Quien tiene personas tramitando expedientes, facturas, reclamaciones o altas entre sistemas que no se hablan. Entras por el CIO o por quien lleva operaciones; si la conversación es de agentes, aparece el CDO; el CFO entra por el business case.»
- `senal`: «Robots sueltos que mantiene una sola persona. Un piloto de IA que no ha pasado de demo. Una consultora que dejó una lista de mejoras en un cajón. Tres empresas compradas y ninguna hace el proceso igual.»
- `por_que_nosotros`: «Un único responsable del diagnóstico a producción: donde la consultora tradicional entrega el plan y se va, el mismo equipo sigue operando lo que puso a funcionar. Un Centro de Expertos certificado en UiPath, Blue Prism y Microsoft, con más de 40 robots en producción, que elige la plataforma por tu problema y no por nuestra licencia. Y la gestión del cambio dentro de la operación, que es donde se decide si un piloto escala.»
- `diferenciador`: «Un único responsable, del diagnóstico al proceso en producción, y la IA encima del RPA que ya funciona, no en su lugar.»
- `objecion_principal`: texto «Queremos agentes de IA, no robots.» · respuesta «El 95% de los pilotos de IA no llega a producción (MIT, State of AI in Business 2025). Los que llegan tienen debajo un proceso ordenado y RPA rodado. Ponemos el agente donde el proceso exige decidir, encima de esa base y con una oficina de gobierno que registra qué hace cada robot y cada agente. Es lo que separa un agente que escala de uno caro e impredecible.»
- `como_abres`: «¿Qué automatización tenéis hoy suelta, sin escalar, y quién la mantiene?»
- `primer_paso`: `titulo` «Diagnóstico Data Driven» · `plazo` «6–8 semanas» · `nota` «Precio cerrado, sin compromiso de continuidad. Levantamiento del proceso real área por área, priorización costeada por coste, riesgo y volumen, y plan con el carril correcto (RPA, RPA con IA o agentes) y el retorno estimado. Un primer proceso medio o simple que se mueva y se vea. Al final el cliente decide qué automatizar primero, con números delante. Precio y alcance, con Carla.»

**Material para el cliente (`materiales`).** Las tres piezas ya cuelgan de la solución. Ajustar `momento_comercial`: `automation-onepager` → `primer_contacto`; `automation-deck` → `reunion`; `automation-ficha` → `para_dejar`. Y en las notas de uso, avisar de lo que chirría hasta que Carla lo corrija: en `automation-onepager` y `automation-ficha`, «…El contacto está sin rellenar y aún dice «hiperautomatización»: pídele a Carla la versión corregida antes de enviarlo.»

**Referencias (`referencias`).** Dos piezas nuevas, tipo `referencia`, solución `process-automation-ai`, dueño Carla:

| id | Campos |
|---|---|
| `pa-caso-uned` | `titulo` «UNED · Oficina de automatización» · `sale_al_cliente` `con_validacion` · `citable` `confirmar_por_cuenta` (adjudicación pública; falta el sign-off de Carla y su confirmación del alcance de +90 / +40) · `contexto` «Universidad pública. Oficina de automatización sobre Blue Prism, por contratación pública.» · `que_hicimos` «Detección y levantamiento de oportunidades área por área y robotización con roadmap.» · `resultado` «95 procesos levantados en 18 meses; los 26 primeros robots en producción en 6 meses; 9 áreas, más de 30 usuarios y más de 400 horas al año liberadas a trabajo de más valor.» · `frase_reunion` «En la UNED levantamos 95 procesos en año y medio y en seis meses ya había 26 robots en producción. La adjudicación es pública; las horas liberadas te las confirmo por cuenta.» · `nota_de_uso` «Adjudicación pública (BOE / PLACSP). Cifras del hub y del deck; Carla confirma alcance antes de citarlas con nombre.» |
| `pa-caso-energetica-colombia` | `titulo` «Energética · Colombia» · `sale_al_cliente` `con_validacion` · `citable` `confirmar_por_cuenta` (naming pendiente de permiso) · `contexto` «Empresa energética con unos 150 flujos de automatización que solo su autor sabía mantener.» · `que_hicimos` «Documentamos el parque entero, quitamos duplicidades y diseñamos una arquitectura con base de datos unificada.» · `resultado` «Menos riesgo operativo y una base estable para escalar.» · `frase_reunion` «Una energética en Colombia tenía 150 flujos que solo una persona sabía mantener. Documentamos el parque, quitamos duplicados y dejamos una base gobernada sobre la que escalar. Es lo que hace la oficina de gobierno.» · `nota_de_uso` «Sin nombre hasta que el cliente autorice. La historia sí se puede contar.» |

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas del deck y de la ficha. Elige la que responde a lo que te han dicho.»
- `frases_cuenta.frases`:
  - «Por los robots sueltos» · «si ya tienen RPA» · «Automatizaciones aisladas por departamento, sin gobierno ni escalado, se vuelven deuda técnica. Montamos una oficina de gobierno dentro de vuestra casa para que RPA, RPA con IA y agentes convivan bajo una sola regla, trazable y lista para el AI Act.»
  - «Por el piloto que no escala» · «si han probado IA» · «El 95% de los pilotos de IA no llega a producción. Los que llegan tienen un proceso ordenado y RPA por debajo. Empezamos por ahí, y el agente va encima solo donde el proceso exige decidir.»
  - «Por el informe en el cajón» · «si ya pagaron una consultoría» · «Una lista de 200 mejoras no cambia nada. Recorremos el ciclo entero con el mismo equipo, del diagnóstico a producción, y seguimos operando lo que pusimos a funcionar.»
  - «Por el documento» · «si el trabajo manual es leer PDF, correos o formularios» · «Donde el dato llega sin ordenar, el RPA con IA lee, clasifica y valida antes de ejecutar: facturas contra pedidos, expedientes escaneados, correos que hay que enrutar. Sin rehacer vuestras aplicaciones.»
- `frases_cuenta.regla`: «Si el cliente no sabe cómo funciona el proceso y deja rastro en sus sistemas, entra antes Carmen con minería. Cuando el cliente muerde, el siguiente paso es traer a Carla.»
- `pitch_por_rol`:
  - CIO — «¿Cuántos robots tenéis y quién responde cuando cambia el sistema que tocan?» · le mueve: «un Centro de Expertos que mantiene el robot vivo y una oficina de gobierno dentro de su casa.»
  - Director de operaciones / negocio — «¿Qué tarea repetitiva se lleva más horas de vuestra gente cada semana?» · le mueve: «un primer proceso en producción en semanas, con retorno medible y el conocimiento del proceso devuelto a la organización.»
  - CFO — «¿Qué automatización os ha dado retorno y cuál se quedó en piloto?» · le mueve: «priorización costeada por coste, riesgo y volumen, y seguimiento de que las mejoras se cumplen en euros y en horas.»
  - CDO / responsable de IA — «¿Vuestros agentes tienen un proceso ordenado debajo?» · le mueve: «la base de RPA rodada que hace escalar a los agentes, y el gobierno que los hace auditables.»
- `pitch_nota`: «Se entra por el CIO o por quien sufre el proceso; el CFO cierra con el business case.»
- `objeciones`:
  - «Ya tenemos robots.» → «Estupendo, entonces la pregunta es quién los mantiene y qué pasa cuando cambia el sistema que tocan. Un robot suelto se resiente; una cartera gobernada aguanta años. Empezamos por documentar lo que hay.»
  - «Esto nos lo hace directamente el fabricante.» → «El fabricante vende su plataforma. Nosotros elegimos UiPath, Blue Prism o Microsoft por tu problema, y operamos el resultado en tu casa con un único responsable. La plataforma es una decisión posterior al diagnóstico.»
  - «Una consultora ya nos dejó el plan.» → «Un plan sin implantación es una lista de buenas intenciones. Donde la consultora se va, nosotros seguimos: recorremos el ciclo entero con el mismo equipo y respondemos del resultado.»
  - «Queremos ir directamente a agentes.» → «Los agentes son la mayor capacidad y la que más gobierno exige, porque deciden. Van encima de una base ordenada y bajo una oficina de gobierno; sin eso salen caros e impredecibles. El diagnóstico dice dónde pagan.»
- `preguntas_cualificacion`:
  - «¿Qué tareas hacen hoy personas sobre PDF, correos o formularios que llegan sin ordenar?»
  - «¿Cuántos robots tenéis en producción y quién los mantiene?»
  - «¿Hay algún piloto de IA o de agentes que no haya llegado a producción? ¿Por qué?»
  - «¿Existe un registro de qué hace cada robot, o depende de una persona?»
- `referencias_destacadas`: [`pa-caso-uned`, `pa-caso-energetica-colombia`].
- `material_interno`: [`process-automation-legacy-preview`, `process-automation-legacy-competition`].
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`).**

1. Dolor «Tenemos robots, pero el proceso sigue roto por debajo.» · frase «Automatizar el caos da soluciones ineficientes más rápido. Primero el proceso; después el robot.» · prueba «Una energética en Colombia: 150 flujos que solo su autor sabía mantener, hoy documentados y gobernados.» · paso «Un diagnóstico de seis a ocho semanas sobre un proceso real. Te presento a Carla.»
2. Dolor «Metimos IA y no ha pasado nada. No escala.» · frase «El 95% de los pilotos de IA no llega a producción; los que llegan tienen RPA rodado debajo.» · prueba «UNED: 95 procesos levantados, 26 robots en producción en seis meses.» · paso «Empezamos por el proceso ordenado; el agente va encima donde decide.»
3. Dolor «Una consultora nos dejó 200 mejoras. Siguen en un cajón.» · frase «Un único responsable del diagnóstico a producción: seguimos operando lo que pusimos a funcionar.» · prueba «Más de 40 robots en producción mantenidos por nuestro Centro de Expertos.» · paso «Un primer proceso que se mueva y se vea, con retorno medible.»
4. Dolor «Auditoría, AI Act, DORA: no sabemos qué hace cada robot.» · frase «Una oficina de gobierno dentro de vuestra casa: registro de qué hace cada robot y cada agente, trazable y auditable.» · prueba «Preparados para diciembre de 2027 y para DORA, ya en vigor.» · paso «Empezamos documentando la cartera que ya tenéis.»

---

## 3 · Contactos (`data/personas.json`)

- Carmen: `nombre` «Carmen Rode», correo `carmen.rode@entelgy.com` y teléfono `+34 608 310 918` tal como los lleva el one-pager publicado (confirmar con ella: el fichero de estado los daba por pendientes el 31-ago). Segundo contacto candidato para Latam: Carolina Cornejo (Chile), delivery del área.
- Carla: `nombre` «Carla González González» (así figura en la página de Hipatia). Correo y teléfono, pendientes: sus piezas llevan el placeholder. Segundo contacto candidato: David Escribano Plaza, technical lead del equipo.
- Canal común de la práctica que ya aparece en el deck de Carla: `processintelligence@entelgy.com`. Si existe de verdad, es el «canal del área» que hoy dice «pendiente de enlace».

---

## 4 · Lo que necesito que decidas o compruebes

1. **Precios en el portal.** El diagnóstico de entrada de Carmen (15–20 K€) y la escalera de compra están en un deck que hoy sale al cliente. El portal es interno; para un comercial es la unidad facturable de MA. Propongo el importe del diagnóstico en `primer_paso` y la escalera en «Para prepararte», y nada de precios de Carla (su deck no los da). Lo decides con Carmen.
2. **Estado de las dos soluciones.** Con esta página completa, ¿pasan a `vigente` cuando Carmen y Carla la lean, o antes del 10 con la nota «en revisión por el área»? Yo esperaría a su lectura: es su voz.
3. **Nombre del diagnóstico de Carla.** Deck: «Diagnóstico Data Driven · 6–8 semanas»; ficha: «Diagnóstico de automatización · 4–6 semanas». Uso el del deck (es la decisión del 3-jul). Que Carla lo confirme y corrija la ficha.
4. **Inverbis-GBTEC.** No lo propago al portal hasta que Carmen pase la referencia; si se confirma, se añade en `por_que_nosotros` y en la ficha de Universidad LATAM.
5. **Momento comercial de las piezas.** Propongo one-pager → primer contacto, deck → reunión, ficha → para dejar, según la doctrina del 15-jul. Hoy está al revés en las seis. Si prefieres no mover `momento_comercial` antes del 10, la propuesta solo añade las piezas de Carmen a la solución y deja las columnas como están.
6. **Referencias sin sign-off de Carla.** UNED y la energética entran como «confirmar por cuenta»; pasan a «citable» cuando Carla devuelva el F1 o confirme por correo.
7. **Las cuatro keynotes** de cada solución: ¿las quieres como pieza interna en Materiales (como `mod-mensajes-clave`) o solo dentro de «Para prepararte»? Hoy `keynotes` no se pinta en la página.
8. **Oficina de gobierno y orquestación** (Carla) y **Oficina de Gobernanza Humana de la IA** (Alfredo): en el portal conviven las dos con nombres distintos y funciones distintas. Está pendiente de cuadrar con Alfredo desde julio; lo dejo como está y lo nombro.
9. **El «Deloitte 37%»** del deck de Carla sigue sin informe. No lo uso.

---

## 5 · Lo que he leído

- `Entelgy/process-mining/DECKS/Process_Intelligence.html` (14 láminas, renderizado; el anexo PaaS no está visible en la versión general) · `fichas/ficha-process-intelligence.html` · `fichas/onepager-process-intelligence.html`.
- `Entelgy/automatizacion/decks/deck_cliente.html` (19 láminas de flujo + 6 de apéndice, renderizado) · `fichas/ficha-automatizacion-procesos.html` · `fichas/onepager-automatizacion-procesos.html`.
- `carmen-estado-trabajo.md` y `carla-estado-trabajo.md` (proyecto); `data/process-intelligence.json` y las once piezas de Process Intelligence en `data/materiales.json`.
- No he leído: `procesos-propuesta-valor-decisiones.md` (documento maestro Carmen + Carla, no está en el proyecto), el anexo PaaS del deck, el PDF y el PPTX del deck de Carmen (el PDF es rasterizado, sin texto), ni las páginas legacy de hipatia2.
