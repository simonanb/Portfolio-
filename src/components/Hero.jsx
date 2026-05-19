import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Snow from './Snow'

// Waypoints as percentages of hero width/height
const PATH_WAYPOINTS = [
  { x: 50, y: 4 },
  { x: 62, y: 18 },
  { x: 54, y: 33 },
  { x: 40, y: 50 },
  { x: 47, y: 67 },
  { x: 60, y: 82 },
  { x: 50, y: 97 },
]

const ALTITUDE_STAGES = [
  { min: 0,    label: 'Peak',        altitude: '2 400 m', icon: '▲' },
  { min: 0.25, label: 'Mid Slope',   altitude: '1 800 m', icon: '▲' },
  { min: 0.5,  label: 'Lower Slope', altitude: '1 200 m', icon: '▲' },
  { min: 0.75, label: 'Base Lodge',  altitude: '  900 m', icon: '▲' },
]

function lerp(a, b, t) {
  return a + (b - a) * t
}

function getPositionAtProgress(progress, points) {
  const count = points.length - 1
  const idx = Math.min(Math.floor(progress * count), count - 1)
  const t = progress * count - idx
  const p1 = points[idx]
  const p2 = points[idx + 1]
  // angle in degrees (scaled x-axis so it matches visual aspect ratio)
  const angle = Math.atan2(p2.y - p1.y, (p2.x - p1.x) * 0.5) * (180 / Math.PI)
  return { x: lerp(p1.x, p2.x, t), y: lerp(p1.y, p2.y, t), angle }
}

