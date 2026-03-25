import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const NotFound = lazy(() => import('../pages/NotFound'))

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 py-20">
      <div className="rounded-full border border-gold/15 bg-white/80 px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#7f6338] shadow-[0_12px_32px_rgba(30,26,23,0.05)] backdrop-blur">
        Loading Experience
      </div>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
