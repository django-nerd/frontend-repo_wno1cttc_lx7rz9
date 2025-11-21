import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const benefits = [
  'Respond faster and win more jobs',
  'Reduce admin with automation',
  'Protect profit with consistent pricing',
  'Never lose a lead with follow-ups',
  'Know what works with real-time analytics'
]

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Outcomes that matter</h2>
            <p className="mt-3 text-slate-600">Built for HVAC contractors who want to quote faster and grow without hiring more admin.</p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-50 to-slate-100" id="video" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
