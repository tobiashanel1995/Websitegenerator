/* =========================================================================
   Gattopardo — gemeinsame Logik: Header/Footer, mobiles Menü,
   Majolika-Muster, Öffnungszeiten-Highlight, Speisekarten-Rendering.
   Kein Build-Schritt: reines Vanilla-JS.
   ========================================================================= */
(function () {
  "use strict";

  /* -------------------------------------------------- Zentrale Stammdaten */
  const SITE = {
    name: "Gattopardo",
    tagline: "Pizzeria & Gelateria",
    street: "Vennstraße 90",
    city: "52224 Stolberg",
    phone: "+49 2408 9296120",
    phoneHref: "tel:+4924089296120",
    email: "hallo@pizzeria-gattopardo.de", // Platzhalter — bitte anpassen
    hours: [
      { d: "Montag", t: "Ruhetag", closed: true },
      { d: "Dienstag", t: "11:30–14:30 · 17:00–22:30" },
      { d: "Mittwoch", t: "11:30–14:30 · 17:00–22:30" },
      { d: "Donnerstag", t: "11:30–14:30 · 17:00–22:30" },
      { d: "Freitag", t: "11:30–14:30 · 17:00–22:30" },
      { d: "Samstag", t: "13:30–22:30" },
      { d: "Sonntag", t: "12:00–22:30" }
    ]
  };
  window.SITE = SITE;

  const NAV = [
    { href: "index.html", label: "Start", page: "home" },
    { href: "speisekarte.html", label: "Speisekarte", page: "menu" },
    { href: "gelateria.html", label: "Gelateria", page: "gelateria" },
    { href: "torten.html", label: "Torten", page: "torten" },
    { href: "kontakt.html", label: "Kontakt", page: "kontakt" }
  ];

  const svg = (paths, attrs) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${attrs || ""}>${paths}</svg>`;
  const ICON = {
    phone: svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'),
    cart: svg('<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'),
    plus: svg('<path d="M12 5v14M5 12h14"/>'),
    menu: svg('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    close: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
    arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>')
  };
  window.ICON = ICON;

  /* -------------------------------------------------- Sternmedaillon */
  // Feines achtstrahliges Caltagirone-Stern-Medaillon als Signature —
  // zentrierter Trenner, via CSS-Variable (Messing auf Kalkputz).
  function tilePattern() {
    const s = `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'>
      <circle cx='20' cy='20' r='19' fill='%23f4eee1'/>
      <g fill='none' stroke='%23a9812f' stroke-width='1'>
        <path d='M20 3 L23.6 16.4 L37 20 L23.6 23.6 L20 37 L16.4 23.6 L3 20 L16.4 16.4 Z'/>
        <circle cx='20' cy='20' r='4'/>
      </g>
      <circle cx='20' cy='20' r='1.5' fill='%232c5a4a'/>
    </svg>`;
    return `url("data:image/svg+xml,${s.replace(/\n\s*/g, "")}")`;
  }

  /* -------------------------------------------------- Header + Footer */
  function chrome() {
    const active = document.body.dataset.page || "home";
    const navLinks = NAV.map(
      (n) =>
        `<a href="${n.href}"${n.page === active ? ' aria-current="page"' : ""}>${n.label}</a>`
    ).join("");

    const header = document.getElementById("site-header");
    if (header) {
      header.className = "site-header";
      header.innerHTML = `
        <div class="wrap site-header__bar">
          <a class="brand" href="index.html" aria-label="${SITE.name} — Startseite">
            <span class="brand__mark">${brandMark()}</span>
            <span>
              <span class="brand__name">${SITE.name}</span>
              <span class="brand__sub">Pizzeria · Gelateria</span>
            </span>
          </a>
          <nav class="nav" id="primary-nav" aria-label="Hauptnavigation">${navLinks}</nav>
          <div class="header__actions">
            <a class="btn btn--ghost" href="${SITE.phoneHref}" aria-label="Anrufen: ${SITE.phone}">${ICON.phone}<span class="hide-sm">Anrufen</span></a>
            <button class="cart-btn snipcart-checkout" type="button" aria-label="Warenkorb öffnen">
              ${ICON.cart}<span class="snipcart-items-count">0</span>
            </button>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Menü öffnen">${ICON.menu}</button>
          </div>
        </div>`;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.className = "site-footer";
      footer.innerHTML = `
        <div class="wrap footer-grid">
          <div>
            <div class="footer-brand__name">${SITE.name}</div>
            <p>Handgemachte Pizza aus dem Steinofen und echtes italienisches Gelato — mitten in Stolberg.</p>
            <p><a href="${SITE.phoneHref}">${SITE.phone}</a><br>
               ${SITE.street}, ${SITE.city}</p>
          </div>
          <div>
            <h4>Entdecken</h4>
            <ul class="footer-links">
              <li><a href="speisekarte.html">Speisekarte & Bestellen</a></li>
              <li><a href="gelateria.html">Gelateria besuchen</a></li>
              <li><a href="torten.html">Torten vorbestellen</a></li>
              <li><a href="kontakt.html">Kontakt & Anfahrt</a></li>
            </ul>
          </div>
          <div>
            <h4>Rechtliches</h4>
            <ul class="footer-links">
              <li><a href="impressum.html">Impressum</a></li>
              <li><a href="datenschutz.html">Datenschutz</a></li>
              <li><a href="agb.html">AGB</a></li>
              <li><a href="widerruf.html">Widerrufsrecht</a></li>
            </ul>
          </div>
        </div>
        <div class="wrap footer-bottom">
          <span>© <span data-year>2026</span> ${SITE.name} · Stolberg</span>
          <span>Bestellungen online oder telefonisch unter <a href="${SITE.phoneHref}">${SITE.phone}</a></span>
        </div>`;
    }
  }

  function brandMark() {
    // Caltagirone-Sternmedaillon als Wortmarke-Signet (Platzhalter für echtes Logo).
    return `<svg viewBox="0 0 46 46" width="46" height="46" aria-hidden="true">
      <circle cx="23" cy="23" r="22.5" fill="#1e3f33"/>
      <circle cx="23" cy="23" r="19" fill="none" stroke="#a9812f" stroke-width="0.9" opacity="0.7"/>
      <path d="M23 6 L27 20 L41 23 L27 26 L23 40 L19 26 L5 23 L19 20 Z"
            fill="none" stroke="#e7d3a8" stroke-width="1.2"/>
      <path d="M23 12 L25.4 20.6 L34 23 L25.4 25.4 L23 34 L20.6 25.4 L12 23 L20.6 20.6 Z"
            fill="#b24127" opacity="0.92"/>
      <circle cx="23" cy="23" r="3.4" fill="#e7d3a8"/>
      <circle cx="23" cy="23" r="1.3" fill="#1e3f33"/>
    </svg>`;
  }

  /* -------------------------------------------------- Mobiles Menü */
  function mobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;
    const set = (open) => {
      nav.dataset.open = String(open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.innerHTML = open ? ICON.close : ICON.menu;
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    };
    toggle.addEventListener("click", () => set(nav.dataset.open !== "true"));
    nav.addEventListener("click", (e) => { if (e.target.tagName === "A") set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
  }

  /* -------------------------------------------------- Öffnungszeiten */
  function markToday() {
    const idx = (new Date().getDay() + 6) % 7; // Mo=0 … So=6
    document.querySelectorAll("[data-hours]").forEach((list) => {
      list.querySelectorAll("li").forEach((li, i) => {
        if (i === idx) li.dataset.today = "true";
      });
    });
  }

  function renderHours(el) {
    el.innerHTML = SITE.hours
      .map(
        (h) =>
          `<li><span class="day">${h.d}</span><span class="${h.closed ? "closed" : ""}">${h.t}</span></li>`
      )
      .join("");
  }

  /* -------------------------------------------------- Speisekarte */
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const euro = (n) => n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

  function tagChip(t) {
    const map = { veg: ["veg", "Veg"], hot: ["hot", "Scharf"] };
    const [cls, label] = map[t] || ["", t];
    return `<span class="tag tag--${cls}">${label}</span>`;
  }

  function renderMenu() {
    const root = document.getElementById("menu-root");
    const toolbar = document.getElementById("menu-toolbar");
    const data = window.GATTOPARDO_MENU;
    if (!root || !data) return;

    const pageUrl = location.pathname.split("/").pop() || "speisekarte.html";

    if (toolbar) {
      toolbar.innerHTML =
        `<button type="button" data-filter="all" aria-pressed="true">Alles</button>` +
        data.categories
          .map((c) => `<button type="button" data-filter="${c.id}" aria-pressed="false">${c.name.split(" — ")[0]}</button>`)
          .join("");
    }

    root.innerHTML = data.categories
      .map((cat) => {
        const dishes = cat.items
          .map((item) => {
            const id = `${cat.id}-${slug(item.name)}`;
            const tags = (item.tags || []).map(tagChip).join("");
            const desc = item.desc ? `<p class="dish__desc">${item.desc}</p>` : "";
            let side;
            if (item.price === null) {
              side = `<span class="dish__price">Preis auf Anfrage</span>`;
            } else {
              side = `<span class="dish__price">${euro(item.price)}</span>
                <button class="dish__add snipcart-add-item" type="button"
                  aria-label="${item.name} in den Warenkorb"
                  data-item-id="${id}"
                  data-item-name="${item.name}"
                  data-item-price="${item.price.toFixed(2)}"
                  data-item-url="${pageUrl}"
                  data-item-description="${cat.name.replace(/"/g, "")}">
                  ${ICON.plus}
                </button>`;
            }
            return `<div class="dish" data-cat="${cat.id}">
              <div>
                <span class="dish__name">${item.name}</span><span class="dish__tags">${tags}</span>
                ${desc}
              </div>
              <div class="dish__side">${side}</div>
            </div>`;
          })
          .join("");
        const note = cat.it ? `<span class="menu-category__note">${cat.it}</span>` : "";
        return `<section class="menu-category" id="cat-${cat.id}" aria-label="${cat.name}">
          <div class="menu-category__head"><h2>${cat.name}</h2>${note}</div>
          <div class="dish-list">${dishes}</div>
        </section>`;
      })
      .join("");

    if (toolbar) {
      toolbar.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-filter]");
        if (!btn) return;
        const f = btn.dataset.filter;
        toolbar.querySelectorAll("button").forEach((b) =>
          b.setAttribute("aria-pressed", String(b === btn))
        );
        root.querySelectorAll(".menu-category").forEach((sec) => {
          sec.classList.toggle("hidden", f !== "all" && sec.id !== `cat-${f}`);
        });
      });
    }
  }

  /* -------------------------------------------------- Init */
  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.style.setProperty("--tile-svg", tilePattern());
    chrome();
    mobileNav();
    document.querySelectorAll("[data-hours]").forEach(renderHours);
    markToday();
    renderMenu();
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  });
})();
