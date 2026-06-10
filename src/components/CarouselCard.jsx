import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

export default function CarouselCard({
  targetId, category, categoryLabel,
  projects, accentColor, x, y, onClose,
}) {
  const [index, setIndex] = useState(0)
  const cardRef = useRef(null)
  const navigate = useNavigate()

  const project = projects[index]
  const total   = projects.length

  /* Spring entrance */
  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { scale: 0.78, opacity: 0, y: 14 },
      { scale: 1, opacity: 1, y: 0, duration: 0.52, ease: 'elastic.out(1, 0.62)' }
    )
  }, [])

  const close = (e) => {
    e.stopPropagation()
    if (!cardRef.current) return
    gsap.to(cardRef.current, {
      scale: 0.82,
      opacity: 0,
      y: 10,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: onClose,
    })
  }

  const prev = (e) => { e.stopPropagation(); setIndex(i => (i - 1 + total) % total) }
  const next = (e) => { e.stopPropagation(); setIndex(i => (i + 1) % total) }

  const openProject = (e) => {
    e.stopPropagation()
    navigate(`/${category}/${project.slug}`)
  }

  const btn = {
    background: 'none',
    border: `1px solid ${accentColor}55`,
    borderRadius: '50%',
    width: 26, height: 26,
    cursor: 'pointer',
    color: accentColor,
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color 0.2s, background 0.2s',
  }

  return (
    <div
      ref={cardRef}
      data-carousel-card="true"
      onClick={e => e.stopPropagation()}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top:  `calc(${y}% - 6px)`,
        transform: 'translate(-50%, -100%)',
        width: 304,
        zIndex: 100,
        opacity: 0,
      }}
    >
      {/* Card */}
      <div style={{
        background: 'white',
        borderRadius: 16,
        border: `1.5px solid ${accentColor}`,
        boxShadow: `0 8px 32px rgba(0,0,0,0.11), 0 2px 8px ${accentColor}22`,
        overflow: 'hidden',
      }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px 8px',
          borderBottom: `1px solid ${accentColor}1A`,
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 9,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: accentColor, fontWeight: 600,
          }}>
            {categoryLabel}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'Inter', fontSize: 10, color: '#9AAAB8' }}>
              {index + 1} / {total}
            </span>
            <button
              onClick={close}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#9AAAB8', fontSize: 20, lineHeight: 1, padding: 0,
                display: 'flex', alignItems: 'center',
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '13px 14px 10px' }}>
          <h3 style={{
            fontFamily: 'Novella, DM Sans, sans-serif', fontSize: 17, fontWeight: 500,
            color: '#1A1A2A', marginBottom: 5, lineHeight: 1.2,
          }}>
            {project.name}
          </h3>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 11,
            color: '#7A8A9A', marginBottom: 10, lineHeight: 1.6,
          }}>
            {project.desc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {project.tags.map(t => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 14px 13px',
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <button style={btn} onClick={prev}
              onMouseEnter={e => { e.currentTarget.style.background = accentColor + '18' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
            >←</button>
            <button style={btn} onClick={next}
              onMouseEnter={e => { e.currentTarget.style.background = accentColor + '18' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
            >→</button>
          </div>
          <button
            onClick={openProject}
            onMouseEnter={e => {
              e.currentTarget.style.background = accentColor
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'none'
              e.currentTarget.style.color = accentColor
            }}
            style={{
              background: 'none',
              border: `1px solid ${accentColor}`,
              borderRadius: 999,
              padding: '5px 15px',
              cursor: 'pointer',
              color: accentColor,
              fontSize: 11,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
          >
            Open project →
          </button>
        </div>
      </div>

      {/* Pointer caret pointing down to target */}
      <div style={{
        width: 0, height: 0,
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
        borderTop: `7px solid ${accentColor}`,
        margin: '0 auto',
      }} />
    </div>
  )
}
