'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/FahrenheitPortfolio', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/farhan-saeed', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/farhan.saeed', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contact@farhanstudio.ie', label: 'Email' },
  ]

  return (
    <section id="hero" className="min-h-screen relative bg-black text-white snap-section overflow-hidden">
      {/* Background with Particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {Array.from({ length: 50 }).map((_, i) => {
          const delay = Math.random() * 3
          const duration = 2 + Math.random() * 3
          const size = 1 + Math.random() * 2
          const left = Math.random() * 100
          const top = Math.random() * 100
          
          return (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`
              }}
            />
          )
        })}
        
        {/* Floating Orbs */}
        {Array.from({ length: 8 }).map((_, i) => {
          const size = 20 + Math.random() * 40
          const left = Math.random() * 100
          const top = Math.random() * 100
          const opacity = 0.05 + Math.random() * 0.1
          
          return (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full blur-sm"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(59, 130, 246, ${opacity}) 0%, transparent 70%)`,
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          )
        })}
        
        {/* Moving Lines */}
        {Array.from({ length: 3 }).map((_, i) => {
          const width = 100 + Math.random() * 200
          const left = Math.random() * 100
          const top = 20 + Math.random() * 60
          const rotation = Math.random() * 360
          
          return (
            <div
              key={`line-${i}`}
              className="absolute opacity-10"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${width}px`,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                transform: `rotate(${rotation}deg) translate(${(mousePosition.x - window.innerWidth / 2) * 0.005}px, ${(mousePosition.y - window.innerHeight / 2) * 0.005}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            />
          )
        })}
      </div>
      
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6">
        <div className="text-xl md:text-2xl font-light tracking-wider">FARHAN</div>
        <div className="hidden md:flex space-x-8 text-sm font-light">
          <a href="#services" className="hover:text-gray-300 transition-colors">SERVICES</a>
          <a href="#portfolio" className="hover:text-gray-300 transition-colors">PORTFOLIO</a>
          <a href="#pricing" className="hover:text-gray-300 transition-colors">PRICING</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">CONTACT</a>
        </div>
      </nav>

      {/* Main Content - Mobile Responsive Layout */}
      <div className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 relative z-10 pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full max-w-7xl mx-auto">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-8 md:w-12 h-px bg-white"></div>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Digital Creator</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-none">
                FARHAN
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-300 tracking-wide max-w-lg mx-auto lg:mx-0">
                DIGITAL EXPERIENCE ARCHITECT
              </h2>
            </div>
            
            {/* Bio Text */}
            <div className="max-w-xl mx-auto lg:mx-0 space-y-3 md:space-y-4">
              <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-300">
                Creative technologist and award-winning designer with a passion for human-centered design.
              </p>
              <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-gray-400">
                I've worked with global clients across Europe and Asia, blending storytelling, interaction, and clean code. 
                From cinematic film production to full-stack development, I craft digital experiences that are both beautiful and intelligent.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3 md:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-light tracking-wide text-xs md:text-sm uppercase"
              >
                View Work
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-light tracking-wide text-xs md:text-sm uppercase"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Right Column - Stats/Info */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 md:space-y-12 lg:pl-12 mt-8 lg:mt-0">
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
                <div className="border-l-2 border-gray-600 pl-4 md:pl-6 text-center sm:text-left">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-extralight text-white mb-1 md:mb-2">50+</div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Projects Completed</div>
                </div>
                
                <div className="border-l-2 border-gray-600 pl-4 md:pl-6 text-center sm:text-left">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-extralight text-white mb-1 md:mb-2">15+</div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Countries Worked</div>
                </div>
                
                <div className="border-l-2 border-gray-600 pl-4 md:pl-6 text-center sm:text-left">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-extralight text-white mb-1 md:mb-2">8+</div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
              
              {/* Expertise Tags */}
              <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                <div className="text-xs text-gray-500 uppercase tracking-widest">Expertise</div>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {['UI/UX Design', 'Full-Stack Dev', 'Film Production', 'Brand Strategy', 'AI Integration'].map((skill) => (
                    <span key={skill} className="px-2 md:px-3 py-1 border border-gray-600 text-xs text-gray-300 font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Bottom Right */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex flex-col space-y-3 md:space-y-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 border border-gray-600 flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
        ))}
      </div>


    </section>
  )
}