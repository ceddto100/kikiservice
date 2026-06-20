import { Check } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'

const TIERS = [
  {
    name: 'Studio / 1BR',
    price: 89,
    description: 'Perfect for solo Airbnb turnovers or small post-party resets.',
    features: ['Up to 700 sq ft', 'Single bedroom & bath', '1-hour service window', 'Standard supply kit'],
    featured: false,
  },
  {
    name: '2–3 Bedroom',
    price: 149,
    description: 'Our most popular tier — ideal for family homes and mid-size rentals.',
    features: [
      'Up to 1,800 sq ft',
      '2–3 bedrooms, 2 baths',
      '2-hour service window',
      'Kitchen deep reset',
      'Linen change (rentals)',
    ],
    featured: true,
  },
  {
    name: 'Large Party',
    price: 219,
    description: 'For full-house parties, events, or larger short-term rentals.',
    features: [
      '1,800+ sq ft or full event space',
      'Indoor + outdoor cleanup',
      'Trash & recycling haul-away',
      '3+ hour crew coverage',
      'Priority same-day slots',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream-dim py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Every job is unique — these starting prices give you a ballpark. Final quote confirmed before we book."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.12}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  tier.featured
                    ? 'bg-charcoal text-cream shadow-2xl shadow-charcoal/30 lg:-translate-y-3'
                    : 'border border-charcoal/10 bg-white'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cream">
                    Most Popular
                  </span>
                )}

                <h3 className={`text-lg font-semibold ${tier.featured ? 'text-cream' : 'text-charcoal'}`}>
                  {tier.name}
                </h3>
                <p className={`mt-2 text-sm ${tier.featured ? 'text-cream/70' : 'text-charcoal-soft'}`}>
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-medium opacity-70">starting at</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold">${tier.price}</span>
                  <span className={`text-sm ${tier.featured ? 'text-cream/60' : 'text-charcoal-soft'}`}>
                    /clean
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          tier.featured ? 'bg-teal-500/20 text-teal-300' : 'bg-teal-100 text-teal-700'
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className={tier.featured ? 'text-cream/90' : 'text-charcoal-soft'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#booking"
                  variant={tier.featured ? 'primary' : 'outline'}
                  className="mt-8 w-full"
                >
                  Book This Tier
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
