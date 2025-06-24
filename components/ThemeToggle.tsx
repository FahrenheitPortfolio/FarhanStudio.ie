'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    if (typeof window === 'undefined') return
    
    const theme = localStorage.getItem('theme') || 'dark'
    setIsDark(theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [])

  const toggleTheme = () => {
    if (typeof window === 'undefined') return
    
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
  }

  if (!isMounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 glass p-3 rounded-full"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={20} className="text-white" /> : <Sun size={20} className="text-yellow-500" />}
      </motion.div>
    </motion.button>
  )
}