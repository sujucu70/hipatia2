# Contenido real para la v3 · Digital Change · IAbility, PreservIA y OGH-IA

*Vista previa para Susana · 4 de septiembre de 2026 · rama `claude/hipatia-v3-static-catalog-49l3yx`. Sin cambios en la web. Leído: el deck de Comité (`ia-digital-change/decks/digital-change-deck.html`, julio, 11 láminas más anexo de equipo; cada lámina va en un iframe con `srcdoc`, la he decodificado en tu equipo), las tres fichas de servicio y los cuatro one-pagers de `ia-digital-change/fichas/` (15-jul), y `alfredo-estado-trabajo.md` (proyecto, 15-jul). Es la última práctica; con esta quedan las cinco.*

---

## El problema

Digital Change es el área con el kit más completo del hub (deck, tres fichas, cuatro one-pagers, todo con identidad Entelgy y publicado el 15 de julio) y la que MA menos necesita que le expliquen: es la práctica que construye el argumento de toda la compañía («transformar es mucho más difícil que crear», «responder del resultado»). En la v3, en cambio, es la práctica que peor lo cuenta. La página pinta tres listas de tres sobre lo mismo (Transformar · Adoptar · Concienciar; IAbility · PreservIA · OGH-IA como «capacidades»; y otra vez las tres como soluciones), que es exactamente el «tres, tres, tres… le sobra la del medio» que Alfredo dijo el 9 de julio. Las tres tarjetas son de plantilla, sin referencias, con primeros pasos sin plazo que ya no coinciden con las fichas, y con las piezas colgadas al revés (ficha en la reunión, one-pager para dejar).

Hay además dos cosas que MA vería antes que nadie. La primera, que el buyer de esta práctica no es el CIO («le da lo mismo, salvo el que pide ROI») sino el CFO y negocio, y la v3 no lo dice en ningún sitio. La segunda, que las cifras del área cambian de pieza en pieza: el mismo caso de MAPFRE sale como «−82% de apertura de tickets» en el deck y como «3.500 tickets menos al mes, 45 € por ticket» en la ficha; el «uso de IA en la sombra» es el 57%, el 71,6%, el 90% o «más de la mitad» según dónde mires; y «ya usa IA» es el 78% en el deck y el 88% en la ficha de OGH-IA citando el mismo informe de McKinsey. Lo que sigue llena las tres páginas con lo que las fichas y el deck ya dicen, con la voz de Alfredo (el CFO, el piano, el prêt-à-porter), deja fuera lo que no tiene fuente o permiso, y te lista lo que él tiene que cerrar.

---

## 0 · Lo que cambia en la práctica · `/practicas/digital-change/` (`data/digital-change.json`)

**Propuesta de portada** (`propuesta_portada`). Hoy: «Que las personas adopten, gobiernen y aprovechen la IA en la organización.» En la auditoría de copy propuse «Que lo desplegado se use de verdad: cultura, conocimiento y gobierno humano de la IA.» El deck cierra con la frase de Alfredo para el CFO: «La tecnología ya está comprada. El retorno, no.» Propuesta: «La tecnología ya está comprada; el retorno, no. Cultura, conocimiento y gobierno de la IA.» (90 caracteres). Sustituye a la de la auditoría.

**Qué cubre** (`que_cubre`). Hoy empieza por «Acompañar», la palabra vetada. Con el deck (láminas 1, 4 y 5): «El oficio de la gestión del cambio y la adopción, productizado: soluciones con el método (ADKAR, Prosci, HCMBOK) y buena parte del contenido ya resueltos, para hacer rendir la tecnología que ya has pagado. Tres retos y una solución para cada uno: que la gente use la IA, y bien (IAbility); que el saber no se marche (PreservIA); que alguien responda de la IA (OGH-IA). Se diseña al principio del proyecto, no al final.»

**Qué no prometemos** (`que_no_prometer`). En primera persona y con las reglas duras del área: «No vendemos plataforma, licencias ni cursos: vendemos soluciones con el cambio dentro, y la tecnología es la maquinaria que las acelera. No es una campaña de comunicación ni formación desconectada del trabajo real. Y no prometemos adopción sin medir el punto de partida: sin línea base no hay decisión de escalado.»

**La pregunta que abre** (`pregunta_comun`). La de Alfredo, en lenguaje de CFO: «¿Cuánto de lo que ya pagáis en IA se está usando de verdad?»

**Capacidades** (`capacidades`). Hoy: Transformar · Adoptar · Concienciar, más las tres soluciones repetidas como `capacidades_ia`. Propongo dejar de pintar `capacidades_ia` (build.js, l. 299-300; las soluciones ya van justo debajo) y que las capacidades cuenten lo que hace el oficio, que es lo que las tres soluciones comparten:

| paso | titulo | texto |
|---|---|---|
| 01 | Medir antes de mover | Punto de partida por persona y por área: radar de madurez, mapa de calor, línea base. Nada se decide, ni se escala, sin foto de salida y medición contra ella. |
| 02 | Cambiar comportamientos al por mayor | Narrativa inmersiva y lluvia fina (10 minutos a la semana), por oleadas de colectivo y en varios idiomas, sin parar la operación. No 200 personas: decenas de miles. |
| 03 | Capturar lo que no está escrito | El consultor sentado delante del experto mientras todavía está; la IA estructura; alguien con nombre valida lo que después responde el Mentor Virtual. |
| 04 | Gobernar con autoridad | Un comité del cliente que autoriza, condiciona, limita o retira, y una oficina que reúne evidencias y deja rastro. Frenar a tiempo también es retorno. |

**Primer avance** (`primer_avance`). Hoy: «Diagnóstico de madurez en adopción y gobernanza», sin plazo. El deck cierra con «Empieza por un diagnóstico de madurez → arranque de 3-4 meses a precio cerrado». Pero la puerta de entrada del área es el nudo rojo del fichero de Alfredo (Readiness de 25 minutos por persona frente a un Diagnóstico de Entrada de 4–6 semanas con go/no-go en Comité). Hasta que lo cierre: `titulo` «Diagnóstico de madurez en IA» · `plazo` «~25 min por persona» · `nota` «Madurez por persona y por área, mapa de calor de resistencia e impulso y línea base para medir lo que venga. El alcance se cierra en una sesión de descubrimiento. Sin precio ni plazo del arranque hasta que Alfredo fije la puerta de entrada.»

**Material común** (`material_comun`). Se queda solo el deck (`digital-change-deck`). El one-pager de IAbility y la ficha de PreservIA, que hoy figuran como comunes, ya cuelgan de su solución.

---

## 1 · IAbility · Alfredo Zurdo

### 1.1 · Lo que hay en las tres piezas (extracción para el comercial)

**El problema, con fuente.** «Compraste la IA; la adopción no venía incluida» (one-pager, bloque 01). Dos enemigos: la factura no rinde (licencias sin usar, Copilot como caso típico; **solo 5 de cada 100 pilotos de GenAI dejan impacto medible**, MIT, The GenAI Divide, 2025) y el uso sin gobierno ya es riesgo (**el 90% de los empleados usa IA personal en el trabajo**, MIT 2025; **el 48% mete datos sensibles en herramientas públicas**, KPMG 2025; el artículo 4 del AI Act obliga desde el 2 de febrero de 2025). El deck lo cuenta con el piano: «Un Steinway de 250.000 € no te hace pianista. ¿Cuánto de lo que ya pagas se está usando?» (lámina 2), y con las cuatro formas de tirar el dinero (lámina 3): tecnología sin adopción (la gestión del cambio multiplica por 7 el éxito, Prosci), estrategia sin ejecución (solo una de cada tres culmina, BCG, Flipping the Odds), automatización sin rediseño (la mitad de los programas de RPA fracasa, EY, RPA Survey) y proyecto sin operación (un tercio de IT tiene éxito sostenido, Standish, CHAOS). «Las cuatro comparten el mismo hueco: la gestión del cambio.»

**Qué es, en palabras de Alfredo.** «IAbility es la capa de adopción humana: convierte los copilotos y agentes que ya tienes en hábitos de uso Seguro, Ético y Responsable, medidos por persona y por área. No formamos: cambiamos comportamientos.» (one-pager, cabecera). Es cultura de IA, no alfabetización ni concienciación (correo del 17-jun: describirlo así «lo degrada a Formación, TFWM disfrazado»). Lo que no es (ficha, bloque 01): no sustituye al LMS, no es un curso ni una certificación, y no es gobierno técnico de IA (inventario, clasificación y aprobaciones son de la Oficina).

