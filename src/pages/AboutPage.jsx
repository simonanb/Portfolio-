import { useNavigate } from 'react-router-dom'

const SKILLS = [
  'Figma', 'UI Design', 'UX Research', 'Prototyping',
  'Branding', 'Graphic Design', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator',
]

const INTERESTS = [
  { emoji: '🏔', label: 'Snowboarding',  desc: 'Found on slopes when not on screens.' },
  { emoji: '🎨', label: 'Air dry clay',  desc: 'Hands in clay, mind on forms.' },
  { emoji: '💻', label: 'UI/UX Design',  desc: 'Obsessed with beautiful, usable interfaces.' },
]

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="page-enter" style={{ background: '#F7F8FA', minHeight: '100vh' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px 100px' }}>

        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

        <h1 style={{
          fontFamily: 'Novella, DM Sans, sans-serif',
          fontSize: 'clamp(34px, 6vw, 52px)',
          fontWeight: 400, color: '#1A1A2A',
          marginTop: 32, marginBottom: 44, lineHeight: 1.05,
        }}>
          About me
        </h1>

        {/* Two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(255px, 1fr))',
          gap: 48, marginBottom: 64,
        }}>
          {/* Left: bio + interests */}
          <div>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#5A6A7A', lineHeight: 1.8, marginBottom: 20 }}>
              I'm Simona — a UI/UX designer, graphic designer, and clay artist. I obsess over
              the intersection of beautiful and usable: interfaces that feel right, brands that
              speak clearly, and objects you want to hold.
            </p>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#5A6A7A', lineHeight: 1.8, marginBottom: 32 }}>
              When I'm not designing on a screen, I'm shaping things with my hands or finding
              steep slopes to point skis down. I believe the same attention you give to a
              well-considered layout belongs in everything you make.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {INTERESTS.map(({ emoji, label, desc }) => (
                <div key={label} style={{
                  background: 'white',
                  border: '1px solid #E4EAF2',
                  borderRadius: 12, padding: '13px 16px',
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{emoji}</span>
                  <div>
                    <p style={{ fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#1A1A2A', marginBottom: 2 }}>
                      {label}
                    </p>
                    <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#9AAAB8' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skills + quote */}
          <div>
            <h2 style={{
              fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 20, fontWeight: 500,
              color: '#1A1A2A', marginBottom: 16,
            }}>
              Skills
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
              {SKILLS.map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #EBF5FA 0%, #EEF5FF 100%)',
              borderRadius: 14, padding: '20px 22px',
              border: '1px solid rgba(74,158,191,0.14)',
            }}>
              <p style={{
                fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 16, fontWeight: 400,
                color: '#2A3A4A', lineHeight: 1.62,
              }}>
                "I believe the best designs disappear — they just feel obvious in hindsight."
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div style={{ textAlign: 'center', paddingTop: 48, borderTop: '1px solid #E4EAF0' }}>
          <h2 style={{
            fontFamily: 'Novella, DM Sans, sans-serif',
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 400, color: '#1A1A2A', marginBottom: 18,
          }}>
            Let's make something.
          </h2>
          <a
            href="mailto:hello@simona.design"
            style={{
              display: 'inline-block',
              background: '#4A9EBF', color: 'white',
              borderRadius: 999, padding: '10px 26px',
              fontFamily: 'Inter', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', marginBottom: 20,
            }}
          >
            hello@simona.design
          </a>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28 }}>
            {['LinkedIn', 'Behance'].map(l => (
              <a
                key={l}
                href="#"
                style={{ fontFamily: 'Inter', fontSize: 13, color: '#7A8A9A', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#4A9EBF' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#7A8A9A' }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#C0CDD8' }}>© Simona 2026</span>
        </div>
      </div>
    </div>
  )
}
