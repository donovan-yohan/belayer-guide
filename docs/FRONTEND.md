# Frontend

React component patterns, styling conventions, and animation approach for Belayer Guide.

## Current State

- 10 components in `src/components/`, 2 pages in `src/pages/`
- All components are functional React components with TypeScript
- Tailwind CSS v4 utility classes for all styling — no CSS modules
- Framer Motion `motion` components for scroll-triggered animations
- `useScrollProgress` hook for scroll position tracking

## Component Patterns

- **Layout composition:** `Layout` wraps all routes, providing `Nav` and `ProgressBar`
- **Section-based content:** `Section` and `SplitSection` are the primary content containers
- **Props-driven:** Components receive content via props, no internal data fetching
- **Animation colocation:** Framer Motion variants and transitions defined alongside components

## Styling Conventions

- Tailwind utility classes inline on JSX elements
- No `className` string builder libraries — plain template literals where needed
- Responsive breakpoints via Tailwind's `sm:`, `md:`, `lg:` prefixes

## Routing

- React Router DOM v7 with `BrowserRouter` in `main.tsx`
- `App.tsx` defines `Routes` with `Route` elements
- `Button` component supports internal navigation via React Router

## See Also

- [Architecture](ARCHITECTURE.md) — module boundaries and code map
- [Design](DESIGN.md) — design philosophy and key decisions
