
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigation } from '@/contexts/NavigationContext';
import FeedbackForm from '@/components/FeedbackForm';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const location = useLocation();
  const { navigateWithLoader } = useNavigation();

  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Packages', href: '/services' },
    { name: 'Service Gallery', href: '/service-gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Only apply hide/show behavior on laptop/desktop (md and up)
      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMouseOver) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY || isMouseOver) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true); // Always visible on mobile
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMouseOver]);

  const handleNavigation = (href: string) => {
    navigateWithLoader(href);
  };

  // Different navbar background based on page and scroll state
  const getNavbarBackground = () => {
    if (isHomePage) {
      return isScrolled 
        ? 'bg-black/50 backdrop-blur-lg border-b border-black/30 shadow-lg'
        : 'bg-white/2 backdrop-blur-sm';
    } else {
      return 'bg-black/50 backdrop-blur-lg border-b border-black/30 shadow-lg';
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBackground()} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[60px]">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-marvel-yellow rounded-lg flex items-center justify-center shadow-lg">
              <span className="font-bold text-lg md:text-xl text-black">M</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-white drop-shadow-lg">Marvel Snaps</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-marvel-yellow ${
                  location.pathname === item.href
                    ? 'text-marvel-yellow'
                    : 'text-white drop-shadow-md'
                } after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-marvel-yellow after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  location.pathname === item.href ? 'after:scale-x-100' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-lg">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleNavigation('/');
                      }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-8 h-8 bg-marvel-yellow rounded-lg flex items-center justify-center">
                        <span className="font-bold text-lg text-black">M</span>
                      </div>
                      <span className="text-lg font-bold">Marvel Snaps</span>
                    </button>
                  </div>

                  <div className="flex-1 py-8">
                    <nav className="space-y-6">
                      {navItems.map((item) => (
                        <div key={item.name}>
                          <button
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              handleNavigation(item.href);
                            }}
                            className={`block text-lg font-medium transition-colors duration-300 hover:text-marvel-yellow ${
                              location.pathname === item.href
                                ? 'text-marvel-yellow'
                                : 'text-black'
                            }`}
                          >
                            {item.name}
                          </button>

                          {/* Place Write Review directly below the Contact nav item */}
                          {item.name === 'Contact' && (
                            <div className="mt-3 px-0">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105 shadow-md px-4 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-300">
                                    <Heart className="h-5 w-5" />
                                    <span className="font-semibold">Write Review</span>
                                  </button>
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
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>

                  <div className="border-t pt-6 space-y-4">
                    <a
                      href="https://instagram.com/marvelsnapsnpk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-black hover:text-marvel-yellow transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="tel:+918098449639"
                      className="flex items-center space-x-3 text-black hover:text-marvel-yellow transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call Us</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
