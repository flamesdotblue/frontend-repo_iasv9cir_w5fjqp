import { Mail, Phone, Linkedin, MapPin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">Let’s Build Something Amazing Together</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Open to Product Owner opportunities. Usually responds within 24 hours.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:hi.ismail.po@gmail.com" className="flex items-center gap-3 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="h-4 w-4" /> hi.ismail.po@gmail.com
              </a>
              <a href="tel:+212776604080" className="flex items-center gap-3 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                <Phone className="h-4 w-4" /> +212 776 604 080
              </a>
              <a href="https://linkedin.com/in/ismail-po" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="h-4 w-4" /> linkedin.com/in/ismail-po
              </a>
              <p className="flex items-center gap-3 text-slate-700 dark:text-slate-300"><MapPin className="h-4 w-4" /> Rabat, Morocco</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hi.ismail.po@gmail.com?subject=Schedule%20a%20call%20with%20Ismail%20Abdellaoui"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
              >
                Schedule a Call
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Why work with Ismail?</h3>
            <ul className="mt-4 list-disc pl-6 text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <li>User-centric, data-driven decisions</li>
              <li>Proven impact across HR Tech, HealthTech, Automotive, and E-commerce</li>
              <li>Agile Product Owner with PSPO II certification</li>
              <li>Bridges technical and commercial teams seamlessly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
