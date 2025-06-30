"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Mail, Clock, Facebook } from "lucide-react";

export function Footer() {
  console.log("Footer: Component rendered");

  const handlePhoneCall = () => {
    console.log("Footer: Phone call initiated");
    window.open('tel:7183211977', '_self');
  };

  const handleEmailClick = () => {
    console.log("Footer: Email clicked");
    window.open('mailto:empirepetfish@gmail.com', '_self');
  };

  const handleDirectionsClick = () => {
    console.log("Footer: Directions clicked");
    window.open('https://maps.google.com/?q=164-13+Northern+Boulevard+Flushing+NY+11358', '_blank');
  };

  const handleFacebookClick = () => {
    console.log("Footer: Facebook clicked");
    window.open('https://facebook.com/empirepetfish', '_blank');
  };

  const scrollToTop = () => {
    console.log("Footer: Scroll to top clicked");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-ocean-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-aquatic-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🐠</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Empire Pet Fish</h3>
                  <p className="text-blue-200">Your Aquatic Empire Awaits</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Serving the New York aquarium community with quality freshwater fish, 
                expert advice, and comprehensive aquarium supplies since our founding. 
                We're passionate about helping you create the perfect underwater world.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-aqua-600 hover:bg-aqua-700">Quality Guaranteed</Badge>
                <Badge className="bg-coral-600 hover:bg-coral-700">Expert Advice</Badge>
                <Badge className="bg-ocean-600 hover:bg-ocean-700">Local Business</Badge>
              </div>
              
              <Button 
                onClick={scrollToTop}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Back to Top
              </Button>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-aqua-300">Quick Contact</h4>
              <div className="space-y-4">
                <button
                  onClick={handlePhoneCall}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group w-full text-left"
                >
                  <div className="w-10 h-10 bg-coral-600 rounded-lg flex items-center justify-center group-hover:bg-coral-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">(718) 321-1977</p>
                    <p className="text-sm text-gray-400">Call for availability</p>
                  </div>
                </button>
                
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group w-full text-left"
                >
                  <div className="w-10 h-10 bg-ocean-600 rounded-lg flex items-center justify-center group-hover:bg-ocean-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-gray-400">empirepetfish@gmail.com</p>
                  </div>
                </button>
                
                <button
                  onClick={handleFacebookClick}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group w-full text-left"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Follow Us</p>
                    <p className="text-sm text-gray-400">Facebook updates</p>
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Store Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-aqua-300">Store Information</h4>
              <div className="space-y-4">
                <button
                  onClick={handleDirectionsClick}
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group w-full text-left"
                >
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">164-13 Northern Boulevard</p>
                    <p className="text-sm text-gray-400">Flushing, NY 11358</p>
                    <p className="text-sm text-aqua-400 underline">Get Directions</p>
                  </div>
                </button>
                
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Store Hours</p>
                    <p className="text-sm text-gray-400">Mon-Sat: 11:30 AM - 8:00 PM</p>
                    <p className="text-sm text-gray-400">Sunday: 11:30 AM - 7:00 PM</p>
                  </div>
                </div>
                
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-green-300">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-sm">Open Now</span>
                  </div>
                  <p className="text-xs text-green-400 mt-1">
                    Visit us today for the best selection!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © 2025 Empire Pet Fish - All Rights Reserved.
              </p>
              <p className="text-sm text-gray-500">
                Serving New York & Surrounding States: Pennsylvania, New Jersey, Connecticut, Rhode Island, Massachusetts, and Vermont
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <span>Aquarium Store</span> •
              <span>Tropical Fish</span> •
              <span>Freshwater Fish</span> •
              <span>Queens, NY</span> •
              <span>Flushing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}