"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "The kitchen Rorix designed for our villa exceeded every expectation. The Italian marble work is simply breathtaking. Professional team, flawless execution.",
    author: "Ahmed Al Mansouri",
    loc: "Palm Jumeirah Villa"
  },
  {
    text: "Transformed our penthouse into something from a design magazine. Every detail was considered. Worth every dirham.",
    author: "Sarah Thompson",
    loc: "Downtown Dubai Penthouse"
  },
  {
    text: "Smart home integration was seamless. Crestron system works perfectly. Rorix delivered on time and on budget.",
    author: "Mohammed Al Rashid",
    loc: "Business Bay Apartment"
  },
  {
    text: "Our bedroom suite is now my favourite room in the world. The bespoke wardrobes are a masterpiece of craftsmanship.",
    author: "Priya Sharma",
    loc: "Dubai Marina Duplex"
  },
  {
    text: "Second project with Rorix. They keep raising the bar. The modular kitchen is the centrepiece of our home.",
    author: "James Harrison",
    loc: "Emirates Hills Villa"
  },
  {
    text: "From concept to handover, the experience was luxury itself. The 3D renders matched reality perfectly.",
    author: "Fatima Al Zaabi",
    loc: "Jumeirah Beach Residence"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    let timerId: ReturnType<typeof setInterval>;
    
    const startAutoplay = () => {
      timerId = setInterval(() => {
        if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      }, 4000);
    };
    
    startAutoplay();
    
    emblaApi.on("pointerDown", () => clearInterval(timerId));
    emblaApi.on("pointerUp", startAutoplay);
    
    return () => clearInterval(timerId);
  }, [emblaApi]);

  return (
    <section id="reviews" className="py-[100px] bg-[var(--obsidian-mid)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[60px]"
        >
          <span className="section-eyebrow">Client Testimonials</span>
          <h2 className="section-title">What Our Clients <em className="italic text-[var(--gold)]">Say</em></h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative -mx-5 md:-mx-10 px-5 md:px-10 py-5" 
          ref={emblaRef}
        >
          <div className="flex touch-pan-y" style={{ backfaceVisibility: "hidden" }}>
            {reviews.map((rev, i) => (
              <div key={i} className="min-w-full md:min-w-[calc(33.333%-16px)] mr-6 bg-[var(--obsidian)] border border-[rgba(212,175,55,0.2)] rounded-sm p-8 transition-colors duration-300 hover:border-[var(--gold)] shrink-0">
                <div className="text-[var(--gold)] text-[15px] mb-4 tracking-[3px]">★★★★★</div>
                <p className="text-[14px] text-[var(--silk-light)] italic leading-[1.8] mb-5">"{rev.text}"</p>
                <p className="font-serif text-[16px] text-[var(--gold)]">{rev.author}</p>
                <p className="text-[12px] text-[var(--silk-grey)] mt-1">{rev.loc}</p>
                <div className="inline-flex items-center gap-1.5 mt-3.5 px-2.5 py-1 border border-[rgba(212,175,55,0.4)] rounded-sm text-[11px] text-[var(--gold)] tracking-[0.05em]">
                  <span>✓</span> Verified Google Review
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <span className="font-serif text-[56px] text-[var(--gold)] block">4.9</span>
          <p className="text-[13px] text-[var(--silk-grey)] tracking-[0.1em]">★★★★★ based on 127 Google Reviews</p>
          <button className="inline-block mt-5 px-8 py-3 border border-[var(--gold)] text-[var(--gold)] text-[12px] uppercase tracking-[0.15em] rounded-sm transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--obsidian)] bg-transparent">
            ⭐ Leave a Google Review
          </button>
        </motion.div>

      </div>
    </section>
  );
}
