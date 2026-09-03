/*
 * Hipatia · puertas de entrada de las prácticas
 *
 * Traduce la estructura comercial acordada a la página única de cada práctica.
 * Se apoya en Entelgy_Executive_Deck para la nomenclatura y el enfoque de
 * conversación, pero conserva los identificadores de los activos ya cargados.
 * Así, una puerta no crea una página nueva ni desconecta fichas, one-pagers o
 * referencias de Hipatia2.
 */
(function () {
  "use strict";

  var DOORS = {
    "software-development": [
      {
        id: "software-modernization",
        portalId: "modernizacion",
        name: "Modernización",
        title: "Modernización de aplicaciones",
        owner: "Jorge",
        short: "Recuperar capacidad de cambio en aplicaciones críticas.",
        proposal: "Evolucionamos aplicaciones y plataformas con deuda o riesgo para recuperar capacidad de cambio sin interrumpir el negocio.",
        limits: [
          "No presupone una reescritura, migración o plataforma concreta antes de conocer la aplicación, sus dependencias y su criticidad.",
          "No se debe prometer reducción de riesgo o esfuerzo sin una evaluación técnica y operativa suficiente."
        ],
        signals: [
          "Una aplicación crítica es difícil de cambiar, probar o mantener.",
          "El negocio pospone cambios porque el coste, el riesgo o la fragilidad técnica son demasiado altos.",
          "Hay deuda, dependencias o decisiones de arquitectura que necesitan priorización."
        ],
        openingQuestion: "¿Qué cambio de negocio estáis posponiendo o complicando porque la aplicación no os deja evolucionar con la seguridad necesaria?",
        firstStep: "Aislar la aplicación o capacidad prioritaria, su impacto de negocio y las dependencias que condicionan una evolución segura.",
        arguments: [
          "Modernizar no es actualizar por actualizar: es recuperar capacidad de cambio donde importa al negocio.",
          "La alternativa adecuada depende de criticidad, dependencias, operación y ritmo de cambio; no de una receta única."
        ],
        serviceModel: "Empezar por una lectura de la aplicación y sus restricciones antes de dibujar una hoja de evolución o una propuesta mayor.",
        relatedSubpracticeIds: ["mantenimiento", "asistencia-tecnica"],
        materialNote: "Empezar por la tarjeta, el one-pager o la ficha de Modernización; las referencias se usan solo si su ficha confirma el contexto y permiso de uso."
      },
      {
        id: "mantenimiento",
        portalId: "mantenimiento",
        name: "Mantenimiento",
        title: "Mantenimiento evolutivo",
        owner: "Jorge",
        short: "Sostener y evolucionar producción con calidad y continuidad.",
        proposal: "Convertimos el mantenimiento evolutivo en una capacidad que sostiene la operación y mejora la productividad, la calidad y el ritmo de cambio.",
        limits: [
          "No se plantea como una bolsa de horas ni como respuesta a incidencias sin entender el servicio, el backlog y las condiciones de operación.",
          "La mejora de productividad o calidad debe acordarse con una línea base, responsabilidades y métricas de servicio."
        ],
        signals: [
          "La mayor parte del esfuerzo se consume en sostener producción y queda poco margen para evolucionar.",
          "Backlog, incidencias, calidad o tiempos de entrega no tienen una lectura compartida.",
          "El cliente necesita continuidad sin renunciar a mejorar el sistema que ya está en producción."
        ],
        openingQuestion: "¿Qué parte del esfuerzo de mantenimiento os está impidiendo evolucionar el servicio o entregar lo que negocio necesita?",
        firstStep: "Delimitar el servicio o aplicación, el backlog, la operación actual y el indicador que permitiría comprobar una mejora.",
        arguments: [
          "Sostener no es solo resolver: es hacer que el sistema siga siendo útil, confiable y más fácil de cambiar.",
          "La conversación debe unir la operación diaria con calidad, productividad y capacidad de evolución."
        ],
        serviceModel: "Contrastar alcance de servicio, equipo, backlog y métricas antes de acordar un modelo de mantenimiento evolutivo.",
        relatedSubpracticeIds: ["software-modernization", "asistencia-tecnica"],
        materialNote: "Usar la ficha o el one-pager de Mantenimiento para concretar la conversación; validar referencias antes de externalizarlas."
      },
      {
        id: "asistencia-tecnica",
        portalId: "asistencia-tecnica",
        name: "Asistencia técnica",
        title: "Asistencia técnica aumentada",
        owner: "Jorge",
        short: "Capacidad experta conectada a una entrega medible.",
        proposal: "Aportamos capacidad técnica especializada desde los Centros de Excelencia, conectada a una entrega medible y al contexto real del equipo del cliente.",
        limits: [
          "No se presenta como una simple cobertura de perfiles ni se compromete un equipo antes de concretar necesidades, responsabilidades y forma de trabajo.",
          "La capacidad debe conectarse con una prioridad, una entrega y un modelo de coordinación claros."
        ],
        signals: [
          "Falta capacidad o conocimiento especializado para desbloquear una prioridad concreta.",
          "El equipo necesita acelerar una entrega sin perder calidad, transferencia ni contexto.",
          "Hay una iniciativa con una demanda técnica variable que necesita un encaje operativo más claro."
        ],
        openingQuestion: "¿Qué entrega o capacidad técnica os está frenando ahora y qué tendría que quedar resuelto para considerar que el apoyo ha funcionado?",
        firstStep: "Acordar la prioridad, el conocimiento requerido, la forma de coordinación y el resultado que debe poder comprobarse.",
        arguments: [
          "La asistencia técnica aporta más cuando se vincula a una entrega y una responsabilidad, no a una presencia aislada.",
          "El equipo adecuado combina especialización, contexto de negocio y una forma de medir el avance."
        ],
        serviceModel: "Definir con el especialista el encaje de capacidades, responsabilidades, gobierno y medida de la entrega antes de activar el equipo.",
        relatedSubpracticeIds: ["mantenimiento", "software-modernization"],
        materialNote: "La ficha de Asistencia técnica ayuda a concretar el encaje; no sustituye la validación de alcance con el especialista."
      }
    ],
    "data-ai": [
      {
        id: "data-governance",
        portalId: "data-governance",
        name: "Gobernar",
        title: "Gobierno del dato",
        owner: "Daniela",
        short: "Dar confianza, responsabilidad y continuidad al dato.",
        proposal: "Definimos un modelo operativo de gobierno del dato con responsables, reglas y un catálogo vivo para que las decisiones se apoyen en información confiable.",
        limits: [
          "No se vende un catálogo o un roadmap como fin en sí mismo: el gobierno debe resolver una decisión, una operación o un riesgo concreto.",
          "No se debe asumir calidad, propiedad o permiso de uso por la sola disponibilidad de los datos."
        ],
        signals: [
          "Las áreas no confían igual en los datos o los interpretan de manera distinta.",
          "No está claro quién responde por la calidad, el acceso o el uso de un dato crítico.",
          "Los casos de analítica o IA se frenan por falta de datos fiables y trazables."
        ],
        openingQuestion: "¿Qué decisión importante sigue siendo difícil porque los datos no tienen una definición, calidad o responsable en quien confiar?",
        firstStep: "Elegir una decisión o dominio prioritario y contrastar datos, responsables, reglas de uso y evidencia disponible.",
        arguments: [
          "Gobernar el dato consiste en hacerlo útil para una decisión y sostenible en la operación, no en documentarlo una vez.",
          "El modelo funciona cuando los roles tienen mandato y el catálogo se mantiene vivo con el negocio."
        ],
        serviceModel: "Acotar un dominio o decisión de valor y diseñar el gobierno mínimo que permita avanzar con seguridad.",
        relatedSubpracticeIds: ["model-governance", "business-analytics"],
        materialNote: "Data & AI dispone hoy de materiales comunes de práctica. La Biblioteca mostrará el alcance de cada pieza hasta que existan activos específicos por puerta."
      },
      {
        id: "model-governance",
        portalId: "model-governance",
        name: "Cumplir",
        title: "Gobernanza de modelos e IA",
        owner: "Daniela",
        short: "Dar trazabilidad y control al uso de modelos de IA.",
        proposal: "Inventariamos y gobernamos modelos de IA para que la organización pueda avanzar con trazabilidad, criterios de riesgo y condiciones de cumplimiento.",
        limits: [
          "No se puede declarar cumplimiento o control sin conocer qué modelos existen, dónde operan, qué datos usan y quién responde por ellos.",
          "La gobernanza no debe bloquear la innovación: debe dar un marco proporcional para decidir qué avanza y bajo qué condiciones."
        ],
        signals: [
          "Hay iniciativas o modelos de IA dispersos sin una visión común de uso, riesgo o responsable.",
          "Dirección, negocio o cumplimiento piden evidencias para permitir que un caso pase a producción.",
          "La organización necesita distinguir entre experimentar, desplegar y operar IA de forma responsable."
        ],
        openingQuestion: "¿Sabéis qué modelos de IA están en uso, qué decisiones apoyan y qué condiciones deberían cumplir antes de escalar?",
        firstStep: "Inventariar el caso de uso o modelo prioritario y contrastar datos, riesgo, responsables, evidencias y condiciones de operación.",
        arguments: [
          "Cumplir empieza por hacer visible la IA que ya existe y por acordar decisiones y responsabilidades claras.",
          "El gobierno de modelos permite llevar la IA a producción con más confianza, no solo completar una revisión documental."
        ],
        serviceModel: "Definir un primer perímetro de modelos o casos de uso y establecer el marco de control proporcional con las áreas implicadas.",
        relatedSubpracticeIds: ["data-governance", "predictive-analytics"],
        materialNote: "Data & AI dispone hoy de materiales comunes de práctica. La Biblioteca mostrará el alcance de cada pieza hasta que existan activos específicos por puerta."
      },
      {
        id: "business-analytics",
        portalId: "business-analytics",
        name: "Decidir",
        title: "Analítica para decidir",
        owner: "Daniela",
        short: "Acercar dato confiable a decisiones y operaciones reales.",
        proposal: "Conectamos datos y analítica con una decisión u operación concreta, usando una base semántica común para que los equipos dediquen menos tiempo a cuadrar y más a decidir.",
        limits: [
          "No se parte de un cuadro de mando genérico: primero hay que acordar la decisión, la señal y el usuario que necesita actuar.",
          "Una visualización no garantiza una decisión mejor si los datos, la semántica y la responsabilidad siguen siendo ambiguos."
        ],
        signals: [
          "Las áreas dedican mucho tiempo a reconciliar cifras antes de poder decidir.",
          "Un indicador relevante llega tarde, con interpretaciones distintas o sin conexión con una acción.",
          "Hay datos disponibles, pero no una capa común que permita a negocio y operación usarlos con confianza."
        ],
        openingQuestion: "¿Qué decisión se retrasa o se discute demasiado porque la información llega tarde, no cuadra o no indica qué hacer?",
        firstStep: "Elegir una decisión prioritaria, sus usuarios y los datos que deben explicar una acción antes de diseñar la analítica.",
        arguments: [
          "La analítica útil no acumula indicadores: reduce fricción para decidir y actuar.",
          "Una capa semántica común convierte el dato en un lenguaje compartido entre negocio y operación."
        ],
        serviceModel: "Acotar una decisión de alto valor y diseñar con sus usuarios la lectura, los datos y el modo de operar posterior.",
        relatedSubpracticeIds: ["data-governance", "predictive-analytics"],
        materialNote: "Data & AI dispone hoy de materiales comunes de práctica. La Biblioteca mostrará el alcance de cada pieza hasta que existan activos específicos por puerta."
      },
      {
        id: "predictive-analytics",
        portalId: "predictive-analytics",
        name: "Predecir",
        title: "Analítica predictiva y operación de modelos",
        owner: "Daniela",
        short: "Llevar modelos predictivos a producción con criterio operativo.",
        proposal: "Llevamos modelos predictivos y sus pipelines a producción con alcance, responsables y operación acordados para que la predicción se convierta en una capacidad real.",
        limits: [
          "No se promete un modelo útil sin contrastar datos, objetivo de negocio, operación y forma de medir su uso.",
          "Un piloto no equivale a una capacidad productiva si no tiene dueño, monitorización y condiciones de evolución."
        ],
        signals: [
          "Existe un problema de negocio donde anticiparse tendría valor, pero no está claro cómo llevarlo a operación.",
          "Hay modelos o experimentos que no han pasado de piloto.",
          "El cliente necesita incorporar predicción a un proceso, una decisión o una experiencia recurrente."
        ],
        openingQuestion: "¿En qué decisión o proceso os aportaría valor anticiparos, y qué tendría que ocurrir para que esa predicción se use de verdad?",
        firstStep: "Acordar el caso de uso, la decisión que se quiere mejorar, los datos necesarios y quién operará el resultado antes de diseñar el modelo.",
        arguments: [
          "Predecir solo genera valor cuando la predicción cambia una decisión o una operación concreta.",
          "Llevar un modelo a producción exige tanto un pipeline y monitorización como roles y forma de uso."
        ],
        serviceModel: "Validar el caso de uso y sus condiciones de producción antes de decidir el recorrido técnico y operativo.",
        relatedSubpracticeIds: ["business-analytics", "model-governance"],
        materialNote: "Data & AI dispone hoy de materiales comunes de práctica. La Biblioteca mostrará el alcance de cada pieza hasta que existan activos específicos por puerta."
      }
    ],
    "smart-operations": [
      {
        id: "smartops-workplace",
        portalId: "smartops-workplace",
        name: "Puesto de trabajo",
        title: "Puesto de trabajo",
        owner: "Amador",
        short: "Mejorar la experiencia digital del empleado de extremo a extremo.",
        proposal: "Mejoramos la experiencia digital del empleado desde la atención y el dispositivo hasta el autoservicio, la automatización y la medición del servicio.",
        limits: [
          "No se plantea una herramienta o renovación de puesto sin entender el servicio, las personas usuarias y la experiencia que hoy viven.",
          "La mejora debe poder sostenerse con un modelo de servicio, operación y medidas de experiencia acordados."
        ],
        signals: [
          "Las personas encuentran fricción recurrente al trabajar con herramientas, dispositivos o soporte.",
          "El equipo de soporte concentra tareas repetitivas y tiene poca visibilidad de la experiencia real.",
          "El ciclo de vida de puestos, software o licencias necesita más orden, automatización y servicio."
        ],
        openingQuestion: "¿En qué momento de la experiencia digital —soporte, dispositivo, aplicaciones o acceso— se pierde hoy más tiempo o confianza?",
        firstStep: "Delimitar el servicio y colectivo prioritarios, la experiencia actual y el indicador que ayudaría a comprobar una mejora.",
        arguments: [
          "El puesto de trabajo se mejora cuando se conecta la experiencia del empleado con el modelo operativo que la hace posible.",
          "Atención, ciclo de vida, autoservicio y analítica deben leerse como un mismo servicio, no como piezas aisladas."
        ],
        serviceModel: "Contrastar servicio, colectivos, operación y métricas antes de definir una evolución de puesto de trabajo.",
        relatedSubpracticeIds: ["smartops-infra"],
        materialNote: "Usar el deck, one-pager o ficha de SmartOPS Workplace según el momento de conversación y las condiciones de uso de cada activo."
      },
      {
        id: "smartops-infra",
        portalId: "smartops-infra",
        name: "Infraestructura crítica",
        title: "Infraestructura crítica",
        owner: "Amador",
        short: "Operar continuidad, capacidad y eficiencia con visión preventiva.",
        proposal: "Aseguramos una operación preventiva de infraestructura crítica, cloud y plataformas para combinar continuidad, control, capacidad y eficiencia.",
        limits: [
          "No se compromete una arquitectura, migración o nivel de servicio sin entender criticidad, capacidad, seguridad, coste y condiciones de operación.",
          "La continuidad no se reduce a disponibilidad: requiere observabilidad, responsabilidades y decisiones de evolución sostenibles."
        ],
        signals: [
          "La infraestructura o el cloud generan incertidumbre por disponibilidad, coste, capacidad o riesgo operativo.",
          "La operación reacciona a incidencias con poca previsión o visibilidad de extremo a extremo.",
          "Hay una migración, crecimiento o cambio de servicio que necesita proteger la continuidad."
        ],
        openingQuestion: "¿Qué parte de la infraestructura, cloud u operación os quita más el sueño por continuidad, coste o capacidad de anticiparos?",
        firstStep: "Elegir el servicio crítico, contrastar continuidad, observabilidad, coste y responsables antes de fijar una respuesta técnica.",
        arguments: [
          "Una infraestructura crítica aporta valor cuando permite sostener el servicio y anticipar decisiones, no solo reaccionar a incidencias.",
          "Cloud, observabilidad, FinOps y resiliencia se conectan para que la operación sea más gobernable y eficiente."
        ],
        serviceModel: "Realizar una primera lectura de servicio, capacidad, operación y coste para definir el avance apropiado con el especialista.",
        relatedSubpracticeIds: ["smartops-workplace"],
        materialNote: "Usar el deck, one-pager o ficha de SmartOPS Infra según el momento de conversación y las condiciones de uso de cada activo."
      }
    ],
    "ia-digital-change": [
      {
        id: "iability",
        portalId: "iability",
        name: "IAbility",
        title: "IAbility",
        owner: "Alfredo",
        short: "Activar una cultura de uso responsable de IA.",
        proposal: "Convertimos la IA en una capacidad que las personas incorporan con criterio, confianza y uso responsable en su trabajo diario.",
        limits: [
          "No es una formación puntual ni una campaña de comunicación desconectada de los casos de uso y el trabajo real.",
          "La adopción debe tener en cuenta roles, hábitos, riesgos y reglas de uso; habilitar una herramienta no basta."
        ],
        signals: [
          "La organización ha desplegado IA, pero el uso es irregular, superficial o genera dudas.",
          "Los equipos necesitan confianza y criterio para incorporar nuevas capacidades de IA a su trabajo.",
          "Hay valor esperado en la IA que no llega a materializarse por falta de adopción sostenible."
        ],
        openingQuestion: "¿Qué tendría que cambiar en el trabajo diario de las personas para que esta IA deje de ser una herramienta disponible y se convierta en una capacidad real?",
        firstStep: "Aclarar el caso de uso, los colectivos implicados, los hábitos que deben cambiar y las condiciones de uso responsable.",
        arguments: [
          "La IA genera impacto cuando las personas saben para qué usarla, cómo hacerlo y qué decisiones siguen siendo humanas.",
          "La adopción se diseña desde el principio: no es una fase final después del despliegue."
        ],
        serviceModel: "Diseñar con el cliente un primer recorrido de adopción alrededor de un caso de uso, sus colectivos y un cambio observable.",
        relatedSubpracticeIds: ["ogh-ia", "preservia"],
        materialNote: "La ficha y el one-pager de IAbility son la base de esta conversación; comprobar en Biblioteca la vigencia y uso de cada pieza."
      },
      {
        id: "preservia",
        portalId: "preservia",
        name: "PreservIA",
        title: "PreservIA",
        owner: "Alfredo",
        short: "Convertir conocimiento experto en un activo vivo.",
        proposal: "Capturamos conocimiento experto y lo activamos donde hace falta para que no dependa solo de personas, archivos o memoria organizativa.",
        limits: [
          "No se presenta como un repositorio documental más: el conocimiento debe tener un propósito, responsables y un contexto de uso.",
          "No se debe automatizar la transferencia de conocimiento sin revisar calidad, sensibilidad, permisos y cómo se mantendrá vivo."
        ],
        signals: [
          "El conocimiento crítico reside en pocas personas o se pierde cuando cambian de rol.",
          "Los equipos tardan demasiado en encontrar, contrastar o reutilizar experiencia existente.",
          "La organización quiere aplicar IA al conocimiento, pero necesita hacerlo con contexto y gobierno."
        ],
        openingQuestion: "¿Qué conocimiento experto os cuesta más preservar o poner a disposición cuando el equipo lo necesita para decidir o actuar?",
        firstStep: "Elegir un conocimiento o proceso prioritario y contrastar fuentes, responsables, sensibilidad y modo de uso antes de activarlo.",
        arguments: [
          "El conocimiento crea valor cuando puede reutilizarse en el momento de trabajo, no cuando queda almacenado sin contexto.",
          "Preservarlo exige combinar tecnología, proceso, personas y reglas de actualización."
        ],
        serviceModel: "Definir un primer ámbito de conocimiento, sus usuarios y su modelo de actualización antes de diseñar la capacidad.",
        relatedSubpracticeIds: ["iability", "ogh-ia"],
        materialNote: "Elegir en Biblioteca la versión de PreservIA adecuada al sector y validar la ficha antes de compartirla."
      },
      {
        id: "ogh-ia",
        portalId: "ogh-ia",
        name: "Oficina de Gobernanza Humana de la IA",
        title: "Oficina de Gobernanza Humana de la IA",
        owner: "Alfredo",
        short: "Decidir, priorizar y gobernar la IA con las personas en el centro.",
        proposal: "Diseñamos una Oficina de Gobernanza Humana de la IA para decidir qué iniciativas avanzan, bajo qué condiciones y con qué evidencias de valor, riesgo y adopción.",
        limits: [
          "No es una capa burocrática ni una aprobación aislada: debe permitir priorizar y acompañar casos de IA con decisiones claras.",
          "No se declara una gobernanza efectiva sin roles, mandato, criterios y relación con los equipos que crean y usan la IA."
        ],
        signals: [
          "Existen iniciativas de IA sin una forma común de priorizar valor, riesgos, responsables y condiciones de escalado.",
          "Dirección necesita saber qué debe avanzar, qué debe frenarse y quién toma cada decisión.",
          "Los equipos piden reglas claras para usar y llevar IA a operación sin perder agilidad."
        ],
        openingQuestion: "¿Quién decide hoy qué iniciativas de IA avanzan, qué evidencia necesitan y cómo se mantiene el equilibrio entre valor, riesgo y adopción?",
        firstStep: "Identificar los casos de IA prioritarios, las decisiones que hoy están difusas y los roles que deben formar parte de la gobernanza.",
        arguments: [
          "La gobernanza humana de la IA hace visible quién decide, con qué criterios y cómo se aprende de la operación.",
          "Su función no es frenar la IA: es permitir que los casos valiosos avancen con confianza y responsabilidad."
        ],
        serviceModel: "Acordar un primer perímetro de casos, roles y decisiones para diseñar una oficina proporcionada al ritmo y madurez de la organización.",
        relatedSubpracticeIds: ["iability", "preservia"],
        materialNote: "Los activos existentes usan la sigla OGH-IA; el portal la presenta como Oficina de Gobernanza Humana de la IA y conserva sus fichas vinculadas."
      }
    ]
  };

  var SMART_ASSET_DOORS = {
    "smartops-workplace": "smartops-workplace",
    "smartops-onepager-workplace": "smartops-workplace",
    "smartops-workplace-ficha": "smartops-workplace",
    "smartops-workplace-legacy-deck": "smartops-workplace",
    "smartops-infra": "smartops-infra",
    "smartops-onepager-infra": "smartops-infra",
    "smartops-infra-ficha": "smartops-infra",
    "smartops-pains-infra": "smartops-infra",
    "smartops-infra-legacy-onepager": "smartops-infra"
  };

  function byId(items, id) {
    var list = items || [];
    for (var index = 0; index < list.length; index += 1) {
      if (list[index] && list[index].id === id) return list[index];
    }
    return null;
  }

  function copyList(items) {
    return (items || []).slice();
  }

  function doorUse(spec) {
    return {
      thirtySeconds: spec.proposal,
      fiveMinutes: spec.openingQuestion,
      thirtyMinutes: spec.materialNote || "Profundiza en los materiales de Biblioteca y valida el siguiente paso con la persona especialista."
    };
  }

  function editorialDoor(spec, practiceId) {
    return {
      id: spec.id,
      practiceId: practiceId,
      kind: "subpractice",
      title: spec.title || spec.name,
      owner: spec.owner,
      expert: spec.owner,
      proposal: spec.proposal,
      limits: copyList(spec.limits),
      signals: copyList(spec.signals),
      openingQuestion: spec.openingQuestion,
      firstStep: spec.firstStep,
      arguments: copyList(spec.arguments),
      objections: [
        {
          objection: "¿Podemos cerrar ya la solución?",
          response: "Primero confirmamos la necesidad, el alcance, los responsables y el material que realmente aplica; después se plantea el avance con la persona especialista."
        }
      ],
      proof: {
        rule: "Usar solo referencias, datos y casos cuya ficha en Biblioteca confirme vigencia y condición de uso.",
        note: "La puerta comercial orienta la conversación; no convierte un material pendiente de validación en una prueba publicable."
      },
      materialTags: {
        conversation: ["deck de práctica", "one-pager", "ficha de servicio"],
        proposal: ["ficha de servicio"],
        proof: ["referencia validada"],
        internal: ["guía de discovery"]
      },
      caseOrUse: {
        label: "Cómo usar los materiales",
        text: spec.materialNote || "Abrir en Biblioteca la pieza que corresponda al momento de la conversación y comprobar antes su uso, vigencia y permiso."
      },
      relatedSubpracticeIds: copyList(spec.relatedSubpracticeIds),
      serviceModel: spec.serviceModel,
      use: doorUse(spec)
    };
  }

  function applyAssetRouting(catalog) {
    (catalog.assets || []).forEach(function (asset) {
      if (!asset || !SMART_ASSET_DOORS[asset.id]) return;
      asset.subpractice = SMART_ASSET_DOORS[asset.id];
    });
  }

  function applyDoors() {
    var catalog = window.HIPATIA_DATA;
    var content = window.HIPATIA_PRACTICE_CONTENT;
    var continuity = window.HIPATIA_HIPATIA2_CONTINUITY;

    if (!catalog || !content || !content.practices || !content.subpractices) return false;

    Object.keys(DOORS).forEach(function (practiceId) {
      var practice = byId(catalog.practices, practiceId);
      var commercialPractice = content.practices[practiceId];
      var specs = DOORS[practiceId];
      if (!practice || !commercialPractice) return;

      practice.subpractices = specs.map(function (spec) {
        return { id: spec.portalId || spec.id, name: spec.name, short: spec.short };
      });

      commercialPractice.subpracticeIds = specs.map(function (spec) { return spec.id; });
      if (content.byPractice && content.byPractice[practiceId]) {
        content.byPractice[practiceId].subpracticeIds = commercialPractice.subpracticeIds.slice();
      }

      specs.forEach(function (spec) {
        var item = editorialDoor(spec, practiceId);
        if (continuity && typeof continuity.build === "function") {
          item.hipatia2Continuity = continuity.build(item);
        }
        content.subpractices[item.id] = item;
      });
    });

    applyAssetRouting(catalog);
    catalog.entryDoorVersion = "executive-deck-doors-2026-09";
    content.entryDoorVersion = catalog.entryDoorVersion;
    return true;
  }

  function install(attempt) {
    if (applyDoors()) return;
    if ((attempt || 0) < 12) {
      window.setTimeout(function () { install((attempt || 0) + 1); }, 20);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { install(0); });
  } else {
    install(0);
  }
}());
