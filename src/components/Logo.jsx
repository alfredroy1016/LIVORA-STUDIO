/**
 * LIVORA logo — gold geometric L-mark SVG.
 * `light` prop: renders wordmark text in dark color for light backgrounds.
 */
export default function Logo({ size = 40, showText = true, light = false, className = '' }) {
  const nameColor  = '#B08D57'                          // always gold
  const subColor   = light ? '#555555' : 'rgba(245,239,230,0.65)'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="8" width="84" height="84" stroke="#B08D57" strokeWidth="5" fill="none"/>
        <rect x="8" y="8" width="18" height="70" fill="#B08D57"/>
        <rect x="8" y="60" width="58" height="18" fill="#B08D57"/>
        <rect x="62" y="18" width="11" height="11" fill="#B08D57"/>
        <rect x="78" y="18" width="11" height="11" fill="#B08D57"/>
        <rect x="62" y="34" width="11" height="11" fill="#B08D57"/>
        <rect x="78" y="34" width="11" height="11" fill="#B08D57"/>
      </svg>
      {showText && (
        <div>
          <p style={{ fontFamily:"'Playfair Display',serif", letterSpacing:'.15em', color: nameColor, fontSize:'1.4rem', fontWeight:700, lineHeight:1, margin:0 }}>LIVORA</p>
          <p style={{ fontFamily:"'Inter',sans-serif", fontSize:'.5rem', letterSpacing:'.4em', color: subColor, textTransform:'uppercase', marginTop:'3px', margin:0 }}>Interior Studio</p>
        </div>
      )}
    </div>
  )
}
