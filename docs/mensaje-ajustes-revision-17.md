Revisión 17 (5 sep). La 15 y la 16 están aplicadas, empujadas y desplegadas
(`5949393`) y las he verificado desde el clon: fuentes locales y ningún `<link>`
externo en las páginas del build, Barlow en las capturas, deck fijo primero y
pendientes al final, filtros plegados a 390, Smart Operations con el motor y las cinco
fuerzas, la propuesta a dos columnas, Llévatelo con «pídeselo a…», `/contactos/` con
sus dos vistas y los carriles tomados de las soluciones. Bien hecho, incluidas las
decisiones que tomaste sobre la marcha (el enrutado de las páginas sueltas en
medir.js, el favicon en las dos fichas de julio y dejarlas fuera del contraste; las
tres quedan anotadas). Esta revisión son remates de lo que se ve en las capturas de
la 16: cuatro cosas pequeñas, un solo commit, y tiene que estar desplegada antes del
lunes 8.

Haz pull antes.

BG · REMATES DE LA 16

   1. «Lo que presiona al CIO» (`/practicas/smart-operations/`): en la rejilla de
      cinco, la cifra «14 /sem» se parte en dos líneas y el eyebrow «Disponibilidad»
      se corta por la mitad («DISPONIBILIDA / D»). Datos en
      `data/smart-operations.json`, campo `presion.fuerzas`:
        - Los cinco `ambito` pasan a una palabra: «Puesto», «Cloud», «Caídas»,
          «Regulación», «IA».
        - La primera fuerza: `cifra` «14» y `texto` «fricciones por empleado y semana
          fuera del SLA: 470.000 horas al año en una empresa media.» (la unidad se
          va al texto; el resto no cambia).
      Y en `styles.css`, el eyebrow dentro de `.card.fuerza` sin la regla de 28 px
      (`::before`), que en una tarjeta de una quinta parte del ancho se come el sitio
      de la palabra; el eyebrow de las cabeceras de sección conserva la regla (E2).

   2. En la misma práctica, la tarjeta «Qué cubre» dobla en altura a «Qué no
      prometemos» y «La pregunta que abre» porque el texto de la 16 se fue a cien
      palabras. `que_cubre` pasa a: «SmartOPS es el motor operativo de Entelgy, no un
      catálogo de servicios: modelo N0–N3 (el volumen a la máquina, el criterio al
      equipo), dimensionamiento sobre datos reales, reporting en Power BI, IA en
      producción desde 2018 y gobierno ISO 20000, 27001 y ENS alto en el diseño del
      servicio. El mismo motor sirve a dos territorios: el puesto de trabajo
      (soporte, dispositivo y experiencia del empleado) y la infraestructura crítica
      (sistemas, redes y cloud, 24×7). Desde centros propios en Madrid, São Paulo y
      Miami.»

   3. `/contactos/`, nota de pie: «Los datos que faltan (teléfono, título, técnico
      de cada solución) los piden los SM después del 8.» habla del calendario interno
      y con el sujeto cambiado. Pasa a: «Los datos que faltan (teléfono, título y
      técnico de cada solución) se están pidiendo a cada responsable.» (en
      `build.js`, `contactosPage`).

   4. Las notas del primer paso cierran con el nombre de pila («Alcance con
      Amador.», «con Jorge.», «con Carla.», «con Carmen.», «con Daniela.», «con
      Alfredo.»): diez ocurrencias en `primer_paso.nota` y `primer_avance.nota` de
      los cinco JSON de práctica. Pasa a nombre y apellido en las diez (Amador
      Sobrino, Jorge Herrero, Carla González, Carmen Rode, Daniela Ongaro, Alfredo
      Zurdo); es texto de datos, `nombreCompleto()` no llega ahí. Y en la de
      Infraestructura crítica, «quick wins a 90 días» pasa a «mejoras ejecutables en
      90 días».

   Commit: «v3: remates de la 16: fuerzas con ámbito de una palabra, qué cubre de
   Smart Operations más corto, nota de contactos, apellidos en el primer paso
   (revisión 17)»

BH · LO QUE NO TE PIDO

   - Nada más de copy ni de estructura. Ni las otras cuatro prácticas, ni las
     soluciones fuera de las diez notas del punto 4.
   - No toques `/materiales/todo/` aunque esté a 147 KB: si el commit lo sube de
     150, para y dímelo; la salida (sacar archivo y legacy del índice completo) se
     decide después del 10.
   - Autodiagnóstico y las dos fichas de julio: no se tocan.

Al terminar: build, check-data.js sin errores, medir.js en verde en los seis
criterios, barrido de canon vacío, capturas a 1440 y 390 de `/practicas/smart-operations/`
y de `/contactos/`, nota de revisión 17 en §0 de la spec (ya está escrita en `docs/`;
compruébala) y la línea de la 17 en la descripción del PR. Para y dime solo si algo
sube de 150 KB o si la rejilla de cinco vuelve a partir una palabra a 1440.
