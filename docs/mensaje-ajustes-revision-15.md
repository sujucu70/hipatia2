Revisión 15 (4 sep, noche). La 14 está aplicada y desplegada (`dad9426`) y la he
verificado desde el clon: los dos índices y su peso, los nueve tipos con subtipo, los
nombres completos en los catorce sitios, los ocho bloques de `/entelgy/` con el copy
exacto, las tres preguntas en las cinco prácticas, los chips solo de excepción, la tira
navy a 390 y las capturas propias de las cinco páginas. Bien hecho, incluidas las dos
decisiones tuyas (los numerales por `data-num` y los enlaces sobre navy). Esta revisión
es corta y tiene un solo motivo: el lunes 8 el portal se enseña desde la red de
Entelgy y no sabemos si esa red deja cargar `fonts.googleapis.com`. Si no lo deja, MA
ve el portal en Arial. Así que las fuentes pasan a servirse desde el propio portal y
la dependencia externa desaparece. De paso, las capturas de `docs/medicion/` vuelven a
estar al día (las de prácticas y soluciones son del día 3) y hay cuatro remates cortos. Los correos a los SM salen después del 8, así que no hay prisa por ellos;
sí por lo primero.

Haz pull antes. Commit por bloque, con el texto que se indica.

AW · LAS FUENTES, DESDE EL PORTAL

   1. Ficheros. Las tres familias que ya usa `styles.css`, en woff2, subconjunto latin
      (cubre el castellano entero: acentos, ñ, ü, ¿ ¡) y solo los pesos que se usan:
      Barlow Condensed 500, 600 y 700; Roboto 400, 500 y 700; JetBrains Mono 400 y
      500. Ocho ficheros, unos 190 KB en total. Las tres familias van con licencia
      OFL 1.1, que permite servirlas desde el portal. La forma más segura de
      traerlas desde tu sandbox es npm (lo he comprobado: los tres paquetes traen
      exactamente esos ficheros): `@fontsource/barlow-condensed`,
      `@fontsource/roboto` y `@fontsource/jetbrains-mono` como devDependencies; de
      cada paquete copias los `files/<familia>-latin-<peso>-normal.woff2` que hagan
      falta a `public/assets/fonts/` con un nombre corto (`barlow-condensed-700.woff2`,
      `roboto-400.woff2`, `jetbrains-mono-500.woff2`…). Deja un `scripts/fonts.js`
      (o una línea en `package.json`) que haga la copia, para que sea repetible, y
      no metas `node_modules` en el repo, claro. Si npm no te deja, dilo antes de
      buscar otra vía.

   2. `styles.css`. Ocho `@font-face` al principio, antes de los tokens, con
      `font-display: swap` y `src: url("/assets/fonts/<fichero>") format("woff2")`
      (los de fontsource sirven de plantilla; solo woff2, sin el `.woff`). Las
      variables `--font-family-display`, `--font-family-body` y `--font-family-mono`
      no cambian de nombre ni de pila de respaldo. Nada de fuentes en `data:` dentro
      del CSS: irían al peso de cada página y no hace falta.

   3. Cabecera (`page()`). Fuera los dos `<link rel="preconnect">` y el
      `<link rel="stylesheet">` de Google Fonts. En su lugar, un solo
      `<link rel="preload" as="font" type="font/woff2" crossorigin
      href="/assets/fonts/barlow-condensed-700.woff2">`: la de los titulares, que es
      la que se ve primero. Las demás cargan con el CSS.

   4. `medir.js`. La excepción que metiste en la 14 para ignorar los fallos de carga
      del CDN de fuentes ya no tiene sentido: quítala y vuelve al criterio estricto
      (cero errores de consola). Los ficheros de `assets/fonts/` no cuentan en el
      peso de página (HTML + CSS + JS, como hasta ahora); si medir.js los estuviera
      sumando, no lo haga.

   5. Comprobación tuya. Con las fuentes en local, tu sandbox ya renderiza Barlow
      Condensed: en la captura de portada a 1440 el titular tiene que ocupar cuatro
      líneas o menos y verse estrecho y alto, no como en las capturas de la 14, que
      salieron en Arial. Si sigue saliendo en Arial, algo del `@font-face` está mal
      (ruta, `format`, el `crossorigin` del preload) y hay que pararse ahí.

   Commit: «v3: fuentes servidas desde el portal, sin Google Fonts (revisión 15)»

