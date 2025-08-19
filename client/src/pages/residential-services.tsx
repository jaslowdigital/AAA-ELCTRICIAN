import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, CheckCircle, Clock, Shield } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { RESIDENTIAL_SERVICES } from '@/data/services';

export default function ResidentialServices() {
  const handleCallClick = () => {
    trackEvent('phone_call', 'contact', 'residential_services');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Residential Electrical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional home electrical services from licensed electricians. 
            From panel upgrades to smart home installations, we handle all your residential electrical needs.
          </p>
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-gray-600">4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-gray-600">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">24/7 Emergency</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {RESIDENTIAL_SERVICES.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <Badge variant="secondary">{service.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Starting at:</span>
                    <span className="font-semibold text-green-600">{service.basePrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Duration:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCallClick}>
                    <Phone className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Residential Services?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">All electricians fully licensed and insured for your protection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Same-Day Service</h3>
              <p className="text-gray-600">Most residential electrical services completed same day</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all residential work</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Top-Rated Service</h3>
              <p className="text-gray-600">4.9-star average rating from thousands of homeowners</p>
            </div>
          </div>
        </div>

        {/* Emergency Services Callout */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Electrical Emergency? We're Here 24/7!
            </h3>
            <p className="text-red-700 mb-6">
              Don't wait when electrical safety is at risk. Our emergency electricians respond within 1 hour.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" onClick={handleCallClick}>
              <Phone className="w-5 h-5 mr-2" />
              Emergency Service: (800) AAA-ELEC
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free estimate on your residential electrical project.
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
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}