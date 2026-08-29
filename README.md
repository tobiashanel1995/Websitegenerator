# Schmitz Bauzentrum — Website

Neue, modernisierte Website für **Schmitz Bauzentrum** (Baustoffe, Baufachmarkt &
Ausstellung) mit zwei Standorten in **Stolberg-Breinig** und **Langerwehe**. Die
Inhalte der bisherigen Seite bleiben erhalten, das Erscheinungsbild ist neu und an die
Marke angelehnt. **Neu:** ein **Online-Verkauf** mit **Lieferung** und
**Vorbestellung zur Abholung**.

Reine **statische Website** (HTML/CSS/JavaScript, kein Build-Schritt). Die echte
**Online-Bezahlung** läuft über **Snipcart** (mit Stripe/PayPal im Hintergrund), sodass
kein eigener Server nötig ist. Die **Versandkosten** sind **gewichtsbasiert gestaffelt**.

---

## Struktur

```
index.html          Startseite (Hero, Wege, Leistungen, Standorte, Tradition)
shop.html           ONLINE-VERKAUF: Katalog + Warenkorb, Lieferung & Abholung
leistungen.html     Leistungen & Service (Beratung, Farbmisch-Center, Lieferung …)
sortiment.html      Sortiment/Baufachmarkt-Übersicht (verlinkt in den Shop)
ausstellung.html    Ausstellung: Haus & Ausbau, Garten, Kataloge
sale.html           Sale & Restpostenbörse
ueber-uns.html      Unternehmen: Geschichte seit 1912, Werte, Karriere
kontakt.html        Kontaktformular + beide Standorte, Öffnungszeiten, Anfahrt
impressum.html · datenschutz.html · agb.html · widerruf.html
                    Rechts-VORLAGEN — ausfüllen + juristisch prüfen lassen
assets/css/styles.css   Design-System (Anthrazit/Beton + Signal-Akzent)
assets/js/products.js   DIE Datenquelle des Shops (Namen, Preise, Einheit, Gewicht)
assets/js/main.js       Header/Footer, Menü, Öffnungszeiten (2 Standorte), Katalog-Rendering
assets/js/cart.js       Snipcart-Einbindung (Bezahlung + Versand)
```

---

## Lokal ansehen

```bash
cd <projektordner>
python3 -m http.server 8000
# dann im Browser: http://localhost:8000
```

Ohne Snipcart-Key funktioniert bereits alles außer der Online-Bezahlung
(Katalog, Navigation, Kontakt, Telefon). In der Browser-Konsole erscheint dann ein
Hinweis, dass der Key noch fehlt.

---

## Online-Verkauf einrichten (Snipcart)

1. Konto auf <https://snipcart.com> anlegen (Test-Modus ist kostenlos).
2. **Account → API Keys**: den **öffentlichen** (public) Test-Key kopieren.
3. In `assets/js/cart.js` den Wert `REPLACE_WITH_YOUR_SNIPCART_PUBLIC_API_KEY`
   durch diesen Key ersetzen.
4. Im Snipcart-Dashboard **Stripe** oder **PayPal** verbinden.
5. Die eigene **Domain** (z. B. `schmitz-bauzentrum.de`) hinterlegen. Snipcart
   validiert die Preise, indem es `data-item-url` (die Seite `shop.html`) crawlt — die
   Seite muss also öffentlich erreichbar sein.
6. Zum Livegang auf den **Live-Key** wechseln.

> **Sicherheit:** Nur der *öffentliche* Key gehört in den Code. Der geheime Schlüssel
> bleibt ausschließlich im Snipcart-/Stripe-Dashboard.

### Versandkosten & Abholung einrichten (wichtig)

Die zwei Verkaufswege werden im **Snipcart-Dashboard unter *Shipping* als
Versandmethoden** angelegt:

