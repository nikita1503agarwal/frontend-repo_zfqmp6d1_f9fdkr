import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Tell us about your needs</h2>
            <p className="mt-3 text-slate-600">We’ll reach out fast with a plan, sample profiles, and pricing tailored to you.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block" />48-hour candidate shortlist</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block" />Timezone-aligned coverage</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block" />Month-to-month flexibility</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Company</label>
              <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Team size</label>
                <select name="team_size" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                  <option value="1">1</option>
                  <option value="2-3">2–3</option>
                  <option value="4-7">4–7</option>
                  <option value="8+">8+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">What do you need help with?</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <button disabled={status==='loading'} className="w-full inline-flex items-center justify-center rounded-md bg-blue-600 text-white font-medium px-6 py-3 hover:bg-blue-700 disabled:opacity-50">
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Thanks! We\'ll be in touch' : 'Send message'}
            </button>
            {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
