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
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

// Node positions
const codeNode = { cx: 200, cy: 90, label: 'Code' }
const prNode = { cx: 280, cy: 185, label: 'PR' }
const reviewNode = { cx: 120, cy: 185, label: 'Review' }
const nodeW = 72
const nodeH = 34
const nodeRx = 8

export default function TightLoopDiagram() {
  return (
    <motion.div
      className="w-full max-w-[400px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        <defs>
          <marker id="tl-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.6" />
          </marker>
          <marker id="tl-exit-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <path d="M 0 0 L 8 3 L 0 6" fill="none" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.8" />
          </marker>
        </defs>

        {/* Outer implementation box */}
        <motion.rect
          x={30}
          y={30}
          width={340}
          height={210}
          rx={12}
          fill="#f59e0b"
          fillOpacity="0.04"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          strokeDasharray="6 4"
          variants={fade}
          custom={0}
        />
        <motion.text
          x={200}
          y={52}
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="9"
          fontWeight="600"
          letterSpacing="2"
          fillOpacity="0.6"
          variants={fade}
          custom={0.5}
        >
          IMPLEMENTATION
        </motion.text>

        {/* Code → PR curved arrow */}
        {/* Path from right side of Code box down to top of PR box */}
        <motion.path
          d={`M ${codeNode.cx + nodeW / 2} ${codeNode.cy} C ${codeNode.cx + 80} ${codeNode.cy + 30}, ${prNode.cx + 20} ${prNode.cy - 50}, ${prNode.cx} ${prNode.cy - nodeH / 2}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          markerEnd="url(#tl-arrow)"
          variants={draw}
          custom={3}
        />

        {/* PR → Review curved arrow */}
        <motion.path
          d={`M ${prNode.cx - nodeW / 2} ${prNode.cy} C ${prNode.cx - 60} ${prNode.cy + 30}, ${reviewNode.cx + 60} ${reviewNode.cy + 30}, ${reviewNode.cx + nodeW / 2} ${reviewNode.cy}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          markerEnd="url(#tl-arrow)"
          variants={draw}
          custom={5}
        />

        {/* Review → Code curved arrow */}
        <motion.path
          d={`M ${reviewNode.cx} ${reviewNode.cy - nodeH / 2} C ${reviewNode.cx - 20} ${reviewNode.cy - 60}, ${codeNode.cx - 80} ${codeNode.cy + 30}, ${codeNode.cx - nodeW / 2} ${codeNode.cy}`}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          markerEnd="url(#tl-arrow)"
          variants={draw}
          custom={7}
        />

        {/* Loop nodes */}
        {[
          { ...codeNode, custom: 1 },
          { ...prNode, custom: 2 },
          { ...reviewNode, custom: 1.5 },
        ].map((node) => (
          <g key={node.label}>
            <motion.rect
              x={node.cx - nodeW / 2}
              y={node.cy - nodeH / 2}
              width={nodeW}
              height={nodeH}
              rx={nodeRx}
              fill="#f59e0b"
              fillOpacity="0.1"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              variants={fade}
              custom={node.custom}
            />
            <motion.text
              x={node.cx}
              y={node.cy + 4}
              textAnchor="middle"
              fill="#fafaf9"
              fontSize="11"
              fontWeight="600"
              variants={fade}
              custom={node.custom + 0.4}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        {/* Exit arrow from loop going down-right out of box */}
        <motion.path
          d={`M ${prNode.cx + nodeW / 2} ${prNode.cy} C ${prNode.cx + 50} ${prNode.cy + 10}, 370 240, 370 260`}
          fill="none"
          stroke="#4ade80"
          strokeWidth="1.5"
          strokeOpacity="0.7"
          markerEnd="url(#tl-exit-arrow)"
          variants={draw}
          custom={9}
        />

        {/* Exit label */}
        <motion.text
          x={370}
          y={278}
          textAnchor="middle"
          fill="#4ade80"
          fontSize="9"
          fontWeight="600"
          variants={fade}
          custom={10}
        >
          commit hash
        </motion.text>

        {/* Bottom label */}
        <motion.text
          x="200"
          y="292"
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="9"
          fontWeight="500"
          variants={fade}
          custom={11}
        >
          loop runs entirely inside the boundary
        </motion.text>
      </svg>
    </motion.div>
  )
}
