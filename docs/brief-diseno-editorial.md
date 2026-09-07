# Brief de diseño · la capa editorial de Hipatia v3

*Para la auditoría visual (revisión 14) · 4 de septiembre de 2026 · Susana / Guberna. Una página: los principios, las reglas, lo que no se hace y cómo se comprueba. Los mocks que lo enseñan están en `docs/mockup-editorial/` (portada y `/entelgy/`, HTML y PNG a 1440 y 390). Ningún color ni fuente nuevos: todo dentro de `docs/fuentes-v3/entelgy-design-tokens.css`.*

---

## El problema

La v3 tiene la identidad correcta y se ve como un panel de administración: todo al mismo tamaño, todo claro después del hero, tarjetas blancas de borde gris, chips repetidos en cada tarjeta. El comercial no tiene por dónde empezar a mirar y MA lo leerá como «poco terminado». La v2 se veía mejor con la identidad equivocada porque estaba maquetada como una publicación. Se importa la composición; no la paleta.

## Cinco principios

1. **Dos segundos.** El primer pantallazo de cada página responde, siempre en el mismo sitio, a cuatro cosas: dónde estoy (en grande), qué vendemos aquí (una línea), qué le puedo dar al cliente (las piezas), a quién llamo (nombre y apellido). Lo demás, debajo.
2. **Lo atractivo sale de la tipografía y del ritmo, nunca del color ni del adorno.** Tres niveles de jerarquía y no más: titular a 60–72 px, segundo nivel a 36–38, texto. Si al entrecerrar los ojos no se distingue qué es lo importante, la página no está terminada.
3. **El contraste tiene significado.** Navy para lo que dice Entelgy (relato, tesis, hero de práctica, tira de prácticas); blanco para lo que el comercial usa (materiales, kit, referencias). Una banda oscura por página además del hero; con dos es un folleto.
4. **Un acento para actuar, otro para orientar.** Naranja solo en el CTA de cada pantalla. Morado para eyebrows, numeración y metadatos. Los tres estados con su punto minúsculo. Ningún otro color. Ningún icono, ninguna ilustración, ninguna foto: la flecha → en mono y los arcos concéntricos del hero, que son el paréntesis del logo.
5. **Dos anatomías de tarjeta y ninguna más.** La pieza (eyebrow tipo · práctica, título, una línea de uso, estado si es excepción, «Abrir») y el bloque de contenido (eyebrow, titular, texto). Mismo orden, mismos márgenes, el estado siempre abajo a la izquierda. Se aprende una vez.

## Nueve reglas (styles.css y plantillas de build.js)

| # | Regla | Dónde |
|---|---|---|
| E1 | Titulares: H1 de portada 68–72 px; H1 de `/entelgy/`, práctica y biblioteca 60; H2 de sección 36–38; H3 de tarjeta 24–26. Interlineado 0.98–1.05, `letter-spacing` −0.02em. Los tokens 5xl y 6xl ya existen y no se usan. | Todas |
| E2 | Eyebrow con regla: mono mayúscula, .08em, una línea de 28 px delante (`::before`). Morado 700 sobre claro, morado 300 sobre navy. | Todas |
| E3 | Una banda navy por página además del hero. Portada: la tira de prácticas. `/entelgy/`: «Por qué Entelgy» (slate) y «Dónde entramos» (navy). Práctica: el hero con titular grande y responsable. Biblioteca: la barra de filtros. Solución: la tarjeta del primer paso, ya navy, es la única. | Portada, /entelgy, práctica, biblioteca |
| E4 | Cabeceras de sección a dos columnas: eyebrow + H2 a la izquierda (1.25fr), una frase de contexto a la derecha (.75fr), alineadas por la base. En móvil, una columna. | Todas las secciones con H2 |
| E5 | Numeración en fantasma solo donde hay secuencia (método, fases de la Oficina, fases de IAbility, diferenciadores): display a 96 px, morado 100, esquina inferior derecha, detrás del texto. | /entelgy, práctica, solución |
| E6 | Tarjetas: borde superior de 3 px morado en las de contenido y de pieza; borde izquierdo morado en listas de fases; sombra dura `8px 8px 0 morado-300` solo en la tarjeta destacada de cada página (el deck corporativo en portada y en `/entelgy/`, el primer paso en la solución). Fuera de ahí, sombra suave o ninguna. | Todas |
| E7 | Geometría: dos arcos concéntricos en la esquina superior derecha de cada hero (`::before`/`::after`, borde 1 px blanco al 14 %, anillos al 3 %), un círculo en la tarjeta destacada. Nada más. | Heros y tarjeta destacada |
| E8 | Chips: mono 11 px mayúscula, `radius-sm`. Solo se pinta la excepción: «revisar», «pendiente», «con validación», «confirmar por cuenta», «interno». «Sale al cliente · vigente» es el caso normal y no lleva chip. Los estados conservan el punto. | Todas |
| E9 | Biblioteca: barra de filtros sobre navy con etiqueta mono sobre cada campo, los nueve tipos (N1) en una línea, «88 piezas visibles» debajo; tarjetas con eyebrow de tipo, titular a 24, nota, excepción y «Ver ficha →». Dueño con nombre y apellido (N2). | /materiales |
| E10 | Prosa: ningún párrafo pasa de 72 caracteres por línea (`max-width: 72ch`) en solución, práctica y pieza. Lo que necesite el ancho entero va a dos columnas (p. ej. «La propuesta»: 1.1fr/.9fr a partir de 1024 px). | Solución, práctica, pieza |

