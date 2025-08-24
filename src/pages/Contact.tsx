
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'marvelsnapsnpk@gmail.com',
      action: 'mailto:marvelsnapsnpk@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 80984 49639',
      action: 'tel:+918098449639'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+91 80984 49639',
      action: 'https://wa.me/918098449639'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: 'No.2, Bathrakalaiyamman kovil complex, Kolumam main road, Neikkarapatti, Palani. 624615',
      action: null
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/marvelsnapsnpk',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@marvelsnaps',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `New Contact Form Submission from Marvel Snaps Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/918098449639?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Let's discuss your photography needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-scale-in">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                  <Input
                    placeholder="Email Address *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="transition-all duration-300 focus:scale-105"
                    required
                  />
                  <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="transition-all duration-300 focus:scale-105">
                      <SelectValue placeholder="Select Service *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding Photography</SelectItem>
                      <SelectItem value="prewedding">Pre & Post Wedding</SelectItem>
                      <SelectItem value="candid">Candid Photography</SelectItem>
                      <SelectItem value="portrait">Portrait Sessions</SelectItem>
                      <SelectItem value="model">Model Shoots</SelectItem>
                      <SelectItem value="videography">Event Videography</SelectItem>
                      <SelectItem value="baby">Baby Photography</SelectItem>
                      <SelectItem value="corporate">Corporate Photography</SelectItem>
                      <SelectItem value="drone">Drone Shoots</SelectItem>
                      <SelectItem value="commercial">Ad Films</SelectItem>
                      <SelectItem value="product">Product Photography</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input
                  placeholder="Preferred Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="transition-all duration-300 focus:scale-105"
                />
                <Textarea
                  placeholder="Tell us about your project and requirements *"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-marvel-yellow text-black hover:bg-yellow-400 py-3 transition-all duration-300 hover:scale-105"
                  disabled={!formData.name || !formData.email || !formData.phone || !formData.message}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover-lift transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-marvel-yellow rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                          <item.icon className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          {item.action ? (
                            <a 
                              href={item.action}
                              target={item.action.startsWith('http') ? '_blank' : '_self'}
                              rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="text-gray-600 hover:text-marvel-yellow transition-colors duration-300"
                            >
                              {item.info}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.info}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="mb-8 hover-lift transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-marvel-yellow rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <Clock className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                        <p className="text-sm text-marvel-yellow">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-xl p-4 transition-all duration-300 hover:scale-110 hover:shadow-2xl min-w-[120px] flex items-center justify-center animate-scale-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col items-center space-y-2 text-white">
                        <social.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-125" />
                        <span className="text-sm font-medium">{social.name}</span>
                      </div>
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our studio in Palani</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.6036755579715!2d77.46410306221485!3d10.445191658361018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9d92db48b0631%3A0x367b94b9ee37a889!2sMARVEL%20SNAP%20STUDIO!5e1!3m2!1sen!2sin!4v1756068305727!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Marvel Snap Studio Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
