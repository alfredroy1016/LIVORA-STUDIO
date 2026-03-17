import { T } from '../theme'

const WA = 'https://wa.me/918921179724'

const FEATURES = [
  { num: '01', title: 'Personalised Design',   desc: 'Every project begins with understanding your unique lifestyle to craft a truly bespoke, never-generic solution.' },
  { num: '02', title: 'Premium Materials',     desc: 'We source only the finest — imported marbles, premium laminates, engineered wood, and artisan-grade hardware.' },
  { num: '03', title: 'Expert Execution',      desc: 'Skilled craftsmen bring designs to life with precision, meeting our exacting quality standards at every stage.' },
  { num: '04', title: 'Elegant Detailing',     desc: 'From hardware finishes to trim alignment, the difference between good and exceptional lies in the details.' },
  { num: '05', title: 'Quality Assurance',     desc: 'Comprehensive after-service support ensures your space remains pristine and beautiful for years to come.' },
  { num: '06', title: 'Transparent Process',   desc: 'Clear timelines, honest pricing, and regular updates keep you confident and informed throughout the project.' },
]

export default function WhyUs() {
  return (
    <section
      id="whyus"
      style={{
        background: T.bgBeige,
        paddingTop: 'clamp(4rem, 10vw, 8rem)',
        paddingBottom: 'clamp(4rem, 10vw, 8rem)',
      }}
    >
      <div className="px-6 md:px-12 lg:px-16 max-w-[1300px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 lg:gap-24 items-start">

          {/* ── Left: Sticky intro panel ── */}
          <div className="reveal-left w-full lg:sticky lg:top-[110px]">

            <p
              className="tracking-[0.4em] uppercase font-semibold mb-5"
              style={{ color: T.gold, fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', fontFamily: "'Inter', sans-serif" }}
            >
              Why LIVORA
            </p>

            <h2
              className="font-normal leading-[1.2] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: T.dark }}
            >
              Design{' '}
              <em className="italic" style={{ color: T.gold }}>Excellence</em>
              <br />at Every Step
            </h2>

            {/* Gold accent rule */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-[50px] h-px" style={{ background: T.gold }} />
              <div className="w-[6px] h-[6px] rotate-45 shrink-0" style={{ background: T.gold }} />
            </div>

            <p
              className="font-light leading-[1.9] mb-10"
              style={{ color: T.textMuted, fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', maxWidth: '420px' }}
            >
              At LIVORA, great interiors are born from a deep understanding of how people live, move, and feel within a space. Our process is meticulous, our standards uncompromising.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="btn-livora inline-block text-center font-semibold tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                background: T.dark,
                color: T.white,
                padding: 'clamp(0.9rem, 2vw, 1.1rem) clamp(2rem, 4vw, 3rem)',
                fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                fontFamily: "'Inter', sans-serif",
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: T.shadowSoft,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = T.gold; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = T.dark; e.currentTarget.style.transform = 'none' }}
            >
              Start Your Project
            </a>
          </div>

          {/* ── Right: Feature cards grid ── */}
          <div className="reveal-right grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 w-full">
            {FEATURES.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="group relative overflow-hidden flex flex-col transition-all duration-400"
                style={{
                  background: T.bgWhite,
                  boxShadow: T.shadowSoft,
                  padding: 'clamp(1.5rem, 3vw, 2.2rem)',
                  borderLeft: `3px solid transparent`,
                  transition: 'transform .35s ease, box-shadow .35s ease, border-color .35s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderLeftColor = T.gold
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderLeftColor = 'transparent'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = T.shadowSoft
                }}
              >
                {/* Decorative background number */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-5 leading-none select-none pointer-events-none font-bold transition-all duration-500 group-hover:opacity-[0.07]"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    color: T.dark,
                    opacity: 0.04,
                  }}
                >
                  {num}
                </span>

                {/* Gold number label */}
                <span
                  className="font-semibold mb-4 block"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: T.gold,
                    textTransform: 'uppercase',
                  }}
                >
                  {num}
                </span>

                <h4
                  className="font-semibold leading-snug mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: T.dark }}
                >
                  {title}
                </h4>

                <p
                  className="font-light leading-[1.8] m-0 flex-1"
                  style={{ color: T.textMuted, fontSize: 'clamp(0.82rem, 1.6vw, 0.9rem)' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
