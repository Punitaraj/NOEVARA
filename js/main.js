/* ==========================================================================
   NOEVARA - Core Site Behaviour
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- Mobile nav ---------------- */
  const mobileToggle = document.querySelector(".nav-toggle-mobile");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileClose = document.querySelector(".mobile-nav-close");
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => mobileNav.classList.add("open"));
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener("click", () => mobileNav.classList.remove("open"));
  }

  /* ---------------- Flip cards (click-to-flip on touch devices) ---------------- */
  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Only toggle flip if the click wasn't on a real link inside the back face
      if (e.target.closest("a")) return;
      card.classList.toggle("flipped");
    });
  });

  /* ---------------- Accordion (FAQ) ---------------- */
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("open");

      // close siblings within same accordion group
      const group = item.closest(".accordion");
      if (group) {
        group.querySelectorAll(".accordion-item.open").forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".accordion-panel").style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove("open");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ---------------- Reveal-on-scroll ---------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  /* ---------------- Formspree AJAX submission (contact + newsletter) ---------------- */
  document.querySelectorAll("form[data-formspree]").forEach(form => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const statusEl = form.querySelector(".form-status");
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn ? submitBtn.innerHTML : "";

      if (submitBtn) {
        submitBtn.setAttribute("disabled", "disabled");
        submitBtn.innerHTML = "Sending…";
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          if (statusEl) {
            statusEl.textContent = form.dataset.successMessage || "Thank you - your message has been sent. We'll be in touch shortly.";
            statusEl.classList.remove("err");
            statusEl.classList.add("show", "ok");
          }
          form.reset();
        } else {
          throw new Error("Form submission failed");
        }
      } catch (err) {
        if (statusEl) {
          statusEl.textContent = "Something went wrong sending your message. Please try again or email us directly at contact@noevaraconsulting.com.";
          statusEl.classList.remove("ok");
          statusEl.classList.add("show", "err");
        }
      } finally {
        if (submitBtn) {
          submitBtn.removeAttribute("disabled");
          submitBtn.innerHTML = originalLabel;
        }
      }
    });
  });

  /* ---------------- Active nav link highlighting ---------------- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links > li > a, .mobile-nav > a").forEach(a => {
    const href = a.getAttribute("href");
    if (href && href.split("#")[0] === path) {
      a.closest("li")?.classList.add("active");
      a.classList.add("active");
    }
  });

});
