import { T } from '../theme'

const SERVICES = [
  { title:'Living Room Design', img:'/hero.png', desc:'Luxurious living spaces crafted with curated furniture, bespoke finishes, and atmospheric lighting.' },
  { title:'Bedroom Design',     img:'/bedroom.png', desc:'Serene, elegant bedrooms designed as personal sanctuaries of rest and refinement.' },
  { title:'Modular Kitchen',    img:'/kitchen.png', desc:'Precision-crafted kitchens that marry aesthetics with ultimate functionality.' },
  { title:'Commercial Spaces',  img:'/office.png',  desc:'Inspiring workspaces and retail environments that elevate your brand.' },
  { title:'Wardrobe Design',    img:'/wardrobe.png', desc:'Bespoke wardrobe solutions — from sliding to walk-in — crafted for perfect organisation.' },
  { title:'Full Renovation',    img:'/hero.png',    desc:'Complete home transformation from concept to handover, with turnkey execution.' },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-title reveal">
          <span className="label">What We Offer</span>
          <h2>
            Our <em style={{ color:T.gold, fontStyle:'italic' }}>Premium</em> Services
          </h2>
          <div className="divider" />
        </div>

        {/* Responsive grid: 1 col on mobile, 2 col on tablet, 3 col on large desktop */}
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="reveal livora-card" style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('.svc-img')
                if (img) img.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('.svc-img')
                if (img) img.style.transform = 'scale(1)'
              }}
            >
              <div style={{ overflow:'hidden', borderRadius: '8px 8px 0 0' }}>
                <img className="svc-img" src={s.img} alt={s.title}
                  style={{ width:'100%', aspectRatio:'4/3', objectFit:'cover', transition:'transform .8s cubic-bezier(.16,1,.3,1)' }}
                  onError={e => { e.currentTarget.style.background = '#eee' }}
                />
              </div>
              <div className="p-8">
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.4rem', color:T.dark, marginBottom:'.8rem', fontWeight:600 }}>{s.title}</h3>
                <p style={{ fontSize:'.95rem', color:T.textMuted, lineHeight:1.8, fontWeight:300 }}>{s.desc}</p>
                <div style={{ marginTop:'1.5rem', display:'flex', alignItems:'center', justifyContent: 'center', gap:'.5rem', color:T.gold, fontSize:'.75rem', letterSpacing:'.1em', textTransform:'uppercase', fontWeight:600 }}>
                  Explore <span style={{ fontSize:'1.2rem', lineHeight:1 }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
