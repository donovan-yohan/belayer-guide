# Philosophy Story Flow Redesign

> **Status**: Active | **Created**: 2026-03-12
> **Design**: docs/design-docs/2026-03-12-philosophy-story-flow-design.md

## Progress

- [x] Task 1: Fix SVG clipping on HarnessLoop, HackathonTimeline, AltitudeProgression
- [x] Task 2: Rework ImpactPyramid diagram (invert hierarchy)
- [x] Task 3: Rework AmplificationFlow diagram (cascade with blocks instead of dots)
- [x] Task 4: Restructure Philosophy.tsx — reorder sections, new copy, side-by-side diagrams

## Verification

After all tasks: `npm run build` must pass. Visual check that diagrams render without clipping.

---

### Task 1: Fix SVG clipping on HarnessLoop, HackathonTimeline, AltitudeProgression

**Files:** `src/components/diagrams/HarnessLoop.tsx`, `src/components/diagrams/HackathonTimeline.tsx`, `src/components/diagrams/AltitudeProgression.tsx`

**HarnessLoop** (viewBox `0 0 200 200`):
- Labels at `labelR=83` clip at edges. "complete" and "reflect" on the left, "orchestrate" on the right.
- Fix: Expand viewBox to `0 0 240 240` and shift center to (120, 120). Update cx, cy constants. This gives ~37px clearance for labels on all sides.

**HackathonTimeline** (viewBox `0 0 200 200`):
- "Clickhouse" label at fontSize=7, anchor=end, x=54 extends past x=0 on the left.
- Fix: Shift all content right by 15px (humanX from 28→43, streamStartX from 58→73). Or expand viewBox to `-15 0 215 200`.

**AltitudeProgression** (viewBox `0 0 200 200`):
- Bottom platform at y=165, but the "Skills" label from the Philosophy page text references a 4th level that's cut off.
- Looking at the actual component: only 3 platforms (PR Plugin at 165, Harness at 110, Belayer at 55). The bottom content at y=170 (path start) is fine within the viewBox. The visual clipping is the bottom of the path at y=170 being very close to the viewBox bottom. Add padding: change viewBox to `0 0 200 220` or shift content up by 10px.

### Task 2: Rework ImpactPyramid diagram

**File:** `src/components/diagrams/ImpactPyramid.tsx`

Current: Traditional pyramid with Specification at top (narrowest) and Code Output at bottom (widest). This is conceptually backwards.

Rework to inverted hierarchy (reference: "Impact Hierarchy for Coding Agents"):
- **Bottom (widest):** Specification — "Wrong Problem" — 10,000×
- **Then:** Research — "Misunderstanding the System" — 1,000×
- **Then:** Planning — "Wrong Solution" — 10-100×
- **Then:** Implementation — 10×
- **Top (narrowest):** Code — 1×

The visual weight communicates impact: wider = more damage from a single bad line at that level.

Keep the same trapezoid/layer approach but invert the layer order. The "HIGHEST LEVERAGE" arrow should point at the bottom (widest) layers.

Also change from standalone wrapper to be side-by-side compatible (remove max-w constraint, let parent control sizing).

### Task 3: Rework AmplificationFlow diagram

**File:** `src/components/diagrams/AmplificationFlow.tsx`

Current: Three columns of dots with connection lines. Conceptually correct but visually doesn't match the reference (blocks instead of dots, proportional sizing showing growth).

Rework to match the cascade reference image:
- Three columns: Research, Plan, Code
- Each column is a vertical stack of blocks (rectangles, not dots)
- "Bad" blocks are amber/warm colored, "good" blocks are green/muted
- The key visual: bad blocks get proportionally LARGER at each stage
  - Research: small bad block among good blocks
  - Plan: medium bad blocks, more of them
  - Code: large bad block dominates the column
- Connection lines from bad research → bad plan items → bad code items
- Keep the column headers

Also change from standalone wrapper to be side-by-side compatible.

### Task 4: Restructure Philosophy.tsx

**File:** `src/pages/Philosophy.tsx`

This is the main restructure. New section order (0-16):

