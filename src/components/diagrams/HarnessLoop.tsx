import { motion } from 'framer-motion'
import { draw, fade, DiagramWrapper } from './variants'

const cx = 120
const cy = 120
const nodeR = 65
const labelR = 80

const steps = ['brainstorm', 'plan', 'orchestrate', 'review', 'reflect', 'complete']

function pos(i: number, radius: number) {
  const angle = -Math.PI / 2 + (i * Math.PI * 2) / 6
  return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) }
}

export default function HarnessLoop() {
  return (
    <DiagramWrapper>
      <svg viewBox="0 0 240 240" className="w-full h-full">
        <defs>
          <marker id="feedback-arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M 0 0 L 5 2.5 L 0 5 z" fill="#f59e0b" opacity="0.65" />
          </marker>
        </defs>

        {/* Guide circle */}
        <motion.circle cx={cx} cy={cy} r={nodeR} fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.1" variants={draw} custom={0} />

        {/* Sequential arcs connecting nodes clockwise */}
        {steps.map((_, i) => {
          const from = pos(i, nodeR)
          const to = pos((i + 1) % 6, nodeR)
          return (
            <motion.path
              key={`arc-${i}`}
              d={`M ${from.x.toFixed(1)} ${from.y.toFixed(1)} A ${nodeR} ${nodeR} 0 0 1 ${to.x.toFixed(1)} ${to.y.toFixed(1)}`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity="0.25"
              variants={draw}
              custom={1 + i * 0.2}
            />
          )
        })}

        {/* Feedback arc: review → orchestrate (inner curve, dashed) */}
        {(() => {
          const review = pos(3, nodeR)
          const orchestrate = pos(2, nodeR)
          return (
            <motion.path
              d={`M ${review.x.toFixed(1)} ${review.y.toFixed(1)} Q 168 158 ${orchestrate.x.toFixed(1)} ${orchestrate.y.toFixed(1)}`}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity="0.65"
              strokeDasharray="3 2"
              markerEnd="url(#feedback-arrow)"
              variants={draw}
              custom={3.2}
            />
          )
        })()}

        {/* Node circles */}
        {steps.map((_, i) => {
          const { x, y } = pos(i, nodeR)
          const isHighlighted = i === 2 || i === 3
          return (
            <motion.circle
              key={`node-${i}`}
              cx={x.toFixed(1)}
              cy={y.toFixed(1)}
              r={isHighlighted ? 5.5 : 4.5}
              fill="#f59e0b"
              fillOpacity={isHighlighted ? 0.7 : 0.4}
              variants={fade}
              custom={0.5 + i * 0.15}
            />
          )
        })}

        {/* Labels */}
        {steps.map((label, i) => {
          const { x, y } = pos(i, labelR)
          const anchor = x < cx - 8 ? 'end' : x > cx + 8 ? 'start' : 'middle'
          const opacity = 0.45 + i * 0.08
          return (
            <motion.text
              key={`label-${i}`}
              x={x.toFixed(1)}
              y={y.toFixed(1)}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize="7.5"
              fill="#f59e0b"
              fillOpacity={opacity > 0.9 ? 0.9 : opacity}
              fontFamily="monospace"
              variants={fade}
              custom={1.2 + i * 0.15}
            >
              {label}
            </motion.text>
          )
        })}

        {/* Central "harness" label */}
        <motion.circle cx={cx} cy={cy} r="13" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.15" variants={draw} custom={2.8} />
        <motion.text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="8"
          fill="#f59e0b"
          fillOpacity="0.35"
          letterSpacing="1.5"
          fontFamily="monospace"
          variants={fade}
          custom={3}
        >
          harness
        </motion.text>
      </svg>
    </DiagramWrapper>
  )
}
