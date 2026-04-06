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

const layerW = 360
const layerH = 48
const layerGap = 12
const startX = 60
const startY = 20
const rx = 8

const layers = [
  {
    label: 'REPO CONTEXT',
    examples: 'CLAUDE.md · architecture docs · conventions',
    owner: 'you own this',
    color: '#60a5fa',
    y: startY,
  },
  {
    label: 'HARNESS',
    examples: 'Claude Code · Codex CLI · Cursor · OpenCode',
    owner: 'the runtime',
    color: '#f59e0b',
    y: startY + layerH + layerGap,
  },
  {
    label: 'MODEL',
    examples: 'Opus 4.6 · GPT-5.4 · Gemini 3 Pro',
    owner: 'stateless engine',
    color: '#4ade80',
    y: startY + (layerH + layerGap) * 2,
  },
]

export default function ThreeLayers() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 220" className="w-full h-auto">
        {layers.map((layer, i) => (
          <g key={layer.label}>
            {/* Layer box */}
            <motion.rect
              x={startX} y={layer.y}
              width={layerW} height={layerH}
              rx={rx}
              fill={layer.color} fillOpacity="0.07"
              stroke={layer.color} strokeWidth="1.5" strokeOpacity="0.35"
              variants={fade} custom={i * 2}
            />

            {/* Layer label */}
            <motion.text
              x={startX + 16} y={layer.y + 20}
              fill={layer.color} fontSize="11" fontWeight="700" letterSpacing="0.5"
              variants={fade} custom={i * 2 + 0.5}
            >
              {layer.label}
            </motion.text>

            {/* Examples */}
            <motion.text
              x={startX + 16} y={layer.y + 36}
              fill="#a8a29e" fontSize="9" fontWeight="500"
              variants={fade} custom={i * 2 + 0.8}
            >
              {layer.examples}
            </motion.text>

            {/* Owner label — right side */}
            <motion.text
              x={startX + layerW - 12} y={layer.y + 28}
              textAnchor="end"
              fill={layer.color} fontSize="8" fontWeight="600" fontStyle="italic" fillOpacity="0.6"
              variants={fade} custom={i * 2 + 1}
            >
              {layer.owner}
            </motion.text>
          </g>
        ))}

        {/* Arrows between layers showing separation */}
        {[0, 1].map((i) => {
          const y1 = layers[i].y + layerH
          const y2 = layers[i + 1].y
          const midY = (y1 + y2) / 2
          return (
            <motion.text
              key={i}
              x={startX + layerW / 2} y={midY + 4}
              textAnchor="middle"
              fill="#a8a29e" fontSize="10" fillOpacity="0.4"
              variants={fade} custom={i * 2 + 1.5}
            >
              ···
            </motion.text>
          )
        })}

        {/* Side bracket — "different owners, different lifecycles" */}
        <motion.line
          x1={startX - 16} y1={startY + 4}
          x2={startX - 16} y2={layers[2].y + layerH - 4}
          stroke="#a8a29e" strokeWidth="1" strokeOpacity="0.3"
          variants={draw} custom={7}
        />
        <motion.line
          x1={startX - 16} y1={startY + 4}
          x2={startX - 10} y2={startY + 4}
          stroke="#a8a29e" strokeWidth="1" strokeOpacity="0.3"
          variants={draw} custom={7}
        />
        <motion.line
          x1={startX - 16} y1={layers[2].y + layerH - 4}
          x2={startX - 10} y2={layers[2].y + layerH - 4}
          stroke="#a8a29e" strokeWidth="1" strokeOpacity="0.3"
          variants={draw} custom={7}
        />

        {/* Bottom label */}
        <motion.text
          x={startX + layerW / 2} y={200}
          textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="500"
          variants={fade} custom={8}
        >
          different owners · different lifecycles · different jobs
        </motion.text>
      </svg>
    </motion.div>
  )
}
