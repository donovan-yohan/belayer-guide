import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.7, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
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

const cx = 180
const cy = 180
const spokeLen = 110
const nodeW = 108
const nodeH = 30

const spokes = [
  { label: 'Model Selection', angle: -90 },
  { label: 'Adversarial Review', angle: 0 },
  { label: 'Subagent Dev', angle: 90 },
  { label: 'Skill Workflows', angle: 180 },
]

function nodePos(angle: number) {
  const rad = (angle * Math.PI) / 180
  return {
    x: cx + Math.cos(rad) * spokeLen,
    y: cy + Math.sin(rad) * spokeLen,
  }
}

export default function AgentMechanics() {
  return (
    <motion.div
      className="w-full max-w-[400px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 360 360" className="w-full h-auto">
        {/* Spokes */}
        {spokes.map((spoke, i) => {
          const rad = (spoke.angle * Math.PI) / 180
          // Stop spoke at edge of center circle (r=35) and node box edge
          const spokeStartX = cx + Math.cos(rad) * 36
          const spokeStartY = cy + Math.sin(rad) * 36
          const spokeEndX = cx + Math.cos(rad) * (spokeLen - nodeH / 2 - 4)
          const spokeEndY = cy + Math.sin(rad) * (spokeLen - nodeH / 2 - 4)
          return (
            <motion.line
              key={`spoke-${i}`}
              x1={spokeStartX}
              y1={spokeStartY}
              x2={spokeEndX}
              y2={spokeEndY}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              variants={draw}
              custom={1 + i * 0.4}
            />
          )
        })}

        {/* Spoke nodes */}
        {spokes.map((spoke, i) => {
          const pos = nodePos(spoke.angle)
          return (
            <motion.g key={`node-${i}`} variants={fade} custom={1.5 + i * 0.4}>
              <rect
                x={pos.x - nodeW / 2}
                y={pos.y - nodeH / 2}
                width={nodeW}
                height={nodeH}
                rx={6}
                fill="#f59e0b"
                fillOpacity="0.08"
                stroke="#f59e0b"
                strokeWidth="1"
                strokeOpacity="0.35"
              />
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontWeight="500"
                fill="#fafaf9"
                fillOpacity="0.85"
              >
                {spoke.label}
              </text>
            </motion.g>
          )
        })}

        {/* Center circle */}
        <motion.circle
          cx={cx}
          cy={cy}
          r="35"
          fill="#f59e0b"
          fillOpacity="0.1"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          variants={draw}
          custom={0}
        />
        {/* Inner pulse ring */}
        <motion.circle
          cx={cx}
          cy={cy}
          r="28"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeOpacity="0.2"
          variants={draw}
          custom={0.3}
        />
        <motion.text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="12"
          fontWeight="700"
          fill="#fafaf9"
          variants={fade}
          custom={0.5}
        >
          AGENT
        </motion.text>
      </svg>
    </motion.div>
  )
}
