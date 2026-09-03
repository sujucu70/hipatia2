# Matriz de continuidad · Hipatia2 → portal único

## Propósito

El portal único no sustituye Hipatia2 descartando su trabajo editorial. Esta matriz es el registro de continuidad: cada activo o patrón útil de Hipatia2 debe quedar **integrado**, **catalogado para Biblioteca**, o **retirado mediante una decisión explícita** con responsable. Nunca debe simplemente desaparecer.

## Principio de diseño

El comercial reconoce en menos de un minuto la misma lógica que ya funcionaba:

```text
Tarjeta → Kit de conversación → Materiales / referencias → A quién llamar → Siguiente paso
```

La evolución es que esos elementos viven dentro de una oferta completa de cinco prácticas, pueden conectarse entre sí y llevan el contexto elegido al espacio de preparación. No forman un recorrido obligatorio.

## Patrones transversales que se preservan

| Patrón de Hipatia2 | Destino en el portal único | Regla de continuidad |
|---|---|---|
| Tarjeta de entrada | Ficha de subpráctica · Tarjeta | Tres ideas que se pueden usar antes de abrir un deck. |
| Kit antes / en / después | Ficha de subpráctica · Kit de conversación | No es un wizard; cada bloque es un punto de entrada. |
| Materiales por uso | Biblioteca y ficha de subpráctica | Separar preparar, enviar, propuesta, prueba e interno. |
| Referencia citable | Biblioteca + bloque de referencias | Mostrar siempre permiso, vigencia y condición de uso. |
| Contactos por servicio | A quién llamar | Mostrar responsable y completar el directorio solo con datos validados. |
| Dossier de visita | Espacio de preparación | Debe recoger práctica, subpráctica, argumento, pregunta, material y siguiente paso. |
| Novedades y feedback | Actualizaciones + aprendizaje de la calle | No simular envío mientras no exista canal, propietario y tratamiento. |

## Inventario de continuidad por área

| Origen Hipatia2 | Contenido que no se pierde | Destino principal | Estado de migración |
|---|---|---|---|
| `ciclo-software/index.html` | Hub de ciclo de software, deck y recursos de área | Software Development · práctica | Integrado como práctica; materiales de área en Biblioteca. |
| `ciclo-software/tarjeta-entrada-modernizacion.html` | Tarjeta de Modernización | Software Development → Modernización | Patrón de Tarjeta integrado; conservar su contenido como fuente editorial. |
| `ciclo-software/ficha-comercial-modernizacion-*.html` | Antes, reunión, después, objeciones, casos y cierre | Software Development → Modernización → Kit | Fuente prioritaria de migración; ningún elemento se retira sin decisión. |
| `ciclo-software/fichas/*`, `mapa-pains-*`, `analisis-*` | Fichas, one-pagers, discovery y análisis | Biblioteca filtrada + Kit | Activos existentes o pendientes de catalogación detallada. |
| `process-mining/index.html`, `fichas/*`, `DECKS/*` | Process Mining, deck, one-pager, ficha y pains | Process Intelligence → Inteligencia de procesos / Carmen | Integrado bajo una subpráctica propia. |
| `automatizacion/index.html`, `fichas/*`, `decks/*` | Consultoría, automatización, RPA y material cliente | Process Intelligence → Automatización y agentes IA / Carla | Integrado bajo una subpráctica propia; no se trata como sexta práctica. |
| `data-intelligence/index.html`, `fichas/*`, `decks/*` | Gobierno, analítica, IA, decks de producto y Mutua | Data & AI | Integrado como práctica; productos y variantes se catalogan como materiales diferenciados. |
| `digital-workplace/index.html`, `fichas/*`, `decks/*`, `casos-exito/*` | Workplace, infraestructura, SmartOPS y casos | Smart Operations | Integrado como tres puertas de oferta; los activos conservan su subárea. |
| `ia-digital-change/index.html`, `fichas/*`, `decks/*` | IAbility, PreservIA, OGH-IA y deck | IA + Digital Change | Integrado como productos/subprácticas con material propio. |
| `hipatia2/hipatia2-estado.md`, `hipatia2-backlog.md` | Reglas de repositorio, vigencia, feedback, contactos y dossier | Arquitectura del portal | Migración funcional progresiva; no se interpretan como contenido de cliente. |

## Regla de inventario por activo

Antes de publicar o descartar un activo, debe tener estos campos:

```text
ID estable
Práctica y subpráctica
Ruta de origen Hipatia2
Tipo y momento de uso
Uso permitido: cliente / interno / con validación
Estado de vigencia y fecha de revisión
Propietario y especialista asociado
Sector, producto o caso asociado cuando aplique
Destino: Tarjeta / Kit / Biblioteca / Dossier / Archivo editorial
Decisión: integrado / pendiente / retirado con motivo
```

## Límites deliberados

No se trasladan como funciones activas hasta tener integración real:

- Datos de cuenta, CRM, mapas de personas o recomendaciones automatizadas.
- Botones que prometan enviar feedback, mensajes o solicitudes de experto sin canal operativo.
- Cifras, casos o nombres de cliente sin permiso y vigencia visibles.
- Acreditaciones o tests como condición para acceder al material.

El contenido que sustentaba esas funciones se conserva en el inventario; lo que no se conserva es la simulación de una integración inexistente.

## Criterios de aceptación

La migración no se considera cerrada cuando las cinco prácticas “se ven bien”, sino cuando:

1. Los activos de Hipatia2 estén integrados, inventariados o retirados con motivo y responsable.
2. Modernización conserve Tarjeta, Kit, Antes, En, Después, referencias, contacto y materiales.
3. Carmen y Carla mantengan identidad, responsable y activos propios dentro de Process Intelligence.
4. La Biblioteca permita encontrar por práctica, subpráctica, tipo, uso, estado y, cuando exista, sector/producto.
5. Un comercial que conocía Hipatia2 reconozca su Tarjeta y Kit sin formación adicional.
6. El portal único permita preparar una conversación mejor que Hipatia2 sin tener que volver al portal antiguo.
