"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Mail, Facebook } from "lucide-react";

const storeHours = [
  { day: "Monday", hours: "11:30 AM - 8:00 PM" },
  { day: "Tuesday", hours: "11:30 AM - 8:00 PM" },
  { day: "Wednesday", hours: "11:30 AM - 8:00 PM" },
  { day: "Thursday", hours: "11:30 AM - 8:00 PM" },
  { day: "Friday", hours: "11:30 AM - 8:00 PM" },
  { day: "Saturday", hours: "11:30 AM - 8:00 PM" },
  { day: "Sunday", hours: "11:30 AM - 7:00 PM" }
];

export function ContactSection() {
  console.log("ContactSection: Component rendered");

  const handlePhoneCall = () => {
    console.log("ContactSection: Phone call initiated");
    window.open('tel:7183211977', '_self');
  };

  const handleEmailClick = () => {
    console.log("ContactSection: Email clicked");
    window.open('mailto:empirepetfish@gmail.com', '_self');
  };

  const handleDirectionsClick = () => {
    console.log("ContactSection: Directions clicked");
    window.open('https://maps.google.com/?q=164-13+Northern+Boulevard+Flushing+NY+11358', '_blank');
  };

  const handleFacebookClick = () => {
    console.log("ContactSection: Facebook clicked");
    window.open('https://facebook.com/empirepetfish', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Visit Our Store
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to see you in person! Come explore our aquatic wonderland and 
            let our experts help you find the perfect fish for your aquarium.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full aquatic-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-ocean-600" />
                  </div>
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                       onClick={handlePhoneCall}>
                    <Phone className="w-5 h-5 text-ocean-600" />
                    <div>
                      <p className="font-semibold text-gray-800">(718) 321-1977</p>
                      <p className="text-sm text-gray-600">Call for availability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                       onClick={handleEmailClick}>
                    <Mail className="w-5 h-5 text-ocean-600" />
                    <div>
                      <p className="font-semibold text-gray-800">empirepetfish@gmail.com</p>
                      <p className="text-sm text-gray-600">Email us your questions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                       onClick={handleFacebookClick}>
                    <Facebook className="w-5 h-5 text-ocean-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Facebook Page</p>
                      <p className="text-sm text-gray-600">Follow for updates</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePhoneCall}
                  className="w-full bg-coral-500 hover:bg-coral-600 text-white font-semibold"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Store Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full aquatic-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <div className="w-12 h-12 bg-aqua-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-aqua-600" />
                  </div>
                  Store Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {storeHours.map((schedule, index) => {
                    const isToday = new Date().getDay() === (index + 1) % 7;
                    const isSunday = schedule.day === "Sunday";
                    
                    return (
                      <div 
                        key={schedule.day}
                        className={`flex justify-between items-center p-3 rounded-lg transition-colors ${
                          isToday ? 'bg-aqua-100 border border-aqua-200' : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <span className={`font-medium ${isToday ? 'text-aqua-800' : 'text-gray-700'}`}>
                          {schedule.day}
                          {isToday && <Badge className="ml-2 bg-aqua-500 text-white text-xs">Today</Badge>}
                        </span>
                        <span className={`${isToday ? 'text-aqua-800 font-semibold' : 'text-gray-600'} ${
                          isSunday ? 'text-coral-600' : ''
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Open Now</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Come visit us today for the best selection!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full aquatic-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-coral-600" />
                  </div>
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Empire Pet Fish</h3>
                  <p className="text-gray-600 leading-relaxed">
                    164-13 Northern Boulevard<br />
                    Flushing, New York 11358<br />
                    United States
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Badge className="bg-blue-100 text-blue-800 w-full justify-center py-2">
                    🚗 In-store Pickup Available
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 w-full justify-center py-2">
                    🎯 Serving NY & Surrounding States
                  </Badge>
                </div>
                
                <Button 
                  onClick={handleDirectionsClick}
                  className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p>🚶‍♂️ Walking distance from Northern Blvd stations</p>
                  <p>🅿️ Parking available nearby</p>
                  <p>♿ Accessible entrance</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="aquatic-hover">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Your Aquatic Empire Awaits
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Whether you're a beginner starting your first tank or an experienced aquarist 
                    looking for rare species, we're here to help you create the perfect underwater world. 
                    Our knowledgeable staff and quality fish selection make us Queens' premier 
                    destination for aquarium enthusiasts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-ocean-200 text-ocean-700">Bulk Discounts</Badge>
                    <Badge variant="outline" className="border-aqua-200 text-aqua-700">Loyalty Program</Badge>
                    <Badge variant="outline" className="border-coral-200 text-coral-700">Expert Advice</Badge>
                    <Badge variant="outline" className="border-emerald-200 text-emerald-700">Quality Guaranteed</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-64 h-64 bg-aquatic-gradient rounded-full flex items-center justify-center animate-float">
                      <div className="text-6xl">🐠</div>
                    </div>
                    <div className="absolute -top-4 -right-4 bg-coral-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      25+ Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}