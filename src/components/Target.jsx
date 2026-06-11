import { forwardRef } from 'react'

const FLOAT_DELAY = { ux: '0s', graphic: '1.1s', about: '1.75s' }

const Target = forwardRef(({ id, label, x, y, isHit, accentColor, isBlizzard }, ref) => {
  const delay = FLOAT_DELAY[id] || '0s'

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top:  `${y}%`,
        transform: 'translateX(-50%)',
        zIndex: 20,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      {/* Animated wrapper — float or shake */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: isHit
            ? 'targetShake 0.42s ease forwards'
            : isBlizzard
              ? `floatBlizzard 2.0s ease-in-out ${delay} infinite`
              : `float 3.2s ease-in-out ${delay} infinite`,
        }}
      >
        {/* Bubble */}
        <div
          style={{
            padding: '7px 20px',
            borderRadius: '999px',
            background: isHit ? accentColor : 'rgba(255,255,255,0.96)',
            border: isHit ? `1.5px solid ${accentColor}` : '1.5px solid #2A4A5A',
            boxShadow: isHit
              ? `0 4px 22px ${accentColor}48, 0 0 0 3px ${accentColor}20`
              : '0 3px 12px rgba(42,74,90,0.13), 0 1px 4px rgba(42,74,90,0.08)',
            backdropFilter: 'blur(6px)',
            transition: 'background 0.25s, box-shadow 0.25s, border-color 0.25s',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              fontFamily: 'Novella, DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              color: isHit ? 'white' : '#2A4A5A',
              letterSpacing: '0.01em',
              transition: 'color 0.25s',
            }}
          >
            {label}
          </span>
        </div>

        {/* Pole */}
        <div
          style={{
            width: '1.5px',
            height: '72px',
            background: isHit
              ? `linear-gradient(180deg, ${accentColor} 0%, ${accentColor}60 100%)`
              : 'linear-gradient(180deg, #2A4A5A 0%, #2A4A5A99 100%)',
            transition: 'background 0.25s',
          }}
        />

        {/* Ground peg */}
        <div
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: isHit ? accentColor : '#2A4A5A',
            transition: 'background 0.25s',
          }}
        />
      </div>
    </div>
  )
})

Target.displayName = 'Target'
export default Target
