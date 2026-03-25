import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiShare2 } from 'react-icons/fi'
import Contact from '../components/sections/Contact'
import { T } from '../theme'

const MAP_URL = 'https://maps.app.goo.gl/WabaGeBhGXcmbE2B9?g_st=ic'
const MAP_EMBED_URL = 'https://www.google.com/maps?q=11.652306,76.267694&z=17&output=embed'

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="py-20 md:py-32" style={{ background: T.bgBeige }}>
        <div className="container max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-5 block text-[0.62rem] font-bold uppercase tracking-[0.42em] text-gold sm:text-[0.7rem] sm:tracking-[0.6em]">Inquiries</span>
            <h1 className="mb-8 font-serif text-[2.8rem] leading-none sm:text-[4rem] md:text-[6rem]">
              Start Your <em className="italic text-gold">Odyssey</em>
            </h1>
            <p className="mx-auto max-w-[700px] text-[1rem] font-light leading-relaxed text-[#746c63] sm:text-[1.2rem]">
              We are honored you&apos;ve considered us for your next masterpiece. Reach out to our concierge team to schedule a formal studio visit or a private consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />

      <section className="py-20 md:py-48" style={{ background: T.bgWhite }}>
        <div className="container max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-[26px] border border-gold/10 bg-white/88 px-6 py-8 text-center shadow-[0_18px_50px_rgba(30,26,23,0.05)] backdrop-blur"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center text-gold mb-8">
                <FiMapPin size={24} />
              </div>
              <h3 className="font-serif text-[1.5rem] mb-4">Studio Headquarters</h3>
              <p className="font-light leading-relaxed text-[#746c63]">
                Sultan Bathery, Wayanad,<br /> Kerala 673592
              </p>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold no-underline"
              >
                Open In Maps
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center rounded-[26px] border border-gold/10 bg-white/88 px-6 py-8 text-center shadow-[0_18px_50px_rgba(30,26,23,0.05)] backdrop-blur"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center text-gold mb-8">
                <FiClock size={24} />
              </div>
              <h3 className="font-serif text-[1.5rem] mb-4">At Your Service</h3>
              <p className="font-light leading-relaxed text-[#746c63]">
                Monday - Saturday: 09:00 - 18:30<br />
                Sunday: Closed (By Appointment Only)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center rounded-[26px] border border-gold/10 bg-white/88 px-6 py-8 text-center shadow-[0_18px_50px_rgba(30,26,23,0.05)] backdrop-blur"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center text-gold mb-8">
                <FiShare2 size={24} />
              </div>
              <h3 className="font-serif text-[1.5rem] mb-4">Global Network</h3>
              <p className="font-light leading-relaxed text-[#746c63]">
                Connect with us on social platforms<br /> for daily inspiration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative h-[460px] w-full overflow-hidden bg-slate-100 md:h-[540px]">
        <iframe
          title="Livora Studio map location"
          src={MAP_EMBED_URL}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-[320px] rounded-[28px] border border-gold/20 bg-white/90 p-6 text-center shadow-2xl backdrop-blur md:max-w-[360px] md:rounded-2xl md:p-8">
            <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.4em] text-gold">Location</p>
            <h4 className="font-serif text-[1.6rem] text-dark">LIVORA STUDIO</h4>
            <p className="mt-3 text-sm font-light leading-7 text-[#746c63]">
              Live map view with direct access to directions.
            </p>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-gold no-underline"
            >
              Open In Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
