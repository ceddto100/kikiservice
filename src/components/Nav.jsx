import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import Button from './Button.jsx'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm shadow-charcoal/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-charcoal">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-cream">
            <Sparkles size={16} />
          </span>
          Kiki&apos;s Cleanup
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone transition-colors hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#book">Book Now</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-charcoal md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-stone hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
            <Button href="#book" onClick={() => setOpen(false)} className="mt-2 w-full">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
