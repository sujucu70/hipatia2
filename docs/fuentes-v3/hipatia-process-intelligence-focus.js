(function () {
  "use strict";

  var focus = "process-mining";

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character];
    });
  }

  function setText(node, value) {
    if (node && node.textContent !== value) node.textContent = value;
  }

  function data() {
    return window.HIPATIA_DATA || { assets: [] };
  }

  function focusInfo() {
    return focus === "process-automation-ai" ? {
      id: "process-automation-ai",
      owner: "Carla",
      title: "Automatización de procesos y agentes IA",
      statement: "Rediseñamos el proceso antes de automatizarlo y aplicamos RPA o agentes IA donde reducen trabajo repetitivo, elevan calidad y dejan capacidad instalada.",
      question: "¿Qué trabajo repetitivo consume capacidad y merece rediseñarse antes de automatizarlo o asistirlo con IA?",
      next: "Confirmar volumen, excepciones y criterio de valor antes de decidir la automatización o el agente adecuado.",
      note: "La automatización es el siguiente paso cuando el proceso y su prioridad están suficientemente claros."
    } : {
      id: "process-mining",
      owner: "Carmen",
      title: "Inteligencia de procesos · Process Mining",
      statement: "Convertimos trazas operativas en una lectura compartida de cómo funciona el proceso, dónde se pierde valor y qué cambio merece priorizarse.",
      question: "¿Qué proceso relevante se gestiona hoy con más intuición que evidencia?",
      next: "Seleccionar un proceso y validar qué datos permiten leer su realidad operativa antes de decidir cómo mejorarlo.",
      note: "La evidencia permite decidir qué simplificar, qué automatizar y qué no conviene tocar todavía."
    };
  }

  function focusAssets() {
    return (data().assets || []).filter(function (asset) {
      return asset.practice === "process-intelligence" && asset.subpractice === focus;
    });
  }

  function assetCards() {
    return focusAssets().map(function (asset) {
      return '<button class="work-asset" data-asset="' + esc(asset.id) + '"><span class="asset-kind">' + esc(asset.moment) + '</span><h3>' + esc(asset.title) + '</h3><p>' + esc(asset.note) + '</p><span class="text-button">Ver ficha de uso →</span></button>';
    }).join("");
  }

  function focusControl() {
    var info = focusInfo();
    return '<section class="process-focus" data-process-focus-control="true" data-focus="' + esc(info.id) + '"><span class="micro">Ángulo de Process Intelligence</span><div><button type="button" data-process-focus="process-mining"' + (focus === "process-mining" ? ' class="active"' : '') + '><b>01</b><span>Entender el proceso<small>Carmen · Mining</small></span></button><button type="button" data-process-focus="process-automation-ai"' + (focus === "process-automation-ai" ? ' class="active"' : '') + '><b>02</b><span>Automatizar y asistir<small>Carla · RPA + agentes IA</small></span></button></div><p>' + esc(info.note) + '</p></section>';
  }

  function explicitProcessFocus(app) {
    var practice = app && app.querySelector("#workPractice");
    var subpractice = app && app.querySelector("#workSubpractice");
    var value = subpractice ? subpractice.value : "";
    if (!practice || practice.value !== "process-intelligence") return "";
    return value === "process-mining" || value === "process-automation-ai" ? value : "";
  }

  function isProcessWorkbench(app) {
    return !!explicitProcessFocus(app);
  }

  function applyWorkbench(app) {
    var selectedFocus = explicitProcessFocus(app);
    if (!selectedFocus) return;
    focus = selectedFocus;
    var info = focusInfo();
    var side = app.querySelector(".work-side");
    var oldControl = side && side.querySelector("[data-process-focus-control]");
    if (side) {
      if (oldControl && oldControl.dataset.focus !== info.id) oldControl.outerHTML = focusControl();
      else if (!oldControl) {
        var legend = side.querySelector(".legend");
        if (legend) legend.insertAdjacentHTML("beforebegin", focusControl());
      }
    }

    var expert = app.querySelector(".expert-card");
    if (expert) {
      setText(expert.querySelector("h3"), info.owner);
      setText(expert.querySelector("p"), "Especialista · " + info.title);
    }

    var prompt = app.querySelector(".argument-prompt");
    if (prompt) {
      setText(prompt.querySelector("p"), info.note);
      setText(prompt.querySelector(".quote"), "“" + info.question + "”");
    }

    setText(app.querySelector(".argument-grid .statement"), info.statement);
    setText(app.querySelector(".argument-grid .subcopy"), "Este es el ángulo de la subpráctica elegida; se contrasta siempre con el contexto real de la oportunidad.");
    setText(app.querySelector(".question-grid .question:first-child span"), info.question);
    setText(app.querySelector(".next-strip strong"), info.next);

    var assets = app.querySelector(".assets-grid");
    if (assets && assets.dataset.processFocus !== info.id) {
      assets.innerHTML = assetCards();
      assets.dataset.processFocus = info.id;
    }
    var note = app.querySelector(".work-note");
    if (note) {
      var noteText = "Materiales de " + info.owner + ". Esta selección mantiene visible el ángulo de la conversación; la práctica sigue siendo una sola: Process Intelligence.";
      if (note.textContent !== noteText) note.innerHTML = "<b>Materiales de " + esc(info.owner) + ".</b> Esta selección mantiene visible el ángulo de la conversación; la práctica sigue siendo una sola: Process Intelligence.";
    }
  }

  function enhancePracticeView(app) {
    var activeDoor = app.querySelector("#practice-angle[data-subpractice]");
    if (activeDoor && activeDoor.getAttribute("data-subpractice")) return;
    var hero = app.querySelector(".practice-hero h1");
    var area = app.querySelector(".subpractice-area");
    if (!hero || hero.textContent !== "Process Intelligence" || !area || area.querySelector(".process-practice-bridge")) return;
    area.insertAdjacentHTML("beforeend", '<div class="process-practice-bridge"><span>INTELIGENCIA DE PROCESOS · CARMEN</span><i>→</i><span>AUTOMATIZACIÓN Y AGENTES IA · CARLA</span><p>Una única práctica: primero entender el proceso; después decidir qué simplificar, automatizar o asistir.</p></div>');
  }

  function enhance() {
    var app = document.getElementById("app");
    if (!app) return;
    enhancePracticeView(app);
    applyWorkbench(app);
  }

  function addStyles() {
    if (document.getElementById("hipatia-process-focus-styles")) return;
    var style = document.createElement("style");
    style.id = "hipatia-process-focus-styles";
    style.textContent =
      ".process-focus{margin:22px 0;padding:15px;border:1px solid rgba(255,255,255,.17);background:rgba(255,255,255,.055)}.process-focus>.micro{color:var(--yellow)}.process-focus>div{display:grid;gap:6px;margin-top:10px}.process-focus button{display:grid;grid-template-columns:22px 1fr;gap:9px;align-items:start;padding:10px;color:#d5dfe5;border:1px solid transparent;background:transparent;text-align:left}.process-focus button:hover,.process-focus button.active{color:var(--white);border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.09)}.process-focus button b{color:var(--yellow);font:500 9px var(--mono);letter-spacing:.05em}.process-focus button span{font:500 14px/1.05 var(--serif);letter-spacing:-.025em}.process-focus button small{display:block;margin-top:4px;color:#c9d4dc;font:500 8px var(--mono);letter-spacing:.04em;text-transform:uppercase}.process-focus>p{margin:12px 0 0;color:#c9d4dc;font-size:10px;line-height:1.42}.process-practice-bridge{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;margin-top:14px;padding:15px 17px;color:#342a50;border:1px solid #d8d0eb;background:#ece9f5}.process-practice-bridge span{font:500 9px var(--mono);letter-spacing:.06em;text-transform:uppercase}.process-practice-bridge i{color:var(--coral);font:500 22px/1 var(--serif);font-style:normal}.process-practice-bridge p{grid-column:1/-1;margin:0;color:#4c4561;font-size:11px;line-height:1.45}@media(max-width:640px){.process-practice-bridge{grid-template-columns:1fr}.process-practice-bridge i{transform:rotate(90deg)}.process-practice-bridge p{grid-column:auto}}";
    document.head.appendChild(style);
  }

  function readFocusFromTarget(target) {
    var subpractice = target.closest("[data-subpractice]");
    if (subpractice && (subpractice.dataset.subpractice === "process-mining" || subpractice.dataset.subpractice === "process-automation-ai")) {
      focus = subpractice.dataset.subpractice;
      return;
    }
    var asset = target.closest("[data-use-asset]");
    if (asset && /^automation-/.test(asset.dataset.useAsset || "")) focus = "process-automation-ai";
  }

  function install() {
    addStyles();
    enhance();
    document.addEventListener("click", function (event) {
      readFocusFromTarget(event.target);
    }, true);
    document.addEventListener("click", function (event) {
      var button = event.target.closest("[data-process-focus]");
      if (!button) return;
      focus = button.dataset.processFocus === "process-automation-ai" ? "process-automation-ai" : "process-mining";
      var app = document.getElementById("app");
      var select = app && app.querySelector("#workSubpractice");
      if (!select) return;
      if (select.value === focus) {
        applyWorkbench(app);
        return;
      }
      select.value = focus;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });
    var app = document.getElementById("app");
    if (!app) return;
    var scheduled = false;
    new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        enhance();
      });
    }).observe(app, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", install);
  else install();
}());


