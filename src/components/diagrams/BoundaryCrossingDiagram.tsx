import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: i * 0.12 }, opacity: { duration: 0.2, delay: i * 0.12 } },
  }),
}

const tools = [
  { x: 10, label: 'Refine' },
  { x: 190, label: 'Implement' },
  { x: 370, label: 'Review' },
]

export default function BoundaryCrossingDiagram() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 190" className="w-full h-auto">
        {/* Phase boxes */}
        {tools.map((tool, i) => (
          <g key={tool.label}>
            <motion.rect x={tool.x} y="50" width="100" height="56" rx="6" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={fade} custom={i * 3} />
            {/* Start dot */}
            <motion.circle cx={tool.x + 14} cy="62" r="4" fill="#4ade80" fillOpacity="0.7" variants={fade} custom={i * 3 + 0.3} />
            {/* End dot */}
            <motion.circle cx={tool.x + 86} cy="62" r="4" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={i * 3 + 0.5} />
            {/* Label */}
            <motion.text x={tool.x + 50} y="88" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={i * 3 + 0.7}>
              {tool.label}
            </motion.text>
          </g>
        ))}

        {/* Boundary crossing zones */}
        {[0, 1].map((i) => {
          const x1 = tools[i].x + 100
          const x2 = tools[i + 1].x
          const midX = (x1 + x2) / 2
          return (
            <g key={`crossing-${i}`}>
              {/* Highlighted bridge zone */}
              <motion.rect x={x1 + 4} y="44" width={x2 - x1 - 8} height="68" rx="8" fill="#4ade80" fillOpacity="0.06" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 3" variants={fade} custom={i * 3 + 1.5} />

              {/* Arrow from end of one tool to start of next */}
              <motion.line x1={x1 + 2} y1="78" x2={x2 - 2} y2="78" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.5" markerEnd="url(#bc-arrow)" variants={draw} custom={i * 3 + 2} />

              {/* Bridge start dot */}
              <motion.circle cx={x1 + 14} cy="78" r="3" fill="#4ade80" fillOpacity="0.5" variants={fade} custom={i * 3 + 2.2} />
              {/* Bridge end dot */}
              <motion.circle cx={x2 - 14} cy="78" r="3" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={i * 3 + 2.4} />

              {/* Label */}
              <motion.text x={midX} y="38" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="600" letterSpacing="1" variants={fade} custom={i * 3 + 2.5}>
                HANDOFF
              </motion.text>
            </g>
          )
        })}

        {/* Bottom label */}
        <motion.text x="240" y="145" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={8}>
          EVERY BOUNDARY IS ITS OWN TOOL
        </motion.text>

        {/* Subtitle */}
        <motion.text x="240" y="165" textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="500" variants={fade} custom={9}>
          each handoff has a clear start and end
        </motion.text>

        <defs>
          <marker id="bc-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  )
}
