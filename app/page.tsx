"use client";

import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FishCategories } from "@/components/ui/fish-categories";
import { FishShowcase } from "@/components/ui/fish-showcase";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  console.log("Home page: Landing page rendered");

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="hero">
        <HeroSection />
      </section>
      
      <FishCategories />
      
      <section id="showcase">
        <FishShowcase />
      </section>
      
      <ContactSection />
      
      <Footer />
    </main>
  );
}