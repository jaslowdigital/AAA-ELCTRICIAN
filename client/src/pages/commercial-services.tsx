import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, CheckCircle, Clock, Shield, Building } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { COMMERCIAL_SERVICES } from '@/data/services';

export default function CommercialServices() {
  const handleCallClick = () => {
    trackEvent('phone_call', 'contact', 'commercial_services');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Commercial Electrical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional commercial electrical solutions for businesses, offices, and industrial facilities. 
            Licensed electricians experienced in complex commercial electrical systems.
          </p>
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex items-center">
              <Building className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">Business Focused</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-gray-600">Licensed & Bonded</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-gray-600">Minimal Downtime</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {COMMERCIAL_SERVICES.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <Badge variant="secondary">{service.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">Starting at:</span>
                    <div className="font-semibold text-green-600">{service.basePrice}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Duration:</span>
                    <div className="font-medium">{service.duration}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" onClick={handleCallClick}>
                    <Phone className="w-4 h-4 mr-2" />
                    Request Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commercial Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Businesses Choose AAA Electrician
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Commercial Experience</h3>
              <p className="text-gray-600">Specialized in complex commercial electrical systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Minimal Downtime</h3>
              <p className="text-gray-600">Work around your schedule to minimize business disruption</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fully Bonded</h3>
              <p className="text-gray-600">Licensed, insured, and bonded for commercial work</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Trusted by hundreds of businesses nationwide</p>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industries We Serve
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Office Buildings', 'Retail Stores', 'Restaurants', 'Warehouses',
              'Manufacturing', 'Healthcare', 'Education', 'Hospitality',
              'Data Centers', 'Government', 'Non-Profit', 'Multi-Family'
            ].map((industry, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Services Callout */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Commercial Electrical Emergency?
            </h3>
            <p className="text-red-700 mb-6">
              Business electrical emergencies can't wait. Our commercial electricians respond 24/7 
              to get your business back up and running quickly.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700" onClick={handleCallClick}>
              <Phone className="w-5 h-5 mr-2" />
              Emergency Commercial Service
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our commercial electrical specialists for a detailed quote and project consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700"
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
              Request Project Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}