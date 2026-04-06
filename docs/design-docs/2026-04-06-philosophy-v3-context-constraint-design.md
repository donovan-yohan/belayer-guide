---
status: current
created: 2026-04-06
branch: main
supersedes: 2026-03-12-philosophy-story-flow-design.md
implemented-by:
consulted-learnings: []
---

# Philosophy V3: Context Is the Constraint

## Problem

V2 established Belayer's structural architecture: three roles (orchestrator, harness, agent), three phases (explore, climb, summit), three contracts (spec.md, PR, quality gate). The core position was "Belayer is plumbing — bring your own harness, bring your own agents."

That position understated the hardest part. The real challenge of agent engineering isn't capability — it's context. What the model knows when it's doing a task. What's loaded, what's forgotten, what's carried over. The harness, which V2 treated as "not our concern," is actually the most critical layer because it's where context gets routed.

V3 reframes the philosophy through the context lens: same phases, same contracts, but with the harness as protagonist and an honest accounting of what we're learning.

## Approach

**Thesis-Architecture-Bet (Approach C):** Lead with the context constraint as the core thesis. Introduce the three layers (model/harness/repo context) as the lens. Retell the phases through that lens — each phase has a different context appetite. Close with the coupling tension and the YAML language bet.

**Tone:** "Here's what we're learning" — peer-to-peer, exploratory, honest about tensions rather than resolving them into confident conclusions.

**Relationship to V2:** V3 becomes the current version. V2 gets archived. V3 carries forward whatever V2 structural pieces still serve the narrative (phases, contracts, diagrams) but reframes them.

## Section Design

### Part 1: The Thesis (Sections 0-3)

**Section 0 — Hero**
- Type: Section (centered)
- Label: "The Constraint"
- Headline: Context is the **constraint**
- Copy: The challenge of agent engineering isn't capability. Models can write code, review it, plan architecture, debug failures. The hard part is what the model knows when it's doing those things. What's loaded, what's forgotten, what's carried over from last time. Every architecture decision in this space flows from one question: how do you get the right context to the right task at the right time?

**Section 1 — The Dumb Zone**
- Type: SplitSection (bg="elevated", headlineSide="left")
- Label: "The Problem"
- Headline: Runs end before agents get **dumb**
- Copy: Context windows fill up. The more an agent reads, writes, and reasons, the worse it gets at all three. We call this the dumb zone — the point where adding more context degrades performance instead of improving it. The practical solution is discrete runs. Break work into bounded sessions. Let each one start relatively clean. This is what humans already do — you close the chat, open a new one, start the next task. But discrete runs create a new problem: amnesia. The agent that just spent 40 minutes understanding your architecture starts fresh next time, knowing nothing.

**Section 2 — Three Competing Demands**
- Type: SplitSection (bg="warm", headlineSide="right")
- Label: "The Tension"
- Headline: Three demands, one **window**
- Content: The context problem splits into three competing needs:
  - **Depth** — implementation wants the plan, the architecture, the surrounding code all loaded. More relevant context means better code.
  - **Freshness** — review needs a clean slate. Loading the implementation context creates confirmation bias. The reviewer should encounter the code the way a human reviewer would.
  - **Memory** — learnings from past runs need to persist and surface when relevant. What broke last time. What patterns this repo follows. What was tried and didn't work.
  A harness that serves all three is the hard problem. Most don't try.

**Section 3 — The Pace of Change**
- Type: SplitSection (bg="deep", headlineSide="left")
- Label: "The Landscape"
- Headline: Everything is moving at **once**
- Copy: The model that's best at orchestrating is different from the model that's best at reasoning through code, which is different from the model with the best vision processing. And that's just the model layer. At the harness level, new code review tools, planning frameworks, and QA systems ship weekly. Each one is better than the last at something specific. Locking into any single tool at any layer means watching the rest of the industry move past you. But constantly swapping tools means never building depth with any of them. This is the second tension: the ecosystem rewards experimentation, but production systems reward stability. Any architecture that doesn't account for this is either too rigid to grow or too loose to rely on.

### Part 2: The Three Layers (Sections 4-7)

**Section 4 — Summit transition**
- Type: Section (centered, summit bg)
- Label: "The Layers"
- Headline: Three layers of **identity**
- Copy: People conflate three things that have different owners, different lifecycles, and different jobs. The model. The harness. The repo context. Separating them is how you reason about what's responsible for what — and where context should live.

