import { motion } from 'framer-motion'
import { draw, fade, DiagramWrapper } from './variants'

export default function TwoDocuments() {
  return (
    <DiagramWrapper>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Left document — Design Doc */}
        <motion.rect x="15" y="25" width="75" height="95" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={0} />
        {/* Left doc header bar */}
        <motion.rect x="15" y="25" width="75" height="14" rx="3" fill="#f59e0b" fillOpacity="0.08" variants={fade} custom={0.2} />
        {/* Design Doc label */}
        <motion.text x="52" y="35" textAnchor="middle" fontSize="7" fill="#f59e0b" fillOpacity="0.9" fontFamily="sans-serif" variants={fade} custom={0.3}>Design Doc</motion.text>
        {/* Wavy/organic lines — exploratory content */}
        <motion.path d="M 25 52 Q 35 48 45 52 Q 55 56 65 52 Q 75 48 82 52" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" variants={draw} custom={0.5} />
        <motion.path d="M 25 62 Q 32 57 42 62 Q 52 67 62 62 Q 70 57 82 60" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.3" variants={draw} custom={0.7} />
        <motion.path d="M 25 72 Q 38 68 48 74 Q 58 80 68 72 Q 76 66 82 70" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.25" variants={draw} custom={0.9} />
        <motion.path d="M 25 82 Q 36 78 46 83 Q 56 88 70 82 Q 76 79 82 82" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.2" variants={draw} custom={1.1} />
        <motion.path d="M 25 92 Q 40 87 52 93 Q 62 98 82 90" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" variants={draw} custom={1.3} />
        <motion.path d="M 25 102 Q 35 99 50 104 Q 65 109 82 102" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.12" variants={draw} custom={1.5} />

        {/* Connecting arrow between documents */}
        <motion.path d="M 95 72 L 108 72" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrowhead)" variants={draw} custom={1.8} />
        {/* Arrow head */}
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 Z" fill="#f59e0b" fillOpacity="0.5" />
          </marker>
        </defs>

        {/* Right document — Plan */}
        <motion.rect x="112" y="25" width="75" height="95" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.4" variants={draw} custom={0.1} />
        {/* Right doc header bar */}
        <motion.rect x="112" y="25" width="75" height="14" rx="3" fill="#f59e0b" fillOpacity="0.08" variants={fade} custom={0.4} />
        {/* Plan label */}
        <motion.text x="149" y="35" textAnchor="middle" fontSize="7" fill="#f59e0b" fillOpacity="0.9" fontFamily="sans-serif" variants={fade} custom={0.5}>Plan</motion.text>

        {/* Straight lines with checkboxes — structured checklist */}
        {[52, 64, 76, 88, 100].map((y, i) => (
          <motion.g key={y} variants={fade} custom={0.8 + i * 0.15}>
            {/* Checkbox square */}
            <motion.rect x="120" y={y - 5} width="7" height="7" rx="1" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5" variants={draw} custom={0.9 + i * 0.15} />
            {/* Checkmark for first two items */}
            {i < 2 && (
              <motion.path d={`M ${121} ${y - 1.5} L ${123} ${y + 1} L ${126} ${y - 3}`} fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.7" variants={draw} custom={1.1 + i * 0.15} />
            )}
            {/* Horizontal line (task text) */}
            <motion.line x1="132" y1={y - 1} x2="180" y2={y - 1} stroke="#f59e0b" strokeWidth="1" strokeOpacity={0.3 - i * 0.04} variants={draw} custom={1.0 + i * 0.15} />
          </motion.g>
        ))}
      </svg>
    </DiagramWrapper>
  )
}
