# Contenido real para la v3 · Software Development · Mantenimiento evolutivo y Asistencia técnica aumentada

*Vista previa para Susana · 3 de septiembre de 2026 · rama `claude/hipatia-v3-static-catalog-49l3yx`. Sin cambios en la web. Leído: el deck de la práctica (`ciclo-software/decks/entelgy-ciclo-software.html`, v3 de julio, 13 láminas + 3 anexos, el que la v3 llama «Deck ejecutivo C-Suite · Modernización»), la ficha y el one-pager de Mantenimiento Evolutivo Inteligente (`fichas/ficha-mantenimiento.html`, `fichas/onepager-mantenimiento.html`), la ficha y el one-pager de Asistencia Técnica Aumentada (`fichas/ficha-asistencia.html`, `fichas/onepager-asistencia.html`) y `jorge-herrero-estado-trabajo.md` (proyecto), que es el que fija qué se puede decir. Modernización ya está completa en la v3; aquí solo entra lo que estas piezas cambian en ella.*

---

## El problema

Mantenimiento evolutivo y Asistencia técnica aumentada tienen hoy en la v3 la misma plantilla que el resto: un «Qué es» sin mecanismo, un «Por qué Entelgy» que firmaría cualquiera, sin referencias aunque DGOJ y el Ministerio de Ciencia son casos de mantenimiento evolutivo ya firmados por Jorge en julio, y un «Para prepararte» en preparación. Y en las cuatro piezas hay justo lo que un comercial necesita: el mecanismo que nadie más lleva a un contrato (la incidencia evitada se convierte en evolución; el ahorro por IA baja el precio), la medición que va en la factura (IGE e ISA sobre el Jira y el SonarQube del cliente), las cláusulas que quitan el miedo (arrancas igual o por debajo, ±10%, tres meses en paralelo, sin lock-in), por quién se entra y qué decir cuando el cliente ya tiene proveedor por horas.

Hay una complicación que no había en Process Intelligence. Jorge cambió dos cosas en julio, después de que se publicaran las fichas y los one-pagers (10-jul): la Asistencia técnica ya no va con UCE sino con un modelo propio de **créditos de modernización** medido por un índice SDPI (14-jul), y **Foreworth deja de ser «tercero certificador»** para ser solo contraste de mercado, porque la medición canónica es IGE más ISA sobre las herramientas del cliente (10 y 14-jul). El deck de julio ya recoge las dos cosas; las cuatro piezas de servicio, no; y la página de Modernización de la v3 tampoco. Lo que propongo sigue lo último que dijo Jorge.

---

## 0 · Lo que cambia en la práctica · `/practicas/software-development/` (`data/software-development.json`)

**Primer avance** (`primer_avance`). Hoy: «Assessment de modernización · dos semanas. Primera lectura de la aplicación prioritaria… Triaje del portfolio y business case.» El deck de julio lo llama «Diagnóstico de cartera · precio cerrado · 10–15 días · por dónde empezar, con su business case; valor en la semana 1», y es el mismo paso para las tres soluciones. `CLAUDE.md` fija «dos semanas» para el Assessment de Modernización, así que no toco el nombre en la solución; a nivel de práctica propongo: `titulo` «Diagnóstico de toda la cartera», `plazo` «10–15 días», `nota` «Precio cerrado. Te dice por dónde empezar y con qué business case, con valor en la primera semana. Después, si el cliente quiere pasar a capacidad de entrega, sprint de calibración de 4–6 semanas y tres meses en paralelo con los dos modelos.» Que Jorge confirme si «Assessment de modernización» y «Diagnóstico de cartera» son la misma cosa con dos nombres (supuestos).

**Capacidades** (`capacidades`). Se quedan (Modernizar · Sostener · Especificar · Aumentar); son las cuatro necesidades de la lámina 7 del deck.

**Una nota nueva de práctica** que sale del deck (lámina 8) y no está en ninguna página: cómo se responde del resultado. Cabe en `capacidades_nota`, sustituyendo la de Spec-Driven y SEAS de la auditoría de copy: «Si te preguntan cómo respondemos del resultado: en Mantenimiento y Modernización se contrata capacidad de entrega (UCE) y cada mes van en la factura dos índices, el IGE (lo entregado) y el ISA (la salud del aplicativo), calculados sobre las herramientas del cliente. La Asistencia técnica sigue otro modelo, el de créditos de modernización. Spec-Driven y la Factoría SEAS van dentro de las tres soluciones.»

---

## 1 · Mantenimiento evolutivo · Jorge Herrero

### 1.1 · Lo que hay en las piezas (extracción para el comercial)

**El problema, con fuente.** «El run se come el change»: la mayor parte del presupuesto de TI se va en sostener lo que ya existe, y lo que solo se sostiene no evoluciona (Gartner, modelo Run-Grow-Transform). **La deuda técnica es el 20–40% del valor de los activos** (McKinsey, 2025, según el deck; la v3 lo atribuye hoy a Gartner). DORA entró en la cartera viva: la resiliencia operativa hay que demostrarla sobre los sistemas en producción, no solo sobre lo nuevo (Reglamento (UE) 2022/2554). Y la frase de Jorge para el hero de su mapa: «el mantenimiento es la puerta cerrada del negocio que va lento»; su pain: convertir un mantenimiento caro e inevitable en la vía por la que negocio consigue lo que pide (one-pager bloque 01; deck láminas 2–3; `jorge-herrero-estado-trabajo.md`, 11-may).

