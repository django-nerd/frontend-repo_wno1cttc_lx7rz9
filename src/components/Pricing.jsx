import { motion } from 'framer-motion'
import { brand } from './Brand'

const plans = [
  { name: 'Starter', price: '$0', period: '/mo', features: ['Instant quotes', 'Basic widget', 'Email support'] },
  { name: 'Pro', price: '$149', period: '/mo', features: ['Smart selection', 'Automation', 'Analytics', 'Priority support'], popular: true },
  { name: 'Scale', price: '$399', period: '/mo', features: ['Advanced automation', 'Custom reports', 'Dedicated success'] },
]

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple pricing</h2>
        <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border p-6 text-left relative ${p.popular ? 'scale-[1.02] shadow-2xl border-transparent' : 'shadow-lg border-slate-200'} bg-white`}
              style={p.popular ? { background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${brand.blue}, ${brand.sky}) border-box`, border: '2px solid transparent' } : {}}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-slate-900 text-white px-2 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{p.price}</span>
                <span className="text-slate-500 mb-1">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700">
                {p.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-6 w-full py-3 rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.sky})` }}>
                Choose {p.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
