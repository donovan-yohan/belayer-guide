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

export default function ClearStartEndDiagram() {
  return (
    <motion.div
      className="w-full max-w-[480px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 200" className="w-full h-auto">
        {/* Good example - single tool with clear start and end */}
        {/* Input arrow */}
        <motion.line x1="20" y1="70" x2="68" y2="70" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#cse-arrow-green)" variants={draw} custom={1} />
        <motion.text x="44" y="58" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="600" letterSpacing="1" variants={fade} custom={0.5}>
          INPUT
        </motion.text>

        {/* Tool box */}
        <motion.rect x="72" y="38" width="160" height="64" rx="6" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={fade} custom={2} />

        {/* Green start dot */}
        <motion.circle cx="88" cy="50" r="5" fill="#4ade80" fillOpacity="0.8" variants={fade} custom={2.5} />
        <motion.text x="88" y="120" textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="600" letterSpacing="1" variants={fade} custom={3}>
          START
        </motion.text>

        {/* Tool label */}
        <motion.text x="152" y="76" textAnchor="middle" fill="#fafaf9" fontSize="13" fontWeight="700" variants={fade} custom={3}>
          Tool
        </motion.text>

        {/* Amber end dot */}
        <motion.circle cx="216" cy="50" r="5" fill="#f59e0b" fillOpacity="0.8" variants={fade} custom={3.5} />
        <motion.text x="216" y="120" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="600" letterSpacing="1" variants={fade} custom={4}>
          END
        </motion.text>

        {/* Output arrow */}
        <motion.line x1="236" y1="70" x2="284" y2="70" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.6" markerEnd="url(#cse-arrow-amber)" variants={draw} custom={4.5} />
        <motion.text x="260" y="58" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="600" letterSpacing="1" variants={fade} custom={4}>
          OUTPUT
        </motion.text>

        {/* Divider */}
        <motion.text x="325" y="74" textAnchor="middle" fill="#a8a29e" fontSize="12" fontWeight="700" variants={fade} custom={5}>
          vs
        </motion.text>

        {/* Bad example - monolithic blob */}
        <motion.rect x="355" y="30" width="110" height="80" rx="6" fill="#f59e0b" fillOpacity="0.04" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.15" variants={fade} custom={5.5} />

        {/* Tangled arrows inside */}
        <motion.path d="M 370 50 Q 410 40 430 55 Q 445 70 415 80 Q 380 90 375 65 Q 370 45 400 50 Q 440 55 440 75" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={6} />
        <motion.path d="M 390 45 Q 420 80 380 80 Q 365 70 395 60 Q 430 50 440 70" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={draw} custom={6.3} />

        {/* Question marks for undefined start/end */}
        <motion.text x="365" y="50" fill="#a8a29e" fontSize="10" fontWeight="600" fillOpacity="0.5" variants={fade} custom={6.5}>
          ?
        </motion.text>
        <motion.text x="445" y="50" fill="#a8a29e" fontSize="10" fontWeight="600" fillOpacity="0.5" variants={fade} custom={6.8}>
          ?
        </motion.text>

        <motion.text x="410" y="80" textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="600" variants={fade} custom={6.5}>
          EVERYTHING
        </motion.text>

        {/* Labels */}
        <motion.text x="152" y="155" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={7}>
          BOUNDED
        </motion.text>
        <motion.text x="410" y="145" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600" letterSpacing="1.5" variants={fade} custom={7.5}>
          UNBOUNDED
        </motion.text>

        {/* Connecting lines from dots to labels */}
        <motion.line x1="88" y1="102" x2="88" y2="126" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" variants={draw} custom={3.2} />
        <motion.line x1="216" y1="102" x2="216" y2="126" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" variants={draw} custom={4.2} />

        <defs>
          <marker id="cse-arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.6" />
          </marker>
          <marker id="cse-arrow-amber" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.6" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  )
}
