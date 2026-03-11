import Section from '../components/Section'
import SplitSection from '../components/SplitSection'
import PeekHint from '../components/PeekHint'
import SkillTag from '../components/SkillTag'
import Carousel from '../components/Carousel'
import ThreeHats from '../components/diagrams/ThreeHats'
import BoundaryDiagram from '../components/diagrams/BoundaryDiagram'
import BuildingBlocks from '../components/diagrams/BuildingBlocks'
import CycleDiagram from '../components/diagrams/CycleDiagram'
import ImpactPyramid from '../components/diagrams/ImpactPyramid'
import AmplificationFlow from '../components/diagrams/AmplificationFlow'
import TwoDocuments from '../components/diagrams/TwoDocuments'

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
    </>
  )
}
