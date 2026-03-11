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
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

/**
 * 5-layer pyramid showing how errors at higher levels of abstraction
 * compound into exponentially more damage downstream.
 *
 * Top = Specification (highest leverage, smallest surface)
 * Bottom = Code Output (lowest leverage, largest surface)
 *
 * Each layer shows an error multiplier and gets progressively wider + dimmer.
 */

interface Layer {
  label: string
  multiplier: string
  y: number
  leftX: number
  rightX: number
  fillOpacity: number
  strokeOpacity: number
}

const layers: Layer[] = [
  { label: 'Specification', multiplier: '10,000×', y: 38, leftX: 168, rightX: 232, fillOpacity: 0.35, strokeOpacity: 0.7 },
  { label: 'Research', multiplier: '1,000×', y: 88, leftX: 138, rightX: 262, fillOpacity: 0.25, strokeOpacity: 0.5 },
  { label: 'Planning', multiplier: '100×', y: 138, leftX: 108, rightX: 292, fillOpacity: 0.18, strokeOpacity: 0.35 },
  { label: 'Implementation', multiplier: '10×', y: 188, leftX: 78, rightX: 322, fillOpacity: 0.12, strokeOpacity: 0.25 },
  { label: 'Code Output', multiplier: '1×', y: 238, leftX: 48, rightX: 352, fillOpacity: 0.07, strokeOpacity: 0.15 },
]

const layerHeight = 42

export default function ImpactPyramid() {
  return (
    <motion.div
      className="w-full max-w-[520px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 400 290" className="w-full h-auto">
        {/* Outer pyramid outline */}
        <motion.path
          d="M 200 20 L 40 270 L 360 270 Z"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeOpacity="0.08"
          variants={draw}
          custom={0}
        />

        {/* Layers from top to bottom */}
        {layers.map((layer, i) => {
          const nextLayer = layers[i + 1]
          const bottomY = nextLayer ? nextLayer.y : layer.y + layerHeight + 10
          const bottomLeftX = nextLayer ? nextLayer.leftX : layer.leftX - 30
          const bottomRightX = nextLayer ? nextLayer.rightX : layer.rightX + 30

          return (
            <g key={layer.label}>
              {/* Layer fill trapezoid */}
              <motion.path
                d={`M ${layer.leftX} ${layer.y} L ${bottomLeftX} ${bottomY} L ${bottomRightX} ${bottomY} L ${layer.rightX} ${layer.y} Z`}
                fill="#f59e0b"
                fillOpacity={layer.fillOpacity}
                stroke="#f59e0b"
                strokeWidth="1"
                strokeOpacity={layer.strokeOpacity}
                variants={fade}
                custom={i + 1}
              />

              {/* Layer label */}
              <motion.text
                x="200"
                y={layer.y + (bottomY - layer.y) / 2 + 5}
                textAnchor="middle"
                fill="#fafaf9"
                fontSize="12"
                fontWeight="600"
                variants={fade}
                custom={i + 1.3}
              >
                {layer.label}
              </motion.text>

              {/* Error multiplier badge */}
              <motion.text
                x={layer.rightX + 16}
                y={layer.y + (bottomY - layer.y) / 2 + 4}
                textAnchor="start"
                fill="#f59e0b"
                fontSize="11"
                fontWeight="700"
                fontFamily="monospace"
                variants={fade}
                custom={i + 1.5}
              >
                {layer.multiplier}
              </motion.text>
            </g>
          )
        })}

        {/* "Human attention" arrow pointing at top */}
        <motion.path
          d="M 200 8 L 196 16 L 204 16 Z"
          fill="#f59e0b"
          fillOpacity="0.6"
          variants={fade}
          custom={7}
        />
        <motion.text
          x="200"
          y="5"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="8"
          fontWeight="600"
          letterSpacing="2"
          style={{ textTransform: 'uppercase' }}
          variants={fade}
          custom={7.2}
        >
          HIGHEST LEVERAGE
        </motion.text>
      </svg>
    </motion.div>
  )
}
