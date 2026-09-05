# Decisiones cerradas · v3 antes del 8 · 4 de septiembre de 2026

*Cerradas por Susana en sesión, sobre la auditoría de copy y los cinco documentos de contenido por práctica (Process Intelligence, Software Development, Data Intelligence, Smart Operations, Digital Change). Rigen para la revisión N del mensaje a Código y para los correos a los SM. Las que se apartan de lo que yo recomendaba van marcadas con ◆.*

---

## 1 · Transversales (valen para las cinco prácticas)

| # | Decisión | Qué implica |
|---|---|---|
| T1 | **Momento comercial según la doctrina del 15-jul, en las cinco prácticas.** | One-pager → `primer_contacto`; deck → `reunion`; ficha → `para_dejar`; guías internas → `preparar`. Se cambia `momento_comercial` en `materiales.json` para todas las piezas de solución. |
| T2 ◆ | **Las once soluciones pasan a `vigente` ya, para el 10.** | Con una nota plegada «en revisión por el área» y el `pendiente` real de cada una (lo que el SM tiene que confirmar). MA ve el catálogo lleno. |
| T3 | **Regla de la revisión 9 aplicada a todas las piezas con cambios pendientes del dueño → `revisar`.** | Deck SmartOPS Workplace (niveles invertidos, precios), deck SmartOPS for Infra (precio en documento público), ficha y one-pager de Asistencia técnica (venden UCE), deck de la práctica SD («retorno garantizado», 18 meses, 20% vs 40%), autodiagnóstico y ficha de servicio de Modernización. Sigue habiendo pieza vigente en cada momento comercial. |
| T4 | **Todas las referencias nuevas se crean ahora como `confirmar_por_cuenta`** y suben a `citable` con sign-off del SM. | Salvo las que ya tienen documento público o autorización escrita: EJIE Educación (licitación verificada), CNMV, Bankinter y UNED (autorización 16-jun), MAPFRE y Entelgy Labs (Alfredo), DGOJ, MICIU y H10 (Jorge). |
| T5 ◆ | **Precios: todos donde existan, visibles en la tarjeta.** | El portal es interno. Importe del primer paso en `primer_paso.nota` (Carmen 15–20 K€; Infra 30–50 K€ orientativo; PreservIA 14.900 € sin IVA), escalera de compra de Carmen y horquillas por usuario y mes de Amador (15–25 CAU, 10–20 Workplace, 30–60 €/dispositivo DaaS, orientativas) en «Para prepararte». Carla y Jorge no publican precios: nada. |
| T6 | **Nombre del primer paso sin anglicismo.** | «Diagnóstico de automatización», «Diagnóstico del puesto de trabajo», «Diagnóstico de infraestructura», con «sobre datos reales» en la nota. Las piezas conservan «Diagnóstico Data Driven». |
| T7 | **Capacidades de práctica rehechas en DI (cinco pilares), SO (motor SmartOPS) y DC (el oficio).** | En DC se deja de pintar `capacidades_ia` (build.js l. 299-300); las tres soluciones van solo en «Soluciones». |
| T8 | **«Por qué Entelgy» de las once soluciones: los textos propuestos.** | Con la voz y las cifras de cada SM; coherente con T2. |
| T9 | **Keynotes solo dentro de «Para prepararte».** | Se pintan en el kit plegado; sin pieza aparte en Materiales. |
| T10 | **Contactos con apellido, correo y título de las piezas, y segundos contactos.** | Carmen, Carla, Daniela (Ongaro, Head of Data), Amador (Sobrino, Solution Manager · Smart Operations), Alfredo (Zurdo, Head of Digital Change), Jorge (Herrero). Segundos: Luis Sanz (DI, Technical Lead), Cristina Aparicio (DC / OGH-IA). Cada SM lo confirma al leer su página. |
| T11 | **Notas de uso tal como están propuestas** (las 20 de la auditoría más las nuevas por práctica). | Los SM afinan después. |
| T12 | **Titular de portada: se queda el de la revisión 6.** | La alternativa no se lleva al 8. |
| T13 ◆ | **La Oficina de /entelgy pasa a llamarse «Oficina de Transformación y Gobernanza».** | El nombre de la web pública de Entelgy, sin siglas. Se reescribe además como método operado (Diagnóstico · Operación · Transferencia), según la auditoría 1.3. |
| T14 ◆ | **Las capturas del as-is de /punto-de-partida se quitan.** | Caras y rótulos de confidencial fuera antes del 8. La página conserva el texto («de dónde partimos», reescrito según 2.24) sin imágenes; si Código necesita algo visual, un bloque de texto con la lista de lo que había. |
| T15 | **Nota del Executive Deck en portada: reescrita** (auditoría 1.2). | Qué es y cuándo se usa, sin la lista de pendientes de MA. |
| T16 | **Número de revisión: el primer libre en `docs/` y en el log** al escribir el mensaje. | Se comprueba en el momento (hoy, 12). |
| T17 | **Entrega B ya**: `docs/auditoria-copy-v3.md` + `docs/mensaje-ajustes-revision-N.md` + nota en §0 de la spec. | Susana comitea desde GitHub Desktop. |
| T18 | **Un solo mensaje a Código**: bloques de la auditoría primero y un bloque por práctica, un commit por bloque, «lo que no te pido» y verificación (check-data.js, build.js, medir.js) al final. | Los seis documentos de trabajo van también a `docs/` para que Código lea el contenido campo a campo sin duplicarlo en el mensaje. |
| T19 | **Los siete documentos (auditoría, cinco de contenido y este) se guardan en el proyecto bajo `claude/`.** | Además de en `docs/` del repo. |
| T20 | **Borrador de correo por SM**, en la voz de Susana, con su lista y el enlace a su página. | Cinco correos cortos. |

