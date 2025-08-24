
import React from 'react';
import { Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';

const Footer = () => {
  const { navigateWithLoader } = useNavigation();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/marvelsnapsnpk',
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@marvelsnaps',
      color: 'hover:text-red-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/918098449639',
      color: 'hover:text-green-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:marvelsnapsnpk@gmail.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Call',
      icon: Phone,
      href: 'tel:+918098449639',
      color: 'hover:text-marvel-yellow'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Service Gallery', href: '/service-gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-marvel-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-marvel-yellow rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl text-black">M</span>
              </div>
              <span className="text-2xl font-bold">Marvel Snaps</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Passionate storytellers dedicated to capturing your precious moments through our lens. 
              Every frame tells a story, every moment becomes a memory.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 ${social.color} hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-marvel-yellow">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="mailto:marvelsnapsnpk@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-marvel-yellow transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>marvelsnapsnpk@gmail.com</span>
              </a>
              <a
                href="tel:+918098449639"
                className="flex items-center space-x-3 text-gray-300 hover:text-marvel-yellow transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 80984 49639</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>No.2, Bathrakalaiyamman kovil complex,</p>
                  <p>Kolumam main road,</p>
                  <p>Neikkarapatti, Palani. 624615</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-marvel-yellow">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigateWithLoader(link.href)}
                  className="text-left text-gray-300 hover:text-marvel-yellow transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Marvel Snaps. All rights reserved. | 
            <span className="text-marvel-yellow"> Capturing moments, Creating memories</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
