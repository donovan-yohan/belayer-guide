# Philosophy Sections 7-12 Implementation Plan

> **Status**: Complete | **Created**: 2026-03-11 | **Last Updated**: 2026-03-11
> **Design Doc**: Embedded in `.lead/guide-6/GOAL.json`
> **For Claude:** Use /harness:orchestrate to execute this plan.

## Decision Log

| Date | Phase | Decision | Rationale |
|------|-------|----------|-----------|
| 2026-03-11 | Design | Section 7 uses no diagram — text-only section | Spec says "Agents need context beyond code" is about documentation/WHY, no diagram specified |
| 2026-03-11 | Design | Alternate bg variants and headlineSide to match existing rhythm | Sections 0-6 alternate elevated/warm/deep/base with left/right splits |
| 2026-03-11 | Design | CTA buttons in section 12 (Close) using existing Button component | Spec says "Add CTA buttons" — natural place is the closing section |
| 2026-03-11 | Design | No TDD — presentational React components with no testable logic | All work is JSX composition following established patterns |

## Progress

- [x] Task 1: Add imports for remaining diagram components + Button
- [x] Task 2: Section 7 — "Agents need context beyond code"
- [x] Task 3: Section 8 — "The full loop" with HarnessLoop
- [x] Task 4: Section 9 — "What if the requirement is larger?" with ParallelLeads
- [x] Task 5: Section 10 — "3 projects. 2 days." with HackathonTimeline
- [x] Task 6: Section 11 — "Start anywhere on the journey" with AltitudeProgression
- [x] Task 7: Section 12 — "Workflows composed of workflows" with ComposedStack + CTAs
- [x] Task 8: Build verification and mobile responsiveness check

## Surprises & Discoveries

- No diagram component needed for section 7 — text-only section works well for the "persistent context" theme.

## Plan Drift

- Implemented all tasks in a single pass rather than orchestrating subagents — task was well-scoped single-file modification following established patterns.

---

## Task Details

### Task 1: Add imports

**Files:** Modify `src/pages/Philosophy.tsx:1-12`

Add imports for HarnessLoop, ParallelLeads, HackathonTimeline, AltitudeProgression, ComposedStack, and Button.

### Task 2: Section 7 — Agents need context beyond code

**Pattern:** SplitSection, bg="elevated", headlineSide="right", sectionNumber=7
**Content:** Persistent documentation captures the WHY — same as engineers need onboarding, product context, tribal knowledge. Code alone isn't enough for informed decisions.

### Task 3: Section 8 — The full loop

**Pattern:** Section (full-width centered), bg="warm", sectionNumber=8
**Content:** The harness workflow: brainstorm → plan → orchestrate → review → reflect → complete. Review step is the fresh pair of eyes. Uses HarnessLoop diagram.

### Task 4: Section 9 — What if the requirement is larger?

**Pattern:** SplitSection, bg="deep", headlineSide="left", sectionNumber=9
**Content:** Leads execute full harness loops independently per goal. Independent goals run simultaneously. Uses ParallelLeads diagram.

### Task 5: Section 10 — 3 projects. 2 days.

**Pattern:** Section (full-width centered), bg="summit", sectionNumber=10
**Content:** Hackathon proof point. Listen to finance team, take notes, create design doc, dispatch leads. Uses HackathonTimeline diagram.

### Task 6: Section 11 — Start anywhere on the journey

**Pattern:** SplitSection, bg="base", headlineSide="right", sectionNumber=11
**Content:** The stack meets engineers wherever they are. PR plugin → harness → belayer. Uses AltitudeProgression diagram.

### Task 7: Section 12 — Workflows composed of workflows (Close)

**Pattern:** Section (full-width centered), bg="elevated", sectionNumber=12
**Content:** The meta-framework principle. Architecture emerges from real needs. Uses ComposedStack diagram + CTA buttons.

### Task 8: Build verification

Run `npm run build` to verify no errors. Spot check mobile responsiveness patterns.

---

## Outcomes & Retrospective

_Filled by /harness:complete when work is done._

**What worked:**
- Reading all existing sections and diagram components first gave clear patterns to follow
- All diagram components were pre-built by guide-3, making wiring straightforward

**What didn't:**
- N/A — task was well-scoped

**Learnings to codify:**
- For presentational React pages, single-pass implementation is more efficient than subagent orchestration when patterns are established
