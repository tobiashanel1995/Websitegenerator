# KI Speed Business — Affiliate Video-Content-Paket

Repo zum Bewerben des Digistore24-Produkts **„KI Speed Business"** über
Affiliate-Links mit aufmerksamkeitsstarken Kurzvideos (TikTok / Reels / Shorts).
Videos werden über **higgsfield.ai** (als MCP-Server verbunden) erzeugt.

## Schnellstart

1. **Affiliate-Link eintragen** → [`config/affiliate-link.md`](config/affiliate-link.md)
   (die einzige Stelle, an der der Link steht).
2. **Produkt-Fakten prüfen** → [`produkt/ki-speed-business.md`](produkt/ki-speed-business.md)
   (⚠️-Felder auf der Verkaufsseite verifizieren).
3. **Skript wählen** → [`skripte/`](skripte/) (5 fertige Skripte + Vorlage).
4. **Video produzieren** → [`produktion/higgsfield-workflow.md`](produktion/higgsfield-workflow.md).
5. **Kennzeichnen & posten** → [`strategie/compliance-kennzeichnung.md`](strategie/compliance-kennzeichnung.md).

## Struktur

```
config/       Affiliate-Link (zentral, einmal eintragen)
produkt/      Produkt-Steckbrief & erlaubte Aussagen
strategie/    Content-Strategie + Werbekennzeichnung/Compliance
hooks/        Hook-Bibliothek (erste 3 Sekunden = alles)
skripte/      Fertige Video-Skripte (01–05) + Vorlage
produktion/   Wie Skripte mit higgsfield zu Videos werden
```

## Prinzip

**Video macht neugierig → Klick auf Bio-Link → Webinar verkauft → 50 % Provision
(≈ 495,11 € netto/Verkauf).** Dein Job im Content: Aufmerksamkeit + Klick.

## Wichtig

- **Ehrlich bleiben:** keine Einkommensgarantien, nur Aussagen, die die
  Verkaufsseite deckt.
- **Werbung kennzeichnen:** Pflicht bei jedem Post (siehe Compliance).
- **Credits:** higgsfield Free-Plan mit 10 Credits — vor jeder Generierung
  Kosten prüfen (`get_cost`).
