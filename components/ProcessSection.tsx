'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Lightbulb, Palette, Rocket } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Discovery',
      description: 'We dive deep into your vision, goals, and brand essence through strategic consultation.',
      duration: '1-2 days'
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Crafting a tailored creative strategy that aligns with your business objectives.',
      duration: '2-3 days'
    },
    {
      icon: Palette,
      title: 'Creation',
      description: 'Bringing your vision to life with meticulous attention to detail and craftsmanship.',
      duration: '7-14 days'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Seamless delivery and ongoing support to ensure your success in the market.',
      duration: '1-2 days'
    }
  ]

  return (
    <section className="h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center snap-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-6 tracking-tight">
            My <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            A refined approach to creative excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-gray-300 to-transparent z-0" />
              )}

              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative z-10 w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300"
              >
                <step.icon className="text-blue-500" size={32} />
              </motion.div>

              <div className="bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-medium text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {step.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}