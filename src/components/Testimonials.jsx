import { T } from '../theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: T.bgBeige, paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(5rem, 12vw, 10rem)' }}>
      <div className="px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto w-full">

        {/* Section Header */}
        <div className="reveal text-center mb-14 md:mb-20">
          <p
            className="tracking-[0.4em] uppercase font-semibold mb-5"
            style={{ color: T.gold, fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', fontFamily: "'Inter', sans-serif" }}
          >
            Client Stories
          </p>
          <h2
            className="font-normal leading-[1.2] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.6rem)', color: T.dark }}
          >
            What Our <em className="italic" style={{ color: T.gold }}>Clients</em> Say
          </h2>
          <div className="flex items-center gap-3 justify-center">
            <div className="h-px w-[50px]" style={{ background: T.goldBorder }} />
            <div className="w-[5px] h-[5px] rotate-45 shrink-0" style={{ background: T.gold }} />
            <div className="h-px w-[50px]" style={{ background: T.goldBorder }} />
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            0:    { slidesPerView: 1,   spaceBetween: 20 },
            640:  { slidesPerView: 1.2, spaceBetween: 24 },
            900:  { slidesPerView: 1.8, spaceBetween: 32 },
            1200: { slidesPerView: 2,   spaceBetween: 40 },
          }}
          className="!pb-16"
          style={{
            '--swiper-pagination-color': T.gold,
            '--swiper-pagination-bullet-inactive-color': T.textMuted,
            '--swiper-pagination-bullet-inactive-opacity': '0.3',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={t.name + i} className="!h-auto">
              <div
                className="group h-full flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2"
                style={{
                  background: T.bgWhite,
                  border: `1px solid ${T.goldBorder}`,
                  boxShadow: T.shadowSoft,
                  padding: 'clamp(1.75rem, 4vw, 3rem)',
                  borderRadius: '0px',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = T.shadowSoft }}
              >
                {/* Decorative large quote */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-6 leading-none transition-opacity duration-300 opacity-[0.05] group-hover:opacity-[0.09] select-none pointer-events-none"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(4rem, 8vw, 7rem)', color: T.dark }}
                >
                  "
                </span>

                <div>
                  {/* Stars */}
                  <div className="flex gap-[3px] mb-5" style={{ color: T.gold }}>
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p
                    className="italic font-light leading-[1.9] mb-0"
                    style={{ color: T.textMuted, fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}
                  >
                    "{t.text}"
                  </p>
                </div>

                {/* Bottom divider + author */}
                <div className="mt-8 pt-7 flex items-center gap-4" style={{ borderTop: `1px solid ${T.goldBorder}` }}>
                  {/* Initials badge */}
                  <div
                    className="shrink-0 flex items-center justify-center font-semibold"
                    style={{
                      width: '50px', height: '50px',
                      background: T.bgBeige,
                      color: T.gold,
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.1rem',
                      border: `1px solid ${T.goldBorder}`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <h4
                      className="font-semibold mb-1 leading-tight truncate"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: T.dark }}
                    >
                      {t.name}
                    </h4>
                    <span
                      className="tracking-[0.18em] uppercase font-semibold truncate block"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: T.gold }}
                    >
                      {t.loc}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
