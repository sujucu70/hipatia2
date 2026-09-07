Ajustes tras la primera build de la v3 (revisión 5 de la especificación, 3 sep). Aplícalos
en tu rama del PR #1, un commit por bloque, y vuelve a pasar check-data.js, build.js y
medir.js al final. Dime antes de decidir en lo marcado. He actualizado
docs/Auditoria_y_especificacion_Hipatia_v3.md (§0 nota de revisión 5, §6.3) y el mockup
de docs/mockup-portada/ con estos cambios.

A · NOMBRES Y TAXONOMÍA (decisión cerrada)
   - «Data & AI» pasa a llamarse «Data Intelligence»; «IA + Digital Change» pasa a
     «Digital Change». Cambia nombre, id y ruta: /practicas/data-intelligence/ y
     /practicas/digital-change/. Los productos IAbility, PreservIA y Oficina de Gobernanza
     Humana de la IA conservan su nombre.
   - Data Intelligence es una única solución con el mismo nombre que la práctica. Sus
     cuatro antiguas puertas (gobierno del dato, gobernanza de modelos, analítica para
     decidir, analítica predictiva) pasan a ser sus capacidades, dentro de la página de
     solución. En la tarjeta de portada no lleva cajitas y el enlace dice «Ver la solución →».
   - Catálogo: 11 soluciones (PI 2 · SD 3 · DI 1 · SO 2 · DC 3). Ajusta el criterio 3 de
     §6.8 en medir.js.
   - Commit: «v3: nombres Data Intelligence y Digital Change, Data como solución única»

B · CITABILIDAD (corrección de datos, no de diseño)
   - Los seis casos de Modernización (NASERTIC, UNED, DGOJ, AESA, H10, MICIU/AEI) tienen
     sign-off del PM del 16 jul 2026 (paquete-jorge/01 y 03). En data/materiales.json
     deben llevar citable: "citable" y sign_off: {quien: "Jorge Herrero", fecha:
     "2026-07-16"}, y en pantalla «citable · sign-off jul 2026» más la leyenda «citable
     en presentación · el envío formal al cliente se autoriza por cuenta». Ahora salen
     como «con validación» y eso deshace el sign-off.
   - El caso es citable aunque su cifra esté en verificación: H10 (~90 %), AESA (+80 %)
     y MICIU (+40 %) llevan la marca «cifra en verificación» sobre la cifra, no sobre
     el caso. Corner WK (2023) sigue en «confirmar por cuenta».
   - Commit: «v3: seis casos de Modernización citables con sign-off»

C · PORTADA
   1. Título: una frase de dos líneas a 36 px, ≤ 110 caracteres. Usa la del mockup
      («Las transformaciones no fallan por la tecnología. Fallan cuando tecnología,
      procesos, personas y cultura no avanzan juntas.»). El párrafo de 60 segundos se
      queda en /entelgy. Quita «Human driven technology.» del hero.
   2. Tarjetas de práctica: propuesta de valor de una sola frase, ≤ 90 caracteres; usa
      las cinco del mockup. Cajitas de soluciones en Roboto (no mono), dos por línea
      cuando quepan. Responsable y «Ver práctica →» en una sola línea.
   3. Bloque «Material para el cliente»: regla «una por práctica + deck corporativo».
      Para cada práctica, la pieza con sale_al_cliente = sí y estado = vigente, con
      momento = reunión si la hay, y entre varias la de fecha de revisión más reciente;
      la sexta es el deck corporativo vigente. Si una práctica no tiene ninguna, su
      tarjeta dice «material para cliente en preparación · dueño: <SM>» y enlaza a la
      práctica. Las referencias no entran en este bloque (viven bajo el acceso rápido
      «Casos»). Rótulo del bloque: «Lo más reciente, por práctica».
   4. Chips de estado en las tarjetas: solo dos (uso y vigencia), sin duplicar el punto de
      color; el chip «enlace pendiente» solo en la ficha, no en la tarjeta.
   - Commit: «v3: portada — título, tarjetas y regla de material por práctica»

D · DOS COMPROBACIONES (responde antes de tocar nada)
   1. ¿Siguen en public/ los materiales HTML de Modernización
      (modernizacion/materiales/onepager-modernizacion.html y ficha-modernizacion.html)
      y el autodiagnóstico (autodiagnostico/grupo-lantia/), y sus fichas enlazan a ellos?
      Si se fueron con la retirada del demostrador, recupéralos de main.
   2. La biblioteca tiene 31 piezas y la propuesta 2 catalogaba 74 en
      docs/fuentes-v3/hipatia-data-core.js. Dime cuáles no cargaste y por qué. Salvo que
      haya una razón, carga el resto con estado «revisar», su dueño y sin fecha inventada:
      la promesa a MA es «la oferta y el material», y sin ellas la biblioteca enseña
      sobre todo Modernización.

Al terminar: build completo, medir.js en verde, PDF de la portada a 1440 px en
docs/medicion/ para que lo revise Susana, y actualiza el PR.
