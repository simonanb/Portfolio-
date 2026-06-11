import { useState, useRef, useEffect, useCallback } from 'react'

export function useWeather(getCtx) {
  const [isBlizzard, setIsBlizzard] = useState(false)
  const windRef = useRef(null)

  const stopWind = useCallback(() => {
    if (!windRef.current) return
    try {
      const { src, gain, ctx, lfo } = windRef.current
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5)
      src.stop(ctx.currentTime + 0.5)
      lfo.stop(ctx.currentTime + 0.5)
    } catch {}
    windRef.current = null
  }, [])

  useEffect(() => {
    if (!isBlizzard) return

    const ctx = getCtx()
    if (!ctx) return

    // 5-second noise buffer — longer loop = less obvious repeat
    const bufLen = Math.floor(ctx.sampleRate * 5)
    const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1

    const src = ctx.createBufferSource()
    src.buffer = buf
    src.loop = true

    // Lowpass removes harshness; low Q keeps it smooth and airy
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 320
    filter.Q.value = 0.4

    // Very slow LFO modulates gain (gusting), not frequency
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.type = 'sine'
    lfo.frequency.value = 0.11
    lfoGain.gain.value = 0.025
    lfo.connect(lfoGain)

    const gain = ctx.createGain()
    lfoGain.connect(gain.gain)
    src.connect(filter)
    filter.connect(gain)
    gain.connect(ctx.destination)
    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 1.2)
    lfo.start()
    src.start()

    windRef.current = { src, gain, ctx, lfo }

    return () => stopWind()
  }, [isBlizzard, getCtx, stopWind])

  const toggle = useCallback(() => {
    setIsBlizzard(prev => !prev)
  }, [])

  return { isBlizzard, toggle }
}
