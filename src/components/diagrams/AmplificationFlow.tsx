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
 * Column 1: Research — 1 bad dot among good ones
 * Column 2: Plan — bad dot spawns multiple bad items
 * Column 3: Code — mostly bad output, majority amber
 *
 * Green (#4ade80) = good input/output
 * Amber (#f59e0b) = bad/errored input/output
 */

const good = '#4ade80'
const bad = '#f59e0b'

interface Dot {
  x: number
  y: number
  color: string
}

// Research column: mostly good, one bad
const researchDots: Dot[] = [
  { x: 70, y: 60, color: good },
  { x: 70, y: 95, color: good },
  { x: 70, y: 130, color: bad },
  { x: 70, y: 165, color: good },
  { x: 70, y: 200, color: good },
]

// Plan column: bad input spawns more bad
const planDots: Dot[] = [
  { x: 225, y: 50, color: good },
  { x: 225, y: 80, color: good },
  { x: 225, y: 110, color: bad },
  { x: 225, y: 140, color: bad },
  { x: 225, y: 170, color: bad },
  { x: 225, y: 200, color: good },
  { x: 225, y: 230, color: good },
]

// Code column: bad dominates
const codeDots: Dot[] = [
  { x: 380, y: 40, color: good },
  { x: 380, y: 63, color: bad },
  { x: 380, y: 86, color: bad },
  { x: 380, y: 109, color: bad },
  { x: 380, y: 132, color: bad },
  { x: 380, y: 155, color: bad },
  { x: 380, y: 178, color: bad },
  { x: 380, y: 201, color: bad },
  { x: 380, y: 224, color: good },
  { x: 380, y: 247, color: good },
]

// Connection lines from research bad dot to plan bad dots
const badFlowLines: Array<{ from: Dot; to: Dot }> = [
  { from: researchDots[2], to: planDots[2] },
  { from: researchDots[2], to: planDots[3] },
  { from: researchDots[2], to: planDots[4] },
]

// Connection lines from plan bad dots to code bad dots
const badFlowLines2: Array<{ from: Dot; to: Dot }> = [
  { from: planDots[2], to: codeDots[1] },
  { from: planDots[2], to: codeDots[2] },
  { from: planDots[3], to: codeDots[3] },
  { from: planDots[3], to: codeDots[4] },
  { from: planDots[4], to: codeDots[5] },
  { from: planDots[4], to: codeDots[6] },
  { from: planDots[4], to: codeDots[7] },
]

// Good flow connections (subtle, dimmer)
const goodFlowLines: Array<{ from: Dot; to: Dot }> = [
  { from: researchDots[0], to: planDots[0] },
  { from: researchDots[1], to: planDots[1] },
  { from: researchDots[3], to: planDots[5] },
  { from: researchDots[4], to: planDots[6] },
]

const goodFlowLines2: Array<{ from: Dot; to: Dot }> = [
  { from: planDots[0], to: codeDots[0] },
  { from: planDots[5], to: codeDots[8] },
  { from: planDots[6], to: codeDots[9] },
]

export default function AmplificationFlow() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 450 290" className="w-full h-auto">
        {/* Column headers */}
        {[
          { x: 70, label: 'Research' },
          { x: 225, label: 'Plan' },
          { x: 380, label: 'Code' },
        ].map((col, i) => (
          <motion.text
            key={col.label}
            x={col.x}
            y="22"
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

        {/* Vertical column lines */}
        {[70, 225, 380].map((x, i) => (
          <motion.line
            key={`col-${x}`}
            x1={x}
            y1="30"
            x2={x}
            y2="265"
            stroke="#fafaf9"
            strokeWidth="1"
            strokeOpacity="0.06"
            variants={draw}
            custom={i * 0.2}
          />
        ))}

        {/* Good flow connections (subtle) */}
        {goodFlowLines.map((line, i) => (
          <motion.line
            key={`gf1-${i}`}
            x1={line.from.x + 8}
            y1={line.from.y}
            x2={line.to.x - 8}
            y2={line.to.y}
            stroke={good}
            strokeWidth="1"
            strokeOpacity="0.12"
            variants={draw}
            custom={3 + i * 0.1}
          />
        ))}
        {goodFlowLines2.map((line, i) => (
          <motion.line
            key={`gf2-${i}`}
            x1={line.from.x + 8}
            y1={line.from.y}
            x2={line.to.x - 8}
            y2={line.to.y}
            stroke={good}
            strokeWidth="1"
            strokeOpacity="0.12"
            variants={draw}
            custom={5 + i * 0.1}
          />
        ))}

        {/* Bad flow connections (prominent) */}
        {badFlowLines.map((line, i) => (
          <motion.line
            key={`bf1-${i}`}
            x1={line.from.x + 8}
            y1={line.from.y}
            x2={line.to.x - 8}
            y2={line.to.y}
            stroke={bad}
            strokeWidth="1.5"
            strokeOpacity="0.4"
            variants={draw}
            custom={3 + i * 0.15}
          />
        ))}
        {badFlowLines2.map((line, i) => (
          <motion.line
            key={`bf2-${i}`}
            x1={line.from.x + 8}
            y1={line.from.y}
            x2={line.to.x - 8}
            y2={line.to.y}
            stroke={bad}
            strokeWidth="1.5"
            strokeOpacity="0.35"
            variants={draw}
            custom={5 + i * 0.12}
          />
        ))}

        {/* Dots for each column */}
        {[researchDots, planDots, codeDots].map((dots, colIdx) =>
          dots.map((dot, i) => (
            <motion.circle
              key={`dot-${colIdx}-${i}`}
              cx={dot.x}
              cy={dot.y}
              r="5"
              fill={dot.color}
              fillOpacity={dot.color === bad ? 0.7 : 0.45}
              variants={fade}
              custom={1 + colIdx * 1.5 + i * 0.1}
            />
          ))
        )}

        {/* Ratio labels at bottom */}
        <motion.text x="70" y="282" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8}>
          1 in 5 bad
        </motion.text>
        <motion.text x="225" y="282" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8.3}>
          3 in 7 bad
        </motion.text>
        <motion.text x="380" y="282" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={8.6}>
          7 in 10 bad
        </motion.text>
      </svg>
    </motion.div>
  )
}