## 2 · Process Intelligence (Carmen · Carla)

| # | Decisión |
|---|---|
| P1 | **Diagnóstico de Carla: el del deck, 6–8 semanas** (decisión del 3-jul). En el portal, «Diagnóstico de automatización · 6–8 semanas». Carla corrige la ficha (4–6 semanas) en su tanda. |
| P2 ◆ | **Celonis Gold (+50 proyectos, España, Chile y Colombia) entra en «Por qué Entelgy» de Inteligencia de procesos, e Inverbis-GBTEC también**, con ese nombre nuevo: Susana lo da por verificado. Va en `por_que_nosotros` y en la ficha de Universidad LATAM. |
| P3 | **Las dos oficinas conviven** (la de gobierno y orquestación de agentes de Carla; la de Gobernanza Humana de la IA de Alfredo). En la página de Automatización, una línea remite a la de Alfredo para el gobierno humano. Se cuadra con los dos en septiembre. |
| P4 | Precios de Carmen visibles (T5): 15–20 K€ del diagnóstico en `primer_paso.nota`; escalera de compra en «Para prepararte». Carla sin precios. |
| P5 | El «Deloitte 37%» del deck de Carla no se usa (sin informe). |
| P6 | UNED y la energética de Colombia como `confirmar_por_cuenta` hasta el F1 de Carla. |

## 3 · Software Development (Jorge)

| # | Decisión |
|---|---|
| S1 | **Foreworth pasa a «contraste de mercado», no certificador**, una sola vez en Modernización («Foreworth, la medición externa de productividad»). Se le dice a Jorge en el mismo correo que el resto. |
| S2 | **Reparto del ahorro: «una parte medida»**, sin cifra, hasta que Jorge cierre 20% o 40% y decida si sale en documento público. |
| S3 | **DGOJ, MICIU y H10 cuelgan de Modernización y de Mantenimiento evolutivo.** |
| S4 | **Primer paso de la práctica: cada uno en su sitio** («Assessment de modernización» en la práctica; «Diagnóstico de cartera» en el deck) hasta que Jorge lo fije. |
| S5 | **«NASERTIC atiende llamadas de referencia» y «el AI Act pone fecha» al core de pólizas se quedan**; van al correo de Jorge como supuestos a confirmar. |
| S6 | Ficha y one-pager de Asistencia técnica, deck de la práctica, autodiagnóstico y ficha de Modernización → `revisar` (T3). |
| S7 | Referencias anónimas de Asistencia técnica (banca LATAM, industria y energía) como `confirmar_por_cuenta`. |

## 4 · Data Intelligence (Daniela)

| # | Decisión |
|---|---|
| D1 | **Cinco pilares como capacidades** de práctica y solución (T7). |
| D2 | **La alianza no se nombra**; nota interna plegada en el `pendiente`: «el material se reescribe en septiembre-octubre con la propuesta de valor ampliada». |
| D3 ◆ | **Primer paso: el servicio gestionado que Daniela editó**, nombrado «Servicio gestionado de gobierno del dato» en la línea y «oficina del dato» en la nota, sin «gobernanza» ni «IA» en el nombre para no chocar con la OGH-IA. El assessment de 4–6 semanas de las piezas se cita como forma de empezar dentro de la nota. |
| D4 | **El 60% de Gartner se cita como «Gartner, nota de prensa, febrero de 2025»**; Daniela lo confirma. |
| D5 | **Las piezas de Mutua pasan a material interno** (`sale_al_cliente: no`, tipo deck cliente, nota «ejemplo de deck de primer contacto a cuenta objetivo»). |
| D6 | Seis referencias: CNMV, Bankinter y UNED citables con sign-off Daniela; industria, drones y automoción anonimizadas y `confirmar_por_cuenta`. |
| D7 | Título de Daniela: «Head of Data» (T10). |

