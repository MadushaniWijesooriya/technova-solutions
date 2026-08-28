import { Target, Eye, Lightbulb, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'Mission',
    text: 'Deliver reliable, scalable digital solutions that solve real business challenges and drive measurable growth.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'To be a trusted technology partner for organizations seeking innovation and long-term digital success.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    text: 'We continuously explore modern tools and practices to build products that are future-ready and user-focused.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-4/3 rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
                <div className="absolute bottom-16 right-12 w-24 h-24 border border-indigo-300/40 rounded-lg rotate-12" />
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl" />
              </div>
              <div className="relative">
                <p className="text-indigo-300 text-sm font-semibold tracking-wider uppercase">About TechNova</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Technology with purpose</h3>
              </div>
              <div className="relative grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-xs text-slate-300">Projects</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-2xl font-bold text-white">15+</p>
                  <p className="text-xs text-slate-300">Experts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A technology-driven partner for modern businesses
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              TechNova Solutions is a technology-driven company focused on building reliable, scalable, and user-friendly digital solutions. We combine modern technologies, creative thinking, and business understanding to help organizations solve real-world challenges.
            </p>

            <div className="mt-8 space-y-5">
              {pillars.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center">
                    <item.icon size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
