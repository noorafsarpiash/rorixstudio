"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";

function StatItem({ target, suffix = "", isDecimal = false, label, delay }: { target: number, suffix?: string, isDecimal?: boolean, label: string, delay: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    let rAF: number;
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(isDecimal ? eased * target : Math.round(eased * target));
      if (progress < 1) rAF = requestAnimationFrame(tick);
    };
    const t = setTimeout(tick, delay * 1000);
    return () => { clearTimeout(t); cancelAnimationFrame(rAF); };
  }, [inView, target, isDecimal, delay]);

  const displayVal = isDecimal ? val.toFixed(1) : val.toString();

  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay }}
      className="text-center px-[30px] py-[20px] relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-[20%] md:after:bottom-[20%] md:after:w-[1px] md:after:bg-[rgba(212,175,55,0.3)] last:after:hidden"
    >
      <span className="font-serif text-[clamp(40px,5vw,64px)] text-[var(--gold)] font-bold block">
        {displayVal}{suffix}
      </span>
      <span className="text-[13px] tracking-[0.15em] uppercase text-[var(--silk-grey)] mt-2 block">
        {label}
      </span>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="bg-[var(--obsidian-mid)] border-y border-[rgba(212,175,55,0.2)] py-[60px]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <StatItem target={150} suffix="+" label="Projects Completed" delay={0} />
          <StatItem target={8} suffix="+" label="Years in Dubai" delay={0.15} />
          <StatItem target={200} suffix="+" label="Satisfied Clients" delay={0.3} />
          <StatItem target={4.9} suffix="★" isDecimal={true} label="Google Rating" delay={0.45} />
        </div>
      </div>
    </section>
  );
}
