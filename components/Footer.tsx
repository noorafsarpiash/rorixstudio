"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" width="18" height="18">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971500000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" width="18" height="18">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const quickLinks = ["Home", "About Us", "Services", "Portfolio", "Book a Session", "Contact"];
const services = ["Modular Kitchens", "Luxury Living Spaces", "3D Visualization", "Bespoke Cabinetry", "Smart Space Planning", "Design Consultation"];
const features = ["Gulf News", "Khaleej Times", "Architectural Digest ME", "Forbes Middle East"];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const colVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: i * 0.15 },
    }),
  };

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ background: '#080A0D' }}>
      {/* Subtle noise texture overlay */}
      <div className="footer-noise" aria-hidden="true" />

      {/* Faint golden dust gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 20% 0%, rgba(212,175,55,0.04) 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(212,175,55,0.03) 0%, transparent 50%)'
      }} />

      {/* ── Gold top line — expands from CENTER outward ── */}
      <div className="relative h-[1px] overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, originX: 0.5 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 15%, rgba(212,175,55,0.4) 35%, var(--gold) 50%, rgba(212,175,55,0.4) 65%, transparent 85%, transparent 100%)',
            transformOrigin: 'center',
          }}
        />
      </div>

      <div className="container relative z-10" style={{ paddingTop: '120px', paddingBottom: 0 }}>
        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 pb-28 border-b border-[rgba(212,175,55,0.07)]">

          <motion.div custom={0} variants={colVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <div className="font-serif text-[28px] text-[var(--gold)] tracking-[0.15em] leading-none">RORIX</div>
            <div className="text-[10px] text-white/25 tracking-[0.45em] uppercase mt-2 mb-10">Studio · Dubai</div>
            <div className="w-8 h-[0.5px] bg-[var(--gold)] opacity-25 mb-9" />
            <p className="text-white/30 text-[13px] leading-[2.2] max-w-[210px] mb-12">
              Crafting Dubai's most prestigious interiors — one extraordinary project at a time.
            </p>
            {/* Social icons — circular gold borders */}
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  title={s.label}
                  className="footer-social-circle"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div custom={1} variants={colVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <p className="font-serif text-[10px] uppercase tracking-[0.5em] text-[var(--gold)] mb-14">Navigation</p>
            <ul className="flex flex-col gap-6">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-white/35 text-[13px] leading-relaxed tracking-wide hover:text-[var(--gold)] transition-colors duration-400 flex items-center gap-3 group"
                  >
                    {i === 0 ? (
                      <span className="footer-active-dot" />
                    ) : (
                      <span className="w-3 h-[0.5px] bg-[var(--gold)] opacity-0 group-hover:opacity-60 transition-all duration-300 flex-shrink-0" />
                    )}
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div custom={2} variants={colVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <p className="font-serif text-[10px] uppercase tracking-[0.5em] text-[var(--gold)] mb-14">Services</p>
            <ul className="flex flex-col gap-6">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/35 text-[13px] leading-relaxed tracking-wide hover:text-[var(--gold)] transition-colors duration-400 flex items-center gap-3 group">
                    <span className="w-3 h-[0.5px] bg-[var(--gold)] opacity-0 group-hover:opacity-60 transition-all duration-300 flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Connect */}
          <motion.div custom={3} variants={colVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <p className="font-serif text-[10px] uppercase tracking-[0.5em] text-[var(--gold)] mb-14">Connect</p>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--gold)] opacity-40 mb-2">Studio</p>
                <p className="text-white/35 text-[13px] leading-[2.0]">Level 24, The Opus<br />Business Bay, Dubai, UAE</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--gold)] opacity-40 mb-2">Phone</p>
                <a href="tel:+971500000000" className="text-white/35 text-[13px] leading-relaxed hover:text-[var(--gold)] transition-colors">+971 50 000 0000</a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--gold)] opacity-40 mb-2">Email</p>
                <a href="mailto:hello@rorixstudio.ae" className="text-white/35 text-[13px] leading-relaxed hover:text-[var(--gold)] transition-colors">hello@rorixstudio.ae</a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--gold)] opacity-40 mb-2">Hours</p>
                <p className="text-white/35 text-[13px] leading-relaxed">Monday – Saturday<br />9:00 AM – 6:00 PM GST</p>
              </div>
            </div>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-[var(--gold)] text-[10px] uppercase tracking-[0.3em] border border-[var(--gold)]/25 px-5 py-3 hover:bg-[var(--gold)] hover:text-[#0A0A0A] hover:border-transparent transition-all duration-500"
            >
              WhatsApp Direct
            </a>
          </motion.div>
        </div>

        {/* ── As Featured In ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="py-10 border-b border-[rgba(212,175,55,0.06)] flex flex-col md:flex-row items-center gap-6 justify-between"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">As Featured In</p>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {features.map((f) => (
              <span key={f} className="text-[11px] tracking-[0.12em] text-white/15 uppercase hover:text-white/30 transition-colors duration-300">{f}</span>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="py-10 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[11px] text-white/20 tracking-[0.08em]">
            © 2026 Rorix Studio.{" "}
            <span className="text-white/10 italic">Where Vision Meets Velocity.</span>
          </p>

          {/* Back to Top — pulsing gold circle */}
          <button
            onClick={scrollToTop}
            title="Back to top"
            aria-label="Back to top"
            className="back-to-top"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="2 9 7 4 12 9" />
            </svg>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
