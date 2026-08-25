# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **Claude Code skills repository**, not an application. It contains no
application source, build system, package manifest, or test suite yet. Its
current purpose is to hold Claude Code skills that shape how AI assistants
work here — presently a single skill, `frontend-design`, vendored from the
upstream `anthropics/skills` repo.

The repository name (`Websitegenerator`) signals the intended direction: it is
scaffolded to build websites with the help of the bundled design skill. Treat
any future application code you add as new territory — establish conventions,
a build, and tests as you go, and document them back into this file.

## Skills architecture

Skills are the only meaningful content here, and the layout has three moving
parts that must stay in sync:

- **`.agents/skills/<name>/`** — the real skill files (`SKILL.md`, plus assets
  like `LICENSE.txt`). This is the source of truth on disk.
- **`.claude/skills/<name>`** — a **symlink** pointing at
  `../../.agents/skills/<name>`. This is what Claude Code actually loads. The
  indirection lets the same skill files serve both the generic `.agents`
  convention and Claude Code's `.claude` lookup path.
- **`skills-lock.json`** — a lockfile (`version: 1`) recording each skill's
  upstream `source` (e.g. `anthropics/skills`), `sourceType` (`github`),
  `skillPath` within that source, and a `computedHash` of the pinned content.

When adding or updating a skill, update all three consistently: place files
under `.agents/skills/`, create/point the `.claude/skills/` symlink at them,
and add/refresh the matching `skills-lock.json` entry (including a recomputed
`computedHash`). A hash in the lockfile that no longer matches the files on
disk means the skill has drifted from its pinned upstream version.

## The frontend-design skill

`frontend-design` is guidance (not code) for producing distinctive,
non-templated UI: opinionated palette/typography/layout choices, a two-pass
brainstorm-then-critique process, and a warning against the three "AI-default"
looks (cream+serif+terracotta; near-black+acid accent; broadsheet hairlines).
When building any website or UI in this repo, this skill's approach is the
house style — read `.agents/skills/frontend-design/SKILL.md` and follow it.

## Workflow notes

- There are no build, lint, or test commands — nothing here compiles or runs.
  Do not invent or run such commands until real tooling exists.
- Development happens on feature branches (e.g. `claude/...`); the remote is
  `origin` → `github.com/tobiashanel1995/Websitegenerator`.
