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

export default function LeverageHeuristic() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 220" className="w-full h-auto">
        <defs>
          <marker id="lh-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
          </marker>
        </defs>

        {/* Left box — HARNESS */}
        <motion.rect x="20" y="30" width="190" height="140" rx="10" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={fade} custom={0} />

        {/* Person icon (left) — head circle + body lines */}
        <motion.circle cx="115" cy="68" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" variants={draw} custom={1} />
        <motion.line x1="115" y1="78" x2="115" y2="100" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" variants={draw} custom={1.3} />
        <motion.line x1="115" y1="84" x2="100" y2="94" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.5} />
        <motion.line x1="115" y1="84" x2="130" y2="94" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.6} />
        <motion.line x1="115" y1="100" x2="105" y2="114" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.7} />
        <motion.line x1="115" y1="100" x2="125" y2="114" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.8} />

        {/* Terminal >_ icon (left) */}
        <motion.rect x="88" y="118" width="54" height="28" rx="4" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={2} />
        <motion.text x="102" y="136" fill="#f59e0b" fontSize="11" fontFamily="monospace" fillOpacity="0.7" variants={fade} custom={2.2}>
          {'>_'}
        </motion.text>

        {/* HARNESS label */}
        <motion.text x="115" y="24" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700" letterSpacing="1.5" variants={fade} custom={0.5}>
          HARNESS
        </motion.text>

        {/* Sublabel left */}
        <motion.text x="115" y="185" textAnchor="middle" fill="#a8a29e" fontSize="8" fontWeight="500" variants={fade} custom={3}>
          manual · in terminal · attended
        </motion.text>

        {/* Center dashed divider */}
        <motion.line x1="240" y1="20" x2="240" y2="200" stroke="#a8a29e" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="5 4" variants={draw} custom={3.5} />

        {/* Right box — ORCHESTRATOR */}
        <motion.rect x="270" y="30" width="190" height="140" rx="10" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" variants={fade} custom={4} />

        {/* Moon / automation icon (right) — crescent */}
        <motion.path
          d="M 365 58 A 22 22 0 1 1 365 102 A 14 14 0 1 0 365 58 Z"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          variants={draw}
          custom={4.5}
        />
        {/* Small stars around moon */}
        <motion.circle cx="396" cy="62" r="2" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={5} />
        <motion.circle cx="404" cy="75" r="1.5" fill="#f59e0b" fillOpacity="0.35" variants={fade} custom={5.2} />
        <motion.circle cx="394" cy="90" r="1.5" fill="#f59e0b" fillOpacity="0.35" variants={fade} custom={5.3} />

        {/* Gear/cog hint — simple circle with tick marks */}
        <motion.circle cx="365" cy="80" r="0" fill="#f59e0b" fillOpacity="0" variants={fade} custom={0} />

        {/* ORCHESTRATOR label */}
        <motion.text x="365" y="24" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="700" letterSpacing="1.5" variants={fade} custom={4.2}>
          ORCHESTRATOR
        </motion.text>

        {/* Sublabel right */}
        <motion.text x="365" y="185" textAnchor="middle" fill="#a8a29e" fontSize="8" fontWeight="500" variants={fade} custom={5.5}>
          automatic · no terminal · unattended
        </motion.text>

        {/* Bottom label */}
        <motion.text x="240" y="212" textAnchor="middle" fill="#fafaf9" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={6}>
          SAME JOURNEY, DIFFERENT DRIVER
        </motion.text>
      </svg>
    </motion.div>
  )
}
