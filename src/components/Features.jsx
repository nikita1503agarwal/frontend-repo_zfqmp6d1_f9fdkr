export default function Features() {
  const items = [
    {
      title: 'Recruiting handled for you',
      desc: 'We source, interview, and background-check top talent across the Philippines and LATAM.',
    },
    {
      title: 'Dedicated team lead',
      desc: 'Daily oversight, QA, and coaching so performance stays high without your micro-management.',
    },
    {
      title: 'Timezone and tools aligned',
      desc: 'Your VAs work in your hours with your stack—Slack, HubSpot, Zendesk, Notion, and more.',
    },
    {
      title: 'Flexible scaling',
      desc: 'Start with 1–3 seats, expand to 10+ as your needs grow. Month-to-month flexibility.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Virtual Assistant Teams that Scale</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Plug-and-play support across customer experience, sales ops, data entry, and back-office workflows.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-slate-50">
              <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-blue-600 to-sky-400 mb-4" />
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
