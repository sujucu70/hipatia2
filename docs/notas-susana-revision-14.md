# Notas de Susana sobre la v3 · 4 de septiembre de 2026 · para la siguiente revisión

*Cada nota con su propuesta, para revisar antes de que vaya a Código. Sin cambios en la web.*

---

## N1 · Biblioteca: 32 tipos de documento en el filtro

**El problema.** `/materiales/` genera el filtro «Tipo» a partir de los valores de `tipo` que hay en `data/materiales.json`: hoy son 32 para 88 piezas, con la misma cosa escrita de varias maneras («deck», «Deck», «Deck ejecutivo», «Deck cliente», «Deck / caso»; «ficha», «Ficha de servicio», «Ficha comercial sectorial»; «referencia» y «Referencia», que el build trata distinto por la mayúscula). Cada pieza nueva con un tipo nuevo alarga la lista; con las ~25 referencias de la 13 no empeora, pero tampoco se arregla solo.

**Propuesta.** Nueve tipos cerrados (el filtro) y un campo nuevo `subtipo`, libre, que se pinta pero no filtra.

| `tipo` (filtro, orden fijo) | Absorbe (valores actuales) | Piezas | `subtipo` que conserva el matiz |
|---|---|---|---|
| Deck | deck · Deck · Deck ejecutivo · Deck cliente · Deck corporativo · Deck corporativo regional · Deck / caso · Pre-read / caso | 14 | «Ejecutivo» (process-deck, dataai-producto, digital-change-deck, smartops-resumen), «Corporativo» (corp-exec-global), «Corporativo · LATAM» (corp-exec-latam), «Cliente» (automation-deck), «Técnico» (mod-presentacion-spec), «Práctica» (mod-deck-ejecutivo), «Primer contacto · Mutua» (dataai-mutua), «Pre-read · Mutua» (dataai-mutua-preread), «Vertical» (smartops-workplace, smartops-infra) |
| One-pager | one-pager · One-pager · One-pager sectorial | 13 | «Sector público» / «Sector privado» (preservia-publico, preservia-privado); el resto sin subtipo |
| Ficha | ficha · Ficha de servicio · Ficha comercial sectorial | 15 | «De servicio» (las 11 de servicio) · «Sectorial · Banca / AAPP / Industria / Telco» (las cuatro de Modernización) |
| Referencia | referencia · Referencia (y las nuevas de la 13) | 11 → ~36 | sector como hoy (`sector[]`); sin subtipo |
| Guía de discovery | guía de discovery · Guía de discovery | 7 | «Mapa de pains» |
| Guía interna | guía interna · Guía interna · análisis interno · Análisis interno · Repositorio de referencias · Tarjeta comercial · Mapa corporativo · formación | 17 | «Mensajes clave», «Objeciones», «Argumentario», «Análisis de competencia» (6), «Previo del área» (5), «Repositorio de referencias», «Tarjeta de entrada», «Diagrama de portfolio», «Rol-play» |
| Plantilla | plantilla · plantilla de correo | 2 | «Correo de apertura», «Business case» |
| Herramienta | herramienta | 1 | «Autodiagnóstico» |
| Archivo | Archivo · Entrada de práctica · Entrada de subpráctica (y los dos legacy de SmartOPS de la 13) | 7 → 9 | «Entrada editorial de hipatia2» (5), «Versión anterior» (corp-exec-banca, corp-cio-case-guide, los dos SmartOPS) |

**Qué cambia en build.js.** (1) El filtro «Tipo» de `/materiales/` deja de derivarse de los datos: lista fija en el orden de la tabla, y `check-data.js` avisa si una pieza trae un `tipo` fuera de los nueve. (2) Las tres comparaciones `m.tipo === "referencia"` y el `!== "referencia"` de la regla de portada pasan a «Referencia» (ahora los cinco casos de SmartOPS sí entran). (3) La regla de portada que elige el deck corporativo por `/deck corporativo/i` pasa a `m.id === "corp-exec-global"` (o `subtipo === "Corporativo"`). (4) El eyebrow de tarjeta y ficha de pieza pinta `tipo` y, si hay, `· subtipo`; la fila «Tipo» de la ficha, igual. (5) `subtipo` entra en `data-search` para que «sectorial», «banca» o «rol-play» sigan encontrándose (revisión 10: lo que se ve se puede buscar).

**Qué no cambia.** Estados, usos, momentos y notas. `tipo` sigue siendo un campo de texto; solo se cierra el vocabulario.

**Supuesto a probar.** Que ninguna hoja de la spec (§6.4) fija los valores de `tipo`: he mirado y no los fija, pero conviene añadir la lista de nueve al vocabulario de §6.5 en la misma revisión.

---

## N2 · Los dueños salen solo con el nombre de pila

**El problema.** En Materiales (chip de dueño en cada tarjeta y fila «Dueño» de la ficha de pieza), en las soluciones («Especialista: Jorge», «pídesela a Jorge», «Escríbele al responsable (Jorge)», el hueco «dueño: Jorge · sept 2026»), en las prácticas («Responsable: Jorge», «A quién llamar») y en la portada («02 · Jorge») la gente sale por el nombre de pila. En una compañía de dos mil personas hay muchos Jorges; MA lo dijo en junio para Contactos («foto + nombre + apellido… ¿a quién llamo?») y la 12 lo arregló solo allí. Los datos llevan `dueno`, `especialista` y `responsable` con el nombre de pila (31 piezas de Jorge, 18 de Amador, 12 de Alfredo, 9 de Daniela, 6 de Carmen, 6 de Carla; más «Jorge / producto», «Corporativo · Jorge», «Carmen · Carla»).

