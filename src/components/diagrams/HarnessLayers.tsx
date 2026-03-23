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
  { label: 'Architecture', question: 'why this structure?', highlight: false },
  { label: 'Test Strategy', question: 'what validates correctness?', highlight: false },
  { label: 'Code Quality', question: 'what standards apply?', highlight: false },
  { label: 'Conventions', question: 'how do we work here?', highlight: false },
]

const boxWidth = 240
const boxHeight = 56
const gap = 12
const centerX = 160
const startY = 20

export default function HarnessLayers() {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 320 340" className="w-full h-auto">
        {/* Connector lines between boxes */}
        {layers.slice(0, -1).map((_, i) => {
          const fromY = startY + i * (boxHeight + gap) + boxHeight
          const toY = startY + (i + 1) * (boxHeight + gap)
          return (
            <motion.line
              key={`connector-${i}`}
              x1={centerX}
              y1={fromY + 2}
              x2={centerX}
              y2={toY - 2}
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="3 3"
              variants={draw}
              custom={i * 1.2 + 0.6}
            />
          )
        })}

        {/* Layer boxes */}
        {layers.map((layer, i) => {
          const y = startY + i * (boxHeight + gap)
          const x = centerX - boxWidth / 2
          const opacity = 0.3 + i * 0.07
          return (
            <motion.g key={layer.label} variants={fade} custom={i * 1.2}>
              <rect
                x={x}
                y={y}
                width={boxWidth}
                height={boxHeight}
                rx={8}
                fill="#f59e0b"
                fillOpacity="0.06"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity={opacity}
              />
              <text
                x={centerX}
                y={y + 21}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="14"
                fontWeight="600"
                fill="#fafaf9"
                fillOpacity="0.9"
              >
                {layer.label}
              </text>
              <text
                x={centerX}
                y={y + 40}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fill="#a8a29e"
              >
                {layer.question}
              </text>
            </motion.g>
          )
        })}

        {/* Bottom label */}
        <motion.text
          x={centerX}
          y={startY + layers.length * (boxHeight + gap) + 20}
          textAnchor="middle"
          fill="#fafaf9"
          fontSize="11"
          fontWeight="600"
          letterSpacing="1"
          variants={fade}
          custom={layers.length * 1.2 + 1}
        >
          PER-REPO CONCERNS
        </motion.text>
      </svg>
    </motion.div>
  )
}
