import React, { createContext, useContext, useState, useCallback } from 'react';

interface AlbumAuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  error: string | null;
}

const AlbumAuthContext = createContext<AlbumAuthContextType | undefined>(undefined);

// Album credentials — change these to set custom login details
const ALBUM_CREDENTIALS = {
  username: 'gokul nandhini',
  password: 'GN2025',
};

export const AlbumAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('album_auth') === 'true';
  });
  const [error, setError] = useState<string | null>(null);

  const login = useCallback((username: string, password: string): boolean => {
    if (username.toLowerCase() === ALBUM_CREDENTIALS.username.toLowerCase() && password === ALBUM_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setError(null);
      sessionStorage.setItem('album_auth', 'true');
      return true;
    }
    setError('Invalid username or password');
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('album_auth');
  }, []);

  return (
    <AlbumAuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
      {children}
    </AlbumAuthContext.Provider>
  );
};

export const useAlbumAuth = () => {
  const context = useContext(AlbumAuthContext);
  if (!context) {
    throw new Error('useAlbumAuth must be used within an AlbumAuthProvider');
  }
  return context;
};
