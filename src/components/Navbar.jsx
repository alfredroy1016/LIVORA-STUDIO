import { T } from '../theme'
import Logo from './Logo'
import useNavScroll from '../hooks/useNavScroll'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail } from 'react-icons/fi'

const LINKS = ['About','Services','Portfolio','Why Us','Testimonials','FAQ','Contact']
const WA = 'https://wa.me/918921179724'

function scrollTo(id) {
  document.getElementById(id.toLowerCase().replace(' ',''))?.scrollIntoView({ behavior:'smooth', block:'start' })
}

export default function Navbar() {
  const scrolled = useNavScroll()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.8)',
        padding: '12px 32px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backdropFilter: 'blur(20px)',
      }}>
        <a href="#home" style={{ textDecoration:'none' }} onClick={e=>{ e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); setOpen(false) }}>
          <Logo size={scrolled ? 24 : 28} showText={false} />
        </a>

        <ul className="hidden lg:flex navbar-menu">
          {LINKS.map(link => (
            <li key={link}>
              <button onClick={()=>scrollTo(link)} style={{
                background:'none', border:'none', cursor:'pointer',
                color: T.dark, opacity: 0.7, fontSize:'.72rem', letterSpacing:'.16em',
                textTransform:'uppercase', fontFamily:"'Inter',sans-serif", padding:0,
                transition:'all .3s',
              }}
                onMouseEnter={e=>{ e.target.style.color=T.gold; e.target.style.opacity=1 }}
                onMouseLeave={e=>{ e.target.style.color=T.dark; e.target.style.opacity=0.7 }}
              >{link}</button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <a href={WA} target="_blank" rel="noreferrer" className="hidden lg:inline-block btn-livora"
            style={{ padding: '10px 24px', fontSize: '0.7rem', letterSpacing: '0.1em' }}
          >CONTACT US</a>

          <button className="lg:hidden" onClick={()=>setOpen(o=>!o)}
            style={{ background:'none', border:'none', cursor:'pointer', padding:'8px', zIndex:1001, display: 'flex', flexDirection: 'column', gap: '6px' }}
            aria-label="Menu"
          >
            {[0,1,2].map(i=>(
              <span key={i} style={{ 
                display:'block', 
                width: i === 1 && !open ? '16px' : '24px', 
                height:'1.5px', 
                background: T.dark,
                alignSelf: 'flex-end',
                transition:'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transformOrigin: 'center',
                transform: open ? i===0?'translateY(7.5px) rotate(45deg)':i===1?'scaleX(0)':'translateY(-7.5px) rotate(-45deg)':'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              position:'fixed', 
              inset:0, 
              zIndex:1000, 
              background:'rgba(255, 255, 255, 0.98)', 
              backdropFilter: 'blur(20px)',
              padding: '120px 40px 60px',
              display:'flex', 
              flexDirection:'column', 
              justifyContent:'space-between'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {LINKS.map((link, idx) => (
                <motion.button 
                  key={link} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={()=>{ scrollTo(link); setOpen(false) }}
                  style={{ 
                    background:'none', 
                    border:'none', 
                    cursor:'pointer', 
                    fontFamily:"'Cormorant Garamond', serif", 
                    fontSize:'2.4rem', 
                    fontWeight:500, 
                    color:T.dark, 
                    textAlign: 'left',
                    padding: 0
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ borderTop: `1px solid ${T.goldBorder}`, paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: T.gold, fontWeight: 600, margin: 0, textAlign: 'left' }}>Inquiries</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <a href="mailto:info@livorainteriorstudio.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: T.dark, textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
                    <FiMail size={16} color={T.gold} /> info@livorainteriorstudio.com
                  </a>
                  <a href="tel:+918921179724" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: T.dark, textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
                    <FiPhone size={16} color={T.gold} /> +91 89211 79724
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#" style={{ color: T.dark }}><FiInstagram size={22} /></a>
                <a href="#" style={{ color: T.dark }}><FiFacebook size={22} /></a>
                <a href="#" style={{ color: T.dark }}><FiLinkedin size={22} /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
