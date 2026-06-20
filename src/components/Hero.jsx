import { motion } from 'framer-motion'
import { CalendarCheck, Sparkles, Star } from 'lucide-react'
import Button from './ui/Button'
import PlaceholderImage from './ui/PlaceholderImage'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50/70 via-cream to-cream" />
      <div className="absolute -right-32 top-10 -z-10 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="absolute -left-24 top-64 -z-10 h-64 w-64 rounded-full bg-teal-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-700">
            <Sparkles size={14} /> Trusted local cleanup crew
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Party&rsquo;s over.
            <br />
            <span className="text-teal-600">We&rsquo;ve got the mess.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-soft">
            From confetti-covered floors to back-to-back guest turnovers, Kiki&rsquo;s
            Cleanup Service handles post-party reset and Airbnb &amp; short-term-rental
            cleaning so you can get back to hosting &mdash; not scrubbing.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#booking">
              <CalendarCheck size={18} /> Book Now
            </Button>
            <Button href="#services" variant="outline">
              See Services
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-charcoal-soft">
            <div className="flex items-center gap-1.5">
              <div className="flex text-teal-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="font-semibold text-charcoal">4.9/5</span>
            </div>
            <span className="h-4 w-px bg-charcoal/15" />
            <span>200+ cleanups completed</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-teal-900/20">
            <PlaceholderImage
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
              alt="Sparkling clean living space ready for guests"
              label="Clean Space Hero Photo"
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -left-6 bottom-8 hidden rounded-2xl bg-cream p-4 shadow-xl shadow-charcoal/10 sm:block"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              Avg. turnaround
            </p>
            <p className="font-display text-2xl font-bold text-charcoal">2&ndash;3 hrs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="absolute -right-4 top-8 hidden rounded-2xl bg-charcoal p-4 text-cream shadow-xl shadow-charcoal/20 sm:block"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">
              Same-day
            </p>
            <p className="font-display text-2xl font-bold">Available</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
