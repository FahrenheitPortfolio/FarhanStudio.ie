'use client'

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import ShowreelSection from '@/components/ShowreelSection'
import Services from '@/components/Services'
import ProcessSection from '@/components/ProcessSection'
import Portfolio from '@/components/Portfolio'

import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'

import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
import ScrollZoom from '@/components/ScrollZoom'
import ScrollSlide from '@/components/ScrollSlide'
import ScrollRotate from '@/components/ScrollRotate'
import ScrollFade from '@/components/ScrollFade'
import dynamic from 'next/dynamic'

const CursorTracker = dynamic(() => import('@/components/CursorTracker'), { ssr: false })
const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), { ssr: false })
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false })
const VoiceSearch = dynamic(() => import('@/components/VoiceSearch'), { ssr: false })
const PerformanceMonitor = dynamic(() => import('@/components/PerformanceMonitor'), { ssr: false })
const PWAInstaller = dynamic(() => import('@/components/PWAInstaller'), { ssr: false })

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen overflow-hidden" role="main">
        <CursorTracker />
        <ParallaxBackground />
        <ThemeToggle />
        <VoiceSearch />
        <PerformanceMonitor />
        <PWAInstaller />
        <Navigation />

        <section id="hero" aria-label="Hero section"><Hero /></section>
        <section id="showreel" aria-label="Showreel section"><ShowreelSection /></section>
        <section id="services" aria-label="Services section"><Services /></section>
        <section id="process" aria-label="Process section"><ProcessSection /></section>
        <section id="portfolio" aria-label="Portfolio section"><Portfolio /></section>
        <section id="pricing" aria-label="Pricing section"><PricingSection /></section>
        <section id="faq" aria-label="FAQ section"><FAQSection /></section>
        <section id="contact" aria-label="Contact section"><Footer /></section>
      </main>
    </ErrorBoundary>
  )
}