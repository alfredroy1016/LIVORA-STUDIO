import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { T } from '../../theme'
import { siteImages } from '../../utils/siteImages'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-48 overflow-hidden" style={{ background: T.bgBeige }}>
      <div className="container max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 overflow-hidden rounded-[28px] border border-gold/10 shadow-[0_28px_80px_rgba(30,26,23,0.10)]"
            >
              <video
                className="w-full aspect-[4/5] object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={siteImages.aboutFeature}
                aria-label="Livora interior showcase"
              >
                <source src="/videos/HOME.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/6" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -10, rotate: 5 }}
              className="absolute -bottom-10 -right-4 md:-right-12 z-20 p-8 md:p-12 text-center backdrop-blur-xl bg-white/90 shadow-2xl border border-gold/20 flex flex-col items-center justify-center min-w-[180px]"
            >
              <span className="font-serif text-[3.5rem] md:text-[4.5rem] leading-none text-dark font-bold mb-2">10<span className="text-gold">+</span></span>
              <span className="text-[0.6rem] md:text-[0.7rem] tracking-[0.3em] font-bold uppercase text-gold">Years Of Excellence</span>
              <div className="w-8 h-[1px] bg-gold mt-4" />
            </motion.div>

            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-gold/30 pointer-events-none" aria-hidden="true" />
          </div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="mb-6 block text-[0.7rem] font-bold uppercase tracking-[0.5em] text-gold">Our Story</span>
              <h2 className="mb-8 font-serif text-[2.8rem] leading-[1.1] text-[#241f1a] md:text-[3.8rem] lg:text-[4.5rem]">
                Design That <em className="italic text-gold">Elevates</em> Daily Life
              </h2>
              <div className="h-[2px] w-20 bg-gold lg:mx-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 max-w-lg"
            >
              <p className="text-[1.1rem] font-light italic leading-relaxed text-[#6a6259] md:text-[1.2rem]">
                "LIVORA Interior Studio creates refined environments that blend comfort, aesthetics, and intelligent design. Every project reflects individuality through premium finishing."
              </p>
              <p className="text-[1rem] font-light leading-relaxed text-[#746c63]">
                Based in the heart of Wayanad, we bring international design sensibilities to homes and commercial spaces across Kerala, delivering spaces that are not just beautiful, but deeply personal.
              </p>

              <div className="pt-6 border-t border-gold/10">
                <p className="mb-6 text-[0.95rem] font-medium leading-relaxed text-[#241f1a]">
                  "10 years of design excellence, warranty-backed craftsmanship, and long-term customer care."
                </p>
                <ul className="space-y-4">
                  {[
                    'Custom Design Consultation',
                    'Execution + Material Control',
                  ].map((item, idx) => (
                    <li key={idx} className="group flex items-center justify-center gap-4 lg:justify-start">
                      <div className="w-8 h-[1px] bg-gold" />
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#746c63] transition-colors group-hover:text-gold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col md:flex-row gap-10"
            >
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-4 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#241f1a] no-underline transition-colors hover:text-gold"
              >
                <span>Read Full Odyssey</span>
                <span className="h-[1px] w-10 bg-[#241f1a] transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
              </Link>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-4 border-none bg-transparent text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#241f1a] no-underline transition-colors hover:text-gold cursor-pointer"
              >
                <span>Discover Capabilities</span>
                <span className="h-[1px] w-10 bg-[#241f1a] transition-all duration-300 group-hover:w-16 group-hover:bg-gold" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
