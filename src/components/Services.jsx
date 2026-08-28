import {
  Globe,
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Database,
  MessageSquare,
  RefreshCw,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, scalable and high-performance websites and web applications.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions designed around your business requirements.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Modern Android and iOS applications with excellent user experiences.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered interfaces that combine usability, accessibility and visual design.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud-based solutions for modern businesses.',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Secure and efficient database architecture and management.',
  },
  {
    icon: MessageSquare,
    title: 'IT Consulting',
    description: 'Technology consulting to help businesses choose the right digital strategies.',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    description: 'Modernize business processes through innovative digital technologies.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our IT Services
          </h2>
          <p className="mt-4 text-slate-600">
            End-to-end technology services designed to help your business innovate, scale, and stay ahead.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center transition-colors mb-5">
                <service.icon size={22} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
