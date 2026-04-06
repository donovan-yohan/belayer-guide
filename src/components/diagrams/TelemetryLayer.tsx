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

// Terminal window dimensions
const termX = 160
const termY = 30
const termW = 220
const termH = 140
const termRx = 8

// Code lines inside terminal
const codeLines = [
  { text: 'carabiner why src/api.ts:42', color: '#4ade80', y: 72 },
  { text: '  session: claude-opus-4.6', color: '#a8a29e', y: 88 },
  { text: '  model:   opus-4.6', color: '#a8a29e', y: 100 },
  { text: '  confidence: high', color: '#f59e0b', y: 112 },
  { text: '  pipeline: explore → climb', color: '#a8a29e', y: 124 },
  { text: '  spec:    feat-auth-design.md', color: '#a8a29e', y: 136 },
]

// Spyglass dimensions — overlapping the terminal from the left
const glassX = 128
const glassY = 105
const glassR = 48

export default function TelemetryLayer() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 210" className="w-full h-auto">
        {/* Terminal window */}
        <motion.rect
          x={termX} y={termY}
          width={termW} height={termH}
          rx={termRx}
          fill="#1c1917" fillOpacity="0.8"
          stroke="#a8a29e" strokeWidth="1" strokeOpacity="0.2"
          variants={fade} custom={0}
        />

        {/* Terminal title bar dots */}
        <motion.circle cx={termX + 14} cy={termY + 12} r={3} fill="#ef4444" fillOpacity="0.6" variants={fade} custom={0.5} />
        <motion.circle cx={termX + 26} cy={termY + 12} r={3} fill="#f59e0b" fillOpacity="0.6" variants={fade} custom={0.6} />
        <motion.circle cx={termX + 38} cy={termY + 12} r={3} fill="#4ade80" fillOpacity="0.6" variants={fade} custom={0.7} />

        {/* Title bar divider */}
        <motion.line
          x1={termX} y1={termY + 24}
          x2={termX + termW} y2={termY + 24}
          stroke="#a8a29e" strokeWidth="0.5" strokeOpacity="0.15"
          variants={draw} custom={1}
        />

        {/* Code lines */}
        {codeLines.map((line, i) => (
          <motion.text
            key={i}
            x={termX + 12} y={line.y}
            fill={line.color} fontSize="8.5" fontFamily="monospace" fontWeight={i === 0 ? '600' : '400'}
            fillOpacity={i === 0 ? 1 : 0.7}
            variants={fade} custom={i * 0.4 + 1.5}
          >
            {line.text}
          </motion.text>
        ))}

        {/* Spyglass — magnifying glass overlapping the terminal */}
        {/* Glass circle with lens effect */}
        <motion.circle
          cx={glassX} cy={glassY}
          r={glassR}
          fill="#f59e0b" fillOpacity="0.04"
          stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5"
          variants={fade} custom={4}
        />

        {/* Inner lens highlight */}
        <motion.ellipse
          cx={glassX - 12} cy={glassY - 14}
          rx={16} ry={10}
          fill="#f59e0b" fillOpacity="0.06"
          transform={`rotate(-30 ${glassX - 12} ${glassY - 14})`}
          variants={fade} custom={4.5}
        />

        {/* Handle */}
        <motion.line
          x1={glassX + glassR * 0.7} y1={glassY + glassR * 0.7}
          x2={glassX + glassR * 0.7 + 36} y2={glassY + glassR * 0.7 + 36}
          stroke="#f59e0b" strokeWidth="4" strokeOpacity="0.6"
          strokeLinecap="round"
          variants={draw} custom={5}
        />
        {/* Handle grip */}
        <motion.line
          x1={glassX + glassR * 0.7 + 28} y1={glassY + glassR * 0.7 + 28}
          x2={glassX + glassR * 0.7 + 40} y2={glassY + glassR * 0.7 + 40}
          stroke="#f59e0b" strokeWidth="6" strokeOpacity="0.4"
          strokeLinecap="round"
          variants={draw} custom={5.3}
        />

        {/* Bottom label */}
        <motion.text
          x={240} y={200}
          textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="500"
          variants={fade} custom={7}
        >
          trace any line back to the session that wrote it
        </motion.text>
      </svg>
    </motion.div>
  )
}
