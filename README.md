# Autostrăzi pentru Moldova

Proiect web static în limba română dedicat unei inițiative civile care susține dezvoltarea autostrăzilor în regiunea Moldovei.

## 🎯 Scop

O platformă informativă, mobilizatoare și interactivă pentru cetățeni, autorități și susținători ai infrastructurii rutiere din Moldova.

## 🧱 Structura

```
Website-HCSP/
├─ css/
│  └─ style.css
├─ js/
│  └─ script.js
├─ partials/
│  ├─ header.html
│  ├─ home.html
│  ├─ proiecte.html
│  ├─ despre.html
│  ├─ sustine.html
│  ├─ resurse.html
│  └─ contact.html
├─ index.html
├─ newpage.html
└─ README.md
```

_fiecare fragment HTML este încărcat dinamic în `index.html` folosind JavaScript._

## 💡 Caracteristici

- Design premium inspirat de un system Elementor: culori albastru închis + alb + gri deschis, tipografie modernă, layout pe containere centrate și spațieri consistente
- Layout modular pe blocuri (hero fullwidth, features, callout, articole) similar temelor WordPress
- Fără framework-uri, numai HTML, CSS și JavaScript vanilla
- Validare formulare și mesaje de confirmare
- Meniu hamburger și scroll smooth
- Cod comentat și bine organizat
- Ușor de extins / personalizat

## 🛠️ Cum rulezi

1. Clonează repo:
   ```bash
   git clone <repo-url>
   ```
2. Deschide `index.html` cu un server static (recomandat pentru `fetch`):
   ```bash
   cd Website-HCSP
   npx http-server
   ```
3. Accesează `http://localhost:8080` în browser.

> Poți deschide și direct fișierul (`file://`) dar unele browsere vor bloca `fetch` către partiale.

## 📦 Publicare

Site-ul este complet static și poate fi publicat pe GitHub Pages, Netlify sau orice alt serviciu de hosting static. Doar împinge branch-ul principal și activează Pages.

## 📝 Extensii posibile

- Adăugarea unei pagini de blog / știri
- Stocarea donațiilor în backend sau integrare cu un serviciu de plăți
- Traduceri în alte limbi
- Optimizare SEO și accesibilitate

---

Proiect creat ca material de exemplu; poate fi folosit ca bază pentru campanii civice similare.  
**GitHub Copilot / Raptor mini**
