Revisión 11b (3 sep, noche). La 11 está bien aplicada (`b25c7c2`): canon limpio,
/entelgy sin Mercados ni Pruebas, huecos como huecos, cabeceras con la propuesta de
portada. Dos cosas pequeñas antes de la auditoría visual, para que parta de la
portada definitiva. Haz pull antes (este mensaje está en docs/).

X · LA LÍNEA BAJO EL TITULAR DE PORTADA DICE PARA QUÉ SIRVE ESTO

   El subtitular actual («Entelgy trabaja los cuatro a la vez, con un método
   común…») repite el titular con otras palabras, y ninguna de las dos frases le
   dice al comercial qué es el portal. Cambia `portada.subtitular` en
   `data/corporativo.json` por:

   «Todo lo que necesitas para vender: qué ofrece Entelgy, por qué, y el material
   que puedes enseñar o enviar a un cliente.»

   Nada más en la portada: el eyebrow «Entelgy en una frase», el titular y el enlace
   «Cómo presentar Entelgy →» se quedan.

   Commit: «v3: el subtitular de portada dice para qué sirve el portal»

Y · «LA OFERTA» A 390 PX

   Lo que señalaste: las cinco tarjetas de práctica van en un grid de cinco columnas
   fijo y a 390 px se leen a una palabra por línea. Hazlo como `.grid-3`: cinco
   columnas por encima de 900 px, dos entre 640 y 900, una por debajo de 640. Solo
   CSS (o la clase equivalente en build.js si el grid está inline); nada más cambia.

   Commit: «v3: la rejilla de prácticas de portada se apila en móvil»

Al terminar: build, medir.js en verde, captura de portada nueva a 1440 y a 390 en
docs/medicion/ (cambian las dos). El `§6.9` de `acreditacion_nota` no se renderiza:
déjalo.
