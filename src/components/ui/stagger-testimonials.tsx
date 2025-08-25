
"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

const SQRT_5000 = Math.sqrt(5000);

interface StoredFeedback {
  name?: string;
  message?: string;
  rating?: number | null;
  timestamp?: unknown;
}

type Testimonial = {
  tempId: string | number;
  testimonial: string;
  by: string;
  imgSrc: string;
  rating?: number | null;
}


interface TestimonialCardProps {
  position: number;
  testimonial: Testimonial;
  handleMove: (steps: number) => void;
  onUserInteract?: () => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  onUserInteract,
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => { onUserInteract?.(); handleMove(position); }}
      onPointerDown={() => { onUserInteract?.(); }}
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
  {/* profile image removed per request */}
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-black" : "text-black"
      )}>
        "{testimonial.testimonial}"
      </h3>
      {/* Star rating: positioned just above the author, centered */}
      <div className="absolute left-0 right-0 flex justify-center" style={{ bottom: 56 }}>
        <div className="flex items-center space-x-2">
          {[1,2,3,4,5].map((i) => {
            const filled = testimonial.rating != null && i <= (testimonial.rating || 0);
            return (
              <span key={i} className="inline-block">
                {filled ? (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`goldGrad-${testimonial.tempId}-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e6b824ff" />
                        <stop offset="100%" stopColor="#d89f0eff" />
                      </linearGradient>
                    </defs>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={`url(#goldGrad-${testimonial.tempId}-${i})`} style={{ filter: 'drop-shadow(0 4px 6px rgba(69, 69, 69, 0.12))' }} />
                  </svg>
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.08))' }}>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#ffffff" />
                  </svg>
                )}
              </span>
            )
          })}
        </div>
      </div>
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
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>([]);
  const autoRef = React.useRef<number | null>(null);
  const resumeRef = React.useRef<number | null>(null);

  const clearAuto = React.useCallback(() => {
    if (autoRef.current) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }, []);

  const clearResume = React.useCallback(() => {
    if (resumeRef.current) {
      window.clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  }, []);

  const handleMove = React.useCallback((steps: number) => {
    setTestimonialsList(prev => {
      const newList = [...prev];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) break;
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) break;
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  }, []);

  const startAuto = React.useCallback(() => {
    clearAuto();
    autoRef.current = window.setInterval(() => {
      // move by 1 to next
      handleMove(1);
    }, 3000);
  }, [clearAuto, handleMove]);

  const pauseAuto = React.useCallback(() => {
    clearAuto();
    clearResume();
    // resume after 6s
    resumeRef.current = window.setTimeout(() => {
      startAuto();
    }, 6000);
  }, [clearAuto, clearResume, startAuto]);

  // Fetch feedbacks from Firestore and prepend them to local testimonials
  useEffect(() => {
    let mounted = true;

    const loadFeedbacks = async () => {
      try {
        const q = query(collection(db, 'feedbacks'), orderBy('timestamp', 'desc'));
        const snap = await getDocs(q);
        const items: Testimonial[] = snap.docs.map((d) => {
          const data = d.data() as StoredFeedback;
          return {
            tempId: d.id,
            testimonial: data.message || '',
            by: data.name ? `${data.name}` : 'Anonymous',
            imgSrc: `https://i.pravatar.cc/150?u=${d.id}`,
            rating: typeof data.rating === 'number' ? data.rating : null
          };
        });

        if (!mounted) return;
        if (items.length) {
          setTestimonialsList(items);
        }
      } catch (err) {
        console.error('Failed to load feedbacks', err);
      }
    };

    loadFeedbacks();
    return () => { mounted = false };
  }, []);

  

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // start auto-advance on mount
  useEffect(() => {
    startAuto();
    return () => {
      clearAuto();
      clearResume();
    };
  }, [startAuto, clearAuto, clearResume]);

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
              onUserInteract={pauseAuto}
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
