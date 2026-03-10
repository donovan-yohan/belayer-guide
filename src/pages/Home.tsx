import Section from '../components/Section'
import PeekHint from '../components/PeekHint'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Section bg="base" align="center" sectionNumber={1}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Belayer</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          Your <strong className="text-accent">safety system</strong> for AI development
        </h1>
        <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-xl mx-auto">
          A meta-framework that brings structure, review, and orchestration to Claude Code — so you can climb higher with confidence.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="https://github.com/donovan-yohan/belayer">Get Started</Button>
          <Button variant="secondary" href="/philosophy">Learn the Philosophy</Button>
        </div>
        <PeekHint label="The Core" />
      </Section>

      {/* 2. Harness */}
      <Section bg="elevated" align="left" sectionNumber={2}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Harness</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
          The <strong className="text-accent">Core</strong>
        </h2>
        <p className="text-text-secondary text-lg">
          The harness is your central framework — plan, brainstorm, orchestrate, and reflect. It wraps every development session in structured safety.
        </p>
        <PeekHint label="Chart the route" />
      </Section>

      {/* 3. Plan */}
      <Section bg="warm" align="right" sectionNumber={3}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Plan</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
          Chart the <strong className="text-accent">route</strong>
        </h2>
        <p className="text-text-secondary text-lg">
          Before writing a single line of code, map out the implementation. Living plans that evolve as you climb.
        </p>
        <PeekHint label="Make the climb" />
      </Section>

      {/* 4. Implement */}
      <Section bg="deep" align="left" sectionNumber={4}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Implement</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
          Make the <strong className="text-accent">climb</strong>
        </h2>
        <p className="text-text-secondary text-lg">
          Execute with parallel agents, micro-reflects at each checkpoint, and continuous validation against the plan.
        </p>
        <PeekHint label="Check your anchors" />
      </Section>

      {/* 5. Reflect */}
      <Section bg="elevated" align="right" sectionNumber={5}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Reflect</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
          Check your <strong className="text-accent">anchors</strong>
        </h2>
        <p className="text-text-secondary text-lg">
          After each session, reflect on what changed. Update documentation, verify assumptions, and keep the project grounded.
        </p>
        <PeekHint label="Code Review" />
      </Section>

      {/* 6. Spotter */}
      <Section bg="warm" align="left" sectionNumber={6}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Spotter</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
          Code <strong className="text-accent">Review</strong>
        </h2>
        <p className="text-text-secondary text-lg">
          Automated PR authoring and review with deep codebase understanding. Your spotter catches what you miss.
        </p>
        <PeekHint label="Orchestration" />
      </Section>

      {/* 7. Setter */}
      <Section bg="deep" align="right" sectionNumber={7}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Setter</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
          <strong className="text-accent">Orchestration</strong>
        </h2>
        <p className="text-text-secondary text-lg">
          Coordinate multi-agent teams, dispatch parallel work, and manage complex workflows with a single command.
        </p>
        <PeekHint label="The full system" />
      </Section>

      {/* 8. Belayer (Climax) */}
      <Section bg="base" align="center" sectionNumber={8} className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Belayer</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          The complete <strong className="text-accent">safety system</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Plan, implement, review, reflect, orchestrate. Belayer ties it all together so you can push your limits safely.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="https://github.com/donovan-yohan/belayer">Get Started</Button>
          <Button variant="secondary" href="/philosophy">Read the Philosophy</Button>
        </div>
      </Section>
    </>
  )
}
