"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log("Navigation: Component rendered", { isScrolled, isMobileMenuOpen });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      console.log("Navigation: Scroll detected", { scrollY: window.scrollY, isScrolled: scrolled });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log("Navigation: Scrolling to section", { sectionId });
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneCall = () => {
    console.log("Navigation: Phone call initiated");
    window.open('tel:7183211977', '_self');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-aquatic-gradient rounded-full flex items-center justify-center">
                <span className="text-white text-xl lg:text-2xl">🐠</span>
              </div>
              <div>
                <h1 className={`font-bold text-lg lg:text-xl ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  Empire Pet Fish
                </h1>
                <p className={`text-xs lg:text-sm ${
                  isScrolled ? 'text-gray-600' : 'text-blue-100'
                }`}>
                  Your Aquatic Empire
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('fish-categories')}
              className={`font-medium transition-colors hover:text-aqua-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Fish Collection
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className={`font-medium transition-colors hover:text-aqua-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Featured Fish
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors hover:text-aqua-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Visit Store
            </button>
            
            <Button
              onClick={handlePhoneCall}
              className="bg-coral-500 hover:bg-coral-600 text-white font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              (718) 321-1977
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2"
        >
          <div className="p-4 space-y-4">
            <button
              onClick={() => scrollToSection('fish-categories')}
              className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Fish Collection
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Featured Fish
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium"
            >
              Visit Store
            </button>
            
            <div className="pt-2 border-t">
              <Button
                onClick={handlePhoneCall}
                className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (718) 321-1977
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}