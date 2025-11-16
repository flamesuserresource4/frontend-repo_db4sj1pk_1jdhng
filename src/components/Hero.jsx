import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance & collabs
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
            Designer + Software Engineer
          </h1>
          <p className="mt-4 text-slate-300 sm:text-lg">
            I craft delightful interfaces and robust systems. Playful, modern, and human-centered.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-slate-100 transition">
              View Work
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
