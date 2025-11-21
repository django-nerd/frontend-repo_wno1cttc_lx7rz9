import { motion } from 'framer-motion'
import { Flashlight, Puzzle, Globe, MailCheck, LineChart, Contact } from 'lucide-react'

const features = [
  { icon: Flashlight, title: 'Instant Quotes', desc: 'Create and send branded quotes in minutes with your pricing.' },
  { icon: Puzzle, title: 'Smart Equipment Selection', desc: 'Automatic recommendations from your catalogue.' },
  { icon: Globe, title: 'Branded Website Widget', desc: 'Capture details and produce instant quotes on your site.' },
  { icon: MailCheck, title: 'Automated Follow-Ups', desc: 'Email & SMS sequences to convert more leads.' },
  { icon: LineChart, title: 'Real-Time Analytics', desc: 'See pipeline value, conversion and profit instantly.' },
  { icon: Contact, title: 'Customer Records', desc: 'All quotes and contacts in one place.' },
]

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600">All the tools to quote faster and win more jobs.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all will-change-transform hover:-translate-y-0.5"
            >
              <f.icon className="w-6 h-6 text-sky-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
