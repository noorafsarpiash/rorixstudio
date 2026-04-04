"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  { id: 1, icon: "🍳", name: "Modular Kitchen Consultation", desc: "Design your dream kitchen" },
  { id: 2, icon: "🏛️", name: "Luxury Interior Design", desc: "Full space transformation" },
  { id: 3, icon: "🏠", name: "Smart Home Integration", desc: "Lutron · Crestron · Savant" },
  { id: 4, icon: "🪑", name: "Bespoke Furniture", desc: "Custom Italian craftsmanship" },
  { id: 5, icon: "🏡", name: "Full Villa Makeover", desc: "Complete transformation" },
  { id: 6, icon: "🎨", name: "3D Visualization Session", desc: "Free first session" }
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
    <section id="book" className="py-[80px]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-[60px]">
          <span className="section-eyebrow">Book a Consultation</span>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] mb-2 text-white">Reserve Your Design <em className="italic text-[var(--gold)]">Consultation</em></h1>
          <p className="text-[var(--silk-grey)] text-[15px]">Complimentary 60-minute session · No obligation</p>
        </motion.div>

        {step <= 5 && (
          <div className="flex items-center justify-center mb-[60px] gap-0">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex flex-col items-center gap-2 relative">
                <div className={cn("w-10 h-10 rounded-full border-2 flex items-center justify-center text-[13px] font-semibold transition-all duration-400 z-[1]", 
                  step === i ? "border-[var(--gold)] text-[var(--gold)] shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-[var(--obsidian)]" :
                  step > i ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--obsidian)]" : "border-[rgba(212,175,55,0.3)] text-[var(--silk-grey)] bg-[var(--obsidian)]"
                )}>
                  {step > i ? "✓" : i}
                </div>
                <div className={cn("text-[10px] uppercase tracking-[0.12em] whitespace-nowrap absolute top-12", step === i ? "text-[var(--gold)]" : "text-[var(--silk-grey)]")}>
                  {["Service", "Details", "Date", "Time", "Confirm"][i-1]}
                </div>
                {i < 5 && (
                  <div className="absolute top-5 left-10 w-[60px] md:w-[100px] h-[1px] bg-[rgba(212,175,55,0.2)] -z-10">
                    <div className="h-full bg-[var(--gold)] transition-all duration-400" style={{ width: step > i ? '100%' : '0%' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="max-w-[800px] mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col">
                <h2 className="font-serif text-[32px] text-center mb-2 text-white">Choose Your Service</h2>
                <p className="text-center text-[var(--silk-grey)] text-[14px] mb-[40px]">Select the consultation type that best fits your needs</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map(s => (
                    <div 
                      key={s.id} 
                      onClick={() => setData({ ...data, service: s.name })}
                      className={cn("border rounded-sm p-8 cursor-pointer transition-all duration-300 flex items-start gap-5 relative hover:border-[rgba(212,175,55,0.5)]", 
                        data.service === s.name ? "border-[var(--gold)] bg-[rgba(212,175,55,0.06)]" : "border-white/10"
                      )}
                    >
                      <span className="text-[32px] shrink-0">{s.icon}</span>
                      <div>
                        <p className="text-[16px] font-medium text-white mb-2">{s.name}</p>
                        <p className="text-[13px] text-[var(--silk-grey)] leading-relaxed">{s.desc}</p>
                      </div>
                      {data.service === s.name && <span className="absolute top-4 right-4 text-[var(--gold)]">✓</span>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-[60px] pt-8 border-t border-[rgba(212,175,55,0.1)]">
                  <span />
                  <button className="btn-primary flex-none px-12 py-4 bg-[var(--gold)] text-[var(--obsidian)] hover:bg-[var(--gold-light)] disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-widest text-[12px] font-semibold" onClick={handleNext} disabled={!data.service}>Next →</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col">
                <h2 className="font-serif text-[32px] text-center mb-[40px] text-white">Your Details</h2>
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input className="form-input p-5 text-[15px]" placeholder="Full Name" value={data.name} onChange={e => setData({...data, name: e.target.value})} />
                    <input className="form-input p-5 text-[15px]" placeholder="WhatsApp (+971)" value={data.wa} onChange={e => setData({...data, wa: e.target.value})} />
                  </div>
                  <input className="form-input p-5 text-[15px]" placeholder="Email Address" type="email" value={data.email} onChange={e => setData({...data, email: e.target.value})} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select className="form-input form-select p-5 text-[15px]" value={data.location} onChange={e => setData({...data, location: e.target.value})}>
                      <option value="">Property Location</option><option>Palm Jumeirah</option><option>Downtown Dubai</option><option>Business Bay</option>
                    </select>
                    <select className="form-input form-select p-5 text-[15px]" value={data.budget} onChange={e => setData({...data, budget: e.target.value})}>
                      <option value="">Budget Range</option><option>AED 50K–100K</option><option>AED 100K–250K</option><option>AED 500K+</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 justify-between mt-[60px] pt-8 border-t border-[rgba(212,175,55,0.1)]">
                  <button className="btn-secondary flex-none px-10 py-4 text-[12px] uppercase tracking-widest" onClick={handleBack}>← Back</button>
                  <button className="btn-primary flex-none px-12 py-4 bg-[var(--gold)] text-[var(--obsidian)] text-[12px] font-semibold uppercase tracking-widest disabled:opacity-40" onClick={handleNext} disabled={!data.name || !data.wa}>Next →</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col">
                <h2 className="font-serif text-[32px] text-center mb-[40px] text-white">Choose a Date</h2>
                <div className="max-w-[520px] mx-auto bg-[var(--obsidian-soft)] p-8 border border-[rgba(212,175,55,0.2)] rounded-sm w-full">
                  <div className="flex items-center justify-between mb-8">
                    <button className="w-10 h-10 border border-[rgba(212,175,55,0.4)] text-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--obsidian)] rounded-sm transition-colors" onClick={() => changeMonth(-1)}>‹</button>
                    <span className="font-serif text-[24px] text-white">{months[calMonth]} {calYear}</span>
                    <button className="w-10 h-10 border border-[rgba(212,175,55,0.4)] text-[var(--gold)] flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--obsidian)] rounded-sm transition-colors" onClick={() => changeMonth(1)}>›</button>
                  </div>
                  <div className="grid grid-cols-7 gap-y-4 gap-x-1">
                    {['SUN','MON','TUE','WED','THU','FRI','SAT'].map(d => <div key={d} className="text-center text-[11px] tracking-[0.1em] text-[var(--silk-grey)] py-2">{d}</div>)}
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
                            "aspect-square flex items-center justify-center text-[14px] rounded-full transition-all duration-200 mx-auto w-10 h-10",
                            disabled ? "text-white/15 cursor-default" : "text-[var(--silk-light)] cursor-pointer hover:border hover:border-[var(--gold)] hover:text-[var(--gold)] hover:shadow-sm",
                            selected ? "bg-[var(--gold)] !text-[var(--obsidian)] font-bold border-[var(--gold)] shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "",
                            isToday && !selected ? "text-[var(--gold)] font-bold ring-1 ring-[var(--gold)] ring-inset" : ""
                          )}
                        >
                          {d}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="flex gap-4 justify-between mt-[60px] pt-8 border-t border-[rgba(212,175,55,0.1)]">
                  <button className="btn-secondary px-10 py-4 text-[12px] uppercase tracking-widest" onClick={handleBack}>← Back</button>
                  <button className="btn-primary px-12 py-4 bg-[var(--gold)] text-[var(--obsidian)] text-[12px] font-semibold uppercase tracking-widest disabled:opacity-40" onClick={handleNext} disabled={!data.date}>Next →</button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col">
                <h2 className="font-serif text-[32px] text-center mb-[40px] text-white">Choose a Time</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[600px] mx-auto w-full">
                  {timeSlots.map(t => {
                    const booked = bookedSlots.includes(t);
                    return (
                      <div 
                        key={t}
                        onClick={() => !booked && setData({ ...data, time: t })}
                        className={cn(
                          "py-5 px-4 border rounded-sm text-center transition-all duration-300 text-[15px]",
                          booked ? "border-white/5 text-white/20 cursor-default line-through" : "border-[rgba(212,175,55,0.4)] text-[var(--silk-light)] cursor-pointer hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(212,175,55,0.1)]",
                          data.time === t && !booked ? "bg-[var(--gold)] text-[var(--obsidian)] font-semibold border-[var(--gold)] shadow-[0_4px_20px_rgba(212,175,55,0.3)]" : ""
                        )}
                      >
                        {t}
                      </div>
                    )
                  })}
                </div>
                <div className="flex gap-4 justify-between mt-[60px] pt-8 border-t border-[rgba(212,175,55,0.1)]">
                  <button className="btn-secondary px-10 py-4 text-[12px] uppercase tracking-widest" onClick={handleBack}>← Back</button>
                  <button className="btn-primary px-12 py-4 bg-[var(--gold)] text-[var(--obsidian)] text-[12px] font-semibold uppercase tracking-widest disabled:opacity-40" onClick={handleNext} disabled={!data.time}>Review →</button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col">
                <h2 className="font-serif text-[32px] text-center mb-8 text-white">Confirm Booking</h2>
                <div className="border border-[var(--gold)] p-12 rounded-sm relative overflow-hidden mt-2 bg-[var(--obsidian-soft)] max-w-[600px] mx-auto w-full">
                  <div className="absolute inset-0 flex items-center justify-center font-serif text-[80px] text-[rgba(212,175,55,0.04)] font-bold pointer-events-none">RORIX</div>
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
