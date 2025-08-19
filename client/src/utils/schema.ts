import { businessInfo } from '@/data/business-info';
import { Service } from '@/data/services';
import { Location, City } from '@/data/locations';

export const generateLocalBusinessSchema = (location?: Location, city?: City) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": businessInfo.name,
  "description": businessInfo.description,
  "telephone": businessInfo.phone,
  "email": businessInfo.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": businessInfo.address.street,
    "addressLocality": city?.name || businessInfo.address.city,
    "addressRegion": location?.stateCode || businessInfo.address.state,
    "postalCode": businessInfo.address.zip,
    "addressCountry": businessInfo.address.country
  },
  "geo": city ? {
    "@type": "GeoCoordinates",
    "latitude": city.coordinates[0].toString(),
    "longitude": city.coordinates[1].toString()
  } : {
    "@type": "GeoCoordinates",
    "latitude": businessInfo.coordinates.latitude.toString(),
    "longitude": businessInfo.coordinates.longitude.toString()
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "priceRange": "$$",
  "serviceArea": city ? {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates[0].toString(),
      "longitude": city.coordinates[1].toString()
    },
    "geoRadius": "50"
  } : undefined,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1247"
  }
});

export const generateServiceSchema = (service: Service, location?: Location, city?: City) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.overview,
  "provider": {
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "telephone": businessInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city?.name || businessInfo.address.city,
      "addressRegion": location?.stateCode || businessInfo.address.state
    }
  },
  "serviceType": service.category === 'residential' ? 'Residential Electrical Services' : 'Commercial Electrical Services',
  "areaServed": city ? {
    "@type": "City",
    "name": city.name,
    "containedInPlace": {
      "@type": "State",
      "name": location?.state
    }
  } : undefined
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});
