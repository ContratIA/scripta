export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-green-400 text-2xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">You are in.</h1>
        <p className="text-zinc-400 leading-relaxed mb-8">
          Welcome to Scripta. Check your inbox — your onboarding brief arrives in the next 5 minutes. First content drops within 14 days.
        </p>
        <a href="/" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">
          ← Back to Scripta
        </a>
      </div>
    </div>
  )
}
