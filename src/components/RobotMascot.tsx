interface RobotMascotProps {
  className?: string
  /** Toggles the soft animated glow behind the robot. */
  glow?: boolean
}

/**
 * AI JUN mascot — a friendly futuristic robot with a white metallic body,
 * cyan glowing eyes and a blue hoodie. Rendered as an inline SVG so it stays
 * crisp at any size and can be reused across the page.
 */
export function RobotMascot({ className, glow = true }: RobotMascotProps) {
  return (
    <svg
      viewBox="0 0 280 320"
      className={className}
      role="img"
      aria-label="AI JUN robot mascot"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#e8eefc" />
          <stop offset="1" stopColor="#bcc8e4" />
        </linearGradient>
        <linearGradient id="metalDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dbe3f5" />
          <stop offset="1" stopColor="#9fb0d4" />
        </linearGradient>
        <linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0099ff" />
          <stop offset="1" stopColor="#0066cc" />
        </linearGradient>
        <linearGradient id="hoodieLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#33b5ff" />
          <stop offset="1" stopColor="#0099ff" />
        </linearGradient>
        <radialGradient id="visor" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0" stopColor="#0c1426" />
          <stop offset="1" stopColor="#060b16" />
        </radialGradient>
        <radialGradient id="eye" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#aef6ff" />
          <stop offset="1" stopColor="#00e5ff" />
        </radialGradient>
        <filter id="eyeGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient glow */}
      {glow && (
        <ellipse
          cx="140"
          cy="150"
          rx="118"
          ry="124"
          fill="#00e5ff"
          opacity="0.16"
          style={{ filter: 'blur(34px)' }}
        />
      )}

      {/* Antenna */}
      <line x1="140" y1="44" x2="140" y2="20" stroke="url(#metalDark)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="140" cy="16" r="8" fill="url(#eye)" filter="url(#eyeGlow)" />

      {/* Hoodie body */}
      <path
        d="M58 250c0-46 36-74 82-74s82 28 82 74v34a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8z"
        fill="url(#hoodie)"
      />
      {/* Hoodie inner shading */}
      <path
        d="M86 214c14-14 32-22 54-22s40 8 54 22c-12 30-31 44-54 44s-42-14-54-44z"
        fill="#005bb0"
        opacity="0.55"
      />
      {/* Hood collar around head */}
      <path
        d="M70 168c0-8 6-14 14-12 18 5 38 8 56 8s38-3 56-8c8-2 14 4 14 12 0 24-32 40-70 40s-70-16-70-40z"
        fill="url(#hoodieLight)"
      />
      {/* Drawstrings */}
      <path d="M120 198v34" stroke="#e8eefc" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
      <path d="M160 198v40" stroke="#e8eefc" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
      <circle cx="120" cy="234" r="4" fill="#e8eefc" />
      <circle cx="160" cy="240" r="4" fill="#e8eefc" />

      {/* Chest emblem */}
      <circle cx="140" cy="252" r="15" fill="#0a1020" opacity="0.65" />
      <path d="M140 244l7 12h-14z" fill="#00e5ff" />

      {/* Ears / side units */}
      <rect x="58" y="96" width="18" height="40" rx="9" fill="url(#metalDark)" />
      <rect x="204" y="96" width="18" height="40" rx="9" fill="url(#metalDark)" />
      <circle cx="67" cy="116" r="4" fill="#00e5ff" filter="url(#eyeGlow)" />
      <circle cx="213" cy="116" r="4" fill="#00e5ff" filter="url(#eyeGlow)" />

      {/* Head */}
      <rect x="72" y="58" width="136" height="116" rx="40" fill="url(#metal)" />
      <rect
        x="72"
        y="58"
        width="136"
        height="116"
        rx="40"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.7"
        strokeWidth="2"
      />
      {/* Head top highlight */}
      <path d="M104 66c20-6 52-6 72 0-22-2-50-2-72 0z" fill="#ffffff" opacity="0.6" />

      {/* Visor */}
      <rect x="90" y="84" width="100" height="64" rx="30" fill="url(#visor)" />
      <rect
        x="90"
        y="84"
        width="100"
        height="64"
        rx="30"
        fill="none"
        stroke="#00e5ff"
        strokeOpacity="0.35"
        strokeWidth="2"
      />

      {/* Eyes */}
      <g filter="url(#eyeGlow)">
        <circle cx="120" cy="116" r="12" fill="url(#eye)" />
        <circle cx="160" cy="116" r="12" fill="url(#eye)" />
      </g>
      <circle cx="116" cy="112" r="3.5" fill="#ffffff" />
      <circle cx="156" cy="112" r="3.5" fill="#ffffff" />

      {/* Friendly smile */}
      <path
        d="M126 134c5 5 23 5 28 0"
        fill="none"
        stroke="#00e5ff"
        strokeOpacity="0.7"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Cheek lights */}
      <circle cx="100" cy="130" r="3" fill="#00e5ff" opacity="0.65" />
      <circle cx="180" cy="130" r="3" fill="#00e5ff" opacity="0.65" />
    </svg>
  )
}

export default RobotMascot
