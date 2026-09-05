# Notas de Susana sobre la build de la 14 · 4 de septiembre, noche · para la 16

*Cinco cosas vistas en la preview desplegada (`dad9426`). Cada una con el problema, lo que he comprobado en los datos y una propuesta; al final, lo que decides tú. Sin cambios en la web: esto va a Código cuando cierres las decisiones. La 15 (fuentes, capturas, tres remates) sigue como está, salvo un cuarto remate que le añado por la nota 4.*

---

## 1 · `/practicas/smart-operations/` habla del puesto de trabajo, no de SmartOPS como motor

**El problema.** La página de práctica se escribió en la 13 tirando de los dos decks verticales (Workplace e Infra) y salió con el puesto de trabajo delante: «Qué cubre» abre con «Operamos el puesto de trabajo de punta a punta…», la capacidad 03 habla del CAU y el diagnóstico se describe primero «en el puesto». Amador tiene un deck global (`SmartOPS · Resumen Ejecutivo Global 2026`, 10 láminas, «documento público») que cuenta otra cosa: SmartOPS «no es un catálogo de servicios, es el plano de control de tu operación», un motor de cinco piezas (modelo N0–N3, dimensionamiento sobre datos, reporting Power BI + data lake, IA operativa en producción, gobierno ISO 20000/27001/ENS) servido a dos territorios con la misma disciplina. Ese es el marco de la práctica; los dos verticales son las soluciones, y ya tienen su página.

**Propuesta.** Reescribir los campos de práctica de `data/smart-operations.json` desde el deck global. Los dos verticales no se tocan.

| Campo | Texto propuesto |
|---|---|
| `propuesta_portada` | Se queda (revisión 13): «Operamos puesto de trabajo e infraestructura y respondemos del resultado, no de las horas.» |
| `propuesta` | «Un mismo motor operativo para los dos territorios críticos del CIO, el puesto de trabajo y la infraestructura, con IA en producción y gobierno regulatorio dentro.» |
| `que_cubre` | «SmartOPS es el motor operativo de Entelgy, no un catálogo de servicios: un modelo N0–N3 que deja el volumen a la máquina y el criterio al equipo, dimensionamiento sobre datos reales, reporting en Power BI sobre un data lake del servicio, IA operativa en producción desde 2018 y gobierno ISO 20000, 27001 y ENS alto en el diseño del servicio. Ese motor se sirve a dos territorios con la misma disciplina, el mismo gobierno y el mismo reporting: el puesto de trabajo (soporte, dispositivo y experiencia del empleado) y la infraestructura crítica (sistemas, redes y cloud, 24×7). Desde centros propios en Madrid, São Paulo y Miami.» |
| `que_no_prometer` | Se queda como está (ya es de práctica, no de vertical). |
| `pregunta_comun` | Dos opciones. **A**, la actual, que es la bifurcación entre territorios: «¿Qué os cuesta más hoy: que la gente pueda trabajar sin fricción o que la infraestructura no falle?». **B**, la del cierre del deck («Empecemos por los datos, no por el contrato»): «¿Sabéis, con datos, cuánto os cuesta hoy operar cada usuario y cada elemento de infraestructura, y qué parte de ese coste no debería existir?» |
| `capacidades` | Las cinco piezas del motor, en el orden del deck (Data Intelligence ya tiene cinco; la rejilla lo aguanta): **01 Modelo operativo N0–N3** (texto actual) · **02 Dimensionamiento sobre datos** (texto actual) · **03 Reporting en Power BI** «Un data lake del servicio y cuadros en Power BI que leen el CIO y el CFO: coste por usuario y por elemento, cumplimiento, fricción y lo que la IA resolvió sola. El mismo reporting en los dos territorios.» · **04 IA operativa en producción** «En el CAU clasifica, prioriza, deduplica y redacta la respuesta; en la infraestructura suprime ruido, correlaciona y propone la causa raíz. En producción desde 2018, con porcentaje por iniciativa.» · **05 Gobierno dentro** (texto actual). |
| `pruebas_linea` (campo nuevo, una línea en mono bajo «Qué cubre») | «Hoy: más de 400.000 usuarios operados, 95% de renovación, IA en producción desde 2018 y 174 certificaciones Microsoft.» Fuente: SmartOPS · Resumen Ejecutivo Global 2026, láminas 8 y 9. El «<2% de rotación» y los «+3.000 clientes» del deck se quedan fuera hasta que Amador los documente (regla de la 13). |
| `primer_avance.nota` | «Precio cerrado, sin compromiso posterior, sobre el servicio real. Te llevas cuatro cosas: el mapa de fricción y riesgo para decidir, el hueco NIS2/DORA/AI Act, Windows 10 y Broadcom con TCO por camino, y las mejoras que se pueden ejecutar en 90 días. El resultado es del cliente decida lo que decida. Alcance con Amador Sobrino.» |
| `discovery` | Se queda. |

