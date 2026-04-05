"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-[600px] border-y border-[rgba(212,175,55,0.15)] overflow-hidden">
      {/* Dark-filtered map */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Rorix Studio — Business Bay, Dubai"
          className="w-full h-full border-none"
          style={{
            filter: 'grayscale(100%) brightness(0.35) contrast(1.15) sepia(0.2)',
            opacity: 0.85,
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510024323!2d55.2743764!3d25.187311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682cf5555555%3A0x123456789!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1610000000000!5m2!1sen!2sae"
          allowFullScreen
          loading="lazy"
        />
        {/* Deep vignette overlay */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(10,10,10,0.05) 0%, rgba(10,10,10,0.7) 100%)'
        }} />
      </div>

      {/* Custom gold pulsing marker (centred on Business Bay) */}
      <div className="absolute z-10" style={{ top: '44%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="relative flex items-center justify-center">
          {/* Outer pulse rings */}
          <div className="absolute w-16 h-16 rounded-full border border-[var(--gold)] opacity-30 animate-[map-ring_2s_ease-in-out_infinite]" />
          <div className="absolute w-10 h-10 rounded-full border border-[var(--gold)] opacity-50 animate-[map-ring_2s_ease-in-out_0.6s_infinite]" />
          {/* Core gold dot */}
          <div className="w-5 h-5 rounded-full bg-[var(--gold)] shadow-[0_0_16px_rgba(212,175,55,0.8)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
          </div>
          {/* R label */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0A0A0A]/90 border border-[var(--gold)]/40 px-2 py-0.5 whitespace-nowrap">
            <span className="font-serif text-[10px] text-[var(--gold)] tracking-[0.25em]">RORIX STUDIO</span>
          </div>
        </div>
      </div>

      {/* Glassmorphism address card — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-10 left-10 z-10 w-[300px]"
        style={{
          background: 'rgba(10,10,10,0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(212,175,55,0.3)',
        }}
      >
        <div className="p-8">
          <p className="text-[var(--gold)] text-[10px] uppercase tracking-[0.4em] mb-3">Our Atelier</p>
          <p className="font-serif text-white text-xl tracking-wide mb-1">Rorix Studio</p>
          <div className="w-8 h-[0.5px] bg-[var(--gold)] opacity-40 mb-4" />
          <p className="text-white/50 text-[13px] leading-relaxed font-light mb-6">
            Level 24, The Opus by Zaha Hadid<br />
            Business Bay, Dubai, UAE
          </p>
          <button
            onClick={() => window.open('https://maps.google.com/?q=Business+Bay+Dubai', '_blank')}
            className="w-full py-3 border border-[var(--gold)]/40 text-[var(--gold)] text-[11px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-[var(--gold)] hover:text-[#0A0A0A] hover:border-transparent"
          >
            Get Directions →
          </button>
        </div>
      </motion.div>

      {/* Contact quick-card — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-10 right-10 z-10 w-[240px]"
        style={{
          background: 'rgba(10,10,10,0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(212,175,55,0.2)',
        }}
      >
        <div className="p-6 flex flex-col gap-3">
          <p className="text-[var(--gold)] text-[10px] uppercase tracking-[0.4em] mb-1">Direct Access</p>
          <a href="tel:+971500000000" className="text-white/60 text-[13px] hover:text-[var(--gold)] transition-colors">
            +971 50 000 0000
          </a>
          <a href="mailto:hello@rorixstudio.ae" className="text-white/60 text-[13px] hover:text-[var(--gold)] transition-colors">
            hello@rorixstudio.ae
          </a>
          <p className="text-white/30 text-[12px] mt-1">Mon – Sat &nbsp;·&nbsp; 9AM – 6PM GST</p>
        </div>
      </motion.div>
    </section>
  );
}
