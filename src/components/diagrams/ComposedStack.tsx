import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: i * 0.12 }, opacity: { duration: 0.2, delay: i * 0.12 } },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.12 },
  }),
}

const layers = [
  { label: 'Human', sublabel: 'architect', y: 20, highlight: true },
  { label: 'Setter', sublabel: 'orchestration layer', y: 100 },
  { label: 'Leads', sublabel: 'independent goal executors', y: 180 },
  { label: 'Harness', sublabel: 'plan · orchestrate · review', y: 260 },
  { label: 'Skills', sublabel: 'pr:author · pr:review · reflect', y: 340 },
]

const boxHeight = 52
const boxWidth = 240
const centerX = 160

export default function ComposedStack() {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <svg viewBox="0 0 320 410" className="w-full h-auto">
        {/* Arrows between layers */}
        {layers.slice(0, -1).map((layer, i) => {
          const fromY = layer.y + boxHeight
          const toY = layers[i + 1].y
          const midY = (fromY + toY) / 2
          return (
            <g key={`arrow-${i}`}>
              <motion.line
                x1={centerX}
                y1={fromY + 2}
                x2={centerX}
                y2={toY - 2}
                stroke="#f59e0b"
                strokeWidth="2"
                strokeOpacity="0.4"
                variants={draw}
                custom={i * 1.2 + 0.8}
              />
              {/* Arrow head */}
              <motion.path
                d={`M ${centerX - 5} ${midY - 2} L ${centerX} ${midY + 4} L ${centerX + 5} ${midY - 2}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={fade}
                custom={i * 1.2 + 1}
              />
            </g>
          )
        })}

        {/* Layer boxes */}
        {layers.map((layer, i) => {
          const x = centerX - boxWidth / 2
          const isHighlight = layer.highlight
          return (
            <motion.g key={layer.label} variants={fade} custom={i * 1.2}>
              <rect
                x={x}
                y={layer.y}
                width={boxWidth}
                height={boxHeight}
                rx={8}
                fill="#f59e0b"
                fillOpacity={isHighlight ? 0.15 : 0.06}
                stroke="#f59e0b"
                strokeWidth={isHighlight ? 2 : 1.5}
                strokeOpacity={isHighlight ? 0.8 : 0.25 + i * 0.05}
              />
              <text
                x={centerX}
                y={layer.y + 22}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={isHighlight ? 18 : 16}
                fontWeight={isHighlight ? 'bold' : '600'}
                fill={isHighlight ? '#fafaf9' : '#f59e0b'}
                fillOpacity={isHighlight ? 1 : 0.85}
              >
                {layer.label}
              </text>
              <text
                x={centerX}
                y={layer.y + 40}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fill="#f59e0b"
                fillOpacity={isHighlight ? 0.6 : 0.4}
              >
                {layer.sublabel}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </motion.div>
  )
}
