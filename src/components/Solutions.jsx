import {
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Landmark,
  Building2,
  Store,
  Hotel,
  Truck,
} from 'lucide-react'

const industries = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online stores, marketplaces, and seamless shopping experiences.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Learning platforms, student systems, and digital classrooms.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Patient management, appointments, and health data solutions.',
  },
  {
    icon: Landmark,
    title: 'Finance',
    description: 'Secure fintech tools, dashboards, and transaction systems.',
  },
  {
    icon: Building2,
    title: 'Construction',
    description: 'Project tracking, resource planning, and site management.',
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'Inventory, POS integration, and customer engagement tools.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Booking systems, guest management, and service platforms.',
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Fleet tracking, route optimization, and supply chain tools.',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Industries</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solutions Built For Your Business
          </h2>
          <p className="mt-4 text-slate-600">
            We deliver tailored digital solutions across diverse industries, understanding the unique challenges of each sector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center mb-4 transition-colors">
                <item.icon size={20} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
