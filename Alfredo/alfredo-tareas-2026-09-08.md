# Digital Change · Qué sale de la reunión con Alfredo

**Fecha de la reunión:** 8 de septiembre de 2026 (~52 min)
**Fuentes:** `Alfredo/Feedback hipatia - Transcripción.txt` · `Alfredo/notas reunion feedback.txt` · `Alfredo/contactos digital change.png`
**Contraste con:** `alfredo-estado-trabajo.md` (proyecto) y `data/digital-change.json` (portal v4)

---

## Lo que hay que decidir

Alfredo ha dado el visto bueno a la v4 sin peros de fondo. Lo que trae no son objeciones: son huecos de contenido que él llena y tres decisiones de producto que llevaban abiertas desde julio y que en esta llamada se pueden cerrar.

El calendario manda: **el jueves 10 se presenta** y **el 30 acaba la colaboración**. Eso parte el trabajo en dos. Antes del jueves, solo lo que se ve en pantalla y no depende de que nadie envíe nada. Después del 10, el contenido que llega de Alfredo y el traspaso.

Y hay una cuarta cosa, más gorda, que no es de Alfredo pero que él puso encima de la mesa: **dónde vive esto en producción**. Su aviso, literal: si acaba en un dominio como site estático, «la mantenibilidad de esto baja en picado». Va a la reunión con infraestructura y marketing de la semana que viene, no a esta lista.

---

## Bloque 1 · Antes del jueves 10 (no depende de nadie)

### 1.1 · Tres cosas que se ven en todo el portal, no solo en Digital Change

**Volver atrás no funciona.** Alfredo se quedó atrapado dentro de las presentaciones: Escape no responde, los botones son *reset / avanzar / retroceder* y a veces *cerrar*, pero ninguno devuelve a Hipatia. Acabó usando el botón atrás del navegador. Hace falta un «Volver a Hipatia» persistente y que Escape haga lo mismo.
> «Escape no funciona… en algunas hay continuar y cerrar pero no vuelves a Ipatia.»

**Descargar.** Todo material debe poder verse en pantalla y bajarse: PPTX si es presentación, DOCX si es documento, PDF siempre. Está apuntado desde antes, pero él lo señaló como uno de los valores de la v4: *«que estén las presentaciones en formato online o descargable en PDF me parece fantástico»*.

**El «¿Por dónde empezamos?» se lee como un proceso.** Numerado 01 → 02 → 03 y con flechas, en la misma presentación donde el método tiene cinco pasos también con flechas. Él entendió que primero se hace Process Intelligence, luego software, luego el resto. No lo son: son áreas, se elige una.
> «Oigo una cosa y veo otra… psicológicamente es confuso.»

Quitar numeración y flechas de esa slide. Va al **deck corporativo**, que es lo que presenta Roberto el jueves — con lo que esto no es un detalle de Digital Change, es lo primero que se ve.

### 1.2 · Contactos del área (los datos ya están, se meten hoy)

Los cuatro perfiles vienen completos en `notas reunion feedback.txt`. Hoy `data/personas.json` solo tiene a Alfredo y a Cristina, y `contactos.tecnico` está a `null` en IAbility y PreservIA — que es exactamente lo que la nota del 7-sep decía que quedaba pendiente de él.

| Persona | Encaje | Qué falta |
|---|---|---|
| Vanesa Vaquero · Awareness Team Leader | IAbility | foto, LinkedIn |
| Dolores Santayana · Digital Adoption Team Leader | PreservIA | foto, LinkedIn |
| Cristina Aparicio · **Transformation** Team Leader | OGH-IA (ya está) | corregir título: fuera «Agile»; añadir móvil 618 737 099 |
| Abraham Rojo · Gerente de Negocio y Growth | **transversal**, no cuelga de un producto | foto, LinkedIn |

Dos cosas que Alfredo pidió expresamente:

- **El teléfono, sí.** Y solo el móvil: el fijo que aparece en las firmas es la centralita común. *(Ya es criterio del proyecto — `decisiones.md`, 7-sep.)*
- **El perfil de LinkedIn, también.** No es adorno: en su equipo generan contenido y los comerciales lo reparten. *«Es una herramienta de venta más… público y fácil de mover.»* Esto abre una fila nueva en el modelo de persona.

### 1.3 · «Comercial» y «Técnico» no describen lo que son

Es el reparo más de fondo que puso, y afecta al directorio entero.

> «El técnico no es tan técnico y el comercial no es el comercial… nosotros no somos comerciales.»

Lo que hay en cada columna es **responsable de la línea** y **responsable operativo de la oferta** — quien responde en preventa. Hay que renombrar las dos columnas en todas las áreas, no solo en la suya, y decidir dónde se pintan los perfiles transversales: Abraham no es dueño de un producto, y el propio Alfredo aparece tres veces porque el modelo asume un dueño por solución. Susana se lo quedó para pensar: *«a ver cómo os meto a ti y a Abraham para que no salgas tú tres»*.

