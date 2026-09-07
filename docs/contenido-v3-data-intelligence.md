# Contenido real para la v3 · Data Intelligence · la solución única

*Vista previa para Susana · 3 de septiembre de 2026 · rama `claude/hipatia-v3-static-catalog-49l3yx`. Sin cambios en la web. Leído: el deck de producto (`data-intelligence/decks/entelgy-dataai-producto.html`, junio, 11 láminas + 6 casos en anexo), la ficha de servicio (`fichas/ficha-dataai.html`, 10-jul) y el one-pager (`fichas/onepager-dataai.html`, corregido el 16-jul), y `daniela-estado-trabajo.md` (proyecto). Data Intelligence es práctica y solución a la vez (revisión 5), así que lo que sigue toca las dos páginas.*

---

## El problema

Data Intelligence es el área con el material más reciente y, a la vez, el que tiene fecha de caducidad más clara: Daniela cerró en verano el acuerdo con Tinámica, la propuesta de valor cambia y one-pager, ficha y deck se rehacen en septiembre y octubre, no se retocan. MA lo puso en standby hasta el 10. Eso no quita para que el 10 la página de la solución esté como el resto: un «Por qué Entelgy» que firmaría cualquiera, un primer paso sin plazo, sin referencias aunque hay cuatro clientes con autorización por escrito, y cuatro «capacidades» heredadas de la propuesta 2 que no son la taxonomía que Daniela cerró en julio (cinco pilares) y que su fichero de estado pide empujar al portal.

Lo que sigue llena la página con lo que hoy está publicado y validado, sin adelantar nada de la alianza, y deja marcado dónde va a cambiar cuando llegue el material nuevo.

---

## 0 · Lo que cambia en la práctica · `/practicas/data-intelligence/` (`data/data-intelligence.json`)

**Propuesta de portada** (`propuesta_portada`). Hoy: «Convertir datos, modelos y agentes en decisiones y operación con gobierno.» Daniela tiene ya su frase, en el H1 del one-pager: «Datos que se pueden auditar.» Propuesta: «Datos que se pueden auditar: gobierno, ingeniería, analítica y modelos sobre dato fiable.» (89 caracteres). Sustituye a la de la auditoría de copy.

**Qué cubre** (`que_cubre`). Hoy repite «gobierno, analítica e IA» dos veces. Propuesta, con la ficha: «Construir y operar la base de dato fiable (gobierno, ingeniería, analítica y modelos) para que la IA y la plataforma decidan sobre dato completo, trazable y auditable. Cinco pilares: gobierno del dato y de los modelos, ingeniería y plataforma, analítica y visualización con GenAI, analítica avanzada, y seguridad del dato e IA auditable.»

**Qué no prometemos** (`que_no_prometer`). La versión en primera persona de la auditoría de copy, más la regla que Daniela y tú cerrasteis el 10-jul (número económico por descarte): «No vendemos IA porque sí ni prometemos resultados sin revisar antes datos, gobierno, riesgos y adopción. Tener datos no significa que sean de calidad, que se puedan usar o que sirvan para un caso de IA. Y no prometemos un euro antes del diagnóstico: el ahorro lo dice el propio assessment.»

**La pregunta que abre** (`pregunta_comun`). «¿Qué decisión tomáis hoy sin fiaros del todo del dato que tenéis?» (de la auditoría de copy).

**Capacidades** (`capacidades`). Hoy: Gobernar el dato · Gobernar los modelos · Decidir con analítica · Predecir y operar. Es la taxonomía de la propuesta 2. La canónica del área son los cinco pilares (cerrada el 10-jul, área-específica, «debe empujarse también al portal Hipatia»). Propuesta, con los textos de la ficha:

