'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope. Brand identity projects typically take 7-14 days, websites 2-4 weeks, and comprehensive digital transformations 6-12 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We serve clients across Ireland, Australia, New Zealand, Europe, and the USA. We work seamlessly across time zones and provide localized support for each region.'
    },
    {
      question: 'What is included in your pricing?',
      answer: 'All packages include initial consultation, unlimited revisions during the design phase, final files in all formats, and 30 days of post-launch support. Enterprise packages include ongoing maintenance and priority support.'
    },
    {
      question: 'Can you help with existing brand updates?',
      answer: 'Yes! We specialize in brand evolution and modernization. Whether you need a complete rebrand or subtle refinements, we can help elevate your existing brand to meet current market demands.'
    },
    {
      question: 'What makes your approach different?',
      answer: 'We combine strategic thinking with creative excellence. Every project begins with understanding your business goals, target audience, and market position. This ensures our creative solutions drive measurable business results.'
    }
  ]

  return (
    <section className="h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center snap-section">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-6 tracking-tight">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <span className="text-lg font-medium text-gray-800 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="text-blue-500" size={20} />
                  ) : (
                    <Plus className="text-gray-400" size={20} />
                  )}
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}