import { Star, Quote } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const REVIEWS = [
  {
    name: 'Maya R.',
    role: 'Airbnb Host, 3 properties',
    quote:
      "Kiki's team turns my units around between guests faster than I ever could. My ratings went up because the place is spotless every single time.",
  },
  {
    name: 'Devon T.',
    role: 'Hosted a 40-person birthday',
    quote:
      'I was dreading the cleanup the morning after. Booked Kiki\'s the night before and woke up to a crew that left the place better than before the party.',
  },
  {
    name: 'Priya S.',
    role: 'Short-term rental owner',
    quote:
      'Same-day booking saved me when a guest checked out early and a new one was arriving that night. Communication was great and pricing was fair.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by hosts and hosts-with-a-hangover alike"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white p-8">
                <Quote className="text-teal-300" size={28} />
                <div className="mt-4 flex text-teal-600">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-charcoal-soft">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-6 border-t border-charcoal/10 pt-4">
                  <p className="font-semibold text-charcoal">{review.name}</p>
                  <p className="text-sm text-charcoal-soft">{review.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
