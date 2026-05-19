import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Донирај.мк',
    desc: 'A free donation & item-sharing platform for Macedonia — designed to make giving as frictionless as possible.',
    tags: ['UI Design', 'Next.js', 'Supabase'],
  },
  {
    title: 'Ritual',
    desc: 'Cafe branding for an intimate coffee experience in Skopje — warmth, ritual, and typographic personality.',
    tags: ['Brand Identity', 'Typography', 'Print'],
  },
  {
    title: 'Portfolio',
    desc: 'Scroll-driven storytelling meets personal identity — this site.',
    tags: ['Creative Dev', 'GSAP', 'React'],
  },
]

export default function Projects() {
  const headingRef  = useRef(null)
  const underlineRef = useRef(null)

  useEffect(() => {
    const path = underlineRef.current
    if (!path) return

    const length = path.getTotalLength()
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

    ScrollTrigger.create({
      trigger: headingRef.current,
      start: 'top 82%',
      end: 'top 48%',
      scrub: 1,
      onUpdate(self) {
        gsap.set(path, { strokeDashoffset: length * (1 - self.progress) })
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section
      id="stop-projects"
      style={{
        background: '#F7F8FA',
        padding: '96px 0 112px',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
              color: '#1A1A2A',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              display: 'inline-block',
              position: 'relative',
            }}
          >
            Terrain Park
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11,
              color: 'rgba(26,26,42,0.45)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: 10,
            }}
          >
            some things I've built
          </p>
          {/* SVG underline that draws on scroll */}
          <div style={{ marginTop: 6 }}>
            <svg
              width="80"
              height="10"
              viewBox="0 0 80 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={underlineRef}
                d="M2 7 C20 2, 40 9, 60 4 C70 2, 76 6, 78 7"
                stroke="#4A9EBF"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 24,
          }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.75,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="project-card">
                {/* Tag row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 11,
                        fontWeight: 500,
                        color: '#4A9EBF',
                        background: 'rgba(74,158,191,0.08)',
                        border: '1px solid rgba(74,158,191,0.2)',
                        borderRadius: 100,
                        padding: '3px 10px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: 26,
                    fontWeight: 600,
                    color: '#1A1A2A',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.15,
                    marginBottom: 12,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: 'rgba(26,26,42,0.6)',
                  }}
                >
                  {project.desc}
                </p>

                <div className="view-link">
                  View →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
