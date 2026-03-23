import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: i * 0.13 }, opacity: { duration: 0.2, delay: i * 0.13 } },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.13 },
  }),
}

const boxW = 92
const boxH = 50
const boxRx = 8
const centerY = 90

const jobs = [
  { label: 'Spec', input: 'idea', output: 'spec.md', x: 30 },
  { label: 'Plan', input: 'spec.md', output: 'plan', x: 150 },
  { label: 'Code', input: 'plan', output: 'commit', x: 270 },
  { label: 'Review', input: 'commit', output: 'quality gate', x: 390 },
]

// Arrow gap between boxes
const arrowStartOffset = boxW + 4
const arrowEndOffset = 4
const arrowY = centerY

export default function SequentialJobs() {
  return (
    <motion.div
      className="w-full max-w-[560px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 520 180" className="w-full h-auto">

        {/* Arrows between boxes */}
        {jobs.slice(0, -1).map((job, i) => {
          const x1 = job.x + arrowStartOffset
          const x2 = jobs[i + 1].x - arrowEndOffset
          const midX = (x1 + x2) / 2
          return (
            <g key={`arrow-${i}`}>
              <motion.line
                x1={x1}
                y1={arrowY}
                x2={x2}
                y2={arrowY}
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                variants={draw}
                custom={i * 0.5 + 0.6}
              />
              {/* Arrowhead */}
              <motion.path
                d={`M ${midX - 4} ${arrowY - 4} L ${midX + 2} ${arrowY} L ${midX - 4} ${arrowY + 4}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={fade}
                custom={i * 0.5 + 0.8}
              />
            </g>
          )
        })}

        {/* Job boxes with input/output labels */}
        {jobs.map((job, i) => {
          const bx = job.x
          const by = centerY - boxH / 2
          return (
            <motion.g key={job.label} variants={fade} custom={i * 0.5}>
              {/* Input label above */}
              <text
                x={bx + boxW / 2}
                y={by - 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fill="#a8a29e"
                fillOpacity="0.8"
              >
                {job.input}
              </text>

              {/* Box */}
              <rect
                x={bx}
                y={by}
                width={boxW}
                height={boxH}
                rx={boxRx}
                fill="#f59e0b"
                fillOpacity="0.08"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />

              {/* Box label */}
              <text
                x={bx + boxW / 2}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="13"
                fontWeight="700"
                fill="#fafaf9"
                fillOpacity="0.85"
                letterSpacing="0.04em"
              >
                {job.label}
              </text>

              {/* Output label below */}
              <text
                x={bx + boxW / 2}
                y={by + boxH + 13}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fontWeight="600"
                fill="#f59e0b"
                fillOpacity="0.75"
              >
                {job.output}
              </text>
            </motion.g>
          )
        })}

        {/* Bottom label */}
        <motion.text
          x="260"
          y="160"
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="9"
          fontWeight="500"
          letterSpacing="0.1em"
          variants={fade}
          custom={4}
        >
          FLEXIBLE SEQUENCES · ANY OUTPUT TYPE
        </motion.text>
      </svg>
    </motion.div>
  )
}
