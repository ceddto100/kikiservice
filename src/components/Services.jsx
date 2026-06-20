import { PartyPopper, Home, Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

const SERVICES = [
  {
    icon: PartyPopper,
    title: 'Post-Party Cleanup',
    tagline: 'For the morning after the best night ever',
    description:
      'Birthdays, bachelorette weekends, holiday parties, backyard bashes — we clear the chaos so you don’t have to face it hungover.',
    bullets: [
      'Trash, recycling & bottle removal',
      'Spill, stain & spot treatment',
      'Kitchen, bar cart & dish cleanup',
      'Floor sweep, mop & vacuum',
      'Bathroom reset & restock',
      'Furniture reset & deep tidy',
    ],
    image:
      'https://images.unsplash.com/photo-1496843916299-590492c751f4?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Home,
    title: 'Airbnb Turnover Cleaning',
    tagline: 'Five-star ready, between every guest',
    description:
      'Fast, consistent turnovers that protect your rating and your reviews — with linens, restocking, and staging handled too.',
    bullets: [
      'Full bedroom & bathroom reset',
      'Fresh linens & towel changeover',
      'Kitchen sanitation & restock check',
      'Hotel-style staging & presentation',
      'Damage & missing-item reporting',
      'Same-day turnaround available',
    ],
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="vibe-section py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Two specialties. One spotless standard.
          </h2>
          <p className="mt-4 text-lg text-fog">
            We don&apos;t do everything — we do these two things exceptionally
            well.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <div className="vibe-card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-900/30">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-paper shadow-[0_0_18px_-2px_var(--color-blue-500)]">
                    <service.icon size={20} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-bold text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-400">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-fog">{service.description}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-paper/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-blue-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Button href="#book" variant="ghost" className="mt-8 self-start">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
