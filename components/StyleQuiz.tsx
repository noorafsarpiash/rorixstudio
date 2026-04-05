"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styleResults } from "@/lib/constants";
import { cn } from "@/lib/utils";

const questions = [
  { id: 'q1', type: 'vibe', question: "What's your vibe?", options: ["Minimal & Clean", "Bold & Dramatic", "Warm & Cozy", "Futuristic"] },
  { id: 'q2', type: 'palette', question: "Your color palette?", options: ["Neutrals & Whites", "Dark & Moody", "Earth Tones", "Jewel Tones"] },
  { id: 'q3', type: 'material', question: "Material preference?", options: ["Marble & Stone", "Wood & Rattan", "Metal & Glass", "Mixed Luxury"] },
  { id: 'q4', type: 'property', question: "Property type?", options: ["Apartment", "Villa", "Penthouse", "Office"] },
  { id: 'q5', type: 'budget', question: "Your budget?", options: ["AED 50K–100K", "AED 100K–250K", "AED 250K–500K", "AED 500K+"] }
];

export function StyleQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [result, setResult] = useState<typeof styleResults['Warm & Cozy'] | null>(null);

  const handleSelect = (qId: string, opt: string) => {
    setAnswers(prev => ({ ...prev, [qId]: opt }));
  };

  const handleNext = () => {
    if (step <= 5) setStep(step + 1);
  };

  const submitLead = () => {
    if (!name) return alert("Please enter your name");
    const matchedStyle = styleResults[answers['q1'] as keyof typeof styleResults] || styleResults['Warm & Cozy'];
    setResult(matchedStyle);
    setStep(7); // Result step
  };

  const progress = step <= 5 ? (step / 5) * 100 : step === 6 ? 95 : 100;

  return (
    <section id="quiz-section" className="py-[100px] bg-[var(--obsidian)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-[60px]"
        >
          <span className="section-eyebrow">Personalised Style</span>
          <h2 className="section-title">Discover Your <em className="italic text-[var(--gold)]">Interior Style</em></h2>
          <p className="section-subtitle">5 questions — get your personal style profile</p>
        </motion.div>

        <div className="max-w-[720px] mx-auto">
          <div className="h-[2px] bg-[rgba(212,175,55,0.2)] mb-12 rounded-[1px]">
            <div 
              className="h-full bg-[var(--gold)] rounded-[1px] transition-all duration-500" 
              style={{ width: `${progress}%` }} 
            />
          </div>

          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              
              {step <= 5 && (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-serif text-3xl text-center mb-9 text-white">{questions[step - 1].question}</p>
                  <div className="grid grid-cols-2 gap-3.5">
                    {questions[step - 1].options.map(opt => (
                      <div 
                        key={opt}
                        onClick={() => handleSelect(questions[step - 1].id, opt)}
                        className={cn(
                          "p-5 md:px-6 border rounded-sm cursor-pointer transition-all duration-300 text-[15px] text-center",
                          answers[questions[step - 1].id] === opt 
                            ? "border-[var(--gold)] bg-[rgba(212,175,55,0.1)] text-[var(--gold)]" 
                            : "border-white/10 bg-[var(--obsidian-soft)] text-[var(--silk-light)] hover:border-[var(--gold)] hover:text-white"
                        )}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-9">
                    {step > 1 ? (
                      <button onClick={() => setStep(step - 1)} className="text-[var(--silk-grey)] hover:text-white transition-colors duration-300 text-sm">← Back</button>
                    ) : <span />}
                    <span className="text-[12px] text-[var(--silk-grey)] tracking-[0.1em]">Step {step} of 5</span>
                    <button 
                      onClick={handleNext}
                      disabled={!answers[questions[step - 1].id]}
                      className="px-8 py-3.5 border border-[var(--gold)] bg-[var(--gold)] text-[var(--obsidian)] text-[12px] uppercase tracking-[0.15em] font-semibold rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--gold-light)]"
                    >
                      {step === 5 ? "Get Results →" : "Next →"}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 6 && (
                <motion.div
                  key="lead"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  {/* Radial gradient backdrop */}
                  <div
                    className="absolute inset-0 -m-16 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(28,31,38,0.9) 0%, rgba(10,10,10,0) 70%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Shimmer sweep */}
                  <div className="quiz-shimmer" aria-hidden="true" />

                  <div className="relative z-10 py-10 text-center">
                    {/* Eyebrow */}
                    <p className="text-[var(--gold)] text-[10px] uppercase tracking-[0.45em] mb-6 opacity-70">
                      Private Style Consultation
                    </p>

                    {/* Main heading — Playfair serif, gold */}
                    <h2
                      className="font-serif text-white mb-5 leading-tight"
                      style={{ fontSize: 'clamp(26px, 4vw, 40px)', letterSpacing: '0.06em' }}
                    >
                      Your Report is{' '}
                      <span className="italic text-[var(--gold)]">Ready.</span>
                    </h2>

                    {/* Sub-description — muted serif */}
                    <p
                      className="text-white/35 max-w-[380px] mx-auto mb-14 leading-[1.9]"
                      style={{ fontSize: '13px', fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em' }}
                    >
                      Finalizing your tailored experience. Where shall we deliver your style portfolio?
                    </p>

                    {/* Underline-only inputs */}
                    <div className="flex flex-col gap-10 max-w-[380px] mx-auto mb-12">
                      <div className="relative">
                        <label className="absolute -top-5 left-0 text-[var(--gold)] text-[9px] uppercase tracking-[0.4em] opacity-50">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          className="quiz-lead-input"
                        />
                      </div>
                      <div className="relative">
                        <label className="absolute -top-5 left-0 text-[var(--gold)] text-[9px] uppercase tracking-[0.4em] opacity-50">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          placeholder="+971 — — — — —"
                          value={wa}
                          onChange={e => setWa(e.target.value)}
                          className="quiz-lead-input"
                        />
                      </div>
                    </div>

                    {/* Boutique CTA button */}
                    <button
                      onClick={submitLead}
                      className="quiz-lead-btn"
                    >
                      Receive My Style Portfolio →
                    </button>

                    <p className="text-white/15 text-[11px] mt-6 tracking-wide">
                      Your details remain private — exclusively for your consultation.
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 7 && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <p className="text-[12px] tracking-[0.2em] uppercase text-[var(--silk-grey)] mb-2">Your Style Profile</p>
                  <div className="border border-[var(--gold)] p-12 rounded-sm mt-6 bg-[var(--obsidian-soft)]">
                    <p className="font-serif text-4xl text-[var(--gold)] mb-3 italic">{result.title}</p>
                    <p className="text-[var(--silk-grey)] text-[15px] leading-[1.8]">{result.desc}</p>
                    <button className="btn-primary mt-7" onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: 'smooth' })}>
                      Book a Consultation →
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
