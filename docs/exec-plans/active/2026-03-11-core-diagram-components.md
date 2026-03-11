# Core Diagram Components Implementation Plan

> **Status**: Active | **Created**: 2026-03-11 | **Last Updated**: 2026-03-11
> **Spec**: `.lead/guide-1/GOAL.json` (climb guide-1)
> **For Claude:** Use /harness:orchestrate to execute this plan.

**Goal:** Build 5 animated SVG diagram components (ThreeHats, BoundaryDiagram, FlowDiagram, BuildingBlocks, CycleDiagram) for the Philosophy page redesign.

**Architecture:** Each component is a self-contained React component using inline SVG + Framer Motion. Components follow the established pattern from `SectionGraphic.tsx` and existing `diagrams/ImpactPyramid.tsx` / `diagrams/AmplificationFlow.tsx`: a `motion.div` wrapper with `whileInView="visible"` trigger, and internal `draw`/`fade` animation variants for staggered element reveals.

**Tech Stack:** React 19, TypeScript, Framer Motion 12, inline SVG. Color tokens: `#f59e0b` (accent/amber), `#fafaf9` (text-primary), `#a8a29e` (text-secondary), `#4ade80` (good/green where needed).

---

## Decision Log

| Date | Phase | Decision | Rationale |
|------|-------|----------|-----------|
| 2026-03-11 | Design | Each diagram is a standalone file in `src/components/diagrams/` | Follows existing pattern from ImpactPyramid.tsx and AmplificationFlow.tsx |
| 2026-03-11 | Design | Duplicate draw/fade variants per file (not shared module) | Matches existing pattern in ImpactPyramid.tsx and AmplificationFlow.tsx which each define their own. Another climb (guide-3) may create a shared module but we match current conventions. |
| 2026-03-11 | Design | No tests — visual SVG components | No test infrastructure exists in this project; components are visual-only with no logic to unit test |
| 2026-03-11 | Design | FlowDiagram shows a directed pipeline/DAG | Maps to spec's flow/sequence concept for showing how workflows connect |
| 2026-03-11 | Design | CycleDiagram shows the harness workflow loop | Maps to spec's "Self-healing Cycle" / "Harness Loop" with feedback arrow from review to orchestrate |

## Progress

- [ ] Task 1: ThreeHats — Plan/Build/Review triptych icons
- [ ] Task 2: BoundaryDiagram — Clear start/end vs monolithic boundary visualization
- [ ] Task 3: FlowDiagram — Directed pipeline/sequence diagram
- [ ] Task 4: BuildingBlocks — Stacking pr:author, pr:review, pr:resolve blocks
- [ ] Task 5: CycleDiagram — Circular harness workflow loop with feedback arrow
- [ ] Task 6: Verify build compiles
- [ ] Task 7: Final commit

## Surprises & Discoveries

_None yet — updated during execution by /harness:orchestrate._

## Plan Drift

_None yet — updated when tasks deviate from plan during execution._

---

## Task 1: ThreeHats

**Files:**
- Create: `src/components/diagrams/ThreeHats.tsx`

Three side-by-side icons within circles representing Plan (compass), Build (code brackets), Review (eye). Each icon has a label below.

- [ ] **Step 1: Create ThreeHats.tsx with complete implementation**
- [ ] **Step 2: Verify TypeScript compiles: `npx tsc --noEmit`**
- [ ] **Step 3: Commit: `git add src/components/diagrams/ThreeHats.tsx && git commit -m "feat: add ThreeHats diagram component"`**

### Implementation

