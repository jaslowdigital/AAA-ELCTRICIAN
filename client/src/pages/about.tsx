import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Phone, Users, Clock, Shield, Award } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function About() {
  const handleCallClick = () => {
    trackEvent('phone_call', 'contact', 'about');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About AAA Electrician
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            America's most trusted electrical service provider, serving all 50 states with 
            professional electrical solutions since 1995. Licensed, insured, and available 24/7.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">10,000+</div>
              <div className="text-gray-600 text-sm">Satisfied Customers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600 text-sm">Licensed & Insured</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Emergency Service</div>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Founded in 1995, AAA Electrician started as a small electrical contracting business 
                with a simple mission: provide reliable, professional electrical services with 
                honest pricing and exceptional customer care. From our humble beginnings serving 
                local communities, we've grown to become America's most trusted nationwide electrical service provider.
              </p>
              <p className="mb-6">
                Today, we proudly serve customers across all 50 states and 300+ major cities, 
                maintaining the same commitment to quality and customer satisfaction that has 
                defined us for nearly three decades. Our growth is built on referrals from 
                satisfied customers who trust us with their most important electrical needs.
              </p>
              <p>
                With over 10,000 successful projects completed, we've established ourselves as 
                the go-to electrical service provider for homeowners, businesses, and industrial 
                facilities nationwide. Our team of licensed, insured electricians brings decades 
                of combined experience to every project, large or small.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <CardTitle>Safety First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every electrical project begins with safety. We follow strict safety protocols, 
                  use quality materials, and ensure all work meets or exceeds electrical codes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <CardTitle>Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're not satisfied unless our customers are completely satisfied. Every 
                  project is completed to the highest standards with meticulous attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  <CardTitle>Integrity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Honest pricing, transparent communication, and reliable service. We build 
                  lasting relationships with customers based on trust and integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Certifications & Memberships
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Licensed in All 50 States',
              'NECA Member',
              'Better Business Bureau A+',
              'IBEW Affiliated',
              'OSHA Certified',
              'Bonded & Insured',
              'Background Checked',
              'Continuing Education'
            ].map((cert, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-0 flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-gray-900">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Expert Team
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Our electricians are the backbone of AAA Electrician. Each team member is:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fully Licensed</h3>
                    <p className="text-gray-600">Licensed electrical contractors in their respective states</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Extensively Trained</h3>
                    <p className="text-gray-600">Ongoing training in latest electrical technologies and codes</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Background Verified</h3>
                    <p className="text-gray-600">Thorough background checks for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Customer Focused</h3>
                    <p className="text-gray-600">Dedicated to providing exceptional customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the AAA Electrician Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust AAA Electrician for all their electrical needs.
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
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}