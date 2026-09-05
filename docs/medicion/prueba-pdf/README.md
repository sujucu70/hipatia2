# Prueba de impresión a PDF (BC.4 · revisión 16)

Impreso con Chromium headless (A4, `printBackground: true`, márgenes por defecto de las hojas `@page{margin:0}`).

- **Salen bien.** Las dos fichas A4 del hub (`ficha-modernizacion`, 2 hojas; `onepager-modernizacion`, 1 hoja) imprimen a sangre completa, con los fondos navy y el naranja intactos, la tipografía correcta (Barlow/Roboto/JetBrains, ya servidas desde el portal, se incrustan en el PDF) y sin cortes ni texto perdido: son páginas diseñadas como A4, así que «Guardar como PDF» es viable para las piezas de una o dos hojas.
- **Nota.** El one-pager de Puesto de trabajo pedido en BC.4 vive en `entelgy.guberna.es` (externo, no alcanzable desde el entorno de build), así que la prueba usa el one-pager de Modernización, que es el mismo tipo de pieza de una hoja. Los decks con una lámina por `iframe` no se prueban aquí: no imprimen bien y no son «una hoja».
