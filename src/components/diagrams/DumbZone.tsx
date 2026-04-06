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

// Chart dimensions
const LEFT = 50
const RIGHT = 440
const TOP = 30
const BOTTOM = 170
const THRESHOLD_X = 280

export default function DumbZone() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 220" className="w-full h-auto">
        {/* Y axis */}
        <motion.line
          x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM}
          stroke="#a8a29e" strokeWidth="1" strokeOpacity="0.4"
          variants={draw} custom={0}
        />
        {/* X axis */}
        <motion.line
          x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM}
          stroke="#a8a29e" strokeWidth="1" strokeOpacity="0.4"
          variants={draw} custom={0.5}
        />

        {/* Axis labels */}
        <motion.text x={LEFT - 8} y={TOP - 8} textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="500" variants={fade} custom={1}>
          performance
        </motion.text>
        <motion.text x={RIGHT + 4} y={BOTTOM + 14} textAnchor="end" fill="#a8a29e" fontSize="9" fontWeight="500" variants={fade} custom={1}>
          context loaded
        </motion.text>

        {/* Performance curve — rises then falls */}
        <motion.path
          d={`M ${LEFT} ${BOTTOM - 10} C ${LEFT + 60} ${BOTTOM - 60}, ${THRESHOLD_X - 80} ${TOP + 10}, ${THRESHOLD_X} ${TOP + 15} C ${THRESHOLD_X + 40} ${TOP + 20}, ${THRESHOLD_X + 80} ${TOP + 60}, ${RIGHT} ${BOTTOM - 30}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeOpacity="0.8"
          variants={draw} custom={2}
        />

        {/* Threshold dashed line */}
        <motion.line
          x1={THRESHOLD_X} y1={TOP} x2={THRESHOLD_X} y2={BOTTOM}
          stroke="#ef4444" strokeWidth="1" strokeOpacity="0.5"
          strokeDasharray="4 3"
          variants={draw} custom={4}
        />

        {/* Good zone fill */}
        <motion.rect
          x={LEFT + 1} y={TOP}
          width={THRESHOLD_X - LEFT - 1} height={BOTTOM - TOP}
          fill="#4ade80" fillOpacity="0.04"
          variants={fade} custom={3}
        />

        {/* Dumb zone fill */}
        <motion.rect
          x={THRESHOLD_X} y={TOP}
          width={RIGHT - THRESHOLD_X} height={BOTTOM - TOP}
          fill="#ef4444" fillOpacity="0.06"
          variants={fade} custom={5}
        />

        {/* Zone labels */}
        <motion.text
          x={(LEFT + THRESHOLD_X) / 2} y={BOTTOM + 20}
          textAnchor="middle" fill="#4ade80" fontSize="9" fontWeight="600" letterSpacing="1"
          variants={fade} custom={5}
        >
          PRODUCTIVE
        </motion.text>
        <motion.text
          x={(THRESHOLD_X + RIGHT) / 2} y={BOTTOM + 20}
          textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="600" letterSpacing="1"
          variants={fade} custom={6}
        >
          THE DUMB ZONE
        </motion.text>

        {/* Subtitle */}
        <motion.text
          x={240} y={205}
          textAnchor="middle" fill="#a8a29e" fontSize="9" fontWeight="500"
          variants={fade} custom={7}
        >
          more context helps — until it doesn't
        </motion.text>
      </svg>
    </motion.div>
  )
}
