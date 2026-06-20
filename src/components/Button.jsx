const VARIANTS = {
  primary:
    'bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-paper shadow-lg shadow-blue-900/40 ring-1 ring-blue-200/20 hover:shadow-blue-500/40 hover:brightness-110',
  ghost:
    'bg-white/5 text-paper border border-blue-300/20 backdrop-blur hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10 hover:shadow-[0_0_20px_-6px_var(--color-blue-500)]',
  light:
    'bg-paper text-blue-700 hover:bg-blue-50',
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
