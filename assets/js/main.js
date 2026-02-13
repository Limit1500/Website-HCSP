// ========== MAIN UI INTERACTIONS ==========

function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    hamburger.classList.toggle("is-active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on navigation
  navLinks.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.tagName.toLowerCase() === "a") {
      navLinks.classList.remove("is-open");
      hamburger.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"], [data-scroll]');

  links.forEach((el) => {
    el.addEventListener("click", (event) => {
      const target =
        el.getAttribute("href")?.startsWith("#") && el.getAttribute("href") !== "#"
          ? el.getAttribute("href")
          : el.getAttribute("data-scroll");

      if (!target || !target.startsWith("#")) return;

      const destination = document.querySelector(target);
      if (!destination) return;

      event.preventDefault();
      destination.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initTabs() {
  const tabGroups = document.querySelectorAll("[data-tabs]");

  tabGroups.forEach((group) => {
    const buttons = group.querySelectorAll(".tabs__btn");
    const panelsId = group.getAttribute("data-tabs");
    if (!panelsId) return;

    const panels = document.querySelectorAll(
      `[data-tabs-panels="${panelsId}"] .tabs__panel`,
    );

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabKey = btn.getAttribute("data-tab");
        if (!tabKey) return;

        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        panels.forEach((panel) => {
          panel.classList.toggle(
            "is-active",
            panel.getAttribute("data-panel") === tabKey,
          );
        });
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initSmoothScroll();
  initTabs();
});

