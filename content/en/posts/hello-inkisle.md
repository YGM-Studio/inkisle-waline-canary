---
title: "InkIsle Waline Canary"
date: 2026-07-12
updated: 2026-07-12
summary: "An independent InkIsle acceptance site that validates comments and reactions with Waline."
tags:
  - InkIsle
  - Canary
category: "Validation"
interactionId: "waline-canary"
published: true
---

This site does not reference the InkIsle source checkout. It installs a pinned release from npm like a real user, verifies the installed version on every build, and deploys through GitHub Actions to GitHub Pages.

## Current validation scope

- Content-only project initialization and dependency installation.
- Static Markdown, localization, RSS, search index, and `llms.txt` outputs.
- The `/inkisle-waline-canary` GitHub Pages base path.
- The personal theme, color modes, and shared Waline comments and reactions.

## Interaction data

The Chinese and English pages use the same `waline-canary` interaction key. Comments are stored in a dedicated Neon database behind the Vercel-hosted Waline service so this site can validate the published package's Waline integration independently.
