import Section from '../components/Section'
import SplitSection from '../components/SplitSection'
import PeekHint from '../components/PeekHint'
import Button from '../components/Button'
import ThreeRoles from '../components/diagrams/ThreeRoles'
import OrchestratorFlow from '../components/diagrams/OrchestratorFlow'
import HarnessLayers from '../components/diagrams/HarnessLayers'
import AgentMechanics from '../components/diagrams/AgentMechanics'
import LeverageHeuristic from '../components/diagrams/LeverageHeuristic'
import ThreePhases from '../components/diagrams/ThreePhases'
import IntakeFlow from '../components/diagrams/IntakeFlow'
import ImplementationDivergence from '../components/diagrams/ImplementationDivergence'
import OutputLoop from '../components/diagrams/OutputLoop'
import IndependentPhases from '../components/diagrams/IndependentPhases'
import HarnessCore from '../components/diagrams/HarnessCore'
import SequentialJobs from '../components/diagrams/SequentialJobs'
import StartAnywhere from '../components/diagrams/StartAnywhere'
import TightLoopDiagram from '../components/diagrams/TightLoopDiagram'
import FeedbackLoop from '../components/diagrams/FeedbackLoop'
import ThreeContracts from '../components/diagrams/ThreeContracts'

export default function PhilosophyV2() {
  return (
    <>
      {/* 0. Hero — Three roles, one system */}
      <Section bg="base" align="center" peekHint={<PeekHint label="The three roles" />}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Architecture</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          Three roles, one <strong className="text-accent">system</strong>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-8">
          Agentic engineering isn't one problem. It's three. The orchestrator handles automation — the machinery that picks up work, runs it, and delivers results without you touching the terminal. The harness encodes your team's engineering practices — the why behind your architecture, your test strategy, your quality bar. The agent is the engine that writes code well — model selection, adversarial review, subagent coordination.
        </p>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-8">
          Each role solves a fundamentally different problem. Conflating them is how you get automation that ships fast and breaks everything.
        </p>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-8">
          Right now, all three are being rapidly developed — and the responsibilities are often tangled together. Tools try to be the orchestrator, the harness, and the agent all at once. Adopting them means adopting entire workflows. The clean separation of these roles lets each solution focus on a smaller problem, so you can mix and match and piece together exactly what you need.
        </p>
        <ThreeRoles />
      </Section>

      {/* 1. The Orchestrator */}
      <SplitSection
        bg="elevated"
        headlineSide="left"
        sectionNumber={1}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Orchestrator</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Automation that runs <strong className="text-accent">without you</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The orchestrator is the nightshift. It automatically picks up work from your backlog, ingests bug tickets, reviews PRs by default, and stages results for your morning. You don't touch the terminal. You don't monitor the process.
              </p>
              <p>
                This is what people imagine when they think about "AI engineering." But automation without guardrails is just fast destruction. The orchestrator's value is entirely dependent on what's underneath it.
              </p>
            </div>
            <OrchestratorFlow />
          </div>
        }
      />

      {/* 2. The Harness */}
      <SplitSection
        bg="warm"
        headlineSide="right"
        sectionNumber={2}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Harness</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Engineering practices for <strong className="text-accent">your repo</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                Why is this function structured the way it is? What architecture should a new feature follow? What does "quality" mean here — test suites? Browser validation? Lighthouse scores?
              </p>
              <p>
                The harness is the answers to these questions, encoded for agents. It's a per-repo concern — what works for a React marketing site is different from what works for a Go microservice. The harness gives agents the context a senior engineer carries in their head: not just how to write code, but how to write code <em>here</em>.
              </p>
            </div>
            <HarnessLayers />
          </div>
        }
      />

      {/* 3. The Agent */}
      <SplitSection
        bg="deep"
        headlineSide="left"
        sectionNumber={3}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Agent</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              How code gets written <strong className="text-accent">well</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The agent layer is the mechanics of code quality. Which model for which task? When do you use subagent-driven development to parallelize work? When do you run adversarial review — sending a separate model to challenge the first one's output?
              </p>
              <p>
                Claude for planning, Codex for independent review. Skills that encode proven workflows. The agent layer is where the LLM's raw capability gets shaped into reliable engineering output.
              </p>
            </div>
            <AgentMechanics />
          </div>
        }
      />

      {/* 4. Where the lines fall */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={4}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Boundary</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Where the lines <strong className="text-accent">fall</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The harness encapsulates everything you need to manually go from idea to finished code inside your terminal, on your checked-out branch. It's what a senior engineer does when they sit down to build something.
              </p>
              <p>
                The orchestrator encapsulates everything you need to automatically go from idea to finished code without ever touching the terminal. Same journey, different driver.
              </p>
              <p>
                That distinction — manual vs. automatic, attended vs. unattended — is where the boundary naturally falls. When you can clearly separate "what I do at my desk" from "what should run while I sleep," you've found the line.
              </p>
            </div>
            <LeverageHeuristic />
          </div>
        }
      />

      {/* 5. Three phases, three contracts — Summit */}
      <Section bg="summit" align="center" sectionNumber={5} className="relative">
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
          Orchestration splits into three distinct phases. Each phase has one input and one output. Each phase doesn't need to know or care how the others work. Intake turns anything into a spec. Implementation turns a spec into code. Output turns code into value. That's it. Three contracts. Everything else is implementation detail.
        </p>
        <ThreePhases />
      </Section>

      {/* 6. Intake */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={6}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Intake</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Anything becomes a <strong className="text-accent">spec</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The input to intake is whatever you've got. A Figma file. A Jira ticket. A brainstorming session with Claude. An article you saw online that inspired something. Screenshots of a SaaS app you want to steal ideas from.
              </p>
              <p>
                The output is always the same: a spec.md. One document that captures what needs to be built, why, and what success looks like. The intake phase doesn't care how the code will be written — it cares that the problem is well-defined.
              </p>
            </div>
            <IntakeFlow />
          </div>
        }
      />

      {/* 7. Implementation */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={7}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Implementation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Spec becomes <strong className="text-accent">code</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The input is a spec.md. The output is a commit hash. The only assumed infrastructure is source control.
              </p>
              <p>
                This is where we see the most divergence. Gstack, Superpowers, Symphony — dozens of variations on how code actually gets written, how you validate it, what kind of QA runs, how you persist context between sessions. These are all important questions, but they are not technically necessary to achieve "run a nightshift." They are necessary to achieve "run a <em>useful</em> nightshift."
              </p>
              <p>
                This is intentional. Belayer as an orchestrator doesn't need to know or care what harness you use or which agents you prefer. You bring your own. The only thing Belayer needs is the entrypoint you configure in the prompt — everything else is yours to decide.
              </p>
            </div>
            <ImplementationDivergence />
          </div>
        }
      />

      {/* 8. Output */}
      <SplitSection
        bg="warm"
        headlineSide="left"
        sectionNumber={8}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Output</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Code becomes <strong className="text-accent">value</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The input is a commit hash. What do you do with it?
              </p>
              <p>
                Monitor CI. Establish a risk gate that can auto-merge low-risk PRs. Run regression sweeps or bug testing on a staging environment — and feed the bugs found back into intake as new tickets. The output phase is where the loop closes: finished code becomes deployed value, and any problems become new inputs.
              </p>
            </div>
            <OutputLoop />
          </div>
        }
      />

      {/* 9. Independence */}
      <SplitSection
        bg="deep"
        headlineSide="right"
        sectionNumber={9}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Independence</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              They don't need to know <strong className="text-accent">each other</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                Given that these three phases don't need to know or care how the others work, you can solve each problem in whatever way is best. Use Figma for intake and Jira for tracking. Use Gstack for implementation and Vercel for deployment. Mix and match.
              </p>
              <p>
                For full automation orchestration, the only concern is how these three layers communicate with each other. And the contracts are simple: spec.md in, commit hash out, quality gate at the end. This is where Belayer's opinions as an orchestrator end.
              </p>
            </div>
            <IndependentPhases />
          </div>
        }
      />

      {/* 10. The meat of implementation — Summit */}
      <Section bg="summit" align="center" sectionNumber={10} className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Harness</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          The meat of <strong className="text-accent">implementation</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Without the harness, the orchestrator's value is questionable — if not dangerous. An orchestrator that can automatically pick up tickets, write code, and push PRs sounds powerful. But if it doesn't understand your architecture, doesn't know your test strategy, can't distinguish "this repo uses browser validation" from "this repo runs unit tests" — it's just shipping fast in the wrong direction. The harness is what makes automation trustworthy.
        </p>
        <HarnessCore />
      </Section>

      {/* 11. Guiding Principles */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={11}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Not a workflow, but <strong className="text-accent">principles</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The harness is not a prescribed workflow. It's the opinion that there are jobs to be done in a certain order, and that each job has a clear input and output.
              </p>
              <p>
                Output can be a spec file, a commit hash, or a quality gate. This roughly maps to plan, code, review — but the phases can be strung together in any combination, loop internally, and be tested however you like. Use whatever tool you want. The principle is sequence and accountability, not a specific tool.
              </p>
            </div>
            <SequentialJobs />
          </div>
        }
      />

      {/* 12. Start from any step */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={12}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Interchangeability</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Start from <strong className="text-accent">any step</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The core principle: if you were to manually write a spec, or a plan, or even some code, you could start a workflow from the next step and it would continue to work as though an agent had done everything prior.
              </p>
              <p>
                This is what makes the system composable rather than monolithic. Each step only cares about its input, not about who produced it. A human-written spec is indistinguishable from an AI-generated one. A manually crafted plan kicks off orchestration the same way an auto-generated one does. The seams are at the artifacts, not at the agents.
              </p>
            </div>
            <StartAnywhere />
          </div>
        }
      />

      {/* 13. Tight Loops */}
      <SplitSection
        bg="warm"
        headlineSide="left"
        sectionNumber={13}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Tight Loops</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              PR and review stay <strong className="text-accent">inside</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                For ease of iteration, implementation includes PR creation and code review. The loop stays tight and internal: write code, open a PR, review it, address feedback, review again — all within the implementation phase.
              </p>
              <p>
                This keeps the feedback cycle fast. The orchestrator doesn't need to know that code review happened. It just sees a commit hash appear when implementation is done. The internal loops are the harness's concern.
              </p>
            </div>
            <TightLoopDiagram />
          </div>
        }
      />

      {/* 14. Multi-repo remains open */}
      <SplitSection
        bg="deep"
        headlineSide="right"
        sectionNumber={14}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Unsolved</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Multi-repo remains <strong className="text-accent">open</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              One caveat where this becomes more complex: multi-repo workflows. The orchestrator distributing work across repos must have some way of collecting knowledge about each candidate repo to truly automate it. Which repo uses what framework? Where do the integration points live? What are the shared types?
            </p>
            <p>
              This remains an unsolved problem in a clean way. The harness is per-repo by nature, and the orchestrator is multi-repo by nature. Bridging that gap without collapsing the boundary is the next frontier for Belayer.
            </p>
          </div>
        }
      />

      {/* 15. Output feeds back to intake */}
      <SplitSection
        bg="elevated"
        headlineSide="left"
        sectionNumber={15}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Closing The Loop</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Output feeds back to <strong className="text-accent">intake</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The output phase is where we close the loop. Low-risk changes and bug fixes get automatically staged. Regression sweeps run against staging environments to catch issues. And the bugs found? They feed back into intake as new tickets.
              </p>
              <p>
                This is where automation pushes boundaries: not just shipping code, but monitoring what shipped and generating new work from what it finds. The system becomes self-correcting, with human oversight at the approval gates rather than at the keyboard.
              </p>
            </div>
            <FeedbackLoop />
          </div>
        }
      />

      {/* 16. Close — Three contracts, one system */}
      <Section bg="base" align="center" sectionNumber={16}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Close</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          Three contracts, one <strong className="text-accent">system</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          That's it. Input to intake is whatever. Output is spec.md. Input to implementation is spec.md. Output is a commit hash. Input to output is a commit hash. Output is whatever comes next. The orchestrator's opinions end at these three contracts. Everything between them — how specs get written, how code gets built, how deploys get monitored — is decided by the layers below. That's what makes the system composable: opinionated about boundaries, unopinionated about internals.
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
