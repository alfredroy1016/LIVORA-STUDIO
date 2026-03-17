import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { T } from '../theme'
import { FAQS } from '../data/faqs'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40" style={{ background: T.bgBeige }}>
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="faq-premium-card"
        >
          
          {/* Left Side: Header & Questions */}
          <div className="faq-left">
            <div className="mb-10">
              <p className="text-[0.7rem] tracking-[0.4em] uppercase font-bold mb-4" style={{ color: T.gold }}>
                Curated Insights
              </p>
              <h2 className="font-['Playfair_Display'] text-[2.5rem] md:text-[3.2rem] leading-[1.1] text-left">
                Common <span className="italic" style={{ color: T.gold }}>Questions</span>
              </h2>
            </div>

            <div className="faq-accordion-container">
              {FAQS.map((item, i) => (
                <div 
                  key={i} 
                  className="mb-2 border-b"
                  style={{ borderColor: T.goldBorder }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex justify-between items-center text-left py-6 bg-transparent border-none cursor-pointer group"
                  >
                    <span 
                      className="font-['Playfair_Display'] text-[1.2rem] md:text-[1.3rem] font-medium transition-colors duration-300"
                      style={{ color: open === i ? T.gold : T.dark }}
                    >
                      {item.q}
                    </span>
                    <span 
                      className="w-8 h-8 flex items-center justify-center shrink-0 border rounded-full transition-all duration-300"
                      style={{ 
                        borderColor: open === i ? T.gold : T.goldBorder,
                        background: open === i ? T.gold : 'transparent',
                        color: open === i ? 'white' : T.gold
                      }}
                    >
                      {open === i ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="pb-8 pr-4">
                          <p className="text-[1rem] leading-[1.8] font-light italic" style={{ color: T.textMuted }}>
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

          {/* Right Side: Image */}
          <div className="faq-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-[16px] overflow-hidden shadow-2xl"
            >
              <img 
                src="/LIVORA.png" 
                alt="Livora Interior Studio" 
                className="w-full h-[600px] object-cover transition-transform duration-[3s] hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}


