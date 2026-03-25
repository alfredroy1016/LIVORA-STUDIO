const LOGO_SOURCES = {
  white: '/images/LOGOWHITE.PNG',
  black: '/images/LOGOBLACK.png',
}

export default function Logo({ size = 58, showText = true, className = '', variant = 'white' }) {
  const desktopHeight = showText ? size * 2.0 : size * 1.35
  const mobileHeight = showText ? Math.max(size * 1.4, 34) : Math.max(size * 1.1, 28)
  const desktopWidth = showText ? size * 7.2 : size * 2.2
  const mobileWidth = showText ? size * 4.8 : size * 1.8
  const logoSrc = LOGO_SOURCES[variant] ?? LOGO_SOURCES.white

  return (
    <div className={`group inline-flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Livora Interior Studio logo"
        className="livora-logo-image h-auto w-auto object-contain transition duration-500 group-hover:scale-105"
        style={{
          height: `${desktopHeight}px`,
          maxWidth: `${desktopWidth}px`,
          transform: 'scale(0.6)',
          transformOrigin: 'left center',
          ['--livora-logo-mobile-height']: `${mobileHeight}px`,
          ['--livora-logo-mobile-width']: `${mobileWidth}px`,
        }}
      />
    </div>
  )
}