## Cómo se aplica a cada página

- **Portada.** Hero navy con la frase de MA a 68 px, el subtitular y el único CTA. Cabecera de sección a dos columnas y la tira de prácticas como banda navy con cinco columnas: número, nombre, la línea de portada, las cajas de solución (revisión 11b: envuelven el texto; apiladas en móvil) en blanco sobre navy, y responsable con apellido. «Lo que puedes enseñar o enviar hoy» con el deck corporativo como tarjeta destacada y cinco piezas sin chips salvo excepción. Mock: `mockup-editorial/portada-editorial.html`.
- **`/entelgy/`.** Hero, banda slate «Por qué Entelgy» con la tesis y el raíl de los cuatro pilares, tres tarjetas numeradas (los tres diferenciadores de MA), cuatro entradas, método con «Evita:» en mono, tira navy «Dónde entramos», Oficina con fases en lista, pruebas plegadas, deck destacado. Mock: `mockup-editorial/entelgy-editorial.html`. El copy nuevo es el de `docs/analisis-v2-v3-vision-corporativa.md` y no está validado por MA.
- **Práctica.** Hero navy: nombre a 60, la línea de portada, responsable con apellido y el enlace al material. Debajo, en claro: qué cubre / qué no / la pregunta como tres tarjetas en fila con borde superior; capacidades como cuatro tarjetas bajas numeradas; soluciones como tarjetas con `una_linea`; material común en tres carriles (primer contacto · en la reunión · para dejar); a quién llamar. El índice lateral se queda.
- **Solución.** Como está, con E1, E2, E6 y E8; la tarjeta navy del primer paso es la destacada; «Para prepararte» plegado con los mensajes clave (revisión 13).
- **Biblioteca.** E9.

## Lo que no se hace

Colores por práctica, iconos, degradados, fotos, ilustraciones, contadores, carruseles, badges, más de un naranja por pantalla, chips en cada tarjeta, animaciones (un hover discreto como máximo), titulares en Arial porque la fuente no cargó.

## Cómo se comprueba

- La prueba de la spec: cinco comerciales sin explicación y tres encargos («dime qué vende Entelgy en Data Intelligence», «encuentra algo que pueda enviar a un cliente de banca», «¿a quién llamo por Smart Operations?»). Dos segundos por pantalla.
- La prueba de entrecerrar los ojos, página a página: tiene que verse una cosa grande, una banda oscura y las tarjetas; nada más.
- A 1440 y 390 px, con `medir.js` en verde y las cajas de solución de portada sin cortar texto.
- Que Barlow Condensed carga en producción: el `@import` dentro de `styles.css` es frágil; mejor un `<link rel="preconnect">` y `<link rel="stylesheet">` en la cabecera. Si Entelgy tiene licencia web de DIN Pro, usarla.

## Decisiones cerradas (Susana, 4-sep, tarde)

1. **Alcance: todo antes del 10.** Las nueve reglas en las cinco páginas (portada, `/entelgy/`, práctica, solución, biblioteca), no solo en las dos del kickoff. Este brief y los mocks son insumo de la revisión 14; el otro hilo escribe una sola revisión.
2. **Los bloques nuevos de `/entelgy/`** (Por qué Entelgy, Dónde entramos, Pruebas plegadas, deck al final) y el plegable de tres preguntas en las prácticas **entran en la 14**, con la composición. Línea de tensión: la del deck v6 («Desplegar tecnología es fácil. Que mueva tu cuenta de resultados, no.»); la de MA (D3) se le enseña el 8. Credenciales: las del deck v6, plegadas, sin «50+ alianzas» ni recuentos por sector. La Oficina lleva además la línea de funciones: «Funciones que puede asumir: PMO/SMO, arquitectura, auditoría, apoyo CISO, agilidad, QMO, productividad, FinOps.»
3. **Portada: la tira de prácticas sobre navy con las cajas dentro**, como en el mock, con prueba a 390 px; si apiladas se hacen eternas, el otro hilo lo dice y se vuelve a la rejilla clara. En Data Intelligence, una caja «Data Intelligence · una sola solución».
4. **Chips: solo la excepción** (revisar, pendiente, con validación, confirmar por cuenta, interno). «Sale al cliente · vigente» va sin chip. Las tres preguntas siguen en la ficha de cada pieza.
5. **Fuente: Barlow Condensed cargada con `<link>` en la cabecera** de cada página (no con `@import` dentro de `styles.css`), y comprobada en producción.
6. **Biblioteca: nueve tipos y `subtipo`** (N1) y **dueños con nombre y apellido resueltos por el build** desde `personas.json` (N2). Entran en la misma revisión que E9.
7. El copy de los bloques nuevos de `/entelgy/` sigue pendiente de MA el 8; se construye con él y se corrige si cambia.