## 5 · Smart Operations (Amador)

| # | Decisión |
|---|---|
| A1 | **Telefónica Tech en el portal solo con las cifras del PDF de Servicios CAU** (3.000 clientes, 25.000 elementos, 27.000 alarmas y 12.000 tickets al mes, SLA 98%, TMO −25%, rotación <5%). El −40% de MTTD y «Foreworth certificado» esperan a Amador. |
| A2 ◆ | **«+3.000 clientes operados» y «hasta −30% de inversión en infraestructura con IA» entran, marcados «en validación»**, como en las piezas. Van en `por_que_nosotros` de Infraestructura crítica con la nota «datos Entelgy SmartOPS, en validación». |
| A3 | **Las cifras corporativas del área se usan** (+400.000 usuarios, 95% renovación, 97% ANS, clasificación IA 80/92/98, contraseña 90%); sign-off de Amador y MA anotado en el `pendiente`. |
| A4 ◆ | **Móstoles entra como referencia**, con nota «usuarios: confirmar con Amador si son ciudadanos o empleados». |
| A5 ◆ | **Los cinco «Caso de éxito» existentes se corrigen a `tipo: referencia`** y se completan con contexto, qué hicimos, resultado y frase de reunión sobre esas mismas piezas (`smartops-case-ejie` → DaaS EJIE, `smartops-case-educacion-ejie`, `smartops-case-navantia`, `smartops-case-izenpe`, `smartops-case-moodle-profuturo`), conservando el enlace al .pptx. No se crean `so-caso-navantia`, `so-caso-izenpe` ni `so-caso-ejie-educacion` aparte. Nuevas solo: `so-caso-telefonica-tech`, `so-caso-telefonica-cau`, `so-caso-telefonica-global-solutions`, `so-caso-mefpd`, `so-caso-valoriza`, `so-caso-mostoles`. Moodle ProFuturo se completa pero con nota «no es SmartOPS: N3 y desarrollo Moodle, área de Jorge»; no cuelga de ninguna solución. |
| A6 | **MEFPD y Valoriza con nombre** y nota «la ficha lo publica anonimizado; confirmar con Amador que es este caso». |
| A7 | **MAPFRE lo cuenta Alfredo bajo PreservIA**; en Puesto de trabajo se enlaza esa misma referencia (`dc-caso-mapfre`) con una línea sobre SmartHelp como capa de contexto. No se crea `so-caso-mapfre-smarthelp`. |
| A8 | Nombre del primer paso sin «Data Driven» (T6). Precios de Amador visibles (T5): 30–50 K€ orientativo del diagnóstico de Infra en `primer_paso.nota`; horquillas por usuario y mes en «Para prepararte» de Puesto de trabajo, marcadas orientativas. |
| A9 | Los dos decks de vertical → `revisar` (T3); los legacy → Archivo, fuera de las soluciones. |

## 6 · Digital Change (Alfredo)

| # | Decisión |
|---|---|
| C1 | **Se colapsan las tres listas de tres**: `capacidades_ia` deja de pintarse; las capacidades cuentan el oficio (T7). |
| C2 | **MAPFRE: una referencia bajo PreservIA** con las cifras de Alfredo (15.000 puestos, 3.500 tickets menos, 5:30 → 1, 45 €/ticket, 71%); Smart Operations remite a ella (A7). |
| C3 | **Puerta de entrada: Readiness, ~25 min por persona**, en IAbility y en la práctica. El Diagnóstico de Entrada se cuadra con Alfredo y MA. |
| C4 | **OGH-IA sin plazos** (ni «3–4 meses» ni «flexible») hasta que Alfredo resuelva el fork. |
| C5 ◆ | **Bahía de Bizkaia se crea vacía**: `dc-caso-bahia-bizkaia`, `confirmar_por_cuenta`, `sale_al_cliente: no`, solo título y nota «pendiente del modelo de consentimiento (Marketing)». |
| C6 | **Entelgy en su casa: citable**, con sign-off Alfredo; se usa en IAbility y en OGH-IA. Se reconcilia 151/15/9 (piezas) con 150/9 (deck) en el correo. |
| C7 | Admiral con nombre y `confirmar_por_cuenta`. |
| C8 | Precio del Piloto Explorer (14.900 € sin IVA) visible en `primer_paso.nota` de PreservIA (T5). |
| C9 | Cristina Aparicio como segundo contacto de la práctica y especialista segunda en OGH-IA (T10). |

