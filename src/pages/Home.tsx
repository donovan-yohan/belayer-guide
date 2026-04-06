import Section from '../components/Section'
import SplitSection from '../components/SplitSection'
import PeekHint from '../components/PeekHint'
import Button from '../components/Button'
import SectionGraphic from '../components/SectionGraphic'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section bg="base" align="center" peekHint={<PeekHint label="The Problem" />}>
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Platform</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          The orchestration <strong className="text-accent">platform</strong> for AI development
        </h1>
        <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Belayer orchestrates. Carabiner observes. Relay IDE controls. A composable platform for agent engineering — built on open-source observability, not lock-in.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="https://github.com/donovan-yohan/belayer">Get Started</Button>
          <Button variant="secondary" href="/philosophy">Learn the Philosophy</Button>
        </div>
      </Section>

      {/* 01. The Problem */}
      <SplitSection
        bg="elevated"
        headlineSide="left"
        sectionNumber={1}
        peekHint={<PeekHint label="The Orchestrator" />}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Problem</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
              Context is the <strong className="text-accent">constraint</strong>
            </h2>
            <p className="text-text-secondary text-lg">
              Models can write code, review it, plan architecture, debug failures. The hard part is what the model knows when it's doing those things. Context windows fill up. Runs end. Amnesia sets in. The architecture that solves this isn't a single tool — it's a platform where each layer handles a different part of the problem.
            </p>
          </>
        }
        content={<SectionGraphic variant="problem" />}
      />

      {/* 02. The Orchestrator */}
      <SplitSection
        bg="warm"
        headlineSide="right"
        sectionNumber={2}
        peekHint={<PeekHint label="The Forensic Layer" />}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Orchestrator</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
              A language, not a <strong className="text-accent">runtime</strong>
            </h2>
            <p className="text-text-secondary text-lg">
              Belayer is a declarative YAML pipeline language. Three phases — explore, climb, summit. Three contracts — spec.md, PR, quality gate. Each node is a black box. The pipeline defines sequence, contracts, and data flow. It doesn't define what's inside. Any orchestrator can speak it.
            </p>
          </>
        }
        content={<SectionGraphic variant="orchestrator" />}
      />

      {/* 03. The Forensic Layer */}
      <SplitSection
        bg="deep"
        headlineSide="left"
        sectionNumber={3}
        peekHint={<PeekHint label="The Foundation" />}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Forensic Layer</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
              Git blame for <strong className="text-accent">intent</strong>
            </h2>
            <p className="text-text-secondary text-lg">
              A bug shipped last week. What agent session wrote this code, what model was it using, and what was the session doing? Carabiner answers that. One command, zero config. It joins git-ai line attribution with agentlytics session data — the forensic query layer for AI-authored code.
            </p>
          </>
        }
        content={<SectionGraphic variant="forensic" />}
      />

      {/* 04. The Foundation */}
      <SplitSection
        bg="elevated"
        headlineSide="right"
        sectionNumber={4}
        peekHint={<PeekHint label="The Viewport" />}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Foundation</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
              Built on <strong className="text-accent">observability</strong>
            </h2>
            <p className="text-text-secondary text-lg">
              git-ai tracks which agent wrote which lines via Git Notes. agentlytics records full session transcripts from any coding agent. These are open-source tools we compose with, not compete against. The data already exists — Carabiner is the join that nobody was building.
            </p>
          </>
        }
        content={<SectionGraphic variant="foundation" />}
      />

      {/* 05. The Viewport */}
      <SplitSection
        bg="warm"
        headlineSide="left"
        sectionNumber={5}
        peekHint={<PeekHint label="The Platform" />}
        headline={
          <>
            <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">The Viewport</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
              Control from <strong className="text-accent">anywhere</strong>
            </h2>
            <p className="text-text-secondary text-lg">
              Relay IDE puts multiple Claude Code and Codex sessions across repos into a single browser window. Worktrees, PRs, webhooks, mobile-friendly. The cockpit for multi-repo agent engineering — from your desk or your phone.
            </p>
          </>
        }
        content={<SectionGraphic variant="viewport" />}
      />

      {/* CTA */}
      <Section bg="base" align="center" className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)',
          }}
        />
        <span className="text-xs uppercase tracking-[4px] text-accent mb-4 block">Platform</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
          The complete <strong className="text-accent">platform</strong>
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
          Orchestrate. Observe. Control. Each layer evolves independently — the model gets smarter, the harness gets better at context routing, the orchestrator gets better at scheduling. None of them need to wait for the others.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="https://github.com/donovan-yohan/belayer">Belayer</Button>
          <Button variant="secondary" href="https://github.com/donovan-yohan/carabiner">Carabiner</Button>
          <Button variant="secondary" href="https://github.com/donovan-yohan/relay-ide">Relay IDE</Button>
        </div>
      </Section>
    </>
  )
}
