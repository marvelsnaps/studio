
import React, { useState } from 'react';
import { Camera, Calendar, MapPin, Users, Award, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigation } from '@/contexts/NavigationContext';
import FeedbackForm from '@/components/FeedbackForm';
import { StaggerTestimonials } from '@/components/ui/stagger-testimonials';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Heart } from 'lucide-react';
import center from '@/assest/images/center.jpeg'; 
import left from '@/assest/images/left.jpeg';
import right from '@/assest/images/right.jpeg';

const Home = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { navigateWithLoader } = useNavigation();
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  rating: '', // Added rating as a string
    date: '',
    category: '',
    eventDetails: '',
    personNames: '',
    duration: '',
    time: '',
    venue: '',
    message: '',
    acceptTerms: false
  });

  // Helper function to dynamically import service gallery images
  const importImage = (path: string) => {
    try {
      return new URL(`../assest/service gallery/${path}`, import.meta.url).href;
    } catch (error) {
      console.error(`Failed to load image: ${path}`, error);
      return '/placeholder.svg';
    }
  };

  const services = [
    { 
      title: 'Wedding Shoots', 
      icon: Heart, 
      description: 'Capture your special day with elegance',
      images: [
        importImage('wedding/w1.jpeg'),
        importImage('wedding/w2.jpeg'),
        importImage('wedding/w4.jpeg'),
        importImage('wedding/w5.jpeg'),
        importImage('wedding/w6.jpeg')
      ]
    },
    { 
      title: 'Event Shoots', 
      icon: Camera, 
      description: 'Professional event photography',
      images: [
        importImage('candit/c2.jpeg'),
        importImage('candit/c3.jpeg'),
        importImage('candit/c4.jpeg'),
        importImage('candit/c5.jpg')
      ]
    },
    { 
      title: 'Drone Shoots', 
      icon: Play, 
      description: 'Aerial photography and videography',
      images: [
        importImage('drone/d1.jpeg'),
        importImage('drone/d2.jpeg'),
        importImage('drone/d3.jpeg'),
        importImage('drone/d4.jpeg'),
        importImage('drone/d5.jpeg')
      ]
    },
    { 
      title: 'Videography', 
      icon: Play, 
      description: 'Cinematic video production',
      images: [
        importImage('model pics/m1.jpg'),
        importImage('model pics/m2.jpg'),
        importImage('model pics/m3.jpg'),
        importImage('model pics/m4.jpg'),
        importImage('Pre and Post wedding/m2.jpeg')
      ]
    },
    { 
      title: 'Baby Shoots', 
      icon: Heart, 
      description: 'Precious moments with your little ones',
      images: [
        importImage('baby/b1.jpeg'),
        importImage('baby/b2.jpeg'),
        importImage('baby/b3.jpeg'),
        importImage('baby/b4.jpeg'),
        importImage('baby/b5.jpeg')
      ]
    },
    { 
      title: 'Ad Films', 
      icon: Camera, 
      description: 'Commercial photography and films',
      images: [
        importImage('corp/c1.jpeg'),
        importImage('corp/c2.jpeg'),
        importImage('corp/c3.jpeg'),
        importImage('corp/c4.jpeg'),
        importImage('corp/c5.jpeg')
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Weddings Captured' },
    { number: '150+', label: 'Commercial Shoots' },
    { number: '1000+', label: 'Happy Clients' }
  ];

  const galleryImages = [
    // Wedding Images
    importImage('wedding/w1.jpeg'),
    importImage('wedding/w2.jpeg'),
    importImage('wedding/w4.jpeg'),
    importImage('wedding/w5.jpeg'),
    importImage('wedding/w6.jpeg'),
    
    // Pre and Post Wedding Images
    importImage('Pre and Post wedding/m2.jpeg'),
    importImage('Pre and Post wedding/m3.jpeg'),
    importImage('Pre and Post wedding/m4.jpeg'),
    
    // Candid Images
    importImage('candit/c1.jpeg'),
    importImage('candit/c2.jpeg'),
    importImage('candit/c3.jpeg'),
    importImage('candit/c4.jpeg'),
    importImage('candit/c5.jpg'),
    importImage('candit/c6.jpeg'),
    
    // Model Images
    importImage('model pics/m1.jpg'),
    importImage('model pics/m2.jpg'),
    importImage('model pics/m3.jpg'),
    importImage('model pics/m4.jpg'),
    
    // Baby Images
    importImage('baby/b1.jpeg'),
    importImage('baby/b2.jpeg'),
    importImage('baby/b3.jpeg'),
    importImage('baby/b4.jpeg'),
    importImage('baby/b5.jpeg'),
    importImage('baby/b6.jpeg'),
    importImage('baby/b7.jpeg'),
    importImage('baby/b8.jpeg')
  ];

  const handleNavigation = (url: string) => {
    navigateWithLoader(url);
  };

  const handleBookingSubmit = () => {
    const message = `New Booking Request from Marvel Snaps Website
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formData.date}
Category: ${formData.category}
Event Details: ${formData.eventDetails}
Person Names: ${formData.personNames}
Duration: ${formData.duration}
Time: ${formData.time}
Venue: ${formData.venue}
Additional Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/918098449639?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/lovable-uploads/1062a8ed-c8c5-471b-86e8-f96695647fb1.png")'
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-marvel-yellow curved-section-outward">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">
            Welcome to Marvel Snaps
          </h2>
          
          <div className="grid grid-cols-3 gap-2 md:gap-8 mb-12">
            <div className="hover-lift">
              <img 
                src={left}
                alt="Photography 1"
                className="w-full h-64 md:h-[31rem] object-cover rounded-lg shadow-lg transform rotate-3"
              />
            </div>
            <div className="hover-lift">
              <img 
                src={center}
                alt="Photography 2"
                className="w-full h-64 md:h-[31rem] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="hover-lift">
              <img 
                src={right}
                alt="Photography 3"
                className="w-full h-64 md:h-[31rem] object-cover rounded-lg shadow-lg transform -rotate-3"
              />
            </div>
          </div>

          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            We are passionate storytellers dedicated to capturing your precious moments through our lens. 
            Every photograph is a window to a beautiful memory, crafted with love and artistic vision.
          </p>

          <Button 
            onClick={() => handleNavigation('/about')}
            className="bg-black text-white hover:bg-gray-800 px-8 py-3"
          >
            View Our Story
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="hover-lift bg-marvel-yellow rounded-lg p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-black text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
  <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional photography and videography services tailored to capture your most precious moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift cursor-pointer group overflow-hidden">
                <CardContent className="p-0 relative">
                  {/* Icon positioned at top-left */}
                  <div className="absolute top-3 left-3 z-10 w-10 h-10 bg-marvel-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="h-5 w-5 text-black" />
                  </div>
                  
                  {/* Bento grid layout for images */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <div className="grid grid-cols-3 grid-rows-3 gap-0.5 h-full">
                      {/* Large image taking 2x2 grid */}
                      <div className="col-span-2 row-span-2 overflow-hidden">
                        <img 
                          src={service.images[0]} 
                          alt={`${service.title} 1`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      
                      {/* Top right image */}
                      <div className="col-span-1 row-span-1 overflow-hidden">
                        <img 
                          src={service.images[1]} 
                          alt={`${service.title} 2`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      
                      {/* Middle right image */}
                      <div className="col-span-1 row-span-1 overflow-hidden">
                        <img 
                          src={service.images[2]} 
                          alt={`${service.title} 3`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      
                      {/* Bottom left image */}
                      <div className="col-span-1 row-span-1 overflow-hidden">
                        <img 
                          src={service.images[3]} 
                          alt={`${service.title} 4`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      
                      {/* Bottom middle image */}
                      <div className="col-span-1 row-span-1 overflow-hidden">
                        <img 
                          src={service.images[4]} 
                          alt={`${service.title} 5`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      
                      {/* Bottom right empty space for better visual balance */}
                      <div className="col-span-1 row-span-1"></div>
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => handleNavigation('/services')}
              className="bg-marvel-yellow text-black hover:bg-yellow-400 px-8 py-3"
            >
              View More Services
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Gallery
            </h2>
            <p className="text-lg text-gray-600">A glimpse into our portfolio of captured moments</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {galleryImages.slice(0, 10).map((image, index) => (
              <div key={index} className="hover-lift cursor-pointer overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => handleNavigation('/gallery')}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3"
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their amazing experiences with Marvel Snaps
            </p>
          </div>
          <StaggerTestimonials />

          {/* Feedback CTA: appears directly below testimonials on Home only */}
          <div className="mt-10 flex justify-center">
            <div className="max-w-2xl w-full bg-gradient-to-r from-yellow-50 to-white rounded-xl p-6 shadow-lg flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-2">Share your experience</h3>
              <p className="text-gray-600 mb-4 text-center">Loved our work? Leave a quick review — it helps others and us.</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105 shadow-md px-4 py-2 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-300">
                    <Heart className="h-5 w-5" />
                    <span className="font-semibold">Write Feedback</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Write Feedback</DialogTitle>
                  </DialogHeader>
                  <div className="pt-2">
                    <FeedbackForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-marvel-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create beautiful memories together
          </p>
          
          {!showBookingForm ? (
            <Button 
              onClick={() => setShowBookingForm(true)}
              className="bg-marvel-yellow text-black hover:bg-yellow-400 text-lg px-8 py-3"
            >
              Book Now
            </Button>
          ) : (
            <div className="bg-white text-black rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Booking Form</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Input
                  placeholder="Email (optional)"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Input
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <Input
                  placeholder="Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
                <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Category *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding Shoots</SelectItem>
                    <SelectItem value="event">Event Shoots</SelectItem>
                    <SelectItem value="drone">Drone Shoots</SelectItem>
                    <SelectItem value="videography">Videography</SelectItem>
                    <SelectItem value="baby">Baby Shoots</SelectItem>
                    <SelectItem value="commercial">Ad Films</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                />
                <Input
                  placeholder="Time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
                <Input
                  placeholder="Person Names (optional)"
                  value={formData.personNames}
                  onChange={(e) => setFormData({...formData, personNames: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <Input
                  placeholder="Place/Venue"
                  value={formData.venue}
                  onChange={(e) => setFormData({...formData, venue: e.target.value})}
                  className="mb-4"
                />
                <Textarea
                  placeholder="Event Details"
                  value={formData.eventDetails}
                  onChange={(e) => setFormData({...formData, eventDetails: e.target.value})}
                  className="mb-4"
                />
                <Textarea
                  placeholder="Additional Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <Checkbox 
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked as boolean})}
                />
                <label htmlFor="terms" className="text-sm">
                  I accept the Terms & Conditions
                </label>
              </div>
              <Button 
                onClick={handleBookingSubmit}
                disabled={!formData.name || !formData.phone || !formData.category || !formData.acceptTerms}
                className="w-full bg-marvel-yellow text-black hover:bg-yellow-400"
              >
                Book Now
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
