import { motion } from 'framer-motion'

const ENTRIES = [
  {
    title: 'Freelance UI/UX Designer',
    period: '2023 — present',
    desc: 'Working with startups and studios on product design — from early discovery to polished interfaces.',
    tag: 'Ongoing',
  },
  {
    title: 'Ritual Cafe Branding',
    period: '2024',
    desc: 'Brand identity for an intimate coffee experience in Skopje — wordmark, typography system, and print collateral.',
    tag: 'Brand',
  },
  {
    title: 'Донирај.мк — Community Platform',
    period: '2025',
    desc: 'End-to-end design for a free donation and item-sharing platform built for Macedonia.',
    tag: 'Product',
  },
]

export default function Experience() {
  return (
    <section
      id="stop-experience"
      style={{
        background: '#F0EDE8',
        padding: '100px 0 112px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Warm ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(240,180,100,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: '0 auto',
          padding: '0 40px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 64 }}
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
            Lodge Village
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 11,
              color: 'rgba(26,26,42,0.45)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            where I've been
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 0,
              top: 12,
              bottom: 12,
              width: 1,
              background: 'linear-gradient(to bottom, #4A9EBF, rgba(74,158,191,0.1))',
              opacity: 0.3,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ENTRIES.map((entry, i) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: 'flex',
                  gap: 32,
                  paddingLeft: 28,
                  paddingBottom: i < ENTRIES.length - 1 ? 48 : 0,
                  position: 'relative',
                }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: -5,
                    top: 6,
                    width: 11,
                    height: 11,
                    borderRadius: '50%',
                    background: '#4A9EBF',
                    border: '2px solid #F0EDE8',
                    boxShadow: '0 0 0 1px rgba(74,158,191,0.4)',
                  }}
                />

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      flexWrap: 'wrap',
                      marginBottom: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Novella, DM Sans, sans-serif',
                        fontSize: 22,
                        fontWeight: 600,
                        color: '#1A1A2A',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {entry.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 10,
                        fontWeight: 600,
                        color: '#4A9EBF',
                        background: 'rgba(74,158,191,0.1)',
                        border: '1px solid rgba(74,158,191,0.2)',
                        borderRadius: 100,
                        padding: '2px 9px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {entry.tag}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 12,
                      fontWeight: 500,
                      color: '#4A9EBF',
                      letterSpacing: '0.04em',
                      marginBottom: 10,
                    }}
                  >
                    {entry.period}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'rgba(26,26,42,0.58)',
                      maxWidth: 560,
                    }}
                  >
                    {entry.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Placeholder note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: 52,
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            fontStyle: 'italic',
            color: 'rgba(26,26,42,0.28)',
            paddingLeft: 28,
          }}
        >
          More stops ahead — updating as I ride.
        </motion.p>
      </div>
    </section>
  )
}
