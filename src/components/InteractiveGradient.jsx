import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { brand } from './Brand'

// Interactive mouse-follow gradient background for hero
export default function InteractiveGradient() {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.3)

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      mx.set(e.clientX / innerWidth)
      my.set(e.clientY / innerHeight)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  const sx = useSpring(mx, { stiffness: 80, damping: 20 })
  const sy = useSpring(my, { stiffness: 80, damping: 20 })

  const bg = useTransform([sx, sy], ([x, y]) => {
    const cx = Math.round(x * 100)
    const cy = Math.round(y * 100)
    return `radial-gradient(800px 600px at ${cx}% ${cy}%, ${brand.sky}33, transparent 60%),` +
           `radial-gradient(1000px 700px at 80% 0%, ${brand.blue}25, transparent 70%),` +
           `radial-gradient(1200px 900px at 10% 100%, ${brand.navy}22, transparent 70%)`
  })

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 -z-20"
      style={{ background: bg, filter: 'saturate(120%)' }}
    />
  )
}
