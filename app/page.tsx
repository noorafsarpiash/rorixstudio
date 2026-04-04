"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { DigitalBrochure } from "@/components/DigitalBrochure";
import { Stats } from "@/components/Stats";
import { StyleQuiz } from "@/components/StyleQuiz";
import { Testimonials } from "@/components/Testimonials";
import { Portfolio } from "@/components/Portfolio";
import { BookingWizard } from "@/components/BookingWizard";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";
import { ContactPage } from "@/components/ContactPage";
import { CostEstimator } from "@/components/CostEstimator";
import { DigitalIdentity } from "@/components/DigitalIdentity";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="home">
        <Hero />
        <Marquee />
      </div>
      <div id="about">
        <Stats />
        <Testimonials />
      </div>
      <div id="services">
        <DigitalBrochure />
        <StyleQuiz />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="book">
        <BookingWizard />
      </div>
      <div id="contact">
        <MapSection />
        <DigitalIdentity />
        <ContactPage />
      </div>
      <CostEstimator />
      <Footer />
      <FloatingElements />
    </main>
  );
}
