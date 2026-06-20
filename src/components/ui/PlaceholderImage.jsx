import { useState } from 'react'
import { ImageIcon } from 'lucide-react'

export default function PlaceholderImage({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-teal-100 via-teal-50 to-cream-dim text-teal-700 ${className}`}
      >
        <ImageIcon size={28} strokeWidth={1.5} />
        <span className="text-xs font-medium uppercase tracking-widest">{label}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
