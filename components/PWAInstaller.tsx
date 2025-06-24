'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X } from 'lucide-react'

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstall, setShowInstall] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    if (typeof window === 'undefined') return
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  if (!isMounted) return null

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowInstall(false)
    }
  }

  return (
    <AnimatePresence>
      {showInstall && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 glass p-4 rounded-xl max-w-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-medium text-sm">Install App</h3>
            <button onClick={() => setShowInstall(false)} className="text-white/60 hover:text-white">
              <X size={16} />
            </button>
          </div>
          <p className="text-white/70 text-xs mb-3">
            Install Farhan Studio for quick access and offline viewing
          </p>
          <motion.button
            onClick={handleInstall}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-black py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-2"
          >
            <Download size={16} />
            <span>Install</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}