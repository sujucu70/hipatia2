/*
 * Hipatia · capa editorial de prácticas a partir de Entelgy_Executive_Deck.
 * Fuente interna: slides impresas 13/24–23/24 (junio de 2026).
 *
 * Mantiene el deck como fuente de capacidades, preguntas y primeros avances;
 * no replica métricas, casos ni referencias de cliente sin su ficha de uso.
 */
(function () {
  "use strict";

  var contentByTitle = {
    "Process Intelligence": {
      id: "process-intelligence",
      lead: "Un recorrido único: entender el proceso real, decidir dónde está el valor y llevar la mejora a producción con gobierno.",
      scope: "Este mapa es común a toda la práctica. El ángulo elegido ayuda a decidir por dónde empezar; no divide Process Intelligence en dos ofertas desconectadas.",
      capabilities: [
        { step: "01", title: "Descubrir", text: "Hacer visible el proceso real con datos —o con método tradicional cuando las trazas no bastan— para localizar variaciones, esperas y puntos de pérdida." },
        { step: "02", title: "Priorizar", text: "Elegir qué proceso merece inversión por coste, riesgo y volumen; no automatizar por automatizar." },
        { step: "03", title: "Implantar", text: "Rediseñar e implantar mejoras: módulos de sistema, RPA, IA, agentes y la preparación necesaria para que el equipo las adopte." },
        { step: "04", title: "Gobernar", text: "Dejar el proceso medido, orquestado y auditable, con seguimiento de eficiencia, retorno y evidencias." }
      ],
      discovery: [
        "¿Qué proceso, si fallara mañana, os haría más daño en el negocio?",
        "¿Dónde se os escapan horas, reprocesos o margen sin poder verlo con datos?",
        "Si ese proceso sigue un año más como está, ¿qué os cuesta?"
      ],
      starts: [
        { title: "Diagnóstico Data Driven", text: "El deck sitúa este primer contraste en torno a seis semanas y a precio cerrado. Valida alcance, condiciones y disponibilidad con la persona especialista antes de ofrecerlo." }
      ]
    },
    "Software Development": {
      id: "software-development",
      lead: "Una propuesta para acelerar el ciclo completo: desde el legado y la especificación hasta la entrega, la calidad y la operación.",
      capabilities: [
        { step: "01", title: "Modernizar", text: "Evolucionar aplicaciones legacy para reducir deuda y riesgo y convertirlas en un portfolio activo." },
        { step: "02", title: "Sostener", text: "Llevar el mantenimiento evolutivo más allá de apagar incidencias: mejorar el sistema y medir productividad y calidad." },
        { step: "03", title: "Especificar", text: "Trabajar con enfoque Spec-Driven: acordar la especificación antes del código e incorporar cumplimiento desde el diseño." },
        { step: "04", title: "Aumentar", text: "Activar equipos técnicos aumentados desde los Centros de Excelencia, con una entrega que se pueda medir." }
      ],
      discovery: [
        "¿Qué parte de vuestro portfolio da más miedo tocar?",
        "¿Qué proporción del presupuesto se va en sostener lo existente, en vez de construir lo que necesitáis?",
        "¿Cuánto os frena eso para sacar al mercado lo que negocio os pide?"
      ],
      starts: [
        { title: "Assessment de modernización", text: "El deck lo plantea como una primera lectura de dos semanas. Antes de presentarlo, valida aplicación prioritaria, dependencias, alcance y disponibilidad." }
      ]
    },
    "Data & AI": {
      id: "data-ai",
      lead: "Gobernar el dato y los modelos para que la analítica y la IA sirvan a una decisión, una operación o una experiencia concreta.",
      capabilities: [
        { step: "01", title: "Gobernar el dato", text: "Definir un modelo operativo con roles con mandato y un catálogo vivo, capaz de sostenerse más allá de un roadmap." },
        { step: "02", title: "Gobernar los modelos", text: "Inventariar y clasificar la IA en producción por riesgo, trazabilidad y condiciones de cumplimiento." },
        { step: "03", title: "Decidir con analítica", text: "Acercar el dato a los equipos con una capa semántica común, para dedicar menos tiempo a cuadrar y más a decidir." },
        { step: "04", title: "Predecir y operar", text: "Llevar modelos predictivos y sus pipelines a producción con alcance, responsabilidades y operación acordados." }
      ],
      discovery: [
        "¿Cuántas iniciativas de IA tenéis en marcha ahora mismo?",
        "¿Cuántas han llegado de verdad a producción y mueven una cifra del negocio?",
        "Si el resto se queda en piloto, ¿qué habéis invertido sin retorno?"
      ],
      starts: [
        { title: "Assessment de conformidad y estado del dato", text: "Un primer avance para contrastar caso de uso, datos implicados, gobierno y condiciones de producción. El plazo y alcance se validan con la especialista." }
      ]
    },
    "Smart Operations": {
      id: "smart-operations",
      lead: "Dos rutas dentro de una misma práctica: mejorar la experiencia digital del empleado y operar una infraestructura crítica con continuidad, control y eficiencia.",
      routes: [
        {
          title: "Puesto de trabajo",
          text: "Del primer contacto a la experiencia diaria del empleado.",
          items: [
            "Atención CAU N1/N2/N3 y monitorización de servicio.",
            "Gestión de puesto, dispositivo, software, licencias y parcheo.",
            "Dispositivo como servicio y ciclo de vida completo.",
            "Autoservicio, automatización y analítica de experiencia."
          ]
        },
        {
          title: "Infraestructura crítica",
          text: "De la continuidad 24×7 a una operación preventiva y gobernada.",
          items: [
            "Operación de sistemas, redes y cloud con monitorización preventiva.",
            "Cloud, migración, escalabilidad y alta disponibilidad.",
            "FinOps para hacer visible y gobernar el coste del servicio.",
            "AIOps, observabilidad, resiliencia y cumplimiento por diseño."
          ]
        }
      ],
      discovery: [
        "¿Qué parte de vuestra operación —puesto, cloud o infraestructura— os quita más el sueño?",
        "¿Qué coste operativo os cuesta más justificar cada año sin saber si es el correcto?",
        "¿Cuánto de eso creéis que es sobredimensionamiento que nadie ha medido?"
      ],
      starts: [
        { title: "Assessment del modelo de puesto de trabajo", text: "Para contrastar servicio, experiencia de empleado, automatización y métricas antes de proponer un cambio." },
        { title: "Assessment de infraestructura", text: "Para leer continuidad, capacidad, coste, observabilidad y condiciones de evolución antes de fijar una solución." }
      ]
    },
    "IA + Digital Change": {
      id: "ia-digital-change",
      lead: "La tecnología no transforma sola: activamos el cambio en personas, procesos y cultura para que la inversión se use, escale y deje impacto.",
      capabilities: [
        { step: "01", title: "Transformar", text: "Acompañar un cambio grande de extremo a extremo, conectando tecnología, formas de trabajar y resultados que se quieren conseguir." },
        { step: "02", title: "Adoptar", text: "Convertir el despliegue en uso sostenido y retorno para negocio, no solo en una tecnología disponible." },
        { step: "03", title: "Concienciar", text: "Construir una narrativa, hábitos y cultura compartida que permitan que el cambio cale y se mantenga." }
      ],
      aiCapabilities: [
        { step: "IA", title: "IAbility · Cultura", text: "Activar una cultura de uso responsable de IA, más allá de una formación aislada." },
        { step: "IA", title: "PreservIA · Conocimiento", text: "Capturar conocimiento experto y activarlo donde hace falta, para que sea un activo vivo." },
        { step: "IA", title: "Oficina de Gobernanza Humana de la IA", text: "Definir quién decide qué avanza, qué se frena y qué evidencias necesita la organización." }
      ],
      discovery: [
        "¿Qué habéis desplegado que sobre el papel funciona, pero la gente no ha hecho suyo?",
        "¿Cuánto pagasteis por esa tecnología que hoy se usa a medias?",
        "¿Cuánto valor se queda encima de la mesa mientras la adopción no llega?"
      ],
      starts: [
        { title: "Diagnóstico de madurez en adopción y gobernanza", text: "Un primer avance para entender colectivos, cambio observable, conocimiento y reglas de uso antes de diseñar una intervención." }
      ]
    }
  };

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character];
    });
  }

  function capabilityHtml(item) {
    return '<article class="executive-capability-card"><span class="micro">' + esc(item.step) + '</span><h3>' + esc(item.title) + '</h3><p>' + esc(item.text) + '</p></article>';
  }

  function capabilitiesHtml(entry) {
    if (entry.routes) {
      return '<div class="executive-route-grid">' + entry.routes.map(function (route) {
        return '<article class="executive-route-card"><span class="micro">Ruta de entrada</span><h3>' + esc(route.title) + '</h3><p>' + esc(route.text) + '</p><ul>' + route.items.map(function (item) { return '<li>' + esc(item) + '</li>'; }).join("") + '</ul></article>';
      }).join("") + '</div>';
    }

    return '<div class="executive-capability-grid">' + entry.capabilities.map(capabilityHtml).join("") + '</div>' + (entry.aiCapabilities
      ? '<div class="executive-ai-layer"><div><span class="micro">Cuando el frente es IA</span><h3>Cultura, conocimiento y gobierno.</h3></div><div class="executive-capability-grid executive-capability-grid--three">' + entry.aiCapabilities.map(capabilityHtml).join("") + '</div></div>'
      : "");
  }

  function discoveryHtml(questions) {
    return '<details class="executive-discovery"><summary><span>Preguntas para abrir la conversación</span><small>Tres señales para escuchar, no un guion.</small></summary><ol>' + questions.map(function (question) {
      return '<li>' + esc(question) + '</li>';
    }).join("") + '</ol></details>';
  }

  function startsHtml(starts) {
    return '<div class="executive-start"><div><span class="micro">Primer avance posible</span><h3>Concretar sin prometer de más.</h3></div><div class="executive-start-list">' + starts.map(function (start) {
      return '<article><b>' + esc(start.title) + '</b><p>' + esc(start.text) + '</p></article>';
    }).join("") + '</div></div>';
  }

  function officeHtml() {
    return '<details class="executive-office"><summary>Cuando el cliente necesita operación o gobierno continuo</summary><div><b>La continuidad no es una sexta práctica.</b><p>Según la necesidad, una Oficina de Transformación y Gobernanza puede dar continuidad al avance: diagnostica una función, asume su operación con roles, herramientas y backlog definidos, y transfiere capacidad de forma progresiva.</p></div></details>';
  }

  function render(entry, hasAngle) {
    return '<section id="angle-capacidades" class="continuity-section executive-capabilities" data-executive-practice-layer="' + esc(entry.id) + '"><div class="continuity-head"><div><div class="eyebrow" style="color:var(--violet)">Cuando la señal ya está clara</div><h2>Qué podemos activar.</h2></div><p>' + esc(entry.lead) + '</p></div>' + (hasAngle && entry.scope ? '<p class="executive-scope">' + esc(entry.scope) + '</p>' : "") + capabilitiesHtml(entry) + discoveryHtml(entry.discovery) + startsHtml(entry.starts) + officeHtml() + '</section>';
  }

  function addStyles() {
    if (document.getElementById("hipatia-executive-practice-layer-styles")) return;
    var style = document.createElement("style");
    style.id = "hipatia-executive-practice-layer-styles";
    style.textContent =
      ".executive-capabilities{padding-top:5px}.executive-scope{margin:0 0 18px;padding:11px 14px;color:var(--color-slate-600);border:1px solid var(--color-purple-100);background:var(--color-purple-100);font-size:13px;line-height:1.5}.executive-capability-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;border:1px solid var(--color-border-default);background:var(--color-border-default)}.executive-capability-grid--three{grid-template-columns:repeat(3,minmax(0,1fr));margin-top:12px}.executive-capability-card{min-height:184px;padding:19px 18px;background:var(--color-brand-white)}.executive-capability-card .micro,.executive-route-card .micro{color:var(--color-brand-orange)}.executive-capability-card h3,.executive-route-card h3{margin:11px 0 7px;color:var(--color-brand-navy);font:700 22px/1.03 var(--font-family-display);letter-spacing:-.025em}.executive-capability-card p,.executive-route-card p{margin:0;color:var(--color-slate-600);font-size:13px;line-height:1.52}.executive-route-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.executive-route-card{padding:22px;border:1px solid var(--color-border-default);background:var(--color-brand-white)}.executive-route-card>p{max-width:470px}.executive-route-card ul{display:grid;gap:7px;margin:17px 0 0;padding:0;list-style:none}.executive-route-card li{position:relative;padding-left:15px;color:var(--color-slate-600);font-size:13px;line-height:1.45}.executive-route-card li:before{position:absolute;left:0;top:.53em;width:5px;height:5px;background:var(--color-brand-purple);content:''}.executive-ai-layer{margin-top:14px;padding:19px 20px 20px;border:1px solid var(--color-border-default);background:var(--color-slate-50)}.executive-ai-layer>div:first-child{display:flex;align-items:baseline;justify-content:space-between;gap:18px;margin-bottom:13px}.executive-ai-layer h3{margin:0;color:var(--color-brand-navy);font:700 21px/1.1 var(--font-family-display);letter-spacing:-.02em}.executive-discovery,.executive-office{margin-top:14px;border:1px solid var(--color-border-default);background:var(--color-brand-white)}.executive-discovery summary,.executive-office summary{display:flex;justify-content:space-between;gap:20px;padding:16px 18px;color:var(--color-brand-navy);font:700 15px/1.35 var(--font-family-display);cursor:pointer;list-style:none}.executive-discovery summary::-webkit-details-marker,.executive-office summary::-webkit-details-marker{display:none}.executive-discovery summary:after,.executive-office summary:after{flex:0 0 auto;color:var(--color-brand-orange);content:'+'}.executive-discovery[open] summary:after,.executive-office[open] summary:after{content:'−'}.executive-discovery summary small{color:var(--color-slate-500);font:400 11px/1.4 var(--font-family-body);text-align:right}.executive-discovery ol{display:grid;gap:9px;margin:0;padding:0 22px 20px 39px;color:var(--color-slate-600);font-size:14px;line-height:1.5}.executive-discovery li::marker{color:var(--color-brand-purple);font-family:var(--font-family-mono);font-size:11px}.executive-start{display:grid;grid-template-columns:minmax(170px,.62fr) minmax(0,1.38fr);gap:22px;align-items:start;margin-top:14px;padding:20px 21px;background:var(--color-brand-navy)}.executive-start .micro{color:var(--color-orange-300)}.executive-start h3{margin:8px 0 0;color:var(--color-brand-white);font:700 22px/1.08 var(--font-family-display);letter-spacing:-.025em}.executive-start-list{display:grid;gap:10px}.executive-start-list article{padding:0 0 10px;border-bottom:1px solid rgba(255,255,255,.16)}.executive-start-list article:last-child{padding-bottom:0;border-bottom:0}.executive-start-list b{color:var(--color-brand-white);font:700 14px/1.35 var(--font-family-display)}.executive-start-list p{margin:4px 0 0;color:var(--color-slate-200);font-size:12px;line-height:1.52}.executive-office{background:var(--color-slate-50)}.executive-office>div{padding:0 18px 17px}.executive-office b{color:var(--color-brand-navy);font:700 13px/1.35 var(--font-family-display)}.executive-office p{max-width:820px;margin:6px 0 0;color:var(--color-slate-600);font-size:13px;line-height:1.52}@media(max-width:900px){.executive-capability-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.executive-capability-grid--three{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:640px){.executive-capability-grid,.executive-capability-grid--three,.executive-route-grid,.executive-start{grid-template-columns:1fr}.executive-capability-card{min-height:0}.executive-ai-layer>div:first-child,.executive-discovery summary,.executive-office summary{display:block}.executive-discovery summary small{display:block;margin-top:5px;text-align:left}.executive-start{gap:14px;padding:18px}.executive-discovery summary,.executive-office summary{padding:15px 16px}.executive-discovery summary:after,.executive-office summary:after{position:absolute;right:16px}.executive-discovery,.executive-office{position:relative}}";
    document.head.appendChild(style);
  }

  function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function enhance() {
    var app = document.getElementById("app");
    if (!app || app.querySelector("[data-executive-practice-layer]")) return;

    var title = app.querySelector(".practice-hero h1");
    var card = app.querySelector("#angle-tarjeta");
    var kit = app.querySelector("#angle-kit");
    var context = app.querySelector("#practice-angle");
    var entry = title && contentByTitle[clean(title.textContent)];

    if (!entry || !card || !kit || (context && context.getAttribute("data-subpractice"))) return;
    card.insertAdjacentHTML("afterend", render(entry, !!(context && context.getAttribute("data-subpractice"))));
  }

  function install() {
    addStyles();
    enhance();

    var app = document.getElementById("app");
    if (!app || !window.MutationObserver) return;

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




