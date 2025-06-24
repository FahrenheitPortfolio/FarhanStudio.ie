import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Farhan Studio - Digital Experience Architect',
  description: 'Award-winning creative agency specializing in showreel production, professional photography, graphic design, web development & app design. Serving premium clients across Ireland, Australia, New Zealand, Europe & USA. Get your free consultation today.',
  keywords: [
    // Primary Services
    'video production company Ireland', 'showreel production Dublin', 'corporate video Ireland',
    'professional photographer Australia', 'commercial photography Sydney', 'product photography Melbourne',
    'graphic design agency New Zealand', 'brand identity design Auckland', 'logo design Wellington',
    'web design company Ireland', 'responsive web development Dublin', 'ecommerce website design',
    'app design agency Australia', 'mobile app development Sydney', 'UI UX design Melbourne',
    
    // Location-based
    'creative agency Dublin Ireland', 'video production Sydney Australia', 'graphic design Auckland New Zealand',
    'web design company Cork', 'photography services Brisbane', 'app development Perth',
    'creative services Galway', 'video production Gold Coast', 'design agency Christchurch',
    
    // Industry-specific
    'corporate video production', 'product photography ecommerce', 'startup branding design',
    'restaurant web design', 'real estate photography', 'tech company branding',
    'fashion photography', 'architectural photography', 'event photography',
    
    // Service combinations
    'video and photography package', 'complete branding solution', 'web design and development',
    'digital marketing creative', 'social media content creation', 'brand storytelling video'
  ],
  authors: [{ name: 'Farhan Studio', url: 'https://farhanstudio.ie' }],
  creator: 'Farhan Studio',
  publisher: 'Farhan Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    alternateLocale: ['en_AU', 'en_NZ', 'en_US', 'en_GB'],
    url: 'https://farhanstudio.ie',
    siteName: 'Farhan Studio',
    title: 'Farhan Studio - Digital Experience Architect',
    description: 'Award-winning creative agency delivering exceptional video production, photography, graphic design, web development & app design services across Ireland, Australia, New Zealand, Europe & USA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Farhan Studio - Creative Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@farhanstudio',
    creator: '@farhanstudio',
    title: 'Farhan Studio - Digital Experience Architect',
    description: 'Award-winning video production, photography, design & development services',
    images: ['/twitter-image.jpg'],
  },
  metadataBase: new URL('https://farhanstudio.ie'),
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  alternates: {
    canonical: 'https://farhanstudio.ie',
    languages: {
      'en-IE': 'https://farhanstudio.ie',
      'en-AU': 'https://farhanstudio.ie/au',
      'en-NZ': 'https://farhanstudio.ie/nz',
      'en-US': 'https://farhanstudio.ie/us',
      'en-GB': 'https://farhanstudio.ie/uk',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <StructuredData />
      </head>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}