import React, { useState } from 'react';
import { usePreferences } from '@/hooks/usePreferences';
import { getEstimate } from '@/lib/utils';
import { baseRates } from '@/lib/utils';

export function CostEstimator() {
  const { currency } = usePreferences();
  const [size, setSize] = useState(150);
  const [service, setService] = useState<keyof typeof baseRates>('kitchen');
  const [grade, setGrade] = useState<keyof typeof baseRates['kitchen']>('essential');
  const [rooms, setRooms] = useState(3);
  
  const calculateEstimate = () => {
    return getEstimate(size, service, grade, rooms, currency as any);
  };

  return (
    <section id="estimator" className="section-pad">
      <div className="container">
        <div className="section-header fade-in visible">
          <span className="section-eyebrow">Instant Estimate</span>
          <h2 className="section-title">Project Cost <em>Estimator</em></h2>
          <p className="section-subtitle">Get a real-time estimate for your project</p>
        </div>
        <div className="estimator-card fade-in visible">
          <div className="form-group">
            <label className="form-label">Room Size: <span>{size}</span> m²</label>
            <input 
              className="form-range" 
              type="range" 
              min="10" 
              max="500" 
              value={size} 
              onChange={(e) => setSize(parseInt(e.target.value))} 
              style={{ width: '100%', accentColor: 'var(--gold)' }}
            />
          </div>
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Service Type</label>
            <select 
              className="form-select" 
              value={service} 
              onChange={(e) => setService(e.target.value as any)}
              style={{ width: '100%', padding: '12px', background: 'var(--obsidian-soft)', color: 'var(--white)', border: '1px solid rgba(212,175,55,0.3)' }}
            >
              <option value="kitchen">Modular Kitchen</option>
              <option value="interior">Luxury Interior Design</option>
              <option value="villa">Villa Makeover</option>
              <option value="smart">Smart Home Integration</option>
            </select>
          </div>
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Material Grade</label>
            <div className="grade-options" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              <div className={`grade-option ${grade === 'essential' ? 'active' : ''}`} onClick={() => setGrade('essential')} style={{ cursor: 'pointer', padding: '16px', border: `1px solid ${grade === 'essential' ? 'var(--gold)' : 'rgba(212,175,55,0.3)'}`, borderRadius: '4px', textAlign: 'center' }}>
                <p className="grade-name" style={{ color: grade === 'essential' ? 'var(--gold)' : 'var(--white)', fontWeight: 600 }}>Essential</p>
                <p className="grade-desc" style={{ fontSize: '12px', color: 'var(--silk-grey)' }}>Quality materials</p>
              </div>
              <div className={`grade-option ${grade === 'premium' ? 'active' : ''}`} onClick={() => setGrade('premium')} style={{ cursor: 'pointer', padding: '16px', border: `1px solid ${grade === 'premium' ? 'var(--gold)' : 'rgba(212,175,55,0.3)'}`, borderRadius: '4px', textAlign: 'center' }}>
                <p className="grade-name" style={{ color: grade === 'premium' ? 'var(--gold)' : 'var(--white)', fontWeight: 600 }}>Premium</p>
                <p className="grade-desc" style={{ fontSize: '12px', color: 'var(--silk-grey)' }}>Imported finishes</p>
              </div>
              <div className={`grade-option ${grade === 'luxury' ? 'active' : ''}`} onClick={() => setGrade('luxury')} style={{ cursor: 'pointer', padding: '16px', border: `1px solid ${grade === 'luxury' ? 'var(--gold)' : 'rgba(212,175,55,0.3)'}`, borderRadius: '4px', textAlign: 'center' }}>
                <p className="grade-name" style={{ color: grade === 'luxury' ? 'var(--gold)' : 'var(--white)', fontWeight: 600 }}>Ultra-Luxury</p>
                <p className="grade-desc" style={{ fontSize: '12px', color: 'var(--silk-grey)' }}>Italian & bespoke</p>
              </div>
            </div>
          </div>
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label">Number of Rooms</label>
            <div className="stepper" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button className="stepper-btn" onClick={() => setRooms(Math.max(1, rooms - 1))} style={{ width: '40px', height: '40px', background: 'var(--obsidian-soft)', border: '1px solid var(--gold)', color: 'var(--gold)', borderRadius: '50%' }}>−</button>
              <span className="stepper-value" style={{ fontSize: '20px', fontWeight: 600 }}>{rooms}</span>
              <button className="stepper-btn" onClick={() => setRooms(Math.min(10, rooms + 1))} style={{ width: '40px', height: '40px', background: 'var(--obsidian-soft)', border: '1px solid var(--gold)', color: 'var(--gold)', borderRadius: '50%' }}>+</button>
            </div>
          </div>
          <div className="estimate-result" style={{ marginTop: '40px', padding: '24px', border: '1px solid var(--gold)', background: 'rgba(212,175,55,0.05)', textAlign: 'center', borderRadius: '4px' }}>
            <p className="estimate-label" style={{ color: 'var(--silk-grey)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px' }}>Estimated Project Cost</p>
            <span className="estimate-value" style={{ display: 'block', fontSize: '32px', color: 'var(--gold)', fontFamily: "'Playfair Display', serif", margin: '16px 0' }}>
              {calculateEstimate()}
            </span>
            <a href={`https://wa.me/971500000000?text=I want a quote for ${service}`} target="_blank" rel="noreferrer" className="estimate-cta" style={{ display: 'inline-block', marginTop: '16px', color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '2px', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.1em' }}>
              Get Exact Quote on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
