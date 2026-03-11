# Belayer Guide

Marketing/informational website for the Belayer climbing guide product. Built with Vite, React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Deployed on Vercel.

## Quick Reference

| Action | Command |
|--------|---------|
| Dev | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Preview | `npm run preview` |

## Documentation Map

| Category | Path | When to look here |
|----------|------|-------------------|
| Architecture | `docs/ARCHITECTURE.md` | Understanding module boundaries, component structure, where code lives |
| Design | `docs/DESIGN.md` | Design philosophy, key decisions, pattern rationale |
| Frontend | `docs/FRONTEND.md` | Component patterns, styling conventions, animation approach |
| Plans | `docs/PLANS.md` | Active work, completed plans, tech debt tracking |
| Bug Analyses | `docs/bug-analyses/` | Investigating bugs, understanding past root causes |
| Refactor Scopes | `docs/refactor-scopes/` | Planning refactoring, reviewing past extraction patterns |
| References | `docs/references/` | External library docs, API specs, llms.txt files |

## Key Patterns

- All components are functional React + TypeScript — no class components
- Tailwind CSS v4 utility classes only — no CSS modules or styled-components
- Framer Motion for all animations — no CSS keyframes or transition libraries
- Components are presentational and props-driven — no global state management
- Section/SplitSection are the primary content containers for page layout
- React Router DOM v7 with BrowserRouter — Vercel rewrites handle SPA fallback

## Workflow

> brainstorm → plan → orchestrate → review → reflect → complete

| Step | Command | Purpose |
|------|---------|---------|
| 1a | `/harness:brainstorm` | Design through collaborative dialogue |
| 1b | `/harness:bug` | Investigate and diagnose a bug |
| 1c | `/harness:refactor` | Scope incremental refactoring |
| 2 | `/harness:plan` | Create living implementation plan |
| 3 | `/harness:orchestrate` | Execute with agent teams + micro-reflects |
| 4 | `/harness:review` | Code simplification + multi-perspective review |
| 5 | `/harness:reflect` | Full reflection, conversation mining, retrospective |
| 6 | `/harness:complete` | Archive plan, prune check, and create PR |
