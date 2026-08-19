(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============================================================
     MEGA-MENU (click to open — works on both desktop and touch,
     closes on outside click or Escape)
     ============================================================ */
  var menuItems = document.querySelectorAll("[data-menu-item]");
  function closeAllMenus(except) {
    menuItems.forEach(function (item) {
      if (item !== except) item.classList.remove("is-open");
    });
  }
  menuItems.forEach(function (item) {
    var trigger = item.querySelector("[data-menu-trigger]");
    var hasMenu = item.querySelector(".megamenu");
    if (!trigger || !hasMenu) return;
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var isOpen = item.classList.contains("is-open");
      closeAllMenus();
      if (!isOpen) item.classList.add("is-open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest("[data-menu-item]")) closeAllMenus();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllMenus();
  });

  /* ============================================================
     MOBILE NAV TOGGLE — reuses the mainnav as a slide-out panel
     ============================================================ */
  var navToggle = document.getElementById("navToggle");
  var mainnav = document.querySelector(".mainnav");
  if (navToggle && mainnav) {
    navToggle.addEventListener("click", function () {
      mainnav.classList.toggle("is-mobile-open");
      document.body.classList.toggle("nav-open");
    });
  }

  /* ============================================================
     REVEAL ON SCROLL (light, calm fade — not scroll-jacked)
     ============================================================ */
  var revealEls = document.querySelectorAll(".tile, .insight-tile, .side-card, .stat");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealEls.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }
  /* ============================================================
     NEWSLETTER SUBSCRIBE FORM
     ============================================================ */
