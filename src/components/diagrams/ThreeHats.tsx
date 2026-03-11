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

export default function ThreeHats() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 450 200" className="w-full h-auto">
        {/* PLAN — compass */}
        <motion.circle cx="75" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={0} />
        <motion.line x1="75" y1="55" x2="75" y2="125" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1} />
        <motion.line x1="40" y1="90" x2="110" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={1.2} />
        <motion.circle cx="75" cy="90" r="4" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={1.5} />
        <motion.path d="M 75 55 L 71 65 L 79 65 Z" fill="#f59e0b" fillOpacity="0.5" variants={fade} custom={1.8} />
        <motion.text x="75" y="155" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={2}>
          PLAN
        </motion.text>

        {/* BUILD — code brackets */}
        <motion.circle cx="225" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={2.5} />
        <motion.path d="M 212 70 L 202 90 L 212 110" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" variants={draw} custom={3} />
        <motion.path d="M 238 70 L 248 90 L 238 110" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" variants={draw} custom={3.2} />
        <motion.line x1="220" y1="110" x2="230" y2="70" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35" variants={draw} custom={3.5} />
        <motion.text x="225" y="155" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={4}>
          BUILD
        </motion.text>

        {/* REVIEW — eye */}
        <motion.circle cx="375" cy="90" r="40" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={4.5} />
        <motion.path d="M 350 90 Q 362 70 375 70 Q 388 70 400 90" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.45" variants={draw} custom={5} />
        <motion.path d="M 350 90 Q 362 110 375 110 Q 388 110 400 90" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.45" variants={draw} custom={5.2} />
        <motion.circle cx="375" cy="90" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" variants={draw} custom={5.5} />
        <motion.circle cx="375" cy="90" r="3" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={5.8} />
        <motion.text x="375" y="155" textAnchor="middle" fill="#fafaf9" fontSize="12" fontWeight="600" variants={fade} custom={6}>
          REVIEW
        </motion.text>
      </svg>
    </motion.div>
  )
}
