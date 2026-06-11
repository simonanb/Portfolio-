import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function ComboMessage({ text, msgKey }) {
  const innerRef = useRef(null)
  const tlRef    = useRef(null)

  useEffect(() => {
    if (!msgKey || !innerRef.current) return
    if (tlRef.current) tlRef.current.kill()
    const el = innerRef.current
    gsap.set(el, { opacity: 0, scale: 0.8, y: 0, display: 'block' })
    tlRef.current = gsap.timeline()
      .to(el, { opacity: 1, scale: 1, duration: 0.08, ease: 'back.out(1.5)' })
      .to(el, { duration: 1.2 })
      .to(el, {
        opacity: 0, y: -20, duration: 0.3, ease: 'power2.in',
        onComplete: () => { if (el) gsap.set(el, { display: 'none' }) },
      })
  }, [msgKey])

  return (
    <div style={{
      position: 'absolute',
      top: '36%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 40,
      pointerEvents: 'none',
    }}>
      <div
        ref={innerRef}
        style={{ display: 'none', whiteSpace: 'nowrap' }}
      >
        <div style={{
          background: 'rgba(255,255,255,0.93)',
          backdropFilter: 'blur(14px)',
          borderRadius: 999,
          padding: '9px 24px',
          border: '1.5px solid rgba(74,158,191,0.22)',
          boxShadow: '0 6px 24px rgba(42,74,90,0.14)',
          fontFamily: 'Inter, sans-serif',
          fontSize: 15,
          fontWeight: 600,
          color: '#2A4A5A',
          letterSpacing: '0.01em',
        }}>
          {text}
        </div>
      </div>
    </div>
  )
}
