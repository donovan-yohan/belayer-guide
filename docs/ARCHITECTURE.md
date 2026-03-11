# Architecture

Belayer-guide is a Vite + React + TypeScript SPA with Tailwind CSS and Framer Motion. It serves as a presentation-style marketing site for the belayer agentic engineering platform.

## Bird's Eye View

The site has two main pages: Home (landing) and Philosophy (narrative deep-dive). Components compose Section/SplitSection layouts with animated SVG diagrams.

## Code Map

### `src/pages/`
Top-level route pages: `Home.tsx` and `Philosophy.tsx`. Pure composition of components.

### `src/components/`
Flat directory of reusable UI: Section, SplitSection, SectionGraphic, Carousel, Button, Nav, ProgressBar, RopeThread, PeekHint, SkillTag, Layout.

### `src/components/diagrams/`
Animated SVG diagram components for the Philosophy page. Self-contained, using Framer Motion `draw` and `fade` variants with accent color `#f59e0b`.

### `src/hooks/`
Custom hooks: `useScrollProgress` for scroll-based animations.

## Cross-Cutting Concerns

- **Animation:** Framer Motion `whileInView`, `draw`/`fade` variants, staggered `custom` delays
- **Color:** CSS custom properties in `src/index.css` — dark theme, amber accent `#f59e0b`
- **Responsive:** Tailwind breakpoints (sm/md/lg), mobile-first
- **Build:** Vite + `@tailwindcss/vite`
