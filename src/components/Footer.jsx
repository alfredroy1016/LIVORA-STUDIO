import { T } from '../theme'
import Logo from './Logo'

const WA  = 'https://wa.me/918921179724'
const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'WhatsApp', href: WA },
]

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" style={{ 
      background: '#0F0E0C', 
      padding: '100px 0 60px', 
      color: 'white', 
      textAlign: 'center' 
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Brand */}
        <div style={{ marginBottom: '40px' }}>
          <Logo size={40} showText={true} light={false} />
          <p style={{ 
            color: 'rgba(255,255,255,0.5)', 
            maxWidth: '450px', 
            margin: '20px auto 0', 
            fontSize: '1rem', 
            lineHeight: '1.8',
            fontWeight: 300 
          }}>
            Crafting premium interior experiences in the heart of Wayanad. We blend luxury with functionality to create spaces that inspire.
          </p>
        </div>

        {/* Links */}
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          gap: '30px', 
          marginBottom: '40px', 
          padding: 0,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {QUICK_LINKS.map(link => (
            <li key={link.label}>
              <a 
                href={link.href} 
                onClick={e => {
                  e.preventDefault()
                  document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.2em', 
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  transition: 'color 0.3s'
                }}
                onMouseEnter={e => e.target.style.color = T.gold}
                onMouseLeave={e => e.target.style.color = 'white'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div style={{ display: 'flex', gap: '25px', marginBottom: '60px' }}>
          {SOCIALS.map(s => (
            <a 
              key={s.label} 
              href={s.href} 
              target="_blank" 
              rel="noreferrer"
              style={{ 
                color: 'rgba(255,255,255,0.4)', 
                textDecoration: 'none', 
                fontSize: '0.85rem',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.target.style.color = T.gold
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.target.style.color = 'rgba(255,255,255,0.4)'
                e.target.style.transform = 'none'
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '40px', 
          width: '100%',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em'
        }}>
          <p>© {year} LIVORA INTERIOR STUDIO. ALL RIGHTS RESERVED.</p>
          <p style={{ marginTop: '10px', fontSize: '0.65rem', opacity: 0.6 }}>DESIGNED WITH PRECISION IN KERALA</p>
        </div>
      </div>
    </footer>
  )
}
