import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const SKILLS = [
  'Figma', 'UI Design', 'UX Research', 'Prototyping',
  'Next.js', 'Tailwind CSS', 'Framer Motion', 'Branding',
]

const INTERESTS = [
  { icon: '🏔', label: 'Snowboarding' },
  { icon: '🎨', label: 'Air dry clay' },
  { icon: '💻', label: 'UI/UX Design' },
]

function PineTreeSilhouette({ height = 160, color = '#243B30', opacity = 1 }) {
  const w = height * 0.38
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 38 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', opacity }}
    >
      <polygon points="19,4 0,55 8,55 8,70 30,70 30,55 38,55" fill={color} />
      <polygon points="19,28 1,78 9,78 9,92 29,92 29,78 37,78" fill={color} />
      <polygon points="19,55 2,102 10,102 10,116 28,116 28,102 36,102" fill={color} />
      <polygon points="19,80 4,124 11,124 11,138 27,138 27,124 34,124" fill={color} />
      <rect x="15" y="138" width="8" height="22" fill={color} />
    </svg>
  )
}

export default function About() {
  const pillsRef = useRef(null)

  useEffect(() => {
    if (!pillsRef.current) return
    const pills = pillsRef.current.querySelectorAll('.skill-pill')

    gsap.from(pills, {
      y: 18,
      opacity: 0,
      scale: 0.82,
      stagger: 0.055,
      duration: 0.5,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: pillsRef.current,
        start: 'top 78%',
        once: true,
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section
      style={{
        background: '#F0F4F7',
        padding: '100px 0 112px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Pine trees — left edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 4,
          pointerEvents: 'none',
        }}
      >
        {[0.7, 0.85, 1.0, 0.9, 0.75].map((scale, i) => (
          <PineTreeSilhouette
            key={i}
            height={160 * scale}
            color="#243B30"
            opacity={0.12 + i * 0.03}
          />
        ))}
      </div>

      {/* Pine trees — right edge */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 4,
          pointerEvents: 'none',
        }}
      >
        {[0.75, 0.9, 1.0, 0.85, 0.7].map((scale, i) => (
          <PineTreeSilhouette
            key={i}
            height={160 * scale}
            color="#243B30"
            opacity={0.15 - i * 0.02}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 64,
            alignItems: 'start',
          }}
        >
          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(30px, 4vw, 40px)',
                fontWeight: 700,
                color: '#1A1A2A',
                letterSpacing: '-0.02em',
                marginBottom: 24,
              }}
            >
              About me
            </h2>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                lineHeight: 1.75,
                color: 'rgba(26,26,42,0.68)',
                marginBottom: 36,
                maxWidth: 440,
              }}
            >
              I'm Simona, a UI/UX designer from Macedonia. I care about
              making things that feel as good as they look — whether that's
              a digital product, a clay figure, or a clean run down fresh
              powder.
            </p>

            {/* Interest cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {INTERESTS.map(({ icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="interest-card">
                    <span style={{ fontSize: 20 }}>{icon}</span>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 14,
                        fontWeight: 500,
                        color: '#1A1A2A',
                      }}
                    >
                      {label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(30px, 4vw, 40px)',
                fontWeight: 700,
                color: '#1A1A2A',
                letterSpacing: '-0.02em',
                marginBottom: 28,
              }}
            >
              Skills
            </h2>

            <div
              ref={pillsRef}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              {SKILLS.map(skill => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            {/* Decorative accent line */}
            <div
              style={{
                marginTop: 40,
                height: 1,
                background: 'linear-gradient(90deg, #4A9EBF, transparent)',
                opacity: 0.25,
                borderRadius: 1,
              }}
            />

            <p
              style={{
                marginTop: 28,
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                color: 'rgba(26,26,42,0.4)',
                lineHeight: 1.6,
                fontStyle: 'italic',
              }}
            >
              Based in Macedonia · Available for freelance projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
