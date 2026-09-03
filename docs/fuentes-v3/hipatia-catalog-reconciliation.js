/*
 * Hipatia · reconciliación de catálogo
 *
 * Esta capa no convierte un documento heredado en material comercial por el
 * mero hecho de encontrarlo. Le da un sitio, una procedencia y un estado para
 * que el portal único no pierda trabajo de Hipatia2 ni publique nada sin la
 * revisión correspondiente.
 */
(function reconcileHipatiaCatalog(window) {
  "use strict";

  var catalog = window.HIPATIA_DATA;
  if (!catalog || catalog.catalogReconciliationVersion === "1.0.0") return;

  var CATALOGUE_DATE = "2026-09-02";
  var assets = catalog.assets || (catalog.assets = []);

  function copy(object) {
    var result = {};
    Object.keys(object || {}).forEach(function (key) { result[key] = object[key]; });
    return result;
  }

  function find(id) {
    return assets.filter(function (asset) { return asset.id === id; })[0];
  }

  function archive(collectionName, asset, decision, reason) {
    if (!asset) return;
    var collection = catalog[collectionName] || (catalog[collectionName] = []);
    if (!collection.some(function (item) { return item.id === asset.id; })) {
      var archived = copy(asset);
      archived.catalogDecision = decision;
      archived.catalogReason = reason;
      archived.cataloguedAt = CATALOGUE_DATE;
      collection.push(archived);
    }
  }

  function normalize(asset) {
    if (!asset) return asset;
    if (!asset.originalSource) asset.originalSource = asset.source || "";
    if (!asset.citationStatus) asset.citationStatus = "confirmar";
    if (!Object.prototype.hasOwnProperty.call(asset, "lastReviewed")) asset.lastReviewed = null;
    if (!asset.catalogDecision) asset.catalogDecision = "biblioteca";
    if (!asset.cataloguedAt) asset.cataloguedAt = CATALOGUE_DATE;
    return asset;
  }

  function upsert(record) {
    var current = find(record.id);
    if (current) {
      Object.keys(record).forEach(function (key) { current[key] = record[key]; });
      return normalize(current);
    }
    assets.push(normalize(copy(record)));
    return assets[assets.length - 1];
  }

  assets.forEach(normalize);

  /*
   * Se retiran del escaparate activo, sin borrar su procedencia. El deck de
   * Banca no es equivalente a las fichas sectoriales de Modernización.
   */
  var bancaDeck = find("corp-exec-banca");
  archive(
    "retiredAssets",
    bancaDeck || {
      id: "corp-exec-banca",
      title: "Entelgy Executive Deck · Banca",
      source: "corporativo/Entelgy Executive Deck_larga_banca.html"
    },
    "retirado-de-la-biblioteca-activa",
    "La versión verticalizada corporativa no está terminada ni validada como pieza vigente."
  );
  assets = catalog.assets = assets.filter(function (asset) { return asset.id !== "corp-exec-banca"; });

  var cioGuide = find("corp-cio-case-guide");
  archive(
    "archivedAssets",
    cioGuide,
    "archivo-editorial-interno",
    "No es una pieza de conversación ni de envío. Se conserva para preparar casos ejecutivos cuando exista un uso definido."
  );
  assets = catalog.assets = assets.filter(function (asset) { return asset.id !== "corp-cio-case-guide"; });

  catalog.corporate = catalog.corporate || {};
  catalog.corporate.assets = ["corp-exec-global", "corp-exec-latam", "corp-portfolio"];
  catalog.corporate.internalAssets = ["corp-cio-case-guide"];

  upsert({
    id: "corp-exec-latam",
    title: "Entelgy Executive Deck · LATAM",
    type: "Deck corporativo regional",
    practice: "corporativo",
    audience: "Cliente",
    usage: "cliente",
    status: "revisar",
    citationStatus: "confirmar",
    owner: "Corporativo",
    source: "corporativo/decks/Entelgy_Executive_Deck_LATAM.html",
    moment: "Presentar Entelgy",
    region: "LATAM",
    note: "Versión regional LATAM. Confirmar la edición aprobada y las referencias antes de usarla externamente."
  });

  /* Procedencia corregida de las referencias de Software. */
  ["software-case-nasertic", "software-case-uned", "software-case-dgoj"].forEach(function (id) {
    var reference = find(id);
    if (!reference) return;
    reference.source = "automatizacion/jorge/referencias-jorge-herrero.md";
    reference.originalSource = reference.source;
    reference.citationStatus = "confirmar";
    reference.lastReviewed = null;
  });

  /* Familias que ya existen y deben poder encontrarse, aunque no se publiquen automáticamente. */
  [
    {
      id: "software-modernizacion-tarjeta",
      title: "Tarjeta de entrada · Modernización",
      type: "Tarjeta comercial",
      practice: "software-development",
      subpractice: "modernizacion",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Jorge",
      source: "ciclo-software/tarjeta-entrada-modernizacion.html",
      moment: "Preparar reunión",
      note: "Patrón de señal, diferenciador y pregunta. Validar el contenido antes de reutilizarlo fuera del portal."
    },
    {
      id: "software-modernizacion-sector-banca",
      title: "Ficha comercial · Modernización · Banca",
      type: "Ficha comercial sectorial",
      practice: "software-development",
      subpractice: "modernizacion",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Jorge",
      sector: "Banca",
      source: "ciclo-software/ficha-comercial-modernizacion-banca.html",
      moment: "Preparar conversación sectorial",
      note: "Familiar de trabajo de Modernización; no equivale al deck corporativo de Banca retirado. Confirmar su vigencia y condición de uso."
    },
    {
      id: "software-modernizacion-sector-aapp",
      title: "Ficha comercial · Modernización · Administración pública",
      type: "Ficha comercial sectorial",
      practice: "software-development",
      subpractice: "modernizacion",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Jorge",
      sector: "Administración pública",
      source: "ciclo-software/ficha-comercial-modernizacion-aapp.html",
      moment: "Preparar conversación sectorial",
      note: "Familiar de trabajo de Modernización. Confirmar vigencia, referencias y condición de uso antes de compartir."
    },
    {
      id: "software-modernizacion-sector-industria",
      title: "Ficha comercial · Modernización · Industria",
      type: "Ficha comercial sectorial",
      practice: "software-development",
      subpractice: "modernizacion",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Jorge",
      sector: "Industria",
      source: "ciclo-software/ficha-comercial-modernizacion-industria.html",
      moment: "Preparar conversación sectorial",
      note: "Familiar de trabajo de Modernización. Confirmar vigencia, referencias y condición de uso antes de compartir."
    },
    {
      id: "software-modernizacion-sector-telco",
      title: "Ficha comercial · Modernización · Telco",
      type: "Ficha comercial sectorial",
      practice: "software-development",
      subpractice: "modernizacion",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Jorge",
      sector: "Telecomunicaciones",
      source: "ciclo-software/ficha-comercial-modernizacion-telco.html",
      moment: "Preparar conversación sectorial",
      note: "Familiar de trabajo de Modernización. Confirmar vigencia, referencias y condición de uso antes de compartir."
    },
    {
      id: "software-pains-mantenimiento",
      title: "Mapa de pains · Mantenimiento Evolutivo",
      type: "Guía de discovery",
      practice: "software-development",
      subpractice: "mantenimiento",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Jorge",
      source: "ciclo-software/mapa-pains-mantenimiento.html",
      moment: "Preparar reunión",
      note: "Material interno para escuchar y contrastar; no diagnostica una situación sin evidencia."
    },
    {
      id: "software-pains-asistencia",
      title: "Mapa de pains · Asistencia Técnica",
      type: "Guía de discovery",
      practice: "software-development",
      subpractice: "asistencia-tecnica",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Jorge",
      source: "ciclo-software/mapa-pains-asistencia-tecnica.html",
      moment: "Preparar reunión",
      note: "Material interno para estructurar discovery antes de hablar de capacidad o alcance."
    },
    {
      id: "software-referencias-jorge",
      title: "Repositorio interno · referencias Software Engineering",
      type: "Repositorio de referencias",
      practice: "software-development",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Jorge",
      source: "automatizacion/jorge/referencias-jorge-herrero.md",
      moment: "Validar una referencia",
      note: "Distingue uso en presentación, envío formal, cifras internas y condiciones por caso. No es un activo para cliente."
    },
    {
      id: "dataai-mutua-preread",
      title: "Data & AI · Mutua · pre-read",
      type: "Pre-read / caso",
      practice: "data-ai",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Daniela",
      source: "data-intelligence/decks/entelgy-dataai-mutua-preread.html",
      moment: "Aportar prueba",
      note: "Material de referencia. Confirmar permiso, vigencia y encuadre antes de citar o compartir."
    },
    {
      id: "dataai-previo",
      title: "Data & AI · previo comercial",
      type: "Guía interna",
      practice: "data-ai",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Daniela",
      source: "data-intelligence/previo-datos.html",
      moment: "Preparar reunión",
      note: "Contexto editorial para preparar la conversación; no es una pieza cliente."
    },
    {
      id: "dataai-analisis-competencia",
      title: "Data & AI · análisis de competencia y comunicación",
      type: "Análisis interno",
      practice: "data-ai",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Daniela",
      source: "data-intelligence/analisis-competencia-comunicacion.html",
      moment: "Preparar posicionamiento",
      note: "Uso interno para afinar el posicionamiento; no debe enviarse ni citarse ante cliente."
    },
    {
      id: "smartops-workplace-ficha",
      title: "Ficha de servicio · SmartOPS Workplace",
      type: "Ficha de servicio",
      practice: "smart-operations",
      subpractice: "smartops-workplace",
      audience: "Cliente",
      usage: "cliente",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/fichas/ficha-smartops-desktop.html",
      moment: "Profundizar solución",
      note: "Ficha de servicio existente; confirmar la edición vigente antes de enviarla."
    },
    {
      id: "smartops-infra-ficha",
      title: "Ficha de servicio · SmartOPS Infra",
      type: "Ficha de servicio",
      practice: "smart-operations",
      subpractice: "smartops-infra",
      audience: "Cliente",
      usage: "cliente",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/fichas/ficha-smartops-infra.html",
      moment: "Profundizar solución",
      note: "Ficha de servicio existente; confirmar la edición vigente antes de enviarla."
    },
    {
      id: "smartops-pains-infra",
      title: "Mapa de pains · Infraestructura",
      type: "Guía de discovery",
      practice: "smart-operations",
      subpractice: "smartops-infra",
      audience: "Comercial",
      usage: "interno",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/mapa-pains-infra.html",
      moment: "Preparar reunión",
      note: "Guía interna de discovery. Sirve para contrastar señales, no para diagnosticar sin evidencia."
    },
    {
      id: "smartops-case-navantia",
      title: "Caso de éxito · Navantia",
      type: "Referencia",
      practice: "smart-operations",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/casos-exito/originales/Caso_Exito_NAVANTIA.pptx",
      moment: "Aportar prueba",
      note: "Caso localizado. Confirmar permiso, sector, resultado y condición de uso antes de citarlo."
    },
    {
      id: "smartops-case-moodle-profuturo",
      title: "Caso de éxito · Moodle ProFuturo",
      type: "Referencia",
      practice: "smart-operations",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/casos-exito/originales/Caso_Exito_Moodle_ProFuturo.pptx",
      moment: "Aportar prueba",
      note: "Caso localizado. Confirmar permiso, sector, resultado y condición de uso antes de citarlo."
    },
    {
      id: "smartops-case-izenpe",
      title: "Caso de éxito · IZENPE",
      type: "Referencia",
      practice: "smart-operations",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/casos-exito/originales/Caso_Exito_IZENPE.pptx",
      moment: "Aportar prueba",
      note: "Caso localizado. Confirmar permiso, sector, resultado y condición de uso antes de citarlo."
    },
    {
      id: "smartops-case-educacion-ejie",
      title: "Caso de éxito · Educación EJIE",
      type: "Referencia",
      practice: "smart-operations",
      audience: "Comercial",
      usage: "validacion",
      status: "revisar",
      owner: "Amador",
      source: "digital-workplace/casos-exito/originales/Caso_Exito_Educacion EJIE.pptx",
      moment: "Aportar prueba",
      note: "Caso localizado. Confirmar permiso, sector, resultado y condición de uso antes de citarlo."
    }
  ].forEach(upsert);

  /* No heredamos la sexta práctica: el taxonomy ya reasignó a Carla. */
  assets.forEach(function (asset) {
    normalize(asset);
    if (asset.practice === "automation-rpa") {
      asset.practice = "process-intelligence";
      asset.subpractice = "process-automation-ai";
    }
  });

  catalog.catalogReconciliationVersion = "1.0.0";
  catalog.catalogReconciliationPolicy = "Cada activo heredado se mantiene visible, archivado o retirado con procedencia y regla de uso; ningún estado de inventario equivale por sí solo a permiso de citabilidad.";
  window.HIPATIA_CATALOG_RECONCILIATION = {
    version: "1.0.0",
    cataloguedAt: CATALOGUE_DATE,
    get: function (id) { return (catalog.assets || []).filter(function (asset) { return asset.id === id; })[0] || null; },
    archived: function () { return (catalog.archivedAssets || []).concat(catalog.retiredAssets || []); }
  };
}(window));
