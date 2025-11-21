import { motion } from 'framer-motion'
import { brand } from './Brand'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Quotestack" className="h-8 w-auto" />
          <span className="font-semibold text-slate-900">Quotestack</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100">Login</a>
          <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#" className="px-4 py-2 rounded-lg text-white" style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.sky})` }}>Start Free Demo</motion.a>
        </div>
      </div>
    </header>
  )
}
