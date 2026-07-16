# Paquete Jorge · 1 de 6 · Referenciabilidad de los casos

> ✅ **CERRADO · 16 jul 2026.** Jorge responde SÍ a la pregunta marco: los seis casos pasan a `citable` en el portal, con la leyenda "en presentación sí · el envío formal de la referencia al cliente se autoriza por cuenta". Aplicado en el HTML (Repositorio, Tarjeta, Kit, Estado de la cuenta y dossier imprimible) con validaciones en verde. Quedan vivas solo las verificaciones de cifra marcadas por caso (en especial el ~90% de H10), que no bloquean el semáforo.

> Objetivo: pasar los seis casos del Repositorio de "confirmar por cuenta" a `citable`.
> Formato pensado para cerrarse **en una llamada de 10 minutos** (Jorge prefiere hablar a intercambiar textos y se va el viernes 18): cada caso lleva su claim tal como está en el portal, lo que ya sabemos y UNA pregunta de sí/no.
> Base: llamada del 14 jul (referencias y cifras), estado del área y código real del portal.

---

## Lo que ya quedó cerrado el 14 jul (no volver a preguntar)

- **Cifras de venta**: "+70% de productividad", "deuda técnica superada" y "~100% de cobertura" son **públicas y referenciables**. Regla de uso: siempre como rango ("hasta"), nunca como garantía. Hay escenarios por debajo y muy por encima.
- **Referencias con nombre**: se usan todas, interno y externo, **en presentaciones**, con prudencia según interlocutor. El envío formal de referencias al cliente es una puerta aparte.
- **Cifras económicas internas** (€/UCE, reparto 60/40, importes Foreworth): siguen sin salir a cliente. Sin cambios.
- **Euskalmet** (la app construida en directo en 1 hora): anécdota de uso interno, no referencia externa. No entra en el portal como caso.

## La pregunta marco (hacerla primero — puede cerrar las seis de golpe)

El portal es material **escrito**, interno, para todo el equipo comercial, tras Cloudflare Access. No es una presentación a cliente ni un envío formal. Con las reglas del 14 jul:

> **"Jorge, ¿puedo poner los seis casos como citables en el portal, con la regla visible de 'en presentación sí · envío formal al cliente requiere OK por cuenta'?"**

Si dice sí, los seis pasan a `citable` con esa leyenda y solo quedan las verificaciones de cifra marcadas abajo. Si duda, se recorre caso a caso.

---

## Los seis casos · claim del portal + pregunta única

### 1 · NASERTIC (Gobierno de Navarra) — el caso estrella
- **Claim en el portal:** migración en el sector público (Navarra) · 9→3 meses.
- **Lo que sabemos (14 jul):** 1.000 h de carga funcional documentadas en una semana · 70% de ahorro · de 9 a 3 meses. Se puede incluso contar con el cliente / que le llamen. Slide de las 6 cajitas ya capturada.
- **Propuesta:** `citable` ya. Añadir al portal la cifra de las 1.000 h/semana (es más tangible que el 9→3 solo).
- **Pregunta:** ¿OK a citarlo con las tres cifras (1.000 h/semana · 70% ahorro · 9→3 meses)? ☐ Sí ☐ Ajusta: ___

### 2 · UNED
- **Claim en el portal:** migración PL/SQL → microservicios Java con IA · −30% esfuerzo.
- **Lo que sabemos:** confirmada por Jorge como referencia real del deck (14 jul). Expediente público (vía BOE/PLACSP) — es la vía rápida a citable que ya identificamos en junio.
- **Propuesta:** `citable`.
- **Pregunta:** ¿el −30% de esfuerzo es la cifra que sostiene, o la ajustamos? ☐ Sí, −30% ☐ Otra: ___

### 3 · H10 Hotels
- **Claim en el portal:** reducción del tiempo de documentación en turismo · ~−90%.
- **Lo que sabemos (14 jul):** referencia real del deck (adopción Spec-Driven), pero **la atribución exacta del ~90% quedó pendiente de confirmar** — es el único caso con la cifra en duda explícita.
- **Propuesta:** `citable` como caso; la cifra solo si la ratifica.
- **Pregunta:** ¿el ~90% es de reducción del tiempo de documentación exactamente? ☐ Sí ☐ La cifra real es: ___

### 4 · DGOJ
- **Claim en el portal:** reducción del coste de mantenimiento en sector público · −40/60%.
- **Lo que sabemos:** caso activo de Mantenimiento Evolutivo (UNED · MICIU · DGOJ). En la revisión del deck del 14 jul no está entre las tres referencias elegidas (UNED · H10 · NASERTIC) — pero para el Repositorio del portal siguen valiendo los seis.
- **Pregunta:** ¿−40/60% de coste de mantenimiento se sostiene como rango citable? ☐ Sí ☐ Ajusta: ___

### 5 · AESA
- **Claim en el portal:** automatización en sector público (aviación) · +80%.
- **Lo que sabemos:** caso demostrado de Spec-Driven (desarrollo desde cero). El +80% de automatización necesita su definición (¿de qué proceso, sobre qué base?).
- **Pregunta:** ¿el +80% es citable tal cual, o lo reformulamos (p. ej. "automatización de X")? ☐ Tal cual ☐ Reformular: ___

### 6 · Ministerio de Ciencia / AEI (MICIU)
- **Claim en el portal:** cumplimiento de SLA en sector público · +40%.
- **Lo que sabemos:** caso activo de Mantenimiento Evolutivo. Sin más detalle en los ficheros.
- **Pregunta:** ¿el +40% de SLA es citable, y el caso puede nombrarse como "Ministerio de Ciencia / AEI"? ☐ Sí ☐ Ajusta: ___

---

## Fuera del portal · confirmado, solo para que conste

- **BBVA / Santander**: fuera (sensibles, no están en el set de Jorge).
- **Factorías Chile/Perú (banca)**: buena referencia pero NO es Spec-Driven — no se atribuye al método.
- **Hospital de Brasil (RAG/LLM)**: no es modernización real; fuera. Sector Salud sin caso: no se nombra.
- **Mapfre, Wolters Kluwer, Randstad, Orange**: cuentas de trabajo/pipeline, no casos con resultado — no van al Repositorio como referencia.

---

## Qué pasa al recibir las respuestas

1. Actualizo el semáforo de cada pieza en el Repositorio (`confirmar` → `citable`) y en Tarjeta/Kit donde aplique.
2. Añado la leyenda de uso: "citable en presentación · el envío formal al cliente se autoriza por cuenta".
3. Anoto el sign-off (fecha + caso) en `jorge-herrero-estado-trabajo.md` para que quede trazado quién dio fe — que fue exactamente lo que pidió el Menti ("ojo con las referencias, ¿quién las mantiene y da fe?").
