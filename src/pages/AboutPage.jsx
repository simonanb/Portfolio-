import { useGoBack } from '../hooks/useGoBack'

const SKILLS = [
  'Figma', 'UI Design', 'UX Research', 'Prototyping',
  'Branding', 'Graphic Design', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator', 'Claude', 'Figma AI',
]

const INTERESTS = [
  { emoji: '🏔', label: 'Snowboarding',  desc: 'Found on slopes when not on screens.' },
  { emoji: '💻', label: 'UI/UX Design',  desc: 'Obsessed with beautiful, usable interfaces.' },
]

export default function AboutPage() {
  const goBack = useGoBack('/')

  return (
    <div className="page-enter" style={{ background: '#F7F8FA', minHeight: '100vh' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px 100px' }}>

        <button className="back-btn" onClick={goBack}>← Back</button>

        <h1 style={{
          fontFamily: 'Novella, DM Sans, sans-serif',
          fontSize: 'clamp(34px, 6vw, 52px)',
          fontWeight: 400, color: '#1A1A2A',
          marginTop: 32, marginBottom: 20, lineHeight: 1.05,
        }}>
          About me
        </h1>

        {/* Quick actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 44 }}>
          <a
            className="cta-btn"
            href={`${import.meta.env.BASE_URL}Simona-CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV ↓
          </a>
          <a className="cv-btn" href="mailto:simona.nb@hotmail.com">
            Get in touch
          </a>
        </div>

        {/* Two-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(255px, 1fr))',
          gap: 48, marginBottom: 64,
        }}>
          {/* Left: bio + interests */}
          <div>
            <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#5A6A7A', lineHeight: 1.8, marginBottom: 20 }}>
              I'm Simona, a UI/UX designer, graphic designer, and clay artist. I obsess over
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SKILLS.map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div style={{
          textAlign: 'center',
          background: '#EBF5FA', border: '1px solid #D3E8F2',
          borderRadius: 24, padding: '52px 24px',
        }}>
          <h2 style={{
            fontFamily: 'Novella, DM Sans, sans-serif',
            fontSize: 'clamp(30px, 5vw, 46px)',
            fontWeight: 400, color: '#1A1A2A', marginBottom: 12,
          }}>
            Let's make something.
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#5A6A7A', marginBottom: 28 }}>
            Have a project or a role in mind? I'd love to hear about it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <a className="cta-btn" href="mailto:simona.nb@hotmail.com">
              simona.nb@hotmail.com
            </a>
            <a
              className="cv-btn"
              href={`${import.meta.env.BASE_URL}Simona-CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#C0CDD8' }}>© Simona 2026</span>
        </div>
      </div>
    </div>
  )
}
