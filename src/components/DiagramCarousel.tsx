import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Slide {
  diagram: React.ReactNode
  caption: string
}

interface DiagramCarouselProps {
  slides: Slide[]
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
}

export default function DiagramCarousel({ slides }: DiagramCarouselProps) {
  const [[index, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    const next = index + newDirection
    if (next < 0 || next >= slides.length) return
    setPage([next, newDirection])
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative overflow-hidden" style={{ minHeight: 340 }}>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            <div className="flex flex-col items-center gap-3">
              {slides[index].diagram}
              <p className="text-text-muted text-sm">{slides[index].caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => paginate(-1)}
          disabled={index === 0}
          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/25 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          aria-label="Previous diagram"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > index ? 1 : -1])}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? 'bg-accent' : 'bg-white/15 hover:bg-white/30'
              }`}
              aria-label={`Go to diagram ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={index === slides.length - 1}
          className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-white/25 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
          aria-label="Next diagram"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
