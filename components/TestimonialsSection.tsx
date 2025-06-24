'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow',
      company: 'Ireland',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Farhan transformed our brand completely. Revenue increased 300% within 6 months of the rebrand launch.',
      result: '+300% Revenue Growth'
    },
    {
      name: 'Marcus Thompson',
      role: 'Founder, FinanceApp',
      company: 'Australia',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The app design exceeded all expectations. User engagement is up 250% and we secured Series A funding.',
      result: 'Series A Funding Secured'
    },
    {
      name: 'Emma Rodriguez',
      role: 'CMO, EcoLux',
      company: 'New Zealand',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Exceptional film production quality. Our brand video went viral with 2M+ views across platforms.',
      result: '2M+ Video Views'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center snap-section">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-6 tracking-tight">
            Client <span className="gradient-text">Success</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Transforming visions into measurable results
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-lg"
          >
            <Quote className="text-blue-400 mx-auto mb-6" size={48} />
            
            <p className="text-2xl text-gray-700 font-light leading-relaxed mb-8">
              "{testimonials[activeIndex].text}"
            </p>

            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>

            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
              <div className="text-left">
                <h4 className="font-medium text-gray-800">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                <p className="text-blue-500 text-sm">{testimonials[activeIndex].company}</p>
              </div>
            </div>

            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              {testimonials[activeIndex].result}
            </div>
          </motion.div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}