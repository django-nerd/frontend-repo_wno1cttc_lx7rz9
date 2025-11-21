import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useMemo } from 'react'
import { brand } from './Brand'

// Lightweight 2D floaters with subtle parallax on scroll
export default function FloatingOrnaments() {
  const { scrollY } = useScroll()

  // Parallax factors for different layers
  const ySlow = useSpring(useTransform(scrollY, [0, 1000], [0, -60]), { stiffness: 60, damping: 20 })
  const yMed = useSpring(useTransform(scrollY, [0, 1000], [0, -120]), { stiffness: 60, damping: 20 })
  const yFast = useSpring(useTransform(scrollY, [0, 1000], [0, -200]), { stiffness: 60, damping: 20 })

  const shapes = useMemo(() => [
    { key: 'orb1', size: 220, blur: 60, color: `${brand.sky}55`, style: { left: '6%', top: '14%' }, y: ySlow },
    { key: 'orb2', size: 280, blur: 80, color: `${brand.blue}40`, style: { right: '10%', top: '8%' }, y: yMed },
    { key: 'orb3', size: 180, blur: 48, color: `${brand.navy}33`, style: { left: '18%', bottom: '20%' }, y: yFast },
    { key: 'card1', rect: true, w: 160, h: 110, rotate: -8, color: '#ffffff', border: '#e5e7eb', style: { left: '8%', top: '46%' }, y: yMed },
    { key: 'card2', rect: true, w: 190, h: 130, rotate: 10, color: '#ffffff', border: '#e5e7eb', style: { right: '6%', top: '42%' }, y: ySlow },
  ], [ySlow, yMed, yFast])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
      {shapes.map(s => (
        <motion.div
          key={s.key}
          style={{ y: s.y, ...s.style, rotate: s.rotate }}
          className="absolute will-change-transform"
        >
          {s.rect ? (
            <div
              className="rounded-xl shadow-lg/30 backdrop-blur-[1px]"
              style={{
                width: s.w,
                height: s.h,
                background: s.color,
                border: `1px solid ${s.border}`,
                boxShadow: `0 20px 50px -20px ${brand.blue}33`
              }}
            >
              <div className="h-full w-full grid grid-cols-3 gap-2 p-3 opacity-70">
                <div className="col-span-2 rounded-md bg-slate-100" />
                <div className="rounded-md bg-slate-100" />
                <div className="rounded-md bg-slate-100" />
                <div className="col-span-3 rounded-md bg-slate-100" />
              </div>
            </div>
          ) : (
            <div
              className="rounded-full"
              style={{
                width: s.size,
                height: s.size,
                background: s.color,
                filter: `blur(${s.blur}px)`,
                boxShadow: `0 30px 80px -20px ${brand.sky}44`
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
