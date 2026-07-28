import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

const WA = 'https://wa.me/918921179724'
const TEL = 'tel:+918921179724'
const INSTAGRAM = 'https://www.instagram.com/livora_interior_studio/'
const LOCATION = 'https://maps.app.goo.gl/TMaUJSXHjRrfVTE26'

export default function FloatingButtons() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col gap-3.5 items-end">
      {/* Location Button */}
      <div className="relative flex items-center group">
        <AnimatePresence>
          {hovered === 'location' && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-3 hidden rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-2xl backdrop-blur-md pointer-events-none sm:block"
            >
              Visit our studio
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href={LOCATION}
          target="_blank"
          rel="noreferrer"
          aria-label="Open our studio location in Google Maps"
          onMouseEnter={() => setHovered('location')}
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full border border-white/40 flex items-center justify-center text-white shadow-[0_15px_35px_rgba(220,38,38,0.32)] relative overflow-hidden backdrop-blur-xl transition-all"
          style={{ background: '#DC2626' }}
        >
          <FaMapMarkerAlt size={23} className="relative z-10" />
        </motion.a>
      </div>

      {/* Instagram Button */}
      <div className="relative flex items-center group">
        <AnimatePresence>
          {hovered === 'ig' && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-3 hidden rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-2xl backdrop-blur-md pointer-events-none sm:block"
            >
              Follow on Instagram
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow us on Instagram"
          onMouseEnter={() => setHovered('ig')}
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full border border-white/30 flex items-center justify-center text-white shadow-[0_12px_32px_rgba(0,0,0,0.35)] relative overflow-hidden backdrop-blur-xl transition-all"
          style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
        >
          <FaInstagram size={24} className="relative z-10" />
        </motion.a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative flex items-center group">
        <AnimatePresence>
          {hovered === 'wa' && (
            <motion.span
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="mr-3 hidden rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-2xl backdrop-blur-md pointer-events-none sm:block"
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full border border-white/40 flex items-center justify-center text-white shadow-[0_15px_35px_rgba(37,211,102,0.3)] relative overflow-hidden backdrop-blur-xl transition-all"
          style={{ background: '#25D366' }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-white/30 rounded-full"
          />
          <FaWhatsapp size={25} className="relative z-10" />
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
              className="mr-3 hidden rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white shadow-2xl backdrop-blur-md pointer-events-none sm:block"
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(176,141,87,0.35)] border border-white/40 relative overflow-hidden backdrop-blur-xl transition-all"
          style={{ background: '#B08D57', color: '#FFFFFF' }}
        >
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
