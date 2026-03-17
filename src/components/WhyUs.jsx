import { motion } from 'framer-motion'
import { T } from '../theme'

const WA = 'https://wa.me/918921179724'

const FEATURES = [
  { num: '01', title: 'Personalised Design',   desc: 'Every project begins with understanding your unique lifestyle to craft a truly bespoke, never-generic solution.' },
  { num: '02', title: 'Premium Materials',     desc: 'We source only the finest — imported marbles, premium laminates, engineered wood, and artisan-grade hardware.' },
  { num: '03', title: 'Expert Execution',      desc: 'Skilled craftsmen bring designs to life with precision, meeting our exacting quality standards at every stage.' },
  { num: '04', title: 'Elegant Detailing',     desc: 'From hardware finishes to trim alignment, the difference between good and exceptional lies in the details.' },
  { num: '05', title: 'Quality Assurance',     desc: 'Comprehensive after-service support ensures your space remains pristine and beautiful for years to come.' },
  { num: '06', title: 'Transparent Process',   desc: 'Clear timelines, honest pricing, and regular updates keep you confident and informed throughout the project.' },
]

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ background: T.bgBeige }}
    >
      <div className="container px-6 md:px-12 lg:px-16 max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Intro Panel */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="tracking-[0.4em] uppercase font-bold mb-6"
              style={{ color: T.gold, fontSize: '0.72rem' }}
            >
              Why LIVORA
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-['Playfair_Display'] text-[2.5rem] md:text-[3.5rem] leading-[1.15] mb-8"
              style={{ color: T.dark }}
            >
              Design <em className="italic" style={{ color: T.gold }}>Excellence</em><br /> 
              Defined by Precision
            </motion.h2>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '60px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-[2px] mb-10"
              style={{ background: T.gold }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[1.05rem] leading-[1.9] font-light mb-12 max-w-[480px]"
              style={{ color: T.textMuted }}
            >
              At LIVORA, we believe great interiors are born from a deep understanding of how people live, move, and feel. Our process is meticulous, ensuring every detail reflects your vision.
            </motion.p>

            <motion.a
              href={WA}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: T.gold }}
              className="inline-block px-10 py-5 text-[0.7rem] tracking-[0.25em] uppercase font-bold text-white transition-all duration-300 shadow-xl"
              style={{ background: T.dark, fontFamily: "'Inter', sans-serif" }}
            >
              Consult with us
            </motion.a>
          </div>

          {/* Feature Cards Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {FEATURES.map(({ num, title, desc }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-10 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)] border-l-2 border-transparent hover:border-[#B08D57] transition-colors duration-500 overflow-hidden group rounded-xl md:rounded-none"
              >
                {/* Background Decor Number */}
                <span className="absolute -top-4 -right-2 text-[6rem] font-bold opacity-[0.03] select-none pointer-events-none transition-all duration-700 group-hover:opacity-[0.06] group-hover:-translate-y-2">
                  {num}
                </span>

                <span className="block text-[0.65rem] tracking-[0.3em] font-bold mb-6" style={{ color: T.gold }}>
                  {num}
                </span>

                <h3 className="font-['Playfair_Display'] text-[1.4rem] leading-tight mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                  {title}
                </h3>

                <p className="text-[0.95rem] leading-[1.8] font-light italic" style={{ color: T.textMuted }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

