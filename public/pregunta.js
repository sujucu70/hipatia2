/* Hipatia v4 · pregunta.js · «Pregunta a Hipatia» (revisión 18).
   Determinista: sin modelo, sin red externa, sin clave. Motor de funciones puras
   (norm/motor/render, cargables en Node por check-pregunta.js) + cableado del DOM
   aparte, protegido con typeof document. Escrito compacto a propósito para que la
   página más pesada siga por debajo de 150 KB (pregunta.js cuenta en el peso). */
(function (root) {
  "use strict";

  function norm(s) { return (s == null ? "" : String(s)).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function W(t) { return norm(t).replace(/-/g, " ").split(/[^a-z0-9]+/).filter(Boolean); }

  var STOP = "a al del de el la lo los las un una unos unas y o u en con por para sobre sin que como cual le les me te se es son hay tengo tienes puedo quiero necesito hacer algo alguna algun sector practica solucion pieza piezas material materiales cliente entelgy hipatia portal".split(" ").reduce(function (o, w) { o[w] = 1; return o; }, {});
  var SIN = "No tengo nada con esas palabras. Prueba con la práctica (Modernización, Smart Operations…) o el sector (banca, AAPP…). Si crees que debería existir, escríbeselo al responsable de la práctica → <a class=\"text-link\" href=\"/contactos/\">Contactos</a>.";
  // Sinónimos (en forma normalizada; los de varias palabras casan como frase consecutiva).
  var SIN_GRUPOS = [
    ["banca", "financiero", "bancario", "banco"],
    ["aapp", "publico", "publica", "administracion", "administraciones"],
    ["ia", "inteligencia artificial", "data intelligence"],
    ["rpa", "automatizacion", "robots"],
    ["cio", "comite", "direccion", "ejecutivo", "c suite", "directivo"],
    ["workplace", "puesto de trabajo", "puesto"],
    ["infra", "infraestructura", "infraestructuras", "cloud"],
    ["modernizacion", "modernizar", "legacy", "mainframe"],
    ["telco", "telecomunicaciones"],
    ["process intelligence", "inteligencia de procesos", "process mining"]
  ];
  var TIPOS_ORDEN = ["Deck", "One-pager", "Ficha", "Referencia", "Guía de discovery", "Guía interna", "Plantilla", "Herramienta", "Archivo"];
  var ESTADO_ORDEN = ["vigente", "revisar", "pendiente"];
  // Verbo de la pregunta → momento (formas normalizadas; norm() ya quita acentos).
  var MOMENTOS = [["reunion", ["enseno", "ensenar", "presento", "presentar", "reunion", "llevo"]], ["primer_contacto", ["envio", "enviar", "mando", "mandar", "correo", "primer contacto"]], ["para_dejar", ["dejo", "dejar", "dejarle"]]];
  var TRG_PERSONA = [["a", "quien"], ["con", "quien"], ["quien", "lleva"], ["quien", "es"], ["contacto"], ["responsable"], ["llamo"], ["llamar"]];
  var TRG_DEF = [["que", "es"], ["que", "cubre"], ["que", "hace"], ["que", "no"], ["en", "que", "consiste"], ["que", "significa"]];

  // término (una palabra) → grupo de sinónimos (cada miembro en palabras)
  var GRUPO = {};
  SIN_GRUPOS.forEach(function (g) { var ms = g.map(W); g.forEach(function (s, i) { if (ms[i].length === 1) GRUPO[ms[i][0]] = ms; }); });

  function palCasa(term, pal) { return term.length < 5 ? pal === term : pal.indexOf(term.slice(0, 5)) === 0; }
  function fraseCasa(fr, ws) { for (var i = 0; i + fr.length <= ws.length; i++) { for (var j = 0, ok = 1; j < fr.length; j++) if (!palCasa(fr[j], ws[i + j])) { ok = 0; break; } if (ok) return true; } return false; }
  function casa(term, ws) { var g = GRUPO[term] || [[term]]; for (var k = 0; k < g.length; k++) { var m = g[k]; if (m.length === 1) { for (var i = 0; i < ws.length; i++) if (palCasa(m[0], ws[i])) return true; } else if (fraseCasa(m, ws)) return true; } return false; }
  function cuenta(terms, texto) { var ws = W(texto), n = 0; for (var i = 0; i < terms.length; i++) if (casa(terms[i], ws)) n++; return n; }
  function contiene(fr, ws) { for (var i = 0; i + fr.length <= ws.length; i++) { for (var j = 0, ok = 1; j < fr.length; j++) if (ws[i + j] !== fr[j]) { ok = 0; break; } if (ok) return i; } return -1; }
  function empieza(fr, ws) { if (fr.length > ws.length) return false; for (var j = 0; j < fr.length; j++) if (ws[j] !== fr[j]) return false; return true; }
  function terminos(arr) { return arr.filter(function (w) { return !STOP[w]; }); }

  // mejor entrada por nº de términos que casan con su nombre; a igualdad, solución antes que práctica.
  function mejorEntrada(entradas, terms, min) {
    var best = null, bn = 0;
    for (var i = 0; i < entradas.length; i++) { var e = entradas[i], n = cuenta(terms, e.nombre); if (!n || (typeof min === "number" && n < min)) continue; if (n > bn || (n === bn && best && e.clase === "solucion" && best.clase !== "solucion")) { best = e; bn = n; } }
    return best;
  }
  function mejorSector(vals, terms) {
    var best = null, bn = 0;
    for (var i = 0; i < vals.length; i++) {
      var v = vals[i], n = cuenta(terms, v); if (!n) continue;
      if (n > bn) { best = v; bn = n; continue; }
      if (n === bn && best) { var cv = terms.some(function (t) { return norm(v).indexOf(t) >= 0; }), cb = terms.some(function (t) { return norm(best).indexOf(t) >= 0; }); if (cv && !cb) best = v; else if (cv === cb && v.length < best.length) best = v; }
    }
    return best;
  }

  function respPersona(entrada, entradas, pById) {
    var coms = [].concat(entrada.comercial || []).map(function (id) { return pById[id]; }).filter(Boolean);
    var tec = entrada.tecnico ? pById[entrada.tecnico] : null, otras = [];
    if (entrada.clase === "solucion" && coms.length) entradas.forEach(function (e) { if (e.clase === "solucion" && e.practica === entrada.practica && e.id !== entrada.id && [].concat(e.comercial || []).indexOf(coms[0].id) >= 0) otras.push(e.nombre); });
    return { intencion: "persona", primero: coms[0] ? coms[0].id : null, tambien: [], entrada: entrada, comerciales: coms, tecnico: tec, otras: otras };
  }

  function motor(indice, pregunta) {
    var ws = W(pregunta), entradas = indice.entradas, piezas = indice.piezas;
    var entById = {}, pById = {}, pracNom = { corporativo: "Corporativo" };
    entradas.forEach(function (e) { entById[e.id] = e; if (e.clase === "practica") pracNom[e.id] = e.nombre; });
    (indice.personas || []).forEach(function (p) { pById[p.id] = p; });
    var nada = { intencion: "nada", primero: null, tambien: [] };

    // 1 · Persona
    var trg = -1, quita = {};
    for (var t = 0; t < TRG_PERSONA.length; t++) { var pos = contiene(TRG_PERSONA[t], ws); if (pos >= 0) { trg = pos; for (var d = 0; d < TRG_PERSONA[t].length; d++) quita[pos + d] = 1; } }
    if (trg >= 0) { var g = mejorEntrada(entradas, terminos(ws.filter(function (w, i) { return !quita[i]; }))); return g ? respPersona(g, entradas, pById) : nada; }

    // 2 · Definición
    for (var q = 0; q < TRG_DEF.length; q++) if (empieza(TRG_DEF[q], ws)) {
      var resto = ws.slice(TRG_DEF[q].length), rt = resto.join(" "), exacta = null;
      entradas.forEach(function (e) { if (norm(e.nombre) === rt && (!exacta || (e.clase === "practica" && exacta.clase !== "practica"))) exacta = e; });
      var el = exacta || mejorEntrada(entradas, terminos(resto), terminos(resto).length);
      return el ? { intencion: "definicion", primero: el.id, tambien: [], entrada: el } : nada;
    }

    // 3 · Material
    var momento = null, mq = {};
    MOMENTOS.forEach(function (mv) { mv[1].forEach(function (v) { var vw = W(v), p = contiene(vw, ws); if (p >= 0) { momento = mv[0]; for (var d = 0; d < vw.length; d++) mq[p + d] = 1; } }); });
    var terms = terminos(ws.filter(function (w, i) { return !mq[i]; }));
    var asunto = mejorEntrada(entradas, terms), tA = {};
    if (asunto) terms.forEach(function (tm) { if (casa(tm, W(asunto.nombre))) tA[tm] = 1; });
    var tS = terms.filter(function (tm) { return !tA[tm]; });
    var vals = {}; piezas.forEach(function (p) { (p.sector || []).forEach(function (s) { vals[s] = 1; }); });
    var sector = mejorSector(Object.keys(vals), tS);
    function belong(p) { return asunto ? (asunto.clase === "solucion" ? p.solucion === asunto.id : p.practica === asunto.id) : false; }
    function punt(p) {
      var s = belong(p) ? 3 : 0;
      terms.forEach(function (tm) { if (casa(tm, W((p.sector || []).join(" ")))) s += 2; else if (casa(tm, W(p.tipo))) s += 2; else if (casa(tm, W((p.titulo || "") + " " + (p.subtipo || "")))) s += 1; });
      if (momento && p.momento === momento && p.abre) s += 2;
      return s;
    }
    var con = piezas.map(function (p, i) { return { p: p, s: punt(p), i: i, b: belong(p) }; }).filter(function (x) { return x.s > 0; });
    var prin = con.filter(function (x) { return x.p.sale_al_cliente !== "no"; }).sort(ordR);
    var intern = con.filter(function (x) { return x.p.sale_al_cliente === "no"; }).sort(ordR);
    if (!prin.length) return nada;
    var N = asunto ? prin.filter(function (x) { return x.b; }).length : prin.length;
    return { intencion: "material", primero: prin[0].p.id, tambien: prin.slice(1, 4).map(function (x) { return x.p.id; }), asunto: asunto, sector: sector, terms: terms, principal: prin.map(function (x) { return x.p; }), prep: intern.slice(0, 2).map(function (x) { return x.p; }), nAsunto: N, entById: entById, pById: pById, pracNom: pracNom };
  }
  function ordR(a, b) { if (a.b !== b.b) return a.b ? -1 : 1; if (a.s !== b.s) return b.s - a.s; var de = ESTADO_ORDEN.indexOf(a.p.estado) - ESTADO_ORDEN.indexOf(b.p.estado); if (de) return de; var dt = TIPOS_ORDEN.indexOf(a.p.tipo) - TIPOS_ORDEN.indexOf(b.p.tipo); if (dt) return dt; return a.i - b.i; }

  // ---------- plantillas (HTML escapado) ----------
  function chips(p) { var c = []; if (p.estado === "revisar") c.push("revisar"); else if (p.estado === "pendiente") c.push("pendiente"); if (p.sale_al_cliente === "con_validacion") c.push("con validación"); if (p.tipo === "Referencia" && p.citable) c.push(p.citable); return c.map(function (x) { return '<span class="pregunta-chip-inline">' + esc(x) + "</span>"; }).join(""); }
  function eyebrow(p, pn) { var a = [p.tipo]; if (p.subtipo) a.push(p.subtipo); a.push(pn[p.practica] || p.practica); return a.map(esc).join(" · "); }
  function lineaDe(p, e) { if (p.solucion && e[p.solucion]) return e[p.solucion].linea; if (p.practica && e[p.practica]) return e[p.practica].linea; return null; }
  function duenoDe(p, pById) { if (!p.dueno) return "Corporativo"; var per = pById[p.dueno]; if (!per) return "Corporativo"; return per.correo ? esc(per.nombre) + ' · <a class="text-link" href="mailto:' + esc(per.correo) + '">escribir →</a>' : esc(per.nombre) + ' · <a class="text-link" href="/contactos/">ver en Contactos →</a>'; }
  function itemFull(p, e, pById, pn) { var l = lineaDe(p, e); return '<div class="pregunta-item"><p class="pregunta-item-eyebrow">' + eyebrow(p, pn) + '</p><h4><a href="' + esc(p.url) + '">' + esc(p.titulo) + "</a> " + chips(p) + "</h4>" + (l ? '<p class="pregunta-item-linea">' + esc(l) + "</p>" : "") + '<p class="pregunta-foot"><a class="text-link" href="' + esc(p.url) + '">Ver ficha →</a><span>' + duenoDe(p, pById) + "</span></p></div>"; }
  function itemCorto(p) { return '<li><a href="' + esc(p.url) + '">' + esc(p.tipo) + " · " + esc(p.titulo) + "</a> " + chips(p) + "</li>"; }
  function render(res) {
    if (!res || res.intencion === "nada") return "<p>" + SIN + "</p>";
    if (res.intencion === "definicion") { var e = res.entrada; return '<p>«' + esc(e.linea || "") + '» <a class="text-link" href="' + esc(e.url) + '">Ver la página →</a></p>'; }
    if (res.intencion === "persona") {
      var out = "";
      res.comerciales.forEach(function (per) {
        var tit = per.titulo ? esc(per.titulo) + ", lleva " : "Lleva ";
        var fila = per.correo ? esc(per.correo) + ' · <a class="text-link" href="mailto:' + esc(per.correo) + '">escribir →</a>' : '<a class="text-link" href="/contactos/">ver en Contactos →</a>';
        out += '<div class="pregunta-item"><h4>' + esc(per.nombre) + '</h4><p class="pregunta-item-linea">' + tit + esc(res.entrada.nombre) + '.</p><p class="pregunta-foot"><span>' + fila + "</span></p></div>";
      });
      if (res.tecnico) out += '<p class="footer-note">Técnico: ' + esc(res.tecnico.nombre) + ".</p>";
      if (res.otras && res.otras.length) out += '<p class="footer-note">También lleva ' + res.otras.map(esc).join(", ") + ".</p>";
      return out;
    }
    var a = res.asunto, N = res.nAsunto, pl = N === 1 ? "pieza" : "piezas", l1;
    if (a && res.sector) l1 = "Para " + esc(a.nombre) + " en " + esc(res.sector) + " tienes " + N + " " + pl + ". Empieza por esta.";
    else if (a) l1 = "Para " + esc(a.nombre) + " tienes " + N + " " + pl + ". Empieza por esta.";
    else l1 = "Con “" + esc(res.terms.join(" ")) + "” tengo " + N + " " + pl + ". Empieza por esta.";
    var h = "<p>" + l1 + "</p>" + itemFull(res.principal[0], res.entById, res.pById, res.pracNom);
    var mas = res.principal.slice(1, 4);
    if (mas.length) h += '<div class="pregunta-tambien"><p class="pregunta-eyebrow">También</p><ul class="pregunta-lista">' + mas.map(itemCorto).join("") + "</ul></div>";
    if (res.prep && res.prep.length) h += '<div class="pregunta-prep"><p class="pregunta-eyebrow">Para prepararte</p><ul class="pregunta-lista">' + res.prep.map(itemCorto).join("") + "</ul></div>";
    return h;
  }

  var API = { norm: norm, esc: esc, motor: motor, render: render };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  if (root) root.PreguntaHipatia = API;

  // ---------- cableado del DOM ----------
  if (typeof document === "undefined") return;
  function wire() {
    var wrap = document.querySelector("[data-pregunta]"); if (!wrap) return;
    var tab = wrap.querySelector(".pregunta-tab"), panel = wrap.querySelector("#pregunta-panel"), cerrar = wrap.querySelector(".pregunta-cerrar"),
      form = wrap.querySelector("[data-pregunta-form]"), input = wrap.querySelector(".pregunta-input"), resp = wrap.querySelector("[data-pregunta-respuesta]"),
      chipsEl = wrap.querySelectorAll(".pregunta-chip"), KEY = "hipatia.pregunta", idx = null, cargando = null;
    function cargar() { if (idx) return Promise.resolve(idx); if (cargando) return cargando; cargando = fetch("/indice-pregunta.json", { credentials: "same-origin" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (d) { idx = d; return d; }); return cargando; }
    function guarda(q) { try { sessionStorage.setItem(KEY, q); } catch (e) {} }
    function leer() { try { return sessionStorage.getItem(KEY) || ""; } catch (e) { return ""; } }
    function responder(q) { q = (q || "").trim(); if (!q) return; input.value = q; guarda(q); resp.innerHTML = '<p class="footer-note">Buscando…</p>'; cargar().then(function (d) { resp.innerHTML = render(motor(d, q)); }).catch(function () { resp.innerHTML = "<p>No puedo leer el índice del portal ahora mismo.</p>"; }); }
    function abierto() { return !panel.hidden; }
    function abrir() { panel.hidden = false; tab.setAttribute("aria-expanded", "true"); input.focus(); var g = leer(); if (g) responder(g); else cargar(); }
    function cerrarP() { panel.hidden = true; tab.setAttribute("aria-expanded", "false"); tab.focus(); }
    tab.addEventListener("click", function () { abierto() ? cerrarP() : abrir(); });
    cerrar.addEventListener("click", cerrarP);
    form.addEventListener("submit", function (e) { e.preventDefault(); responder(input.value); });
    Array.prototype.forEach.call(chipsEl, function (c) { c.addEventListener("click", function () { responder(c.getAttribute("data-q")); }); });
    document.addEventListener("keydown", function (e) { if (e.key !== "Escape" || !abierto()) return; var m = document.querySelector("[data-modal]"); if (m && !m.hidden) return; cerrarP(); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire); else wire();
})(typeof self !== "undefined" ? self : this);
