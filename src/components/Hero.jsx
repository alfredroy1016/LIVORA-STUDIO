import { T } from '../theme'

const WA = 'https://wa.me/918921179724'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <img
        src="/hero.png"
        alt="Luxury Interior"
        className="hero-bg"
      />

      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-copy">

          <p className="hero-location">
            Sultan Bathery · Wayanad · Kerala
          </p>

          <div className="hero-manifesto">
            <h1>WE DON'T DO AVERAGE</h1>

            <div className="hero-divider">
              <span />
              <em>We Do</em>
              <span />
            </div>

            <h1 className="hero-awesome">AWESOME</h1>
          </div>

          <p className="hero-description">
            Crafting interiors that speak your story — with elegance, precision, and a relentless obsession for detail.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn-dark">
              View Projects
            </a>

            <a href={WA} target="_blank" rel="noreferrer" className="btn-light">
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div />
      </div>
    </section>
  )
}
