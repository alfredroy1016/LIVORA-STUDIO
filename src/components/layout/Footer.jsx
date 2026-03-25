import { useLocation, useNavigate } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import Logo from '../ui/Logo'

const WA = 'https://wa.me/918921179724'
const EMAIL = 'info@livorainteriorstudio.com'
const PHONE = '+91 89211 79724'

const STUDIO_LINKS = [
  { label: 'Our Story', href: '#about' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'FAQ', href: '#faq' },
]

const EXPERIENCE_LINKS = [
  { label: 'Bespoke Residential', href: '#services' },
  { label: 'Modular Kitchens', href: '#services' },
  { label: 'Commercial Spaces', href: '#services' },
  { label: 'Featured Portfolio', href: '#portfolio' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: WA, icon: FiInstagram },
  { label: 'Facebook', href: WA, icon: FiFacebook },
  { label: 'LinkedIn', href: `mailto:${EMAIL}`, icon: FiLinkedin },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (id) => {
    const targetId = id.replace('#', '')

    if (location.pathname === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    navigate('/')
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <footer className="pt-24 pb-12 overflow-hidden" style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
      <div className="container max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          <div className="flex flex-col items-start lg:col-span-1">
            <Logo size={32} showText={true} variant="black" className="mb-8" />
            <p className="text-[0.95rem] leading-relaxed text-white/40 font-light mb-10 max-w-[300px]">
              Crafting refined interior experiences that blend international aesthetics with artisanal precision.
            </p>
            <div className="flex gap-5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-white/40 transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.4em] font-bold text-gold mb-8">Studio</h4>
            <ul className="flex flex-col gap-5 p-0 list-none">
              {STUDIO_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 bg-transparent border-none text-white/50 text-[0.85rem] font-medium p-0 cursor-pointer transition-all hover:text-gold"
                  >
                    <span>{link.label}</span>
                    <FiArrowUpRight className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.4em] font-bold text-gold mb-8">Experience</h4>
            <ul className="flex flex-col gap-5 p-0 list-none">
              {EXPERIENCE_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 bg-transparent border-none text-white/50 text-[0.85rem] font-medium p-0 cursor-pointer transition-all hover:text-gold"
                  >
                    <span>{link.label}</span>
                    <FiArrowUpRight className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.4em] font-bold text-gold mb-8">Concierge</h4>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-white/30 mb-2">General Inquiries</p>
                <a href={`mailto:${EMAIL}`} className="text-[0.95rem] text-white/70 hover:text-gold transition-colors no-underline block">{EMAIL}</a>
              </div>
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-white/30 mb-2">Speak With Us</p>
                <a href={`tel:${PHONE}`} className="text-[1.1rem] font-serif font-medium text-white/80 hover:text-gold transition-colors no-underline block">{PHONE}</a>
              </div>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] font-bold text-gold no-underline group"
              >
                <span>WhatsApp Consult</span>
                <div className="w-8 h-[1px] bg-gold/30 transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[0.65rem] tracking-[0.2em] text-white/20 uppercase font-bold">
            Copyright {year} LIVORA INTERIOR STUDIO | LUXURY CRAFTED IN KERALA
          </p>
          <div className="flex gap-10">
            <a href={`mailto:${EMAIL}`} className="text-[0.6rem] tracking-[0.2em] text-white/20 uppercase no-underline hover:text-white transition-colors">Privacy Queries</a>
            <a href={`tel:${PHONE}`} className="text-[0.6rem] tracking-[0.2em] text-white/20 uppercase no-underline hover:text-white transition-colors">Call Studio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
