import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, delay: i * 0.15 }, opacity: { duration: 0.2, delay: i * 0.15 } },
  }),
}

export const fade = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

interface DiagramWrapperProps {
  children: ReactNode
  className?: string
}

export function DiagramWrapper({ children, className = '' }: DiagramWrapperProps) {
  return (
    <motion.div
      className={`w-full max-w-[280px] md:max-w-[320px] aspect-square mx-auto ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
