'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function ShowreelSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section id="showreel" className="min-h-screen relative bg-black py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 tracking-tight">
            Show<span className="text-blue-400">reel</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            A glimpse into my creative journey
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Full Width Video */}
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/AnUlNY0HvZw?start=2&autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=AnUlNY0HvZw&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
            title="Farhan Studio Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setIsLoaded(true)}
          />

          {/* Sound Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMuted(!isMuted)}
            className="absolute top-4 right-4 md:top-6 md:right-6 glass p-2 md:p-3 rounded-full text-white/80 hover:text-white transition-all z-10"
          >
            {isMuted ? <VolumeX size={16} className="md:w-5 md:h-5" /> : <Volume2 size={16} className="md:w-5 md:h-5" />}
          </motion.button>

          {/* Loading Overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white/70 text-sm md:text-base">Loading Showreel...</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}