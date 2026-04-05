"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  CookingPot, 
  Sofa, 
  Box, 
  Compass, 
  Layers, 
  MessageSquare 
} from "lucide-react";

const services = [
  { 
    id: 1, 
    Icon: CookingPot, 
    name: "Modern Kitchen Design", 
    desc: "Custom modular kitchen layouts and premium finishes." 
  },
  { 
    id: 2, 
    Icon: Sofa, 
    name: "Luxury Living Spaces", 
    desc: "High-end interior styling for living and dining areas." 
  },
  { 
    id: 3, 
    Icon: Box, 
    name: "3D Interior Rendering", 
    desc: "Photorealistic 3D visualizations of the design before execution." 
  },
  { 
    id: 4, 
    Icon: Compass, 
    name: "Smart Space Planning", 
    desc: "Optimizing room layouts for maximum functionality and aesthetics." 
  },
  { 
    id: 5, 
    Icon: Layers, 
    name: "Bespoke Cabinetry", 
    desc: "Custom-made wardrobes and storage solutions for kitchens and bedrooms." 
  },
  { 
    id: 6, 
    Icon: MessageSquare, 
    name: "Design Consultation", 
    desc: "Professional one-on-one sessions for material and color selection." 
  }
];

const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
const bookedSlots = ["12:00 PM", "3:00 PM"];

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: "", name: "", wa: "", email: "", location: "", type: "", budget: "", source: "", notes: "", date: "", time: ""
  });
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDay = (month: number, year: number) => new Date(year, month, 1).getDay();

  const changeMonth = (dir: number) => {
    let newM = calMonth + dir;
    let newY = calYear;
    if (newM < 0) { newM = 11; newY--; }
    if (newM > 11) { newM = 0; newY++; }
    setCalMonth(newM);
    setCalYear(newY);
  };

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const today = new Date();

  return (
    <section id="book" className="h-screen max-h-[900px] py-10 relative overflow-hidden bg-[var(--obsidian)] scroll-m-20">
      <div className="max-w-[1400px] h-full mx-auto px-5 md:px-10 flex flex-col">
        
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6 shrink-0">
          <span className="text-[11px] font-light tracking-[0.4em] uppercase text-[var(--gold)] mb-1 block">
            Schedule a Viewing
          </span>
          <h1 className="font-serif text-[clamp(28px,4vw,42px)] font-light mb-2 text-white leading-tight">
            Reserve Your <em className="italic text-[var(--gold)] font-normal">Private Presentation</em>
          </h1>
          <p className="text-[var(--silk-grey)] text-[14px] tracking-[0.05em] font-light max-w-[600px] mx-auto opacity-70">
            Exclusive access to Dubai's most prestigious property listings.
          </p>
        </motion.div>

        {step <= 5 && (
          <div className="flex items-start justify-center mb-6 gap-6 md:gap-12 lg:gap-16 px-4 overflow-x-auto pb-2 scrollbar-hide shrink-0">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex flex-col items-center gap-1 relative shrink-0">
                <div className={cn("w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-lg font-thin transition-all duration-700 z-[1]", 
                  step === i ? "border-[var(--gold)] text-[var(--gold)] bg-[var(--obsidian)] shadow-[0_0_20px_rgba(212,175,55,0.1)] scale-105" :
                  step > i ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--obsidian)]" : "text-[var(--silk-grey)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm"
                )}>
                  {step > i ? "✓" : i}
                </div>
                <div className={cn("text-[9px] uppercase tracking-[0.2em] font-light whitespace-nowrap", step === i ? "text-[var(--gold)]" : "text-[var(--silk-grey)]")}>
                  {["Service", "Details", "Date", "Time", "Review"][i-1]}
                </div>
                {i < 5 && (
                  <div className="hidden md:block absolute top-5 left-14 w-8 lg:w-12 h-[1px] bg-[rgba(212,175,55,0.1)] -z-10" />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="max-w-[800px] mx-auto flex-1 flex flex-col justify-start py-2 overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex flex-col">
                <h2 className="font-serif text-[24px] text-center mb-1 text-white">Choose Your Service</h2>
                <p className="text-center text-[var(--silk-grey)] text-[12px] mb-6 opacity-60">Select the showcase tour that fits your schedule</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map(s => (
                    <div 
                      key={s.id} 
                      onClick={() => setData({ ...data, service: s.name })}
                      className={cn("group/service border rounded-sm p-4 md:p-5 cursor-pointer transition-all duration-500 flex items-center gap-4 relative overflow-hidden", 
                        data.service === s.name ? "border-[var(--gold)] bg-[rgba(255,255,255,0.05)] backdrop-blur-md" : "border-white/5 bg-[rgba(255,255,255,0.02)] hover:border-[rgba(212,175,55,0.2)]"
                      )}
                    >
                      <s.Icon className="w-8 h-8 md:w-10 md:h-10 text-[var(--gold)] opacity-70 group-hover/service:opacity-100 transition-opacity duration-500 shrink-0" strokeWidth={1} />
                      <div className="flex flex-col">
                        <p className="text-[14px] md:text-[15px] font-medium text-white mb-0.5 tracking-wide">{s.name}</p>
                        <p className="text-[10px] md:text-[11px] text-[var(--silk-grey)] leading-tight font-light truncate max-w-[180px] md:max-w-xs">{s.desc}</p>
                      </div>
                      {data.service === s.name && <span className="absolute top-4 right-4 text-[var(--gold)] text-lg font-light">✓</span>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 pt-4 border-t border-white/5">
                  <span />
                  <button className="btn-primary flex-none px-10 py-3 bg-[var(--gold)] text-[var(--obsidian)] hover:bg-[var(--gold-light)] disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-widest text-[11px] font-semibold transition-all duration-300" onClick={handleNext} disabled={!data.service}>Next Step →</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex flex-col">
                <h2 className="font-serif text-[24px] text-center mb-4 text-white">Your Details</h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-4 text-[14px] focus:border-[var(--gold)] outline-none rounded-none text-white font-light tracking-wide placeholder:text-white/20 transition-all duration-500" placeholder="FULL NAME" value={data.name} onChange={e => setData({...data, name: e.target.value})} />
                    <input className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-4 text-[14px] focus:border-[var(--gold)] outline-none rounded-none text-white font-light tracking-wide placeholder:text-white/20 transition-all duration-500" placeholder="WHATSAPP (+971)" value={data.wa} onChange={e => setData({...data, wa: e.target.value})} />
                  </div>
                  <input className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-4 text-[14px] focus:border-[var(--gold)] outline-none rounded-none text-white font-light tracking-wide placeholder:text-white/20 transition-all duration-500 w-full" placeholder="EMAIL ADDRESS" type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-4 text-[14px] focus:border-[var(--gold)] outline-none rounded-none text-white font-light tracking-wide transition-all duration-500 cursor-pointer appearance-none" value={data.location} onChange={e => setData({...data, location: e.target.value})}>
                      <option value="" className="bg-[var(--obsidian)]">PROPERTY LOCATION</option><option className="bg-[var(--obsidian)]">Palm Jumeirah</option><option className="bg-[var(--obsidian)]">Downtown Dubai</option><option className="bg-[var(--obsidian)]">Business Bay</option>
                    </select>
                    <select className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-4 text-[14px] focus:border-[var(--gold)] outline-none rounded-none text-white font-light tracking-wide transition-all duration-500 cursor-pointer appearance-none" value={data.budget} onChange={e => setData({...data, budget: e.target.value})}>
                      <option value="" className="bg-[var(--obsidian)]">BUDGET RANGE</option><option className="bg-[var(--obsidian)]">AED 5M–10M</option><option className="bg-[var(--obsidian)]">AED 10M–25M</option><option className="bg-[var(--obsidian)]">AED 50M+</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-between mt-6 pt-4 border-t border-white/5">
                  <button className="btn-secondary flex-none px-8 py-3 text-[11px] uppercase tracking-widest transition-all" onClick={handleBack}>← Back</button>
                  <button className="btn-primary flex-none px-10 py-3 bg-[var(--gold)] text-[var(--obsidian)] text-[11px] font-semibold uppercase tracking-widest disabled:opacity-40" onClick={handleNext} disabled={!data.name || !data.wa}>Next Step →</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex flex-col">
                <h2 className="font-serif text-[24px] text-center mb-6 text-white">Choose a Date</h2>
                <div className="max-w-[480px] mx-auto bg-[rgba(255,255,255,0.01)] p-6 border border-white/5 rounded-sm w-full">
                  <div className="flex items-center justify-between mb-6">
                    <button className="w-8 h-8 border border-gold/30 text-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--obsidian)] rounded-sm transition-colors text-sm" onClick={() => changeMonth(-1)}>‹</button>
                    <span className="font-serif text-[18px] text-white uppercase tracking-wider">{months[calMonth]} {calYear}</span>
                    <button className="w-8 h-8 border border-gold/30 text-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--obsidian)] rounded-sm transition-colors text-sm" onClick={() => changeMonth(1)}>›</button>
                  </div>
                  <div className="grid grid-cols-7 gap-y-2 gap-x-1">
                    {['S','M','T','W','T','F','S'].map(d => <div key={d} className="text-center text-[10px] tracking-[0.1em] text-[var(--silk-grey)] py-1">{d}</div>)}
                    {Array.from({ length: getFirstDay(calMonth, calYear) }).map((_, i) => <div key={`empty-${i}`} />)}
                    {Array.from({ length: getDaysInMonth(calMonth, calYear) }).map((_, i) => {
                      const d = i + 1;
                      const dateObj = new Date(calYear, calMonth, d);
                      const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                      const isSun = dateObj.getDay() === 0;
                      const isToday = d === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
                      const disabled = isPast || isSun;
                      const dateStr = `${months[calMonth]} ${d}, ${calYear}`;
                      const selected = data.date === dateStr;

                      return (
                        <div 
                          key={d} 
                          onClick={() => !disabled && setData({...data, date: dateStr})}
                          className={cn(
                            "aspect-square flex items-center justify-center text-[12px] rounded-full transition-all duration-200 mx-auto w-8 h-8",
                            disabled ? "text-white/10 cursor-default" : "text-[var(--silk-light)] cursor-pointer hover:border hover:border-[var(--gold)] hover:text-[var(--gold)]",
                            selected ? "bg-[var(--gold)] !text-[var(--obsidian)] font-bold border-[var(--gold)] shadow-lg" : "",
                            isToday && !selected ? "text-[var(--gold)] font-bold ring-1 ring-[var(--gold)] ring-inset" : ""
                          )}
                        >
                          {d}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="flex gap-4 justify-between mt-6 pt-4 border-t border-white/5">
                  <button className="btn-secondary px-8 py-3 text-[11px] uppercase tracking-widest" onClick={handleBack}>← Back</button>
                  <button className="btn-primary px-10 py-3 bg-[var(--gold)] text-[var(--obsidian)] text-[11px] font-semibold uppercase tracking-widest disabled:opacity-40" onClick={handleNext} disabled={!data.date}>Select Slot →</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex flex-col">
                <h2 className="font-serif text-[24px] text-center mb-6 text-white">Choose a Time</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[500px] mx-auto w-full">
                  {timeSlots.map(t => {
                    const booked = bookedSlots.includes(t);
                    return (
                      <div 
                        key={t}
                        onClick={() => !booked && setData({ ...data, time: t })}
                        className={cn(
                          "py-3 px-3 border rounded-sm text-center transition-all duration-300 text-[13px] tracking-wide",
                          booked ? "border-white/5 text-white/10 cursor-default line-through" : "border-gold/20 text-[var(--silk-light)] cursor-pointer hover:border-[var(--gold)] hover:text-[var(--gold)]",
                          data.time === t && !booked ? "bg-[var(--gold)] text-[var(--obsidian)] font-semibold border-[var(--gold)] shadow-md" : ""
                        )}
                      >
                        {t}
                      </div>
                    )
                  })}
                </div>
                <div className="flex gap-4 justify-between mt-6 pt-4 border-t border-white/5">
                  <button className="btn-secondary px-8 py-3 text-[11px] uppercase tracking-widest" onClick={handleBack}>← Back</button>
                  <button className="btn-primary px-10 py-3 bg-[var(--gold)] text-[var(--obsidian)] text-[11px] font-semibold uppercase tracking-widest disabled:opacity-40" onClick={handleNext} disabled={!data.time}>Review →</button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col">
                <div className="border border-[rgba(212,175,55,0.3)] p-12 rounded-sm relative overflow-hidden mt-6 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl max-w-[600px] mx-auto w-full shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center font-serif text-[120px] text-[rgba(212,175,55,0.03)] font-light pointer-events-none tracking-tighter uppercase">CRIB</div>
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex justify-between border-b border-[rgba(212,175,55,0.1)] pb-4"><span className="text-[12px] uppercase tracking-[0.15em] text-[var(--silk-grey)]">Service</span><span className="text-white text-[15px] font-medium">{data.service}</span></div>
                    <div className="flex justify-between border-b border-[rgba(212,175,55,0.1)] pb-4"><span className="text-[12px] uppercase tracking-[0.15em] text-[var(--silk-grey)]">Date</span><span className="text-white text-[15px] font-medium">{data.date}</span></div>
                    <div className="flex justify-between border-b border-[rgba(212,175,55,0.1)] pb-4"><span className="text-[12px] uppercase tracking-[0.15em] text-[var(--silk-grey)]">Time</span><span className="text-white text-[15px] font-medium">{data.time}</span></div>
                    <div className="flex justify-between"><span className="text-[12px] uppercase tracking-[0.15em] text-[var(--silk-grey)]">Location</span><span className="text-white text-[15px] font-medium">{data.location || 'TBA'}</span></div>
                  </div>
                </div>
                <div className="flex gap-4 justify-between mt-[60px] pt-8 border-t border-[rgba(212,175,55,0.1)]">
                  <button className="btn-secondary px-10 py-4 text-[12px] uppercase tracking-widest" onClick={handleBack}>← Edit</button>
                  <button className="btn-primary px-12 py-4 bg-[var(--gold)] text-[var(--obsidian)] border-[var(--gold)] text-[12px] font-semibold uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:bg-[#ebd074]" onClick={handleNext}>✓ Confirm Booking</button>
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--gold)] flex items-center justify-center mx-auto mb-8 text-4xl text-[var(--gold)] shadow-[0_0_20px_rgba(212,175,55,0.2)]">✓</div>
                <h2 className="font-serif text-[42px] text-[var(--gold)] mb-3">Booking Confirmed!</h2>
                <p className="text-[var(--silk-grey)] text-[16px] mb-10">We'll WhatsApp you within 2 hours to confirm your consultation details.</p>
                <div className="flex gap-4 justify-center">
                  <button className="btn-primary px-8">📅 Add to Calendar</button>
                  <button className="btn-secondary px-8">Share on WhatsApp</button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
