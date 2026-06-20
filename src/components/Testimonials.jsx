import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal.jsx'

const REVIEWS = [
  {
    name: 'Jordan M.',
    role: 'Airbnb Superhost, Austin TX',
    quote:
      'Kiki’s team turns my unit around between back-to-back bookings without fail. My ratings went up the month I started using them.',
  },
  {
    name: 'Priya S.',
    role: 'Hosted a 30th birthday bash',
    quote:
      'I woke up dreading the cleanup and they had my apartment spotless in under three hours. Worth every penny.',
  },
  {
    name: 'Marcus T.',
    role: 'Property Manager, 6 units',
    quote:
      'Reliable, communicative, and consistent quality across every property. They’re now my only call for turnovers.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-night py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Kind Words
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Loved by hosts and party people alike
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-edge bg-card p-7 transition-colors duration-300 hover:border-blue-400/40">
                <Quote className="text-blue-400/60" size={28} />
                <div className="mt-4 flex gap-1 text-blue-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-blue-400" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-fog">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-6 border-t border-edge pt-4">
                  <p className="font-display font-semibold text-paper">
                    {review.name}
                  </p>
                  <p className="text-sm text-fog">{review.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
