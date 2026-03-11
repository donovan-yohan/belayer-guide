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

const nodes = [
  { x: 60, y: 100, label: 'Spec' },
  { x: 160, y: 60, label: 'Design' },
  { x: 280, y: 60, label: 'Plan' },
  { x: 160, y: 140, label: 'Implement' },
  { x: 280, y: 140, label: 'Review' },
  { x: 380, y: 100, label: 'Ship' },
]

const connections: Array<[number, number]> = [
  [0, 1], [0, 3], [1, 2], [2, 4], [3, 4], [4, 5],
]

export default function FlowDiagram() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 440 200" className="w-full h-auto">
        <defs>
          <marker id="fd-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
          </marker>
        </defs>

        {/* Connection lines */}
        {connections.map(([fromIdx, toIdx], i) => {
          const from = nodes[fromIdx]
          const to = nodes[toIdx]
          const dx = to.x - from.x
          const dy = to.y - from.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const nx = dx / dist
          const ny = dy / dist
          return (
            <motion.line
              key={`conn-${i}`}
              x1={from.x + nx * 22}
              y1={from.y + ny * 22}
              x2={to.x - nx * 22}
              y2={to.y - ny * 22}
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity="0.25"
              markerEnd="url(#fd-arrow)"
              variants={draw}
              custom={i * 0.5}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.label}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill="#f59e0b"
              fillOpacity="0.06"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity={i === 0 || i === nodes.length - 1 ? 0.5 : 0.3}
              variants={draw}
              custom={i * 0.8}
            />
            <motion.text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill="#fafaf9"
              fontSize="10"
              fontWeight="600"
              variants={fade}
              custom={i * 0.8 + 0.3}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </motion.div>
  )
}
