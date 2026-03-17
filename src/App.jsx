import { useState, useEffect } from 'react'
import Loader          from './components/Loader'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import BrandStrip      from './components/BrandStrip'
import About           from './components/About'
import Services        from './components/Services'
import Portfolio       from './components/Portfolio'
import WhyUs           from './components/WhyUs'
import Philosophy      from './components/Philosophy'
import Testimonials    from './components/Testimonials'
import FAQ             from './components/FAQ'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [loading, setLoading] = useState(true)
  useScrollReveal()

  // If loader is gone, hide it (avoids keeping it in DOM)
  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [loading])

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}

      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity .6s ease' }}>
        <Navbar />
        <Hero />
        <BrandStrip />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Philosophy />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  )
}
