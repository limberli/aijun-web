interface LogoProps {
  className?: string
  showWordmark?: boolean
}

/** AI JUN brand lockup: glowing robot glyph + wordmark. */
export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-surface ring-1 ring-white/10">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-blue/20 blur-[6px]" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6" aria-hidden="true">
          <defs>
            <linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#00E5FF" />
              <stop offset="1" stopColor="#0099FF" />
            </linearGradient>
          </defs>
          <rect x="6" y="9" width="20" height="16" rx="6" fill="none" stroke="url(#logoG)" strokeWidth="2.4" />
          <circle cx="12.5" cy="17" r="2.1" fill="#00E5FF" />
          <circle cx="19.5" cy="17" r="2.1" fill="#00E5FF" />
          <path d="M16 3v4" stroke="url(#logoG)" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="16" cy="2.5" r="1.8" fill="#00E5FF" />
        </svg>
      </span>
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-white">
          AI <span className="text-gradient-brand">JUN</span>
        </span>
      )}
    </span>
  )
}

export default Logo
