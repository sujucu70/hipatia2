/*
 * Hipatia · contenido comercial de prácticas
 *
 * Este archivo no modifica la taxonomía ni pinta interfaz. Es la capa editorial
 * común de la oferta: una práctica y cada una de sus subprácticas responden a
 * las mismas preguntas comerciales antes de abrir un material o preparar una
 * conversación. No contiene precios, resultados, clientes ni permisos que no
 * estén ya validados en la biblioteca.
 */
(function attachHipatiaPracticeContent(window) {
  'use strict';

  var CONTENT_VERSION = '1.0.0';

  var practiceAliases = {
    'process-intelligence': 'process-intelligence',
    'process-intelligence-mining': 'process-intelligence',
    'process-automation-ai': 'process-intelligence',
    'automation-rpa': 'process-intelligence',
    'software-development': 'software-development',
    'software-dev': 'software-development',
    'ciclo-software': 'software-development',
    'data-ai': 'data-ai',
    'data-and-ai': 'data-ai',
    'smart-operations': 'smart-operations',
    'ia-digital-change': 'ia-digital-change',
    'ai-digital-change': 'ia-digital-change'
  };

  var subpracticeAliases = {
    'process-mining': 'process-mining',
    'mining': 'process-mining',
    'inteligencia-procesos': 'process-mining',
    'process-automation-ai': 'process-automation-ai',
    'automation-rpa': 'process-automation-ai',
    'automatizacion-rpa': 'process-automation-ai',
    'automatizacion-procesos': 'process-automation-ai',
    'modernizacion': 'software-modernization',
    'modernizacion-aplicaciones': 'software-modernization',
    'application-modernization': 'software-modernization',
    'software-modernization': 'software-modernization'
  };

  /*
   * Las secciones son deliberadamente estables. La vista de práctica puede
   * utilizarlas como anclas, y la de subpráctica como tarjeta/kit sin forzar
   * un recorrido lineal al comercial.
   */
  var standardSections = [
    {
      id: 'esencial',
      label: 'Lo esencial',
      intent: 'Entender qué se vende, qué problema trata y qué no prometer.'
    },
    {
      id: 'preparar',
      label: 'Preparar',
      intent: 'Reconocer señales y llegar con una pregunta útil.'
    },
    {
      id: 'reunion',
      label: 'En la reunión',
      intent: 'Contar el argumento, manejar límites y elegir una prueba.'
    },
    {
      id: 'siguiente-paso',
      label: 'Siguiente paso',
      intent: 'Acordar un avance posible con el especialista adecuado.'
    },
    {
      id: 'materiales',
      label: 'Materiales',
      intent: 'Encontrar la pieza correcta según destinatario y momento.'
    }
  ];

  var materialLabels = {
    conversation: ['deck ejecutivo', 'one-pager', 'mensaje de apertura'],
    proposal: ['ficha de servicio', 'alcance inicial', 'material de propuesta'],
    proof: ['caso autorizado', 'referencia validada', 'dato con fuente'],
    internal: ['guía interna', 'objeciones', 'metodología']
  };

  function compact(list) {
    return (list || []).filter(function (item) { return Boolean(item); });
  }

  function unique(list) {
    return compact(list).filter(function (item, index, source) {
      return source.indexOf(item) === index;
    });
  }

  function humanize(value) {
    return String(value || '')
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
  }

  function asArray(value) {
    if (!value) return [];
    return Array.isArray(value) ? value : Object.keys(value).map(function (key) {
      return value[key];
    });
  }

  function idOf(item, fallback) {
    return (item && (item.id || item.slug || item.key || item.code)) || fallback;
  }

  function titleOf(item, fallback) {
    return (item && (item.title || item.name || item.label || item.heading)) || fallback;
  }

  function statementOf(item) {
    return (item && (item.statement || item.description || item.summary || item.tagline)) || '';
  }

  function ownerOf(item, fallback) {
    return (item && (item.owner || item.expert || item.lead || item.responsible)) || fallback;
  }

  function resolvePracticeId(id) {
    return practiceAliases[id] || id;
  }

  function resolveSubpracticeId(id) {
    return subpracticeAliases[id] || id;
  }

  function sharedObjections() {
    return [
      {
        objection: '"¿Esto es solo tecnología?"',
        response: 'La conversación parte de la necesidad de negocio y contrasta proceso, personas, operación y tecnología antes de fijar una solución.'
      },
      {
        objection: '"¿Podéis decirme ya el alcance?"',
        response: 'Podemos acordar un siguiente paso acotado; el alcance final debe validarse con el especialista y la realidad de la organización.'
      }
    ];
  }

  function proofTemplate() {
    return {
      rule: 'Usar solo referencias, datos y casos marcados como autorizados en Biblioteca.',
      caseUse: 'Elegir una referencia por parecido de situación, no por notoriedad del nombre.',
      status: 'validar-en-biblioteca'
    };
  }

  function createPractice(config) {
    return {
      id: config.id,
      kind: 'practice',
      title: config.title,
      shortTitle: config.shortTitle || config.title,
      owner: config.owner,
      expert: config.expert || config.owner,
      proposal: config.proposal,
      limits: compact(config.limits),
      signals: compact(config.signals),
      openingQuestion: config.openingQuestion,
      firstStep: config.firstStep,
      arguments: compact(config.arguments),
      objections: config.objections || sharedObjections(),
      proof: config.proof || proofTemplate(),
      materialTags: config.materialTags || materialLabels,
      subpracticeIds: config.subpracticeIds || [],
      relatedPracticeIds: config.relatedPracticeIds || [],
      serviceModel: config.serviceModel || 'La propuesta se concreta tras contrastar necesidad, alcance y equipo con el especialista.',
      use: config.use || {
        thirtySeconds: config.proposal,
        fiveMinutes: config.openingQuestion,
        thirtyMinutes: 'Profundiza en los materiales y valida el siguiente paso con el experto.'
      }
    };
  }

  function createSubpractice(config) {
    return {
      id: config.id,
      practiceId: config.practiceId,
      kind: 'subpractice',
      title: config.title,
      owner: config.owner,
      expert: config.expert || config.owner,
      proposal: config.proposal,
      limits: compact(config.limits),
      signals: compact(config.signals),
      openingQuestion: config.openingQuestion,
      firstStep: config.firstStep,
      arguments: compact(config.arguments),
      objections: config.objections || sharedObjections(),
      proof: config.proof || proofTemplate(),
      materialTags: config.materialTags || materialLabels,
      caseOrUse: config.caseOrUse || {
        label: 'Cómo usar una prueba',
        text: 'Antes de citar un caso, confirma que está autorizado y que el parecido con la situación del cliente es real.'
      },
      relatedSubpracticeIds: config.relatedSubpracticeIds || [],
      serviceModel: config.serviceModel || 'Acordar con el especialista un avance pequeño, verificable y adecuado al contexto.',
      use: config.use || {
        thirtySeconds: config.proposal,
        fiveMinutes: config.openingQuestion,
        thirtyMinutes: 'Revisa la ficha, los materiales internos y la referencia autorizada disponibles en Biblioteca.'
      }
    };
  }

  var practices = {
    'process-intelligence': createPractice({
      id: 'process-intelligence',
      title: 'Process Intelligence',
      owner: 'Carmen · Carla',
      proposal: 'Ayudamos a entender cómo funciona realmente un proceso y a mejorar su ejecución, desde la evidencia hasta la automatización y los agentes IA.',
      limits: [
        'No se presenta como automatización por automatización ni como sustitución inmediata de equipos.',
        'La conveniencia de minería, automatización o agentes debe contrastarse con el proceso, los datos y la operación real.'
      ],
      signals: [
        'El proceso se describe de formas distintas según quién lo cuente.',
        'Hay cuellos de botella, retrabajo o baja visibilidad de extremo a extremo.',
        'La organización quiere automatizar, pero no tiene claro qué conviene priorizar ni por qué.'
      ],
      openingQuestion: '¿En qué parte del proceso se pierde hoy más tiempo, control o capacidad de respuesta, y qué evidencia tenéis para localizarlo?',
      firstStep: 'Alinear el proceso prioritario, los interlocutores y la evidencia disponible antes de decidir si conviene entender, rediseñar, automatizar o combinar enfoques.',
      arguments: [
        'La tecnología aporta valor cuando se apoya en cómo opera realmente la organización, no solo en cómo debería operar sobre un diagrama.',
        'Entender el proceso y automatizarlo son dos capacidades complementarias de una misma práctica.'
      ],
      subpracticeIds: ['process-mining', 'process-automation-ai'],
      relatedPracticeIds: ['data-ai', 'ia-digital-change'],
      serviceModel: 'Primero se contrasta dónde está el problema y qué evidencia existe; después se plantea el avance adecuado con la capacidad especialista.'
    }),

    'software-development': createPractice({
      id: 'software-development',
      title: 'Software Development',
      owner: 'Jorge',
      proposal: 'Acompañamos el ciclo de vida de las aplicaciones para que evolucionen con criterio de negocio, calidad y operación.',
      limits: [
        'No se debe prometer una modernización, migración o plazo cerrado sin evaluar la aplicación, sus dependencias y su criticidad.',
        'No es solo desarrollo de funcionalidades: la conversación debe incluir sostenibilidad, calidad y capacidad de cambio.'
      ],
      signals: [
        'Una aplicación crítica frena cambios de negocio o concentra deuda difícil de gestionar.',
        'El coste de mantener y evolucionar el software crece sin una hoja de ruta compartida.',
        'Hay necesidad de mejorar velocidad, calidad o gobierno del ciclo de entrega.'
      ],
      openingQuestion: '¿Qué aplicación o parte del ciclo está limitando ahora la capacidad de cambiar con seguridad?',
      firstStep: 'Identificar la aplicación o capacidad prioritaria, el impacto de negocio y las restricciones de operación antes de proponer una evolución.',
      arguments: [
        'La conversación no empieza por una tecnología concreta, sino por qué impide a la organización cambiar y operar con confianza.',
        'Una evolución sostenible conecta arquitectura, entrega, calidad y operación; no se reduce a reescribir software.'
      ],
      subpracticeIds: ['software-modernization'],
      relatedPracticeIds: ['smart-operations', 'data-ai'],
      serviceModel: 'Se valida la situación de la aplicación y su contexto antes de acordar un servicio inicial o una evolución mayor.'
    }),

    'data-ai': createPractice({
      id: 'data-ai',
      title: 'Data & AI',
      owner: 'Daniela',
      proposal: 'Convertimos datos y capacidades de IA en decisiones, productos y operaciones gobernadas, útiles para el negocio.',
      limits: [
        'No se debe vender IA como fin en sí mismo ni prometer resultados sin revisar datos, gobierno, riesgos y adopción.',
        'La disponibilidad de datos no equivale por sí sola a calidad, permiso de uso o preparación para un caso de IA.'
      ],
      signals: [
        'El negocio tiene datos, pero no confía lo suficiente en ellos para decidir o automatizar.',
        'Existen iniciativas de IA dispersas sin un criterio compartido de valor, gobierno o riesgo.',
        'Se necesita pasar de análisis aislados a una capacidad de datos mantenible.'
      ],
      openingQuestion: '¿Qué decisión, operación o experiencia queréis mejorar y qué os impide hoy usar los datos con suficiente confianza?',
      firstStep: 'Acordar el caso de uso prioritario, los datos implicados y las condiciones de gobierno antes de diseñar una solución.',
      arguments: [
        'El valor de los datos y la IA aparece cuando están ligados a una decisión u operación concreta, no cuando se acumulan capacidades sin uso.',
        'Gobierno, analítica e IA deben avanzar con negocio y operación; uno no sustituye a los otros.'
      ],
      subpracticeIds: [],
      relatedPracticeIds: ['process-intelligence', 'ia-digital-change'],
      serviceModel: 'El siguiente paso se acota alrededor de una decisión o caso de uso, validando datos, responsables y condiciones de gobierno.'
    }),

    'smart-operations': createPractice({
      id: 'smart-operations',
      title: 'Smart Operations',
      owner: 'Amador',
      proposal: 'Ayudamos a que el entorno digital de trabajo, la infraestructura y la operación tecnológica respondan mejor al negocio y a las personas.',
      limits: [
        'No se debe plantear una herramienta, plataforma o cambio operativo sin comprender el servicio actual, los usuarios y las restricciones de operación.',
        'No equivale a una mejora aislada de infraestructura: el resultado depende también de experiencia, procesos y adopción.'
      ],
      signals: [
        'Los equipos perciben fricción al trabajar con las herramientas o servicios digitales.',
        'La operación consume atención en incidencias recurrentes, baja visibilidad o tareas manuales.',
        'Hay un cambio de entorno, infraestructura o modelo de servicio que necesita aterrizarse sin perder continuidad.'
      ],
      openingQuestion: '¿Qué parte de la experiencia digital u operación está afectando más al servicio, a los equipos o a la capacidad de responder?',
      firstStep: 'Delimitar el servicio prioritario, las personas afectadas y los indicadores operativos que ayudarían a comprobar una mejora.',
      arguments: [
        'La operación mejora de verdad cuando tecnología, experiencia de usuario y modelo de servicio se consideran juntos.',
        'Una mejora visible para el usuario necesita poder sostenerse en la operación diaria.'
      ],
      subpracticeIds: [],
      relatedPracticeIds: ['software-development', 'process-intelligence'],
      serviceModel: 'Se parte de un servicio o experiencia concreta y se contrasta con operación, usuarios y capacidad de evolución.'
    }),

    'ia-digital-change': createPractice({
      id: 'ia-digital-change',
      title: 'IA + Digital Change',
      owner: 'Alfredo',
      proposal: 'Acompañamos la adopción responsable de nuevas capacidades digitales e IA para que las personas y la organización las conviertan en impacto real.',
      limits: [
        'No se presenta como una campaña de comunicación ni como formación desconectada de un cambio operativo concreto.',
        'La adopción de IA requiere revisar propósito, personas, procesos y reglas de uso; no basta con habilitar una herramienta.'
      ],
      signals: [
        'Hay una nueva capacidad digital o de IA que no se está incorporando de manera homogénea al trabajo real.',
        'Los equipos muestran dudas sobre uso, confianza, responsabilidad o impacto del cambio.',
        'La organización necesita llevar un cambio tecnológico a prácticas sostenibles, no solo desplegarlo.'
      ],
      openingQuestion: '¿Qué tendría que cambiar realmente en el trabajo de las personas para que esta iniciativa genere el impacto que esperáis?',
      firstStep: 'Aclarar el cambio que se busca, los colectivos implicados y las condiciones de adopción antes de definir una intervención.',
      arguments: [
        'Desplegar tecnología es más sencillo que conseguir que cambie una decisión, un proceso o una forma de trabajar.',
        'La adopción no es una fase final: condiciona desde el diseño que una iniciativa llegue a tener impacto.'
      ],
      subpracticeIds: [],
      relatedPracticeIds: ['data-ai', 'process-intelligence'],
      serviceModel: 'El avance se formula alrededor de un cambio observable en personas y operación, no de una iniciativa de comunicación aislada.'
    })
  };

  var subpractices = {
    'process-mining': createSubpractice({
      id: 'process-mining',
      practiceId: 'process-intelligence',
      title: 'Inteligencia de procesos',
      owner: 'Carmen',
      proposal: 'Hacemos visible cómo funciona un proceso en la realidad para localizar variaciones, esperas y oportunidades de mejora con evidencia.',
      limits: [
        'No sustituye la conversación con quienes operan el proceso ni convierte un dato incompleto en una conclusión automática.',
        'No se debe afirmar una mejora esperada sin validar calidad de datos, alcance y condiciones de implementación.'
      ],
      signals: [
        'El proceso se conoce por percepción, pero no hay una visión común de su recorrido real.',
        'Hay diferencias relevantes entre áreas, sedes, equipos o tipos de expediente.',
        'Se quiere mejorar o automatizar, pero no está claro dónde está el mayor impacto.'
      ],
      openingQuestion: 'Si pudiéramos ver el recorrido real de este proceso, ¿qué decisión o problema os gustaría poder resolver primero?',
      firstStep: 'Seleccionar un proceso prioritario y confirmar qué trazas o fuentes pueden aportar evidencia útil.',
      arguments: [
        'Antes de rediseñar o automatizar conviene separar la intuición de lo que el proceso está haciendo en realidad.',
        'La evidencia permite elegir dónde actuar y medir si el cambio posterior mejora de verdad el servicio.'
      ],
      relatedSubpracticeIds: ['process-automation-ai'],
      caseOrUse: {
        label: 'Cómo conectarla con la siguiente conversación',
        text: 'Usar la inteligencia de procesos para concretar una prioridad de mejora; si procede, enlazar después con automatización y agentes IA.'
      },
      serviceModel: 'Empezar por comprender el proceso prioritario y acordar qué evidencia hace falta para orientar una decisión de mejora.'
    }),

    'process-automation-ai': createSubpractice({
      id: 'process-automation-ai',
      practiceId: 'process-intelligence',
      title: 'Automatización de procesos y agentes IA',
      owner: 'Carla',
      proposal: 'Diseñamos la automatización y el uso de agentes IA alrededor de procesos concretos para liberar capacidad, reforzar consistencia y mejorar el servicio.',
      limits: [
        'No se debe prometer automatización total ni autonomía de agentes sin revisar excepciones, controles, datos y responsables.',
        'No sustituye el rediseño necesario de un proceso que todavía no está suficientemente entendido o estabilizado.'
      ],
      signals: [
        'Hay tareas repetitivas, traspasos manuales o decisiones sencillas que consumen tiempo operativo.',
        'El volumen, la variabilidad o los tiempos de respuesta hacen difícil sostener el servicio.',
        'La organización explora agentes IA, pero necesita llevarlos a un proceso y una operación con control.'
      ],
      openingQuestion: '¿Qué tarea o decisión del proceso os gustaría simplificar primero sin perder control, calidad o trazabilidad?',
      firstStep: 'Elegir un proceso o tarea concreta y validar variabilidad, excepciones, datos, controles y dueño operativo antes de decidir el enfoque.',
      arguments: [
        'La automatización aporta más cuando resuelve una fricción operacional concreta y tiene un responsable claro en el día a día.',
        'Los agentes IA deben integrarse en un proceso, con límites y supervisión definidos, para que su uso sea sostenible.'
      ],
      relatedSubpracticeIds: ['process-mining'],
      caseOrUse: {
        label: 'Cómo conectarla con inteligencia de procesos',
        text: 'Si la prioridad todavía se basa en intuiciones o el proceso tiene alta variabilidad, proponer primero entenderlo con Carmen antes de automatizar con Carla.'
      },
      serviceModel: 'Acordar un primer proceso o tarea viable y contrastar cómo se controlará, operará y medirá la mejora.'
    }),

    'software-modernization': createSubpractice({
      id: 'software-modernization',
      practiceId: 'software-development',
      title: 'Modernización de aplicaciones',
      owner: 'Jorge',
      proposal: 'Ayudamos a evolucionar aplicaciones existentes para recuperar capacidad de cambio sin desconectar la tecnología de la operación y el negocio.',
      limits: [
        'No presupone una reescritura, migración o plataforma concreta antes de conocer la aplicación y sus dependencias.',
        'No se debe prometer reducción de riesgo o esfuerzo sin una evaluación técnica y operativa suficiente.'
      ],
      signals: [
        'Una aplicación crítica es difícil de cambiar, probar o mantener.',
        'El negocio depende de una capacidad que se ha vuelto lenta, costosa o frágil de evolucionar.',
        'Existen decisiones acumuladas sobre plataforma, código o integración que necesitan priorización.'
      ],
      openingQuestion: '¿Qué cambio de negocio estáis posponiendo o complicando porque la aplicación no os deja evolucionar con la seguridad necesaria?',
      firstStep: 'Aislar la aplicación o capacidad prioritaria, el impacto de negocio y las dependencias que condicionan una evolución segura.',
      arguments: [
        'Modernizar no es actualizar por actualizar: es recuperar capacidad de cambio donde importa al negocio.',
        'La alternativa adecuada depende de criticidad, dependencias, operación y ritmo de cambio; no de una receta única.'
      ],
      caseOrUse: {
        label: 'Cómo usar los materiales',
        text: 'Empezar por el deck o ficha de Modernización y elegir una referencia autorizada solo cuando comparta contexto relevante con la aplicación del cliente.'
      },
      serviceModel: 'Acordar una lectura inicial de la aplicación y sus restricciones antes de dibujar una hoja de evolución o una propuesta mayor.'
    })
  };

  function fallbackSubpractice(subpractice, practice) {
    var rawId = idOf(subpractice, 'subpractice-' + Math.random().toString(36).slice(2));
    var id = resolveSubpracticeId(rawId);
    var title = titleOf(subpractice, humanize(id));
    var owner = ownerOf(subpractice, practice.owner);
    var statement = statementOf(subpractice) || statementOf(practice);

    return createSubpractice({
      id: id,
      practiceId: practice.id,
      title: title,
      owner: owner,
      proposal: statement || (title + ' se aborda conectando necesidad de negocio, operación y capacidad tecnológica.'),
      limits: [
        'Confirmar contexto, alcance y responsable antes de comprometer una solución o resultado.',
        'Usar únicamente materiales y referencias autorizados en Biblioteca.'
      ],
      signals: [
        'Existe una necesidad concreta que esta capacidad puede ayudar a explorar.',
        'Hace falta identificar la situación, los interlocutores y la evidencia antes de definir un avance.'
      ],
      openingQuestion: '¿Qué estáis tratando de conseguir en esta situación y qué os está impidiendo avanzar hoy?',
      firstStep: 'Contrastar con el especialista el contexto, la necesidad y el siguiente paso que tendría sentido.',
      arguments: [
        'La propuesta debe conectar la capacidad con una necesidad verificable del cliente.',
        'Antes de concretar un alcance conviene validar el contexto con la persona experta.'
      ]
    });
  }

  function fallbackPractice(practice) {
    var rawId = idOf(practice, 'practice-' + Math.random().toString(36).slice(2));
    var id = resolvePracticeId(rawId);
    var title = titleOf(practice, humanize(id));
    var owner = ownerOf(practice, 'Equipo de práctica');
    var statement = statementOf(practice);

    return createPractice({
      id: id,
      title: title,
      owner: owner,
      proposal: statement || (title + ' conecta capacidades tecnológicas, operación y personas para abordar necesidades de transformación.'),
      limits: [
        'No comprometer alcance, resultado ni referencia antes de validar la situación y los materiales autorizados.',
        'No presentar una capacidad aislada si todavía no se ha entendido la necesidad de negocio y operación.'
      ],
      signals: [
        'Hay una necesidad de cambio que no se resuelve solo con una herramienta.',
        'El cliente necesita identificar una prioridad, una evidencia o un siguiente paso viable.'
      ],
      openingQuestion: '¿Qué cambio necesitáis conseguir y qué está dificultando que llegue a tener el impacto esperado?',
      firstStep: 'Contrastar la situación con la persona experta antes de recomendar un servicio o material.',
      arguments: [
        'La capacidad cobra valor al conectarse con la situación concreta del cliente.',
        'El siguiente paso debe ser útil y verificable, no una promesa genérica.'
      ]
    });
  }

  function hydrateFromPortalData() {
    var portalData = window.HIPATIA_DATA || {};
    var sourcePractices = asArray(portalData.practices);

    sourcePractices.forEach(function (sourcePractice) {
      var sourceId = idOf(sourcePractice, '');
      if (!sourceId) return;

      var practiceId = resolvePracticeId(sourceId);
      var practice = practices[practiceId] || fallbackPractice(sourcePractice);
      practices[practiceId] = practice;

      var sourceSubpractices = asArray(
        sourcePractice.subpractices || sourcePractice.subPractices || sourcePractice.workstreams
      );

      sourceSubpractices.forEach(function (sourceSubpractice, index) {
        var sourceSubpracticeId = idOf(sourceSubpractice, practiceId + '-subpractice-' + (index + 1));
        var subpracticeId = resolveSubpracticeId(sourceSubpracticeId);
        var subpractice = subpractices[subpracticeId] || fallbackSubpractice(sourceSubpractice, practice);
        subpractice.practiceId = practiceId;
        subpractices[subpracticeId] = subpractice;
        practice.subpracticeIds = unique((practice.subpracticeIds || []).concat([subpracticeId]));
      });
    });

    // Mantiene los dos caminos de Process Intelligence incluso aunque un dato
    // histórico aún llegue como la antigua práctica independiente de RPA.
    if (practices['process-intelligence']) {
      practices['process-intelligence'].subpracticeIds = unique(
        ['process-mining', 'process-automation-ai'].concat(
          practices['process-intelligence'].subpracticeIds || []
        )
      );
    }
  }

  hydrateFromPortalData();

  var orderedPracticeIds = [
    'process-intelligence',
    'software-development',
    'data-ai',
    'smart-operations',
    'ia-digital-change'
  ];

  function getPractice(id) {
    return practices[resolvePracticeId(id)] || null;
  }

  function getSubpractice(id) {
    return subpractices[resolveSubpracticeId(id)] || null;
  }

  function getContext(practiceId, subpracticeId) {
    var practice = getPractice(practiceId);
    var subpractice = getSubpractice(subpracticeId);

    if (subpractice && practice && subpractice.practiceId !== practice.id) {
      subpractice = null;
    }

    return {
      practice: practice,
      subpractice: subpractice,
      active: subpractice || practice || null
    };
  }

  window.HIPATIA_PRACTICE_CONTENT = {
    version: CONTENT_VERSION,
    standardSections: standardSections,
    materialLabels: materialLabels,
    practiceOrder: orderedPracticeIds,
    practices: practices,
    subpractices: subpractices,
    resolvePracticeId: resolvePracticeId,
    resolveSubpracticeId: resolveSubpracticeId,
    getPractice: getPractice,
    getSubpractice: getSubpractice,
    getContext: getContext
  };
})(window);
