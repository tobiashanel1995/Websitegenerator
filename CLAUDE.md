# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is an **affiliate video-content repository**, not a software application.
Its purpose: promote the Digistore24 product **„KI Speed Business"** (vendor
`powerupbusiness`, ~495,11 € net commission per sale, 50 % on the frontend
webinar) through attention-grabbing short-form videos (TikTok / Reels / YouTube
Shorts). Videos are produced with **higgsfield.ai**, connected as an MCP server.

It contains no build system, tests, or application source — the deliverables are
Markdown (product facts, strategy, hooks, ready-made video scripts, production
workflow) plus, later, generated media. Everything is in **German**, because the
product and audience are German-speaking; keep new content German unless asked.

## Repository map

- **`config/affiliate-link.md`** — the single source of truth for the affiliate
  promolink. Every script points here; the link is a placeholder
  (`YOUR_AFFILIATE_LINK`) until the user provides theirs. Never hardcode the link
  elsewhere.
- **`produkt/ki-speed-business.md`** — product fact sheet + the funnel. **Only
  claims listed here (and on the official sales page) may appear in videos.**
  Fields marked ⚠️ are unverified and must be checked before use.
- **`strategie/`** — content strategy and, critically,
  `compliance-kennzeichnung.md` (German ad-disclosure rules).
- **`hooks/hook-bibliothek.md`** — swappable opening hooks (first 3 seconds).
- **`skripte/`** — ready-made video scripts (`NN-*.md`) + `_vorlage.md` template.
  Each script = one clip = all three platforms (9:16).
- **`produktion/higgsfield-workflow.md`** — how a script becomes a video via the
  higgsfield MCP tools.

## Hard rules for content (do not violate)

- **No income guarantees or fabricated results.** No invented testimonials,
  screenshots, or numbers. Only what the sales page supports. This is both a
  legal and a platform-policy requirement — see `strategie/compliance-kennzeichnung.md`.
- **Every video is advertising** and must be labelled („Werbung" overlay +
  caption + platform toggle). The affiliate link goes in the **bio**, never
  burned into the clip.
- **KI-generated content** may need an AI-content label on each platform.

## Working with higgsfield (MCP)

- The server is connected and authenticated (Pro plan, ~610 credits after top-up).
- **Always call generation tools with `get_cost: true` first** and get the
  user's go-ahead before spending credits — the balance is tiny.
- Short videos must be **`aspect_ratio: "9:16"`**. Default video model:
  `seedance_2_5`; images: `gpt_image_2_5`; audio: `generate_audio`.
- For local media, call `media_upload_widget` (never ask for chat attachments).
- Use `models_explore` to confirm current models/params rather than assuming.

## Skills

The `frontend-design` skill is still vendored (`.agents/skills/` with a
`.claude/skills/` symlink, pinned via `skills-lock.json`) — keep those three in
sync if skills change. It applies only if a landing/bridge page gets added later;
the current focus is the video content pack.

## Workflow notes

- No build/lint/test commands exist — nothing here compiles or runs.
- Development on feature branches (`claude/...`); remote `origin` →
  `github.com/tobiashanel1995/Websitegenerator`.
