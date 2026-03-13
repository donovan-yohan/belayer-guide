import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.6, delay: i * 0.1 }, opacity: { duration: 0.2, delay: i * 0.1 } },
  }),
}

const fade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
}

/**
 * Higher-level view of parallel leads across two repo boundaries.
 *
 * Layout: Setter at top center → fans into two dashed repo groupings
 * side by side. Each repo group contains 2 lead lanes with harness
 * loop indicators (concentric circles + orbital arc).
 *
 * Visual language matches ParallelLeads but zoomed out one level,
 * wrapping lead clusters inside repo boundary containers.
 */

interface Lead {
  label: string
  cx: number
}

interface RepoGroup {
  label: string
  x: number
  width: number
  leads: Lead[]
}

const repoGroups: RepoGroup[] = [
  {
    label: 'Backend',
    x: 16,
    width: 200,
    leads: [
      { label: 'Lead 1', cx: 72 },
      { label: 'Lead 2', cx: 160 },
    ],
  },
  {
    label: 'Frontend',
    x: 252,
    width: 200,
    leads: [
      { label: 'Lead 3', cx: 308 },
      { label: 'Lead 4', cx: 396 },
    ],
  },
]

const setterCx = 234
const setterCy = 36

export default function MultiRepoLeads() {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <svg viewBox="0 0 468 320" className="w-full h-auto">
        {/* ── Setter node ── */}
        <motion.circle
          cx={setterCx} cy={setterCy} r="16"
          fill="none" stroke="#4ade80" strokeWidth="2" strokeOpacity="0.55"
          variants={draw} custom={0}
        />
        <motion.circle
          cx={setterCx} cy={setterCy} r="6"
          fill="#4ade80" fillOpacity="0.65"
          variants={fade} custom={0.2}
        />
        <motion.text
          x={setterCx} y="16"
          textAnchor="middle" fill="#4ade80" fontSize="11"
          fontWeight="600" fillOpacity="0.8" letterSpacing="0.5"
          variants={fade} custom={0.3}
        >
          Setter
        </motion.text>

        {/* ── Fan lines from setter to each repo group center ── */}
        {repoGroups.map((g, gi) => (
          <motion.line
            key={`fan-${gi}`}
            x1={setterCx} y1={setterCy + 16}
            x2={g.x + g.width / 2} y2={82}
            stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.25"
            markerEnd="url(#mrl-arr)"
            variants={draw} custom={0.6 + gi * 0.15}
          />
        ))}

        {/* ── Repo groups ── */}
        {repoGroups.map((group, gi) => {
          const d0 = 1.2 + gi * 3.2 // stagger between groups
          return (
            <g key={group.label}>
              {/* Dashed boundary */}
              <motion.rect
                x={group.x} y="82"
                width={group.width} height="196" rx="12"
                fill="#f59e0b" fillOpacity="0.03"
                stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.18"
                strokeDasharray="8 5"
                variants={fade} custom={d0}
              />

              {/* Repo label */}
              <motion.text
                x={group.x + group.width / 2} y="104"
                textAnchor="middle" fill="#fafaf9" fontSize="13"
                fontWeight="700" letterSpacing="1"
                variants={fade} custom={d0 + 0.2}
              >
                {group.label}
              </motion.text>

              {/* ── Leads inside this repo ── */}
              {group.leads.map((lead, li) => {
                const ld = d0 + 0.6 + li * 1.1
                const loopCy = 184
                const loopR = 24

                return (
                  <g key={lead.label}>
                    {/* Vertical lane whisker */}
                    <motion.line
                      x1={lead.cx} y1="118"
                      x2={lead.cx} y2="252"
                      stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.12"
                      variants={draw} custom={ld}
                    />

                    {/* Harness loop — outer ring */}
                    <motion.circle
                      cx={lead.cx} cy={loopCy} r={loopR}
                      fill="#f59e0b" fillOpacity="0.05"
                      stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.35"
                      variants={draw} custom={ld + 0.25}
                    />

                    {/* Inner activity dot */}
                    <motion.circle
                      cx={lead.cx} cy={loopCy} r="6"
                      fill="#f59e0b" fillOpacity="0.45"
                      variants={fade} custom={ld + 0.45}
                    />

                    {/* Orbital arc — suggests continuous loop */}
                    <motion.path
                      d={`M ${lead.cx + loopR - 2} ${loopCy - 8}
                          A ${loopR - 2} ${loopR - 2} 0 1 1 ${lead.cx + loopR - 6} ${loopCy - 14}`}
                      fill="none"
                      stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.35"
                      markerEnd="url(#mrl-arr-sm)"
                      variants={draw} custom={ld + 0.55}
                    />

                    {/* Lead label */}
                    <motion.text
                      x={lead.cx} y="264"
                      textAnchor="middle" fill="#f59e0b" fontSize="10"
                      fontWeight="500" fillOpacity="0.55"
                      variants={fade} custom={ld + 0.65}
                    >
                      {lead.label}
                    </motion.text>
                  </g>
                )
              })}
            </g>
          )
        })}

        {/* ── Bottom annotation ── */}
        <motion.text
          x="234" y="306"
          textAnchor="middle" fill="#a8a29e" fontSize="10"
          variants={fade} custom={9}
        >
          each repo runs its own parallel leads simultaneously
        </motion.text>

        {/* ── Markers ── */}
        <defs>
          <marker id="mrl-arr" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto">
            <path d="M0 0 L7 2.5 L0 5" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.35" />
          </marker>
          <marker id="mrl-arr-sm" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto">
            <path d="M0 0 L5 2 L0 4" fill="none" stroke="#f59e0b" strokeWidth="0.8" strokeOpacity="0.35" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  )
}
