import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-teal-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-teal-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-charcoal-soft sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  )
}
