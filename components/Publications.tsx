
import React, { useEffect, useRef } from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
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
    <section id="research" ref={sectionRef} className="py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.6em] mb-6 opacity-40 font-bold">Intellectual Property</h2>
            <h3 className="text-5xl md:text-7xl font-serif italic font-bold leading-tight tracking-tight">Research & <br />Publications.</h3>
          </div>
          <div className="flex gap-8">
            <a href="https://scholar.google.com/citations?user=I_XNyF0AAAAJ" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-black border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">Google Scholar</a>
            <a href="https://www.amazon.com/author/harshvardhan" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest font-black border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">Amazon Author</a>
          </div>
        </div>

        <div className="space-y-16">
          {PUBLICATIONS.map((pub, idx) => (
            <div key={pub.id} className="reveal group grid md:grid-cols-12 gap-8 py-10 border-b border-zinc-100 last:border-0" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="md:col-span-2">
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1 border rounded-full ${pub.type === 'Book' ? 'bg-black text-white border-black' : 'border-black/10'}`}>
                  {pub.type}
                </span>
                <p className="mt-4 text-xs font-bold opacity-30 tracking-widest">{pub.year}</p>
              </div>
              <div className="md:col-span-10">
                <h4 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
                  {pub.title}
                </h4>
                <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest mb-4 opacity-60">{pub.publisher}</p>
                {pub.description && (
                  <p className="text-zinc-600 max-w-2xl leading-relaxed text-lg font-light italic">
                    {pub.description}
                  </p>
                )}
                {pub.link && (
                  <div className="mt-8 flex items-center gap-4">
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-all flex items-center gap-2"
                    >
                      {pub.type === 'Book' ? 'Order on Amazon' : 'View Publication'}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
