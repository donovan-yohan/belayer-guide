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

/**
 * Small 3-node cycle: Author → Review → Resolve, with a loop arrow
 * back from Resolve to Review. This is the first composed workflow,
 * the PR cycle, before the full harness loop is introduced.
 */

const cx = 200
const cy = 120
const r = 70

const stages = [
  { label: 'Author', angle: -90 },
  { label: 'Review', angle: 30 },
  { label: 'Resolve', angle: 150 },
]

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

export default function PRCycleDiagram() {
  return (
    <motion.div
      className="w-full max-w-[400px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 400 240" className="w-full h-auto">
        {/* Guide circle */}
        <motion.circle
          cx={cx} cy={cy} r={r}
          fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.1"
          variants={draw} custom={0}
        />

        {/* Arc segments between nodes */}
        {stages.map((stage, i) => {
          const nextStage = stages[(i + 1) % stages.length]
          const a1 = toRad(stage.angle)
          const a2 = toRad(nextStage.angle)
          const x1 = cx + r * Math.cos(a1)
          const y1 = cy + r * Math.sin(a1)
          const x2 = cx + r * Math.cos(a2)
          const y2 = cy + r * Math.sin(a2)
          return (
            <motion.path
              key={`arc-${i}`}
              d={`M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity="0.25"
              variants={draw}
              custom={i * 0.5 + 1}
            />
          )
        })}

        {/* Directional dots on arcs */}
        {stages.map((stage, i) => {
          const nextStage = stages[(i + 1) % stages.length]
          const midAngle = stage.angle + ((nextStage.angle - stage.angle + 360) % 360) / 2
          const midRad = toRad(midAngle)
          const mx = cx + (r + 2) * Math.cos(midRad)
          const my = cy + (r + 2) * Math.sin(midRad)
          return (
            <motion.circle
              key={`dot-${i}`}
              cx={mx.toFixed(1)} cy={my.toFixed(1)} r="2.5"
              fill="#f59e0b" fillOpacity="0.35"
              variants={fade} custom={i * 0.5 + 1.5}
            />
          )
        })}

        {/* Stage nodes */}
        {stages.map((stage, i) => {
          const rad = toRad(stage.angle)
          const nx = cx + r * Math.cos(rad)
          const ny = cy + r * Math.sin(rad)
          const labelR = r + 24
          const lx = cx + labelR * Math.cos(rad)
          const ly = cy + labelR * Math.sin(rad)
          return (
            <g key={stage.label}>
              <motion.circle
                cx={nx.toFixed(1)} cy={ny.toFixed(1)} r="8"
                fill="#f59e0b" fillOpacity="0.15"
                stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5"
                variants={fade} custom={i * 0.7 + 2}
              />
              <motion.circle
                cx={nx.toFixed(1)} cy={ny.toFixed(1)} r="3"
                fill="#f59e0b" fillOpacity="0.7"
                variants={fade} custom={i * 0.7 + 2.2}
              />
              <motion.text
                x={lx.toFixed(1)} y={(ly + 4).toFixed(1)}
                textAnchor="middle"
                fill="#fafaf9" fontSize="11" fontWeight="600"
                variants={fade} custom={i * 0.7 + 2.4}
              >
                {stage.label}
              </motion.text>
            </g>
          )
        })}

        {/* Feedback arc: Resolve → Review (inner, dashed) */}
        {(() => {
          const resolveRad = toRad(150)
          const reviewRad = toRad(30)
          const innerR = r - 22
          const x1 = cx + innerR * Math.cos(resolveRad)
          const y1 = cy + innerR * Math.sin(resolveRad)
          const x2 = cx + innerR * Math.cos(reviewRad)
          const y2 = cy + innerR * Math.sin(reviewRad)
          return (
            <>
              <motion.path
                d={`M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${innerR} ${innerR} 0 0 0 ${x2.toFixed(1)} ${y2.toFixed(1)}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeDasharray="4 3"
                variants={draw}
                custom={5}
              />
              <motion.text
                x={cx} y={cy + 8}
                textAnchor="middle"
                fill="#f59e0b" fontSize="9" fontWeight="600" fontStyle="italic"
                fillOpacity="0.5"
                variants={fade} custom={5.5}
              >
                until clean
              </motion.text>
            </>
          )
        })()}
      </svg>
    </motion.div>
  )
}
