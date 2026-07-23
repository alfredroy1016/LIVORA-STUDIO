import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { T } from '../../theme'
import { siteImages } from '../../utils/siteImages'

export default function Services() {
  const mainServices = [
    {
      title: 'Bespoke Residential',
      cat: 'Interiors',
      img: siteImages.services.residential,
      desc: 'Transform your home into a timeless living experience with personalized interiors, elegant layouts, premium materials, and flawless craftsmanship tailored to your lifestyle.'
    },
    {
      title: 'Modular Kitchens',
      cat: 'Precision',
      img: siteImages.services.kitchen,
      desc: 'Smartly designed modular kitchens that blend aesthetics, functionality, and premium finishes to create the perfect cooking and gathering space.'
    },
    {
      title: 'Serene Bedrooms',
      cat: 'Luxury',
      img: siteImages.services.bedroom,
      desc: 'Create a peaceful retreat with sophisticated bedroom interiors featuring custom wardrobes, ambient lighting, luxurious textures, and refined detailing.'
    },
    {
      title: 'Executive Offices',
      cat: 'Commercial',
      img: siteImages.services.commercial,
      desc: 'Professional workspaces designed to inspire productivity through intelligent planning, contemporary aesthetics, ergonomic layouts, and premium finishes.'
    },
    {
      title: 'Fine Wardrobes',
      cat: 'Storage',
      img: siteImages.services.wardrobe,
      desc: 'Custom-built wardrobes that combine elegant design with intelligent storage solutions, delivering beauty, organization, and everyday convenience.'
    },
    {
      title: 'Turnkey Renovation',
      cat: 'Full Service',
      img: siteImages.services.residential,
      desc: 'From concept to completion, we manage every stage of your renovation with precision, quality craftsmanship, and seamless project execution.'
    }
  ]

  return (
    <section
      id="services"
      className="w-full overflow-x-hidden py-20 md:py-32 lg:py-48"
      style={{ background: T.bgWhite }}
    >
      <div className="container max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-center md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-gold sm:text-[0.7rem] sm:tracking-[0.6em]"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-center font-serif text-[2.35rem] leading-none sm:text-[3rem] md:text-[4.5rem]"
          >
            Curating <em className="italic text-gold">Exceptional</em> Spaces
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-[2px] bg-gold mt-6"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group livora-aesthetic-card relative flex h-full flex-col justify-between rounded-[28px] border border-[rgba(176,141,87,0.18)] bg-white/95 p-5 pb-7 sm:p-6 sm:pb-8 shadow-[0_16px_40px_rgba(30,26,23,0.05)] backdrop-blur transition-all duration-500 hover:shadow-[0_24px_60px_rgba(176,141,87,0.16)]"
            >
              <div>
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-md transition-all duration-700 group-hover:shadow-xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
                </div>

                <div className="flex flex-col items-center text-center px-1">
                  <span className="mb-2 block text-center text-[0.65rem] font-bold uppercase tracking-[0.32em] text-[#B08D57]">
                    {service.cat}
                  </span>
                  <h3 className="text-center font-serif text-[1.5rem] sm:text-[1.7rem] font-semibold leading-tight text-[#1E1A17] transition-colors duration-300 group-hover:text-[#B08D57]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-center text-[0.9rem] font-light leading-relaxed text-[#6F675F]">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-center text-[0.7rem] font-bold uppercase tracking-[0.26em] text-[#B08D57] transition-all duration-300 group-hover:translate-x-1">
                <span>Explore Space</span>
                <span className="text-base">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-7 md:mt-24 md:gap-10"
        >
          <Link
            to="/services"
            className="relative group overflow-hidden rounded-full bg-dark px-9 py-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white transition-all hover:shadow-2xl no-underline md:rounded-xl md:px-16 md:py-6 md:text-[0.75rem] md:tracking-[0.4em]"
          >
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" style={{ background: T.gold }} />
            <span className="relative z-10">Discover Full Spectrum</span>
          </Link>

          <a
            href="#contact"
            className="group inline-flex flex-col items-center gap-3 no-underline opacity-60 transition-opacity hover:opacity-100"
          >
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-dark">Request a Proposal</span>
            <div className="w-16 h-[1px] bg-dark/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
