'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollFadeProps {
  children: React.ReactNode
  fadeDirection?: 'up' | 'down'
  className?: string
}

export default function ScrollFade({ children, fadeDirection = 'up', className = '' }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    fadeDirection === 'up' ? [20, 0, 0, -20] : [-20, 0, 0, 20]
  )

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}