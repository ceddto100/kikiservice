import { Clock, ShieldCheck, BadgeCheck, Zap } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const REASONS = [
  {
    icon: Zap,
    title: 'Same-Day Available',
    description: 'Last-minute mess? Most areas can get a crew out the same day you call.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Average post-party or turnover clean wraps in 2–3 hours, start to finish.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    description: 'Every job is covered, so you can relax knowing your space is protected.',
  },
  {
    icon: BadgeCheck,
    title: 'Satisfaction Guaranteed',
    description: "Not happy with a spot we missed? We'll come back and make it right, free.",
  },
]

export default function WhyKikis() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Why Kiki's" title="Cleaning you can actually count on" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <Reveal key={reason.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-charcoal/10 bg-white p-7 text-center transition-shadow hover:shadow-lg hover:shadow-teal-900/5">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-semibold text-charcoal">{reason.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-soft">{reason.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
