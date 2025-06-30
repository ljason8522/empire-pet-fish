"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fishCategories = [
  {
    name: "Tropical Fish",
    description: "Colorful and vibrant species perfect for community tanks",
    species: ["Guppies", "Neon Tetras", "Angelfish", "Cardinal Tetras"],
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/IMG_0458.jpg/:/rs=w:800,h:600",
    color: "from-coral-400 to-coral-600"
  },
  {
    name: "Exotic Fish",
    description: "Rare and unique species for advanced aquarists",
    species: ["Discus", "Arowana", "Gar", "Datnoids"],
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Elephant%20Nose-08ff4f1.jpg/:/rs=w:800,h:600",
    color: "from-ocean-400 to-ocean-600"
  },
  {
    name: "Freshwater Classics",
    description: "Hardy and easy-to-care-for fish for beginners",
    species: ["Goldfish", "Betta Fish", "Cichlids", "Koi"],
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Parrot%20Cichlid%20Tiger.jpg/:/rs=w:800,h:600",
    color: "from-aqua-400 to-aqua-600"
  },
  {
    name: "Brackish Water",
    description: "Specialized fish for brackish water environments",
    species: ["Green Scat", "Figure-8 Puffer", "Archerfish", "Mono Argenteus"],
    image: "https://img1.wsimg.com/isteam/ip/3debd722-3486-4f57-8200-8b75d84f2adf/Scat%20Green.jpg/:/rs=w:800,h:600",
    color: "from-emerald-400 to-emerald-600"
  }
];

export function FishCategories() {
  console.log("FishCategories: Component rendered");

  return (
    <section id="fish-categories" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Dive into Our Fish Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From vibrant tropical species to rare exotic fish, we offer a diverse selection 
            sourced from reputable breeders to ensure health and quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fishCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full aquatic-hover group cursor-pointer overflow-hidden">
                <div className="relative">
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-800 font-semibold">
                      {category.species.length}+ Species
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.species.map((species) => (
                      <Badge 
                        key={species} 
                        variant="secondary" 
                        className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {species}
                      </Badge>
                    ))}
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
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Empire Pet Fish?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-aqua-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-aqua-600 text-2xl">🐠</span>
                </div>
                <h4 className="font-semibold text-gray-800">Quality Guaranteed</h4>
                <p className="text-gray-600 text-sm">
                  All fish sourced from reputable breeders for optimal health
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-coral-600 text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-gray-800">Expert Guidance</h4>
                <p className="text-gray-600 text-sm">
                  Knowledgeable staff to help beginners and experts alike
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-ocean-600 text-2xl">🎁</span>
                </div>
                <h4 className="font-semibold text-gray-800">Loyalty Rewards</h4>
                <p className="text-gray-600 text-sm">
                  Bulk discounts and loyalty program for frequent customers
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}