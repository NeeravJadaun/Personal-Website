# Neerav Jadaun Portfolio

Personal portfolio site built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

Main content and links are in `src/lib/data.ts`.

Update before publishing:
- `formspreeEndpoint`
- project links (`repoUrl`, `docUrl`)
- social links and text as needed

## Deploy

### Vercel

Import the repo and deploy with default Next.js settings.

### GitHub Pages

1. Push to `main`.
2. In GitHub `Settings -> Pages`, set source to `GitHub Actions`.
3. Workflow `.github/workflows/deploy-gh-pages.yml` will publish `out/`.

## Notes

- Static export is enabled automatically for GitHub Pages builds.
- Update site URL metadata in `src/app/layout.tsx` (`metadataBase`, `openGraph.url`).