**Qué es.** Un solo servicio en tres capas sobre la misma maquinaria que moderniza: **Sostenimiento** (lo crítico disponible, con SLAs vinculados a la entrega y no al tiempo), **Modernización progresiva** (la deuda y las vulnerabilidades críticas bajan dentro del propio mantenimiento, sin abrir proyecto aparte) e **Innovación con IA** (la IA analiza el código, anticipa la incidencia y automatiza el evolutivo). Más una cuarta pieza, **medición y visibilidad**: el índice de entrega (IGE) y la salud del aplicativo (ISA, 0–100) van en cada factura y en un portal 24/7, calculados sobre el Jira y el SonarQube del cliente (ficha bloque 02). Las tres capas son una configuración objetivo que se calibra por cartera; la ficha da rangos (40–50 / 15–30 / 10–20) y el deck de cliente de UCE otros (55/25/20): Jorge lo tiene en su lista de reconciliación, así que en el portal no van números de reparto.

**El mecanismo que nadie más firma.** «El resto cobra por incidencia; nosotros la convertimos en evolución»: el éxito preventivo no penaliza la factura, la incidencia que se evita se redirige a evolutivo, en el mismo contrato. Y el ahorro de coste que trae la IA se reparte con el cliente en el contrato: la ficha dice el 40%, la lámina 9 del deck dice el 20% y la lámina 10 otra vez el 40%. Jorge confirmó el 40% el 10-jul (sobre el ahorro de coste de entrega por IA, revisión anual, reparto 60/40), pero pidió el 14-jul que «ninguna cifra como dogma» y que las cifras económicas del modelo no salgan a cliente. En el portal: «una parte medida del ahorro baja tu precio, en el contrato», y el 40% solo en «Para prepararte» con la nota de que la ficha lo lleva y está pendiente de confirmar para documento público (es lo que ya dice la nota de la ficha de Modernización).

**Lo que quita el miedo, en el contrato.** Arrancas igual o por debajo de lo que pagas hoy, con tolerancia del ±10% y un suelo de precio. Si el IGE baja del 85%, la factura se ajusta sola y hay plan de acción en 48 horas; por encima, bonificación. Si el cliente quiere volver, tres meses en paralelo y sin penalización (ficha bloques 03–04; deck lámina 9). El umbral exacto (85% o escalones) está en la lista de reconciliación de Jorge.

**Cómo se entra.** Diagnóstico de cartera (10–15 días, precio cerrado) → sprint de calibración (4–6 semanas: se mide el aplicativo y se fija la unidad de capacidad con base objetiva) → arranque en paralelo (3 meses con los dos modelos) → migración a UCE solo si el paralelo convence (deck lámina 12; Jorge validó esta lámina el 14-jul como «la que un comercial cuenta solo»). Jorge, 14-jul: el UCE es hoy teórico y opcional; se factura tradicional y el ejercicio se hace en paralelo.

**Los casos.** **DGOJ** (regulador estatal, mantenimiento evolutivo inteligente): entre un 40% y un 60% menos de coste de mantenimiento según sistema; sign-off Jorge 16-jul. **Ministerio de Ciencia · AEI**: +40% de cumplimiento de SLA con el mismo contrato y presupuesto; sign-off 16-jul. **H10 Hotels**: el deck lo archiva como mantenimiento evolutivo (análisis de producción sobre legacy y adopción de Spec-Driven, ~−90% del tiempo de documentación); sign-off 16-jul. Los tres existen ya como piezas en la v3 (`mod-caso-dgoj`, `mod-caso-miciu`, `mod-caso-h10`), colgadas solo de Modernización. La ficha añade dos anónimos: sector público con el servicio en marcha en la primera semana y SLA sobrecumplido, y un caso de IA preventiva. UNED también es cartera activa de mantenimiento.

**Por quién se entra y contra quién.** CIO y responsable de aplicaciones; el CFO en cuanto se habla de presupuesto (mapa 2; deck lámina 7: «compra · CIO · CFO»). Competencia real en mantenimiento: Big 4, Minsait y Babel. Sectores donde ya se opera así: banca y servicios financieros, sector público, telco, industria y energía (deck lámina 11).

**Reglas de Jorge que condicionan el copy.** Foreworth es contraste de mercado, no certificador ni línea base; la medición es IGE + ISA sobre las herramientas del cliente. Cifras de venta públicas y referenciables como rango («hasta»), nunca como garantía: +70% de productividad en migración de legacy, «deuda técnica superada», ~100% de cobertura. Las cifras económicas internas (€/UCE, tabla de equivalencias, reparto 60/40, Foreworth en euros) no salen a cliente. Referencias con nombre: todas, en presentación, con prudencia; el envío formal es otra puerta. «Garantizar» no se dice. Competidores: NTT, Capgemini, Minsait, GFI; Inetum no.

### 1.2 · Lo que chirría entre las piezas (para Jorge)

