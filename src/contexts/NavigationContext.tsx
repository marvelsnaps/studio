
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationContextType {
  isLoading: boolean;
  navigateWithLoader: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // Start with loader visible
  const navigate = useNavigate();

  // Hide loader after initial page load (minimum 2 seconds)
  useEffect(() => {
    const initialLoadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(initialLoadTimer);
  }, []);

  const navigateWithLoader = useCallback((path: string) => {
    setIsLoading(true);
    
    // Show loader for at least 1.5 seconds
    setTimeout(() => {
      // Navigate to the new page
      navigate(path);
      
      // Scroll to top immediately after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        setIsLoading(false);
      }, 100);
    }, 1500);
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
