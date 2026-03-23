import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.7, delay: i * 0.14 }, opacity: { duration: 0.2, delay: i * 0.14 } },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.14 },
  }),
}

const boxW = 120
const boxH = 60
const boxRx = 8
const centerY = 88

// Phase positions — spread wide
const phases = [
  { label: 'INTAKE', x: 30 },
  { label: 'IMPLEMENTATION', x: 200 },
  { label: 'OUTPUT', x: 370 },
]

// Contract artifact labels floating in the gaps
const contracts = [
  { label: 'spec.md', x: 175, y: centerY },
  { label: 'commit hash', x: 345, y: centerY },
]

export default function IndependentPhases() {
  return (
    <motion.div
      className="w-full max-w-[560px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 520 200" className="w-full h-auto">
        {/* Phase boxes — dashed borders */}
        {phases.map((phase, i) => {
          const bx = phase.x
          const by = centerY - boxH / 2
          return (
            <motion.g key={phase.label} variants={fade} custom={i * 0.6}>
              <rect
                x={bx}
                y={by}
                width={boxW}
                height={boxH}
                rx={boxRx}
                fill="#f59e0b"
                fillOpacity="0.07"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                strokeDasharray="6 4"
              />
              <text
                x={bx + boxW / 2}
                y={by + boxH / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={phase.label === 'IMPLEMENTATION' ? '9.5' : '11'}
                fontWeight="700"
                fill="#fafaf9"
                fillOpacity="0.8"
                letterSpacing="0.06em"
              >
                {phase.label}
              </text>
            </motion.g>
          )
        })}

        {/* Contract artifact floating labels */}
        {contracts.map((contract, i) => {
          const labelW = contract.label === 'commit hash' ? 72 : 52
          const labelH = 22
          const lx = contract.x - labelW / 2
          const ly = contract.y - labelH / 2

          // Thin connecting lines from left box right edge to label, and label to right box left edge
          const leftPhaseIdx = i
          const rightPhaseIdx = i + 1
          const leftEdgeX = phases[leftPhaseIdx].x + boxW
          const rightEdgeX = phases[rightPhaseIdx].x
          const lineY = centerY

          return (
            <g key={contract.label}>
              {/* Left connecting line */}
              <motion.line
                x1={leftEdgeX + 2}
                y1={lineY}
                x2={lx - 3}
                y2={lineY}
                stroke="#a8a29e"
                strokeWidth="1"
                strokeOpacity="0.3"
                variants={draw}
                custom={i * 0.6 + 1.2}
              />
              {/* Right connecting line */}
              <motion.line
                x1={lx + labelW + 3}
                y1={lineY}
                x2={rightEdgeX - 2}
                y2={lineY}
                stroke="#a8a29e"
                strokeWidth="1"
                strokeOpacity="0.3"
                variants={draw}
                custom={i * 0.6 + 1.4}
              />
              {/* Label pill */}
              <motion.g variants={fade} custom={i * 0.6 + 1.6}>
                <rect
                  x={lx}
                  y={ly}
                  width={labelW}
                  height={labelH}
                  rx={4}
                  fill="#4ade80"
                  fillOpacity="0.08"
                  stroke="#4ade80"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
                <text
                  x={contract.x}
                  y={contract.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9"
                  fontWeight="600"
                  fill="#4ade80"
                  fillOpacity="0.8"
                >
                  {contract.label}
                </text>
              </motion.g>
            </g>
          )
        })}

        {/* Bottom label */}
        <motion.text
          x="260"
          y="170"
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="9"
          fontWeight="500"
          letterSpacing="0.1em"
          variants={fade}
          custom={3.5}
        >
          INDEPENDENT · ONLY CONTRACTS CONNECT THEM
        </motion.text>
      </svg>
    </motion.div>
  )
}
