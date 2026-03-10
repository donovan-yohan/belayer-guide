import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ProgressBar() {
  const { scrollYProgress } = useScrollProgress()

  return (
    <div className="fixed right-4 top-0 bottom-0 z-40 hidden md:flex items-stretch">
      {/* Track */}
      <div className="w-[3px] bg-surface relative">
        {/* Fill */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-accent origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        {/* Glowing dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_10px_rgba(245,158,11,0.6)]"
          style={{ top: scrollYProgress }}
        />
      </div>
    </div>
  )
}
