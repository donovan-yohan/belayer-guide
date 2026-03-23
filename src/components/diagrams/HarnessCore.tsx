import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.65, delay: i * 0.13 }, opacity: { duration: 0.2, delay: i * 0.13 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.13 },
  }),
}

const boxW = 130
const boxH = 52

// Left column: "without harness" centered at x=100
// Right column: "with harness" centered at x=260

const leftCx = 100
const rightCx = 260

export default function HarnessCore() {
  return (
    <motion.div
      className="w-full max-w-[400px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 360 320" className="w-full h-auto">

        {/* ── LEFT COLUMN: without harness ── */}

        {/* Tilted / unstable ORCHESTRATOR box */}
        <motion.g variants={fade} custom={0}>
          <g transform={`rotate(10, ${leftCx}, 110)`}>
            <rect
              x={leftCx - boxW / 2}
              y={84}
              width={boxW}
              height={boxH}
              rx={8}
              fill="#ef4444"
              fillOpacity="0.07"
              stroke="#ef4444"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeDasharray="6 4"
            />
            <text
              x={leftCx}
              y={104}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fontWeight="700"
              fill="#fafaf9"
              fillOpacity="0.6"
              letterSpacing="0.05em"
            >
              ORCHESTRATOR
            </text>
            <text
              x={leftCx}
              y={122}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fill="#ef4444"
              fillOpacity="0.5"
            >
              unstable
            </text>
          </g>
        </motion.g>

        {/* Warning / X marks on left side */}
        {[
          { x: leftCx - 44, y: 72 },
          { x: leftCx + 38, y: 68 },
          { x: leftCx - 28, y: 160 },
        ].map((pos, i) => (
          <motion.text
            key={`x-${i}`}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="13"
            fill="#ef4444"
            fillOpacity="0.55"
            variants={fade}
            custom={i * 0.3 + 0.5}
          >
            ✕
          </motion.text>
        ))}

        {/* Left divider line */}
        <motion.line
          x1={leftCx - boxW / 2 - 4}
          y1={195}
          x2={leftCx + boxW / 2 + 4}
          y2={195}
          stroke="#ef4444"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="4 4"
          variants={draw}
          custom={1.5}
        />

        {/* Left label */}
        <motion.text
          x={leftCx}
          y={220}
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="9"
          fontWeight="500"
          letterSpacing="0.08em"
          variants={fade}
          custom={2}
        >
          without harness
        </motion.text>

        {/* ── CENTER DIVIDER ── */}
        <motion.line
          x1={182}
          y1={60}
          x2={182}
          y2={240}
          stroke="#a8a29e"
          strokeWidth="1"
          strokeOpacity="0.15"
          variants={draw}
          custom={0.4}
        />

        {/* ── RIGHT COLUMN: with harness ── */}

        {/* HARNESS foundation box at bottom — highlighted */}
        <motion.g variants={fade} custom={2.2}>
          <rect
            x={rightCx - boxW / 2}
            y={186}
            width={boxW}
            height={boxH}
            rx={8}
            fill="#f59e0b"
            fillOpacity="0.15"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeOpacity="0.7"
          />
          <text
            x={rightCx}
            y={206}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fontWeight="700"
            fill="#f59e0b"
            fillOpacity="0.95"
            letterSpacing="0.06em"
          >
            HARNESS
          </text>
          <text
            x={rightCx}
            y={224}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="#f59e0b"
            fillOpacity="0.55"
          >
            stable foundation
          </text>
        </motion.g>

        {/* Connecting line between right ORCHESTRATOR and HARNESS */}
        <motion.line
          x1={rightCx}
          y1={138}
          x2={rightCx}
          y2={184}
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          variants={draw}
          custom={3}
        />

        {/* Right ORCHESTRATOR box — stable, upright */}
        <motion.g variants={fade} custom={2.8}>
          <rect
            x={rightCx - boxW / 2}
            y={86}
            width={boxW}
            height={boxH}
            rx={8}
            fill="#4ade80"
            fillOpacity="0.08"
            stroke="#4ade80"
            strokeWidth="1.5"
            strokeOpacity="0.55"
          />
          <text
            x={rightCx}
            y={106}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
            fontWeight="700"
            fill="#fafaf9"
            fillOpacity="0.85"
            letterSpacing="0.05em"
          >
            ORCHESTRATOR
          </text>
          <text
            x={rightCx}
            y={124}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fill="#4ade80"
            fillOpacity="0.55"
          >
            stable
          </text>
        </motion.g>

        {/* Checkmark indicators on right side */}
        {[
          { x: rightCx - 44, y: 72 },
          { x: rightCx + 40, y: 68 },
          { x: rightCx + 30, y: 162 },
        ].map((pos, i) => (
          <motion.text
            key={`check-${i}`}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="13"
            fill="#4ade80"
            fillOpacity="0.6"
            variants={fade}
            custom={i * 0.3 + 3.2}
          >
            ✓
          </motion.text>
        ))}

        {/* Right label */}
        <motion.text
          x={rightCx}
          y={260}
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="9"
          fontWeight="500"
          letterSpacing="0.08em"
          variants={fade}
          custom={4}
        >
          with harness
        </motion.text>

        {/* Column headers */}
        <motion.text
          x={leftCx}
          y={52}
          textAnchor="middle"
          fill="#ef4444"
          fontSize="9"
          fontWeight="600"
          fillOpacity="0.5"
          letterSpacing="0.1em"
          variants={fade}
          custom={0.1}
        >
          WITHOUT
        </motion.text>
        <motion.text
          x={rightCx}
          y={52}
          textAnchor="middle"
          fill="#4ade80"
          fontSize="9"
          fontWeight="600"
          fillOpacity="0.6"
          letterSpacing="0.1em"
          variants={fade}
          custom={0.2}
        >
          WITH
        </motion.text>
      </svg>
    </motion.div>
  )
}
