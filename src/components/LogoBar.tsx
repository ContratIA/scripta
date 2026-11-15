"use client"
import { motion } from "framer-motion"

const logos = [
  { name: "Webflow",     svg: <path d="M21.8 6.4h-5.7L13 15.2l-2-8.8H7.5L5.3 15.2 2.2 6.4H0l4.2 11.2h3.5l2-8.5 2 8.5h3.6L19.5 6.4z M21.8 6.4" fill="currentColor"/> },
  { name: "WordPress",  svg: <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
  { name: "HubSpot",    svg: <path d="M15.9 8.2a3.7 3.7 0 10-7.4 0 3.7 3.7 0 007.4 0zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z" fill="currentColor"/> },
  { name: "Contentful", svg: <path d="M4.2 12a7.8 7.8 0 017.8-7.8V0A12 12 0 000 12h4.2zM12 19.8A7.8 7.8 0 014.2 12H0A12 12 0 0012 24v-4.2z" fill="currentColor"/> },
  { name: "Ghost",      svg: <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" fill="currentColor"/> },
  { name: "Intercom",   svg: <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/> },
  { name: "Notion",     svg: <path d="M4 4h16v16H4z M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/> },
  { name: "Linear",     svg: <path d="M4 20L20 4M4 4l16 16M4 12h16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/> },
]

// Duplicate for seamless loop
const allLogos = [...logos, ...logos]

export default function LogoBar() {
  return (
    <section className="relative py-14 overflow-hidden bg-[#000000]" aria-label="Trusted platforms">
      {/* Fades on sides */}
      <div aria-hidden className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
      <div aria-hidden className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-[11px] text-white/20 uppercase tracking-[0.22em] mb-8"
      >
        Publishes directly to
      </motion.p>

      <div className="flex gap-0" style={{ width: "max-content" }}>
        <div className="logo-scroll flex items-center gap-14 px-7">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 text-white/20 hover:text-white/45 transition-colors duration-300 select-none"
              aria-label={logo.name}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" className="flex-shrink-0">
                {logo.svg}
              </svg>
              <span className="text-[13px] font-medium tracking-tight whitespace-nowrap">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
