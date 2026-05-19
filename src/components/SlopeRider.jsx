import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Snow from './Snow'

/**
 * Waypoints as % of viewport (x: 0-100, y: 0-100)
 * Kept in the rightmost ~18% so slope stays clear of content.
 */
const WAYPOINTS = [
  { x: 84, y: 2 },
  { x: 93, y: 12 },
  { x: 80, y: 24 },
  { x: 93, y: 36 },
  { x: 80, y: 49 },
  { x: 93, y: 61 },
  { x: 80, y: 74 },
  { x: 92, y: 86 },
  { x: 83, y: 97 },
]

function lerp(a, b, t) { return a + (b - a) * t }

function getPositionAtProgress(progress, points) {
  const count = points.length - 1
  const idx = Math.min(Math.floor(progress * count), count - 1)
  const t = progress * count - idx
  const p1 = points[idx]
  const p2 = points[idx + 1]
  // compress x-delta so the angle doesn't go too steep visually
  const angle = Math.atan2(p2.y - p1.y, (p2.x - p1.x) * 0.35) * (180 / Math.PI)
  return { x: lerp(p1.x, p2.x, t), y: lerp(p1.y, p2.y, t), angle }
}

/** Build an SVG cubic-bezier path from waypoints (viewBox 0 0 100 100). */
function buildSlopePath(pts) {
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1], c = pts[i]
    const mx = p.x + (c.x - p.x) * 0.5
    d += ` C ${mx} ${p.y} ${mx} ${c.y} ${c.x} ${c.y}`
  }
  return d
}

const SLOPE_D = buildSlopePath(WAYPOINTS)

// Left tree configs [x offset in viewBox 0-1440, scale]
const LEFT_TREES  = [[-10,1],[28,1.15],[65,0.9],[100,1.05],[135,1.2],[175,0.85]]
const RIGHT_TREES = [[1390,1],[1350,1.1],[1310,0.95],[1270,1.15],[1235,0.88],[1200,1.05]]

function TreeGroup({ x, scale, flip = false }) {
  const baseY = 900 - 220 * scale
  return (
    <g transform={`translate(${x},${baseY}) scale(${scale})`}>
      <polygon points="30,0 0,80 15,80 15,220 45,220 45,80 60,80"   fill="#243B30" />
      <polygon points="30,30 2,100 12,100 12,130 48,130 48,100 58,100" fill="#2A4035" />
      <polygon points="30,65 4,130 14,130 14,155 46,155 46,130 56,130" fill="#1E3228" />
    </g>
  )
}

