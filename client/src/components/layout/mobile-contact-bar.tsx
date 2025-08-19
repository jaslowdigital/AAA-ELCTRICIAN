import { Phone, MessageSquare } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function MobileContactBar() {
  const handleCallClick = () => {
    trackEvent('phone_call', 'mobile_bar', 'call_button');
  };

  const handleMessageClick = () => {
    trackEvent('contact_form', 'mobile_bar', 'message_button');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40 md:hidden">
      <div className="flex">
        <button
          onClick={handleCallClick}
          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-4 flex items-center justify-center font-medium"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </button>
        <button
          onClick={handleMessageClick}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 flex items-center justify-center font-medium"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Get Quote
        </button>
      </div>
    </div>
  );
}