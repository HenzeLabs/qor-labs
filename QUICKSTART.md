# QUICKSTART.md — Paste This Into Claude Code Terminal

> Copy the prompt below into Claude Code after navigating to your project directory.

## First-Time Setup

```bash
# Your project already exists — just navigate to it
cd /Users/laurenadmin/_Projects/qor-labs

# Copy CLAUDE.md, PROGRESS.md, DESIGN-SYSTEM.md, API-REFERENCE.md into this directory root
# (alongside the existing Shopify theme files)

# Verify git is connected
git remote -v
# Should show: origin  https://github.com/HenzeLabs/qor-labs.git

# Pull latest theme from Shopify dev theme
shopify theme pull --theme 176271589540 --store qor-labs.myshopify.com

# Commit current state
git add -A
git commit -m "chore: sync theme from Shopify + add project docs"

# Start Claude Code
claude
```

---

## Kickoff Prompt (Paste Into Claude Code)

```
Read CLAUDE.md, PROGRESS.md, DESIGN-SYSTEM.md, and API-REFERENCE.md completely before doing anything.

You are redesigning qorlabs.com — a Shopify lab equipment store (qor-labs.myshopify.com). The design is inspired by rapha.cc (premium, editorial, minimal, confident).

This repo is at /Users/laurenadmin/_Projects/qor-labs and connected to GitHub at HenzeLabs/qor-labs. The dev theme ID is 176271589540.

RULES:
- Never hardcode product data. Use Liquid objects.
- Never hardcode URLs. Use Shopify handles.
- Never print or log API credentials from .env.shopify.
- Mobile first. Always.
- Check PROGRESS.md to see what phase we're in.
- Update PROGRESS.md checkboxes as you complete tasks.
- Commit working code only.
- Push to dev theme with: shopify theme push --theme 176271589540 --store qor-labs.myshopify.com
- Preview at: https://qorlabs.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=176271589540

Start with Phase 1 (Foundation):
1. Examine the current theme structure (ls the directories)
2. Set up Tailwind CSS with the design tokens from DESIGN-SYSTEM.md
3. Rebuild layout/theme.liquid with proper font imports (Instrument Serif + DM Sans from Google Fonts)
4. Create base CSS custom properties from the color/spacing system
5. Verify the foundation renders correctly with shopify theme dev

Do NOT jump ahead to other phases. Foundation first.
```

---

## Session Resume Prompt (For Continuing Work)

```
Read CLAUDE.md and PROGRESS.md. Check where we left off. 

What phase are we in? What tasks are completed? What's next?

Show me the current status, then continue from where we stopped. Do not redo completed work.
```

---

## Phase Transition Prompt (When Starting a New Phase)

```
Phase [X] is complete. Read PROGRESS.md and update all completed checkboxes.

Now read the requirements for Phase [X+1] in PROGRESS.md. Plan your approach before coding:
1. List every file you'll create or modify
2. List every Liquid object you'll need
3. Identify any dependencies on previous phases
4. Confirm the plan, then begin.
```

---

## Emergency "Get Back On Track" Prompt

```
STOP. Read CLAUDE.md completely. Read PROGRESS.md completely.

You may have drifted. Check:
1. Is there any hardcoded product data? Fix it — use Liquid objects.
2. Are there any hardcoded URLs? Fix them — use Shopify handles.
3. Does the design match the DESIGN-SYSTEM.md tokens? Verify colors, fonts, spacing.
4. Is PROGRESS.md accurate? Update it.
5. Are we on the correct phase? Don't skip ahead.

Report what you found and what you fixed.
```