AX · LAS CAPTURAS, AL DÍA

   Regenera todas las capturas de `docs/medicion/` (las 139 rutas, a 1440 y 390),
   no solo las de portada, `/entelgy/`, Materiales y Contactos: las de prácticas y
   soluciones que hay ahora son del día 3 y enseñan la v3 de antes de la 14
   («Responsable: Amador», chips en todo, sin hero navy). La PR es la evidencia que
   MA puede abrir; tiene que enseñar lo que está desplegado. Y el PDF de portada, con
   la fuente buena.

   Commit: «v3: medición y capturas completas con las fuentes del portal (revisión 15)»

AY · CUATRO REMATES CORTOS

   1. En `/entelgy/`, el bloque de la Oficina va sin eyebrow y con el H2 a una
      columna; los demás bloques llevan cabecera a dos columnas (E4). Ponle eyebrow
      «Cuando el cambio no cabe en un proyecto» y H2 «La Oficina de Transformación y
      Gobernanza», con la primera frase del texto actual a la derecha como contexto.

   2. En `data/materiales.json`, tres notas de uso empiezan por «En preparación ·
      dueño: Jorge · fecha objetivo: sept 2026.» (`mod-correo-apertura`,
      `mod-presentacion-spec`, `mod-business-case`). El chip ya dice «pendiente» y el
      dueño ya sale con apellido: quita ese arranque y deja la nota con lo que sigue
      («Correo de apertura con enlace al autodiagnóstico; primero para el sector
      Financiero.», «Deck técnico Spec-Driven para la reunión avanzada.», «Plantilla
      para armar el business case tras el assessment. Uso interno hasta decidir qué
      cifras de productividad (Foreworth) pueden salir al cliente.»).

   3. A 390, el panel de filtros de Materiales ocupa unos 700 px antes de la primera
      tarjeta. Por debajo de 768 px, envuélvelo en un `<details>` con `<summary>`
      «Filtros» (cerrado por defecto; el buscador queda fuera, visible). A 1440 no
      cambia nada.

   4. Materiales abre hoy con dos piezas de Jorge que no están para enseñar (el
      correo de apertura, «pendiente» y sin enlace, y el autodiagnóstico, en
      «revisar»), porque los dos índices siguen el orden de `materiales.json`. Quien haga la demo sin conocer el estado del
      portal ve dos huecos de entrada. Orden fijo en `/materiales/` y
      `/materiales/todo/`: primero `vigente`, luego `revisar`, al final
      `pendiente`; dentro de cada estado, el orden de práctica de la portada
      (corporativo, Process Intelligence, Software Development, Data Intelligence,
      Smart Operations, Digital Change) y, dentro de la práctica, el orden de los
      nueve tipos (AR). La primera tarjeta pasa a ser el Executive Deck. `app.js`
      solo oculta, así que el orden se conserva al filtrar y al buscar. La ficha
      de pieza y los carriles de solución no cambian.

   Commit: «v3: cabecera de la Oficina, tres notas sin dueño repetido, filtros
   plegados en móvil, biblioteca ordenada por estado (revisión 15)»

AZ · LO QUE NO TE PIDO

   - Ningún cambio de copy, estados, usos, citabilidades ni estructura fuera de AY.2 y
     del orden de AY.4.
   - No toques los carriles vacíos de «Material común» en Smart Operations y Digital
     Change («Sin pieza para este momento todavía»): es una decisión de datos que
     Susana toma después del 8.
   - Ni el índice lateral de la práctica a 390 (parte «Qué cubre y qué no» en cuatro
     líneas): queda para después del 10.
   - Autodiagnóstico: no se toca.

Al terminar: build, check-data.js sin errores, medir.js en verde en los seis criterios
con el criterio de consola estricto otra vez, barrido de canon vacío, capturas
completas, PDF de portada, nota de revisión 15 en §0 de la spec (ya está escrita en
`docs/`; compruébala), descripción del PR con la línea de la 15 y, en el texto de la
PR, una frase que diga que el portal ya no carga nada de fuera. Para y dime si: npm
no te deja traer los paquetes, el titular de portada sigue en Arial en tu captura, o
`/materiales/todo/` supera los 150 KB con el `<details>`.
