
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  name: string;
  date: string;
  rating: number;
  description: string;
}

interface TestimonialsProps {
  showAll?: boolean;
  title?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    date: "December 2024",
    rating: 5,
    description: "Marvel Snaps captured our wedding day perfectly! The team was professional, creative, and made us feel comfortable throughout the shoot. The photos are absolutely stunning and we couldn't be happier with the results."
  },
  {
    id: 2,
    name: "Raj Patel",
    date: "November 2024",
    rating: 5,
    description: "Exceptional service for our corporate event photography. The team delivered high-quality images that perfectly represented our brand. Their attention to detail and professionalism was outstanding."
  },
  {
    id: 3,
    name: "Anita Kumar",
    date: "October 2024",
    rating: 5,
    description: "Amazing baby photoshoot experience! The photographers were so patient with our little one and created beautiful memories we'll treasure forever. Highly recommended for family photography."
  },
  {
    id: 4,
    name: "Vikram Singh",
    date: "September 2024",
    rating: 5,
    description: "The drone photography for our pre-wedding shoot was breathtaking! Marvel Snaps team has incredible creativity and technical skills. The aerial shots added a magical touch to our album."
  },
  {
    id: 5,
    name: "Meera Nair",
    date: "August 2024",
    rating: 5,
    description: "Outstanding portrait photography session. The team made me feel confident and captured my personality beautifully. The lighting and composition were perfect in every shot."
  },
  {
    id: 6,
    name: "Arjun Reddy",
    date: "July 2024",
    rating: 5,
    description: "Marvel Snaps delivered beyond our expectations for our anniversary celebration. The candid shots were natural and emotional, capturing genuine moments we'll cherish forever."
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="bg-gradient-to-br from-yellow-100/80 to-yellow-200/60 backdrop-blur-lg border border-yellow-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800 text-lg">{testimonial.name}</h3>
          <span className="text-sm text-gray-600 bg-white/50 px-2 py-1 rounded-full">
            {testimonial.date}
          </span>
        </div>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < testimonial.rating
                  ? 'text-yellow-500 fill-yellow-500'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed flex-grow">
          {testimonial.description}
        </p>
      </div>
    </Card>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({ showAll = false, title = "What Our Clients Say" }) => {
  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 3);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their amazing experiences with Marvel Snaps
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel setApi={setApi} className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {displayTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={current === 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-600">
              {current} of {count}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={current === count}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {showAll && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
