/*
 * Hipatia · catálogo inicial de contenido
 *
 * Es la capa de datos del demostrador. La interfaz no replica los documentos:
 * los referencia mediante una ficha de uso, propietario, vigencia y ruta fuente.
 * Las rutas se publicarán en el gestor documental del portal en la fase de carga.
 */
window.HIPATIA_DATA = {
  portal: {
    title: 'Hipatia',
    subtitle: 'Portal de habilitación comercial',
    status: 'Arquitectura de portal único · sin CRM'
  },
  corporate: {
    id: 'corporativo',
    name: 'Entelgy, en una conversación',
    eyebrow: 'Relato corporativo · transversal',
    statement: 'Tecnología que convierte capacidad de cambio en impacto visible para negocio, operación y personas.',
    promise: 'Human driven technology.',
    principles: [
      { title: 'Resultado antes que catálogo', text: 'La conversación empieza por la decisión, el reto y el impacto; la oferta entra después.' },
      { title: 'Una compañía, varias capacidades', text: 'Las prácticas se combinan cuando la necesidad lo requiere, sin forzar una solución única.' },
      { title: 'Prueba y continuidad', text: 'Cada mensaje comercial debe poder sostenerse con un activo vigente, una referencia autorizada o un especialista.' }
    ],
    assets: ['corp-exec-global', 'corp-exec-banca', 'corp-portfolio', 'corp-cio-case-guide']
  },
  practices: [
    {
      id: 'smart-operations',
      order: '01',
      name: 'Smart Operations',
      owner: 'Amador',
      short: 'Digital Workplace, infraestructura cloud y operación inteligente.',
      statement: 'Hacemos que el puesto, la infraestructura y la operación acompañen al negocio con una experiencia gestionada y medible.',
      audience: 'CIO, responsables de infraestructura, workplace y operaciones.',
      question: '¿Qué parte de la operación está restando más capacidad al negocio o a las personas?',
      next: 'Acordar una conversación de alcance con el equipo de Smart Operations y seleccionar el entorno prioritario.',
      subpractices: [
        { id: 'smartops-workplace', name: 'Digital Workplace', short: 'Experiencia, puesto y soporte al usuario.' },
        { id: 'smartops-infra', name: 'Infraestructura Cloud', short: 'Plataforma, continuidad y operación.' },
        { id: 'smartops', name: 'SmartOPS', short: 'Modelo integrado de operación y visibilidad.' }
      ],
      assets: ['smartops-resumen', 'smartops-workplace', 'smartops-infra', 'smartops-onepager-workplace', 'smartops-onepager-infra', 'smartops-case-ejie']
    },
    {
      id: 'software-development',
      order: '02',
      name: 'Software Development',
      owner: 'Jorge',
      short: 'Todo el ciclo de vida de las aplicaciones, desde su evolución hasta su modernización.',
      statement: 'Ayudamos a decidir, construir, evolucionar y modernizar aplicaciones sin desconectarlas de la operación.',
      audience: 'CIO, responsables de aplicaciones, arquitectura, delivery y negocio.',
      question: '¿Qué decisión o mejora está frenada porque cambiar las aplicaciones cuesta demasiado?',
      next: 'Alinear el problema, el alcance y el especialista antes de convertir la conversación en una propuesta cerrada.',
      subpractices: [
        { id: 'modernizacion', name: 'Modernización de Aplicaciones', short: 'Recuperar capacidad de cambio en sistemas críticos.' },
        { id: 'mantenimiento', name: 'Mantenimiento Evolutivo Inteligente', short: 'Evolucionar lo que está en producción con productividad medible.' },
        { id: 'spec-driven', name: 'Spec-Driven Development', short: 'Construcción y gobierno guiados por especificación.' },
        { id: 'asistencia-tecnica', name: 'Asistencia Técnica Aumentada', short: 'Capacidad experta conectada a entrega y resultado.' },
        { id: 'factoria-seas', name: 'Factoría SEAS', short: 'Servicios de desarrollo y evolución industrializados.' }
      ],
      assets: ['software-deck', 'software-modernizacion-onepager', 'software-modernizacion-ficha', 'software-mantenimiento-onepager', 'software-mantenimiento-ficha', 'software-asistencia-onepager', 'software-asistencia-ficha', 'software-pains-modernizacion', 'software-case-nasertic', 'software-case-uned', 'software-case-dgoj']
    },
    {
      id: 'process-intelligence',
      order: '03',
      name: 'Process Intelligence',
      owner: 'Carmen',
      short: 'Minería de procesos y mejora basada en evidencia, alrededor de Celonis.',
      statement: 'Convertimos trazas operativas en una lectura compartida de cuellos de botella, cumplimiento y oportunidades de mejora.',
      audience: 'Operaciones, transformación, procesos, CFO y responsables de eficiencia.',
      question: '¿Qué proceso relevante se gestiona hoy con más intuición que evidencia?',
      next: 'Seleccionar un proceso y validar qué datos permiten leer su realidad operativa antes de proponer automatización.',
      subpractices: [
        { id: 'process-mining', name: 'Process Mining', short: 'Descubrir la realidad del proceso a partir de sus datos.' },
        { id: 'process-excellence', name: 'Process Excellence', short: 'Priorizar mejora y cambio con evidencia operativa.' }
      ],
      assets: ['process-deck', 'process-onepager', 'process-ficha', 'process-pains']
    },
    {
      id: 'ia-digital-change',
      order: '04',
      name: 'IA + Digital Change',
      owner: 'Alfredo',
      short: 'Adopción, confianza y productos de IA aplicados a la organización.',
      statement: 'Aterrizamos la IA en capacidades que las personas y la organización pueden adoptar, gobernar y sostener.',
      audience: 'Dirección, transformación, personas, innovación y responsables de IA.',
      question: '¿Qué decisión, conocimiento o cambio necesita la organización hacer posible con IA de forma responsable?',
      next: 'Acordar el caso de uso, la condición de adopción y el especialista que debe profundizarlo.',
      subpractices: [
        { id: 'iability', name: 'IAbility', short: 'Capacidad de adopción y uso responsable de IA.' },
        { id: 'preservia', name: 'PreservIA', short: 'Preservación y gobierno del conocimiento.' },
        { id: 'ogh-ia', name: 'OGH-IA', short: 'Gobierno y habilitación de IA.' }
      ],
      assets: ['digital-change-deck', 'iability-onepager', 'iability-ficha', 'preservia-publico', 'preservia-privado', 'preservia-ficha', 'ogh-onepager', 'ogh-ficha', 'digital-change-pains']
    },
    {
      id: 'data-ai',
      order: '05',
      name: 'Data & AI',
      owner: 'Daniela',
      short: 'Gobierno del dato, analítica avanzada e IA aplicada a decisiones.',
      statement: 'Conectamos calidad, gobierno, analítica e IA para que el dato sirva a una decisión de negocio real.',
      audience: 'CDO, CIO, negocio, analítica, data governance y dirección.',
      question: '¿Qué decisión importante sigue dependiendo de datos tardíos, dispersos o poco confiables?',
      next: 'Precisar la decisión, los datos críticos y el punto de gobierno o analítica que debe abordarse primero.',
      subpractices: [
        { id: 'data-governance', name: 'Gobierno del dato', short: 'Calidad, propiedad y confianza sobre los datos.' },
        { id: 'advanced-analytics', name: 'Analítica avanzada', short: 'Decisiones y operaciones guiadas por evidencia.' },
        { id: 'applied-ai', name: 'IA aplicada al dato', short: 'Casos de uso de IA con datos gobernados.' }
      ],
      assets: ['dataai-producto', 'dataai-mutua', 'dataai-onepager', 'dataai-ficha', 'dataai-pains']
    },
    {
      id: 'automation-rpa',
      order: '06',
      name: 'Automatización · RPA',
      owner: 'Carla',
      short: 'Consultoría de procesos y automatización robotizada.',
      statement: 'Diseñamos automatización que empieza por el proceso, prioriza valor y deja capacidad instalada en la operación.',
      audience: 'Operaciones, transformación, servicios compartidos y responsables de automatización.',
      question: '¿Qué trabajo repetitivo está consumiendo capacidad y merece ser rediseñado antes de automatizarlo?',
      next: 'Seleccionar el proceso, confirmar su volumen y decidir si la siguiente conversación es de diagnóstico o de automatización.',
      subpractices: [
        { id: 'process-consulting', name: 'Consultoría de procesos', short: 'Entender, simplificar y priorizar antes de automatizar.' },
        { id: 'rpa', name: 'Automatización RPA', short: 'Automatización robotizada con criterio de negocio.' }
      ],
      assets: ['automation-deck', 'automation-onepager', 'automation-ficha']
    }
  ],
  assets: [
    { id: 'corp-exec-global', title: 'Entelgy Executive Deck', type: 'Deck corporativo', practice: 'corporativo', audience: 'Cliente', usage: 'cliente', status: 'revisar', owner: 'Corporativo', source: 'corporativo/decks/Entelgy_Executive_Deck.html', moment: 'Presentar Entelgy', note: 'Versión corporativa base. Seleccionar la variante aprobada antes de uso externo.' },
    { id: 'corp-exec-banca', title: 'Entelgy Executive Deck · Banca', type: 'Deck corporativo sectorial', practice: 'corporativo', audience: 'Cliente', usage: 'cliente', status: 'revisar', owner: 'Corporativo', source: 'corporativo/Entelgy Executive Deck_larga_banca.html', moment: 'Presentar Entelgy', note: 'Versión específica para conversaciones de banca.' },
    { id: 'corp-portfolio', title: 'Diagrama de portfolio Entelgy', type: 'Mapa corporativo', practice: 'corporativo', audience: 'Comercial', usage: 'interno', status: 'vigente', owner: 'Corporativo', source: 'corporativo/diagrama-portfolio-entelgy.html', moment: 'Orientar oferta', note: 'Ayuda a explicar la relación entre capacidades sin convertir la conversación en un catálogo.' },
    { id: 'corp-cio-case-guide', title: 'Guía de slides de caso de éxito CIO', type: 'Guía interna', practice: 'corporativo', audience: 'Comercial', usage: 'interno', status: 'vigente', owner: 'Corporativo', source: 'corporativo/guia-slides-caso-exito-cio.md', moment: 'Preparar reunión', note: 'Marco para elegir y presentar un caso ante interlocución ejecutiva.' },
    { id: 'smartops-resumen', title: 'SmartOPS · Resumen Ejecutivo Global 2026', type: 'Deck ejecutivo', practice: 'smart-operations', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Amador', source: 'digital-workplace/decks/SmartOPS_Resumen_Ejecutivo_Global_2026.html', moment: 'Reunión introductoria', note: 'Pieza de visión global de SmartOPS.' },
    { id: 'smartops-workplace', title: 'SmartOPS Workplace 2026', type: 'Deck', practice: 'smart-operations', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Amador', source: 'digital-workplace/decks/SmartOPS_Workplace_2026.html', moment: 'Profundizar solución', note: 'Material de Digital Workplace.' },
    { id: 'smartops-infra', title: 'SmartOPS for Infra 2026', type: 'Deck', practice: 'smart-operations', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Amador', source: 'digital-workplace/decks/SmartOPS_for_Infra_2026.html', moment: 'Profundizar solución', note: 'Material de infraestructura y operación.' },
    { id: 'smartops-onepager-workplace', title: 'One-pager SmartOPS Workplace', type: 'One-pager', practice: 'smart-operations', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Amador', source: 'digital-workplace/fichas/onepager-smartops-desktop.html', moment: 'Dejar con cliente', note: 'Síntesis cliente de Digital Workplace.' },
    { id: 'smartops-onepager-infra', title: 'One-pager SmartOPS Infra', type: 'One-pager', practice: 'smart-operations', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Amador', source: 'digital-workplace/fichas/onepager-smartops-infra.html', moment: 'Dejar con cliente', note: 'Síntesis cliente de infraestructura.' },
    { id: 'smartops-case-ejie', title: 'Caso de éxito EJIE', type: 'Referencia', practice: 'smart-operations', audience: 'Comercial', usage: 'validacion', status: 'revisar', owner: 'Amador', source: 'digital-workplace/casos-exito/originales/Caso_Exito_DaaS EJIE.pptx', moment: 'Aportar prueba', note: 'Confirmar permiso y encuadre de referencia antes de compartir.' },
    { id: 'software-deck', title: 'Entelgy · Ciclo de Software', type: 'Deck ejecutivo', practice: 'software-development', audience: 'Cliente', usage: 'cliente', status: 'revisar', owner: 'Jorge', source: 'ciclo-software/decks/entelgy-ciclo-software.html', moment: 'Reunión introductoria', note: 'Deck de área; comprobar edición y referencias antes de enviar.' },
    { id: 'software-modernizacion-onepager', title: 'One-pager · Modernización', type: 'One-pager', practice: 'software-development', subpractice: 'modernizacion', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Jorge', source: 'ciclo-software/fichas/onepager-modernizacion.html', moment: 'Dejar con cliente', note: 'Pieza de entrada para Modernización.' },
    { id: 'software-modernizacion-ficha', title: 'Ficha de servicio · Modernización', type: 'Ficha de servicio', practice: 'software-development', subpractice: 'modernizacion', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Jorge', source: 'ciclo-software/fichas/ficha-modernizacion.html', moment: 'Profundizar solución', note: 'Ficha cliente de Modernización.' },
    { id: 'software-mantenimiento-onepager', title: 'One-pager · Mantenimiento Evolutivo', type: 'One-pager', practice: 'software-development', subpractice: 'mantenimiento', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Jorge', source: 'ciclo-software/fichas/onepager-mantenimiento.html', moment: 'Dejar con cliente', note: 'Pieza cliente de Mantenimiento Evolutivo Inteligente.' },
    { id: 'software-mantenimiento-ficha', title: 'Ficha de servicio · Mantenimiento Evolutivo', type: 'Ficha de servicio', practice: 'software-development', subpractice: 'mantenimiento', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Jorge', source: 'ciclo-software/fichas/ficha-mantenimiento.html', moment: 'Profundizar solución', note: 'Ficha de apoyo a la conversación de servicio.' },
    { id: 'software-asistencia-onepager', title: 'One-pager · Asistencia Técnica', type: 'One-pager', practice: 'software-development', subpractice: 'asistencia-tecnica', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Jorge', source: 'ciclo-software/fichas/onepager-asistencia.html', moment: 'Dejar con cliente', note: 'Pieza cliente de Asistencia Técnica Aumentada.' },
    { id: 'software-asistencia-ficha', title: 'Ficha de servicio · Asistencia Técnica', type: 'Ficha de servicio', practice: 'software-development', subpractice: 'asistencia-tecnica', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Jorge', source: 'ciclo-software/fichas/ficha-asistencia.html', moment: 'Profundizar solución', note: 'Ficha de detalle de Asistencia Técnica.' },
    { id: 'software-pains-modernizacion', title: 'Mapa de pains · Modernización', type: 'Guía de discovery', practice: 'software-development', subpractice: 'modernizacion', audience: 'Comercial', usage: 'interno', status: 'vigente', owner: 'Jorge', source: 'ciclo-software/mapa-pains-modernizacion.html', moment: 'Preparar reunión', note: 'Herramienta interna para estructurar preguntas y no diagnosticar sin evidencia.' },
    { id: 'software-case-nasertic', title: 'Caso NASERTIC', type: 'Referencia', practice: 'software-development', subpractice: 'modernizacion', audience: 'Comercial', usage: 'validacion', status: 'revisar', owner: 'Jorge', source: 'hipatia2/paquete-jorge/03-casos-repositorio.md', moment: 'Aportar prueba', note: 'Citable en presentación según Hipatia2; validar cifra y permiso concreto antes de envío formal.' },
    { id: 'software-case-uned', title: 'Caso UNED', type: 'Referencia', practice: 'software-development', subpractice: 'modernizacion', audience: 'Comercial', usage: 'validacion', status: 'revisar', owner: 'Jorge', source: 'hipatia2/paquete-jorge/03-casos-repositorio.md', moment: 'Aportar prueba', note: 'Citable en presentación según Hipatia2; validar contexto y métrica antes de uso externo.' },
    { id: 'software-case-dgoj', title: 'Caso DGOJ', type: 'Referencia', practice: 'software-development', subpractice: 'mantenimiento', audience: 'Comercial', usage: 'validacion', status: 'revisar', owner: 'Jorge', source: 'hipatia2/paquete-jorge/03-casos-repositorio.md', moment: 'Aportar prueba', note: 'Caso de Mantenimiento Evolutivo; no presentarlo como caso de Modernización sin encuadre explícito.' },
    { id: 'process-deck', title: 'Process Intelligence', type: 'Deck ejecutivo', practice: 'process-intelligence', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Carmen', source: 'process-mining/DECKS/Process_Intelligence.html', moment: 'Reunión introductoria', note: 'Presentación de Process Intelligence.' },
    { id: 'process-onepager', title: 'One-pager · Process Intelligence', type: 'One-pager', practice: 'process-intelligence', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Carmen', source: 'process-mining/fichas/onepager-process-intelligence.html', moment: 'Dejar con cliente', note: 'Síntesis cliente de la práctica.' },
    { id: 'process-ficha', title: 'Ficha de servicio · Process Intelligence', type: 'Ficha de servicio', practice: 'process-intelligence', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Carmen', source: 'process-mining/fichas/ficha-process-intelligence.html', moment: 'Profundizar solución', note: 'Ficha de detalle de servicio.' },
    { id: 'process-pains', title: 'Mapa de pains · Process Intelligence', type: 'Guía de discovery', practice: 'process-intelligence', audience: 'Comercial', usage: 'interno', status: 'vigente', owner: 'Carmen', source: 'process-mining/previo-process-intelligence.html', moment: 'Preparar reunión', note: 'Material interno de entendimiento de la práctica.' },
    { id: 'digital-change-deck', title: 'IA + Digital Change', type: 'Deck ejecutivo', practice: 'ia-digital-change', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/decks/digital-change-deck.html', moment: 'Reunión introductoria', note: 'Presentación de la práctica.' },
    { id: 'iability-onepager', title: 'One-pager · IAbility', type: 'One-pager', practice: 'ia-digital-change', subpractice: 'iability', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/fichas/onepager-iability.html', moment: 'Dejar con cliente', note: 'Pieza de entrada para IAbility.' },
    { id: 'iability-ficha', title: 'Ficha · IAbility', type: 'Ficha de servicio', practice: 'ia-digital-change', subpractice: 'iability', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/fichas/Ficha_IAbility.html', moment: 'Profundizar solución', note: 'Ficha cliente de IAbility.' },
    { id: 'preservia-publico', title: 'One-pager · PreservIA · Sector público', type: 'One-pager sectorial', practice: 'ia-digital-change', subpractice: 'preservia', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/fichas/PreservIA-onepager-sectorpublico.html', moment: 'Dejar con cliente', note: 'Versión sector público.' },
    { id: 'preservia-privado', title: 'One-pager · PreservIA · Sector privado', type: 'One-pager sectorial', practice: 'ia-digital-change', subpractice: 'preservia', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/fichas/PreservIA-onepager-sectorprivado.html', moment: 'Dejar con cliente', note: 'Versión sector privado.' },
    { id: 'preservia-ficha', title: 'Ficha · PreservIA', type: 'Ficha de servicio', practice: 'ia-digital-change', subpractice: 'preservia', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/fichas/Ficha_PreservIA_standalone.html', moment: 'Profundizar solución', note: 'Ficha de detalle de PreservIA.' },
    { id: 'ogh-onepager', title: 'One-pager · OGH-IA', type: 'One-pager', practice: 'ia-digital-change', subpractice: 'ogh-ia', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/fichas/OnePager_OGH-IA.html', moment: 'Dejar con cliente', note: 'Pieza de entrada para OGH-IA.' },
    { id: 'ogh-ficha', title: 'Ficha · OGH-IA', type: 'Ficha de servicio', practice: 'ia-digital-change', subpractice: 'ogh-ia', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/fichas/Ficha_OGH-IA.html', moment: 'Profundizar solución', note: 'Ficha de detalle de OGH-IA.' },
    { id: 'digital-change-pains', title: 'Mapa de pains · IA + Digital Change', type: 'Guía de discovery', practice: 'ia-digital-change', audience: 'Comercial', usage: 'interno', status: 'vigente', owner: 'Alfredo', source: 'ia-digital-change/mapa-pains-digital-change.html', moment: 'Preparar reunión', note: 'Material interno para ordenar conversación y adopción.' },
    { id: 'dataai-producto', title: 'Data & AI · Producto', type: 'Deck ejecutivo', practice: 'data-ai', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Daniela', source: 'data-intelligence/decks/entelgy-dataai-producto.html', moment: 'Reunión introductoria', note: 'Presentación de producto Data & AI.' },
    { id: 'dataai-mutua', title: 'Data & AI · Mutua', type: 'Deck / caso', practice: 'data-ai', audience: 'Comercial', usage: 'validacion', status: 'revisar', owner: 'Daniela', source: 'data-intelligence/entelgy-dataai-mutua.html', moment: 'Aportar prueba', note: 'Confirmar referencia y condiciones de uso antes de externalizar.' },
    { id: 'dataai-onepager', title: 'One-pager · Data & AI', type: 'One-pager', practice: 'data-ai', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Daniela', source: 'data-intelligence/fichas/onepager-dataai.html', moment: 'Dejar con cliente', note: 'Síntesis cliente de Data & AI.' },
    { id: 'dataai-ficha', title: 'Ficha de servicio · Data & AI', type: 'Ficha de servicio', practice: 'data-ai', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Daniela', source: 'data-intelligence/fichas/ficha-dataai.html', moment: 'Profundizar solución', note: 'Ficha de detalle de servicio.' },
    { id: 'dataai-pains', title: 'Mapa de pains · Data & AI', type: 'Guía de discovery', practice: 'data-ai', audience: 'Comercial', usage: 'interno', status: 'vigente', owner: 'Daniela', source: 'data-intelligence/mapa-pains-data-ai.html', moment: 'Preparar reunión', note: 'Material interno de preparación comercial.' },
    { id: 'automation-deck', title: 'Automatización de procesos', type: 'Deck cliente', practice: 'automation-rpa', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Carla', source: 'automatizacion/decks/deck_cliente.html', moment: 'Reunión introductoria', note: 'Presentación de consultoría de procesos y automatización.' },
    { id: 'automation-onepager', title: 'One-pager · Automatización de procesos', type: 'One-pager', practice: 'automation-rpa', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Carla', source: 'automatizacion/fichas/onepager-automatizacion-procesos.html', moment: 'Dejar con cliente', note: 'Síntesis cliente de automatización.' },
    { id: 'automation-ficha', title: 'Ficha de servicio · Automatización de procesos', type: 'Ficha de servicio', practice: 'automation-rpa', audience: 'Cliente', usage: 'cliente', status: 'vigente', owner: 'Carla', source: 'automatizacion/fichas/ficha-automatizacion-procesos.html', moment: 'Profundizar solución', note: 'Ficha de detalle de automatización.' }
  ],
  updates: [
    { when: 'Gobierno', title: 'El catálogo ya diferencia vigencia y permiso de uso', text: 'Cada activo se clasifica como cliente, interno o con validación antes de compartir.' },
    { when: 'Oferta', title: 'Las seis prácticas ya tienen estructura común', text: 'Cada una combina propuesta, subprácticas, vitrina, biblioteca y apoyo experto.' },
    { when: 'Hipatia2', title: 'Modernización se incorpora como conocimiento, no como portal paralelo', text: 'Sus reglas de referencias, kit de visita y gobierno alimentan el mismo Hipatia.' }
  ]
};
