(function () {
  "use strict";

  var market = "global";
  var activeQuestion = "difference";

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character];
    });
  }

  function data() {
    return window.HIPATIA_DATA || { practices: [], assets: [] };
  }

  function addStyles() {
    if (document.getElementById("hipatia-corporate-conversation-styles")) return;
    var style = document.createElement("style");
    style.id = "hipatia-corporate-conversation-styles";
    style.textContent =
      ".corporate-conversation{padding-bottom:28px}.conversation-market{display:flex;align-items:center;justify-content:space-between;gap:20px;margin:0 0 25px}.conversation-market p{max-width:560px;margin:0;color:var(--ink-soft);font-size:12px;line-height:1.52}.conversation-switch{display:inline-flex;padding:4px;border:1px solid var(--line);background:var(--white)}.conversation-switch button{padding:9px 12px;color:var(--ink-soft);border:0;background:transparent;font:500 9px var(--mono);letter-spacing:.07em;text-transform:uppercase}.conversation-switch button.active{color:var(--white);background:var(--ink)}" +
      ".conversation-hero{position:relative;overflow:hidden;padding:48px 48px 0;color:var(--white);background:var(--ink);box-shadow:12px 12px 0 var(--coral)}.conversation-hero:before{position:absolute;top:-180px;right:-150px;width:520px;height:520px;border:1px solid rgba(255,255,255,.16);border-radius:50%;box-shadow:0 0 0 55px rgba(255,255,255,.025),0 0 0 112px rgba(118,82,189,.16);content:\"\"}.conversation-hero>*{position:relative;z-index:1}.conversation-kicker{display:flex;align-items:center;gap:10px;color:#d9d0ed;font:500 10px var(--mono);letter-spacing:.08em;text-transform:uppercase}.conversation-kicker:before{width:28px;height:1px;background:var(--coral);content:\"\"}.conversation-hero h1{max-width:810px;margin:20px 0 14px;font-size:clamp(48px,6.1vw,86px);line-height:.93;letter-spacing:-.067em}.conversation-hero h1 em{color:var(--yellow);font-weight:400}.conversation-hero>p{max-width:720px;margin:0;color:#d5dfe5;font-size:18px;line-height:1.48}.conversation-minute{display:grid;grid-template-columns:.36fr 1.64fr;gap:25px;margin:41px -48px 0;padding:25px 48px 29px;border-top:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.055)}.minute-label{color:var(--yellow);font:500 10px var(--mono);letter-spacing:.08em;text-transform:uppercase}.minute-label span{display:block;margin-top:12px;color:#d9e2e7;font:500 22px/1.03 var(--serif);letter-spacing:-.035em;text-transform:none}.minute-copy{max-width:775px;margin:0;color:var(--white);font:500 clamp(21px,2.2vw,30px)/1.16 var(--serif);letter-spacing:-.04em}.minute-copy b{color:var(--yellow);font-weight:500}" +
      ".conversation-section{margin-top:78px}.conversation-head{display:flex;align-items:end;justify-content:space-between;gap:28px;margin-bottom:22px}.conversation-head h2{max-width:735px;margin:7px 0 0;font-size:39px;line-height:1;letter-spacing:-.058em}.conversation-head p{max-width:335px;margin:0;color:var(--ink-soft);font-size:13px;line-height:1.52}.conversation-questions{display:grid;grid-template-columns:.72fr 1.28fr;border:1px solid var(--line);background:var(--white)}.question-list{padding:13px;border-right:1px solid var(--line);background:#ece9f5}.conversation-question{display:block;width:100%;padding:16px 15px;color:var(--ink);border:0;border-bottom:1px solid rgba(52,42,80,.16);background:transparent;text-align:left}.conversation-question:last-child{border-bottom:0}.conversation-question:hover,.conversation-question.active{color:var(--white);background:var(--ink)}.conversation-question span{display:block;color:inherit;font:500 9px var(--mono);letter-spacing:.07em;text-transform:uppercase;opacity:.72}.conversation-question strong{display:block;margin-top:6px;font:500 22px/1 var(--serif);letter-spacing:-.04em}.conversation-answer{display:flex;flex-direction:column;min-height:300px;padding:28px 32px;animation:corporateAnswer .23s ease both}.conversation-answer .micro{color:var(--violet)}.conversation-answer h3{max-width:620px;margin:22px 0 13px;font-size:clamp(30px,3.2vw,45px);line-height:.98;letter-spacing:-.062em}.conversation-answer p{max-width:680px;margin:0;color:var(--ink-soft);font-size:14px;line-height:1.58}.conversation-answer .answer-note{margin-top:auto;padding-top:24px;color:var(--coral);font:500 10px var(--mono);letter-spacing:.06em;text-transform:uppercase}@keyframes corporateAnswer{from{opacity:.35;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}" +
      ".impact-gap{display:grid;grid-template-columns:.72fr 1.28fr;margin-top:10px;color:var(--white);background:var(--ink);box-shadow:9px 9px 0 rgba(235,104,76,.35)}.impact-number{padding:29px;background:var(--coral)}.impact-number .micro{color:rgba(255,255,255,.77)}.impact-number strong{display:block;margin-top:17px;font:500 clamp(70px,8vw,108px)/.76 var(--serif);letter-spacing:-.08em}.impact-number span{display:block;max-width:180px;margin-top:16px;font-size:12px;line-height:1.45}.impact-copy{padding:30px 32px}.impact-copy .eyebrow{color:var(--yellow)}.impact-copy h3{max-width:710px;margin:12px 0 13px;font-size:34px;line-height:1.01;letter-spacing:-.058em}.impact-copy p{max-width:720px;margin:0;color:#d6e0e6;font-size:13px;line-height:1.57}.four-pillars{display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin-top:25px}.four-pillars span{padding:7px 9px;border:1px solid rgba(255,255,255,.27);font:500 9px var(--mono);letter-spacing:.06em;text-transform:uppercase}.four-pillars span:first-child{color:var(--yellow);border-color:var(--yellow)}.four-pillars i{color:var(--coral);font-style:normal;font-size:16px}" +
      ".method-frame{padding:31px;background:#ece9f5;border:1px solid #d8d0eb}.method-promise{max-width:835px;margin:0;color:#342a50;font:500 clamp(25px,3vw,35px)/1.12 var(--serif);letter-spacing:-.047em}.method-journey{position:relative;display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:28px}.method-journey:before{position:absolute;top:20px;right:0;left:0;height:1px;background:rgba(91,71,144,.25);content:\"\"}.method-step{position:relative;min-height:182px;padding:13px;background:var(--white);border-top:3px solid var(--violet)}.method-step b{position:relative;display:grid;place-items:center;width:16px;height:16px;color:var(--white);background:var(--violet);font:500 8px var(--mono)}.method-step h3{margin:25px 0 8px;font-size:25px;line-height:.96;letter-spacing:-.045em}.method-step p{margin:0;color:var(--ink-soft);font-size:10px;line-height:1.38}.method-step small{display:block;margin-top:17px;color:var(--coral);font:500 8px/1.35 var(--mono);letter-spacing:.055em;text-transform:uppercase}.method-rails{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}.method-rail{min-height:132px;padding:16px;color:var(--white);background:var(--ink)}.method-rail:nth-child(2){background:#2d7150}.method-rail:nth-child(3){background:#5b4790}.method-rail b{color:var(--yellow);font:500 9px var(--mono);letter-spacing:.07em;text-transform:uppercase}.method-rail h3{margin:25px 0 0;font-size:24px;line-height:.97;letter-spacing:-.045em}.method-rail p{margin:8px 0 0;color:#d5dfe5;font-size:10px;line-height:1.4}" +
      ".entry-map{border-top:1px solid var(--line)}.entry-row{display:grid;grid-template-columns:65px minmax(180px,.9fr) minmax(280px,1.45fr) auto;gap:20px;align-items:center;padding:21px 0;border-bottom:1px solid var(--line)}.entry-index{color:var(--violet);font:500 10px var(--mono);letter-spacing:.06em}.entry-row h3{margin:0;font-size:29px;line-height:.97;letter-spacing:-.052em}.entry-row p{margin:0;color:var(--ink-soft);font-size:12px;line-height:1.47}.entry-row button{padding:9px 11px;color:var(--ink);border:1px solid var(--ink);background:transparent;font:500 9px var(--mono);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}.entry-row button:hover{color:var(--white);background:var(--ink)}.taxonomy-note{display:grid;grid-template-columns:.68fr 1.32fr;gap:20px;margin-top:12px;padding:18px 20px;border:1px solid #b7d8c9;background:#e0f0e7;color:#194b37}.taxonomy-note b{font:500 10px var(--mono);letter-spacing:.07em;text-transform:uppercase}.taxonomy-note p{margin:0;font-size:12px;line-height:1.5}.taxonomy-note .text-button{align-self:start;color:#194b37}" +
      ".otg{display:grid;grid-template-columns:.75fr 1.25fr;margin-top:10px;color:var(--white);background:var(--ink);box-shadow:9px 9px 0 rgba(118,82,189,.22)}.otg-label{padding:29px;background:var(--coral)}.otg-label .micro{color:rgba(255,255,255,.75)}.otg-label h3{margin:40px 0 0;font-size:35px;line-height:.97;letter-spacing:-.06em}.otg-main{padding:29px 31px}.otg-main>p{max-width:700px;margin:0;color:#d5dfe5;font-size:14px;line-height:1.55}.otg-main>p b{color:var(--white)}.otg-phases{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:25px}.otg-phase{padding:13px;border:1px solid rgba(255,255,255,.18)}.otg-phase b{color:var(--yellow);font:500 9px var(--mono);letter-spacing:.07em;text-transform:uppercase}.otg-phase span{display:block;margin-top:16px;font:500 21px/1 var(--serif);letter-spacing:-.04em}.otg-capabilities{display:flex;flex-wrap:wrap;gap:7px;margin-top:18px}.otg-capabilities span{padding:6px 8px;border:1px solid rgba(255,255,255,.22);color:#d5dfe5;font:500 8px var(--mono);letter-spacing:.055em;text-transform:uppercase}" +
      ".proof-drawers{border-top:1px solid var(--line)}.proof-drawer{border-bottom:1px solid var(--line);background:var(--white)}.proof-drawer summary{display:grid;grid-template-columns:65px minmax(0,1fr) minmax(220px,.75fr) auto;gap:20px;align-items:center;padding:24px 0;cursor:pointer;list-style:none}.proof-drawer summary::-webkit-details-marker{display:none}.proof-index{color:var(--violet);font:500 10px var(--mono);letter-spacing:.07em}.proof-drawer h3{margin:0;font-size:31px;line-height:.98;letter-spacing:-.055em}.proof-drawer summary p{margin:0;color:var(--ink-soft);font-size:12px;line-height:1.47}.proof-drawer summary:after{color:var(--coral);font:500 19px/1 var(--serif);content:\"+\"}.proof-drawer[open] summary:after{content:\"−\"}.proof-body{padding:4px 0 29px;animation:corporateAnswer .2s ease both}.proof-body>p{max-width:790px;margin:0 0 17px;color:var(--ink-soft);font-size:12px;line-height:1.55}.proof-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line)}.proof-cell{min-height:142px;padding:17px;border-right:1px solid var(--line)}.proof-cell:last-child{border-right:0}.proof-cell b{display:block;color:var(--coral);font:500 25px/1 var(--serif);letter-spacing:-.055em}.proof-cell:first-child b{font-size:20px;line-height:1.08}.proof-cell span{display:block;margin-top:11px;color:var(--ink-soft);font-size:10px;line-height:1.45}.credential-list{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:9px}.credential-list div{padding:14px;border:1px solid #d8d0eb;background:#ece9f5}.credential-list b{display:block;color:#5b4790;font:500 9px var(--mono);letter-spacing:.065em;text-transform:uppercase}.credential-list p{margin:8px 0 0;color:#4c4561;font-size:11px;line-height:1.43}.sector-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.sector-card{min-height:152px;padding:16px;color:var(--white);background:var(--ink)}.sector-card:nth-child(2){background:#2d7150}.sector-card:nth-child(3){background:#5b4790}.sector-card:nth-child(4){background:var(--coral)}.sector-card b{color:var(--yellow);font:500 9px var(--mono);letter-spacing:.065em;text-transform:uppercase}.sector-card strong{display:block;margin-top:23px;font:500 27px/1 var(--serif);letter-spacing:-.05em}.sector-card span{display:block;margin-top:6px;color:#d8e1e5;font-size:10px;line-height:1.4}.reference-rule{margin-top:10px;padding:14px 16px;border:1px dashed #b8b0c6;color:var(--ink-soft);font-size:11px;line-height:1.5}.reference-rule b{color:var(--violet)}" +
      ".conversation-support{display:grid;grid-template-columns:.84fr 2.16fr;border:1px dashed #b8b0c6;background:var(--paper)}.support-label,.support-copy{padding:21px}.support-label{border-right:1px dashed #b8b0c6}.support-label b{display:block;color:var(--violet);font:500 10px var(--mono);letter-spacing:.07em;text-transform:uppercase}.support-label h3{margin:13px 0 0;font-size:27px;line-height:.98;letter-spacing:-.05em}.support-copy p{margin:0;color:var(--ink-soft);font-size:12px;line-height:1.55}.support-assets{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px}.support-asset{min-height:150px;padding:17px;border:1px solid var(--line);background:var(--white);color:var(--ink);text-align:left;transition:transform .18s ease,box-shadow .18s ease}.support-asset:hover{transform:translateY(-4px);box-shadow:var(--shadow)}.support-asset span{color:var(--violet);font:500 9px var(--mono);letter-spacing:.06em;text-transform:uppercase}.support-asset h3{margin:23px 0 6px;font-size:23px;line-height:.97;letter-spacing:-.045em}.support-asset p{margin:0;color:var(--ink-soft);font-size:10px;line-height:1.4}.support-asset small{display:block;margin-top:13px;color:var(--coral);font:500 8px var(--mono);letter-spacing:.055em;text-transform:uppercase}" +
      "@media(max-width:960px){.conversation-market{align-items:flex-start;flex-direction:column}.conversation-questions,.impact-gap,.otg{grid-template-columns:1fr}.question-list{border-right:0;border-bottom:1px solid var(--line)}.method-journey{grid-template-columns:repeat(3,1fr)}.method-rails,.proof-grid,.sector-grid{grid-template-columns:repeat(2,1fr)}.proof-cell:nth-child(2),.proof-cell:last-child{border-right:0}.proof-cell:nth-child(-n+2){border-bottom:1px solid var(--line)}.credential-list{grid-template-columns:1fr}.entry-row{grid-template-columns:56px minmax(165px,.8fr) minmax(230px,1.25fr) auto}.support-assets{grid-template-columns:repeat(2,1fr)}}@media(max-width:640px){.conversation-market p{font-size:11px}.conversation-switch{width:100%}.conversation-switch button{flex:1;padding:9px 5px;font-size:8px}.conversation-hero{padding:30px 23px 0;box-shadow:7px 7px 0 var(--coral)}.conversation-hero h1{font-size:50px}.conversation-hero>p{font-size:16px}.conversation-minute{grid-template-columns:1fr;gap:13px;margin:31px -23px 0;padding:21px 23px 24px}.minute-label span{display:inline;margin-left:6px;font-size:19px}.minute-copy{font-size:24px}.conversation-section{margin-top:51px}.conversation-head{display:grid;align-items:start;gap:12px}.conversation-head h2{font-size:34px}.conversation-questions{margin:0}.question-list{padding:7px}.conversation-question{padding:13px}.conversation-question strong{font-size:20px}.conversation-answer{min-height:270px;padding:23px}.conversation-answer h3{font-size:34px}.impact-number,.impact-copy{padding:24px 22px}.impact-number strong{font-size:76px}.impact-copy h3{font-size:31px}.method-frame{padding:21px}.method-promise{font-size:28px}.method-journey,.method-rails,.proof-grid,.sector-grid{grid-template-columns:1fr}.method-journey:before{display:none}.method-step{min-height:0}.method-step h3{margin:14px 0 6px}.method-step small{margin-top:10px}.method-rail{min-height:110px}.entry-row{grid-template-columns:43px 1fr;padding:20px 0}.entry-row p{grid-column:2}.entry-row button{grid-column:2;justify-self:start}.taxonomy-note{grid-template-columns:1fr}.otg-label,.otg-main{padding:23px}.otg-label h3{margin-top:23px;font-size:32px}.otg-phases{grid-template-columns:1fr}.proof-drawer summary{grid-template-columns:43px 1fr auto;padding:21px 0}.proof-drawer summary p{display:none}.proof-cell,.proof-cell:nth-child(2){border-right:0;border-bottom:1px solid var(--line)}.proof-cell:last-child{border-bottom:0}.support-label,.support-copy{padding:19px}.support-label{border-right:0;border-bottom:1px dashed #b8b0c6}.conversation-support{grid-template-columns:1fr}.support-assets{grid-template-columns:1fr}}";
    document.head.appendChild(style);
  }

  function marketCopy(isLatam) {
    return isLatam ? {
      label: "Versión regional · LATAM",
      hero: "El relato común para explicar Entelgy con el portfolio y la capacidad que hoy se ofrecen en LATAM.",
      minute: "Entelgy une tecnología, procesos, personas y cultura para que el cambio llegue a resultados. <b>No defendemos sólo una implementación:</b> acompañamos la adopción, la operación y el impacto en cada entorno crítico.",
      offerTitle: "Misma propuesta. Un portfolio LATAM propio.",
      offerText: "La manera de transformar es común; las capacidades que se activan responden a la composición regional de la oferta.",
      portfolio: [
        ["01", "Process Intelligence", "Procesos, minería y automatización con RPA e IA.", "process-intelligence"],
        ["02", "Ciclo de Software", "Mantenimiento, modernización y capacidad aumentada.", "software-development"],
        ["03", "Data & AI", "Datos, analítica, modelos y agentes en producción.", "data-ai"],
        ["04", "Smart Operations", "Workplace, infraestructura, cloud y operación preventiva.", "smart-operations"],
        ["05", "Digital Change", "Adopción, conocimiento y gobierno humano de la IA.", "ia-digital-change"],
        ["06", "Ciberseguridad", "Entelgy Security América: atacar, defender y gobernar el riesgo.", ""]
      ],
      taxonomy: "En LATAM, RPA se presenta dentro de Process Intelligence y Ciberseguridad se incorpora como capacidad propia. La navegación de Hipatia mantiene visible la oferta general sin mezclar ambas versiones.",
      primaryAsset: "corp-exec-latam"
    } : {
      label: "Versión corporativa · general",
      hero: "La historia que conecta seis prácticas en una sola propuesta de valor, antes de hablar de una solución concreta.",
      minute: "La mayoría de las transformaciones no falla por la tecnología; falla porque tecnología, procesos, personas y cultura no avanzan juntas. Entelgy trabaja esos cuatro pilares con un método común para que el cambio <b>llegue a resultados y se sostenga</b>.",
      offerTitle: "Cinco frentes corporativos. Una oferta operativa de seis prácticas.",
      offerText: "El método es común; el punto de entrada cambia según la tensión que tenga delante el cliente.",
      portfolio: [
        ["01", "Process Intelligence", "Ver dónde se pierde coste, tiempo o control antes de rediseñar y automatizar.", "process-intelligence"],
        ["02", "Ciclo de Software", "Evolucionar y modernizar aplicaciones críticas sin detener el negocio.", "software-development"],
        ["03", "Data & AI", "Convertir datos, modelos y agentes en decisiones y operación de valor.", "data-ai"],
        ["04", "Smart Operations", "Hacer que la experiencia digital y la infraestructura recuperen capacidad.", "smart-operations"],
        ["05", "Digital Change", "Conseguir que las personas adopten, gobiernen y aprovechen el cambio.", "ia-digital-change"]
      ],
      taxonomy: "El Executive Deck agrupa automatización dentro de Process Intelligence. Hipatia la conserva como sexta práctica —Automatización/RPA— para operar la oferta actual con claridad. Son dos vistas del mismo portfolio, no dos mensajes distintos.",
      primaryAsset: "corp-exec-global"
    };
  }

  function answers() {
    return {
      what: {
        eyebrow: "Respuesta breve · qué hace Entelgy",
        title: "Hacemos que la tecnología cambie cómo una organización opera y decide.",
        copy: "En entornos críticos, una solución solo tiene valor si el proceso mejora, las personas la adoptan y la organización puede sostenerla. Por eso conectamos tecnología, procesos, personas y cultura desde el principio.",
        note: "Una respuesta de 15 segundos para abrir la conversación."
      },
      difference: {
        eyebrow: "Respuesta breve · qué nos diferencia",
        title: "No respondemos sólo de implantar; respondemos de que el cambio funcione.",
        copy: "La tecnología rara vez es el único problema. La diferencia está en trabajar también los procesos, las personas y la cultura que determinan si una transformación llega a resultados o se queda en entrega.",
        note: "La idea que conviene que permanezca después de la conversación."
      },
      how: {
        eyebrow: "Respuesta breve · cómo lo hacemos",
        title: "Con un método que acompaña el cambio hasta que se puede medir y operar.",
        copy: "Entendemos la situación real, diseñamos un futuro gobernado, implantamos de forma integrada, preparamos la adopción y medimos el impacto. Gobierno, seguridad y operación acompañan todo el recorrido.",
        note: "Una forma de explicar por qué no es un proyecto tecnológico aislado."
      },
      offer: {
        eyebrow: "Respuesta breve · en qué ayudamos",
        title: "Entramos por la tensión que tiene el cliente, no por un catálogo de silos.",
        copy: "Procesos, software, datos e IA, operaciones o cambio: las prácticas son puntos de entrada a una misma forma de transformar. Se activa solo la combinación que la situación justifica.",
        note: "Después se concreta la práctica adecuada; no hace falta presentar las seis."
      }
    };
  }

  function answerMarkup() {
    var item = answers()[activeQuestion] || answers().difference;
    return '<div class="conversation-answer" data-conversation-answer="true"><span class="micro">' + esc(item.eyebrow) + '</span><h3>' + esc(item.title) + '</h3><p>' + esc(item.copy) + '</p><span class="answer-note">' + esc(item.note) + '</span></div>';
  }

  function questionButtons() {
    var items = [
      ["what", "01", "¿Qué hace Entelgy?"],
      ["difference", "02", "¿Qué nos diferencia?"],
      ["how", "03", "¿Cómo lo hacemos?"],
      ["offer", "04", "¿En qué podemos ayudar?"]
    ];
    return items.map(function (item) {
      return '<button type="button" class="conversation-question' + (activeQuestion === item[0] ? ' active' : '') + '" data-corporate-question="' + item[0] + '" aria-selected="' + (activeQuestion === item[0] ? 'true' : 'false') + '"><span>' + item[1] + ' · Una entrada al relato</span><strong>' + item[2] + '</strong></button>';
    }).join("");
  }

  function methodMarkup() {
    var steps = [
      ["01", "Entender", "Datos, sistemas, dependencias y riesgos tal como son.", "Evita: diseñar sobre supuestos."],
      ["02", "Diseñar", "Objetivo, arquitectura, caso de negocio y modelo de operación.", "Evita: una solución sin gobierno."],
      ["03", "Implantar", "Tecnología, integración, datos, seguridad y legado en producción.", "Evita: entregar una capa aislada."],
      ["04", "Adoptar", "Capacidades, comportamiento y resistencias que deciden el uso real.", "Evita: que el cambio se quede sin personas."],
      ["05", "Medir", "Indicadores ligados al proceso y a la decisión que se quería mejorar.", "Evita: confundir actividad con impacto."]
    ];
    return '<div class="method-frame"><p class="method-promise">No aplicamos fases por procedimiento: cada una evita una forma conocida de perder el impacto de la transformación.</p><div class="method-journey">' + steps.map(function (step) {
      return '<article class="method-step"><b>' + step[0] + '</b><h3>' + step[1] + '</h3><p>' + step[2] + '</p><small>' + step[3] + '</small></article>';
    }).join("") + '</div></div><div class="method-rails"><article class="method-rail"><b>Durante todo el recorrido</b><h3>Gobierno</h3><p>Decisiones, arquitectura, PMO/SMO, calidad y cumplimiento con trazabilidad.</p></article><article class="method-rail"><b>Durante todo el recorrido</b><h3>Seguridad</h3><p>Riesgo, Zero Trust, compliance y apoyo CISO donde el contexto lo exige.</p></article><article class="method-rail"><b>Durante todo el recorrido</b><h3>Operación sostenible</h3><p>Agilidad, productividad, FinOps, transferencia y capacidad que queda instalada.</p></article></div>';
  }

  function entryMarkup(copy) {
    return '<div class="entry-map">' + copy.portfolio.map(function (item) {
      var action = item[3] ? '<button type="button" data-practice="' + esc(item[3]) + '">Ver práctica →</button>' : '<button type="button" data-nav="library">Ver materiales →</button>';
      return '<article class="entry-row"><span class="entry-index">' + esc(item[0]) + '</span><h3>' + esc(item[1]) + '</h3><p>' + esc(item[2]) + '</p>' + action + '</article>';
    }).join("") + '</div><div class="taxonomy-note"><b>Una precisión útil</b><p>' + esc(copy.taxonomy) + '</p><button type="button" class="text-button" data-nav="practices">Ver las seis prácticas →</button></div>';
  }

  function supportAsset(id, label, title, description) {
    return '<button type="button" class="support-asset" data-asset="' + esc(id) + '"><span>' + esc(label) + '</span><h3>' + esc(title) + '</h3><p>' + esc(description) + '</p><small>Ver ficha de uso →</small></button>';
  }

  function corporateMarkup(version) {
    var isLatam = version === "latam";
    var copy = marketCopy(isLatam);
    return '<section class="corporate-conversation" data-corporate-conversation="true">' +
      '<div class="conversation-market"><div class="conversation-switch" aria-label="Elegir versión del relato corporativo"><button type="button" data-corporate-conversation-market="global"' + (!isLatam ? ' class="active"' : '') + '>Corporativo general</button><button type="button" data-corporate-conversation-market="latam"' + (isLatam ? ' class="active"' : '') + '>LATAM</button></div><p>Un relato corporativo común, adaptado al portfolio de cada mercado. No crea dos portales ni dos propuestas de valor.</p></div>' +
      '<header class="conversation-hero"><div class="conversation-kicker">' + esc(copy.label) + '</div><h1>Entelgy, en una <em>conversación.</em></h1><p>' + esc(copy.hero) + '</p><div class="conversation-minute"><div class="minute-label">El relato esencial<span>En 60 segundos</span></div><p class="minute-copy">' + copy.minute + '</p></div></header>' +
      '<section class="conversation-section"><div class="conversation-head"><div><div class="eyebrow" style="color:var(--violet)">Para preparar, no para memorizar</div><h2>Empieza por la pregunta que tienes delante.</h2></div><p>Estas no son cuatro respuestas desconectadas ni un guion comercial: son cuatro formas naturales de entrar en la misma propuesta.</p></div><div class="conversation-questions"><div class="question-list" role="tablist" aria-label="Preguntas para explicar Entelgy">' + questionButtons() + '</div>' + answerMarkup() + '</div></section>' +
      '<section class="conversation-section"><div class="conversation-head"><div><div class="eyebrow" style="color:var(--violet)">Por qué Entelgy</div><h2>La diferencia está entre desplegar y conseguir impacto.</h2></div><p>La tesis corporativa debe ser visible antes de entrar en capacidades, herramientas o sectores.</p></div><article class="impact-gap"><div class="impact-number"><span class="micro">La tensión de partida</span><strong>≈70%</strong><span>de las transformaciones no alcanza el éxito esperado.</span></div><div class="impact-copy"><div class="eyebrow">La tecnología sola se queda corta.</div><h3>Desplegar tecnología es fácil. Conseguir que mueva la cuenta de resultados no.</h3><p>El impacto se pierde cuando una solución no encaja con el proceso que debe mejorar, las personas que la tienen que adoptar o la cultura que debe sostenerla. Entelgy trabaja esos cuatro pilares a la vez.</p><div class="four-pillars"><span>Tecnología</span><i>×</i><span>Procesos</span><i>×</i><span>Personas</span><i>×</i><span>Cultura</span></div></div></article></section>' +
      '<section class="conversation-section"><div class="conversation-head"><div><div class="eyebrow" style="color:var(--violet)">Cómo lo hacemos</div><h2>Un método que lleva el cambio hasta la adopción y el impacto.</h2></div><p>La metodología no es un añadido interno: es la forma de hacer creíble el compromiso de resultado.</p></div>' + methodMarkup() + '</section>' +
      '<section class="conversation-section"><div class="conversation-head"><div><div class="eyebrow" style="color:var(--violet)">Dónde entramos</div><h2>' + esc(copy.offerTitle) + '</h2></div><p>' + esc(copy.offerText) + '</p></div>' + entryMarkup(copy) + '</section>' +
      '<section class="conversation-section"><div class="conversation-head"><div><div class="eyebrow" style="color:var(--violet)">Cuando el cambio debe quedarse</div><h2>Oficinas de Transformación y Gobierno.</h2></div><p>No son una práctica adicional ni la respuesta para todo proyecto: son el vehículo cuando el cliente necesita operar y sostener la transformación.</p></div><article class="otg"><div class="otg-label"><span class="micro">El método operando en casa del cliente</span><h3>De proyecto a capacidad permanente.</h3></div><div class="otg-main"><p><b>La OTG activa gobierno, seguridad y operación de forma transversal a las prácticas</b> cuando hace falta continuidad. Su función es que la organización pueda decidir, controlar, mejorar y transferir el cambio sin depender de un despliegue aislado.</p><div class="otg-phases"><div class="otg-phase"><b>01 · Diagnóstico</b><span>Identificamos qué debe gobernarse.</span></div><div class="otg-phase"><b>02 · Activación</b><span>Asumimos las funciones acordadas.</span></div><div class="otg-phase"><b>03 · Transferencia</b><span>Delegamos de forma progresiva.</span></div></div><div class="otg-capabilities"><span>PMO / SMO</span><span>Arquitectura</span><span>Auditoría</span><span>Apoyo CISO</span><span>Agilidad</span><span>QMO</span><span>Productividad</span><span>FinOps</span></div></div></article></section>' +
      '<section class="conversation-section"><div class="conversation-head"><div><div class="eyebrow" style="color:var(--violet)">Pruebas para cuando hagan falta</div><h2>Credibilidad sin distraer de la conversación.</h2></div><p>Capacidad, certificaciones, sectores y referencias sostienen el relato; no lo sustituyen en la primera pantalla.</p></div><div class="proof-drawers"><details class="proof-drawer"><summary><span class="proof-index">01</span><h3>Quiénes somos</h3><p>Escala, independencia, certificaciones, alianzas y presencia internacional.</p></summary><div class="proof-body"><p>Entelgy combina capacidad propia de delivery, independencia de fabricante y un ecosistema de alianzas. Estos datos son evidencia de la propuesta, no una lista de credenciales que deba abrir cada conversación.</p><div class="proof-grid"><div class="proof-cell"><b>20+ años</b><span>trabajando con organizaciones complejas y entornos críticos.</span></div><div class="proof-cell"><b>2.000</b><span>profesionales de delivery en España, LATAM y Estados Unidos.</span></div><div class="proof-cell"><b>100%</b><span>capital propio: criterio y capacidad de decisión independiente.</span></div><div class="proof-cell"><b>95%+</b><span>de renovación y más de 50 alianzas estratégicas.</span></div></div><div class="credential-list"><div><b>Certificaciones</b><p>ISO 27001, 27701, 20000, 9001, 14001, 14064, ISO/IEC 33000, ENS y otras acreditaciones aplicables.</p></div><div><b>Capacidades</b><p>Delivery, arquitectura, gobierno, ciberseguridad, calidad, agilidad, operación y transformación organizativa.</p></div><div><b>Presencia</b><p>España, Estados Unidos, México, Colombia, Perú, Brasil, Chile y Argentina.</p></div></div></div></details><details class="proof-drawer"><summary><span class="proof-index">02</span><h3>Sectores y clientes</h3><p>Experiencia sectorial, escala y referencias que se validan antes de compartir.</p></summary><div class="proof-body"><p>La experiencia sectorial ayuda a abrir una conversación porque permite reconocer las tensiones propias de cada entorno. No autoriza a citar un cliente concreto: la referencia debe mostrar siempre su condición de uso.</p><div class="sector-grid"><article class="sector-card"><b>Finanzas</b><strong>25+</strong><span>entidades de banca, seguros y mercados de capitales · 20+ años.</span></article><article class="sector-card"><b>Público y educación</b><strong>30+</strong><span>cuentas de administración y educación · 15+ años.</span></article><article class="sector-card"><b>Telco y media</b><strong>15+</strong><span>cuentas en telecomunicaciones y medios · 15+ años.</span></article><article class="sector-card"><b>Industria y servicios</b><strong>40+</strong><span>cuentas en industria, energía, retail y servicios · 20+ años.</span></article></div><div class="reference-rule"><b>Regla de uso:</b> los nombres, logotipos, resultados y casos concretos solo aparecerán en la ficha de referencia cuando esté confirmada su autorización comercial.</div></div></details></div></section>' +
      '<section class="conversation-section"><div class="conversation-support"><div class="support-label"><b>Material para ampliar</b><h3>Cuando el relato necesita una pieza.</h3></div><div class="support-copy"><p>El relato común abre y orienta. Los decks y mapas de portfolio aportan profundidad cuando el interlocutor la necesita. Las versiones verticalizadas se incorporarán aquí cuando estén terminadas y validadas; no se presentan como disponibles antes.</p></div></div><div class="support-assets">' + supportAsset(copy.primaryAsset, isLatam ? "Deck cliente · LATAM" : "Deck cliente · general", isLatam ? "Executive Deck · LATAM" : "Executive Deck", "La pieza corporativa para compartir después de una conversación preparada.") + supportAsset("corp-portfolio", "Uso interno", "Mapa de portfolio", "Relación entre capacidades y rutas de entrada antes de elegir una práctica.") + supportAsset(isLatam ? "corp-exec-global" : "corp-exec-latam", isLatam ? "Relato común" : "Versión regional", isLatam ? "Executive Deck · general" : "Executive Deck · LATAM", "La otra versión del relato, útil para contrastar contexto y portfolio.") + '</div></section>' +
      '</section>';
  }

  function replaceStage() {
    var old = document.querySelector("#app [data-corporate-stage]");
    if (!old) return;
    var holder = document.createElement("div");
    holder.innerHTML = corporateMarkup(market);
    old.replaceWith(holder.firstChild);
  }

  function refreshQuestion() {
    var root = document.querySelector("#app [data-corporate-conversation]");
    if (!root) return;
    root.querySelectorAll("[data-corporate-question]").forEach(function (button) {
      var selected = button.dataset.corporateQuestion === activeQuestion;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-selected", selected ? "true" : "false");
    });
    var answer = root.querySelector("[data-conversation-answer]");
    if (answer) {
      var holder = document.createElement("div");
      holder.innerHTML = answerMarkup();
      answer.replaceWith(holder.firstChild);
    }
  }

  function setMarket(value) {
    market = value === "latam" ? "latam" : "global";
    var current = document.querySelector("#app [data-corporate-conversation]");
    if (!current) return;
    var holder = document.createElement("div");
    holder.innerHTML = corporateMarkup(market);
    current.replaceWith(holder.firstChild);
  }

  function install() {
    addStyles();
    replaceStage();
    document.addEventListener("click", function (event) {
      var marketButton = event.target.closest("[data-corporate-conversation-market]");
      if (marketButton) {
        setMarket(marketButton.dataset.corporateConversationMarket);
        return;
      }
      var question = event.target.closest("[data-corporate-question]");
      if (question) {
        activeQuestion = question.dataset.corporateQuestion || "difference";
        refreshQuestion();
      }
    });
    var app = document.getElementById("app");
    if (!app) return;
    var scheduled = false;
    new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        replaceStage();
      });
    }).observe(app, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", install);
  else install();
}());
