# La visión corporativa de Entelgy: qué tiene la v2 que la v3 no enseña, y qué importar

*Vista previa para Susana · 4 de septiembre de 2026. No he podido abrir `hipatia-oportunidades.html` (está en la carpeta `entelgychat`, que no tengo conectada); he trabajado con las fuentes de la v2 que la propia v3 guarda en `docs/fuentes-v3/` (el relato corporativo entero: `hipatia-corporate-conversation.js`, `-message.js`, `-method-cycle.js`, `relato-corporativo-y-mercados.md`, la capa ejecutiva por práctica y las puertas), con el `/entelgy/` actual de la v3 (`corporativo.json` tras la 12, `entelgyPage` en build.js), con el veredicto de la spec (§4 y §5) y con lo que el deck corporativo v6 cerró en julio (`corporativo-estado-trabajo.md`). Para la comparación visual de la v2 sí necesitaría el fichero.*

---

## El problema

Tienes razón en la sensación, y la causa es concreta. La spec decidió en septiembre que el relato corporativo de la v3 se tomaba «entero» de la v2 (§5: «60 segundos, cuatro entradas, método cíclico, OTG, selector general / LATAM»). Pero la v2 tenía ocho bloques en «Cómo presentar Entelgy» y la v3 construyó cuatro: los 60 segundos, las cuatro entradas, el método y la Oficina. Se quedaron fuera los cuatro que hacen que la visión se vea en lugar de leerse: el bloque «Por qué Entelgy» con la tesis en grande (la tensión, «desplegar es fácil», los cuatro pilares y los tres diferenciadores como tres tarjetas), el puente «Dónde entramos» con las cinco prácticas, las pruebas plegadas (quiénes somos, sectores) y el material para ampliar (el deck). Y en las páginas de práctica pasó lo mismo con la capa ejecutiva: la v2 hacía tres preguntas escaladas para abrir la conversación («¿qué proceso, si fallara mañana…?», «¿dónde se os escapan horas…?», «si sigue un año más así, ¿qué os cuesta?»); la v3 las tiene en el JSON (`discovery[]`) y no las pinta.

El copy no es el problema. El de la v3 es el de la v2 pasado por la revisión 12 (primera persona, «la tecnología es la parte fácil», la Oficina como método) y está mejor. Lo que falta es estructura: la v2 ponía la tesis antes que las capacidades y la v3 la deja como un párrafo entre cuatro.

Hay un matiz importante: la visión que hay que importar no es exactamente la de la v2, sino la del deck corporativo v6 que MA y Roberto cerraron el 3 de julio, que es posterior y está validada. La v2 la copiaba bien en lo esencial (su línea «Desplegar tecnología es fácil. Conseguir que mueva la cuenta de resultados no» es el diferenciador 03 del deck), pero arrastra dos cosas que el deck quitó a propósito: el «≈70% de las transformaciones no alcanza el éxito esperado» sin fuente, y los recuentos de cuentas por sector («25+ entidades», «40+ cuentas»), que MA descartó por no estar validados. Así que se importa la forma de la v2 con los datos del deck.

---

## 1 · Bloque a bloque

