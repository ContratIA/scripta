export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-12 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="font-semibold text-white text-sm">Scripta</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              AI-powered SEO and content for SaaS companies that need to grow without hiring a team.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {["How it works", "Pricing", "Results", "FAQ"].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {["About", "Blog", "Privacy", "Terms"].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Scripta. All rights reserved.</p>
          <a
            href="#pricing"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Start growing today →
          </a>
        </div>
      </div>
    </footer>
  )
}
