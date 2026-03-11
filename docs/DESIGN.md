# Design

Presentation-style scrolling narrative with animated SVG diagrams, dark amber theme, and progressive disclosure.

## Current State

- Dark theme with amber accent (`#f59e0b`) on stone-dark backgrounds
- Framer Motion scroll-triggered animations with `draw` and `fade` variants
- Section-based layout with alternating left/right headlines
- SVG diagrams inline with motion primitives (no external images)
- Mobile-responsive via Tailwind breakpoints

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| SVG + Framer Motion for diagrams | No external deps, consistent animation language |
| CSS custom properties for theme | Single source of truth for colors |
| Flat component directory | Small project, simple structure |
