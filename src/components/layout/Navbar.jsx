import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi'
import { T } from '../../theme'
import useNavScroll from '../../hooks/useNavScroll'
import Logo from '../ui/Logo'

const NAVIGATION = [
  { label: 'About', path: '/about', section: 'about' },
  { label: 'Services', path: '/services', section: 'services' },
  { label: 'Portfolio', path: '/portfolio', section: 'portfolio' },
  { label: 'Contact', path: '/contact', section: 'contact' },
]

const WA = 'https://wa.me/918921179724'
const INSTAGRAM = 'https://www.instagram.com/livora_interior_studio/'
const FACEBOOK = 'https://www.facebook.com/profile.php?id=61588486752994&sk=photos'
const EMAIL = 'info@livorainteriorstudio.com'
const PHONE = '+91 89211 79724'
const SOCIAL_LINKS = [
  { href: INSTAGRAM, icon: FiInstagram, label: 'Instagram' },
  { href: FACEBOOK, icon: FiFacebook, label: 'Facebook' },
  { href: `mailto:${EMAIL}`, icon: FiLinkedin, label: 'LinkedIn' },
]

export default function Navbar() {
  const scrolled = useNavScroll(100)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isHomeTop = isHome && !scrolled

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
    }
  }, [open])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [open])

  const handleNavClick = (item) => {
    setOpen(false)

    if (location.pathname === '/') {
      const el = item.section ? document.getElementById(item.section) : null
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }

    if (location.pathname === item.path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    navigate(item.path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 lg:px-12 pointer-events-none">
      <nav
        className="pointer-events-auto w-full max-w-[1240px] h-[72px] min-h-[72px] rounded-[24px] flex items-center justify-between px-5 sm:px-8 lg:px-10 transition-all duration-500 shadow-2xl relative overflow-hidden"
        style={{
          background: isHomeTop
            ? 'rgba(255, 255, 255, 0.08)'
            : scrolled
            ? 'rgba(255, 255, 255, 0.94)'
            : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: isHomeTop
            ? '1px solid rgba(255, 255, 255, 0.18)'
            : '1px solid rgba(176, 141, 87, 0.18)',
          boxShadow: isHomeTop
            ? '0 16px 40px rgba(0, 0, 0, 0.3)'
            : '0 12px 32px rgba(30, 26, 23, 0.08)',
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />

        <div className="relative z-10 flex h-full items-center justify-start">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-full items-center no-underline"
          >
            <Logo size={46} />
          </Link>
        </div>

        <div className="relative z-10 hidden flex-1 lg:flex lg:justify-center px-6">
          <ul className="flex items-center gap-7 lg:gap-9 list-none p-0 m-0">
            {NAVIGATION.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="relative group bg-transparent border-none cursor-pointer p-0"
                  style={{
                    color: isHomeTop ? '#F8F6F2' : T.dark,
                    fontSize: '.72rem',
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    opacity: isHomeTop ? 0.95 : 0.8,
                    transition: 'all .3s',
                  }}
                >
                  <span className="group-hover:text-gold transition-colors">{item.label}</span>
                  <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-gold transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center justify-end gap-5">
          <Link
            to="/contact"
            className="group relative hidden overflow-hidden rounded-full border border-[#f0d4a3]/60 px-7 py-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white no-underline transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(176,141,87,0.55)] lg:inline-flex lg:items-center lg:justify-center"
            style={{
              background: 'linear-gradient(135deg, #c59b62 0%, #b08d57 50%, #9e753b 100%)',
              boxShadow: '0 10px 28px rgba(176, 141, 87, 0.38)',
            }}
          >
            <span className="absolute -left-[100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 group-hover:left-[100%]" />
            <span className="relative z-10 inline-flex items-center gap-2.5">
              Book Now
              <FiArrowRight className="transition duration-300 group-hover:translate-x-1.5" size={15} />
            </span>
          </Link>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-[1001]"
            onClick={() => setOpen((value) => !value)}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={open ? { rotate: i === 0 ? 45 : i === 2 ? -45 : 0, y: i === 0 ? 8 : i === 2 ? -8 : 0, scaleX: i === 1 ? 0 : 1 } : {}}
                className="block w-6 h-[1.5px]"
                style={{ background: isHomeTop ? '#f8efe1' : T.dark }}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[1000] pointer-events-auto flex flex-col justify-between overflow-y-auto px-6 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 md:p-12 md:pt-32"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
              {NAVIGATION.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => handleNavClick(item)}
                  className="border-none bg-transparent text-left font-serif text-[2.4rem] font-medium tracking-tight text-dark transition-all duration-300 hover:text-gold cursor-pointer sm:text-[2.8rem] md:text-[3.2rem]"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-6 border-t border-gold/20 pt-8 sm:gap-8 sm:pt-10 md:gap-10 md:pt-12"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="livora-aesthetic-card livora-static-card rounded-[22px] border border-gold/15 bg-[#fcfaf6] p-5 shadow-[0_16px_40px_rgba(176,141,87,0.08)] sm:rounded-[24px] sm:p-6">
                  <p className="mb-4 text-[0.64rem] font-bold uppercase tracking-[0.3em] text-gold sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.36em]">Concierge</p>
                  <div className="flex flex-col gap-4">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-3 text-[0.92rem] font-semibold text-dark no-underline transition-colors hover:text-gold sm:gap-4 sm:text-[1.05rem]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold sm:h-11 sm:w-11">
                        <FiMail size={18} />
                      </span>
                      {EMAIL}
                    </a>
                    <a
                      href={`tel:${PHONE}`}
                      className="flex items-center gap-3 text-[0.92rem] font-semibold text-dark no-underline transition-colors hover:text-gold sm:gap-4 sm:text-[1.05rem]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold sm:h-11 sm:w-11">
                        <FiPhone size={18} />
                      </span>
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-end justify-start md:justify-end">
                  <div className="livora-aesthetic-card livora-static-card w-full rounded-[22px] border border-gold/15 bg-[#fcfaf6] p-5 shadow-[0_16px_40px_rgba(176,141,87,0.08)] sm:rounded-[24px] sm:p-6 md:w-auto">
                    <p className="mb-4 text-[0.64rem] font-bold uppercase tracking-[0.3em] text-gold sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.36em]">Connect</p>
                    <div className="flex gap-4">
                      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noreferrer' : undefined}
                          aria-label={label}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/15 bg-white text-dark transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-white sm:h-12 sm:w-12"
                        >
                          <Icon size={22} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
