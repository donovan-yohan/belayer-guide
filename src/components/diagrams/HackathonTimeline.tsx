import { motion } from 'framer-motion'
import { draw, fade, DiagramWrapper } from './variants'

const workstreams = [
  { label: 'Finance', y: 65, dots: [0.25, 0.55, 0.85] },
  { label: 'CLI', y: 95, dots: [0.2, 0.5, 0.75, 0.95] },
  { label: 'Clickhouse', y: 125, dots: [0.3, 0.6, 0.9] },
  { label: 'Mobile', y: 155, dots: [0.15, 0.45, 0.7] },
]

const humanX = 28
const humanY = 110
const streamStartX = 58
const streamEndX = 185

export default function HackathonTimeline() {
  return (
    <DiagramWrapper>
      <svg viewBox="-15 0 215 200" className="w-full h-full">
        {/* Human node */}
        <motion.circle
          cx={humanX}
          cy={humanY}
          r="10"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.7"
          variants={draw}
          custom={0}
        />
        <motion.circle
          cx={humanX}
          cy={humanY}
          r="4"
          fill="#f59e0b"
          fillOpacity="0.8"
          variants={fade}
          custom={0.2}
        />
        <motion.text
          x={humanX}
          y={humanY + 18}
          textAnchor="middle"
          fill="#f59e0b"
          fillOpacity="0.6"
          fontSize="6"
          fontFamily="monospace"
          variants={fade}
          custom={0.3}
        >
          Human
        </motion.text>

        {/* Fan lines from human to each workstream */}
        {workstreams.map((ws, i) => (
          <motion.line
            key={`fan-${i}`}
            x1={humanX + 10}
            y1={humanY}
            x2={streamStartX}
            y2={ws.y}
            stroke="#f59e0b"
            strokeWidth="1"
            strokeOpacity="0.25"
            variants={draw}
            custom={0.5 + i * 0.15}
          />
        ))}

        {/* Workstream lines and milestone dots */}
        {workstreams.map((ws, i) => (
          <g key={`ws-${i}`}>
            <motion.line
              x1={streamStartX}
              y1={ws.y}
              x2={streamEndX}
              y2={ws.y}
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity="0.3"
              variants={draw}
              custom={1 + i * 0.2}
            />
            {ws.dots.map((pos, j) => {
              const cx = streamStartX + pos * (streamEndX - streamStartX)
              return (
                <motion.circle
                  key={`dot-${i}-${j}`}
                  cx={cx}
                  cy={ws.y}
                  r="2.5"
                  fill="#f59e0b"
                  fillOpacity={0.4 + j * 0.15}
                  variants={fade}
                  custom={1.5 + i * 0.2 + j * 0.08}
                />
              )
            })}
            <motion.text
              x={streamStartX - 4}
              y={ws.y + 3}
              textAnchor="end"
              fill="#f59e0b"
              fillOpacity="0.55"
              fontSize="7"
              fontFamily="monospace"
              variants={fade}
              custom={0.8 + i * 0.15}
            >
              {ws.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </DiagramWrapper>
  )
}
