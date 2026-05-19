import Cursor from './components/Cursor'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
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
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
