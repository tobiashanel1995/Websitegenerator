/* =========================================================================
   Schmitz Bauzentrum — gemeinsame Logik: Header/Footer, mobiles Menü,
   Öffnungszeiten (zwei Standorte), Shop-Katalog-Rendering.
   Kein Build-Schritt: reines Vanilla-JS.
   ========================================================================= */
(function () {
  "use strict";

  /* -------------------------------------------------- Zentrale Stammdaten */
  const SITE = {
    name: "Schmitz Bauzentrum",
    tagline: "Baustoffe · Baufachmarkt · Ausstellung",
    foundedYear: 1912,
    email: "info@schmitz-bauzentrum.de", // Platzhalter — bitte anpassen
    // Erster Standort dient als Standard-Rufnummer im Header.
    locations: [
      {
        id: "breinig",
        name: "Breinig",
        street: "Wilhelm-Pitz-Straße 61",
        city: "52223 Stolberg-Breinig",
        phone: "(02402) 93010",
        phoneHref: "tel:+49240293010",
        fax: "(02402) 37153",
        mapQuery: "Wilhelm-Pitz-Straße 61, 52223 Stolberg",
        hours: [
          { d: "Montag", t: "7:00–17:30" },
          { d: "Dienstag", t: "7:00–17:30" },
          { d: "Mittwoch", t: "7:00–17:30" },
          { d: "Donnerstag", t: "7:00–17:30" },
          { d: "Freitag", t: "7:00–17:30" },
          { d: "Samstag", t: "7:00–13:00" },
          { d: "Sonntag", t: "Geschlossen", closed: true }
        ]
      },
      {
        id: "langerwehe",
        name: "Langerwehe",
        street: "Im Gewerbegebiet 5",
        city: "52379 Langerwehe",
        phone: "(02423) 2011",
        phoneHref: "tel:+4924232011",
        fax: "(02423) 5540",
        mapQuery: "Im Gewerbegebiet 5, 52379 Langerwehe",
        hours: [
          { d: "Montag", t: "7:00–17:30" },
          { d: "Dienstag", t: "7:00–17:30" },
          { d: "Mittwoch", t: "7:00–17:30" },
          { d: "Donnerstag", t: "7:00–17:30" },
          { d: "Freitag", t: "7:00–17:30" },
          { d: "Samstag", t: "8:00–13:00" },
          { d: "Sonntag", t: "Geschlossen", closed: true }
        ]
      }
    ]
  };
  SITE.phone = SITE.locations[0].phone;
  SITE.phoneHref = SITE.locations[0].phoneHref;
  window.SITE = SITE;

  const NAV = [
    { href: "index.html", label: "Start", page: "home" },
    { href: "shop.html", label: "Verkauf", page: "shop" },
    { href: "leistungen.html", label: "Leistungen", page: "leistungen" },
    { href: "sortiment.html", label: "Sortiment", page: "sortiment" },
    { href: "ausstellung.html", label: "Ausstellung", page: "ausstellung" },
    { href: "sale.html", label: "Sale", page: "sale" },
    { href: "ueber-uns.html", label: "Über uns", page: "ueber-uns" },
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
    arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    truck: svg('<path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>'),
    store: svg('<path d="M3 9l1.5-5h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/>'),
    tools: svg('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z"/>'),
    box: svg('<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>'),
    palette: svg('<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="10" r="1"/><path d="M12 21a3 3 0 0 0 3-3c0-1.5 1-1.5 2-2"/>'),
    key: svg('<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2 20 3l1.5 1.5-1.5 1.5 1.5 1.5-2.5 2.5-1.5-1.5"/>'),
    leaf: svg('<path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16z"/><path d="M4 20c4-6 8-8 12-9"/>'),
    check: svg('<path d="M20 6 9 17l-5-5"/>')
  };
  window.ICON = ICON;

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
              <span class="brand__sub">Seit ${SITE.foundedYear} · Breinig &amp; Langerwehe</span>
            </span>
          </a>
          <nav class="nav" id="primary-nav" aria-label="Hauptnavigation">${navLinks}</nav>
          <div class="header__actions">
            <a class="btn btn--ghost hide-sm" href="${SITE.phoneHref}" aria-label="Anrufen: ${SITE.phone}">${ICON.phone}<span>Anrufen</span></a>
            <button class="cart-btn snipcart-checkout" type="button" aria-label="Warenkorb öffnen">
              ${ICON.cart}<span class="snipcart-items-count">0</span>
            </button>
            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Menü öffnen">${ICON.menu}</button>
          </div>
        </div>`;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
      const locs = SITE.locations
        .map(
          (l) =>
            `<p style="margin:0 0 0.8rem"><strong style="color:#fff">${l.name}</strong><br>
             ${l.street}, ${l.city}<br>
             <a href="${l.phoneHref}">${l.phone}</a></p>`
        )
        .join("");
      footer.className = "site-footer";
      footer.innerHTML = `
        <div class="wrap footer-grid">
          <div>
            <div class="footer-brand__name">${SITE.name}</div>
            <p>Baustoffe, Baufachmarkt und Ausstellung aus einer Hand — mit Beratung, Lieferung und Online-Bestellung. Familienbetrieb seit ${SITE.foundedYear}.</p>
          </div>
          <div>
            <h4>Standorte</h4>
            ${locs}
          </div>
          <div>
            <h4>Entdecken</h4>
            <ul class="footer-links">
              <li><a href="shop.html">Online-Verkauf</a></li>
              <li><a href="leistungen.html">Leistungen</a></li>
              <li><a href="sortiment.html">Sortiment</a></li>
              <li><a href="ausstellung.html">Ausstellung</a></li>
              <li><a href="sale.html">Sale &amp; Restposten</a></li>
              <li><a href="kontakt.html">Kontakt &amp; Anfahrt</a></li>
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
          <span>© <span data-year>${SITE.foundedYear}</span> ${SITE.name} · Breinig &amp; Langerwehe</span>
          <span>Fragen? <a href="${SITE.phoneHref}">${SITE.phone}</a></span>
        </div>`;
    }
  }

  function brandMark() {
    // Schlichtes Monogramm-Emblem (Platzhalter für echtes Logo).
    return `<svg viewBox="0 0 44 44" width="44" height="44" aria-hidden="true">
      <rect width="44" height="44" rx="9" fill="#1b1e21"/>
      <path d="M22 7 L34 14 V30 L22 37 L10 30 V14 Z" fill="none" stroke="#e2571f" stroke-width="2.2"/>
      <text x="22" y="29" text-anchor="middle" font-family="'Space Grotesk', 'Segoe UI', sans-serif" font-weight="700" font-size="18" fill="#ffffff">S</text>
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
  function locationById(id) {
    return SITE.locations.find((l) => l.id === id) || SITE.locations[0];
  }

  function renderHours(el) {
    const loc = locationById(el.dataset.hours);
    el.innerHTML = loc.hours
      .map(
        (h) =>
          `<li><span class="day">${h.d}</span><span class="${h.closed ? "closed" : ""}">${h.t}</span></li>`
      )
      .join("");
  }

  function markToday() {
    const idx = (new Date().getDay() + 6) % 7; // Mo=0 … So=6
    document.querySelectorAll("[data-hours]").forEach((list) => {
      list.querySelectorAll("li").forEach((li, i) => {
        if (i === idx) li.dataset.today = "true";
      });
    });
  }

  /* -------------------------------------------------- Shop-Katalog */
  const slug = (s) => s.toLowerCase()
    .replace(/[äàá]/g, "a").replace(/[öø]/g, "o").replace(/[üù]/g, "u").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const euro = (n) => n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

  function tagChip(t) {
    const map = { neu: ["neu", "Neu"], sale: ["sale", "Sale"] };
    const [cls, label] = map[t] || ["", t];
    return `<span class="tag tag--${cls}">${label}</span>`;
  }

  function renderShop() {
    const root = document.getElementById("shop-root");
    const toolbar = document.getElementById("shop-toolbar");
    const data = window.SCHMITZ_SHOP;
    if (!root || !data) return;

    const pageUrl = location.pathname.split("/").pop() || "shop.html";

    if (toolbar) {
      toolbar.innerHTML =
        `<button type="button" data-filter="all" aria-pressed="true">Alles</button>` +
        data.categories
          .map((c) => `<button type="button" data-filter="${c.id}" aria-pressed="false">${c.name}</button>`)
          .join("");
    }

    root.innerHTML = data.categories
      .map((cat) => {
        const products = cat.items
          .map((item) => {
            const id = `${cat.id}-${slug(item.name)}`;
            const tags = (item.tags || []).map(tagChip).join("");
            const badge = item.sale ? `<span class="product__badge">Sale</span>` : "";
            const desc = item.desc ? `<p class="product__desc">${item.desc}</p>` : "";
            const unit = item.unit ? `<span class="unit">${item.unit}</span>` : "";

            let priceBlock, action;
            if (item.price === null || item.price === undefined) {
              priceBlock = `<span class="ask">Preis auf Anfrage</span>`;
              action = `<a class="product__ask" href="kontakt.html">Anfragen</a>`;
            } else {
              priceBlock = `<b>${euro(item.price)}</b>${unit}`;
              const grams = Math.round((item.weight || 0) * 1000);
              action = `<button class="product__add snipcart-add-item" type="button"
                  aria-label="${item.name} in den Warenkorb"
                  data-item-id="${id}"
                  data-item-name="${item.name}"
                  data-item-price="${item.price.toFixed(2)}"
                  data-item-url="${pageUrl}"
                  data-item-weight="${grams}"
                  data-item-description="${cat.name.replace(/"/g, "")}${item.unit ? " · " + item.unit.replace(/"/g, "") : ""}">
                  ${ICON.plus}<span>Warenkorb</span>
                </button>`;
            }

            return `<article class="product" data-cat="${cat.id}">
              <div class="product__media">${badge}${ICON.box}</div>
              <div class="product__body">
                ${tags ? `<div class="product__tags">${tags}</div>` : ""}
                <h3 class="product__name">${item.name}</h3>
                ${desc}
                <div class="product__foot">
                  <span class="product__price">${priceBlock}</span>
                  ${action}
                </div>
              </div>
            </article>`;
          })
          .join("");
        const note = cat.note ? `<span class="menu-category__note">${cat.note}</span>` : "";
        return `<section class="menu-category" id="cat-${cat.id}" aria-label="${cat.name}">
          <div class="menu-category__head"><h2>${cat.name}</h2>${note}</div>
          <div class="product-grid">${products}</div>
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
    chrome();
    mobileNav();
    document.querySelectorAll("[data-hours]").forEach(renderHours);
    markToday();
    renderShop();
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  });
})();
