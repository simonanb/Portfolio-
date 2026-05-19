import Cursor from './components/Cursor'
import AltitudeTracker from './components/AltitudeTracker'
import SlopeRider from './components/SlopeRider'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      {/* Grain texture — above everything decorative, below UI */}
      <svg
        className="grain-overlay"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>

      {/* Custom cursor — top of z-stack */}
      <Cursor />

      {/* Altitude pill — fixed top-right */}
      <AltitudeTracker />

      {/*
        SlopeRider renders two fixed layers:
          z-index: -1  → mountain background (sky, mountains, trees, snow)
          z-index:  50 → slope path + snowboarder (pointer-events: none)
        Hero is transparent so the mountain bg shows through.
        All other sections have solid backgrounds, keeping content readable.
      */}
      <SlopeRider />

      {/* ── Page sections ── */}
      <Hero />        {/* Stop 1 — transparent, reveals mountain bg */}
      <About />       {/* Stop 2 — solid bg #F0F4F7 */}
      <Projects />    {/* Stop 3 — solid bg #F7F8FA */}
      <Skills />      {/* Stop 4 — solid bg #E8F2F7 */}
      <Experience />  {/* Stop 5 — solid bg #F0EDE8 */}
      <Contact />     {/* Stop 6 — solid bg #F7F8FA */}
    </>
  )
}
