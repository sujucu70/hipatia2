Revisión 21 (7 sep). La v4 ya está en hipatia-v4.guberna.es y la he recorrido en
el navegador: la 19 se ve bien y el panel responde. A partir de aquí, cada
commit de la rama se empuja como en la v3; la regla de «sin push» de la 18 ya no
aplica. Esta revisión sale de la reunión de hoy con Miguel Ángel y Roberto (el
comercial que presentará Hipatia el día 10, en siete minutos): tres cambios
pequeños de portada, `/entelgy/` y el panel, un solo commit, después de la 19b y
la 20.

BT · LO QUE SALE DE LA REUNIÓN DEL 7

   1. Portada, cabecera de «La oferta». El marco que Miguel Ángel quiere que la
      fuerza comercial perciba es «un método, cinco prácticas»: que el proceso
      está factorizado y que el método es el mismo en las cinco. El H2 pasa de
      «Cinco prácticas. Una forma de elegir por dónde empezar.» a:
        «Un método, cinco prácticas. Elige por dónde empezar.»
      En `build.js`, `portadaPage`, la llamada a `sectionHead("La oferta", …)`.
      El eyebrow y la nota de la derecha no cambian.

   2. `/entelgy/`, el hero. Roberto teme que quien entre a leer de arriba abajo
      no llegue nunca a la presentación corporativa, que está al final de la
      página. La solución acordada es sutil, no mover el deck: una línea más en
      el hero, debajo del lede, con la misma anatomía que la de las prácticas
      («Responsable: … · Material para cliente ↓», mono, morado 300 sobre
      navy):
        «Presentación corporativa: Abrir en pantalla ↗ · Ver la pieza ↓»
      «Abrir en pantalla ↗» va al `url_documento` del deck corporativo (el
      primer id de `relato.material.ids`, hoy `corp-exec-global`); «Ver la
      pieza ↓» ancla a la sección del material, que gana `id="material"`. Si el
      deck no tuviera `url_documento`, solo se pinta «Ver la pieza ↓». Nada más
      cambia en la página.

   3. Pregunta a Hipatia, eyebrow de la pieza. Con la entrada corporativa de la
      19, la respuesta a «deck corporativo» pinta «Deck · Corporativo · Entelgy ·
      corporativo»: tipo, subtipo y práctica dicen lo mismo tres veces. Regla:
      cuando la `practica` de la pieza es `corporativo`, el eyebrow no lleva el
      tramo de práctica; queda «Deck · Corporativo». El resto de piezas siguen
      con «Tipo · Subtipo · Práctica».

   Commit: «v4: un método y cinco prácticas en portada, presentación
   corporativa desde el hero de /entelgy/, eyebrow corporativo en Pregunta a
   Hipatia (revisión 21)».

BU · LO QUE NO TE PIDO

   - El orden de las cinco prácticas en portada y en `/entelgy/` se queda como
     está: lo decide Miguel Ángel más adelante.
   - Nada en las páginas de práctica: su hero ya lleva «Material para cliente ↓».
   - El visor de los decks de Claude Design (los «Abrir en pantalla ↗» que van a
     entelgy.guberna.es) no deja ver la lámina entera en algunas pantallas. No
     es de este repo; se arregla en el hub aparte.
   - Ningún cambio de estructura, color ni copy fuera de los tres puntos.

Al terminar: build, `check-data.js` y `check-pregunta.js` (9/9) sin errores;
`medir --all` en verde, sin dejar las capturas de ruta en el commit; capturas de
portada y de `/entelgy/` a 1440 y 390 en `docs/medicion/` (la línea nueva del
hero tiene que caber en una sola línea a 1440 y en dos a 390, sin pisar el
lede). Empuja y pásame la URL de la build.
