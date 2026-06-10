import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

const CONFIG = {
  ux: {
    label: 'UX Design',
    accent: '#4A9EBF',
    tagline: 'User research, interface design, and product thinking.',
  },
  graphic: {
    label: 'Graphic Design',
    accent: '#E8632A',
    tagline: 'Brand identity, typography, and visual communication.',
  },
  clay: {
    label: 'Clay Work',
    accent: '#C4956A',
    tagline: 'Handmade air dry clay sculptures and forms.',
  },
}

export default function CategoryPage({ category }) {
  const navigate = useNavigate()
  const cfg = CONFIG[category]
  const list = projects[category] || []

  return (
    <div className="page-enter" style={{ background: '#F7F8FA', minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px 100px' }}>

        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

        <div style={{ marginTop: 36, marginBottom: 48 }}>
          <div style={{
            display: 'inline-block',
            background: cfg.accent + '18', color: cfg.accent,
            borderRadius: 999, padding: '4px 14px',
            fontSize: 10, fontFamily: 'Inter', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
          }}>
            {cfg.label}
          </div>
          <h1 style={{
            fontFamily: 'Novella, DM Sans, sans-serif',
            fontSize: 'clamp(34px, 5vw, 54px)',
            fontWeight: 400, color: '#1A1A2A',
            lineHeight: 1.05, marginBottom: 12,
          }}>
            {cfg.label}
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 16,
            color: '#7A8A9A', maxWidth: 460,
          }}>
            {cfg.tagline}
          </p>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {list.map(p => (
            <button
              key={p.slug}
              onClick={() => navigate(`/${category}/${p.slug}`)}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cfg.accent + '55'
                e.currentTarget.style.boxShadow   = `0 6px 24px ${cfg.accent}12`
                e.currentTarget.style.transform   = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = cfg.accent + '1A'
                e.currentTarget.style.boxShadow   = 'none'
                e.currentTarget.style.transform   = 'translateY(0)'
              }}
              style={{
                background: 'white',
                border: `1.5px solid ${cfg.accent}1A`,
                borderRadius: 16, padding: '24px 28px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.2s ease',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h2 style={{
                  fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 24, fontWeight: 400,
                  color: '#1A1A2A', marginBottom: 6,
                }}>
                  {p.name}
                </h2>
                <span style={{ color: cfg.accent, fontSize: 18 }}>→</span>
              </div>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14,
                color: '#7A8A9A', marginBottom: 14, lineHeight: 1.6,
              }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
