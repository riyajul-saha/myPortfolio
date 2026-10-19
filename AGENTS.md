# Developer & Agent Guidelines

This repository is the personal portfolio website of Riyajul Saha, built with TanStack Start, React 19, TypeScript, Vite, and Tailwind CSS.

## Development Workflow

- **Development**: `npm run dev` starts the local Vite development server.
- **Production Build**: `npm run build` generates the production bundle using Vite, TanStack Start, and Nitro.
- **Linting & Formatting**: `npm run lint` and `npm run format`.

## Architecture & Code Conventions

- Routes are located in `src/routes/` (including `/projects/*` and `/services/*`) and managed by TanStack Router / TanStack Start.
- Portfolio content and data reside in `src/data/portfolio.ts` and `src/data/services.ts`.
- Components are organized under `src/components/` (site sections and atomic UI).
- Styling uses Tailwind CSS v4 configured via `@tailwindcss/vite` and `src/styles.css`.
- Production metadata and SEO files reside in `public/` (`sitemap.xml`, `robots.txt`, `site.webmanifest`) and `src/lib/seo.ts`.
