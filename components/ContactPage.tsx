"use client";

import React from 'react';
import { usePreferences } from '@/hooks/usePreferences';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, ArrowRight, BookOpen, Download } from 'lucide-react';

export function ContactPage() {
  const { lang } = usePreferences();

  const downloadVCard = () => {
    const vcf = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Noor Afsar Piash',
      'ORG:Rorix Studio',
      'TITLE:Principal Interior Designer',
      'TEL;TYPE=CELL:+971500000000',
      'EMAIL:hello@rorixstudio.ae',
      'URL:https://www.rorixstudio.ae',
      'ADR:;;Level 24 The Opus;Business Bay;Dubai;;UAE',
      'NOTE:Luxury Interior & Kitchen Design — Dubai',
      'END:VCARD'
    ].join('\n');
    const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rorix-studio.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadCatalogue = () => {
    // Placeholder: opens WhatsApp / email to request the catalogue
    window.open('mailto:hello@rorixstudio.ae?subject=Luxury%20Portfolio%20Request&body=I%20would%20like%20to%20receive%20the%20Rorix%20Studio%20luxury%20portfolio.', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const resourceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } }
  };

  return (
    <div
      className="w-full flex flex-col bg-[#0A0A0A]"
      style={{ backgroundImage: 'radial-gradient(circle at center, #1C1F26 0%, #0A0A0A 100%)' }}
    >
      <section className="py-32">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* ── Heading ── */}
            <motion.div className="mb-20 text-center" variants={itemVariants}>
              <span className="text-[var(--gold)] text-[11px] uppercase tracking-[0.4em] mb-4 block">
                Get In Touch
              </span>
              <h1 className="font-serif text-4xl md:text-6xl tracking-[0.1em] text-white">
                Let's Create Something{' '}
                <span className="italic text-[var(--gold)]">Exceptional</span>
              </h1>
            </motion.div>

            {/* ── Two-column: Info + Form ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
              {/* Left: Contact Info */}
              <motion.div variants={itemVariants} className="flex flex-col gap-12">
                <div className="flex flex-col gap-10">
                  <div className="flex items-start gap-5">
                    <MapPin className="text-[var(--gold)] w-5 h-5 mt-1" strokeWidth={1} />
                    <div>
                      <p className="text-[var(--gold)] text-[10px] uppercase tracking-widest mb-1">Our Studio</p>
                      <p className="text-white/60 text-sm font-light">Business Bay, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <Phone className="text-[var(--gold)] w-5 h-5 mt-1" strokeWidth={1} />
                    <div>
                      <p className="text-[var(--gold)] text-[10px] uppercase tracking-widest mb-1">Direct Line</p>
                      <p className="text-white/60 text-sm font-light">+971 50 000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <Mail className="text-[var(--gold)] w-5 h-5 mt-1" strokeWidth={1} />
                    <div>
                      <p className="text-[var(--gold)] text-[10px] uppercase tracking-widest mb-1">Inquiries</p>
                      <p className="text-white/60 text-sm font-light">hello@rorixstudio.ae</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <Instagram className="text-[var(--gold)] w-5 h-5 mt-1" strokeWidth={1} />
                    <div>
                      <p className="text-[var(--gold)] text-[10px] uppercase tracking-widest mb-1">Aesthetics</p>
                      <p className="text-white/60 text-sm font-light">@rorixstudio</p>
                    </div>
                  </div>
                </div>
                <div className="h-[0.5px] w-20 bg-[var(--gold)] opacity-30" />
                <p className="text-white/40 text-xs leading-relaxed max-w-sm tracking-wide">
                  Our boutique approach ensures that every project receives the undivided attention of
                  our principal designers. Experience true bespoke luxury.
                </p>
              </motion.div>

              {/* Right: Form */}
              <motion.div variants={itemVariants} className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[var(--gold)] text-[10px] uppercase tracking-widest opacity-60">
                      Full Name
                    </label>
                    <input type="text" placeholder="John Doe" className="form-underline" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[var(--gold)] text-[10px] uppercase tracking-widest opacity-60">
                      WhatsApp Number
                    </label>
                    <input type="tel" placeholder="+971 -- --- ----" className="form-underline" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[var(--gold)] text-[10px] uppercase tracking-widest opacity-60">
                    Subject
                  </label>
                  <input type="text" placeholder="Penthouse Renovation" className="form-underline" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[var(--gold)] text-[10px] uppercase tracking-widest opacity-60">
                    Message
                  </label>
                  <textarea placeholder="Describe your vision..." className="form-underline h-32" />
                </div>
                <button className="btn-boutique flex items-center justify-center gap-3 mt-4">
                  Send Message <ArrowRight className="w-4 h-4" strokeWidth={1} />
                </button>
              </motion.div>
            </div>

            {/* ══════════════ VIP RESOURCE BLOCK ══════════════ */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24"
            >
              {/* ── Digital Catalogue ── */}
              <motion.div
                variants={resourceVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="resource-elite group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Shimmer sweep */}
                <div className="shimmer-sweep" aria-hidden="true" />
                {/* Radial golden glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 60% 30%, rgba(212,175,55,0.07) 0%, transparent 65%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="text-[var(--gold)] w-4 h-4" strokeWidth={1} />
                    <span className="text-[var(--gold)] text-[10px] uppercase tracking-[0.4em]">
                      Premium Resource
                    </span>
                  </div>
                  <h3 className="font-serif text-[28px] text-white mb-4 tracking-widest leading-tight group-hover:text-[var(--gold)] transition-colors duration-500">
                    Digital Catalogue
                  </h3>
                  <p className="text-white/40 text-[12px] leading-relaxed tracking-wide mb-10 max-w-[280px]">
                    Download our exclusive 48-page luxury portfolio and bespoke product catalogue,
                    available only to our private clients.
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="h-[0.5px] w-full bg-[var(--gold)] opacity-10 mb-6" />
                  <button
                    onClick={downloadCatalogue}
                    className="btn-catalogue group/btn flex items-center gap-3 text-[11px] uppercase tracking-[0.3em]"
                  >
                    <Download className="w-3.5 h-3.5" strokeWidth={1} />
                    <span>Download Luxury Portfolio</span>
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                      strokeWidth={1}
                    />
                  </button>
                </div>
              </motion.div>

              {/* ── Design Concierge QR ── */}
              <motion.div
                variants={resourceVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="resource-elite group relative overflow-hidden"
              >
                {/* Shimmer sweep (offset) */}
                <div className="shimmer-sweep" style={{ animationDelay: '1.8s' }} aria-hidden="true" />
                {/* Radial glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 40% 70%, rgba(212,175,55,0.07) 0%, transparent 65%)',
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 h-full">
                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-[var(--gold)] text-[10px] uppercase tracking-[0.4em] mb-6 block">
                      Studio Direct
                    </span>
                    <h3 className="font-serif text-[28px] text-white mb-4 tracking-widest leading-tight">
                      Private Design Consultant
                    </h3>
                    <p className="text-white/40 text-[12px] leading-relaxed tracking-wide mb-8 max-w-[240px] mx-auto md:mx-0">
                      Your private consultation is just a scan away. Instant access to Rorix Studio's
                      dedicated design team.
                    </p>
                    <p className="text-[var(--gold)] text-[10px] uppercase tracking-[0.2em] opacity-50">
                      Scan to Save Contact Details
                    </p>
                  </div>

                  {/* QR with scan animation */}
                  <button
                    onClick={downloadVCard}
                    title="Tap to save Rorix Studio contact"
                    className="relative flex-shrink-0 cursor-pointer group/qr focus:outline-none"
                  >
                    {/* VIP corner accents */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[var(--gold)] opacity-60" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[var(--gold)] opacity-60" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[var(--gold)] opacity-60" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[var(--gold)] opacity-60" />

                    {/* Persistent pulsing glow */}
                    <div className="qr-pulse-ring" aria-hidden="true" />

                    {/* QR panel */}
                    <div className="relative w-[128px] h-[128px] bg-white p-3 overflow-hidden">
                      {/* Animated scan line */}
                      <div className="qr-scanline" aria-hidden="true" />

                      {/* Proper QR SVG */}
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 104 104"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Finder TL */}
                        <rect x="0" y="0" width="30" height="30" fill="none" stroke="#000" strokeWidth="2.5" />
                        <rect x="6" y="6" width="18" height="18" fill="#000" />
                        {/* Finder TR */}
                        <rect x="74" y="0" width="30" height="30" fill="none" stroke="#000" strokeWidth="2.5" />
                        <rect x="80" y="6" width="18" height="18" fill="#000" />
                        {/* Finder BL */}
                        <rect x="0" y="74" width="30" height="30" fill="none" stroke="#000" strokeWidth="2.5" />
                        <rect x="6" y="80" width="18" height="18" fill="#000" />
                        {/* Data cells — timing pattern */}
                        <rect x="36" y="0" width="6" height="6" fill="#000" />
                        <rect x="48" y="0" width="6" height="6" fill="#000" />
                        <rect x="60" y="0" width="6" height="6" fill="#000" />
                        <rect x="36" y="12" width="6" height="6" fill="#000" />
                        <rect x="60" y="12" width="6" height="6" fill="#000" />
                        <rect x="36" y="24" width="12" height="6" fill="#000" />
                        <rect x="38" y="36" width="6" height="6" fill="#000" />
                        <rect x="50" y="36" width="12" height="6" fill="#000" />
                        <rect x="0" y="36" width="12" height="6" fill="#000" />
                        <rect x="18" y="36" width="12" height="6" fill="#000" />
                        <rect x="74" y="36" width="6" height="6" fill="#000" />
                        <rect x="86" y="36" width="12" height="6" fill="#000" />
                        <rect x="98" y="36" width="6" height="6" fill="#000" />
                        <rect x="38" y="48" width="6" height="6" fill="#000" />
                        <rect x="50" y="48" width="6" height="6" fill="#000" />
                        <rect x="74" y="48" width="12" height="6" fill="#000" />
                        <rect x="92" y="48" width="12" height="6" fill="#000" />
                        <rect x="38" y="60" width="12" height="6" fill="#000" />
                        <rect x="56" y="60" width="6" height="6" fill="#000" />
                        <rect x="68" y="60" width="6" height="6" fill="#000" />
                        <rect x="80" y="60" width="6" height="6" fill="#000" />
                        <rect x="92" y="60" width="12" height="6" fill="#000" />
                        <rect x="38" y="72" width="6" height="6" fill="#000" />
                        <rect x="50" y="72" width="12" height="6" fill="#000" />
                        <rect x="74" y="72" width="6" height="6" fill="#000" />
                        <rect x="86" y="72" width="12" height="6" fill="#000" />
                        <rect x="38" y="86" width="12" height="6" fill="#000" />
                        <rect x="56" y="86" width="12" height="6" fill="#000" />
                        <rect x="74" y="86" width="6" height="6" fill="#000" />
                        <rect x="86" y="86" width="18" height="6" fill="#000" />
                        <rect x="38" y="98" width="6" height="6" fill="#000" />
                        <rect x="50" y="98" width="6" height="6" fill="#000" />
                        <rect x="62" y="98" width="6" height="6" fill="#000" />
                        <rect x="74" y="98" width="6" height="6" fill="#000" />
                        <rect x="86" y="98" width="6" height="6" fill="#000" />
                        <rect x="98" y="98" width="6" height="6" fill="#000" />
                        {/* White backing for centre logo */}
                        <rect x="36" y="36" width="32" height="26" fill="white" />
                        {/* RORIX STUDIO text */}
                        <text
                          x="52"
                          y="47"
                          textAnchor="middle"
                          fontSize="5"
                          fontFamily="Georgia, serif"
                          fontWeight="700"
                          fill="#000"
                          letterSpacing="0.6"
                        >
                          RORIX
                        </text>
                        <text
                          x="52"
                          y="56"
                          textAnchor="middle"
                          fontSize="3.8"
                          fontFamily="Arial, sans-serif"
                          fill="#555"
                          letterSpacing="0.8"
                        >
                          STUDIO
                        </text>
                      </svg>
                    </div>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
