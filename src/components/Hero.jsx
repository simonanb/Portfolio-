import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Snow from './Snow'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 44 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [isMobile, setMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="stop-hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        // Transparent on desktop — SlopeRider's mountain bg (z:-1) shows through.
        // Solid sky blue on mobile — SlopeRider doesn't render there.
        background: isMobile ? '#C8D8E8' : 'transparent',
        overflow: 'hidden',
      }}
    >
      {/* Mobile only: snow particles (desktop snow lives in SlopeRider) */}
      {isMobile && <Snow />}

      {/* Hero text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          position: 'absolute',
          top: isMobile ? 48 : 64,
          left: isMobile ? 24 : 56,
          zIndex: 10,
        }}
      >
        <motion.h1
          variants={item}
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(52px, 8.5vw, 96px)',
            fontWeight: 700,
            color: '#1A1A2A',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
          }}
        >
          Simona
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: isMobile ? 15 : 18,
            fontWeight: 400,
            color: '#4A9EBF',
            marginTop: 14,
            letterSpacing: '0.02em',
          }}
        >
          UI/UX Designer
        </motion.p>

        <motion.p
          variants={item}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            color: 'rgba(26,26,42,0.5)',
            marginTop: 8,
            maxWidth: 260,
            lineHeight: 1.55,
          }}
        >
          Designed on screens, shaped in clay,<br />found on slopes.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 10,
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 11,
          letterSpacing: '0.06em',
          color: 'rgba(26,26,42,0.45)',
        }}>
          drop in
        </span>
        <div className="scroll-bounce" style={{ fontSize: 18, color: '#4A9EBF', lineHeight: 1 }}>
          ↓
        </div>
      </motion.div>
    </section>
  )
}
