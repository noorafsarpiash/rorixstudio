"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const slidesData = [
  {
    id: 1,
    title: "01 — KITCHEN MASTERCLASS",
    bg: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80')",
    tagline: `"Precision Crafted.<br>Eternally Beautiful."`,
    hotspots: [
      { top: "38%", left: "28%", text: "Italian Calacatta Marble Countertops" },
      { top: "55%", left: "55%", text: "German Hettich Soft-Close Hardware" },
      { top: "42%", left: "72%", text: "Custom Lacquered Handleless Cabinetry" }
    ]
  },
  {
    id: 2,
    title: "02 — LUXURY LIVING ROOM",
    isSplit: true,
    tagline: `"Every Corner.<br><em>A Statement.</em>"`
  },
  {
    id: 3,
    title: "03 — BESPOKE BEDROOM SUITE",
    bg: "url('https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1920&q=80')",
    panel: "right",
    panelEyebrow: "Bedroom Suite",
    panelHeadline: "Tailored to<br><span class='text-[var(--gold)] italic'>Your Vision</span>",
    panelText: "Every element considered. Every material curated. Every space a sanctuary."
  },
  {
    id: 4,
    title: "04 — SMART HOME SHOWCASE",
    bg: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
    panel: "left",
    panelEyebrow: "Smart Living",
    panelHeadline: "Intelligence Meets<br><span class='text-[var(--gold)] italic'>Elegance</span>",
    panelText: "Seamless control of lighting, climate, security, and entertainment at your fingertips.",
    logos: ["Lutron", "Crestron", "Savant"]
  }
];

export function DigitalBrochure() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
     // minimal placeholder for drag handling
  };

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[var(--obsidian)] group">
      <div 
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, i) => (
          <div key={slide.id} className="min-w-full h-full relative overflow-hidden shrink-0">
            {slide.isSplit ? (
              <>
                <div className="absolute left-0 top-0 w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=960&q=80')" }} />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=960&q=80')" }} />
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[var(--gold)] z-[5]" />
              </>
            ) : (
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-transform duration-[6s] ease-out", 
                  currentSlide === i ? "scale-105" : "scale-100"
                )}
                style={{ backgroundImage: slide.bg }} 
              />
            )}
            
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[rgba(10,10,10,0.95)] to-transparent z-[2]" />
            <div className={cn("absolute inset-0 z-[2]", !slide.isSplit && slide.panel ? "bg-black/40" : "bg-transparent")} />
            <div className="grain-overlay" />

            <span className="absolute top-[32px] left-[40px] z-10 text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--gold)] font-sans">
              {slide.title}
            </span>
            <span className="absolute top-[32px] right-[40px] z-10 text-[13px] font-normal tracking-[0.1em] text-[var(--gold)] font-sans">
              0{i + 1} / 04
            </span>

            {slide.hotspots?.map((spot, idx) => (
              <div key={idx} className="absolute z-10 cursor-pointer w-8 h-8 group/spot" style={{ top: spot.top, left: spot.left }}>
                <div className="w-8 h-8 rounded-full border-2 border-[var(--gold)] absolute top-0 left-0 animate-[pulse-ring_2s_ease_infinite]" />
                <div className="w-3 h-3 bg-[var(--gold)] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-11 left-1/2 -translate-x-1/2 bg-[rgba(10,10,10,0.95)] border border-[var(--gold)] px-3.5 py-2.5 rounded-sm whitespace-nowrap text-[12px] text-[var(--silk-light)] tracking-[0.05em] opacity-0 pointer-events-none transition-opacity duration-300 min-w-[220px] text-center group-hover/spot:opacity-100">
                  {spot.text}
                </div>
              </div>
            ))}

            {slide.tagline && !slide.panel && (
              <div className={cn("absolute z-10", slide.isSplit ? "bottom-[60px] left-1/2 -translate-x-1/2 text-center drop-shadow-2xl text-shadow-xl" : "bottom-[60px] left-[40px] max-w-[600px]")}>
                <p 
                  className={cn("font-serif text-[clamp(26px,4vw,42px)] text-white font-normal leading-[1.2] mb-2 [&>em]:text-[var(--gold)] [&>em]:not-italic")}
                  dangerouslySetInnerHTML={{ __html: slide.tagline }}
                />
              </div>
            )}

            {slide.panel && (
              <div 
                className={cn(
                  "absolute top-0 bottom-0 w-[400px] bg-[rgba(10,10,10,0.85)] backdrop-blur-md z-10 flex flex-col justify-center px-[50px] py-[60px]",
                  slide.panel === 'right' ? "right-0 border-l border-[rgba(212,175,55,0.3)]" : "left-0 border-r border-[rgba(212,175,55,0.3)]"
                )}
              >
                <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--gold)] mb-5">{slide.panelEyebrow}</p>
                <h2 className="font-serif text-[48px] leading-[1.1] mb-2 text-white" dangerouslySetInnerHTML={{ __html: slide.panelHeadline || '' }} />
                <p className="text-[14px] text-[var(--silk-grey)] mt-4 leading-[1.8]">{slide.panelText}</p>
                
                {slide.panel === 'right' && (
                  <button className="inline-block mt-8 px-8 py-3.5 border border-[var(--gold)] text-[var(--gold)] text-[12px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--obsidian)] self-start">
                    View This Project
                  </button>
                )}
                {slide.logos && (
                  <div className="flex gap-6 mt-7">
                    {slide.logos.map(logo => (
                      <span key={logo} className="px-4 py-2 border border-[rgba(212,175,55,0.4)] text-[12px] tracking-[0.15em] text-[var(--gold)] uppercase rounded-sm font-medium">
                        {logo}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="absolute z-20 top-1/2 -translate-y-1/2 left-6 w-[52px] h-[52px] rounded-full bg-[rgba(10,10,10,0.8)] border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-xl cursor-pointer transition-all hover:bg-[var(--gold)] hover:text-[var(--obsidian)] opacity-0 group-hover:opacity-100" onClick={() => setCurrentSlide(prev => (prev - 1 + slidesData.length) % slidesData.length)}>&#8249;</button>
      <button className="absolute z-20 top-1/2 -translate-y-1/2 right-6 w-[52px] h-[52px] rounded-full bg-[rgba(10,10,10,0.8)] border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-xl cursor-pointer transition-all hover:bg-[var(--gold)] hover:text-[var(--obsidian)] opacity-0 group-hover:opacity-100" onClick={() => setCurrentSlide(prev => (prev + 1) % slidesData.length)}>&#8250;</button>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slidesData.map((_, i) => (
          <div 
            key={i} 
            className={cn("w-2 h-2 rounded-full border border-[var(--gold)] cursor-pointer transition-colors duration-300", currentSlide === i ? "bg-[var(--gold)]" : "bg-transparent")}
            onClick={() => setCurrentSlide(i)} 
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