### 1.4 · La puerta de entrada: cerrada

Este era el nudo rojo desde el 15 de julio (`alfredo-estado-trabajo.md`, § Ficha IAbility). Alfredo lo resolvió sin dudar: **no hay una puerta de entrada del área, hay una por solución, y son distintas.**

| Solución | Puerta | Qué es |
|---|---|---|
| **IAbility** | Readiness | Formulario en plataforma, ~20 min por persona, informe de madurez de 1 a 4 por persona, departamento y organización. Solo mide adopción de IA. |
| **OGH-IA** | Diagnóstico de entrada | Auditoría corta de gobernanza: dónde están los gaps (comité, plan de alfabetización, política de uso). Dimensionado para caber en un **contrato menor de administración pública** — por debajo de ~15.000 €. Entrega el borrador de la política de uso aceptable y el diseño del plan de alfabetización. |
| **PreservIA** | Diagnóstico inicial | Focus group con el equipo directivo para separar el conocimiento estratégico del resto. No es un readiness, aunque a veces se llame así. |

Consecuencia inmediata: **quitar «Readiness» como puerta genérica del área** en el portal y en el deck. Hoy `digital-change.json` tiene `primer_avance` = *Diagnóstico de madurez en IA, ~25 min por persona* colgando del área entera. Eso solo vale para IAbility.

*(Nota: él dice 20 minutos, nuestro material dice 25. Sale de sus presentaciones.)*

### 1.5 · Precios: sí, en las puertas de entrada

Otra decisión que estaba abierta y que él zanjó con el argumento de campo, no de doctrina:

> «La pregunta sale en la primera reunión: ¿esto cuánto me cuesta? … Y psicológicamente te da la sensación de que esto no está improvisado, que está tasado, que está empaquetado.»

**Criterio: precio público en los paquetes de entrada. En los servicios grandes, no.** Si al cliente le parece caro, no era cliente.

Lo concreto de IAbility, que está productificado en cuatro escalones — Freemium (prueba) · **Explorer, el piloto, 5.000 €** · Growth · Corporate. Growth y Corporate se tarifican por número de personas y no son públicos. Y varía por país: en Latinoamérica se aplica factor corrector por poder adquisitivo, no solo cambio de moneda.

⚠️ **Los 14.900 € que teníamos apuntados no son el Explorer.** Alfredo lo desmintió y además retiraron el nombre «Explorer» de ese otro paquete. Hay que sacar la cifra buena de las presentaciones que envíe, no de nuestras notas.

Y enlazar la calculadora: **calculadora.iability.ai**, protegida por código contra cuenta de correo. Es la herramienta que ya usan los comerciales y la que está en Hipatia está desactualizada. Alfredo: *«el sitio correcto donde tiene que estar es ahí»*.

### 1.6 · Enlaces que ya tenemos y se pueden montar hoy

Todo esto lo pasó por chat durante la llamada. Cada cosa en su solución:

