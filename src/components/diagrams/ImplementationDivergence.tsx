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

const paths = [
  { label: 'gstack', y: 46 },
  { label: 'superpowers', y: 104 },
  { label: 'symphony', y: 162 },
  { label: 'custom', y: 220 },
]

// spec.md (input) box
const SPEC_X = 20
const SPEC_Y = 103
const SPEC_W = 110
const SPEC_H = 60
const SPEC_CX = SPEC_X + SPEC_W / 2
const SPEC_CY = SPEC_Y + SPEC_H / 2

// path lane pill dimensions
const LANE_X = 190
const LANE_W = 120
const LANE_H = 34

// commit hash (output) box
const COMMIT_X = 390
const COMMIT_Y = 103
const COMMIT_W = 110
const COMMIT_H = 60
const COMMIT_CX = COMMIT_X + COMMIT_W / 2
const COMMIT_CY = COMMIT_Y + COMMIT_H / 2

export default function ImplementationDivergence() {
  return (
    <motion.div
      className="w-full max-w-[560px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 520 280" className="w-full h-auto">
        <defs>
          <marker id="id-arrow-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.6" />
          </marker>
          <marker id="id-arrow-amber" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.6" />
          </marker>
        </defs>

        {/* spec.md input box */}
        <motion.rect
          x={SPEC_X} y={SPEC_Y}
          width={SPEC_W} height={SPEC_H}
          rx={10}
          fill="#4ade80" fillOpacity="0.09"
          stroke="#4ade80" strokeWidth="2" strokeOpacity="0.5"
          variants={fade} custom={0}
        />
        <motion.text
          x={SPEC_CX} y={SPEC_CY - 6}
          textAnchor="middle"
          fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="monospace"
          variants={fade} custom={0.5}
        >
          spec.md
        </motion.text>
        <motion.text
          x={SPEC_CX} y={SPEC_CY + 11}
          textAnchor="middle"
          fill="#4ade80" fontSize="8" fontWeight="500" fillOpacity="0.7"
          variants={fade} custom={0.8}
        >
          input contract
        </motion.text>

        {/* Fan-out: lines from spec.md right edge to each lane */}
        {paths.map((path, i) => {
          const LANE_CY = path.y + LANE_H / 2
          return (
            <motion.line
              key={`fan-out-${i}`}
              x1={SPEC_X + SPEC_W} y1={SPEC_CY}
              x2={LANE_X} y2={LANE_CY}
              stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.3"
              markerEnd="url(#id-arrow-green)"
              variants={draw} custom={1 + i * 0.6}
            />
          )
        })}

        {/* Path lane boxes */}
        {paths.map((path, i) => {
          const LANE_CY = path.y + LANE_H / 2
          return (
            <g key={path.label}>
              <motion.rect
                x={LANE_X} y={path.y}
                width={LANE_W} height={LANE_H}
                rx={6}
                fill="#f59e0b" fillOpacity="0.08"
                stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.3"
                variants={fade} custom={2 + i * 0.6}
              />
              <motion.text
                x={LANE_X + LANE_W / 2} y={LANE_CY + 4}
                textAnchor="middle"
                fill="#fafaf9" fontSize="10" fontWeight="600"
                variants={fade} custom={2.3 + i * 0.6}
              >
                {path.label}
              </motion.text>
            </g>
          )
        })}

        {/* Fan-in: lines from each lane right edge to commit hash box */}
        {paths.map((path, i) => {
          const LANE_CY = path.y + LANE_H / 2
          return (
            <motion.line
              key={`fan-in-${i}`}
              x1={LANE_X + LANE_W} y1={LANE_CY}
              x2={COMMIT_X} y2={COMMIT_CY}
              stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.3"
              markerEnd="url(#id-arrow-amber)"
              variants={draw} custom={5 + i * 0.5}
            />
          )
        })}

        {/* commit hash output box */}
        <motion.rect
          x={COMMIT_X} y={COMMIT_Y}
          width={COMMIT_W} height={COMMIT_H}
          rx={10}
          fill="#4ade80" fillOpacity="0.09"
          stroke="#4ade80" strokeWidth="2" strokeOpacity="0.5"
          variants={fade} custom={8}
        />
        <motion.text
          x={COMMIT_CX} y={COMMIT_CY - 6}
          textAnchor="middle"
          fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="monospace"
          variants={fade} custom={8.5}
        >
          commit hash
        </motion.text>
        <motion.text
          x={COMMIT_CX} y={COMMIT_CY + 11}
          textAnchor="middle"
          fill="#4ade80" fontSize="8" fontWeight="500" fillOpacity="0.7"
          variants={fade} custom={8.8}
        >
          output contract
        </motion.text>

        {/* Bottom label */}
        <motion.text
          x="260" y="268"
          textAnchor="middle"
          fill="#fafaf9" fontSize="10" fontWeight="600" letterSpacing="1.5"
          variants={fade} custom={9.5}
        >
          MANY PATHS · SAME CONTRACT
        </motion.text>
      </svg>
    </motion.div>
  )
}