- **Foreworth como «tercero certificador»** en la ficha y el one-pager (10-jul): Jorge lo bajó a contraste de mercado el 10-jul y lo remató el 14-jul («no sabe medir productividad con IA»). El deck de julio ya lo dice bien (lámina 8); las fichas, no. Lo mismo pasa en la página de Modernización de la v3 (ver §3).
- **El reparto del ahorro**: 40% en la ficha y en la lámina 10 del deck; 20% en la lámina 9. Una de las dos está mal.
- **Las tres capas** con dos juegos de porcentajes (fichas: 40–50 / 15–30 / 10–20; deck de cliente UCE: 55/25/20). Es el punto B de la lista de reconciliación de Jorge (10-jul).
- **El deck**, además de los edits que Jorge pidió el 14-jul, lleva «**Retorno garantizado**» (anexo 3) y «**empezar hoy da 18 meses de margen**» (lámina 12), que caduca: desde septiembre son quince. Y sigue en «revisar» en la v3, con razón.
- **La fuente del 20–40%** de deuda técnica: el deck dice McKinsey 2025 y la objeción de la v3 dice Gartner. Falta la obra en los dos.

### 1.3 · La página propuesta, campo a campo (`data/software-development.json` → `soluciones[1]`, id `mantenimiento`)

**Cabecera.** `una_linea`: «El run deja de devorar el change: lo que ahorras en sostener se reinvierte en evolucionar.» (90 caracteres; es la frase del one-pager, literal). `estado`: `en_preparacion` hasta que Jorge la lea; después, `vigente`.

**La propuesta (`propuesta`).**

- `que_es`: «Reorganizamos el mantenimiento en un solo servicio sobre la misma maquinaria que moderniza: sostenemos lo crítico, bajamos la deuda que frena dentro del propio mantenimiento y dejamos que la IA analice el código, anticipe la incidencia y automatice el evolutivo. La incidencia que evitamos no se factura: se redirige a evolución. Y la entrega y la salud del aplicativo van en cada factura.»
- `a_quien`: «Quien tiene una cartera en producción con contrato de mantenimiento por horas o por ticket y una lista de evolutivos que negocio pide y no salen. Entras por el CIO o el responsable de aplicaciones; el CFO entra en cuanto se habla de presupuesto. Donde ya operamos así: banca y servicios financieros, sector público, telco, industria y energía.»
- `senal`: «El presupuesto de IT se va en sostener lo que ya existe. Cada cambio tarda meses. El proveedor cobra por incidencia. DORA o NIS2 piden demostrar resiliencia sobre lo que está en producción.»
- `por_que_nosotros`: «El resto cobra por incidencia; nosotros la convertimos en evolución: las horas que dejan de ir a incidencias pasan a evolutivos en el mismo contrato. La entrega (IGE) y la salud del aplicativo (ISA) van en cada factura, calculadas sobre tu propio Jira y SonarQube; si la entrega cae del umbral, la factura se ajusta. Una parte medida del ahorro que trae la IA baja tu precio cada año, en el contrato. En un regulador estatal el mantenimiento cuesta hoy entre un 40 y un 60% menos.»
- `diferenciador`: «La incidencia evitada se convierte en evolución, la entrega se mide en la factura y el ahorro por IA se reparte en el contrato.»
- `objecion_principal`: texto «¿Es solo apagar fuegos?» · respuesta «No. Es sostener, modernizar poco a poco e innovar con IA en un solo servicio. La incidencia que evitamos no se factura, se reinvierte en evolutivo, y lo ves cada mes en la factura con dos índices: lo entregado y la salud de tu aplicativo. Arrancas igual o por debajo de lo que pagas hoy.»
- `como_abres`: «¿Cuánto del presupuesto de mantenimiento se va en apagar fuegos, y cuánto en lo que negocio pide?»
- `primer_paso`: `titulo` «Sprint de calibración» · `plazo` «4–6 semanas» · `nota` «Medimos tu aplicativo sobre tu propio código y fijamos la línea base y la unidad de capacidad. Después, tres meses en paralelo con los dos modelos: pasas a capacidad de entrega solo si el paralelo te convence, y si vuelves, tres meses en paralelo sin penalización. Antes, si hace falta ordenar la cartera, el diagnóstico de 10–15 días a precio cerrado. Precio, con Jorge.»

**Material para el cliente (`materiales`).** Hoy: `software-mantenimiento-onepager`, `software-mantenimiento-ficha`, `software-pains-mantenimiento`. Añadir `mod-deck-ejecutivo` (es el deck de la práctica; la lámina 7 y la 9 son las de mantenimiento) y ajustar `momento_comercial` a la doctrina: one-pager → `primer_contacto`; deck → `reunion`; ficha → `para_dejar`. Notas de uso para las dos piezas, con el aviso que toca: «Una cara para abrir la primera reunión: el run deja de devorar el change, y por qué Entelgy. Dice «tercero certificador» donde Jorge ya dice contraste de mercado: cuéntalo tú bien.» / «Dos caras para quien lo valida dentro (CIO, compras): las tres capas, la medición en la factura y las cláusulas. Los porcentajes de las capas y el reparto del ahorro están en revisión con Jorge; cita el mecanismo, no el número.»

