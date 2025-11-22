import Hero from './components/Hero'
import FunctionsGrid from './components/FunctionsGrid'
import Generator from './components/Generator'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_500px_at_20%_-10%,rgba(99,102,241,.15),transparent),radial-gradient(700px_500px_at_80%_-20%,rgba(56,189,248,.12),transparent)]" />
      <header className="relative z-20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30" />
            <span className="font-semibold">FlamesBlue AI</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#functions" className="hover:text-white">Functions</a>
            <a href="#generate" className="hover:text-white">Generate</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <FunctionsGrid />
        <Generator />

        <section className="py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Start building with FlamesBlue today</h3>
            <a href="#generate" className="px-5 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition">Generate a site</a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-white/70">
          <span>© {new Date().getFullYear()} FlamesBlue</span>
          <div className="flex items-center gap-4">
            <a href="#functions" className="hover:text-white">Features</a>
            <a href="#generate" className="hover:text-white">Generator</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
