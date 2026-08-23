# AGENTS.md

## Stack

React 19 + TypeScript 6 + Vite 8 + Tailwind CSS 3. Single-page app, no router, no backend. All wedding content lives in `src/config/wedding.ts`.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (typecheck then build)
- `npm run lint` — ESLint on all files
- `npm run preview` — preview production build

No test suite exists. No CI workflows.

## Build order

`lint` → `build` (which runs `tsc -b` first, then `vite build`). Always run lint before build to catch issues early.

## Architecture

- `src/config/wedding.ts` — single source of truth for all wedding data (dates, venues, entourage, FAQs, registry, etc.). Components read from `weddingConfig` export.
- `src/App.tsx` — root component; composes all sections, owns nav state, envelope-open gate, and admin modal toggle.
- `src/components/` — one component per section (Hero, OurStory, RSVPForm, etc.). No shared component library.
- `src/hooks/useScrollReveal.ts` — IntersectionObserver-based reveal animation hook.
- `src/index.css` — Tailwind directives + global styles, custom animations, and utility layers.

## Styling

- Tailwind config at `tailwind.config.js` defines custom color palettes (`dusty-blue`, `wedding-*`), fonts (`font-serif` = Cormorant Garamond, `font-sans` = Plus Jakarta Sans), and gradient utilities.
- Custom CSS classes in `index.css`: `.reveal`, `.ornament`, `.card-lift`, `.btn-shimmer`, `.bg-paper-texture`, `.text-letterpress`.
- PostCSS: Tailwind + Autoprefixer (`postcss.config.js`).

## Key conventions

- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`. Unused imports/variables will fail `tsc`.
- `verbatimModuleSyntax` is enabled — use `import type` for type-only imports.
- Components are default exports. File names match component names (PascalCase).
- All wedding data edits go in `src/config/wedding.ts`, not in component files.
- `dist/` is committed in git (static deployment target). Rebuild with `npm run build` after changes.