**Las cuatro fases, cada una requisito de la siguiente** (ficha, bloque 02). **Evaluar · Readiness**: cuestionario de 25 preguntas que mide nivel técnico y percepción emocional (miedo, entusiasmo, rechazo), cuatro niveles (Resistencia, Cumplimiento, Compromiso, Incorporación), ~25 minutos por persona, se repite tras cada fase; pasar del 10% en Resistencia o no llegar al 20% en Incorporación dispara acción sobre el área. Te llevas radar por persona, mapa de calor por áreas y línea base. **Formar**: sesión Discovery gamificada de arranque (~90 min), las 7+1 IAbilidades, IAbility Hub sin licencias extra; píldoras de 5–10 min y tasa de completitud por área. **Concienciar · IAbility AI**: la campaña «La aventura de los GuardIAnes», universo del año 2034 con la superinteligencia Tyran y tres personajes que son tres riesgos (VRO, técnico y de seguridad; Rai, ético; Sierra, legal), 12 semanas, cuatro portales que abren cada dos (sesgo, propiedad intelectual, privacidad, desinformación y deepfakes), ~10 minutos a la semana; videotestimonios «A mí me pasó» y scoreboard. **Adoptar · Labs + Help**: cuatro talleres (Inspira, Descubre, Prototipa, Itera) en células de 8–10 personas, y IAbility Help, asistencia contextual en las apps corporativas que detecta pantalla, tarea y rol; catálogo de 10–20 casos priorizados y prototipos validados.

**Las cifras propias.** ~10 minutos a la semana por persona; 73% de retención frente al 10–20% del e-learning; 12 semanas de la línea base al cambio de comportamiento; uso de las licencias del 15–20% al 70–75% con IAbility Help («estimación propia», y Help solo entra en el paquete Corporate); 71,6% de los accesos a GenAI fuera del perímetro (ficha, sin fuente; es cifra verbatim de Alfredo). Escala: The Firewall Mindset, el predecesor, +140.000 personas en +40 países y premio al mejor proyecto digital 2019 («mismo método, otro frente»; solo se vende en América).

**Por qué creernos** (ficha, bloque 04; deck, lámina 10). Los activos no se improvisan: una serie narrativa propia, un personaje por riesgo, años de producción, que llega hecha y se viste con la marca del cliente. Y se usa en casa antes de venderlo: **Entelgy** pasó su plantilla por el programa, cinco células de innovación, +30 personas, 151 ideas, 15 casos priorizados, 9 prototipos funcionales, y de ahí salió su comité de gobernanza de IA. **Admiral Europe Tech**: IA integrada en 12 equipos de desarrollo, GitHub Copilot incluido, métrica híbrida (el análisis de código dice qué cambió en el producto; ADKAR, si la gente cambió con él), Premios Computing 2025. El deck añade «1.ª referencia: Bahía de Bizkaia Electricidad» a pie de lámina.

**Seguridad y cumplimiento** (ficha, bloque 05). El art. 4 no lleva multa propia pero agrava cualquier otra sanción: «fallar en la supervisión humana de un sistema de alto riesgo sin poder demostrar que tu gente sabía prevenirlo no son 15 M€ a secas: son 15 M€ con el agravante encima». Expediente de alfabetización co-diseñado y auditado por Audens (derecho digital). IAbility Help se despliega sobre la interfaz de Office y M365: no usa APIs, no toca bases de datos ni lee documentos. Cloud europeo, desarrollado en España. Certificaciones del Grupo (ISO 27001, 27701, ENS, 9001), etiquetadas como del grupo, no del producto.

**Cómo se empieza.** Diagnóstico de madurez (Readiness): ~25 minutos por persona, el alcance en una sesión de descubrimiento, sin precio ni plazo inventado (decisión del 15-jul). Cierre del one-pager: conversación de 30 minutos sobre «dónde está tu brecha de adopción y cómo estás frente al art. 4».

**Por quién se entra.** No por el CIO. Duele al CFO (la factura que no rinde) y a negocio, ventas y operaciones; RRHH y formación entran después. Dentro de un proyecto (un despliegue de Copilot, un SAP) se vende solo; suelto, después, cuesta, y muchas ventas fueron post-mortem (Telefónica Empresas con M365: nadie lo usaba y llamaron al cabo de uno o dos años, al presentar el ROI). Organizaciones grandes, reguladas, con plantilla distribuida y varios idiomas.

**Reglas del área que condicionan el copy.** IAbility es cultura. No se vende plataforma ni licencias; la plataforma se cuenta como el activo que acelera («por eso arrancamos en 48 h»). SmartHelp retirado como etiqueta comercial. TFWM solo en América. Nada de «transformación» ni «acompañamos». MAPFRE se cuenta una sola vez, bajo PreservIA. IAbility Secure fuera. El AI Act como gancho a pie de tarjeta, no como identidad. Alto riesgo, 2 de diciembre de 2027; no propagar el «2-ago-2026 incl. alto riesgo» del pitch de mayo.

### 1.2 · Lo que chirría entre las piezas (para Alfredo)

- **La cifra del uso en la sombra cambia en cada pieza:** 90% (one-pager, MIT 2025), 71,6% (ficha, sin fuente), «más de la mitad oculta que usa IA» (deck, Microsoft Work Trend Index 2024) y 57% (verbatim de Alfredo). Son cuatro medidas de cosas distintas contadas como la misma. Una, con obra y año.
- **151/15/9 (ficha, one-pager) frente a 150→9 (deck, láminas 6 y 10).** Discrepancia que el fichero de estado ya pide reconciliar. El deck es el que hay que corregir.
- **La ficha dice «Oficina de Gobierno de la IA»** dos veces (bloques 01 y 05) cuando el nombre definitivo es «Oficina de Gobernanza Humana de la IA».
- **El WEF.** El deck cita bien («la IA cambiará el 23% de los empleos en 5 años», informe 2023); la ficha que ahora está en el hub ya no lleva el dato de los 85 millones. Comprobar que la versión pública de Alfredo (la que circula por Hipatia) también lo ha retirado: es el aviso por teléfono que sigue pendiente.
- **Admiral y Bahía de Bizkaia.** Admiral va con nombre en ficha y one-pager y no consta en el fichero de estado como autorizado por escrito (solo MAPFRE lo está); Bahía de Bizkaia está en el deck como «1.ª referencia» cuando el modelo de consentimiento sigue en Marketing. Ninguna de las dos sube a Hipatia sin firma.
- **Placeholders vivos:** «[contacto Entelgy]» en el one-pager, «[email protected]» en la ficha (el ofuscador de correo se comió la dirección).
- **«32.000 personas en medio mundo»** (deck, lámina 10) sin decir de quién es la cifra. Y «Escala de verdad» carga toda la prueba en TFWM, que es del predecesor.
- **El ×4 de licencias** del one-pager (bloque 04) sin el matiz de que es IAbility Help, exclusivo de Corporate; la ficha sí lo tiene.

### 1.3 · La página propuesta, campo a campo (`data/digital-change.json` → `soluciones[0]`, id `iability`)

**Cabecera.** `una_linea`: «Convierte los copilotos que ya pagas en hábitos de uso con criterio, medidos por persona.» (89). `estado`: `en_preparacion` hasta que Alfredo lea la página; después `vigente`. `pendiente.texto`: «Puerta de entrada del área (Readiness o Diagnóstico de Entrada), permiso escrito de Admiral y Bahía de Bizkaia, una cifra de uso en la sombra con fuente, y 151/15/9 o 150/9.»

**La propuesta (`propuesta`).**

