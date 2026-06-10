import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const SKILLS = [
  'Figma', 'UI Design', 'UX Research', 'Prototyping',
  'Branding', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator',
]

function DenseTree({ height, color, opacity }) {
  const w = height * 0.42
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 42 160"
      fill="none"
      style={{ display: 'block', opacity }}
    >
      <polygon points="21,2 0,42 9,42 9,56 33,56 33,42 42,42" fill={color} />
      <polygon points="21,20 1,60 10,60 10,74 32,74 32,60 41,60" fill={color} />
      <polygon points="21,40 2,80 10,80 10,94 32,94 32,80 40,80" fill={color} />
      <polygon points="21,60 3,100 11,100 11,114 31,114 31,100 39,100" fill={color} />
      <polygon points="21,80 4,118 11,118 11,130 31,130 31,118 38,118" fill={color} />
      <rect x="17" y="130" width="8" height="30" fill={color} />
    </svg>
  )
}

export default function Skills() {
  const pillsRef = useRef(null)

  useEffect(() => {
    if (!pillsRef.current) return
    const pills = pillsRef.current.querySelectorAll('.skill-pill')

    gsap.from(pills, {
      y: 22,
      opacity: 0,
      scale: 0.8,
      stagger: 0.06,
      duration: 0.55,
      ease: 'back.out(1.8)',
      scrollTrigger: {
        trigger: pillsRef.current,
        start: 'top 78%',
        once: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const leftTrees  = [0.7, 0.9, 1.05, 0.85, 1.0, 0.75, 0.95, 0.8, 1.1, 0.65]
  const rightTrees = [0.65, 1.0, 0.8, 0.95, 0.75, 1.05, 0.85, 1.0, 0.9, 0.7]

  return (
    <section
      id="stop-skills"
      style={{
        background: '#E8F2F7',
        padding: '100px 0 112px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dense forest left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 2,
          pointerEvents: 'none',
        }}
      >
        {leftTrees.map((scale, i) => (
          <DenseTree
            key={i}
            height={180 * scale}
            color="#1E3228"
            opacity={0.13 + (i % 3) * 0.04}
          />
        ))}
      </div>

      {/* Dense forest right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 2,
          pointerEvents: 'none',
        }}
      >
        {rightTrees.map((scale, i) => (
          <DenseTree
            key={i}
            height={180 * scale}
            color="#1E3228"
            opacity={0.13 + (i % 3) * 0.04}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '0 40px',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            style={{
              fontFamily: 'Novella, DM Sans, sans-serif',
              fontSize: 'clamp(34px, 5vw, 48px)',
              fontWeight: 700,
              color: '#1A1A2A',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              marginBottom: 10,
            }}
          >
            Forest Ride
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              color: 'rgba(26,26,42,0.48)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontSize: 11,
              marginBottom: 52,
            }}
          >
            tools I ride with
          </p>
        </motion.div>

        <div
          ref={pillsRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
          }}
        >
          {SKILLS.map(skill => (
            <span key={skill} className="skill-pill" style={{ fontSize: 14, padding: '9px 22px' }}>
              {skill}
            </span>
          ))}
        </div>

        {/* Subtle tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: 52,
            fontFamily: 'Novella, DM Sans, sans-serif',
            fontSize: 18,
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'rgba(26,26,42,0.3)',
            letterSpacing: '-0.01em',
          }}
        >
          "In the zone — trees on both sides."
        </motion.p>
      </div>
    </section>
  )
}
