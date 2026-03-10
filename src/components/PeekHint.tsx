import { motion } from 'framer-motion'

interface PeekHintProps {
  label: string
}

export default function PeekHint({ label }: PeekHintProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted pointer-events-none">
      <span className="text-xs uppercase tracking-[4px]">{label}</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="text-accent"
      >
        ↓
      </motion.span>
    </div>
  )
}
