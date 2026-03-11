import { motion } from 'framer-motion'
import { draw, fade, DiagramWrapper } from './variants'

export default function ParallelLeads() {
  const lanes = [
    { x: 50, label: 'Lead 1' },
    { x: 100, label: 'Lead 2' },
    { x: 150, label: 'Lead 3' },
  ]

  return (
    <DiagramWrapper>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Setter node at top center */}
        <motion.circle cx="100" cy="30" r="12" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" variants={draw} custom={0} />
        <motion.circle cx="100" cy="30" r="5" fill="#f59e0b" fillOpacity="0.8" variants={fade} custom={0.2} />
        <motion.text x="100" y="18" textAnchor="middle" fontSize="7" fill="#f59e0b" fillOpacity="0.7" variants={fade} custom={0.3}>Setter</motion.text>

        {/* Connecting lines from setter to each lane */}
        {lanes.map((lane, i) => (
          <motion.line
            key={`conn-${i}`}
            x1="100" y1="42"
            x2={lane.x} y2="80"
            stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3"
            variants={draw} custom={0.5 + i * 0.15}
          />
        ))}

        {/* Dashed horizontal independence lines */}
        {[90, 120, 150].map((y, i) => (
          <motion.line
            key={`dash-${y}`}
            x1="25" y1={y} x2="175" y2={y}
            stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="4 4"
            variants={draw} custom={0.4 + i * 0.1}
          />
        ))}

        {/* Vertical lane lines */}
        {lanes.map((lane, i) => (
          <motion.line
            key={`lane-${i}`}
            x1={lane.x} y1="80"
            x2={lane.x} y2="155"
            stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2"
            variants={draw} custom={1 + i * 0.2}
          />
        ))}

        {/* Loop icons — small circles representing harness loops */}
        {lanes.map((lane, i) => (
          <g key={`loop-${i}`}>
            <motion.circle
              cx={lane.x} cy="110"
              r="10" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.45"
              variants={draw} custom={1.4 + i * 0.2}
            />
            <motion.circle
              cx={lane.x} cy="110"
              r="3" fill="#f59e0b" fillOpacity="0.6"
              variants={fade} custom={1.6 + i * 0.15}
            />
          </g>
        ))}

        {/* Lane labels */}
        {lanes.map((lane, i) => (
          <motion.text
            key={`label-${i}`}
            x={lane.x} y="168"
            textAnchor="middle" fontSize="8" fill="#f59e0b" fillOpacity={0.5 + i * 0.1}
            variants={fade} custom={2 + i * 0.1}
          >
            {lane.label}
          </motion.text>
        ))}
      </svg>
    </DiagramWrapper>
  )
}
