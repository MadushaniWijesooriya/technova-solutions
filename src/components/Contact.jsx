import { useState } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', company: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="mt-4 text-slate-600">
            Share a few details and we&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <p className="text-sm text-slate-600 mt-0.5">hello@technova.example</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <p className="text-sm text-slate-600 mt-0.5">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Address</p>
                <p className="text-sm text-slate-600 mt-0.5">123 Innovation Drive, Suite 100<br />Tech City, TC 00000</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Business Hours</p>
                <p className="text-sm text-slate-600 mt-0.5">Mon – Fri: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="software">Software Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="database">Database Solutions</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="transformation">Digital Transformation</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full sm:w-auto px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
              {submitted && (
                <p className="mt-4 text-sm text-emerald-600 font-medium">
                  Thank you! This is a demo form — your message was not sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
