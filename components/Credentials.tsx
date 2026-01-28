import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Credentials: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.6em] mb-6 opacity-30 font-bold text-white">Technical Authority</h2>
            <h3 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">Mastery & <br />Verification.</h3>
          </div>
          <div className="text-right">
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold opacity-40 mb-2">
              Verified Skills & Architectures
            </p>
            <span className="text-[10px] text-[#D4AF37] font-black tracking-[0.3em] uppercase">Multi-Cloud Architect (GCP, AZURE, AWS)</span>
          </div>
        </div>

        {/* Techno-Functional Matrix */}
        <div className="grid md:grid-cols-3 gap-16 mb-32">
          <div>
            <h4 className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-black mb-10 pb-2 border-b border-[#D4AF37]/20">AI & Deep Science</h4>
            <div className="space-y-6">
              {[
                { label: 'Computer Vision', val: 100 },
                { label: 'NLP-NLU-NLG', val: 90 },
                { label: 'Agentic Reasoning', val: 90 },
                { label: 'Deep Reinforcement Learning', val: 70 }
              ].map(skill => (
                <div key={skill.label}>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">
                    <span>{skill.label}</span>
                    <span>{skill.val}%</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 relative">
                    <div className="absolute top-0 left-0 h-full bg-white" style={{ width: `${skill.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-500 text-[10px] uppercase tracking-widest font-black mb-10 pb-2 border-b border-white/10">Industry 4.0 Ecosystem</h4>
            <div className="space-y-6">
              {[
                { label: 'IIoT Architecture', val: 95 },
                { label: 'Big Data Governance', val: 80 },
                { label: 'Cloud Architecture', val: 100 },
                { label: 'Digital Twins', val: 85 }
              ].map(skill => (
                <div key={skill.label}>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">
                    <span>{skill.label}</span>
                    <span>{skill.val}%</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 relative">
                    <div className="absolute top-0 left-0 h-full bg-white" style={{ width: `${skill.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-500 text-[10px] uppercase tracking-widest font-black mb-10 pb-2 border-b border-white/10">Governance & Product</h4>
            <div className="space-y-6">
              {[
                { label: 'Product Management', val: 100 },
                { label: 'Digital Portfolio Strategy', val: 95 },
                { label: 'Cybersecurity Ops', val: 70 },
                { label: 'Financial Budgeting', val: 90 }
              ].map(skill => (
                <div key={skill.label}>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2">
                    <span>{skill.label}</span>
                    <span>{skill.val}%</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 relative">
                    <div className="absolute top-0 left-0 h-full bg-white" style={{ width: `${skill.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Certification Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="cert-card p-6 rounded-sm flex flex-col justify-between min-h-[160px] group">
              <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/40 transition-colors">
                 <div className="w-1.5 h-1.5 bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-zinc-400 group-hover:text-white leading-relaxed">
                {cert}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;