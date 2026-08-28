import { ArrowRight, Code2, Layers, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Building Digital Solutions for a Smarter Future
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Transforming Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Powerful Digital Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              We design and develop innovative software, websites, mobile applications, and digital solutions that help businesses grow and succeed.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative opacity-0 animate-slide-in-right animation-delay-200">
            <div className="relative bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-3 flex-1 h-6 rounded bg-slate-800" />
              </div>
              {/* Code-like content */}
              <div className="font-mono text-sm space-y-2 text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">solution</span> = {'{'}</p>
                <p className="pl-4"><span className="text-emerald-400">web</span>: <span className="text-amber-300">&apos;scalable&apos;</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">mobile</span>: <span className="text-amber-300">&apos;native-feel&apos;</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">cloud</span>: <span className="text-amber-300">&apos;resilient&apos;</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">impact</span>: <span className="text-amber-300">&apos;measurable&apos;</span></p>
                <p>{'}'}</p>
                <p className="mt-3 text-slate-500">// Building the future, one line at a time</p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex items-center gap-3 animate-fade-in-up animation-delay-400">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <Code2 size={20} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Clean Code</p>
                <p className="text-xs text-slate-500">Maintainable & scalable</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-2 sm:-right-6 bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex items-center gap-3 animate-fade-in-up animation-delay-500">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Layers size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Modern Stack</p>
                <p className="text-xs text-slate-500">Latest technologies</p>
              </div>
            </div>
            <div className="absolute bottom-20 -right-4 sm:-right-10 bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-center gap-2 animate-fade-in-up animation-delay-300">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Smartphone size={16} className="text-emerald-600" />
              </div>
              <p className="text-xs font-semibold text-slate-900">Mobile First</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
