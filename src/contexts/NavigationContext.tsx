
import React, { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationContextType {
  isLoading: boolean;
  navigateWithLoader: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const navigateWithLoader = useCallback((path: string) => {
    setIsLoading(true);
    
    // Show loader for 1 second
    setTimeout(() => {
      // Navigate to the new page
      navigate(path);
      
      // Scroll to top immediately after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        setIsLoading(false);
      }, 100);
    }, 1000);
  }, [navigate]);

  return (
    <NavigationContext.Provider value={{ isLoading, navigateWithLoader }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
