"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const lineReveal: any = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    }),
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-[140px] md:py-[200px] bg-[var(--obsidian)] overflow-hidden"
    >
      {/* Background Watermark */}
      <motion.div 
        style={{ x: watermarkX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none z-0"
      >
        <span className="font-serif text-[18vw] text-white/[0.02] tracking-widest uppercase select-none">
          EST. 2026
        </span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Asymmetrical Image Section */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-[rgba(212,175,55,0.15)] bg-[var(--obsidian-mid)] !p-0 !m-0 block h-auto">
              {/* Removed absolute motion wrapper to eliminate parallax shift gaps */}
              <Image 
                src="/New-profile-picture.jpg"
                alt="Founder of Rorix Studio"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 w-full h-full object-cover object-top block !p-0 !m-0 scale-105 transition-all duration-300 pointer-events-none"
              />
              {/* Subtle gold overlay on hover */}
              <div className="absolute inset-0 bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/5 transition-colors duration-700 z-[5] pointer-events-none" />
            </div>
            
            {/* Decentered badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-8 bg-[var(--obsidian-soft)] border border-[var(--gold)] p-8 max-w-[200px] hidden md:block"
            >
              <p className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase mb-2">Philosophy</p>
              <p className="text-white/60 text-[13px] leading-relaxed italic font-serif">
                "We don't build projects. We curate legacies."
              </p>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7">
            <div className="max-w-[580px]">
              <motion.span 
                custom={0} variants={lineReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="section-eyebrow block"
              >
                The Rorix Legacy
              </motion.span>
              
              <motion.h2 
                custom={1} variants={lineReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif text-white mb-10 leading-[1.1] tracking-tight"
              >
                Visionary Architecture.<br />
                <em className="text-[var(--gold)] italic">Uncompromising Luxury.</em>
              </motion.h2>

              <div className="space-y-6 text-[var(--silk-grey)] text-[16px] leading-[1.8] tracking-wide mb-12">
                <motion.p custom={2} variants={lineReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  Based in the heart of Dubai's Business Bay, Rorix Studio stands at the intersection of avant-garde design and meticulous engineering. We specialize in transforming ultra-prime properties into personalized sanctuaries that defy the ordinary.
                </motion.p>
                <motion.p custom={3} variants={lineReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  Our approach is rooted in "Quiet Luxury" — where the richness lies in the texture of the stone, the precision of the joinery, and the seamless integration of technology. We are the architects of your highest ambitions.
                </motion.p>
              </div>

              {/* Signature */}
              <motion.div 
                custom={4} variants={lineReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mt-16"
              >
                <p className="font-['Mrs_Saint_Delafield'] text-[var(--gold)] text-5xl mb-2 opacity-80">
                  Noor Afsar Piash
                </p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 ml-1">
                  Founder & Principal Designer
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
