import React, { useState } from 'react';
import { usePreferences } from '@/hooks/usePreferences';

export function ContactPage() {
  const { lang } = usePreferences();

  return (
    <div className="w-full flex flex-col">
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header fade-in visible">
            <span className="section-eyebrow">Get In Touch</span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px,5vw,64px)', marginBottom: '8px' }}>
              Let's Create Something <em>Exceptional</em>
            </h1>
          </div>

          <div className="two-col fade-in visible" style={{ marginBottom: '80px' }}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
                <div className="address-item"><span className="address-icon">📍</span><div className="address-text"><strong>Address</strong>Business Bay, Dubai, UAE</div></div>
                <div className="address-item"><span className="address-icon">📞</span><div className="address-text"><strong>Phone</strong>+971 50 000 0000</div></div>
                <div className="address-item"><span className="address-icon">✉️</span><div className="address-text"><strong>Email</strong>hello@rorixstudio.ae</div></div>
                <div className="address-item"><span className="address-icon">📸</span><div className="address-text"><strong>Instagram</strong>@rorixstudio</div></div>
              </div>
              <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>Chat on WhatsApp →</a>

              <div style={{ marginTop: '40px', padding: '24px', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '2px', background: 'var(--obsidian-soft)' }}>
                <p style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Premium Catalogue</p>
                <p style={{ fontSize: '14px', color: 'var(--silk-grey)', marginBottom: '16px' }}>Download our 48-page luxury portfolio and product catalogue.</p>
                <input className="form-input" type="text" placeholder="Name" style={{ marginBottom: '12px', width: '100%' }} />
                <input className="form-input" type="email" placeholder="Email" style={{ marginBottom: '16px', width: '100%' }} />
                <button className="btn-primary" style={{ width: '100%' }}>📥 Download Catalogue</button>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: 'var(--white)', marginBottom: '24px' }}>Send a Message</h3>
              <div className="form-spacing">
                <input className="form-input" type="text" placeholder="Your Name" style={{ width: '100%' }} />
                <input className="form-input" type="tel" placeholder="WhatsApp Number" style={{ width: '100%' }} />
                <input className="form-input" type="text" placeholder="Subject" style={{ width: '100%' }} />
                <textarea className="form-input" placeholder="Your message..." style={{ minHeight: '140px', width: '100%' }} />
                <button className="btn-full">Send Message →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
