import { motion } from 'framer-motion'
import { AlertTriangle, Timer, FolderX, BellOff } from 'lucide-react'

const cards = [
  {
    icon: Timer,
    title: 'Slow manual quoting',
    desc: 'Hours lost building quotes and hunting for parts and prices.'
  },
  {
    icon: FolderX,
    title: 'Spreadsheet chaos',
    desc: 'Multiple versions, broken formulas and no single source of truth.'
  },
  {
    icon: BellOff,
    title: 'Missed leads',
    desc: 'Website visitors bounce and quotes go cold without follow-ups.'
  },
  {
    icon: AlertTriangle,
    title: 'No visibility',
    desc: 'Hard to see pipeline, conversion and profit in real time.'
  }
]

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The problem</h2>
          <p className="mt-3 text-slate-600">Why quoting stalls growth for HVAC businesses.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <c.icon className="w-6 h-6 text-sky-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
