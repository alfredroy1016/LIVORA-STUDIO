import { T } from '../theme'

const STATS = [
  { num: '250+', label: 'Projects Delivered' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '15+', label: 'Years Experience' },
  { num: '50+', label: 'Awards & Features' },
]

export default function BrandStrip() {
  return (
    <div className="py-12 md:py-16 px-6 md:px-16" style={{ background: T.bgWhite, borderBottom: `1px solid ${T.goldBorder}` }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 stats-grid" style={{ maxWidth: '1280px', margin: '0 auto', alignItems: 'center' }}>
        {STATS.map((s, i) => (
          <div key={s.label} className="reveal flex flex-col items-center text-center w-full" 
               style={{ borderRight: i === 0 || i === 2 || i === 1 ? 'none' : 'none' }}>
            {/* We'll use Tailwind responsive borders instead of inline */}
            <div className={`w-full ${i % 2 === 0 ? 'border-r border-[rgba(176,141,87,0.25)] lg:border-none' : ''} ${i < 3 ? 'lg:border-r lg:border-[rgba(176,141,87,0.25)]' : ''}`}>
               <strong style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3.5rem)', color: T.dark, display: 'block', lineHeight: 1 }}>{s.num}</strong>
               <span style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: T.gold, marginTop: '.8rem', display: 'block', fontWeight: 500 }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
