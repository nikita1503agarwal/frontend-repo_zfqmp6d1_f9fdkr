export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(800px_400px_at_80%_-10%,rgba(56,189,248,0.35),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Small Teams. Big Impact.
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Spin up a trained virtual assistant team that feels in-house. We recruit, manage, and scale while you focus on growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition">
                Build Your Team
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md px-6 py-3 border border-slate-300 text-slate-800 font-medium hover:bg-white/60 transition">
                Talk to an Expert
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div>
                <span className="font-semibold text-slate-900">48h</span> to first candidates
              </div>
              <div>
                <span className="font-semibold text-slate-900">24/7</span> coverage available
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-white shadow-sm p-4 grid grid-cols-2 gap-4">
              {["Support","Back Office","Sales","Data","CX","Ops"].map((label, i) => (
                <div key={i} className="rounded-lg border border-slate-200 p-4">
                  <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-blue-600 to-sky-400 mb-3" />
                  <p className="font-medium text-slate-800">{label} VA</p>
                  <p className="text-sm text-slate-500">Pre-vetted for your industry</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
