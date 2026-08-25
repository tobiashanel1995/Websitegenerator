# Pizzeria & Gelateria Gattopardo — Website

Eigene Website für die Pizzeria & Gelateria Gattopardo in Stolberg — unabhängig
von Lieferando. Gäste können **online oder telefonisch bestellen**, die
**Gelateria** entdecken und **Torten für Feiern vorbestellen**.

Reine **statische Website** (HTML/CSS/JavaScript, kein Build-Schritt). Die echte
**Online-Bezahlung** läuft über **Snipcart** (mit Stripe/PayPal im Hintergrund),
sodass kein eigener Server nötig ist.

---

## Struktur

```
index.html          Startseite (Hero, Wege, Öffnungszeiten)
speisekarte.html    Vollständige Karte + Online-Warenkorb (Snipcart)
gelateria.html      Eisdiele zum Besuchen (Sorten als Platzhalter)
torten.html         Torten-Vorbestellung (Anfrageformular)
kontakt.html        Kontakt, Öffnungszeiten, Anfahrt, Nachricht
impressum.html · datenschutz.html · agb.html · widerruf.html
                    Rechts-VORLAGEN — ausfüllen + juristisch prüfen lassen
assets/css/styles.css   Design-System
assets/js/menu-data.js  DIE Datenquelle der Speisekarte (Namen, Preise)
assets/js/main.js       Header/Footer, Menü-Rendering, Öffnungszeiten
assets/js/cart.js       Snipcart-Einbindung (Bezahlung)
```

---

## Lokal ansehen

```bash
cd <projektordner>
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

---

## Einrichtung der Online-Bezahlung (Snipcart)

Ohne diesen Schritt funktioniert die **telefonische** Bestellung bereits; der
Online-Warenkorb wird erst mit einem gültigen Snipcart-Key aktiv.

1. Konto auf <https://snipcart.com> anlegen (Test-Modus ist kostenlos).
2. **Account → API Keys**: den **öffentlichen** (public) Test-Key kopieren.
3. In `assets/js/cart.js` den Wert `REPLACE_WITH_YOUR_SNIPCART_PUBLIC_API_KEY`
   durch diesen Key ersetzen.
4. Im Snipcart-Dashboard **Stripe** oder **PayPal** verbinden.
5. Die eigene **Domain** hinterlegen. Snipcart validiert die Preise, indem es
   `data-item-url` (die Seite `speisekarte.html`) crawlt — die Seite muss also
   öffentlich erreichbar sein.
6. Zum Livegang auf den **Live-Key** wechseln.

> **Sicherheit:** Nur der *öffentliche* Key gehört in den Code. Der geheime
> Schlüssel bleibt ausschließlich im Snipcart-/Stripe-Dashboard.

Alternative ohne Snipcart-Gebühren: Stripe Checkout über eine kleine
Serverless-Funktion (z. B. Netlify/Vercel Functions). Dann ist die Seite
weiterhin fast vollständig statisch, benötigt aber diese eine Funktion.

---

## Formulare (Torten- & Kontaktanfrage)

Die Formulare posten an einen Platzhalter `https://formspree.io/f/DEIN_FORMSPREE_ID`.

1. Kostenloses Formular auf <https://formspree.io> anlegen.
2. Die Formular-ID in `torten.html` und `kontakt.html` im `action`-Attribut
   eintragen.
3. Ohne Formspree funktioniert der Button **„Stattdessen per E-Mail"** als
   Fallback (öffnet das E-Mail-Programm). Passe dafür die Adresse `email` in
   `assets/js/main.js` (Objekt `SITE`) an.

---

## Inhalte pflegen

- **Speisekarte:** ausschließlich in `assets/js/menu-data.js`. Preis `null`
  bedeutet „Preis auf Anfrage" (kein Online-Kauf) — echten Preis eintragen, dann
  erscheint automatisch der Warenkorb-Button. Einige Premium-Pizzen stehen noch
  auf `null`, weil der Preis nicht sicher vorlag → bitte ergänzen.
- **Eissorten:** in `gelateria.html` (Abschnitt „Unsere Sorten") — aktuell
  Beispiel-Platzhalter.
- **Torten-Beispiele:** in `torten.html`.
- **Kontakt/Öffnungszeiten/Telefon:** zentral im Objekt `SITE` in
  `assets/js/main.js`.
- **Logo:** aktuell eine gezeichnete Majolika-Rosette (Funktion `brandMark` in
  `assets/js/main.js`) — kann durch eine echte Bilddatei ersetzt werden.

---

## Deployment

Statisch hostbar bei **Netlify**, **GitHub Pages**, **Vercel** oder klassischem
Webspace. Einfach alle Dateien hochladen; `index.html` ist die Startseite.

Für **Netlify** funktionieren zudem native Formulare (Alternative zu Formspree).

---

## Noch zu erledigen (vor dem Livegang)

- [ ] Snipcart-Key + Stripe/PayPal einrichten (siehe oben)
- [ ] Formspree-ID bzw. Empfänger-E-Mail eintragen
- [ ] Rechtsseiten (Impressum, Datenschutz, AGB, Widerruf) ausfüllen **und
      juristisch prüfen lassen**
- [ ] **Allergen-/Zusatzstoffangaben** ergänzen (LMIV)
- [ ] Echte Eissorten und Torten-Beispiele/Preise eintragen
- [ ] Offene Pizza-Preise (`price: null`) ergänzen
- [ ] Optional: Google Fonts lokal hosten (datenschutzfreundlicher)
- [ ] Echte Fotos/Logo einsetzen (optional)

> Hinweis: Die Rechtstexte sind **Vorlagen** und stellen **keine Rechtsberatung**
> dar.
