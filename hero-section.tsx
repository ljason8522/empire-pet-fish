"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export function HeroSection() {
  console.log("HeroSection: Component rendered");

  return (
    <section className="relative min-h-screen wave-bg flex items-center justify-center overflow-hidden">
      {/* Floating bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Empire Pet Fish
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-blue-100 max-w-2xl"
            >
              Your Aquatic Empire Awaits. Discover quality freshwater fish & supplies in the heart of New York.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-blue-100">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">(718) 321-1977</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">164-13 Northern Boulevard, Flushing, NY</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Clock className="w-5 h-5" />
                <span className="text-lg">Open Daily 11:30 AM - 8:00 PM</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-coral-500 hover:bg-coral-600 text-white font-semibold px-8 py-3 text-lg"
                onClick={() => {
                  console.log("Hero: Contact button clicked");
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Visit Our Store
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-ocean-600 font-semibold px-8 py-3 text-lg"
                onClick={() => {
                  console.log("Hero: Fish catalog button clicked");
                  document.getElementById('fish-categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Fish
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right side - Featured Fish Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-8 animate-float">
              <motion.img
                src="https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Koi%20Short%20Body%20Long%20Fin.jpg/:/rs=w:800,h:600"
                alt="Beautiful Koi Fish"
                className="w-full h-auto rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute -bottom-4 -right-4 bg-coral-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                Premium Quality
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}