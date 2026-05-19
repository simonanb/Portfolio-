import { useMemo } from 'react'

const FLAKE_COUNT = 25

export default function Snow() {
  const flakes = useMemo(
    () =>
      Array.from({ length: FLAKE_COUNT }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 10 + 8,
        // alternate white and icy blue
        color: i % 3 === 0 ? 'rgba(168,192,212,0.7)' : 'rgba(255,255,255,0.75)',
      })),
    []
  )

  return (
    <div className="snow-container" aria-hidden="true">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="snowflake"
          style={{
            width: f.size,
            height: f.size,
            left: `${f.left}%`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            background: f.color,
          }}
        />
      ))}
    </div>
  )
}
