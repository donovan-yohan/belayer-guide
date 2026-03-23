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

export default function ThreeRoles() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 450 200" className="w-full h-auto">
        {/* ORCHESTRATOR — gear icon */}
        <motion.circle cx="75" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0} />
        {/* Gear outer ring */}
        <motion.circle cx="75" cy="90" r="18" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.45" variants={draw} custom={0.8} />
        {/* Gear inner hub */}
        <motion.circle cx="75" cy="90" r="6" fill="#f59e0b" fillOpacity="0.4" variants={fade} custom={1.2} />
        {/* Gear teeth — 6 teeth as small rects rotated around center */}
        {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
          const rad = (angle * Math.PI) / 180
          const tx = 75 + Math.cos(rad) * 22
          const ty = 90 + Math.sin(rad) * 22
          return (
            <motion.rect
              key={angle}
              x={tx - 3}
              y={ty - 5}
              width={6}
              height={10}
              rx={1}
              fill="#f59e0b"
              fillOpacity="0.5"
              transform={`rotate(${angle}, ${tx}, ${ty})`}
              variants={fade}
              custom={1 + idx * 0.1}
            />
          )
        })}
        <motion.text x="75" y="150" textAnchor="middle" fill="#fafaf9" fontSize="10" fontWeight="600" variants={fade} custom={2.5}>
          ORCHESTRATOR
        </motion.text>

        {/* HARNESS — open book icon */}
        <motion.circle cx="225" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={3} />
        {/* Book spine */}
        <motion.line x1="225" y1="72" x2="225" y2="112" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" variants={draw} custom={3.5} />
        {/* Left page */}
        <motion.path d="M 200 74 Q 212 70 225 72 L 225 112 Q 212 114 200 110 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" strokeLinejoin="round" variants={draw} custom={3.8} />
        {/* Right page */}
        <motion.path d="M 225 72 Q 238 70 250 74 L 250 110 Q 238 114 225 112 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" strokeLinejoin="round" variants={draw} custom={4} />
        {/* Left page lines */}
        <motion.line x1="205" y1="82" x2="220" y2="80" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={4.3} />
        <motion.line x1="205" y1="90" x2="220" y2="89" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={4.4} />
        <motion.line x1="205" y1="98" x2="220" y2="98" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={4.5} />
        {/* Right page lines */}
        <motion.line x1="230" y1="80" x2="245" y2="82" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={4.6} />
        <motion.line x1="230" y1="89" x2="245" y2="90" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={4.7} />
        <motion.line x1="230" y1="98" x2="245" y2="98" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={4.8} />
        <motion.text x="225" y="150" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={5}>
          HARNESS
        </motion.text>

        {/* AGENT — terminal icon */}
        <motion.circle cx="375" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={5.5} />
        {/* Terminal window outer rect */}
        <motion.rect x="349" y="71" width="52" height="38" rx="4" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={6} />
        {/* Terminal title bar */}
        <motion.line x1="349" y1="80" x2="401" y2="80" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={6.3} />
        {/* Prompt > */}
        <motion.path d="M 357 89 L 363 93 L 357 97" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={6.6} />
        {/* Cursor _ */}
        <motion.line x1="367" y1="97" x2="374" y2="97" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" variants={draw} custom={7} />
        <motion.text x="375" y="150" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={7.5}>
          AGENT
        </motion.text>
      </svg>
    </motion.div>
  )
}
