import { motion } from 'framer-motion'
import { CalendarCheck, Star } from 'lucide-react'
import Button from './Button.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero-section pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 grid-fade opacity-60" />
      <div className="orb drift pointer-events-none absolute -top-32 -right-24 h-[30rem] w-[30rem] bg-blue-600/40" />
      <div className="orb drift pointer-events-none absolute top-1/3 -left-40 h-96 w-96 bg-slate-400/18 [animation-delay:-4s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-blue-400" />
            Now booking same-day cleanups
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            Party&apos;s over.
            <br />
            <span className="glow-text">We&apos;ve got the mess.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
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

          <div className="mt-10 flex items-center gap-6 text-sm text-fog">
            <div>
              <p className="font-display text-2xl font-bold text-paper">500+</p>
              <p>Cleanups completed</p>
            </div>
            <div className="h-10 w-px bg-edge" />
            <div>
              <p className="font-display text-2xl font-bold text-paper">
                4.9<Star size={14} className="ml-0.5 inline -translate-y-0.5 fill-blue-400 text-blue-400" />
              </p>
              <p>Average rating</p>
            </div>
            <div className="h-10 w-px bg-edge" />
            <div>
              <p className="font-display text-2xl font-bold text-paper">2-4 hr</p>
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
          <div className="vibe-card relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-900/40">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
              alt="Bright, freshly cleaned living room ready for the next guest"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-blue-400/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass absolute -bottom-6 -left-6 w-56 rounded-2xl border border-edge p-4 shadow-xl shadow-black/40 sm:-left-10"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
              Guest-Ready
            </p>
            <p className="mt-1 text-sm text-fog">
              Turned over in under 3 hours, every time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
