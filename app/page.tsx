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
        
        {/* Instant Property Valuation - Moved High Conversion Section */}
        <div id="free-estimate" className="w-full relative py-20 bg-[var(--obsidian)]">
          <div className="w-full max-w-[1200px] mx-auto px-5 mb-8">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-40 mb-12"></div>
            <div className="text-center">
              <span className="text-[12px] md:text-sm font-medium tracking-[0.35em] uppercase text-[var(--gold)] mb-4 block">
                Instant Estimate
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white font-serif">
                Instant <span className="text-[var(--gold)] italic">Property Valuation</span>
              </h2>
            </div>
          </div>
          <CostEstimator />
        </div>

        <StyleQuiz />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="book">
        <BookingWizard />
      </div>
      <div id="contact" className="w-full flex flex-col">
        <ContactPage />
        <div className="w-full max-w-[1200px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-40 mb-16"></div>
        <DigitalIdentity />
        <MapSection />
      </div>
      <Footer />
      <FloatingElements />
    </main>
  );
}
