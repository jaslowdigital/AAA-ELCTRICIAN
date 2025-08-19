import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Phone, Shield, Clock, CheckCircle, Zap, Award, Users } from 'lucide-react';
import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';
import QuoteForm from '@/components/forms/quote-form';
import { RESIDENTIAL_SERVICES, COMMERCIAL_SERVICES } from '@/data/services';
import { MAJOR_CITIES } from '@/data/locations';

export default function Home() {
  const handleCallClick = () => {
    trackEvent('phone_call', 'homepage', 'hero_cta');
  };

  const featuredServices = [...RESIDENTIAL_SERVICES.slice(0, 3), ...COMMERCIAL_SERVICES.slice(0, 3)];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              America's Most Trusted <span className="text-orange-400">Electrical Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Licensed electricians serving all 50 states with 24/7 emergency service. 
              From panel upgrades to smart home automation - we do it all.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
                onClick={handleCallClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (800) AAA-ELEC
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4"
              >
                Get Free Estimate
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                <span>24/7 Emergency</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                <span>10,000+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple outlet installations to complex commercial projects, 
              our licensed electricians handle every electrical need with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      service.category === 'residential' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-green-100 text-green-600'
                    }`}>
                      {service.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-green-600">{service.basePrice}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCallClick}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/residential-services">
                <Button variant="outline" size="lg">
                  View All Residential Services
                </Button>
              </Link>
              <Link href="/commercial-services">
                <Button variant="outline" size="lg">
                  View All Commercial Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why 10,000+ Customers Trust AAA Electrician
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference that comes with America's premier electrical service provider.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">All electricians fully licensed in all 50 states and comprehensively insured</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock emergency response with average 45-minute arrival time</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all work with comprehensive warranty coverage</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600">Serving all 50 states and 300+ major cities with consistent quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All 50 States
            </h2>
            <p className="text-xl text-gray-600">
              Professional electrical services available nationwide with local expertise in every market
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {MAJOR_CITIES.slice(0, 12).map((city, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-gray-900 mb-1">{city.name}</h3>
                  <p className="text-sm text-gray-600">{city.state}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/service-areas">
              <Button variant="outline" size="lg">
                View All Service Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Free Electrical Quote
              </h2>
              <p className="text-xl text-gray-600">
                Ready to start your electrical project? Get a detailed quote from our experts.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Zap className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">
              Electrical Emergency? We're Here 24/7!
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait when electrical safety is at risk. Our emergency electricians 
              respond immediately to restore power and ensure your safety.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 text-lg px-8 py-4"
              onClick={handleCallClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Service: (800) AAA-ELEC
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}