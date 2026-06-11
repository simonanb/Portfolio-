import { useState, useRef, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import Scene from '../components/Scene'
import Target from '../components/Target'
import CarouselCard from '../components/CarouselCard'
import ComboMessage from '../components/ComboMessage'
import WeatherToggle from '../components/WeatherToggle'
import { useSounds } from '../hooks/useSounds'
import { useWeather } from '../hooks/useWeather'
import { targetData, projects } from '../data/projects'

const AMMO = 8

const CATEGORY_LABELS = {
  ux: 'UX Design',
  graphic: 'Graphic Design',
  clay: 'Clay Work',
}

const pick = arr => arr[Math.floor(Math.random() * arr.length)]
const AVATAR_MSGS  = ["I'm calling my lawyer", 'WHO DID THAT?!', 'Excuse me?!']
const MISS_MSGS    = ['The wind got that one 💨', 'Almost! 🌨️', 'Slippery aim ❄️', 'So close! 🤏', 'Missed! Try again ⛄']
const HIT1_MSGS    = ['Nice shot! ❄️', 'Direct hit! ⛄', 'Got one! 🎯', 'Bullseye! ✨']
const HIT2_MSGS    = ['Two in a row! 🔥', 'Getting warmer! 🎿', 'Sharp aim! ✨']
const HIT3_MSGS    = ['Hat trick! 🏆', 'On fire! 🔥', 'Unstoppable! 🏂']
const VICTORY_MSGS = ['All targets hit! 🎉', 'Portfolio unlocked! ✨', 'Perfect aim! 🏔️']

export default function Home() {
  const [hitTargets, setHitTargets] = useState(new Set())
  const [activeCards, setActiveCards] = useState({})
  const [ammoUsed, setAmmoUsed] = useState(0)
  const [comboMsg, setComboMsg] = useState({ text: '', key: 0 })
  const [avatarFallKey, setAvatarFallKey] = useState(0)

  const sceneRef            = useRef(null)
  const targetRefs          = useRef({})
  const avatarRef           = useRef(null)
  const consecutiveHitsRef  = useRef(0)
  const avatarHitCountRef   = useRef(0)
  const hitTargetsRef       = useRef(new Set())
  const isBlizzardRef       = useRef(false)

  const navigate = useNavigate()
  const { throwSound, hitSound, splatSound, victorySound, thunderSound, getCtx } = useSounds()
  const { isBlizzard, toggle: toggleWeather } = useWeather(getCtx)

  useEffect(() => { hitTargetsRef.current  = hitTargets  }, [hitTargets])
  useEffect(() => { isBlizzardRef.current  = isBlizzard  }, [isBlizzard])

  const showMsg = useCallback((text) => {
    setComboMsg(prev => ({ text, key: prev.key + 1 }))
  }, [])

  /* ── Snowball shatter on impact ── */
  const createShatter = useCallback((cx, cy) => {
    const scene = sceneRef.current
    if (!scene) return

    const ring = document.createElement('div')
    ring.style.cssText = `position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,0.9);pointer-events:none;z-index:62;left:0;top:0;`
    scene.appendChild(ring)
    gsap.set(ring, { x: cx - 5, y: cy - 5, width: 10, height: 10, opacity: 1 })
    gsap.to(ring, {
      x: cx - 28, y: cy - 28, width: 56, height: 56,
      opacity: 0, duration: 0.28, ease: 'power2.out',
      onComplete: () => ring.remove(),
    })

    const CHUNKS = 13
    for (let i = 0; i < CHUNKS; i++) {
      const angle    = (i / CHUNKS) * Math.PI * 2 + (Math.random() - 0.5) * 0.7
      const speed    = 35 + Math.random() * 55
      const w        = 4 + Math.random() * 9
      const h        = Math.random() > 0.45 ? w : w * (0.5 + Math.random() * 0.8)
      const radius   = Math.random() > 0.4 ? '50%' : `${2 + Math.random() * 3}px`
      const color    = Math.random() > 0.25 ? 'rgba(255,255,255,0.97)' : 'rgba(200,225,240,0.92)'
      const duration = 0.38 + Math.random() * 0.32
      const chunk    = document.createElement('div')
      chunk.style.cssText = `position:absolute;width:${w}px;height:${h}px;border-radius:${radius};background:${color};left:0;top:0;pointer-events:none;z-index:61;`
      scene.appendChild(chunk)
      gsap.set(chunk, { x: cx - w / 2, y: cy - h / 2, rotation: Math.random() * 360 })
      const vx = Math.cos(angle) * speed
      const vy = Math.sin(angle) * speed
      gsap.to(chunk, {
        x: cx - w / 2 + vx,
        y: cy - h / 2 + vy + (vy < 0 ? Math.abs(vy) * 1.4 : 18),
        rotation: `+=${(Math.random() - 0.5) * 480}`,
        opacity: 0,
        scale: 0.15 + Math.random() * 0.35,
        duration,
        ease: 'power2.out',
        onComplete: () => chunk.remove(),
      })
    }

    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2
      const dist  = 8 + Math.random() * 20
      const size  = 2 + Math.random() * 3
      const p = document.createElement('div')
      p.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:white;left:0;top:0;pointer-events:none;z-index:60;`
      scene.appendChild(p)
      gsap.set(p, { x: cx - size / 2, y: cy - size / 2 })
      gsap.to(p, {
        x: cx - size / 2 + Math.cos(angle) * dist,
        y: cy - size / 2 + Math.sin(angle) * dist + 6,
        opacity: 0, duration: 0.5 + Math.random() * 0.25, ease: 'power1.out',
        onComplete: () => p.remove(),
      })
    }
  }, [])

  /* ── Handle confirmed hit ── */
  const handleHit = useCallback((targetId) => {
    const target = targetData.find(t => t.id === targetId)
    if (!target) return
    if (target.id === 'about') {
      setTimeout(() => navigate('/about'), 500)
      return
    }
    setHitTargets(prev => new Set([...prev, targetId]))
    setActiveCards(prev => ({ ...prev, [targetId]: true }))
  }, [navigate])

  /* ── Handle impact (sounds + combo messages) ── */
  const handleImpact = useCallback((nearest, ex, ey, hitAvatar = false) => {
    if (nearest) {
      createShatter(nearest.cx, nearest.cy)
      const isCardTarget = nearest.id !== 'about'
      const willBeVictory = isCardTarget && (hitTargetsRef.current.size + 1) >= 2
      if (willBeVictory) {
        victorySound()
        showMsg(pick(VICTORY_MSGS))
      } else {
        hitSound()
        consecutiveHitsRef.current += 1
        const c = consecutiveHitsRef.current
        if (c >= 3)     showMsg(pick(HIT3_MSGS))
        else if (c >= 2) showMsg(pick(HIT2_MSGS))
        else             showMsg(pick(HIT1_MSGS))
      }
      handleHit(nearest.id)
    } else {
      createShatter(ex, ey)
      splatSound()
      consecutiveHitsRef.current = 0
      if (!hitAvatar) showMsg(pick(MISS_MSGS))
    }
  }, [createShatter, hitSound, splatSound, victorySound, handleHit, showMsg])

  /* ── Launch snowball with parabolic arc ── */
  const launchSnowball = useCallback((sx, sy, nearest) => {
    const scene = sceneRef.current
    if (!scene) return

    throwSound()

    const windDrift = isBlizzardRef.current ? (Math.random() - 0.5) * 60 : 0
    const ex = nearest
      ? nearest.cx + windDrift
      : sx + (Math.random() * 220 - 110) + windDrift
    const ey = nearest
      ? nearest.cy
      : Math.min(scene.clientHeight * 0.84, sy + 60 + Math.random() * 80)

    const dist     = Math.hypot(ex - sx, ey - sy)
    const duration = Math.max(0.28, Math.min(0.72, dist / 650))
    const arcH     = Math.min(dist * 0.28, 78)

    const sb = document.createElement('div')
    sb.className = 'snowball-proj'
    scene.appendChild(sb)
    gsap.set(sb, { x: sx - 7, y: sy - 7 })

    const obj = { t: 0 }
    gsap.to(obj, {
      t: 1,
      duration,
      ease: 'none',
      onUpdate() {
        const t = obj.t
        const x = sx + (ex - sx) * t
        const y = sy + (ey - sy) * t - arcH * 4 * t * (1 - t)
        sb.style.transform = `translate(${x - 7}px, ${y - 7}px)`
      },
      onComplete() {
        sb.remove()
        let hitAvatar = false
        if (avatarRef.current && sceneRef.current) {
          const sr = sceneRef.current.getBoundingClientRect()
          const ar = avatarRef.current.getBoundingClientRect()
          const acx = ar.left + ar.width  / 2 - sr.left
          const acy = ar.top  + ar.height / 2 - sr.top
          if (Math.hypot(ex - acx, ey - acy) < 62) {
            hitAvatar = true
            setAvatarFallKey(k => k + 1)
            const idx = avatarHitCountRef.current % AVATAR_MSGS.length
            showMsg(AVATAR_MSGS[idx])
            avatarHitCountRef.current += 1
          }
        }
        handleImpact(nearest, ex, ey, hitAvatar)
      },
    })
  }, [throwSound, handleImpact, showMsg])

  /* ── Scene click → find nearest target & launch ── */
  const handleSceneClick = useCallback((e) => {
    if (ammoUsed >= AMMO) return
    if (e.target.closest('[data-carousel-card]')) return

    const scene = sceneRef.current
    if (!scene) return
    const rect = scene.getBoundingClientRect()
    const cx   = e.clientX - rect.left
    const cy   = e.clientY - rect.top

    let nearest     = null
    let nearestDist = Infinity

    targetData.forEach(target => {
      if (hitTargets.has(target.id)) return
      const el = targetRefs.current[target.id]
      if (!el) return
      const er  = el.getBoundingClientRect()
      const tcx = er.left + er.width  / 2 - rect.left
      const tcy = er.top  + er.height / 2 - rect.top
      // Only lock on if the click lands directly within the target element
      if (e.clientX >= er.left && e.clientX <= er.right &&
          e.clientY >= er.top  && e.clientY <= er.bottom) {
        const d = Math.hypot(cx - tcx, cy - tcy)
        if (d < nearestDist) {
          nearestDist = d
          nearest = { id: target.id, cx: tcx, cy: tcy }
        }
      }
    })

    setAmmoUsed(n => n + 1)
    launchSnowball(cx, cy, nearest)
  }, [ammoUsed, hitTargets, launchSnowball])

  /* ── Close card → reset target ── */
  const handleCloseCard = useCallback((targetId) => {
    setActiveCards(prev => { const n = { ...prev }; delete n[targetId]; return n })
    setHitTargets(prev  => { const n = new Set(prev); n.delete(targetId); return n })
  }, [])

  const score = hitTargets.size

  return (
    <div
      ref={sceneRef}
      className="game-scene"
      style={{ position: 'relative', width: '100%', height: '100svh', overflow: 'hidden', userSelect: 'none', background: isBlizzard ? '#8AAABB' : '#C8D8E8', transition: 'background 0.8s ease' }}
      onClick={handleSceneClick}
    >
      {/* Background layers */}
      <Scene isBlizzard={isBlizzard} onThunder={thunderSound} avatarRef={avatarRef} avatarFallKey={avatarFallKey} />

      {/* ── Weather toggle (top-left) ── */}
      <WeatherToggle isBlizzard={isBlizzard} onToggle={toggleWeather} />

      {/* ── Name overlay (top-center) ── */}
      <div style={{
        position: 'absolute', top: 20, left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30, pointerEvents: 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        whiteSpace: 'nowrap',
      }}>
        <h1 style={{
          fontFamily: 'Novella, DM Sans, sans-serif',
          fontSize: 'clamp(48px, 6vw, 70px)',
          fontWeight: 400,
          color: '#46676e',
          lineHeight: 1.0,
          letterSpacing: '-0.01em',
          margin: 0,
        }}>
          Simona
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 10,
          color: '#4A9EBF', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginTop: 6, fontWeight: 500,
        }}>
          UI/UX Designer · Graphic Designer · Clay Artist
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11,
          color: 'rgba(26,42,58,0.40)', marginTop: 3,
        }}>
          Designed on screens, shaped in clay, found on slopes.
        </p>
      </div>

      {/* ── Combo / miss message ── */}
      <ComboMessage text={comboMsg.text} msgKey={comboMsg.key} />

      {/* ── Score pill (bottom-right) ── */}
      <div style={{ position: 'absolute', bottom: 72, right: 24, zIndex: 30, pointerEvents: 'none' }}>
        <div style={{
          background: 'rgba(255,255,255,0.80)',
          backdropFilter: 'blur(10px)',
          borderRadius: 999, padding: '6px 18px',
          border: '1px solid rgba(74,158,191,0.22)',
          fontFamily: 'Inter, sans-serif', fontSize: 11,
          color: '#4A9EBF', fontWeight: 600, letterSpacing: '0.02em',
        }}>
          {score} / 3 targets hit
        </div>
      </div>

      {/* ── Targets ── */}
      {targetData.map(t => (
        <Target
          key={t.id}
          ref={el => { targetRefs.current[t.id] = el }}
          id={t.id}
          label={t.label}
          x={t.x}
          y={t.y}
          isHit={hitTargets.has(t.id)}
          accentColor={t.accentColor}
          isBlizzard={isBlizzard}
        />
      ))}

      {/* ── Carousel cards ── */}
      {Object.keys(activeCards).map(tid => {
        const t = targetData.find(d => d.id === tid)
        if (!t || !t.category) return null
        return (
          <CarouselCard
            key={tid}
            targetId={tid}
            category={t.category}
            categoryLabel={CATEGORY_LABELS[t.category]}
            projects={projects[t.category] || []}
            accentColor={t.accentColor}
            x={t.x}
            y={t.y}
            onClose={() => handleCloseCard(tid)}
          />
        )
      })}

      {/* ── Ammo counter (bottom-center) ── */}
      <div style={{
        position: 'absolute', bottom: 26, left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30, pointerEvents: 'none',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        whiteSpace: 'nowrap',
      }}>
        <div style={{ display: 'flex', gap: 7, marginBottom: 6 }}>
          {Array.from({ length: AMMO }).map((_, i) => (
            <div key={i} style={{
              width: 15, height: 15, borderRadius: '50%',
              background: i < ammoUsed ? 'rgba(255,255,255,0.14)' : 'white',
              border: i < ammoUsed
                ? '1px solid rgba(255,255,255,0.14)'
                : '1px solid rgba(180,210,232,0.65)',
              opacity:   i < ammoUsed ? 0.25 : 1,
              boxShadow: i < ammoUsed ? 'none' : '0 1px 5px rgba(0,0,0,0.09)',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: 11,
          color: 'rgba(26,42,58,0.55)', letterSpacing: '0.03em', fontWeight: 500,
        }}>
          {ammoUsed < AMMO
            ? `${AMMO - ammoUsed} snowball${AMMO - ammoUsed !== 1 ? 's' : ''} left`
            : 'No snowballs left — reload to play again'}
        </span>
        {ammoUsed < AMMO && (
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 10,
            color: 'rgba(26,42,58,0.36)', letterSpacing: '0.04em',
            marginTop: 4,
          }}>
            click anywhere to throw · aim for the signs
          </span>
        )}
      </div>
    </div>
  )
}
