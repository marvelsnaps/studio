
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/contexts/NavigationContext';
import { 
  GridBody,
  DraggableContainer,
  GridItem, 
} from '@/components/ui/infinite-drag-scroll';

const Gallery = () => {
  const { navigateWithLoader } = useNavigation();
  const [isManuallyDragged, setIsManuallyDragged] = useState(false);
  const [showCallToAction, setShowCallToAction] = useState(true);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const autoDragRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper function to dynamically import service gallery images
  const importImage = (path: string) => {
    try {
      return new URL(`../assest/service gallery/${path}`, import.meta.url).href;
    } catch (error) {
      console.error(`Failed to load image: ${path}`, error);
      return '/placeholder.svg';
    }
  };

  const galleryImages = [
    // Wedding Images
    importImage('wedding/w1.jpeg'),
    importImage('wedding/w2.jpeg'),
    importImage('wedding/w4.jpeg'),
    importImage('wedding/w5.jpeg'),
    importImage('wedding/w6.jpeg'),
    importImage('wedding/w7.jpeg'),
    
    // Pre and Post Wedding Images
    importImage('Pre and Post wedding/m2.jpeg'),
    importImage('Pre and Post wedding/m3.jpeg'),
    importImage('Pre and Post wedding/m4.jpeg'),
    importImage('Pre and Post wedding/m5.jpeg'),
    importImage('Pre and Post wedding/m6.jpeg'),
    
    // Candid Images
    importImage('candit/c1.jpeg'),
    importImage('candit/c2.jpeg'),
    importImage('candit/c3.jpeg'),
    importImage('candit/c4.jpeg'),
    importImage('candit/c5.jpg'),
    importImage('candit/c6.jpeg'),
    importImage('candit/c7.jpeg'),
    importImage('candit/c8.jpg'),
    importImage('candit/c9.jpg'),
    importImage('candit/c10.jpg'),
    
    // Model Images
    importImage('model pics/m1.jpg'),
    importImage('model pics/m2.jpg'),
    importImage('model pics/m3.jpg'),
    importImage('model pics/m4.jpg'),
    importImage('model pics/m5.jpeg'),
    importImage('model pics/m6.jpeg'),
    importImage('model pics/m7.jpeg'),
    importImage('model pics/m8.jpeg'),
    importImage('model pics/m9.jpeg'),
    
    // Baby Images
    importImage('baby/b1.jpeg'),
    importImage('baby/b2.jpeg'),
    importImage('baby/b3.jpeg'),
    importImage('baby/b4.jpeg'),
    importImage('baby/b5.jpeg'),
    importImage('baby/b6.jpeg'),
    importImage('baby/b7.jpeg'),
    importImage('baby/b8.jpeg'),
    importImage('baby/b9.jpeg'),
    importImage('baby/b10.jpeg'),
    importImage('baby/b11.jpeg'),
    importImage('baby/b12.jpeg'),
    importImage('baby/b13.jpeg'),
    importImage('baby/b14.jpg'),
    importImage('baby/b15.jpg'),
    importImage('baby/b16.jpeg'),
    importImage('baby/b17.jpeg'),
    importImage('baby/b18.jpeg'),
    importImage('baby/b19.jpeg'),
    importImage('baby/b20.jpeg'),
    
    // Baby Shower Images
    importImage('baby shower/bs1.jpg'),
    importImage('baby shower/bs2.jpg'),
    importImage('baby shower/bs3.jpeg'),
    importImage('baby shower/bs4.jpeg'),
    importImage('baby shower/bs5.jpeg')
  ];

  const handleNavigation = (url: string) => {
    navigateWithLoader(url);
  };

  const handleManualDrag = () => {
    setIsManuallyDragged(true);
    setShowCallToAction(false);
    
    // Clear existing timeouts
    if (autoDragRef.current) {
      clearInterval(autoDragRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    // Resume auto-drag after 3 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsManuallyDragged(false);
      setShowCallToAction(true);
    }, 3000);
  };

  useEffect(() => {
    // Fade in subtitle after 5 seconds
    const subtitleTimeout = setTimeout(() => {
      setSubtitleVisible(true);
    }, 5000);

    return () => clearTimeout(subtitleTimeout);
  }, []);

  useEffect(() => {
    // Auto-drag functionality
    if (!isManuallyDragged) {
      autoDragRef.current = setInterval(() => {
        // Simulate wheel scroll for auto-drag
        const wheelEvent = new WheelEvent('wheel', {
          deltaY: 5,
          deltaX: 2,
          bubbles: true,
          cancelable: true
        });
        window.dispatchEvent(wheelEvent);
      }, 100); // Very slow and smooth
    }

    return () => {
      if (autoDragRef.current) {
        clearInterval(autoDragRef.current);
      }
    };
  }, [isManuallyDragged]);

  useEffect(() => {
    return () => {
      if (autoDragRef.current) {
        clearInterval(autoDragRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="absolute top-0 left-0 right-0 z-10 py-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white glow-text">
            Our Masterpiece Collection
          </h1>
          <p className={`text-base text-gray-300 max-w-2xl mx-auto transition-opacity duration-1000 ${
            subtitleVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Drag to explore our stunning photography portfolio
          </p>
        </div>
      </section>

      {/* Draggable Gallery */}
      <div onMouseDown={handleManualDrag} onTouchStart={handleManualDrag}>
        <DraggableContainer variant="masonry">
          <GridBody>
            {galleryImages.map((image, index) => (
              <GridItem
                key={index}
                className="relative h-48 w-32 sm:h-64 sm:w-40 md:h-96 md:w-64"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="pointer-events-none absolute h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </GridItem>
            ))}
          </GridBody>
        </DraggableContainer>
      </div>

      {/* Call to Action - Fixed at bottom */}
      {showCallToAction && (
        <div className="fixed bottom-6 left-6 right-6 z-10 pointer-events-auto transition-opacity duration-500">
          <div className="bg-black/80 backdrop-blur-lg rounded-lg p-4 text-center border border-gray-800">
            <p className="text-sm md:text-base text-gray-300 mb-3">
              Like what you see? Let's create something beautiful together
            </p>
            <Button 
              onClick={() => handleNavigation('/contact')}
              className="bg-marvel-yellow text-black hover:bg-yellow-400 px-6 py-2 text-sm md:text-base"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
