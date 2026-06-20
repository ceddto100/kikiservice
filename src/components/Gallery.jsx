import Reveal from './Reveal.jsx'

const ITEMS = [
  {
    label: 'Living Room',
    before: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
  },
  {
    label: 'Kitchen',
    before: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=700&q=80',
  },
  {
    label: 'Bedroom',
    before: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=80',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            See The Difference
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Before &amp; after
          </h2>
          <p className="mt-4 text-lg text-stone">
            A few real(ish) snapshots of spaces we&apos;ve brought back to
            life.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.before}
                      alt={`${item.label} before cleaning`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-charcoal/80 px-2.5 py-1 text-xs font-semibold text-cream">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.after}
                      alt={`${item.label} after cleaning`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-teal-500 px-2.5 py-1 text-xs font-semibold text-cream">
                      After
                    </span>
                  </div>
                </div>
                <p className="px-5 py-4 text-sm font-semibold text-charcoal">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
