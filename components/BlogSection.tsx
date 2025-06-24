'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Creative Design in 2025',
      excerpt: 'Exploring emerging trends and technologies that are reshaping the creative landscape.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Design Trends',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Building Brands That Resonate',
      excerpt: 'How to create authentic brand identities that connect with your audience on a deeper level.',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Branding',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'The Art of Visual Storytelling',
      excerpt: 'Techniques for crafting compelling narratives through visual media and design.',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Storytelling',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <section className="h-screen bg-gradient-to-b from-gray-50 to-white py-20 overflow-y-auto snap-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-800 mb-6 tracking-tight">
            Creative <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Thoughts, ideas, and inspiration from our creative journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📝</span>
                  </div>
                  <p className="text-gray-500 text-sm">Article Image</p>
                </div>
              </div>

              <div className="p-6">
                {/* Category */}
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-light text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            <span>View All Posts</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}