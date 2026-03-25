import { motion } from 'framer-motion'
import { FiArrowUpRight, FiBox, FiClock, FiFeather, FiShield, FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { T } from '../../theme'

const REASONS = [
  {
    title: '10+ Years Experience',
    text: 'A decade of designing homes and workspaces with lasting elegance and technical clarity.',
    icon: FiStar,
  },
  {
    title: '10 Year Warranty',
    text: 'Confidence-backed craftsmanship with long-view accountability on execution quality.',
    icon: FiShield,
  },
  {
    title: '2 Year Follow-Up Support',
    text: 'Post-handover guidance that helps every detail continue performing beautifully.',
    icon: FiClock,
  },
  {
    title: 'Premium Material Selection',
    text: 'Every finish, texture, and hardware choice is curated for longevity and visual richness.',
    icon: FiBox,
  },
  {
    title: 'On-Time Delivery',
    text: 'A disciplined project rhythm that respects your schedule and protects the final experience.',
    icon: FiFeather,
  },
]

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="py-20 md:py-32 lg:py-40"
      style={{ background: `linear-gradient(180deg, ${T.bgWhite} 0%, #f7f1e6 100%)` }}
    >
      <div className="container max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[760px] text-center lg:max-w-none"
          >
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] sm:text-[0.68rem] sm:tracking-[0.45em]" style={{ color: T.gold }}>
              Why Choose Livora
            </span>
            <h2 className="mt-5 font-['Playfair_Display'] text-[2.3rem] leading-[1.04] sm:text-[2.9rem] md:text-[4rem]">
              The <em className="italic" style={{ color: T.gold }}>Livora Standard</em> of
              premium interiors
            </h2>
            <p className="mx-auto mt-8 max-w-[540px] text-[0.98rem] leading-8 text-[#686259]">
              Luxury should feel intentional, not excessive. Our process combines design intelligence,
              material discipline, and polished execution so your interior feels elevated on day one and dependable for years.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4">
              {['Design-first process', 'Premium sourcing', 'Turnkey delivery'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(176,141,87,0.24)] bg-white px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#7f6338] md:px-5 md:py-3 md:text-[0.68rem] md:tracking-[0.3em]"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#111111] px-6 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white no-underline transition duration-500 hover:-translate-y-1 hover:bg-[#b08d57] md:mt-12 md:px-7 md:text-[0.72rem] md:tracking-[0.3em]"
            >
              Start Your Project
              <FiArrowUpRight size={15} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {REASONS.map((reason, index) => {
              const Icon = reason.icon
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.7 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-[28px] border border-[rgba(176,141,87,0.18)] bg-white/90 p-6 text-center shadow-[0_18px_55px_rgba(17,17,17,0.05)] backdrop-blur md:p-7"
                >
                  <div className="mb-6 inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#fcf6ea] p-4">
                    <Icon size={18} color={T.gold} />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[1.55rem] leading-tight text-[#1b1712] transition-colors duration-300 group-hover:text-[#b08d57]">
                    {reason.title}
                  </h3>
                  <p className="mt-4 max-w-none text-[0.96rem] leading-7 text-[#6a645b]">
                    {reason.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