- `que_es`: «La capa de adopción humana: convertimos los copilotos y agentes que ya tienes en hábitos de uso seguro, ético y responsable, medidos por persona y por área. No formamos: cambiamos comportamientos. Cuatro fases, cada una requisito de la siguiente: evaluar (radar de madurez y mapa de calor), formar (toda la plantilla en el mismo punto), concienciar (la campaña narrativa de 12 semanas, 10 minutos a la semana) y adoptar (labs que sacan prototipos en días y asistencia contextual en el puesto). No es un curso, no sustituye al LMS y no es gobierno técnico de IA.»
- `a_quien`: «No entras por el CIO: le duele al CFO, que ve licencias sin usar, y a negocio, ventas y operaciones, que ven gente usando IA a su aire. RRHH y formación entran después. Se vende dentro de un proyecto (un despliegue de Copilot, un SAP) mucho mejor que suelto. Organizaciones grandes, reguladas, con plantilla distribuida y varios idiomas.»
- `senal`: «Hay licencias de IA pagadas y a medio usar; la gente usa IA personal en el trabajo y mete datos donde no debe; alguien ha dicho «prohibido» y no ha servido de nada. Hay un despliegue de Copilot o de agentes en marcha sin nadie que se ocupe de que la gente lo use. Y el art. 4 del AI Act obliga desde febrero de 2025, sin multa propia pero como agravante.»
- `por_que_nosotros`: «Gestionar el cambio es un oficio que cualquier consultora hace a medida. Lo nuestro es prêt-à-porter: el qué, el cómo y buena parte del contenido, ya resueltos. Una serie narrativa propia con un personaje por riesgo, años de producción detrás, que llega hecha y se viste con tu marca; un método de lluvia fina con un 73% de retención frente al 10–20% del e-learning; y la escala del predecesor, más de 140.000 personas en 40 países. Lo probamos en casa antes de venderlo: 151 ideas, 15 casos y 9 prototipos en producción, y de ahí salió nuestro comité de gobernanza de IA.»
- `diferenciador`: «Los activos, no las horas: una serie para adoptar la IA con criterio que producir lleva años y tú puedes tener mañana.»
- `objecion_principal`: texto «Ya tenemos formación en IA en el LMS.» · respuesta «Y la gente sigue usando la IA a su aire, porque un curso no cambia comportamientos. IAbility trabaja la capa que la formación no toca: hábitos medidos por persona, en 10 minutos a la semana, dentro y fuera del trabajo, que es donde nace el uso en la sombra. Convive con tu LMS. Empezamos midiendo dónde está cada área.»
- `como_abres`: «¿Cuánto de lo que ya pagáis en licencias de IA se está usando de verdad?»
- `primer_paso`: `titulo` «Diagnóstico de madurez en IA» · `plazo` «~25 min por persona» · `nota` «Radar por persona, mapa de calor por áreas y línea base de riesgos y emociones, antes de decidir nada. El alcance se cierra en una sesión de descubrimiento. Sin precio en las piezas. Con Alfredo.»

**Material para el cliente (`materiales`).** Las dos piezas ya cuelgan de la solución, al revés. Propuesta: `iability-onepager` → `primer_contacto`; `iability-ficha` → `para_dejar`; el deck del área se queda en la práctica. Notas de uso:

- One-pager: «Una cara para abrir la puerta al CFO o a negocio: la factura que no rinde, el uso sin gobierno, el marco SER, las cuatro fases y dos pruebas (Entelgy en casa, Admiral). Cierra en conversación de 30 minutos. Admiral va con nombre: úsalo cuando la cuenta lo permita. Lleva el hueco [contacto Entelgy].»
- Ficha: «Dos caras para dejar a IT, seguridad y compras: las cuatro fases con lo que te llevas de cada una, qué gana el negocio, por qué creernos, y seguridad y cumplimiento con el art. 4 explicado. Sin precio. Cierra en diagnóstico. Dice «Oficina de Gobierno de la IA» en dos sitios; el nombre bueno es Gobernanza Humana.»

**Referencias (`referencias`).** Tres piezas nuevas en `data/materiales.json`, tipo `referencia`, práctica `digital-change`, solución `iability`, zona `referencias`, dueño Alfredo.

| id | Campos |
|---|---|
| `dc-caso-entelgy-labs` | `titulo` «Entelgy · IAbility en su propia casa» · `citable` `citable` con `sign_off` Alfredo (es público: «Entelgy IAbility Labs») · `sale_al_cliente` `si` · `contexto` «Entelgy pasó su plantilla por el programa antes de venderlo: cinco células de innovación con más de 30 personas.» · `que_hicimos` «Las cuatro fases sobre la propia organización, con Labs por área.» · `resultado` «151 ideas generadas, 15 casos de uso priorizados, 9 prototipos funcionales, y la base del comité de gobernanza de IA de la compañía, por el que pasan consejeros y directivos.» · `frase_reunion` «Lo que te proponemos ya lo hemos hecho en nuestra casa: 151 ideas, 9 prototipos en producción y un comité de gobernanza que funciona. No eres el experimento.» · `nota_de_uso` «Reconciliar 151/15/9 (ficha) con 150/9 (deck) antes de usarlo por escrito.» |
| `dc-caso-admiral` | `titulo` «Admiral Europe Tech · Labs en equipos de desarrollo» · `citable` `confirmar_por_cuenta` · `sale_al_cliente` `con_validacion` · `sector` [Seguros] · `contexto` «Aseguradora que integra IA, GitHub Copilot incluido, en sus equipos de desarrollo.» · `que_hicimos` «IAbility Labs en 12 equipos, con métrica híbrida: análisis de código para ver qué cambió en el producto y evaluación ADKAR para ver si la gente cambió con él.» · `resultado` «Premios Computing 2025, IA y productividad. El porcentaje de productividad no es público.» · `frase_reunion` «En Admiral medimos dos cosas a la vez: el código dice qué cambió en el producto y ADKAR, si la gente cambió con él. Doce equipos, y un premio Computing.» · `nota_de_uso` «Con nombre en ficha y one-pager, pero sin autorización escrita registrada. Confirmar con Alfredo antes de citarlo fuera de la reunión.» |
| `dc-caso-bahia-bizkaia` | `titulo` «Bahía de Bizkaia Electricidad · Primera referencia de IAbility» · `citable` `confirmar_por_cuenta` · `sale_al_cliente` `no` hasta la firma · `sector` [Energía] · `contexto`, `que_hicimos` y `resultado` por escribir (el deck solo lo nombra a pie de lámina). · `nota_de_uso` «Pendiente del modelo de consentimiento de Marketing. No se cita hasta la firma.» |

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas del deck y de las dos piezas. Elige la que responde a lo que te han dicho.»
- `frases_cuenta.frases`:
  - «Por la factura» · «si han comprado Copilot o licencias y el uso es bajo» · «Un piano de 250.000 € no te hace pianista. Solo 5 de cada 100 pilotos de GenAI dejan impacto medible (MIT, The GenAI Divide, 2025). La adopción convierte esa factura en productividad, y se mide por persona y por área.»
  - «Por la IA en la sombra» · «si hay gente usando IA por su cuenta» · «Prohibir no lo corrige; el criterio sí. IAbility trabaja el comportamiento dentro y fuera del trabajo, que es donde nace el uso en la sombra, en 10 minutos a la semana.»
  - «Por el art. 4» · «si aparecen Legal, Compliance o el AI Act» · «El art. 4 obliga desde febrero de 2025 y no lleva multa propia: agrava cualquier otra. Dejamos el expediente de alfabetización documentado y auditado por Audens.»
  - «Por el proyecto que viene» · «si están arrancando un despliegue de Copilot, agentes o un SAP» · «La gestión del cambio se diseña al principio del proyecto, no al final. Dentro del proyecto cuesta poco; después, cuando nadie lo usa, cuesta mucho más.»
- `frases_cuenta.regla`: «Estas frases abren y cualifican. Digital Change es la puerta por la que han entrado muchas cuentas nuevas; el dinero está en lo que viene después. Si la conversación se va a gobierno técnico de IA, es OGH-IA; si va a conocimiento que se jubila, PreservIA. Cuando el cliente muerde, trae a Alfredo con el diagnóstico.»
- `pitch_por_rol`:
  - CFO — «¿Cuánto de lo que ya pagáis en IA se está usando?» · le mueve: «la licencia que ya paga, en uso; retorno más cerca.»
  - Dirección de negocio / operaciones — «¿Vuestra gente usa la IA con criterio o a su aire?» · le mueve: «comportamientos medidos por área, sin parar la operación.»
  - RRHH / Formación — «¿Qué retención tiene vuestra formación en IA a los tres meses?» · le mueve: «73% de retención frente al 10–20% del e-learning; convive con el LMS.»
  - Legal / Compliance — «¿Podéis demostrar que vuestra gente sabe usar la IA, como pide el art. 4?» · le mueve: «expediente auditado por Audens.»
  - CIO — «¿Quién se ocupa de que el despliegue de Copilot se use?» · le mueve: «entra sin tocar código ni datos; despliegue por oleadas e idiomas.»
- `pitch_nota`: «Se entra por el CFO o por negocio; el CIO decide poco aquí, salvo el que pide ROI.»
- `objeciones`:
  - «Ya tenemos formación en IA.» → «Un curso no cambia comportamientos; por eso la gente sigue usando la IA a su aire. IAbility trabaja la capa que la formación no toca y convive con tu LMS.»
  - «Es una plataforma más.» → «No vendemos plataforma ni licencias: vendemos la solución con el método y el contenido dentro. La tecnología es lo que nos permite arrancar en 48 horas.»
  - «Lo haremos cuando termine el despliegue.» → «Es la venta post-mortem: al cabo de un año llaman porque nadie lo usa. La gestión del cambio se diseña al principio, y dentro del proyecto cuesta una fracción.»
  - «¿Cuánto cuesta?» → «El diagnóstico son 25 minutos por persona y sales con el mapa de calor de tu organización. El alcance del programa se cierra en la sesión de descubrimiento, por oleadas de colectivo.»
