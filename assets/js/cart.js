/* =========================================================================
   Snipcart-Integration — echter Warenkorb + Bezahlung (Stripe/PayPal),
   ohne eigenen Server. Voll statisch.

   >>> EINRICHTUNG (siehe README.md) <<<
   1. Konto auf https://snipcart.com anlegen (Test-Modus ist kostenlos).
   2. Unter Account → API Keys den ÖFFENTLICHEN Key kopieren.
   3. Unten SNIPCART_PUBLIC_API_KEY ersetzen.
   4. Im Snipcart-Dashboard Stripe oder PayPal verbinden und die
      Domain (z. B. schmitz-bauzentrum.de) hinterlegen, damit die Preise
      per Crawling validiert werden können.

   >>> VERSAND & ABHOLUNG (Verkaufsbereich) <<<
   Die zwei Wege werden als Snipcart-VERSANDMETHODEN im Dashboard angelegt:
     • "Abholung im Bauzentrum" — Preis 0,00 € (Vorbestellung zur Abholung).
     • "Lieferung" — GEWICHTSBASIERTE Staffelung. Jeder Artikel liefert sein
       Gewicht über data-item-weight (aus products.js, in Gramm). Im Dashboard
       unter Shipping die Gewichtsstufen/Zonen mit den echten Sätzen anlegen.
   Für sehr schwere/sperrige Baustoffe empfiehlt sich zusätzlich eine Methode
   "Lieferung nach Aufwand — auf Anfrage".

   Der ÖFFENTLICHE Key darf im Browser stehen — der geheime Key niemals.
   ========================================================================= */
(function () {
  "use strict";

  var SNIPCART_PUBLIC_API_KEY = "REPLACE_WITH_YOUR_SNIPCART_PUBLIC_API_KEY";

  window.SnipcartSettings = {
    publicApiKey: SNIPCART_PUBLIC_API_KEY,
    loadStrategy: "on-user-interaction",
    version: "3.7.1",
    currency: "eur",
    modalStyle: "side",
    templatesUrl: null
  };

  // Offizieller Snipcart-Loader (v3, moderne Einbindung).
  (function () {
    var c, d;
    (d = (c = window.SnipcartSettings).version) != null || (c.version = "3.0");
    var s,
      S,
      w = window,
      D = document,
      t = function () {
        t.exe ? t.exe() : t.q.push(arguments);
      };
    t.q = [];
    w.LoadSnipcart = t;
    function e() {
      if (!D.getElementById("snipcart")) {
        var i = D.createElement("div");
        i.id = "snipcart";
        i.hidden = true;
        i.dataset.apiKey = window.SnipcartSettings.publicApiKey;
        D.body.appendChild(i);
      }
      var n = D.createElement("script");
      n.src =
        "https://cdn.snipcart.com/themes/v" +
        window.SnipcartSettings.version +
        "/default/snipcart.js";
      n.async = true;
      D.head.appendChild(n);
      var l = D.createElement("link");
      l.rel = "stylesheet";
      l.href =
        "https://cdn.snipcart.com/themes/v" +
        window.SnipcartSettings.version +
        "/default/snipcart.css";
      D.head.appendChild(l);
    }
    "on-user-interaction" === window.SnipcartSettings.loadStrategy
      ? (S = ["mouseover", "touchstart", "keydown"]).forEach(function (i) {
          w.addEventListener(i, function o() {
            e();
            S.forEach(function (r) {
              w.removeEventListener(r, o);
            });
          });
        })
      : "DOMContentLoaded" === D.readyState || "complete" === D.readyState
      ? e()
      : D.addEventListener("DOMContentLoaded", e);
  })();

  // Hinweis in der Konsole, falls der Key noch nicht gesetzt wurde.
  if (SNIPCART_PUBLIC_API_KEY.indexOf("REPLACE_WITH") === 0) {
    console.warn(
      "[Schmitz Bauzentrum] Snipcart-Key fehlt noch. Der Online-Warenkorb ist " +
        "erst nach Eintragen des öffentlichen API-Keys in assets/js/cart.js aktiv. " +
        "Die Website (Katalog, Kontakt, Telefon) funktioniert unabhängig davon."
    );
  }
})();
