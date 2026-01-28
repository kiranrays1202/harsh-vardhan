
import React, { useEffect, useRef } from 'react';
import { TALKS } from '../constants';

const Speaking: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="speaking" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
           <div>
              <h2 className="text-xs uppercase tracking-[0.5em] mb-6 opacity-40 font-bold">Thought Leadership</h2>
              <h3 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">Speaking & <br /><span className="italic font-light opacity-60 text-zinc-400">Public Influence.</span></h3>
           </div>
           <p className="max-w-sm text-zinc-500 text-lg leading-relaxed mb-2 font-light">
             Regularly invited to speak at global manufacturing and AI summits, Harsh Vardhan shares insights on the intersection of legacy industries and future tech.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {TALKS.map((talk, idx) => (
            <div key={talk.id} className="reveal group border-t border-white/10 pt-10 hover:bg-white/[0.02] transition-all duration-500 p-6 -m-6 rounded-lg" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] bg-white/10 px-2 py-1 uppercase tracking-widest text-white/60 font-bold border border-white/5">{talk.type}</span>
                <span className="text-xs opacity-30 font-bold tracking-widest">{talk.year}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2 mb-6 leading-tight group-hover:translate-x-1 transition-transform duration-500 min-h-[4rem]">
                {talk.title}
              </h3>
              
              <div className="flex flex-col gap-4">
                <p className="text-xs opacity-40 uppercase tracking-[0.2em] font-semibold text-zinc-400">{talk.event}</p>
                <div className="pt-6 border-t border-white/5 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white border-b border-white/40 pb-1 cursor-pointer">Watch Session —</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reveal mt-32 pt-16 border-t border-white/5 text-center">
           <p className="text-sm uppercase tracking-[0.5em] opacity-30 mb-8">Ready for your next event?</p>
           <a href="mailto:hello@harshvardhan.ai" className="text-xl md:text-3xl font-serif italic border-b border-white/20 pb-2 hover:border-white transition-all inline-block">Book Harsh for a Keynote</a>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