- `preguntas_cualificacion`:
  - «¿Qué licencias de IA tenéis y qué uso real les dais?»
  - «¿Hay un despliegue de Copilot, agentes o un cambio grande en marcha?»
  - «¿Cuánta gente, en cuántos países e idiomas?»
  - «¿Quién responde hoy del art. 4 del AI Act?»
- `referencias_destacadas`: [`dc-caso-entelgy-labs`, `dc-caso-admiral`].
- `material_interno`: [`digital-change-pains`, `digital-change-legacy-preview`, `digital-change-legacy-competition`]. Nota interna: competencia real en España, Kymatio y Tier8 (no KnowBe4); Indra como «proyecto de horas»; TFWM solo en América; IAbility Secure fuera; no se sale con el conflicto Tier8–TFWM.
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`).**

1. Dolor «Compramos Copilot y nadie lo usa.» · frase «La tecnología ya está comprada; el retorno, no. La adopción no venía incluida.» · prueba «Solo 5 de cada 100 pilotos de GenAI dejan impacto medible (MIT, The GenAI Divide, 2025).» · paso «Diagnóstico de madurez: 25 minutos por persona.»
2. Dolor «La gente usa IA por su cuenta y mete datos donde no debe.» · frase «Prohibir no lo corrige; el criterio sí.» · prueba «73% de retención del método frente al 10–20% del e-learning (datos Entelgy).» · paso «Campaña de 12 semanas, 10 minutos a la semana, por oleadas.»
3. Dolor «Legal pregunta por el art. 4.» · frase «Sin multa propia, pero agrava cualquier otra sanción.» · prueba «Expediente de alfabetización co-diseñado y auditado por Audens.» · paso «Línea base por área y expediente documentado.»
4. Dolor «Ya lo intentamos con un curso.» · frase «Una serie, no un curso: un personaje por riesgo, 12 semanas, medido.» · prueba «Entelgy en su casa: 151 ideas, 9 prototipos en producción y un comité de gobernanza que salió de ahí.» · paso «Labs en células de 8–10 personas por área.»

---

## 2 · PreservIA · Alfredo Zurdo

### 2.1 · Lo que hay en las tres piezas (extracción para el comercial)

**El problema, con fuente.** «Tu mejor experto se jubila. Su conocimiento no tiene por qué hacerlo» (los dos one-pagers). «El riesgo no es que se vaya una persona. Es que se vaya con ella la capacidad de resolver lo que nunca llegó a documentarse.» En banca y seguros tiene nombre: procesos críticos que dependen de tres personas; si falta el experto, el SLA se cae. En lo público, el relevo llega por convocatoria, con meses de retraso, y cuando llega ya no queda nadie que le enseñe. Cifras: **el 40% de los profesionales del sector serán senior en 2030** (Fundación Adecco, ManpowerGroup; one-pager privado) y **43.000 funcionarios se jubilan en España en los próximos cinco años** (BEPSAP 2024, MTDFP 2025; one-pager público). Y el argumento que enlaza con todo lo demás: «la IA que estás montando hereda ese vacío. Una IA que solo lee documentos muertos es cara y mediocre.» La ficha lo dibuja como iceberg: lo escrito es lo que asoma.

**Qué es** (ficha, bloque 01). «Un servicio que identifica el conocimiento crítico de tu organización, lo extrae con entrevistas estructuradas sobre los expertos, lo valida con la propia organización y lo convierte en respuestas disponibles en el puesto de trabajo, 24/7.» El asistente conversacional es la puerta; el trabajo está detrás. «La captura la hace una persona: eso no viene en ninguna licencia» (one-pagers, bloque 02).

**Cómo se construye, tres fases con nombre propio** (ficha, bloque 02). **Capturar**: minería de flujos de trabajo con IA y entrevistas del consultor con el experto → Knowledge Book («lo que el experto sabe y nunca escribió»). **Estructurar**: piezas de conocimiento según los cinco momentos de la necesidad (Nuevo · Más · Aplicar · Resolver · Cambios, «hacer más, formar menos») → Red de Conocimiento. **Activar**: contextualizada por proceso, rol y aplicación, a un clic en Microsoft 365 o en el LMS → Mentor Virtual, 24/7. «En las tres fases hay personas validando: lo que el Mentor Virtual responde está aprobado por alguien con nombre.»

**La prueba: MAPFRE** (ficha bloque 03, one-pagers bloque 03). Punto de partida: más de 15.000 puestos, un equipo de soporte funcional de 50 personas y 3.500 tickets al mes de preguntas sobre cómo se hacen las cosas. Resultado: **3.500 tickets de soporte menos al mes, apertura de incidencia de 5:30 a 1 minuto, 45 € de ahorro estimado por ticket, 71% de recurrencia de usuarios activos**. «Hemos agilizado el trabajo sin salir de la pantalla en la que trabajamos.» Caso publicado por Entelgy, Premio Computing 2021 (Transformación de Workplace y Conocimiento). Corresponde a la fase de activación. Es la única referencia autorizada del área y se cuenta una sola vez, aquí.

**El piloto** (ficha, bloque 04). Piloto Explorer: un área, proceso o colectivo; 1 Knowledge Book; 1 a 3 flujos de trabajo y 1 aplicación; red de conocimiento acotada (1 e-learning, 1 vídeo, 1 guía, 1 infografía, 1 onboarding); 1 experto y 2 entrevistas; hasta 30 usuarios; 1 mes de puesta en marcha más 1 mes de uso; evaluación antes y después y decisión de escalado. **14.900 € sin IVA**, 50% al arranque y 50% al cierre («valoración, no oferta vinculante»). Qué necesita del cliente: la disponibilidad del experto para dos entrevistas «mientras está», la decisión de qué colectivo participa, sala y medios. Cómo se mide: línea base y cierre contra ella (tiempo de onboarding, horas de soporte del experto, incidencias y escalados, reutilización, tiempo hasta la autonomía). «Sin línea base no hay decisión de escalado. Respondemos del resultado.»

**Integración y seguridad** (ficha, bloque 05). Microsoft 365 y LMS, SSO y permisos por rol, cifrado y RGPD, control de versiones y audit logging. Lo que se cierra en el discovery técnico con IT y seguridad: modelos y control de respuestas, hosting y residencia de datos, aislamiento entre clientes, retención y borrado, propiedad del Mentor Virtual y consentimiento del experto, gobierno y caducidad del contenido, conectores y niveles de servicio.

**Por quién se entra.** Dirección de operaciones o de negocio con procesos críticos que dependen de pocas personas (banca, seguros, industria); RRHH cuando hay plan de jubilaciones; en lo público, quien sufre el relevo por convocatoria. Y, transversal, quien está montando IA corporativa sobre documentos: PreservIA es el prerrequisito.

**Reglas del área que condicionan el copy.** MAPFRE una sola vez, aquí (el «Smart Help» de MAPFRE usa la tecnología de la fase 3 de PreservIA; la etiqueta Smart Help se retiró). PreservIA no es marca registrada (nombre antiguo, Cabot): no lleva ®. WalkMe no compara. Sin «plataforma».

### 2.2 · Lo que chirría entre las piezas (para Alfredo)

- **MAPFRE con dos juegos de cifras.** Ficha y one-pagers: 3.500 tickets menos al mes, 5:30 → 1, 45 €/ticket, 71% de recurrencia. Deck (lámina 7): «−82% de apertura de tickets» y «onboarding 2× más rápido», y ninguna de las dos aparece en las piezas. Y en el área de Amador el mismo caso sale como **SmartHelp** (deck de Workplace: 25.000 puestos, 700 aplicaciones, 3.500 tickets/mes evitados, ~157.500 €/mes, que es 3.500 × 45 €). Es el mismo caso contado bajo dos productos y con dos cifras de puestos (15.000 en las piezas de Alfredo, 25.000 en las de Amador). MA lo va a ver en la primera demo en la que se abran las dos prácticas.
- **El «80% del conocimiento no está escrito»** va en el deck con «[fuente por fijar]». O se fija o sale.
- **Las cifras de jubilación** cambian de pieza: 40% senior en 2030 (privado), 43.000 funcionarios en cinco años (público), «hasta un 30% de la plantilla se jubila en cinco años» (deck, sin fuente), «4 millones de baby boomers antes de 2030» (verbatim). Las dos de los one-pagers tienen fuente; las otras dos, no.
- **Precio en una ficha que sale al cliente:** 14.900 € del Piloto Explorer, cuando la decisión del área para IAbility (15-jul) fue «sin precios» y las de OGH-IA se declaran «documento público» sin importe. La de PreservIA no dice si es pública.
- **Placeholders:** «[teléfono]» en los tres pies, «[email]» en la ficha.
- **Los dos one-pagers sectoriales** son idénticos salvo la cifra de cabecera y un párrafo del bloque 01; la prueba de los dos es MAPFRE «la escala de un organismo grande» incluso en el privado, donde no hace falta la comparación.

### 2.3 · La página propuesta, campo a campo (`data/digital-change.json` → `soluciones[1]`, id `preservia`)

**Cabecera.** `una_linea`: «El conocimiento de tus expertos, después de tus expertos: capturado, validado y a un clic.» (90). `estado`: `en_preparacion` hasta que Alfredo lea la página; después `vigente`. `pendiente.texto`: «Un solo juego de cifras de MAPFRE (con Amador), fuente del 80% tácito, y si el precio del piloto va en las piezas.»

**La propuesta (`propuesta`).**

- `que_es`: «Identificamos el conocimiento crítico de tu organización, lo extraemos con entrevistas al experto mientras todavía está, lo validamos con la propia organización y lo convertimos en respuestas disponibles en el puesto, 24/7. Tres fases con resultado propio: capturar (Knowledge Book), estructurar (Red de Conocimiento por momento de uso) y activar (Mentor Virtual a un clic en Microsoft 365 o en tu LMS). La IA hace el trabajo pesado; lo que responde el Mentor lo ha aprobado alguien con nombre.»
- `a_quien`: «Dirección de operaciones o de negocio con procesos críticos que dependen de tres personas: banca, seguros, industria. RRHH cuando hay plan de jubilaciones. En lo público, quien sufre el relevo por convocatoria. Y quien esté montando IA corporativa sobre documentos: sin el conocimiento tácito capturado, esa IA es cara y mediocre.»
- `senal`: «Un experto se jubila, rota o cambia de función y se lleva el criterio para resolver lo que ningún manual recoge. Hay procesos críticos que dependen de pocas personas y el soporte funcional vive de preguntas de «cómo se hace esto». Se está montando un asistente de IA sobre documentos que nadie mantiene. Y el relevo, cuando llega, no tiene a quién preguntar.»
- `por_que_nosotros`: «Rescatamos el conocimiento que todavía no existe como documento; lo demás solo encuentra lo ya escrito. La captura la hace una persona sentada delante de tu experto, y eso no viene en ninguna licencia. En MAPFRE, con más de 15.000 puestos y 3.500 tickets al mes de preguntas de uso, el conocimiento puesto donde se trabaja evitó 3.500 tickets al mes y bajó la apertura de incidencia de cinco minutos y medio a uno. Empezamos por un piloto de dos meses con línea base: sin ella no hay decisión de escalado.»
- `diferenciador`: «La parte difícil no es la conversación: es que lo que responde sea cierto. Personas validando en las tres fases.»
- `objecion_principal`: texto «Ya tenemos un buscador con IA sobre nuestra documentación.» · respuesta «Encuentra lo que está escrito, y lo que se va con el experto no lo está: el 80% de lo que sabe la casa vive en su cabeza. PreservIA lo captura en dos entrevistas, lo valida y lo pone en el mismo buscador o en M365. El piloto son dos meses, un área y un experto, con medición antes y después.»
- `como_abres`: «¿Qué conocimiento no os podéis permitir perder cuando se jubile quien lo tiene?»
- `primer_paso`: `titulo` «Piloto Explorer» · `plazo` «2 meses» · `nota` «Un área, un experto y dos entrevistas, un Knowledge Book, hasta 30 usuarios activados; un mes de puesta en marcha y otro de uso, con línea base y decisión de escalado al cierre. Precio cerrado en la ficha (Alfredo decide si se dice en el portal). Se diseña en una sesión de trabajo. Con Alfredo.»

**Material para el cliente (`materiales`).** Las tres piezas cuelgan, al revés. Propuesta: `preservia-privado` y `preservia-publico` → `primer_contacto`; `preservia-ficha` → `para_dejar`. Notas de uso:

- One-pagers: «Una cara para abrir la puerta: la misma pieza en dos versiones, banca y seguros (40% senior en 2030) y sector público (43.000 funcionarios se jubilan en cinco años), con MAPFRE como prueba y cierre en 30 minutos. Elige la del sector de la cuenta; el resto es igual.»
- Ficha: «Dos caras para dejar a operaciones, IT y compras: qué es, las tres fases con su resultado, MAPFRE con cifras, el piloto detallado (alcance, qué necesitamos, cómo se mide, precio) e integración y seguridad. Cierra en diseñar el piloto. Lleva el precio del piloto: úsala sabiendo que es el importe que va a leer compras.»

**Referencias (`referencias`).** Una pieza nueva:

| id | Campos |
|---|---|
| `dc-caso-mapfre` | `titulo` «MAPFRE · Conocimiento puesto donde se trabaja» · `solucion` `preservia` · `citable` `citable` con `sign_off` Alfredo (autorización registrada, caso publicado por Entelgy) · `sale_al_cliente` `si` · `sector` [Seguros] · `contexto` «Más de 15.000 puestos, un equipo de soporte funcional de 50 personas y 3.500 tickets al mes de preguntas sobre cómo se hacen las cosas.» · `que_hicimos` «Conocimiento capturado y activado en el puesto: el empleado recibe el procedimiento y la respuesta sin salir de la pantalla en la que trabaja (fase de activación de PreservIA).» · `resultado` «3.500 tickets de soporte menos al mes; apertura de incidencia de 5:30 a 1 minuto; 45 € de ahorro estimado por ticket; 71% de recurrencia de usuarios activos. Premio Computing 2021.» · `frase_reunion` «En MAPFRE, con 15.000 puestos, el conocimiento puesto en la pantalla evitó 3.500 tickets al mes y la apertura de una incidencia pasó de cinco minutos y medio a uno. Lo dice MAPFRE: “sin salir de la pantalla en la que trabajamos”.» · `nota_de_uso` «Única referencia autorizada del área; se cuenta una sola vez, bajo PreservIA. En Smart Operations el mismo caso se cuenta como SmartHelp: un solo juego de cifras para las dos prácticas.» |

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas de la ficha y de los dos one-pagers.»
- `frases_cuenta.frases`:
  - «Por la jubilación» · «si hay expertos cerca del relevo» · «El 40% de los profesionales del sector serán senior en 2030 (Fundación Adecco, ManpowerGroup). Lo que se va con ellos no está en ningún manual: es el criterio para resolver lo que nunca se documentó. Lo capturamos mientras todavía están.»
  - «Por lo público» · «si es administración» · «43.000 funcionarios se jubilan en España en cinco años (BEPSAP 2024, MTDFP 2025), y el relevo llega por convocatoria, con meses de retraso, cuando ya no queda nadie que le enseñe. El Mentor Virtual espera al relevo.»
  - «Por la IA que están montando» · «si tienen un proyecto de GenAI sobre documentos» · «Una IA que solo lee documentos muertos es cara y mediocre. El 80% de lo que sabe la casa no está escrito. PreservIA es lo que alimenta a esa IA con lo que de verdad importa.»
  - «Por el soporte» · «si un equipo vive contestando cómo se hace esto» · «En MAPFRE, 3.500 tickets al mes eran preguntas de uso. Con el conocimiento en la pantalla, 3.500 tickets menos al mes y 45 € por ticket.»
- `frases_cuenta.regla`: «MAPFRE se cuenta aquí y solo aquí. Si la conversación se va a que la gente adopte la IA, es IAbility; si va a quién gobierna la IA, OGH-IA. Cuando el cliente muerde, el siguiente paso es diseñar el piloto con Alfredo.»
- `pitch_por_rol`:
  - Dirección de operaciones / negocio — «¿Cuántos procesos críticos dependen hoy de tres personas?» · le mueve: «que el SLA no se caiga cuando falte el experto.»
  - RRHH — «¿Cuántas jubilaciones tenéis en el plan de los próximos cinco años, y qué se va con ellas?» · le mueve: «relevo con Mentor Virtual; onboarding más rápido.»
  - CIO / responsable de IA — «¿Sobre qué documentos está aprendiendo vuestra IA?» · le mueve: «el conocimiento tácito como prerrequisito de la IA corporativa.»
  - Responsable de soporte — «¿Qué parte de vuestros tickets son preguntas de cómo se hace algo?» · le mueve: «MAPFRE: 3.500 tickets menos al mes.»
- `pitch_nota`: «Se entra por operaciones o RRHH, con la jubilación como disparador; el CIO entra cuando hay IA corporativa de por medio.»
- `objeciones`:
  - «Ya tenemos buscador con IA.» → «Encuentra lo escrito. Lo que se va con el experto no está escrito. Lo capturamos y lo ponemos en tu mismo buscador.»
  - «Nuestros expertos no tienen tiempo.» → «Dos entrevistas. Es el único esfuerzo que pedimos al experto, y es mientras está, que es cuando puede explicar y validar.»
  - «¿Quién mantiene eso después?» → «La organización, con gobierno y caducidad del contenido definidos en el discovery técnico. Lo que responde el Mentor lo aprueba alguien con nombre.»
  - «¿Cuánto cuesta?» → «El piloto tiene precio cerrado y dos meses; sales con una evaluación antes y después y decides el escalado. Sin compromiso hasta ver el resultado.»
- `preguntas_cualificacion`:
  - «¿Qué expertos se jubilan o rotan en los próximos dos años?»
  - «¿Qué procesos dependen de pocas personas?»
  - «¿Tenéis un proyecto de IA sobre documentación corporativa?»
  - «¿Trabajáis en Microsoft 365 y qué LMS tenéis?»
- `referencias_destacadas`: [`dc-caso-mapfre`].
- `material_interno`: [`digital-change-pains`, `digital-change-legacy-preview`]. Nota interna: PreservIA no es marca registrada (no lleva ®); WalkMe no compara; «Senior IT → Senior ID» como ángulo de sector público para otoño.
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`).**

