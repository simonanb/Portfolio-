import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Start hidden until first mouse move
    gsap.set(cursor, { autoAlpha: 0 })

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3' })

    let visible = false

    const onMove = (e) => {
      if (!visible) {
        gsap.to(cursor, { autoAlpha: 1, duration: 0.3 })
        visible = true
      }
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const onEnterClickable = () => {
      gsap.to(cursor, { scale: 32 / 12, duration: 0.3, ease: 'power2.out' })
    }

    const onLeaveClickable = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
    }

    // Use event delegation so dynamically added elements work too
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .cursor-hover')) {
        onEnterClickable()
      }
    }
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], .cursor-hover')) {
        onLeaveClickable()
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}
