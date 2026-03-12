# Design

Presentation-style scrolling narrative with animated SVG diagrams, dark amber theme, and progressive disclosure.

## Current State

- Dark theme with amber accent (`#f59e0b`) on stone-dark backgrounds
- Framer Motion scroll-triggered animations with `draw` and `fade` variants
- Section-based layout with alternating left/right headlines
- SVG diagrams inline with motion primitives (no external images)
- Mobile-responsive via Tailwind breakpoints
- Philosophy page uses incremental narrative: each harness step motivated individually before showing the full loop
- Side-by-side diagram layouts for related concepts (grid on md+, stacked on mobile)
- Fixed section navigation arrows (hidden on mobile, visible md+)
- Scroll-to-top on route change

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| SVG + Framer Motion for diagrams | No external deps, consistent animation language |
| CSS custom properties for theme | Single source of truth for colors |
| Flat component directory | Small project, simple structure |
| Inverted pyramid (wide = high impact) | Matches mental model: upstream errors have largest blast radius |
| Block-based cascade over dots | Proportional sizing shows amplification more intuitively |
| Copy-only sections for harness steps 8-11 | Not every beat needs a diagram; text carries the narrative |
| Peer tone over sales tone | "Here's what we tried" over "Transform your workflow" |
