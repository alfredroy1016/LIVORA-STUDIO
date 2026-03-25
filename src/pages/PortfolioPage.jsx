import { useState } from 'react'
import { motion } from 'framer-motion'
import { FILTERS, PORTFOLIO } from '../data/portfolio'
import { T } from '../theme'

const FILTER_LABELS = {
  all: 'All',
  residential: 'Residential',
  kitchen: 'Kitchen',
  bedroom: 'Bedroom',
  commercial: 'Commercial',
  luxury: 'Luxury',
}

const matchesFilter = (item, filter) => {
  if (filter === 'all') return true
  return item.cat.toLowerCase().includes(filter)
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all')
  const filtered = PORTFOLIO.filter((item) => matchesFilter(item, filter))

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-20 md:py-32" style={{ background: T.bgWhite }}>
        <div className="container max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="text-center lg:text-left">
              <span className="mb-5 block text-[0.62rem] font-bold uppercase tracking-[0.42em] text-[#b08d57] sm:text-[0.7rem] sm:tracking-[0.6em]">Our Creations</span>
              <h1 className="mb-4 font-serif text-[2.8rem] leading-none text-[#241f1a] sm:text-[4rem] md:text-[6rem]">
                Selected <em className="italic text-[#c19a63]">Works</em>
              </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-3 rounded-[26px] border border-[rgba(176,141,87,0.14)] bg-white/90 p-3 shadow-[0_18px_50px_rgba(30,26,23,0.05)] backdrop-blur md:gap-8 lg:justify-end">
              {FILTERS.map((value) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] transition-all md:text-[0.7rem] md:tracking-[0.3em] ${filter === value ? 'border-gold bg-gold text-white shadow-[0_12px_28px_rgba(176,141,87,0.25)]' : 'border-[rgba(176,141,87,0.12)] bg-white text-[#8b8074] hover:text-[#1e1a17]'}`}
                >
                  {FILTER_LABELS[value] ?? value}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-48" style={{ background: T.bgWhite }}>
        <div className="container max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer rounded-[28px] border border-[rgba(176,141,87,0.1)] bg-white/88 p-3 shadow-[0_20px_50px_rgba(30,26,23,0.05)] backdrop-blur"
              >
                <div
                  className="relative mb-5 aspect-[3/4] overflow-hidden rounded-[22px] bg-[#f6f1e8]"
                >
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[#b08d57] text-6xl font-serif">
                      {item.icon}
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between gap-4 px-1 pb-1">
                  <div>
                    <span className="text-[0.6rem] tracking-[0.3em] uppercase font-bold text-gold mb-2 block">
                      {item.cat}
                    </span>
                    <h3 className="font-serif text-[1.4rem] text-dark">{item.title}</h3>
                  </div>
                  <span className="max-w-[96px] text-right text-[0.74rem] italic text-[#8b8074]">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
