
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationProvider } from '@/contexts/NavigationContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CameraLoader from '@/components/CameraLoader';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import Services from '@/pages/Services';
import ServiceGallery from '@/pages/ServiceGallery';
import Contact from '@/pages/Contact';
import ProtectedAlbum from '@/pages/ProtectedAlbum';
import { AlbumAuthProvider } from '@/contexts/AlbumAuthContext';
import NotFound from '@/pages/NotFound';
import './App.css';

const queryClient = new QueryClient();

function FloatingButtonsConditional() {
  const location = useLocation();
  // Hide floating buttons on album pages
  if (location.pathname.startsWith('/album')) {
    return null;
  }
  return <FloatingActionButtons />;
}

function AppContent() {
  const location = useLocation();
  // Hide footer on album pages for better mobile experience
  const isAlbumPage = location.pathname.startsWith('/album');
  
  return (
    <div className="min-h-screen bg-background font-sans antialiased w-full">
      <CameraLoader />
      <Navbar />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/album" element={<ProtectedAlbum />} />
          <Route path="/album/:albumName" element={<ProtectedAlbum />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-gallery" element={<ServiceGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isAlbumPage && <Footer />}
      <FloatingButtonsConditional />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavigationProvider>
          <AlbumAuthProvider>
            <AppContent />
          </AlbumAuthProvider>
        </NavigationProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
