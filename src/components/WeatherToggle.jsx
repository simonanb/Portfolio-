export default function WeatherToggle({ isBlizzard, onToggle }) {
  return (
    <button
      onClick={e => { e.stopPropagation(); onToggle() }}
      aria-label={isBlizzard ? 'Switch to calm' : 'Switch to blizzard'}
      style={{
        position: 'absolute',
        top: 24,
        left: 24,
        zIndex: 35,
        display: 'flex',
        alignItems: 'center',
        background: '#2A4A5A',
        border: 'none',
        borderRadius: 999,
        padding: 3,
        cursor: 'pointer',
        outline: 'none',
        userSelect: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        gap: 0,
      }}
    >
      {/* ☀️ Calm */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        padding: '4px 10px',
        borderRadius: 999,
        background: !isBlizzard ? 'white' : 'transparent',
        color: !isBlizzard ? '#2A4A5A' : 'rgba(255,255,255,0.45)',
        fontFamily: 'Inter, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        transition: 'background 0.28s ease, color 0.28s ease',
      }}>
        <span style={{ fontSize: 13, lineHeight: 1 }}>☀️</span>
        Calm
      </div>

      {/* 🌨️ Blizzard */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        padding: '4px 10px',
        borderRadius: 999,
        background: isBlizzard ? 'white' : 'transparent',
        color: isBlizzard ? '#2A4A5A' : 'rgba(255,255,255,0.45)',
        fontFamily: 'Inter, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        transition: 'background 0.28s ease, color 0.28s ease',
      }}>
        <span style={{ fontSize: 13, lineHeight: 1 }}>🌨️</span>
        Blizzard
      </div>
    </button>
  )
}
