import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3, ease: 'easeOut' as const },
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

const blocks = [
  { label: 'pr:resolve', y: 50, fillOpacity: 0.3, strokeOpacity: 0.5 },
  { label: 'pr:review', y: 105, fillOpacity: 0.2, strokeOpacity: 0.4 },
  { label: 'pr:author', y: 160, fillOpacity: 0.12, strokeOpacity: 0.32 },
]

export default function BuildingBlocks() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 360 250" className="w-full h-auto">
        {/* Foundation line */}
        <motion.line x1="70" y1="215" x2="290" y2="215" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0} />

        {/* Blocks — bottom to top animation order */}
        {[...blocks].reverse().map((block, i) => (
          <g key={block.label}>
            <motion.rect
              x="80"
              y={block.y}
              width="200"
              height="48"
              rx="4"
              fill="#f59e0b"
              fillOpacity={block.fillOpacity}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity={block.strokeOpacity}
              variants={slideUp}
              custom={i + 1}
            />
            <motion.text
              x="180"
              y={block.y + 29}
              textAnchor="middle"
              fill="#fafaf9"
              fontSize="13"
              fontWeight="600"
              fontFamily="monospace"
              variants={slideUp}
              custom={i + 1.2}
            >
              {block.label}
            </motion.text>
          </g>
        ))}

        {/* Compose arrow on right */}
        <motion.line x1="300" y1="195" x2="300" y2="70" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={5} />
        <motion.path d="M 296 74 L 300 62 L 304 74" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={5.5} />
        <motion.text x="300" y="55" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="600" letterSpacing="1.5" variants={fade} custom={6}>
          COMPOSE
        </motion.text>
      </svg>
    </motion.div>
  )
}
