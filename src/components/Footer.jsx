import { Sparkles, Mail, Phone, MapPin } from 'lucide-react'

function InstagramIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M14 9h2.5V6H14c-1.66 0-3 1.34-3 3v2H9v3h2v7h3v-7h2.2l.8-3H14V9z" />
    </svg>
  )
}

const SOCIALS = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-cream">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-cream">
                <Sparkles size={16} />
              </span>
              Kiki&apos;s Cleanup
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Boutique cleanup for post-party recovery and Airbnb turnovers,
              done right, every time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-teal-500"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-cream">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li className="flex items-center gap-2">
                <Phone size={14} /> (555) 867-5309
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> hello@kikiscleanup.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> Austin, TX &amp; surrounding areas
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-cream">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/60">
              <li><a href="#services" className="hover:text-cream">Services</a></li>
              <li><a href="#pricing" className="hover:text-cream">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-cream">Gallery</a></li>
              <li><a href="#book" className="hover:text-cream">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-cream">
              Service Area
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Proudly serving Austin, Round Rock, Cedar Park, and the greater
              Central Texas area. Ask about availability outside this zone.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Kiki&apos;s Cleanup Service. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream">Privacy Policy</a>
            <a href="#" className="hover:text-cream">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
