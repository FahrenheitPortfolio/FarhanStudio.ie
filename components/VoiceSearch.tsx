'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, MicOff } from 'lucide-react'

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
      const recognition = new SpeechRecognition()
      
      recognition.continuous = false
      recognition.interimResults = true
      recognition.lang = 'en-US'

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        
        setTranscript(transcript)
        
        if (event.results[0].isFinal) {
          handleVoiceCommand(transcript.toLowerCase())
        }
      }

      recognition.onend = () => setIsListening(false)
      setRecognition(recognition)
    }
  }, [])

  const handleVoiceCommand = (command: string) => {
    const sections = ['hero', 'showreel', 'services', 'process', 'portfolio', 'pricing', 'faq', 'contact']
    
    for (const section of sections) {
      if (command.includes(section) || command.includes(section.replace('reel', ''))) {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          break
        }
      }
    }
    
    setTranscript('')
  }

  const toggleListening = () => {
    if (!recognition) return
    
    if (isListening) {
      recognition.stop()
    } else {
      recognition.start()
      setIsListening(true)
    }
  }

  if (!isMounted || !recognition) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={toggleListening}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`glass p-4 rounded-full ${isListening ? 'bg-red-500/20' : ''}`}
        aria-label="Voice navigation"
      >
        <motion.div
          animate={{ scale: isListening ? [1, 1.2, 1] : 1 }}
          transition={{ repeat: isListening ? Infinity : 0, duration: 1 }}
        >
          {isListening ? <MicOff size={24} className="text-red-400" /> : <Mic size={24} className="text-white" />}
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 glass p-3 rounded-lg min-w-48"
          >
            <p className="text-white text-sm">{transcript}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}