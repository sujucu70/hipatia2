Enlaces confirmados por Susana tras revisar la lista de candidatos (revisión 7, 3 sep
noche). He actualizado docs/Auditoria_y_especificacion_Hipatia_v3.md (§0, nota de
revisión 7) con el resumen y el pendiente post-10-sep. Aplica esto en tu rama del
PR #1, commit por bloque, y vuelve a pasar check-data.js, build.js y medir.js.

H · 42 PIEZAS CON ENLACE (provisional, a entelgy.guberna.es)

   Pon `url_documento` a `https://entelgy.guberna.es/<ruta>` para cada id de abajo
   (URL-encodea los espacios de las rutas de casos de éxito). Estas piezas ya eran
   `estado: "vigente"` antes de la revisión 6 — al añadirles enlace, devuélvelas a
   `vigente` (la única razón por la que bajaron a «revisar» era la falta de
   `url_documento`, ya resuelta). No cambies nada más de su contenido.

   corp-exec-global → corporativo/decks/Entelgy_Executive_Deck.html
   corp-exec-latam → corporativo/decks/Entelgy_Executive_Deck_LATAM.html
   mod-deck-ejecutivo → ciclo-software/decks/entelgy-ciclo-software.html
   software-mantenimiento-onepager → ciclo-software/fichas/onepager-mantenimiento.html
   software-mantenimiento-ficha → ciclo-software/fichas/ficha-mantenimiento.html
   software-asistencia-onepager → ciclo-software/fichas/onepager-asistencia.html
   software-asistencia-ficha → ciclo-software/fichas/ficha-asistencia.html
   software-modernizacion-sector-banca → ciclo-software/ficha-comercial-modernizacion-banca.html
   software-modernizacion-sector-aapp → ciclo-software/ficha-comercial-modernizacion-aapp.html
   software-modernizacion-sector-industria → ciclo-software/ficha-comercial-modernizacion-industria.html
   software-modernizacion-sector-telco → ciclo-software/ficha-comercial-modernizacion-telco.html
   smartops-resumen → digital-workplace/decks/SmartOPS_Resumen_Ejecutivo_Global_2026.html
   smartops-workplace → digital-workplace/decks/SmartOPS_Workplace_2026.html
   smartops-infra → digital-workplace/decks/SmartOPS_for_Infra_2026.html
   smartops-onepager-workplace → digital-workplace/fichas/onepager-smartops-desktop.html
   smartops-onepager-infra → digital-workplace/fichas/onepager-smartops-infra.html
   smartops-workplace-ficha → digital-workplace/fichas/ficha-smartops-desktop.html
   smartops-infra-ficha → digital-workplace/fichas/ficha-smartops-infra.html
   smartops-case-ejie → digital-workplace/casos-exito/originales/Caso_Exito_DaaS EJIE.pptx
   smartops-case-educacion-ejie → digital-workplace/casos-exito/originales/Caso_Exito_Educacion EJIE.pptx
   smartops-case-navantia → digital-workplace/casos-exito/originales/Caso_Exito_NAVANTIA.pptx
   smartops-case-moodle-profuturo → digital-workplace/casos-exito/originales/Caso_Exito_Moodle_ProFuturo.pptx
   smartops-case-izenpe → digital-workplace/casos-exito/originales/Caso_Exito_IZENPE.pptx
   process-deck → process-mining/DECKS/Process_Intelligence.html
   process-onepager → process-mining/fichas/onepager-process-intelligence.html
   process-ficha → process-mining/fichas/ficha-process-intelligence.html
   automation-deck → automatizacion/decks/deck_cliente.html
   automation-onepager → automatizacion/fichas/onepager-automatizacion-procesos.html
   automation-ficha → automatizacion/fichas/ficha-automatizacion-procesos.html
   digital-change-deck → ia-digital-change/decks/digital-change-deck.html
   iability-onepager → ia-digital-change/fichas/onepager-iability.html
   iability-ficha → ia-digital-change/fichas/Ficha_IAbility.html
   preservia-publico → ia-digital-change/fichas/PreservIA-onepager-sectorpublico.html
   preservia-privado → ia-digital-change/fichas/PreservIA-onepager-sectorprivado.html
   preservia-ficha → ia-digital-change/fichas/Ficha_PreservIA_standalone.html
   ogh-onepager → ia-digital-change/fichas/OnePager_OGH-IA.html
   ogh-ficha → ia-digital-change/fichas/Ficha_OGH-IA.html
   dataai-producto → data-intelligence/decks/entelgy-dataai-producto.html
   dataai-mutua → data-intelligence/entelgy-dataai-mutua.html
   dataai-mutua-preread → data-intelligence/decks/entelgy-dataai-mutua-preread.html
   dataai-onepager → data-intelligence/fichas/onepager-dataai.html
   dataai-ficha → data-intelligence/fichas/ficha-dataai.html

   Commit: «v3: 42 piezas enlazadas a entelgy.guberna.es (provisional, revisión 7)»

I · DOS PIEZAS DESCARTADAS

   `smartops-workplace-legacy-deck` y `smartops-infra-legacy-onepager` son versiones
   antiguas — Susana las descarta, no les pongas enlace. Cambia su
   `sale_al_cliente` de `"con_validacion"` a `"no"` para que dejen de aparecer como
   huecos de material-para-cliente en `pendientes-por-solucion.md`. Estado se queda
   en `"revisar"`.

   Commit: «v3: dos piezas SmartOPS legacy pasan a uso interno»

J · LO QUE NO TE PIDO (aplazado a propósito, después del 10-sep)

   - No cambies el modelo de datos. `url_documento` se queda como un único campo
     por ahora (casi todas las piezas tienen HTML para previsualizar y algunas
     además PDF/PPTX para descargar, pero de momento un solo enlace basta — el
     HTML cuando existe). Queda anotado en la spec como pendiente, no lo toques.
   - Las 11 piezas que no están en el bloque H se quedan tal cual: 6 referencias
     (nasertic/aesa/h10/miciu/uned/dgoj) sin url_documento porque su material es
     el texto citable ya en la ficha, y 3 genuinamente sin material
     (mod-presentacion-spec, mod-correo-apertura, mod-business-case) en
     «en preparación · dueño: Jorge».

Al terminar: build completo, medir.js en verde (comprueba que las 42 URLs a
entelgy.guberna.es no las marca como enlace roto — puede que el checker de enlaces
necesite tratarlas como externas, dime si hace falta ajustarlo), y una captura de
la portada a 1440 px sustituyendo la anterior en docs/medicion/. Esta es
previsiblemente la versión que Susana enseña el 10 de septiembre, así que si algo
no cuadra, para y pregunta antes de decidir por tu cuenta.
