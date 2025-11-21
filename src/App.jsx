import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const onPrimaryClick = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero onPrimaryClick={onPrimaryClick} />
        <LogoStrip />

        <div id="problem"><Problem /></div>
        <div id="how"><HowItWorks /></div>
        <div id="features"><Features /></div>
        <Analytics />
        <Benefits />
        <div id="testimonials"><Testimonials /></div>
        <div id="pricing"><Pricing /></div>
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