| paso | titulo | texto |
|---|---|---|
| 01 | Gobierno del dato y de los modelos | Roles con mandato, calidad medida, catálogo vivo y linaje trazable bajo DAMA-DMBOK y DCAM. Incluye catalogar y clasificar los modelos y sus datasets de entrenamiento. El gobierno que un auditor recorre. |
| 02 | Ingeniería y plataforma del dato | Construimos y evolucionamos la plataforma y los procesos que la alimentan: ingesta, calidad e integración de origen a consumo, sobre AWS, Azure, Fabric, Databricks o Informatica, el que encaje. |
| 03 | Analítica, visualización y GenAI | Analítica en producción conectada al negocio, y «habla con tus datos»: consulta en lenguaje natural sobre dato gobernado, con respuesta trazable y sin cola de peticiones a IT. |
| 04 | Analítica avanzada y ciencia del dato | Modelos predictivos y ML orientados a caso de uso, de la identificación a la operación, con control de drift y sesgos y explicabilidad de cada resultado. |
| 05 | Seguridad del dato e IA auditable | Barreras para que la GenAI no exponga información sensible a quien no debe, y ciclo de vida del modelo auditable: cada decisión queda trazada para el auditor (RGPD, ENS, EU AI Act, ISO 42001, DORA). |

**Primer avance** (`primer_avance`). Hoy sin plazo. Las tres piezas dan el mismo: `titulo` «Assessment de datos, analítica e IA» · `plazo` «4–6 semanas» · `nota` «Dos perfiles senior, alcance acotado. Sobre vuestro entorno real: dónde está el valor, brechas de calidad, hueco de gobierno y clasificación de sistemas frente al EU AI Act. Sin precio en las piezas: el euro lo entrega el propio diagnóstico.» Ojo: en su copia del deck Daniela sustituyó el assessment por un «servicio gestionado de oficina de gobierno del dato» (pendiente de la sesión de septiembre, y con colisión de nombre con la OGH-IA de Alfredo). Hasta entonces, el assessment.

**La nota de solución única** (`solucion_global_nota`) se deja de pintar, como decía la auditoría de copy.

---

## 1 · Data Intelligence · Daniela Ongaro

### 1.1 · Lo que hay en las tres piezas (extracción para el comercial)

**El problema, con fuente.** «El modelo hereda el error del dato»: modelo y plataforma deciden sobre el dato que reciben; si está incompleto o sin medir, la decisión hereda el fallo. **El 60% de las organizaciones no captará el valor esperado de su IA por un gobierno del dato deficiente** (Gartner, predicción a 2027; es la cifra buena, en lugar del «90% de proyectos de IA fracasan» que aún publica el Hipatia de SharePoint y que no es citable). Y la regulación entró en el dato y en los modelos: RGPD, DORA y el EU AI Act fijan obligaciones; los sistemas de alto riesgo aplican desde el 2 de diciembre de 2027, «y responde quien firma, no el modelo» (one-pager bloque 01; deck lámina 4).

**Qué hacemos.** «Construimos la base; la analítica y los modelos deciden sobre dato fiable.» Operamos el gobierno del dato y de los modelos (roles con mandato, catálogo vivo, linaje trazable) y sobre esa base construimos ingeniería y plataforma, analítica en producción y GenAI sobre dato gobernado, y modelos con control de drift, sesgos y explicabilidad. «Si la GenAI expone el dato que no debe, responde quien firma: por eso operamos seguridad del dato e IA auditable de extremo a extremo» (one-pager bloque 02). Cinco pilares (ficha bloque 02), con los fabricantes por capa: MS Purview y Anjana Data en gobierno; AWS, Azure, Fabric, Databricks e Informatica en plataforma; Spotfire y DOMO en analítica; MLOps en avanzada.

**Dónde se gana o se pierde** (deck lámina 5): calidad y completitud del dato; gobierno como operación («el que un auditor puede recorrer, no el que se archiva»); el dato cerca de quien decide (capa semántica acordada y autoservicio gobernado, «sin pasar por IT cada vez»); el dato que alimenta la plataforma.