**Referencias (`referencias`).** [`mod-caso-dgoj`, `mod-caso-miciu`, `mod-caso-h10`], que ya existen con sign-off; solo hay que colgarlas de la solución (y `solucion` de esas tres piezas puede seguir en `modernizacion` o pasar a lista; lo decide Código, no cambia nada visible).

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas de la ficha, el one-pager y el deck de julio. Elige la que responde a lo que te han dicho.»
- `frases_cuenta.frases`:
  - «Por el presupuesto que ya está comprometido» · «si el CIO dice que en enero ya no le queda margen» · «No vengo a pedir partida nueva. Lo que hoy se va en sostener se reinvierte en evolucionar: la incidencia que evitamos pasa a evolutivo en el mismo contrato, y arrancas igual o por debajo de lo que pagas hoy.»
  - «Por negocio que espera» · «si negocio pide y el sistema dice que en seis meses» · «El mantenimiento es la puerta cerrada por la que negocio no pasa. Con el sistema documentado y gobernado con especificaciones, tocar deja de dar miedo, y en la Agencia Estatal de Investigación el cumplimiento de SLA subió un 40% con el mismo contrato.»
  - «Por el proveedor que cobra la incidencia» · «si el contrato actual es por ticket o por horas» · «A tu proveedor le interesa que haya incidencias: su ingreso sube con cada una. A nosotros nos interesa evitarlas: las horas que dejan de ir a incidencias pasan a evolutivos, y si la entrega cae del umbral, la factura se ajusta. Está en el contrato.»
  - «Por la regulación sobre la cartera viva» · «si aparecen DORA o NIS2» · «La resiliencia hay que demostrarla sobre lo que está en producción, no solo sobre lo nuevo. La evidencia técnica la genera el propio trabajo de mantenimiento, no una auditoría aparte.»
- `frases_cuenta.regla`: «Estas frases abren y cualifican. Si la conversación va a modernizar una aplicación concreta, es Modernización; si va a reforzar el equipo, Asistencia técnica. Cuando el cliente muerde, el siguiente paso es traer a Jorge.»
- `pitch_por_rol`:
  - CIO — «¿Qué parte del presupuesto de IT se va en sostener lo que ya existe?» · le mueve: «que el run deje de comerse el change; la incidencia evitada pasa a evolutivo.»
  - Responsable de aplicaciones — «¿Cuánto tarda hoy una petición de negocio en llegar a producción?» · le mueve: «especificaciones vivas y un evolutivo que se financia con lo que se deja de gastar en corregir.»
  - CFO — «¿Cerráis el presupuesto de mantenimiento por horas o por lo que se entrega?» · le mueve: «mismo importe, más valor; una parte medida del ahorro por IA baja el precio, en el contrato.»
  - CISO / Compliance — «¿Podéis demostrar resiliencia (DORA) sobre la cartera en producción?» · le mueve: «la evidencia técnica que pide el regulador, generada mientras se mantiene.»
- `pitch_nota`: «Se entra por el CIO o por aplicaciones; el CFO decide en cuanto hay número.»
- `objeciones`:
  - «Ya tenemos un contrato de mantenimiento con otro proveedor.» → «No pedimos cambiarlo de golpe. Diagnóstico de cartera, sprint de calibración y tres meses en paralelo con los dos modelos; pasas a capacidad de entrega solo si el paralelo te convence. Y si vuelves, tres meses en paralelo sin penalización.»
  - «Esto es subir el precio del mantenimiento.» → «Arrancas igual o por debajo de lo que pagas hoy, con tolerancia del ±10% y un suelo de precio. La evolución se financia con lo que se deja de gastar en corregir, no con partida nueva.»
  - «Nuestro proveedor ya usa IA.» → «La pregunta es quién se queda con el ahorro. En un contrato por horas, el proveedor. Aquí una parte medida baja tu precio cada año, en el contrato.»
  - «¿Y si la IA mete más deuda?» → «Sin control, sobre deuda previa la IA mete más deuda (Google, State of DevOps 2025). Por eso la salud del aplicativo (ISA) va en cada factura: ves si tu software mejora o solo aguanta.»
- `preguntas_cualificacion`:
  - «¿Qué porcentaje del presupuesto de IT va a mantener lo que ya existe?»
  - «¿Cuántas incidencias al mes, y quién cobra por ellas?»
  - «¿Hay una lista de evolutivos que negocio pide y no salen?»
  - «¿Os aplica DORA o NIS2 sobre sistemas que ya están en producción?»
