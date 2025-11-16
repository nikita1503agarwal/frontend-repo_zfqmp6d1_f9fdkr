import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-600 to-sky-400" />
            <span className="font-semibold text-slate-900">ClearAssist BPO</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Get Started
            </a>
          </nav>

          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-slate-700 py-2" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex w-full justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