**Por qué Entelgy, cuatro razones.** El dato de extremo a extremo bajo un mismo techo (gobierno, analítica, modelos y plataforma, que suelen estar repartidos entre equipos o proveedores). Gobierno que un auditor puede recorrer: DAMA-DMBOK y DCAM con RACI operativo y linaje trazable en Purview, «no un compliance de PowerPoint». IA auditable en producción, no en demo. El mejor fabricante en cada capa: más de 50 alianzas, sin stack impuesto (ficha bloque 04). El deck añade una quinta que apunta al futuro: «construimos capacidad con vuestros equipos», entrega y transferencia para que la capacidad quede dentro.

**Los casos** (autorización por escrito para UNED, CNMV, Bankinter y BPCE, 16-jun; el resto anonimizado por sector). **CNMV**: modelo de gobierno del dato (DCAM/DAMA) con RACI operativo, Purview para catálogo, linaje y clasificación, activos críticos priorizados; la base sobre la que sus modelos de supervisión (SupTech) detectan manipulaciones y anomalías en los mercados; **adjudicado frente a las Big 4**. **Bankinter**: ciclo de vida del dato de la ingesta a la decisión, ingeniería con calidad y ETL, analítica y explotación en Spotfire, con negocio dentro (Banca Telefónica, Consumer Finance, Sostenibilidad). **UNED**: assessment de gobierno del dato bajo DAMA, seis ejes evaluados y roadmap priorizado con quick-wins («el escalado se decide sobre datos»; en el deck, «versión prudente, pendiente de validación»). **BPCE**: autorizado, sin caso redactado. Anonimizados: **fabricante industrial cotizado** (modelos predictivos sobre cientos de miles de registros del proceso que detectan la desviación antes del defecto), **operador de drones de largo alcance** (anomalías multicomponente por vuelo, reglas del fabricante más ML, alertas con explicabilidad) y **gran planta de automoción** (planificación de tres líneas de pintura que pasa de uno a tres días a minutos, con menos consumo energético). El deck los nombra (Viscofan, Fuvex, Mercedes-Benz Vitoria) «sujeto a autorización por referencia»; la regla del área es anonimizarlos hasta que haya permiso escrito.

**Cómo se empieza y qué viene después** (deck lámina 10). Assessment de datos, analítica e IA: 4–6 semanas, dos perfiles senior, alcance acotado. Después, en orden: confianza y preparación para la IA (calidad, completitud, disponibilidad) → industrialización y eficiencia analítica → analítica avanzada e IA → escalado de casos de uso sobre la plataforma. Sin precios: cerrado por descarte el 10-jul.

**Por quién se entra.** El CIO, con el reloj regulatorio del sector como apertura (es el ángulo del deck de Mutua: el cliente ya es deployer del AI Act, no lo será en el futuro). Detrás, el responsable de datos (CDO, Head of Data), Compliance o el DPO cuando se habla de qué dato usa cada modelo, y negocio cuando se habla de autoservicio. Sectores donde hay caso: supervisor y sector público, banca, industria, movilidad, automoción; seguros como cuenta objetivo.

**Reglas del área que condicionan el copy.** Nada de «democratización» ni de «acompañamos». Nunca «agosto 2026». El «90% de proyectos de IA fracasan (Gartner)» no se usa. Números económicos: ninguno. Los nombres de los tres casos anonimizados no salen. La hoja de IA de desarrollo (copilots, agentes en el ciclo de software) es de Jorge, y la adopción (IAbility) es de Alfredo: ninguna de las dos entra en la página. La frontera con Digital Architecture sigue abierta. Título de Daniela cara a cliente: «Head of Data» en las piezas, pendiente de que ella lo confirme. Y todo lo que sea de la alianza nueva espera a que se procese su material.

### 1.2 · Lo que chirría entre las tres piezas (para Daniela)

