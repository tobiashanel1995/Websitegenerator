# Render-Log — Clip 01 „3 KI-Learnings"

Generiert mit higgsfield `seedance_2_5`, 9:16, 720p, je 5 s.
Kosten: 3 × 32,5 = **97,5 Credits**.

> ⚠️ Die CloudFront-URLs können nach einiger Zeit ablaufen — Videos zeitnah
> herunterladen und lokal/extern sichern.

| Szene | Prompt (Kurz) | Job-ID | URL |
|---|---|---|---|
| 1 | Person am Laptop, futuristische UI | `6d0caec9-c732-4c3b-80b3-8622114a1bb5` | https://d8j0ntlcm91z4.cloudfront.net/user_3IQc4k4LTAKutg1hFO59z1mTNgB/hf_20260914_163933_6d0caec9-c732-4c3b-80b3-8622114a1bb5.mp4 |
| 2 | „System"-Infografik, Neon-Pfeile | `6a6eeaf0-8b88-41d6-8b59-e12fb06e9b3e` | https://d8j0ntlcm91z4.cloudfront.net/user_3IQc4k4LTAKutg1hFO59z1mTNgB/hf_20260914_163933_6a6eeaf0-8b88-41d6-8b59-e12fb06e9b3e.mp4 |
| 3 | Hand tippt „Start"-Button | `c49fa0be-30c6-4c2b-9f8f-9fdecceb0164` | https://d8j0ntlcm91z4.cloudfront.net/user_3IQc4k4LTAKutg1hFO59z1mTNgB/hf_20260914_163839_c49fa0be-30c6-4c2b-9f8f-9fdecceb0164.mp4 |

## Voiceover

- Modell `seed_audio`, Preset-Stimme „Arthur" (männlich), Job `4f2734a6-b27a-418c-b71d-fdbba8288e27`.
- Roh 35,8 s → mit ffmpeg auf **25,0 s** beschleunigt (`atempo=1.431`) + `loudnorm`.
- Kosten: **3,3 Credits**.

## Finaler Zusammenschnitt (ffmpeg, in dieser Session gebaut)

- 3 Szenen concat → auf 25,0 s gestreckt (Slow-Mo, `setpts=1.65195`), 30 fps.
- VO als Tonspur, Overlays eingebrannt: `Werbung` (durchgehend), Hook (0–6 s),
  3 Kernpunkte (6,5–20 s), `Link in meiner Bio` (20–25 s).
- Ausgabe: **720×1280, 25 s** — an den User geliefert (Scratchpad ist flüchtig,
  Datei lokal sichern!).

## Offen / optional

- [ ] Feinschliff der Overlay-Timings an die genauen VO-Betonungen anpassen
- [ ] Trending-Sound leise unterlegen (`tiktok_music_trending`)
- [ ] Optional Upscale auf 1080p (`upscale_video`)
- [ ] Werbekennzeichnung/KI-Label beim Posten aktivieren (Compliance)
- [ ] Veröffentlichung: TikTok-Account verbinden (`tiktok_connect`) → posten
