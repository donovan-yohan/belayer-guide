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
        {/* Main circle */}
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
              <motion.text x={lx} y={ly + 4} textAnchor="middle" fill="#fafaf9" fontSize="10" fontWeight="600" variants={fade} custom={i * 0.7 + 2.4}>
                {stage.label}
              </motion.text>
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
              <motion.path
                d={`M ${rx1} ${ry1} A ${innerR} ${innerR} 0 0 0 ${rx2} ${ry2}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeDasharray="4 3"
                variants={draw}
                custom={7}
              />
              <motion.text x={cx + 10} y={cy + 20} textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="600" fontStyle="italic" variants={fade} custom={7.5}>
                feedback loop
              </motion.text>
            </>
          )
        })()}
      </svg>
    </motion.div>
  )
}
