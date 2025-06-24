'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in discussing a project with Farhan Studio.")
    window.open(`https://wa.me/353123456789?text=${message}`, '_blank')
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300"
    >
      <MessageCircle size={24} />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.button>
  )
}