- **El deck** (junio) dice «Documento confidencial» y titula la lámina 2 «**Quién te acompaña**» y la lámina 8 habla de «acompañamiento»: es la palabra que el proyecto no usa. También nombra a **Viscofan, Fuvex y Mercedes-Benz** en los anexos cuando ficha y one-pager ya los anonimizan; lleva «4-6 weeks» en inglés; y la firma es «Responsable Data & Analytics» (lámina 11) y «Manager Data Intelligence» (lámina 2) frente al «Head of Data» de las piezas. Además, la versión que Daniela editó por su cuenta (assessment → servicio gestionado de oficina de gobierno del dato) no está en el hub.
- **Las cifras corporativas** (+95% renuevan, 2.000 profesionales, 50+ alianzas) van con la nota «en validación» en las tres piezas.
- **El 60% de Gartner** va como «predicción a 2027» sin nombre del informe. Por lo que sé, es una nota de prensa de Gartner de febrero de 2025 («…60% of organizations will fail to realize the anticipated value of their AI use cases due to incohesive data governance…»): con eso cumple la disciplina de fuentes; que Daniela lo confirme.
- **El caso UNED** va en el deck como «versión prudente, pendiente de validación» y en la ficha ni aparece; la autorización escrita existe. Falta que Daniela dé la versión definitiva.
- **BPCE** está autorizado y no tiene caso escrito en ninguna pieza.

### 1.3 · La página propuesta, campo a campo (`data/data-intelligence.json` → `soluciones[0]`, id `data-intelligence`)

**Cabecera.** `una_linea`: «Datos, analítica e IA gobernados al servicio de una decisión.» Propuesta: «Datos que se pueden auditar: la base para que la IA decida sobre dato completo y trazable.» (90). `estado`: `en_preparacion` hasta que Daniela la lea; después, `vigente`, sabiendo que en octubre se reescribe con la alianza.

**La propuesta (`propuesta`).**

- `que_es`: «Construimos y operamos la base de dato fiable (gobierno, ingeniería, analítica y modelos) para que la IA y la plataforma decidan sobre dato completo, trazable y auditable. Operamos el gobierno del dato y de los modelos, roles con mandato, catálogo vivo y linaje trazable, y sobre esa base construimos la plataforma, la analítica en producción, la GenAI sobre dato gobernado y los modelos con control de drift, sesgos y explicabilidad.»
- `a_quien`: «Entras por el CIO, con el reloj regulatorio del sector como apertura: quien ya tiene IA en producción es deployer del AI Act hoy. Detrás, el responsable de datos, Compliance o el DPO cuando se habla de qué dato usa cada modelo, y negocio cuando se habla de autoservicio. Donde hay caso: supervisores y sector público, banca, industria, movilidad y automoción.»
- `senal`: «Negocio no se fía del dato para decidir, o cada sistema dice una cosa. Hay iniciativas de IA o GenAI sin catálogo, sin dueño del dato y sin nadie que pueda decir qué dato usa cada modelo. Negocio hace cola en IT para conseguir un dato nuevo. Un auditor, un supervisor o el AI Act van a preguntar quién decidió qué.»
- `por_que_nosotros`: «La mayoría explota el dato; nosotros lo gobernamos y lo ponemos en producción. El dato de extremo a extremo bajo un mismo techo, que normalmente está repartido entre equipos o proveedores. Un gobierno que un auditor puede recorrer (DAMA-DMBOK y DCAM, RACI operativo, linaje en Purview), no un compliance de PowerPoint: en la CNMV es la base sobre la que sus modelos supervisan los mercados, y se adjudicó frente a las Big 4. IA auditable en producción, no en demo. Y el fabricante que encaje en cada capa, con más de 50 alianzas y sin stack impuesto.»
- `diferenciador`: «El dato gobernado de extremo a extremo, con un gobierno que un auditor recorre y una IA que se puede auditar en producción.»
- `objecion_principal`: texto «Ya tenemos plataforma de datos.» · respuesta «No vendemos plataforma: trabajamos sobre la que tenéis y elegimos contigo el fabricante en cada capa. Lo que suele faltar no es tecnología, es el gobierno que se opera día a día, roles con mandato, catálogo vivo y linaje, y sin eso el modelo hereda el error del dato. El assessment lo dice en cuatro a seis semanas.»
- `como_abres`: «¿Sobre qué dato están decidiendo hoy vuestros modelos, y quién responde de él?»
- `primer_paso`: `titulo` «Assessment de datos, analítica e IA» · `plazo` «4–6 semanas» · `nota` «Dos perfiles senior, alcance acotado, sobre vuestro entorno real: dónde está el valor, brechas de calidad, hueco de gobierno y clasificación de sistemas frente al EU AI Act. Sales sabiendo cuánto te cuesta tu dato. Sin precio en las piezas; alcance y disponibilidad, con Daniela.»

