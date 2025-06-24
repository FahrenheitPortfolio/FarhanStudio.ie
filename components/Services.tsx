'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: 'Graphic Design',
      description: 'Visual identity and branding that captures your essence',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics']
    },
    {
      title: 'Website Development',
      description: 'Modern, responsive websites that drive results',
      features: ['Custom Development', 'E-commerce', 'CMS Integration', 'SEO Optimization']
    },
    {
      title: 'Film Production & Post Production',
      description: 'Cinematic storytelling from concept to final cut',
      features: ['Video Production', 'Post Production', 'Motion Graphics', 'Color Grading']
    },
    {
      title: 'Full Stack App Development',
      description: 'Complete mobile and web applications',
      features: ['iOS & Android', 'Web Apps', 'Backend Development', 'API Integration']
    },
    {
      title: 'AI Integration',
      description: 'Intelligent solutions powered by artificial intelligence',
      features: ['Machine Learning', 'Automation', 'AI Chatbots', 'AI Customer Service voice', 'Data Analysis']
    },
    {
      title: 'Brand Development',
      description: 'Strategic brand building that resonates with your audience',
      features: ['Brand Strategy', 'Market Research', 'Brand Guidelines', 'Brand Positioning']
    }
  ]

  return (
    <section id="services" className="h-screen bg-gradient-to-b from-white to-gray-50 py-20 overflow-y-auto snap-section">
      <div className="max-w-6xl mx-auto px-4 h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-6 tracking-tight">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive creative and technical solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed font-light text-sm">{service.description}</p>
              
              <ul className="space-y-1">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-500 flex items-center text-xs font-light">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}