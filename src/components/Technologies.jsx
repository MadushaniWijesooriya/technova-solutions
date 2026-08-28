const categories = [
  {
    name: 'Frontend',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'PHP'],
  },
  {
    name: 'Database',
    items: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'],
  },
  {
    name: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Figma'],
  },
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Our Stack</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technologies We Work With
          </h2>
          <p className="mt-4 text-slate-600">
            We use modern, reliable technologies to build robust and scalable digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
