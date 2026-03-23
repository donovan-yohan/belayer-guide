import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.7, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
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

const phases = [
  { label: 'INTAKE', x: 40 },
  { label: 'IMPLEMENTATION', x: 195 },
  { label: 'OUTPUT', x: 350 },
]

const BOX_W = 130
const BOX_H = 60
const BOX_Y = 90
const CENTER_Y = BOX_Y + BOX_H / 2

export default function ThreePhases() {
  return (
    <motion.div
      className="w-full max-w-[560px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 520 240" className="w-full h-auto">
        <defs>
          <marker id="tp-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.7" />
          </marker>
        </defs>

        {/* "anything" input label — left of INTAKE */}
        <motion.text x="8" y={CENTER_Y - 6} fill="#a8a29e" fontSize="9" fontWeight="500" fontStyle="italic" variants={fade} custom={0}>
          anything
        </motion.text>
        {/* Arrow into INTAKE */}
        <motion.line
          x1="8" y1={CENTER_Y + 4}
          x2={phases[0].x - 2} y2={CENTER_Y + 4}
          stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4"
          markerEnd="url(#tp-arrow)"
          variants={draw} custom={0.5}
        />

        {/* Phase boxes */}
        {phases.map((phase, i) => (
          <g key={phase.label}>
            <motion.rect
              x={phase.x} y={BOX_Y}
              width={BOX_W} height={BOX_H}
              rx={8}
              fill="#f59e0b" fillOpacity="0.08"
              stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35"
              variants={fade} custom={i * 2 + 1}
            />
            <motion.text
              x={phase.x + BOX_W / 2} y={CENTER_Y + 5}
              textAnchor="middle"
              fill="#fafaf9" fontSize="11" fontWeight="700" letterSpacing="0.5"
              variants={fade} custom={i * 2 + 1.5}
            >
              {phase.label}
            </motion.text>
          </g>
        ))}

        {/* Arrow: INTAKE → IMPLEMENTATION, with "spec.md" label */}
        <motion.line
          x1={phases[0].x + BOX_W + 1} y1={CENTER_Y}
          x2={phases[1].x - 1} y2={CENTER_Y}
          stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5"
          markerEnd="url(#tp-arrow)"
          variants={draw} custom={4}
        />
        <motion.rect
          x={phases[0].x + BOX_W + 2} y={CENTER_Y - 20}
          width={phases[1].x - phases[0].x - BOX_W - 4} height={16}
          rx={4}
          fill="#4ade80" fillOpacity="0.08"
          stroke="#4ade80" strokeWidth="1" strokeOpacity="0.3"
          variants={fade} custom={4.5}
        />
        <motion.text
          x={(phases[0].x + BOX_W + phases[1].x) / 2} y={CENTER_Y - 8}
          textAnchor="middle"
          fill="#4ade80" fontSize="9" fontWeight="600" fontFamily="monospace"
          variants={fade} custom={4.8}
        >
          spec.md
        </motion.text>

        {/* Arrow: IMPLEMENTATION → OUTPUT, with "commit hash" label */}
        <motion.line
          x1={phases[1].x + BOX_W + 1} y1={CENTER_Y}
          x2={phases[2].x - 1} y2={CENTER_Y}
          stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5"
          markerEnd="url(#tp-arrow)"
          variants={draw} custom={6}
        />
        <motion.rect
          x={phases[1].x + BOX_W + 2} y={CENTER_Y - 20}
          width={phases[2].x - phases[1].x - BOX_W - 4} height={16}
          rx={4}
          fill="#4ade80" fillOpacity="0.08"
          stroke="#4ade80" strokeWidth="1" strokeOpacity="0.3"
          variants={fade} custom={6.5}
        />
        <motion.text
          x={(phases[1].x + BOX_W + phases[2].x) / 2} y={CENTER_Y - 8}
          textAnchor="middle"
          fill="#4ade80" fontSize="9" fontWeight="600" fontFamily="monospace"
          variants={fade} custom={6.8}
        >
          commit hash
        </motion.text>

        {/* Arrow out of OUTPUT, with "whatever" label */}
        <motion.line
          x1={phases[2].x + BOX_W + 1} y1={CENTER_Y + 4}
          x2={514} y2={CENTER_Y + 4}
          stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4"
          markerEnd="url(#tp-arrow)"
          variants={draw} custom={8}
        />
        <motion.text x={phases[2].x + BOX_W + 6} y={CENTER_Y - 6} fill="#a8a29e" fontSize="9" fontWeight="500" fontStyle="italic" variants={fade} custom={8.5}>
          whatever
        </motion.text>

        {/* Bottom subtitle */}
        <motion.text
          x="260" y="200"
          textAnchor="middle"
          fill="#fafaf9" fontSize="10" fontWeight="600" letterSpacing="1.5"
          variants={fade} custom={9}
        >
          THREE PHASES · THREE CONTRACTS
        </motion.text>

        {/* Secondary subtitle */}
        <motion.text
          x="260" y="220"
          textAnchor="middle"
          fill="#a8a29e" fontSize="9" fontWeight="500"
          variants={fade} custom={9.5}
        >
          each boundary defined by a concrete artifact
        </motion.text>
      </svg>
    </motion.div>
  )
}
