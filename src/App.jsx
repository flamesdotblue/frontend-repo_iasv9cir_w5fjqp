import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-3 py-1 rounded">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>
        <Stats />
        <Projects />
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
