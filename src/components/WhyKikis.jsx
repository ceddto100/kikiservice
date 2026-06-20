import { Clock, ShieldCheck, BadgeCheck, Zap } from 'lucide-react'
import Reveal from './Reveal.jsx'

const BADGES = [
  {
    icon: Zap,
    title: 'Same-Day Available',
    description: 'Last-minute mess? Book before noon and we’ll often make it work same day.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most standard cleanups are wrapped in 2-4 hours, start to finish.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    description: 'Bonded, insured, and background-checked — your property is in safe hands.',
  },
  {
    icon: BadgeCheck,
    title: 'Satisfaction Guaranteed',
    description: 'Not happy with a spot? We’ll come back and fix it, free of charge.',
  },
]

export default function WhyKikis() {
  return (
    <section className="bg-night py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Why Kiki&apos;s
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Reliable, careful, and a little obsessive about clean
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((badge, i) => (
            <Reveal key={badge.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-edge bg-card p-7 text-center transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-300 transition-shadow duration-300 group-hover:shadow-[0_0_20px_-4px_var(--color-blue-500)]">
                  <badge.icon size={24} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-paper">
                  {badge.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {badge.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
