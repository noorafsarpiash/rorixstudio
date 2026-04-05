"use client";

import { useScroll } from "@/hooks/useScroll";
import { usePreferences } from "@/hooks/usePreferences";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const scrolled = useScroll(60);
  const { lang, setLang } = usePreferences();

  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    // We let native smooth scroll handle it if possible, but fallback
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add exact body classes from HTML if needed, handled globally
  }, []);

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
        <div className="lang-toggle">
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`} onClick={() => setLang('ar')}>AR</button>
        </div>
        <button className="btn-quote" onClick={(e) => scrollTo('book', e)}>Get Quote</button>
        <button className="hamburger" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '400px',
              background: 'var(--obsidian)', borderLeft: '1px solid var(--gold)',
              zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '100px 40px',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.5)'
            }}
          >
            <button 
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', top: '30px', right: '30px', background: 'transparent', border: 'none', color: 'var(--gold)', fontSize: '32px', cursor: 'pointer' }}
            >
              ✕
            </button>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '30px', fontSize: '24px', fontFamily: "'Playfair Display', serif" }}>
              <li><a href="#home" onClick={(e) => scrollTo('home', e)} style={{ color: 'var(--white)', transition: 'color 0.3s' }}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollTo('about', e)} style={{ color: 'var(--white)', transition: 'color 0.3s' }}>About</a></li>
              <li><a href="#services" onClick={(e) => scrollTo('services', e)} style={{ color: 'var(--white)', transition: 'color 0.3s' }}>Services</a></li>
              <li><a href="#free-estimate" onClick={(e) => scrollTo('free-estimate', e)} style={{ color: 'var(--gold)', transition: 'color 0.3s' }}>Free Estimate</a></li>
              <li><a href="#portfolio" onClick={(e) => scrollTo('portfolio', e)} style={{ color: 'var(--white)', transition: 'color 0.3s' }}>Portfolio</a></li>
              <li><a href="#book" onClick={(e) => scrollTo('book', e)} style={{ color: 'var(--white)', transition: 'color 0.3s' }}>Book</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo('contact', e)} style={{ color: 'var(--white)', transition: 'color 0.3s' }}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
