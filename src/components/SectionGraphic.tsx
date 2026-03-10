import { motion } from 'framer-motion'

interface SectionGraphicProps {
  variant: 'harness' | 'plan' | 'implement' | 'reflect' | 'spotter' | 'setter'
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

const icons: Record<SectionGraphicProps['variant'], () => React.ReactElement> = {
  harness: HarnessIcon,
  plan: PlanIcon,
  implement: ImplementIcon,
  reflect: ReflectIcon,
  spotter: SpotterIcon,
  setter: SetterIcon,
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
