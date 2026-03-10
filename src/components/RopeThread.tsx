import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

export default function RopeThread() {
  const { scrollYProgress } = useScrollProgress()

  return (
    <div
      className="fixed left-12 top-0 bottom-0 z-30 w-[2px] hidden lg:block"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(245,158,11,0.1) 20%, rgba(245,158,11,0.1) 80%, transparent)',
      }}
    >
      {/* Scroll progress fill */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full origin-top"
        style={{
          scaleY: scrollYProgress,
          background: 'linear-gradient(to bottom, transparent, rgba(245,158,11,0.5) 10%, rgba(245,158,11,0.5) 90%, transparent)',
        }}
      />
    </div>
  )
}