**IAbility**
- `iability.ai` — dominio corto que replica la landing de Entelgy. No hay contenido distinto; sirve para darlo de viva voz y para las campañas de correo. Marca registrada de Entelgy.
- `calculadora.iability.ai`
- Podcast: [Spotify](https://open.spotify.com/show/4Nq774RdCEOZZ7NcPWYhp6) · [YouTube](https://www.youtube.com/watch?v=6nQhhkgenaU) — mismo contenido, audio y vídeo. Los comerciales «más inquietos» ya lo comparten con clientes.
- Vídeos: teaser [ESP](https://youtu.be/-ihYP2Lx-Ck) / [ENG](https://youtu.be/8zmY_mFWTl8) · trailer [ESP](https://youtu.be/iHf8szujoBI) / [ENG](https://youtu.be/Aoe4T8ai6A4). *«Otra cosa que me piden constantemente los comerciales.»*

**PreservIA**
- Vídeos de Smart Help: [demo general](https://www.youtube.com/watch?v=Sq42DKPbef8) · [caso entidades financieras](https://www.youtube.com/watch?v=zQKr7DQ9QEk). Van dentro de PreservIA — pero ojo, **«Smart Help» está retirado como etiqueta comercial** (canon del área, 8-jul). Los vídeos entran; el rótulo es PreservIA.
- Caso público MAPFRE: https://entelgy.com/casos-de-exito/smart-help-revoluciona-el-soporte-en-mapfre/

**Referencias**
- Caso público Admiral: https://entelgy.com/actualidad-es/entelgy-y-admiral-europe-tech-un-caso-de-exito-en-productividad-gracias-a-la-inteligencia-artificial-y-los-iability-labs/
  → **Esto desbloquea `dc-caso-admiral`**, que arrastrábamos como «falta autorización». Alfredo: *«estas son públicas y tenemos el okay, porque si no no estaría publicado»*.

**Partner tecnológico**
- Detrás de PreservIA y de Smart Help está **TTS**, empresa alemana. Pasó el dominio, logo e identidad. Queda decidir si un partner tecnológico se cita en material comercial interno o no.

---

## Bloque 2 · Depende de que Alfredo envíe (recordatorio esta semana)

Se comprometió a mandar, todo junto:

1. **Las tres presentaciones de producto más actuales** — IAbility, PreservIA, OGH-IA. Prefiere mandar las suyas de hoy antes que reutilizar lo que ya tenemos: *«hay un par de cambios».* De aquí salen los precios, los plazos y el detalle de cada puerta de entrada.
2. **Una slide con las fotos y los perfiles de LinkedIn** de los cuatro.
3. **Caso Gobierno de Asturias** (IAbility) — autorizado por el cliente, con el presidente en la plataforma. Es la referencia más vistosa que tiene ahora mismo.
4. **Cifras concretas de MAPFRE**, que hoy no están en el material.
5. **Bahía de Bizkaia** — no la tiene. Pregunta a Vanesa si hay autorización. Sin firma no sube.
6. **Kit de marca de IAbility** — fondos de Teams, firma de correo. Se lo pide a Vanesa. Criterio de Susana: entra **solo si hay URL pública**; alojarlo nosotros mete ruido para poco.

---

## Bloque 3 · Del 10 al 30 (traspaso)

- **Reformatear las tres presentaciones** al formato nuevo del área: HTML navegable + descarga en PPT y PDF. Susana lo ofreció para los días tranquilos después del jueves y él lo quiere: *«el mismo aspecto».*
- **Repaso del Hipatia viejo** con Alfredo, para no dejarse nada. Él ya adelantó el resultado: dentro solo hay vídeos internos y una calculadora desactualizada. Nada que migrar. El SharePoint se archiva por si acaso. *«Eso no nos cuesta nada tenerlo archivado.»*
- **Documentar el mantenimiento de contenidos** para que los Solution Managers puedan subir un documento o cambiar un texto sin Guberna. Es lo que Susana se comprometió a dejar cerrado antes del 30.
- **Reunión con infraestructura y marketing** (la convoca Miguel Ángel): dominio propio, ISO 27001 y Esquema Nacional de Seguridad, y qué pasa con información etiquetada como interna. El aviso de Alfredo sobre la mantenibilidad de un site estático entra ahí.

---

## Lo que NO se tocó y sigue pendiente

- 🔴 **El dato del WEF en la ficha pública de IAbility.** «85 millones de puestos» atribuido al *Future of Jobs 2025*; los 85M son del informe de **2020**, y el de 2025 dice saldo neto **positivo** (+78M). No salió en esta llamada. Sigue en pie la decisión de julio: **se le dice por teléfono, no por correo, y no con Miguel Ángel en copia.**
- **La arquitectura del área** (paraguas vs. embebido, y las triadas que se pisan). Alfredo no la sacó y Susana tampoco. Sigue abierta desde el 9 de julio.
- **El fork de plazos de OGH-IA.** En esta llamada dijo *«arranque a precio cerrado y luego un recurrente mensual»*, que apoya la versión de julio frente al footer «modelo de servicio flexible». Confirmar contra la presentación que envíe.
- **Atribución EY / Deloitte** del dato de RPA.

---

## Supuestos que conviene comprobar antes de tocar nada

1. **Que la corrección del «¿Por dónde empezamos?» se puede hacer a tiempo.** Es la slide del deck corporativo que presenta Roberto el jueves. Si tocarla a dos días es arriesgado, la alternativa es dejarla y anotarlo — pero entonces alguien tiene que saber que puede leerse mal en la reunión.
2. **Que publicar precios es criterio del área y no de la compañía.** Alfredo lo defiende con seguridad para lo suyo, que está productificado. Amador, Carmen, Daniela y Jorge no tienen paquetes tasados; si se pinta un precio en Digital Change y en el resto no, hay que explicar por qué. Es una pregunta para Miguel Ángel, no para Alfredo.
3. **Que el móvil de cuatro personas puede publicarse en el portal.** Alfredo dice que sí para su equipo, pero no es él quien lo autoriza persona a persona — y Miguel Ángel Villacañas ya se negó a las fotos en su área. Conviene que el «sí» venga de cada uno o de RRHH.
4. **Que renombrar «Comercial / Técnico» no rompe el resto de áreas.** Lo que a Alfredo le chirría puede describir bien a Carmen o a Jorge. Antes de cambiar la etiqueta en todo el portal, mirar si el problema es la palabra o es que en Digital Change los roles son otros.
5. **Que el enlace a `calculadora.iability.ai` funciona para un comercial.** Está protegida por código contra cuenta de correo y nosotros no podemos probarla. Que la abra Alfredo desde su sesión antes de publicarla.
6. **Que los 5.000 € del Explorer siguen vigentes** y que el paquete sin nombre tiene precio público. Sale de la presentación, no de la llamada.
