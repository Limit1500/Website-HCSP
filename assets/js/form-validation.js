// ========== FORM VALIDATION & TOASTS ==========

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast._timeoutId);
  showToast._timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
}

function validateForm(form) {
  let isValid = true;

  const fields = form.querySelectorAll("[required]");
  fields.forEach((field) => {
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) {
      return;
    }

    const value = field.value.trim();
    const type = field.type;

    // Required check
    if (!value) {
      field.classList.add("is-error");
      isValid = false;
      return;
    } else {
      field.classList.remove("is-error");
    }

    // Email pattern
    if (type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        field.classList.add("is-error");
        isValid = false;
      }
    }
  });

  return isValid;
}

function initContactForm() {
  const contactForm = document.querySelector("#contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm(contactForm)) return;

    showToast("Mesajul a fost trimis cu succes. Vă mulțumim!");
    contactForm.reset();
  });
}

function initDonationForm() {
  const donationForm = document.querySelector("#donatie-form");
  if (!donationForm) return;

  donationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateForm(donationForm)) return;

    showToast("Mulțumim pentru donație. Vei fi redirecționat către procesator.");

    // Simulare redirect către un procesator de plăți
    const redirectTarget =
      donationForm.getAttribute("data-redirect") || "#donatie-simulata";

    window.setTimeout(() => {
      window.location.hash = redirectTarget.startsWith("#")
        ? redirectTarget
        : "#donatie-simulata";
    }, 1500);

    donationForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
  initDonationForm();
});

