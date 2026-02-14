# Neerav Jadaun Portfolio

Production-ready static portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui components.

## Tech Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui primitives (`Card`, `Button`, `Badge`, `Input`, `Textarea`)
- Lucide icons

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Project Structure

- `src/app/page.tsx`: Full landing page with all sections
- `src/app/globals.css`: Global theme, typography, motion-safe styles
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/Section.tsx`
- `src/components/ProjectCard.tsx`
- `src/components/SkillBadge.tsx`
- `src/components/TimelineItem.tsx`
- `src/lib/data.ts`: All editable content and links

## Editable Content

Update these values in `src/lib/data.ts`:

- Social links (`linkedin`, `github`, `email`)
- Formspree endpoint (`formspreeEndpoint`)
- Experience/project/skills/education content

## Deployment

### Vercel

1. Import the repo in Vercel.
2. Framework preset: `Next.js`.
3. Build command: `next build` (default).
4. Deploy.

### GitHub Pages (Static Export)

The repo is already configured for static export:

- `next.config.mjs`:
  - `output: "export"`
  - `images.unoptimized: true`
  - `basePath` + `assetPrefix` set when `GITHUB_PAGES=true`
- Workflow: `.github/workflows/deploy-gh-pages.yml`
  - Builds and publishes `out/`

Setup steps:

1. Push to `main`.
2. In GitHub repo settings, enable **Pages** and set source to **GitHub Actions**.
3. Confirm workflow completes and site is published.

## Replace These Placeholders

- GitHub username:
  - `src/lib/data.ts` -> `github: "https://github.com/YOUR_GITHUB_USERNAME"`
- Formspree form ID:
  - `src/lib/data.ts` -> `formspreeEndpoint: "https://formspree.io/f/YOUR_FORMSPREE_ID"`
- Domain metadata:
  - `src/app/layout.tsx` -> `metadataBase` and `openGraph.url`
- Project images:
  - Replace files in `public/projects/` and keep paths in `src/lib/data.ts`
- Optional project links:
  - Fill `repoUrl` and/or `docUrl` per project in `src/lib/data.ts`