**Section 5 — The Model**
- Type: SplitSection (bg="base", headlineSide="left")
- Label: "The Model"
- Headline: Capability without **opinion**
- Copy: The model is stateless intelligence. It doesn't know your repo, your conventions, or what it did last run. It's a function: prompt in, completion out. Opus 4.6, GPT-5.4, Gemini 3 Pro — these are engines. They're good at different things and getting better at different rates. The model layer is where you want the most flexibility, because the best model for a task today might not be the best model for it next month. Your architecture should make model swaps boring, not terrifying.

**Section 6 — The Harness**
- Type: SplitSection (bg="elevated", headlineSide="right")
- Label: "The Harness"
- Headline: The runtime that **wraps** the model
- Copy: Claude Code, Codex CLI, Cursor, OpenCode — these are agent runtimes. They give the model tools, file access, memory, and workflow. This is where discrete runs happen. Where context gets shaped. Where the decision is made about what the model sees and what it doesn't. The harness is also where the three competing demands collide. A code review tool that loads the full implementation plan before reviewing creates confirmation bias. A planning tool that doesn't load the codebase architecture produces plans that don't fit. The harness's job is to route the right context to the right task — and that job is harder than it looks.

**Section 7 — The Repo Context**
- Type: SplitSection (bg="warm", headlineSide="left")
- Label: "The Context"
- Headline: The world the harness **operates in**
- Copy: CLAUDE.md. Architecture docs. Test conventions. The accumulated knowledge of how code gets written here. This is the layer you own as an engineer. It's what makes "write a function" become "write a function that follows our patterns, uses our error handling, and respects our module boundaries." The repo context has a different lifecycle than the harness. You might switch from Claude Code to Cursor tomorrow — but your CLAUDE.md, your architecture docs, your conventions stay. This layer is yours. It should survive any tool swap.

### Part 3: Phases Retold (Sections 8-12)

**Section 8 — Summit transition**
- Type: Section (centered, summit bg)
- Label: "Orchestration"
- Headline: Three phases, three **contracts**
- Copy: V2 established three orchestration phases: explore, climb, summit. Spec in, PR out, quality gate at the end. That still holds. But V2 treated the harness as "bring your own" — a black box that wasn't Belayer's concern. That understated the hardest part. Each phase has a different relationship with context, and getting that wrong is how you get automation that ships confidently in the wrong direction.
- Diagram: ThreePhases (reused from V2)

**Section 9 — Explore**
- Type: SplitSection (bg="base", headlineSide="left")
- Label: "Explore"
- Headline: Anything becomes a **spec**
- Copy: The input is whatever you've got. Figma files, tickets, brainstorming transcripts, screenshots. The output is a spec.md. Explore is where memory matters most. The agent writing specs needs to know what's been tried before, what patterns this repo follows, what the team's priorities are. Without long-term memory, every spec starts from zero — and specs that ignore history repeat it. This is the phase where persistent context earns its keep.

**Section 10 — Climb**
- Type: SplitSection (bg="elevated", headlineSide="right")
- Label: "Climb"
- Headline: Spec becomes a **PR**
- Copy: The input is a spec.md. The output is a PR. This is where depth matters. The agent needs the plan, the surrounding architecture, the module boundaries, the test patterns — all loaded and close. Implementation is context-hungry by nature. But it's also where the dumb zone hits hardest, because the work is long. A complex feature can fill a context window before the code is done. The harness has to manage this tension: deep context, bounded runs, and continuity between them.

**Section 11 — Summit phase**
- Type: SplitSection (bg="warm", headlineSide="left")
- Label: "Summit"
- Headline: PRs become **value**
- Copy: The input is a PR. Monitor CI. Run a risk gate. Sweep for regressions on staging. Summit is where freshness matters. The agent evaluating the PR should not carry the implementation context. It shouldn't know what the author intended — only what the code does. Confirmation bias is the silent failure mode of automated review. A reviewer that loaded the plan will find what the plan said should be there. A reviewer that didn't will find what's actually there. That's the difference between validation and verification.

**Section 12 — Context Routing**
- Type: SplitSection (bg="deep", headlineSide="right")
- Label: "Context Routing"
- Headline: Shape what each task **sees**
- Copy: This is what V2 missed. The harness isn't just "the thing that runs the agent." It's the layer that decides: explore gets memory. Climb gets depth. Summit gets a clean slate. Same underlying learnings, different projections into each context window. A harness that treats every task the same — loading everything it has into every run — is leaving performance on the table at best and introducing systematic bias at worst.

### Part 4: Tensions and the Bet (Sections 13-17)

