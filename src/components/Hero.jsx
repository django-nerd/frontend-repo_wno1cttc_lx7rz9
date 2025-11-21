import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'
import { useEffect } from 'react'
import { brand } from './Brand'

function FloatingMockups() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      mx.set((e.clientX - innerWidth / 2) / innerWidth)
      my.set((e.clientY - innerHeight / 2) / innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  const rotateX = useTransform(my, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10])
  const translate = useTransform(mx, [-0.5, 0.5], [-10, 10])

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative perspective-1000"
      >
        {/* Dashboard card */}
        <motion.div
          style={{ x: translate }}
          initial={{ y: 40, opacity: 0, rotateX: -8 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-2xl bg-white shadow-2xl p-4 md:p-6 border border-slate-200/60"
        >
          <div className="h-56 md:h-72 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 grid grid-cols-12 gap-2 p-4">
              <div className="col-span-7 bg-white/80 rounded-lg shadow-sm" />
              <div className="col-span-5 space-y-2">
                <div className="h-10 bg-white/80 rounded-lg shadow-sm" />
                <div className="h-10 bg-white/80 rounded-lg shadow-sm" />
                <div className="h-10 bg-white/80 rounded-lg shadow-sm" />
              </div>
            </div>
          </div>
        </motion.div>
        {/* Widget card */}
        <motion.div
          style={{ x: translate }}
          initial={{ y: 60, opacity: 0, rotateX: -6 }}
          animate={{ y: -40, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="rounded-xl bg-white shadow-xl p-3 border border-slate-200/60 w-64 md:w-80 absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2"
        >
          <div className="h-48 md:h-56 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Hero({ onPrimaryClick }) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            `radial-gradient(1200px 600px at 20% 10%, ${brand.sky}15 0%, transparent 60%),` +
            `radial-gradient(1000px 500px at 80% 20%, ${brand.blue}22 0%, transparent 60%),` +
            `radial-gradient(1200px 700px at 50% 100%, ${brand.navy}18 0%, transparent 60%)`,
          filter: 'saturate(120%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span className="text-sm text-slate-700">New: Instant AC quotes with your margins</span>
        </motion.div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Quote smarter. Sell faster.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          The all-in-one AC quoting and automation platform built for HVAC contractors.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrimaryClick}
            className="px-5 md:px-6 py-3 rounded-xl text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              background: `linear-gradient(135deg, ${brand.blue}, ${brand.sky})`,
              boxShadow: `0 10px 30px -10px ${brand.blue}55`
            }}
          >
            Start Free Demo
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#video"
            className="px-5 md:px-6 py-3 rounded-xl bg-white text-slate-800 border border-slate-200 shadow-sm inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4" /> Watch Product Video
          </motion.a>
        </div>

        <FloatingMockups />
      </div>
    </section>
  )
}
