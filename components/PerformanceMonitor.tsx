'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({ fps: 0, memory: 0, loadTime: 0 })
  const [showMetrics, setShowMetrics] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    if (typeof window === 'undefined') return
    let frameCount = 0
    let lastTime = performance.now()
    
    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        const memory = (performance as any).memory ? 
          Math.round((performance as any).memory.usedJSHeapSize / 1048576) : 0
        
        setMetrics(prev => ({ ...prev, fps, memory }))
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(measureFPS)
    }

    // Measure load time
    window.addEventListener('load', () => {
      const loadTime = Math.round(performance.now())
      setMetrics(prev => ({ ...prev, loadTime }))
    })

    measureFPS()
  }, [])

  if (!isMounted) return null

  return (
    <>
      <motion.button
        onClick={() => setShowMetrics(!showMetrics)}
        className="fixed bottom-6 left-6 z-50 glass p-2 rounded-full text-xs"
        whileHover={{ scale: 1.1 }}
      >
        📊
      </motion.button>
      
      <AnimatePresence>
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed bottom-16 left-6 z-50 glass p-4 rounded-lg text-xs text-white"
          >
            <div>FPS: {metrics.fps}</div>
            <div>Memory: {metrics.memory}MB</div>
            <div>Load: {metrics.loadTime}ms</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}