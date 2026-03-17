import { T } from '../theme'

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${T.bgBeige} 0%, ${T.bgWhite} 60%, ${T.bgBeige} 100%)`,
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 6vw, 6rem)',
        minHeight: '55vh',
      }}
    >
      {/* Giant decorative background letter */}
      <div
        aria-hidden="true"
        className="select-none pointer-events-none absolute left-1/2 top-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(14rem, 40vw, 28rem)',
          lineHeight: 1,
          color: T.gold,
          opacity: 0.04,
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        "
      </div>

      {/* Content */}
      <div className="reveal relative z-10 w-full max-w-[860px] mx-auto text-center flex flex-col items-center gap-8 md:gap-10">

        {/* Top label */}
        <p
          className="tracking-[0.4em] uppercase font-semibold"
          style={{ color: T.gold, fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)', fontFamily: "'Inter', sans-serif" }}
        >
          Our Philosophy
        </p>

        {/* Gold divider */}
        <div className="flex items-center gap-4 w-full max-w-[200px]">
          <div className="flex-1 h-px" style={{ background: T.goldBorder }} />
          <div className="w-[6px] h-[6px] rotate-45" style={{ background: T.gold }} />
          <div className="flex-1 h-px" style={{ background: T.goldBorder }} />
        </div>

        {/* The actual quote */}
        <blockquote
          className="font-normal italic leading-relaxed m-0"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)',
            color: T.dark,
            lineHeight: 1.65,
          }}
        >
          Good design is not just what it looks like.
          <br className="hidden md:block" />
          {' '}It is how it{' '}
          <em style={{ color: T.gold }}>transforms daily living</em>
          {' '}through comfort, atmosphere, and refined detail.
        </blockquote>

        {/* Gold divider */}
        <div className="flex items-center gap-4 w-full max-w-[200px]">
          <div className="flex-1 h-px" style={{ background: T.goldBorder }} />
          <div className="w-[6px] h-[6px] rotate-45" style={{ background: T.gold }} />
          <div className="flex-1 h-px" style={{ background: T.goldBorder }} />
        </div>

        {/* Citation */}
        <cite
          className="not-italic tracking-[0.3em] uppercase font-semibold"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
            color: T.textMuted,
          }}
        >
          — LIVORA Interior Studio
        </cite>
      </div>
    </section>
  )
}
