export default function Testimonials() {
  const items = [
    {
      quote: 'They spun up a team in days that now handles 70% of our support volume. Quality is consistently high.',
      author: 'COO, SaaS Company'
    },
    {
      quote: 'Our sales ops finally flows. Playbooks, QA, and reporting all handled. Huge lift for our AEs.',
      author: 'VP Sales, B2B Marketplace'
    },
    {
      quote: 'We started with one VA. Within 3 months we had 8 handling back office and data cleanup with great results.',
      author: 'Founder, E-commerce Brand'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Loved by fast-growing teams</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">What our partners say about working with our virtual assistant teams.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-slate-800">“{t.quote}”</p>
              <p className="mt-4 text-sm font-medium text-slate-600">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