- `referencias_destacadas`: [`mod-caso-dgoj`, `mod-caso-miciu`].
- `material_interno`: [`software-pains-mantenimiento`, `mod-argumentario`] y, si se crea, `mei-mensajes-clave` con las keynotes de abajo. Nota interna para el comercial (va en la guía, no en pantalla): el 40% del ahorro está en la ficha y pendiente de confirmar para documento público; las cifras económicas del modelo (€/UCE, tabla de equivalencias, reparto interno) no salen a cliente.
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`).**

1. Dolor «En enero ya tengo el 80% del presupuesto comprometido en mantener lo que hay.» · frase «Lo que se va en sostener se reinvierte en evolucionar: la incidencia evitada pasa a evolutivo en el mismo contrato.» · prueba «DGOJ: entre un 40 y un 60% menos de coste de mantenimiento.» · paso «Un sprint de calibración de cuatro a seis semanas sobre tu propio código. Te presento a Jorge.»
2. Dolor «Negocio pide y el sistema dice que en seis meses.» · frase «El mantenimiento es la puerta cerrada del negocio que va lento; con especificaciones vivas, tocar deja de dar miedo.» · prueba «Agencia Estatal de Investigación: +40% de cumplimiento de SLA con el mismo contrato.» · paso «Diagnóstico de cartera de diez a quince días: por dónde empezar.»
3. Dolor «Cada incidencia me la cobran.» · frase «El resto cobra por incidencia; nosotros la convertimos en evolución, y si la entrega cae del umbral la factura se ajusta.» · prueba «IGE e ISA en cada factura, calculados sobre tu Jira y tu SonarQube.» · paso «Tres meses en paralelo con los dos modelos; decides con datos.»
4. Dolor «DORA me pide demostrar resiliencia sobre lo que ya está en producción.» · frase «La evidencia técnica la genera el propio trabajo de mantenimiento.» · prueba «Ya operamos así en banca, sector público, telco, industria y energía.» · paso «Empezamos por la cartera regulada.»

---

## 2 · Asistencia técnica aumentada · Jorge Herrero

### 2.1 · Lo que hay en las piezas (extracción para el comercial)

**El problema, con fuente.** El talento dejó de cerrarse contratando: la UE necesita 20 millones de especialistas ICT para 2030 y no llega (Comisión Europea, Década Digital 2030; deck lámina 3). El modelo hora-perfil no protege: se paga por horas y por CV, pero el riesgo de que la persona clave se vaya lo asume el cliente, y cuando el perfil rota el sistema se queda sin quien lo entienda (one-pager bloque 01). Y la IA sin gobierno: los equipos creen que van un 20% más rápido y miden que van un 19% más lento (METR, 2025; deck lámina 4).

**Qué es, según la pieza de julio.** Sustituir la hora-perfil por una unidad de capacidad de entrega: se contrata resultado, la capacidad es sustituible sin que el conocimiento se vaya con la persona, cada perfil entra adscrito a un Centro de Excelencia (nodo ancla, red de especialistas y capacidad flotante, España y LATAM), su entrega se mide sobre el Jira y el SonarQube del cliente y va en la factura, la bonificación va por lo que aporta, y el conocimiento del sistema queda en la especificación. Tres horizontes: estabilización (0–6 meses), equipo aumentado (6–18), fin de la hora-perfil (18–36). Sin lock-in: tres meses en paralelo y sin penalización (ficha bloques 01–03).

**Qué es, según Jorge el 14 de julio (y el deck).** La AT «sigue otro modelo, no UCE: su propio esquema de créditos» (deck lámina 8). Narrativa de Jorge: «hago la actividad que esperas y además te modernizo». El ahorro de eficiencia que trae la IA se convierte en **créditos de modernización** que el cliente gasta en un catálogo cerrado de servicios S/M/L sobre su propia cartera (refactorización, upgrades de framework, testing automatizado, DevOps). La productividad se mide con un índice, el **SDPI**: velocidad de entrega, deuda técnica a la baja, automatización, adopción de IA y calidad (deck anexo 3). Los factores por nivel de tecnología (×1 → ×2), la contratación típica y el «20–30% de mejora sostenida» son mecánica interna que Jorge pidió no prometer como cifra. Jorge aún no lo ha enseñado al equipo comercial.

**Por qué Entelgy.** «El nearshore vende perfiles; nosotros firmamos capacidad»: contratas entrega, no currículums; la capacidad es sustituible; sin lock-in; el ahorro se reparte (ficha bloque 04). Frente a Globant, EPAM y el nearshore, que dan horas y CVs.

**Los casos.** Banca y servicios financieros: equipos adscritos a fábrica de software sobre core crítico, más de 250 profesionales en la cuenta, en España, Perú y Chile (referencia bajo NDA; Jorge: buena referencia, pero no es Spec-Driven, es uso aumentado de asistentes). Industria y energía: capacidad de desarrollo con la productividad medida por un tercero (Foreworth, contraste). Targets de piloto para equipo aumentado, solo internos: Wolters Kluwer, UNED, Randstad (pendientes de autorización). No hay ninguna migración AT → equipo aumentado documentada (Jorge, 30-abr).

**Por quién se entra y contra quién.** CIO y director de aplicaciones; Compras aparece en cuanto se habla de tarifa, y es la silla que en esta solución pesa (mapa 3; deck lámina 7: «compra · CIO · Compras»). Competencia: Globant, EPAM, nearshore.

**Reglas que condicionan el copy.** Lo mismo que en Mantenimiento (Foreworth como contraste; nada de cifras económicas internas; «garantizar» fuera). Más: la «sustitución en 5 días» no está confirmada como compromiso oficial; el «Spec Master del Mes» es interno; los factores del modelo de créditos no se prometen.

### 2.2 · Lo que chirría entre las piezas (para Jorge)

- **La ficha y el one-pager venden la Asistencia técnica con UCE** («unidad de capacidad», «4 niveles», «el 40% del ahorro medido, a tu precio»), y Jorge dijo el 14-jul que el UCE no aplica a la AT y que su modelo es el de créditos + SDPI. El deck de julio ya va con créditos; las dos piezas de servicio, no. Por la regla de la revisión 9 (cambios pendientes del dueño), las dos deberían estar en «revisar», no en «vigente». Lo decides tú.
- **Foreworth «tercero certificador»** en las dos piezas (ver Mantenimiento).
- **La ficha lleva «Documento público»** y nombra «4 niveles de capacidad» que en el modelo de créditos no existen como tal.
- El deck (anexo 3) lleva «**Retorno garantizado · 200 MC día 1**» y «**20–30% de mejora sostenida**» sin fuente: es justo lo que Jorge pidió no prometer.

### 2.3 · La página propuesta, campo a campo (`data/software-development.json` → `soluciones[2]`, id `asistencia-tecnica`)

**Cabecera.** `una_linea`: «Contratas entrega, no currículums: capacidad medida y sustituible por contrato.» (79 caracteres; sale de la ficha). `estado`: `en_preparacion` hasta que Jorge lea la página; después, `vigente`.

**La propuesta (`propuesta`).**

- `que_es`: «Reforzamos tu equipo de desarrollo con capacidad medida, no con horas atadas a un nombre. Cada perfil entra adscrito a un Centro de Excelencia, su entrega se mide sobre tus propias herramientas y el conocimiento del sistema queda en la especificación, no en una persona que puede irse. Y el ahorro de eficiencia que trae la IA no se pierde: se convierte en créditos de modernización que gastas en tu propia cartera.»
- `a_quien`: «Quien tiene perfiles externos dentro del equipo (asistencias técnicas, nearshore, fábrica) y no encuentra o no retiene talento. Entras por el CIO o el director de aplicaciones; Compras aparece en cuanto se habla de tarifa, y conviene tenerlo dentro desde el principio. Foco: banca, sector público e industria.»
- `senal`: «Perfiles clave que se van y se llevan el conocimiento. Contratos por hora-perfil donde nadie mide lo que entrega cada persona. Meses con asistentes de IA en el equipo sin saber qué producen. Compras que solo compara tarifa.»
- `por_que_nosotros`: «El nearshore vende perfiles; nosotros firmamos capacidad: contratas entrega, no currículums. Cada perfil viene con un Centro de Excelencia detrás (España y LATAM, con red de especialistas y capacidad flotante), su entrega se mide sobre tu Jira y tu SonarQube y va en la factura, y si rota, el conocimiento se queda en la especificación. El ahorro de eficiencia de la IA vuelve a tu cartera como créditos de modernización, con un catálogo cerrado de servicios donde gastarlos.»
- `diferenciador`: «Capacidad sustituible por contrato, el conocimiento en la especificación y el ahorro de la IA devuelto como créditos de modernización.»
- `objecion_principal`: texto «¿Esto es solo poner perfiles?» · respuesta «No. Tres cosas que no están en un contrato de horas: la unidad es la entrega y se mide sobre vuestras herramientas; cada persona tiene un Centro de Excelencia detrás, así que nunca dependes de un nombre; y el conocimiento queda en la especificación cuando alguien rota. Y si quieres volver, tres meses en paralelo sin penalización.»
- `como_abres`: «¿Cuántas personas externas tenéis en el equipo, y qué sabéis de lo que entrega cada una?»
- `primer_paso`: `titulo` «Un primer tramo de capacidad» · `plazo` «medido desde el primer mes» · `nota` «La capacidad justa, adscrita a un Centro de Excelencia y medida sobre vuestras herramientas desde el día uno. Escalas o la sustituyes por contrato. El modelo de créditos de modernización lo presenta Jorge (anexo 3 del deck); no lo cuentes con cifras.»

**Material para el cliente (`materiales`).** Hoy: `software-asistencia-onepager`, `software-asistencia-ficha`, `software-pains-asistencia`. Añadir `mod-deck-ejecutivo` (láminas 7 y anexo 3). `momento_comercial`: one-pager → `primer_contacto`; deck → `reunion`; ficha → `para_dejar`. Notas de uso con el aviso: «Una cara para abrir la primera reunión: contratas entrega, no currículums. Va con el modelo de julio (UCE); Jorge lo cambió a créditos de modernización: sirve para la conversación, no lo envíes hasta la versión corregida.» / «Dos caras para quien lo valida dentro (CIO, compras). Mismo aviso: modelo de julio, pendiente de la versión con créditos de modernización.»

**Referencias (`referencias`).** Dos piezas nuevas, tipo `referencia`, práctica `software-development`, solución `asistencia-tecnica`, dueño Jorge, `citable` `confirmar_por_cuenta` (referencias bajo NDA; Jorge las usa en presentación con prudencia):

| id | Campos |
|---|---|
| `at-caso-banca-latam` | `titulo` «Banca y servicios financieros · fábrica sobre core crítico» · `contexto` «Entidad financiera con fábrica de software sobre un core crítico, en España, Perú y Chile.» · `que_hicimos` «Equipos adscritos a la fábrica, con la capacidad medida y sustituible por contrato y uso aumentado de asistentes de IA.» · `resultado` «Más de 250 profesionales en la cuenta, en tres países.» · `frase_reunion` «En una entidad financiera tenemos más de 250 personas sobre su core crítico, en tres países, con la capacidad medida y sustituible por contrato. El nombre te lo confirmo por cuenta.» · `nota_de_uso` «Referencia bajo NDA. No es Spec-Driven: es capacidad con asistentes de IA. No atribuirla al método.» |
| `at-caso-industria-energia` | `titulo` «Industria y energía · productividad medida» · `contexto` «Capacidad de desarrollo sobre el stack del cliente.» · `que_hicimos` «Capacidad de desarrollo con la productividad medida en el código, no en las horas, y contrastada con el mercado (Foreworth).» · `resultado` «Productividad medida por un tercero; cifras bajo NDA.» · `frase_reunion` «En una industrial la productividad del equipo se mide en el código y se contrasta con un tercero, no se declara. Las cifras las vemos por cuenta.» · `nota_de_uso` «Referencia bajo NDA. Foreworth es contraste de mercado, no certificador.» |

**Para prepararte (`kit`).**

- `frases_cuenta.nota`: «Frases por dolor, sacadas de la ficha, el one-pager y el anexo 3 del deck. El modelo de créditos lo cuenta Jorge; tú abres.»
- `frases_cuenta.frases`:
  - «Por el talento que no llega» · «si no encuentran o no retienen perfiles» · «El talento dejó de cerrarse contratando. Contratas entrega, no currículums: cada perfil viene con un Centro de Excelencia detrás y es sustituible por contrato, sin que el conocimiento se vaya con la persona.»
  - «Por las horas que no sabes qué producen» · «si llevan meses con asistentes de IA» · «Los equipos creen que van un 20% más rápido y miden que van un 19% más lento (METR, 2025). Aquí la entrega de cada perfil se mide sobre vuestro Jira y vuestro SonarQube y va en la factura.»
  - «Por Compras» · «si la conversación se va a la tarifa hora» · «La conversación deja de ser cuántas horas y pasa a ser cuánto entregas. Y el ahorro de eficiencia que trae la IA no se lo queda el proveedor: vuelve a vuestra cartera como créditos de modernización.»
  - «Por el que se va mañana» · «si dependen de una persona externa» · «Cuando el perfil rota, el sistema no se queda ciego: el conocimiento vive en la especificación, auditable, y detrás hay nodo ancla, red de especialistas y capacidad flotante.»
- `frases_cuenta.regla`: «Estas frases abren. El modelo de créditos de modernización y el índice SDPI los explica Jorge; no lo cuentes con cifras. Si la necesidad es una aplicación concreta, es Modernización; si es la cartera en producción, Mantenimiento.»
- `pitch_por_rol`:
  - CIO — «¿Cuánto conocimiento de vuestros sistemas vive en gente externa que puede irse mañana?» · le mueve: «capacidad sustituible y el conocimiento en la especificación.»
  - Director de aplicaciones — «¿Cuántos perfiles externos tenéis, y qué mide cada uno?» · le mueve: «la entrega de cada perfil en la factura y un CoE detrás.»
  - Compras — «¿Compráis horas o compráis entregas?» · le mueve: «capacidad sustituible por contrato, tolerancia del ±10% y salida a tres meses sin penalización.»
  - CFO — «¿Dónde va el ahorro que la IA le está dando a vuestros proveedores?» · le mueve: «créditos de modernización sobre su propia cartera, sin nueva licitación.»
- `pitch_nota`: «Se entra por el CIO o por aplicaciones; Compras decide, mételo pronto.»
- `objeciones`:
  - «Ya tenemos proveedor de perfiles, y el nearshore es más barato.» → «El nearshore vende perfiles; nosotros firmamos capacidad medida. Cuando el perfil rota, el conocimiento se queda en la especificación y el riesgo deja de ser tuyo. Compara entrega, no tarifa.»
  - «Solo necesitamos dos personas.» → «Empezamos por el tramo justo, adscrito a un Centro de Excelencia y medido desde el primer mes. Escalas o sustituyes por contrato, sin fricción.»
  - «Compras solo mira la tarifa hora.» → «Por eso conviene que esté en la mesa: la unidad es la entrega, se mide sobre vuestras herramientas y va en la factura; y el ahorro de eficiencia vuelve como créditos de modernización para vuestra propia cartera.»
  - «Esto es staff augmentation con otro nombre.» → «Tres cosas que un contrato de horas no tiene: la unidad es la entrega, hay un CoE detrás de cada persona y el conocimiento queda en la especificación cuando alguien rota.»
- `preguntas_cualificacion`:
  - «¿Cuántos perfiles externos tenéis en el equipo y con qué contrato?»
  - «¿Qué pasa con el conocimiento del sistema cuando uno rota?»
  - «¿Se mide la entrega de cada perfil o solo las horas?»
  - «¿Tenéis asistentes de IA en el equipo, y sabéis qué producen?»
- `referencias_destacadas`: [`at-caso-banca-latam`].
- `material_interno`: [`software-pains-asistencia`, `mod-argumentario`] y, si se crea, `at-mensajes-clave`. Nota interna: targets de piloto (Wolters Kluwer, UNED, Randstad) solo internos y pendientes de autorización; la «sustitución en 5 días» no es compromiso oficial; los factores del modelo de créditos no se prometen.
- `dossier_imprimible`: `true`.

**Mensajes clave por dolor (`keynotes`).**

1. Dolor «No encuentro perfiles, y los que tengo se van.» · frase «Contratas entrega, no currículums: la capacidad es sustituible y el conocimiento queda en la especificación.» · prueba «Más de 250 personas sobre el core de una entidad financiera, en tres países (por cuenta).» · paso «Un primer tramo de capacidad, medido desde el primer mes. Te presento a Jorge.»
2. Dolor «Pago horas y no sé qué producen.» · frase «La entrega de cada perfil se mide sobre vuestras herramientas y va en la factura.» · prueba «METR 2025: creen que van un 20% más rápido, miden un 19% más lento. Sin medir, no hay retorno.» · paso «Medimos desde el día uno; el modelo lo enseña Jorge.»
3. Dolor «Compras solo mira la tarifa.» · frase «Cuánto entregas, no cuántas horas; y el ahorro de la IA vuelve como créditos de modernización.» · prueba «Está en el deck (anexo 3); Jorge lo cuenta.» · paso «Reunión con Compras dentro, no después.»
4. Dolor «Cuando el técnico externo rota, el sistema se queda ciego.» · frase «Cada perfil entra adscrito a un Centro de Excelencia: nodo ancla, red de especialistas y capacidad flotante detrás.» · prueba «El conocimiento vive en la especificación, versionada y auditable.» · paso «Empezamos por el sistema que hoy depende de una persona.»

---

## 3 · Lo que estas piezas cambian en Modernización (ya vigente)

- **Foreworth.** La página dice «Entelgy mide con Foreworth la productividad que recupera… Que lo mida un externo es lo que aguanta delante del CFO», «medido por un externo», «productividad certificada por Foreworth», «certificada por un tercero» y «medida por un tercero (Foreworth)». Es el contenido de junio; el 10 y el 14 de julio Jorge lo cambió: la medición es IGE e ISA sobre las herramientas del cliente, contra el punto cero del assessment; Foreworth es contraste de mercado y no sabe medir productividad con IA. Propuesta, en `por_que_nosotros`: «…Entelgy mide la productividad que recupera en el mantenimiento sobre tus propias herramientas (IGE de entrega, ISA de salud del aplicativo), la contrasta con el mercado (Foreworth) y reinvierte esa eficiencia en modernizar las mismas aplicaciones, sin aumento neto del presupuesto ya comprometido. Que se mida sobre tu propio código es lo que aguanta delante del CFO.» `diferenciador`: «…sin presupuesto nuevo y medido sobre tu propio código.» Y en el kit, «certificada» → «medida sobre tus herramientas, contrastada con Foreworth». Que Jorge lo confirme antes de tocarlo (es la página que MA ya validó).
- **La objeción del 20–40%.** El deck lo atribuye a McKinsey 2025; la v3, a Gartner. Con la obra, se recupera la cifra; sin ella, la versión sin número de la auditoría de copy.
- **«Assessment de modernización · dos semanas» y «Diagnóstico de cartera · 10–15 días»** son, hasta donde dicen las piezas, el mismo paso con dos nombres. Jorge decide el nombre; la v3 mantiene el suyo.

---

## 4 · Contactos (`data/personas.json`)

- Jorge: `nombre` «Jorge Herrero», correo `jorge.herrero@entelgy.com` (en las cuatro piezas). Segundo contacto: no hay ninguno nombrado en el material; Fernando Naranjo (Operaciones) es el dueño de datos, no un contacto comercial.

---

## 5 · Lo que necesito que decidas o compruebes

1. **Foreworth** en la página de Modernización (§3): es un cambio sobre contenido que MA validó en junio, pero va con lo que Jorge dijo en julio. Yo lo cambiaría y se lo diría a Jorge en el mismo correo que el resto.
2. **Estado de la ficha y el one-pager de Asistencia técnica.** Venden un modelo que Jorge ya no usa. Por la regla de la revisión 9 serían «revisar». No lo toco sin ti.
3. **Cifras del reparto del ahorro.** El 40% aparece en fichas y deck; el 20% en la lámina 9 del deck. En el portal solo digo «una parte medida». Jorge tiene que cerrar el número, y decidir si sale en documento público.
4. **El deck de la práctica** lleva «retorno garantizado», «18 meses de margen» y el 20% frente al 40%. Está en «revisar» con la nota de los tres cambios de Jorge; conviene que la nota los nombre también, o que Jorge los meta en la misma tanda.
5. **Colgar DGOJ, MICIU y H10 de Mantenimiento evolutivo.** Las tres piezas existen con sign-off; es solo enlazarlas. Si prefieres que una referencia cuelgue de una sola solución, DGOJ y MICIU van a Mantenimiento y H10 se queda en Modernización.
6. **Momento comercial de las piezas**, como en Process Intelligence: one-pager → primer contacto, ficha → para dejar. Y el deck de la práctica en las tres soluciones.
7. **El nombre del primer paso de la práctica**: «Assessment de modernización» (v3, CLAUDE.md) o «Diagnóstico de cartera» (deck). Lo fija Jorge; mientras, cada uno en su sitio.
8. **Las referencias anónimas de Asistencia técnica** entran como «confirmar por cuenta»; pasan a citable cuando Jorge las confirme por escrito (el 14-jul dijo que en presentación se usan todas).

---

## 6 · Lo que he leído

- `Entelgy/ciclo-software/decks/entelgy-ciclo-software.html` (17 láminas, renderizado) · `fichas/ficha-mantenimiento.html` · `fichas/onepager-mantenimiento.html` · `fichas/ficha-asistencia.html` · `fichas/onepager-asistencia.html`.
- `jorge-herrero-estado-trabajo.md` (proyecto), en particular las notas del 10 y 14 de julio; `data/software-development.json`; las piezas de la práctica en `data/materiales.json`.
- No he leído: `entelgy-modelo-uce-producto.md` (documento maestro del modelo, no está en el proyecto), el PDF del deck, los tres mapas de pains ni las cuatro fichas comerciales sectoriales de Modernización (pendientes de decidir si son internas).