```tsx
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

export default function ThreeHats() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 450 200" className="w-full h-auto">
        {/* PLAN — compass */}
        <motion.circle cx="75" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0} />
        <motion.line x1="75" y1="55" x2="75" y2="125" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1} />
        <motion.line x1="40" y1="90" x2="110" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.2} />
        <motion.circle cx="75" cy="90" r="4" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={1.5} />
        <motion.path d="M 75 55 L 71 65 L 79 65 Z" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={1.8} />
        <motion.text x="75" y="155" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={2}>PLAN</motion.text>

        {/* BUILD — code brackets */}
        <motion.circle cx="225" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={2.5} />
        <motion.path d="M 212 70 L 202 90 L 212 110" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" variants={draw} custom={3} />
        <motion.path d="M 238 70 L 248 90 L 238 110" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" variants={draw} custom={3.2} />
        <motion.line x1="220" y1="110" x2="230" y2="70" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={3.5} />
        <motion.text x="225" y="155" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={4}>BUILD</motion.text>

        {/* REVIEW — eye */}
        <motion.circle cx="375" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={4.5} />
        <motion.path d="M 350 90 Q 362 70 375 70 Q 388 70 400 90" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.45" variants={draw} custom={5} />
        <motion.path d="M 350 90 Q 362 110 375 110 Q 388 110 400 90" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.45" variants={draw} custom={5.2} />
        <motion.circle cx="375" cy="90" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" variants={draw} custom={5.5} />
        <motion.circle cx="375" cy="90" r="3" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={5.8} />
        <motion.text x="375" y="155" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={6}>REVIEW</motion.text>
      </svg>
    </motion.div>
  )
}
```

---

## Task 2: BoundaryDiagram

**Files:**
- Create: `src/components/diagrams/BoundaryDiagram.tsx`

Left side: three distinct boxes with start/end dot markers and arrows between them (good pattern). Right side: one monolithic box with X cross-out (bad pattern). "vs" divider in center.

- [ ] **Step 1: Create BoundaryDiagram.tsx with complete implementation**
- [ ] **Step 2: Verify TypeScript compiles**
- [ ] **Step 3: Commit**

### Implementation

```tsx
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

const boxes = [
  { x: 20, label: 'Refine' },
  { x: 120, label: 'Implement' },
  { x: 220, label: 'Review' },
]

export default function BoundaryDiagram() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 460 180" className="w-full h-auto">
        {/* Three bounded tools */}
        {boxes.map((box, i) => (
          <g key={box.label}>
            <motion.rect x={box.x} y="40" width="80" height="70" rx="4" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={fade} custom={i * 1.2} />
            <motion.circle cx={box.x + 12} cy="48" r="3" fill="#4ade80" fillOpacity="0.7" variants={fade} custom={i * 1.2 + 0.3} />
            <motion.circle cx={box.x + 68} cy="48" r="3" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={i * 1.2 + 0.5} />
            <motion.text x={box.x + 40} y="82" textAnchor="middle" fill="#fafaf9" fontSize="11" fontWeight="600" variants={fade} custom={i * 1.2 + 0.7}>{box.label}</motion.text>
          </g>
        ))}

        {/* Arrows between boxes */}
        {[0, 1].map((i) => (
          <motion.line key={`arrow-${i}`} x1={boxes[i].x + 83} y1="75" x2={boxes[i + 1].x - 3} y2="75" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" markerEnd="url(#bd-arrowhead)" variants={draw} custom={i * 1.2 + 1} />
        ))}

        <motion.text x="160" y="140" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={5}>CLEAR BOUNDARIES</motion.text>

        {/* Monolithic box */}
        <motion.rect x="330" y="40" width="110" height="70" rx="4" fill="#f59e0b" fillOpacity="0.05" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.2" variants={fade} custom={5} />
        <motion.text x="385" y="80" textAnchor="middle" fill="#a8a29e" fontSize="10" fontWeight="600" variants={fade} custom={5.5}>MONOLITHIC</motion.text>
        <motion.line x1="340" y1="50" x2="430" y2="100" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" variants={draw} custom={6} />
        <motion.line x1="430" y1="50" x2="340" y2="100" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" variants={draw} custom={6.3} />
        <motion.text x="385" y="140" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={7}>CONTEXT EXPLODES</motion.text>

        <motion.text x="310" y="80" textAnchor="middle" fill="#a8a29e" fontSize="12" fontWeight="700" variants={fade} custom={4}>vs</motion.text>

        <defs>
          <marker id="bd-arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  )
}
```

---

## Task 3: FlowDiagram

**Files:**
- Create: `src/components/diagrams/FlowDiagram.tsx`

Directed graph with labeled circular nodes and connecting arrows. Shows a pipeline: Spec → Design/Implement (parallel) → Plan/Review → Ship.

