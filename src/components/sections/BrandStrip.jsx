import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiCalendar, FiClock, FiShield } from 'react-icons/fi'
import { T } from '../../theme'

const STATS = [
  { num: 250, suffix: '+', label: 'Curated Projects', detail: 'Across residences, kitchens, wardrobes, and commercial interiors', icon: FiAward },
  { num: 10, suffix: '+', label: 'Years Experience', detail: 'A decade of refined execution and detail-led design leadership', icon: FiCalendar },
  { num: 10, suffix: 'Y', label: 'Warranty Assurance', detail: 'Warranty-backed craftsmanship presented in writing for confidence', icon: FiShield, featured: true },
  { num: 2, suffix: 'Y', label: 'Follow-Up Support', detail: 'Post-handover guidance to keep your space performing beautifully', icon: FiClock },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return

    let startTime = null
    const duration = 1800

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function BrandStrip() {
  return (
    <section
      className="relative py-20 md:py-32"
      style={{ background: `linear-gradient(180deg, ${T.bgWhite} 0%, #fbf8f1 100%)` }}
    >
      <div className="container max-w-7xl px-6">
        <div className="mb-10 text-center md:mb-12">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#b08d57] sm:text-[0.68rem] sm:tracking-[0.45em]">
            Livora Metrics
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STATS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col items-center text-center rounded-[26px] bg-[#f8f5ef] px-6 py-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#efe7d8]">
                  <Icon size={18} color="#b08d57" />
                </div>

                <div className="text-[2.4rem] font-['Playfair_Display'] leading-none text-[#1a1a1a]">
                  <Counter value={item.num} suffix={item.suffix} />
                </div>

                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.28em] text-[#b08d57]">
                  {item.label}
                </p>

                <p className="mt-4 max-w-none text-[0.92rem] leading-7 text-[#5a5348]">
                  {item.detail}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
