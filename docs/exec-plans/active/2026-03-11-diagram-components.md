# Diagram Components: HarnessLoop, ParallelLeads, HackathonTimeline, AltitudeProgression, TwoDocuments, ComposedStack

> **Status**: Complete | **Created**: 2026-03-11 | **Last Updated**: 2026-03-11
> **Spec**: `.lead/guide-3/GOAL.json` (climb guide-3)
> **For Claude:** Use /harness:orchestrate to execute this plan.

## Decision Log

| Date | Phase | Decision | Rationale |
|------|-------|----------|-----------|
| 2026-03-11 | Design | Follow existing SectionGraphic.tsx pattern: draw/fade variants, #f59e0b accent, motion SVG primitives | Consistency with existing codebase |
| 2026-03-11 | Design | Each diagram is a standalone exported component in its own file under src/components/diagrams/ | Spec requires new directory; one file per component for clarity |
| 2026-03-11 | Design | Each component wraps in motion.div with whileInView="visible" viewport trigger | Matches SectionGraphic.tsx wrapper pattern |
| 2026-03-11 | Design | Create shared animation variants module (draw/fade) to avoid duplication | DRY — 6 components all need same variants |

## Progress

- [x] Task 1: Create shared animation variants module _(completed 2026-03-11)_
- [x] Task 2: Build HarnessLoop diagram _(completed 2026-03-11)_
- [x] Task 3: Build ParallelLeads diagram _(completed 2026-03-11)_
- [x] Task 4: Build HackathonTimeline diagram _(completed 2026-03-11)_
- [x] Task 5: Build AltitudeProgression diagram _(completed 2026-03-11)_
- [x] Task 6: Build TwoDocuments diagram _(completed 2026-03-11)_
- [x] Task 7: Build ComposedStack diagram _(completed 2026-03-11)_
- [x] Task 8: Create barrel export index _(completed 2026-03-11)_
- [x] Task 9: Verify build compiles _(completed 2026-03-11)_

## Surprises & Discoveries

| Date | Surprise | Impact | Action |
|------|----------|--------|--------|
| 2026-03-11 | variants.ts needed .tsx extension for JSX (DiagramWrapper) | Minor — worker renamed file | Used .tsx extension |
| 2026-03-11 | Other climbs already created additional diagram components (ThreeHats, BoundaryDiagram, etc.) | Barrel export expanded to include all 12 components | Included all discovered components in index.ts |

## Plan Drift

| Task | Planned | Actual | Why |
|------|---------|--------|-----|
| Task 8 | Export only 6 components | Exported all 12 discovered diagram components | Other climbs created additional components in the same directory |

---

## Task 1: Create shared animation variants module

**File:** `src/components/diagrams/variants.ts`

Extract the `draw` and `fade` animation variant objects used in SectionGraphic.tsx into a shared module so all 6 diagram components can import them.

```ts
export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

export const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}
```

## Task 2: Build HarnessLoop diagram

**File:** `src/components/diagrams/HarnessLoop.tsx`

Circular workflow diagram showing: brainstorm → plan → orchestrate → review → orchestrate → reflect → complete. Key features:
- Circular arrangement of 7 labeled nodes around a central point
- Connecting arcs between sequential nodes
- A feedback loop arrow from "review" back to "orchestrate"
- Labels as small text elements
- All animated with draw/fade variants

## Task 3: Build ParallelLeads diagram

**File:** `src/components/diagrams/ParallelLeads.tsx`

Multiple independent harness loops with a setter coordination node. Key features:
- A top "setter" node
- 3 parallel vertical lanes below, each containing a mini loop icon
- Connecting lines from setter to each lane
- Dashed lines between lanes indicating independence
- Labels: "Lead 1", "Lead 2", "Lead 3"

## Task 4: Build HackathonTimeline diagram

**File:** `src/components/diagrams/HackathonTimeline.tsx`

Parallel workstreams fanning out from a human/architect node. Key features:
- Left side: single "Human" node
- Fanning lines to 3-4 parallel horizontal workstreams
- Each workstream has small milestone dots
- Labels for workstreams (finance, CLI, Clickhouse, mobile)
- Timeline feel with dots at different progress points

## Task 5: Build AltitudeProgression diagram

**File:** `src/components/diagrams/AltitudeProgression.tsx`

Base camp → mid-wall → summit progression showing tool layers. Key features:
- Vertical arrangement: bottom (base camp), middle, top (summit)
- Three labeled platforms/ledges
- Base: "PR Plugin" tools
- Mid: "Harness Commands"
- Top: "Belayer" (full orchestration)
- Connecting path between levels (climbing rope metaphor)

## Task 6: Build TwoDocuments diagram

**File:** `src/components/diagrams/TwoDocuments.tsx`

Side-by-side design doc vs plan visualization. Key features:
- Two document rectangles side by side
- Left: "Design Doc" with lines representing content
- Right: "Plan" with checkbox-style lines
- Different visual treatment (design = exploratory/organic, plan = structured/linear)
- Subtle connecting arrow between them

## Task 7: Build ComposedStack diagram

**File:** `src/components/diagrams/ComposedStack.tsx`

Full system diagram for the close. Key features:
- Layered stack from bottom to top: Skills → Harness → Leads → Setter → Human
- Each layer as a horizontal bar/band
- Connecting lines showing composition
- Labels on each layer
- The "workflows composed of workflows" visual

## Task 8: Create barrel export index

**File:** `src/components/diagrams/index.ts`

Barrel export file:
```ts
export { default as HarnessLoop } from './HarnessLoop'
export { default as ParallelLeads } from './ParallelLeads'
export { default as HackathonTimeline } from './HackathonTimeline'
export { default as AltitudeProgression } from './AltitudeProgression'
export { default as TwoDocuments } from './TwoDocuments'
export { default as ComposedStack } from './ComposedStack'
```

## Task 9: Verify build compiles

Run `npm run build` to confirm all components compile without errors.

---

## Outcomes & Retrospective

_Filled by /harness:complete when work is done._

**What worked:**
-

**What didn't:**
-

**Learnings to codify:**
-
