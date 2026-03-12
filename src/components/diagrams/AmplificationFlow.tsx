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
 * Each column is a rounded-rect outline containing stacked blocks.
 * Bad blocks grow proportionally larger at each stage to show amplification.
 *
 * Column 1: Research — small bad block (~18% of column height)
 * Column 2: Plan    — two bad blocks (~43% of column height)
 * Column 3: Code    — one massive bad block (~71% of column height)
 *
 * Green (#4ade80) = good input/output
 * Amber (#f59e0b) = bad/errored input/output
 */

const good = '#4ade80'
const bad = '#f59e0b'

// Column geometry
const COL_W = 52
const R = 6 // corner radius for inner blocks
const COL_R = 8 // corner radius for column outlines

// Research column — center x=70, left=44, right=96
// Outline: y=35 to y=248, height=213
const R_LEFT = 44
const R_COL_TOP = 35
const R_COL_BOT = 248
// Blocks inside (2px gap from column wall on each side, 3px gaps between blocks)
// good top: y=37, h=26
// bad:       y=66, h=40  (~19%)
// good rest: y=109, h=136
const researchBlocks = [
  { y: 37, h: 26, color: good },
  { y: 66, h: 40, color: bad },
  { y: 109, h: 136, color: good },
]

// Plan column — center x=225, left=199, right=251
// Outline: y=28 to y=258, height=230
const P_LEFT = 199
const P_COL_TOP = 28
const P_COL_BOT = 258
// good top: y=30, h=22
// bad 1:    y=55, h=48
// bad 2:    y=106, h=50  (total bad ~98/228 ~43%)
// good bot: y=159, h=96
const planBlocks = [
  { y: 30, h: 22, color: good },
  { y: 55, h: 48, color: bad },
  { y: 106, h: 50, color: bad },
  { y: 159, h: 96, color: good },
]

// Code column — center x=380, left=354, right=406
// Outline: y=20 to y=268, height=248
const C_LEFT = 354
const C_COL_TOP = 20
const C_COL_BOT = 268
// good top: y=22, h=18
// bad:      y=43, h=175  (~71%)
// good bot: y=221, h=44
const codeBlocks = [
  { y: 22, h: 18, color: good },
  { y: 43, h: 175, color: bad },
  { y: 221, h: 44, color: good },
]

// Connection anchor points
// Research bad block right edge, midpoint
const resBadMidY = 66 + 40 / 2  // = 86
const resBadRight = R_LEFT + COL_W  // = 96

// Plan bad block midpoints, left edge
const planBad1MidY = 55 + 48 / 2   // = 79
const planBad2MidY = 106 + 50 / 2  // = 131
const planLeft = P_LEFT  // = 199

// Code bad block midY, left edge
const codeBadMidY = 43 + 175 / 2   // = 130.5
const codeLeft = C_LEFT  // = 354

// Plan bad blocks right edge
const planRight = P_LEFT + COL_W   // = 251

export default function AmplificationFlow() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 450 300" className="w-full h-auto">
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
        {/* research good top → plan good top */}
        <motion.line
          x1={resBadRight}
          y1={37 + 26 / 2}
          x2={planLeft}
          y2={30 + 22 / 2}
          stroke={good}
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={3}
        />
        {/* research good bottom → plan good bottom */}
        <motion.line
          x1={resBadRight}
          y1={109 + 136 / 2}
          x2={planLeft}
          y2={159 + 96 / 2}
          stroke={good}
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={3.2}
        />

        {/* Good flow connections (subtle) — plan good → code good */}
        {/* plan good top → code good top */}
        <motion.line
          x1={planRight}
          y1={30 + 22 / 2}
          x2={codeLeft}
          y2={22 + 18 / 2}
          stroke={good}
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={5}
        />
        {/* plan good bottom → code good bottom */}
        <motion.line
          x1={planRight}
          y1={159 + 96 / 2}
          x2={codeLeft}
          y2={221 + 44 / 2}
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
        <motion.text x="70" y="292" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8}>
          ~18% bad
        </motion.text>
        <motion.text x="225" y="292" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8.3}>
          ~43% bad
        </motion.text>
        <motion.text x="380" y="292" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8.6}>
          ~71% bad
        </motion.text>
      </svg>
    </motion.div>
  )
}
