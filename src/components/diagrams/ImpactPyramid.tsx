import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

/**
 * 5-layer inverted pyramid showing how errors at higher levels of abstraction
 * compound into exponentially more damage downstream.
 *
 * Top = Code (lowest leverage, narrowest)
 * Bottom = Specification (highest leverage, widest)
 *
 * Each layer shows an error multiplier and gets progressively wider + brighter.
 */

interface Layer {
  label: string
  subtitle: string | null
  multiplier: string
  y: number
  leftX: number
  rightX: number
  fillOpacity: number
  strokeOpacity: number
}

// viewBox: 0 0 500 310
// Centre = 250. Layers top-to-bottom, narrow to wide (inverted pyramid).
// Each layer trapezoid: top edge narrower, bottom edge wider.
// Layer height ~44px. Badge at rightX + 6; widest badge ("10,000×") is ~8 chars
// × ~6px ≈ 48px, so rightX must be ≤ 446 to stay inside 500-wide viewBox.

const layerHeight = 44

const layers: Layer[] = [
  { label: 'Code',           subtitle: '"1 bad line = 1 bad line"',    multiplier: '1×',      y: 20,  leftX: 210, rightX: 290, fillOpacity: 0.07, strokeOpacity: 0.15 },
  { label: 'Implementation', subtitle: null,                            multiplier: '10×',     y: 66,  leftX: 180, rightX: 320, fillOpacity: 0.12, strokeOpacity: 0.25 },
  { label: 'Planning',       subtitle: '"Wrong Solution"',              multiplier: '10–100×', y: 112, leftX: 140, rightX: 360, fillOpacity: 0.18, strokeOpacity: 0.35 },
  { label: 'Research',       subtitle: '"Misunderstanding the System"', multiplier: '1,000×',  y: 158, leftX: 90,  rightX: 410, fillOpacity: 0.25, strokeOpacity: 0.50 },
  { label: 'Specification',  subtitle: '"Wrong Problem"',               multiplier: '10,000×', y: 204, leftX: 34,  rightX: 446, fillOpacity: 0.35, strokeOpacity: 0.70 },
]

export default function ImpactPyramid() {
  return (
    <motion.div
      className="w-full max-w-[560px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 500 310" className="w-full h-auto">

        {/* Layers from top (narrow) to bottom (wide) */}
        {layers.map((layer, i) => {
          const nextLayer = layers[i + 1]
          // Bottom edge of this trapezoid = top edge of next layer (or extrapolated)
          const bottomY = nextLayer ? nextLayer.y : layer.y + layerHeight
          const bottomLeftX = nextLayer ? nextLayer.leftX : layer.leftX - 30
          const bottomRightX = nextLayer ? nextLayer.rightX : layer.rightX + 30

          const midY = layer.y + (bottomY - layer.y) / 2

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
                x="250"
                y={layer.subtitle ? midY - 3 : midY + 5}
                textAnchor="middle"
                fill="#fafaf9"
                fontSize="12"
                fontWeight="600"
                variants={fade}
                custom={i + 1.3}
              >
                {layer.label}
              </motion.text>

              {/* Subtitle / failure mode */}
              {layer.subtitle && (
                <motion.text
                  x="250"
                  y={midY + 11}
                  textAnchor="middle"
                  fill="#d6d3d1"
                  fontSize="9"
                  fontWeight="400"
                  fontStyle="italic"
                  variants={fade}
                  custom={i + 1.4}
                >
                  {layer.subtitle}
                </motion.text>
              )}

              {/* Error multiplier badge — right side */}
              <motion.text
                x={layer.rightX + 6}
                y={midY + 5}
                textAnchor="start"
                fill="#f59e0b"
                fontSize="10"
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

        {/* "HIGHEST LEVERAGE" arrow pointing DOWN at the bottom (widest) layer */}
        {/* Arrow tip points at bottom layer */}
        <motion.path
          d="M 250 296 L 246 288 L 254 288 Z"
          fill="#f59e0b"
          fillOpacity="0.6"
          variants={fade}
          custom={7}
        />
        <motion.text
          x="250"
          y="307"
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
