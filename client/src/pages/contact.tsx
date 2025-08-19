import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleCallClick = () => {
    trackEvent('phone_call', 'contact', 'contact_page');
  };

  const handleEmailClick = () => {
    trackEvent('email_contact', 'contact', 'contact_page');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submit', 'contact', 'contact_form');
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Contact AAA Electrician
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your electrical project? Contact our team of licensed electricians 
            for a free consultation and estimate. Available 24/7 for emergency services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleCallClick}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Call Us Now</h3>
                      <p className="text-orange-600 font-medium text-xl">(800) AAA-ELEC</p>
                      <p className="text-gray-600 text-sm">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmailClick}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Email Us</h3>
                      <p className="text-blue-600 font-medium">info@aaaelectrician.com</p>
                      <p className="text-gray-600 text-sm">Response within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Service Coverage</h3>
                      <p className="text-gray-600">All 50 States, 300+ Cities</p>
                      <p className="text-gray-600 text-sm">Nationwide electrical services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Business Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 7:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Sat-Sun: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Emergency service available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <MessageSquare className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="font-bold text-red-800">Electrical Emergency?</h3>
              </div>
              <p className="text-red-700 mb-4">
                Don't wait! Electrical emergencies require immediate attention. 
                Our emergency electricians are available 24/7.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={handleCallClick}>
                <Phone className="w-4 h-4 mr-2" />
                Emergency Service Now
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Estimate</CardTitle>
                <p className="text-gray-600">
                  Fill out this form and we'll contact you within 2 hours with your free estimate.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service...</option>
                      <option value="panel-upgrade">Electrical Panel Upgrade</option>
                      <option value="outlet-installation">Outlet Installation</option>
                      <option value="lighting-installation">Lighting Installation</option>
                      <option value="ceiling-fan">Ceiling Fan Installation</option>
                      <option value="gfci-installation">GFCI Installation</option>
                      <option value="smart-home">Smart Home Automation</option>
                      <option value="commercial">Commercial Electrical</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your electrical project or service needs..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Get My Free Estimate
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to receive communications from AAA Electrician. 
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving All 50 States
            </h2>
            <p className="text-gray-600">
              Professional electrical services available in every state and major city across America
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              'California', 'Texas', 'Florida', 'New York', 'Pennsylvania',
              'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan',
              'New Jersey', 'Virginia', 'Washington', 'Arizona', 'Massachusetts',
              'Tennessee', 'Indiana', 'Maryland', 'Missouri', 'Wisconsin'
            ].map((state, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">{state}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline">
              View All Service Areas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}