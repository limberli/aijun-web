# AI JUN — AI Copilot for QA Engineers

A production-ready landing page for **AI JUN**, an AI copilot that analyzes
requirements, generates test cases, discovers edge cases, and improves QA
workflows. Dark futuristic UI with neon cyan/blue glow, glassmorphism, animated
grid background, and scroll-triggered motion.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens — see `src/index.css`)
- **Framer Motion** for scroll/hover animations
- **lucide-react** for icons (brand glyphs are inline SVG in `src/components/BrandIcons.tsx`)
- **react-i18next** for full RU/EN internationalization

## Run locally

```bash
npm install      # dependencies are already installed in this repo
npm run dev      # start the dev server → http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Internationalization (RU / EN)

- All UI strings live in `src/i18n/en.json` and `src/i18n/ru.json` — no
  hardcoded copy in components.
- Language config + localStorage persistence: `src/i18n/config.ts`.
- The **EN | RU** toggle is in the navbar (`src/components/LanguageToggle.tsx`).
- Default is `EN`; the choice persists to `localStorage` (`aijun-lang`) and
  updates `<html lang>`.

## Structure

```
src/
  components/   Navbar, Logo, Button, RobotMascot, AnimatedBackground,
                LanguageToggle, BrandIcons, Section
  sections/     Hero, Features, HowItWorks, ProductDemo, Roadmap,
                SocialLinks, Footer
  i18n/         config.ts, en.json, ru.json
  lib/          motion.ts (shared Framer Motion variants + easing)
  index.css     Tailwind v4 @theme brand tokens, fonts, utilities
```

## Brand tokens

Defined as Tailwind theme tokens in `src/index.css`:

| Token | Value |
| --- | --- |
| `--color-brand-cyan` | `#00E5FF` |
| `--color-brand-blue` | `#0099FF` |
| `--color-ink` (background) | `#0A1020` |
| `--color-surface` | `#111827` |

Fonts: **Space Grotesk** (display) + **DM Sans** (body) + **JetBrains Mono**
(code/dashboard).
