const VARIANTS = {
  primary:
    'bg-teal-500 text-cream hover:bg-teal-600 shadow-sm shadow-teal-900/10',
  ghost:
    'bg-transparent text-charcoal border border-charcoal/15 hover:border-teal-500 hover:text-teal-600',
  light:
    'bg-cream text-teal-700 hover:bg-teal-50',
}

export default function Button({
  href = '#book',
  children,
  variant = 'primary',
  className = '',
  as = 'a',
  ...rest
}) {
  const Tag = as
  return (
    <Tag
      href={as === 'a' ? href : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
