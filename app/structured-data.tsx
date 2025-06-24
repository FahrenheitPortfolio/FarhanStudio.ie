'use client'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Farhan Studio",
    "url": "https://farhanstudio.ie",
    "logo": "https://farhanstudio.ie/logo.png",
    "description": "Award-winning creative agency specializing in video production, photography, graphic design, web development, and app design services across Ireland, Australia, New Zealand, Europe, and USA.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE",
      "addressRegion": "Dublin"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+353-1-234-5678",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.instagram.com/farhanstudio",
      "https://www.linkedin.com/company/farhanstudio",
      "https://twitter.com/farhanstudio"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Ireland"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Country",
        "name": "New Zealand"
      },
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ]
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Creative Services",
    "provider": {
      "@type": "Organization",
      "name": "Farhan Studio"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Production & Showreel Creation",
            "description": "Professional video production, showreel creation, corporate videos, and motion graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Photography",
            "description": "Commercial photography, product photography, corporate headshots, and event photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Graphic Design & Branding",
            "description": "Brand identity design, logo creation, print design, and digital graphics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Development",
            "description": "Responsive web design, e-commerce development, and custom web applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Design & UI/UX",
            "description": "Mobile app design, user interface design, and user experience optimization"
          }
        }
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Farhan Studio",
    "image": "https://farhanstudio.ie/logo.png",
    "@id": "https://farhanstudio.ie",
    "url": "https://farhanstudio.ie",
    "telephone": "+353-1-234-5678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dublin",
      "addressLocality": "Dublin",
      "addressCountry": "IE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/farhanstudio",
      "https://www.linkedin.com/company/farhanstudio"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}