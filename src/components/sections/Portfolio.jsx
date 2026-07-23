import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMove } from 'react-icons/fi'
import { PORTFOLIO } from '../../data/portfolio'
import { siteImages } from '../../utils/siteImages'

const FEATURED_PROJECTS = PORTFOLIO.slice(0, 6).map((project, index) => ({
  ...project,
  tall: index === 0 || index === 3,
}))

function BeforeAfterShowcase() {
  const [slider, setSlider] = useState(58)

  return (
    <div className="livora-dark-card relative overflow-hidden rounded-[32px] border border-white/10 bg-[#14110e] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.22)] md:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-[#d9bf91]">
            Before / After
          </span>
          <h3 className="mt-3 font-['Playfair_Display'] text-[2rem] leading-tight text-white">
            Visual clarity from raw shell to finished mood.
          </h3>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/5 p-3 text-white/70 md:flex">
          <FiMove size={18} />
        </div>
      </div>

      <div className="relative h-[340px] overflow-hidden rounded-[24px] md:h-[420px]">
        <img
          src={siteImages.comparison.before}
          alt="Interior shell before Livora transformation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          <img
            src={siteImages.comparison.after}
            alt="Completed Livora luxury interior"
            className="h-full w-full max-w-none object-cover"
            style={{ width: '100%', minWidth: '100%' }}
          />
        </div>
        <div
          className="absolute inset-y-0 z-10 flex -translate-x-1/2 items-center"
          style={{ left: `${slider}%` }}
        >
          <div className="flex h-full w-px items-center justify-center bg-white/80">
            <span className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#b08d57] text-white shadow-lg">
              <FiMove size={16} />
            </span>
          </div>
        </div>
        <div className="absolute left-5 top-5 rounded-full bg-black/45 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-md">
          Before
        </div>
        <div className="absolute bottom-5 right-5 rounded-full bg-black/45 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-md">
          After
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={slider}
        onChange={(event) => setSlider(Number(event.target.value))}
        className="portfolio-range mt-6 w-full"
        aria-label="Compare before and after interior transformation"
      />
    </div>
  )
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 lg:py-40"
      style={{ background: 'linear-gradient(180deg, #FFFDF8 0%, #F5F1E8 100%)' }}
    >
      <div className="container max-w-[1280px] px-6">
        <div className="mb-16 grid grid-cols-1 gap-10 text-center">
          <div>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.45em] text-[#d9bf91]">
              Portfolio Showcase
            </span>
            <h2 className="mt-6 font-['Playfair_Display'] text-[3rem] leading-[1.02] text-[#f6eee1] md:text-[4.2rem]">
              Signature interiors with a
              <span className="block italic text-[#ddb782]">cinematic sense of detail</span>
            </h2>
          </div>

          <p className="mx-auto max-w-[620px] text-[1rem] leading-8 text-[#eadfce]/82">
            Explore a curated selection of living rooms, kitchens, wardrobes, bedrooms, and workspaces
            shaped around atmosphere, utility, and long-term craftsmanship.
          </p>
        </div>

        <div className="mx-auto max-w-[960px]">
          <BeforeAfterShowcase />
        </div>
      </div>
    </section>
  )
}
