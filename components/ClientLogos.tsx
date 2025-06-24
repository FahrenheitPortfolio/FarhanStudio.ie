'use client'

import { motion } from 'framer-motion'

export default function ClientLogos() {
  const clients = [
    { name: 'TechFlow', logo: 'TF' },
    { name: 'FinanceApp', logo: 'FA' },
    { name: 'EcoLux', logo: 'EL' },
    { name: 'HealthTech', logo: 'HT' },
    { name: 'RetailPro', logo: 'RP' },
    { name: 'StartupX', logo: 'SX' }
  ]

  return (
    <div className="py-16 bg-white/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 font-light mb-12 tracking-wide"
        >
          Trusted by innovative companies worldwide
        </motion.p>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg transition-all duration-300">
                <span className="text-gray-600 font-bold text-lg">{client.logo}</span>
              </div>
              <p className="text-xs text-gray-400 font-light">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}