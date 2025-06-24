'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollRotateProps {
  children: React.ReactNode
  rotateRange?: [number, number]
  className?: string
}

export default function ScrollRotate({ children, rotateRange = [-5, 5], className = '' }: ScrollRotateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [rotateRange[0], 0, rotateRange[1]])

  return (
    <motion.div
      ref={ref}
      style={{ rotate }}
      className={className}
    >
      {children}
    </motion.div>
  )
}