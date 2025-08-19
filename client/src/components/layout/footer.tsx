import { Link } from 'wouter';
import { Phone, Mail, MapPin, Zap, Facebook, Twitter, Instagram } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Footer() {
  const handleCallClick = () => {
    trackEvent('phone_call', 'footer', 'call_button');
  };

  const handleEmailClick = () => {
    trackEvent('email_contact', 'footer', 'email_link');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">AAA</span>
                <span className="text-xl font-bold text-blue-400">Electrician</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              America's most trusted electrical service provider. Licensed, insured, 
              and serving all 50 states with 24/7 emergency service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/residential-services">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Residential Electrical</span>
                </Link>
              </li>
              <li>
                <Link href="/commercial-services">
                  <span className="text-gray-300 hover:text-white cursor-pointer">Commercial Electrical</span>
                </Link>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">Emergency Service</span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">Panel Upgrades</span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">Smart Home Installation</span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">Lighting Installation</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/service-areas">
                  <span className="text-gray-300 hover:text-white cursor-pointer">All 50 States</span>
                </Link>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">California</span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">Texas</span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">Florida</span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white cursor-pointer">New York</span>
              </li>
              <li>
                <Link href="/service-areas">
                  <span className="text-gray-300 hover:text-white cursor-pointer">View All Areas</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center cursor-pointer" onClick={handleCallClick}>
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-300 hover:text-white">(800) AAA-ELEC</span>
              </div>
              <div className="flex items-center cursor-pointer" onClick={handleEmailClick}>
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300 hover:text-white">info@aaaelectrician.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">Nationwide Service</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-red-800 rounded-lg">
              <h4 className="font-semibold text-white mb-2">Emergency Service</h4>
              <p className="text-red-100 text-sm mb-3">
                Electrical emergency? We're available 24/7!
              </p>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium w-full"
                onClick={handleCallClick}
              >
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} AAA Electrician. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy">
                <span className="text-gray-400 hover:text-white text-sm cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="text-gray-400 hover:text-white text-sm cursor-pointer">Terms of Service</span>
              </Link>
              <span className="text-gray-400 text-sm">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}