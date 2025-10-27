import { ExternalLink, Folder, Star } from 'lucide-react'

const items = [
  {
    title: 'HR & Recruitment Platform',
    desc: 'ATS + CRM with AI screening, interview scheduling, and dashboards.',
    tags: ['HRTech', 'AI', 'Dashboards'],
  },
  {
    title: 'Medical Clinic Management',
    desc: 'EMR, appointments, prescriptions, billing, and patient portal.',
    tags: ['HealthTech', 'EMR', 'Portal'],
  },
  {
    title: 'Automotive Routing Suite',
    desc: 'Route optimization, fleet telemetry, and real-time alerts.',
    tags: ['Automotive', 'Optimization', 'IoT'],
  },
  {
    title: 'E-commerce Growth Toolkit',
    desc: 'Personalized recommendations, A/B testing, and funnels.',
    tags: ['E-commerce', 'Experimentation', 'Analytics'],
  },
  {
    title: 'Support Ops Console',
    desc: 'Omnichannel inbox with SLAs and workflow automation.',
    tags: ['Service', 'Automation', 'SLA'],
  },
  {
    title: 'Partner Portal',
    desc: 'Onboarding flows, contracts, and revenue share reporting.',
    tags: ['B2B', 'Onboarding', 'Billing'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Selected Projects</h2>
            <p className="mt-2 text-slate-700 dark:text-slate-300 max-w-2xl">
              Placeholders showcasing scope and outcomes. Full case studies available on request.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[linear-gradient(90deg,#2563eb,#7c3aed)] px-3 py-2 text-sm font-medium text-white hover:opacity-95"
          >
            <Star className="h-4 w-4" /> Work with me
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-5 shadow-sm"
            >
              {/* linear shine on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-x-16 -top-1/2 h-[200%] rotate-12 bg-[linear-gradient(90deg,transparent,rgba(124,58,237,0.15),transparent)]" />
              </div>

              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <Folder className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 px-2 py-1 text-xs text-slate-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-sm">
                <a href="#" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline">
                  View case <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <span className="text-slate-500">Outcome-ready</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
