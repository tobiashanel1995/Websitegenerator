/* =========================================================================
   Schmitz Bauzentrum — Shop-Katalog (EINE Datenquelle für Rendering + Snipcart).
   Kategorien & Produkte von schmitz-bauzentrum.de übernommen.

   Felder je Artikel:
     name   — Produktname
     price  — Preis in € (Zahl).  null => "Preis auf Anfrage" (kein Online-Kauf)
     unit   — Verkaufseinheit, z. B. "pro Sack (25 kg)", "pro m²", "pro Stück"
     weight — Gewicht in KG pro Einheit  (Basis der gestaffelten Versandkosten;
              Snipcart erhält daraus das Gewicht in Gramm)
     desc   — kurze Beschreibung (optional)
     tags   — ["neu"] | ["sale"] (optional)
     sale   — true blendet ein "Sale"-Badge ein (optional)

   ⚠ WICHTIG: Preise & Gewichte sind PLATZHALTER und müssen vom Betreiber mit
   den echten Werten befüllt werden. Erst dann sind Online-Kauf und die
   gewichtsbasierten Versandkosten korrekt. Details siehe README.md.
   ========================================================================= */
window.SCHMITZ_SHOP = {
  currency: "eur",
  categories: [
    {
      id: "pflaster",
      name: "Pflaster & Terrasse",
      note: "Beton- & Ökopflaster, Platten, Randsteine",
      items: [
        { name: "Solara Pflasterstein", price: 24.90, unit: "pro m²", weight: 90, tags: ["neu"], desc: "Beliebter Betonpflasterstein für Einfahrt und Wege." },
        { name: "Livorno Manhattan Pflaster", price: 32.50, unit: "pro m²", weight: 95, desc: "Moderne Steinoptik mit changierender Oberfläche." },
        { name: "Luca Betonplatte 60×40", price: 29.90, unit: "pro m²", weight: 85, desc: "Großformatige Terrassenplatte, frostbeständig." },
        { name: "Ökopflaster (versickerungsfähig)", price: 27.50, unit: "pro m²", weight: 92, desc: "Fugenoffenes Pflaster für versickerungsfähige Flächen." },
        { name: "Terrassenplatte Naturstein", price: null, unit: "pro m²", weight: 88, desc: "Auswahl im Ausstellungsgarten — Preis je nach Sorte." },
        { name: "Blockstufe 100 cm", price: 44.00, unit: "pro Stück", weight: 95, desc: "Massive Betonblockstufe für Treppen und Hänge." },
        { name: "Palisade rund Ø12", price: 6.90, unit: "pro Stück", weight: 14, desc: "Zur Beet- und Wegeeinfassung." },
        { name: "L-Stein 40×40×50", price: 18.90, unit: "pro Stück", weight: 42, desc: "Winkelstützstein für Höhenversprünge." }
      ]
    },
    {
      id: "baustoffe",
      name: "Baustoffe & Rohbau",
      note: "Zement, Beton, Mörtel, Mauerwerk",
      items: [
        { name: "Zement CEM II 25 kg", price: 6.49, unit: "pro Sack (25 kg)", weight: 25, desc: "Universalzement für Beton und Mörtel." },
        { name: "Estrichbeton 40 kg", price: 4.99, unit: "pro Sack (40 kg)", weight: 40, desc: "Trockenbeton für Estriche und Fundamente." },
        { name: "Mauermörtel MG II a 40 kg", price: 5.49, unit: "pro Sack (40 kg)", weight: 40 },
        { name: "Kalksandstein 240×115×113", price: 0.79, unit: "pro Stück", weight: 4.2, desc: "Vollstein für tragendes Mauerwerk." },
        { name: "Porenbeton-Planstein", price: 2.20, unit: "pro Stück", weight: 8.5, tags: ["neu"] },
        { name: "Bewehrungsmatte Q188", price: null, unit: "pro Stück", weight: 22, desc: "Baustahlmatte — Zuschnitt auf Anfrage." }
      ]
    },
    {
      id: "dach-daemmung",
      name: "Dach & Dämmung",
      note: "Dachziegel, Mineralwolle, WDVS",
      items: [
        { name: "Mineralwolle Klemmfilz 035 (100 mm)", price: 8.90, unit: "pro m²", weight: 3.2, desc: "Zwischensparren- und Trockenbaudämmung." },
        { name: "WDVS-Dämmplatte EPS 100 mm", price: 9.50, unit: "pro m²", weight: 1.6, desc: "Fassadendämmplatte für Wärmedämm-Verbundsysteme." },
        { name: "Dachziegel Frankfurter Pfanne", price: 0.95, unit: "pro Stück", weight: 4.1 },
        { name: "Unterspannbahn diffusionsoffen", price: 79.00, unit: "pro Rolle (75 m²)", weight: 9, desc: "Schützt die Dämmung vor Feuchtigkeit." },
        { name: "Dachrinne Zink halbrund 333", price: null, unit: "pro Stück", weight: 4, desc: "Länge & Zubehör auf Anfrage / Sonderanfertigung." }
      ]
    },
    {
      id: "boden",
      name: "Bodenbeläge",
      note: "Laminat, Parkett, Kork",
      items: [
        { name: "Laminat Eiche natur AC4", price: 14.90, unit: "pro m²", weight: 8.5, tags: ["neu"], desc: "Strapazierfähiger Klick-Laminat für Wohnräume." },
        { name: "Parkett Landhausdiele Eiche", price: 39.90, unit: "pro m²", weight: 9.2, desc: "Geöltes Mehrschichtparkett." },
        { name: "Korkboden natur", price: 29.90, unit: "pro m²", weight: 6.8, desc: "Warm und trittelastisch." },
        { name: "Trittschalldämmung 3 mm", price: 2.49, unit: "pro m²", weight: 0.4 },
        { name: "Massivholzdiele", price: null, unit: "pro m²", weight: 11, desc: "Sorten & Breiten in der Ausstellung — Preis auf Anfrage." }
      ]
    },
    {
      id: "wand",
      name: "Wand & Trockenbau",
      note: "Gipskarton, Putz, Tapeten",
      items: [
        { name: "Gipskartonplatte 12,5 mm", price: 6.90, unit: "pro Platte (2,60 m²)", weight: 22, desc: "Standard-Bauplatte für den Trockenbau." },
        { name: "Innenputz Gips 30 kg", price: 12.90, unit: "pro Sack (30 kg)", weight: 30 },
        { name: "Spachtelmasse fein 20 kg", price: 15.90, unit: "pro Sack (20 kg)", weight: 20 },
        { name: "Raufasertapete grob 25 m", price: 8.90, unit: "pro Rolle", weight: 2.4 },
        { name: "Vliesfasertapete", price: 12.90, unit: "pro Rolle", weight: 2.6, tags: ["neu"] }
      ]
    },
    {
      id: "farben",
      name: "Farben & Bauchemie",
      note: "Farben, Lacke, Kleb- & Dichtstoffe",
      items: [
        { name: "Alpina Innenweiß 10 L", price: 24.90, unit: "pro Eimer (10 L)", weight: 13, desc: "Deckstarke Wandfarbe — auch als Wunschton im Farbmisch-Center." },
        { name: "Wunschton Alpina Color Center", price: null, unit: "pro Gebinde", weight: 13, tags: ["neu"], desc: "Individuell gemischt nach Farbfächer — Preis je Ton/Menge." },
        { name: "Holzlasur außen 2,5 L", price: 22.90, unit: "pro Dose (2,5 L)", weight: 3 },
        { name: "Flexkleber Fliesen 25 kg", price: 16.90, unit: "pro Sack (25 kg)", weight: 25 },
        { name: "Silikon sanitär 310 ml", price: 4.49, unit: "pro Kartusche", weight: 0.45 },
        { name: "Bauschaum PU 750 ml", price: 6.90, unit: "pro Dose", weight: 0.9 }
      ]
    },
    {
      id: "werkzeug",
      name: "Werkzeuge & Maschinen",
      note: "Marken wie Bosch & Makita",
      items: [
        { name: "Bosch Akku-Bohrschrauber 18 V", price: 129.00, unit: "pro Stück", weight: 1.7, tags: ["neu"], desc: "Inkl. 2 Akkus und Koffer." },
        { name: "Makita Winkelschleifer 125 mm", price: 74.90, unit: "pro Stück", weight: 2.1 },
        { name: "Trennscheibe Metall 125 mm (10er)", price: 8.90, unit: "pro Pack (10 Stück)", weight: 0.6 },
        { name: "Bosch Kreuzlinienlaser", price: 99.00, unit: "pro Stück", weight: 1.2, desc: "Für Fliesen-, Trockenbau- und Montagearbeiten." },
        { name: "Alu-Stehleiter 2×8 Stufen", price: null, unit: "pro Stück", weight: 9, desc: "Weitere Leitern & Gerüste auf Anfrage." }
      ]
    },
    {
      id: "eisenwaren",
      name: "Eisenwaren & Befestigung",
      note: "Schrauben, Dübel, Schwerlast",
      items: [
        { name: "Spanplattenschrauben-Sortiment", price: 19.90, unit: "pro Box (900 Stück)", weight: 2.4, desc: "Gängige Längen in praktischer Sortimentsbox." },
        { name: "Universaldübel-Set", price: 9.90, unit: "pro Set", weight: 0.5 },
        { name: "Schwerlastanker M10 (25er)", price: 24.90, unit: "pro Pack (25 Stück)", weight: 1.8 },
        { name: "Injektionsmörtel 300 ml", price: 12.90, unit: "pro Kartusche", weight: 0.55, desc: "Für Schwerlastbefestigungen in Beton und Mauerwerk." }
      ]
    },
    {
      id: "garten",
      name: "Garten & Zaun",
      note: "Zaunsysteme, Erde, Gartenpflege",
      items: [
        { name: "Doppelstabmatte 200×123 anthrazit", price: 34.90, unit: "pro Element", weight: 15, tags: ["neu"], desc: "Stabiler Gartenzaun, passende Pfosten erhältlich." },
        { name: "Zaunpfosten anthrazit 150 cm", price: 14.90, unit: "pro Stück", weight: 6 },
        { name: "Pflanzerde 40 L", price: 5.49, unit: "pro Sack (40 L)", weight: 18 },
        { name: "Rindenmulch 60 L", price: 6.90, unit: "pro Sack (60 L)", weight: 20 },
        { name: "Rasensamen Sport & Spiel 5 kg", price: 24.90, unit: "pro Beutel (5 kg)", weight: 5 }
      ]
    },
    {
      id: "sale",
      name: "Sale & Restposten",
      note: "Solange der Vorrat reicht",
      items: [
        { name: "Terrassenplatte Restposten grau", price: 14.90, unit: "pro m²", weight: 85, sale: true, tags: ["sale"], desc: "Auslaufmodell — reduziert, solange Vorrat reicht." },
        { name: "Innenfarbe 5 L (B-Ware)", price: 9.90, unit: "pro Eimer (5 L)", weight: 6.5, sale: true, tags: ["sale"], desc: "Gebinde mit Lagerspuren, volle Funktion." },
        { name: "Laminat Restmenge Eiche grau", price: 8.90, unit: "pro m²", weight: 8.5, sale: true, tags: ["sale"] }
      ]
    }
  ]
};
