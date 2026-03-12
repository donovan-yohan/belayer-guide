import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SectionNav() {
  const [sections, setSections] = useState<HTMLElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('main section')) as HTMLElement[]
    setSections(els)
  }, [])

  useEffect(() => {
    if (sections.length === 0) return

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      let index = 0
      for (let i = 0; i < sections.length; i++) {
        if (scrollY >= sections[i].offsetTop) {
          index = i
        }
      }
      setCurrentIndex(index)
      setVisible(window.scrollY > 100)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollTo = useCallback(
    (direction: 'up' | 'down') => {
      const target = direction === 'up' ? currentIndex - 1 : currentIndex + 1
      if (target < 0 || target >= sections.length) return
      sections[target].scrollIntoView({ behavior: 'smooth' })
    },
    [currentIndex, sections],
  )

  const canGoUp = currentIndex > 0
  const canGoDown = currentIndex < sections.length - 1

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex md:flex-col gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => scrollTo('up')}
            disabled={!canGoUp}
            className="w-9 h-9 rounded-full border border-accent/30 bg-bg-base/80 backdrop-blur-sm flex items-center justify-center transition-opacity hover:border-accent/60 disabled:opacity-20 disabled:cursor-default"
            aria-label="Previous section"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
              <path d="M7 2.5L2.5 8.5H11.5L7 2.5Z" fill="currentColor" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo('down')}
            disabled={!canGoDown}
            className="w-9 h-9 rounded-full border border-accent/30 bg-bg-base/80 backdrop-blur-sm flex items-center justify-center transition-opacity hover:border-accent/60 disabled:opacity-20 disabled:cursor-default"
            aria-label="Next section"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent">
              <path d="M7 11.5L2.5 5.5H11.5L7 11.5Z" fill="currentColor" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
