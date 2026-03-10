import Section from '../components/Section'
import SplitSection from '../components/SplitSection'
import PeekHint from '../components/PeekHint'
import SkillTag from '../components/SkillTag'
import Button from '../components/Button'

export default function Philosophy() {
  return (
    <>
      {/* 1. Hero */}
      <Section bg="base" align="center" sectionNumber={1}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Meta Framework</span>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
          Built from the <strong className="text-accent">bottom up</strong>
        </h1>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          Belayer wasn't designed top-down. Each piece emerged from solving the smallest problem first, then composing solutions into something greater.
        </p>
        <PeekHint label="Opening a PR" />
      </Section>

      {/* 2. Opening a PR */}
      <SplitSection
        bg="elevated"
        headlineSide="left"
        sectionNumber={2}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The First Pain Point</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
              Opening a <strong className="text-accent">PR</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              The first problem was simple: writing good pull requests is tedious. So we built <SkillTag>pr:author</SkillTag> — a skill that understands your changes and crafts meaningful descriptions.
            </p>
            <p>
              That single skill changed how we thought about AI assistance. Not as a code generator, but as a development partner.
            </p>
          </div>
        }
      />

      {/* 3. Reviewing Code */}
      <SplitSection
        bg="warm"
        headlineSide="right"
        sectionNumber={3}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Spotter</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
              Reviewing <strong className="text-accent">Code</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              If AI can write PRs, it can review them too. <SkillTag>pr:review</SkillTag> acts as your spotter — catching issues, suggesting improvements, and verifying against project conventions.
            </p>
            <p>
              The pattern was emerging: solve one problem well, then compose.
            </p>
          </div>
        }
      />

      {/* 4. The Harness */}
      <SplitSection
        bg="deep"
        headlineSide="left"
        sectionNumber={4}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Framework</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
              The <strong className="text-accent">Harness</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              Individual skills needed structure. The harness provides it — <SkillTag>harness:plan</SkillTag>, <SkillTag>harness:brainstorm</SkillTag>, and <SkillTag>harness:reflect</SkillTag> wrap your workflow in a safety system.
            </p>
            <p>
              Plan before you code. Brainstorm before you plan. Reflect after every session. The harness makes these habits automatic.
            </p>
          </div>
        }
      />

      {/* 5. The Setter */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={5}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Orchestration</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
              The <strong className="text-accent">Setter</strong>
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              Complex projects need coordination. The setter dispatches parallel agents, manages task dependencies, and orchestrates multi-step implementations.
            </p>
            <p>
              Like a route setter in climbing, it designs the path others will follow.
            </p>
          </div>
        }
      />

      {/* 6. Belayer is the Glue */}
      <Section bg="summit" align="center" sectionNumber={6} className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Glue</span>
        <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6">
          Belayer is the <strong className="text-accent">Glue</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Every piece connects. Skills compose into workflows. Workflows compose into systems. Belayer is the meta-framework that holds it all together.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            'pr:author', 'pr:review', 'harness:plan', 'harness:brainstorm',
            'harness:reflect', 'harness:orchestrate', 'harness:complete',
          ].map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </div>
      </Section>

      {/* 7. The Principle */}
      <SplitSection
        bg="base"
        headlineSide="left"
        sectionNumber={7}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Principle</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
              Solve the <strong className="text-accent">smallest</strong> problem first
            </h2>
          </>
        }
        content={
          <div className="text-text-secondary text-lg space-y-4">
            <p>
              Don't design the whole system. Solve the problem in front of you. Then compose. Then compose again. The architecture emerges from real needs, not hypothetical ones.
            </p>
            <div className="flex gap-4 flex-wrap pt-4">
              <Button href="https://github.com/donovan-yohan/belayer">Get Started</Button>
              <Button variant="secondary" href="/">Back to Home</Button>
            </div>
          </div>
        }
      />
    </>
  )
}