**Material para el cliente (`materiales`).** Las tres piezas ya cuelgan de la solución. Ajustar `momento_comercial` como en las otras prácticas: `dataai-onepager` → `primer_contacto`; `dataai-producto` → `reunion`; `dataai-ficha` → `para_dejar`. Nota de uso del deck, con lo que hay que saber: «Deck de producto para la reunión introductoria (junio): cinco capacidades, seguridad y cumplimiento, y seis casos en anexo. Los anexos nombran tres clientes que en el resto del material van anonimizados: úsalo en pantalla, no lo envíes. Se rehace en octubre con la propuesta de valor ampliada.» Y una nota interna de área para las tres: «El material de Data Intelligence se reescribe en septiembre-octubre con la propuesta de valor ampliada; hasta entonces, esto es lo vigente.» (dónde: `pendiente.texto` de la solución, que ya se pinta plegado).

**Referencias (`referencias`).** Seis piezas nuevas en `data/materiales.json`, tipo `referencia`, práctica `data-intelligence`, solución `data-intelligence`, zona `referencias`, dueño Daniela. Las tres con nombre llevan `citable` `citable` y `sign_off` {Daniela Ongaro · 2026-06-16, autorización escrita del cliente}; las tres anónimas, `citable` `confirmar_por_cuenta`.