| Bloque de la v2 («Cómo presentar Entelgy») | Qué tiene hoy la v3 en `/entelgy/` | Veredicto | Por qué |
|---|---|---|---|
| **Cabecera «Entelgy, en una conversación» + relato en 60 segundos** | Lo tiene, con el copy de la 12. | Ya está. | — |
| **Cuatro entradas** (qué hace · qué diferencia · cómo lo hace · en qué ayuda), en la v2 como botones que enseñan una respuesta cada vez | Las cuatro a la vez, en rejilla. | Ya está; la rejilla es mejor. | «Leerlo una vez y saber qué contar» (MA) pide ver las cuatro sin clicar. |
| **«Por qué Entelgy»: la tesis antes que las capacidades.** Número de tensión en grande (≈70%), «La tecnología sola se queda corta. Desplegar tecnología es fácil. Conseguir que mueva la cuenta de resultados no», raíl «Tecnología × Procesos × Personas × Cultura» y tres tarjetas: 01 ADN en entornos críticos («transformamos donde el cambio tiene que funcionar»), 02 los cuatro pilares, 03 compromiso («respondemos del impacto, no solo de la entrega») | No existe como bloque. Los tres diferenciadores están fundidos en el texto de la entrada «Qué nos diferencia». | **Importar, adaptado.** | Son los tres diferenciadores que MA articuló en sala el 25-may y la línea del deck v6. Es el bloque que hace visible la visión. Sin el 70%: ninguna fuente; en su lugar, la línea de MA (D3, «Transformar es mucho más difícil que crear», si él la confirma el 8) o la del deck. |
| **Método**: cinco pasos con «Evita: …», tres transversales, el ciclo que vuelve al diagnóstico | Lo tiene entero. | Ya está. | — |
| **«Dónde entramos»**: las cinco prácticas con una línea cada una y enlace, como puente del relato a la oferta («el método es común; el punto de entrada cambia según lo que tenga delante el cliente») | No está: `/entelgy/` termina en la Oficina sin enlazar a ninguna práctica. | **Importar, reutilizando datos.** | El comercial pasa del relato a la práctica sin volver a portada. Las cinco líneas ya existen (`propuesta_portada`); no hay copy nuevo. |
| **Oficina de Transformación y Gobernanza**: tres fases más los chips de funciones que puede asumir (PMO/SMO, arquitectura, auditoría, apoyo CISO, agilidad, QMO, productividad, FinOps) | Título, texto y tres fases (12; «Gobernanza» con la 13). Sin la lista de funciones. | Ya está; añadir la línea de funciones si MA la valida. | El texto de la 12 es mejor que el de la v2 (que decía «delegamos»). Las funciones dan tangibilidad, pero salen de la v2, no del deck: supuesto. |
| **«Pruebas para cuando hagan falta»**, plegado: Quiénes somos (20+ años, 2.000 profesionales, 100% capital propio, 95%+ renovación, 50+ alianzas, certificaciones, presencia en ocho países) y Sectores y clientes (recuentos por sector, regla de uso de nombres) | Nada. La v3 no tiene una sola credencial en ninguna página. | **Importar, plegado y con los datos del deck v6.** | Un comercial que presenta Entelgy en una cuenta nueva necesita las cifras de compañía; el deck las lleva (20+ años · 2.000 · 100% capital propio · >95% renueva · ISO 27001/27701 · ENS Alto · SOC 2). Los recuentos por sector no: el deck los quitó y se queda con dos verticales faro (Financiero, Sector público) y gran empresa sin conteo. Sin nombres ni logos hasta autorización por cuenta. |
| **«Material para ampliar»**: el deck corporativo (y el LATAM) enlazados desde el relato | Nada: el deck solo está en portada y en Materiales. | **Importar.** | Es una tarjeta que ya existe (`corp-exec-global`, en «revisar»); solo hay que pintarla al final de `/entelgy/`. |
| **Selector general / LATAM** con Ciberseguridad (Security América) como sexta capacidad | No está (la 11 sacó Security América de pantalla por canon). | No importar. | Canon del proyecto. El deck LATAM sigue en «revisar»; cuando Corporativo lo valide, entra como pieza en «Material para ampliar», sin selector. |
| **Capa ejecutiva por práctica**: «Cuando la señal ya está clara» con cuatro capacidades, **tres preguntas escaladas para abrir** («tres señales para escuchar, no un guion») y «primer avance posible» | Capacidades y primer avance, sí. Las tres preguntas están en cada JSON (`discovery[]`) y no se pintan; solo se ve «La pregunta que abre». | **Importar: pintar `discovery[]`.** | Es la parte de la v2 que más se parece a «un recorrido que enseña cómo vende un comercial» (lo que MA valoró de hipatia2). Cero copy nuevo. Plegado, para no cargar la página. |
| **Puertas de entrada por solución** (los textos genéricos de qué es, límites, señales, pregunta, primer paso) | Eran la plantilla que la v3 heredó. | Ya sustituidas por la 13 con contenido real. | — |
| **Portada de la v2** (01 compañía · 02 oferta · 03 siguiente paso · 04 acceso directo) | La v3 la sigue. | Ya está. | — |

