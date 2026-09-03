(function () {
  "use strict";

  function byId(items, id) {
    return (items || []).filter(function (item) { return item.id === id; })[0];
  }

  function applyTaxonomy() {
    var catalog = window.HIPATIA_DATA;
    if (!catalog || catalog.taxonomyVersion === "five-practices") return;

    var process = byId(catalog.practices, "process-intelligence");
    if (!process) return;

    process.order = "01";
    process.owner = "Carmen · Carla";
    process.short = "Inteligencia y automatización de procesos: comprender cómo funcionan, mejorarlos y llevarlos a operación con RPA y agentes IA.";
    process.statement = "Hacemos visible cómo funciona un proceso y dónde pierde valor; a partir de esa evidencia, simplificamos, automatizamos y acompañamos su operación.";
    process.audience = "Operaciones, transformación, procesos, CFO, servicios compartidos y responsables de eficiencia.";
    process.question = "¿Qué proceso relevante necesita entenderse con evidencia antes de decidir cómo mejorarlo, automatizarlo o asistirlo con IA?";
    process.next = "Elegir un proceso, contrastar sus datos y decidir si el siguiente paso es entenderlo, rediseñarlo o automatizarlo.";
    process.subpractices = [
      {
        id: "process-mining",
        name: "Inteligencia de procesos · Process Mining",
        short: "Carmen · entender qué ocurre realmente, dónde se pierde valor y qué conviene priorizar."
      },
      {
        id: "process-automation-ai",
        name: "Automatización de procesos y agentes IA",
        short: "Carla · rediseñar, automatizar y asistir el trabajo repetitivo con criterio de negocio."
      }
    ];
    process.assets = [
      "process-deck", "process-onepager", "process-ficha", "process-pains",
      "automation-deck", "automation-onepager", "automation-ficha"
    ];

    var smart = byId(catalog.practices, "smart-operations");
    var software = byId(catalog.practices, "software-development");
    var dataAi = byId(catalog.practices, "data-ai");
    var digitalChange = byId(catalog.practices, "ia-digital-change");
    if (software) software.order = "02";
    if (dataAi) dataAi.order = "03";
    if (smart) smart.order = "04";
    if (digitalChange) digitalChange.order = "05";

    catalog.practices = [process, software, dataAi, smart, digitalChange].filter(Boolean);

    (catalog.assets || []).forEach(function (asset) {
      if (asset.practice === "automation-rpa") {
        asset.practice = "process-intelligence";
        asset.subpractice = "process-automation-ai";
      }
      if (asset.practice === "process-intelligence" && !asset.subpractice) asset.subpractice = "process-mining";
    });

    (catalog.updates || []).forEach(function (update) {
      if (update.when === "Oferta") {
        update.title = "Las cinco prácticas ya tienen una estructura común";
        update.text = "Process Intelligence reúne inteligencia, automatización de procesos y agentes IA bajo una sola práctica.";
      }
    });
    catalog.taxonomyVersion = "five-practices";
  }

  function replacePracticeCount(node) {
    if (!node || !node.nodeValue) return;
    node.nodeValue = node.nodeValue
      .replace(/Seis prácticas/g, "Cinco prácticas")
      .replace(/seis prácticas/g, "cinco prácticas")
      .replace(/6 prácticas/g, "5 prácticas");
  }

  function setText(node, value) {
    if (node && node.textContent !== value) node.textContent = value;
  }

  function refineCorporateCopy(app) {
    var corporate = app.querySelector("[data-corporate-conversation]");
    if (!corporate) return;
    var isLatam = !!corporate.querySelector("[data-corporate-conversation-market=latam].active");
    var title = corporate.querySelector(".conversation-section .entry-map") && corporate.querySelector(".conversation-section .entry-map").parentNode.querySelector(".conversation-head h2");
    var taxonomy = corporate.querySelector(".taxonomy-note");

    if (!isLatam) {
      var hero = corporate.querySelector(".conversation-hero > p");
      setText(hero, "La historia que conecta cinco prácticas en una sola propuesta de valor, antes de hablar de una solución concreta.");
      setText(title, "Cinco prácticas. Una oferta coherente.");
      if (taxonomy) {
        setText(taxonomy.querySelector("b"), "Una oferta, una estructura");
        setText(taxonomy.querySelector("p"), "Process Intelligence reúne dos subprácticas: Inteligencia de procesos / Process Mining y Automatización de procesos y agentes IA. La oferta comercial y el portal se estructuran con las mismas cinco prácticas.");
        setText(taxonomy.querySelector("button"), "Ver las cinco prácticas →");
      }
      return;
    }

    if (taxonomy) {
      setText(taxonomy.querySelector("b"), "Portfolio LATAM");
      setText(taxonomy.querySelector("p"), "El portal mantiene sus cinco prácticas. En LATAM, Ciberseguridad se presenta como una capacidad regional adicional; Automatización/RPA queda integrada en Process Intelligence.");
      setText(taxonomy.querySelector("button"), "Ver las cinco prácticas →");
    }
    var rows = corporate.querySelectorAll(".entry-row");
    if (rows.length === 6) {
      var cyber = rows[5];
      cyber.classList.add("regional-capability");
      setText(cyber.querySelector(".entry-index"), "REGIÓN");
    }
  }

  function refineVisibleCopy() {
    var app = document.getElementById("app");
    if (!app) return;
    var walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT);
    var current;
    while ((current = walker.nextNode())) replacePracticeCount(current);
    refineCorporateCopy(app);
  }

  function addStyles() {
    if (document.getElementById("hipatia-five-practice-styles")) return;
    var style = document.createElement("style");
    style.id = "hipatia-five-practice-styles";
    style.textContent = "#app [data-corporate-conversation] .entry-row.regional-capability{margin-top:10px;padding:17px;border:1px dashed #b7d8c9;background:#e0f0e7}#app [data-corporate-conversation] .entry-row.regional-capability .entry-index{color:#2d7150;font-size:8px}";
    document.head.appendChild(style);
  }

  function install() {
    applyTaxonomy();
    addStyles();
    refineVisibleCopy();
    var app = document.getElementById("app");
    if (!app) return;
    var scheduled = false;
    new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        refineVisibleCopy();
      });
    }).observe(app, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", install);
  else install();
}());
