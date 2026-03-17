import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { T } from '../theme'
import { useState } from 'react'

const WA = 'https://wa.me/918921179724'
const TEL = 'tel:+918921179724'

export default function FloatingButtons() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col gap-5 items-end">
      
      {/* WhatsApp Button */}
      <div className="relative flex items-center group">
        <AnimatePresence>
          {hovered === 'wa' && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-4 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white text-[0.7rem] tracking-[0.2em] uppercase font-bold shadow-2xl pointer-events-none"
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
          className="w-[56px] h-[56px] rounded-full flex items-center justify-center text-white shadow-[0_15px_35px_rgba(37,211,102,0.3)] relative overflow-hidden"
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
              className="mr-4 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white text-[0.7rem] tracking-[0.2em] uppercase font-bold shadow-2xl pointer-events-none"
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
          className="w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(176,141,87,0.3)] border border-white/20 relative overflow-hidden"
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

