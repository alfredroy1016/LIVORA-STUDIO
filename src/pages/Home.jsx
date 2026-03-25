import Hero         from '../components/sections/Hero'
import BrandStrip   from '../components/sections/BrandStrip'
import About        from '../components/sections/About'
import Services     from '../components/sections/Services'
import Portfolio    from '../components/sections/Portfolio'
import WhyUs        from '../components/sections/WhyUs'
import Philosophy   from '../components/sections/Philosophy'
import Testimonials from '../components/sections/Testimonials'
import FAQ          from '../components/sections/FAQ'
import Contact      from '../components/sections/Contact'

export default function Home() {
  return (
    <>
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
    </>
  )
}