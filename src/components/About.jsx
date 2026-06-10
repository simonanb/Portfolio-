import { motion } from 'framer-motion'

const INTERESTS = [
  { icon: '🏔', label: 'Snowboarding', desc: 'Finding flow on fresh powder' },
  { icon: '🎨', label: 'Air dry clay', desc: 'Sculpting tiny worlds' },
  { icon: '💻', label: 'UI/UX Design', desc: 'Making the digital feel human' },
]

function PineTree({ height, color, opacity }) {
  const w = height * 0.38
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 38 160"
      fill="none"
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
  const leftTrees  = [0.65, 0.82, 1.0, 0.88, 0.72]
  const rightTrees = [0.72, 0.88, 1.0, 0.82, 0.65]

  return (
    <section
      id="stop-about"
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
        {leftTrees.map((scale, i) => (
          <PineTree
            key={i}
            height={170 * scale}
            color="#243B30"
            opacity={0.11 + i * 0.025}
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
        {rightTrees.map((scale, i) => (
          <PineTree
            key={i}
            height={170 * scale}
            color="#243B30"
            opacity={0.14 - i * 0.02}
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: 64,
            alignItems: 'start',
          }}
        >
          {/* ── Left: Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: 'Novella, DM Sans, sans-serif',
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 700,
                color: '#1A1A2A',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                marginBottom: 24,
              }}
            >
              About Me
            </h2>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 15,
                lineHeight: 1.78,
                color: 'rgba(26,26,42,0.65)',
                maxWidth: 420,
              }}
            >
              I'm Simona, a UI/UX designer from Macedonia. I care about
              making things that feel as good as they look — whether that's
              a digital product, a clay figure, or a clean run down fresh
              powder.
            </p>

            {/* Decorative line */}
            <div
              style={{
                marginTop: 32,
                height: 1,
                width: 48,
                background: '#4A9EBF',
                opacity: 0.4,
                borderRadius: 1,
              }}
            />

            <p
              style={{
                marginTop: 20,
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                color: 'rgba(26,26,42,0.4)',
                fontStyle: 'italic',
              }}
            >
              Based in Macedonia · Available for freelance
            </p>
          </motion.div>

          {/* ── Right: Interest Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {INTERESTS.map(({ icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.15 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="interest-card">
                    <span style={{ fontSize: 22, lineHeight: 1 }}>{icon}</span>
                    <div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#1A1A2A',
                        marginBottom: 2,
                      }}>
                        {label}
                      </div>
                      <div style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 12,
                        color: 'rgba(26,26,42,0.42)',
                      }}>
                        {desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
