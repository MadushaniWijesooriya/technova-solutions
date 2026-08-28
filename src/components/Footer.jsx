import { Linkedin, Github, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block">
              <span className="text-xl font-bold text-white">TechNova</span>
              <span className="block text-xs font-medium tracking-widest text-indigo-400 uppercase">
                Solutions
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Building digital solutions for a smarter future. Web, software, mobile, and cloud expertise.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>© 2026 TechNova Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
