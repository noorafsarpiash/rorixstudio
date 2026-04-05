"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Dynamically import react-pageflip with Next.js to prevent hydration errors on SSR
// @ts-ignore
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

const Hotspot = ({ top, left, text }: { top: string; left: string; text: string }) => (
  <div className="absolute z-10 cursor-pointer w-8 h-8 group/spot" style={{ top, left }}>
    <div className="w-8 h-8 rounded-full border-2 border-[var(--gold)] absolute top-0 left-0 animate-[pulse-ring_2s_ease_infinite]" />
    <div className="w-3 h-3 bg-[var(--gold)] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-11 left-1/2 -translate-x-1/2 bg-[rgba(10,10,10,0.95)] border border-[var(--gold)] px-3.5 py-2.5 rounded-sm whitespace-nowrap text-[12px] text-[var(--silk-light)] tracking-[0.05em] opacity-0 pointer-events-none transition-opacity duration-300 min-w-[220px] text-center group-hover/spot:opacity-100">
      {text}
    </div>
  </div>
);

const Page = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  // Spine effect depending on the page type to give it a 3D book feel
  // On left pages, shadow is on the right. On right pages, shadow is on the left.
  const spineClass = props.density === "hard" 
    ? "" // Cover doesn't need huge spine shadow
    : props.isLeft 
      ? "shadow-[-inset_-30px_0_50px_rgba(0,0,0,0.8)] border-r-0" 
      : "shadow-[inset_30px_0_50px_rgba(0,0,0,0.8)] border-l-0";

  return (
    <div className="page" ref={ref} data-density={props.density || "soft"}>
      <div 
        className={cn(
          "page-content w-full h-full relative overflow-hidden bg-[var(--obsidian)]",
          "border border-[rgba(212,175,55,0.4)] transition-all duration-300",
          spineClass,
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
});

Page.displayName = 'Page';

export function DigitalBrochure() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Create an audio element for the page turn sound.
    // Using a reliable subtle paper flip sound placeholder url.
    // Ensure it is pre-loaded but starts muted or low volume for luxury feel.
    audioRef.current = new Audio("https://actions.google.com/sounds/v1/foley/turn_page.ogg");
    audioRef.current.volume = 0.2; // Soft volume
  }, []);

  const onPageFlip = (e: any) => {
    setCurrentPage(e.data);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Audio play blocked until user interacts', e));
    }
  };

  const pages = [
    // Page 0: Cover (Right)
    {
      density: "hard",
      isLeft: false,
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=960&q=80')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80 z-[1]" />
          <div className="z-[2] text-center border-2 border-[var(--gold)] p-10 bg-[rgba(10,10,10,0.6)] backdrop-blur-md m-6 shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--obsidian)] px-4 text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Exclusive</div>
            <h1 className="text-4xl md:text-5xl font-serif text-white font-light leading-snug mt-4 tracking-tight">
              INTERIOR<br />
              <em className="text-[var(--gold)] italic">ANTHOLOGY</em>
            </h1>
            <p className="mt-8 text-[10px] text-[var(--silk-light)] tracking-[0.5em] uppercase font-light">EXCEPTIONAL SPACES</p>
          </div>
          <div className="absolute bottom-6 right-6 text-[var(--gold)] animate-pulse text-2xl z-[2]">&#8618;</div>
        </div>
      )
    },
    // Page 1: Inside Cover (Left)
    {
      density: "soft",
      isLeft: true,
      content: (
        <div className="w-full h-full p-10 flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] bg-[var(--obsidian)] blend-multiply">
           <h2 className="text-3xl font-serif text-[var(--gold)] mb-8 border-b border-[var(--gold)] pb-4 opacity-70">Curated Spaces</h2>
           <ul className="text-[var(--silk-light)] space-y-6 text-sm tracking-widest uppercase">
              <li className="flex items-center gap-4"><span className="text-[var(--gold)]">01</span> Kitchen Masterclass</li>
              <li className="flex items-center gap-4"><span className="text-[var(--gold)]">02</span> Luxury Living</li>
              <li className="flex items-center gap-4"><span className="text-[var(--gold)]">03</span> Bespoke Bedroom</li>
              <li className="flex items-center gap-4"><span className="text-[var(--gold)]">04</span> Smart Integration</li>
           </ul>
        </div>
      )
    },
    // Page 2: Kitchen (Right)
    {
      density: "soft",
      isLeft: false,
      content: (
        <div className="w-full h-full relative bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=960&q=80')] bg-cover bg-center group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-8 right-8">
            <span className="inline-block px-3 py-1 bg-[var(--gold)] text-[var(--obsidian)] text-[10px] tracking-[0.2em] uppercase font-bold mb-3">01 — Kitchen</span>
            <p className="font-serif text-3xl text-white mt-1 leading-snug drop-shadow-xl">Precision Crafted.<br /><em className="text-[var(--gold)]">Eternally Beautiful.</em></p>
          </div>
          <Hotspot top="38%" left="35%" text="Italian Calacatta Marble Countertops" />
          <Hotspot top="55%" left="65%" text="German Hettich Soft-Close Hardware" />
        </div>
      )
    },
    // Page 3: Living Room Left (Left)
    {
      density: "soft",
      isLeft: true,
      content: (
        <div className="w-full h-full relative bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=960&q=80')] bg-cover bg-center">
           <div className="absolute inset-0 bg-black/40" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-[rgba(10,10,10,0.85)] border border-[rgba(212,175,55,0.4)] backdrop-blur-md max-w-[80%]">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)] mb-2 block">02 — Living Spaces</span>
                <h3 className="font-serif text-3xl text-white leading-snug">Every Corner.<br /><em className="text-[var(--gold)]">A Statement.</em></h3>
              </div>
           </div>
        </div>
      )
    },
    // Page 4: Living Room Details (Right)
    {
      density: "soft",
      isLeft: false,
      content: (
        <div className="w-full h-full p-10 flex flex-col justify-center bg-[var(--obsidian-soft)] border-l border-[rgba(212,175,55,0.1)]">
           <Hotspot top="20%" left="20%" text="Explore the details" />
           <p className="text-[12px] text-[var(--gold)] uppercase tracking-[0.2em] mb-4">Material Quality</p>
           <h2 className="font-serif text-4xl text-white mb-6">Unrivaled<br/>Craftsmanship</h2>
           <p className="text-[var(--silk-grey)] text-sm leading-relaxed mb-6">We source only the finest fabrics, premium woods, and statement metals to build living spaces that exude opulence while remaining intimately comfortable.</p>
           <div className="h-[200px] w-full bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80')] bg-cover bg-center border border-[rgba(212,175,55,0.3)] shadow-lg mt-auto" />
        </div>
      )
    },
    // Page 5: Bedroom (Left)
    {
      density: "soft",
      isLeft: true,
      content: (
        <div className="w-full h-full relative bg-[url('https://images.unsplash.com/photo-1540518614846-7eded433c457?w=960&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent" />
          <Hotspot top="50%" left="50%" text="Premium Bedding & Ambient Lighting" />
        </div>
      )
    },
    // Page 6: Bedroom Text (Right)
    {
      density: "soft",
      isLeft: false,
      content: (
        <div className="w-full h-full p-10 flex flex-col justify-center bg-[var(--obsidian)] border-l border-[rgba(212,175,55,0.1)] relative">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[var(--gold)] opacity-5 blur-[100px]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-4">03 — Bedroom Suite</span>
          <h3 className="font-serif text-4xl text-white mb-4 leading-tight">Tailored to<br /><span className="text-[var(--gold)] italic">Your Vision</span></h3>
          <p className="text-[13px] text-[var(--silk-light)] leading-relaxed mb-8">Every element considered. Every material curated. Every space a sanctuary designed specifically to your rhythm of life.</p>
          <button className="self-start px-6 py-3 border border-[var(--gold)] text-[var(--gold)] text-[11px] uppercase tracking-[0.15em] hover:bg-[var(--gold)] hover:text-[var(--obsidian)] transition-colors">View Projects</button>
        </div>
      )
    },
    // Page 7: Smart Home (Left)
    {
      density: "soft",
      isLeft: true,
      content: (
        <div className="w-full h-full relative p-10 bg-[var(--obsidian-soft)] flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-[var(--gold)] mb-5">04 — Smart Living</p>
          <h2 className="font-serif text-4xl leading-[1.2] mb-4 text-white">Intelligence Meets<br /><span className="text-[var(--gold)] italic">Elegance</span></h2>
          <p className="text-[13px] text-[var(--silk-grey)] mt-4 leading-[1.8] mb-8">Seamless control of lighting, climate, security, and entertainment at your fingertips.</p>
          <div className="flex gap-4 flex-wrap">
            <span className="px-3 py-1.5 border border-[rgba(212,175,55,0.4)] text-[10px] tracking-[0.1em] text-[var(--gold)] uppercase rounded-sm">Lutron</span>
            <span className="px-3 py-1.5 border border-[rgba(212,175,55,0.4)] text-[10px] tracking-[0.1em] text-[var(--gold)] uppercase rounded-sm">Crestron</span>
            <span className="px-3 py-1.5 border border-[rgba(212,175,55,0.4)] text-[10px] tracking-[0.1em] text-[var(--gold)] uppercase rounded-sm">Savant</span>
          </div>
        </div>
      )
    },
    // Page 8: Smart Home Image (Right)
    {
      density: "soft",
      isLeft: false,
      content: (
        <div className="w-full h-full relative bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=960&q=80')] bg-cover bg-center">
          <Hotspot top="45%" left="75%" text="Automated Control Panel" />
        </div>
      )
    },
    // Page 9: Back Cover
    {
      density: "hard",
      isLeft: true,
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--obsidian)] border-[4px] border-[rgba(212,175,55,0.2)]">
          <div className="w-16 h-16 border border-[var(--gold)] rotate-45 mb-8 flex items-center justify-center">
            <div className="w-6 h-6 bg-[var(--gold)] rotate-0 rounded-sm" />
          </div>
          <p className="text-[12px] uppercase tracking-[0.3em] text-[var(--silk-light)] text-center mb-2">Ready to Elevate</p>
          <h2 className="font-serif text-3xl text-[var(--gold)]">Your Space?</h2>
          <a href="#book" className="mt-8 text-[11px] uppercase tracking-[0.2em] border-b border-[var(--gold)] text-white hover:text-[var(--gold)] pb-1 transition-colors">Book Consultation</a>
        </div>
      )
    }
  ];

  return (
    <section className="relative w-full py-20 min-h-[90vh] bg-[var(--obsidian)] overflow-hidden flex flex-col items-center group">
      <div className="text-center mb-12 relative z-10 px-5 select-none">
        <span className="text-[12px] font-medium tracking-[0.35em] md:tracking-[0.5em] uppercase text-[var(--gold)] mb-4 block">
          DESIGN ANTHOLOGY
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-white leading-tight">
          Explore Our <em className="text-[var(--gold)] italic">Masterpieces</em>
        </h2>
        <p className="text-[var(--silk-grey)] text-[10px] md:text-[12px] tracking-[0.3em] uppercase mt-5">DISCOVER THE ART OF LIVING</p>
      </div>

      <div className={cn("w-full max-w-[1000px] flex justify-center items-center perspective-1000 transition-opacity duration-1000", isLoaded ? "opacity-100" : "opacity-0")}>
        {/* We add a custom generic rendering wrapper because react-pageflip will complain if it's rendered on server */}
        {isMounted && HTMLFlipBook ? (
          <div className="drop-shadow-2xl shadow-black relative z-10">
            {/* @ts-ignore */}
            <HTMLFlipBook
              width={450}
              height={600}
              size="stretch"
              minWidth={315}
              maxWidth={1000}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onPageFlip}
              onInit={() => setIsLoaded(true)}
              className="flip-book shadow-2xl mx-auto"
            >
              {pages.map((p, i) => (
                <Page key={i} density={p.density} isLeft={p.isLeft}>
                  {p.content}
                </Page>
              ))}
            </HTMLFlipBook>
          </div>
        ) : (
          <div className="w-[450px] h-[600px] border border-[var(--gold)] animate-pulse flex items-center justify-center text-[var(--gold)] font-serif">
            Loading Listings...
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center gap-4 text-[var(--silk-light)] text-[12px] tracking-[0.1em] uppercase z-10">
         <span>&larr;</span> Drag or click edges to flip <span>&rarr;</span>
      </div>

      {/* Ambient background glow for luxury feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-[var(--gold)] blur-[150px] opacity-[0.03] z-[0] pointer-events-none" />

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .flip-book {
           filter: drop-shadow(0 25px 50px rgba(0,0,0,0.8));
        }
      `}</style>
    </section>
  );
}
