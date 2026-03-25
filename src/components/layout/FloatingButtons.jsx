import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { T } from '../../theme'
import { useState } from 'react'

const WA = 'https://wa.me/918921179724'
const TEL = 'tel:+918921179724'

export default function FloatingButtons() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="fixed bottom-4 right-4 z-[1000] flex flex-col gap-3 items-end sm:bottom-8 sm:right-8 sm:gap-5">
      
      {/* WhatsApp Button */}
      <div className="relative flex items-center group">
        <AnimatePresence>
          {hovered === 'wa' && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-3 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-2xl backdrop-blur-md pointer-events-none sm:block"
              style={{ background: 'rgba(0,0,0,0.4)' }}
            >
              Consult on WhatsApp
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
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[52px] w-[52px] rounded-full border border-white/50 flex items-center justify-center text-white shadow-[0_15px_35px_rgba(37,211,102,0.26)] relative overflow-hidden backdrop-blur-xl sm:h-[56px] sm:w-[56px]"
          style={{ background: '#25D366' }}
        >
          {/* Subtle pulse effect */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white/30 rounded-full"
          />
          <FaWhatsapp size={26} className="relative z-10" />
        </motion.a>
      </div>

      {/* Call Button */}
      <div className="relative flex items-center group">
        <AnimatePresence>
          {hovered === 'call' && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-3 hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-2xl backdrop-blur-md pointer-events-none sm:block"
              style={{ background: 'rgba(0,0,0,0.4)' }}
            >
              Speak with us
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href={TEL}
          aria-label="Call Us"
          onMouseEnter={() => setHovered('call')}
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(176,141,87,0.25)] border border-white/40 relative overflow-hidden backdrop-blur-xl sm:h-[56px] sm:w-[56px]"
          style={{ background: T.gold, color: T.white }}
        >
          {/* Subtle gold radiance */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-white/20 rounded-full"
          />
          <FaPhoneAlt size={20} className="relative z-10" />
        </motion.a>
      </div>

    </div>
  )
}
