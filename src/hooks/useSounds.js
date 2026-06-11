import { useRef, useCallback } from 'react'

export function useSounds() {
  const ctxRef = useRef(null)

  const getCtx = useCallback(() => {
    try {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      }
      if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
      return ctxRef.current
    } catch {
      return null
    }
  }, [])

  const throwSound = useCallback(() => {
    const ctx = getCtx()
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.frequency.setValueAtTime(600, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08)
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08)
    osc.start(); osc.stop(ctx.currentTime + 0.08)
  }, [getCtx])

  const splatSound = useCallback(() => {
    const ctx = getCtx()
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.frequency.setValueAtTime(80, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.12)
    gain.gain.setValueAtTime(0.22, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
    osc.start(); osc.stop(ctx.currentTime + 0.12)
  }, [getCtx])

  const hitSound = useCallback(() => {
    const ctx = getCtx()
    if (!ctx) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(520, ctx.currentTime)
    gain.gain.setValueAtTime(0.28, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
    osc.start(); osc.stop(ctx.currentTime + 0.2)
  }, [getCtx])

  const victorySound = useCallback(() => {
    const ctx = getCtx()
    if (!ctx) return
    ;[261.63, 329.63, 392.00].forEach((freq, i) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.type = 'sine'
      const t = ctx.currentTime + i * 0.15
      osc.frequency.setValueAtTime(freq, t)
      gain.gain.setValueAtTime(0.25, t)
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15)
      osc.start(t); osc.stop(t + 0.15)
    })
  }, [getCtx])

  const thunderSound = useCallback(() => {
    const ctx = getCtx()
    if (!ctx) return
    const bufLen = Math.floor(ctx.sampleRate * 0.9)
    const buf    = ctx.createBuffer(1, bufLen, ctx.sampleRate)
    const data   = buf.getChannelData(0)
    for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1

    const src    = ctx.createBufferSource()
    src.buffer   = buf
    const filter = ctx.createBiquadFilter()
    filter.type  = 'lowpass'
    filter.frequency.setValueAtTime(180, ctx.currentTime)
    filter.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.9)
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(0.0001, ctx.currentTime)
    gain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.04)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9)
    src.connect(filter); filter.connect(gain); gain.connect(ctx.destination)
    src.start()
  }, [getCtx])

  return { throwSound, splatSound, hitSound, victorySound, thunderSound, getCtx }
}
