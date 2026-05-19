import Cursor from './components/Cursor'
import AltitudeTracker from './components/AltitudeTracker'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      {/* Grain texture overlay */}
      <svg
        className="grain-overlay"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>

      <Cursor />
      <AltitudeTracker />

      {/* Stop 1 — Summit */}
      <Hero />

      {/* Stop 2 — About Me Cabin */}
      <About />

      {/* Stop 3 — Terrain Park */}
      <Projects />

      {/* Stop 4 — Forest Ride */}
      <Skills />

      {/* Stop 5 — Lodge Village */}
      <Experience />

      {/* Stop 6 — Base Camp */}
      <Contact />
    </>
  )
}
