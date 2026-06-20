import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Button from './Button.jsx'

const TIERS = [
  {
    name: 'Studio / 1BR',
    price: '$99',
    note: 'starting price',
    description: 'Perfect for a small apartment turnover or an intimate gathering cleanup.',
    features: [
      'Up to 700 sq ft',
      '1 cleaner, ~1.5 hours',
      'Kitchen & bathroom reset',
      'Trash & recycling removal',
    ],
    highlight: false,
  },
  {
    name: '2-3BR Home',
    price: '$179',
    note: 'starting price',
    description: 'Our most popular tier — ideal for family homes and standard Airbnb units.',
    features: [
      'Up to 1,800 sq ft',
      '2 cleaners, ~2.5 hours',
      'Full linen changeover',
      'Kitchen, bath & living areas',
      'Restock & staging touch-up',
    ],
    highlight: true,
  },
  {
    name: 'Large Party / Estate',
    price: '$299',
    note: 'starting price',
    description: 'For big blowouts, multi-room venues, and larger short-term rentals.',
    features: [
      '1,800+ sq ft',
      '3+ cleaners, ~3-4 hours',
      'Heavy-duty spill & stain treatment',
      'Outdoor & patio cleanup included',
      'Priority same-day scheduling',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Simple pricing, no surprises
          </h2>
          <p className="mt-4 text-lg text-fog">
            Every quote is confirmed before we arrive. Final pricing depends on
            size, condition, and add-ons.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-3xl p-8 ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-blue-500 to-blue-700 text-paper shadow-2xl shadow-blue-500/30 ring-1 ring-blue-300/40 lg:-translate-y-3'
                    : 'border border-edge bg-card text-paper'
                }`}
              >
                {tier.highlight && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-paper/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                <p className={`mt-3 text-sm ${tier.highlight ? 'text-paper/80' : 'text-fog'}`}>
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold">{tier.price}</span>
                  <span className={`text-sm ${tier.highlight ? 'text-paper/70' : 'text-fog'}`}>
                    {tier.note}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-paper' : 'text-blue-400'}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#book"
                  variant={tier.highlight ? 'light' : 'primary'}
                  className="mt-8 w-full"
                >
                  Book This Tier
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-fog">
          Need something custom? <a href="#book" className="font-semibold text-blue-400 hover:underline">Reach out</a> for a tailored quote.
        </p>
      </div>
    </section>
  )
}
