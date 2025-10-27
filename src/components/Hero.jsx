import { useEffect, useMemo, useRef, useState } from 'react'
import { FolderOpen, Mail } from 'lucide-react'
import Spline from '@splinetool/react-spline'

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
      {/* Spline cover background */}
      <div className="relative w-full" style={{ height: '520px' }}>
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft gradient overlay for readability; doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white dark:from-slate-950/50 dark:via-slate-950/30 dark:to-slate-950" />
        {/* angled linear accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 -mt-56 sm:-mt-64 pb-10 sm:pb-14">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Rabat, Morocco</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(100deg,#0ea5e9_0%,#8b5cf6_50%,#ef4444_100%)]">Ismail Abdellaoui</span>
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
              Building clear, outcome-driven products with modern, minimal aesthetics and strong delivery.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#2563eb,#7c3aed)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
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
                <li className="rounded-lg bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/60 dark:to-slate-900/60 p-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">40%</p>
                  <p className="text-slate-600 dark:text-slate-400">Efficiency increase</p>
                </li>
                <li className="rounded-lg bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/60 dark:to-slate-900/60 p-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4+</p>
                  <p className="text-slate-600 dark:text-slate-400">Industries</p>
                </li>
                <li className="rounded-lg bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/60 dark:to-slate-900/60 p-4">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">75%</p>
                  <p className="text-slate-600 dark:text-slate-400">Revenue growth</p>
                </li>
                <li className="rounded-lg bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/60 dark:to-slate-900/60 p-4">
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
