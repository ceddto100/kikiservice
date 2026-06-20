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
    <footer className="hero-section border-t border-edge text-paper/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-paper">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-paper shadow-[0_0_18px_-2px_var(--color-blue-500)]">
                <Sparkles size={16} />
              </span>
              Kiki&apos;s Cleanup
            </a>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              Boutique cleanup for post-party recovery and Airbnb turnovers,
              done right, every time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 text-paper transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_16px_-2px_var(--color-blue-500)]"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-paper">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-paper/60">
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
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-paper">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-paper/60">
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#pricing" className="hover:text-blue-300">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-blue-300">Gallery</a></li>
              <li><a href="#book" className="hover:text-blue-300">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-paper">
              Service Area
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              Proudly serving Austin, Round Rock, Cedar Park, and the greater
              Central Texas area. Ask about availability outside this zone.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs text-paper/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Kiki&apos;s Cleanup Service. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
