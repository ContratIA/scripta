import Logo from "./Logo"

export default function Footer() {
  const nav = [
    {
      title: "Product",
      links: [
        ["How it works", "#how"],
        ["Pricing", "#pricing"],
        ["Results", "#results"],
        ["FAQ", "#faq"],
      ],
    },
    {
      title: "Company",
      links: [
        ["About", "/about"],
        ["Blog", "/blog"],
        ["Privacy", "/privacy"],
        ["Terms", "/terms"],
      ],
    },
    {
      title: "Contact",
      links: [
        ["hello@scriptaseo.com", "mailto:hello@scriptaseo.com"],
        ["Free SEO audit", "/audit"],
      ],
    },
  ]

  return (
    <footer className="bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-14 border-b border-white/[0.05]">

          {/* Brand */}
          <div className="max-w-[220px]">
            <a href="/" className="inline-block mb-4" aria-label="ScriptaSEO home">
              <Logo size={26} showWordmark={true} className="opacity-90 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-white/25 text-[13px] leading-relaxed">
              AI-powered SEO for SaaS companies that need to grow without hiring a team.
            </p>
          </div>

          {/* Nav groups */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {nav.map((group) => (
              <div key={group.title}>
                <h4 className="text-white/50 text-[11px] font-semibold mb-4 uppercase tracking-widest">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-white/25 hover:text-white/65 text-[13px] transition-colors duration-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/18 text-[12px]">© 2026 ScriptaSEO. All rights reserved.</p>
          <a
            href="#pricing"
            className="text-[13px] px-5 py-2.5 rounded-full font-semibold text-white bg-[#0a84ff]/80 hover:bg-[#0a84ff] border border-[#2997ff]/30 transition-all duration-200 hover:shadow-[0_0_20px_rgba(10,132,255,0.35)]"
          >
            Start growing today →
          </a>
        </div>
      </div>
    </footer>
  )
}
