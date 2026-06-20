const VARIANTS = {
  primary:
    'bg-gradient-to-r from-blue-400 to-blue-600 text-paper shadow-lg shadow-blue-900/40 hover:shadow-blue-500/40 hover:brightness-110',
  ghost:
    'bg-transparent text-paper border border-edge hover:border-blue-400 hover:text-blue-300 hover:shadow-[0_0_20px_-6px_var(--color-blue-500)]',
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