1. Dolor «Mi mejor experto se jubila.» · frase «Su conocimiento no tiene por qué hacerlo.» · prueba «El 40% de los profesionales del sector serán senior en 2030 (Fundación Adecco, ManpowerGroup).» · paso «Piloto de dos meses: un área, un experto, dos entrevistas.»
2. Dolor «La IA que montamos responde mal.» · frase «Una IA que solo lee documentos muertos es cara y mediocre.» · prueba «MAPFRE: 3.500 tickets menos al mes con el conocimiento tácito activo.» · paso «Un Knowledge Book sobre el proceso que más duele.»
3. Dolor «El relevo llega y no tiene a quién preguntar.» · frase «El Mentor Virtual espera al relevo, 24/7.» · prueba «43.000 funcionarios se jubilan en cinco años (BEPSAP 2024, MTDFP 2025).» · paso «Línea base de onboarding y medición a los dos meses.»

---

## 3 · Oficina de Gobernanza Humana de la IA (OGH-IA) · Alfredo Zurdo

### 3.1 · Lo que hay en las tres piezas (extracción para el comercial)

**El problema, con fuente.** «No te falta IA. Te falta gobierno» (ficha, bloque 01). **El 88% de las organizaciones ya usa IA en alguna función** (McKinsey, The State of AI, 2025) y **solo el 36% tiene un marco formal de gobernanza de IA** (Pacific AI, 2025); **1 de cada 3 profesionales usa IA fuera del control de IT** (Lenovo, Work Reborn, 2026). Lo que ya está pasando (one-pager, bloque 01): copilots y agentes que cada área contrata por su cuenta, pilotos sin propietario, inversiones sin retorno medible, datos saliendo por aplicaciones que IT no ve; y el reverso, iniciativas valiosas bloqueadas por miedo regulatorio. «Lo que falta no es tecnología: es un sistema compartido para decidir qué se autoriza, qué se escala y qué se detiene.» El deck (lámina 8): «El 78% ya usa IA. Solo el 5% pasa del piloto. El cuello de botella no es técnico: falta quién gobierne.»

