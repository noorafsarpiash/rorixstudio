"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { translations } from "@/lib/constants";
import { usePreferences } from "@/hooks/usePreferences";

export function Hero() {
  const { lang } = usePreferences();
  const t = translations[lang];
  const [particles, setParticles] = useState<{ id: number; left: string; dur: string; del: string; size: string }[]>(
    []
  );

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      dur: 8 + Math.random() * 12 + "s",
      del: Math.random() * 10 + "s",
      size: 1 + Math.random() * 2 + "px",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden text-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.55)] via-[rgba(10,10,10,0.35)] to-[rgba(10,10,10,0.7)]" />
      </div>

      <div className="grain-overlay" />

      {/* Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-[var(--gold)] rounded-full opacity-0"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animation: `float-particle ${p.dur} linear infinite`,
              animationDelay: p.del,
            }}
          />
        ))}
      </div>

      <div className="relative z-[3] max-w-[860px] px-5">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-[12px] font-medium tracking-[0.35em] uppercase text-[var(--gold)] mb-6"
        >
          {t.heroEyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[clamp(38px,7vw,84px)] font-normal italic leading-[1.1] text-white mb-5 font-serif"
          dangerouslySetInnerHTML={{ __html: t.heroHeadline }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[17px] text-[var(--silk-grey)] tracking-[0.08em] mb-11"
        >
          {t.heroSubtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="btn-primary" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>Explore Our Work</button>
          <button className="btn-secondary" onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}>Book Consultation</button>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 text-[var(--silk-grey)] text-[11px] tracking-[0.2em] uppercase">
        <span>Scroll</span>
        <div className="w-6 h-6 border-r border-b border-[var(--gold)] transform rotate-45 mt-1.5 animate-bounce" />
      </div>

      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-10vh) translateX(40px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
