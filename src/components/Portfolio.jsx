import { motion } from 'framer-motion'
import { T } from '../theme'

const PROJECTS = [
  { title:'The Meridian Living Suite',   sub:'Luxury Living · Wayanad',   img:'/hero.png',     span:2 },
  { title:'Island Kitchen — Casa Verde', sub:'Kitchen · Kalpetta',        img:'/kitchen.png',  span:1 },
  { title:'Master Retreat',             sub:'Bedroom · Sultan Bathery',   img:'/bedroom.png',  span:1 },
  { title:'Vertex Corporate HQ',        sub:'Commercial · Kozhikode',    img:'/office.png',   span:1 },
  { title:'Bespoke Walk-in Wardrobe',   sub:'Wardrobe · Sultan Bathery',  img:'/wardrobe.png', span:1 },
  { title:'Villa Aranya — Full Home',   sub:'Residential · Mananthavady', img:'/hero.png',     span:2 },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 lg:py-40" style={{ background: T.bgWhite }}>
      <div className="container px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[0.7rem] tracking-[0.45em] uppercase font-bold mb-5"
            style={{ color: T.gold }}
          >
            Curated Spaces
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Playfair_Display'] text-[2.5rem] md:text-[3.5rem] lg:text-[4.2rem] leading-[1.1]"
            style={{ color: T.dark }}
          >
            Featured <em className="italic" style={{ color: T.gold }}>Portfolio</em>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[2px] mx-auto mt-8"
            style={{ background: T.gold }}
          />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col ${p.span === 2 ? 'md:col-span-2' : ''}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-[500px] rounded-2xl md:rounded-none shadow-2xl md:shadow-none transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                
                {/* Desktop Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Mobile Info (Hidden on Desktop) */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-[0.65rem] tracking-[0.3em] uppercase font-bold text-white/70 mb-2">
                    {p.sub}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-[1.6rem] leading-tight">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* Desktop Info (Visible below image or on hover) */}
              <div className="hidden md:flex flex-col mt-6 transition-all duration-500 transform group-hover:translate-x-2">
                <span className="text-[0.68rem] tracking-[0.4em] uppercase font-semibold mb-3" style={{ color: T.gold }}>
                  {p.sub}
                </span>
                <h3 className="font-['Playfair_Display'] text-[1.5rem] lg:text-[1.8rem] leading-tight group-hover:text-[#B08D57] transition-colors duration-300" style={{ color: T.dark }}>
                  {p.title}
                </h3>
                <div className="w-0 group-hover:w-20 h-[1.5px] mt-4 transition-all duration-500" style={{ background: T.gold }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a 
            href="#" 
            className="inline-block relative px-10 py-5 transition-all duration-500 group overflow-hidden" 
            style={{ 
              background: T.dark, 
              color: T.white,
              letterSpacing: '0.25em',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase'
            }}
          >
            <span className="relative z-10">Examine All Works</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" style={{ background: T.gold }} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

