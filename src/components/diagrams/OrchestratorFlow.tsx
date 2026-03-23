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

const tasks = [
  { label: 'ticket', y: 72 },
  { label: 'PR', y: 92 },
  { label: 'bug', y: 112 },
]

export default function OrchestratorFlow() {
  return (
    <motion.div
      className="w-full max-w-[560px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 520 200" className="w-full h-auto">
        {/* ── LEFT: crescent moon ── */}
        {/* Moon outer circle (clipped by inner white-fill) */}
        <motion.circle cx="70" cy="90" r="28" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={fade} custom={0} />
        <motion.path
          d="M 70 62 A 28 28 0 1 0 70 118 A 18 18 0 1 1 70 62 Z"
          fill="#f59e0b"
          fillOpacity="0.45"
          variants={fade}
          custom={0.5}
        />
        {/* Small star dots */}
        <motion.circle cx="100" cy="68" r="1.5" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={0.8} />
        <motion.circle cx="106" cy="80" r="1" fill="#f59e0b" fillOpacity="0.4" variants={fade} custom={0.9} />
        <motion.circle cx="96" cy="76" r="1" fill="#f59e0b" fillOpacity="0.35" variants={fade} custom={1} />
        <motion.text x="70" y="143" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={1.2}>
          nightshift
        </motion.text>

        {/* ── ARROW 1 ── */}
        <motion.line x1="112" y1="90" x2="162" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.5} />
        <motion.path d="M 156 85 L 164 90 L 156 95" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={1.8} />

        {/* ── CENTER: task queue cards ── */}
        {tasks.map((task, i) => (
          <motion.g key={task.label} variants={fade} custom={2 + i * 0.2}>
            <rect
              x="168"
              y={task.y}
              width="100"
              height="18"
              rx="4"
              fill="#f59e0b"
              fillOpacity="0.08"
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity={0.35 - i * 0.06}
            />
            <text
              x="218"
              y={task.y + 13}
              textAnchor="middle"
              fill="#f59e0b"
              fillOpacity="0.7"
              fontSize="10"
            >
              {task.label}
            </text>
          </motion.g>
        ))}
        <motion.text x="218" y="148" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={2.8}>
          task queue
        </motion.text>

        {/* ── ARROW 2 ── */}
        <motion.line x1="280" y1="90" x2="330" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={3} />
        <motion.path d="M 324 85 L 332 90 L 324 95" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={3.3} />

        {/* ── RIGHT: checkmark in circle ── */}
        <motion.circle cx="388" cy="90" r="28" fill="#4ade80" fillOpacity="0.08" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={3.6} />
        <motion.path
          d="M 372 90 L 383 101 L 404 79"
          fill="none"
          stroke="#4ade80"
          strokeWidth="2.5"
          strokeOpacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
          custom={4}
        />
        <motion.text x="388" y="143" textAnchor="middle" fill="#a8a29e" fontSize="10" variants={fade} custom={4.3}>
          results
        </motion.text>

        {/* ── BOTTOM LABEL ── */}
        <motion.text x="260" y="175" textAnchor="middle" fill="#fafaf9" fontSize="11" fontWeight="600" letterSpacing="1" variants={fade} custom={5}>
          RUNS WHILE YOU SLEEP
        </motion.text>
      </svg>
    </motion.div>
  )
}
