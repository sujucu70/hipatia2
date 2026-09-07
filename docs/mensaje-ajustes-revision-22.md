Revisión 22 (7 sep). Jorge Herrero ha contestado a las seis cuestiones de su
página. Confirma más de lo que cambia: Foreworth como contraste, los casos
DGOJ, MICIU y H10 colgando de Mantenimiento, y que NASERTIC atiende llamadas de
referencia. Lo que cambia: el modelo UCE se mantiene (las dos piezas de
Asistencia técnica vuelven a vigente), el reparto del ahorro no tiene cifra
fija, y las dos referencias anónimas de Asistencia técnica esperan a Dirección
de Negocio. Solo datos y notas; un commit en la rama v4.

BV · SOFTWARE DEVELOPMENT SEGÚN JORGE

   1. Asistencia técnica: el modelo UCE se mantiene. En julio Jorge dijo que
      pasaba a créditos de modernización y dejamos la ficha y el one-pager en
      revisar; ahora dice que UCE es bueno y lo mantienen, que es una fortaleza
      que hay que expresar, pero que exige una madurez en adopción de IA que el
      90 % de los clientes no tiene, así que no es crítico defenderlo en los
      primeros contactos. En `data/materiales.json`:
        - `software-asistencia-onepager`: `estado` → `vigente`; `nota_de_uso` →
          «Una cara para abrir la primera reunión: contratas entrega, no
          currículums. Lleva el modelo UCE (capacidad de entrega), que Jorge
          mantiene: es una fortaleza para clientes con madurez en IA; en un
          primer contacto no entres a defenderlo, abre con la entrega medida y
          sustituible por contrato.»
        - `software-asistencia-ficha`: `estado` → `vigente`; `nota_de_uso` →
          «Dos caras para quien lo valida dentro (CIO, compras). Explica el
          modelo UCE, que Jorge mantiene; déjala cuando el cliente ya ha
          entendido que contrata entrega, no horas.»
      En `data/software-development.json`:
        - `capacidades_nota` de la práctica → «Si te preguntan cómo respondemos
          del resultado: en las tres soluciones se contrata capacidad de
          entrega (UCE) y cada mes van en la factura dos índices, el IGE (lo
          entregado) y el ISA (la salud del aplicativo), calculados sobre las
          herramientas del cliente. En la Asistencia técnica, además, el ahorro
          de eficiencia de la IA vuelve al cliente como créditos de
          modernización. Spec-Driven y la Factoría SEAS van dentro de las tres
          soluciones.»
        - En la solución `asistencia-tecnica`, `kit.frases_cuenta.regla`: añade
          al principio «El modelo UCE es una fortaleza para clientes con madurez
          en IA; en el primer contacto no entres a defenderlo. » y deja el resto
          tal cual.
        - `pendiente.texto` de `asistencia-tecnica` → «Lectura de Jorge (7-sep):
          UCE se mantiene y la ficha y el one-pager vuelven a vigente. Queda por
          confirmar con él cómo conviven UCE y los créditos de modernización en
          esta página, y las referencias de banca LATAM e industria y energía,
          pendientes de Dirección de Negocio.» `dueno` y `fecha_objetivo` no
          cambian.

   2. Mantenimiento evolutivo: el reparto del ahorro no tiene cifra. Jorge: la
      productividad que se consigue depende de cuánto control deje tomar el
      cliente y cuánta tecnología se pueda aplicar, y el reparto de esa mejora
      se pacta con cada cliente y oportunidad. El texto de pantalla se queda
      como está («una parte medida», sin cifra). Cambian dos notas y se cierra
      la lectura:
        - `kit.material_interno_nota` de `mantenimiento` → «El reparto del
          ahorro no tiene cifra fija: se pacta con cada cliente según la
          productividad que se consiga, que depende de cuánto control deje
          tomar y cuánta tecnología se pueda aplicar (Jorge, 7-sep). La ficha
          (40 %) y el deck (20 %) siguen en revisar hasta que él los alinee; las
          cifras económicas del modelo (€/UCE, tabla de equivalencias, reparto
          interno) no salen a cliente.»
        - Quita el objeto `pendiente` de `mantenimiento`: reparto, Foreworth y
          los tres casos están confirmados. La nota plegada desaparece sola.
        - `mod-ficha-servicio` (Modernización) sigue en `revisar`; `nota_de_uso`
          → «Ficha de dos caras para dejar al cliente; valida ante IT y compras.
          V1 provisional: menciona un reparto del 40 % del ahorro que Jorge no
          fija como cifra (se pacta con cada cliente según la productividad
          conseguida). Si el cliente pregunta por esa cifra, remite a Jorge.»

   3. NASERTIC atiende llamadas de referencia, siempre a través del responsable
      de la cuenta. En `mod-caso-nasertic`:
        - `frase_reunion` → «Un organismo público nos estimó la migración en 9
          meses por el método tradicional. La entregamos en 3. Y si quieres, se
          lo preguntas a ellos: NASERTIC atiende llamadas de referencia, a
          través del responsable de la cuenta.»
        - `nota_de_uso` → «Citable en presentación. Las llamadas de referencia
          se gestionan siempre a través del responsable de la cuenta (Jorge
          Herrero); el envío formal de la referencia al cliente se autoriza por
          cuenta.»

   4. Las dos referencias anónimas de Asistencia técnica siguen como
      `confirmar_por_cuenta`. En `at-caso-banca-latam` y
      `at-caso-industria-energia`, añade al final de `nota_de_uso`: « Pasar a
      citable depende de Dirección de Negocio (Jorge, 7-sep).»

   5. Lo que Jorge confirma y no cambia: Foreworth como contraste de mercado en
      Modernización (la página que MA validó en junio), DGOJ, MICIU y H10 bajo
      Mantenimiento con sus cifras, y la frase del AI Act sobre el core de
      pólizas, que no ha objetado.

   Commit: «v4: Software Development según Jorge: UCE se mantiene, reparto sin
   cifra, NASERTIC por el responsable de cuenta, referencias AT a Dirección de
   Negocio (revisión 22)».

BW · LO QUE NO TE PIDO

   - Nada en `mod-deck-ejecutivo` ni en `mod-autodiagnostico`: siguen en revisar
     por sus propios motivos.
   - Ningún texto nuevo en las tres páginas fuera de las notas dichas; el copy
     de pantalla de Mantenimiento y Modernización lo ha dado por bueno.
   - Los datos de contacto y la foto de Jorge no han llegado: `personas.json` no
     se toca.

Al terminar: build, `check-data.js` y `check-pregunta.js` (9/9) sin errores;
`medir --all` en verde, sin dejar las capturas de ruta en el commit; capturas
de `/practicas/software-development/asistencia-tecnica/` a 1440 y 390 (las dos
piezas ya sin chip «revisar»). Empuja y pásame la URL de la build.
