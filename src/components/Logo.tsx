"use client"

interface LogoProps {
  size?: number
  showWordmark?: boolean
  className?: string
}

export default function Logo({ size = 28, showWordmark = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#64d2ff" />
            <stop offset="100%" stopColor="#0a84ff" />
          </linearGradient>
          <linearGradient id="logo-glow" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2997ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0a84ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background square with rounded corners */}
        <rect x="1" y="1" width="30" height="30" rx="8" fill="url(#logo-glow)" />
        <rect x="1" y="1" width="30" height="30" rx="8" stroke="url(#logo-grad)" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* S letterform — geometric, precise */}
        <path
          d="M20.5 10.5C20.5 10.5 19 8.5 16 8.5C12.5 8.5 10.5 10.5 10.5 12.5C10.5 14.5 12 15.5 14.5 16C17 16.5 21.5 17 21.5 20C21.5 22.5 19.5 23.5 16 23.5C12.5 23.5 11 21.5 11 21.5"
          stroke="url(#logo-grad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Top horizontal accent bar */}
        <path
          d="M10 8.5H22"
          stroke="url(#logo-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Bottom horizontal accent bar */}
        <path
          d="M10 23.5H22"
          stroke="url(#logo-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Dot accent — top right, suggests SEO/graph */}
        <circle cx="25" cy="7" r="2.5" fill="#64d2ff" opacity="0.9" />
        <circle cx="25" cy="7" r="4" fill="#2997ff" opacity="0.15" />
      </svg>

      {showWordmark && (
        <span className="font-semibold text-white text-[13px] tracking-[-0.01em]">
          ScriptaSEO
        </span>
      )}
    </span>
  )
}
