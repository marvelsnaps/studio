"use client"

import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import FeedbackForm from '@/components/FeedbackForm';

const WriteFeedbackFloating: React.FC = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={"fixed bottom-6 left-6 z-[9999] rounded-full text-black px-4 py-3 shadow-2xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 bg-gradient-to-r from-yellow-400 to-yellow-600 motion-safe:animate-pulse sm:motion-safe:animate-none"}
            aria-label="Write Feedback"
          >
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-black/90" />
              <span className="flex flex-col items-center sm:flex-row sm:gap-1 text-sm sm:text-base font-semibold leading-tight">
                <span className="block">Write</span>
                <span className="block">Feedback ❤️</span>
              </span>
            </div>
          </Button>
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
  );
};

export default WriteFeedbackFloating;
