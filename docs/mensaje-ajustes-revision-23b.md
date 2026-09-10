Revisión 23b (7 sep). Confirmación del punto CY.6 que dejaste pendiente: sí, se
propaga. Es lo único de este mensaje. Un commit.

DA · LA CIFRA DEL 95%, CORREGIDA A LO QUE DICE LA FUENTE

   Susana lo confirma. El MIT (State of AI in Business 2025) mide retorno, no
   puesta en producción, así que hoy el portal le atribuye algo que no dice.

   Tres puntos en `data/process-intelligence.json`. Ojo: no basta con cambiar la
   primera mitad de cada frase — las tres siguen con «los que llegan», que deja
   de encajar en cuanto la primera mitad habla de retorno. Cambian las dos
   mitades:

   1. Línea 220 · `objecion_principal.respuesta` de `process-automation-ai`.
      «El 95% de los pilotos de IA no llega a producción (MIT, State of AI in
      Business 2025). Los que llegan tienen debajo un proceso ordenado y RPA
      rodado.»
      →
      «El 95% de los pilotos de IA no consigue el retorno esperado (MIT, State
      of AI in Business 2025). Los que lo consiguen tienen debajo un proceso
      ordenado y RPA rodado.»
      El resto de la respuesta, desde «Ponemos el agente…», no se toca.

   2. Línea 250 · `kit.frases_cuenta`, la frase del piloto que no escala.
      «El 95% de los pilotos de IA no llega a producción. Los que llegan tienen
      un proceso ordenado y RPA por debajo. Empezamos por ahí, y el agente va
      encima solo donde el proceso exige decidir.»
      →
      «El 95% de los pilotos de IA no consigue el retorno esperado. Los que lo
      consiguen tienen un proceso ordenado y RPA por debajo. Empezamos por ahí,
      y el agente va encima solo donde el proceso exige decidir.»

   3. Línea 331 · `keynotes`, la del piloto que no escala.
      «El 95% de los pilotos de IA no llega a producción; los que llegan tienen
      RPA rodado debajo.»
      →
      «El 95% de los pilotos de IA no consigue el retorno esperado; los que lo
      consiguen tienen RPA rodado debajo.»

   La atribución a MIT se queda tal cual donde ya está. No añadas la fuente
   donde hoy no aparece.

   Antes de commitear, un `grep -rn "no llega a producción" data/` para
   confirmar que no queda ninguna otra en ningún área. Si aparece alguna fuera
   de Process Intelligence, NO la toques: dímelo y lo miramos, porque puede
   venir de otra fuente y significar otra cosa.

   Commit: «v4: el 95% de MIT mide retorno, no puesta en producción (revisión
   23b)».

DB · LO QUE NO TE PIDO

   - El endurecimiento de `check-data.js` con los enumerados: Susana lo deja
     para **después del 10**. No lo hagas ahora. Queda anotado.
   - Nada más de Automatización: el resto de la 23 está bien como quedó.
   - Nada en el repo `Entelgy`.

Al terminar: build, `check-data.js` y `check-pregunta.js` (10/10); `medir --all`
en verde; captura de `/practicas/process-intelligence/process-automation-ai/`
con el bloque de objeción visible. Empuja.