**Un bloque que el deck tiene y la práctica no: «Lo que presiona al CIO».** Seis fuerzas con cifra y fuente, más cuatro relojes con fecha. Es el bloque que mejor funciona en 30 minutos con dirección, y las cifras llevan autor, obra y año: 14 fricciones por empleado y semana fuera del SLA (Nexthink, DEX Report 2026); 29% del gasto cloud es desperdicio recuperable (Flexera, State of the Cloud 2026); 54% de las caídas cuestan más de 100.000 $ (Uptime Institute, Outage Analysis 2026); 35 M€ o el 7% de la facturación de multa máxima del AI Act (Regl. (UE) 2024/1689, art. 99); 80% no ve impacto en EBIT de su IA (McKinsey, State of AI 2026). La sexta, «×10 en renovaciones VMware tras Broadcom», va atribuida a «Gartner · VMware TCO 2026» sin informe verificable: se queda fuera hasta que Amador pase la obra, o se sustituye por lo que ya dice la solución de Infra (la horquilla 200–1.500% de los casos públicos, con su fuente). Relojes: fin de soporte de Windows 10 y Server (octubre 2025, ESU), AI Act alto riesgo (2 de diciembre de 2027), NIS2 en España e inspecciones (2026), renovación Broadcom-VMware (ahora). Es un campo nuevo de práctica (`presion: {fuerzas[], relojes[]}`) y un bloque nuevo en `practicaPage`, entre «Qué cubre» y «Capacidades». Si entra, rompe la regla «cinco prácticas, mismos bloques en orden» (criterio 3) hasta que las otras cuatro lo tengan; los decks de Process Intelligence, Software Development y Digital Change tienen su lámina equivalente.

**Supuestos a probar.** Que «NIS2 España · inspecciones activas 2026» es cierto (la transposición española va con retraso; lo confirma Amador). Que la edición 2026 del McKinsey State of AI existe con ese dato (la de 2025 decía «cerca del 80% sin impacto significativo en EBIT»); si no, se cita la de 2025.

---

## 2 · La propuesta de cada solución es un ladrillo

**El problema.** «La propuesta» son seis párrafos con el mismo peso, entre 250 y 400 palabras según la solución (Infra, 420; Puesto de trabajo, 370), a todo el ancho de la página: en tu pantallazo cada línea tiene unos 150 caracteres, el doble de lo que se lee sin perderse. No hay por dónde entrar: la señal, el dato de prueba, la objeción y la pregunta de apertura están enterrados en prosa. El comercial que busca «qué le digo al CFO» no lo encuentra en dos segundos.

**Lo que haría, con el sombrero de diseño de portales de habilitación.** Mismo orden de bloques (criterio 3 se mantiene), pero cada bloque con la forma que pide su contenido:

| Bloque | Hoy | Propuesta |
|---|---|---|
| Qué es | Párrafo de 60–100 palabras | Dos líneas de texto y **las piezas como cuatro fichas pequeñas** (CAU base · Puesto y dispositivo · DaaS · Servicios de valor, cada una con su línea). Campo nuevo `propuesta.piezas[]`, solo en las soluciones que se venden por piezas. |
| A quién | Párrafo con roles y sectores mezclados | **Los roles como chips** («CIO · CFO · COO/CHRO · CISO») que abren el pitch por rol de «Para prepararte» (ya existe en `kit.pitch_por_rol`, no hay que escribir nada), y una línea con los sectores. |
| La señal | Párrafo de 40–80 palabras | **Una lista de comprobación**: cuatro o cinco señales de una línea, con casilla visual («□ El SLA se cumple al 97% y la gente se queja igual»). El comercial marca mentalmente las que ha oído. Campo `propuesta.senales[]`, que sale de partir la prosa actual por frases; lo hago yo, no Código. |
| Por qué Entelgy | Párrafo de 70–140 palabras con las cifras dentro | **Tres cifras grandes** (400.000 usuarios · 97% ANS · 80–92% acierto del clasificador) con su línea, y debajo dos líneas de prosa. Campo `propuesta.pruebas[]` con `cifra`, `texto` y `fuente`. |
| El diferenciador | Una frase en negrita como las demás | **Cita destacada** sobre banda slate, a 36 px: es la frase que el comercial tiene que memorizar. Sin cambio de datos. |
| La objeción | Frase en cursiva y párrafo | **Diálogo**: a la izquierda «Te dirán», con la frase; a la derecha «Respondes», con la respuesta. Sin cambio de datos. |
| Cómo abres | Frase entre comillas | **Tarjeta de cita** pegada a la tarjeta navy del primer paso: la pregunta arriba, el primer paso abajo. Sin cambio de datos. |

