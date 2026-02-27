import React from 'react';
import { useAlbumAuth } from '@/contexts/AlbumAuthContext';
import AlbumLogin from '@/pages/AlbumLogin';
import Album from '@/pages/Album';

const ProtectedAlbum: React.FC = () => {
  const { isAuthenticated } = useAlbumAuth();

  if (!isAuthenticated) {
    return <AlbumLogin />;
  }

  return <Album />;
};

export default ProtectedAlbum;
