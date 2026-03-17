const WA  = 'https://wa.me/918921179724'
const TEL = 'tel:+918921179724'

export default function FloatingButtons() {
  return (
    <div className="floating-buttons" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 800, display: 'flex', flexDirection: 'column', gap: '.8rem', alignItems: 'flex-end' }}>
      {/* WhatsApp */}
      <a href={WA} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.3rem', boxShadow: '0 4px 20px rgba(0,0,0,.4)', transition: 'transform .35s', position: 'relative' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'none'}
      >
        <span style={{ position: 'absolute', right: 'calc(100% + 10px)', background: 'rgba(11,16,32,.92)', color: '#F5EFE6', fontSize: '.68rem', letterSpacing: '.12em', whiteSpace: 'nowrap', padding: '.3rem .8rem', opacity: 0, transform: 'translateX(6px)', transition: 'all .3s', pointerEvents: 'none' }}
          className="float-label">Chat on WhatsApp</span>
        💬
      </a>

      {/* Call */}
      <a href={TEL} aria-label="Call LIVORA"
        style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#B08D57', color: '#0B1020', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '1.3rem', boxShadow: '0 4px 20px rgba(0,0,0,.4)', transition: 'transform .35s', position: 'relative' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'none'}
      >
        📞
      </a>
    </div>
  )
}
