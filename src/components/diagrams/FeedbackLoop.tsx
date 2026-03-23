import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.9, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
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

const nodeW = 120
const nodeH = 50
const nodeRx = 8

// Node centers
const outputNode = { cx: 190, cy: 60, label: 'OUTPUT' }
const intakeNode = { cx: 330, cy: 300, label: 'INTAKE' }
const implNode = { cx: 50, cy: 300, label: 'IMPLEMENTATION' }

export default function FeedbackLoop() {
  return (
    <motion.div
      className="w-full max-w-[380px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 380 380" className="w-full h-auto">
        <defs>
          <marker id="fl-amber-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.7" />
          </marker>
          <marker id="fl-green-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.8" />
          </marker>
        </defs>

        {/* OUTPUT → INTAKE: bugs (red/warning) */}
        {/* Curve from right side of OUTPUT down to top of INTAKE */}
        <motion.path
          d={`M ${outputNode.cx + nodeW / 2} ${outputNode.cy} C ${outputNode.cx + 130} ${outputNode.cy + 80}, ${intakeNode.cx + 40} ${intakeNode.cy - 130}, ${intakeNode.cx + nodeW / 2 - 8} ${intakeNode.cy - nodeH / 2}`}
          fill="none"
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          markerEnd="url(#fl-amber-arrow)"
          variants={draw}
          custom={4}
        />
        {/* "bugs" label */}
        <motion.text
          x={340}
          y={170}
          textAnchor="middle"
          fill="#ef4444"
          fontSize="9"
          fontWeight="600"
          variants={fade}
          custom={5}
        >
          bugs
        </motion.text>

        {/* INTAKE → IMPLEMENTATION: spec.md (green) */}
        {/* Curve along bottom */}
        <motion.path
          d={`M ${intakeNode.cx - nodeW / 2} ${intakeNode.cy} C ${intakeNode.cx - 80} ${intakeNode.cy + 40}, ${implNode.cx + 80} ${implNode.cy + 40}, ${implNode.cx + nodeW / 2} ${implNode.cy}`}
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          markerEnd="url(#fl-green-arrow)"
          variants={draw}
          custom={6}
        />
        {/* "spec.md" label */}
        <motion.text
          x={190}
          y={358}
          textAnchor="middle"
          fill="#4ade80"
          fontSize="9"
          fontWeight="600"
          variants={fade}
          custom={7}
        >
          spec.md
        </motion.text>

        {/* IMPLEMENTATION → OUTPUT: commit hash (green) */}
        {/* Curve from left side of IMPL up to left side of OUTPUT */}
        <motion.path
          d={`M ${implNode.cx - nodeW / 2 + 8} ${implNode.cy - nodeH / 2} C ${implNode.cx - 60} ${implNode.cy - 130}, ${outputNode.cx - 130} ${outputNode.cy + 80}, ${outputNode.cx - nodeW / 2} ${outputNode.cy}`}
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          markerEnd="url(#fl-green-arrow)"
          variants={draw}
          custom={8}
        />
        {/* "commit hash" label */}
        <motion.text
          x={38}
          y={170}
          textAnchor="middle"
          fill="#4ade80"
          fontSize="9"
          fontWeight="600"
          variants={fade}
          custom={9}
        >
          commit
        </motion.text>
        <motion.text
          x={38}
          y={182}
          textAnchor="middle"
          fill="#4ade80"
          fontSize="9"
          fontWeight="600"
          variants={fade}
          custom={9.3}
        >
          hash
        </motion.text>

        {/* Three nodes */}
        {[
          { node: outputNode, custom: 0 },
          { node: intakeNode, custom: 1 },
          { node: implNode, custom: 2 },
        ].map(({ node, custom }) => (
          <g key={node.label}>
            <motion.rect
              x={node.cx - nodeW / 2}
              y={node.cy - nodeH / 2}
              width={nodeW}
              height={nodeH}
              rx={nodeRx}
              fill="#f59e0b"
              fillOpacity="0.09"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              variants={fade}
              custom={custom}
            />
            <motion.text
              x={node.cx}
              y={node.cy + 5}
              textAnchor="middle"
              fill="#fafaf9"
              fontSize="10"
              fontWeight="700"
              letterSpacing="0.5"
              variants={fade}
              custom={custom + 0.5}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        {/* Center faint label */}
        <motion.text
          x={190}
          y={192}
          textAnchor="middle"
          fill="#fafaf9"
          fontSize="11"
          fontWeight="600"
          fillOpacity="0.12"
          letterSpacing="2"
          variants={fade}
          custom={10}
        >
          SELF-CORRECTING
        </motion.text>
      </svg>
    </motion.div>
  )
}
