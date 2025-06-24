'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function ShowreelSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section id="showreel" className="h-screen relative bg-black overflow-hidden snap-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Full Screen Video */}
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/AnUlNY0HvZw?start=2&autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=AnUlNY0HvZw&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
          title="Farhan Studio Showreel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Sound Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-8 right-8 glass p-3 rounded-full text-white/80 hover:text-white transition-all z-10"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>

        {/* Loading Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white/70">Loading Showreel...</p>
            </div>
          </div>
        )}


      </motion.div>
    </section>
  )
}