export default function SlopeRider() {
  const [isMobile, setMobile] = useState(() => window.innerWidth < 768)
  const boarderRef = useRef(null)
  const linesRef   = useRef(null)
  const farRef     = useRef(null)
  const midRef     = useRef(null)
  const treesRef   = useRef(null)
  const groundRef  = useRef(null)
  const lastProg   = useRef(0)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return

    // Set initial position
    const initPos = getPositionAtProgress(0, WAYPOINTS)
    if (boarderRef.current) {
      gsap.set(boarderRef.current, {
        left: `${initPos.x}%`,
        top:  `${initPos.y}%`,
        xPercent: -50,
        yPercent: -50,
        rotation: initPos.angle,
      })
    }

    const onScroll = () => {
      const scrollY   = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress  = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0

      const vel = Math.abs(progress - lastProg.current) * 60
      lastProg.current = progress

      const pos = getPositionAtProgress(progress, WAYPOINTS)

      // Snowboarder position + tilt
      if (boarderRef.current) {
        gsap.set(boarderRef.current, {
          left:     `${pos.x}%`,
          top:      `${pos.y}%`,
          rotation: vel > 0.6 ? pos.angle - 16 : pos.angle,
        })
      }

      // Speed lines
      if (linesRef.current) {
        gsap.to(linesRef.current, { opacity: vel > 0.5 ? 1 : 0, duration: 0.18 })
      }

      // Parallax mountain layers (caps so they never fully leave viewport)
      const p60  = Math.min(progress * 60,  60)
      const p90  = Math.min(progress * 90,  90)
      const p130 = Math.min(progress * 130, 130)
      const p160 = Math.min(progress * 160, 160)

      if (farRef.current)    gsap.set(farRef.current,    { y: -p60  })
      if (midRef.current)    gsap.set(midRef.current,    { y: -p90  })
      if (treesRef.current)  gsap.set(treesRef.current,  { y: -p130 })
      if (groundRef.current) gsap.set(groundRef.current, { y: -p160 })
    }

    onScroll() // run once on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* ─── Mountain background: fixed, behind all sections ─────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Sky */}
        <div style={{ position: 'absolute', inset: 0, background: '#C8D8E8' }} />

        {/* Far mountains */}
        <div ref={farRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <polygon points="0,900 0,580 140,370 310,450 490,290 670,410 840,280 1020,370 1200,310 1380,360 1440,350 1440,900" fill="#B2C6D4" />
            <polygon points="140,370 160,330 178,370" fill="rgba(255,255,255,0.55)" />
            <polygon points="490,290 514,248 538,290" fill="rgba(255,255,255,0.55)" />
            <polygon points="840,280 862,238 884,280" fill="rgba(255,255,255,0.55)" />
            <polygon points="1200,310 1220,268 1242,310" fill="rgba(255,255,255,0.55)" />
          </svg>
        </div>

        {/* Mid mountains */}
        <div ref={midRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <polygon points="0,900 0,700 100,590 220,640 380,550 540,620 700,570 860,630 1020,580 1180,620 1340,590 1440,600 1440,900" fill="#8DAFC2" />
            <polygon points="380,550 402,518 424,550" fill="rgba(255,255,255,0.4)" />
            <polygon points="700,570 720,538 742,570" fill="rgba(255,255,255,0.4)" />
          </svg>
        </div>

        {/* Pine trees */}
        <div ref={treesRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            {LEFT_TREES.map(([x, s], i) => <TreeGroup key={`l${i}`} x={x} scale={s} />)}
            {RIGHT_TREES.map(([x, s], i) => <TreeGroup key={`r${i}`} x={x} scale={s} />)}
          </svg>
        </div>

        {/* Snow ground */}
        <div ref={groundRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path d="M0,840 Q180,808 360,822 Q540,836 720,812 Q900,788 1080,814 Q1260,840 1440,820 L1440,900 L0,900 Z" fill="white" />
            <path d="M0,840 Q180,808 360,822 Q540,836 720,812 Q900,788 1080,814 Q1260,840 1440,820" stroke="rgba(168,192,212,0.3)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Snow particles float on the mountain bg */}
        <Snow />
      </div>

      {/* ─── Slope + Snowboarder: fixed, above all sections ──────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          pointerEvents: 'none',
        }}
      >
        {/* Dashed slope path */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          <path
            d={SLOPE_D}
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="0.28"
            strokeDasharray="1.4 0.7"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: 2.5 }}
          />
        </svg>

        {/* Snowboarder */}
        <div
          ref={boarderRef}
          style={{
            position: 'absolute',
            width: 48,
            height: 64,
            willChange: 'transform',
          }}
        >
          {/* Speed lines */}
          <div
            ref={linesRef}
            style={{
              position: 'absolute',
              right: '105%',
              top: '32%',
              opacity: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {[18, 12, 7].map((w, i) => (
              <div
                key={i}
                style={{
                  width: w,
                  height: 1.5,
                  borderRadius: 1,
                  background: 'rgba(255,255,255,0.88)',
                  alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
                }}
              />
            ))}
          </div>

          {/* Character SVG */}
          <svg viewBox="0 0 60 80" width="48" height="64">
            {/* Helmet */}
            <ellipse cx="30" cy="13" rx="12" ry="12" fill="#1C2B38" />
            <ellipse cx="25" cy="10" rx="4" ry="3" fill="rgba(255,255,255,0.12)" />
            {/* Goggles */}
            <rect x="19" y="16" width="22" height="8" rx="4" fill="#E8921A" />
            <rect x="20" y="17" width="9" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
            <rect x="31" y="17" width="9" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
            {/* Jacket */}
            <rect x="19" y="23" width="22" height="22" rx="5" fill="#4A9EBF" />
            <line x1="30" y1="24" x2="30" y2="44" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
            {/* Arms */}
            <rect x="8"  y="25" width="12" height="7" rx="3.5" fill="#3D87A6" transform="rotate(-20 14 28)" />
            <rect x="38" y="27" width="12" height="7" rx="3.5" fill="#3D87A6" transform="rotate(20 44 30)" />
            {/* Gloves */}
            <circle cx="9"  cy="32" r="3.5" fill="#1C2B38" />
            <circle cx="51" cy="34" r="3.5" fill="#1C2B38" />
            {/* Pants */}
            <rect x="19" y="43" width="10" height="18" rx="3" fill="#1C2B38" />
            <rect x="31" y="43" width="10" height="18" rx="3" fill="#1C2B38" />
            {/* Boots */}
            <rect x="17" y="57" width="13" height="8" rx="3" fill="#243B30" />
            <rect x="30" y="57" width="13" height="8" rx="3" fill="#243B30" />
            {/* Board */}
            <ellipse cx="30" cy="70" rx="24" ry="4.5" fill="#1C2B38" transform="rotate(-7 30 70)" />
            <ellipse cx="30" cy="70" rx="20" ry="2.5" fill="#2C3E50" transform="rotate(-7 30 70)" />
            <rect x="19" y="68" width="8" height="3" rx="1.5" fill="#4A9EBF" transform="rotate(-7 23 69.5)" />
            <rect x="33" y="66" width="8" height="3" rx="1.5" fill="#4A9EBF" transform="rotate(-7 37 67.5)" />
          </svg>
        </div>
      </div>
    </>
  )
}
