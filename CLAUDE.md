# Vale Tech Talks — Project Guide

## Overview

Landing page for **Vale Tech Talks**, a free community tech meetup for IT professionals and students in the Vale do Rio dos Sinos region (Novo Hamburgo, RS, Brazil). Events are held at Universidade Feevale.

Live site: `https://valetechtalks.com.br`
Meetup group: `https://www.meetup.com/valetechtalks/`

---

## Tech Stack

- **Framework**: Next.js 16 (App Router) with `output: "export"` — fully static, no server-side runtime
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 with a custom dark theme
- **Icons**: lucide-react
- **React**: 19.2
- **Package manager**: pnpm 10.32.1
- **Node.js**: 24.14.0 LTS (pinned via `mise.toml`)
- **Dev server**: `next dev` (Turbopack is the default in Next.js 16)

---

## Setup

```bash
mise install      # installs Node 24.14.0 and pnpm 10.32.1
pnpm install
pnpm dev          # starts dev server at http://localhost:3000
pnpm build        # produces static export in /out
pnpm lint
pnpm typecheck   # checks TypeScript without emitting files
```

---

## Project Structure

```
src/app/
├── layout.tsx                        # Root layout: fonts, global SEO metadata, favicons
├── globals.css                       # Tailwind directives + custom utilities
├── (home)/                           # Next.js route group for the "/" route
│   ├── page.tsx                      # Home page — imports and composes section components
│   └── components/
│       ├── Navbar.tsx                # Fixed top nav with section links
│       ├── HeroSection.tsx           # Hero with badge, headline, CTA buttons, stats
│       ├── AboutSection.tsx          # Three feature cards (Comunidade, Conhecimento, Networking)
│       ├── LocationSection.tsx       # Map + location info cards
│       ├── SpeakersSection.tsx       # Speaker grid (call commented out in page.tsx)
│       ├── ScheduleSection.tsx       # Event schedule timeline (call commented out in page.tsx)
│       ├── PhotosSection.tsx         # Photo gallery wrapper
│       ├── SponsorsSection.tsx       # Sponsor logo grid
│       ├── CTASection.tsx            # Bottom CTA banner
│       ├── Footer.tsx                # Copyright footer
│       └── PhotoStack.tsx            # Interactive stacked photo carousel (client component)
└── codigo-de-conduta/
    └── page.tsx                      # Code of Conduct page (standalone, own nav/footer)

public/
├── favicon.ico                       # Multi-size ICO (16, 32, 48px)
├── favicon.svg                       # Vector favicon — dark rounded square with </> gradient symbol
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-96x96.png
├── apple-touch-icon.png              # 180×180
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest                  # PWA manifest
└── images/                           # Event photos + sponsor logos
    ├── feevale.svg
    ├── dac.jpg
    └── (event photos .jpg / .avif)
```

---

## Routing

All URL paths are in Brazilian Portuguese:

| Route | Description |
|---|---|
| `/` | Home page |
| `/codigo-de-conduta` | Code of Conduct |

Anchor links on the home page: `#sobre`, `#localizacao`, `#fotos`, `#patrocinadores`

---

## Design System

**Color palette** (defined in `tailwind.config.ts` and `globals.css`):

| Token | Hex | Usage |
|---|---|---|
| `background` | `#09090b` | Page background |
| `foreground` | `#fafafa` | Primary text |
| `muted` | `#a1a1aa` | Secondary text |
| `border` | `#27272a` | Borders |
| `card` | `#18181b` | Card backgrounds |
| `accent` | `#6366f1` | Indigo — CTAs, highlights |

**Custom utilities** (in `globals.css`):
- `.gradient-text` — indigo → purple → pink gradient text (`from-indigo-400 via-purple-400 to-pink-400`)
- `.glow` — indigo box-shadow glow effect for cards

**Brand gradient**: `#818cf8` → `#c084fc` → `#f472b6` (used in favicon and logo mark)

---

## Key Conventions

- **`"use client"`** is only added where hooks/interactivity are needed. `PhotoStack` is the only client component. Section components and `page.tsx` are server components.
- **Static export**: `output: "export"` in `next.config.ts`. No API routes, no dynamic server features.
- **Metadata**: Root `layout.tsx` holds global SEO metadata (used by the home page since it's a client route group). Individual pages like `codigo-de-conduta` export their own `metadata`.
- **`metadataBase`**: Set to `https://valetechtalks.com.br`.
- **Sections with no data render nothing**: `SpeakersSection` and `SponsorsSection` return `null` when their data arrays are empty.

---

## Enabling Speakers & Schedule

`SpeakersSection` and `ScheduleSection` are fully built but their calls are commented out in `(home)/page.tsx`. To enable them:

1. Update the data arrays inside `SpeakersSection.tsx` / `ScheduleSection.tsx` with real event data.
2. Uncomment the import and component call in `(home)/page.tsx`.
3. Uncomment the nav links in `Navbar.tsx`.

---

## Content to Update Per Event

- **Hero badge** (`HeroSection.tsx`): link and label for the current call-to-action (e.g. Call for Papers link)
- **Stats** (`HeroSection.tsx`): member count, event count, rating
- **Speakers** (`SpeakersSection.tsx`): speaker name, role, specialty, avatar, social links
- **Schedule** (`ScheduleSection.tsx`): time slots, talk titles, descriptions, speakers
- **Sponsors** (`SponsorsSection.tsx`): sponsor name and logo path
- **Photos** (`PhotoStack.tsx`): photo file paths in `public/images/`
- **CTA section** (`CTASection.tsx`): member count copy
