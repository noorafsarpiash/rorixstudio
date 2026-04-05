"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const reviews = [
  {
    text: "The kitchen Rorix designed for our villa exceeded every expectation. The Italian marble work is simply breathtaking. Professional team, flawless execution.",
    author: "Ahmed Al Mansouri",
    loc: "Palm Jumeirah Villa",
    rating: 5
  },
  {
    text: "Transformed our penthouse into something from a design magazine. Every detail was considered. Worth every dirham.",
    author: "Sarah Thompson",
    loc: "Downtown Dubai Penthouse",
    rating: 5
  },
  {
    text: "Smart home integration was seamless. Crestron system works perfectly. Rorix delivered on time and on budget.",
    author: "Mohammed Al Rashid",
    loc: "Business Bay Apartment",
    rating: 5
  },
  {
    text: "Our bedroom suite is now my favourite room in the world. The bespoke wardrobes are a masterpiece of craftsmanship.",
    author: "Priya Sharma",
    loc: "Dubai Marina Duplex",
    rating: 5
  },
  {
    text: "Second project with Rorix. They keep raising the bar. The modular kitchen is the centrepiece of our home.",
    author: "James Harrison",
    loc: "Emirates Hills Villa",
    rating: 5
  },
  {
    text: "From concept to handover, the experience was luxury itself. The 3D renders matched reality perfectly.",
    author: "Fatima Al Zaabi",
    loc: "Jumeirah Beach Residence",
    rating: 5
  }
];

function ReviewCard({ rev }: { rev: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-w-full md:min-w-[calc(33.333%-24px)] mr-10 group relative"
    >
      <div className="absolute inset-0 bg-[var(--gold)]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative bg-[var(--obsidian-soft)]/50 backdrop-blur-xl border border-[rgba(212,175,55,0.15)] rounded-sm p-10 hover:border-[rgba(212,175,55,0.6)] transition-all duration-500 overflow-hidden shadow-2xl h-full flex flex-col">
        {/* Verified Badge */}
        <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 border border-[var(--gold)]/20 rounded-full">
           <svg viewBox="0 0 24 24" className="w-3 h-3 text-[var(--gold)]" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
           </svg>
           <span className="text-[9px] uppercase tracking-widest text-white/40">Verified Review</span>
        </div>

        {/* Rating */}
        <div className="flex gap-1.5 mb-8">
           {[...Array(5)].map((_, i) => (
             <svg key={i} className="w-3.5 h-3.5 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
             </svg>
           ))}
        </div>

        <p className="text-[15px] font-serif italic text-white/70 leading-[1.9] mb-10 flex-grow">
          "{rev.text}"
        </p>

        <div className="mt-auto border-t border-[rgba(212,175,55,0.1)] pt-8">
          <p className="font-serif text-[18px] text-[var(--gold)] tracking-wide">{rev.author}</p>
          <p className="text-[11px] text-white/30 uppercase tracking-[0.2em] mt-1.5">{rev.loc}</p>
        </div>

        {/* Google Icon Watermark */}
        <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-24 h-24" fill="currentColor">
            <path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-2.04 2.7l2.64 2.05c1.55-1.42 2.44-3.52 2.44-6.03 0-.41-.04-.82-.12-1.21h-5.06z"/>
            <path d="M12.48 10.92V14.2h4.74c-.2 1.06-.9 1.95-2.04 2.7l2.64 2.05c1.55-1.42 2.44-3.52 2.44-6.03 0-.41-.04-.82-.12-1.21h-5.06z" fill="white"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const timerId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(timerId);
  }, [emblaApi]);

  return (
    <section id="reviews" className="relative py-[140px] md:py-[200px] bg-[var(--bg)] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-[600px]">
            <span className="section-eyebrow block">Client Accolades</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mt-6 leading-tight">
               What Our Clients <br /><em className="text-[var(--gold)] italic">Experience.</em>
            </h2>
          </div>
          <div className="flex items-center gap-6 pb-2">
            <div className="text-right">
              <span className="text-[var(--gold)] font-serif text-5xl font-bold leading-none block">4.9</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Google Rating</span>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div className="flex flex-col gap-1">
               <div className="flex gap-0.5">
                  {[...Array(5)].map((_,i) => <span key={i} className="text-[var(--gold)] text-[10px]">★</span>)}
               </div>
               <span className="text-[9px] uppercase tracking-widest text-white/40">127 Verified Reviews</span>
            </div>
          </div>
        </header>

        <div className="relative overflow-visible" ref={emblaRef}>
          <div className="flex">
            {reviews.map((rev, i) => (
              <ReviewCard key={i} rev={rev} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
