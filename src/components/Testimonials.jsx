import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'TechNova helped us transform our idea into a professional digital product. The team was responsive and focused on quality throughout.',
    name: 'Sample Client',
    role: 'Demo Testimonial',
  },
  {
    quote: 'Working with TechNova was smooth and professional. They delivered a clean, scalable solution that matched our business needs.',
    name: 'Sample Client',
    role: 'Demo Testimonial',
  },
  {
    quote: 'From discovery to launch, the process was clear and collaborative. Highly recommend for software and web projects.',
    name: 'Sample Client',
    role: 'Demo Testimonial',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Clients Say
          </h2>
          <p className="mt-4 text-slate-600">
            Sample feedback illustrating the experience of working with our team. These are demo testimonials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote size={28} className="text-indigo-200 mb-4" />
              <p className="text-slate-700 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
