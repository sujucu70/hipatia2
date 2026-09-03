# Hipatia · repositorio hipatia2 · reglas para Código

Este repo publica hipatia2.guberna.es (Cloudflare Worker con assets estáticos en `public/`, tras Cloudflare Access). La rama `main` contiene el demostrador de julio (recorrido de Modernización). La **v3** se construye en la rama `v3` como catálogo estático nuevo; no se parchea lo anterior.

## Fuente de verdad
- `docs/Auditoria_y_especificacion_Hipatia_v3.md` · leer §0.1 (principios) y §6 (especificación) antes de tocar nada. §7 y §8 son fase 2: no se construyen.
- `docs/mensaje-para-codigo.md` · el plan de tres días con tareas, commits y aceptación.
- `docs/fuentes-v3/` · ficheros de la propuesta 2 (datos, tokens, logos, docs de gobierno). Solo lectura: se extrae contenido, no se copia código.

## Dos principios que mandan sobre cualquier duda
1. Nadie tiene que explicar cómo se usa el portal. Si algo necesita explicación, no se construye.
2. Cada página responde primero a «qué vendemos aquí y por qué Entelgy» y después a «qué le doy al cliente». Lo demás va plegado y es opcional.

## Reglas de construcción
- Sitio estático: carpeta por ruta con `index.html`, un `styles.css`, un `app.js` mínimo (buscador, filtros, plegables, modal, impresión), JSON en `data/`. Sin frameworks, sin `document.write`, sin capas que sobreescriban funciones, sin hash routing. Cada página pinta sin JS.
- Generador de páginas en Node sin dependencias (`build.js`); el contenido vive en `data/*.json`, nunca en el HTML.
- Identidad: tokens de `docs/fuentes-v3/entelgy-design-tokens.css` tal cual. Naranja #E05730 solo en el CTA principal de cada pantalla. Contraste AA en todo texto. Sin animaciones ni pasadas visuales.
- Vocabulario en pantalla: prácticas, soluciones, materiales. En JSON: `practicas`, `soluciones`, `materiales`. No existen «puertas», «kits» ni «cartuchos» en la interfaz.
- Estados: vigente / revisar / pendiente (+ fecha) · sale al cliente / interno / con validación · citable (sign-off · fecha) / confirmar por cuenta · en preparación · dueño · fecha.
- Honestidad: nada simula un agente, un envío o una integración. Un hueco dice «en preparación · dueño · fecha», nunca lleva texto de relleno ni fecha inventada.
- Cifras y casos: solo los que tengan `sign_off` en el JSON. Las cifras siempre como resultado de un caso, nunca como promesa. El Assessment de Modernización se cuenta como «dos semanas».
- Software Development tiene tres soluciones (Modernización, Mantenimiento evolutivo, Asistencia técnica aumentada); Spec-Driven y Factoría SEAS son capacidades. Decisión provisional, pendiente de Jorge.

## Forma de trabajar
- Un commit por tarea con el mensaje que indica el plan. Rama `v3`.
- Preguntar antes de: inventar contenido para una solución sin material, cambiar la taxonomía, añadir una página que no esté en §6.2, tocar `main`.
- Verificación al final con `medir.js` (Playwright): capturas a 1440 y 390, contraste, peso, consola, enlaces, clics hasta cada solución y cada material.
