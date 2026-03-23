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

const sources = [
  { label: 'Figma', y: 40 },
  { label: 'Jira', y: 100 },
  { label: 'Brainstorm', y: 150 },
  { label: 'Screenshots', y: 200 },
  { label: 'Articles', y: 255 },
]

// Source circles: center x
const SRC_X = 80
const SRC_R = 22

// spec.md box
const SPEC_X = 310
const SPEC_Y = 110
const SPEC_W = 120
const SPEC_H = 60
const SPEC_CX = SPEC_X + SPEC_W / 2
const SPEC_CY = SPEC_Y + SPEC_H / 2

export default function IntakeFlow() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 280" className="w-full h-auto">
        <defs>
          <marker id="if-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.6" />
          </marker>
        </defs>

        {/* Source nodes */}
        {sources.map((src, i) => (
          <g key={src.label}>
            {/* Circle */}
            <motion.circle
              cx={SRC_X} cy={src.y}
              r={SRC_R}
              fill="#f59e0b" fillOpacity="0.07"
              stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.3"
              variants={fade} custom={i * 1.2}
            />
            {/* Label */}
            <motion.text
              x={SRC_X} y={src.y + 4}
              textAnchor="middle"
              fill="#fafaf9" fontSize="9" fontWeight="600"
              variants={fade} custom={i * 1.2 + 0.5}
            >
              {src.label}
            </motion.text>

            {/* Converging line from circle edge to spec.md box left edge */}
            <motion.line
              x1={SRC_X + SRC_R} y1={src.y}
              x2={SPEC_X - 2} y2={SPEC_CY}
              stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.35"
              markerEnd="url(#if-arrow)"
              variants={draw} custom={i * 1.2 + 1}
            />
          </g>
        ))}

        {/* spec.md output box */}
        <motion.rect
          x={SPEC_X} y={SPEC_Y}
          width={SPEC_W} height={SPEC_H}
          rx={10}
          fill="#4ade80" fillOpacity="0.09"
          stroke="#4ade80" strokeWidth="2" strokeOpacity="0.5"
          variants={fade} custom={7}
        />

        {/* spec.md label */}
        <motion.text
          x={SPEC_CX} y={SPEC_CY - 6}
          textAnchor="middle"
          fill="#4ade80" fontSize="13" fontWeight="700" fontFamily="monospace"
          variants={fade} custom={7.5}
        >
          spec.md
        </motion.text>
        <motion.text
          x={SPEC_CX} y={SPEC_CY + 12}
          textAnchor="middle"
          fill="#4ade80" fontSize="8" fontWeight="500" fillOpacity="0.7"
          variants={fade} custom={8}
        >
          the contract
        </motion.text>

        {/* Bottom label */}
        <motion.text
          x="240" y="275"
          textAnchor="middle"
          fill="#a8a29e" fontSize="9" fontWeight="500"
          variants={fade} custom={9}
        >
          anything becomes a structured specification
        </motion.text>
      </svg>
    </motion.div>
  )
}
