export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$9/hr',
      features: ['1 dedicated VA', '40–80 hrs/mo', 'Timezone aligned', 'Email + chat coverage'],
      cta: 'Start Starter',
    },
    {
      name: 'Growth',
      price: '$8/hr',
      features: ['2–3 VAs', '160+ hrs/mo', 'Dedicated team lead', 'SLA + QA reviews'],
      cta: 'Start Growth',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      features: ['4+ seats', '24/7 coverage', 'Process design support', 'Advanced reporting'],
      cta: 'Talk to Sales',
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple, predictable pricing</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Start small, grow as you need. No hidden fees, just great people doing great work.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlighted ? 'border-blue-600 shadow-lg' : 'border-slate-200'} bg-white p-6 flex flex-col`}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                <p className="mt-3 text-3xl font-extrabold text-slate-900">{t.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className={`mt-6 inline-flex items-center justify-center rounded-md px-5 py-3 font-medium transition ${t.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-300 text-slate-800 hover:bg-slate-50'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
