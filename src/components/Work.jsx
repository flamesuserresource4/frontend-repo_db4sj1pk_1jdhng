function Work() {
  const projects = [
    {
      title: 'Creative Dev Playground',
      tags: ['WebGL', 'Three.js', 'Shaders'],
      desc: 'An exploratory playground for interactive visuals and generative art.',
      link: '#'
    },
    {
      title: 'Design System Kit',
      tags: ['Figma', 'React', 'Tokens'],
      desc: 'A scalable system with components, tokens, and motion patterns.',
      link: '#'
    },
    {
      title: 'SaaS Dashboard',
      tags: ['UX', 'API', 'Analytics'],
      desc: 'Human-friendly data visualization with polished micro-interactions.',
      link: '#'
    }
  ]

  return (
    <section id="work" className="relative bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-slate-900">Selected Work</h2>
          <p className="text-slate-600 mt-2">Projects across product design and engineering.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">{p.title}</h3>
                <span className="text-xs text-slate-500">Case Study</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
