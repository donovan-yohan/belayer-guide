import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface PhilosophyVersion {
  id: string
  title: string
  subtitle: string
  date: string
  current?: boolean
}

interface PhilosophyArchiveProps {
  versions: PhilosophyVersion[]
  activeVersion: string
  onVersionChange: (id: string) => void
}

export default function PhilosophyArchive({
  versions,
  activeVersion,
  onVersionChange,
}: PhilosophyArchiveProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="philosophy-archive"
      ref={ref}
      className="relative px-6 sm:px-8 md:px-16 lg:px-24 py-20 bg-bg-base border-t border-white/[0.06]"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <span className="text-xs uppercase tracking-[4px] text-accent mb-3 block text-center">
          Archive
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          How this thinking <strong className="text-accent">evolved</strong>
        </h3>
        <p className="text-text-secondary text-sm text-center mb-10 max-w-md mx-auto">
          Each version is a complete snapshot of the Belayer philosophy at a point in time.
        </p>

        <div className="space-y-3">
          {versions.map((version) => {
            const isActive = version.id === activeVersion
            return (
              <button
                key={version.id}
                onClick={() => {
                  if (!isActive) onVersionChange(version.id)
                }}
                disabled={isActive}
                className={`w-full text-left rounded-xl px-5 py-4 sm:px-6 sm:py-5 transition-all ${
                  isActive
                    ? 'bg-accent/10 border border-accent/30 cursor-default'
                    : 'bg-white/[0.03] border border-white/[0.06] hover:border-accent/20 hover:bg-white/[0.05] cursor-pointer'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-text-primary text-sm sm:text-base truncate">
                        {version.title}
                      </span>
                      {version.current && (
                        <span className="shrink-0 text-[10px] uppercase tracking-wider text-accent font-semibold bg-accent/10 px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                      {isActive && !version.current && (
                        <span className="shrink-0 text-[10px] uppercase tracking-wider text-text-muted font-semibold bg-white/[0.06] px-2 py-0.5 rounded-full">
                          Viewing
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary text-xs sm:text-sm truncate">
                      {version.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-text-muted text-xs">{version.date}</span>
                    {!isActive && (
                      <span className="text-accent text-xs font-medium hidden sm:inline">
                        View →
                      </span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
