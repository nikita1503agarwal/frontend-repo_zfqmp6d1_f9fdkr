export default function CTA() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Build your small-but-mighty VA team</h3>
            <p className="mt-2 text-white/90">Share a few details and we’ll match you with candidates in 48 hours.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-white/90 transition">
            Get Matched
          </a>
        </div>
      </div>
    </section>
  )
}
