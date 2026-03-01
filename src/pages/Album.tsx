import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookComponent from '@/components/BookComponent';
import { Loader } from 'lucide-react';

// Vite requires static glob patterns — define all album globs here
const albumGlobs: Record<string, Record<string, () => Promise<unknown>>> = {
  album1: import.meta.glob('/src/albums/album1/*', { query: '?url', import: 'default' }),
  album2: import.meta.glob('/src/albums/album2/*', { query: '?url', import: 'default' }),
};

interface AlbumProps {
  albumFolder?: string;
}

const Album: React.FC<AlbumProps> = ({ albumFolder }) => {
  const { albumName: paramAlbum } = useParams<{ albumName?: string }>();
  const activeAlbum = albumFolder || paramAlbum || 'album1';
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get the correct glob for the active album
        const imageModules = albumGlobs[activeAlbum];

        if (!imageModules) {
          setError(`Album "${activeAlbum}" not found`);
          setLoading(false);
          return;
        }

        const imagePaths: { path: string; url: string }[] = [];

        // Supported image extensions
        const supportedExtensions = /\.(jpg|jpeg|png|webp|gif)$/i;

        for (const [path, importFn] of Object.entries(imageModules)) {
          if (supportedExtensions.test(path)) {
            try {
              const url = await (importFn as () => Promise<string | { default: string }>)();
              const imageUrl = typeof url === 'string' ? url : url.default;
              imagePaths.push({ path, url: imageUrl });
            } catch (err) {
              console.warn(`Failed to load image: ${path}`, err);
            }
          }
        }

        // Sort by extracting numbers from the filename for natural numeric order
        imagePaths.sort((a, b) => {
          const nameA = a.path.split('/').pop() || '';
          const nameB = b.path.split('/').pop() || '';
          // Extract leading number from filename
          const numA = parseInt((nameA.match(/(\d+)/) || ['0'])[0], 10);
          const numB = parseInt((nameB.match(/(\d+)/) || ['0'])[0], 10);
          if (numA !== numB) return numA - numB;
          return nameA.localeCompare(nameB);
        });

        setImages(imagePaths.map((item) => item.url));

        if (imagePaths.length === 0) {
          console.log(`No images found in ${activeAlbum}. Add images to src/albums/${activeAlbum}/`);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load album images';
        setError(errorMessage);
        console.error('Error loading album:', err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [activeAlbum]);

  // Get image dimensions from first image
  useEffect(() => {
    if (images.length > 0) {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({
          width: img.naturalWidth || img.width,
          height: img.naturalHeight || img.height,
        });
      };
      img.onerror = () => {
        // Keep default dimensions if load fails
        console.warn('Could not load image dimensions');
      };
      img.src = images[0];
    }
  }, [images]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center">
          <Loader className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading album...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Error</h2>
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <BookComponent 
        pages={images} 
        title={`${activeAlbum.charAt(0).toUpperCase() + activeAlbum.slice(1)} - Photo Album`}
        imageWidth={imageDimensions.width}
        imageHeight={imageDimensions.height}
      />
    </div>
  );
};

export default Album;
