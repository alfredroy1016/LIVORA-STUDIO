import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { T } from '../../theme'
import { siteImages } from '../../utils/siteImages'

export default function Services() {
  const mainServices = [
    { title: 'Bespoke Residential', img: siteImages.services.residential, cat: 'Interiors' },
    { title: 'Modular Kitchens', img: siteImages.services.kitchen, cat: 'Precision' },
    { title: 'Serene Bedrooms', img: siteImages.services.bedroom, cat: 'Luxury' },
    { title: 'Executive Offices', img: siteImages.services.commercial, cat: 'Commercial' },
    { title: 'Fine Wardrobes', img: siteImages.services.wardrobe, cat: 'Storage' },
    { title: 'Turnkey Renovation', img: siteImages.services.residential, cat: 'Full Service' },
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

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-14">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col rounded-[28px] border border-[rgba(176,141,87,0.1)] bg-white/86 p-3 shadow-[0_18px_50px_rgba(30,26,23,0.04)] backdrop-blur"
            >
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[22px] shadow-xl transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/40" />

                <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="w-12 h-[1px] bg-gold mb-4 translate-y-4 transition-transform duration-500 group-hover:translate-y-0" />
                  <p className="text-white text-[0.8rem] font-light leading-relaxed translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    Masterfully crafted solutions tailored to your unique lifestyle and taste.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start px-2 pb-2">
                <span className="text-[0.6rem] tracking-[0.4em] uppercase font-bold text-gold mb-3 transition-all duration-300 group-hover:translate-x-2">
                  {service.cat}
                </span>
                <h3 className="font-serif text-[1.55rem] leading-tight text-dark transition-all duration-300 group-hover:text-gold group-hover:translate-x-2 md:text-[1.8rem]">
                  {service.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-white/40 opacity-0 transition-all duration-500 group-hover:opacity-100" />
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