## 7 · Lo que cada SM tiene que confirmar (para los correos)

- **Carmen**: Celonis Gold en el portal; Inverbis-GBTEC ya verificado (Susana); ficha de Universidad LATAM; precios visibles en el portal interno; nombre de la oficina de Carla junto a la de Alfredo.
- **Carla**: diagnóstico 6–8 semanas y corrección de la ficha; F1 de UNED y la energética; «hiperautomatización» y «Task Intelligence» fuera; placeholders «[contacto Entelgy]».
- **Jorge**: Foreworth como contraste; 20% o 40%; fichas de AT con UCE; NASERTIC llamadas; AI Act en el core de pólizas; nombre del primer paso; «retorno garantizado» y «18 meses» del deck; referencias anónimas de AT.
- **Daniela**: nombre del servicio gestionado («oficina del dato»); versión definitiva de UNED; alcance del permiso de CNMV; Gartner como nota de prensa; título «Head of Data»; Luis Sanz como segundo contacto; Mutua como interno.
- **Amador**: juego de datos de Telefónica Tech (−40% MTTD, Foreworth); +3.000 clientes y −30% con documento; +200 agentes (entidad); MEFPD y Valoriza como los casos anonimizados; Móstoles («usuarios»); cifras del DaaS de EJIE; niveles invertidos en el deck de Workplace; precios; permisos de nombres y logos; MAPFRE remite a PreservIA.
- **Alfredo**: puerta de entrada (Readiness); plazos de OGH-IA; 151/15/9 o 150/9; Admiral y Bahía de Bizkaia (consentimiento); una cifra de uso en la sombra con fuente; 78% u 88%; «Oficina de Gobierno» → «Gobernanza Humana» en la ficha de IAbility; WEF retirado de la ficha pública; MAPFRE con un solo juego de cifras (con Amador); Cristina como segundo contacto.


## 8 · Decisiones de la tarde (biblioteca, dueños, `/entelgy/` y capa editorial) · para la revisión 14

| # | Decisión |
|---|---|
| V1 | **Biblioteca: nueve tipos cerrados** (Deck · One-pager · Ficha · Referencia · Guía de discovery · Guía interna · Plantilla · Herramienta · Archivo) **más `subtipo`** libre que se pinta y se busca pero no filtra. Filtro con orden fijo; `check-data.js` avisa de tipos fuera de la lista. Mapeo en `notas-susana-v3.md` N1. |
| V2 | **Dueños con nombre y apellido en todo el portal, resueltos por el build** desde `personas.json` (`nombreCompleto()`); los JSON siguen con el nombre de pila. |
| V3 | **`/entelgy/`: línea de tensión del deck v6** («Desplegar tecnología es fácil. Que mueva tu cuenta de resultados, no.»); la de MA (D3) se le enseña el 8. |
| V4 | **Credenciales plegadas con las cifras del deck v6** (20+ años · 2.000 · 100% capital propio · >95% renueva · ISO 27001/27701 · ENS Alto · SOC 2) y sectores sin recuento. |
| V5 ◆ | **La lista de funciones de la Oficina entra ya** (PMO/SMO, arquitectura, auditoría, apoyo CISO, agilidad, QMO, productividad, FinOps), aunque salga de la v2 y no del deck. |
| V6 | **Los bloques nuevos de `/entelgy/` y el plegable de tres preguntas en las prácticas entran en la 14**, con lo visual. |
| V7 | **El brief y los mocks son insumo de la 14** (otro hilo), no una revisión aparte. |
| V8 ◆ | **Toda la capa editorial antes del 10**, en las cinco páginas. |
| V9 | **Tira de prácticas de portada sobre navy** con las cajas de solución dentro, con prueba a 390 px. |
| V10 | **Chips solo para la excepción**; «sale al cliente · vigente» sin chip. |
| V11 | **Barlow Condensed con `<link>` en cabecera**, comprobada en producción. |
| V12 | **Data Intelligence en portada con una caja** «Data Intelligence · una sola solución». |
