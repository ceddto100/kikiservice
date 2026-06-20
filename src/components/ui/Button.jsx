const VARIANTS = {
  primary:
    'bg-teal-600 text-cream hover:bg-teal-700 shadow-lg shadow-teal-900/15',
  outline:
    'border border-charcoal/15 text-charcoal hover:border-teal-600 hover:text-teal-700',
  ghost: 'text-charcoal hover:text-teal-700',
}

export default function Button({
  as = 'a',
  href = '#booking',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Component = as
  return (
    <Component
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
