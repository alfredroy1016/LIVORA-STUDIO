export default function Logo({ size = 48, className = '' }) {
  return (
    <div className={`group inline-flex items-center ${className}`}>
      <img
        src="/images/livora-logo.png"
        alt="LIVORA Interior Studio"
        className="w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        style={{ height: `${size}px` }}
      />
    </div>
  )
}
