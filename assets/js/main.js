// Small helper script for the site. You normally don't need to edit this file.
(function () {
  "use strict";

  // Current year in the footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu open / close
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", function () {
    setMenu(!menu.classList.contains("open"));
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // Add a subtle shadow to the header after scrolling
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the menu item of the section currently on screen
  var navLinks = {};
  menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
    navLinks[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(navLinks).forEach(function (id) { navLinks[id].classList.remove("active"); });
        var link = navLinks[entry.target.id];
        if (link) link.classList.add("active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

    // Gentle fade-in of sections as you scroll
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".section .container").forEach(function (el) {
      el.classList.add("reveal");
      reveal.observe(el);
    });
  }

  // Placeholder links ([TO ADD]) should not jump to the top of the page
  document.querySelectorAll(".is-placeholder").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });

  // CV button: if the PDF has not been uploaded yet, show a friendly note instead of a broken download
  var cvButton = document.getElementById("cv-button");
  var cvNote = document.getElementById("cv-note");
  if (cvButton && cvNote && window.fetch && location.protocol !== "file:") {
    fetch(cvButton.getAttribute("href"), { method: "HEAD", cache: "no-store" })
      .then(function (res) {
        if (!res.ok) markCvMissing();
      })
      .catch(function () { /* network problem: leave the button as it is */ });
  }
  function markCvMissing() {
    cvNote.hidden = false;
    cvButton.setAttribute("aria-disabled", "true");
    cvButton.style.opacity = "0.6";
    cvButton.addEventListener("click", function (e) { e.preventDefault(); });
  }
})();
