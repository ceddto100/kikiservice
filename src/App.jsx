import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhyKikis from './components/WhyKikis.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Gallery from './components/Gallery.jsx'
import BookingForm from './components/BookingForm.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyKikis />
        <Pricing />
        <Testimonials />
        <Gallery />
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
