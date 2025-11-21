import { motion } from 'framer-motion'
import { brand } from './Brand'

export default function Analytics() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Analytics that drive growth</h2>
            <p className="mt-4 text-slate-600">Track pipeline value, conversion rates and profit in real time. See which channels perform, where quotes stall, and which equipment wins.</p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full" style={{background: brand.blue}}></span> Live pipeline and conversion</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full" style={{background: brand.sky}}></span> Quote stage tracking</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full" style={{background: brand.navy}}></span> Profit and margin by job</li>
            </ul>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-5 shadow-2xl border border-slate-200"
            >
              {/* Simple animated chart mock */}
              <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
                  className="origin-left h-2 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${brand.sky}, ${brand.blue})` }}
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                  className="mt-6 w-8 rounded-md"
                  style={{ background: brand.sky }}
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
                  className="mt-2 w-8 rounded-md"
                  style={{ background: brand.blue }}
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '45%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
                  className="mt-2 w-8 rounded-md"
                  style={{ background: brand.navy }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
