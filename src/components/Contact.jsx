import { motion } from 'framer-motion'

function PineTreeSmall({ color = '#243B30', opacity = 1 }) {
  return (
    <svg
      width="22"
      height="44"
      viewBox="0 0 22 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', opacity }}
    >
      <polygon points="11,2 0,16 4,16 4,22 18,22 18,16 22,16" fill={color} />
      <polygon points="11,10 1,24 5,24 5,30 17,30 17,24 21,24" fill={color} />
      <polygon points="11,19 2,32 5,32 5,38 17,38 17,32 20,32" fill={color} />
      <rect x="8" y="38" width="6" height="6" fill={color} />
    </svg>
  )
}

export default function Contact() {
  return (
    <section
      id="stop-contact"
      style={{
        background: '#F7F8FA',
        padding: '112px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 40px',
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact-heading-wrapper">
            <h2
              style={{
                fontFamily: 'Novella, DM Sans, sans-serif',
                fontSize: 'clamp(40px, 7vw, 64px)',
                fontWeight: 700,
                color: '#1A1A2A',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
                display: 'inline',
              }}
            >
              Base Camp
            </h2>
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
            color: 'rgba(26,26,42,0.55)',
            marginTop: 20,
            lineHeight: 1.6,
          }}
        >
          Let's make something together. Open to design projects, collaborations, and good coffee.
        </motion.p>

        {/* Email button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: 40 }}
        >
          <a
            href="mailto:hello@simona.design"
            className="cursor-hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'Inter, sans-serif',
              fontSize: 15,
              fontWeight: 500,
              color: '#4A9EBF',
              background: 'white',
              border: '1.5px solid #4A9EBF',
              borderRadius: 100,
              padding: '12px 28px',
              textDecoration: 'none',
              transition: 'background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
              boxShadow: '0 2px 16px rgba(74,158,191,0.08)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#4A9EBF'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(74,158,191,0.22)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = '#4A9EBF'
              e.currentTarget.style.boxShadow = '0 2px 16px rgba(74,158,191,0.08)'
            }}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0.75" y="0.75" width="14.5" height="10.5" rx="1.25" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M1 1.5L8 7L15 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            hello@simona.design
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            marginTop: 24,
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          {[
            { label: 'LinkedIn', href: '#' },
            { label: 'Behance', href: '#' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="cursor-hover"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                color: 'rgba(26,26,42,0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4A9EBF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(26,26,42,0.45)')}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Pine tree treeline ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        style={{
          marginTop: 80,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: 6,
          padding: '0 20px',
        }}
      >
        {[
          0.55, 0.7, 0.85, 0.95, 1.0, 0.9, 1.05, 0.8, 0.7, 0.6, 0.85, 0.95,
          1.0, 0.9, 0.75, 0.65, 0.8, 0.95, 0.7, 0.55,
        ].map((scale, i) => (
          <div
            key={i}
            style={{ transform: `scaleY(${scale})`, transformOrigin: 'bottom center' }}
          >
            <PineTreeSmall
              color="#243B30"
              opacity={0.1 + (scale - 0.55) * 0.3}
            />
          </div>
        ))}
      </motion.div>

      {/* ── Footer ── */}
      <div
        style={{
          background: '#EDF1F4',
          marginTop: 0,
          padding: '20px 40px',
          textAlign: 'center',
          borderTop: '1px solid rgba(74,158,191,0.08)',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12,
            color: 'rgba(26,26,42,0.38)',
            letterSpacing: '0.04em',
          }}
        >
          © Simona 2026 · Made with care in Macedonia
        </p>
      </div>
    </section>
  )
}
