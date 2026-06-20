import { CalendarCheck, Sparkles, Key, Smile } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const STEPS = [
  {
    icon: CalendarCheck,
    title: 'Book',
    description: 'Pick a date and tell us what we’re working with — pick your service in under 2 minutes.',
  },
  {
    icon: Key,
    title: 'We Arrive',
    description: 'Our vetted crew shows up on time with all supplies and equipment included.',
  },
  {
    icon: Sparkles,
    title: 'We Clean',
    description: 'We work through our checklist top to bottom so nothing gets missed.',
  },
  {
    icon: Smile,
    title: 'You Relax',
    description: 'Walk back into a spotless, guest-ready space. That’s it — you’re done.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream-dim py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="How It Works"
          subtitle="Four simple steps between you and a clean space — no back-and-forth, no surprises."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-charcoal/10 lg:block" />
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={i * 0.12} className="relative text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-cream shadow-lg shadow-teal-900/20">
                  <Icon size={24} />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal text-xs font-bold text-cream">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm text-charcoal-soft">{step.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
