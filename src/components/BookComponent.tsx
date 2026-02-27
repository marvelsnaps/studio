import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Download, Maximize, Minimize, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookComponentProps {
  pages: string[];
  title?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const BookComponent: React.FC<BookComponentProps> = ({ pages, title = 'Photo Album', imageWidth = 800, imageHeight = 600 }) => {
  const flipBookRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Calculate dimensions based on image aspect ratio
  // For responsive design while maintaining aspect ratio
  const aspectRatio = imageWidth / imageHeight;
  
  let bookWidth: number;
  let bookHeight: number;
  
  if (isMobile) {
    // Mobile: Use most of the screen width
    const maxScreenWidth = typeof window !== 'undefined' ? window.innerWidth * 0.9 : 400;
    bookWidth = Math.min(imageWidth * 0.5, maxScreenWidth);
    bookHeight = bookWidth / aspectRatio;
    
    // Limit height for mobile
    if (bookHeight > window.innerHeight * 0.6) {
      bookHeight = window.innerHeight * 0.55;
      bookWidth = bookHeight * aspectRatio;
    }
  } else {
    // Desktop: Use larger dimensions
    const maxScreenWidth = typeof window !== 'undefined' ? window.innerWidth * 0.95 : 1200;
    bookWidth = Math.min(imageWidth * 0.9, maxScreenWidth * 0.9);
    bookHeight = bookWidth / aspectRatio;
    
    // Limit height for desktop
    if (bookHeight > window.innerHeight * 0.85) {
      bookHeight = window.innerHeight * 0.75;
      bookWidth = bookHeight * aspectRatio;
    }
  }

  const handlePrevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().goToPage(
        flipBookRef.current.pageFlip().getCurrentPageIndex() - 2
      );
    }
  };

  const handleNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().goToPage(
        flipBookRef.current.pageFlip().getCurrentPageIndex() + 2
      );
    }
  };

  // fullscreen toggle
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (!isFullscreen) {
      if (elem.requestFullscreen) elem.requestFullscreen();
      else if ((elem as any).webkitRequestFullscreen) (elem as any).webkitRequestFullscreen();
      else if ((elem as any).msRequestFullscreen) (elem as any).msRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if ((document as any).webkitExitFullscreen) (document as any).webkitExitFullscreen();
      else if ((document as any).msExitFullscreen) (document as any).msExitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  // download pdf
  const downloadPdf = async () => {
    const jsPDF = (await import('jspdf')).default;
    const html2canvas = (await import('html2canvas')).default;
    const bookElem = document.getElementById('album-book');
    if (!bookElem) return;
    const canvas = await html2canvas(bookElem, { useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: aspectRatio > 1 ? 'l' : 'p' });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${title.replace(/\s+/g,'_')}.pdf`);
  };

  // rotate for mobile
  const rotateScreen = () => {
    if (screen.orientation && screen.orientation.lock) {
      const desired = window.innerWidth < window.innerHeight ? 'landscape' : 'portrait';
      screen.orientation.lock(desired).catch(() => {});
    }
  };

  if (pages.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-gray-400 text-lg">No images available in this album yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center py-4 sm:py-8 px-3 sm:px-4">
      <h1 className={`font-bold text-white mb-4 sm:mb-8 text-center ${isMobile ? 'text-2xl' : 'text-4xl'}`} style={{ paddingTop: '4rem' }}>
        {title}
      </h1>
      
      <div id="album-book" className="relative w-full flex justify-center mb-6 sm:mb-8">
        <HTMLFlipBook
          ref={flipBookRef}
          width={Math.round(bookWidth)}
          height={Math.round(bookHeight)}
          size="fixed"
          minWidth={Math.round(bookWidth * 0.6)}
          maxWidth={Math.round(bookWidth * 1.5)}
          minHeight={Math.round(bookHeight * 0.6)}
          maxHeight={Math.round(bookHeight * 1.5)}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={true}
          className="rounded-lg shadow-2xl"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {pages.map((imageUrl, index) => (
            <div
              key={index}
              className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden"
              style={{ pageBreakAfter: 'always' }}
            >
              <img
                src={imageUrl}
                alt={`Page ${index + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={downloadPdf}
            size={isMobile ? 'sm' : 'default'}
            className="bg-primary/90 hover:bg-primary text-primary-foreground font-semibold rounded-full px-6 py-2.5 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 gap-2"
          >
            <Download className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
            Download PDF
          </Button>
          <Button
            onClick={toggleFullscreen}
            size={isMobile ? 'sm' : 'default'}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full px-6 py-2.5 border border-white/20 hover:border-white/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 gap-2"
          >
            {isFullscreen ? <Minimize className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} /> : <Maximize className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />}
            {isFullscreen ? 'Exit Fullscreen' : 'Full Screen'}
          </Button>
        </div>
        {isMobile && (
          <Button
            onClick={rotateScreen}
            size="sm"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full px-5 py-2.5 border border-white/20 hover:border-white/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 gap-2"
          >
            <RotateCw className="w-4 h-4" />
            Rotate
          </Button>
        )}
      </div>

      {/* informational text removed as requested */}

    </div>
  );
};

export default BookComponent;
