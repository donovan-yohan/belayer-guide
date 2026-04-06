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
    transition: { pathLength: { duration: 0.6, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

// Triangle layout — three nodes pulling in different directions
const cx = 220
const cy = 110
const radius = 75

const nodes = [
  { label: 'DEPTH', sublabel: 'load everything', x: cx, y: cy - radius, color: '#f59e0b' },
  { label: 'FRESHNESS', sublabel: 'load nothing', x: cx - radius * 0.87, y: cy + radius * 0.5, color: '#4ade80' },
  { label: 'MEMORY', sublabel: 'load selectively', x: cx + radius * 0.87, y: cy + radius * 0.5, color: '#60a5fa' },
]

const nodeR = 36

export default function ThreeDemands() {
  return (
    <motion.div
      className="w-full max-w-[480px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 440 240" className="w-full h-auto">
        <defs>
          <marker id="td-arrow" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <path d="M 0 0 L 6 2.5 L 0 5" fill="none" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.5" />
          </marker>
        </defs>

        {/* Tension lines between nodes — dashed, red to show conflict */}
        {[
          { from: nodes[0], to: nodes[1], custom: 2 },
          { from: nodes[1], to: nodes[2], custom: 3 },
          { from: nodes[2], to: nodes[0], custom: 4 },
        ].map(({ from, to, custom }, i) => {
          // Shorten lines to stop at node edges
          const dx = to.x - from.x
          const dy = to.y - from.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const ux = dx / dist
          const uy = dy / dist
          return (
            <motion.line
              key={i}
              x1={from.x + ux * (nodeR + 2)} y1={from.y + uy * (nodeR + 2)}
              x2={to.x - ux * (nodeR + 2)} y2={to.y - uy * (nodeR + 2)}
              stroke="#ef4444" strokeWidth="1" strokeOpacity="0.35"
              strokeDasharray="4 3"
              variants={draw} custom={custom}
            />
          )
        })}

        {/* "tension" labels on lines */}
        <motion.text
          x={cx - radius * 0.43 - 14} y={cy - radius * 0.25 + 2}
          textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="500" fontStyle="italic" fillOpacity="0.6"
          variants={fade} custom={5}
        >
          opposes
        </motion.text>
        <motion.text
          x={cx} y={cy + radius * 0.5 + 22}
          textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="500" fontStyle="italic" fillOpacity="0.6"
          variants={fade} custom={5.5}
        >
          competes
        </motion.text>
        <motion.text
          x={cx + radius * 0.43 + 14} y={cy - radius * 0.25 + 2}
          textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="500" fontStyle="italic" fillOpacity="0.6"
          variants={fade} custom={6}
        >
          crowds
        </motion.text>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.label}>
            <motion.circle
              cx={node.x} cy={node.y} r={nodeR}
              fill={node.color} fillOpacity="0.08"
              stroke={node.color} strokeWidth="1.5" strokeOpacity="0.4"
              variants={fade} custom={i * 1.5}
            />
            <motion.text
              x={node.x} y={node.y - 2}
              textAnchor="middle" dominantBaseline="middle"
              fill={node.color} fontSize="10" fontWeight="700" letterSpacing="0.5"
              variants={fade} custom={i * 1.5 + 0.5}
            >
              {node.label}
            </motion.text>
            <motion.text
              x={node.x} y={node.y + 12}
              textAnchor="middle"
              fill="#a8a29e" fontSize="8" fontWeight="500"
              variants={fade} custom={i * 1.5 + 0.8}
            >
              {node.sublabel}
            </motion.text>
          </g>
        ))}

        {/* Bottom label */}
        <motion.text
          x={cx} y={225}
          textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="500"
          variants={fade} custom={8}
        >
          three demands, one context window
        </motion.text>
      </svg>
    </motion.div>
  )
}
