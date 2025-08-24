
"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Marvel Snaps captured our wedding day perfectly! The team was professional, creative, and made us feel comfortable throughout the shoot.",
    by: "Priya Sharma, Bride",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "Exceptional service for our corporate event photography. The team delivered high-quality images that perfectly represented our brand.",
    by: "Raj Patel, CEO",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Amazing baby photoshoot experience! The photographers were so patient with our little one and created beautiful memories we'll treasure forever.",
    by: "Anita Kumar, Mother",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "The drone photography for our pre-wedding shoot was breathtaking! Marvel Snaps team has incredible creativity and technical skills.",
    by: "Vikram Singh, Groom",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "Outstanding portrait photography session. The team made me feel confident and captured my personality beautifully.",
    by: "Meera Nair, Model",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "Marvel Snaps delivered beyond our expectations for our anniversary celebration. The candid shots were natural and emotional.",
    by: "Arjun Reddy, Client",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "The wedding videography was cinematic and captured every precious moment. We couldn't be happier with the results.",
    by: "Kavya Menon, Bride",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "Professional commercial shoot that exceeded our marketing needs. The team understood our brand vision perfectly.",
    by: "Daniel Joseph, Marketing Director",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "It's just the best photography service. Period. The quality and creativity is unmatched.",
    by: "Fernando D'Souza, Event Planner",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "I switched to Marvel Snaps 3 years ago and never looked back. They're my go-to for all photography needs.",
    by: "Andy Thomas, Repeat Client",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-marvel-yellow text-black border-marvel-yellow" 
          : "z-0 bg-white text-black border-gray-300 hover:border-marvel-yellow/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #d1d5db" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-200 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px white"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-black" : "text-black"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-black/80" : "text-gray-600"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-yellow-50/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-marvel-yellow hover:text-black",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marvel-yellow"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-marvel-yellow hover:text-black",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marvel-yellow"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
