import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type BgVariant = 'base' | 'elevated' | 'warm' | 'deep' | 'summit'
type Alignment = 'left' | 'right' | 'center'

interface SectionProps {
  children: React.ReactNode
  bg?: BgVariant
  align?: Alignment
  sectionNumber?: number
  className?: string
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

const alignmentClasses: Record<Alignment, string> = {
  left: 'items-start text-left',
  right: 'items-end text-right',
  center: 'items-center text-center',
}

export default function Section({
  children,
  bg = 'base',
  align = 'left',
  sectionNumber,
  className = '',
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-24 py-24 ${bgStyles[bg]} ${alignmentClasses[align]} ${className}`}
      style={bgGradients[bg] || undefined}
    >
      {/* Background number */}
      {sectionNumber !== undefined && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[200px] font-black text-white/[0.03] select-none pointer-events-none"
          aria-hidden
        >
          {String(sectionNumber).padStart(2, '0')}
        </div>
      )}

      <motion.div
        className="max-w-[700px] relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
