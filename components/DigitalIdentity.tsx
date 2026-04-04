import React from 'react';

export function DigitalIdentity() {
  const downloadVCard = () => {
    const vcf = `BEGIN:VCARD\nVERSION:3.0\nFN:Rorix Studio\nORG:Rorix Studio\nTEL:+971500000000\nEMAIL:hello@rorixstudio.ae\nURL:www.rorixstudio.ae\nADR:;;Business Bay;;Dubai;;UAE\nEND:VCARD`;
    const blob = new Blob([vcf], { type: 'text/vcard' });
    const a = document.createElement('a'); 
    a.href = URL.createObjectURL(blob); 
    a.download = 'rorix-studio.vcf'; 
    a.click();
  };

  return (
    <section id="business-card" className="section-pad">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-eyebrow">Digital Identity</span>
          <h2 className="section-title">Your <em>Connection</em> to Excellence</h2>
        </div>
        <div className="bcard fade-in visible">
          <div className="bcard-shimmer"></div>
          <div className="bcard-left">
            <div>
              <p className="bcard-logo-text">RORIX STUDIO</p>
              <p className="bcard-tagline">Crafting Dubai's Most Prestigious Spaces</p>
            </div>
            <div className="bcard-contacts">
              <div className="bcard-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', color: 'var(--gold)' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Business Bay, Dubai, UAE
              </div>
              <div className="bcard-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', color: 'var(--gold)' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.62 5.07A2 2 0 0 1 3.59 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6.16 6.16l1.27-.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +971 50 000 0000
              </div>
              <div className="bcard-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', color: 'var(--gold)' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                hello@rorixstudio.ae
              </div>
              <div className="bcard-contact">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px', color: 'var(--gold)' }}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                www.rorixstudio.ae
              </div>
            </div>
          </div>
          <div className="bcard-right">
            <div className="qr-container" onClick={downloadVCard} title="Download vCard" style={{ cursor: 'pointer' }}>
              <svg width="124" height="124" viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg">
                <rect width="124" height="124" fill="white"/>
                <rect x="4" y="4" width="52" height="52" fill="none" stroke="#000" strokeWidth="4"/>
                <rect x="12" y="12" width="36" height="36" fill="#000"/>
                <rect x="68" y="4" width="52" height="52" fill="none" stroke="#000" strokeWidth="4"/>
                <rect x="76" y="12" width="36" height="36" fill="#000"/>
                <rect x="4" y="68" width="52" height="52" fill="none" stroke="#000" strokeWidth="4"/>
                <rect x="12" y="76" width="36" height="36" fill="#000"/>
                <rect x="68" y="68" width="8" height="8" fill="#000"/>
                <rect x="80" y="68" width="8" height="8" fill="#000"/>
                <rect x="92" y="68" width="8" height="8" fill="#000"/>
                <rect x="104" y="68" width="16" height="8" fill="#000"/>
                <rect x="68" y="80" width="16" height="8" fill="#000"/>
                <rect x="88" y="80" width="8" height="8" fill="#000"/>
                <rect x="100" y="80" width="8" height="8" fill="#000"/>
                <rect x="68" y="92" width="8" height="8" fill="#000"/>
                <rect x="80" y="92" width="24" height="8" fill="#000"/>
                <rect x="108" y="92" width="12" height="8" fill="#000"/>
                <rect x="68" y="104" width="20" height="8" fill="#000"/>
                <rect x="92" y="104" width="8" height="8" fill="#000"/>
                <rect x="104" y="104" width="16" height="8" fill="#000"/>
                <rect x="68" y="116" width="8" height="4" fill="#000"/>
                <rect x="80" y="116" width="16" height="4" fill="#000"/>
                <rect x="100" y="116" width="20" height="4" fill="#000"/>
              </svg>
            </div>
            <p className="bcard-cta">Tap to Save Contact</p>
            <p className="bcard-nfc">📱 Available as Physical NFC Card</p>
          </div>
        </div>
      </div>
    </section>
  );
}