| id | Campos |
|---|---|
| `di-caso-cnmv` | `titulo` «CNMV · Gobierno del dato para la supervisión con IA» · `sale_al_cliente` `con_validacion` · `contexto` «Supervisor de los mercados financieros que evoluciona hacia una supervisión proactiva (SupTech) y necesita dato gobernado y trazable como base de sus modelos.» · `que_hicimos` «Modelo de gobierno del dato (DCAM/DAMA) con principios, dominios, procesos, indicadores y RACI operativo; implantación de Microsoft Purview para catálogo, linaje, clasificación automática y control de acceso; inventario y priorización de activos críticos y hoja de ruta hacia casos de IA.» · `resultado` «Datos críticos gobernados y trazables; base para modelos que detectan manipulaciones y anomalías en los mercados. Adjudicado frente a las Big 4.» · `frase_reunion` «En la CNMV montamos el gobierno del dato sobre el que sus modelos supervisan los mercados: RACI operativo, catálogo y linaje en Purview. Nos lo adjudicaron frente a las Big 4.» · `nota_de_uso` «Nombre autorizado por escrito. Importes y puntuaciones de adjudicación no se citan. Falta acotar con Daniela en qué materiales vale el permiso.» |
| `di-caso-bankinter` | `titulo` «Bankinter · Ciclo de vida del dato y analítica en producción» · `sale_al_cliente` `con_validacion` · `contexto` «Banco que refuerza todo el ciclo del dato para crecer sobre información fiable.» · `que_hicimos` «Ingesta de fuentes transaccionales, ingeniería del dato con procesos de calidad y ETL, analítica y explotación en Tibco Spotfire con mantenimiento evolutivo, y gobierno documentado con soporte en despliegues.» · `resultado` «Más casos de uso en menos tiempo, con negocio dentro (Banca Telefónica, Consumer Finance, Sostenibilidad) y operación estable de origen a consumo.» · `frase_reunion` «En Bankinter llevamos el dato de la ingesta a la decisión, con analítica en producción y el equipo de negocio dentro. Más casos de uso, antes.» · `nota_de_uso` «Nombre autorizado por escrito.» |
| `di-caso-uned-dato` | `titulo` «UNED · Assessment de gobierno del dato» · `sale_al_cliente` `con_validacion` · `contexto` «Universidad pública que avanza hacia decidir con datos, con silos, calidad inconsistente y RGPD y AI Act encima.» · `que_hicimos` «Assessment completo de gobierno del dato bajo DAMA en seis ejes (gobierno, arquitectura, calidad y MDM, cumplimiento, infraestructura, cultura) y roadmap priorizado con quick-wins y fases de madurez.» · `resultado` «Madurez del dato medida y un plan de transformación priorizado; el escalado se decide sobre datos.» · `frase_reunion` «En la UNED, antes de comprometer una solución institucional, medimos la madurez real del dato en seis ejes y dejamos el roadmap. Es el mismo assessment que te propongo.» · `nota_de_uso` «Nombre autorizado por escrito. El deck lo marca como versión prudente pendiente de validación de Daniela.» |
| `di-caso-industria` | `titulo` «Fabricante industrial cotizado · Predictivos de calidad» · `contexto` «Fabricante que quería reducir variabilidad, paradas y retrabajos anticipando desviaciones del proceso.» · `que_hicimos` «Análisis de cientos de miles de registros reales del proceso, una variable artificial que separa producción válida de defectuosa y modelos predictivos de detección anticipada.» · `resultado` «Detección de la desviación antes del defecto; parámetros críticos visibles.» · `frase_reunion` «En un fabricante industrial cotizado, los modelos detectan la desviación antes de que sea producto defectuoso, sobre cientos de miles de registros del proceso. El nombre, por cuenta.» · `nota_de_uso` «Anonimizado hasta autorización escrita.» |
| `di-caso-movilidad-aerea` | `titulo` «Operador de drones de largo alcance · Mantenimiento predictivo con IA auditable» · `contexto` «Operador de misiones críticas con un análisis post-vuelo manual que no escalaba con la flota.» · `que_hicimos` «Procesado de logs (batería, motores, IMU, GPS, comunicaciones, temperatura, vibración), detección de anomalías multicomponente con reglas del fabricante y ML, severidad y alertas accionables con explicabilidad.» · `resultado` «Diagnóstico más rápido y preciso, menos flota parada, análisis que escala.» · `frase_reunion` «En un operador de drones cada vuelo se diagnostica solo: qué falló, por qué y cuándo, con IA explicable. El nombre, por cuenta.» · `nota_de_uso` «Anonimizado hasta autorización escrita.» |
| `di-caso-automocion` | `titulo` «Gran planta de automoción · Planificación de días a minutos» · `contexto` «Planta con tres líneas de pintura cuya replanificación mensual tardaba de uno a tres días y no absorbía incidencias.» · `que_hicimos` «Modelo mensual flexible sobre todas las variables críticas (mix de colores, defectos, disponibilidad, averías, turnos) que recalcula ante incidencias, con tiempo óptimo de proceso para reducir consumo energético.» · `resultado` «Replanificación en minutos en lugar de días; menos brecha entre plan y realidad.» · `frase_reunion` «En una gran planta de automoción la replanificación de las líneas de pintura pasó de días a minutos, sobre dato de proceso fiable. El nombre, por cuenta.» · `nota_de_uso` «Anonimizado hasta autorización escrita.» |

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas del deck y de las dos piezas. Elige la que responde a lo que te han dicho.»
- `frases_cuenta.frases`:
  - «Por la IA que no rinde» · «si tienen modelos o GenAI en marcha» · «El modelo hereda el error del dato: decide sobre lo que le llega. El 60% de las organizaciones no captará el valor de su IA por un gobierno del dato deficiente (Gartner). Antes de otro modelo, medimos el dato sobre el que va a decidir.»
  - «Por el auditor» · «si aparecen el AI Act, DORA, un supervisor o el DPO» · «El AI Act pide saber qué dato usa cada modelo y por qué decidió lo que decidió, y responde quien firma. Montamos el gobierno que un auditor recorre y el ciclo de vida del modelo trazado. En la CNMV es la base de su supervisión.»
  - «Por la cola de IT» · «si negocio se queja de que tarda en conseguir datos» · «El dato cerca de quien decide: capa semántica acordada, autoservicio gobernado y consulta en lenguaje natural con respuesta trazable. Menos cola de peticiones, sin perder el control.»
  - «Por los silos» · «si cada sistema dice una cosa» · «Roles con mandato, catálogo vivo y linaje trazable de origen a consumo: el gobierno que se opera, no el que se archiva. En Bankinter es lo que sostiene la analítica en producción con negocio dentro.»
