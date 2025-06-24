'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollSlideProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  className?: string
}

export default function ScrollSlide({ children, direction = 'left', className = '' }: ScrollSlideProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    direction === 'left' ? [-20, 0, 20] : [20, 0, -20]
  )

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className={className}
    >
      {children}
    </motion.div>
  )
}