- [ ] **Step 1: Create FlowDiagram.tsx with complete implementation**
- [ ] **Step 2: Verify TypeScript compiles**
- [ ] **Step 3: Commit**

### Implementation

```tsx
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

const nodes = [
  { x: 60, y: 100, label: 'Spec' },
  { x: 160, y: 60, label: 'Design' },
  { x: 280, y: 60, label: 'Plan' },
  { x: 160, y: 140, label: 'Implement' },
  { x: 280, y: 140, label: 'Review' },
  { x: 380, y: 100, label: 'Ship' },
]

const connections: Array<[number, number]> = [
  [0, 1], [0, 3], [1, 2], [2, 4], [3, 4], [4, 5],
]

export default function FlowDiagram() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 440 200" className="w-full h-auto">
        <defs>
          <marker id="fd-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
          </marker>
        </defs>

        {connections.map(([fromIdx, toIdx], i) => {
          const from = nodes[fromIdx]
          const to = nodes[toIdx]
          const dx = to.x - from.x
          const dy = to.y - from.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const nx = dx / dist
          const ny = dy / dist
          return (
            <motion.line key={`conn-${i}`} x1={from.x + nx * 22} y1={from.y + ny * 22} x2={to.x - nx * 22} y2={to.y - ny * 22} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" markerEnd="url(#fd-arrow)" variants={draw} custom={i * 0.5} />
          )
        })}

        {nodes.map((node, i) => (
          <g key={node.label}>
            <motion.circle cx={node.x} cy={node.y} r="20" fill="#f59e0b" fillOpacity="0.06" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity={i === 0 || i === nodes.length - 1 ? 0.5 : 0.3} variants={draw} custom={i * 0.8} />
            <motion.text x={node.x} y={node.y + 4} textAnchor="middle" fill="#fafaf9" fontSize="10" fontWeight="600" variants={fade} custom={i * 0.8 + 0.3}>{node.label}</motion.text>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}
```

---

## Task 4: BuildingBlocks

**Files:**
- Create: `src/components/diagrams/BuildingBlocks.tsx`

Three stacked blocks that slide up from bottom. Blocks labeled pr:author (bottom), pr:review (middle), pr:resolve (top) in monospace. A "COMPOSE" arrow on the right.

- [ ] **Step 1: Create BuildingBlocks.tsx with complete implementation**
- [ ] **Step 2: Verify TypeScript compiles**
- [ ] **Step 3: Commit**

### Implementation

```tsx
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3, ease: 'easeOut' as const },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

const blocks = [
  { label: 'pr:resolve', y: 50, fillOpacity: 0.3, strokeOpacity: 0.5 },
  { label: 'pr:review', y: 105, fillOpacity: 0.2, strokeOpacity: 0.4 },
  { label: 'pr:author', y: 160, fillOpacity: 0.12, strokeOpacity: 0.32 },
]

export default function BuildingBlocks() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 360 250" className="w-full h-auto">
        <motion.line x1="70" y1="215" x2="290" y2="215" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0} />

        {[...blocks].reverse().map((block, i) => (
          <g key={block.label}>
            <motion.rect x="80" y={block.y} width="200" height="48" rx="4" fill="#f59e0b" fillOpacity={block.fillOpacity} stroke="#f59e0b" strokeWidth="1.5" strokeOpacity={block.strokeOpacity} variants={slideUp} custom={i + 1} />
            <motion.text x="180" y={block.y + 29} textAnchor="middle" fill="#fafaf9" fontSize="13" fontWeight="600" fontFamily="monospace" variants={slideUp} custom={i + 1.2}>{block.label}</motion.text>
          </g>
        ))}

        <motion.line x1="300" y1="195" x2="300" y2="70" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={5} />
        <motion.path d="M 296 74 L 300 62 L 304 74" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={5.5} />
        <motion.text x="300" y="55" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="600" letterSpacing="1.5" variants={fade} custom={6}>COMPOSE</motion.text>
      </svg>
    </motion.div>
  )
}
```

---

## Task 5: CycleDiagram

**Files:**
- Create: `src/components/diagrams/CycleDiagram.tsx`

