'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ExternalLink, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/FahrenheitPortfolio', 
      label: 'GitHub',
      description: 'Code & Projects'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/farhan-s-156053325/', 
      label: 'LinkedIn',
      description: 'Professional Network'
    },
    { 
      icon: ExternalLink, 
      href: 'https://www.behance.net/FarhanSaeedOfficial', 
      label: 'Behance',
      description: 'Creative Portfolio'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/farhan.art.work/', 
      label: 'Instagram',
      description: 'Behind the Scenes'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:contact@farhanstudio.ie?subject=New Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center relative overflow-hidden snap-section">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-6xl mx-auto px-4 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 tracking-tight">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <motion.a
                href="https://calendly.com/raisethyfahrenheit/30min?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 text-center text-xl"
              >
                📅 Book Free Strategy Call
              </motion.a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-all"
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-all resize-none"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white/10 border border-white/20 text-white py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
            
            <div className="mt-6 text-center">
              <a href="mailto:contact@farhanstudio.ie" className="text-white/70 hover:text-white transition-colors text-sm">
                contact@farhanstudio.ie
              </a>
            </div>
          </motion.div>

          {/* Right Side - Logo & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center text-center"
          >
            {/* Logo */}
            <div className="mb-12">
              <h2 className="text-6xl md:text-8xl font-extralight text-white mb-6 tracking-wider">
                Farhan
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
              <p className="text-xl text-white/70 font-light tracking-wide">
                Creative Studio
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                  >
                    <social.icon 
                      size={24} 
                      className="text-white/70 group-hover:text-white transition-colors duration-300 mx-auto" 
                    />
                  </motion.div>
                  
                  <h3 className="text-sm font-medium text-white mb-1">{social.label}</h3>
                  <p className="text-xs text-white/50 font-light">{social.description}</p>
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-white/50 text-sm font-light">
                © {currentYear} Farhan Studio. All rights reserved.
              </p>
              <p className="text-white/30 text-xs font-light mt-2">
                Crafted with passion in Limerick
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}