Y una regla nueva para el brief (E10): la prosa nunca pasa de 72 caracteres por línea (`max-width: 72ch`); lo que necesite el ancho entero se pone a dos columnas.

**Dos velocidades.** La **A** es solo maqueta y entra en horas: medida de 72ch, «La propuesta» a dos columnas (Qué es y Por qué a la izquierda; A quién, señal, objeción y apertura a la derecha), el diferenciador como cita y la objeción como diálogo. No toca datos. La **B** es la tabla entera y necesita que yo parta la prosa de las once soluciones en piezas, señales y pruebas (un documento de vista previa por solución, como en la 13), y que Código construya las cuatro formas nuevas. Un día de trabajo mío y medio de Código.

---

## 3 · «Abrir el documento» abre el HTML; el comercial a veces necesita el PDF o el PPT

**El problema.** Cada pieza tiene un solo `url_documento`, que hoy apunta al HTML del hub. Para presentar en pantalla vale; para enviar después de la reunión hace falta un PDF, y para adaptar a una cuenta, el PPT del que salió. El portal no distingue los tres usos y el comercial acaba pidiendo el fichero por Teams.

**Propuesta.** Tres usos, tres verbos, y solo se enseña lo que existe:

- Datos: `url_documento` sigue siendo «ver en pantalla» y se añade `descargas: [{formato, url, nota}]` con `formato` en `pdf` · `pptx` · `docx` · `xlsx`. Vacío por defecto.
- Ficha de pieza: un bloque «Llévatelo» con tres filas fijas, cada una con su uso en mono: **Presentar** → «Abrir en pantalla ↗»; **Enviar** → «PDF ↓» (o «pídeselo a Amador Sobrino» si no hay); **Adaptar** → «PPT ↓» (o «pídeselo a…»). El hueco se ve, con nombre y apellido; no desaparece.
- Tarjeta de biblioteca y carriles de solución: «Abrir ↗» como hoy, y al lado, en mono, «PDF» y «PPT» solo cuando existen. Nada de iconos.
- Para las fichas y one-pagers en HTML (una sola página), una vía sin ficheros que mantener: «Guardar como PDF» abre el HTML con `?imprimir` y lanza el diálogo de impresión con una hoja de estilos de impresión. Hay que probar la calidad con un bundle de Claude Design antes de prometerlo; los decks con una lámina por `iframe` no sirven para esto.
- Con los SM, después del 8: cada uno dice, pieza a pieza, si existe PDF y PPT y dónde (Hipatia en SharePoint, seguramente); se enlazan desde ahí, no se copian al hub. Entra en los correos.

**Supuesto a probar.** Que hoy no existe casi ningún PDF ni PPT de las piezas de la v3 fuera de los originales de los SM: los bundles de Claude Design son HTML y sus PDF exportados salen rasterizados (ya lo vimos). Si es así, el bloque «Llévatelo» arranca casi todo en «pídeselo a…», y eso es honesto pero hay que saberlo antes de enseñarlo.

---

## 4 · Materiales abre con dos piezas pendientes y sin enlace

**El problema.** El índice sigue el orden de `materiales.json`, que empieza por Modernización, y las dos primeras piezas de Jorge son un correo de apertura «pendiente» sin enlace y el autodiagnóstico en «revisar». Quien haga la demo sin conocer el estado del portal abre Materiales y ve dos huecos.

**Propuesta (entra en la 15 como remate AY.4, ya está en el mensaje).** Orden fijo en los dos índices: primero `vigente`, luego `revisar`, al final `pendiente`; dentro de cada estado, el orden de práctica de la portada (corporativo primero, luego Process Intelligence, Software Development, Data Intelligence, Smart Operations, Digital Change) y dentro de la práctica, el orden de los nueve tipos (Deck, One-pager, Ficha, Referencia…). La primera tarjeta pasa a ser el Executive Deck, y las pendientes se van al final con su chip. `app.js` solo oculta, así que el orden se mantiene al filtrar y al buscar.

---

## 5 · Contactos repite a la misma persona y no dice cómo llamarla

