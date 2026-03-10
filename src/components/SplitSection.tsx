import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type BgVariant = 'base' | 'elevated' | 'warm' | 'deep' | 'summit'

interface SplitSectionProps {
  headline: React.ReactNode
  content: React.ReactNode
  headlineSide?: 'left' | 'right'
  bg?: BgVariant
  sectionNumber?: number
}

const bgStyles: Record<BgVariant, string> = {
  base: 'bg-bg-base',
  elevated: 'bg-bg-elevated',
  warm: '',
  deep: '',
  summit: '',
}

const bgGradients: Record<string, React.CSSProperties> = {
  warm: { background: 'var(--gradient-warm)' },
  deep: { background: 'var(--gradient-deep)' },
  summit: { background: 'var(--gradient-summit)' },
}

export default function SplitSection({
  headline,
  content,
  headlineSide = 'left',
  bg = 'base',
  sectionNumber,
}: SplitSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const headlineBlock = (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {headline}
    </motion.div>
  )

  const contentBlock = (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
    >
      {content}
    </motion.div>
  )

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-24 py-24 ${bgStyles[bg]}`}
      style={bgGradients[bg] || undefined}
    >
      {sectionNumber !== undefined && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[200px] font-black text-white/[0.03] select-none pointer-events-none"
          aria-hidden
        >
          {String(sectionNumber).padStart(2, '0')}
        </div>
      )}

      <div className={`relative z-10 flex flex-col md:flex-row gap-12 md:gap-20 items-start ${headlineSide === 'right' ? 'md:flex-row-reverse' : ''}`}>
        {headlineBlock}
        {contentBlock}
      </div>
    </section>
  )
}
