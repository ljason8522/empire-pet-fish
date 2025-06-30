"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const featuredFish = [
  {
    name: "Elephant Nose Fish",
    category: "Exotic",
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Elephant%20Nose-08ff4f1.jpg/:/rs=w:600,h:400",
    specialty: "Unique & Rare",
    description: "Fascinating fish with unique electrical sensing abilities"
  },
  {
    name: "Koi Short Body Long Fin",
    category: "Koi",
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Koi%20Short%20Body%20Long%20Fin.jpg/:/rs=w:600,h:400",
    specialty: "Premium Quality",
    description: "Beautiful Japanese koi with distinctive long flowing fins"
  },
  {
    name: "Tiger Parrot Cichlid",
    category: "Cichlids",
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Parrot%20Cichlid%20Tiger.jpg/:/rs=w:600,h:400",
    specialty: "Popular Choice",
    description: "Vibrant hybrid cichlid with stunning tiger patterns"
  },
  {
    name: "Green Scat",
    category: "Brackish",
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Scat%20Green.jpg/:/rs=w:600,h:400",
    specialty: "Hardy & Active",
    description: "Schooling fish perfect for brackish water setups"
  }
];

export function FishShowcase() {
  console.log("FishShowcase: Component rendered");

  const handleContactClick = () => {
    console.log("FishShowcase: Contact for availability clicked");
    window.open('tel:7183211977', '_self');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-600 via-aqua-500 to-ocean-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Fish Selection
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our most popular and unique fish species. All fish are healthy, 
            well-cared for, and ready for their new aquatic homes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredFish.map((fish, index) => (
            <motion.div
              key={fish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card aquatic-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={fish.image}
                    alt={fish.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-coral-500 text-white font-semibold">
                      {fish.specialty}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="outline" className="bg-white/90 text-gray-800 border-white">
                      {fish.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {fish.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {fish.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <span className="text-lg font-semibold text-gray-500">
                        Call for Availability & Pricing
                      </span>
                    </div>
                    <Button 
                      onClick={handleContactClick}
                      className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Complete Aquarium Solutions
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Beyond fish, we provide everything you need for a thriving aquarium including 
              food, filters, decorations, and expert advice for setup and maintenance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl mb-2">🍤</div>
                <h4 className="font-semibold text-white">Premium Food</h4>
                <p className="text-blue-200 text-sm">High-quality nutrition for all fish types</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">🌿</div>
                <h4 className="font-semibold text-white">Aquarium Supplies</h4>
                <p className="text-blue-200 text-sm">Filters, decorations, and maintenance tools</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl mb-2">👨‍⚕️</div>
                <h4 className="font-semibold text-white">Expert Support</h4>
                <p className="text-blue-200 text-sm">Professional guidance for all skill levels</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}