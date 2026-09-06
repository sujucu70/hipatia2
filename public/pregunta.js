/* Hipatia v4 · pregunta.js
   «Pregunta a Hipatia»: panel determinista. Sin modelo, sin red externa, sin
   clave. El motor son funciones puras (reciben el índice y la pregunta) que
   check-pregunta.js carga en Node; el cableado del DOM va aparte, protegido con
   typeof document. Sin dependencias. Revisión 18.
   (Commit 3: el panel abre y cierra; el motor responde «sin resultados». El
   motor por intenciones y las plantillas llegan en el commit siguiente.) */
(function (root) {
  "use strict";

  // ---------- utilidades puras ----------
  function norm(s) {
    return (s == null ? "" : String(s))
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "");
  }
  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------- motor (commit 3: siempre «sin resultados») ----------
  function motor(indice, pregunta) {
    return { intencion: "nada", primero: null, tambien: [] };
  }

  // ---------- plantillas ----------
  var SIN = "No tengo nada con esas palabras. Prueba con la práctica " +
    "(Modernización, Smart Operations…) o el sector (banca, AAPP…). Si crees " +
    "que debería existir, escríbeselo al responsable de la práctica → " +
    '<a class="text-link" href="/contactos/">Contactos</a>.';
  function render(res, indice) {
    return "<p>" + SIN + "</p>";
  }

  var API = { norm: norm, esc: esc, motor: motor, render: render };
  if (typeof module !== "undefined" && module.exports) module.exports = API;
  if (root) root.PreguntaHipatia = API;

  // ---------- cableado del DOM (solo en navegador) ----------
  if (typeof document === "undefined") return;

  function wire() {
    var wrap = document.querySelector("[data-pregunta]");
    if (!wrap) return;
    var tab = wrap.querySelector(".pregunta-tab");
    var panel = wrap.querySelector("#pregunta-panel");
    var cerrar = wrap.querySelector(".pregunta-cerrar");
    var form = wrap.querySelector("[data-pregunta-form]");
    var input = wrap.querySelector(".pregunta-input");
    var respuesta = wrap.querySelector("[data-pregunta-respuesta]");
    var chips = wrap.querySelectorAll(".pregunta-chip");
    var KEY = "hipatia.pregunta";

    var indice = null, cargando = null;
    function cargarIndice() {
      if (indice) return Promise.resolve(indice);
      if (cargando) return cargando;
      cargando = fetch("/indice-pregunta.json", { credentials: "same-origin" })
        .then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.json(); })
        .then(function (d) { indice = d; return d; });
      return cargando;
    }
    function guardar(q) { try { sessionStorage.setItem(KEY, q); } catch (e) {} }
    function leerGuardada() { try { return sessionStorage.getItem(KEY) || ""; } catch (e) { return ""; } }

    function responder(q) {
      q = (q || "").trim();
      if (!q) return;
      input.value = q;
      guardar(q);
      respuesta.innerHTML = '<p class="footer-note">Buscando…</p>';
      cargarIndice().then(function (idx) {
        respuesta.innerHTML = render(motor(idx, q), idx);
      }).catch(function () {
        respuesta.innerHTML = "<p>No puedo leer el índice del portal ahora mismo.</p>";
      });
    }
    function abierto() { return !panel.hidden; }
    function abrir() {
      panel.hidden = false;
      tab.setAttribute("aria-expanded", "true");
      input.focus();
      var guardada = leerGuardada();
      if (guardada) responder(guardada);
      else cargarIndice();
    }
    function cerrarPanel() {
      panel.hidden = true;
      tab.setAttribute("aria-expanded", "false");
      tab.focus();
    }

    tab.addEventListener("click", function () { abierto() ? cerrarPanel() : abrir(); });
    cerrar.addEventListener("click", cerrarPanel);
    form.addEventListener("submit", function (e) { e.preventDefault(); responder(input.value); });
    Array.prototype.forEach.call(chips, function (c) {
      c.addEventListener("click", function () { responder(c.getAttribute("data-q")); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape" || !abierto()) return;
      var m = document.querySelector("[data-modal]");
      if (m && !m.hidden) return; // el modal de app.js maneja su propio Esc
      cerrarPanel();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
})(typeof self !== "undefined" ? self : this);
