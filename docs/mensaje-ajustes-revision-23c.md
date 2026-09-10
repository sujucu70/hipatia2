Revisión 23c (7 sep). Dos condiciones que faltan alrededor de la leyenda de
citabilidad. No es contenido: es que la leyenda se pinta siempre, también donde
la referencia NO es citable, y dice lo contrario que el chip que tiene al lado.
Un commit, dos líneas de `build.js`.

EA · LA LEYENDA SOLO DONDE ES VERDAD

   Contexto de por qué corre prisa. `LEYENDA_CITA` dice «Citable en presentación
   · el envío formal al cliente se autoriza por cuenta.» Eso vale para una
   referencia citable. Hoy se pinta en dos sitios sin mirar el estado:

   - En la ficha del material (línea 597): **las 20 referencias que NO son
     citables la llevan**, justo debajo de un chip que dice «confirmar por
     cuenta». Es la página que abre un comercial para decidir si puede nombrar
     a un cliente, y le dice que sí.
   - En la página de solución (línea 408): se pinta bajo el bloque entero de
     referencias. **Ocho de las once soluciones tienen ahí mezcla o cero
     citables** — la peor, `smartops-workplace`, con siete «confirmar por
     cuenta» y una citable.

   1. `build.js` línea 597, dentro del `if (esRef)`. Hoy:

        meta += fila("Envío al cliente", `<span class="footer-note">${esc(LEYENDA_CITA)}</span>`);

      Envuélvelo para que solo salga cuando la referencia es citable:

        if (m.citable === "citable") meta += fila("Envío al cliente", `<span class="footer-note">${esc(LEYENDA_CITA)}</span>`);

      La fila «Citabilidad» de la línea 596 no se toca: esa sí debe salir
      siempre, y ya distingue los dos estados. Cuando la referencia no es
      citable, su `nota_de_uso` sigue pintándose donde ya lo hace y es ahí donde
      el comercial lee la condición real.

   2. `build.js` línea 408, el `<p class="footer-note">` con el texto literal
      «Citable en presentación. El envío formal de la referencia al cliente se
      autoriza por cuenta.». Que solo se pinte si **todas** las referencias del
      bloque son citables:

        const todasCitables = refs.every((r) => r.citable === "citable");

      y añade esa línea al HTML solo si `todasCitables`. Si hay mezcla o
      ninguna, no se pinta nada y manda el chip de cada tarjeta.

      No cambies el texto de esa línea aunque no coincida palabra por palabra
      con `LEYENDA_CITA`. Unificarlos es otra conversación; aquí solo ponemos la
      condición.

   Efecto esperado tras el build: la leyenda desaparece de 20 fichas de
   referencia y de 8 páginas de solución, y se queda en `preservia`, `ogh-ia`,
   `modernizacion` y `mantenimiento`, que son las que tienen todas las
   referencias citables. Si te sale otro reparto, páralo y dímelo.

EB · LO QUE NO TE PIDO

   - No toques `chipCitable`: los dos chips están bien.
   - No toques `materialMini` (línea 320). Ahí la leyenda ya está condicionada a
     `citable === "citable"` y funciona: es el único de los tres sitios que se
     escribió bien.
   - No cambies ninguna `nota_de_uso` ni ningún `citable` de `materiales.json`.
     Esto es solo build.
   - No unifiques los dos textos de leyenda.
   - Nada de `check-data.js`: sigue para después del 10.

Al terminar: build, `check-data.js` y `check-pregunta.js` (10/10); `medir --all`
en verde. Dos comprobaciones concretas antes de commitear:
`grep -rl "Citable en presentación" public/materiales/ | wc -l` debe bajar de 36
a 16 — las 14 fichas de referencia citables más `index.html` y `todo/index.html`,
que la llevan por `materialMini` y ahí está bien. Y las páginas de
`process-automation-ai` y `smartops-workplace` ya no deben llevar la línea bajo
el bloque de referencias. Empuja.

Commit: «v4: la leyenda de citabilidad solo donde la referencia es citable
(revisión 23c)».
