# PfotenPlan — Content-Planer für den Multi-Pet-Account

Eigenständiges Tool in diesem Repo, losgelöst von der Pizzeria-Website
nebenan — für den Instagram-Aufbau in der Haustier-Nische (Hund, Katze,
Pferd, Chinchilla, comedy-lastig).

- **`index.html`** — der Content-Planer selbst. Statisch, kein Build-Schritt,
  keine Server-Anbindung. Einfach im Browser öffnen oder lokal servieren:

  ```bash
  cd pet-content-planner
  python3 -m http.server 8000
  # dann im Browser: http://localhost:8000
  ```

  Verwaltet Post-Ideen (Idee → Skript → Gefilmt → Geschnitten → Gepostet),
  zeigt den Format-Mix über die vier Tierarten, ein Wochenziel und eine
  Checkliste für den 4-Stunden-Wochenrhythmus. Enthält eine Bibliothek mit
  16 Starter-Ideen gegen den leeren Kopf. Daten liegen ausschließlich lokal
  im Browser (`localStorage`) — regelmäßig über „Exportieren" sichern, bevor
  der Browser-Cache geleert wird.

- **`STRATEGIE.md`** — die Wachstums- und Analyse-Strategie: Positionierung,
  Content-Säulen, Wochenrhythmus, Wachstumshebel, Monetarisierungs-Fahrplan
  und was an „Automatisierung" seriös (ToS-konform) möglich ist.

Kein direkter Instagram-Zugriff vorhanden — die Zahlen aus dem
Insights-Dashboard müssen weiterhin manuell geprüft und für eine laufende
Analyse geteilt werden (siehe Abschnitt „Analyse-Rhythmus" in
`STRATEGIE.md`).
