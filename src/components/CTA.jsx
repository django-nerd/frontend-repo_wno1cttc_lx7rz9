import { motion } from 'framer-motion'
import { brand } from './Brand'

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.sky} 40%, ${brand.navy})`, boxShadow: `0 20px 60px -20px ${brand.blue}77` }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold">Quote faster. Win more.</h3>
          <p className="mt-3 text-white/90">Start your free demo today or book a call to see how it fits your business.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg">Start Free Demo</motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#" className="px-6 py-3 rounded-xl bg-white/10 border border-white/30 text-white font-semibold">Book a Call</motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
