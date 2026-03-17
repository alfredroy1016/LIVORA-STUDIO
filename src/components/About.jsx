import { T } from '../theme'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-title reveal">
          <span className="label">Our Story</span>
          <h2>
            Design That <em style={{ color:T.gold, fontStyle:'italic' }}>Elevates</em><br/>Every Space
          </h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center about-grid">
          {/* Left — Image */}
          <div className="reveal-left" style={{ position:'relative', width: '100%' }}>
            <div style={{ overflow:'hidden', boxShadow:T.shadowSoft, borderRadius: '12px' }}>
              <img src="/bedroom.png" alt="Luxury bedroom by LIVORA"
                style={{ width:'100%', aspectRatio:'4/5', objectFit:'cover' }}
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-8 -right-4 lg:-right-10 p-6 lg:p-10 text-center" style={{ background:T.bgWhite, boxShadow:T.shadowSoft, border:`1px solid ${T.goldBorder}`, borderRadius: '8px' }}>
              <strong style={{ fontFamily:"'Playfair Display',serif", fontSize:'2.5rem', display:'block', lineHeight:1, color:T.dark }}>10+</strong>
              <span style={{ fontSize:'.6rem', letterSpacing:'.2em', textTransform:'uppercase', fontWeight:600, color:T.gold, marginTop:'.5rem', display:'block' }}>Years of Excellence</span>
            </div>
          </div>

          {/* Right — Content */}
          <div className="reveal-right flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col gap-6 max-w-[500px]">
              <p style={{ color:T.textMuted, lineHeight:1.9, fontSize:'1.1rem', fontWeight:300 }}>
                LIVORA Interior Studio creates refined environments that blend comfort, aesthetics, and intelligent design. Every project reflects individuality through premium finishing and elegant detailing.
              </p>
              <p style={{ color:T.textMuted, lineHeight:1.9, fontSize:'1.1rem', fontWeight:300 }}>
                Based in the heart of Wayanad, we bring international design sensibilities to homes and commercial spaces across Kerala — delivering spaces that are not just beautiful, but deeply personal.
              </p>
            </div>

            <a href="#services" className="btn-livora mt-10" onClick={e=>{ e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior:'smooth'}) }}>
              Discover Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
