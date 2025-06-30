"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FishCategories } from "@/components/fish-categories";
import { FishShowcase } from "@/components/fish-showcase";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

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
