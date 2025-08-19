import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleCallClick = () => {
    trackEvent('phone_call', 'header', 'call_button');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Residential Services', href: '/residential-services' },
    { name: 'Commercial Services', href: '/commercial-services' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/' && location === '/') return true;
    if (href !== '/' && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">AAA</span>
                <span className="text-xl font-bold text-blue-600">Electrician</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                    isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <Button 
            className="hidden md:flex bg-orange-600 hover:bg-orange-700 text-white"
            onClick={handleCallClick}
          >
            <Phone className="w-4 h-4 mr-2" />
            (800) AAA-ELEC
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`text-base font-medium transition-colors hover:text-blue-600 cursor-pointer block ${
                      isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white w-full mt-4"
                onClick={handleCallClick}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (800) AAA-ELEC
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}