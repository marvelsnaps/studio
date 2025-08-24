import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Video, User, Building, Plane, Film, Package, Users, Sparkles, Eye } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';

const Services = () => {
  const { navigateWithLoader } = useNavigation();

  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capture your special day with stunning wedding photography that tells your unique love story.',
      features: ['Pre-wedding shoots', 'Ceremony coverage', 'Reception photography', 'Couple portraits'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
      category: 'wedding',
      icon: Heart,
      price: 'Starting from ₹25,000'
    },
    {
      title: 'Pre & Post Wedding Photoshoots',
      description: 'Beautiful pre and post-wedding sessions to capture your journey as a couple.',
      features: ['Pre-wedding shoots', 'Romantic sessions', 'Location shoots', 'Styled photography'],
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
      category: 'wedding',
      icon: Heart,
      price: 'Starting from ₹15,000'
    },
    {
      title: 'Candid Photography & Videography',
      description: 'Natural, unposed moments captured beautifully with both photography and videography.',
      features: ['Candid moments', 'Natural expressions', 'Event documentation', 'Video highlights'],
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600',
      category: 'candid',
      icon: Camera,
      price: 'Starting from ₹20,000'
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portrait photography for individuals and families.',
      features: ['Individual portraits', 'Family sessions', 'Professional headshots', 'Lifestyle photography'],
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600',
      category: 'portrait',
      icon: User,
      price: 'Starting from ₹8,000'
    },
    {
      title: 'Model Shoots',
      description: 'Professional model photography for portfolios and fashion shoots.',
      features: ['Fashion photography', 'Portfolio building', 'Beauty shots', 'Creative concepts'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616c1e6b623?w=600',
      category: 'model',
      icon: Sparkles,
      price: 'Starting from ₹12,000'
    },
    {
      title: 'Event Videography',
      description: 'Professional videography services for all types of events and celebrations.',
      features: ['Event documentation', 'Highlight reels', 'Live streaming', 'Multi-camera setup'],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600',
      category: 'videography',
      icon: Video,
      price: 'Starting from ₹18,000'
    },
    {
      title: 'Baby Photography',
      description: 'Precious moments with your little ones captured beautifully.',
      features: ['Newborn photography', 'Baby milestones', 'Family portraits', 'Maternity shoots'],
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600',
      category: 'baby',
      icon: Heart,
      price: 'Starting from ₹10,000'
    },
    {
      title: 'Corporate Photography',
      description: 'Professional corporate photography for businesses and organizations.',
      features: ['Corporate events', 'Team photography', 'Office documentation', 'Business portraits'],
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600',
      category: 'corporate',
      icon: Building,
      price: 'Starting from ₹15,000'
    },
    {
      title: 'Drone Shoots',
      description: 'Aerial photography and videography services for breathtaking perspectives.',
      features: ['Aerial shots', 'Real estate photography', 'Event coverage', 'Landscape photography'],
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600',
      category: 'drone',
      icon: Plane,
      price: 'Starting from ₹12,000'
    },
    {
      title: 'Ad Films',
      description: 'Professional advertising films and commercial video production.',
      features: ['Commercial videos', 'Brand campaigns', 'Product showcases', 'Promotional content'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600',
      category: 'commercial',
      icon: Film,
      price: 'Starting from ₹30,000'
    },
    {
      title: 'Product Photography',
      description: 'High-quality product photography for e-commerce and marketing.',
      features: ['Product showcases', 'E-commerce photography', 'Catalog shoots', 'Creative styling'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      category: 'product',
      icon: Package,
      price: 'Starting from ₹5,000'
    }
  ];

  const handleViewPhotos = (category: string) => {
    navigateWithLoader(`/service-gallery?category=${category}`);
  };

  const handleBooking = () => {
    navigateWithLoader('/contact');
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of professional photography services tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-marvel-yellow rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-marvel-yellow transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="list-disc pl-5 text-gray-600 text-sm mb-4 space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="transition-colors duration-300 hover:text-marvel-yellow">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <span className="text-lg font-bold text-marvel-yellow">
                      {service.price}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button 
                      onClick={() => handleViewPhotos(service.category)}
                      className="w-full bg-marvel-yellow text-black hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Photos
                    </Button>
                    <Button 
                      onClick={handleBooking}
                      variant="outline"
                      className="w-full border-marvel-yellow text-marvel-yellow hover:bg-marvel-yellow hover:text-black transition-all duration-300 hover:scale-105"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
