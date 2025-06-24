'use client'

import { motion } from 'framer-motion'
import { Film, Briefcase, FolderOpen, Mail } from 'lucide-react'

export default function Hero() {
  const navItems = [
    { icon: Film, href: '#showreel', label: 'Showreel' },
    { icon: Briefcase, href: '#services', label: 'Services' },
    { icon: FolderOpen, href: '#portfolio', label: 'Portfolio' },
    { icon: Mail, href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-gray-50 to-white snap-section overflow-hidden">
      {/* Subtle background elements for openness */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-50 rounded-full opacity-20 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-50 rounded-full opacity-10 blur-3xl" />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center mb-20 z-10"
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight text-gray-800 tracking-wider cursor-pointer"
        >
          Farhan
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-sm sm:text-base lg:text-lg text-gray-500 font-light mt-4 tracking-wide"
        >
          Digital Experience Architect
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-4xl mx-auto mt-6 sm:mt-8 px-4 sm:px-6"
        >
          <p className="text-gray-600 font-light leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
            Creative technologist and award-winning designer with a passion for human-centered design. I've worked with global clients across Europe and Asia, blending storytelling, interaction, and clean code. From cinematic film production to full-stack development, I craft digital experiences that are both beautiful and intelligent.
          </p>
          <p className="text-gray-600 font-light leading-relaxed text-xs sm:text-sm md:text-base">
            With firsthand exposure to diverse cultures, from corporate executives in Europe to nomadic communities in the mountains, I bring a unique, emotionally intelligent approach to every project I undertake.
          </p>
        </motion.div>
      </motion.div>

      {/* Navigation Icons */}
      <motion.nav
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex flex-wrap justify-center space-x-4 sm:space-x-8 md:space-x-16 z-10 px-4"
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
            onClick={() => handleNavClick(item.href)}
            className="group relative flex flex-col items-center space-y-3 p-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon Container */}
            <motion.div
              className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <item.icon 
                size={24} 
                className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300" 
              />
            </motion.div>

            {/* Label */}
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="text-sm text-gray-500 font-light tracking-wide absolute -bottom-2"
            >
              {item.label}
            </motion.span>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              whileHover={{
                background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </motion.nav>


      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}