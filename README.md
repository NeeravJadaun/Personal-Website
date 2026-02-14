# Neerav Jadaun Portfolio

Personal portfolio website.

## Local Development

```bash
npm install
npm run dev
```

## Edit Content

Update portfolio content and links in `src/lib/data.ts`.

## Deployment

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
