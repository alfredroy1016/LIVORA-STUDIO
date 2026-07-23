import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { siteImages } from '../../utils/siteImages'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Slow 18s Zoom Background Image & Video Layer */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 z-0"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteImages.hero}
          aria-label="Luxury interior showcase by LIVORA Interior Studio"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Luxury Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(17,17,17,0.60) 0%, rgba(17,17,17,0.35) 60%, rgba(17,17,17,0.95) 100%)',
          }}
        />
      </motion.div>

      {/* Main Centered Content (Max-width 650px) */}
      <div className="relative z-10 mx-auto w-full max-w-[650px] px-6 text-center pt-24 pb-16 sm:pt-28 md:pt-32">
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-[0.64rem] sm:text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/75"
        >
          LIVORA INTERIOR STUDIO &bull; WAYANAD &bull; KERALA
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif leading-[1.04]"
        >
          <span className="block text-[2.4rem] sm:text-[3.8rem] md:text-[4.5rem] font-semibold text-[#F8F6F2]">
            Crafting Spaces
          </span>
          <span className="block text-[2.7rem] sm:text-[4.2rem] md:text-[5.1rem] font-semibold italic text-[#B08D57] mt-1">
            That Define You
          </span>
        </motion.h1>

        {/* Description (Max 2 lines, Max-width 580px) */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden sm:block mt-6 mx-auto max-w-[580px] text-[0.92rem] sm:text-[1.02rem] leading-relaxed text-[#B7B7B7] font-light"
        >
          Luxury interiors crafted with timeless elegance, premium materials, and exceptional attention to detail. From concept to completion, we create spaces that truly reflect your lifestyle.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full"
        >
          {/* Primary Gold Pill Button */}
          <Link
            to="/contact"
            className="group relative inline-flex min-h-[52px] sm:min-h-[56px] w-full max-w-[300px] sm:w-auto items-center justify-center overflow-hidden rounded-full bg-[#B08D57] px-8 py-4 text-center text-[0.72rem] font-bold uppercase tracking-[0.24em] text-white no-underline shadow-[0_12px_32px_rgba(176,141,87,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c49e65] hover:shadow-[0_18px_40px_rgba(176,141,87,0.48)] shrink-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              BOOK FREE CONSULTATION
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" size={16} />
            </span>
          </Link>

          {/* Secondary Transparent Glass Button */}
          <Link
            to="/portfolio"
            className="group relative inline-flex min-h-[52px] sm:min-h-[56px] w-full max-w-[300px] sm:w-auto items-center justify-center overflow-hidden rounded-full border border-white/40 bg-transparent px-8 py-4 text-center text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#F8F6F2] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#B08D57] hover:bg-white/10 hover:text-[#B08D57] backdrop-blur-md shrink-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              VIEW PROJECTS
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" size={16} />
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer no-underline"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#B7B7B7]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <div className="w-[1px] h-7 bg-gradient-to-b from-[#B08D57] to-transparent" />
          <FiChevronDown size={14} className="text-[#B08D57] -mt-1" />
        </motion.div>
      </motion.div>
    </section>
  )
}
