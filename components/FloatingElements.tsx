"use client";

import { useState, useRef, useEffect } from "react";
import { usePreferences } from "@/hooks/usePreferences";
import { formatPrice } from "@/lib/utils";

export function FloatingElements() {
  const { theme, setTheme, currency, setCurrency } = usePreferences();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, bot: boolean}[]>([
    { text: "Welcome to Rorix Studio 👋<br>I'm Rox, your personal design assistant. How can I help you today?", bot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  const [isTyping, setIsTyping] = useState(false);

  const getChatResponse = (input: string) => {
    const lower = input.toLowerCase();
    
    // Check against standard predefined responses from HTML logic
    if (lower.includes('kitchen')) return `Our modular kitchens start from ${formatPrice(45000, currency)}. We use Italian Calacatta marble, German Hettich hardware, and handleless cabinetry. <a href="#" onclick="document.getElementById('book').scrollIntoView({behavior:'smooth'})" style="color:var(--gold)">Book a consultation →</a>`;
    if (lower.includes('price') || lower.includes('cost') || lower.includes('quote')) return 'Use our <a href="#" onclick="document.getElementById(\'estimator\').scrollIntoView({behavior:\'smooth\'})" style="color:var(--gold)">Cost Estimator</a> for an instant range, or WhatsApp us for a precise quote. <a href="https://wa.me/971500000000" target="_blank" style="color:var(--gold)">Chat on WhatsApp →</a>';
    if (lower.includes('book') || lower.includes('consultation')) return 'Ready to book? Our consultations are complimentary and 60 minutes. <a href="#" onclick="document.getElementById(\'book\').scrollIntoView({behavior:\'smooth\'})" style="color:var(--gold)">Book now →</a>';
    if (lower.includes('portfolio')) return 'See our stunning portfolio of Dubai luxury projects. <a href="#" onclick="document.getElementById(\'portfolio\').scrollIntoView({behavior:\'smooth\'})" style="color:var(--gold)">View Portfolio →</a>';
    if (lower.includes('contact') || lower.includes('human') || lower.includes('team')) return 'Reach our team directly: <a href="tel:+971500000000" style="color:var(--gold)">+971 50 000 0000</a> or <a href="https://wa.me/971500000000" target="_blank" style="color:var(--gold)">WhatsApp →</a>';

    return 'Let me connect you with our team — they\'ll give you the best guidance. <a href="https://wa.me/971500000000" target="_blank" style="color:var(--gold)">Chat on WhatsApp →</a>';
  };

  const handleSend = (text?: string) => {
    const val = text || inputValue;
    if (!val.trim()) return;
    
    setMessages(prev => [...prev, { text: val, bot: false }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: getChatResponse(val), bot: true }]);
    }, 600);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

  return (
    <>
      <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer" className="float-whatsapp" title="Chat on WhatsApp">
        <div className="wa-tooltip">Chat on WhatsApp</div>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <div className="theme-switcher hidden md:flex">
        <div className={`theme-dot ${theme === 'midnight' ? 'active' : ''}`} style={{background:'#D4AF37'}} onClick={() => setTheme('midnight')} title="Midnight Gold"></div>
        <div className={`theme-dot ${theme === 'silver' ? 'active' : ''}`} style={{background:'#C0C0C0'}} onClick={() => setTheme('silver')} title="Silver Platinum"></div>
        <div className={`theme-dot ${theme === 'pearl' ? 'active' : ''}`} style={{background:'#C9A84C', border:'1px solid #aaa'}} onClick={() => setTheme('pearl')} title="Royal Pearl"></div>
      </div>

      <button className="chat-trigger hidden md:flex" onClick={() => setChatOpen(!chatOpen)} title="Chat with Rox">ROX</button>
      <div className={`chat-window ${chatOpen ? 'open' : ''} hidden md:flex flex-col`} id="chat-window">
        <div className="chat-header">
          <div className="chat-avatar">R</div>
          <div>
            <p className="chat-name">ROX — Design Assistant</p>
            <p className="chat-status"><span className="online-dot"></span>Online now</p>
          </div>
        </div>
        <div className="chat-body" id="chat-body">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.bot ? 'bot' : 'user'}`}>
              <div className="msg-bubble" dangerouslySetInnerHTML={{ __html: m.text }} />
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg bot">
              <div className="msg-bubble" style={{ color: 'var(--silk-grey)', fontStyle: 'italic' }}>typing...</div>
            </div>
          )}
          <div ref={endRef} />
        </div>
        <div className="chat-quick-replies">
          <button className="quick-reply" onClick={() => handleSend('View Services')}>View Services</button>
          <button className="quick-reply" onClick={() => handleSend('Get a Quote')}>Get a Quote</button>
          <button className="quick-reply" onClick={() => handleSend('Book Now')}>Book Now</button>
          <button className="quick-reply" onClick={() => handleSend('View Portfolio')}>View Portfolio</button>
        </div>
        <div className="chat-footer">
          <input className="chat-input" type="text" placeholder="Type a message..." value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} />
          <button className="chat-send" onClick={() => handleSend()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
