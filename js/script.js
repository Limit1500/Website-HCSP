// partial loader + UI scripts
const partials = {
  "header-placeholder": "partials/header.html",
  "home-placeholder": "partials/home.html",
  "proiecte-placeholder": "partials/proiecte.html",
  "despre-placeholder": "partials/despre.html",
  "sustine-placeholder": "partials/sustine.html",
  "resurse-placeholder": "partials/resurse.html",
  "contact-placeholder": "partials/contact.html",
};

function loadPartials(callback) {
  const entries = Object.entries(partials);
  let loaded = 0;
  entries.forEach(([id, url]) => {
    const container = document.getElementById(id);
    if (container) {
      fetch(url)
        .then((r) => {
          if (!r.ok) throw new Error(`Couldn't load ${url}`);
          return r.text();
        })
        .then((html) => {
          container.innerHTML = html;
          loaded++;
          if (loaded === entries.length && typeof callback === "function") {
            callback();
          }
        })
        .catch((err) => console.error(err));
    } else {
      loaded++;
      if (loaded === entries.length && typeof callback === "function") {
        callback();
      }
    }
  });
}

function initUI() {
  // hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });
  }

  // smooth scrolling for anchors with data-scroll or regular links
  document
    .querySelectorAll('a[href^="#"], button[data-scroll]')
    .forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const target = el.getAttribute("href") || el.dataset.scroll;
        const dest = document.querySelector(target);
        if (dest) {
          dest.scrollIntoView({ behavior: "smooth" });
          // close mobile menu if open
          if (navLinks && navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            hamburger && hamburger.classList.remove("active");
          }
        }
      });
    });

  // donation tabs
  const tabButtons = document.querySelectorAll(".donatie-tabs .tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      document.querySelectorAll(".tab-content").forEach((c) => {
        c.style.display = c.id === tab ? "block" : "none";
      });
    });
  });

  // form validation
  function validateForm(form) {
    let valid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      if (!field.value.trim()) {
        valid = false;
        field.classList.add("error");
      } else {
        field.classList.remove("error");
      }
      if (field.type === "email" && field.value) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(field.value)) {
          valid = false;
          field.classList.add("error");
        }
      }
    });
    return valid;
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        showConfirmation("Mesajul a fost trimis cu succes! Vă mulțumim!");
        contactForm.reset();
      }
    });
  }

  const donatieForm = document.getElementById("donatie-form");
  if (donatieForm) {
    donatieForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm(donatieForm)) {
        showConfirmation("Mulțumim pentru donație!");
        donatieForm.reset();
      }
    });
  }

  function showConfirmation(message) {
    let confirmDiv = document.getElementById("form-confirm");
    if (!confirmDiv) {
      confirmDiv = document.createElement("div");
      confirmDiv.id = "form-confirm";
      confirmDiv.className = "form-confirm";
      document.body.appendChild(confirmDiv);
    }
    confirmDiv.textContent = message;
    confirmDiv.classList.add("visible");
    setTimeout(() => confirmDiv.classList.remove("visible"), 3000);
  }
}

// start
document.addEventListener("DOMContentLoaded", () => {
  loadPartials(initUI);
});
