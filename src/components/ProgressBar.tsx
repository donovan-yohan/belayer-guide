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
          className="absolute top-0 left-0 w-full h-full bg-accent origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </div>
  )
}
