import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const step = now => {
              const progress = Math.min(1, (now - start) / duration)
              setValue(Math.round(progress * target))
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, value }
}

export default function Stats() {
  const eff = useCountUp(40)
  const ind = useCountUp(4)
  const rev = useCountUp(75)

  return (
    <section aria-labelledby="stats-heading" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="stats-heading" className="sr-only">Key stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div ref={eff.ref} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">{eff.value}%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Efficiency increase</p>
          </div>
          <div ref={ind.ref} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">{ind.value}+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Industries</p>
          </div>
          <div ref={rev.ref} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">{rev.value}%</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Revenue growth</p>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <p className="text-3xl font-bold text-green-500">✓</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">PSPO II Certified</p>
          </div>
        </div>
      </div>
    </section>
  )
}
