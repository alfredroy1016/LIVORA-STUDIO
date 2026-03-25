import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { T } from '../../theme'
import { FAQS } from '../../data/faqs'
import { siteImages } from '../../utils/siteImages'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40" style={{ background: T.bgBeige }}>
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="faq-premium-card"
        >
          <div className="faq-left">
            <div className="mb-10">
              <p
                className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.4em]"
                style={{ color: T.gold }}
              >
                Curated Insights
              </p>
              <h2 className="text-left font-['Playfair_Display'] text-[2rem] leading-[1.08] md:text-[3.2rem]">
                Common <span className="italic" style={{ color: T.gold }}>Questions</span>
              </h2>
            </div>

            <div className="faq-accordion-container">
              {FAQS.map((item, index) => (
                <div
                  key={item.q}
                  className="mb-2 border-b"
                  style={{ borderColor: T.goldBorder }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(open === index ? null : index)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent py-5 text-left md:py-6"
                  >
                    <span
                      className="font-['Playfair_Display'] text-[1.02rem] font-medium leading-7 transition-colors duration-300 md:text-[1.3rem]"
                      style={{ color: open === index ? T.gold : T.dark }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                      style={{
                        borderColor: open === index ? T.gold : T.goldBorder,
                        background: open === index ? T.gold : 'transparent',
                        color: open === index ? 'white' : T.gold,
                      }}
                    >
                      {open === index ? '-' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {open === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        <div className="pb-6 pr-1 md:pb-8 md:pr-4">
                          <p
                            className="text-[0.96rem] font-light italic leading-[1.8]"
                            style={{ color: T.textMuted }}
                          >
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-[16px] shadow-2xl"
            >
              <img
                src={siteImages.faqFeature}
                alt="Livora Interior Studio"
                className="h-[320px] w-full object-cover transition-transform duration-[3s] hover:scale-110 md:h-[600px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
