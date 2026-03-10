import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

type BgVariant = 'base' | 'elevated' | 'warm' | 'deep' | 'summit'
type Alignment = 'left' | 'right' | 'center'

interface SectionProps {
  children: React.ReactNode
  bg?: BgVariant
  align?: Alignment
  sectionNumber?: number
  className?: string
  peekHint?: React.ReactNode
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
  peekHint,
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const numberY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-24 pb-28 overflow-hidden ${bgStyles[bg]} ${alignmentClasses[align]} ${className}`}
      style={bgGradients[bg] || undefined}
    >
      {/* Background number with parallax */}
      {sectionNumber !== undefined && (
        <motion.div
          className={`absolute top-16 text-[180px] md:text-[200px] font-black text-white/[0.03] select-none pointer-events-none leading-none ${
            align === 'right' ? 'left-6 sm:left-8 md:left-16 lg:left-24' : 'right-6 sm:right-8 md:right-16 lg:right-24'
          }`}
          style={{ y: numberY }}
          aria-hidden
        >
          {String(sectionNumber).padStart(2, '0')}
        </motion.div>
      )}

      <motion.div
        className={`w-full relative z-10 ${align === 'center' ? '' : 'max-w-[700px]'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>

      {peekHint}
    </section>
  )
}
