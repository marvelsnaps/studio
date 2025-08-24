
import React from 'react';
import { Camera } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';

const CameraLoader: React.FC = () => {
  const { isLoading } = useNavigation();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Camera Icon with Circle Animation */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Yellow Circle Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 bg-yellow-400/20 rounded-full animate-ping"></div>
          </div>
          
          {/* Camera Icon */}
          <div className="relative z-10 animate-bounce">
            <Camera 
              className="h-12 w-12 text-yellow-500 animate-pulse" 
              strokeWidth={1.5}
            />
          </div>
          
          {/* Shine Effect */}
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-white rounded-full animate-ping opacity-80"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <div className="text-lg font-semibold text-black animate-pulse mb-3">
            Capturing the moment...
          </div>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        
        {/* Flash Overlay */}
        <div className="fixed inset-0 bg-white pointer-events-none opacity-0 animate-flash"></div>
      </div>
    </div>
  );
};

export default CameraLoader;
