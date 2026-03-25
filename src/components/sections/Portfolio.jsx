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
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#14110e] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.22)] md:p-7">
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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <BeforeAfterShowcase />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 ${
                  project.tall ? 'md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${project.tall ? 'h-[520px] md:h-full md:min-h-[560px]' : 'h-[260px] md:h-[280px]'}`}>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-[1600ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/22 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.78))] opacity-75 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 p-7 text-left">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-white/78 backdrop-blur-md">
                        {project.year}
                      </span>
                      <span className="text-[0.64rem] uppercase tracking-[0.34em] text-[#d9bf91]">
                        {project.sub}
                      </span>
                    </div>
                    <h3 className="font-['Playfair_Display'] text-[1.75rem] leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-none text-left text-sm leading-7 text-white/72 opacity-0 transition duration-500 group-hover:opacity-100">
                      A composition of premium surfaces, measured lighting, and bespoke detailing designed
                      to elevate daily living without compromising utility.
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-[#d9bf91]/40 bg-white/5 px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white no-underline backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#d9bf91] hover:bg-[#d9bf91] hover:text-[#14110e]"
          >
            View All Projects
            <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
