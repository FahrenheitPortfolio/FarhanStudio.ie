'use client'

import { useState, useEffect, useCallback } from 'react'

export default function ScrollNavigation() {
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'showreel', label: 'Showreel' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = useCallback((index: number) => {
    if (isScrolling) return
    setActiveSection(index)
    const element = document.getElementById(sections[index].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isScrolling, sections])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    
    let timeout: NodeJS.Timeout

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return
      
      e.preventDefault()
      setIsScrolling(true)
      
      const direction = e.deltaY > 0 ? 1 : -1
      const newIndex = Math.max(0, Math.min(sections.length - 1, activeSection + direction))
      
      if (newIndex !== activeSection) {
        scrollToSection(newIndex)
      }
      
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsScrolling(false), 1000)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
      clearTimeout(timeout)
    }
  }, [activeSection, isScrolling, scrollToSection, sections.length, isLoaded])

  if (!isLoaded) return null

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4" aria-label="Page navigation">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 border ${
            activeSection === index 
              ? 'bg-white border-white/80 shadow-lg shadow-white/30 scale-125' 
              : 'bg-white/40 border-white/60 shadow-md shadow-black/50 hover:bg-white/70 hover:scale-110'
          }`}
          title={section.label}
          aria-label={`Go to ${section.label} section`}
          aria-current={activeSection === index ? 'true' : 'false'}
        />
      ))}
    </nav>
  )
}