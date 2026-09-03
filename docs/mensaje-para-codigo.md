# Mensaje para Código · Hipatia v3

> Pegar tal cual en la pestaña Código, abierta sobre el repositorio `hipatia2`. Antes de pegar, comprueba que la carpeta `docs/fuentes-v3/` existe en el repo (la deja preparada este mismo paquete): ahí están los ficheros de la propuesta 2 que Código necesita, para no depender de la unidad G:.

---

Vamos a construir la v3 de Hipatia como catálogo estático nuevo en la rama `v3` de este
repo. Fuente de verdad: `docs/Auditoria_y_especificacion_Hipatia_v3.md`, secciones 0.1 y
6.x (revisión 4). No parchees el recorrido actual ni `hipatia-oportunidades.html`: se
reescribe. Dos principios mandan sobre cualquier duda: (1) nadie tiene que explicar cómo
se usa; (2) cada página responde primero a «qué vendemos y por qué Entelgy» y después a
«qué le doy al cliente». Si algo necesita explicación, no se construye.
Un commit por tarea. Dime antes de decidir en lo marcado. Sin animaciones ni pasadas
visuales: tokens Entelgy y ya.

DÍA 1 · datos y base

1. Base del sitio
   - `public/` nuevo con `styles.css` (tokens de `entelgy-design-tokens.css`, sin la capa
     brand-refresh), `app.js` mínimo (buscador, filtros, plegables, modal, impresión),
     logos en `assets/`, favicon.
   - Plantilla única: cabecera (Inicio · Entelgy · Prácticas · Materiales · Contactos +
     buscador siempre visible) y pie con la banda del CRM.
   - Commit: «v3: base estática, tokens Entelgy, cabecera con buscador»
   - Aceptación: 0 errores de consola; un solo botón naranja por pantalla; cabecera
     idéntica en todas las páginas.

2. Modelo de datos
   - `data/` con `corporativo.json`, uno por práctica (`software-development.json`,
     `process-intelligence.json`, `data-ai.json`, `smart-operations.json`,
     `ia-digital-change.json`), `materiales.json` y `personas.json`, según 6.4. En el JSON,
     `subpracticas` se llaman `soluciones`.
   - Software Development → Modernización desde `recorrido/index.html` y `paquete-jorge/*.md`:
     propuesta (tarjeta), objeción principal, primer avance, seis casos con redacción y
     sign-off jul 2026, pitch por rol, objeciones, preguntas, dossier, y los 20 materiales
     con momento (primer contacto · reunión · dejar) y URL (`materiales/*.html`) o
     «pendiente». El correo de apertura y el autodiagnóstico entran como dos materiales.
   - Resto de prácticas y soluciones desde `hipatia-data-core.js`,
     `hipatia-executive-entry-doors.js` (propuesta, señales, límites, pregunta, primer
     paso) y `hipatia-executive-practice-layer.js` (capacidades, primer avance). Lo no
     validado, `pendiente` con dueño y sin fecha inventada. Software Development con tres
     soluciones (decisión provisional; se pregunta a Jorge).
   - `check-data.js`: toda pieza con dueño, estado, uso y fecha o `pendiente`; ninguna
     referencia `citable` sin `sign_off`. Saca `docs/pendientes-por-solucion.md`.
   - Commit: «v3: modelo de datos, Modernización completa, resto con pendientes»
   - Dime antes de: inventar contenido para una solución sin material en el hub.

DÍA 2 · las páginas del catálogo

3. Generador y páginas de práctica y solución
   - Script de build en Node sin dependencias que genera `/practicas/<p>/` y
     `/practicas/<p>/<s>/` desde los JSON con los bloques de 6.3, en el orden fijo.
     «Para prepararte» plegado por defecto. Referencias: citables con frase de reunión, o
     «sin referencia autorizada · pídesela a [especialista]».
   - Commit: «v3: páginas de práctica y solución generadas desde datos»
   - Aceptación: las 5 prácticas y las 12 soluciones tienen los mismos bloques en el mismo
     orden; Modernización enseña íntegro el contenido validado; los huecos dicen
     «en preparación · dueño · fecha».

4. Materiales
   - `/materiales` con buscador y filtros (práctica · uso · tipo · estado), «para cliente»
     por defecto; `/materiales/<id>` y modal reutilizable; «abrir el documento» o
     «enlace pendiente».
   - Commit: «v3: materiales con buscador y fichas»
   - Aceptación: ningún enlace roto; toda pieza con uso, estado con fecha y dueño.

DÍA 3 · portada, relato, contactos y verificación

5. Portada y relato corporativo
   - `/` de una pantalla según 6.3; `/entelgy` con el relato de P2 (general y LATAM);
     `/punto-de-partida` con el as-is/to-be actual, fuera del menú; `/lo-que-viene`.
   - Commit: «v3: portada, relato corporativo, punto de partida»
   - Aceptación: sin «materiales reales», sin contadores no validados, sin situaciones.

6. Contactos y «¿falta algo?»
   - `/contactos` por práctica con primero y segundo y Teams; en cada solución, un enlace
     «¿falta algo?» que abre un correo al responsable con asunto puesto. Nada se guarda.
   - Commit: «v3: contactos y falta algo»

7. Verificación
   - `medir.js` con Playwright: captura de todas las rutas a 1440 y 390, contraste AA,
     peso por página, errores de consola, enlaces rotos, y una lista de «clics hasta»
     (portada → cada solución, portada → cada material para cliente).
   - Commit: «v3: medición automática»
   - Aceptación: todos los criterios de 6.8 en verde salvo el 1 (la prueba con
     comerciales la hago yo), con el informe en `docs/`.

---

## Dónde está cada fuente (para Código)

| Qué | Dónde |
|---|---|
| Especificación completa (fuente de verdad) | `docs/Auditoria_y_especificacion_Hipatia_v3.md` · secciones 0.1 y 6.x |
| Reglas del repo para Código | `CLAUDE.md` en la raíz |
| Contenido validado de Modernización | `public/modernizacion/recorrido/index.html`, `paquete-jorge/*.md`, `estatus-v1-modernizacion.md` |
| Materiales V1 de Modernización | `public/modernizacion/materiales/onepager-modernizacion.html`, `ficha-modernizacion.html` |
| Autodiagnóstico | `public/autodiagnostico/grupo-lantia/index.html` |
| Tokens Entelgy y logos | `docs/fuentes-v3/entelgy-design-tokens.css`, `docs/fuentes-v3/entelgy-logo-*.png` |
| Catálogo de la propuesta 2 (74 materiales) | `docs/fuentes-v3/hipatia-data-core.js`, `hipatia-catalog-reconciliation.js`, `hipatia-legacy-material-index.js` |
| Soluciones (puertas) de las cinco prácticas | `docs/fuentes-v3/hipatia-executive-entry-doors.js`, `hipatia-process-intelligence-focus.js` |
| Capacidades, discovery y primer avance por práctica | `docs/fuentes-v3/hipatia-executive-practice-layer.js` |
| Contenido de práctica (qué cubre, qué no, pregunta, kit genérico) | `docs/fuentes-v3/hipatia-practice-content.js` |
| Relato corporativo (general y LATAM) | `docs/fuentes-v3/hipatia-corporate-conversation.js`, `hipatia-corporate-message.js`, `hipatia-corporate-method-cycle.js` |
| Reglas de gobierno de la biblioteca | `docs/fuentes-v3/arquitectura-de-contenido.md`, `matriz-continuidad-hipatia2.md`, `inventario-continuidad-activos.md` |
| Mockup de la portada aprobado | `docs/mockup-portada/preview.html` (y `preview.png`) |
