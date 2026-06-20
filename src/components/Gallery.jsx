import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import PlaceholderImage from './ui/PlaceholderImage'

const PAIRS = [
  {
    title: 'Living Room Reset',
    before: 'https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Kitchen Turnover',
    before: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Guest Bedroom',
    before: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-dim py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="See The Difference"
          title="Before &amp; after"
          subtitle="A small sample of real spaces we've brought back to life."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PAIRS.map((pair, i) => (
            <Reveal key={pair.title} delay={i * 0.12}>
              <div className="overflow-hidden rounded-3xl border border-charcoal/10 bg-white">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <PlaceholderImage
                      src={pair.before}
                      alt={`${pair.title} before cleaning`}
                      label="Before"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-charcoal/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square">
                    <PlaceholderImage
                      src={pair.after}
                      alt={`${pair.title} after cleaning`}
                      label="After"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-teal-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-cream">
                      After
                    </span>
                  </div>
                </div>
                <p className="px-5 py-4 text-sm font-medium text-charcoal">{pair.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
