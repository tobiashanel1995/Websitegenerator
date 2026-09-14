# Produktion: Skript → Video mit higgsfield

So wird aus einem Skript ein fertiger Clip. higgsfield ist als MCP-Server
verbunden — Claude kann die Generierung direkt ausführen.

## Voraussetzung: Guthaben

- Aktuell: **Pro-Plan, ~610 Credits** (nach Aufladung).
- Richtwerte: 1 Video-Szene (`seedance_2_5`, 5 s) ≈ **32,5 Credits**,
  1 Bild (`gpt_image_2_5`) ≈ **1 Credit**. Ein Clip mit 3 Szenen ≈ **~97,5 Credits**.
- **Immer zuerst `get_cost`** aufrufen (Kostenvorschau, ohne zu generieren),
  bevor echt generiert wird. So wird nichts ungewollt verbraucht.
- Budget im Blick behalten: 610 Credits ≈ **6 komplette Clips**.

## Ablauf pro Clip

1. **Skript wählen** (`skripte/NN-*.md`).
2. **Szenen-Prompts** aus der Body-Tabelle nehmen (Spalte „Visual").
3. **Kosten prüfen:** Generierung mit `get_cost: true` aufrufen.
4. **Video generieren** — je Szene ein Clip, 9:16:
   - Standard-Modell für allgemeines Video: **`seedance_2_5`**
   - `aspect_ratio: "9:16"` (Pflicht für TikTok/Reels/Shorts!)
   - `duration`: ~5–6 s pro Szene
5. **Voiceover** (optional): `generate_audio` mit dem Voiceover-Text, oder
   eigene Stimme im Schnittprogramm einsprechen.
6. **Zusammenschnitt** (extern, z. B. CapCut): Szenen + VO + Untertitel +
   Overlays (`Werbung`, Hook, `→ Link in Bio`) + trendiger Sound.
7. **Upscale** (optional): `upscale_video` auf 1080p/2K für saubere Qualität.
8. **Veröffentlichen** + Werbekennzeichnung (siehe Compliance).

## Modell-Wahl (Kurzüberblick)

| Zweck | Modell |
|---|---|
| Allgemeines Video | `seedance_2_5` |
| Produkt-/Werbe-Look | `marketing_studio_video` |
| Bild (Thumbnail, Overlay-Grafik) | `gpt_image_2_5` |
| Voiceover / Sound | `generate_audio` |
| Musik-Trends checken | `tiktok_music_trending` |

> Vor der Wahl gern `models_explore` nutzen — zeigt verfügbare Modelle,
> Seitenverhältnisse, Dauer und Parameter live an.

## Eigene Medien einbinden

Willst du eigene Fotos/Clips (z. B. dein Gesicht) verwenden:
- Claude ruft `media_upload_widget` auf → du lädst dort hoch.
- **Nicht** nach Chat-Anhängen fragen — der Upload läuft über das Widget.

## Wichtige Regeln

- **9:16** für alle Kurzvideos — sonst falsches Format.
- **Werbung-Overlay** und **KI-Label** nicht vergessen (Compliance).
- **Affiliate-Link** kommt in die **Bio**, nie eingebrannt in den Clip.
- Ehrliche Aussagen — nur was `produkt/ki-speed-business.md` deckt.

## Nächster Schritt

Sag einfach: **„Generiere Skript 01, Szene 1"** — Claude prüft dann die Kosten
und erzeugt den Clip (nach deiner Freigabe des Credit-Verbrauchs).
