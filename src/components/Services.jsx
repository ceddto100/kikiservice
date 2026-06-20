import { PartyPopper, Home, Check } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'

const SERVICES = [
  {
    icon: PartyPopper,
    title: 'Post-Party Cleanup',
    description:
      'Birthday bash, holiday gathering, or backyard blowout — we restore your space to spotless, fast, so the only thing left to remember the party by are the photos.',
    bullets: [
      'Trash, recycling & bottle removal',
      'Spill, stain & sticky-floor treatment',
      'Kitchen, counters & dish cleanup',
      'Furniture reset & deep vacuuming',
      'Bathroom refresh & restock',
      'Outdoor patio / yard tidy-up',
    ],
  },
  {
    icon: Home,
    title: 'Airbnb Turnover Cleaning',
    description:
      'Fast, photo-ready turnovers between guests. We follow your house checklist (or build one with you) so every stay starts with a five-star first impression.',
    bullets: [
      'Full bed-making with fresh linens',
      'Bathroom sanitation & restock',
      'Kitchen reset & supply check',
      'Guest-ready staging & touch-ups',
      'Damage & missing-item reporting',
      'Flexible same-day scheduling',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Two specialties. One spotless standard."
          subtitle="We don't try to do everything — we've mastered the two cleanups that matter most to hosts and party-throwers."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 0.12}>
                <div className="group h-full rounded-3xl border border-charcoal/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10 sm:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-cream">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-charcoal-soft">{service.description}</p>

                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-charcoal-soft">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Button href="#booking" variant="outline" className="mt-8 w-full">
                    Book {service.title}
                  </Button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
