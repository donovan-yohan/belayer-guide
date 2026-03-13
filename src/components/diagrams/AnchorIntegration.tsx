import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: i * 0.1 }, opacity: { duration: 0.2, delay: i * 0.1 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
}

/**
 * A central "Anchor" messenger node sits between two complex repo
 * groupings. Each side shows a cluster of activity (lead loops),
 * and the anchor bridges them — the single integration point
 * where review focus converges.
 *
 * Layout:  [ Backend cluster ] ←— Anchor —→ [ Frontend cluster ]
 */

// Cluster internals — small circles suggesting activity
const clusterDots = (cx: number, cy: number) => [
  { x: cx - 22, y: cy - 16 },
  { x: cx + 18, y: cy - 20 },
  { x: cx - 8, y: cy + 4 },
  { x: cx + 24, y: cy + 8 },
  { x: cx - 20, y: cy + 22 },
  { x: cx + 10, y: cy + 24 },
]

const anchorCx = 240
const anchorCy = 130

export default function AnchorIntegration() {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <svg viewBox="0 0 480 260" className="w-full h-auto">
        {/* ── Left cluster: Backend ── */}
        <motion.rect
          x="16" y="50" width="160" height="160" rx="12"
          fill="#f59e0b" fillOpacity="0.03"
          stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.18"
          strokeDasharray="8 5"
          variants={fade} custom={0}
        />
        <motion.text
          x="96" y="76"
          textAnchor="middle" fill="#fafaf9" fontSize="13"
          fontWeight="700" letterSpacing="1"
          variants={fade} custom={0.3}
        >
          Backend
        </motion.text>

        {/* Activity dots — lead work happening inside */}
        {clusterDots(96, 140).map((dot, i) => (
          <g key={`be-${i}`}>
            <motion.circle
              cx={dot.x} cy={dot.y} r="14"
              fill="#f59e0b" fillOpacity="0.04"
              stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2"
              variants={draw} custom={0.5 + i * 0.12}
            />
            <motion.circle
              cx={dot.x} cy={dot.y} r="4"
              fill="#f59e0b" fillOpacity="0.35"
              variants={fade} custom={0.7 + i * 0.12}
            />
          </g>
        ))}

        {/* ── Right cluster: Frontend ── */}
        <motion.rect
          x="304" y="50" width="160" height="160" rx="12"
          fill="#f59e0b" fillOpacity="0.03"
          stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.18"
          strokeDasharray="8 5"
          variants={fade} custom={1.5}
        />
        <motion.text
          x="384" y="76"
          textAnchor="middle" fill="#fafaf9" fontSize="13"
          fontWeight="700" letterSpacing="1"
          variants={fade} custom={1.8}
        >
          Frontend
        </motion.text>

        {/* Activity dots */}
        {clusterDots(384, 140).map((dot, i) => (
          <g key={`fe-${i}`}>
            <motion.circle
              cx={dot.x} cy={dot.y} r="14"
              fill="#f59e0b" fillOpacity="0.04"
              stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2"
              variants={draw} custom={2 + i * 0.12}
            />
            <motion.circle
              cx={dot.x} cy={dot.y} r="4"
              fill="#f59e0b" fillOpacity="0.35"
              variants={fade} custom={2.2 + i * 0.12}
            />
          </g>
        ))}

        {/* ── Central Anchor node ── */}
        {/* Outer glow ring */}
        <motion.circle
          cx={anchorCx} cy={anchorCy} r="32"
          fill="#4ade80" fillOpacity="0.04"
          stroke="#4ade80" strokeWidth="1" strokeOpacity="0.15"
          variants={draw} custom={3}
        />
        {/* Main ring */}
        <motion.circle
          cx={anchorCx} cy={anchorCy} r="22"
          fill="#4ade80" fillOpacity="0.1"
          stroke="#4ade80" strokeWidth="2.5" strokeOpacity="0.55"
          variants={draw} custom={3.3}
        />
        {/* Inner dot */}
        <motion.circle
          cx={anchorCx} cy={anchorCy} r="7"
          fill="#4ade80" fillOpacity="0.6"
          variants={fade} custom={3.6}
        />
        {/* Label above */}
        <motion.text
          x={anchorCx} y="82"
          textAnchor="middle" fill="#4ade80" fontSize="11"
          fontWeight="700" letterSpacing="1.5" fillOpacity="0.8"
          variants={fade} custom={3.8}
        >
          ANCHOR
        </motion.text>

        {/* ── Connection lines: clusters → anchor ── */}
        {/* Backend → Anchor */}
        <motion.line
          x1="176" y1={anchorCy}
          x2={anchorCx - 34} y2={anchorCy}
          stroke="#4ade80" strokeWidth="2" strokeOpacity="0.35"
          markerEnd="url(#ai-arr)"
          variants={draw} custom={4}
        />
        {/* Anchor → Frontend */}
        <motion.line
          x1={anchorCx + 34} y1={anchorCy}
          x2="304" y2={anchorCy}
          stroke="#4ade80" strokeWidth="2" strokeOpacity="0.35"
          markerEnd="url(#ai-arr)"
          variants={draw} custom={4.3}
        />

        {/* ── Review focus indicator ── */}
        <motion.text
          x={anchorCx} y="38"
          textAnchor="middle" fill="#4ade80" fontSize="10"
          fontWeight="600" letterSpacing="1.5" fillOpacity="0.6"
          variants={fade} custom={5}
        >
          REVIEW FOCUS
        </motion.text>
        <motion.line
          x1={anchorCx} y1="44"
          x2={anchorCx} y2="76"
          stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.3"
          markerEnd="url(#ai-arr)"
          variants={draw} custom={5.3}
        />

        {/* ── Bottom annotation ── */}
        <motion.text
          x="240" y="242"
          textAnchor="middle" fill="#a8a29e" fontSize="10"
          variants={fade} custom={6}
        >
          review targets the integration, not every line
        </motion.text>

        {/* ── Markers ── */}
        <defs>
          <marker id="ai-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0 0 L7 2.5 L0 5" fill="none" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.5" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  )
}
