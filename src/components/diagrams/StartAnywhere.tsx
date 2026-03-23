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

const steps = [
  { x: 30, label: 'Spec' },
  { x: 150, label: 'Plan' },
  { x: 270, label: 'Code' },
  { x: 390, label: 'Review' },
]

const entryPoints = [
  { stepIndex: 0, entryLabel: 'write a spec' },
  { stepIndex: 1, entryLabel: 'write a plan' },
  { stepIndex: 2, entryLabel: 'write code' },
]

export default function StartAnywhere() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 520 240" className="w-full h-auto">
        <defs>
          <marker id="sa-chain-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" />
          </marker>
          <marker id="sa-entry-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.7" />
          </marker>
        </defs>

        {/* Chain boxes */}
        {steps.map((step, i) => (
          <g key={step.label}>
            <motion.rect
              x={step.x}
              y={138}
              width={90}
              height={44}
              rx={6}
              fill="#f59e0b"
              fillOpacity="0.08"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              variants={fade}
              custom={i * 1.5}
            />
            <motion.text
              x={step.x + 45}
              y={165}
              textAnchor="middle"
              fill="#fafaf9"
              fontSize="12"
              fontWeight="600"
              variants={fade}
              custom={i * 1.5 + 0.5}
            >
              {step.label}
            </motion.text>
          </g>
        ))}

        {/* Chain arrows between boxes */}
        {steps.slice(0, -1).map((step, i) => (
          <motion.line
            key={`chain-${i}`}
            x1={step.x + 90}
            y1={160}
            x2={steps[i + 1].x}
            y2={160}
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            markerEnd="url(#sa-chain-arrow)"
            variants={draw}
            custom={i * 1.5 + 1}
          />
        ))}

        {/* Entry point arrows and labels */}
        {entryPoints.map((entry, i) => {
          const step = steps[entry.stepIndex]
          const cx = step.x + 45
          return (
            <g key={`entry-${i}`}>
              {/* Person icon at top */}
              {/* Head */}
              <motion.circle
                cx={cx}
                cy={28}
                r={7}
                fill="none"
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                variants={fade}
                custom={6 + i * 1.2}
              />
              {/* Body */}
              <motion.path
                d={`M ${cx - 8} 46 Q ${cx} 38 ${cx + 8} 46`}
                fill="none"
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                strokeLinecap="round"
                variants={draw}
                custom={6.5 + i * 1.2}
              />

              {/* Vertical entry arrow */}
              <motion.line
                x1={cx}
                y1={52}
                x2={cx}
                y2={136}
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                markerEnd="url(#sa-entry-arrow)"
                variants={draw}
                custom={7 + i * 1.2}
              />

              {/* Entry label */}
              <motion.text
                x={cx + 14}
                y={100}
                fill="#4ade80"
                fontSize="9"
                fontWeight="500"
                variants={fade}
                custom={7.5 + i * 1.2}
              >
                {entry.entryLabel}
              </motion.text>
            </g>
          )
        })}

        {/* Bottom label */}
        <motion.text
          x="260"
          y="210"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="10"
          fontWeight="600"
          letterSpacing="1.5"
          variants={fade}
          custom={12}
        >
          START FROM ANY STEP
        </motion.text>

        {/* Subtitle */}
        <motion.text
          x="260"
          y="228"
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="9"
          fontWeight="500"
          variants={fade}
          custom={13}
        >
          inject your work at the right moment
        </motion.text>
      </svg>
    </motion.div>
  )
}
