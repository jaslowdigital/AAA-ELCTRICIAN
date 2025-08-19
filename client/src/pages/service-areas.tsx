import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Users, Star } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { STATES, MAJOR_CITIES } from '@/data/locations';
import { Link } from 'wouter';

export default function ServiceAreas() {
  const handleCallClick = () => {
    trackEvent('phone_call', 'service_areas', 'coverage_inquiry');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Nationwide Electrical Service Coverage
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            AAA Electrician proudly serves customers across all 50 states and 300+ major cities. 
            Our network of licensed, local electricians provides consistent quality and rapid response times nationwide.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-600">All 50 States</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-gray-600">300+ Cities</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-gray-600">24/7 Service</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-gray-600">Local Expertise</span>
            </div>
          </div>
        </div>

        {/* Major Cities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Major Metropolitan Areas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {MAJOR_CITIES.map((city) => (
              <Card key={`${city.name}-${city.state}`} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{city.name}</CardTitle>
                    <Badge variant="secondary">{city.state}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Population:</span>
                      <span className="font-medium">{city.population.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Avg Response:</span>
                      <span className="font-medium text-green-600">{city.avgResponse}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm text-gray-500 block mb-2">Service Areas:</span>
                      <div className="flex flex-wrap gap-1">
                        {city.serviceAreas.slice(0, 3).map((area, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                        {city.serviceAreas.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{city.serviceAreas.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 block mb-2">Electrical Codes:</span>
                      <div className="flex flex-wrap gap-1">
                        {city.electricalCodes.map((code, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {code}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCallClick}>
                      <Phone className="w-4 h-4 mr-2" />
                      Service in {city.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All States */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete State Coverage
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATES.map((state) => (
              <Card key={state.code} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{state.name}</CardTitle>
                    <Badge>{state.code}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-500 block mb-1">License Type:</span>
                      <span className="font-medium text-sm">{state.electricalLicense}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block mb-1">Permit Required:</span>
                      <Badge variant={state.permitRequired ? "default" : "secondary"} className="text-xs">
                        {state.permitRequired ? 'Yes' : 'No'}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block mb-2">Major Cities:</span>
                      <div className="space-y-1">
                        {state.cities.map((city, index) => (
                          <div key={index} className="text-sm">
                            <span className="font-medium">{city.name}</span>
                            <span className="text-gray-500 ml-2">({city.population.toLocaleString()})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white" onClick={handleCallClick}>
                      <Phone className="w-4 h-4 mr-2" />
                      Service in {state.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Guarantee */}
        <div className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Consistent Quality, Everywhere
              </h3>
              <p className="text-blue-800 mb-6 max-w-3xl mx-auto">
                No matter where you're located, you'll receive the same high-quality electrical 
                services that have made AAA Electrician America's most trusted electrical contractor. 
                Our local electricians are trained to our national standards and follow consistent 
                safety protocols and quality procedures.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-1">10,000+</div>
                  <div className="text-blue-700 text-sm">Satisfied Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-1">4.9/5</div>
                  <div className="text-blue-700 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-1">45min</div>
                  <div className="text-blue-700 text-sm">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900 mb-1">100%</div>
                  <div className="text-blue-700 text-sm">Licensed & Insured</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Local Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Local Knowledge, National Standards
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Local Electrical Codes</h3>
              <p className="text-gray-600">Expert knowledge of local electrical codes and permit requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Response Times</h3>
              <p className="text-gray-600">Local teams provide rapid response for emergency and scheduled services</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community Focused</h3>
              <p className="text-gray-600">Building lasting relationships with customers and communities we serve</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Excellence</h3>
              <p className="text-gray-600">Consistent 5-star service quality maintained across all locations</p>
            </div>
          </div>
        </div>

        {/* Location-Specific Services Message */}
        <div className="bg-gray-800 text-white rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Don't See Your Area Listed?
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              We serve many more cities and towns beyond those highlighted above. 
              Our extensive network covers virtually every corner of America. 
              Call us to confirm service availability in your specific location.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={handleCallClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Check Service Availability
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Expert Electrical Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact your local AAA Electrician team today for fast, professional electrical services.
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
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}