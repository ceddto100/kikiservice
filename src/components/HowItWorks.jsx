import { CalendarCheck, MessageCircleMore, Sparkles, PartyPopper } from 'lucide-react'
import Reveal from './Reveal.jsx'

const STEPS = [
  {
    icon: CalendarCheck,
    title: 'Book in minutes',
    description:
      'Tell us your space, your date, and what kind of mess we’re dealing with. Online or by phone.',
  },
  {
    icon: MessageCircleMore,
    title: 'We confirm the plan',
    description:
      'You’ll get a clear quote and arrival window, plus a quick reminder before we head over.',
  },
  {
    icon: Sparkles,
    title: 'We clean, you relax',
    description:
      'Our team arrives with everything needed and works room by room until it’s done right.',
  },
  {
    icon: PartyPopper,
    title: 'Guest-ready, party-proof',
    description:
      'Walk back into a space that looks better than before — ready for the next guest or the next night out.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="hero-section py-24 text-paper sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      <div className="drift pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Four steps to a spotless space
          </h2>
          <p className="mt-4 text-lg text-fog">
            No guesswork, no hidden fees — just a simple process that gets you
            back to normal fast.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <div className="vibe-card flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50">
                <span className="font-display text-sm font-bold text-blue-300">
                  0{i + 1}
                </span>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <step.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {step.description}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-px w-8 bg-blue-400/30 lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
