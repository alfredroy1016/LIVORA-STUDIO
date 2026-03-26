import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { T } from '../../theme'
import { useState, useEffect } from 'react'

const WA = 'https://wa.me/918921179724'
const TEL = 'tel:+918921179724'

export default function FloatingButtons() {
  const [hovered, setHovered] = useState(null)
  const [visible, setVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  /* 🔥 Show after delay */
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  /* 🔥 Scroll detection */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false) // scrolling down → hide
      } else {
        setVisible(true) // scrolling up → show
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed z-[1000] flex flex-col items-end gap-3 
            right-4 bottom-[max(16px,env(safe-area-inset-bottom))]
            sm:right-8 sm:bottom-8 sm:gap-5"
        >

          {/* ================= WHATSAPP ================= */}
          <div className="relative flex items-center group">
            
            {/* Desktop Tooltip */}
            <AnimatePresence>
              {hovered === 'wa' && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="mr-3 hidden sm:block rounded-full px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md"
                  style={{ background: 'rgba(0,0,0,0.4)' }}
                >
                  WhatsApp
                </motion.span>
              )}
            </AnimatePresence>

            <motion.a
              href={WA}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              onMouseEnter={() => setHovered('wa')}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="h-[52px] w-[52px] rounded-full flex items-center justify-center 
              text-white relative overflow-hidden backdrop-blur-xl 
              shadow-[0_10px_25px_rgba(37,211,102,0.22)]
              sm:h-[56px] sm:w-[56px]"
              style={{ background: '#25D366' }}
            >
              {/* Pulse */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/20 rounded-full blur-[2px]"
              />

              <FaWhatsapp size={26} className="relative z-10" />

              {/* Mobile Label */}
              <span className="absolute -top-10 text-[10px] px-2 py-1 rounded-md bg-black/70 text-white opacity-0 group-active:opacity-100 transition">
                Chat
              </span>
            </motion.a>
          </div>

          {/* ================= CALL ================= */}
          <div className="relative flex items-center group">

            <AnimatePresence>
              {hovered === 'call' && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="mr-3 hidden sm:block rounded-full px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md"
                  style={{ background: 'rgba(0,0,0,0.4)' }}
                >
                  Call Us
                </motion.span>
              )}
            </AnimatePresence>

            <motion.a
              href={TEL}
              aria-label="Call Us"
              onMouseEnter={() => setHovered('call')}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="h-[52px] w-[52px] rounded-full flex items-center justify-center 
              relative overflow-hidden backdrop-blur-xl 
              shadow-[0_10px_25px_rgba(176,141,87,0.22)]
              sm:h-[56px] sm:w-[56px]"
              style={{ background: T.gold, color: T.white }}
            >
              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0, 0.25] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-white/20 rounded-full blur-[2px]"
              />

              <FaPhoneAlt size={20} className="relative z-10" />

              {/* Mobile Label */}
              <span className="absolute -top-10 text-[10px] px-2 py-1 rounded-md bg-black/70 text-white opacity-0 group-active:opacity-100 transition">
                Call
              </span>
            </motion.a>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}