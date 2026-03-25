import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlayCircle } from 'react-icons/fi'
import { T } from '../../theme'
import { siteImages } from '../../utils/siteImages'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      // style={{ background: T.bgHero }}
    >
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteImages.hero}
          aria-label="Luxury interior showcase by Livora Interior Studio"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.14),transparent_32%),linear-gradient(110deg,rgba(9,7,4,0.52)_10%,rgba(9,7,4,0.28)_48%,rgba(9,7,4,0.46)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-black/12" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] grid-cols-1 gap-16 px-5 pb-12 pt-28 md:px-10 md:pt-36 lg:grid-cols-[minmax(0,1.2fr)_380px] lg:px-16">
        <div className="mx-auto max-w-[780px] text-center lg:mx-0 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-[0.66rem] font-semibold uppercase tracking-[0.28em] sm:mb-8 sm:text-[0.72rem] sm:tracking-[0.45em]"
            style={{ color: T.goldSoft }}
          >
            Livora Interior Studio | Wayanad, Kerala
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.30, duration: 0.95 }}
            className="text-[2.45rem] leading-[0.98] sm:text-[4.1rem] lg:text-[6.3rem]"
            style={{ fontFamily: T.fontDisplay, color: T.white }}
          >
            Crafting Spaces
            <span className="block italic" style={{ color: T.goldSoft }}>That Define You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="mt-5 max-w-[640px] text-[0.95rem] leading-7 text-white/78 sm:mt-8 sm:text-[1.05rem] sm:leading-8 md:text-[1.18rem] lg:text-left"
          >
            Premium interiors tailored to your lifestyle, designed with cinematic warmth,
            exacting detail, and turnkey execution that feels effortless from concept to completion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.85 }}
            className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-start sm:gap-5"
          >
            <Link
              to="/contact"
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full border border-transparent px-5 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white no-underline shadow-[0_14px_34px_rgba(176,141,87,0.26)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(176,141,87,0.4)] sm:min-h-[58px] sm:w-auto sm:gap-3 sm:px-9 sm:py-4 sm:text-[0.75rem] sm:tracking-[0.24em]"
              style={{ background: T.gold }}
            >
              Book Free Consultation
              <FiArrowRight size={16} />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full border bg-white/6 px-5 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] sm:min-h-[58px] sm:w-auto sm:gap-3 sm:px-9 sm:py-4 sm:text-[0.75rem] sm:tracking-[0.24em]"
              style={{ borderColor: 'rgba(255,255,255,0.28)' }}
            >
              View Projects
              <FiPlayCircle size={16} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
