import { motion } from 'framer-motion'
import { draw, fade, DiagramWrapper } from './variants'

export default function AltitudeProgression() {
  const platforms = [
    { y: 165, label: 'PR Plugin', custom: 0 },
    { y: 110, label: 'Harness', custom: 1 },
    { y: 55, label: 'Belayer', custom: 2 },
  ]

  const pathDots = [
    { x: 90, y: 150 },
    { x: 100, y: 135 },
    { x: 115, y: 125 },
    { x: 105, y: 115 },
    { x: 95, y: 95 },
    { x: 105, y: 80 },
    { x: 115, y: 70 },
    { x: 100, y: 60 },
  ]

  return (
    <DiagramWrapper>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Winding rope/path connecting levels bottom to top */}
        <motion.path
          d="M 100 170 Q 85 155 90 140 Q 100 125 115 118 Q 120 113 105 105 Q 90 97 95 82 Q 103 68 115 62 Q 118 58 100 52"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          variants={draw}
          custom={0}
        />

        {/* Platforms/ledges */}
        {platforms.map(({ y, custom }) => (
          <motion.line
            key={y}
            x1="30"
            y1={y}
            x2="170"
            y2={y}
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            variants={draw}
            custom={custom + 0.5}
          />
        ))}

        {/* Subtle platform fill indicators */}
        {platforms.map(({ y, custom }) => (
          <motion.line
            key={`fill-${y}`}
            x1="30"
            y1={y + 2}
            x2="170"
            y2={y + 2}
            stroke="#f59e0b"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            variants={draw}
            custom={custom + 0.6}
          />
        ))}

        {/* Dots along the path between levels */}
        {pathDots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="1.5"
            fill="#f59e0b"
            fillOpacity="0.4"
            variants={fade}
            custom={1.5 + i * 0.1}
          />
        ))}

        {/* Anchor dots on each platform */}
        {platforms.map(({ y, custom }) => (
          <motion.circle
            key={`anchor-${y}`}
            cx="100"
            cy={y}
            r="3.5"
            fill="#f59e0b"
            fillOpacity="0.7"
            variants={fade}
            custom={custom + 1}
          />
        ))}

        {/* Labels */}
        {platforms.map(({ y, label, custom }) => (
          <motion.text
            key={`label-${y}`}
            x="100"
            y={y - 8}
            textAnchor="middle"
            fill="#f59e0b"
            fontSize="9"
            fontFamily="monospace"
            fillOpacity="0.75"
            variants={fade}
            custom={custom + 1.2}
          >
            {label}
          </motion.text>
        ))}
      </svg>
    </DiagramWrapper>
  )
}
