import { motion } from 'framer-motion'

interface SectionGraphicProps {
  variant: 'harness' | 'plan' | 'implement' | 'reflect' | 'spotter' | 'setter' | 'problem' | 'orchestrator' | 'forensic' | 'foundation' | 'viewport'
}

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
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

function HarnessIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Central hub with radiating structure */}
      <motion.circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0} />
      <motion.circle cx="100" cy="100" r="40" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.25" variants={draw} custom={1} />
      <motion.circle cx="100" cy="100" r="6" fill="#f59e0b" fillOpacity="0.8" variants={fade} custom={2} />
      {/* Four cardinal connection lines */}
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <motion.line key={angle} x1={100 + 40 * Math.cos(rad)} y1={100 + 40 * Math.sin(rad)} x2={100 + 70 * Math.cos(rad)} y2={100 + 70 * Math.sin(rad)} stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={draw} custom={2 + i * 0.3} />
        )
      })}
      {/* Outer nodes */}
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <motion.circle key={`n-${angle}`} cx={100 + 70 * Math.cos(rad)} cy={100 + 70 * Math.sin(rad)} r="4" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={3 + i * 0.2} />
        )
      })}
    </svg>
  )
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Route/path going upward with waypoints */}
      <motion.path d="M 40 170 Q 60 130 80 120 Q 100 110 100 80 Q 100 50 120 40 L 160 30" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.4" variants={draw} custom={0} />
      {/* Waypoint dots */}
      {[{ x: 40, y: 170 }, { x: 80, y: 120 }, { x: 100, y: 80 }, { x: 120, y: 40 }, { x: 160, y: 30 }].map((p, i) => (
        <motion.circle key={i} cx={p.x} cy={p.y} r={i === 4 ? 5 : 3} fill="#f59e0b" fillOpacity={0.3 + i * 0.15} variants={fade} custom={1 + i * 0.2} />
      ))}
      {/* Dashed horizontal guide lines */}
      {[50, 90, 130].map((y, i) => (
        <motion.line key={y} x1="30" y1={y} x2="170" y2={y} stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" variants={draw} custom={0.5 + i * 0.1} />
      ))}
    </svg>
  )
}

function ImplementIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Multiple parallel ascending lines — parallel agents */}
      {[60, 100, 140].map((x, i) => (
        <motion.line key={x} x1={x} y1="170" x2={x} y2="40" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.25" variants={draw} custom={i * 0.2} />
      ))}
      {/* Progress markers on each line */}
      {[60, 100, 140].map((x, i) => (
        <motion.circle key={`dot-${x}`} cx={x} cy={80 + i * 20} r="4" fill="#f59e0b" fillOpacity="0.6" variants={fade} custom={1 + i * 0.15} />
      ))}
      {/* Converging lines at top */}
      <motion.path d="M 60 40 L 100 25 L 140 40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={2} />
      <motion.circle cx="100" cy="25" r="4" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={2.5} />
    </svg>
  )
}

function ReflectIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Mirror/reflection concept — two mirrored arcs */}
      <motion.path d="M 100 30 A 70 70 0 0 1 170 100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={0} />
      <motion.path d="M 100 170 A 70 70 0 0 1 30 100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={0.3} />
      {/* Center anchor point */}
      <motion.circle cx="100" cy="100" r="5" fill="#f59e0b" fillOpacity="0.6" variants={fade} custom={1} />
      <motion.circle cx="100" cy="100" r="20" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={1.2} />
      {/* Connecting dots */}
      <motion.circle cx="100" cy="30" r="3" fill="#f59e0b" fillOpacity="0.4" variants={fade} custom={1.5} />
      <motion.circle cx="170" cy="100" r="3" fill="#f59e0b" fillOpacity="0.4" variants={fade} custom={1.7} />
      <motion.circle cx="100" cy="170" r="3" fill="#f59e0b" fillOpacity="0.4" variants={fade} custom={1.9} />
      <motion.circle cx="30" cy="100" r="3" fill="#f59e0b" fillOpacity="0.4" variants={fade} custom={2.1} />
    </svg>
  )
}

function SpotterIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Eye/lens for review — concentric focus rings */}
      <motion.circle cx="100" cy="100" r="65" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.12" variants={draw} custom={0} />
      <motion.circle cx="100" cy="100" r="45" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.2" variants={draw} custom={0.3} />
      <motion.circle cx="100" cy="100" r="25" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={draw} custom={0.6} />
      <motion.circle cx="100" cy="100" r="5" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={1} />
      {/* Crosshair lines */}
      <motion.line x1="100" y1="30" x2="100" y2="70" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={draw} custom={1.2} />
      <motion.line x1="100" y1="130" x2="100" y2="170" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={draw} custom={1.3} />
      <motion.line x1="30" y1="100" x2="70" y2="100" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={draw} custom={1.4} />
      <motion.line x1="130" y1="100" x2="170" y2="100" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={draw} custom={1.5} />
    </svg>
  )
}

function SetterIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Network/orchestration — connected nodes */}
      <motion.circle cx="100" cy="60" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0} />
      <motion.circle cx="50" cy="110" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.2} />
      <motion.circle cx="150" cy="110" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.4} />
      <motion.circle cx="70" cy="155" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.6} />
      <motion.circle cx="130" cy="155" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.8} />
      {/* Connections */}
      <motion.line x1="100" y1="60" x2="50" y2="110" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={1} />
      <motion.line x1="100" y1="60" x2="150" y2="110" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={1.1} />
      <motion.line x1="50" y1="110" x2="70" y2="155" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={1.2} />
      <motion.line x1="150" y1="110" x2="130" y2="155" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={1.3} />
      <motion.line x1="50" y1="110" x2="150" y2="110" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" variants={draw} custom={1.4} />
      <motion.line x1="70" y1="155" x2="130" y2="155" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 4" variants={draw} custom={1.5} />
      {/* Central orchestrator */}
      <motion.circle cx="100" cy="60" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={2} />
    </svg>
  )
}

function ProblemIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Context window bar filling up */}
      <motion.rect x="30" y="85" width="140" height="30" rx="4" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={draw} custom={0} />
      {/* Fill — healthy zone (left) */}
      <motion.rect x="31" y="86" width="80" height="28" rx="3" fill="#f59e0b" fillOpacity="0.3" variants={fade} custom={0.5} />
      {/* Fill — dumb zone (right, dimmer) */}
      <motion.rect x="111" y="86" width="40" height="28" rx="0" fill="#f59e0b" fillOpacity="0.1" variants={fade} custom={1} />
      {/* Threshold line */}
      <motion.line x1="111" y1="78" x2="111" y2="122" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" variants={draw} custom={0.8} />
      {/* Label dots: good zone */}
      <motion.circle cx="70" cy="100" r="3" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={1.2} />
      {/* Label dot: dumb zone */}
      <motion.circle cx="131" cy="100" r="3" fill="#f59e0b" fillOpacity="0.2" variants={fade} custom={1.4} />
      {/* Performance curve above */}
      <motion.path d="M 35 70 Q 70 45 105 50 Q 130 55 155 75" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={1.6} />
      {/* Downward arrow after threshold */}
      <motion.path d="M 140 68 L 155 75 L 143 78" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={2} />
    </svg>
  )
}

function OrchestratorIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Three pipeline nodes: explore → climb → summit */}
      {/* Explore node */}
      <motion.circle cx="40" cy="100" r="18" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={0} />
      <motion.circle cx="40" cy="100" r="4" fill="#f59e0b" fillOpacity="0.6" variants={fade} custom={0.5} />
      {/* Climb node */}
      <motion.circle cx="100" cy="100" r="18" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={0.3} />
      <motion.circle cx="100" cy="100" r="4" fill="#f59e0b" fillOpacity="0.6" variants={fade} custom={0.8} />
      {/* Summit node */}
      <motion.circle cx="160" cy="100" r="18" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={0.6} />
      <motion.circle cx="160" cy="100" r="4" fill="#f59e0b" fillOpacity="0.6" variants={fade} custom={1.1} />
      {/* Flow arrows between nodes */}
      <motion.line x1="58" y1="100" x2="82" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={draw} custom={1.3} />
      <motion.path d="M 78 96 L 82 100 L 78 104" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={1.4} />
      <motion.line x1="118" y1="100" x2="142" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={draw} custom={1.5} />
      <motion.path d="M 138 96 L 142 100 L 138 104" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={1.6} />
      {/* Contract labels below: spec.md → PR → gate */}
      <motion.rect x="24" y="128" width="32" height="14" rx="3" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" variants={draw} custom={1.8} />
      <motion.rect x="84" y="128" width="32" height="14" rx="3" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" variants={draw} custom={1.9} />
      <motion.rect x="144" y="128" width="32" height="14" rx="3" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" variants={draw} custom={2} />
      {/* Outer pipeline bracket */}
      <motion.path d="M 18 75 L 18 70 L 182 70 L 182 75" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.12" variants={draw} custom={2.2} />
    </svg>
  )
}

function ForensicIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Attribution chain: line → commit → session converging to focal point */}
      {/* Three source nodes (left side) */}
      <motion.circle cx="40" cy="60" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0} />
      <motion.circle cx="40" cy="100" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0.2} />
      <motion.circle cx="40" cy="140" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0.4} />
      {/* Inner dots */}
      <motion.circle cx="40" cy="60" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.6} />
      <motion.circle cx="40" cy="100" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.7} />
      <motion.circle cx="40" cy="140" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.8} />
      {/* Converging lines to middle join point */}
      <motion.line x1="50" y1="60" x2="110" y2="95" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={1} />
      <motion.line x1="50" y1="100" x2="110" y2="100" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={1.1} />
      <motion.line x1="50" y1="140" x2="110" y2="105" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={1.2} />
      {/* Join node (the carabiner join) */}
      <motion.circle cx="120" cy="100" r="16" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.4} />
      <motion.circle cx="120" cy="100" r="5" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={1.6} />
      {/* Output arrow */}
      <motion.line x1="136" y1="100" x2="170" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={1.8} />
      <motion.path d="M 165 96 L 170 100 L 165 104" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" variants={draw} custom={2} />
    </svg>
  )
}

function FoundationIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Two data streams merging */}
      {/* git-ai stream (top) */}
      <motion.path d="M 30 65 Q 60 65 80 80 Q 95 90 100 100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={draw} custom={0} />
      {/* agentlytics stream (bottom) */}
      <motion.path d="M 30 135 Q 60 135 80 120 Q 95 110 100 100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={draw} custom={0.3} />
      {/* Source dots */}
      <motion.circle cx="30" cy="65" r="6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={0.5} />
      <motion.circle cx="30" cy="65" r="2.5" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.7} />
      <motion.circle cx="30" cy="135" r="6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={0.6} />
      <motion.circle cx="30" cy="135" r="2.5" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.8} />
      {/* Merge point */}
      <motion.circle cx="100" cy="100" r="12" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1} />
      <motion.circle cx="100" cy="100" r="4" fill="#f59e0b" fillOpacity="0.6" variants={fade} custom={1.2} />
      {/* Output stream (right) */}
      <motion.path d="M 112 100 L 170 100" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.35" variants={draw} custom={1.4} />
      <motion.circle cx="170" cy="100" r="5" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={1.8} />
      {/* Small data tick marks on streams */}
      {[45, 60, 75].map((x, i) => (
        <motion.circle key={`t-${x}`} cx={x} cy={65 + (x - 30) * 0.35} r="1.5" fill="#f59e0b" fillOpacity="0.3" variants={fade} custom={0.9 + i * 0.1} />
      ))}
      {[45, 60, 75].map((x, i) => (
        <motion.circle key={`b-${x}`} cx={x} cy={135 - (x - 30) * 0.35} r="1.5" fill="#f59e0b" fillOpacity="0.3" variants={fade} custom={1 + i * 0.1} />
      ))}
    </svg>
  )
}

function ViewportIcon() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Multiple terminal panes in a grid */}
      {/* Top-left pane */}
      <motion.rect x="30" y="40" width="60" height="48" rx="4" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0} />
      <motion.line x1="36" y1="52" x2="58" y2="52" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0.5} />
      <motion.line x1="36" y1="60" x2="50" y2="60" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.1" variants={draw} custom={0.6} />
      {/* Top-right pane */}
      <motion.rect x="110" y="40" width="60" height="48" rx="4" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0.2} />
      <motion.line x1="116" y1="52" x2="142" y2="52" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0.7} />
      <motion.line x1="116" y1="60" x2="134" y2="60" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.1" variants={draw} custom={0.8} />
      {/* Bottom-left pane */}
      <motion.rect x="30" y="108" width="60" height="48" rx="4" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0.4} />
      <motion.line x1="36" y1="120" x2="64" y2="120" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0.9} />
      <motion.line x1="36" y1="128" x2="52" y2="128" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.1" variants={draw} custom={1} />
      {/* Bottom-right pane */}
      <motion.rect x="110" y="108" width="60" height="48" rx="4" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0.6} />
      <motion.line x1="116" y1="120" x2="148" y2="120" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={1.1} />
      <motion.line x1="116" y1="128" x2="138" y2="128" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.1" variants={draw} custom={1.2} />
      {/* Central hub dot connecting all panes */}
      <motion.circle cx="100" cy="100" r="6" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={1.5} />
      <motion.circle cx="100" cy="100" r="14" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={1.6} />
      {/* Connection lines from hub to panes */}
      <motion.line x1="93" y1="93" x2="90" y2="88" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" variants={draw} custom={1.7} />
      <motion.line x1="107" y1="93" x2="110" y2="88" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" variants={draw} custom={1.8} />
      <motion.line x1="93" y1="107" x2="90" y2="108" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" variants={draw} custom={1.9} />
      <motion.line x1="107" y1="107" x2="110" y2="108" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.2" variants={draw} custom={2} />
    </svg>
  )
}

const icons: Record<SectionGraphicProps['variant'], () => React.ReactElement> = {
  harness: HarnessIcon,
  plan: PlanIcon,
  implement: ImplementIcon,
  reflect: ReflectIcon,
  spotter: SpotterIcon,
  setter: SetterIcon,
  problem: ProblemIcon,
  orchestrator: OrchestratorIcon,
  forensic: ForensicIcon,
  foundation: FoundationIcon,
  viewport: ViewportIcon,
}

export default function SectionGraphic({ variant }: SectionGraphicProps) {
  const Icon = icons[variant]
  return (
    <motion.div
      className="w-full max-w-[280px] md:max-w-[320px] aspect-square mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Icon />
    </motion.div>
  )
}
