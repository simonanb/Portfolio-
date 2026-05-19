import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STOPS = [
  { min: 0,    label: 'Summit',          alt: '2 400 m' },
  { min: 0.16, label: 'About Me Cabin',  alt: '1 900 m' },
  { min: 0.33, label: 'Terrain Park',    alt: '1 600 m' },
  { min: 0.50, label: 'Forest Ride',     alt: '1 300 m' },
  { min: 0.66, label: 'Lodge Village',   alt: '1 000 m' },
  { min: 0.83, label: 'Base Camp',       alt: '  850 m' },
]

function MtnIcon() {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
      <polygon points="6.5,0.5 0,10 13,10" fill="#4A9EBF" />
      <polygon points="9.5,5 8,10 11,10" fill="white" opacity="0.65" />
    </svg>
  )
}

export default function AltitudeTracker() {
  const [current, setCurrent] = useState(STOPS[0])

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress  = maxScroll > 0 ? window.scrollY / maxScroll : 0
      const active    = [...STOPS].reverse().find(s => progress >= s.min) || STOPS[0]
      setCurrent(prev => prev.label === active.label ? prev : active)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 9000,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(74,158,191,0.18)',
        borderRadius: 100,
        padding: '7px 14px 7px 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <MtnIcon />
      <AnimatePresence mode="wait">
        <motion.div
          key={current.label}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            fontWeight: 600,
            color: '#4A9EBF',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
          }}>
            {current.label}
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            color: 'rgba(26,26,42,0.38)',
            letterSpacing: '0.06em',
            marginTop: 2,
          }}>
            ▲ {current.alt}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
