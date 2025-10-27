import { useEffect, useState } from 'react'
import { Sun, Moon, Download, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Initialize theme: localStorage > prefers-color-scheme > dark
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" aria-label="Ismail Abdellaoui home" className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            <span className="text-blue-500">Ismail</span> Abdellaoui
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://linkedin.com/in/ismail-po"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:hi.ismail.po@gmail.com"
              aria-label="Email Ismail"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
