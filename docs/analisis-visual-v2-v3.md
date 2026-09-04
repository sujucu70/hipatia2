# Lo visual: qué hace la v2 que la v3 no hace, y cómo importarlo sin salirse de la identidad Entelgy

*Complemento al análisis de contenido · 4 de septiembre de 2026. Con el `hipatia-oportunidades.html` que me has pasado (es la versión de mediodía: seis prácticas, modos «Tengo una reunión / Quiero abrir / Me piden propuesta», chip «sin CRM»), renderizado con sus fuentes de datos guardadas en `docs/fuentes-v3/`, y la v3 en `9135b6b`, las dos a 1440 px. Te adjunto las capturas y un mock de `/entelgy/` con la capa editorial aplicada sobre los tokens Entelgy, para que veas de qué hablo antes de que nadie toque la build.*

---

## El problema

La v3 tiene la identidad correcta (los tokens Entelgy: navy, slate, morado, naranja solo en el CTA, DIN/Barlow para titulares, Roboto para texto) y la v2 no (papel crema, coral, amarillo, una serif editorial que Entelgy no usa). Y sin embargo la v2 se ve mejor. La razón no es el color ni la fuente: es la composición. La v2 está maquetada como una publicación; la v3, como un panel de administración. Siete cosas concretas lo explican:

1. **Escala.** El titular de portada de la v2 mide 90–100 px; el de la v3, 36. La v3 tiene tokens para 48 y 60 px (`--font-size-5xl`, `-6xl`) y no los usa en ninguna página. Con ese tamaño, la frase de MA es un rótulo, no un titular.
2. **Ritmo oscuro / claro.** La v2 alterna bandas navy a ancho completo (hero, «La base común», la tira de prácticas, la barra de filtros) con secciones claras: el ojo tiene puntos de apoyo. La v3 es cabecera navy, hero navy y después todo claro hasta el pie, en todas las páginas.
3. **Estructura visible antes de leer.** Eyebrows en mono mayúscula con una regla delante, numeración grande en las tarjetas (01/02/03 en fantasma), cabeceras de sección a dos columnas (titular grande a la izquierda, una frase de contexto a la derecha). La v3 lo tiene todo a un solo tamaño y en una sola columna.
4. **Tarjetas con carácter.** Borde superior de color, sombra dura desplazada (8 px, sin desenfoque) en la tarjeta destacada, un número de fondo. Las de la v3 son blancas con borde gris fino y sombra suave: las mismas que cualquier SaaS.
5. **Geometría.** Círculos concéntricos en la esquina del hero, un círculo en la esquina de las tarjetas de material. Nada estridente, pero da textura al navy. La v3 no tiene ni un elemento gráfico.
6. **Chips.** Mono, mayúscula pequeña, esquinas rectas, sin punto. Los de la v3 son píldoras con punto de color: correctos, pero pesan más y se repiten mucho.
7. **La tira de prácticas.** En la v2 es una banda navy con seis columnas (número, nombre, responsable). En la v3 son cinco tarjetas blancas con las cajas de solución dentro; las cajas son decisión cerrada (revisión 11b) y hay que respetarlas, pero la banda puede envolverlas.

Un aviso sobre mis capturas: en mi entorno la Barlow Condensed de la v3 no ha cargado (el `@import` de Google Fonts va dentro de `styles.css`), así que los titulares salen en Arial. En producción se verán condensados y algo mejor; los siete puntos de arriba no dependen de eso.

Lo que la v3 hace bien y la v2 no, y no se toca: la identidad Entelgy, el buscador en cabecera, el índice lateral en las páginas largas, las URL por pantalla, el naranja reservado al CTA, la construcción estática.

---

## 1 · La capa editorial: nueve reglas dentro de los tokens

Todo es `styles.css` y plantillas de `build.js`; ningún color ni fuente nuevos.

