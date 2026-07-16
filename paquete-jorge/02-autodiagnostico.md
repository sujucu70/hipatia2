# Paquete Jorge · 2 de 6 · Autodiagnóstico (validación del draft)

> Situación: el autodiagnóstico **ya está construido y funcionando** en `autodiagnostico/grupo-lantia/` con contenido draft nuestro sobre las 5 dimensiones y sub-aspectos que dio Jorge el 11 jun. No hay que crear nada: hay que validar lo que hay.
> Modelo verificado hoy: máximo 100 puntos · mínimo 24 · Grupo Lantia = 78 con sus respuestas precargadas. Todo cuadra.
> Formato: hoja de validación para repasar en llamada. Seis bloques, cada uno con su pregunta.

---

## 0 · Dirección del índice (confirmar primero, condiciona todo)

**Asumido:** más alto = **más exposición** = más motivo para modernizar. El resultado se etiqueta: <45 exposición baja (verde) · 45–69 media (cobre) · ≥70 alta (rojo). Lantia con 78 sale en rojo.

> **P0:** ¿Índice de exposición (alto = malo) te vale, o lo prefieres como índice de salud (alto = bueno)? ☐ Exposición ☐ Salud (invertimos)

---

## 1 · Las 10 preguntas (2 por dimensión, sub-aspectos de Jorge)

Cada pregunta tiene 3 opciones; el peso de la opción es lo que suma al índice.

| # | Dimensión · sub-aspecto | Pregunta | Opciones (peso) |
|---|---|---|---|
| 1 | Técnica · obsolescencia y deuda | El núcleo del sistema, ¿sobre qué base corre? | Tecnología actual, deuda controlada (3) · Versiones atrasadas, deuda visible (7) · Fuera de soporte o cerca (12) |
| 2 | Técnica · calidad de código y arquitectura | Tocar una pieza del sistema, ¿qué supone? | Cambios localizados (2) · Hay que mirar qué más se toca (6) · Cualquier cambio puede romper otra cosa (10) |
| 3 | Económica · coste de mantener vs. valor | Del presupuesto del sistema, ¿cuánto se va solo en mantenerlo? | Menos de la mitad (3) · Alrededor de la mitad (6) · La mayor parte (10) |
| 4 | Económica · ahorro potencial | Si el mantenimiento costara menos, ¿tendríais dónde invertir la diferencia? | No especialmente (2) · Alguna iniciativa esperando (6) · Lista de iniciativas paradas (10) |
| 5 | Operativa · esfuerzo de soporte | El día a día del soporte, ¿cuánto equipo consume? | Poco, automatizado (2) · Parte relevante del equipo (6) · Equipos apagando fuegos (10) |
| 6 | Operativa · entrega CI/CD | ¿Cómo llegan los cambios a producción? | Pipeline automatizado (2) · Semi-automatizado (6) · Manual, despliegues que dan respeto (10) |
| 7 | Riesgos · cumplimiento regulatorio | Si mañana os piden documentación auditable (AI Act, DORA), ¿la tenéis? | Al día (3) · Parcial (6) · Sería un proyecto en sí (10) |
| 8 | Riesgos · seguridad y persona clave | El conocimiento del core, ¿dónde vive? | Documentado y repartido (2) · En el equipo, doc. a medias (5) · En la cabeza de 1–2 personas (8) |
| 9 | Time-to-Value · tiempo de entrega | Una funcionalidad nueva, de petición a producción, ¿cuánto tarda? | Días o pocas semanas (3) · Uno o dos meses (6) · Varios meses, o ni se intenta (10) |
| 10 | Time-to-Value · adaptación al negocio | Cuando el negocio pide un cambio de rumbo, el sistema… | Acompaña (2) · Acompaña con esfuerzo (4) · Frena, el negocio se adapta al sistema (10) |

Al final hay una pregunta de **agenda, sin puntuar** (cualificación para el comercial): "La modernización del core, ¿la tenéis en agenda?" — Ya en marcha · Próximos 12 meses · Sin fecha.

> **P1:** ¿Las 10 redacciones se sostienen delante de un CIO? Los sub-aspectos son los tuyos (fusionamos 3→2 por dimensión para que no sea tedioso). ☐ OK ☐ Cambia estas: ___

---

## 2 · Pesos por dimensión

Técnica **22** · Económica **20** · Operativa **20** · Time-to-Value **20** · Riesgos **18** = 100.

Técnica pesa un punto más (la obsolescencia es el disparador más frecuente) y Riesgos algo menos. Es decisión nuestra de draft, defendible pero opinable.

> **P2:** ¿Te cuadra el reparto, o Riesgos (regulatorio) debería pesar más dado el argumento AI Act/DORA? ☐ OK así ☐ Sube Riesgos a: ___

---

## 3 · Umbrales

**Globales:** <45 exposición baja · 45–69 media · ≥70 alta.
**Por dimensión** (para el etiquetado baja/media/alta del desglose): Técnica 9/15 · Económica 9/14 · Operativa 9/14 · Riesgos 8/13 · Time-to-Value 9/13.

> **P3:** ¿45 y 70 como cortes globales? Marcan cuándo recomendamos Assessment corto vs completo. ☐ OK ☐ Ajusta: ___

---

## 4 · Frases de lectura por dimensión (salen en el resultado)

- **Técnica:** "el núcleo acumula deuda y obsolescencia: cada cambio cuesta más que el anterior".
- **Económica:** "el presupuesto está atrapado en sostener lo que hay, no en mejorarlo".
- **Operativa:** "la operación consume al equipo: soporte y entregas manuales se comen la capacidad".
- **Riesgos:** "sin documentación auditable, el AI Act (dic 2027) y DORA convierten el core en un asunto de cumplimiento, no solo técnico".
- **Time-to-Value:** "el negocio espera: cada funcionalidad tarda meses en llegar".

La lectura final destaca las 1–2 dimensiones que superan el 65% de su máximo.

> **P4:** ¿Las cinco frases valen tal cual? ☐ OK ☐ Cambia: ___

---

## 5 · Estimación económica y siguiente paso

Con la puntuación Económica se estima el coste de seguir igual: ≥14 → "1,5–2 M€/año" · 9–13 → "0,5–1,5 M€/año" · <9 → "menos de 0,5 M€/año". Siempre con la coletilla "estimación orientativa; el Assessment la sustituye por tu número real".

Siguiente paso según el global: ≥70 → **Assessment de dos semanas** (triaje + business case, financiado desde el mantenimiento) · 45–69 → **Assessment corto** · <45 → vigilar y repetir.

> **P5:** Las horquillas en euros son nuestras, pensadas para una cuenta tipo Lantia (~600 empleados). ¿Las sostienes, las cambiamos por horquillas relativas ("del orden del X% de tu presupuesto IT"), o las quitamos? ☐ Sostener ☐ Relativas ☐ Quitar

> ~~P6~~ ✅ **Resuelta (16 jul, Susana): el Assessment se cuenta como "dos semanas"** en todo el portal. Aplicado en Kit y Tarjeta; el autodiagnóstico ya lo decía así.

---

## Al recibir respuestas

Aplico los ajustes en `autodiagnostico/grupo-lantia/index.html` (draft → validado), recalculo que Lantia siga dando 78 —o el nuevo valor si cambian pesos—, y anoto el sign-off con fecha aquí y en el estatus.
