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
    <section id="portfolio" className="py-20 md:py-32 lg:py-40 bg-white" style={{ background: T.bgWhite }}>
      <div className="px-6 md:px-12 lg:px-16 max-w-[1280px] mx-auto w-full">
        <div className="reveal text-center mb-12 md:mb-16 lg:mb-20">
          <p className="text-[0.7rem] tracking-[0.4em] uppercase font-semibold mb-4 md:mb-6" style={{ color: T.gold }}>Our Work</p>
          <h2 className="font-['Playfair_Display'] text-[2.2rem] md:text-[3rem] lg:text-[3.8rem] leading-[1.15] mb-6 md:mb-8" style={{ color: T.dark }}>
            Featured <em className="italic" style={{ color: T.gold }}>Projects</em>
          </h2>
          <div className="w-[60px] h-[2px] mx-auto" style={{ background: T.gold }} />
        </div>

        {/* Masonry grid with responsive gaps */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 rounded-2xl md:rounded-none overflow-hidden pb-4">
          {PROJECTS.map((p, i) => (
            <div key={p.title + i} className={`reveal group relative overflow-hidden cursor-pointer ${p.span === 2 ? 'md:col-span-2' : 'col-span-1'} rounded-[18px] md:rounded-none shadow-sm md:shadow-none bg-white`}
              style={{ padding: window.innerWidth < 768 ? '10px' : '0' }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[12px] md:rounded-none" style={{ aspectRatio: window.innerWidth < 768 ? '4/3' : (p.span === 2 ? '2/1' : '1/1') }}>
                <img className="pf-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={p.img} alt={p.title} />
                
                {/* Desktop hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />
                
                {/* Mobile permanent gradient */}
                <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 flex flex-col items-start justify-end transform translate-y-0 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out text-left">
                  <span className="text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] md:tracking-[0.25em] uppercase font-semibold mb-2 block text-white/90 drop-shadow-md">
                    {p.sub}
                  </span>
                  <h4 className="font-['Playfair_Display'] text-[1.4rem] md:text-[1.8rem] leading-tight text-white m-0 drop-shadow-lg">
                    {p.title}
                  </h4>
                  <div className="w-[40px] h-[2px] mt-4 opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-700 delay-100" style={{ background: T.gold }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16 reveal">
          <a href="#" className="inline-block px-8 py-4 text-[0.75rem] tracking-[0.2em] uppercase font-semibold transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg" style={{ background: T.dark, color: T.white }}>
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
