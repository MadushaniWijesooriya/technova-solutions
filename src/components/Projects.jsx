const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product management, cart, and secure checkout.',
    tech: ['React', 'Node.js', 'MySQL'],
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Employee Management System',
    description: 'Centralized HR platform for attendance, payroll, and team collaboration.',
    tech: ['Java', 'MySQL'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Construction Management System',
    description: 'Project planning, resource tracking, and site progress monitoring tools.',
    tech: ['React', 'Node.js', 'MySQL'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Healthcare Management System',
    description: 'Patient records, appointment scheduling, and clinical workflow support.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Business Analytics Dashboard',
    description: 'Interactive dashboards with real-time KPIs and data visualization.',
    tech: ['React', 'Tailwind CSS'],
    color: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'Restaurant Website',
    description: 'Modern restaurant site with menu, reservations, and online ordering.',
    tech: ['React', 'Tailwind CSS'],
    color: 'from-rose-500 to-pink-600',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600">
            A selection of solutions we have designed and built for businesses across industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300"
            >
              {/* Mockup header */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-24 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex gap-1">
                  <div className="h-1.5 flex-1 rounded-full bg-white/40" />
                  <div className="h-1.5 w-8 rounded-full bg-white/60" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
