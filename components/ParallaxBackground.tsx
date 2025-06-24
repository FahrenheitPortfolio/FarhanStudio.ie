'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600])

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
      />
    </div>
  )
}