- `frases_cuenta.regla`: «Estas frases abren y cualifican. Si la conversación va a copilots y agentes en el ciclo de desarrollo, es Jorge; si va a que la gente use la IA, es Alfredo. Cuando el cliente muerde, el siguiente paso es traer a Daniela.»
- `pitch_por_rol`:
  - CIO — «¿Sobre qué dato están decidiendo hoy vuestros modelos, y quién responde de él?» · le mueve: «una base gobernada antes de más IA, sin abrir un frente regulatorio.»
  - Responsable de datos (CDO / Head of Data) — «¿Tenéis catálogo, linaje y un RACI que un auditor pueda recorrer?» · le mueve: «gobierno como operación (DAMA-DMBOK, DCAM, Purview), no como archivo.»
  - Compliance / DPO / CISO — «¿Podéis demostrar qué dato usa cada modelo y por qué decidió lo que decidió?» · le mueve: «IA auditable y clasificación de sistemas frente al AI Act.»
  - Dirección de negocio — «¿Cuánto tarda negocio en conseguir un dato nuevo de IT?» · le mueve: «autoservicio gobernado y habla con tus datos.»
- `pitch_nota`: «Se entra por el CIO con el reloj regulatorio; el responsable de datos y Compliance deciden con él.»
- `objeciones`:
  - «Ya tenemos plataforma de datos (Databricks, Fabric…).» → «No vendemos plataforma: trabajamos sobre la vuestra y elegimos contigo el fabricante en cada capa. Lo que suele faltar es el gobierno que se opera: roles, catálogo, linaje. Sin eso, la plataforma decide sobre dato que hereda errores.»
  - «El gobierno del dato es burocracia.» → «El que se archiva, sí. El nuestro se opera día a día y un auditor lo puede recorrer: RACI operativo, catálogo vivo, linaje trazable. En la CNMV es la base sobre la que sus modelos supervisan los mercados.»
  - «Vamos directos a GenAI.» → «Si la GenAI expone el dato que no debe, responde quien firma. Habla con tus datos va sobre dato gobernado, con respuesta trazable y barreras para el dato sensible. Primero la base; la GenAI va encima.»
  - «¿Cuánto cuesta?» → «El assessment son cuatro a seis semanas con dos perfiles senior y alcance acotado, y sales sabiendo cuánto te cuesta tu dato. El euro lo da el propio diagnóstico; no lo prometemos antes.»
- `preguntas_cualificacion`:
  - «¿Qué decisión tomáis hoy sin fiaros del todo del dato?»
  - «¿Existe un catálogo del dato y quién es dueño de cada dominio?»
  - «¿Cuántos modelos o iniciativas de IA tenéis en producción, y quién los inventaría para el AI Act?»
  - «¿Cuánto tarda negocio en obtener un dato nuevo de IT?»
