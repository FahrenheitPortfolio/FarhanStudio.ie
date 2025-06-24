'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Calendar } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@farhanstudio.ie',
      description: 'Get in touch for project inquiries'
    },
    {
      icon: Calendar,
      title: 'Book a Call',
      details: 'Schedule 30min consultation',
      description: 'Free discovery call to discuss your project',
      link: 'https://calendly.com/raisethyfahrenheit/30min'
    },
    {
      icon: MapPin,
      title: 'Locations',
      details: 'Ireland • Australia • New Zealand',
      description: 'Serving clients across multiple regions'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '24-48 hours',
      description: 'Quick turnaround on all inquiries'
    }
  ]

  const regions = [
    { name: 'Ireland', timezone: 'GMT+0', flag: '🇮🇪' },
    { name: 'Australia', timezone: 'AEST', flag: '🇦🇺' },
    { name: 'New Zealand', timezone: 'NZST', flag: '🇳🇿' },
    { name: 'Europe', timezone: 'CET', flag: '🇪🇺' },
    { name: 'USA', timezone: 'EST/PST', flag: '🇺🇸' }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-subtle max-w-2xl mx-auto font-light">
            Ready to bring your creative vision to life? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-medium mb-8">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="minimal-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 glass rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 mb-1 hover:text-blue-300 transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-blue-400 mb-1">{info.details}</p>
                    )}
                    <p className="text-muted text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="minimal-card"
          >
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:glass-strong transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:glass-strong transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Project Type"
                className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:glass-strong transition-all duration-300"
              />
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 glass rounded-lg text-white placeholder-white/40 focus:outline-none focus:glass-strong transition-all duration-300 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary py-3 rounded-lg text-white font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-medium mb-8">Global Presence</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {regions.map((region) => (
              <div key={region.name} className="glass px-4 py-2 rounded-full flex items-center space-x-2">
                <span className="text-lg">{region.flag}</span>
                <span className="font-medium text-sm">{region.name}</span>
                <span className="text-muted text-xs">({region.timezone})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}