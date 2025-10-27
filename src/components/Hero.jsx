import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Mail, FolderOpen } from 'lucide-react'

const subtitles = [
  'Product Owner',
  'Agile Leader',
  'CRM Architect',
  'Innovation Driver',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const prefersReduced = useMemo(
    () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )
  const intervalRef = useRef(null)

  useEffect(() => {
    if (prefersReduced) return
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % subtitles.length)
    }, 2500)
    return () => clearInterval(intervalRef.current)
  }, [prefersReduced])

  return (
    <section id="home" className="relative isolate">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Rabat, Morocco</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ismail Abdellaoui</span>
            </h1>
            <div className="mt-2 h-7 sm:h-8 overflow-hidden" aria-live="polite">
              {subtitles.map((s, i) => (
                <div
                  key={s}
                  className={`text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 transition-opacity duration-300 ${i === index ? 'opacity-100' : 'opacity-0'} ${i === index ? 'block' : 'hidden'}`}
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-slate-700 dark:text-slate-300">
              Transforming ideas into impactful products across HR Tech, HealthTech, Automotive, and E-commerce.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                <FolderOpen className="h-4 w-4" /> View Projects
              </a>
              <a
                href="mailto:hi.ismail.po@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-6 shadow-sm">
              <ul className="grid grid-cols-2 gap-4 text-sm">
                <li className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">40%</p>
                  <p className="text-slate-600 dark:text-slate-400">Efficiency increase</p>
                </li>
                <li className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4+</p>
                  <p className="text-slate-600 dark:text-slate-400">Industries</p>
                </li>
                <li className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">75%</p>
                  <p className="text-slate-600 dark:text-slate-400">Revenue growth</p>
                </li>
                <li className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-4">
                  <p className="text-sm font-semibold text-green-500">PSPO II</p>
                  <p className="text-slate-600 dark:text-slate-400">Certified</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
