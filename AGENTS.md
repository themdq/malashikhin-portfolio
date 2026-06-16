# Repository Guidelines

## Project Structure & Module Organization

This is a static one-page Astro portfolio for `malashikh.in`. Source code lives in `src/`: `src/pages/index.astro` defines the page, `src/components/` contains reusable Astro UI pieces, `src/layouts/` contains page chrome, `src/data/site.ts` holds portfolio content, and `src/styles/` contains global CSS and design tokens. Static deployment assets live in `public/`, including fonts, Cloudflare `_headers`/`_redirects`, favicon, and the resume PDF. Visual references are kept in `refs/`. Build validation logic is in `scripts/validate-build.mjs`.

## Build, Test, and Development Commands

Use pnpm with Node 22 or newer.

- `pnpm install` installs dependencies from `pnpm-lock.yaml`.
- `pnpm dev` starts the Astro development server.
- `pnpm check` runs Astro and TypeScript checks.
- `pnpm build` runs `astro check` and produces the static `dist/` build.
- `pnpm preview` serves the built site locally.
- `pnpm test:static` validates `dist/` content and required deployment artifacts; run `pnpm build` first.

## Coding Style & Naming Conventions

Use TypeScript, Astro components, and plain CSS. Prefer existing path aliases such as `@/components/Sidebar.astro` and `@/data/site`. Name Astro components in PascalCase, data exports in camelCase, interfaces in PascalCase, and CSS classes in kebab-case. Keep content updates centralized in `src/data/site.ts` when possible. Match the current two-space indentation style in markup, scripts, and CSS; keep CSS variables in `src/styles/tokens.css`.

## Design System

Follow the personal Amedique design system: combine modern glass surfaces with ASCII, developer, and terminal-inspired details. Preserve command-line cues, bracketed labels, monospace rhythm, and restrained motion. Colors should come from the Flexoki theme palette through existing CSS tokens rather than ad hoc hex values.

## Testing Guidelines

There is no unit test framework configured. Verification is type checking, production build, and static build validation:

```sh
pnpm check
pnpm build
pnpm test:static
```

When changing layout or interactions, also inspect the site with `pnpm dev` or `pnpm preview` across desktop and mobile widths. Update `scripts/validate-build.mjs` if required page landmarks, visible copy, or deployment artifacts intentionally change.

## Commit & Pull Request Guidelines

Recent commit history uses short, imperative, lowercase summaries such as `removed glass from page` and `astro config fixes`. Keep commits focused and descriptive. Pull requests should include a brief summary, verification commands run, and screenshots or screen recordings for visual changes. Mention deployment-impacting changes to `public/_headers`, `public/_redirects`, `astro.config.mjs`, or Cloudflare Pages settings.

## Security & Configuration Tips

Do not commit secrets or personal tokens. Cloudflare Pages expects production branch `main`, build command `pnpm build`, output directory `dist`, and Node version `22`. Attach the custom domain only after preview QA passes.
