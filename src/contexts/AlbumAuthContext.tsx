import React, { createContext, useContext, useState, useCallback } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface AlbumAuthContextType {
  isAuthenticated: boolean;
  albumName: string;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string | null;
  loading: boolean;
}

const AlbumAuthContext = createContext<AlbumAuthContextType | undefined>(undefined);

export const AlbumAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('album_auth') === 'true';
  });
  const [albumName, setAlbumName] = useState(() => {
    return sessionStorage.getItem('album_name') || 'album1';
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (username: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // Query Firestore: collection "album_users", match username (case-insensitive)
      const usersRef = collection(db, 'album_users');
      const q = query(usersRef, where('username_lowercase', '==', username.toLowerCase()));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setError('Invalid username or password');
        setLoading(false);
        return false;
      }

      // Check password from the matched document
      const userDoc = snapshot.docs[0].data();
      if (userDoc.password === password) {
        const userAlbum = userDoc.album || 'album1';
        setIsAuthenticated(true);
        setAlbumName(userAlbum);
        setError(null);
        sessionStorage.setItem('album_auth', 'true');
        sessionStorage.setItem('album_name', userAlbum);
        setLoading(false);
        return true;
      } else {
        setError('Invalid username or password');
        setLoading(false);
        return false;
      }
    } catch (err) {
      console.error('Firebase login error:', err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setAlbumName('album1');
    sessionStorage.removeItem('album_auth');
    sessionStorage.removeItem('album_name');
  }, []);

  return (
    <AlbumAuthContext.Provider value={{ isAuthenticated, albumName, login, logout, error, loading }}>
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
