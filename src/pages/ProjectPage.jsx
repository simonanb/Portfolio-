import { useParams, useNavigate } from 'react-router-dom'
import { projectsBySlug } from '../data/projects'

const bodyStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 15,
  color: '#5A6A7A',
  lineHeight: 1.78,
}

function Section({ title, accent, children }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{ width: 3, height: 22, background: accent, borderRadius: 2 }} />
        <h2 style={{
          fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 22, fontWeight: 500,
          color: '#1A1A2A', margin: 0,
        }}>
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}

function ImgBox({ label }) {
  return (
    <div
      className="img-placeholder"
      style={{ height: 400, marginBottom: 52 }}
    >
      <span style={{ fontSize: 32, opacity: 0.45 }}>🖼</span>
      <span>{label}</span>
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project  = projectsBySlug[slug]

  if (!project) {
    return (
      <div className="page-enter" style={{
        background: '#F7F8FA', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'Inter', color: '#7A8A9A', marginBottom: 16 }}>Project not found.</p>
          <button className="back-btn" onClick={() => navigate('/')}>← Back to portfolio</button>
        </div>
      </div>
    )
  }

  const { color } = project

  return (
    <div className="page-enter" style={{ background: '#F7F8FA', minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 24px 100px' }}>

        {/* Back + breadcrumb */}
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#B0BDC8', marginTop: 6 }}>
          Home / {project.category} / {project.name}
        </p>

        {/* ── Hero ── */}
        <div style={{ marginTop: 40, marginBottom: 56 }}>
          <div style={{
            display: 'inline-block',
            background: color + '18', color,
            borderRadius: 999, padding: '4px 14px',
            fontSize: 10, fontFamily: 'Inter', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: 14,
          }}>
            {project.category}
          </div>
          <h1 style={{
            fontFamily: 'Novella, DM Sans, sans-serif',
            fontSize: 'clamp(34px, 5.5vw, 56px)',
            fontWeight: 400, color: '#1A1A2A',
            lineHeight: 1.05, marginBottom: 16,
          }}>
            {project.name}
          </h1>
          <p style={{ ...bodyStyle, fontSize: 18, color: '#6A7A8A', maxWidth: 560, lineHeight: 1.62, marginBottom: 20 }}>
            {project.fullDesc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {project.tags.map(t => (
              <span key={t} className="tag-pill" style={{ fontSize: 10, padding: '4px 12px' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* ── Content sections ── */}
        <Section title="Overview" accent={color}>
          <p style={bodyStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ ...bodyStyle, marginTop: 16 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </Section>

        <Section title="The Challenge" accent={color}>
          <p style={bodyStyle}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
            ea voluptate velit esse quam nihil molestiae consequatur.
          </p>
        </Section>

        <ImgBox label="Project screenshots coming soon" />

        <Section title="My Process" accent={color}>
          {[
            ['Research & Discovery', 'User interviews, competitive analysis, and mapping existing workflows to identify friction points.'],
            ['Ideation & Wireframing', 'Rapid sketching and low-fidelity wireframes to explore solutions before committing to pixels.'],
            ['Design & Iteration', 'High-fidelity Figma prototypes, usability testing, and iterative refinement based on feedback.'],
          ].map(([step, desc], i) => (
            <div key={step} style={{ display: 'flex', gap: 16, marginBottom: 24, alignItems: 'flex-start' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: color + '18', color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 15, fontWeight: 500, flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <div>
                <h4 style={{
                  fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 17, fontWeight: 500,
                  color: '#1A1A2A', marginBottom: 4,
                }}>
                  {step}
                </h4>
                <p style={bodyStyle}>{desc}</p>
              </div>
            </div>
          ))}
        </Section>

        <Section title="Outcome" accent={color}>
          <p style={bodyStyle}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </Section>

        <ImgBox label="Final designs coming soon" />

        {/* Footer */}
        <div style={{
          marginTop: 60, paddingTop: 30,
          borderTop: '1px solid #E4EAF0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button className="back-btn" onClick={() => navigate('/')}>← Back to portfolio</button>
          <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#B8C4CE' }}>© Simona 2026</span>
        </div>
      </div>
    </div>
  )
}
