import { motion } from 'framer-motion'
import { CalendarCheck, Star } from 'lucide-react'
import Button from './Button.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-100 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-40 h-72 w-72 rounded-full bg-teal-50 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/60 bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-700">
            <Star size={13} className="fill-teal-700 text-teal-700" />
            Trusted by hosts &amp; hosts of the party
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Party&apos;s over.
            <br />
            We&apos;ve got the mess.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            From confetti-covered floors to a spotless Airbnb turnover before
            your next guest checks in — Kiki&apos;s Cleanup makes the aftermath
            disappear, fast.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#book" className="px-7 py-3.5 text-base">
              <CalendarCheck size={18} />
              Book Your Cleanup
            </Button>
            <Button href="#services" variant="ghost" className="px-7 py-3.5 text-base">
              Explore Services
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-stone">
            <div>
              <p className="font-display text-2xl font-bold text-charcoal">500+</p>
              <p>Cleanups completed</p>
            </div>
            <div className="h-10 w-px bg-line" />
            <div>
              <p className="font-display text-2xl font-bold text-charcoal">4.9★</p>
              <p>Average rating</p>
            </div>
            <div className="h-10 w-px bg-line" />
            <div>
              <p className="font-display text-2xl font-bold text-charcoal">2-4 hr</p>
              <p>Typical turnaround</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-teal-900 shadow-2xl shadow-teal-900/20">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
              alt="Bright, freshly cleaned living room ready for the next guest"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 -left-6 w-56 rounded-2xl bg-cream/95 p-4 shadow-xl shadow-charcoal/10 backdrop-blur sm:-left-10"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              Guest-Ready
            </p>
            <p className="mt-1 text-sm text-stone">
              Turned over in under 3 hours, every time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
