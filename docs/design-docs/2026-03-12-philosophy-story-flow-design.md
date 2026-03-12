# Philosophy Page Story Flow Redesign

## Problem

The philosophy page story doesn't flow naturally. Key issues:
- Section 3 ("What comes next?") asks a question but doesn't answer it before jumping ahead
- The small PR loop (the first composed workflow) is never shown explicitly
- "Errors compound upstream" appears too late and disconnected from what motivates it
- The harness workflow is dumped all at once instead of being built up piece by piece
- The Impact Pyramid diagram is conceptually inverted (wide should = high impact, not low leverage)
- Several SVG diagrams have clipping/overflow issues
- Copy leans too salesy. Should read like walking someone through your thinking, not pitching them.

## Revised Section Flow

### Sections 0-3: Build the foundation (largely unchanged)

**0. Hero — Three hats, one engineer**
No changes.

**1. The Boundary Problem — Every tool needs a clear start and end**
No changes.

**2. The First Workflow — Opening a PR**
No changes.

**3. Composition — What comes next?**
Keep the introduction of `pr:review` and `pr:resolve`. Remove the "stack them and something greater emerges" tease. This section adds tools, the next section shows what happens when you connect them.

### Section 4: NEW — The First Loop

**Tag:** The First Loop
**Headline:** Small tools, first cycle

Show the PR cycle as the first composed workflow: author → review → resolve → review. This is the moment individual tools become a system. Uses the existing CycleDiagram. The insight that "failure becomes about orchestration, not tools" lives here.

### Section 5: REWORKED — Error Amplification

**Tag:** Error Amplification
**Headline:** Errors compound upstream

The narrative:
- A bad line of code is a bad line of code.
- A bad line of plan could lead to hundreds of bad lines of code.
- A bad line of research, a misunderstanding of how the codebase works, could land you with thousands of bad lines of code.

This is the "why." If we can't make small tools work, or small loops, it just amplifies at scale.

**Diagram changes:**
- Impact Pyramid + Amplification Cascade shown **side by side** (stacked on mobile) instead of carousel
- Impact Pyramid needs to be **inverted** — widest layer at bottom = highest impact/leverage
  - Bottom: Specification/Command (10,000×) — "Wrong Problem"
  - Then: Research (1,000×) — "Misunderstanding the System"
  - Then: Planning (100×) — "Wrong Solution"
  - Top: Code (1×) — smallest, a bad line is just a bad line
  - Arrow pointing at bottom: "HIGHEST LEVERAGE"
- Amplification Cascade: three columns (research → plan → code) showing a small "bad" block fanning out into progressively larger bad blocks at each stage

### Section 6: Two documents, two problems (renumbered, minor tweaks)

Direct response to error amplification. If errors compound upstream, you need to catch them upstream. Separate brainstorming (divergent, exploratory) from planning (convergent, structured). Different tools for different problems.

### Section 7: Agents need context beyond code (renumbered, unchanged)

The fuel for good brainstorming and planning. WHY behind the code, tribal knowledge, architecture decisions.

### Sections 8-11: NEW — Walk through each harness step

Instead of one big "The full loop" section, walk through each step with its own motivation.

**8. Brainstorm & Plan — The first two steps**
**Tag:** The First Two Steps
How brainstorm and plan emerge from the need to validate direction before executing. Brainstorm explores the problem space. Plan reads every file before modifying any. Two documents, two checkpoints.

**9. Orchestrate — Execute with tested tools**
**Tag:** Execution
This is where the small loops from section 4 get deployed, driven by the documents from section 8. Agent teams run the tested tools.

**10. Review — An independent pair of eyes**
**Tag:** Independent Review
A separate agent reads only the output, not the plan that produced it. Fresh context catches what the builder can't see. This is high leverage because it's a second opinion that isn't anchored to the same assumptions.

**11. Reflect — Check against the docs**
**Tag:** Closing the Loop
The reflect step checks output against persistent documentation. Captures learnings. Updates context so the next session starts informed. This is what keeps the docs alive.

### Section 12: REWORKED — The Full Loop (the payoff)

**Tag:** The Harness Workflow
**Headline:** The full loop

Now that every piece has been motivated individually, show the complete harness cycle including PR review at the end. This is the payoff after walking through why each step is its own job. The diagram shows the full connected sequence: brainstorm → plan → orchestrate → review → reflect → complete → PR.

### Sections 13-16: Scale and close (renumbered, unchanged)

**13. Scaling Up — What if the requirement is larger?**
No content changes.

**14. Proof Point — 3 projects. 2 days.**
No content changes.

**15. Meet You Where You Are — Start anywhere on the journey**
No content changes.

**16. The Close — Workflows composed of workflows**
No content changes.

## Diagram Bug Fixes

These SVG diagrams have clipping/overflow issues that need fixing regardless of the story restructure:

1. **HarnessLoop** — "complete", "reflect" clipped on left edge; "orchestrate" clipped on right edge. Labels extend beyond SVG viewBox.
2. **HackathonTimeline** — "Clickhouse" label overlaps the setter icon on the left side.
3. **AltitudeProgression** — "Skills" row at the bottom is cut off/clipped.
4. **ImpactPyramid** — Needs full rework (inverted hierarchy, see section 5 above).
5. **AmplificationFlow** — Needs rework to match cascade concept (research → plan → code columns with propagating bad blocks).

## Tone Guidelines

- Write like you're explaining your thinking to a peer, not pitching a product
- "Here's what we tried, here's what we learned, here's what happened next"
- No em dashes
- No AI-isms ("emerges", "powerful", "revolutionary", "game-changing")
- Short sentences. Direct. Let the logic do the convincing.

## Implementation Scope

- Restructure Philosophy.tsx section ordering (0-16)
- Write new copy for sections 4, 8, 9, 10, 11
- Rework copy for sections 3, 5, 12
- Rework ImpactPyramid diagram (invert hierarchy)
- Rework AmplificationFlow diagram (cascade columns)
- Replace Carousel with side-by-side layout for section 5
- Fix SVG clipping on HarnessLoop, HackathonTimeline, AltitudeProgression
- Create new diagrams for sections 8-11 if needed (or reuse/adapt existing)