**El coste de esperar** (one-pager, bloque 02; ficha, bloque 06). El AI Act aplica por fases: art. 4 desde febrero de 2025, transparencia para deployers desde agosto de 2026, marcado de contenido desde diciembre de 2026, alto riesgo (Anexo III) desde el 2 de diciembre de 2027. «Inventariar y clasificar no se hace más fácil por esperar: quien empieza hoy llega con 18 meses de margen; quien espera, con semanas.» Sanciones: hasta 35 M€ o el 7% (prácticas prohibidas, art. 5) y hasta 15 M€ o el 3% (resto, incluido alto riesgo, «el tramo relevante aquí»). Y no hace falta mala intención: el Tribunal Supremo (STS 1119/2025) obligó a abrir el código del algoritmo BOSCO, que denegaba el bono social a hogares que cumplían los requisitos. «Cuando un sistema decide sobre derechos, el secreto no se sostiene.»

**Qué es** (ficha, bloques 01 y 02). «El servicio gestionado de Entelgy para gobernar la IA con autoridad interna, criterio experto y capacidad de ejecución: del inventario y la decisión al escalado, la supervisión y la retirada.» No es software ni licencia («nada que comprar ni desplegar»), no es auditoría puntual ni comité externo: «no decide por ti ni desaparece al entregar un informe». «Carriles, no barreras.» Tres capas: **tú gobiernas** (tu Comité de Gobernanza de IA, con autoridad formal para autorizar, condicionar, limitar o retirar; «el mando nunca se cede»); **el criterio** (el RGO-IA, Responsable de Gobernanza de IA, provisto por Entelgy como servicio recurrente: prepara las decisiones, traduce entre negocio, tecnología y regulación, exige evidencias, propone go, go condicionado, rediseñar, pausar o retirar); **las manos** (especialistas que se activan por encargo: arquitectura, datos, IA, ciberseguridad, legal, gestión del cambio). Cinco capacidades: Ordenar · Decidir · Escalar · Frenar · Aprender. «Frenar es el diferencial: legitimidad y criterios para decir no sin enfrentar a Negocio, TI, Legal o Personas. Frenar a tiempo también genera retorno.» La «H» de Humana: decide tu comité de dirección, no una herramienta.

**Qué gana el negocio** (ficha, bloque 03). Más retorno de la cartera de IA (los casos débiles se eliminan pronto; «el piloto eterno se acaba, y el OPEX que consumía, también»); menos exposición (la IA no controlada aflora, riesgos clasificados, supervisión humana definida); decisiones más rápidas (un marco predefinido evita discutir desde cero quién aprueba); capacidad permanente («el valor queda dentro… aunque el servicio termine»).

**Tres formas de entrar** (ficha, bloque 04). **Diagnóstico de gobernanza**: mapa de vacíos, inventario inicial clasificado por riesgo, go/no-go por iniciativa, kit mínimo operativo (política, roles, reglas de aprobación). **Proyecto de arranque**, a precio cerrado, para quien empieza de cero: Comité constituido, política de IA a medida, plan de alfabetización de dirección a plantilla (art. 4), inventario v1. **OGH-IA en marcha**: parte fija (RGO-IA y coordinación) más variable (especialistas por mes). «Sin dependencia: puedes contratar solo el arranque y quedarte el modelo.» «Modelo de servicio flexible: alcance, ritmo y piezas se dimensionan en la sesión inicial.»

**Por qué creernos** (ficha, bloque 05; one-pager, bloque 04). «No te dejamos un informe. Te instalamos una capacidad.» Modelo ya construido (roles, criterios, plantillas de decisión, controles) que se adapta en unos tres meses donde diseñarlo desde cero consume cerca de un año («estimación propia»). ISO/IEC 42001 da el sistema de gestión, OGH-IA lo opera cada mes y prepara la certificación, alineado con NIST AI RMF. Autoaplicación: Entelgy opera su propio comité, toda la plantilla formada con IAbility, consejeros y directivos dentro del programa. Sin caso de cliente publicable («[pendiente de autorización]» en el deck).

**Por quién se entra.** Dirección, CIO, CISO, Legal y Compliance, RRHH, negocio (ficha, cabecera). En voz de Alfredo: lo gordo es humano y de comité de dirección, no del CIO (reskilling al automatizar, derechos fundamentales, política de uso, quién aprieta el botón de parar); «la gobernanza es donde el intangible se vuelve tangible: hay multas detrás». Arkea como cliente que pidió el arranque a precio cerrado («no queremos IA para quitar plantilla»).

**Reglas del área que condicionan el copy.** Nombre definitivo, Oficina de Gobernanza Humana de la IA. Sin «CAIO as a service». Sin plazos publicados hasta resolver el fork (3–4 meses a precio cerrado, según la reunión del 9-jul; «modelo de servicio flexible», según el correo del 17-jun). Joanna Ferrer no es competidora, es interna (lleva la parte administrativa de las oficinas de gobernanza en delivery); la «H» es el diferencial frente a ese enfoque. Cristina Aparicio co-desarrolla la propuesta. No inventar referencias.

### 3.2 · Lo que chirría entre las piezas (para Alfredo)

