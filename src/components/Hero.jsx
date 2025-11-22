import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Free to use • No sign-up required
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05]">
            Build complete websites with AI — instantly
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-prose">
            Describe your idea and watch FlamesBlue generate a polished, responsive website you can copy or export in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#generate" className="px-5 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/20 text-center">Try it now</a>
            <a href="#functions" className="px-5 py-3 rounded-lg border border-white/15 hover:border-white/25 text-white/90 transition text-center">See what it can do</a>
          </div>
        </div>
        <div className="pointer-events-none hidden md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
    </section>
  )
}

export default Hero
