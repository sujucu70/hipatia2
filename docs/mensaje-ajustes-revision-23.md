Revisión 23 (7 sep). OJO: el bloque de contactos se aplicó ya en el commit
7d7ca15 con la información que había antes de que llegara el correo de Carla.
Este mensaje está reescrito sobre ese estado: del bloque de contactos solo
quedan tres cosas, y va entero el bloque de Automatización según Carla. Dos
commits. Solo datos y notas.

CX · CONTACTOS · LO QUE FALTA

   Lo aplicado en 7d7ca15 está bien y no se toca: Miguel Ángel Villacañas
   creado y asignado como técnico de las tres soluciones de Software
   Development, y las fichas de Jorge, Daniela, Amador y Alfredo completas.
   Quedan cuatro cosas.

   1. `carla-gonzalez` en `data/personas.json`. El título que se puso venía de
      una suposición sobre su firma; su correo del 7-sep da el bueno.
        - `titulo` → «Manager CoE Automatización» (hoy: «Responsable de
          Automatización · Centro de Excelencia»).
        - `foto` → «/assets/personas/carla-gonzalez.jpg». El fichero ya está en
          el repo (400 × 400, 20 KB, commit 545e0b6); no lo regeneres.

   2. Persona nueva en `data/personas.json`:

        { "id": "david-escribano", "nombre": "David Escribano",
          "titulo": "Líder Técnico CoE Automatización",
          "correo": "david.escribano@entelgy.com",
          "telefono": null, "teams": null,
          "practica": "process-intelligence", "foto": null }

   3. En `data/process-intelligence.json`, solución `process-automation-ai`:
      `contactos.tecnico` → `david-escribano` (hoy null). Es la última fila
      «por confirmar» que se puede cerrar hoy.

   4. `data/preguntas.json` (hoy 9 filas): añade «a quién llamo por
      automatización» → `carla-gonzalez`, intención de persona. Sube el
      contador de `check-pregunta.js` a 10.

   Commit: «v4: contactos — David Escribano como técnico de Automatización,
   título y foto de Carla (revisión 23)».

CY · AUTOMATIZACIÓN SEGÚN CARLA

   1. El plazo del diagnóstico NO se toca. `primer_paso.plazo` ya dice «6–8
      semanas» en los tres puntos de `data/process-intelligence.json` (39, 64,
      225) y es lo correcto. Lo que está a 4–6 es la ficha A4, que vive en el
      repo `Entelgy` y no es tuya.

   2. UNED pasa a citable. En `pa-caso-uned` (`data/materiales.json`):
        - `citable` → `si`.
        - `sign_off` → «Carla González · 2026-09-07».
        - `frase_reunion` → «En la UNED levantamos 95 procesos en año y medio y
          en seis meses ya había 26 robots en producción. La adjudicación es
          pública y las cifras las confirma Carla.»
        - `nota_de_uso` → «Adjudicación pública (BOE / PLACSP). Cifras
          confirmadas por Carla el 7-sep: citable con nombre en presentación.»

   3. La energética de Colombia NO cambia. `pa-caso-energetica-colombia` se
      queda en `confirmar_por_cuenta` y sin sign-off: la puerta de ese caso es
      la autorización del cliente, no la de Carla, y eso no ha llegado. Añade al
      final de su `nota_de_uso`: « Carla la da por citable por su parte (7-sep);
      el nombre sigue pendiente de que autorice la cuenta.»

   4. `pendiente` de `process-automation-ai`: no se retira, se reescribe. Las
      dos piezas A4 siguen sin corregir.
        - `pendiente.texto` → «Lectura de Carla (7-sep): diagnóstico de 6–8
          semanas confirmado, UNED citable y contacto técnico asignado. Queda
          la corrección de la ficha y el one-pager (plazo, vocabulario y hueco
          de contacto), que se hace fuera del portal.»
        - `dueno` y `fecha_objetivo` no cambian.

   5. Las dos notas de uso de las piezas A4 mantienen el aviso, con fecha, hasta
      que lleguen las versiones nuevas. En `data/materiales.json`:
        - `automation-onepager`, `nota_de_uso` → «Una cara para abrir la primera
          reunión: qué automatizamos y por qué Entelgy. La versión publicada
          lleva el contacto sin rellenar y dice todavía «hiperautomatización»:
          Carla dio los cambios el 7-sep y la corrección está en camino. Hasta
          entonces, pídesela antes de enviarlo.»
        - `automation-ficha`, `nota_de_uso` → «Dos caras para quien lo valida
          dentro: qué incluye la automatización de procesos y cómo se contrata.
          La versión publicada lleva el contacto sin rellenar, el diagnóstico a
          4–6 semanas y todavía «hiperautomatización»: Carla dio los cambios el
          7-sep y la corrección está en camino. Hasta entonces, pídesela antes
          de enviarlo.»

   6. DECISIÓN DE SUSANA — no lo apliques sin su confirmación explícita en este
      mensaje. La corrección que Carla pide en el one-pager («casi ninguno llega
      a producción» → «casi ninguno consigue el retorno esperado») arregla una
      atribución mal hecha: MIT · State of AI in Business 2025 mide retorno, no
      puesta en producción. En el portal esa frase aparece tres veces en
      `data/process-intelligence.json`, líneas 220, 250 y 331. Si Susana lo
      confirma, cámbialas a «El 95% de los pilotos de IA no consigue el retorno
      esperado» conservando el resto de cada frase y la atribución tal cual. Si
      no lo confirma, se quedan como están y no es un fallo del build.

   Commit: «v4: Automatización según Carla: UNED citable, aviso de las piezas A4
   con fecha (revisión 23)».

CZ · LO QUE NO TE PIDO

   - Ningún texto nuevo de pantalla en la página de Automatización. El copy lo
     ha dado por bueno; solo cambian datos y notas.
   - No rehagas nada del commit 7d7ca15: Miguel Ángel y las fichas de Jorge,
     Daniela, Amador y Alfredo están bien como están.
   - Nada en el repo `Entelgy`: la ficha y el one-pager de Automatización se
     corrigen fuera de hipatia2 y no son tuyos.
   - Nada sobre la Oficina de Gobernanza Humana de la IA. La frontera con
     Digital Change está en conversación entre Carla y Alfredo; el texto de
     `objecion_principal` que ya la menciona se queda como está.
   - Nada de Process Intelligence as a Service: sigue sin existir como
     contenido, y es de después del 10.
   - Los fijos de Jorge, Alfredo y Miguel Ángel no se guardan: `personas.json`
     pinta un solo teléfono y es el móvil.

Al terminar: build, `check-data.js` y `check-pregunta.js` (10/10) sin errores;
`medir --all` en verde, sin dejar las capturas de ruta en el commit; capturas de
`/contactos/` y de `/practicas/process-intelligence/process-automation-ai/` a
1440 y 390, con la foto de Carla a 32 y 48 px. En `/contactos/` deben quedar sin
«por confirmar» las tres filas de Software Development y la de Automatización.
Empuja y pásame la URL de la build.