| # | Regla | Dónde | Cómo |
|---|---|---|---|
| E1 | **Escala de titulares.** H1 de portada, `/entelgy/`, práctica y biblioteca a `--font-size-6xl` (60 px; 72 en portada), H2 de sección a 36–38 px, H3 de tarjeta a 24–26. Interlineado 0.98–1.05, `letter-spacing` −0.02em. | Todas | `styles.css`: `.hero h1`, `.section h2`, `.card h3`. |
| E2 | **Eyebrow con regla.** Mono mayúscula, `letter-spacing` .08em, una línea de 28 px delante (`::before`). Morado 700 sobre claro, morado 300 sobre navy. | Todas | `.eyebrow::before`. |
| E3 | **Una banda navy por página, además del hero.** Portada: la tira de prácticas. `/entelgy/`: «Por qué Entelgy» (slate) y «Dónde entramos» (navy). Práctica: el hero con el titular grande y el responsable (hoy la práctica no tiene hero oscuro). Biblioteca: la barra de filtros. Solución: la tarjeta del primer paso ya es navy; se queda como única. | Portada, /entelgy, práctica, biblioteca | Nuevas clases `.band` y `.band-slate`. |
| E4 | **Cabeceras de sección a dos columnas.** Eyebrow + H2 a la izquierda (1.25fr), una frase de contexto a la derecha (.75fr), alineadas por la base. En móvil, una columna. | Todas las secciones con H2 | `.section-head`. |
| E5 | **Numeración en fantasma.** En tarjetas numeradas (prácticas, método, fases de la Oficina, capacidades), el número en `--font-family-display` a 96 px, morado 100, en la esquina inferior derecha, detrás del texto. | Portada, /entelgy, práctica | `.card .num`. |
| E6 | **Tarjetas.** Borde superior de 3 px morado en las de contenido; borde izquierdo morado en listas de fases; sombra dura `8px 8px 0 morado-300` solo en la tarjeta destacada de cada página (el deck en portada y en `/entelgy/`, el primer paso en la solución). Sombra suave fuera. | Todas | `.card`, `.card-featured`. |
| E7 | **Geometría en los heros.** Dos círculos concéntricos (`::before`/`::after`, borde 1 px blanco al 14 %, `box-shadow` en anillos al 3 %) en la esquina superior derecha; un círculo pequeño en la tarjeta destacada. | Heros y tarjeta destacada | `.hero::before/::after`. |
| E8 | **Chips.** Mono 11 px mayúscula, `radius-sm`, sin punto salvo en los de estado (vigente / revisar / pendiente), que lo conservan. | Todas | `.chip`. |
| E9 | **Biblioteca.** Barra de filtros sobre navy con etiquetas mono encima de cada campo y la línea «88 piezas visibles» debajo; tarjetas con eyebrow de tipo, titular a 24 px, nota, chips y «Ver ficha →» en mono. | /materiales | `materialesPage`, `.filters`. |

Con N1 (nueve tipos) y N2 (nombres completos) la biblioteca queda además con un filtro que cabe en una línea y un chip de dueño que se lee.

---

## 2 · El mock de `/entelgy/`

`entelgy-editorial.html` es la página de «Cómo presentar Entelgy» con las nueve reglas aplicadas y los bloques de N3 (Por qué Entelgy, Dónde entramos, Pruebas plegadas, deck al final), sobre el `styles.css` real de la v3 más una hoja de capa editorial. Es un mock: no hay build detrás, el copy de «Pruebas» y de las tres tarjetas es el propuesto en el análisis de contenido, y a 390 px está resuelto a mano. Sirve para decidir, no para publicar.

Lo que enseña: el hero con titular a 72 px y los círculos; la banda slate con la tesis y el raíl de los cuatro pilares; las tres tarjetas de diferenciadores con número en fantasma; las cuatro entradas con cabecera a dos columnas; el método con «Evita:» en mono; la tira navy de las cinco prácticas; la Oficina con las fases como lista; las pruebas plegadas con cuatro cifras grandes; y el deck como tarjeta destacada con sombra dura.

---

## 3 · Lo que no se importa

- La paleta (papel crema, coral, amarillo, verde) y la serif Newsreader. Es el prototipo, no Entelgy.
- El naranja en más de un sitio por pantalla (la v2 lo usa en botones y cabeceras). Sigue reservado al CTA.
- Los modos «Tengo una reunión / Quiero abrir / Me piden propuesta» y el chip «sin CRM» de la cabecera: fuera desde la revisión 4.
- Las seis prácticas con Automatización·RPA: la taxonomía es la de la revisión 5.

---

## 4 · Lo que necesito que decidas o compruebes

1. **Que esto sea insumo de la auditoría visual (revisión 14)**, no una revisión aparte: el otro hilo ya está mirando estilos contra los tokens y el mockup de portada. Le pasas este documento y el mock, y que decida qué entra antes del 8 y qué después del 10.
2. **La tira de prácticas en portada sobre navy.** Las cajas de solución (revisión 11b) se quedan dentro, en blanco sobre navy; hay que comprobar a 390 px que apiladas no se hacen eternas. Si no cabe, se queda la rejilla clara y la banda navy va solo en `/entelgy/`.
3. **La fuente de titulares.** Barlow Condensed es un sustituto web de DIN; funciona a 60–72 px si carga. Comprobar en producción que carga (el `@import` dentro de `styles.css` es frágil; mejor un `<link>` en la cabecera) y, si Entelgy tiene licencia web de DIN Pro, usarla.
4. **El copy del mock** es el del análisis de contenido (N3): la línea de tensión del deck, las credenciales del deck v6, los sectores sin recuento. Nada de esto está validado por MA todavía.

---

## 5 · Ficheros

- `capturas/v2-home.png`, `capturas/v2-corporate.png`, `capturas/v2-practice-sd.png`, `capturas/v2-library.png`: la v2 que me has pasado, a 1440 px.
- `capturas/v3-home.png`, `capturas/v3-entelgy.png`, `capturas/v3-practice-sd.png`, `capturas/v3-materiales.png`: la v3 en `9135b6b`, a 1440 px (titulares en Arial por lo dicho arriba).
- `mock/entelgy-editorial.html` y `mock/mock-entelgy-1440.png`, `mock/mock-entelgy-390.png`.
