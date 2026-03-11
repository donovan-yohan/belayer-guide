import Section from '../components/Section'
import SplitSection from '../components/SplitSection'
import PeekHint from '../components/PeekHint'
import SkillTag from '../components/SkillTag'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import ThreeHats from '../components/diagrams/ThreeHats'
import BoundaryDiagram from '../components/diagrams/BoundaryDiagram'
import BuildingBlocks from '../components/diagrams/BuildingBlocks'
import CycleDiagram from '../components/diagrams/CycleDiagram'
import ImpactPyramid from '../components/diagrams/ImpactPyramid'
import AmplificationFlow from '../components/diagrams/AmplificationFlow'
import TwoDocuments from '../components/diagrams/TwoDocuments'
import HarnessLoop from '../components/diagrams/HarnessLoop'
import ParallelLeads from '../components/diagrams/ParallelLeads'
import HackathonTimeline from '../components/diagrams/HackathonTimeline'
import AltitudeProgression from '../components/diagrams/AltitudeProgression'
import ComposedStack from '../components/diagrams/ComposedStack'

export default function Philosophy() {
  return (
    <>
      {/* 0. Hero — Three hats, one engineer */}
      <Section bg="base" align="center" peekHint={<PeekHint label="The boundary problem" />}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Meta Framework</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          Three hats, one <strong className="text-accent">engineer</strong>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-8">
          Every engineer wears three hats in the software development lifecycle: refinement and planning, implementation, and code review. Agentic engineering breaks down workflow the same way we break down any system — by finding the boundaries.
        </p>
        <ThreeHats />
      </Section>

      {/* 1. Every tool needs a clear start and end */}
      <SplitSection
        bg="elevated"
        headlineSide="left"
        sectionNumber={1}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Boundary Problem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Every tool needs a clear <strong className="text-accent">start and end</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                If a tool that refines is also the tool that implements, context explodes. The agent tries to hold everything at once — the problem definition, the architecture, the code, the tests — and quality drops everywhere.
              </p>
              <p>
                Crossing a boundary <em>is</em> its own tool. Something great at planning + something great at implementing + something that gets them talking = a system.
              </p>
            </div>
            <BoundaryDiagram />
          </div>
        }
      />

      {/* 2. Opening a PR */}
      <SplitSection
        bg="warm"
        headlineSide="right"
        sectionNumber={2}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The First Workflow</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Opening a <strong className="text-accent">PR</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The first problem we solved was tedious: writing good pull requests. It pulled you out of your code to restate work you'd already done. We built <SkillTag>pr:author</SkillTag> — clear start (implementation done), clear end (PR link).
            </p>
            <p>
              Small scope made it obvious when it was working and when it wasn't. That's the first insight: <strong className="text-text-primary">start with a problem small enough to verify.</strong>
            </p>
          </div>
        }
      />

      {/* 3. What comes next? */}
      <SplitSection
        bg="deep"
        headlineSide="left"
        sectionNumber={3}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Composition</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              What comes <strong className="text-accent">next?</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                If an agent can write PRs, it can review them too. <SkillTag>pr:review</SkillTag> catches issues against project conventions. <SkillTag>pr:resolve</SkillTag> addresses review feedback automatically.
              </p>
              <p>
                Each tool solves a specific, testable problem within the same pillar. Stack them and something greater emerges.
              </p>
            </div>
            <BuildingBlocks />
          </div>
        }
      />

      {/* 4. Tested tools, focused problems */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={4}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Orchestration Insight</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Tested tools, <strong className="text-accent">focused</strong> problems
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                With tested building blocks, you stop worrying about correctness and start thinking about sequencing. A failure of outcome becomes a failure of <em>orchestration</em>, not tools.
              </p>
              <p>
                A self-healing cycle emerges: author a PR, review it, resolve feedback, review again. The loop runs until the PR is clean — no human in the middle.
              </p>
            </div>
            <CycleDiagram />
          </div>
        }
      />

      {/* 5. Errors compound upstream */}
      <Section bg="summit" align="center" sectionNumber={5} className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Error Amplification</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          Errors compound <strong className="text-accent">upstream</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Bad specification produces 10,000+ lines of wrong code. Bad research, 1,000+. Bad planning, 10–100. Human attention belongs at the highest-leverage points — not reviewing output, but validating direction.
        </p>
        <div className="overflow-hidden rounded-lg max-w-xl mx-auto">
          <Carousel>
            <div className="flex flex-col items-center gap-3">
              <ImpactPyramid />
              <p className="text-text-muted text-sm">Impact Pyramid — errors multiply as they flow down</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <AmplificationFlow />
              <p className="text-text-muted text-sm">Amplification Cascade — one bad input dominates output</p>
            </div>
          </Carousel>
        </div>
      </Section>

      {/* 6. Two documents, two problems */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={6}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Validation Gates</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Two documents, two <strong className="text-accent">problems</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The design doc validates that the <em>problem</em> is correct — are we solving the right thing? The plan catches hallucinations by reading every file before modifying any.
              </p>
              <p>
                Different tools for different problems. The design doc is exploratory and divergent. The plan is structured and convergent. Conflating them is how you get 10,000 wrong lines.
              </p>
            </div>
            <TwoDocuments />
          </div>
        }
      />

      {/* 7. Agents need context beyond code */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={7}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Persistent Context</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Agents need context beyond <strong className="text-accent">code</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              Code alone isn't enough for informed decisions. An agent reading a function doesn't know <em>why</em> that function exists, what trade-off it represents, or what the team tried before.
            </p>
            <p>
              Agents need the same thing new engineers need: onboarding, product context, tribal knowledge. Persistent documentation captures the <strong className="text-text-primary">WHY</strong> — architecture decisions, design rationale, project goals — so every agent session starts informed, not guessing.
            </p>
          </div>
        }
      />

      {/* 8. The full loop */}
      <Section bg="warm" align="center" sectionNumber={8}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Harness Workflow</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          The full <strong className="text-accent">loop</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Brainstorm the design. Plan the implementation. Orchestrate agent teams to build it. Review with a fresh pair of eyes. Reflect to capture learnings. Complete to ship. The review step is what keeps agents honest — a separate agent that reads only the output, not the plan that produced it.
        </p>
        <div className="max-w-xs mx-auto">
          <HarnessLoop />
        </div>
      </Section>

      {/* 9. What if the requirement is larger? */}
      <SplitSection
        bg="deep"
        headlineSide="left"
        sectionNumber={9}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Scaling Up</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              What if the requirement is <strong className="text-accent">larger?</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                Leads. Each lead runs a full harness loop — brainstorm, plan, orchestrate, review, reflect — planned and executed independently per goal. A setter coordinates, decomposing a specification into independent climbs.
              </p>
              <p>
                Independent goals run <strong className="text-text-primary">simultaneously</strong>. Three leads working three features isn't three times as slow — it's roughly the same wall-clock time as one, with the setter ensuring they don't collide.
              </p>
            </div>
            <ParallelLeads />
          </div>
        }
      />

      {/* 10. 3 projects. 2 days. */}
      <Section bg="summit" align="center" sectionNumber={10} className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Proof Point</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          3 projects. 2 <strong className="text-accent">days.</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          A hackathon. Listen to the finance team, take notes, create a design doc, dispatch leads. While those run: brainstorm CLI improvements, configure a dynamic Clickhouse endpoint, prototype Claude from mobile. The human works as <strong className="text-text-primary">architect</strong> — setting direction, not writing every line.
        </p>
        <div className="max-w-sm mx-auto">
          <HackathonTimeline />
        </div>
      </Section>

      {/* 11. Start anywhere on the journey */}
      <SplitSection
        bg="base"
        headlineSide="right"
        sectionNumber={11}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Meet You Where You Are</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1]">
              Start anywhere on the <strong className="text-accent">journey</strong>
            </h2>
          </>
        }
        content={
          <div className="space-y-6">
            <div className="text-text-secondary text-lg space-y-4">
              <p>
                The stack meets engineers wherever they are. Start with the <SkillTag>pr:author</SkillTag> plugin to automate your PR workflow. Grow into harness commands for structured design-plan-execute cycles. Graduate to <SkillTag>harness:loop</SkillTag> for fully autonomous runs. Scale to belayer for multi-repo orchestration.
              </p>
              <p>
                Each layer is composed of workflows you already know work. No leap of faith required — just the next step up.
              </p>
            </div>
            <AltitudeProgression />
          </div>
        }
      />

      {/* 12. Workflows composed of workflows — Close */}
      <Section bg="elevated" align="center" sectionNumber={12}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Close</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          Workflows composed of <strong className="text-accent">workflows</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          That's the meta-framework principle. Architecture doesn't emerge from grand upfront design — it emerges from real needs, tested at each level. When something breaks, you know exactly where to look: the tool, the orchestration, or the specification. Each layer is built from the layer below.
        </p>
        <div className="max-w-sm mx-auto mb-10">
          <ComposedStack />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/">Explore the Platform</Button>
          <Button variant="secondary" href="https://github.com/anthropics/claude-code">Get Started</Button>
        </div>
      </Section>
    </>
  )
}
