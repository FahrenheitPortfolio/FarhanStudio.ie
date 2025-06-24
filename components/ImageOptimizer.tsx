'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ImageOptimizerProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function ImageOptimizer({ src, alt, className, priority = false }: ImageOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current && !priority) {
      observer.observe(imgRef.current)
    } else if (priority) {
      setIsInView(true)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {(isInView || priority) && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
            animate={{ opacity: isLoaded ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
            onLoad={() => setIsLoaded(true)}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
            transition={{ duration: 0.6 }}
            loading={priority ? 'eager' : 'lazy'}
          />
        </>
      )}
    </div>
  )
}