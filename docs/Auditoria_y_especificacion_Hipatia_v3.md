# Hipatia v3 · Auditoría de las dos propuestas y especificación de la fusión

> Documento de trabajo Guberna · 3 de septiembre de 2026 (revisión 2, misma tarde) · preparado por Susana Juan
> Compara la propuesta 1 (hipatia2.guberna.es, repo `hipatia2`) con la propuesta 2 (`hipatia-oportunidades.html`, carpeta `entelgychat`, en su versión de las 17:47), decide qué se queda de cada una y deja la especificación para que Código construya el prototipo navegable de la v3. La revisión 2 incorpora las capas nuevas de la propuesta 2 (§1 y §4), el veredicto sobre los agentes de hipatia2 (§7) y el planteamiento del espacio de oportunidad transversal (§8).
> Fuentes: código y documentos de ambos repositorios, renderizados en Chromium a 1440 px y 390 px el 3 de septiembre. Las cifras citan su fichero.

---

## 0 · Lo que se decide

> Revisión 5 (3 sep, tarde): nombres y taxonomía definitivos de la v3. «Data & AI» pasa a **Data Intelligence** y «IA + Digital Change» pasa a **Digital Change** (petición de Entelgy de quitar «IA» de los nombres de práctica; los productos IAbility, PreservIA y OGH-IA conservan el suyo). Data Intelligence es una **única solución** con el nombre de la práctica y sus cuatro antiguas puertas como capacidades; el catálogo queda en **once soluciones** (PI 2 · SD 3 · DI 1 · SO 2 · DC 3). Donde este documento diga «doce soluciones», «Data & AI» o «IA + Digital Change», léase con esta revisión.

> Revisión 6 (3 sep, noche): tres correcciones tras revisar la build de la revisión 5. **Titular de portada** afinado a 99 caracteres, con Entelgy como sujeto de una frase que respalda («Entelgy responde de que…»), no una tesis genérica que valdría para cualquier consultora — ver §6.3. **Regla de vigencia y enlace** (nueva, §6.4): una pieza no puede mostrarse `vigente` si no tiene `url_documento`; hoy son 26 de las 88 piezas, casi todo el material de las cuatro prácticas que no son Modernización, y afecta directamente al bloque «Lo más reciente, por práctica» de la portada, que con la regla de la revisión 5 estaba enseñando cinco piezas que no abren ningún documento. **Corner WK** no es un caso: es material interno (`[INTERNO] Corner WK 2023 · Azure.pptx`, carpeta de Jorge), no una referencia citable ni «confirmar por cuenta»; no existe como pieza en el catálogo y no hace falta ninguna acción.

> Revisión 7 (3 sep, noche): resuelto el enlace de 42 de las 53 piezas de la revisión 6, apuntando a `https://entelgy.guberna.es` (repo `sujucu70/Entelgy`, Cloudflare Access OTP @entelgy.com), que resultó ser el hub de trabajo Guberna ya en producción, no una carpeta nueva. **Esto es provisional**: entelgy.guberna.es es un espacio de trabajo temporal que desaparecerá al terminar el proyecto — vale para la demo del 10-sep porque hipatia2 es herramienta interna del comercial, no material que sale al cliente, pero antes de dar la v3 por definitiva hay que migrar estos enlaces a un destino permanente (Hipatia/SharePoint, a confirmar). De las 11 piezas restantes: 6 son referencias con sign-off cuyo contenido ya es el texto citable en la ficha, no necesitan documento aparte; 2 (`smartops-workplace-legacy-deck`, `smartops-infra-legacy-onepager`) son versiones antiguas que Susana descarta — pasan a `sale_al_cliente: "no"`; y 3 siguen sin material en ninguna fuente (`mod-presentacion-spec`, `mod-correo-apertura`, `mod-business-case`), quedan «en preparación · dueño: Jorge».
>
> **Pendiente después del 10-sep (no olvidar):** (1) migrar los 42 enlaces de entelgy.guberna.es a un destino permanente antes de que ese espacio se cierre; (2) el modelo de datos hoy tiene un único `url_documento` por pieza — casi todas las piezas tienen HTML (previsualizar) y algunas además PDF/PPTX (descargar); si se quiere ofrecer los dos por separado hay que ampliar `url_documento` a un objeto `{ver, descargar[]}`. Ninguna de las dos bloquea la demo del 10; las dos se decidieron aplazar a propósito.

> Revisión 8 (3 sep, noche): Código señaló, al aplicar F, que la regla de vigencia tal como estaba escrita alcanzaba a 13 piezas más de las 26 previstas — 6 referencias de Modernización (`mod-caso-*`) y 7 piezas internas (`sale_al_cliente: "no"`). Correcto detectarlo y no tocarlas por su cuenta. La regla estaba mal acotada, no las 13: se ha corregido en §6.4 para que solo alcance a piezas `sale_al_cliente` en `"si"`/`"con_validacion"`, excluyendo `referencia` e internas. Sin acción de datos — las 13 se quedan `vigente` tal como están.

> Revisión 9 (3 sep, noche): la instrucción de la revisión 7 daba por hecho que las 42 piezas enlazadas habían sido `vigente` antes de la revisión 6. Código comprobó que 16 nunca lo fueron, lo dijo y, sin respuesta, aplicó la instrucción literal: las 42 a `vigente`. Revisadas una a una, el «revisar» de esas 16 significaba dos cosas distintas. En 13 era una duda de inventario que el propio enlace resuelve (¿qué edición es la buena?) o una cautela que ya expresan los otros dos chips (`con_validacion`, `confirmar_por_cuenta`): se quedan `vigente`. En 3 el dueño tiene cambios pendientes sobre la propia pieza: `mod-deck-ejecutivo` (los edits que Jorge pidió el 14 jul — slide 7 de AT, referencias, anexo de créditos — esperan su documento de AT), `corp-exec-global` (v6 cerrada en julio, pero con las cifras de la slide 08, el caso UNED y la autorización de logos sin cerrar) y `corp-exec-latam` (edición y referencias pendientes de la lectura de Omar). Vuelven a `revisar` conservando el enlace, con una nota de uso que le dice al comercial para qué sirve la pieza y qué no debe hacer con ella. Efecto en portada: la tarjeta de Software Development pasa sola a `mod-onepager` (siguiente en la regla de §6.3, que no se toca) y la tarjeta corporativa sigue enseñando el Executive Deck, ahora con el chip «revisar», como estaba en el mockup de la revisión 5 — `deckCorporativo()` en `build.js` no filtra por estado. Se reescribe además la nota de las dos fichas de servicio SmartOPS, que aún decían «confirmar la edición vigente» cuando la edición ya la fija el enlace. La regla queda completada en §6.4: tener enlace es necesario para ser `vigente`, pero no basta si el dueño tiene cambios pendientes; y «confirma antes de compartir» lo dicen `con_validacion` y `confirmar_por_cuenta`, no el estado.

> Revisión 10 (3 sep, noche): la revisión 9 quedó aplicada tal cual (portada: Software Development = one-pager, corporativa = Executive Deck en «revisar», eyebrows sin «· corporativo»). Al aplicarla, `/materiales` pasó a 151 KB y Código, para cumplir el criterio 8 de §6.8, quitó la nota de uso del atributo `data-search` de las tarjetas — con lo que el buscador dejaba de encontrar por una palabra que el comercial ve en la tarjeta. Corrección: el buscador de Materiales busca sobre el texto visible de la tarjeta más el sector (`data-search` solo lleva el sector; `app.js` suma las dos fuentes). Regla que queda: **lo que se ve en una tarjeta se puede buscar**.

> Revisión 11 (3 sep, noche): recorrido de la build completa (`cda8a88`) con el guion de MA para el kickoff del 10. Cuatro cosas que el canon del proyecto no permite en pantalla y estaban: **Security América** en la sección «Mercados» de `/entelgy` (vendida; no aparece en ningún material), la **marca Guberna** como dueño de dos piezas internas y de una línea de «Lo que viene», la **métrica de uso** «el 90% no se abre» en `/punto-de-partida` (MA, junio: las métricas de uso de Hipatia no se usan), y **referencias a esta spec** (§10.9, §6.9) y jerga de trabajo (P0–P5, «cableada») en textos del comercial. Además: la sección «Mercados» y la nota «Pruebas de capacidad» de `/entelgy` se quitan (eran paneles de estado internos, no relato); `mod-correo-apertura` y `mod-presentacion-spec` pasan a `pendiente` como quedó dicho en la revisión 7; las notas de las seis tarjetas de portada dicen para qué sirve cada pieza; y las cabeceras de práctica pintan `propuesta_portada` (voz de constructor) en vez de la `propuesta` heredada del Executive Deck («acompañamos», «ayudamos a», «conseguimos que»). Guardarraíl: el canon de pantalla entra en CLAUDE.md y medir.js lo barre en el criterio 6. Decisión que se queda como está: las soluciones «pendiente · sept 2026» fuera de Modernización, el autodiagnóstico de julio y los «pendiente de enlace» de Contactos.

> Revisión 11b (3 sep, noche): la 11 aplicada y verificada (`b25c7c2`, siete commits). Dos remates antes de la auditoría visual. **Bienvenida sin sección nueva**: MA quiere que al entrar quede claro para qué sirve el portal; se decide no mover el mensaje corporativo abajo ni añadir sección (la portada sigue siendo una pantalla y abre por «qué vendemos»), y usar la línea bajo el titular — que repetía el titular — para decirlo: «Todo lo que necesitas para vender: qué ofrece Entelgy, por qué, y el material que puedes enseñar o enviar a un cliente». La frase literal de MA la dice quien presenta. **Rejilla de prácticas en móvil**: las cinco tarjetas de «La oferta» pasan a dos y una columna por debajo de 900 y 640 px, como `.grid-3`. Queda para la auditoría visual decidir si la cabecera fija lleva un rótulo junto a «Hipatia» («Catálogo comercial») para orientar en todas las páginas.

> Revisión 12 (4 sep): auditoría de copy de la build `fdcfc09` sobre el texto visible de las 22 páginas del recorrido, leída con los criterios de MA (filtro de sustitución, «leerlo una vez y saber qué contar», tangibilidad de la IA, «responde de, nunca garantiza», munición sin decir cómo vender, frontera interno/cliente). No cambia estructura, prácticas, estados ni cifras. Lo que MA pararía en la demo: la propuesta de Software Development en portada nombraba la IA sin aterrizarla y la firmaría cualquiera (ahora «sin parar el negocio ni pedir partida nueva», el único diferenciador firmado); la nota del Executive Deck le enseñaba al CEO la lista de pendientes («slide 08», «caso UNED»); la **Oficina de Transformación y Gobierno** volvía a leerse como producto con fases (la corrección del 25-may: es el método operado desde dentro del cliente; «delegamos» apuntaba al revés); a «Qué nos diferencia» le faltaba el primer diferenciador (organizaciones en marcha, no greenfield) y llevaba la versión tibia de «la tecnología es la parte fácil»; una nota de trabajo pintada en Data Intelligence («revisión 5, 3 sep»); «acompañar» dos veces en Digital Change; veinte notas de uso que decían el tipo de pieza con otras palabras; diez «Por qué Entelgy» sin Entelgy dentro (ahora hueco con dueño y fecha donde no hay argumento, texto anterior guardado en `planteamiento`; argumento real en Mantenimiento, con el caso DGOJ al lado, y en Inteligencia de procesos, con el dato canónico de Carmen); el «Qué es» de Modernización sin decir qué hace la IA; la nota del autodiagnóstico que dejaba enviar a una cuenta real un ejemplo ficticio sin validar; y `/punto-de-partida` anunciando que era la demo. Antes del 8: las otras tres propuestas de portada, «Qué no prometemos» en primera persona, «La pregunta que abre» en una sola pregunta, «tensión» y «silos» fuera de `/entelgy`, el kit de Modernización sin consejos de venta, «medida» donde decía «certificada», la cifra Gartner sin obra fuera, el «nadie más lo hace» fuera, `/lo-que-viene` sin «v3», «kit», «Menti» ni «MA», apellidos en `/contactos` (Herrero, Zurdo, Rode, González; Daniela y Amador cuando se tengan), as-is sin juicio, la banda del CRM en una frase. Guardarraíl: el barrido de canon caza también «acompañar», «revisión N» y «Demo a Dirección». **Decisiones que se quedan:** `mod-autodiagnostico` y `mod-ficha-servicio` siguen `vigente` (solo cambia la nota; no se añaden chips «revisar» a la portada antes del 10); el titular de portada (revisión 6); los «Qué es» / «Cómo abres» / primer paso de las diez soluciones en preparación esperan al contenido de los SM. **Para el 8 con MA:** el nombre de la Oficina (Gobierno / Gobernanza); si quiere «Transformar es mucho más difícil que crear» abriendo `/entelgy` (D3 sigue abierta). **Avisar antes del 10:** Jorge (el caso DGOJ reutilizado en Mantenimiento, la frase del AI Act sobre el core de pólizas encuadrada en alto riesgo, la cifra Gartner retirada hasta tener obra y año, NASERTIC «atiende llamadas de referencia») y Carmen (Gold · +50 proyectos · tres países en el «Por qué Entelgy» de Inteligencia de procesos).


