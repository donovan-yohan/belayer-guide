import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

const cardW = 130
const cardH = 120
const cardRx = 10

const cards = [
  { x: 20, label: 'spec.md', sublabel: 'the agreement', customBase: 0 },
  { x: 175, label: 'commit hash', sublabel: 'the artifact', customBase: 2 },
  { x: 330, label: 'quality gate', sublabel: 'the standard', customBase: 4 },
]

// Document icon (card 1): simple page with folded corner
function DocIcon({ cx, cy }: { cx: number; cy: number }) {
  const w = 22
  const h = 28
  const fold = 7
  return (
    <>
      {/* Main page body */}
      <motion.path
        d={`M ${cx - w / 2} ${cy - h / 2} L ${cx + w / 2 - fold} ${cy - h / 2} L ${cx + w / 2} ${cy - h / 2 + fold} L ${cx + w / 2} ${cy + h / 2} L ${cx - w / 2} ${cy + h / 2} Z`}
        fill="#f59e0b"
        fillOpacity="0.18"
        stroke="#f59e0b"
        strokeWidth="1.2"
        strokeOpacity="0.55"
        variants={fade}
        custom={0.5}
      />
      {/* Folded corner */}
      <motion.path
        d={`M ${cx + w / 2 - fold} ${cy - h / 2} L ${cx + w / 2 - fold} ${cy - h / 2 + fold} L ${cx + w / 2} ${cy - h / 2 + fold}`}
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1"
        strokeOpacity="0.4"
        variants={draw}
        custom={0.8}
      />
      {/* Text lines on doc */}
      <motion.line x1={cx - 8} y1={cy - 4} x2={cx + 8} y2={cy - 4} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" variants={draw} custom={1} />
      <motion.line x1={cx - 8} y1={cy + 2} x2={cx + 5} y2={cy + 2} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" variants={draw} custom={1.1} />
      <motion.line x1={cx - 8} y1={cy + 8} x2={cx + 8} y2={cy + 8} stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" variants={draw} custom={1.2} />
    </>
  )
}

// Git branch icon (card 2): two nodes with branching line
function GitIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      {/* Main commit line */}
      <motion.line x1={cx} y1={cy - 14} x2={cx} y2={cy + 14} stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.55" variants={draw} custom={2.5} />
      {/* Branch line */}
      <motion.path d={`M ${cx} ${cy - 4} C ${cx + 10} ${cy - 10}, ${cx + 14} ${cy - 14}, ${cx + 14} ${cy - 14}`} fill="none" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.45" variants={draw} custom={2.7} />
      {/* Nodes */}
      <motion.circle cx={cx} cy={cy - 14} r={4} fill="#4ade80" fillOpacity="0.7" stroke="#4ade80" strokeWidth="1" variants={fade} custom={2.3} />
      <motion.circle cx={cx} cy={cy + 14} r={4} fill="none" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.6" variants={fade} custom={3} />
      <motion.circle cx={cx + 14} cy={cy - 14} r={3.5} fill="none" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.5" variants={fade} custom={3.2} />
    </>
  )
}

// Checkmark shield icon (card 3): shield outline + check
function ShieldIcon({ cx, cy }: { cx: number; cy: number }) {
  const sw = 20
  const sh = 24
  return (
    <>
      {/* Shield */}
      <motion.path
        d={`M ${cx} ${cy - sh / 2} L ${cx + sw / 2} ${cy - sh / 2 + 6} L ${cx + sw / 2} ${cy + 2} Q ${cx + sw / 2} ${cy + sh / 2} ${cx} ${cy + sh / 2} Q ${cx - sw / 2} ${cy + sh / 2} ${cx - sw / 2} ${cy + 2} L ${cx - sw / 2} ${cy - sh / 2 + 6} Z`}
        fill="#4ade80"
        fillOpacity="0.1"
        stroke="#4ade80"
        strokeWidth="1.3"
        strokeOpacity="0.55"
        variants={fade}
        custom={4.3}
      />
      {/* Checkmark */}
      <motion.path
        d={`M ${cx - 6} ${cy + 1} L ${cx - 1} ${cy + 6} L ${cx + 7} ${cy - 4}`}
        fill="none"
        stroke="#4ade80"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
        variants={draw}
        custom={4.8}
      />
    </>
  )
}

export default function ThreeContracts() {
  return (
    <motion.div
      className="w-full max-w-[480px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <svg viewBox="0 0 480 180" className="w-full h-auto">
        {/* Card backgrounds */}
        {cards.map((card) => (
          <g key={card.label}>
            <motion.rect
              x={card.x}
              y={10}
              width={cardW}
              height={cardH}
              rx={cardRx}
              fill="#f59e0b"
              fillOpacity="0.1"
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              variants={fade}
              custom={card.customBase}
            />
            {/* Divider line between icon and label area */}
            <motion.line
              x1={card.x + 12}
              y1={82}
              x2={card.x + cardW - 12}
              y2={82}
              stroke="#f59e0b"
              strokeWidth="1"
              strokeOpacity="0.18"
              variants={draw}
              custom={card.customBase + 1.5}
            />
            {/* Card label */}
            <motion.text
              x={card.x + cardW / 2}
              y={100}
              textAnchor="middle"
              fill="#fafaf9"
              fontSize="11"
              fontWeight="700"
              variants={fade}
              custom={card.customBase + 1.8}
            >
              {card.label}
            </motion.text>
            {/* Card sublabel */}
            <motion.text
              x={card.x + cardW / 2}
              y={116}
              textAnchor="middle"
              fill="#a8a29e"
              fontSize="9"
              fontWeight="500"
              variants={fade}
              custom={card.customBase + 2}
            >
              {card.sublabel}
            </motion.text>
          </g>
        ))}

        {/* Icons — centered in upper portion of each card (icon center y=52) */}
        <DocIcon cx={cards[0].x + cardW / 2} cy={50} />
        <GitIcon cx={cards[1].x + cardW / 2} cy={50} />
        <ShieldIcon cx={cards[2].x + cardW / 2} cy={50} />

        {/* Bottom label */}
        <motion.text
          x="240"
          y="152"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="10"
          fontWeight="600"
          letterSpacing="1.5"
          variants={fade}
          custom={8}
        >
          THE THREE CONTRACTS
        </motion.text>

        {/* Subtitle */}
        <motion.text
          x="240"
          y="170"
          textAnchor="middle"
          fill="#a8a29e"
          fontSize="9"
          fontWeight="500"
          variants={fade}
          custom={9}
        >
          clear inputs, clear outputs, clear standards
        </motion.text>
      </svg>
    </motion.div>
  )
}