---

## 2 · Cómo quedaría `/entelgy/` (siete bloques, en este orden)

1. **Cabecera.** Eyebrow «Cómo presentar Entelgy», H1 «Entelgy, en una conversación», los 60 segundos. Como está.

2. **Por qué Entelgy** (nuevo, antes de las cuatro entradas). Una banda oscura con la tesis y tres tarjetas debajo. Copy propuesto, con lo validado:

   - Línea de tensión (en grande): «Transformar es mucho más difícil que crear.» si MA la confirma el 8 (D3); mientras, la del deck v6: «Desplegar tecnología es fácil. Que mueva tu cuenta de resultados, no.»
   - Texto: «El impacto se pierde cuando la solución no encaja con el proceso que debe mejorar, con la gente que tiene que usarla o con la cultura que debe sostenerla. Entelgy trabaja los cuatro a la vez.»
   - Raíl: Tecnología × Procesos × Personas × Cultura.
   - Tres tarjetas (los tres diferenciadores de MA, en su orden):
     - **01 · Organizaciones en marcha.** «Trabajamos donde el cambio tiene que funcionar mientras el negocio sigue: continuidad, regulación y operación no esperan al final del proyecto.»
     - **02 · Las cuatro variables.** «Tecnología cruzada con procesos, personas y cultura. Adopción, rediseño y gobierno no son añadidos: forman parte de lo que se diseña y se lleva a producción.»
     - **03 · Respondemos del resultado.** «Nos comprometemos con el impacto, no solo con la entrega: menos coste de operar, productividad real, riesgo bajo control y valor que se queda cuando el proyecto termina.»

   Sin el «≈70%». Si MA quiere un número, tiene que traer autor, obra y año.

3. **Cuatro entradas al mismo relato.** Como está (la 12). La entrada «Qué nos diferencia» puede acortarse ahora que las tres tarjetas llevan el argumento; propongo dejarla como está para no tocar dos veces el mismo texto antes del 8.

4. **El método.** Como está.

5. **Dónde entramos** (nuevo). Eyebrow «Dónde entramos», H2 «El método es común; la puerta depende de lo que tenga delante el cliente.», y las cinco prácticas en fila, cada una con `orden`, `nombre`, `propuesta_portada` y enlace a `/practicas/<id>/`. Es la misma rejilla de portada con menos altura; no hay copy nuevo.

6. **La Oficina de Transformación y Gobernanza.** Como deja la 12 más el nombre de la 13. Si MA valida la lista, una línea al final: «Funciones que puede asumir: PMO/SMO, arquitectura, auditoría, apoyo CISO, agilidad, QMO, productividad, FinOps.»

7. **Pruebas, para cuando hagan falta** (nuevo, plegado con `<details>`, como el «Para prepararte» de las soluciones). Dos partes:
   - **Quiénes somos.** «Más de 20 años en organizaciones complejas y entornos críticos · 2.000 profesionales de delivery en España, Latinoamérica y Estados Unidos · 100% capital propio: una consultora que no responde a ningún fabricante · más del 95% de los clientes renueva · ISO 27001 y 27701, ENS Alto, SOC 2.» Fuente: deck corporativo v6 (jul-2026). Sin «50+ alianzas» ni «presencia en ocho países» hasta que estén en el deck.
   - **Sectores.** Dos verticales faro, Financiero y Sector público, con una línea cada una, y «Gran empresa y corporación» (industria, telco, retail) sin recuento. Sin nombres ni logos: «los clientes se nombran cuando su ficha de referencia lo autoriza» (la regla que ya rige en Materiales).
   Con la nota de la v2 que sigue siendo verdad: «Estos datos sostienen el relato; no lo abren.»

