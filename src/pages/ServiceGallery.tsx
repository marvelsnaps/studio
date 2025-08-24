import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Helper function to dynamically import images
const importImage = (path: string) => {
  try {
    return new URL(`../assest/service gallery/${path}`, import.meta.url).href;
  } catch (error) {
    console.error(`Failed to load image: ${path}`, error);
    // Return a placeholder image or empty string if the image fails to load
    return '/placeholder.svg';
  }
};

const ServiceGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
    setImagesLoaded(true); // Mark images as loaded once component mounts
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'wedding', name: 'Weddings' },
    { id: 'candid', name: 'Candid' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'model', name: 'Model Shoots' },
    { id: 'videography', name: 'Videography' },
    { id: 'baby', name: 'Baby Photography' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'drone', name: 'Drone' },
    { id: 'commercial', name: 'Ad Films' },
    { id: 'product', name: 'Product' }
  ];

  // Gallery data with dynamic image imports
  const galleryImages = [
    // Wedding Images
    { url: importImage('wedding/w1.jpeg'), category: 'wedding', title: 'Wedding Ceremony' },
    { url: importImage('wedding/w2.jpeg'), category: 'wedding', title: 'Bridal Portrait' },
    { url: importImage('wedding/w4.jpeg'), category: 'wedding', title: 'Wedding Moments' },
    { url: importImage('wedding/w5.jpeg'), category: 'wedding', title: 'Wedding Reception' },
    { url: importImage('wedding/w6.jpeg'), category: 'wedding', title: 'Wedding Details' },
    { url: importImage('wedding/w7.jpeg'), category: 'wedding', title: 'Wedding Celebration' },
    
    // Pre and Post Wedding Images
    { url: importImage('Pre and Post wedding/m2.jpeg'), category: 'wedding', title: 'Pre-Wedding Shoot' },
    { url: importImage('Pre and Post wedding/m3.jpeg'), category: 'wedding', title: 'Couple Portrait' },
    { url: importImage('Pre and Post wedding/m4.jpeg'), category: 'wedding', title: 'Romantic Session' },
    { url: importImage('Pre and Post wedding/m5.jpeg'), category: 'wedding', title: 'Pre-Wedding Photography' },
    { url: importImage('Pre and Post wedding/m6.jpeg'), category: 'wedding', title: 'Post-Wedding Shoot' },
    
    // Candid Images
    { url: importImage('candit/c1.jpeg'), category: 'candid', title: 'Candid Moments' },
    { url: importImage('candit/c2.jpeg'), category: 'candid', title: 'Natural Expressions' },
    { url: importImage('candit/c3.jpeg'), category: 'candid', title: 'Candid Photography' },
    { url: importImage('candit/c4.jpeg'), category: 'candid', title: 'Spontaneous Shots' },
    { url: importImage('candit/c5.jpg'), category: 'candid', title: 'Candid Capture' },
    { url: importImage('candit/c6.jpeg'), category: 'candid', title: 'Natural Moments' },
    { url: importImage('candit/c7.jpeg'), category: 'candid', title: 'Candid Style' },
    { url: importImage('candit/c8.jpg'), category: 'candid', title: 'Authentic Moments' },
    { url: importImage('candit/c9.jpg'), category: 'candid', title: 'Candid Stories' },
    { url: importImage('candit/c10.jpg'), category: 'candid', title: 'Life Moments' },
    
    // Portrait Images
    { url: importImage('portraits/p1.jpeg'), category: 'portrait', title: 'Portrait Session' },
    { url: importImage('portraits/p2.jpeg'), category: 'portrait', title: 'Professional Portrait' },
    { url: importImage('portraits/p3.jpg'), category: 'portrait', title: 'Family Portrait' },
    { url: importImage('portraits/p4.jpeg'), category: 'portrait', title: 'Individual Portrait' },
    { url: importImage('portraits/p5.jpeg'), category: 'portrait', title: 'Portrait Photography' },
    { url: importImage('portraits/p6.jpg'), category: 'portrait', title: 'Portrait Art' },
    { url: importImage('portraits/p7.jpeg'), category: 'portrait', title: 'Studio Portrait' },
    { url: importImage('portraits/p8.jpg'), category: 'portrait', title: 'Creative Portrait' },
    
    // Model Images
    { url: importImage('model pics/m1.jpg'), category: 'model', title: 'Model Photography' },
    { url: importImage('model pics/m2.jpg'), category: 'model', title: 'Fashion Shoot' },
    { url: importImage('model pics/m3.jpg'), category: 'model', title: 'Model Portfolio' },
    { url: importImage('model pics/m4.jpg'), category: 'model', title: 'Beauty Photography' },
    { url: importImage('model pics/m5.jpeg'), category: 'model', title: 'Fashion Portrait' },
    { url: importImage('model pics/m6.jpeg'), category: 'model', title: 'Model Session' },
    { url: importImage('model pics/m7.jpeg'), category: 'model', title: 'Creative Model Shoot' },
    { url: importImage('model pics/m8.jpeg'), category: 'model', title: 'Professional Model' },
    { url: importImage('model pics/m9.jpeg'), category: 'model', title: 'Model Art' },
    
    // Baby Images
    { url: importImage('baby/b1.jpeg'), category: 'baby', title: 'Baby Photography' },
    { url: importImage('baby/b2.jpeg'), category: 'baby', title: 'Newborn Session' },
    { url: importImage('baby/b3.jpeg'), category: 'baby', title: 'Baby Portraits' },
    { url: importImage('baby/b4.jpeg'), category: 'baby', title: 'Baby Milestones' },
    { url: importImage('baby/b5.jpeg'), category: 'baby', title: 'Baby Moments' },
    { url: importImage('baby/b6.jpeg'), category: 'baby', title: 'Baby Art' },
    { url: importImage('baby/b7.jpeg'), category: 'baby', title: 'Baby Session' },
    { url: importImage('baby/b8.jpeg'), category: 'baby', title: 'Baby Photography' },
    { url: importImage('baby/b9.jpeg'), category: 'baby', title: 'Baby Love' },
    { url: importImage('baby/b10.jpeg'), category: 'baby', title: 'Baby Memories' },
    { url: importImage('baby/b11.jpeg'), category: 'baby', title: 'Baby Joy' },
    { url: importImage('baby/b12.jpeg'), category: 'baby', title: 'Baby Dreams' },
    { url: importImage('baby/b13.jpeg'), category: 'baby', title: 'Baby Smiles' },
    { url: importImage('baby/b14.jpg'), category: 'baby', title: 'Baby Wonder' },
    { url: importImage('baby/b15.jpg'), category: 'baby', title: 'Baby Magic' },
    { url: importImage('baby/b16.jpeg'), category: 'baby', title: 'Baby Bliss' },
    { url: importImage('baby/b17.jpeg'), category: 'baby', title: 'Baby Cuteness' },
    { url: importImage('baby/b18.jpeg'), category: 'baby', title: 'Baby Angels' },
    { url: importImage('baby/b19.jpeg'), category: 'baby', title: 'Baby Precious' },
    { url: importImage('baby/b20.jpeg'), category: 'baby', title: 'Baby Sweetness' },
    
    // Baby Shower Images
    { url: importImage('baby shower/bs1.jpg'), category: 'baby', title: 'Baby Shower Celebration' },
    { url: importImage('baby shower/bs2.jpg'), category: 'baby', title: 'Baby Shower Event' },
    { url: importImage('baby shower/bs3.jpeg'), category: 'baby', title: 'Baby Shower Photography' },
    { url: importImage('baby shower/bs4.jpeg'), category: 'baby', title: 'Baby Shower Moments' },
    { url: importImage('baby shower/bs5.jpeg'), category: 'baby', title: 'Baby Shower Joy' },
    
    // Birthday Images
    { url: importImage('birthday/bd1.jpeg'), category: 'videography', title: 'Birthday Celebration' },
    { url: importImage('birthday/bd2.jpeg'), category: 'videography', title: 'Birthday Party' },
    { url: importImage('birthday/bd3.jpeg'), category: 'videography', title: 'Birthday Event' },
    { url: importImage('birthday/bd4.jpeg'), category: 'videography', title: 'Birthday Photography' },
    { url: importImage('birthday/bd5.jpeg'), category: 'videography', title: 'Birthday Moments' },
    { url: importImage('birthday/bd6.jpeg'), category: 'videography', title: 'Birthday Fun' },
    { url: importImage('birthday/bd7.jpeg'), category: 'videography', title: 'Birthday Joy' },
    { url: importImage('birthday/bd8.jpeg'), category: 'videography', title: 'Birthday Memories' },
    
    // Corporate Images
    { url: importImage('corp/c1.jpeg'), category: 'corporate', title: 'Corporate Event' },
    { url: importImage('corp/c2.jpeg'), category: 'corporate', title: 'Corporate Photography' },
    { url: importImage('corp/c3.jpeg'), category: 'corporate', title: 'Business Event' },
    { url: importImage('corp/c4.jpeg'), category: 'corporate', title: 'Corporate Session' },
    { url: importImage('corp/c5.jpeg'), category: 'corporate', title: 'Professional Photography' },
    
    // Drone Images
    { url: importImage('drone/d1.jpeg'), category: 'drone', title: 'Aerial Photography' },
    { url: importImage('drone/d2.jpeg'), category: 'drone', title: 'Drone Shoots' },
    { url: importImage('drone/d3.jpeg'), category: 'drone', title: 'Aerial View' },
    { url: importImage('drone/d4.jpeg'), category: 'drone', title: 'Drone Cinematography' },
    { url: importImage('drone/d5.jpeg'), category: 'drone', title: 'Aerial Landscape' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  if (!imagesLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading gallery...</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Service Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our work organized by service category
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b animate-scale-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id 
                    ? "bg-marvel-yellow text-black hover:bg-yellow-400 shadow-lg" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-marvel-yellow"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift animate-scale-in"
                onClick={() => openLightbox(index)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center text-white transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm capitalize bg-marvel-yellow text-black px-2 py-1 rounded">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          <Button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="max-w-5xl max-h-[90vh] px-4 animate-scale-in">
            <img 
              src={filteredImages[selectedImage].url} 
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).src = '/placeholder.svg';
              }}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center animate-fade-in">
            <h3 className="text-xl font-semibold mb-1">{filteredImages[selectedImage].title}</h3>
            <p className="text-sm capitalize bg-marvel-yellow text-black px-3 py-1 rounded-full mb-2 inline-block">
              {filteredImages[selectedImage].category}
            </p>
            <p className="text-sm opacity-75">{selectedImage + 1} / {filteredImages.length}</p>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-marvel-black text-white animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your photography needs and bring your vision to life
          </p>
          <Button 
            onClick={() => window.location.href = '/contact'}
            className="bg-marvel-yellow text-black hover:bg-yellow-400 px-8 py-3 transition-all duration-300 hover:scale-105"
          >
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceGallery;