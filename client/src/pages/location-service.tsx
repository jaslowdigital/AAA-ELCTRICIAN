import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Clock, Star, MapPin, CheckCircle, Users } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { getServiceBySlug, type ElectricalService } from '@/data/services';
import { STATES, type State, type City } from '@/data/locations';

// SEO Head component for location-specific pages
const LocationServiceSEO = ({ 
  service, 
  city, 
  state, 
  localInfo 
}: {
  service: ElectricalService;
  city: string;
  state: string;
  localInfo: any;
}) => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = `${service.name} in ${city}, ${state} | AAA Electrician - Licensed & Insured`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 
        `Professional ${service.name.toLowerCase()} services in ${city}, ${state}. Licensed electricians, 24/7 emergency service, free estimates. Serving ${localInfo?.serviceAreas?.join(', ')} and surrounding areas. Call now!`
      );
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `AAA Electrician - ${city}`,
      "image": "https://aaaelectrician.com/images/electrician-service.jpg",
      "@id": "",
      "url": `https://aaaelectrician.com/services/${service.slug}/${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase()}`,
      "telephone": "1-800-AAA-ELEC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Electric Ave",
        "addressLocality": city,
        "addressRegion": state,
        "postalCode": localInfo?.zipCodes?.[0] || "00000",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": localInfo?.coordinates?.lat || 0,
        "longitude": localInfo?.coordinates?.lng || 0
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://www.facebook.com/AAAElectrician",
        "https://www.instagram.com/AAAElectrician"
      ],
      "priceRange": service.basePrice,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Electrical Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.name,
              "description": service.description
            }
          }
        ]
      },
      "areaServed": {
        "@type": "City",
        "name": city,
        "containedInPlace": {
          "@type": "State",
          "name": state
        }
      }
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [service, city, state, localInfo]);

  return null;
};

export default function LocationServicePage() {
  const [, params] = useRoute('/services/:serviceSlug/:locationSlug');
  const [service, setService] = useState<ElectricalService | null>(null);
  const [locationInfo, setLocationInfo] = useState<{
    city: string;
    state: string;
    stateCode: string;
    localInfo: any;
  } | null>(null);

  useEffect(() => {
    if (!params?.serviceSlug || !params?.locationSlug) return;

    // Find the service
    const foundService = getServiceBySlug(params.serviceSlug);
    if (!foundService) return;
    setService(foundService);

    // Parse location from slug (e.g., "los-angeles-ca")
    const locationParts = params.locationSlug.split('-');
    const stateCode = locationParts.pop()?.toUpperCase();
    const cityName = locationParts.join(' ').replace(/\b\w/g, l => l.toUpperCase());

    // Find the state and city
    const state = STATES.find(s => s.code === stateCode);
    const city = state?.cities.find(c => c.name === cityName);

    if (state && city) {
      setLocationInfo({
        city: city.name,
        state: state.name,
        stateCode: state.code,
        localInfo: {
          population: city.population,
          serviceAreas: city.serviceAreas,
          emergencyZones: city.emergencyZones,
          regulations: city.localRegulations,
          electricalCode: state.electricalCode,
          licensingInfo: state.licensingInfo,
          coordinates: city.coordinates,
          zipCodes: city.zipCodes
        }
      });
    }
  }, [params]);

  const handleCallClick = () => {
    trackEvent('phone_call', 'contact', `${service?.name} - ${locationInfo?.city}`);
  };

  const handleQuoteClick = () => {
    trackEvent('quote_request', 'conversion', `${service?.name} - ${locationInfo?.city}`);
  };

  if (!service || !locationInfo) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The requested service or location could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <LocationServiceSEO 
        service={service}
        city={locationInfo.city}
        state={locationInfo.state}
        localInfo={locationInfo.localInfo}
      />

      {/* Hero Section */}
      <section className="bg-blue-900 dark:bg-blue-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name} in {locationInfo.city}, {locationInfo.state}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Licensed & Insured Electrical Contractors Serving {locationInfo.city} and Surrounding Areas
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white"
                onClick={handleCallClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (800) AAA-ELEC
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900"
                onClick={handleQuoteClick}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professional {service.name} Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                {service.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{service.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Local Service</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Licensed Team</span>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <p className="text-orange-800 dark:text-orange-200 font-semibold">
                  Starting at {service.basePrice}
                </p>
                <p className="text-orange-600 dark:text-orange-300 text-sm">
                  Emergency service: {service.emergencyPrice}
                </p>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Service Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Serving {locationInfo.city}, {locationInfo.state}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {locationInfo.localInfo.serviceAreas.map((area: string, index: number) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">• {area}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Zones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {locationInfo.localInfo.emergencyZones.map((zone: string, index: number) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">• {zone}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Local Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Population:</strong> {locationInfo.localInfo.population.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Electrical Code:</strong> {locationInfo.localInfo.electricalCode}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Local Regulations:</strong> {locationInfo.localInfo.regulations}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our {service.name} Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.processSteps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center">
                    <Badge variant="default" className="mr-3 w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </Badge>
                    <CardTitle className="text-lg">Step {index + 1}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 dark:bg-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need {service.name} in {locationInfo.city}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact AAA Electrician today for professional electrical services you can trust.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700"
              onClick={handleCallClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (800) AAA-ELEC
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900"
              onClick={handleQuoteClick}
            >
              Get Your Free Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}