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
    <section id="how-it-works" className="bg-teal-900 py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Four steps to a spotless space
          </h2>
          <p className="mt-4 text-lg text-teal-100/80">
            No guesswork, no hidden fees — just a simple process that gets you
            back to normal fast.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-cream/10 bg-cream/5 p-6">
                <span className="font-display text-sm font-bold text-teal-300">
                  0{i + 1}
                </span>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cream/10 text-teal-300">
                  <step.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-100/75">
                  {step.description}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="absolute top-1/2 -right-4 hidden h-px w-8 bg-cream/15 lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