**Propuesta.** No reescribir los datos: que el build resuelva el nombre completo desde `personas.json`, que es la única fuente de nombres y ya los tiene (Herrero, Rode, González, Zurdo desde la 12; Ongaro y Sobrino con la 13). Un helper `nombreCompleto(texto)` en build.js que construye un mapa nombre de pila → `nombre` de personas.json y sustituye cada nombre de pila como palabra entera («Jorge / producto» → «Jorge Herrero / producto»; «Carmen · Carla» → «Carmen Rode · Carla González»; «Corporativo» y «por asignar» se quedan). Se aplica en todos los sitios donde se pinta una persona: chip de dueño en tarjetas de Materiales y fila «Dueño» de la ficha de pieza; `pendingBox` y el hueco de «Por qué Entelgy»; «Especialista:» de la cabecera de solución, «pídesela a» de Referencias y «Escríbele al responsable (…)» de «¿Falta algo?»; «Responsable:» y «A quién llamar» de la práctica; el eyebrow de las tarjetas de práctica en portada y en `/practicas/` («04 · Amador Sobrino»); el dueño de cada tarjeta de `/lo-que-viene`. Contactos ya lee `personas.json` directamente.

**Qué no cambia.** `dueno`, `especialista`, `responsable` y `pendiente.dueno` siguen con el nombre de pila en los JSON (es como se les llama en la práctica y como los escriben los SM). El `sign_off.quien` ya va completo.

**Efecto colateral bueno.** Como el chip es texto visible, el buscador de Materiales encuentra las piezas de Jorge por «Herrero» sin tocar `data-search`.

**Supuesto a probar.** Que «02 · Jorge Herrero» y «01 · Carmen Rode · Carla González» caben en el eyebrow de las tarjetas de portada a 390 px; si no, en portada solo el nombre de pila y el completo en todo lo demás.

---

## N3 · La visión corporativa: importar de la v2 lo que la v3 no llegó a pintar

**El problema.** La spec tomó el relato corporativo «entero» de la v2 (§5) y la v3 construyó cuatro bloques de ocho. Faltan los que hacen visible la visión: «Por qué Entelgy» con la tesis en grande y los tres diferenciadores de MA como tres tarjetas; «Dónde entramos» (las cinco prácticas como puente del relato a la oferta); las pruebas plegadas (quiénes somos, sectores; la v3 no tiene ninguna credencial); y el deck enlazado desde el relato. En las prácticas, las tres preguntas escaladas para abrir (`discovery[]`) están en el JSON y no se pintan.

**Propuesta.** En `docs/analisis-v2-v3-vision-corporativa.md` (o `claude/v3-analisis-v2-v3.md` en el proyecto): `/entelgy/` en siete bloques con el copy del deck v6 (sin el «≈70%» ni los recuentos por sector, que el deck quitó), y un plegable «Tres preguntas para abrir» en las cinco prácticas. Cambia `corporativo.json` (`relato.por_que`, `relato.pruebas`), `entelgyPage` y `practicaPage`. Decisiones: la línea de tensión (D3 de MA o la del deck), confirmar las credenciales en el deck, y las funciones de la Oficina solo si MA las valida. No entra en la 13.

---

## N4 · Lo visual: la v2 se ve mejor con la identidad equivocada

**El problema.** La v3 tiene los tokens Entelgy y la v2 no, pero la v2 está maquetada como una publicación (titulares a 90–100 px, bandas navy alternando con claro, eyebrows con regla, numeración en fantasma, tarjetas con borde de color y sombra dura, círculos en el hero) y la v3 como un panel (todo a 36 px, todo claro tras el hero, tarjetas blancas de borde gris).

**Propuesta.** `analisis-visual-v2-v3.md`: nueve reglas de capa editorial dentro de los tokens (E1–E9: escala, eyebrow con regla, una banda navy por página, cabeceras a dos columnas, numeración en fantasma, tarjetas con borde y una sombra dura por página, geometría en heros, chips mono, biblioteca con barra navy), un mock de `/entelgy/` renderizado a 1440 y 390 con las reglas y los bloques de N3, y las capturas de las dos. Entra como insumo de la auditoría visual (14). Decisiones: la tira de prácticas de portada sobre navy (comprobar a 390 con las cajas de solución), la carga de Barlow Condensed en producción (o DIN Pro con licencia), y que el copy del mock es el de N3, sin validar por MA.

---

## N5 · Brief de diseño y mocks para la revisión 14

Hecho el 4-sep: `docs/brief-diseno-editorial.md` (cinco principios, reglas E1–E9, cómo se aplica a cada página, lo que no se hace, cómo se comprueba, cuatro decisiones) y `docs/mockup-editorial/` (portada y `/entelgy/` en HTML autocontenido con PNG a 1440 y 390). Es el insumo del otro hilo para la 14; no cambia la build. Los análisis de contenido y visual de la v2 están también en `docs/`.

---

## Cerrado (4-sep, tarde)

N1–N5 decididos por Susana: nueve tipos + subtipo; dueños resueltos por el build; bloques nuevos de `/entelgy/` en la 14 con la línea del deck v6, las credenciales del deck y la lista de funciones de la Oficina; brief y mocks como insumo de la 14; toda la capa editorial antes del 10; tira navy en portada con prueba a 390; chips solo excepción; Barlow por `<link>`; una caja para Data Intelligence. Detalle en `decisiones-revision-13.md` §8 y en el brief.
