(function () {
  "use strict";

  function addStyles() {
    if (document.getElementById("hipatia-method-cycle-styles")) return;
    var style = document.createElement("style");
    style.id = "hipatia-method-cycle-styles";
    style.textContent =
      ".method-journey[data-method-cycle=\"true\"] .method-step:not(:last-child):after{position:absolute;z-index:3;top:8px;right:-17px;color:var(--coral);font:500 20px/1 var(--serif);content:\"→\"}.method-cycle-return{position:relative;min-height:73px;margin:0 5px;padding:43px 52px 0;color:#5b4790}.method-cycle-return:before{position:absolute;top:-16px;right:10%;left:10%;height:30px;border-right:2px solid var(--coral);border-bottom:2px solid var(--coral);border-left:2px solid var(--coral);content:\"\"}.method-cycle-arrow{position:absolute;top:3px;left:9%;color:var(--coral);font:500 23px/1 var(--serif)}.method-cycle-return p{max-width:560px;margin:0 auto;text-align:center;font-size:11px;line-height:1.45}.method-cycle-return p b{color:var(--coral);font:500 9px var(--mono);letter-spacing:.07em;text-transform:uppercase}.method-cycle-return i{position:absolute;right:9%;bottom:1px;color:#5b4790;font:500 26px/1 var(--serif);font-style:normal}" +
      "@media(max-width:960px){.method-journey[data-method-cycle=\"true\"] .method-step:not(:last-child):after{display:none}.method-cycle-return{min-height:68px;padding-top:40px}}@media(max-width:640px){.method-cycle-return{min-height:81px;padding:43px 31px 0}.method-cycle-return:before{right:8%;left:8%}.method-cycle-arrow{left:7%}.method-cycle-return i{right:7%}}";
    document.head.appendChild(style);
  }

  function addCycle() {
    var journey = document.querySelector("#app [data-corporate-conversation] .method-journey");
    if (!journey || journey.dataset.methodCycle === "true") return;
    journey.dataset.methodCycle = "true";
    journey.insertAdjacentHTML(
      "afterend",
      '<div class="method-cycle-return" aria-label="Servicio continuo y mejora continua: medir alimenta un nuevo diagnóstico"><span class="method-cycle-arrow" aria-hidden="true">←</span><p><b>Servicio continuo · mejora continua</b><br>Lo medido devuelve aprendizaje al siguiente diagnóstico: el método no termina con la entrega.</p><i aria-hidden="true">↺</i></div>'
    );
  }

  function install() {
    addStyles();
    addCycle();
    var app = document.getElementById("app");
    if (!app) return;
    var scheduled = false;
    new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        addCycle();
      });
    }).observe(app, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", install);
  else install();
}());