**Keep as-is:** 0, 1, 2 (Hero, Boundary Problem, Opening a PR)

**Section 3 — Composition (tighten copy):**
- Keep `pr:review` and `pr:resolve` introduction
- Remove "stack them and something greater emerges"
- End with something like: "Each tool solves one problem well. But what happens when you connect them?"

**Section 4 — The First Loop (NEW):**
- Tag: "The First Loop"
- Headline: "Small tools, first cycle"
- Copy: The PR cycle is the first composed workflow. Author writes the PR, review catches issues, resolve addresses them, review checks again. When something goes wrong, it's not a tool problem anymore. It's a sequencing problem. That shift matters.
- Diagram: CycleDiagram (move from old section 4)
- Layout: SplitSection, headlineSide="right"

**Section 5 — Error Amplification (REWORK):**
- Tag: "Error Amplification"
- Headline: "Errors compound upstream"
- Copy: "A bad line of code is a bad line of code. But a bad line of plan could lead to hundreds of bad lines of code. A bad line of research, a misunderstanding of how the codebase works or where certain functionality lives, could land you with thousands of bad lines of code. If we can't make small tools reliable, or small loops reliable, it just amplifies at scale. Human attention belongs at the highest-leverage points: not reviewing output, but validating direction."
- Diagrams: ImpactPyramid + AmplificationFlow **side by side** (grid 2-col on md+, stacked on mobile). Remove the Carousel wrapper entirely.
- Layout: Section (full width, center aligned), bg="summit"

**Section 6 — Two documents, two problems (renumber, minor copy tweak):**
- Same content as old section 6, renumber to 6

**Section 7 — Agents need context beyond code (renumber, unchanged):**
- Same as old section 7

**Section 8 — Brainstorm & Plan (NEW):**
- Tag: "The First Two Steps"
- Headline: "Brainstorm and plan"
- Copy: Brainstorm explores the problem space. What are we building? Why? What have we tried before? The output is a design doc that captures the thinking. Plan reads every file it will touch before writing a single line. The output is a structured implementation plan. Two documents, two checkpoints. The first validates the problem. The second validates the approach.
- Layout: SplitSection, headlineSide="left"
- Diagram: TwoDocuments (reuse from section 6, or a simplified version)

**Section 9 — Orchestrate (NEW):**
- Tag: "Execution"
- Headline: "Orchestrate"
- Copy: With a validated plan, agent teams execute using the same small, tested tools from earlier. Each task has a clear start, clear end, and a known-good tool to run it. The plan drives the work. The tools do the work. The orchestrator sequences them.
- Layout: SplitSection, headlineSide="right"

**Section 10 — Review (NEW):**
- Tag: "Independent Review"
- Headline: "A fresh pair of eyes"
- Copy: The review step uses a separate agent that reads only the output, not the plan that produced it. It's not anchored to the same assumptions the builder had. A code review from a context that never saw the plan catches different things than one that did. That independence is the point.
- Layout: SplitSection, headlineSide="left"

**Section 11 — Reflect (NEW):**
- Tag: "Closing the Loop"
- Headline: "Check against the docs"
- Copy: After review, the reflect step compares what was built against the project's persistent documentation. Did a design decision drift? Is there a new pattern that should be recorded? Reflect captures learnings and updates context so the next session starts with accurate information, not stale docs.
- Layout: SplitSection, headlineSide="right"

**Section 12 — The Full Loop (REWORK from old section 8):**
- Tag: "The Harness Workflow"
- Headline: "The full loop"
- Copy: That's the complete cycle. Brainstorm the design. Plan the implementation. Orchestrate agent teams to build it. Review with an independent context. Reflect to keep the docs honest. Each step is its own job because each step solves a different problem. The review step is what keeps agents honest. The reflect step is what keeps the knowledge alive.
- Diagram: HarnessLoop (existing, now with clipping fixed)
- Layout: Section (full width, center), bg="warm"

**Sections 13-16:** Renumber old sections 9-12 (Scaling Up, Proof Point, Meet You Where You Are, The Close). No content changes, just renumber sectionNumber props.

**Imports:** Add any new diagram imports if needed, remove Carousel import from this file.
