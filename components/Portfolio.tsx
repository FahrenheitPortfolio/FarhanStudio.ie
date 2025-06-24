'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import ImageOptimizer from './ImageOptimizer'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Graphic Design', 'Web Dev', 'Film', 'App Dev', 'AI', 'Photography']

  const portfolioItems = [
    {
      id: 1,
      title: 'Bluebird - Personal Film Project',
      category: 'Film',
      description: 'Shot during covid lockdown in beautiful Kerry, Ireland, Bluebird is a poetic short film about life and human resilience.',
      client: 'Farhan Saeed',
      image: '/portfolio/_0004_bluebird.jpg',
      behanceUrl: 'https://www.youtube.com/watch?v=dmj9n0nNRXQ'
    },
    {
      id: 2,
      title: 'Sarah McTernan - Album Photography',
      category: 'Photography',
      description: 'Sarah McTernan is an Irish singer who performed for EuroVision.',
      client: 'ILoveLimerick',
      image: '/portfolio/sarah-mcternan.jpg',
      behanceUrl: 'https://www.behance.net/gallery/122974979/Sarah-McTernan-Fashion-Portraiture'
    },
    {
      id: 3,
      title: 'CopperHawk',
      category: 'Web Dev',
      description: 'Copper Hawk is an Irish company dedicated to improving animal health through the development of veterinary products made from natural sources.',
      client: 'CopperHawk',
      image: '/portfolio/copperhawk.jpg',
      behanceUrl: 'https://www.behance.net/gallery/226925401/CopperHawk-Web-Project-Management'
    },
    {
      id: 4,
      title: 'Typography and Book Design',
      category: 'Graphic Design',
      description: 'Book design and typography project showcasing creative layouts and typography styles.',
      client: 'Multiple Clients',
      image: '/portfolio/_0006_typography.jpg',
      behanceUrl: 'https://www.behance.net/gallery/226835451/Typography-and-Book-Designs'
    },
    {
      id: 5,
      title: 'Rose of Tralee Festival',
      category: 'Photography',
      description: 'Professional event photography capturing the essence and beauty of the Rose of Tralee Festival.',
      client: 'The Savoy Collection',
      image: '/portfolio/_0010_rose-tralee.jpg',
      behanceUrl: 'https://www.behance.net/gallery/228249127/Rose-of-Tralee-2023?tracking_source=project_owner_other_projects'
    },
    {
      id: 6,
      title: 'BerryMe - Web 3.0 App',
      category: 'App Dev',
      description: 'BerryMe is a Web 3.0 application that allows users to create personalized digital Contracts using AI.',
      client: 'BerryMe',
      image: '/portfolio/_0002_berryme.jpg',
      behanceUrl: 'https://www.behance.net/gallery/226839995/BerryMe-Web-30-App-Design'
    },
    {
      id: 7,
      title: 'Michelle Grimes - Photography',
      category: 'Photography',
      description: 'Michelle Grimes is a pop/dance vocalist and musician. Known for her powerful vocals, her work centers around female empowerment and good vibes.',
      client: 'Michelle Grimes',
      image: '/portfolio/_0003_michelle-grimes.jpg',
      behanceUrl: 'https://www.behance.net/gallery/228249127/Rose-of-Tralee-2023?tracking_source=project_owner_other_projects'
    },
    {
      id: 8,
      title: 'Isle of Plants - Brand Asset Development',
      category: 'Graphic Design',
      description: 'Isle of Plants is a project that focuses on creating sustainable and eco-friendly plant-based beauty products.',
      client: 'Isle of Plants',
      image: '/portfolio/_0008_isle-of-plants.jpg',
      behanceUrl: 'https://www.behance.net/gallery/226388889/Isle-of-Plants-Brand-Asset-Development'
    },
    {
      id: 9,
      title: 'Arena5 - Brand and Web Design',
      category: 'Web Dev',
      description: 'Arena5 is family entertainment center in Limerick, Ireland. They offer a wide range of activities including bowling, laser tag, and arcade games.',
      client: 'Arena5',
      image: '/portfolio/_0007_arena5.jpg',
      behanceUrl: 'https://www.behance.net/gallery/116735043/Arena5-Limerick-Web-Design'
    },
    {
      id: 10,
      title: 'Product Explainer Videos',
      category: 'Film',
      description: 'Product Explainer Videos for various clients showcasing their products for the audiences.',
      client: 'Multiple Clients',
      image: '/portfolio/_0009_product-explainer.jpg',
      behanceUrl: 'https://www.behance.net/gallery/56192035/Product-Explainer-Animations'
    },
    {
      id: 11,
      title: 'UN Women - Shadow Pandemic',
      category: 'Film',
      description: 'Shadow Pandemic is a short film created for raising awareness about domestic violence during the COVID-19 pandemic.',
      client: 'UN Women',
      image: '/portfolio/_0005_un-women.jpg',
      behanceUrl: 'https://www.youtube.com/watch?v=g6mU--eFNFE'
    }

    
    
    // Add your projects here following the format above
  ]

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section className="h-screen bg-black relative snap-section">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 h-full flex flex-col py-6 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white mb-3 md:mb-4 tracking-tight">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-4 md:mb-6 px-2">
            Creative excellence across multiple disciplines
          </p>

          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 md:mb-6 px-2" role="tablist" aria-label="Portfolio categories">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category)}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'glass text-white/70 hover:text-white hover:glass-strong'
                }`}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`portfolio-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 flex-1 overflow-y-auto px-1 sm:px-0"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass p-4 rounded-xl hover:glass-strong transition-all duration-300 group h-fit"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                  {item.image ? (
                    <ImageOptimizer
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-8 h-8 glass rounded-lg flex items-center justify-center mx-auto mb-2">
                        <ExternalLink size={14} />
                      </div>
                      <p className="text-white/50 text-xs">Preview</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 mb-2 text-xs leading-relaxed">{item.description}</p>
                  <p className="text-blue-400 text-xs font-medium mb-2">{item.client}</p>
                  
                  {item.behanceUrl && (
                    <motion.a
                      href={item.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center space-x-1 text-xs text-white/60 hover:text-white transition-colors"
                    >
                      <span>View on Behance</span>
                      <ExternalLink size={10} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Behance Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <motion.a
            href="https://www.behance.net/FarhanSaeedOfficial"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-white/80 hover:text-white hover:glass-strong transition-all duration-300"
          >
            <span>View Full Portfolio on Behance</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}