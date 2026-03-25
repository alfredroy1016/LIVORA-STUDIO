import { useEffect } from 'react'
import { T } from '../../theme'

export default function Loader({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2200)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div
      id="loader"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: T.bgLoader,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: T.fontDisplay,
          fontSize: '2.6rem',
          letterSpacing: '.18em',
          color: T.gold,
          animation: 'loader-pulse 1.6s ease-in-out infinite',
        }}>
          LIVORA
        </div>
        <div style={{
          width: 0,
          height: '1px',
          background: T.gold,
          margin: '.9rem auto 0',
          animation: 'loader-expand 1.8s ease forwards',
        }} />
      </div>
    </div>
  )
}
