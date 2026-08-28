import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Have an Idea? Let&apos;s Build It Together.
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Tell us about your project and discover how technology can help your business grow.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/40"
        >
          Start Your Project
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