**Section 13 — The Coupling Question**
- Type: SplitSection (bg="base", headlineSide="left")
- Label: "The Tradeoff"
- Headline: Tight integration vs. **composability**
- Copy: The systems that work best right now are tightly coupled. Cursor owns the editor, the model routing, the context window. Devin owns the environment, the browser, the deployment. They solve the context routing problem because they own the whole stack. The composable approach — pick your model, pick your harness, pick your orchestrator — is philosophically clean but practically harder. You end up building glue between layers that weren't designed to talk to each other. So which do you pick? Lock in and hope you chose right, or stay loose and accept the integration tax?

**Section 14 — What's Actually Working**
- Type: SplitSection (bg="elevated", headlineSide="right")
- Label: "The Evidence"
- Headline: Neither answer is **winning**
- Copy: Tightly coupled systems ship fast but break when assumptions change. A new model drops that's better at planning but your system is wired to one provider. A better review tool ships but your harness can't swap it in. Meanwhile, composable systems are flexible but slow to mature. Every integration is custom. Every boundary is a potential failure point. The evidence so far is that neither extreme works. What works is having clear contracts between layers — tight enough that context flows correctly, loose enough that you can swap what's behind them.

**Section 15 — Belayer's Bet**
- Type: SplitSection (bg="warm", headlineSide="left")
- Label: "The Bet"
- Headline: A language, not a **runtime**
- Copy: Belayer's position is that the orchestration concern should be expressed as a declarative language. A YAML pipeline that says: run explore with this input, run climb with this spec, run summit with this PR. Each node is a black box. The pipeline defines sequence, contracts, and data flow. It doesn't define what's inside. If the language is right, any orchestrator can speak it. Belayer becomes the spec that orchestrators implement, not an orchestrator you're locked into. The same way Docker Compose doesn't care what's in your container, Belayer doesn't care what's in your node. It cares that spec.md goes in and a PR comes out.

**Section 16 — What the Harness Must Do**
- Type: SplitSection (bg="deep", headlineSide="right")
- Label: "The Contract"
- Headline: Opinions about what, not **how**
- Copy: This is where Belayer's "bring your own" stance gets refined. Belayer still doesn't prescribe which harness you use. But it now has opinions about what a harness must support to be orchestratable:
  - Long-term memory that persists across discrete runs
  - Context shaping per task type — not just "load everything"
  - Event-driven entry points — the orchestrator triggers work based on pipeline events, not interactive sessions
  These aren't implementation requirements. They're interface requirements. How you build the memory system, how you shape context, how you handle events — that's yours. But if your harness can't do these three things, the pipeline can't route context correctly, and the orchestration falls apart.

**Section 17 — Close**
- Type: Section (centered)
- Label: "The Close"
- Headline: Here's where we **are**
- Copy: Context is the constraint. The harness is where it gets solved. The orchestrator declares what runs and in what order. If we get the contracts right — between model and harness, between harness and pipeline, between pipeline and orchestrator — then each layer can evolve independently. The model gets smarter. The harness gets better at context routing. The orchestrator gets better at scheduling and parallelism. None of them need to wait for the others. That's the bet. We don't know if it's right yet. But it's the direction we're walking, and this is what we're learning along the way.
- Diagram: ThreeContracts (reused from V2, potentially adapted)
- CTA buttons: Explore the Platform / Get Started

## Diagrams

### Reused from V2
- **ThreePhases** — explore/climb/summit flow (section 8)
- **ThreeContracts** — spec.md / PR / quality gate cards (section 17)

### New diagrams needed
- **DumbZone** (section 1) — visual showing context filling up and performance degrading past a threshold
- **ThreeDemands** (section 2) — depth, freshness, memory as three competing forces
- **ThreeLayers** (section 4) — model / harness / repo context as stacked layers with different owners
- **ContextRouting** (section 12) — same memory source projecting differently into explore/climb/summit contexts

### Optional / deferred
- Diagrams for sections 3, 5, 6, 7, 13-16 can be copy-only initially (following V2's pattern of "not every beat needs a diagram")

## Technical Implementation

- Create `src/pages/PhilosophyV3.tsx` following V2's pattern (Section/SplitSection components, alternating bg/headlineSide)
- Update `src/pages/Philosophy.tsx`:
  - Import PhilosophyV3
  - Add V3 to versions array as current
  - Mark V2 as archived
  - Update default active version to v3
- Create new diagram components in `src/components/diagrams/`
- Background pattern: alternating base → elevated → warm → deep, with summit for transition sections

## Tone Guidelines

- "Here's what we're learning" not "here's the answer"
- Peer tone — walking someone through your thinking
- Short sentences. Direct. Let the logic convince.
- No AI-isms ("emerges", "powerful", "revolutionary")
- Honest about tensions — don't resolve everything into confident conclusions
