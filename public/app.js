/* Hipatia v3 · app.js
   Mínimo y progresivo: la página pinta sin JS; esto solo mejora.
   Cubre: menú móvil, buscador de cabecera, buscador+filtros de /materiales,
   modal reutilizable de pieza, botón de impresión. Sin dependencias.
   Los plegables usan <details> nativo (no necesitan JS). */
(function () {
  "use strict";

  function norm(s) {
    return (s == null ? "" : String(s))
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  /* --- Buscador de cabecera: lleva a /materiales?q= --- */
  function headerSearch() {
    document.querySelectorAll("form[data-header-search]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = form.querySelector("input[name=q]");
        var q = input ? input.value.trim() : "";
        var base = form.getAttribute("data-materiales") || "/materiales/";
        location.href = base + (q ? "?q=" + encodeURIComponent(q) : "");
      });
    });
  }

  /* --- Menú móvil --- */
  function mobileMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.querySelector(".nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    });
  }

  /* --- Materiales: buscador + filtros (checkbox por atributos data-*) --- */
  function materialsFilter() {
    var list = document.querySelector("[data-materials-list]");
    if (!list) return;
    var items = Array.prototype.slice.call(list.querySelectorAll("[data-material]"));
    var search = document.querySelector("[data-materials-search]");
    var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    var counter = document.querySelector("[data-materials-count]");

    function apply() {
      var q = norm(search ? search.value : "");
      // agrupa filtros marcados por dimensión
      var active = {};
      filters.forEach(function (f) {
        if (!f.checked) return;
        var dim = f.getAttribute("data-filter");
        (active[dim] = active[dim] || []).push(f.value);
      });
      var shown = 0;
      items.forEach(function (it) {
        var okText = !q || norm(it.getAttribute("data-search") || it.textContent).indexOf(q) !== -1;
        var okFilters = Object.keys(active).every(function (dim) {
          var val = it.getAttribute("data-" + dim) || "";
          var vals = val.split(/\s+/);
          return active[dim].some(function (a) { return vals.indexOf(a) !== -1; });
        });
        var visible = okText && okFilters;
        it.hidden = !visible;
        if (visible) shown++;
      });
      if (counter) counter.textContent = String(shown);
    }

    if (search) search.addEventListener("input", apply);
    filters.forEach(function (f) { f.addEventListener("change", apply); });

    // q y práctica iniciales desde la URL
    try {
      var params = new URLSearchParams(location.search);
      var q0 = params.get("q");
      if (q0 && search) search.value = q0;
      var prac = params.get("practica");
      if (prac) {
        filters.forEach(function (f) {
          if (f.getAttribute("data-filter") === "practica") f.checked = (f.value === prac);
          // al filtrar por práctica desde una solución, no restringir por uso
          if (f.getAttribute("data-filter") === "uso") f.checked = false;
        });
      }
    } catch (e) {}
    apply();
  }

  /* --- Modal reutilizable de pieza --- */
  function modal() {
    var overlay = document.querySelector("[data-modal]");
    if (!overlay) return;
    var panel = overlay.querySelector("[data-modal-body]");
    var lastFocus = null;

    function open(html, label) {
      lastFocus = document.activeElement;
      if (panel) panel.innerHTML = html;
      overlay.hidden = false;
      overlay.setAttribute("aria-label", label || "Ficha de material");
      var closeBtn = overlay.querySelector("[data-modal-close]");
      if (closeBtn) closeBtn.focus();
      document.addEventListener("keydown", onKey);
    }
    function close() {
      overlay.hidden = true;
      document.removeEventListener("keydown", onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKey(e) { if (e.key === "Escape") close(); }

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.hasAttribute("data-modal-close")) close();
    });

    document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var srcId = btn.getAttribute("data-open-modal");
        var tpl = document.getElementById(srcId);
        if (tpl) open(tpl.innerHTML, btn.getAttribute("data-modal-label"));
      });
    });
  }

  /* --- Impresión (dossier / ficha) --- */
  function printButtons() {
    document.querySelectorAll("[data-print]").forEach(function (btn) {
      btn.addEventListener("click", function () { window.print(); });
    });
  }

  function init() {
    headerSearch();
    mobileMenu();
    materialsFilter();
    modal();
    printButtons();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
