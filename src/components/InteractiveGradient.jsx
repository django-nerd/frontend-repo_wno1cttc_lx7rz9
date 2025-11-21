import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { brand } from './Brand'

// Interactive mouse-follow gradient background for hero
export default function InteractiveGradient() {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.35)

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

  // Stronger, more visible gradients
  const bg = useTransform([sx, sy], ([x, y]) => {
    const cx = Math.round(x * 100)
    const cy = Math.round(y * 100)
    return (
      // Primary hotspot following the cursor
      `radial-gradient(900px 700px at ${cx}% ${cy}%, ${brand.sky}66, transparent 60%),` +
      // Top-right wash
      `radial-gradient(1100px 800px at 85% 10%, ${brand.blue}44, transparent 70%),` +
      // Bottom-left depth
      `radial-gradient(1300px 900px at 8% 90%, ${brand.navy}33, transparent 70%),` +
      // Subtle base so it9s visible even before moving
      `linear-gradient(180deg, ${brand.sky}0f, transparent)`
    )
  })

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 -z-20"
      style={{ background: bg, filter: 'saturate(120%) contrast(105%)' }}
    />
  )
}