**El problema.** Hay dos propuestas de portal y ninguna vale sola. La primera (hipatia2) tiene la sustancia: contenido validado con Jorge, un recorrido que enseña de verdad cómo vende un comercial, y una respuesta ya construida al feedback del Menti. Pero es un demostrador lineal de una sola práctica, con agentes simulados y una estructura que no escala a las cinco prácticas sin repetirlo todo. La segunda (hipatia-oportunidades) tiene la arquitectura correcta: relato corporativo, cinco prácticas con subprácticas, biblioteca única y espacio de oportunidad, con reglas de gobierno bien pensadas. Pero está vacía donde importa: el contenido de Modernización es genérico, las referencias que Jorge firmó en julio aparecen degradadas a "en revisión", los guiones son de plantilla y la construcción técnica (dieciséis capas de parches) no es una base sobre la que seguir.

**La decisión que propongo.** La v3 toma la arquitectura, la navegación y las reglas de gobierno de la propuesta 2, y las llena con la sustancia, los patrones de página y la honestidad operativa de la propuesta 1. Modernización de Aplicaciones se construye completa como práctica de referencia, con todo su contenido validado; las otras cuatro prácticas se montan con la misma plantilla y el contenido que ya existe en el hub. Se reconstruye desde cero como sitio estático limpio, no se parchea ninguna de las dos.

**Tres cosas que no vienen de ninguna de las dos y hay que añadir:** un modelo de datos único por práctica (hoy cada propuesta tiene el contenido metido en el HTML o en JS parcheado), rutas con URL para cada pantalla (ninguna de las dos permite enlazar una práctica o un paso), y una portada que funcione tanto para el comercial que entra a diario como para la demo ante Dirección, sin obligar a elegir entre las dos.

### 0.1 · Revisión 4 · Los dos principios de Miguel Ángel y lo que cambian

Tras la conversación con MA (3 sep, tarde) hay dos principios que mandan sobre todo lo anterior: **(1)** que nadie tenga que explicar cómo se usa el portal, y **(2)** que su objetivo principal sea que el comercial conozca la oferta y la propuesta de valor de Entelgy y acceda al material que puede necesitar con un cliente; lo demás es secundario.

**Lo que se cae.** El espacio de oportunidad con situaciones, señales, mesa y cartuchos (§8) es un mecanismo, y un mecanismo hay que explicarlo: contradice el principio 1 y sirve al «resto» del principio 2. Pasa a fase 2, y solo si el uso real lo pide. Con él se caen el selector de señales, los escenarios ficticios, la acreditación como puerta, el recorrido con flechas, la «etapa 2» y cualquier agente visible. El asistente 80/20 (§7.1) también espera.

**Lo que queda: un catálogo.** El único modelo mental que no hay que explicar a un comercial es el de una web de producto: una oferta, se entra en una línea, se ve qué es y qué se le puede dar al cliente. Tres niveles y ninguno más (oferta → práctica → solución), la misma estructura en cada página, un buscador de materiales siempre visible, y nombres en lenguaje de comercial (en pantalla no existen «puertas», «kits» ni «cartuchos»; existen prácticas, soluciones y materiales).

**Cada página responde a dos preguntas, en este orden.** ¿Qué vendemos aquí y por qué Entelgy? y ¿Qué le puedo enseñar o enviar al cliente? Todo lo demás (cómo prepararte, referencias citables, a quién llamar) va debajo, plegado, y es opcional.

- *Portada:* Entelgy en una frase, las cinco prácticas con su propuesta de valor en una línea cada una, el buscador de materiales, y el material más usado. Una pantalla.
- *Práctica:* qué cubre y qué no, su propuesta de valor, sus soluciones, el material común para cliente, el responsable.
- *Solución* (la ficha que hoy es la tarjeta de hipatia2): qué es, para quién, la señal que la delata, por qué Entelgy, la objeción típica, el primer paso que se vende y su plazo, el especialista; debajo, los materiales para cliente ordenados por momento (primer contacto · reunión · para dejar al cliente), cada uno con «sale al cliente» y vigencia y abriéndose directo; y plegado, «para prepararte» (pitch por rol, objeciones, preguntas, referencias citables, dossier imprimible).
- *Materiales:* buscador y filtros (práctica, para cliente / interno, tipo), con «para cliente» marcado por defecto.
- *Contactos:* por práctica, primero y segundo. Y un «¿falta algo?» que abre un correo al responsable.

**Lo que se conserva de las dos propuestas, reordenado.** De hipatia2, todo el contenido validado de Modernización, que es exactamente una propuesta de valor y su material: la tarjeta pasa a ser la ficha de solución, el kit pasa a «para prepararte», el repositorio por zonas pasa a materiales por momento, los seis casos citables y los contactos se quedan; el correo de apertura y el autodiagnóstico pasan a ser dos materiales más de Modernización («plantilla de correo», «herramienta para enviar al cliente»), no herramientas del portal. De la propuesta 2, la taxonomía de cinco prácticas y doce soluciones con su propuesta de valor, el relato corporativo, el modo «página propia por solución», el bloque de capacidades y primer avance, y las reglas de gobierno de la biblioteca. La construcción sigue siendo la de §6.7: estático, un JSON por práctica, sin capas.

**Cómo se comprueba el principio 1.** Antes de enseñarlo, cinco comerciales que no lo hayan visto nunca reciben la URL sin ninguna explicación y tres encargos: «dime qué vende Entelgy en Data & AI», «encuentra algo que puedas enviarle a un cliente de Modernización», «¿a quién llamas si te preguntan por Process Mining?». Si alguno pregunta «¿y esto cómo va?», hay que cambiar la página, no explicársela.

**Efecto en el plazo.** Con este recorte, dos o tres días de Código dan para todo el portal, no para una rebanada: es un catálogo generado desde datos. Lo que sigue dependiendo de los SM es el contenido de las once soluciones que no son Modernización.

**Sobre los agentes y el espacio de oportunidad** (§7 y §8, ahora fase 2): de las trece cosas que hipatia2 llama agente quedan una (el asistente de preparación de visita, que ya existe, con cuatro salidas), dos automatismos (vigencia y feedback), dos integraciones por fases (CRM de lectura primero, escaneo público después) y el autodiagnóstico como patrón; el mapa de contactos por fuentes públicas se retira. El espacio de oportunidad se hace transversal con un mecanismo sencillo: la señal es el índice. Cada puerta declara sus señales, el comercial marca las que ha oído, la señal lleva a la puerta y la puerta trae su kit; el mismo mecanismo funciona sin modelo hoy y con el asistente después.

---

## 1 · Qué se ha auditado

### Propuesta 1 · hipatia2

| Dato | Valor | Fuente |
|---|---|---|
| Publicación | hipatia2.guberna.es, Cloudflare Worker con assets estáticos, tras Cloudflare Access | `wrangler.jsonc`, `estatus-v1-modernizacion.md` |
| Último commit | «revision pre-vacaciones», 16 jul 2026 | `git log` |
| Páginas | Portada · Ciclo de Software · Modernización (índice) · Recorrido (10 pasos) · Autodiagnóstico Grupo Lantia · One-pager y ficha de servicio | `public/` |
| Peso | 432 KB en total; el recorrido son 190 KB en un solo fichero (83 KB de CSS y 22 KB de JS embebidos) | `wc -c` |
| Documentación | `estatus-v1-modernizacion.md` (16 jul) y los seis ficheros de `paquete-jorge/` | repo |
| Contenido validado | Seis casos citables con sign-off del PM (16 jul), mensajes clave (4 keynotes + 3 frases Lantia), redacción de los casos, one-pager y ficha V1 | `paquete-jorge/01`, `03`, `04`, `06` |
| Feedback real incorporado | Menti del 26 jun: 22 asistentes, 17 respuestas de uso, 8 propuestas, 24 comentarios; reunión SM del 23 jun | `estatus-v1-modernizacion.md` §2 |

### Propuesta 2 · hipatia-oportunidades

