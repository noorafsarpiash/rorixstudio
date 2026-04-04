"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "all", label: "All" },
  { id: "kitchen", label: "Kitchens" },
  { id: "living", label: "Living Rooms" },
  { id: "bedroom", label: "Bedrooms" },
  { id: "villa", label: "Villa" },
  { id: "smart", label: "Smart Homes" }
];

export function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.cat === filter);

  return (
    <section id="portfolio" className="py-[80px]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[48px]"
        >
          <span className="section-eyebrow">Our Work</span>
          <h1 className="section-title">Portfolio of <em className="italic text-[var(--gold)]">Excellence</em></h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-[48px]"
        >
          <div className="inline-flex flex-wrap justify-center border border-[rgba(212,175,55,0.2)] rounded-sm overflow-hidden">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={cn(
                  "px-6 py-3 text-[12px] uppercase tracking-[0.15em] cursor-pointer bg-transparent border-none transition-colors duration-300 relative",
                  filter === tab.id ? "text-[var(--gold)]" : "text-[var(--silk-grey)] hover:text-white"
                )}
              >
                {tab.label}
                {filter === tab.id && (
                  <motion.div 
                    layoutId="portfolioTab" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--gold)]" 
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.name + idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3] group"
              >
                {item.tour && (
                  <span className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--obsidian)] text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-[0.1em] z-10">
                    360° Tour
                  </span>
                )}
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.08]" 
                />
                <div className="absolute inset-0 bg-[rgba(10,10,10,0.7)] flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                  <p className="font-serif text-[20px] text-white">{item.name}</p>
                  <p className="text-[13px] text-[var(--gold)] mt-1">{item.loc}</p>
                  <span className="inline-block mt-3 text-[12px] uppercase tracking-[0.15em] text-[var(--gold)] border-b border-[var(--gold)] pb-0.5 self-start">
                    View Project →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
