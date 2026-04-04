"use client";

export function MapSection() {
  return (
    <section id="contact" className="relative h-[600px] border-y border-[rgba(212,175,55,0.2)]">
      <div className="absolute inset-0 z-0">
        <iframe 
          title="Google Map"
          className="w-full h-full border-none grayscale opacity-[0.8] mix-blend-luminosity" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510024323!2d55.2743764!3d25.187311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682cf5555555%3A0x123456789!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1610000000000!5m2!1sen!2sae" 
          allowFullScreen 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.6)] mix-blend-multiply pointer-events-none" />
      </div>

      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-full max-w-[800px] px-5 z-10 flex flex-col md:flex-row gap-5">
        <div className="flex-1 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border border-[var(--gold)] p-8 rounded-sm">
          <p className="font-serif text-[32px] text-white">Visit the Studio</p>
          <div className="w-[40px] h-[2px] bg-[var(--gold)] mt-3 mb-6" />
          <p className="text-[14px] text-[var(--silk-light)] leading-[1.8] mb-6">
            Level 24, The Opus by Zaha Hadid<br />
            Business Bay, Dubai, UAE
          </p>
          <button className="btn-primary w-full border border-[rgba(212,175,55,0.4)] hover:border-[var(--gold)] text-white hover:text-[var(--obsidian)] hover:bg-[var(--gold)]" onClick={() => window.open('https://maps.google.com', '_blank')}>
            Get Directions →
          </button>
        </div>

        <div className="flex-1 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border border-[var(--gold)] p-8 rounded-sm">
          <p className="font-serif text-[32px] text-[var(--gold)]">Contact Us</p>
          <div className="w-[40px] h-[2px] bg-white/20 mt-3 mb-6" />
          <div className="flex flex-col gap-3">
            <a href="tel:+971500000000" className="text-[14px] text-[var(--silk-light)] hover:text-[var(--gold)] transition-colors">T: +971 50 000 0000</a>
            <a href="mailto:hello@rorixstudio.ae" className="text-[14px] text-[var(--silk-light)] hover:text-[var(--gold)] transition-colors">E: hello@rorixstudio.ae</a>
            <p className="text-[14px] text-[var(--silk-light)] mt-2">Hours: Mon-Sat, 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
