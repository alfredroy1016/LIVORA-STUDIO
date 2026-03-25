import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FiMapPin } from 'react-icons/fi'
import { TESTIMONIALS } from '../../data/testimonials'
import { T } from '../../theme'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 lg:py-40"
      style={{ background: `linear-gradient(180deg, ${T.bgBeige} 0%, #ffffff 100%)` }}
    >
      <div className="container max-w-7xl px-6">
        <div className="mb-16 text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.62rem] font-bold uppercase tracking-[0.34em] sm:text-[0.68rem] sm:tracking-[0.45em]"
            style={{ color: T.gold }}
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-['Playfair_Display'] text-[2.25rem] leading-[1.03] text-[#1a1713] sm:text-[3rem] md:text-[4rem]"
          >
            Homes and brands that
            <span className="block italic" style={{ color: T.gold }}>
              remember the experience
            </span>
          </motion.h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          speed={850}
          spaceBetween={18}
          breakpoints={{
            0: { slidesPerView: 1 },
            860: { slidesPerView: 1.4 },
            1180: { slidesPerView: 2.15 },
          }}
          className="testimonial-premium-swiper !pb-16"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              {({ isActive }) => (
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.7 }}
                  className={`h-full rounded-[30px] border bg-white/92 p-6 text-center shadow-[0_25px_70px_rgba(20,17,14,0.07)] backdrop-blur transition duration-500 md:p-10 ${
                    isActive ? 'border-[rgba(176,141,87,0.28)]' : 'border-[rgba(176,141,87,0.12)]'
                  }`}
                >
                  <div className="flex flex-col items-center justify-center gap-5">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6efe2] font-['Playfair_Display'] text-[1.35rem] text-[#b08d57] md:h-16 md:w-16 md:text-[1.5rem]">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h3 className="font-['Playfair_Display'] text-[1.35rem] leading-tight text-[#1a1713] md:text-[1.55rem]">
                          {testimonial.name}
                        </h3>
                        <div className="mt-2 flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8c6f42]">
                          <FiMapPin size={13} />
                          <span>{testimonial.loc}</span>
                        </div>
                      </div>
                    </div>

                    <span className="font-['Playfair_Display'] text-[4rem] leading-none text-[#ead9b9]">
                      "
                    </span>
                  </div>

                  <p className="mt-8 max-w-none text-[0.96rem] leading-8 text-[#655f57] md:mt-10 md:text-[1rem]">
                    {testimonial.text}
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-[rgba(176,141,87,0.12)] pt-5 md:mt-10 md:pt-6">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#8c6f42] md:text-[0.68rem] md:tracking-[0.34em]">
                      Verified Client Review
                    </span>
                    <div className="flex gap-1 text-[#b08d57]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span key={starIndex}>*</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonial-premium-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        .testimonial-premium-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: ${T.gold};
          opacity: 0.18;
          transition: all 0.35s ease;
        }
        .testimonial-premium-swiper .swiper-pagination-bullet-active {
          width: 34px;
          border-radius: 999px;
          opacity: 1;
        }
        @media (max-width: 640px) {
          .testimonial-premium-swiper {
            overflow: visible;
          }
        }
      `}</style>
    </section>
  )
}