| Dato | Valor | Fuente |
|---|---|---|
| Ubicación | `entelgychat/hipatia-oportunidades.html`, sin publicar | carpeta |
| Fechas | Construida entre el 2 y el 3 de septiembre de 2026; la última capa (`hipatia-door-focus.js`) es de las 17:47 del día 3; conserva más de treinta versiones previas (`.pre-*`, `.v1`, `.con-cuentas-locales`) | `mtime` de los ficheros |
| Estructura | Un HTML de 131 KB con 985 bytes de marcado real; todo se renderiza por JS | `hipatia-oportunidades.html` |
| JavaScript | 23 ficheros, 295 KB en la cadena activa; `hipatia-data.js` los carga con 21 `document.write` (eran 18 ficheros y 17 cargas a mediodía) | `hipatia-data.js` |
| Capas añadidas esta tarde | `executive-practice-layer` (capacidades, preguntas de discovery y primer avance por práctica, sacados del Executive Deck de junio), `executive-entry-doors` (puertas con señales, límites, pregunta, primer paso y argumentos), `door-focus` (modo «puerta activa»), `corporate-offer-clarity`, y una auditoría de cumplimiento del deck con veredicto ámbar | ficheros nuevos, `auditoria-20260903-entelgy-executive-deck.md` |
| Vistas | Home · Relato corporativo (general y LATAM) · Prácticas (5) · Ficha de práctica con puertas de entrada y modo «puerta activa» · Biblioteca · Estar al día · Espacio de trabajo (reunión, abrir conversación, propuesta) | render |
| Puertas de entrada (versión 17:47) | Process Intelligence: Inteligencia de procesos · Automatización y agentes IA. Software Development: Modernización · Mantenimiento evolutivo · Asistencia técnica aumentada (Spec-Driven y Factoría SEAS pasan a «capacidades», no a puertas). Data & AI: Gobierno del dato · Gobernanza de modelos e IA · Analítica para decidir · Analítica predictiva y operación de modelos. Smart Operations: Puesto de trabajo · Infraestructura crítica. IA + Digital Change: IAbility · PreservIA · Oficina de Gobernanza Humana de la IA | `hipatia-executive-entry-doors.js` |
| Catálogo | 74 materiales: 33 vigentes, 41 en revisión; 33 salen al cliente, 25 internos, 16 con validación | vista Biblioteca |
| Documentación | 12 documentos en `docs/`: visión, arquitectura, guardrails, matriz de continuidad con hipatia2, piloto | `docs/` |
| Identidad | Tokens Entelgy reales (`entelgy-design-tokens.css`: navy #041C2C, naranja #E05730, morado #855AC6, DIN + Roboto) más una capa `hipatia-brand-refresh.css` | ficheros CSS |

Método: lectura del código y los documentos de ambas, renderizado con Chromium a escritorio y móvil, captura de cada vista, extracción del texto real que ve el usuario y contraste con los documentos que describen cada propuesta. Donde el documento y el código discrepan, manda el código.

---

## 2 · Criterios de auditoría

No invento criterios: uso la métrica del propio proyecto y lo que dijo el equipo comercial.

**Los cinco de la propuesta a Entelgy** (la métrica «de 4 a 9», `guberna-propuesta`): claridad de portfolio, confianza para argumentar, facilidad de acceso, actualización del contenido y canal de dudas. Son las cinco dimensiones que se medirán al cierre, así que son las que tienen que subir.

**Las cuatro señales del Menti** (`estatus-v1-modernizacion.md` §2), que son la voz del cliente real: que no choque con el CRM, que no abrume, que esté vivo y con dueño, y que dé visión de mercado.

**Cuatro criterios de interfaz y construcción** que ninguna encuesta pide pero que deciden si el portal se usa: tiempo hasta una acción útil (cuántos clics desde la entrada hasta algo que el comercial se lleva a una reunión), honestidad del estado (qué está hecho, qué es demo, qué es futuro), identidad Entelgy y accesibilidad, y coste de replicar a las cinco prácticas.

Puntuación de 1 a 5 por criterio, con la justificación al lado. La nota no es lo importante; lo importante es dónde se separan.

| Criterio | P1 · hipatia2 | P2 · oportunidades | Dónde se separan |
|---|---|---|---|
| Claridad de portfolio | 2 | 5 | P1 solo enseña una práctica y deja las otras cinco en «en preparación». P2 muestra las cinco con subprácticas, responsable y relato común, y resuelve Process Intelligence como una práctica con dos puertas. |
| Confianza para argumentar | 5 | 2 | P1 da al comercial el diferenciador que puede defender (Foreworth, financiar desde el mantenimiento), la objeción con respuesta, tres frases por cuenta y seis casos con cifra. P2 da frases de marco («modernizar no es actualizar por actualizar») que no aguantan delante de un CIO. |
| Facilidad de acceso | 3 | 4 | P1 obliga a acreditarse para usar las herramientas y se navega como una presentación (flechas, 1/10). P2 entra por la situación comercial en un clic. Ninguna tiene URLs por pantalla. |
| Actualización del contenido | 4 | 4 | Las dos tienen sello de vigencia y dueño por pieza. P1 lo aplica a 20 piezas reales con fecha de revisión; P2 lo generaliza a 74 pero 41 están «en revisión» y ninguna tiene fecha visible en la ficha. |
| Canal de dudas | 4 | 2 | P1 tiene contactos por servicio con primero y segundo, canal de Teams y el bucle de feedback con trazabilidad. P2 lo reduce a «contacta a través de los canales internos habituales». |
| No choca con el CRM | 4 | 4 | Las dos lo encuadran bien. P1 con la banda «el CRM sigue siendo el registro único»; P2 retirando «Mis cuentas» y dejándolo para una fase 2 (`feedback-adopcion-comercial.md`). |
| No abruma | 2 | 4 | P1 es densa: el recorrido son 32.000 caracteres de texto y el Menti lo dijo cuatro veces. P2 ordena en bloques cortos con jerarquía clara. |
| Vivo y con dueño | 4 | 3 | P1 nombra al dueño y la fecha en cada cosa que falta. P2 nombra al responsable de práctica pero no de cada hueco. |
| Visión de mercado | 2 | 1 | P1 tiene el benchmark en la trastienda del repositorio. P2 solo lo tiene como pieza interna «en revisión» de Data & AI. Las dos lo dejan para después, con razón. |
| Tiempo hasta acción útil | 3 | 3 | P1: cuatro pasos hasta el correo, pero el correo es bueno. P2: dos clics hasta el correo, pero el correo es genérico y sin destinatario. |
| Honestidad del estado | 4 | 3 | P1 marca «en preparación · dueño · fecha» en los agentes, pero simula resultados (Lantia analizada «hace unos segundos»). P2 no simula agentes, pero afirma «materiales reales» y «74 materiales» cuando 41 están sin validar y ningún enlace lleva a un documento. |
| Identidad y accesibilidad | 3 | 3 | P1 usa una paleta provisional (Hanken Grotesk, morado #7C4DBC) que no es la corporativa. P2 usa los tokens Entelgy reales, pero tiene dos fallos de contraste graves (las objeciones del Kit se leen en gris claro sobre coral claro; el relato corporativo del espacio de trabajo, en gris sobre blanco). |
| Coste de replicar a cinco prácticas | 1 | 4 | P1 tiene el contenido dentro del HTML de 190 KB; replicar es copiar y editar a mano. P2 separa datos de interfaz, aunque los datos están repartidos en 18 ficheros parcheados unos sobre otros. |

Lectura: P1 gana en todo lo que tiene que ver con **qué se dice**; P2 gana en todo lo que tiene que ver con **dónde está cada cosa**. Ninguna gana en cómo se construye.

---

## 3 · Auditoría de la propuesta 1 · hipatia2

### Contenidos

Lo que tiene es difícil de conseguir y no se puede perder: el diferenciador de Modernización formulado para que un comercial lo defienda ante un CFO; la señal de cuenta («una aplicación que nadie quiere tocar»); la objeción principal y su respuesta; el cierre único (Assessment de dos semanas); cuatro keynotes por dolor y tres frases a medida de Grupo Lantia con la regla de las tres frases; seis casos con resultado, redacción completa y sign-off del PM; las cinco preguntas de acreditación con distractores revisados; el autodiagnóstico de diez preguntas con pesos, umbrales y frases de lectura; y una taxonomía del repositorio en cuatro zonas (para conocer, con cliente, referencias, histórico) con la regla de Jorge de 5-6 piezas por zona.

Lo que le falta o sobra: solo hay una práctica, y las otras cinco tarjetas de la portada son promesas; la portada mezcla dos audiencias (el as-is para Dirección y el menú de prácticas para el comercial) y el recorrido está pensado para enseñarse, no para usarse a diario (la barra inferior lo dice: «el uso diario abrirá directo en el menú»); el escaneo de cuenta y el mapa de contactos son una demo fija de Lantia disfrazada de herramienta, aunque el pie lo aclare; y el texto es denso, con cuatro comentarios del Menti señalándolo y una segunda poda aplicada que todavía deja páginas largas.

Dos detalles de contenido que hay que arrastrar a la v3 porque son decisiones tomadas, no opiniones: el Assessment se cuenta siempre como «dos semanas» (decisión del 16 jul) y las cifras de venta se usan siempre como rango, nunca como garantía (regla de Jorge del 14 jul, `paquete-jorge/01`).

### Interfaz

Aciertos: la home de área con la espina del recorrido (entrada una vez → por cada cuenta → profundidad → quién te ayuda) explica el modelo en una pantalla; el menú lateral con secciones numeradas orienta; los chips de estado (agente / SM, citable / confirmar por cuenta, vigente / revisar / pendiente, en preparación con dueño y fecha) son un vocabulario visual completo; el dossier imprimible y la ficha modal por pieza son útiles de verdad.

Problemas: navegación de presentación (flechas, puntos, 1/10, teclas) que no es la de un portal; sin URL por paso, el estado se pierde al recargar; la acreditación bloquea las herramientas antes de haberlas probado (el Menti lo cuestionó y el propio `hallazgos-y-guardrails.md` de P2 lo señala con razón); tres estilos visuales distintos entre la portada (oscura, morada), el índice de Modernización (`styles.css`, claro) y el recorrido (claro con lateral); paleta y tipografía provisionales, no las de la guía Entelgy; en móvil la espina se apila en tarjetas de tres columnas que se cortan.

### Construcción

Un fichero de 190 KB con todo dentro. Sirve para la demo, no para mantener cinco prácticas. No hay modelo de datos: el contenido vive en el HTML.

---

## 4 · Auditoría de la propuesta 2 · hipatia-oportunidades

### Contenidos

Aciertos de fondo: la arquitectura en tres capas (relato corporativo → oferta de cinco prácticas → trabajo de una oportunidad) es la correcta para Hipatia completo; la decisión de que la entrada sea la situación comercial (tengo una reunión / quiero abrir / me piden propuesta) y no la práctica responde a lo que hace un comercial de verdad; la ficha de práctica tiene la estructura buena (qué cubre, qué no prometer, pregunta común, puertas de entrada, tarjeta, kit antes/en/después, materiales, referencias, a quién llamar, aprendizaje de la calle); el relato corporativo con tres velocidades (60 segundos, cuatro entradas, profundidad) y el método Entender-Diseñar-Implantar-Adoptar-Medir es material que hoy no existe en ningún sitio para el comercial; las reglas de gobierno (`arquitectura-de-contenido.md`: propietario y fecha obligatorios, «sale al cliente» como decisión editorial explícita, un activo vencido se marca y no desaparece) son mejores que las de P1 y hay que adoptarlas tal cual; y la etiqueta de confianza en tres niveles (hecho con fuente y fecha, hipótesis, borrador de Hipatia) es la mejor idea nueva de las dos propuestas.

**Lo que cambia con la versión de las 17:47.** Tres cosas mejoran y hay que recogerlas en la v3. Primera: el modo «puerta activa» (`hipatia-door-focus.js`): al elegir Modernización, la página deja de ser la ficha de Software Development con un ángulo debajo y pasa a ser la página de Modernización, con su cabecera, su especialista y solo sus materiales; es lo más parecido a la home de área de hipatia2 y es la forma correcta de resolver práctica y subpráctica sin dos páginas. Segunda: el bloque «cuando la señal ya está clara» por práctica (`hipatia-executive-practice-layer.js`), con cuatro capacidades, tres preguntas de discovery y un primer avance con plazo (Assessment de modernización de dos semanas, Diagnóstico Data Driven de seis, Assessment del puesto de trabajo, Diagnóstico de madurez en adopción), extraído del Executive Deck de junio y con su auditoría de cumplimiento hecha; es el primer contenido de P2 con fuente citada, y coincide con el canon de hipatia2 en las «dos semanas». Tercera: el fallo de contraste de las objeciones del Kit está corregido (queda el del relato corporativo dentro del espacio de trabajo).

Dos cosas cambian y hay que decidirlas, no adoptarlas sin más. Software Development pasa de cinco puertas a tres (Modernización, Mantenimiento evolutivo, Asistencia técnica aumentada): Spec-Driven Development y Factoría SEAS dejan de ser subprácticas y pasan a ser «capacidades» de la práctica (Especificar, Aumentar). Hipatia2 y el hub las tenían como cinco. Es una lectura del Executive Deck, no una decisión de Jorge; hay que confirmarla con él (supuesto 9). Y la propuesta 2 sigue creciendo por capas: 21 cargas encadenadas, dos más que a mediodía, cada una reescribiendo el DOM de la anterior con un `MutationObserver`; el veredicto de construcción no cambia, se refuerza.

Lo que no cambia: el contenido validado de Modernización sigue sin estar (la búsqueda de Foreworth, DORA, AI Act, Nasertic, Lantia, keynotes, acreditación y autodiagnóstico en las capas nuevas vuelve a dar cero), el espacio de trabajo sigue sin escenarios y con el mismo correo genérico, y la home es idéntica.

Problemas de fondo, y son serios:

1. **Está por detrás del estado validado de Modernización.** Los seis casos que Jorge firmó como citables el 16 de julio aparecen como «Con validación · En revisión» (Nasertic, UNED, fichas sectoriales). En el código, `hipatia-hipatia2-continuity.js` deja explícitamente los mensajes heredados «como pendiente de extracción para no sustituirlos por copy nuevo», y la búsqueda en todo el JS no encuentra Foreworth, DORA, AI Act, «9 meses», «1.000 h», Lantia, keynote ni autodiagnóstico. Es decir: la propuesta 2 reconoce que no ha migrado el contenido y lo suple con texto de marco. Si se enseñara así a Jorge, retrocedería dos meses de trabajo.
2. **Los guiones son de plantilla.** El correo del espacio de trabajo es el mismo para reunión, prospección y propuesta salvo una frase, va «Para: contacto por confirmar» y lo firma «Equipo Entelgy». La pregunta de partida de la práctica y de la subpráctica es casi la misma. Comparado con el correo de Lantia de P1 (destinataria, sector, gancho regulatorio, enlace al autodiagnóstico), es un paso atrás en «confianza para argumentar».
3. **Los tres escenarios ficticios que prometen los documentos no están en el código.** `piloto-y-validacion.md` define Asegura Norte, Mercurio Logística y Alba Energía; el espacio de trabajo actual no tiene ningún escenario (la búsqueda en el código no los encuentra). El espacio de trabajo hoy es un formulario vacío con texto genérico.
4. **Afirma más de lo que tiene.** La home dice «materiales reales» y «74 materiales en Biblioteca»; 41 están en revisión, las fichas que he abierto no muestran fecha de última revisión («confirma la vigencia con la persona responsable») y ningún activo tiene enlace al documento. P1 resolvió esto en julio con `data-doc` y «enlace directo pendiente».
5. **El canal de dudas desaparece.** «A quién llamar» se reduce al nombre del responsable y «los canales internos habituales». P1 tenía primero y segundo contacto por servicio, Teams y feedback con trazabilidad; el Menti pidió justo eso (señal 3 y 5).
6. **Retira la acreditación y el autodiagnóstico sin sustituirlos.** La decisión de no bloquear herramientas es buena; eliminar la acreditación y el autodiagnóstico del todo pierde dos piezas validadas y una fuente de leads que P1 sí explica. Se pueden hacer opcionales, no borrar.

### Interfaz

Aciertos: jerarquía visual clara, bloques numerados (01 compañía, 02 oferta, 03 siguiente paso, 04 acceso directo), tipografía Entelgy, responsive correcto en móvil (la home a 390 px se lee de arriba abajo sin cortes), estados en chips de color con leyenda («cómo leer el briefing»), modal de ficha por activo, filtros de biblioteca por área, uso, tipo y estado.

Problemas: un fallo de contraste que impide leer el relato corporativo dentro del espacio de trabajo (gris claro sobre blanco; el de las objeciones del Kit, que tenía la versión de mediodía, ya está corregido), consecuencia de la capa `brand-refresh` sobre estilos previos; el naranja se usa como color de todos los botones primarios, en contra de la contención que pide la guía Entelgy; no hay URL por vista ni por práctica (estado en memoria; recargar vuelve a la home); la barra superior superpone cuatro destinos y un botón naranja que compite con el CTA de la home; el espacio de trabajo tiene el selector de práctica y ángulo en un lateral que en móvil se pierde; y la ficha de práctica es larga (5.000 px) sin índice lateral.

### Construcción

Un HTML casi vacío que se rellena por JS con 23 ficheros cargados por `document.write` en cadena, donde cada fichero sobreescribe funciones del anterior (`practiceView`, `libraryView`, `workView` y `render` están definidas dos veces) o reescribe el DOM ya pintado con un `MutationObserver` (las cuatro capas de esta tarde). Es el rastro de una sesión de iteración rápida, no una base. Con esa estructura, un error en cualquier capa deja la página en blanco, y no hay forma de saber qué contenido manda sin leer los 23 ficheros en orden. No se hereda: se toma el modelo de datos (que es bueno, y con las puertas de esta tarde está más completo) y se reescribe la interfaz.

---

## 5 · Veredicto elemento a elemento

> Revisión 4: con los principios de MA (§0.1) cambian estas filas. *Acreditación:* fuera de la v3 (las cinco preguntas se guardan en el JSON para una futura «formación»). *Estado de la cuenta, primer contacto, escenarios de trabajo:* fuera; el correo de apertura y el autodiagnóstico pasan a ser materiales de Modernización. *Kit de visita:* pasa a «para prepararte», plegado dentro de la ficha de solución. *Etapa 2:* una pantalla fuera del menú. *Navegación:* tres niveles, cabecera con buscador, sin situaciones. El resto de filas se mantiene.

Cada fila dice de dónde sale el elemento en la v3. «Híbrido» significa la estructura de una con el contenido de la otra.

| Elemento | Veredicto | Cómo queda en la v3 |
|---|---|---|
| Portada | Híbrido | Estructura de P2 (compañía · oferta · siguiente paso · acceso directo). Se añade, plegado y al final, el «punto de partida» de P1 (as-is con capturas y el to-be) para la demo a Dirección, accesible por URL propia. Sin frase «materiales reales» hasta que lo sean. |
| Relato corporativo | P2 | Se toma entero: 60 segundos, cuatro entradas, método cíclico, OTG, selector general / LATAM. Se le añade la etiqueta de vigencia y dueño como a cualquier pieza. |
| Mapa de prácticas | P2 | Cinco prácticas en el orden de P2, con responsable y subprácticas. Ciclo de Software de P1 pasa a ser Software Development con sus cinco puertas (que ya coinciden). |
| Ficha de práctica | P2, estructura | Los bloques de P2 (qué cubre, qué no prometer, pregunta, puertas, «cuando la señal ya está clara» con capacidades, discovery y primer avance, tarjeta, kit, después, materiales, referencias, a quién llamar, aprendizaje). Con el modo «puerta activa» de la versión 17:47: la subpráctica es una página propia con URL, no un ángulo dentro de la práctica. Con índice lateral tipo P1 porque es larga. |
| Tarjeta de entrada | P1, contenido | «Si solo te llevas tres frases» (señal, por qué nosotros, cómo abres), «¿es tu cuenta?», diferenciador defendible, objeción principal, cierre único, y el plegable «más munición» de P1. Sustituye a la tarjeta genérica de P2. |
| Acreditación | Híbrido | Se conserva con las cinco preguntas validadas, pero opcional y fuera del camino: no bloquea nada. Da un sello visible en la práctica y deja traza. Es la respuesta a la regla de P2 («nunca impedir preparar una reunión») sin perder la pieza. |
| Estado de la cuenta (agente) | Híbrido | Se mantiene como paso del espacio de oportunidad, pero con el patrón de P2: el comercial escribe lo que sabe (hecho / hipótesis / borrador) y Hipatia no simula un escaneo. Lantia queda como escenario de ejemplo etiquetado «ejemplo», no como resultado «analizado hace unos segundos». El agente en vivo, como en P1: «en preparación · dueño · fecha». |
| Primer contacto (correo) | P1 | El correo de Lantia como patrón: destinataria, sector, gancho, enlace opcional al autodiagnóstico, firma personal. Un correo por escenario, no uno genérico. Marcado «borrador de Hipatia · editable». |
| Autodiagnóstico | P1 | Se conserva como pieza propia por cuenta (URL externa), con las diez preguntas, pesos y umbrales tal como están, y el pendiente de validación de Jorge (P0–P5 de `paquete-jorge/02`) visible en la ficha. |
| Kit de visita | Híbrido | Estructura antes / en / después de P2, contenido de P1: las tres frases por cuenta con su regla, pitch por rol (CFO, CIO, CTO, Dir. Ops), objeciones con respuesta, preguntas de cualificación, tres referencias destacadas, dossier imprimible. |
| Escenarios de trabajo | P1 + docs de P2 | Grupo Lantia (reunión) tal como está en P1, más Mercurio Logística (abrir) y Alba Energía (propuesta) de `piloto-y-validacion.md`, escritos con el nivel de detalle de Lantia. Todo etiquetado «escenario ficticio». |
| Biblioteca | P2, estructura · P1, reglas | Biblioteca única con filtros de P2 (área, uso, tipo, estado) más el filtro de sector de P1. Cada ficha con los ocho metadatos de `arquitectura-de-contenido.md`, la fecha de revisión visible, el chip agente / SM de P1 y el botón «abrir el documento» con «enlace pendiente» cuando no lo hay. Las cuatro zonas de P1 se convierten en el filtro «uso» de P2 (son lo mismo con otro nombre). |
| Referencias y citabilidad | P1, estado · P2, regla | Los seis casos de Modernización citables con sign-off del PM (jul 2026) y redacción completa, con la leyenda de uso. La regla de P2 («elegir la referencia por parecido de situación, no por notoriedad») se añade al pie. Corner WK sigue en «confirmar». |
| Contactos del área | P1 | Primero y segundo contacto por servicio, canal de Teams, «en preparación · dueño · fecha» donde falte. P2 no tiene nada equivalente. |
| Novedades y feedback | P1, funcional · P2, criterio | El bucle en dos sentidos de P1 (novedades del PM por Outlook y Teams, feedback en un clic con trazabilidad), con el criterio editorial de P2 para «Estar al día»: solo entra lo que cambia un mensaje, una prueba, una disponibilidad o una condición de uso. Sin simular envío: el botón de feedback abre Teams o correo hasta que exista canal. |
| Etiquetas de confianza | P2 | Hecho (fuente y fecha) / hipótesis / borrador de Hipatia, en todo el espacio de oportunidad. |
| Vocabulario de estados | P1 | Vigente / revisar / pendiente · citable / confirmar por cuenta · sale al cliente / interno / con validación · agente / SM · en preparación con dueño y fecha. P2 usa casi los mismos; se unifican en los de P1 porque el equipo comercial ya los ha visto. |
| Etapa 2 | P1, reducido | Una sola pantalla al final, «lo que viene», con el escáner de territorio y el panel del PM. Sin peso en la navegación. |
| Identidad visual | P2 | Tokens Entelgy (`entelgy-design-tokens.css`) tal cual. Naranja solo para el CTA principal de cada pantalla, nunca en más de un botón por vista. Morado para estados y chips. Corregidos los dos contrastes. |
| Navegación | Ninguna | Barra superior con cinco destinos (Inicio · Entelgy · Prácticas · Biblioteca · Contactos) y un CTA; menú lateral dentro de práctica y de espacio de oportunidad; URL por pantalla. Sin flechas ni contador de presentación. |
| Construcción | Ninguna | Sitio estático limpio: HTML por pantalla, un CSS, un JS pequeño para filtros y modales, y un fichero de datos por práctica. Desplegado como P1 (Worker con assets, Cloudflare Access). |

---

## 6 · Especificación de la v3

### 6.1 Principios

0. Los dos de MA mandan sobre los demás: nadie tiene que explicar cómo se usa, y cada página responde primero a «qué vendemos y por qué Entelgy» y después a «qué le doy al cliente» (§0.1).
1. Exploración clara antes que acción: la portada enseña la oferta entera en una pantalla; la acción (preparar una reunión) vive dentro de cada solución, plegada (revisión 4; sustituye al «acción antes que exploración» de P2).
2. Nada bloquea a nadie: acreditación y aprendizaje son opcionales y dan sello, no llave (P2).
3. Cada afirmación lleva su etiqueta: hecho, hipótesis o borrador (P2).
4. Cada hueco lleva dueño y fecha: «en preparación · dueño · fecha», nunca una capacidad ficticia (P1).
5. El CRM es el registro único; Hipatia lo alimenta y no lo duplica (P1 y P2).
6. Una pieza, una fuente: Hipatia enlaza al documento real; no hace resúmenes que compitan con él (P2).
7. Cifras siempre como resultado de un caso concreto, nunca como promesa; el Assessment son dos semanas (P1, decisiones de julio).
8. El comercial que conocía hipatia2 reconoce su tarjeta y su kit sin formación (`matriz-continuidad-hipatia2.md`, criterio 5).

### 6.2 Mapa del sitio (revisión 4 · catálogo)

```
/                          Portada · Entelgy en una frase · 5 prácticas con su propuesta de valor · buscador · material más usado
/entelgy                   Relato corporativo · general | LATAM (de P2)
/practicas/<practica>      Qué cubre y qué no · propuesta de valor · soluciones · material común para cliente · responsable
/practicas/<practica>/<solucion>   Ficha de solución: propuesta · materiales para cliente por momento · «para prepararte» plegado · especialista
/materiales                Buscador y filtros (práctica · para cliente / interno · tipo · estado) · «para cliente» por defecto
/materiales/<pieza>        Ficha de la pieza (también como modal) · abrir el documento o «enlace pendiente»
/contactos                 Por práctica: responsable, especialista por solución, primero y segundo, Teams
/punto-de-partida          As-is y to-be (demo a Dirección) · fuera del menú
/lo-que-viene              Una pantalla · fuera del menú
```

Tres niveles y ninguno más. Cabecera única con cuatro destinos (Inicio · Entelgy · Prácticas · Materiales) más Contactos y el buscador siempre visible. Carpetas con `index.html`, sin hash y sin JS para pintar. Las rutas de `/oportunidad`, `/acreditacion` y `/autodiagnostico/<cuenta>` de la revisión 3 desaparecen del portal; el autodiagnóstico de Lantia se conserva como material («herramienta para enviar al cliente») con su URL de ejemplo.

### 6.3 Pantallas y bloques (revisión 4)

Regla general: cada página tiene los mismos bloques en el mismo orden, y responde primero a «qué vendemos y por qué Entelgy» y después a «qué le doy al cliente». Lo que no responde a ninguna de las dos va plegado.

**Portada.** Una pantalla, sin scroll largo. Arriba, Entelgy en una frase con enlace a `/entelgy`: una frase de verdad, dos líneas a 36 px como máximo (unos 110 caracteres), no el párrafo de 60 segundos, que vive en `/entelgy`. Las tarjetas de práctica llevan una propuesta de valor de una sola frase de hasta 90 caracteres (revisión 5, tras ver la primera build). En medio, las cinco prácticas como cinco tarjetas iguales: nombre, propuesta de valor en una línea y, en la parte baja de la tarjeta, sus soluciones como pequeñas cajas clicables que llevan directamente a la página de cada solución (matiz de Susana, 3 sep); debajo de la línea, el responsable y «ver práctica». Debajo, el buscador de materiales con cuatro accesos rápidos (decks para cliente · one-pagers · fichas de servicio · casos) y seis piezas elegidas por regla, no a mano (revisión 5, 3 sep): **una por práctica más una corporativa**. Para cada práctica, la pieza que cumple `sale_al_cliente = sí` y `estado = vigente`, con `momento = reunión` si la hay, y entre varias la de fecha de revisión más reciente; la sexta es el deck corporativo vigente. Si una práctica no tiene ninguna pieza que cumpla la regla, su tarjeta dice «material para cliente en preparación · dueño» y enlaza a la práctica: así la portada nunca enseña seis piezas de Modernización y cuatro prácticas invisibles. Las referencias no entran en este bloque (no son «para enviar»); viven bajo el acceso rápido «casos». Cuando exista medición de uso, la regla pasa a «la más usada del último mes» por práctica; hasta entonces, la más reciente, y el rótulo del bloque lo dice: «Lo más reciente, por práctica». Sin situaciones, sin contadores de materiales que no estén validados, sin cabecera de «demostrador» salvo mientras lo sea.

**Relato corporativo.** El de P2 tal cual (60 segundos, cuatro entradas, método, OTG, selector general / LATAM), con el material de apoyo como fichas de la biblioteca con su estado real.

**Práctica.** Cabecera con nombre, responsable y propuesta de valor en una frase. Bloque «qué cubre y qué no» (de P2). Bloque «capacidades» (los cuatro pasos y el primer avance de `hipatia-executive-practice-layer.js`). Las soluciones como tarjetas iguales: nombre, una línea, especialista. Material común para cliente (3-6 piezas) con «ver todo en Materiales». Responsable con canal.

**Solución.** Es la tarjeta de entrada de hipatia2 convertida en página, y es la página que más importa. Orden fijo:

1. *Cabecera:* nombre, práctica, especialista, propuesta de valor en una frase.
2. *La propuesta:* qué es · para quién (la señal que la delata) · por qué Entelgy (el diferenciador defendible) · la objeción que más vas a oír, con respuesta · el primer paso que se vende, con plazo (Assessment de dos semanas, Diagnóstico Data Driven de seis…) · «si te preguntan un detalle técnico, el especialista» con su nombre. Todo cabe en una pantalla; es el «si solo te llevas tres frases» de hipatia2 más el primer avance de P2.
3. *Material para el cliente:* tres columnas por momento, primer contacto · en la reunión · para dejar al cliente, con 1-3 piezas cada una (regla de Jorge: pocas y buenas), cada pieza con tipo, «sale al cliente», vigencia con fecha, y botón que abre el documento o dice «enlace pendiente». En Modernización: correo de apertura (plantilla) y autodiagnóstico (herramienta) · deck ejecutivo y one-pager · ficha de servicio.
4. *Referencias:* las citables con su frase de reunión y el sign-off; si no hay, «sin referencia autorizada · pídesela a [especialista]».
5. *Para prepararte* (plegado): pitch por rol, objeciones completas, preguntas de cualificación, dossier imprimible, y el enlace al material interno (mapa de dolores, argumentario, benchmark) marcado «no sale al cliente».
6. *¿Falta algo?* Un enlace que abre un correo al responsable con el asunto puesto.

**Materiales.** Buscador arriba, filtros a la izquierda (práctica, para cliente / interno / con validación, tipo, estado), «para cliente» marcado por defecto. Tarjeta de pieza con tipo, título, nota de uso en una línea, chips de uso y estado con fecha, dueño. Ficha con los metadatos de 6.4 y «abrir el documento». Las cuatro zonas de hipatia2 son el filtro de uso; el histórico es un filtro de estado.

**Contactos.** Por práctica: responsable, especialista por solución, primero y segundo, canal de Teams. Donde no haya datos validados, «en preparación · dueño: los SM · sept».

### 6.4 Modelo de datos

Un fichero JSON por práctica (`data/software-development.json`, etc.), uno corporativo, uno de escenarios y uno de personas. El código de Código puede generar las páginas desde ellos o incluirlos a mano; lo que importa es que el contenido no viva en el HTML.

```
practica
  id · nombre · orden · responsable · propuesta · que_cubre · que_no_prometer · pregunta_comun
  capacidades[] { paso · titulo · texto }        (bloque «cuando la señal ya está clara», de P2 17:47)
  discovery[]                                     (tres preguntas, de P2 17:47)
  subpracticas[]   (= puertas)
    id · nombre · una_linea · especialista · estado (vigente | en_preparacion) · dueño · fecha_objetivo
    tarjeta { señal · por_que_nosotros · como_abres · que_es · a_quien · diferenciador · objecion_principal { texto · respuesta } · cierre }
    kit { antes[] · en[] · objeciones[] { texto · respuesta } · preguntas_cualificacion[] · pitch_por_rol[] { rol · pregunta · le_mueve } · referencias_destacadas[] }
    kit_oportunidad { … }                         (el contrato de §8.2; se deriva de tarjeta y kit, más señales, primer_avance, correo_tipo[3], especialista)
    keynotes[] { dolor · frase · prueba · paso }
    acreditacion[] { pregunta · opciones[] · correcta · autor (jorge | guberna) · validada (bool) }
    materiales[] → ids de pieza

pieza
  id · titulo · tipo · practica · subpractica · zona (conocer | cliente | referencias | historico)
  sale_al_cliente (si | no | con_validacion) · confidencialidad · audiencia
  estado (vigente | revisar | pendiente) · fecha_revision · dueño · mantenida_por (agente | sm)
  citable (citable | confirmar_por_cuenta | no_aplica) · sign_off { quien · fecha }
  sector[] · momento_comercial · nota_de_uso · url_documento (o null → «enlace pendiente») · origen

referencia (es una pieza con) contexto · que_hicimos · resultado · frase_reunion · cifras[] { valor · verificada (bool) }

escenario
  id · situacion (reunion | abrir | propuesta) · cuenta · sector · etiqueta «ejemplo ficticio»
  lo_que_sabemos[] { texto · tipo (hecho | hipotesis | borrador) · fuente }
  personas[] { nombre · rol · confianza }
  tres_frases[] · correo { para · asunto · cuerpo } · autodiagnostico { url · resultado } · siguiente_paso

persona
  nombre · rol · practica · subpractica · orden (1 | 2) · canal · estado (validado | en_preparacion)
```

Regla de carga (de P2, `arquitectura-de-contenido.md`): una pieza no se publica sin dueño y fecha de revisión; «sale al cliente» es una decisión explícita, nunca una inferencia; una pieza vencida se marca y se retira de las recomendaciones, no desaparece. Regla de vigencia (revisión 6, acotada en revisión 8): una pieza con `sale_al_cliente` en `"si"` o `"con_validacion"` solo puede llevar `estado: "vigente"` si tiene `url_documento`; sin documento enlazado, el estado real es `revisar` aunque el contenido esté aprobado, porque «vigente» promete al comercial que puede abrirlo y entregarlo. La regla **no alcanza** a las piezas tipo `referencia` (su documento es el texto citable con sign-off que ya vive en la ficha, no un fichero aparte) ni a las piezas con `sale_al_cliente: "no"` (su «documento» es la propia página del portal — un mapa de dolores o una guía de discovery no se entregan como fichero, se leen ahí). Esto no es una inferencia sobre la calidad del contenido, es sobre si hay algo que abrir y entregar: una pieza con contenido validado pero sin URL sigue mostrando su nota de uso y su dueño, solo baja de estado hasta que se enlaza — y solo cuando ese enlace es una promesa real al comercial. Y al revés (revisión 9): tener enlace no basta. Si el dueño tiene cambios pendientes sobre la pieza — una lista de edits que espera un documento, cifras o logos sin autorizar, una edición sin confirmar —, el estado es `revisar` aunque el documento abra, porque «vigente» promete que lo que se abre es lo que se puede usar tal cual. La cautela de «confirma antes de compartir» no baja el estado: la expresan `sale_al_cliente: "con_validacion"` y `citable: "confirmar_por_cuenta"`, y una pieza puede ser `vigente` con las dos. Cada campo responde a una sola pregunta: `estado`, ¿es la versión buena y abre?; `sale_al_cliente`, ¿se la puedo dar?; `citable`, ¿puedo nombrar al cliente?

### 6.5 Vocabulario de estados (único, de P1)

| Familia | Valores | Dónde aparece |
|---|---|---|
| Vigencia | 🟢 vigente · 🟠 revisar · ⏳ pendiente (+ fecha) | toda pieza |
| Uso | sale al cliente · interno · con validación | toda pieza |
| Citabilidad | citable (sign-off · fecha) · confirmar por cuenta | referencias |
| Mantenimiento | 🤖 agente · ✍️ SM | toda pieza |
| Disponibilidad | en preparación · dueño · fecha objetivo | cualquier hueco |
| Confianza | hecho (fuente · fecha) · hipótesis · borrador de Hipatia | espacio de oportunidad |
| Acreditación | acreditado en el área (fecha) | cabecera de práctica |

### 6.6 Identidad visual

Tokens de `entelgy-design-tokens.css` sin capa de refresco encima: navy #041C2C para fondos oscuros y titulares, slate para texto secundario, morado #855AC6 para chips de estado y acentos, naranja #E05730 solo en el CTA principal de cada pantalla. DIN para titulares, Roboto para cuerpo, mono solo para etiquetas pequeñas. Contraste mínimo AA en todo texto; prohibido texto de color sobre fondo del mismo color con opacidad. Logotipo Entelgy de los ficheros `entelgy-logo-*.png` de `entelgychat`. Nada de morado #7C4DBC ni Hanken Grotesk de P1.

### 6.7 Construcción

Sitio estático: una carpeta por ruta con `index.html`, un `styles.css`, un `app.js` de menos de 20 KB para filtros, modales, acreditación e impresión, y los JSON de `data/`. Sin frameworks, sin `document.write`, sin capas que sobreescriban funciones. Cada página pinta su contenido sin JS (el JS solo mejora). Peso objetivo: ninguna página por encima de 150 KB con CSS y JS incluidos, imágenes aparte. Despliegue como P1: Worker de Cloudflare con `assets.directory = ./public`, Cloudflare Access con OTP para @entelgy.com. Autodeploy en push.

### 6.8 Criterios de aceptación de la v3 (revisión 4)

1. **Prueba de los cinco comerciales** (§0.1): cinco personas que no lo han visto reciben la URL sin explicación y resuelven los tres encargos; nadie pregunta cómo funciona.
2. Desde la portada, cualquier solución está a dos clics y cualquier material para cliente a tres, sin acreditarse ni elegir nada antes.
3. Las cinco prácticas y las once soluciones tienen página con los mismos bloques en el mismo orden; donde no hay contenido validado se ve «en preparación · dueño · fecha», no texto de relleno.
4. Modernización conserva íntegros: propuesta (tarjeta), seis casos citables con redacción y sign-off, material por momento con one-pager, ficha de servicio, correo de apertura y autodiagnóstico enlazados, y «para prepararte» con pitch por rol, objeciones, preguntas y dossier.
5. Toda pieza muestra uso, estado con fecha, dueño; ninguna cifra o caso aparece como citable sin sign-off registrado; ningún enlace roto (los pendientes dicen pendiente).
6. Ninguna pantalla afirma que un agente, un envío o una integración funcionan.
7. Cada pantalla tiene URL propia y sobrevive a recargar; el buscador está en todas.
8. Contraste AA en todo el texto; cero errores de consola; funciona a 390 px; ninguna página pasa de 150 KB sin imágenes.
9. Un comercial que usó hipatia2 reconoce la tarjeta, las referencias y los contactos sin explicación.

### 6.9 Qué no se construye en la v3 (revisión 4)

Espacio de oportunidad, selector de señales, escenarios ficticios, acreditación, recorrido guiado, agentes de cualquier tipo, asistente 80/20, integración con CRM, cuentas guardadas, envío real de feedback, autoenvejecimiento automático, panel del PM, calculadora de business case, visión sectorial y competencia. Todo queda en «lo que viene», una pantalla fuera del menú, con dueño donde lo haya. Los apartados §7 y §8 de este documento describen cómo se harían el asistente y el espacio de oportunidad cuando el uso del catálogo lo justifique; no forman parte de la v3.

---

## 7 · Fase 2 · Los agentes de hipatia2: cuáles tienen sentido, cuáles no, y dónde

> Revisión 4: este apartado describe la fase 2. En la v3 no hay agentes ni asistente (§0.1). Se mantiene porque las decisiones de qué se retira (mapa de contactos, escáner de territorio, panel del PM) siguen valiendo y porque el asistente 80/20 es lo primero que se añadiría después.

**El problema.** Hipatia2 nombra trece cosas como «agente», «se genera al momento», «próximamente» o «el sistema se anticipa», y solo una existe (el agente de preparación de visita de Digital Change). Las demás son maquetas con dueño y fecha, que era lo honesto en julio. Con el planteamiento de la propuesta 2 (no simular, ayudar solo si reduce trabajo, etiquetar hecho / hipótesis / borrador, gobierno de datos antes de conectar nada) hay que pasar cada una por tres preguntas: ¿es un agente o es una regla?, ¿sirve a todas las prácticas o solo a Modernización?, ¿qué datos necesita y de quién son?

**La conclusión antes de la tabla.** De trece, quedan un agente, dos automatismos, dos integraciones y dos patrones sin modelo detrás (el autodiagnóstico y sus reglas de puntuación). Lo demás se retira o se reformula. Y el agente es uno solo, no cuatro: el mismo asistente, con el contenido de cada práctica como base y con cuatro salidas distintas (frases, pitch, correo, dossier). Hipatia2 lo contaba como cuatro agentes porque los enseñaba en cuatro paradas del recorrido; en la v3 vive en un solo sitio, el espacio de oportunidad.

| Lo que hipatia2 llama agente | Qué es en realidad | ¿Tiene sentido ahora? | Dónde vive en la v3 | Condición |
|---|---|---|---|---|
| Agente de preparación de visita (hipatia2 lo atribuía al de Digital Change) | Un asistente que, con cuenta + ámbito, devuelve pitch por rol, objeciones y referencias | **Sí, y es el núcleo, pero lo hacemos nosotros** (decisión del 3 sep): no se depende del asistente de Digital Change. Un asistente propio, pequeño, con una sola función: adaptar el kit de la puerta a esta cuenta (§7.1). Transversal: funciona igual para cualquier puerta si la puerta le da su contenido | Espacio de oportunidad · bloques «qué defender» y «qué hacer ahora» | Solo usa el JSON de la puerta y piezas con ficha en Biblioteca; toda salida etiquetada «borrador de Hipatia»; no inventa referencias ni cifras. En la v3 se enseña con contenido predeterminado por escenario; el asistente entra en la v3.1 |
| Correo de apertura | Otra salida del mismo asistente | **Sí.** Transversal | Espacio de oportunidad · «qué hacer ahora» | Un correo por situación y puerta, con destinatario, sector y firma personal; nunca «Equipo Entelgy» |
| «Pitch personalizado» del repositorio | La misma salida, listada como pieza | **No como pieza.** Es un duplicado | Desaparece de Biblioteca; el enlace lleva al espacio de oportunidad | Principio de P2: lo generado no se guarda como activo |
| Autodiagnóstico por cuenta con URL propia | Un formulario con puntuación y una página generada por plantilla; no es un agente | **Sí, como patrón por puerta, no como agente.** Modernización lo tiene validado; otras puertas tienen su equivalente en el «primer avance» (Diagnóstico Data Driven, Assessment del puesto) | Ficha de puerta · «instrumento de cualificación» + página externa `/autodiagnostico/<cuenta>` | El lead que vuelve es un dato de tercero: consentimiento y destino (CRM) antes de activarlo en real. En la v3, solo Lantia como ejemplo |
| «Señales para preventa · derivado de las respuestas» | Reglas de puntuación (umbrales, frases de lectura) | **Sí, como reglas.** Deja de llamarse agente | Resultado del autodiagnóstico | Ninguna: es determinista y ya está validado en `paquete-jorge/02` (pendiente P0–P5) |
| Escaneo de cuenta (web, ofertas de empleo, prensa, registro) | Un agente de investigación sobre fuentes públicas | **Sí, pero en fase 2, y cambia de sitio.** Es la pieza más transversal de todas: el mismo escaneo sirve a las cinco prácticas si devuelve señales y no diagnósticos («PL/SQL en las ofertas de empleo» es señal de Modernización; «rotación en operaciones» lo es de Process Intelligence). Encaja exacto en «lo que sabemos» con hecho + fuente + fecha | Espacio de oportunidad · «lo que sabemos» | Gobierno de datos de `hallazgos-y-guardrails.md` (finalidad, fuentes, corrección) antes de conectarlo; solo empresa, no personas; confianza visible por dato. En la v3, «en preparación · dueño por asignar · con la decisión de plataforma» |
| Localizador / mapa de contactos (cargo, vía de contacto, confianza) | Un agente que busca personas en fuentes públicas | **No, así no.** Son datos personales de terceros sin base de tratamiento, y el CRM es el registro único de contactos (señal 1 del Menti) | Se reformula: «a quién escribo» se responde con el rol comprador tipo de cada puerta (CFO / CIO / COO / CDO…) más, en fase CRM, el contacto que ya exista en el CRM | Se retira la maqueta de «Marta Ruiz · de perfil público»; queda el rol, no la persona |
| Cruce con el CRM («te avisa si la cuenta ya es cliente») | Una integración de consulta | **Sí, y es la primera integración que hay que hacer.** Responde a la señal más repetida del Menti | Espacio de oportunidad · cabecera de la cuenta | Solo lectura; muestra «ya es cliente · titular · servicios», nada más. En la v3, «en preparación» |
| Aviso automático de vigencia (seis meses sin revisar → 🟠 → aviso al dueño y al PM) | Una regla programada sobre los metadatos de Biblioteca | **Sí, y es barato.** Es la respuesta a «¿quién lo mantiene?» sin depender de nadie | Biblioteca · gobierno | Necesita fecha de revisión y dueño en cada pieza, que la v3 ya exige. Se puede hacer con un script diario sobre los JSON y un correo |
| Encaminado feedback → PM y recordatorio si el PM lleva semanas sin publicar | Un flujo por Teams u Outlook, no un agente | **Sí.** Transversal, un canal por práctica | Novedades y feedback | Canal y dueño nombrados (punto 11 del estatus). Hasta entonces, el botón compone el mensaje y no guarda nada |
| Escáner de territorio (Etapa 2: «qué cuentas tienen un dolor activo esta semana») | Escaneo de cuenta + cartera del CRM + push proactivo | **No por ahora.** Necesita las dos integraciones anteriores funcionando y confianza ganada; el propio P2 lo aparca con razón («después de validar confianza, contenido y uso repetido») | «Lo que viene» | Se reconsidera cuando el escaneo bajo demanda lleve un trimestre en uso |
| Panel del PM / Intelligence (leads, % acreditado, qué material abre reuniones) | Analítica de uso | **No por ahora.** Es seguimiento individual, que P2 excluye del piloto, y necesita medir uso real | «Lo que viene» | Reglas de consentimiento interno antes de medir a personas; lo agregado (uso por pieza) puede salir antes |
| Suscripción / alerta de contactos | Depende del mapa de contactos | **No.** Cae con él | Se retira | — |

Dos consecuencias para el vocabulario de la v3. El chip «🤖 agente» de hipatia2 significaba «esta pieza se mantiene sola»; en la v3 lo generado no es una pieza, así que el chip desaparece de Biblioteca y solo queda «✍️ mantenida por SM» con fecha. Y lo que sale del asistente en el espacio de oportunidad lleva siempre «borrador de Hipatia · edítalo», nunca «🤖 agente» como si fuera una fuente.

### 7.1 El asistente propio · el 80/20

Lo que un comercial necesita de verdad no es que le escaneen la empresa: es saber qué decir a este cliente el jueves. Eso es el 80 %, y se cubre con una sola función:

> **Adapta el kit de la puerta a esta cuenta.** Entrada: la puerta elegida (su JSON entero: tarjeta, frases, roles, objeciones, referencias citables, primer avance), la situación, y lo que el comercial ha escrito (cuenta, sector, señales marcadas, dos o tres frases de contexto). Salida: las tres frases para esta cuenta, el correo con destinatario, sector y gancho rellenos, tres preguntas concretas para la reunión y dos riesgos u objeciones que conviene anticipar. Todo etiquetado «borrador de Hipatia · edítalo».

Reglas que no se negocian: no puede añadir cifras, casos ni nombres de cliente que no estén en el JSON de la puerta con `sign_off`; si la puerta no tiene referencia citable, lo dice; no consulta ninguna fuente externa; no guarda nada. Con esas reglas el gobierno de datos es trivial (no hay datos de terceros) y la confianza se gana rápido porque nunca inventa.

Construcción: un endpoint en el mismo Worker de Cloudflare que sirve el portal, una llamada a un modelo con un único prompt y el JSON de la puerta como contexto, y el resultado pintado en los cuatro bloques. Del orden de dos días de trabajo, sin plataforma nueva que decidir. La misma llamada puede hacer el 20 % restante que sí vale: proponer la puerta a partir de texto libre («me han dicho que pierden horas conciliando pedidos a mano») cuando el comercial no quiere marcar señales.

Secuencia realista, que es la que hay que contar a MA en lugar de «los agentes llegan en V2»: v3 (ahora) es todo predeterminado por escenario, sin modelo detrás, y ya se puede enseñar; v3.1 añade el asistente propio del 80/20 sobre los JSON de puerta y sin datos externos; después, el cruce de lectura con el CRM; después, el escaneo público bajo demanda con gobierno de datos firmado; y solo entonces se habla de anticiparse.

---

## 8 · Fase 2 · El espacio de oportunidad, transversal a las cinco prácticas

> Revisión 4: este apartado describe la fase 2. En la v3 el comercial prepara la reunión desde la ficha de solución («para prepararte»), sin situaciones ni señales (§0.1). El espacio de oportunidad se reconsidera cuando el catálogo lleve un tiempo en uso y se vea qué preparan de verdad los comerciales.

**El problema.** En hipatia2 el trabajo por cuenta (mirar la cuenta → correo → kit) está dentro de Modernización, y replicarlo sería construir cinco recorridos. En la propuesta 2 el espacio de oportunidad es transversal por definición, pero hoy es un formulario con un desplegable de práctica y otro de puerta, y el resultado es el mismo texto de marco cambie lo que cambie. Ninguna de las dos resuelve lo que de verdad hace transversal al espacio: cómo pasa el comercial de «tengo una reunión con una aseguradora que no puede tocar su core» a «esto es Modernización, y esto es lo que digo», sin conocer las cinco prácticas.

**La idea que lo hace transversal: la señal es el índice, no la práctica.** Cada puerta de cada práctica declara tres señales (la versión 17:47 de P2 ya las tiene para las doce puertas; hipatia2 las tiene mejores para Modernización). Juntas son unas cuarenta frases del tipo «una aplicación que nadie quiere tocar», «horas que se escapan en reprocesos sin verlo con datos», «el conocimiento vive en dos cabezas que se jubilan». El comercial no elige práctica: reconoce señales. La señal lleva a la puerta, la puerta trae su kit, y el espacio monta la oportunidad. En la v3 esto es un selector determinista (marcas las señales que has oído, Hipatia propone la puerta principal y, si hay, una de apoyo); en la v3.1 lo hace el asistente a partir de lo que el comercial escribe. Es el mismo mecanismo con y sin modelo, que es lo que permite enseñarlo ya.

### 8.0 La imagen que lo explica: una mesa y doce cartuchos

Piensa en el espacio de oportunidad como una **mesa de trabajo fija** con cuatro cajones, siempre los mismos: lo que sabemos, qué defender, qué hacer ahora, qué falta por confirmar. La mesa no sabe nada de Modernización ni de Process Mining. Lo que sabe es qué forma tiene cada cajón: en «qué defender» caben tres frases, un pitch por rol, dos objeciones y una referencia; en «qué hacer ahora» caben un primer avance con plazo, un correo y un especialista.

Cada **puerta** de cada práctica es un **cartucho** que encaja en esa mesa: trae sus tres frases, sus roles, sus objeciones, su primer avance, su especialista (el contrato de §8.2). Hay doce cartuchos, uno por puerta. Modernización tiene el suyo completo desde julio; a los otros once les faltan piezas y eso es lo que se le pide a cada SM.

Con esa imagen, las tres versiones se ven de golpe. Hipatia2 es la mesa con el cartucho de Modernización soldado: funciona muy bien, pero no se puede cambiar. La propuesta 2 es la mesa vacía con un desplegable para elegir cartucho, pero los cartuchos están casi vacíos y el desplegable obliga a saber de antemano qué práctica es. La v3 es la mesa, los doce cartuchos con lo que cada uno tenga, y una forma de elegir cartucho sin saber de prácticas: las señales.

```
   El comercial          Hipatia elige el cartucho        La mesa (igual para todos)
   ─────────────         ─────────────────────────        ──────────────────────────
   situación             señal → puerta                   1 · Lo que sabemos
   cuenta · sector       (principal + apoyo)              2 · Qué defender
   señales que oyó   →   carga kit_oportunidad     →      3 · Qué hacer ahora
   lo que sabe           de esa puerta                    4 · Qué falta por confirmar
                                                                    ↓
                                                          dossier · correo · especialista
```

**Un ejemplo de principio a fin.** Ana tiene reunión el jueves con Mercurio Logística. El director de operaciones le dijo por teléfono que «perdemos horas conciliando pedidos a mano y no sabemos dónde». Ana no sabe si eso es Process Mining, Automatización, Data o qué.

Pantalla 1: elige «Tengo una reunión».

Pantalla 2: escribe «Mercurio Logística», sector logística, y ve una lista de unas treinta y seis señales en lenguaje de cliente, sin nombres de práctica. Marca dos: «se nos escapan horas en reprocesos y no lo vemos con datos» y «el equipo repite a mano tareas que podrían automatizarse». Hipatia responde: puerta principal Inteligencia de procesos (Carmen), puerta de apoyo Automatización y agentes IA (Carla), con una línea que explica por qué («primero se ve el proceso, después se decide qué automatizar»). Ana puede cambiarlo; no lo hace.

Pantalla 3, la mesa con el cartucho de Inteligencia de procesos puesto. Cajón 1: lo que ella escribió, con sus dos frases marcadas como *hecho* (las dijo el cliente) y una *hipótesis* que le propone la puerta («no tienen trazas de proceso en sus sistemas; confírmalo»); un hueco que dice «CRM · en preparación», sin simular nada. Cajón 2: la tarjeta de la puerta (señal, por qué Entelgy, cómo abrir), tres frases para esta cuenta (en la v3, las del escenario; en la v3.1, las adapta el asistente del §7.1 con lo que Ana escribió), el pitch según tenga delante al COO, al CFO o al CIO, dos objeciones con respuesta, y en referencias: «sin referencia autorizada para esta puerta · pídesela a Carmen». Cajón 3: el primer avance de la puerta, «Diagnóstico Data Driven · unas seis semanas · precio cerrado · valida alcance con Carmen», el correo con Mercurio, logística y su gancho ya puestos, y Carmen como especialista con la lista de lo que conviene llevarle. Cajón 4: tres preguntas para confirmar en la reunión. Abajo, «preparar dossier», que le da una hoja para llevar.

Si en la pantalla 2 Ana hubiera marcado «hay una aplicación que nadie quiere tocar porque quien la construyó ya no está», la misma mesa se habría llenado con el cartucho de Modernización: Jorge, el Assessment de dos semanas, Nasertic 9→3, las frases de DORA. Nada más cambia. Eso es lo transversal: el sitio, los cajones, las etiquetas, el correo, el dossier, el relevo al especialista y el feedback son una sola cosa; lo que cambia es el cartucho.

**Qué es de quién.** Lo transversal (se construye una vez): la mesa con sus cuatro cajones, el índice de señales, el mecanismo señal → puerta, las plantillas de correo y dossier, las etiquetas hecho / hipótesis / borrador, el relevo al especialista y el aprendizaje de la calle. Lo de cada práctica (lo trae cada SM): el cartucho de cada puerta. Lo de cada cuenta (lo pone el comercial y, después, el asistente y el CRM): lo que sabe, las señales, y la adaptación de frases y correo.

### 8.1 Cómo se recorre

1. **Situación.** Tengo una reunión · quiero abrir una conversación · me han pedido una propuesta. Son las tres cajas que ya tiene la portada de P2 y se quedan tal cual como entrada. Lo que cambia es lo que pasa al pulsarlas: en vez de un desplegable de práctica y ángulo, el selector de señales. La situación no cambia la estructura de la mesa; cambia el peso de los cajones y la plantilla del correo. *Reunión* pone arriba «qué defender» y «qué falta por confirmar», y el dossier es lo que se lleva. *Abrir* pone arriba «lo que sabemos» (señal e hipótesis, casi sin hechos), el correo es corto y de una sola idea, y aparece el instrumento de cualificación si la puerta lo tiene. *Propuesta* pone arriba «qué hacer ahora» con el primer avance, los límites de la puerta («qué no prometer») y los materiales de propuesta, y el relevo al especialista deja de ser opcional.
2. **Lo que sé.** Cuenta (texto libre, no se guarda), sector, y las señales que he oído, marcadas de la lista común. Opcional: lo que aporta el comercial, etiquetado como hecho o hipótesis por él mismo.
3. **Puerta.** Hipatia propone una puerta principal y, cuando dos señales apuntan a prácticas distintas, una puerta de apoyo («también encaja»). El comercial puede cambiarla. Con esto se responde, sin prometer visión estratégica, a la petición de cross-selling del Menti: la oportunidad puede llevar dos prácticas y se ve quién es el especialista de cada una.
4. **Los cuatro bloques**, iguales para todas las puertas (`arquitectura-de-contenido.md`), rellenos con el kit de la puerta elegida:
   - *Lo que sabemos:* lo que ha escrito el comercial (hecho / hipótesis), el sector, y, cuando exista, lo que devuelva el CRM y el escaneo (§7). Mientras no existan, el bloque lo dice y no simula.
   - *Qué defender:* tarjeta reducida de la puerta (señal, por qué nosotros, cómo abres), tres frases para esta cuenta (de escenario en la v3, del asistente después), pitch por rol comprador de esa práctica, dos objeciones con respuesta, una referencia citable o la frase «sin referencia autorizada para esta puerta».
   - *Qué hacer ahora:* el primer avance de la puerta (Assessment de dos semanas, Diagnóstico Data Driven de seis, Assessment del puesto de trabajo…), el correo editable, el instrumento de cualificación si la puerta lo tiene, y el especialista a quien pasar el relevo con la lista de «lo que conviene llevarle» de P2.
   - *Qué falta por confirmar:* las preguntas de cualificación de la puerta.
5. **Dossier.** Una hoja imprimible con la misma plantilla para cualquier puerta: cuenta, situación, puerta(s), tres frases, pitch del rol elegido, objeciones, preguntas, referencia, primer avance, especialista. Es el `build()` de hipatia2 generalizado.
6. **Aprendizaje de la calle.** Al cerrar, cuatro botones (señal nueva, objeción recurrente, material que faltó, referencia que ayudó) que componen el mensaje al PM de la puerta.

### 8.2 El contrato que tiene que cumplir cada puerta

Para enchufarse al espacio de oportunidad, una puerta aporta un «kit de oportunidad» mínimo. Es la plantilla que se le pide a cada Solution Manager y lo que hace comparable a las cinco prácticas (`arquitectura-de-contenido.md`: «sus salidas deben ser comparables: argumento, prueba, activo, contacto y siguiente acción»).

```
puerta.kit_oportunidad
  señales[3]                      frases que el comercial reconoce en boca del cliente
  pregunta_de_entrada             una
  tarjeta { señal · por_que_nosotros · como_abres }
  roles_compradores[2-4]          { rol · pregunta · le_mueve }
  objeciones[2]                   { texto · respuesta }
  preguntas_cualificacion[3]
  referencias_citables[0-3]       solo con sign_off; si 0, se muestra «sin referencia autorizada»
  primer_avance                   { nombre · plazo · que_entrega · que_no_regala }
  instrumento_cualificacion       opcional { nombre · url_plantilla }
  correo_tipo[3]                  uno por situación, con huecos {cuenta} {sector} {señal} {nombre}
  especialista                    { nombre · rol · canal }
  que_llevar_al_especialista[5]   la lista de P2
```

Lo que falte se muestra como «en preparación · dueño · fecha», nunca con texto de relleno. Modernización cumple el contrato entero hoy con lo que hay en hipatia2 y `paquete-jorge/`. Las otras once puertas lo cumplen a medias con lo que trae la versión 17:47 de P2 (señales, pregunta, límites, primer avance) y les faltan roles, objeciones con respuesta, referencias con sign-off y correos: esa es la lista de la compra para cada SM, y es corta.

### 8.3 Lo que cambia respecto a hipatia2 y a P2

Respecto a hipatia2: el trabajo por cuenta sale de la práctica y pasa a ser una capa común; la acreditación deja de ser la puerta de las herramientas; el escaneo y el mapa de personas dejan de simularse; el kit no cambia de contenido, cambia de sitio. El comercial que conocía hipatia2 reconoce las tres frases, el pitch por rol, las objeciones y el dossier.

Respecto a P2: el espacio deja de ser un formulario con dos desplegables y pasa a tener un mecanismo de entrada (las señales) y contenido real por puerta; el correo deja de ser único; aparecen la puerta de apoyo, el instrumento de cualificación, el dossier y el aprendizaje de la calle; y el bloque «lo que sabemos» reserva sitio explícito para el CRM y el escaneo en lugar de un texto genérico.

### 8.4 Escenarios para enseñarlo

Tres escenarios ficticios, uno por situación y, esto es lo nuevo, uno por práctica distinta, para que la demo enseñe que el espacio es transversal y no tres variantes de Modernización:

| Situación | Escenario | Puerta principal | Puerta de apoyo | Por qué |
|---|---|---|---|---|
| Tengo una reunión | Grupo Lantia (seguros) | Modernización | PreservIA (el conocimiento en dos cabezas) | Ya está construido y validado; la puerta de apoyo enseña el cross-selling |
| Quiero abrir una conversación | Mercurio Logística | Inteligencia de procesos | Automatización y agentes IA | Es la práctica con dos puertas: enseña cómo se entiende antes de automatizar (el ejemplo de §8.0 lo usa en «reunión» solo para explicar la mecánica; en la demo va en «abrir») |
| Me han pedido una propuesta | Alba Energía | Puesto de trabajo o Gobierno del dato (a decidir con Amador o Daniela) | — | Enseña el primer avance con plazo de una práctica que no es Software |

`piloto-y-validacion.md` de P2 los definía los tres en Modernización; propongo cambiarlo (supuesto 10).

---

## 9 · Mensaje para la pestaña Código (revisión 4 · tres días)

Para pegar tal cual en Código, en el repositorio `hipatia2` (rama nueva `v3`), con la carpeta `entelgychat` accesible para copiar tokens, logos y los JS de datos de la propuesta 2.

```
Vamos a construir la v3 de Hipatia como catálogo estático nuevo en la rama `v3` de este
repo. Fuente de verdad: `docs/Auditoria_y_especificacion_Hipatia_v3.md`, secciones 0.1 y
6.x (revisión 4). No parchees el recorrido actual ni `hipatia-oportunidades.html`: se
reescribe. Dos principios mandan sobre cualquier duda: (1) nadie tiene que explicar cómo
se usa; (2) cada página responde primero a «qué vendemos y por qué Entelgy» y después a
«qué le doy al cliente». Si algo necesita explicación, no se construye.
Un commit por tarea. Dime antes de decidir en lo marcado. Sin animaciones ni pasadas
visuales: tokens Entelgy y ya.

DÍA 1 · datos y base

1. Base del sitio
   - `public/` nuevo con `styles.css` (tokens de `entelgy-design-tokens.css`, sin la capa
     brand-refresh), `app.js` mínimo (buscador, filtros, plegables, modal, impresión),
     logos en `assets/`, favicon.
   - Plantilla única: cabecera (Inicio · Entelgy · Prácticas · Materiales · Contactos +
     buscador siempre visible) y pie con la banda del CRM.
   - Commit: «v3: base estática, tokens Entelgy, cabecera con buscador»
   - Aceptación: 0 errores de consola; un solo botón naranja por pantalla; cabecera
     idéntica en todas las páginas.

2. Modelo de datos
   - `data/` con `corporativo.json`, uno por práctica (`software-development.json`,
     `process-intelligence.json`, `data-ai.json`, `smart-operations.json`,
     `ia-digital-change.json`), `materiales.json` y `personas.json`, según 6.4. En el JSON,
     `subpracticas` se llaman `soluciones`.
   - Software Development → Modernización desde `recorrido/index.html` y `paquete-jorge/*.md`:
     propuesta (tarjeta), objeción principal, primer avance, seis casos con redacción y
     sign-off jul 2026, pitch por rol, objeciones, preguntas, dossier, y los 20 materiales
     con momento (primer contacto · reunión · dejar) y URL (`materiales/*.html`) o
     «pendiente». El correo de apertura y el autodiagnóstico entran como dos materiales.
   - Resto de prácticas y soluciones desde `hipatia-data-core.js`,
     `hipatia-executive-entry-doors.js` (propuesta, señales, límites, pregunta, primer
     paso) y `hipatia-executive-practice-layer.js` (capacidades, primer avance). Lo no
     validado, `pendiente` con dueño y sin fecha inventada. Software Development con tres
     soluciones (decisión provisional; se pregunta a Jorge).
   - `check-data.js`: toda pieza con dueño, estado, uso y fecha o `pendiente`; ninguna
     referencia `citable` sin `sign_off`. Saca `docs/pendientes-por-solucion.md`.
   - Commit: «v3: modelo de datos, Modernización completa, resto con pendientes»
   - Dime antes de: inventar contenido para una solución sin material en el hub.

DÍA 2 · las páginas del catálogo

3. Generador y páginas de práctica y solución
   - Script de build en Node sin dependencias que genera `/practicas/<p>/` y
     `/practicas/<p>/<s>/` desde los JSON con los bloques de 6.3, en el orden fijo.
     «Para prepararte» plegado por defecto. Referencias: citables con frase de reunión, o
     «sin referencia autorizada · pídesela a [especialista]».
   - Commit: «v3: páginas de práctica y solución generadas desde datos»
   - Aceptación: las 5 prácticas y las 12 soluciones tienen los mismos bloques en el mismo
     orden; Modernización enseña íntegro el contenido validado; los huecos dicen
     «en preparación · dueño · fecha».

4. Materiales
   - `/materiales` con buscador y filtros (práctica · uso · tipo · estado), «para cliente»
     por defecto; `/materiales/<id>` y modal reutilizable; «abrir el documento» o
     «enlace pendiente».
   - Commit: «v3: materiales con buscador y fichas»
   - Aceptación: ningún enlace roto; toda pieza con uso, estado con fecha y dueño.

DÍA 3 · portada, relato, contactos y verificación

5. Portada y relato corporativo
   - `/` de una pantalla según 6.3; `/entelgy` con el relato de P2 (general y LATAM);
     `/punto-de-partida` con el as-is/to-be actual, fuera del menú; `/lo-que-viene`.
   - Commit: «v3: portada, relato corporativo, punto de partida»
   - Aceptación: sin «materiales reales», sin contadores no validados, sin situaciones.

6. Contactos y «¿falta algo?»
   - `/contactos` por práctica con primero y segundo y Teams; en cada solución, un enlace
     «¿falta algo?» que abre un correo al responsable con asunto puesto. Nada se guarda.
   - Commit: «v3: contactos y falta algo»

7. Verificación
   - `medir.js` con Playwright: captura de todas las rutas a 1440 y 390, contraste AA,
     peso por página, errores de consola, enlaces rotos, y una lista de «clics hasta»
     (portada → cada solución, portada → cada material para cliente).
   - Commit: «v3: medición automática»
   - Aceptación: todos los criterios de 6.8 en verde salvo el 1 (la prueba con
     comerciales la hago yo), con el informe en `docs/`.
```

---

## 10 · Supuestos que hay que comprobar antes de compartir esto

1. **Que la versión de las 17:47 sea la última de la propuesta 2.** La carpeta cambió entre mi primera lectura (mediodía) y la segunda (cuatro capas y una auditoría nuevas); si sigue cambiando esta noche, lo que puede moverse es §1 y §4, no el veredicto de arquitectura ni el de contenido validado, que no aparece en ninguna capa.
2. **Que las cinco prácticas y sus responsables de la propuesta 2 sean la taxonomía oficial.** P2 la presenta como corporativa (Process Intelligence con Carmen y Carla, Automatización dentro de esa práctica, Ciberseguridad solo en LATAM). En la propuesta 1 y en el hub había siete áreas. Hay que confirmarlo con MA antes de construir el mapa de prácticas.
3. **Que el sign-off del 16 de julio siga vigente.** La v3 publica los seis casos como citables porque `paquete-jorge/01` lo registra así. Si Jorge lo matizó en la llamada de septiembre, se corrige el JSON antes que nada.
4. **Que la plataforma siga siendo estática en Cloudflare.** El estatus de julio deja la «plataforma definitiva» para septiembre. Si Entelgy decide otra cosa (SharePoint, por ejemplo), la sección 6.7 cambia y el resto no.
5. **Que la portada pueda servir a dos audiencias.** Propongo el «punto de partida» fuera del menú para no volver a mezclar la demo a Dirección con el uso diario. Si la próxima reunión con MA es de demo, conviene decidir cuál de las dos es la puerta ese día.
6. **Que los fallos de contraste de P2 sean del código y no de mi renderizado.** Los he visto en Chromium sin fuentes DIN instaladas (cae a Helvetica/Arial); el contraste no depende de la fuente, pero conviene abrirlo en Edge en tu equipo antes de citarlo a nadie.
7. **Que el contenido de las otras cuatro prácticas exista en el hub al nivel que P2 sugiere.** P2 cuenta 74 materiales; no he abierto el hub `Proyectos\entelgy\Entelgy` para comprobar que existen y en qué estado. La tarea 2 de Código lo va a destapar.
8. **Que Mercurio Logística y Alba Energía sean nombres libres.** Antes de redactar los escenarios, comprobar que no coinciden con clientes reales de Entelgy.
9. **Que Software Development tenga tres puertas y no cinco.** La versión 17:47 de P2 convierte Spec-Driven y Factoría SEAS en capacidades a partir del Executive Deck; hipatia2 y el hub las tenían como subprácticas. Decisión del 3 sep: se toman las tres puertas como buenas para construir, y se le pregunta a Jorge cuando se le envíe toda su área a revisar. Si vuelve a cinco, son dos JSON más, no un rediseño.
10. **Que los escenarios puedan repartirse entre prácticas.** `piloto-y-validacion.md` los ponía los tres en Modernización; §8.4 propone uno por práctica para enseñar la transversalidad. Requiere que Carmen o Carla y Amador o Daniela den por bueno el contenido de su escenario antes de la demo.
11. **Que el asistente propio del 80/20 pueda vivir en el mismo Worker.** §7.1 asume un endpoint en Cloudflare con acceso a un modelo. Hay que confirmar con Entelgy qué proveedor de modelo aceptan para contenido interno y si el tráfico puede salir del perímetro de Cloudflare Access; si no, el asistente se enseña en la demo con salidas pregrabadas por escenario.
12. **Que «solución» sea el nombre que Entelgy quiere en pantalla** para lo que P2 llama puerta y hipatia2 subpráctica. Es la palabra más intuitiva de las tres, pero es una decisión de MA, no mía.
13. **Que MA acepte que el espacio de oportunidad, la acreditación y los agentes salgan de la v3.** Es la consecuencia directa de sus dos principios, pero conviene decírselo con esas palabras antes de construir, porque el Menti pidió el encuadre CRM y la visión de mercado, y con este recorte solo se responde al primero (la banda del pie).
14. **Que el mapa de contactos por fuentes públicas quede fuera.** §7 lo retira por datos personales de terceros. Si Entelgy Digital tiene una base de tratamiento válida para ello, se reabre; si no, el rol comprador tipo sustituye a la persona.
