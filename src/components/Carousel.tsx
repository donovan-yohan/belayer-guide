import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
}

export default function Carousel({ children, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    }),
  }

  return (
    <div className={className}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x < -50 && currentIndex < children.length - 1) {
            goTo(currentIndex + 1)
          } else if (info.offset.x > 50 && currentIndex > 0) {
            goTo(currentIndex - 1)
          }
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center gap-3 mt-4">
        {children.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            className="w-2.5 h-2.5 rounded-full"
            animate={{
              scale: i === currentIndex ? 1 : 0.75,
              backgroundColor: i === currentIndex ? '#f59e0b' : 'rgba(245,158,11,0.3)',
            }}
            transition={{ duration: 0.2 }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