- **Abholung im Bauzentrum** — Preis **0,00 €** (die „Vorbestellung zur Abholung").
- **Lieferung** — **gewichtsbasierte Staffelung**. Jeder Artikel liefert sein Gewicht
  automatisch über `data-item-weight` (aus `products.js`, an Snipcart in **Gramm**).
  Legen Sie im Dashboard die **Gewichtsstufen/Zonen** mit den **echten Sätzen** an.

> Die konkrete Staffelung (Gewicht/Zone/Betrag) ist im Code **nicht** hinterlegt —
> sie wird im Dashboard gepflegt. Für sehr schwere/sperrige Baustoffe empfiehlt sich
> zusätzlich eine Methode **„Lieferung nach Aufwand — auf Anfrage"**.

---

## Formular (Kontaktanfrage)

Das Kontaktformular postet an einen Platzhalter `https://formspree.io/f/DEIN_FORMSPREE_ID`.

1. Kostenloses Formular auf <https://formspree.io> anlegen.
2. Die Formular-ID in `kontakt.html` im `action`-Attribut eintragen.
3. Ohne Formspree funktioniert der Button **„Stattdessen per E-Mail"** als Fallback
   (öffnet das E-Mail-Programm). Passe dafür die Adresse `email` in `assets/js/main.js`
   (Objekt `SITE`) an.

---

## Inhalte pflegen

- **Shop-Katalog:** ausschließlich in `assets/js/products.js`.
  - `price: null` bedeutet „Preis auf Anfrage" (kein Online-Kauf, statt Button ein
    „Anfragen"-Link) — echten Preis eintragen, dann erscheint der Warenkorb-Button.
  - `weight` (in **kg**) ist die Basis der **gewichtsbasierten Versandkosten**.
  - `unit` ist die Verkaufseinheit (z. B. „pro m²", „pro Sack (25 kg)").
  - `tags: ["neu"|"sale"]` und `sale: true` blenden Kennzeichnungen/Badges ein.
- **Kontakt / Öffnungszeiten / Standorte / Telefon:** zentral im Objekt `SITE` in
  `assets/js/main.js` (zwei Standorte mit getrennten Öffnungszeiten).
- **Logo:** aktuell ein gezeichnetes Wortmarken-Emblem (Funktion `brandMark` in
  `assets/js/main.js`) — kann durch eine echte Bilddatei ersetzt werden.
- **Farbe/Design:** Markenfarbe zentral über die CSS-Variable `--accent` in
  `assets/css/styles.css` austauschbar.

---

## Deployment

Statisch hostbar bei **Netlify**, **GitHub Pages**, **Vercel** oder klassischem
Webspace. Einfach alle Dateien hochladen; `index.html` ist die Startseite. Für
**Netlify** funktionieren zudem native Formulare (Alternative zu Formspree).

---

## Noch zu erledigen (vor dem Livegang)

- [ ] **Echte Preise & Gewichte** in `products.js` eintragen (Voraussetzung für
      korrekten Online-Kauf und Versandkosten)
- [ ] Snipcart-Key + Stripe/PayPal einrichten (siehe oben)
- [ ] **Versandstufen/Zonen** mit echten Sätzen im Snipcart-Dashboard anlegen
- [ ] Formspree-ID bzw. Empfänger-E-Mail eintragen
- [ ] Rechtsseiten (Impressum, Datenschutz, AGB, Widerruf) ausfüllen **und
      juristisch prüfen lassen**
- [ ] Echte Firmendaten (Registereintrag, USt-IdNr., Geschäftsführung) ergänzen
- [ ] Optional: Google Fonts lokal hosten (datenschutzfreundlicher)
- [ ] Echte Produktfotos/Logo einsetzen (optional)

> Hinweis: Die Rechtstexte sind **Vorlagen** und stellen **keine Rechtsberatung** dar.
> Produktpreise/-gewichte im Shop sind **Platzhalter** und vor dem Livegang zu ersetzen.
