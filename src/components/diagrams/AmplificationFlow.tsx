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
 * Three-column cascade diagram showing how a single bad upstream input
 * (research) amplifies through planning into code output.
 *
 * Research column is SHORT (we write least here).
 * Plan column is MEDIUM.
 * Code column is TALL (small upstream error → lots of bad code).
 *
 * Green (#4ade80) = good input/output
 * Amber (#f59e0b) = bad/errored input/output
 */

const good = '#4ade80'
const bad = '#f59e0b'

const COL_W = 52
const R = 6
const COL_R = 8

// Research column — SHORT (height 130)
const R_LEFT = 44
const R_COL_TOP = 105
const R_COL_BOT = 235
// ~18% bad
const researchBlocks = [
  { y: 107, h: 16, color: good },
  { y: 126, h: 24, color: bad },
  { y: 153, h: 79, color: good },
]

// Plan column — MEDIUM (height 190)
const P_LEFT = 199
const P_COL_TOP = 65
const P_COL_BOT = 255
// ~43% bad
const planBlocks = [
  { y: 67, h: 16, color: good },
  { y: 86, h: 42, color: bad },
  { y: 131, h: 42, color: bad },
  { y: 176, h: 76, color: good },
]

// Code column — TALL (height 250)
const C_LEFT = 354
const C_COL_TOP = 25
const C_COL_BOT = 275
// ~71% bad
const codeBlocks = [
  { y: 27, h: 14, color: good },
  { y: 44, h: 178, color: bad },
  { y: 225, h: 47, color: good },
]

// Connection anchors
const resBadMidY = 126 + 24 / 2
const resBadRight = R_LEFT + COL_W

const planBad1MidY = 86 + 42 / 2
const planBad2MidY = 131 + 42 / 2
const planLeft = P_LEFT
const planRight = P_LEFT + COL_W

const codeBadMidY = 44 + 178 / 2
const codeLeft = C_LEFT

export default function AmplificationFlow() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 450 310" className="w-full h-auto">
        {/* Column headers */}
        {[
          { x: 70, label: 'Research' },
          { x: 225, label: 'Plan' },
          { x: 380, label: 'Code' },
        ].map((col, i) => (
          <motion.text
            key={col.label}
            x={col.x}
            y="18"
            textAnchor="middle"
            fill="#fafaf9"
            fontSize="11"
            fontWeight="700"
            letterSpacing="1.5"
            variants={fade}
            custom={i * 0.3}
          >
            {col.label.toUpperCase()}
          </motion.text>
        ))}

        {/* Good flow connections (subtle) — research good → plan good */}
        <motion.line
          x1={resBadRight}
          y1={107 + 16 / 2}
          x2={planLeft}
          y2={67 + 16 / 2}
          stroke={good}
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={3}
        />
        <motion.line
          x1={resBadRight}
          y1={153 + 79 / 2}
          x2={planLeft}
          y2={176 + 76 / 2}
          stroke={good}
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={3.2}
        />

        {/* Good flow connections (subtle) — plan good → code good */}
        <motion.line
          x1={planRight}
          y1={67 + 16 / 2}
          x2={codeLeft}
          y2={27 + 14 / 2}
          stroke={good}
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={5}
        />
        <motion.line
          x1={planRight}
          y1={176 + 76 / 2}
          x2={codeLeft}
          y2={225 + 47 / 2}
          stroke={good}
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={5.2}
        />

        {/* Bad flow connections — research bad → plan bad blocks */}
        <motion.line
          x1={resBadRight}
          y1={resBadMidY}
          x2={planLeft}
          y2={planBad1MidY}
          stroke={bad}
          strokeWidth="1.5"
          strokeOpacity="0.45"
          variants={draw}
          custom={3.5}
        />
        <motion.line
          x1={resBadRight}
          y1={resBadMidY}
          x2={planLeft}
          y2={planBad2MidY}
          stroke={bad}
          strokeWidth="1.5"
          strokeOpacity="0.45"
          variants={draw}
          custom={3.7}
        />

        {/* Bad flow connections — plan bad blocks → code bad block */}
        <motion.line
          x1={planRight}
          y1={planBad1MidY}
          x2={codeLeft}
          y2={codeBadMidY}
          stroke={bad}
          strokeWidth="1.5"
          strokeOpacity="0.4"
          variants={draw}
          custom={5.5}
        />
        <motion.line
          x1={planRight}
          y1={planBad2MidY}
          x2={codeLeft}
          y2={codeBadMidY}
          stroke={bad}
          strokeWidth="1.5"
          strokeOpacity="0.4"
          variants={draw}
          custom={5.7}
        />

        {/* Column outlines */}
        <motion.rect
          x={R_LEFT}
          y={R_COL_TOP}
          width={COL_W}
          height={R_COL_BOT - R_COL_TOP}
          rx={COL_R}
          fill="none"
          stroke="#fafaf9"
          strokeWidth="1"
          strokeOpacity="0.12"
          variants={draw}
          custom={0.2}
        />
        <motion.rect
          x={P_LEFT}
          y={P_COL_TOP}
          width={COL_W}
          height={P_COL_BOT - P_COL_TOP}
          rx={COL_R}
          fill="none"
          stroke="#fafaf9"
          strokeWidth="1"
          strokeOpacity="0.12"
          variants={draw}
          custom={0.4}
        />
        <motion.rect
          x={C_LEFT}
          y={C_COL_TOP}
          width={COL_W}
          height={C_COL_BOT - C_COL_TOP}
          rx={COL_R}
          fill="none"
          stroke="#fafaf9"
          strokeWidth="1"
          strokeOpacity="0.12"
          variants={draw}
          custom={0.6}
        />

        {/* Research blocks */}
        {researchBlocks.map((block, i) => (
          <motion.rect
            key={`r-${i}`}
            x={R_LEFT + 3}
            y={block.y}
            width={COL_W - 6}
            height={block.h}
            rx={R}
            fill={block.color}
            fillOpacity={block.color === bad ? 0.7 : 0.3}
            variants={fade}
            custom={1 + i * 0.15}
          />
        ))}

        {/* Plan blocks */}
        {planBlocks.map((block, i) => (
          <motion.rect
            key={`p-${i}`}
            x={P_LEFT + 3}
            y={block.y}
            width={COL_W - 6}
            height={block.h}
            rx={R}
            fill={block.color}
            fillOpacity={block.color === bad ? 0.7 : 0.3}
            variants={fade}
            custom={2.5 + i * 0.15}
          />
        ))}

        {/* Code blocks */}
        {codeBlocks.map((block, i) => (
          <motion.rect
            key={`c-${i}`}
            x={C_LEFT + 3}
            y={block.y}
            width={COL_W - 6}
            height={block.h}
            rx={R}
            fill={block.color}
            fillOpacity={block.color === bad ? 0.7 : 0.3}
            variants={fade}
            custom={4 + i * 0.15}
          />
        ))}

        {/* Ratio labels at bottom */}
        <motion.text x="70" y="298" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8}>
          ~18% bad
        </motion.text>
        <motion.text x="225" y="298" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8.3}>
          ~43% bad
        </motion.text>
        <motion.text x="380" y="298" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8.6}>
          ~71% bad
        </motion.text>
      </svg>
    </motion.div>
  )
}
