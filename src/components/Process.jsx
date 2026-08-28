const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the client\'s requirements, goals, and constraints.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define project goals, features, scope, and technology choices.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create UI/UX designs and solid project architecture.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build, integrate, and thoroughly test the solution.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy, monitor, and continuously improve the product.',
  },
]

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Our Approach</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 text-slate-600">
            A clear, collaborative process that keeps projects on track from idea to launch.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative text-center lg:text-left">
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg shadow-lg shadow-indigo-200 mb-4 mx-auto lg:mx-0">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-slate-200 mx-auto mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
