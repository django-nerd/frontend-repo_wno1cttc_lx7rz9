import { motion } from 'framer-motion'

const logos = [
  { name: 'Frost', svg: (
    <svg viewBox="0 0 120 24" className="h-6 w-auto opacity-60"><rect x="0" y="6" width="18" height="12" rx="2" fill="currentColor" /><text x="26" y="16" fontSize="12" fill="currentColor">FROST</text></svg>
  )},
  { name: 'Ventrix', svg: (
    <svg viewBox="0 0 140 24" className="h-6 w-auto opacity-60"><circle cx="8" cy="12" r="6" fill="currentColor" /><text x="22" y="16" fontSize="12" fill="currentColor">VENTRIX</text></svg>
  )},
  { name: 'Polar', svg: (
    <svg viewBox="0 0 120 24" className="h-6 w-auto opacity-60"><polygon points="6,3 12,12 6,21 0,12" fill="currentColor" /><text x="20" y="16" fontSize="12" fill="currentColor">POLAR</text></svg>
  )},
  { name: 'Aero', svg: (
    <svg viewBox="0 0 120 24" className="h-6 w-auto opacity-60"><rect x="0" y="10" width="14" height="4" fill="currentColor" /><text x="20" y="16" fontSize="12" fill="currentColor">AERO</text></svg>
  )},
  { name: 'Nimbus', svg: (
    <svg viewBox="0 0 140 24" className="h-6 w-auto opacity-60"><circle cx="6" cy="12" r="4" fill="currentColor" /><circle cx="14" cy="12" r="4" fill="currentColor" /><text x="24" y="16" fontSize="12" fill="currentColor">NIMBUS</text></svg>
  )},
]

export default function LogoStrip() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-wider text-slate-500">Trusted by growing HVAC teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center text-slate-400">
          {logos.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center w-full"
            >
              {l.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