- `referencias_destacadas`: [`di-caso-cnmv`, `di-caso-bankinter`].
- `material_interno`: [`dataai-pains`, `dataai-previo`, `dataai-analisis-competencia`] y, si se crea, `di-mensajes-clave`. Nota interna: nada de cifras económicas; los tres casos anónimos no se nombran; BPCE está autorizado pero sin caso escrito; la alianza nueva no se cuenta hasta que se procese el material.
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`).**

1. Dolor «Metimos IA y el resultado no es fiable.» · frase «El modelo hereda el error del dato. Antes de otro modelo, medimos el dato sobre el que decide.» · prueba «Gartner: el 60% de las organizaciones no captará el valor de su IA por un gobierno del dato deficiente.» · paso «Assessment de cuatro a seis semanas. Te presento a Daniela.»
2. Dolor «Auditoría, el supervisor o el AI Act van a preguntar quién decidió qué.» · frase «Un gobierno que un auditor recorre y un modelo cuya decisión queda trazada.» · prueba «CNMV: gobierno del dato como base de la supervisión con IA, adjudicado frente a las Big 4.» · paso «Empezamos por clasificar vuestros sistemas frente al AI Act.»
3. Dolor «Negocio hace cola en IT para conseguir un dato.» · frase «El dato cerca de quien decide: autoservicio gobernado y habla con tus datos, con respuesta trazable.» · prueba «Bankinter: analítica en producción con negocio dentro.» · paso «Un dominio primero; el resto sobre la misma base.»
4. Dolor «Cada sistema dice una cosa.» · frase «Roles con mandato, catálogo vivo y linaje de origen a consumo: el gobierno que se opera, no el que se archiva.» · prueba «Una gran planta de automoción replanifica en minutos lo que antes costaba días, sobre dato de proceso fiable.» · paso «El assessment dice qué dato sirve y qué no.»

---

## 2 · Contactos (`data/personas.json`)

- Daniela: `nombre` «Daniela Ongaro», correo `daniela.ongaro@entelgy.com` (en las tres piezas). Título en pantalla: las piezas dicen «Head of Data», el deck «Responsable Data & Analytics» y «Manager»; pendiente de que ella lo confirme. Segundo contacto candidato: Luis Sanz, Technical Lead de Data Intelligence (lámina 2 del deck).

---

## 3 · Lo que necesito que decidas o compruebes

1. **Las cinco capacidades en vez de cuatro.** Es la taxonomía canónica del área (10-jul) y su fichero de estado pide llevarla al portal. Cambia la página de práctica y la de solución a la vez. Yo lo haría ahora.
2. **Qué se dice de la alianza.** No la nombro en ninguna página: el material llegó el 2-sep sin procesar y el deck de producto dice hoy «un ecosistema ampliado de capacidades». Propongo la nota interna plegada («se reescribe en septiembre-octubre con la propuesta de valor ampliada») y nada más hasta la sesión con Daniela.
3. **El primer paso.** Assessment de 4–6 semanas (las tres piezas) o «servicio gestionado de oficina de gobierno del dato» (la copia de Daniela, con colisión de nombre con la OGH-IA). Uso el assessment y lo marco como pendiente de su sesión.
4. **Los seis casos como piezas de referencia**, tres con nombre y tres anónimos. Las autorizaciones escritas existen; falta que Daniela confirme la versión de UNED y acote el permiso de la CNMV.
5. **El 60% de Gartner** con nombre de informe (nota de prensa, febrero de 2025, si lo confirmas): sin obra no cumple la disciplina de fuentes, y es la única cifra externa del área.
6. **Las piezas de Mutua** (`dataai-mutua`, `dataai-mutua-preread`) están en Materiales como referencias «confirmar por cuenta», y no son un caso: son el deck de primer contacto a una cuenta objetivo, con su nombre dentro. Deberían ser material interno (`sale_al_cliente: "no"`) o plantilla sin nombre. No lo toco sin ti.
7. **Momento comercial** como en las otras prácticas (one-pager → primer contacto, ficha → para dejar).
8. **Estado de la solución**: `vigente` cuando Daniela lea la página, aunque se reescriba en octubre; o `en_preparacion` hasta la nueva propuesta. Lo decides tú con MA («todas las áreas con presencia»).

---

## 4 · Lo que he leído

- `Entelgy/data-intelligence/decks/entelgy-dataai-producto.html` (11 láminas + 6 casos, renderizado) · `fichas/ficha-dataai.html` · `fichas/onepager-dataai.html`.
- `daniela-estado-trabajo.md` (proyecto); `data/data-intelligence.json`; las nueve piezas de la práctica en `data/materiales.json`.
- No he leído: el deck y el pre-read de Mutua, `referencias-daniela.md` (no está en el proyecto), el PoV Data Intelligence, el mapa de pains, el material nuevo de la alianza (sin procesar por decisión de MA) ni el PDF y el PPTX del deck.
