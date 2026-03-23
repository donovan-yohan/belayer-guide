import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhilosophyV1 from './PhilosophyV1'
import PhilosophyV2 from './PhilosophyV2'
import PhilosophyArchive from '../components/PhilosophyArchive'
import type { PhilosophyVersion } from '../components/PhilosophyArchive'

const versions: PhilosophyVersion[] = [
  {
    id: 'v2',
    title: 'Three Roles, Three Phases',
    subtitle: 'Top-down: orchestrator, harness, agent. Three phases of orchestration.',
    date: 'March 2026',
    current: true,
  },
  {
    id: 'v1',
    title: 'Three Hats, One Engineer',
    subtitle: 'Bottom-up: start with small tools, compose them into workflows.',
    date: 'March 2026',
  },
]

const versionContent: Record<string, React.ComponentType> = {
  v2: PhilosophyV2,
  v1: PhilosophyV1,
}

export default function Philosophy() {
  const [activeVersion, setActiveVersion] = useState('v2')
  const [showFab, setShowFab] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const currentVersion = versions.find((v) => v.id === activeVersion)
  const isViewingArchived = !currentVersion?.current

  const handleVersionChange = useCallback((id: string) => {
    setActiveVersion(id)
    setModalOpen(false)
    // Immediate scroll — smooth can race with React re-render
    window.scrollTo(0, 0)
  }, [])

  // Hide FAB when inline archive section is visible
  useEffect(() => {
    const archive = document.getElementById('philosophy-archive')
    if (!archive) return

    const observer = new IntersectionObserver(
      ([entry]) => setShowFab(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(archive)
    return () => observer.disconnect()
  }, [activeVersion])

  // Close modal on Escape
  useEffect(() => {
    if (!modalOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalOpen])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  const Content = versionContent[activeVersion] ?? PhilosophyV2

  return (
    <>
      {/* Pinned banner when viewing an archived version */}
      <AnimatePresence>
        {isViewingArchived && (
          <motion.div
            initial={{ y: -48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -48, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg-elevated/90 backdrop-blur-md border-b border-white/[0.06]"
          >
            <div className="flex items-center justify-between px-4 sm:px-8 py-2.5 max-w-7xl mx-auto">
              <p className="text-text-secondary text-xs sm:text-sm truncate">
                Viewing: <span className="text-text-primary font-medium">{currentVersion?.title}</span>
                <span className="text-text-muted ml-2 hidden sm:inline">({currentVersion?.date})</span>
              </p>
              <button
                onClick={() => handleVersionChange('v2')}
                className="shrink-0 text-accent text-xs sm:text-sm font-medium hover:text-amber-400 transition-colors ml-4"
              >
                Back to current →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Version content */}
      <Content />

      {/* Inline archive at the very bottom */}
      <PhilosophyArchive
        versions={versions}
        activeVersion={activeVersion}
        onVersionChange={handleVersionChange}
      />

      {/* Archive FAB — opens modal overlay */}
      <AnimatePresence>
        {showFab && !modalOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => setModalOpen(true)}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 bg-bg-elevated/80 backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-2.5 text-text-secondary text-xs font-medium hover:text-accent hover:border-accent/20 transition-all shadow-lg"
            aria-label="Open archive"
          >
            Archive
          </motion.button>
        )}
      </AnimatePresence>

      {/* Archive modal overlay */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-8 sm:right-8 sm:left-auto sm:w-[420px] z-50 bg-bg-elevated border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="px-5 pt-5 pb-2 sm:px-6 sm:pt-6 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[4px] text-accent block mb-1">
                    Archive
                  </span>
                  <h3 className="text-lg font-bold">
                    How this thinking <strong className="text-accent">evolved</strong>
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-text-muted hover:text-text-primary transition-colors p-1 -mr-1"
                  aria-label="Close archive"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M5 5l10 10M15 5l-10 10" />
                  </svg>
                </button>
              </div>

              <p className="text-text-secondary text-xs px-5 sm:px-6 mb-4">
                Each version is a complete snapshot of the Belayer philosophy at a point in time.
              </p>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 space-y-2.5">
                {versions.map((version) => {
                  const isActive = version.id === activeVersion
                  return (
                    <button
                      key={version.id}
                      onClick={() => {
                        if (!isActive) handleVersionChange(version.id)
                      }}
                      disabled={isActive}
                      className={`w-full text-left rounded-xl px-4 py-3.5 transition-all ${
                        isActive
                          ? 'bg-accent/10 border border-accent/30 cursor-default'
                          : 'bg-white/[0.03] border border-white/[0.06] hover:border-accent/20 hover:bg-white/[0.05] cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-text-primary text-sm truncate">
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
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-text-secondary text-xs truncate">
                          {version.subtitle}
                        </p>
                        <span className="text-text-muted text-[10px] shrink-0">{version.date}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