Circular loop with 6 labeled nodes for harness workflow stages placed around a circle. A dashed feedback arc from Review back to Orchestrate with "feedback loop" label.

- [ ] **Step 1: Create CycleDiagram.tsx with complete implementation**
- [ ] **Step 2: Verify TypeScript compiles**
- [ ] **Step 3: Commit**

### Implementation

```tsx
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

const cx = 200
const cy = 130
const r = 85

const stages = [
  { label: 'Brainstorm', angle: -90 },
  { label: 'Plan', angle: -30 },
  { label: 'Orchestrate', angle: 30 },
  { label: 'Review', angle: 90 },
  { label: 'Reflect', angle: 150 },
  { label: 'Complete', angle: 210 },
]

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

export default function CycleDiagram() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 400 270" className="w-full h-auto">
        <motion.circle cx={cx} cy={cy} r={r} fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.12" variants={draw} custom={0} />

        {/* Arc segments between nodes */}
        {stages.map((stage, i) => {
          const nextStage = stages[(i + 1) % stages.length]
          const a1 = toRad(stage.angle)
          const a2 = toRad(nextStage.angle)
          const ax1 = cx + (r - 5) * Math.cos(a1)
          const ay1 = cy + (r - 5) * Math.sin(a1)
          const ax2 = cx + (r - 5) * Math.cos(a2)
          const ay2 = cy + (r - 5) * Math.sin(a2)
          const midAngle = (stage.angle + nextStage.angle + (nextStage.angle < stage.angle ? 360 : 0)) / 2
          const midRad = toRad(midAngle)
          const mx = cx + (r + 3) * Math.cos(midRad)
          const my = cy + (r + 3) * Math.sin(midRad)
          return (
            <g key={`arc-${i}`}>
              <motion.line x1={ax1} y1={ay1} x2={ax2} y2={ay2} stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.2" variants={draw} custom={i * 0.5 + 1} />
              <motion.circle cx={mx} cy={my} r="2" fill="#f59e0b" fillOpacity="0.35" variants={fade} custom={i * 0.5 + 1.2} />
            </g>
          )
        })}

        {/* Stage nodes */}
        {stages.map((stage, i) => {
          const rad = toRad(stage.angle)
          const nx = cx + r * Math.cos(rad)
          const ny = cy + r * Math.sin(rad)
          const labelR = r + 26
          const lx = cx + labelR * Math.cos(rad)
          const ly = cy + labelR * Math.sin(rad)
          return (
            <g key={stage.label}>
              <motion.circle cx={nx} cy={ny} r="8" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" variants={fade} custom={i * 0.7 + 2} />
              <motion.circle cx={nx} cy={ny} r="3" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={i * 0.7 + 2.2} />
              <motion.text x={lx} y={ly + 4} textAnchor="middle" fill="#fafaf9" fontSize="10" fontWeight="600" variants={fade} custom={i * 0.7 + 2.4}>{stage.label}</motion.text>
            </g>
          )
        })}

        {/* Feedback arrow: Review -> Orchestrate (inner arc) */}
        {(() => {
          const reviewRad = toRad(90)
          const orchRad = toRad(30)
          const innerR = r - 25
          const rx1 = cx + innerR * Math.cos(reviewRad)
          const ry1 = cy + innerR * Math.sin(reviewRad)
          const rx2 = cx + innerR * Math.cos(orchRad)
          const ry2 = cy + innerR * Math.sin(orchRad)
          return (
            <>
              <motion.path d={`M ${rx1} ${ry1} A ${innerR} ${innerR} 0 0 0 ${rx2} ${ry2}`} fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 3" variants={draw} custom={7} />
              <motion.text x={cx + 10} y={cy + 20} textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="600" fontStyle="italic" variants={fade} custom={7.5}>feedback loop</motion.text>
            </>
          )
        })()}
      </svg>
    </motion.div>
  )
}
```

---

## Task 6: Verify Build

- [ ] **Run `npm run build`** to ensure all components compile without errors.

## Task 7: Final Commit

- [ ] **Commit all diagram components together if not already committed individually.**

---

## Outcomes & Retrospective

_Filled by /harness:complete when work is done._

**What worked:**
-

**What didn't:**
-

**Learnings to codify:**
-
