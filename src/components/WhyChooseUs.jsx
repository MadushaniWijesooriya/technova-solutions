import { Sparkles, ShieldCheck, Users, Cpu } from 'lucide-react'

const features = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Innovation First',
    description: 'We prioritize creative, forward-thinking solutions that give your business a competitive edge.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Quality & Reliability',
    description: 'Every product is built with rigorous standards for performance, security, and long-term stability.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Client-Centered Approach',
    description: 'Your goals drive our process. We collaborate closely to deliver outcomes that matter to you.',
  },
  {
    number: '04',
    icon: Cpu,
    title: 'Modern Technologies',
    description: 'We leverage proven, up-to-date tech stacks to build scalable and maintainable systems.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Why TechNova</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose TechNova?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We combine technical excellence with a deep understanding of business needs to deliver solutions that create lasting value.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div key={feature.number} className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <span className="text-2xl font-extrabold text-indigo-100 group-hover:text-indigo-200 transition-colors">
                      {feature.number}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={18} className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl bg-slate-900 p-6 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs text-slate-500 font-mono">dashboard.tsx</span>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-slate-700 rounded w-3/4" />
                <div className="h-3 bg-slate-700 rounded w-1/2" />
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="h-20 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-indigo-500/40" />
                  </div>
                  <div className="h-20 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-purple-500/40" />
                  </div>
                  <div className="h-20 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-emerald-500/40" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-slate-700 rounded w-full" />
                  <div className="h-2 bg-slate-700 rounded w-5/6" />
                  <div className="h-2 bg-slate-700 rounded w-4/6" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
