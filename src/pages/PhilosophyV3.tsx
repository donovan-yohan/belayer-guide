import Section from '../components/Section'
import SplitSection from '../components/SplitSection'
import PeekHint from '../components/PeekHint'
import Button from '../components/Button'
import DumbZone from '../components/diagrams/DumbZone'
import ThreeDemands from '../components/diagrams/ThreeDemands'
import ThreeLayers from '../components/diagrams/ThreeLayers'
import ThreePhases from '../components/diagrams/ThreePhases'
import ContextRouting from '../components/diagrams/ContextRouting'
import TelemetryLayer from '../components/diagrams/TelemetryLayer'
import ThreeContracts from '../components/diagrams/ThreeContracts'

export default function PhilosophyV3() {
  return (
    <>
      {/* 0. Hero — Context is the constraint */}
      <Section bg="base" align="center" peekHint={<PeekHint label="The problem" />}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Constraint</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          Context is the <strong className="text-accent">constraint</strong>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-8">
          The challenge of agent engineering isn't capability. Models can write code, review it, plan architecture, debug failures. The hard part is what the model knows when it's doing those things. What's loaded, what's forgotten, what's carried over from last time. Every architecture decision in this space flows from one question: how do you get the right context to the right task at the right time?
        </p>
      </Section>

      {/* 1. The Dumb Zone */}
      <SplitSection
        bg="elevated"
        headlineSide="left"
        sectionNumber={1}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Problem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Runs end before agents get <strong className="text-accent">dumb</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                Context windows fill up. The more an agent reads, writes, and reasons, the worse it gets at all three. We call this the dumb zone — the point where adding more context degrades performance instead of improving it.
              </p>
              <p>
                The practical solution is discrete runs. Break work into bounded sessions. Let each one start relatively clean. This is what humans already do — you close the chat, open a new one, start the next task.
              </p>
              <p>
                But discrete runs create a new problem: amnesia. The agent that just spent 40 minutes understanding your architecture starts fresh next time, knowing nothing.
              </p>
            </div>
            <DumbZone />
          </div>
        }
      />

      {/* 2. Three Competing Demands */}
      <SplitSection
        bg="warm"
        headlineSide="right"
        sectionNumber={2}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Tension</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Three demands, one <strong className="text-accent">window</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The context problem splits into three competing needs that pull in different directions.
              </p>
              <p>
                <strong className="text-text-primary">Depth</strong> — implementation wants the plan, the architecture, the surrounding code all loaded. More relevant context means better code. The agent needs to hold the whole picture.
              </p>
              <p>
                <strong className="text-text-primary">Freshness</strong> — review needs a clean slate. Loading the implementation context creates confirmation bias. The reviewer should encounter the code the way a human reviewer would — without knowing what the author intended, only what the code does.
              </p>
              <p>
                <strong className="text-text-primary">Memory</strong> — learnings from past runs need to persist and surface when relevant. What broke last time. What patterns this repo follows. What was tried and didn't work. This needs to feed into both depth and freshness without crowding either one.
              </p>
              <p>
                A harness that serves all three is the hard problem. Most don't try.
              </p>
            </div>
            <ThreeDemands />
          </div>
        }
      />

      {/* 3. The Pace of Change */}
      <SplitSection
        bg="deep"
        headlineSide="left"
        sectionNumber={3}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Landscape</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Everything is moving at <strong className="text-accent">once</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The model that's best at orchestrating is different from the model that's best at reasoning through code, which is different from the model with the best vision processing. And that's just the model layer.
            </p>
            <p>
              At the harness level, new code review tools, planning frameworks, and QA systems ship weekly. Each one is better than the last at something specific. Locking into any single tool at any layer means watching the rest of the industry move past you. But constantly swapping tools means never building depth with any of them.
            </p>
            <p>
              This is the second tension: the ecosystem rewards experimentation, but production systems reward stability. Any architecture that doesn't account for this is either too rigid to grow or too loose to rely on.
            </p>
          </div>
        }
      />

      {/* 4. Three layers of identity — Summit */}
      <Section bg="summit" align="center" sectionNumber={4} className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Layers</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          Three layers of <strong className="text-accent">identity</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          People conflate three things that have different owners, different lifecycles, and different jobs. The model. The harness. The repo context. Separating them is how you reason about what's responsible for what — and where context should live.
        </p>
        <ThreeLayers />
      </Section>

      {/* 5. The Model */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={5}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Model</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Capability without <strong className="text-accent">opinion</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The model is stateless intelligence. It doesn't know your repo, your conventions, or what it did last run. It's a function: prompt in, completion out.
            </p>
            <p>
              Opus 4.6, GPT-5.4, Gemini 3 Pro — these are engines. They're good at different things and getting better at different rates. The model layer is where you want the most flexibility, because the best model for a task today might not be the best model for it next month. Your architecture should make model swaps boring, not terrifying.
            </p>
          </div>
        }
      />

      {/* 6. The Harness */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={6}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Harness</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              The runtime that <strong className="text-accent">wraps</strong> the model
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              Claude Code, Codex CLI, Cursor, OpenCode — these are agent runtimes. They give the model tools, file access, memory, and workflow. This is where discrete runs happen. Where context gets shaped. Where the decision is made about what the model sees and what it doesn't.
            </p>
            <p>
              The harness is also where the three competing demands collide. A code review tool that loads the full implementation plan before reviewing creates confirmation bias. A planning tool that doesn't load the codebase architecture produces plans that don't fit. The harness's job is to route the right context to the right task — and that job is harder than it looks.
            </p>
          </div>
        }
      />

      {/* 7. The Repo Context */}
      <SplitSection
        bg="warm"
        headlineSide="left"
        sectionNumber={7}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Context</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              The world the harness <strong className="text-accent">operates in</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              CLAUDE.md. Architecture docs. Test conventions. The accumulated knowledge of how code gets written <em>here</em>. This is the layer you own as an engineer. It's what makes "write a function" become "write a function that follows our patterns, uses our error handling, and respects our module boundaries."
            </p>
            <p>
              The repo context has a different lifecycle than the harness. You might switch from Claude Code to Cursor tomorrow — but your CLAUDE.md, your architecture docs, your conventions stay. This layer is yours. It should survive any tool swap.
            </p>
          </div>
        }
      />

      {/* 8. Three phases, three contracts — Summit */}
      <Section bg="summit" align="center" sectionNumber={8} className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Orchestration</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          Three phases, three <strong className="text-accent">contracts</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          V2 established three orchestration phases: explore, climb, summit. Spec in, PR out, quality gate at the end. That still holds. But V2 treated the harness as "bring your own" — a black box that wasn't Belayer's concern. That understated the hardest part. Each phase has a different relationship with context, and getting that wrong is how you get automation that ships confidently in the wrong direction.
        </p>
        <ThreePhases />
      </Section>

      {/* 9. Explore */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={9}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Explore</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Anything becomes a <strong className="text-accent">spec</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The input is whatever you've got. Figma files, tickets, brainstorming transcripts, screenshots. The output is a spec.md.
            </p>
            <p>
              Explore is where memory matters most. The agent writing specs needs to know what's been tried before, what patterns this repo follows, what the team's priorities are. Without long-term memory, every spec starts from zero — and specs that ignore history repeat it. This is the phase where persistent context earns its keep.
            </p>
          </div>
        }
      />

      {/* 10. Climb */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={10}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Climb</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Spec becomes a <strong className="text-accent">PR</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The input is a spec.md. The output is a PR. This is where depth matters. The agent needs the plan, the surrounding architecture, the module boundaries, the test patterns — all loaded and close.
            </p>
            <p>
              Implementation is context-hungry by nature. But it's also where the dumb zone hits hardest, because the work is long. A complex feature can fill a context window before the code is done. The harness has to manage this tension: deep context, bounded runs, and continuity between them.
            </p>
          </div>
        }
      />

      {/* 11. Summit */}
      <SplitSection
        bg="warm"
        headlineSide="left"
        sectionNumber={11}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Summit</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              PRs become <strong className="text-accent">value</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The input is a PR. Monitor CI. Run a risk gate. Sweep for regressions on staging. Summit is where freshness matters.
            </p>
            <p>
              The agent evaluating the PR should not carry the implementation context. It shouldn't know what the author intended — only what the code does. Confirmation bias is the silent failure mode of automated review. A reviewer that loaded the plan will find what the plan said should be there. A reviewer that didn't will find what's actually there. That's the difference between validation and verification.
            </p>
          </div>
        }
      />

      {/* 12. Context Routing */}
      <SplitSection
        bg="deep"
        headlineSide="right"
        sectionNumber={12}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Context Routing</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Shape what each task <strong className="text-accent">sees</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                This is what V2 missed. The harness isn't just "the thing that runs the agent." It's the layer that decides: explore gets memory. Climb gets depth. Summit gets a clean slate. Same underlying learnings, different projections into each context window.
              </p>
              <p>
                A harness that treats every task the same — loading everything it has into every run — is leaving performance on the table at best and introducing systematic bias at worst.
              </p>
            </div>
            <ContextRouting />
          </div>
        }
      />

      {/* 13. The Coupling Question */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={13}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Tradeoff</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Tight integration vs. <strong className="text-accent">composability</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The systems that work best right now are tightly coupled. Cursor owns the editor, the model routing, the context window. Devin owns the environment, the browser, the deployment. They solve the context routing problem because they own the whole stack.
            </p>
            <p>
              The composable approach — pick your model, pick your harness, pick your orchestrator — is philosophically clean but practically harder. You end up building glue between layers that weren't designed to talk to each other. So which do you pick? Lock in and hope you chose right, or stay loose and accept the integration tax?
            </p>
          </div>
        }
      />

      {/* 14. What's Actually Working */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={14}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Evidence</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Neither answer is <strong className="text-accent">winning</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              Tightly coupled systems ship fast but break when assumptions change. A new model drops that's better at planning but your system is wired to one provider. A better review tool ships but your harness can't swap it in.
            </p>
            <p>
              Meanwhile, composable systems are flexible but slow to mature. Every integration is custom. Every boundary is a potential failure point. The evidence so far is that neither extreme works. What works is having clear contracts between layers — tight enough that context flows correctly, loose enough that you can swap what's behind them.
            </p>
          </div>
        }
      />

      {/* 15. Belayer's Bet */}
      <SplitSection
        bg="warm"
        headlineSide="left"
        sectionNumber={15}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Bet</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              A language, not a <strong className="text-accent">runtime</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              Belayer's position is that the orchestration concern should be expressed as a declarative language. A YAML pipeline that says: run explore with this input, run climb with this spec, run summit with this PR. Each node is a black box. The pipeline defines sequence, contracts, and data flow. It doesn't define what's inside.
            </p>
            <p>
              If the language is right, any orchestrator can speak it. Belayer becomes the spec that orchestrators implement, not an orchestrator you're locked into. The same way Docker Compose doesn't care what's in your container, Belayer doesn't care what's in your node. It cares that spec.md goes in and a PR comes out.
            </p>
          </div>
        }
      />

      {/* 16. What the Harness Must Do */}
      <SplitSection
        bg="deep"
        headlineSide="right"
        sectionNumber={16}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Contract</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Opinions about what, not <strong className="text-accent">how</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              This is where Belayer's "bring your own" stance gets refined. Belayer still doesn't prescribe which harness you use. But it now has opinions about what a harness must support to be orchestratable:
            </p>
            <ul className="space-y-2 ml-1">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5 text-sm">&#9642;</span>
                <span><strong className="text-text-primary">Long-term memory</strong> that persists across discrete runs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5 text-sm">&#9642;</span>
                <span><strong className="text-text-primary">Context shaping</strong> per task type — not just "load everything"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5 text-sm">&#9642;</span>
                <span><strong className="text-text-primary">Event-driven entry points</strong> — the orchestrator triggers work based on pipeline events, not interactive sessions</span>
              </li>
            </ul>
            <p>
              These aren't implementation requirements. They're interface requirements. How you build the memory system, how you shape context, how you handle events — that's yours. But if your harness can't do these three things, the pipeline can't route context correctly, and the orchestration falls apart.
            </p>
          </div>
        }
      />

      {/* 17. Telemetry as Prerequisite */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={17}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Missing Piece</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              You can't learn from what you can't <strong className="text-accent">see</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                There's one more requirement that cuts across all three layers: telemetry. If you're going to swap models, swap harnesses, swap orchestrators — you need to know what changed and whether it made things better or worse.
              </p>
              <p>
                Without rich, queryable data on every run — what model wrote this code, what session produced this PR, what plan led to this outcome — you're flying blind. You can't run evals. You can't catch regressions. You can't answer "did switching from Opus to Gemini for planning actually improve spec quality?"
              </p>
              <p>
                This is what Carabiner proposes: not a telemetry system, but a requirement that one exists. The data is already being produced — git history, session transcripts, model attribution. The missing piece is the join layer that connects code to the session that wrote it, the session to the model that ran it, the model to the pipeline that triggered it.
              </p>
              <p>
                Carabiner doesn't have opinions about how you collect this data. It has opinions about what must be queryable: which agent wrote which lines, in what session, with what confidence. The rest — how you store it, how you visualize it, how you build evals on top — is yours. But if your system can't answer "what happened and why," it can't learn. And a system that can't learn is just automation with a shelf life.
              </p>
            </div>
            <TelemetryLayer />
          </div>
        }
      />

      {/* 18. Close — Here's where we are */}
      <Section bg="elevated" align="center" sectionNumber={18}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Close</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          Here's where we <strong className="text-accent">are</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Context is the constraint. The harness is where it gets solved. The orchestrator declares what runs and in what order. If we get the contracts right — between model and harness, between harness and pipeline, between pipeline and orchestrator — then each layer can evolve independently. The model gets smarter. The harness gets better at context routing. The orchestrator gets better at scheduling and parallelism. None of them need to wait for the others. That's the bet. We don't know if it's right yet. But it's the direction we're walking, and this is what we're learning along the way.
        </p>
        <div className="max-w-lg mx-auto mb-10">
          <ThreeContracts />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/">Explore the Platform</Button>
          <Button variant="secondary" href="https://github.com/donovan-yohan/belayer">Get Started</Button>
        </div>
      </Section>
    </>
  )
}
