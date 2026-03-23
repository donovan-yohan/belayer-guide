# Philosophy v2 — Three Roles, Three Phases

> **Status**: Complete | **Created**: 2026-03-23
> **Source**: ~/.gstack/projects/donovan-yohan-belayer-guide/donovanyohan-main-design-20260323.md
> **For Claude:** Use /harness:orchestrate to execute this plan.

## Decision Log

| Date | Phase | Decision | Rationale |
|------|-------|----------|-----------|
| 2026-03-23 | Plan | Ship all 17 sections with all 15 diagrams in one pass | User in a rush, completeness > incremental |
| 2026-03-23 | Plan | Copy v1 to PhilosophyV1.tsx before overwriting | Preserve v1 content for future archive feature |
| 2026-03-23 | Plan | Parallelize diagram creation across 4 agent groups | Diagrams are independent, maximize throughput |
| 2026-03-23 | Plan | Follow existing diagram conventions exactly | ThreeHats, BoundaryCrossingDiagram as style references |

## Progress

- [x] Task 1: Preserve v1 — copy Philosophy.tsx → PhilosophyV1.tsx
- [x] Task 2: Create Act 1 diagrams — ThreeRoles, OrchestratorFlow, HarnessLayers, AgentMechanics
- [x] Task 3: Create Act 2–3 diagrams — LeverageHeuristic, ThreePhases, IntakeFlow, ImplementationDivergence
- [x] Task 4: Create Act 3–4 diagrams — OutputLoop, IndependentPhases, HarnessCore, SequentialJobs
- [x] Task 5: Create Act 4–5 diagrams — StartAnywhere, TightLoopDiagram, FeedbackLoop, ThreeContracts
- [x] Task 6: Write Philosophy.tsx with all v2 sections (17 sections)
- [x] Task 7: Update diagrams barrel export (index.ts) + build verification (npm run build passes)

## Surprises & Discoveries

_None yet._

## Plan Drift

_None yet._

---

### Task 1: Preserve v1 content
**File:** `src/pages/Philosophy.tsx` → `src/pages/PhilosophyV1.tsx`
**Action:** Copy file, update export name to `PhilosophyV1`

### Task 2: Act 1 diagrams (4 components)
**Files:** `src/components/diagrams/{ThreeRoles,OrchestratorFlow,HarnessLayers,AgentMechanics}.tsx`
**Pattern:** Follow ThreeHats.tsx style — motion.div wrapper, SVG viewBox, draw/fade variants, accent color #f59e0b
**Specs:**
- **ThreeRoles**: Three circles with icons — gear (orchestrator), book (harness), terminal (agent). Layout like ThreeHats (3 circles in a row, labels below). ViewBox ~450x200
- **OrchestratorFlow**: Horizontal flow — moon/automation icon → queue of task cards (ticket, PR, bug) → processing gear → results checkmark. ViewBox ~520x200
- **HarnessLayers**: Vertical stack of 4 rounded boxes: "Architecture", "Test Strategy", "Code Quality", "Conventions". Each with a subtle question mark or "why?" annotation. ViewBox ~320x300
- **AgentMechanics**: Central node with radiating spokes to technique labels: "Subagent-driven dev", "Adversarial review", "Model selection", "Skill workflows". Star/hub layout. ViewBox ~360x360

### Task 3: Act 2–3 diagrams (4 components)
**Files:** `src/components/diagrams/{LeverageHeuristic,ThreePhases,IntakeFlow,ImplementationDivergence}.tsx`
**Pattern:** Same as Task 2
**Specs:**
- **LeverageHeuristic**: Two-column split. Left: human figure + terminal icon + "HARNESS" label. Right: no human, moon/automation icon + "ORCHESTRATOR" label. Dashed center divider. ViewBox ~480x220
- **ThreePhases**: Three connected boxes in a row: "INTAKE" → "IMPLEMENTATION" → "OUTPUT". Below each: input/output labels ("anything → spec.md", "spec.md → commit hash", "commit hash → whatever"). Arrows between boxes. KEY DIAGRAM — extra clarity. ViewBox ~520x220
- **IntakeFlow**: Fan-in: 5 source icons (Figma, Jira, chat, screenshot, article) on left fanning into a single "spec.md" box on right. Converging arrows. ViewBox ~480x280
- **ImplementationDivergence**: Inverse of IntakeFlow — single "spec.md" on left splitting into 4 parallel paths (labeled variations) all converging to "commit hash" on right. Diamond/hourglass shape. ViewBox ~520x280

### Task 4: Act 3–4 diagrams (4 components)
**Files:** `src/components/diagrams/{OutputLoop,IndependentPhases,HarnessCore,SequentialJobs}.tsx`
**Pattern:** Same as Task 2
**Specs:**
- **OutputLoop**: Circular flow: "commit hash" → "CI Monitor" → "Risk Gate" → fork: "Auto-merge" OR "Regression Sweep" → "Bug Tickets" → arrow back to "INTAKE". Loop feel. ViewBox ~400x360
- **IndependentPhases**: Three boxes spaced far apart with minimal thin connectors. Only contracts shown between them (spec.md, commit hash). Emphasis on isolation/independence. Dashed borders. ViewBox ~520x200
- **HarnessCore**: Central "HARNESS" box as solid foundation. Above it, "ORCHESTRATOR" box shown wobbling/tilted without harness (dashed, transparent). With harness, shown stable. Before/after or contrast. ViewBox ~360x320
- **SequentialJobs**: Horizontal chain of 4 job blocks with arrows. Each block shows input→output label. Last 3 show different outputs: "spec", "commit", "quality gate". ViewBox ~520x180

### Task 5: Act 4–5 diagrams (4 components)
**Files:** `src/components/diagrams/{StartAnywhere,TightLoopDiagram,FeedbackLoop,ThreeContracts}.tsx`
**Pattern:** Same as Task 2
**Specs:**
- **StartAnywhere**: Same chain as SequentialJobs but with 3 "entry point" arrows from above, pointing at steps 1, 2, 3. Human icon at each entry point. Shows you can inject manually. ViewBox ~520x240
- **TightLoopDiagram**: Outer box labeled "IMPLEMENTATION". Inside: circular loop of "Code" → "PR" → "Review" → back to "Code". Output arrow exits the box as "commit hash". ViewBox ~400x300
- **FeedbackLoop**: Full circle: "OUTPUT" (top) → "bugs" → "INTAKE" (right) → "spec" → "IMPLEMENTATION" (bottom) → "commit" → "OUTPUT". Large circular layout. ViewBox ~380x380
- **ThreeContracts**: Three cards side by side, each with an icon and label: "spec.md" (document icon), "commit hash" (git icon), "quality gate" (checkmark icon). Clean, final. ViewBox ~480x180

### Task 6: Write Philosophy.tsx with v2 content
**File:** `src/pages/Philosophy.tsx`
**Action:** Complete rewrite with all 17 sections from design doc. Import all new diagrams. Follow exact same Section/SplitSection patterns as v1. Copy text from design doc verbatim.

### Task 7: Update barrel export
**File:** `src/components/diagrams/index.ts`
**Action:** Add exports for all 15 new diagram components

### Task 8: Build verification
**Action:** Run `npm run build` and verify no TypeScript or build errors

### Task 9: Visual spot check
**Action:** Run `npm run dev` and verify the page renders