**El problema.** `personas.json` tiene 24 filas para 8 personas: Jorge sale cuatro veces (responsable y especialista de tres soluciones), Alfredo cuatro, Amador tres. Sin teléfono en nadie, sin título en Carmen, Carla y Jorge, tres «Segundo contacto: en preparación» sin nombre y un canal de Teams «pendiente de enlace» repetido cinco veces. Es un listado, no un directorio: no responde a «¿a quién llamo por Infraestructura?» con un dato que sirva para llamar.

**Propuesta.** Un modelo de datos y dos vistas.

- **Datos.** `personas.json` pasa a una entrada por persona: `id`, `nombre`, `titulo`, `correo`, `telefono`, `teams` (enlace o nulo), `practica`, `foto` (nulo hasta que la haya). Cada solución lleva `contactos: {comercial: <id>, tecnico: <id o nulo>}` y cada práctica `responsable: <id>`. El build ya resuelve nombres desde `personas.json` (revisión 14): pasa a resolver desde el `id`, y en pantalla sale nombre y apellido igual que ahora.
- **Vista 1, «A quién llamo»** (arriba, es la pregunta): una tabla por práctica con una fila por solución y dos columnas, **Comercial** y **Técnico**, cada celda con nombre, título, correo y teléfono. Donde no hay técnico, la celda dice «por confirmar · lo pide Susana a Amador Sobrino»: el hueco se ve y tiene dueño.
- **Vista 2, «Las personas»**: una tarjeta por persona (ocho, no veinticuatro) con foto o inicial, nombre, título, correo, teléfono, Teams y la lista de lo que lleva («Responsable de Software Development · Modernización, Mantenimiento y Asistencia técnica»). La tabla enlaza a la tarjeta.
- **En las soluciones**, la cabecera pasa de «Especialista: Amador Sobrino» a dos líneas: «Comercial: Amador Sobrino · Técnico: por confirmar». «¿Falta algo?» sigue escribiendo al comercial.
- **Lo que hay que pedir a los SM** (entra en los correos, después del 8): teléfono, título exacto (Carmen, Carla, Jorge), el contacto técnico de cada solución con nombre, título, correo y teléfono, y una foto si MA sigue queriendo «foto + nombre + apellido» como pidió en junio.

**Lo que se ve el 8 si entra ya:** la tabla con los comerciales completos (correo y teléfono donde lo tengamos) y once huecos de técnico con dueño. Es más útil y más honesto que la página actual.

---

## Lo que decides tú

1. Nota 1: que la práctica de Smart Operations se reescriba desde el deck global (texto de la tabla) y, en la pregunta, A o B.
2. Nota 1: si «Lo que presiona al CIO» entra ya en Smart Operations (rompe el criterio 3 hasta que las otras cuatro lo tengan) o se deja para después del 10 con las cinco a la vez.
3. Nota 2: velocidad A antes del 8 y B después del 10, B entera antes del 8, o solo A.
4. Nota 3: bloque «Llévatelo» y `descargas[]` ya (arranca casi vacío), después del 10 con lo que digan los SM, o probar primero «Guardar como PDF» sobre un bundle.
5. Nota 5: contactos nuevos antes del 8 con los huecos a la vista, o después del 10 con los datos de los SM.
6. Nota 5: foto en las tarjetas (se pide a los SM) o solo inicial.
7. Carriles vacíos de «Material común» en Smart Operations y Digital Change (queda de la 14): rellenar con la mejor pieza de sus soluciones, rotulada con la solución, u ocultar el carril vacío.

---

## Cerrado (4-sep, noche)

Decidido por Susana: Smart Operations se reescribe desde el deck global con la pregunta A (la bifurcación entre territorios) y «Lo que presiona al CIO» entra ya, solo en esa práctica, como bloque opcional (las otras cuatro después del 10). La propuesta: maqueta (A) antes del 8, datos estructurados (B) después del 10 con vista previa por solución. «Llévatelo» y `descargas[]` entran ya aunque arranquen vacíos, y Código prueba la impresión a PDF de una ficha y un one-pager. Contactos nuevos antes del 8 con los huecos a la vista; foto en las tarjetas, que se pide a los SM (inicial mientras tanto). Los carriles vacíos de «Material común» toman la mejor pieza de sus soluciones. Todo en una revisión 16 separada de la 15 (`docs/mensaje-ajustes-revision-16.md`), que Código empieza cuando la 15 esté aplicada. Lo que se pide a los SM después del 8 (teléfono, título, técnico por solución, foto, PDF y PPT de cada pieza) va en los correos.
