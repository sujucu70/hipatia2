(function () {
  "use strict";

  function addStyles() {
    if (document.getElementById("hipatia-corporate-message-styles")) return;
    var style = document.createElement("style");
    style.id = "hipatia-corporate-message-styles";
    style.textContent =
      ".why-tension{display:grid;grid-template-columns:.72fr 1.28fr;gap:0;margin-bottom:10px;color:var(--white);background:var(--ink);box-shadow:8px 8px 0 rgba(235,104,76,.38)}" +
      ".why-number{padding:25px;background:var(--coral)}.why-number .micro{color:rgba(255,255,255,.76)}.why-number strong{display:block;margin-top:14px;font:500 clamp(64px,8vw,106px)/.78 var(--serif);letter-spacing:-.08em}.why-number span{display:block;margin-top:16px;font-size:12px;line-height:1.45}" +
      ".why-explanation{padding:26px 29px}.why-explanation h3{max-width:690px;margin:7px 0 13px;font-size:34px;line-height:1.02;letter-spacing:-.055em}.why-explanation>p{max-width:720px;margin:0;color:#d9e2e7;font-size:13px;line-height:1.55}.pillar-rail{display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin-top:24px}.pillar-rail span{padding:7px 9px;border:1px solid rgba(255,255,255,.26);color:var(--white);font:500 9px var(--mono);letter-spacing:.06em;text-transform:uppercase}.pillar-rail span:first-child{color:var(--yellow);border-color:var(--yellow)}.pillar-rail i{color:var(--coral);font-style:normal;font-size:16px}" +
      ".identity h3{max-width:250px}.identity article:first-child .story-num{color:var(--coral)}.identity article:nth-child(2){background:#ece9f5}.identity article:nth-child(2) .story-num{color:#5b4790}.identity article:nth-child(3){color:var(--white);background:var(--ink)}.identity article:nth-child(3) .story-num{color:var(--yellow)}.identity article:nth-child(3) p{color:#d5dfe5}" +
      "@media(max-width:640px){.why-tension{grid-template-columns:1fr}.why-number{padding:23px}.why-number strong{font-size:75px}.why-explanation{padding:24px 22px}.why-explanation h3{font-size:31px}.pillar-rail{gap:5px}}";
    document.head.appendChild(style);
  }

  function keyMessageMarkup() {
    return '<article class="why-tension"><div class="why-number"><span class="micro">La tensión de partida</span><strong>≈70%</strong><span>de las transformaciones no alcanza el éxito esperado.</span></div><div class="why-explanation"><div class="eyebrow" style="color:var(--yellow)">La tecnología sola no falla; se queda corta.</div><h3>Desplegar tecnología es fácil. Conseguir que mueva la cuenta de resultados no.</h3><p>El problema aparece cuando la solución no encaja con el proceso que debe mejorar, las personas que tienen que adoptarla o la cultura que debe sostenerla. Ahí es donde se pierde el impacto.</p><div class="pillar-rail"><span>Tecnología</span><i>×</i><span>Procesos</span><i>×</i><span>Personas</span><i>×</i><span>Cultura</span></div></div></article>';
  }

  function enhance() {
    var stage = document.querySelector("#app [data-corporate-stage]");
    if (!stage || stage.dataset.keyMessage === "true") return;
    var hero = stage.querySelector(".story-hero");
    var section = hero && hero.nextElementSibling;
    if (!section || !section.classList.contains("story-section")) return;
    var head = section.querySelector(".story-head");
    var grid = section.querySelector(".story-grid.identity");
    if (!head || !grid) return;
    stage.dataset.keyMessage = "true";
    head.querySelector(".eyebrow").textContent = "Por qué Entelgy";
    head.querySelector("h2").textContent = "La diferencia está entre desplegar y conseguir impacto.";
    head.querySelector("p").textContent = "Entelgy no presenta la tecnología como el fin de la conversación: la conecta siempre con los otros tres pilares que determinan si una transformación funciona.";
    grid.insertAdjacentHTML("beforebegin", keyMessageMarkup());
    grid.innerHTML =
      '<article><span class="story-num">01 · ADN en entornos críticos</span><h3>Transformamos donde el cambio tiene que funcionar.</h3><p>Continuidad, regulación, operación y negocio no esperan al final del proyecto. Por eso el contexto real se trabaja desde el inicio.</p></article>' +
      '<article><span class="story-num">02 · Los cuatro pilares</span><h3>Tecnología cruzada con procesos, personas y cultura.</h3><p>No tratamos adopción, rediseño o gobierno como añadidos. Forman parte de la solución que se diseña y se lleva a producción.</p></article>' +
      '<article><span class="story-num">03 · Compromiso</span><h3>Respondemos del impacto, no sólo de la entrega.</h3><p>El trabajo se mide por menos coste de operar, productividad real, riesgo bajo control y valor que permanece cuando el proyecto termina.</p></article>';
  }

  function install() {
    addStyles();
    enhance();
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
