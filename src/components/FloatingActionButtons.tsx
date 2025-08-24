
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButtons = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918098449639', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+918098449639', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Call Button */}
      <Button
        onClick={handleCall}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingActionButtons;
