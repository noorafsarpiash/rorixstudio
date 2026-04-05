"use client";

import { useScroll } from "@/hooks/useScroll";
import { usePreferences } from "@/hooks/usePreferences";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScroll(60);
  const { lang } = usePreferences(); // Keeping lang if needed elsewhere, but removing setLang for switcher removal

  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    // We let native smooth scroll handle it if possible, but fallback
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      setIsOpen(false); // Close first for UI responsiveness
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 10);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <a href="#home" onClick={(e) => scrollTo('home', e)} className="nav-logo">
        <span className="rorix">RORIX</span>
        <span className="studio">STUDIO</span>
      </a>
      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => scrollTo('home', e)}>Home</a></li>
        <li><a href="#about" onClick={(e) => scrollTo('about', e)}>About</a></li>
        <li><a href="#services" onClick={(e) => scrollTo('services', e)}>Services</a></li>
        <li><a href="#free-estimate" onClick={(e) => scrollTo('free-estimate', e)}>Estimate</a></li>
        <li><a href="#portfolio" onClick={(e) => scrollTo('portfolio', e)}>Portfolio</a></li>
        <li><a href="#book" onClick={(e) => scrollTo('book', e)}>Book</a></li>
        <li><a href="#contact" onClick={(e) => scrollTo('contact', e)}>Contact</a></li>
      </ul>
      <div className="nav-right">
        <button className="btn-quote hidden md:block" onClick={(e) => scrollTo('book', e)}>Get Quote</button>
        <button 
          className="hamburger relative z-[10000] flex flex-col items-end gap-1.5 p-2 bg-transparent border-none outline-none" 
          aria-label="Menu" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7, scale: 1 } : { rotate: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-[1px] bg-[var(--gold)] block origin-center"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-[1px] bg-[var(--gold)] block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7, width: '32px' } : { rotate: 0, y: 0, width: '24px' }}
            transition={{ duration: 0.3 }}
            className="h-[1px] bg-[var(--gold)] block origin-center"
          />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            key="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-[#0A0A0A] backdrop-blur-2xl z-[9999] flex flex-col items-center justify-center h-screen overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-8 py-10">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Book Now', id: 'book' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollTo(item.id, e)}
                  className="font-serif text-3xl md:text-5xl tracking-[0.2em] uppercase transition-all duration-500 hover:text-[var(--gold)] text-white/60 text-center w-full py-2"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-6">
              <div className="w-12 h-[0.5px] bg-[var(--gold)] opacity-30"></div>
              <div className="flex gap-10">
                <a href="#" className="text-[var(--gold)] text-[10px] uppercase tracking-[0.4em] font-light hover:text-white transition-all duration-500">Instagram</a>
                <a href="#" className="text-[var(--gold)] text-[10px] uppercase tracking-[0.4em] font-light hover:text-white transition-all duration-500">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
