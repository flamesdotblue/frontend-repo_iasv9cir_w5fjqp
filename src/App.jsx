import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-1 rounded">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Stats />
        {/* Anchors for smooth nav */}
        <div id="about" className="sr-only" aria-hidden="true" />
        <div id="experience" className="sr-only" aria-hidden="true" />
        <section id="projects" className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-2xl">A selection across HR Tech, HealthTech, Automotive, and E-commerce. Focused on measurable outcomes and user value.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold">HR & Recruitment Platform</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">ATS + CRM with AI-powered screening, interview scheduling, and dashboards. Impact: +40% recruiter efficiency.</p>
                <div className="mt-3 text-xs text-slate-500">Role: Product Owner • Tags: Agile, AI/ML, Research</div>
              </article>
              <article className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-sm transition-shadow">
                <h3 className="font-semibold">Medical Clinic Management</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">EMR, appointments, prescriptions, billing, and patient portal. Impact: streamlined operations and experience.</p>
                <div className="mt-3 text-xs text-slate-500">Role: Product Owner • Tags: Security, Compliance, UX</div>
              </article>
            </div>
          </div>
        </section>
        <div id="skills" className="sr-only" aria-hidden="true" />
        <ContactSection />
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ismail Abdellaoui. Built with ❤️.</p>
          <nav className="flex items-center gap-4">
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            <a href="https://linkedin.com/in/ismail-po" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
