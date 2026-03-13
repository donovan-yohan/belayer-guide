import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: i * 0.1 }, opacity: { duration: 0.2, delay: i * 0.1 } },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
}

/**
 * Shows: Human designs 4 projects → agents build autonomously → human reviews.
 * Three phases left to right: DESIGN (human) → BUILD (agents) → REVIEW (human)
 * Four horizontal lanes, one per project.
 */

const projects = ['Project 1', 'Project 2', 'Project 3', 'Project 4']

// Layout
const laneHeight = 44
const laneGap = 8
const topPadding = 50
const phaseDesignX = 0
const phaseBuildX = 160
const phaseReviewX = 420
const designWidth = 130
const buildWidth = 230
const reviewWidth = 90

export default function HackathonTimeline() {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="-10 0 540 310" className="w-full h-auto">
        {/* Phase labels */}
        <motion.text x={phaseDesignX + designWidth / 2} y="20" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="700" letterSpacing="1.5" variants={fade} custom={0}>
          DESIGN
        </motion.text>
        <motion.text x={phaseDesignX + designWidth / 2} y="34" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="500" letterSpacing="1" variants={fade} custom={0.3}>
          human
        </motion.text>

        <motion.text x={phaseBuildX + buildWidth / 2} y="20" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="700" letterSpacing="1.5" variants={fade} custom={1}>
          BUILD
        </motion.text>
        <motion.text x={phaseBuildX + buildWidth / 2} y="34" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="500" letterSpacing="1" variants={fade} custom={1.3}>
          agents
        </motion.text>

        <motion.text x={phaseReviewX + reviewWidth / 2} y="20" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="700" letterSpacing="1.5" variants={fade} custom={2}>
          REVIEW
        </motion.text>
        <motion.text x={phaseReviewX + reviewWidth / 2} y="34" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="500" letterSpacing="1" variants={fade} custom={2.3}>
          human
        </motion.text>

        {/* Phase divider lines */}
        <motion.line x1={phaseBuildX - 8} y1={topPadding - 6} x2={phaseBuildX - 8} y2={topPadding + projects.length * (laneHeight + laneGap) - laneGap + 6} stroke="#fafaf9" strokeWidth="1" strokeOpacity="0.08" variants={draw} custom={0.5} />
        <motion.line x1={phaseReviewX - 8} y1={topPadding - 6} x2={phaseReviewX - 8} y2={topPadding + projects.length * (laneHeight + laneGap) - laneGap + 6} stroke="#fafaf9" strokeWidth="1" strokeOpacity="0.08" variants={draw} custom={1.5} />

        {/* Project lanes */}
        {projects.map((name, i) => {
          const y = topPadding + i * (laneHeight + laneGap)
          const midY = y + laneHeight / 2
          const baseDelay = 3 + i * 1.2

          return (
            <g key={name}>
              {/* Design phase — green box (human work) */}
              <motion.rect
                x={phaseDesignX}
                y={y}
                width={designWidth}
                height={laneHeight}
                rx={6}
                fill="#4ade80"
                fillOpacity="0.08"
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                variants={fade}
                custom={baseDelay}
              />
              <motion.text x={designWidth / 2} y={midY + 1} textAnchor="middle" dominantBaseline="middle" fill="#4ade80" fontSize="11" fontWeight="600" fillOpacity="0.8" variants={fade} custom={baseDelay + 0.2}>
                {name}
              </motion.text>

              {/* Arrow: design → build */}
              <motion.line
                x1={designWidth + 4}
                y1={midY}
                x2={phaseBuildX - 4}
                y2={midY}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                markerEnd="url(#ht-arrow)"
                variants={draw}
                custom={baseDelay + 0.4}
              />

              {/* Build phase — amber box (agent work) */}
              <motion.rect
                x={phaseBuildX}
                y={y}
                width={buildWidth}
                height={laneHeight}
                rx={6}
                fill="#f59e0b"
                fillOpacity="0.08"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.25"
                variants={fade}
                custom={baseDelay + 0.5}
              />
              {/* Activity dots inside build phase */}
              {[0.2, 0.4, 0.6, 0.8].map((pos, j) => (
                <motion.circle
                  key={`dot-${i}-${j}`}
                  cx={phaseBuildX + pos * buildWidth}
                  cy={midY}
                  r="3"
                  fill="#f59e0b"
                  fillOpacity={0.2 + j * 0.1}
                  variants={fade}
                  custom={baseDelay + 0.6 + j * 0.08}
                />
              ))}

              {/* Arrow: build → review */}
              <motion.line
                x1={phaseBuildX + buildWidth + 4}
                y1={midY}
                x2={phaseReviewX - 4}
                y2={midY}
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                markerEnd="url(#ht-arrow-green)"
                variants={draw}
                custom={baseDelay + 0.8}
              />

              {/* Review phase — green box (human work) */}
              <motion.rect
                x={phaseReviewX}
                y={y}
                width={reviewWidth}
                height={laneHeight}
                rx={6}
                fill="#4ade80"
                fillOpacity="0.08"
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                variants={fade}
                custom={baseDelay + 0.9}
              />
              <motion.circle cx={phaseReviewX + reviewWidth / 2} cy={midY} r="4" fill="#4ade80" fillOpacity="0.5" variants={fade} custom={baseDelay + 1} />
            </g>
          )
        })}

        {/* Bottom annotation */}
        <motion.text x={phaseBuildX + buildWidth / 2} y={topPadding + projects.length * (laneHeight + laneGap) + 16} textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={10}>
          human time spent on design and review, not implementation
        </motion.text>

        <defs>
          <marker id="ht-arrow" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
            <path d="M 0 0 L 6 2.5 L 0 5" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
          </marker>
          <marker id="ht-arrow-green" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
            <path d="M 0 0 L 6 2.5 L 0 5" fill="none" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.4" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  )
}
