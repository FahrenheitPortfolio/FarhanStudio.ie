'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, ArrowRight } from 'lucide-react'

export default function PricingSection() {
  const [selectedServices, setSelectedServices] = useState<any[]>([])
  const [formData, setFormData] = useState({ name: '', email: '', description: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showQuote, setShowQuote] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  const services = [
    { name: 'Logo Design', category: 'Branding', price: 1200 },
    { name: 'Complete Brand Identity', category: 'Branding', price: 3500 },
    { name: 'Website Development', category: 'Web', price: 4500 },
    { name: 'E-commerce Store', category: 'Web', price: 8500 },
    { name: 'Mobile App Development', category: 'Digital', price: 15000 },
    { name: 'Video Production', category: 'Film', price: 3800 },
    { name: 'Photography', category: 'Photography', price: 1800 },
    { name: 'Graphic Design', category: 'Design', price: 950 },
    { name: 'AI Integration', category: 'Digital', price: 5500 },
    { name: 'SEO Optimization', category: 'Digital', price: 2200 }
  ]

  const toggleService = (service: any) => {
    setSelectedServices(prev => {
      const isSelected = prev.some(s => s.name === service.name)
      const newServices = isSelected 
        ? prev.filter(s => s.name !== service.name)
        : [...prev, service]
      
      const newTotal = newServices.reduce((sum, s) => sum + s.price, 0)
      setTotalPrice(newTotal)
      
      return newServices
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: formData.name,
          clientEmail: formData.email,
          projectDescription: formData.description,
          selectedServices,
          totalPrice
        })
      })
      
      const result = await response.json()
      if (response.ok && result.success) {
        alert(`Quote sent successfully to ${formData.email}! You'll receive it within a few minutes.`)
        setFormData({ name: '', email: '', description: '' })
        setSelectedServices([])
        setTotalPrice(0)
      } else {
        alert('Failed to send quote. Please try again.')
      }
    } catch (error) {
      alert('Error sending invoice. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 snap-section">
      <div className="max-w-6xl mx-auto px-6 md:px-8 min-h-screen flex flex-col justify-center py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-800 mb-6 tracking-tight">
            Custom <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quotes</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Every project is unique. Select your services and receive a personalized quote within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
              <h3 className="text-2xl font-light text-gray-800">Select Services</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <motion.button
                  key={service.name}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleService(service)}
                  className={`group p-4 rounded-xl border-2 transition-all duration-300 text-left relative overflow-hidden ${
                    selectedServices.some(s => s.name === service.name)
                      ? 'border-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-lg'
                      : 'border-gray-200 hover:border-blue-300 text-gray-700 hover:shadow-md bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <span className="font-semibold text-base">{service.name}</span>
                      <p className="text-sm opacity-70 mt-1">{service.category}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedServices.some(s => s.name === service.name)
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 group-hover:border-blue-400'
                    }`}>
                      {selectedServices.some(s => s.name === service.name) && (
                        <CheckCircle size={14} className="text-white" />
                      )}
                    </div>
                  </div>
                  {selectedServices.some(s => s.name === service.name) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 flex flex-col min-h-0"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-3">
                <Mail className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-light text-gray-800">Get Quote</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1 overflow-y-auto">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-gray-800 bg-white/80 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-gray-800 bg-white/80 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                  required
                />
                <textarea
                  placeholder="Describe your project in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl h-28 resize-none text-gray-800 bg-white/80 placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              {selectedServices.length > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                  <p className="text-sm font-medium text-blue-800 mb-3">Selected Services ({selectedServices.length}):</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedServices.map(service => (
                      <span key={service.name} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {service.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting || selectedServices.length === 0}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <span className="text-lg">{isSubmitting ? 'Sending Quote...' : 'Email Me Quote'}</span>
                <ArrowRight size={20} />
              </motion.button>
            </form>


          </motion.div>
        </div>
      </div>
    </section>
  )
}