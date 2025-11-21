import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    quote: 'We cut quoting time from hours to minutes and win jobs faster.',
    name: 'Liam, CoolAir Heating & Cooling'
  },
  {
    quote: 'Website leads now get instant quotes. Our pipeline doubled.',
    name: 'Sofia, Breeze HVAC'
  },
  {
    quote: 'Follow-ups are done automatically and our close rate jumped.',
    name: 'Marcus, NorthSide Air'
  },
]

export default function Testimonials() {
  const trackRef = useRef(null)
  const inView = useInView(trackRef, { amount: 0.3, once: true })

  useEffect(() => {
    if (!trackRef.current) return
    const el = trackRef.current
    let start = null
    let raf
    const duration = 16000

    const step = (ts) => {
      if (!start) start = ts
      const progress = (ts - start) % duration
      const pct = progress / duration
      el.style.transform = `translateX(${-(pct * 100)}%)`
      raf = requestAnimationFrame(step)
    }

    if (inView) raf = requestAnimationFrame(step)
    return () => raf && cancelAnimationFrame(raf)
  }, [inView])

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Loved by HVAC contractors</h2>
            <p className="mt-3 text-slate-600">Real results from real businesses.</p>
          </div>
        </div>

        <div className="mt-10 relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 will-change-transform" ref={trackRef}>
              {[...items, ...items].map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (i % items.length) * 0.1 }}
                  className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-slate-800">“{t.quote}”</p>
                  <p className="mt-4 text-sm text-slate-500">{t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