// Framer Motion variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
}
const item = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const heroRef       = useRef(null)
  const farRef        = useRef(null)
  const midRef        = useRef(null)
  const treesRef      = useRef(null)
  const groundRef     = useRef(null)
  const boarderRef    = useRef(null)
  const linesRef      = useRef(null)
  const lastProg      = useRef(0)
  const [stage, setStage]   = useState(ALTITUDE_STAGES[0])
  const [isMobile, setMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const hero = heroRef.current
    if (!hero) return

    const heroH = hero.offsetHeight
    const heroW = hero.offsetWidth

    // Initial snowboarder position
    const initPos = getPositionAtProgress(0, PATH_WAYPOINTS)
    const boarder = boarderRef.current
    if (boarder) {
      gsap.set(boarder, {
        x: (initPos.x / 100) * heroW - 30,
        y: (initPos.y / 100) * heroH - 40,
        rotation: initPos.angle,
      })
    }

    // Parallax layers
    const layerConfig = [
      { ref: farRef,    speed: 0.12 },
      { ref: midRef,    speed: 0.22 },
      { ref: treesRef,  speed: 0.42 },
      { ref: groundRef, speed: 0.52 },
    ]

    layerConfig.forEach(({ ref, speed }) => {
      if (!ref.current) return
      gsap.to(ref.current, {
        y: -heroH * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    // Snowboarder follows path + altitude label
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate(self) {
        const p = self.progress
        const velocity = Math.abs(p - lastProg.current) * 80
        lastProg.current = p

        const pos = getPositionAtProgress(p, PATH_WAYPOINTS)
        const w = hero.offsetWidth
        const h = hero.offsetHeight

        if (boarderRef.current) {
          gsap.set(boarderRef.current, {
            x: (pos.x / 100) * w - 30,
            y: (pos.y / 100) * h - 40,
            rotation: velocity > 1.5 ? pos.angle - 18 : pos.angle,
          })
        }

        if (linesRef.current) {
          gsap.to(linesRef.current, {
            opacity: velocity > 1.2 ? 1 : 0,
            duration: 0.25,
          })
        }

        const active = [...ALTITUDE_STAGES].reverse().find(s => p >= s.min)
        setStage(active || ALTITUDE_STAGES[0])
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [isMobile])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        background: '#C8D8E8',
        overflow: 'hidden',
      }}
    >
      {/* ── Mountain Layers (desktop) ── */}
      <div className="mountain-layers" style={{ position: 'absolute', inset: 0 }}>
        {/* Far mountains */}
        <div
          ref={farRef}
          style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <polygon
              points="0,900 0,580 140,370 310,450 490,290 670,410 840,280 1020,370 1200,310 1380,360 1440,350 1440,900"
              fill="#B2C6D4"
            />
            {/* Snow caps */}
            <polygon points="140,370 160,330 178,370" fill="rgba(255,255,255,0.55)" />
            <polygon points="490,290 514,248 538,290" fill="rgba(255,255,255,0.55)" />
            <polygon points="840,280 862,238 884,280" fill="rgba(255,255,255,0.55)" />
            <polygon points="1200,310 1220,268 1242,310" fill="rgba(255,255,255,0.55)" />
          </svg>
        </div>

        {/* Mid mountains */}
        <div
          ref={midRef}
          style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <polygon
              points="0,900 0,700 100,590 220,640 380,550 540,620 700,570 860,630 1020,580 1180,620 1340,590 1440,600 1440,900"
              fill="#8DAFC2"
            />
            <polygon points="380,550 402,518 424,550" fill="rgba(255,255,255,0.4)" />
            <polygon points="700,570 720,538 742,570" fill="rgba(255,255,255,0.4)" />
          </svg>
        </div>

        {/* Pine trees */}
        <div
          ref={treesRef}
          style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            {/* Left edge trees */}
            {[
              { x: -10, scale: 1.0 },
              { x: 28,  scale: 1.15 },
              { x: 65,  scale: 0.9 },
              { x: 100, scale: 1.05 },
              { x: 135, scale: 1.2 },
              { x: 175, scale: 0.85 },
            ].map((t, i) => (
              <g key={`tl-${i}`} transform={`translate(${t.x}, ${900 - 220 * t.scale}) scale(${t.scale})`}>
                <polygon points="30,0 0,80 15,80 15,220 45,220 45,80 60,80" fill="#243B30" />
                <polygon points="30,30 2,100 12,100 12,130 48,130 48,100 58,100" fill="#2A4035" />
                <polygon points="30,65 4,130 14,130 14,155 46,155 46,130 56,130" fill="#1E3228" />
              </g>
            ))}
            {/* Right edge trees */}
            {[
              { x: 1390, scale: 1.0 },
              { x: 1350, scale: 1.1 },
              { x: 1310, scale: 0.95 },
              { x: 1270, scale: 1.15 },
              { x: 1235, scale: 0.88 },
              { x: 1200, scale: 1.05 },
            ].map((t, i) => (
              <g key={`tr-${i}`} transform={`translate(${t.x}, ${900 - 220 * t.scale}) scale(${t.scale})`}>
                <polygon points="30,0 0,80 15,80 15,220 45,220 45,80 60,80" fill="#243B30" />
                <polygon points="30,30 2,100 12,100 12,130 48,130 48,100 58,100" fill="#2A4035" />
                <polygon points="30,65 4,130 14,130 14,155 46,155 46,130 56,130" fill="#1E3228" />
              </g>
            ))}
          </svg>
        </div>

        {/* Snow ground */}
        <div
          ref={groundRef}
          style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <path
              d="M0,840 Q180,808 360,822 Q540,836 720,812 Q900,788 1080,814 Q1260,840 1440,820 L1440,900 L0,900 Z"
              fill="white"
            />
            {/* Subtle shadow on snow edge */}
            <path
              d="M0,840 Q180,808 360,822 Q540,836 720,812 Q900,788 1080,814 Q1260,840 1440,820"
              stroke="rgba(168,192,212,0.3)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* ── Slope Path (desktop) ── */}
      <div
        className="slope-path-wrap"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <path
            d="M720,0 C900,120 530,270 710,450 C890,630 440,760 720,900"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="10 6"
          />
        </svg>
      </div>

      {/* ── Snowboarder (desktop) ── */}
      <div
        className="snowboarder-wrap"
        ref={boarderRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 60,
          height: 80,
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      >
        {/* Speed lines */}
        <div
          ref={linesRef}
          style={{
            position: 'absolute',
            right: '100%',
            top: '35%',
            opacity: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            paddingRight: 4,
          }}
        >
          {[20, 14, 9].map((w, i) => (
            <div
              key={i}
              style={{
                width: w,
                height: 1.5,
                borderRadius: 1,
                background: 'rgba(255,255,255,0.85)',
                alignSelf: i === 1 ? 'flex-end' : 'flex-start',
              }}
            />
          ))}
        </div>

        {/* Snowboarder SVG */}
        <svg viewBox="0 0 60 80" width="60" height="80">
          {/* Helmet */}
          <ellipse cx="30" cy="13" rx="12" ry="12" fill="#1C2B38" />
          {/* Helmet highlight */}
          <ellipse cx="25" cy="10" rx="4" ry="3" fill="rgba(255,255,255,0.12)" />
          {/* Goggles */}
          <rect x="19" y="16" width="22" height="8" rx="4" fill="#E8921A" />
          <rect x="20" y="17" width="9" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          <rect x="31" y="17" width="9" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
          {/* Jacket */}
          <rect x="19" y="23" width="22" height="22" rx="5" fill="#4A9EBF" />
          {/* Jacket zipper line */}
          <line x1="30" y1="24" x2="30" y2="44" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          {/* Left arm */}
          <rect x="8" y="25" width="12" height="7" rx="3.5" fill="#3D87A6" transform="rotate(-20 14 28)" />
          {/* Right arm */}
          <rect x="38" y="27" width="12" height="7" rx="3.5" fill="#3D87A6" transform="rotate(20 44 30)" />
          {/* Gloves */}
          <circle cx="9" cy="32" r="3.5" fill="#1C2B38" />
          <circle cx="51" cy="34" r="3.5" fill="#1C2B38" />
          {/* Pants left */}
          <rect x="19" y="43" width="10" height="18" rx="3" fill="#1C2B38" />
          {/* Pants right */}
          <rect x="31" y="43" width="10" height="18" rx="3" fill="#1C2B38" />
          {/* Boots */}
          <rect x="17" y="57" width="13" height="8" rx="3" fill="#243B30" />
          <rect x="30" y="57" width="13" height="8" rx="3" fill="#243B30" />
          {/* Board */}
          <ellipse cx="30" cy="70" rx="24" ry="4.5" fill="#1C2B38" transform="rotate(-7 30 70)" />
          <ellipse cx="30" cy="70" rx="20" ry="2.5" fill="#2C3E50" transform="rotate(-7 30 70)" />
          {/* Board binding detail */}
          <rect x="19" y="68" width="8" height="3" rx="1.5" fill="#4A9EBF" transform="rotate(-7 23 69.5)" />
          <rect x="33" y="66" width="8" height="3" rx="1.5" fill="#4A9EBF" transform="rotate(-7 37 67.5)" />
        </svg>
      </div>

      {/* ── Snow particles (both mobile and desktop) ── */}
      <Snow />

      {/* ── Altitude Label (desktop) ── */}
      {!isMobile && (
        <div
          className="altitude-label"
          style={{
            position: 'absolute',
            top: 32,
            right: 36,
            textAlign: 'right',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(26,26,42,0.45)', marginBottom: 3 }}>
            altitude
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, color: 'rgba(26,26,42,0.6)', marginBottom: 2 }}>
            {stage.label}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 600, color: '#1A1A2A', letterSpacing: '-0.02em' }}>
            {stage.icon} {stage.altitude}
          </div>
        </div>
      )}

      {/* ── Hero Text ── */}
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

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
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
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(26,26,42,0.4)',
          }}
        >
          Scroll
        </span>
        <div
          className="scroll-bounce"
          style={{
            fontSize: 18,
            color: '#4A9EBF',
            lineHeight: 1,
          }}
        >
          ↓
        </div>
      </motion.div>
    </section>
  )
}
