import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="order-2 sm:order-1">
          © {new Date().getFullYear()} Jeevadharshini. All rights reserved.
        </p>
        <div className="order-1 flex items-center gap-3 sm:order-2">
          <a
            href="mailto:jeevasekar1005@gmail.com"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-500/80 hover:text-white hover:ring-indigo-400/60"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Jeevadharshini-S"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-500/80 hover:text-white hover:ring-indigo-400/60"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/jeevadharshini-s-740153299"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-indigo-500/80 hover:text-white hover:ring-indigo-400/60"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