8. **Cuando el relato necesita una pieza** (nuevo, al final). La tarjeta de `corp-exec-global` como en portada (chip «revisar» incluido, revisión 9) y, cuando Corporativo lo valide, la del LATAM.

Y en las **cinco páginas de práctica**, un plegable nuevo bajo «Capacidades»: «Tres preguntas para abrir · señales para escuchar, no un guion», con las tres de `discovery[]` tal como están en cada JSON (la de Data Intelligence se revisa: sus tres preguntas de hoy hablan de «iniciativas de IA» y la práctica ya no entra por ahí).

---

## 3 · Lo que no se importa

- **El selector LATAM y Security América.** Canon (revisión 11).
- **El «≈70%».** Sin fuente. La disciplina del proyecto no lo admite, y MA descartó en el deck cualquier cifra de volumen sin validar («afinado en cada proyecto» en vez de «cientos de proyectos»).
- **Los recuentos por sector** («25+ entidades», «30+ cuentas», «15+», «40+»). El deck v6 los quitó a propósito.
- **La interacción de una respuesta cada vez** en las cuatro entradas. La rejilla se lee de una vez.
- **«Cuando el frente es IA: cultura, conocimiento y gobierno»** dentro de Digital Change. Es `capacidades_ia`, que la 13 deja de pintar.
- **La construcción** (21 capas de JS que se reescriben unas a otras). Ya se decidió en la spec.

---

## 4 · Lo que necesito que decidas o compruebes

1. **La línea de tensión** del bloque «Por qué Entelgy»: la de MA («Transformar es mucho más difícil que crear», D3 abierta) o la del deck v6 («Desplegar tecnología es fácil. Que mueva tu cuenta de resultados, no.»). Propongo llevar las dos al 8 y construir con la del deck, que ya está validada.
2. **Las credenciales**: que las cifras que propongo son las del deck v6 tal como quedó el 3-jul (20+ · 2.000 · 100% · >95% · ISO 27001/27701 · ENS Alto · SOC 2). Yo las tengo por `corporativo-estado-trabajo.md` y por la lámina 2 de los decks de Carla y Amador, que las copian del corporativo; conviene abrir el deck y confirmarlas.
3. **Las funciones de la Oficina** (PMO/SMO … FinOps): salen de la v2, no del deck. Sin validación de MA, fuera.
4. **Cuándo entra**: es un bloque para la siguiente revisión (14 o 15), no para la 13 que Código está aplicando. Cambia `corporativo.json` (nuevas claves `relato.por_que`, `relato.pruebas`), `entelgyPage` en build.js (tres secciones nuevas y una tarjeta) y `practicaPage` (el plegable de `discovery`).
5. **La portada** no cambia: ya sigue la estructura de la v2 y enlaza a `/entelgy/` desde el botón «Cómo presentar Entelgy».

---

## 5 · Lo que he leído

- `docs/fuentes-v3/`: `hipatia-corporate-conversation.js` (el relato entero de la v2 con sus dos versiones de mercado), `hipatia-corporate-message.js` (el bloque «Por qué Entelgy»), `hipatia-corporate-method-cycle.js`, `relato-corporativo-y-mercados.md`, `hipatia-executive-practice-layer.js` (capacidades, tres preguntas y primer avance por práctica), `hipatia-executive-entry-doors.js` (las puertas por solución).
- `data/corporativo.json` (`relato`, `portada`, `punto_de_partida`) y `entelgyPage` de build.js, en `9135b6b`.
- Spec §4 (auditoría de la v2) y §5 (veredicto elemento a elemento); `corporativo-estado-trabajo.md` (deck v6, 3-jul: diferenciadores, sectores y clientes, «responde de» en vez de «garantiza»).
- No he leído: `hipatia-oportunidades.html` (sin acceso), ni el deck corporativo v6 en sí (lo cito por el estado del eje).
