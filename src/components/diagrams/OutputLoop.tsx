import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.7, delay: i * 0.12 }, opacity: { duration: 0.2, delay: i * 0.12 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.12 },
  }),
}

// Circle center and radius
const cx = 200
const cy = 180
const r = 138

const nodeW = 102
const nodeH = 36

function polarToCart(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

const nodes = [
  { label: 'commit hash', angle: -90, green: true },
  { label: 'CI Monitor', angle: -26, green: false },
  { label: 'Risk Gate', angle: 26, green: false },
  { label: 'Auto-merge', angle: 82, green: false },
  { label: 'Regression Sweep', angle: 150, green: false },
  { label: 'Bug Tickets', angle: 214, green: false },
]

// Arrow pointing left off-screen from the left side
const intakeArrowEnd = { x: 28, y: cy }
const intakeArrowStart = polarToCart(267, r - 10)

export default function OutputLoop() {
  return (
    <motion.div
      className="w-full max-w-[460px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 400 360" className="w-full h-auto">
        {/* Background orbit circle */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeOpacity="0.08"
          variants={draw}
          custom={0}
        />

        {/* Clockwise arc arrows between nodes (solid main flow) */}
        {nodes.map((node, i) => {
          const next = nodes[(i + 1) % nodes.length]
          const isDashed = i === 2 || i === 3 // dashed branch paths after Risk Gate
          const fromAngle = node.angle + 18
          const toAngle = next.angle - 18
          const from = polarToCart(fromAngle, r)
          const to = polarToCart(toAngle, r)
          // SVG arc: clockwise large-arc=0 if angle diff < 180
          const angleDiff = ((toAngle - fromAngle) + 360) % 360
          const largeArc = angleDiff > 180 ? 1 : 0
          const midAngle = fromAngle + angleDiff / 2
          const arrowPos = polarToCart(midAngle, r)
          const tangentAngle = midAngle + 90
          const tangentRad = (tangentAngle * Math.PI) / 180
          const ax = arrowPos.x
          const ay = arrowPos.y
          const tx = Math.cos(tangentRad) * 5
          const ty = Math.sin(tangentRad) * 5

          return (
            <g key={`arc-${i}`}>
              <motion.path
                d={`M ${from.x} ${from.y} A ${r} ${r} 0 ${largeArc} 1 ${to.x} ${to.y}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity={isDashed ? 0.25 : 0.35}
                strokeDasharray={isDashed ? '5 4' : undefined}
                variants={draw}
                custom={i * 0.4 + 0.5}
              />
              {/* Arrowhead at midpoint */}
              <motion.path
                d={`M ${ax - tx - ty * 0.6} ${ay - ty + tx * 0.6} L ${ax + tx * 0.6} ${ay + ty * 0.6} L ${ax - tx + ty * 0.6} ${ay - ty - tx * 0.6}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity={isDashed ? 0.3 : 0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={fade}
                custom={i * 0.4 + 0.7}
              />
            </g>
          )
        })}

        {/* INTAKE arrow pointing off-screen left */}
        <motion.line
          x1={intakeArrowStart.x}
          y1={intakeArrowStart.y}
          x2={intakeArrowEnd.x}
          y2={intakeArrowEnd.y}
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          variants={draw}
          custom={3.5}
        />
        <motion.path
          d={`M ${intakeArrowEnd.x + 8} ${intakeArrowEnd.y - 5} L ${intakeArrowEnd.x} ${intakeArrowEnd.y} L ${intakeArrowEnd.x + 8} ${intakeArrowEnd.y + 5}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={fade}
          custom={3.8}
        />
        <motion.text
          x={intakeArrowEnd.x + 38}
          y={intakeArrowEnd.y - 10}
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="9"
          fontWeight="600"
          letterSpacing="0.08em"
          fillOpacity="0.6"
          variants={fade}
          custom={4}
        >
          → INTAKE
        </motion.text>

        {/* Checkmark on Auto-merge node */}
        {(() => {
          const autoMerge = nodes[3]
          const pos = polarToCart(autoMerge.angle, r)
          return (
            <motion.text
              x={pos.x + nodeW / 2 - 6}
              y={pos.y - nodeH / 2 - 6}
              textAnchor="middle"
              fill="#4ade80"
              fontSize="11"
              variants={fade}
              custom={5.5}
            >
              ✓
            </motion.text>
          )
        })()}

        {/* Node boxes */}
        {nodes.map((node, i) => {
          const pos = polarToCart(node.angle, r)
          const isGreen = node.green
          const boxX = pos.x - nodeW / 2
          const boxY = pos.y - nodeH / 2
          const labelLines = node.label.split(' ')
          const hasTwoLines = labelLines.length > 1
          return (
            <motion.g key={node.label} variants={fade} custom={i * 0.35 + 0.2}>
              <rect
                x={boxX}
                y={boxY}
                width={nodeW}
                height={nodeH}
                rx={6}
                fill={isGreen ? '#4ade80' : '#f59e0b'}
                fillOpacity={isGreen ? 0.12 : 0.08}
                stroke={isGreen ? '#4ade80' : '#f59e0b'}
                strokeWidth={isGreen ? 1.5 : 1}
                strokeOpacity={isGreen ? 0.7 : 0.3}
              />
              {hasTwoLines ? (
                <>
                  <text
                    x={pos.x}
                    y={pos.y - 6}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    fontWeight="600"
                    fill={isGreen ? '#4ade80' : '#fafaf9'}
                    fillOpacity={isGreen ? 0.9 : 0.85}
                  >
                    {labelLines[0]}
                  </text>
                  <text
                    x={pos.x}
                    y={pos.y + 7}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    fontWeight="600"
                    fill={isGreen ? '#4ade80' : '#fafaf9'}
                    fillOpacity={isGreen ? 0.9 : 0.85}
                  >
                    {labelLines[1]}
                  </text>
                </>
              ) : (
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fontWeight="600"
                  fill={isGreen ? '#4ade80' : '#fafaf9'}
                  fillOpacity={isGreen ? 0.9 : 0.85}
                >
                  {node.label}
                </text>
              )}
            </motion.g>
          )
        })}
      </svg>
    </motion.div>
  )
}
