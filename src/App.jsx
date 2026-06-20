import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyKikis from './components/WhyKikis'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans text-charcoal">
      <Navbar />
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
