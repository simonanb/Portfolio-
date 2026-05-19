import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STOPS = [
  { id: 'stop-hero',       label: 'Summit',              alt: '2 400 m' },
  { id: 'stop-about',      label: 'About Me Cabin',      alt: '1 900 m' },
  { id: 'stop-projects',   label: 'Terrain Park',        alt: '1 600 m' },
  { id: 'stop-skills',     label: 'Forest Ride',         alt: '1 300 m' },
  { id: 'stop-experience', label: 'Lodge Village',       alt: '1 000 m' },
  { id: 'stop-contact',    label: 'Base Camp',           alt: '  850 m' },
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
      const mid = window.scrollY + window.innerHeight * 0.42
      for (let i = STOPS.length - 1; i >= 0; i--) {
        const el = document.getElementById(STOPS[i].id)
        if (el && el.offsetTop <= mid) {
          setCurrent(STOPS[i])
          return
        }
      }
      setCurrent(STOPS[0])
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
        zIndex: 8000,
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
