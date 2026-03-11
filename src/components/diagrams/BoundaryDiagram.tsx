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

const boxes = [
  { x: 20, label: 'Refine' },
  { x: 120, label: 'Implement' },
  { x: 220, label: 'Review' },
]

export default function BoundaryDiagram() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 460 180" className="w-full h-auto">
        {/* Three bounded tools */}
        {boxes.map((box, i) => (
          <g key={box.label}>
            <motion.rect x={box.x} y="40" width="80" height="70" rx="4" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={fade} custom={i * 1.2} />
            <motion.circle cx={box.x + 12} cy="48" r="3" fill="#4ade80" fillOpacity="0.7" variants={fade} custom={i * 1.2 + 0.3} />
            <motion.circle cx={box.x + 68} cy="48" r="3" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={i * 1.2 + 0.5} />
            <motion.text x={box.x + 40} y="82" textAnchor="middle" fill="#fafaf9" fontSize="11" fontWeight="600" variants={fade} custom={i * 1.2 + 0.7}>
              {box.label}
            </motion.text>
          </g>
        ))}

        {/* Arrows between boxes */}
        {[0, 1].map((i) => (
          <motion.line key={`arrow-${i}`} x1={boxes[i].x + 83} y1="75" x2={boxes[i + 1].x - 3} y2="75" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" markerEnd="url(#bd-arrowhead)" variants={draw} custom={i * 1.2 + 1} />
        ))}

        <motion.text x="160" y="140" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={5}>
          CLEAR BOUNDARIES
        </motion.text>

        {/* VS divider */}
        <motion.text x="310" y="80" textAnchor="middle" fill="#a8a29e" fontSize="12" fontWeight="700" variants={fade} custom={4}>
          vs
        </motion.text>

        {/* Monolithic box */}
        <motion.rect x="330" y="40" width="110" height="70" rx="4" fill="#f59e0b" fillOpacity="0.05" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.2" variants={fade} custom={5} />
        <motion.text x="385" y="80" textAnchor="middle" fill="#a8a29e" fontSize="10" fontWeight="600" variants={fade} custom={5.5}>
          MONOLITHIC
        </motion.text>

        {/* X cross-out */}
        <motion.line x1="340" y1="50" x2="430" y2="100" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" variants={draw} custom={6} />
        <motion.line x1="430" y1="50" x2="340" y2="100" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" variants={draw} custom={6.3} />

        <motion.text x="385" y="140" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={7}>
          CONTEXT EXPLODES
        </motion.text>

        <defs>
          <marker id="bd-arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  )
}
