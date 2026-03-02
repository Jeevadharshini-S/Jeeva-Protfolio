import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNavClick = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-sm font-medium text-slate-100 shadow-lg shadow-indigo-500/20 ring-1 ring-white/10 backdrop-blur-xl"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-xs text-white shadow-md">
            <Sparkles className="h-3 w-3" />
          </span>
          <span className="tracking-tight">
            Jeevadharshini · AI &amp; Data Science
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-100/80 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="relative rounded-full px-3 py-1 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-slate-900/80 p-2 text-slate-100 shadow-lg shadow-slate-900/50 ring-1 ring-white/15 backdrop-blur-xl md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="space-y-1 rounded-2xl bg-slate-900/85 p-3 text-sm text-slate-100 shadow-xl ring-1 ring-white/10 backdrop-blur-2xl">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left hover:bg-white/5"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

