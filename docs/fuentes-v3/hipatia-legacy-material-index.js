/*
 * Hipatia · índice de materiales heredados
 *
 * Algunas piezas de Hipatia2 eran el contexto editorial de una práctica y no
 * estaban aún en el catálogo de activos. Se indexan aquí para que no se
 * pierdan, siempre como material interno o pendiente de revisión cuando no
 * exista autorización de salida a cliente.
 */
(function indexLegacyMaterials(window) {
  "use strict";

  var data = window.HIPATIA_DATA;
  if (!data || data.legacyMaterialIndexVersion === "1.0.0") return;
  var assets = data.assets || (data.assets = []);
  var DATE = "2026-09-02";

  function exists(id, source) {
    return assets.some(function (asset) {
      return asset.id === id || (source && asset.source === source);
    });
  }

  function add(record) {
    if (exists(record.id, record.source)) return;
    record.originalSource = record.source;
    record.citationStatus = "confirmar";
    record.lastReviewed = null;
    record.catalogDecision = "biblioteca";
    record.cataloguedAt = DATE;
    assets.push(record);
  }

  [
    {
      id: "process-mining-legacy-entry",
      title: "Entrada editorial · Process Mining",
      type: "Entrada de práctica",
      practice: "process-intelligence",
      subpractice: "process-mining",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Carmen",
      source: "process-mining/index.html",
      moment: "Orientar una conversación",
      note: "Entrada histórica de Hipatia2. Sirve para recuperar contexto editorial, no como pieza de envío."
    },
    {
      id: "process-mining-legacy-competition",
      title: "Análisis de competencia · Process Intelligence",
      type: "Análisis interno",
      practice: "process-intelligence",
      subpractice: "process-mining",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Carmen",
      source: "process-mining/analisis-competencia-comunicacion.html",
      moment: "Preparar posicionamiento",
      note: "Contexto editorial interno. No debe compartirse ni citarse ante cliente."
    },
    {
      id: "process-automation-legacy-entry",
      title: "Entrada editorial · Automatización de procesos",
      type: "Entrada de subpráctica",
      practice: "process-intelligence",
      subpractice: "process-automation-ai",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Carla",
      source: "automatizacion/index.html",
      moment: "Orientar una conversación",
      note: "Entrada histórica de Hipatia2. Recupera el contexto de Carla sin convertir Automatización en una sexta práctica."
    },
    {
      id: "process-automation-legacy-preview",
      title: "Previo comercial · Automatización de procesos",
      type: "Guía interna",
      practice: "process-intelligence",
      subpractice: "process-automation-ai",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Carla",
      source: "automatizacion/previo-automatizacion.html",
      moment: "Preparar reunión",
      note: "Preparación editorial interna; no es una pieza para cliente."
    },
    {
      id: "process-automation-legacy-competition",
      title: "Análisis de competencia · Automatización",
      type: "Análisis interno",
      practice: "process-intelligence",
      subpractice: "process-automation-ai",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Carla",
      source: "automatizacion/analisis-competencia-automatizacion.html",
      moment: "Preparar posicionamiento",
      note: "Contexto editorial interno. No debe compartirse ni citarse ante cliente."
    },
    {
      id: "software-legacy-preview",
      title: "Previo comercial · Software Engineering",
      type: "Guía interna",
      practice: "software-development",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Jorge",
      source: "ciclo-software/previo-software-engineering.html",
      moment: "Preparar reunión",
      note: "Contexto editorial de la práctica. No es una pieza de envío."
    },
    {
      id: "data-legacy-entry",
      title: "Entrada editorial · Data Intelligence",
      type: "Entrada de práctica",
      practice: "data-ai",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Daniela",
      source: "data-intelligence/index.html",
      moment: "Orientar una conversación",
      note: "Entrada histórica de Hipatia2 para preservar el contexto de la práctica."
    },
    {
      id: "smart-legacy-entry",
      title: "Entrada editorial · Digital Workplace",
      type: "Entrada de práctica",
      practice: "smart-operations",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/index.html",
      moment: "Orientar una conversación",
      note: "Entrada histórica de Hipatia2. Conserva el marco editorial de Smart Operations."
    },
    {
      id: "smart-legacy-preview",
      title: "Previo comercial · Digital Workplace e Infraestructura",
      type: "Guía interna",
      practice: "smart-operations",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/previo-DWP-infra.html",
      moment: "Preparar reunión",
      note: "Contexto editorial interno de Workplace e Infraestructura."
    },
    {
      id: "smart-legacy-competition",
      title: "Análisis de competencia · Digital Workplace",
      type: "Análisis interno",
      practice: "smart-operations",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/analisis-competencia-comunicacion.html",
      moment: "Preparar posicionamiento",
      note: "Material interno para afinar posición comercial; no se comparte con cliente."
    },
    {
      id: "smartops-workplace-legacy-deck",
      title: "SmartOPS Workplace · deck 2026 · archivo editorial",
      type: "Deck",
      practice: "smart-operations",
      subpractice: "smartops-workplace",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/SmartOPS-Workplace-Deck-2026.html",
      moment: "Profundizar solución",
      note: "Versión heredada localizada. Confirmar edición y condición de uso antes de emplearla."
    },
    {
      id: "smartops-infra-legacy-onepager",
      title: "SmartOPS Infra · one-pager · archivo editorial",
      type: "One-pager",
      practice: "smart-operations",
      subpractice: "smartops-infra",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/smartops-infra-onepager.html",
      moment: "Dejar con cliente",
      note: "Versión heredada localizada. Confirmar edición y condición de uso antes de emplearla."
    },
    {
      id: "digital-change-legacy-entry",
      title: "Entrada editorial · IA + Digital Change",
      type: "Entrada de práctica",
      practice: "ia-digital-change",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Alfredo",
      source: "ia-digital-change/index.html",
      moment: "Orientar una conversación",
      note: "Entrada histórica de Hipatia2 para preservar el contexto editorial de la práctica."
    },
    {
      id: "digital-change-legacy-preview",
      title: "Previo comercial · IA + Digital Change",
      type: "Guía interna",
      practice: "ia-digital-change",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Alfredo",
      source: "ia-digital-change/previo-digital-change.html",
      moment: "Preparar reunión",
      note: "Contexto editorial interno; no se usa como pieza cliente."
    },
    {
      id: "digital-change-legacy-competition",
      title: "Análisis de competencia · IA + Digital Change",
      type: "Análisis interno",
      practice: "ia-digital-change",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Alfredo",
      source: "ia-digital-change/analisis-competencia-comunicacion.html",
      moment: "Preparar posicionamiento",
      note: "Contexto editorial interno. No debe compartirse ni citarse ante cliente."
    }
  ].forEach(add);

  /* Rutas históricas que no son un activo navegable, pero sí una decisión trazada. */
  data.archivedAssets = data.archivedAssets || [];
  [
    {
      id: "hipatia2-state-log",
      title: "Hipatia2 · estado y decisiones de trabajo",
      source: "hipatia2/hipatia2-estado.md",
      catalogDecision: "archivo-editorial-interno",
      catalogReason: "Registro de diseño, gobernanza y evolución; no es material comercial."
    },
    {
      id: "software-cases-legacy-alias",
      title: "Hipatia2 · alias histórico de repositorio de casos de Software",
      source: "hipatia2/paquete-jorge/03-casos-repositorio.md",
      catalogDecision: "procedencia-sustituida",
      catalogReason: "La ruta histórica no existe. La fuente vigente localizada es automatizacion/jorge/referencias-jorge-herrero.md."
    }
  ].forEach(function (item) {
    if (!data.archivedAssets.some(function (existing) { return existing.id === item.id; })) {
      item.cataloguedAt = DATE;
      data.archivedAssets.push(item);
    }
  });

  data.legacyMaterialIndexVersion = "1.0.0";
}(window));