- **78% (deck) frente a 88% (ficha y one-pager)** de «ya usa IA», las dos citando McKinsey, The State of AI, 2025. Es la cifra de dos ediciones distintas. Una.
- **El fork de plazos sigue vivo:** el deck cierra con «arranque de 3–4 meses a precio cerrado» (lámina 11) y la ficha dice «modelo de servicio flexible» y «adaptar el modelo, unos tres meses, estimación propia». El comercial va a leer las dos.
- **Sin referencia de cliente:** «[pendiente de autorización]» en el deck; Arkea solo en la voz de Alfredo. Es la única solución de las tres sin nada que colgar en Referencias salvo la autoaplicación.
- **STS 1119/2025 (BOSCO):** verificar número y fecha de la sentencia antes de que vaya a una hoja pública; la disciplina de fuentes lo pide.
- **«18 meses de margen»** desde el 2 de diciembre de 2027: en julio eran 17; en la demo del 10 de septiembre, 15. La frase es canon del proyecto, pero envejece cada mes.
- **Lenovo, Work Reborn, 2026** y **Pacific AI, 2025**: nombres de informe sin más señas. Valen si existen con ese título; conviene tener el enlace a mano por si MA pregunta.

### 3.3 · La página propuesta, campo a campo (`data/digital-change.json` → `soluciones[2]`, id `ogh-ia`)

**Cabecera.** `una_linea`: «Tu comité decide qué IA avanza y qué se para; nosotros ponemos el criterio y las manos.» (87). `estado`: `en_preparacion` hasta que Alfredo lea la página; después `vigente` (la oferta está en construcción, pero las piezas están publicadas). `pendiente.texto`: «Plazos del arranque (flexible o 3–4 meses a precio cerrado), 78% u 88%, y una referencia de cliente autorizada.»

**La propuesta (`propuesta`).**

- `que_es`: «Un servicio gestionado, no un software: instalamos en tu organización la capacidad de decidir qué IA avanza, qué se corrige y qué se detiene, y la operamos contigo cada mes. Tres capas: tu comité gobierna, con autoridad formal para autorizar, condicionar, limitar o retirar; nuestro Responsable de Gobernanza de IA pone el criterio y prepara cada decisión con evidencias; y especialistas (datos, ciberseguridad, legal, cambio) se activan cuando hay que ejecutar. Cinco capacidades: ordenar, decidir, escalar, frenar y aprender. El mando nunca se cede y el modelo se queda en casa.»
- `a_quien`: «Es decisión de comité de dirección, no del CIO: lo que se paga es quién responde de la IA, el reskilling al automatizar, los derechos fundamentales en los proyectos de riesgo y quién aprieta el botón de parar. Entras por Dirección, Legal y Compliance o el CISO; el CIO y negocio se sientan en el comité. Donde hay multas detrás: banca, seguros, sector público, salud, cualquiera con sistemas que decidan sobre personas.»
- `senal`: «Copilots y agentes que cada área contrata por su cuenta, pilotos sin propietario y sin retorno medible, datos saliendo por aplicaciones que IT no ve. O el reverso: iniciativas valiosas paradas por miedo legal. Nadie sabe cuántos sistemas de IA hay ni cuáles serán de alto riesgo en diciembre de 2027. Y alguien ha preguntado quién firma.»
- `por_que_nosotros`: «No te dejamos un informe: te instalamos una capacidad. Traemos un modelo ya construido, roles, criterios, plantillas de decisión y controles, que se adapta a tu organización en meses donde diseñarlo desde cero consume cerca de un año. Lo operamos en casa: Entelgy tiene su propio comité de gobernanza de IA, toda la plantilla formada con IAbility y consejeros y directivos dentro. Y la gobernanza no llega sola: cultura y conocimiento del mismo equipo, para que lo gobernado se sostenga.»
- `diferenciador`: «La H de Humana: decide tu comité de dirección, no una herramienta, y frenar a tiempo también es retorno.»
- `objecion_principal`: texto «Ya tenemos una oficina de IA / lo lleva el CIO.» · respuesta «Las oficinas que llevan el conteo (casos de uso, formularios, clasificación de riesgo) resuelven lo de menos. Lo gordo es del comité de dirección: qué se automatiza y qué pasa con la gente, qué sistema decide sobre derechos, quién puede parar. Va a pasar como con el RGPD. El diagnóstico te dice qué IA tienes y quién responde de ella.»
- `como_abres`: «¿Sabéis hoy cuánta IA tenéis en la casa, y quién responde de ella si algo sale mal?»
- `primer_paso`: `titulo` «Diagnóstico de gobernanza» · `plazo` null · `nota` «Qué IA tienes, quién responde por ella y cuáles de tus iniciativas deberían avanzar: mapa de vacíos, inventario clasificado por riesgo, go/no-go por iniciativa y kit mínimo (política, roles, reglas de aprobación). El alcance se cierra en una sesión inicial sin compromiso. Los plazos del arranque los fija Alfredo.»

**Material para el cliente (`materiales`).** Propuesta: `ogh-onepager` → `primer_contacto`; `ogh-ficha` → `para_dejar`. Notas de uso:

- One-pager: «Una cara para Dirección, Legal o el CISO: lo que ya está pasando, el coste de esperar (fechas del AI Act, sanciones, BOSCO), cómo se gobierna en tres capas y por qué Entelgy. Cierra en 30 minutos. Sin caso de cliente: la prueba es la autoaplicación.»
- Ficha: «Dos caras para dejar a Legal, Compliance, IT y compras: qué es y qué no es, el modelo en tres capas, qué gana el negocio, tres formas de entrar, por qué creernos y el AI Act por fases con las sanciones. Sin precio ni plazo: el modelo es flexible hasta que Alfredo cierre el arranque. Cierra en diagnóstico.»

**Referencias (`referencias`).** [`dc-caso-entelgy-labs`] (la misma pieza que en IAbility; su `resultado` ya recoge el comité de gobernanza). Sin caso de cliente hasta que Alfredo lo tenga; no se inventa.

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas de la ficha, el one-pager y la voz de Alfredo.»
- `frases_cuenta.frases`:
  - «Por el descontrol» · «si cada área ha contratado su IA» · «El 88% de las organizaciones ya usa IA y solo el 36% tiene un marco de gobernanza (McKinsey 2025; Pacific AI 2025). No te falta IA: te falta quién decida qué avanza, qué se corrige y qué se para.»
  - «Por la fecha» · «si aparece el AI Act» · «Alto riesgo el 2 de diciembre de 2027, y las obligaciones de transparencia ya en agosto de 2026. Inventariar y clasificar lleva meses y no se acelera esperando.»
  - «Por el palo» · «si hablan de riesgo o de multas» · «Hasta 15 M€ o el 3% para el alto riesgo, y no hace falta mala intención: al algoritmo BOSCO le bastó funcionar sin gobierno para acabar en el Supremo. Cuando un sistema decide sobre derechos, el secreto no se sostiene.»
  - «Por el piloto eterno» · «si el CFO pregunta por el retorno de la IA» · «Una cartera de IA que solo aprueba no genera retorno: lo consume. Frenar a tiempo el piloto que quema presupuesto también es retorno, y hace falta legitimidad para decir no.»
  - «Por la gente» · «si el comité teme la reacción de la plantilla» · «La H es de Humana: qué pasa con la gente cuando automatizas, qué sistema decide sobre derechos y quién puede parar. Eso no lo resuelve una herramienta de inventario.»
- `frases_cuenta.regla`: «Sin caso de cliente publicable: la prueba es que Entelgy lo opera en casa. No se cita a Arkea. Si la conversación se va a que la gente use la IA, es IAbility. Cuando el cliente muerde, trae a Alfredo o a Cristina con el diagnóstico.»
- `pitch_por_rol`:
  - Dirección general / Consejo — «¿Quién responde hoy de la IA de la casa si algo sale mal?» · le mueve: «un comité con autoridad y evidencias que aguantan una auditoría.»
  - Legal / Compliance / DPO — «¿Tenéis inventario de sistemas de IA clasificado por riesgo?» · le mueve: «AI Act por fases, ISO 42001 y NIST AI RMF, con rastro.»
  - CISO — «¿Cuánta IA usa vuestra gente fuera del control de IT?» · le mueve: «la IA no controlada aflora y se clasifica.»
  - CFO — «¿Cuántos pilotos de IA llevan más de un año sin pasar a producción?» · le mueve: «el piloto eterno se acaba, y el OPEX que consumía, también.»
  - CIO — «¿Quién aprueba hoy qué pasa a producción y con qué documentación?» · le mueve: «decisiones más rápidas con un marco predefinido; nada que instalar.»
