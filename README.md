# Vale Tech Talks

Landing page for [Vale Tech Talks](https://valetechtalks.com.br) — a free community tech meetup for IT professionals and students in the Vale do Rio dos Sinos region, Novo Hamburgo, RS, Brazil.

## Requirements

- [Node.js](https://nodejs.org) 24.14.0 (LTS)
- [pnpm](https://pnpm.io) 10.32.1
- [mise](https://mise.jdx.dev) (recommended — versions are pinned in `mise.toml`)

## Setup

```bash
# Install the correct tool versions (if using mise)
mise install

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server (Turbopack) |
| `pnpm build` | Build for production (outputs to `/out`) |
| `pnpm start` | Serve the static build locally (`/out`) |
| `pnpm lint` | Run ESLint |

## Stack

- [Next.js 16](https://nextjs.org) — App Router, static export (`output: "export"`)
- [React 19](https://react.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- [TypeScript 5](https://www.typescriptlang.org)
- [lucide-react](https://lucide.dev)

## Project Structure

```
src/app/
├── layout.tsx                  # Root layout, global metadata, favicons
├── globals.css                 # Tailwind + custom utilities
├── (home)/                     # Home page route group
│   ├── page.tsx
│   └── components/             # One component per section
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── LocationSection.tsx
│       ├── SpeakersSection.tsx
│       ├── ScheduleSection.tsx
│       ├── PhotosSection.tsx
│       ├── SponsorsSection.tsx
│       ├── CTASection.tsx
│       ├── Footer.tsx
│       └── PhotoStack.tsx
└── codigo-de-conduta/
    └── page.tsx
```

## Deployment

The project builds as a fully static site into the `/out` directory. Deploy by uploading `/out` to any static hosting provider (GitHub Pages, Vercel, Netlify, etc.).
