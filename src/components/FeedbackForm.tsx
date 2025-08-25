"use client"

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<string>('');
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
        rating: rating === '' ? null : Number(rating),
        timestamp: serverTimestamp()
      });

      setName('');
      setMessage('');
      setRating('');

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
        <span className="text-sm text-gray-700">Rating (optional)</span>
        <Input type="number" min={1} max={5} value={rating} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)} placeholder="1 - 5" />
      </label>

      <div className="text-right">
        <Button type="submit" className="bg-black text-white" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Review'}</Button>
      </div>
    </form>
  );
};

export default FeedbackForm;
