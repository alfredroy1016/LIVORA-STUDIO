import { motion } from 'framer-motion'
import { T } from '../theme'
import Philosophy from '../components/sections/Philosophy'
import { siteImages } from '../utils/siteImages'

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="relative flex h-[52vh] items-center overflow-hidden md:h-[80vh]">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={siteImages.hero}
            aria-label="About Livora interior showcase"
          >
            <source src="/videos/about-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="mb-5 block text-[0.62rem] font-bold uppercase tracking-[0.42em] text-[#f3eadb]/78 sm:text-[0.7rem] sm:tracking-[0.6em]">Our Legacy</span>
            <h1 className="font-serif text-[2.55rem] leading-[1.03] text-[rgba(255,250,243,0.84)] sm:text-[4rem] md:text-[6rem]">
              Crafting <em className="italic text-[rgba(224,194,141,0.92)]">Eternal</em> <br />Narratives
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-48" style={{ background: T.bgWhite }}>
        <div className="container max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h2 className="mb-8 font-serif text-[2rem] leading-tight md:text-[3.5rem] lg:text-left">
                  Born from a Passion for <span className="italic text-gold">Spatial Harmony</span>
                </h2>
                <div className="space-y-8 text-[1.1rem] font-light leading-relaxed text-[#6a6259]">
                  <p className="lg:mx-0 lg:text-left">
                    Livora Interior Studio was founded on a singular premise: that the spaces we inhabit have the power to profoundly influence the way we live, think, and feel. We do not just design rooms; we curate environments that catalyze inspiration.
                  </p>
                  <p className="lg:mx-0 lg:text-left">
                    With over 10 years of industry-leading experience in Wayanad and across Kerala, our studio has evolved into a sanctuary for bespoke design. Our team of visionary architects and artisanal craftsmen work in unison to push the boundaries of modern interiors.
                  </p>
                  <p className="lg:mx-0 lg:text-left">
                    Every chisel mark, every textile choice, and every shadow play is intentional. We blend global design trends with local craftsmanship to create spaces that are as timeless as they are functional.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src={siteImages.aboutStudio} alt="Our Studio Interior" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-4 left-4 max-w-[220px] rounded-[20px] bg-white/90 p-5 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:max-w-[300px] sm:rounded-xl sm:p-8">
                  <p className="text-gold font-serif text-[2rem] leading-none mb-2">10+</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-dark">Years of Pioneering Design Excellence</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-48" style={{ background: T.bgBeige }}>
        <div className="container mb-14 max-w-7xl px-6 text-center md:mb-20">
          <span className="text-[0.6rem] tracking-[0.4em] uppercase font-bold text-gold mb-6 block">Our Ethos</span>
          <h2 className="font-serif text-[3rem] md:text-[4rem]">Governing Principles</h2>
        </div>

        <div className="container grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3 md:gap-12">
          {[
            { title: 'Authenticity', desc: 'We believe in materials that speak for themselves and designs that reflect true character.' },
            { title: 'Innovation', desc: 'Pushing the envelope of what is possible within the four walls of any given space.' },
            { title: 'Precision', desc: 'A relentless commitment to the millimetre. Perfection is our only baseline.' },
          ].map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[26px] border border-gold/10 bg-white/90 p-7 shadow-[0_18px_50px_rgba(30,26,23,0.05)] backdrop-blur transition-all md:rounded-2xl md:p-12"
            >
              <h3 className="font-serif text-[1.5rem] mb-6 text-gold">{value.title}</h3>
              <p className="font-light leading-relaxed text-[#746c63]">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Philosophy />
    </div>
  )
}
