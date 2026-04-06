import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.7, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

// Central source
const srcX = 220
const srcY = 40
const srcR = 30

// Three targets
const targets = [
  { label: 'EXPLORE', sublabel: 'memory', x: 80, y: 170, color: '#60a5fa', fill: 3 },
  { label: 'CLIMB', sublabel: 'depth', x: 220, y: 170, color: '#f59e0b', fill: 2 },
  { label: 'SUMMIT', sublabel: 'freshness', x: 360, y: 170, color: '#4ade80', fill: 1 },
]

const targetW = 100
const targetH = 50
const targetRx = 8

export default function ContextRouting() {
  return (
    <motion.div
      className="w-full max-w-[480px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 440 240" className="w-full h-auto">
        <defs>
          {targets.map((t) => (
            <marker key={t.label} id={`cr-arrow-${t.label}`} markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
              <path d="M 0 0 L 6 2.5 L 0 5" fill="none" stroke={t.color} strokeWidth="1" strokeOpacity="0.6" />
            </marker>
          ))}
        </defs>

        {/* Central source node */}
        <motion.circle
          cx={srcX} cy={srcY} r={srcR}
          fill="#fafaf9" fillOpacity="0.05"
          stroke="#fafaf9" strokeWidth="1.5" strokeOpacity="0.3"
          variants={fade} custom={0}
        />
        <motion.text
          x={srcX} y={srcY - 4}
          textAnchor="middle" dominantBaseline="middle"
          fill="#fafaf9" fontSize="9" fontWeight="700" letterSpacing="0.5"
          variants={fade} custom={0.5}
        >
          LEARNINGS
        </motion.text>
        <motion.text
          x={srcX} y={srcY + 9}
          textAnchor="middle"
          fill="#a8a29e" fontSize="8" fontWeight="500"
          variants={fade} custom={0.8}
        >
          same source
        </motion.text>

        {/* Projection lines from source to targets */}
        {targets.map((target, i) => {
          const targetCenterX = target.x
          const targetTopY = target.y
          return (
            <motion.line
              key={target.label}
              x1={srcX} y1={srcY + srcR}
              x2={targetCenterX} y2={targetTopY - 2}
              stroke={target.color} strokeWidth="1.5" strokeOpacity="0.4"
              markerEnd={`url(#cr-arrow-${target.label})`}
              variants={draw} custom={i + 2}
            />
          )
        })}

        {/* Fill level indicators — bars inside target boxes showing how much context */}
        {targets.map((target, i) => {
          const bx = target.x - targetW / 2
          const by = target.y
          const fillH = target.fill * (targetH / 4)
          return (
            <g key={target.label}>
              {/* Target box */}
              <motion.rect
                x={bx} y={by}
                width={targetW} height={targetH}
                rx={targetRx}
                fill={target.color} fillOpacity="0.07"
                stroke={target.color} strokeWidth="1.5" strokeOpacity="0.35"
                variants={fade} custom={i + 3}
              />

              {/* Fill bar showing context amount */}
              <motion.rect
                x={bx + 6} y={by + targetH - fillH - 6}
                width={8} height={fillH}
                rx={2}
                fill={target.color} fillOpacity="0.35"
                variants={fade} custom={i + 4}
              />

              {/* Phase label */}
              <motion.text
                x={target.x + 6} y={by + 22}
                textAnchor="middle" dominantBaseline="middle"
                fill={target.color} fontSize="10" fontWeight="700" letterSpacing="0.5"
                variants={fade} custom={i + 3.5}
              >
                {target.label}
              </motion.text>

              {/* Context type */}
              <motion.text
                x={target.x + 6} y={by + 38}
                textAnchor="middle"
                fill="#a8a29e" fontSize="8" fontWeight="600"
                variants={fade} custom={i + 3.8}
              >
                {target.sublabel}
              </motion.text>
            </g>
          )
        })}

        {/* Bottom label */}
        <motion.text
          x={220} y={235}
          textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="500"
          variants={fade} custom={8}
        >
          same learnings, different projections
        </motion.text>
      </svg>
    </motion.div>
  )
}
