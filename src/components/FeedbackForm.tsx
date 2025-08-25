"use client"

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const m = window.matchMedia('(hover: hover)');
    const update = () => setCanHover(m.matches);
    update();
    m.addEventListener?.('change', update);
    return () => m.removeEventListener?.('change', update);
  }, []);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast({ title: 'Please enter a message', description: 'Feedback message cannot be empty', duration: 4000 });
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'feedbacks'), {
        name: name?.trim() || 'Anonymous',
        message: message.trim(),
        rating: rating === null ? null : Number(rating),
        timestamp: serverTimestamp()
      });

      setName('');
      setMessage('');
      setRating(null);
      setHoverRating(null);

      toast({ title: 'Thank you!', description: 'Your feedback was submitted.', duration: 4000 });
    } catch (err) {
      console.error(err);
      toast({ title: 'Submission failed', description: 'Unable to send feedback. Try again later.', duration: 6000 });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-2xl mx-auto bg-white/90 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>

      <label className="block mb-3">
        <span className="text-sm text-gray-700">Name (optional)</span>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name or Anonymous" />
      </label>

      <label className="block mb-3">
        <span className="text-sm text-gray-700">Feedback</span>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Share your experience" rows={4} />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-700 block mb-2">Rating (optional)</span>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((i) => {
            const filled = (hoverRating ?? rating ?? 0) >= i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i)}
                // only attach hover handlers on devices that support hover
                {...(canHover
                  ? {
                      onMouseEnter: () => setHoverRating(i),
                      onMouseLeave: () => setHoverRating(null),
                    }
                  : {})}
                onFocus={() => setHoverRating(i)}
                onBlur={() => setHoverRating(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setRating(i);
                  }
                }}
                aria-label={`Rate ${i} star${i > 1 ? 's' : ''}`}
                className="p-1 bg-transparent border-0 cursor-pointer"
              >
                {filled ? (
                  <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`fbGold-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#e6b824" />
                        <stop offset="100%" stopColor="#d89f0e" />
                      </linearGradient>
                    </defs>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={`url(#fbGold-${i})`} style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.12))' }} />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="transparent" stroke="#d8b24a" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </label>

      <div className="text-right">
        <Button type="submit" className="bg-black text-white" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Review'}</Button>
      </div>
    </form>
  );
};

export default FeedbackForm;
