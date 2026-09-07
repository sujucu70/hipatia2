Revisión 10 (3 sep, noche). Revisada tu salida de la revisión 9: K, L, M, N y O están
bien, la portada sale como pedí. Solo un ajuste sobre tu arreglo del criterio 8, y
es pequeño. Haz pull antes (este mensaje está en docs/).

P · EL BUSCADOR DE MATERIALES TIENE QUE ENCONTRAR LO QUE SE VE EN LA TARJETA

   Al quitar `nota_de_uso` de `data-search` para bajar de 150 KB, el buscador de
   /materiales dejó de encontrar por la nota: un comercial que lee «el caso UNED»
   en la tarjeta del Executive Deck y teclea «UNED» no lo encuentra. Eso obliga a
   explicar cómo funciona el buscador, y no queremos explicar nada.

   app.js ya hace `norm(it.getAttribute("data-search") || it.textContent)`, así que
   la solución no pesa nada:

   - build.js (lista de Biblioteca): `data-search` lleva solo lo que NO se ve en la
     tarjeta, es decir el sector: `(m.sector || []).join(" ")`. Si queda vacío,
     omite el atributo.
   - app.js: la línea del filtro de texto pasa a sumar las dos fuentes en vez de
     elegir una:
       var okText = !q || norm((it.getAttribute("data-search") || "") + " " + it.textContent).indexOf(q) !== -1;

   Resultado: se busca sobre todo lo visible (tipo, título, nota, chips, dueño) más
   el sector, y /materiales pesa unos 7 KB menos que ahora. Nada más en app.js ni
   en build.js.

   Comprueba con el build: «UNED» encuentra el Executive Deck y el caso UNED;
   «banca» encuentra la ficha sectorial de Modernización; «Amador» encuentra sus
   piezas; medir.js sigue en verde en el criterio 8.

   Commit: «v3: el buscador de Materiales busca sobre el texto visible de la tarjeta (revisión 10)»

Al terminar: build, check-data.js, medir.js. No hace falta PDF nuevo de portada (no
cambia). Sube y actualiza la descripción del PR con una línea.
