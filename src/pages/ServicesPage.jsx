import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { SERVICES, TABS } from '../data/services'
import { T } from '../theme'
import { siteImages } from '../utils/siteImages'

const SECTION_IMAGES = {
  residential: siteImages.services.residential,
  kitchen: siteImages.services.kitchen,
  wardrobe: siteImages.services.wardrobe,
  ceiling: siteImages.services.ceiling,
  lighting: siteImages.services.lighting,
  commercial: siteImages.services.commercial,
}

const SECTION_DESCRIPTIONS = {
  residential: 'Thoughtfully composed homes that bring together comfort, material character, and everyday practicality.',
  kitchen: 'Made-to-measure kitchen systems that make cooking, hosting, and storage feel effortlessly intuitive.',
  wardrobe: 'Elegant storage crafted around your routines, with beautifully organised interiors and tailored finishes.',
  ceiling: 'Architectural ceiling treatments that shape the atmosphere of a room through proportion, texture, and light.',
  lighting: 'Layered lighting plans that reveal materials, create mood, and make every space feel considered after dark.',
  commercial: 'Customer-facing and workplace environments designed to express your brand while supporting how people work.',
}

export default function ServicesPage() {
  const sections = TABS.map((tab) => ({
    ...tab,
    items: SERVICES[tab.id] ?? [],
    image: SECTION_IMAGES[tab.id] ?? siteImages.hero,
  }))

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-20 md:py-48" style={{ background: T.bgBeige }}>
        <div className="container max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-[800px] text-center"
          >
            <span className="mb-6 block text-[0.62rem] font-bold uppercase tracking-[0.42em] text-[#b08d57] sm:text-[0.7rem] sm:tracking-[0.6em]">Our Expertise</span>
            <h1 className="mb-8 font-serif text-[2.7rem] leading-[0.98] text-[#241f1a] sm:text-[4rem] md:text-[6rem]">
              Tailored <span className="italic text-[#c19a63]">Solitude</span>
            </h1>
            <p className="text-[1rem] font-light leading-relaxed text-[#746c63] sm:text-[1.2rem]">
              From bespoke residential sanctuaries to high-performance commercial environments, we deliver interior systems that balance beauty, function, and long-term comfort.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-48" style={{ background: T.bgWhite }}>
        <div className="container max-w-7xl space-y-20 px-6 md:space-y-48">
          {sections.map((section, index) => (
            <article
              key={section.id}
              className={`service-detail flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-24`}
            >
              <div className="order-2 w-full lg:order-1 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                    <span className="mb-4 block font-serif text-[2.9rem] text-[#c9b08a] opacity-40 sm:text-[4rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mb-6 font-serif text-[2.5rem] leading-tight text-[#241f1a] md:text-[3.5rem] lg:text-left">
                    {section.label}
                  </h2>
                  <p className="mb-8 text-[1rem] font-light leading-relaxed text-[#6a6259] lg:mx-0 lg:text-left md:text-[1.05rem]">
                    {SECTION_DESCRIPTIONS[section.id]}
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={item.title} className="livora-aesthetic-card rounded-[20px] border border-gold/10 bg-white/92 p-4 text-center shadow-[0_14px_34px_rgba(30,26,23,0.04)] backdrop-blur md:rounded-2xl md:p-5">
                        <span className="livora-card-index">
                          {String(itemIndex + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mb-2 font-serif text-[1.18rem] text-dark md:text-[1.3rem]">{item.title}</h3>
                        <p className="text-[0.88rem] font-light leading-relaxed text-[#746c63] md:text-[0.92rem]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="order-1 w-full lg:order-2 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="service-detail-image relative aspect-[4/3] overflow-hidden rounded-[26px] shadow-2xl md:rounded-3xl"
                >
                  <img src={section.image} alt={section.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-48" style={{ background: T.dark }}>
        <div className="container max-w-7xl px-6 text-center">
          <h2 className="font-serif text-[3rem] md:text-[5rem] text-white italic mb-12">Ready to transform?</h2>
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gold px-6 py-5 text-center text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white no-underline transition-all hover:scale-105 hover:shadow-2xl sm:w-auto sm:gap-4 sm:px-12 sm:py-6 sm:text-[0.75rem] sm:tracking-[0.4em]"
          >
            Schedule a Private Consultation
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
