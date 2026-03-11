# Philosophy Page Sections 0-6 Rewrite

> **Status**: Active | **Created**: 2026-03-11 | **Last Updated**: 2026-03-11
> **Source**: GOAL.json guide-5 climb spec
> **For Claude:** Use /harness:orchestrate to execute this plan.

## Decision Log

| Date | Phase | Decision | Rationale |
|------|-------|----------|-----------|
| 2026-03-11 | Design | Rewrite only sections 0-6, leave placeholder for 7-12 | Per climb spec: guide-5 owns sections 0-6 only |
| 2026-03-11 | Design | Use Carousel for section 5 (dual diagrams) | Spec says "Carousels acceptable for multi-diagram sections" |
| 2026-03-11 | Design | BG cycle: base→elevated→warm→deep→elevated→summit→base | Matches existing 7-section pattern |
| 2026-03-11 | Design | Keep sections 7+ as-is from current page | Other climbs handle remaining sections |

## Progress

- [ ] Task 1: Rewrite Philosophy.tsx with 7 new sections (0-6)
- [ ] Task 2: Build and verify no TypeScript errors
- [ ] Task 3: Commit changes

## Surprises & Discoveries

_None yet._

## Plan Drift

_None yet._

---

## Task 1: Rewrite Philosophy.tsx sections 0-6

### Section Layout

| # | Title | Component | BG | Diagram | HeadlineSide |
|---|-------|-----------|-----|---------|-------------|
| 0 | Three hats, one engineer | Section (center) | base | ThreeHats | n/a |
| 1 | Every tool needs a clear start and end | SplitSection | elevated | BoundaryDiagram | left |
| 2 | Opening a PR | SplitSection | warm | none (narrative) | right |
| 3 | What comes next? | SplitSection | deep | BuildingBlocks | left |
| 4 | Tested tools, focused problems | SplitSection | elevated | CycleDiagram | right |
| 5 | Errors compound upstream | Section (center) | summit | ImpactPyramid + AmplificationFlow (Carousel) | n/a |
| 6 | Two documents, two problems | SplitSection | base | TwoDocuments | left |

### Content Mapping from Spec

- **Section 0**: Engineers wear 3 hats in SDLC. Agentic engineering breaks down workflow same way.
- **Section 1**: Boundary problem. Tool that refines ≠ tool that implements. Crossing boundary IS its own tool.
- **Section 2**: pr:author — tedious PR writing, clear start/end, small scope.
- **Section 3**: Composition — pr:review, pr:resolve. Each solves testable problem.
- **Section 4**: With tested building blocks, focus on sequencing not correctness. Self-healing PR cycle.
- **Section 5**: Error amplification. Bad spec → 10,000+ bad lines. Human attention at highest-leverage points.
- **Section 6**: Design doc validates problem. Plan catches hallucinations. Different tools, different problems.

---

## Outcomes & Retrospective

_Filled by /harness:complete when work is done._

**What worked:**
-

**What didn't:**
-

**Learnings to codify:**
-
