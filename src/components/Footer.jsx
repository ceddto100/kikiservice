import { Sparkles, AtSign, Share2, MapPin, Mail, Phone } from 'lucide-react'

const SERVICE_LINKS = [
  { label: 'Post-Party Cleanup', href: '#services' },
  { label: 'Airbnb Turnover Cleaning', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book Now', href: '#booking' },
]

const SOCIALS = [
  { icon: AtSign, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Share2, href: 'https://facebook.com', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#top" className="flex items-center gap-2 text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600">
              <Sparkles size={18} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Kiki&rsquo;s Cleanup
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Spotless post-party resets and Airbnb turnovers, done right, on your schedule.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-teal-600 hover:text-cream"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-cream">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-teal-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-cream">
            Contact
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-teal-300" /> (555) 012-3456
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-teal-300" /> hello@kikiscleanup.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-teal-300" /> Based in Austin, TX
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-cream">
            Service Area
          </h4>
          <p className="mt-5 text-sm leading-relaxed">
            Proudly serving Austin and the surrounding metro — Round Rock, Cedar Park,
            Georgetown, Pflugerville &amp; more.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-cream/50 lg:px-8">
        © {new Date().getFullYear()} Kiki&rsquo;s Cleanup Service. All rights reserved.
      </div>
    </footer>
  )
}
