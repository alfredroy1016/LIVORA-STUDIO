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
  { label: 'Testimonials', path: '/', section: 'testimonials' },
  { label: 'Contact', path: '/contact', section: 'contact' },
]

const WA = 'https://wa.me/918921179724'
const EMAIL = 'info@livorainteriorstudio.com'
const PHONE = '+91 89211 79724'
const SOCIAL_LINKS = [
  { href: WA, icon: FiInstagram, label: 'Instagram' },
  { href: WA, icon: FiFacebook, label: 'Facebook' },
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

    if (location.pathname === '/' || item.path !== '/') {
      if (location.pathname === item.path && item.section) {
        document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(item.path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    navigate('/')
    setTimeout(() => {
      document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="navbar-wrapper">
      <nav
        className="navbar relative h-[80px] flex items-center justify-between overflow-hidden"
        style={{
          background: scrolled
            ? 'linear-gradient(90deg, rgba(255,255,255,0.99) 0%, rgba(255,255,255,0.99) 100%)'
            : 'linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.98) 100%)',
          padding: '10px 24px',
          boxShadow: isHomeTop
            ? '0 18px 42px rgba(62,45,24,0.1)'
            : scrolled
            ? '0 16px 44px rgba(62,45,24,0.08)'
            : '0 24px 60px rgba(62,45,24,0.08)',
          backdropFilter: 'blur(20px)',
          border: scrolled
            ? '1px solid rgba(176,141,87,0.1)'
            : '1px solid rgba(255,255,255,0.85)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.24),rgba(255,255,255,0))]" />

        <div className="relative z-10 flex h-full min-w-[170px] flex-1 items-center justify-start lg:w-[250px] lg:flex-none">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex h-full items-center no-underline"
          >
            <Logo size={58} showText={true} invert={false} />
          </Link>
        </div>

        <div className="relative z-10 hidden flex-1 lg:flex lg:justify-center">
          <ul className="navbar-menu list-none p-0 m-0">
            {NAVIGATION.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="relative group bg-transparent border-none cursor-pointer p-0"
                  style={{
                    color: T.dark,
                    fontSize: '.72rem',
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    opacity: 0.8,
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

        <div className="relative z-10 flex flex-1 items-center justify-end gap-6 lg:w-[250px] lg:flex-none">
          <Link
            to="/contact"
            className="group relative hidden overflow-hidden rounded-full border border-[#d8b784]/70 px-8 py-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white no-underline transition-all duration-500 hover:-translate-y-1 lg:inline-flex lg:items-center lg:justify-center"
            style={{
              background: 'linear-gradient(135deg, #c39a61 0%, #a67d44 100%)',
              boxShadow: '0 16px 34px rgba(166,125,68,0.26)',
            }}
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)] opacity-80 transition duration-500 group-hover:opacity-100" />
            <span className="absolute -left-[35%] top-0 h-full w-[30%] -skew-x-12 bg-white/25 opacity-0 transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
            <span className="relative z-10 inline-flex items-center gap-3">
              Book Consultation
              <FiArrowRight className="transition duration-500 group-hover:translate-x-1" size={16} />
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
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] flex flex-col justify-between overflow-y-auto bg-white px-6 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 md:p-12 md:pt-32"
          >
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
              {NAVIGATION.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  onClick={() => handleNavClick(item)}
                  className="border-none bg-transparent text-left font-serif text-[2rem] font-medium text-dark transition-colors hover:text-gold sm:text-[2.35rem] md:text-[2.8rem]"
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
                <div className="rounded-[22px] border border-gold/15 bg-[#fcfaf6] p-5 shadow-[0_16px_40px_rgba(176,141,87,0.08)] sm:rounded-[24px] sm:p-6">
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
                  <div className="w-full rounded-[22px] border border-gold/15 bg-[#fcfaf6] p-5 shadow-[0_16px_40px_rgba(176,141,87,0.08)] sm:rounded-[24px] sm:p-6 md:w-auto">
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
