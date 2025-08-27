import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Camera, Heart, User, Building, Film, Package, Users, Sparkles, Eye, Check, Star, Crown, Diamond, X } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';

const Services = () => {
  const { navigateWithLoader } = useNavigation();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper function to dynamically import service gallery images
  const importImage = (path: string) => {
    try {
      return new URL(`../assest/service gallery/${path}`, import.meta.url).href;
    } catch (error) {
      console.error(`Failed to load image: ${path}`, error);
      return '/placeholder.svg';
    }
  };

  const weddingPackages = [
    {
      name: 'Silver Package',
      price: '₹55,000',
      description: 'Perfect for traditional ceremonies with essential coverage',
      icon: Star,
      gradient: 'from-gray-400 to-gray-600',
      borderColor: 'border-gray-300',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
      services: [
        'Traditional photo & video coverage',
        'Additional charges for outdoor videos'
      ],
      complementary: [
        '2 Photoframes',
        '2 Calendars',
        'WhatsApp wedding invitation',
        '1/2 kg wedding cake'
      ],
      terms: 'Outdoor photos up to 10km no charges. Above 10 km travel expense applicable.',
      popular: false
    },
    {
      name: 'Gold Package',
      price: '₹95,000',
      description: 'Complete coverage with both traditional and candid moments',
      icon: Crown,
      gradient: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-400',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
      services: [
        'Traditional photo & video coverage',
        'Candid photo & video coverage',
        'Complete event documentation'
      ],
      complementary: [
        '3 Photoframes',
        '2 Calendars',
        'WhatsApp wedding invitation',
        '1 kg cake'
      ],
      terms: 'Outdoor photos up to 10km no charges. Above 10 km travel expense applicable.',
      popular: true
    },
    {
      name: 'Diamond Package',
      price: '₹1,45,000',
      description: 'Luxury coverage with all premium features included',
      icon: Diamond,
      gradient: 'from-blue-400 to-purple-600',
      borderColor: 'border-blue-400',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600',
      services: [
        'Traditional photo & video coverage',
        'Candid photo & video coverage',
        'LED wall (8x6)',
        'Drone coverage',
        'Complete outdoor photos & videos'
      ],
      complementary: [
        '4 Photoframes',
        '2 Calendars',
        'WhatsApp wedding invitation',
        '1 kg wedding cake'
      ],
      terms: 'Outdoor photos up to 10km no charges. Above 10 km travel expense applicable.',
      popular: false
    }
  ];

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleBooking = () => {
    setIsModalOpen(false);
    navigateWithLoader('/contact');
  };

  const services = [
    {
      title: 'Pre & Post Wedding Photoshoots',
      description: 'Beautiful pre and post-wedding sessions to capture your journey as a couple.',
      features: ['Pre-wedding shoots', 'Post-wedding sessions', 'Romantic sessions', 'Location shoots', 'Styled photography'],
      image: importImage('Pre and Post wedding/m3.jpeg'),
      category: 'wedding',
      icon: Heart,
      price: '₹20,000/-'
    },
    {
      title: 'Candid Photography & Videography',
      description: 'Natural, unposed moments captured beautifully with both photography and videography.',
      features: ['Candid moments', 'Natural expressions', 'Event documentation', 'Video highlights', 'Cinematic storytelling'],
      image: importImage('candit/c1.jpeg'),
      category: 'candid',
      icon: Camera,
      price: '₹45,000/-'
    },
    {
      title: 'Portrait Sessions',
      description: 'Professional portrait photography for individuals and families.',
      features: ['Individual portraits', 'Family sessions', 'Professional headshots', 'Lifestyle photography'],
      image: importImage('portraits/p1.jpeg'),
      category: 'portrait',
      icon: User,
      price: '₹8,000/-'
    },
    {
      title: 'Model Shoots',
      description: 'Professional model photography for portfolios and fashion shoots.',
      features: ['Fashion photography', 'Portfolio building', 'Beauty shots', 'Creative concepts'],
      image: importImage('model pics/m1.jpg'),
      category: 'model',
      icon: Sparkles,
      price: '₹20,000/-'
    },
    {
      title: 'Baby Photo Shoot',
      description: 'Precious moments with your little ones captured beautifully.',
      features: ['Baby milestones', 'Family portraits', 'Maternity shoots'],
      image: importImage('baby/b1.jpeg'),
      category: 'baby',
      icon: Heart,
      price: '₹10,000/-'
    },
    {
      title: 'Corporate Shoot',
      description: 'Professional corporate photography for businesses and organizations.',
      features: ['Corporate events', 'Team photography', 'Office documentation', 'Business portraits'],
      image: importImage('corp/c1.jpeg'),
      category: 'corporate',
      icon: Building,
      price: 'Based on work'
    },
    {
      title: 'Ad Film',
      description: 'Professional advertising films and commercial video production.',
      features: ['Commercial videos', 'Brand campaigns', 'Product showcases', 'Promotional content'],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600',
      category: 'commercial',
      icon: Film,
      price: 'Based on work'
    },
    {
      title: 'Product Shoot',
      description: 'High-quality product photography for e-commerce and marketing.',
      features: ['Product showcases', 'E-commerce photography', 'Catalog shoots', 'Creative styling'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      category: 'product',
      icon: Package,
      price: '₹12,000/-'
    }
  ];

  const handleViewPhotos = (category: string) => {
    navigateWithLoader(`/service-gallery?category=${category}`);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wedding Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Wedding Photography Packages
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {weddingPackages.map((pkg, index) => (
              <div key={index} className="relative">
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-marvel-yellow text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <Card 
                  className={`relative hover-lift group overflow-hidden animate-scale-in cursor-pointer ${pkg.borderColor} border-2 ${pkg.popular ? 'ring-4 ring-marvel-yellow ring-opacity-50' : ''}`} 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handlePackageClick(pkg)}
                >
                
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${pkg.gradient} p-6 text-white relative overflow-hidden cursor-pointer`}>
                    <div className="absolute top-0 right-0 opacity-20">
                      <pkg.icon className="h-24 w-24" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <pkg.icon className="h-8 w-8 mr-3" />
                        <h4 className="text-2xl font-bold">{pkg.name}</h4>
                      </div>
                      <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                      <p className="text-white/90">{pkg.description}</p>
                      <div className="mt-4">
                        <Button 
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all duration-300"
                          size="sm"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            ))}
          </div>

          {/* Package Details Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center text-2xl">
                  {selectedPackage && (
                    <>
                      <div className={`w-10 h-10 bg-gradient-to-r ${selectedPackage.gradient} rounded-full flex items-center justify-center mr-3`}>
                        <selectedPackage.icon className="h-5 w-5 text-white" />
                      </div>
                      {selectedPackage.name}
                      <span className="ml-3 text-yellow-600">{selectedPackage.price}</span>
                    </>
                  )}
                </DialogTitle>
              </DialogHeader>
              
              {selectedPackage && (
                <div className="space-y-6">
                  <p className="text-gray-600">{selectedPackage.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-black mb-3 flex items-center">
                      <Camera className="h-4 w-4 mr-2 text-yellow-600" />
                      Services Included
                    </h5>
                    <ul className="space-y-2">
                      {selectedPackage.services.map((service, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-black mb-3 flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-yellow-600" />
                      Complementary Offerings
                    </h5>
                    <ul className="space-y-2">
                      {selectedPackage.complementary.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-black mb-2">Terms & Conditions</h5>
                    <p className="text-gray-600 text-sm">{selectedPackage.terms}</p>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={handleBooking}
                      className="flex-1 bg-marvel-yellow text-black hover:bg-yellow-400 transition-all duration-300"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button 
                      onClick={() => setIsModalOpen(false)}
                      variant="outline"
                      className="px-6"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Regular Services Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Other Photography Services
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography services for every occasion
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
                  <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="pl-0 text-gray-600 text-sm mb-4 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start transition-colors duration-300 hover:text-yellow-600">
                        <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-gray-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <span className="text-lg font-bold text-yellow-600">
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
                      onClick={() => navigateWithLoader('/contact')}
                      variant="outline"
                      className="w-full border-yellow-600 text-yellow-600 hover:bg-marvel-yellow hover:text-black transition-all duration-300 hover:scale-105"
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
