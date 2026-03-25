import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { T } from '../../theme'

export default function Philosophy() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const quote = "Good design is not just what it looks like. It is how it transforms daily living through comfort, atmosphere, and refined detail."
  const words = quote.split(" ")

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-32 md:py-48"
      style={{
        background: `linear-gradient(180deg, ${T.bgWhite} 0%, ${T.bgBeige} 50%, ${T.bgWhite} 100%)`,
      }}
    >
      {/* Decorative Parallax Background Elements */}
      <motion.div
        style={{ y, opacity: 0.03 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-serif text-[40vw] leading-none text-black select-none">
          "
        </span>
      </motion.div>

      <div className="container relative z-10 max-w-5xl px-6">
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center"
        >
          {/* Label with line */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px]" style={{ background: T.gold }} />
            <span className="text-[0.65rem] tracking-[0.6em] uppercase font-bold" style={{ color: T.gold }}>
              Our Philosophy
            </span>
            <div className="w-12 h-[1px]" style={{ background: T.gold }} />
          </div>

          {/* Staggered Word Reveal */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-16 max-w-4xl mx-auto">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05,
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                className="font-serif text-[1.8rem] md:text-[2.8rem] lg:text-[3.4rem] leading-[1.3] text-center"
                style={{ 
                  color: word.toLowerCase() === "transforms" || word.toLowerCase() === "atmosphere," ? T.gold : T.dark,
                  fontStyle: word.toLowerCase() === "transforms" ? 'italic' : 'normal'
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Citation with Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-bronze-500/30" style={{ background: `linear-gradient(to bottom, transparent, ${T.gold}44)` }} />
            <cite className="not-italic text-[0.7rem] tracking-[0.4em] uppercase font-bold" style={{ color: T.textMuted }}>
              LIVORA Interior Studio
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

