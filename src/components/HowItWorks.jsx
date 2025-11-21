import { motion } from 'framer-motion'
import { MousePointerClick, Cog, DollarSign, Send } from 'lucide-react'

const steps = [
  {
    icon: MousePointerClick,
    title: 'Website widget captures details',
    desc: 'Room size, insulation, location and contact captured in seconds.'
  },
  {
    icon: Cog,
    title: 'Automatic sizing and selection',
    desc: 'Cooling loads calculated and matching equipment suggested.'
  },
  {
    icon: DollarSign,
    title: 'Instant pricing with your rates',
    desc: 'Use your labour, margins and catalogue to price instantly.'
  },
  {
    icon: Send,
    title: 'Send quote + automate follow-ups',
    desc: 'Email/SMS sequences nurture leads until they convert.'
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">From website lead to signed quote in minutes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-lg border border-slate-200"
            >
              <s.icon className="w-6 h-6 text-sky-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
