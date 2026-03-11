import { motion } from 'framer-motion'
import { draw, fade, DiagramWrapper } from './variants'

const layers = [
  { label: 'Skills', sublabel: 'pr:author · pr:review · reflect', opacity: 0.3, y: 162, height: 18 },
  { label: 'Harness', sublabel: 'plan · orchestrate · review', opacity: 0.45, y: 130, height: 18 },
  { label: 'Leads', sublabel: 'independent goal executors', opacity: 0.6, y: 98, height: 18 },
  { label: 'Setter', sublabel: 'orchestration layer', opacity: 0.75, y: 66, height: 18 },
  { label: 'Human', sublabel: 'architect', opacity: 1.0, y: 28, height: 22, highlight: true },
]

const connectorYs = [152, 120, 88, 56]

export default function ComposedStack() {
  return (
    <DiagramWrapper>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Vertical connectors between layers */}
        {connectorYs.map((y, i) => (
          <motion.line
            key={`conn-${i}`}
            x1="100"
            y1={y}
            x2="100"
            y2={y + 10}
            stroke="#f59e0b"
            strokeWidth="1"
            strokeOpacity="0.3"
            variants={draw}
            custom={i * 0.2}
          />
        ))}

        {/* Layer bars */}
        {layers.map((layer, i) => {
          const x = layer.highlight ? 20 : 25
          const width = layer.highlight ? 160 : 150
          const rx = layer.highlight ? 5 : 4
          return (
            <motion.g key={layer.label} variants={fade} custom={i * 0.25}>
              <motion.rect
                x={x}
                y={layer.y}
                width={width}
                height={layer.height}
                rx={rx}
                fill="#f59e0b"
                fillOpacity={layer.highlight ? 0.15 : 0.07}
                stroke="#f59e0b"
                strokeWidth={layer.highlight ? 1.5 : 1}
                strokeOpacity={layer.opacity}
                variants={draw}
                custom={i * 0.25}
              />
              <text
                x="100"
                y={layer.y + (layer.highlight ? 9 : 8)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={layer.highlight ? 9 : 8}
                fontWeight={layer.highlight ? 'bold' : 'normal'}
                fill="#f59e0b"
                fillOpacity={layer.opacity}
              >
                {layer.label}
              </text>
              <text
                x="100"
                y={layer.y + (layer.highlight ? 17 : 16)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="5"
                fill="#f59e0b"
                fillOpacity={layer.opacity * 0.6}
              >
                {layer.sublabel}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </DiagramWrapper>
  )
}