- `pitch_nota`: «Se entra por Dirección o Legal; el CIO se sienta en el comité, no lo preside.»
- `objeciones`:
  - «Ya lo lleva el CIO / tenemos una oficina de IA.» → «Las oficinas administrativas llevan el conteo. Lo que se paga en un comité de dirección es lo humano: reskilling, derechos, quién para. Eso es la H.»
  - «Es burocracia que frena la innovación.» → «Carriles, no barreras: la gobernanza acelera lo que genera valor y detiene lo que expone. Un marco predefinido evita discutir desde cero quién aprueba cada vez.»
  - «Lo haremos cuando llegue el alto riesgo.» → «Diciembre de 2027 es el hito, no el aviso. Las obligaciones de transparencia ya están en vigor y clasificar los sistemas lleva meses. Quien empieza hoy llega con margen.»
  - «No queremos depender de un proveedor para gobernar.» → «El mando nunca se cede: decide tu comité. Puedes contratar solo el arranque y quedarte el modelo, o transferirlo cuando exista la estructura interna.»
  - «¿Cuánto cuesta?» → «El diagnóstico se dimensiona en una sesión inicial sin compromiso. El arranque va a precio cerrado y el servicio en marcha tiene una parte fija y otra variable según los especialistas que actives.»
- `preguntas_cualificacion`:
  - «¿Cuántos sistemas o iniciativas de IA tenéis, y quién los inventaría?»
  - «¿Existe un comité que decida sobre la IA, con autoridad para parar?»
  - «¿Alguno de vuestros sistemas decide sobre personas (crédito, empleo, acceso a servicios)?»
  - «¿Tenéis política de uso de IA y plan de alfabetización?»
- `referencias_destacadas`: [`dc-caso-entelgy-labs`].
- `material_interno`: [`digital-change-pains`, `digital-change-legacy-preview`]. Nota interna: sin plazos publicados hasta que Alfredo cierre el fork; Cristina Aparicio co-desarrolla; Joanna Ferrer es interna (delivery), no competencia; Arkea no se cita; tendrá componente de plataforma en construcción, no se vende.
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`).**

1. Dolor «Cada área tiene su IA y nadie sabe cuánta hay.» · frase «No te falta IA. Te falta gobierno.» · prueba «88% usa IA; 36% tiene marco de gobernanza (McKinsey 2025; Pacific AI 2025).» · paso «Diagnóstico de gobernanza: inventario clasificado por riesgo y go/no-go.»
2. Dolor «El AI Act nos va a pillar.» · frase «Inventariar y clasificar no se hace más fácil por esperar.» · prueba «Alto riesgo el 2 de diciembre de 2027; transparencia desde agosto de 2026.» · paso «Arranque: comité, política, plan de alfabetización e inventario v1.»
3. Dolor «Tenemos pilotos que no acaban nunca.» · frase «Una cartera de IA que solo aprueba no genera retorno: lo consume.» · prueba «Frenar es el diferencial: legitimidad para decir no.» · paso «RGO-IA como servicio recurrente, con especialistas por mes.»
4. Dolor «¿Y si un sistema nuestro decide mal sobre alguien?» · frase «Cuando un sistema decide sobre derechos, el secreto no se sostiene.» · prueba «BOSCO: el Supremo obligó a abrir el código (STS 1119/2025).» · paso «Supervisión humana definida (art. 14) y evidencias documentadas.»

---

## 4 · Lo que cambia en `data/materiales.json` (práctica `digital-change`)

| id | Hoy | Propuesta |
|---|---|---|
| `iability-onepager` · `ogh-onepager` · `preservia-privado` · `preservia-publico` | `para_dejar` | `primer_contacto` · notas de §1.3, §2.3 y §3.3 |
| `iability-ficha` · `preservia-ficha` · `ogh-ficha` | `reunion` | `para_dejar` · notas de §1.3, §2.3 y §3.3 |
| `digital-change-deck` | común · `reunion` | igual; nota: «Deck de Comité de 11 láminas: el oficio, las cuatro fugas, prêt-à-porter, un reto y una solución por lámina, urgencia del AI Act, por qué Entelgy y cierre. Ojo: lleva 150/9 (las piezas dicen 151/15/9), Bahía de Bizkaia sin firma y una cifra de MAPFRE (−82%) que no está en la ficha.» |
| nuevas `dc-caso-*` (4) | — | `tipo: referencia`, campos de §1.3 y §2.3 |
| `capacidades_ia` en `digital-change.json` | se pintan | dejan de pintarse (build.js l. 299-300) |

Todas las piezas nuevas o tocadas llevan `fecha_revision: "sep 2026"`.

---

## 5 · Contactos (`data/personas.json`)

- Alfredo: `alfredo.zurdo@entelgy.com` y «Head of Digital Change» en las tres fichas y el deck. Apellido y correo a `personas.json`.
- Segundo contacto de la práctica (hoy `null`, «en preparación»): **Cristina Aparicio**, `cristina.aparicio@entelgy.com`, firma la ficha de OGH-IA y co-desarrolla la propuesta; Agile Transformation Team Leader en el anexo del deck. Para OGH-IA como especialista segunda; para la práctica, a decidir con Alfredo (el deck da también a Abraham Rojo, BizDev & Growth Lead).

---

## 6 · Lo que necesito que decidas o compruebes

1. **Colapsar las tres listas de tres.** Dejar de pintar `capacidades_ia` y que las capacidades cuenten el oficio (medir, cambiar comportamientos, capturar, gobernar). Es lo que Alfredo pidió el 9-jul («le sobra la del medio») y lo que MA leería de una vez. La propuesta de arquitectura del área (paraguas o embebido) sigue abierta y no la toco.
2. **MAPFRE, un solo caso para dos prácticas.** Alfredo: una vez, bajo PreservIA, 15.000 puestos, 3.500 tickets menos, 45 €. Amador: SmartHelp, 25.000 puestos, ~157.500 €/mes. Hay que decidir con los dos quién lo cuenta y con qué cifras antes del 8; en el portal propongo la versión de Alfredo (es la autorizada y publicada) y que la de Amador remita a ella.
3. **La puerta de entrada del área** (Readiness de 25 minutos o Diagnóstico de Entrada de 4–6 semanas). Uso el Readiness en IAbility y en la práctica; el de Entrada pisa OGH-IA. Es el nudo rojo de Alfredo y MA pinta.
4. **Precios.** La ficha de PreservIA publica 14.900 €; las otras dos, no. En el portal no pinto ninguno, como en el resto de prácticas. Si Alfredo quiere que el comercial lo vea, va en `material_interno`.
5. **Plazos de OGH-IA:** no publico ninguno hasta que resuelva el fork (flexible o 3–4 meses a precio cerrado).
6. **Referencias:** Entelgy en casa como citable (es público); Admiral y Bahía de Bizkaia «confirmar por cuenta» hasta la firma; MAPFRE citable bajo PreservIA; OGH-IA sin caso. Si prefieres no crear la de Bahía de Bizkaia hasta que haya texto, se quita.
7. **Estado de las tres soluciones**: `vigente` cuando Alfredo lea las páginas, o `en_preparacion` hasta cerrar la puerta de entrada. Lo decides con MA.
8. **El correo de Alfredo en personas.json** y Cristina como segundo contacto: son los datos de las fichas; que él confirme.

Supuestos que deberías poner a prueba antes de compartir con Alfredo: que la ficha de IAbility del hub (sin el dato del WEF) es la misma que circula por Hipatia; que Admiral no tiene autorización escrita (el fichero solo registra MAPFRE, pero la pieza lleva su nombre desde julio); y que el «−82% de apertura de tickets» del deck no es una cifra distinta de los 3.500 tickets (si son 3.500 de 4.270, cuadraría, y entonces habría que decir de dónde sale).

---

## 7 · Lo que he leído

- `Entelgy/ia-digital-change/decks/digital-change-deck.html` (11 láminas + anexo de equipo; cada lámina en un iframe `srcdoc`, decodificadas en tu equipo).
- `Entelgy/ia-digital-change/fichas/Ficha_IAbility.html` · `onepager-iability.html` · `Ficha_PreservIA_standalone.html` · `PreservIA-onepager-sectorprivado.html` · `PreservIA-onepager-sectorpublico.html` · `Ficha_OGH-IA.html` · `OnePager_OGH-IA.html` (15-jul).
- `alfredo-estado-trabajo.md` (proyecto, 15-jul); `data/digital-change.json`; las 12 piezas de la práctica en `data/materiales.json`; las cinco entradas de Digital Change en `data/personas.json`; el texto visible de `/practicas/digital-change/` y de las tres soluciones.
- No he leído: los PDF y el PPTX del deck (mismo contenido), el mapa de pains, el previo y el análisis de competencia del área, `Alfredo-Zurdo-correos.md` (lo cito por el resumen del fichero de estado), el doc de TI y Compras de Alfredo, ni la slide corporativa PNG.
