import React, { useEffect, useRef } from 'react';
import { HARSHA_BIO, INFLUENCE_ROLES, AWARDS } from '../constants';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24 items-start">
        
        {/* Left: Professional Sidebar */}
        <div className="lg:col-span-5 reveal space-y-12">
          <div className="gold-portrait-frame w-full aspect-square max-w-[320px] mx-auto lg:mx-0">
            <div className="w-full h-full rounded-full overflow-hidden border-[4px] border-[#0a0a0a] bg-zinc-900">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D03AQE8K7e7K9G1yA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657805216335?e=1746662400&v=beta&t=P3hY8_R8x6O1T9E8R8X6O1T9E8R8X6O1T9E8R8X6O1" 
                alt="Harsh Vardhan - Apollo Tyres" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>

          <div className="border-t border-white/10 pt-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-10">Distinctions & Awards</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {AWARDS.map((award, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <span className="text-[#D4AF37] text-xl transition-transform group-hover:scale-110 duration-300">🏆</span>
                  <span className="text-[11px] font-bold text-white leading-tight tracking-tight uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    {award}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-6 border-t border-white/5">
            <a 
              href="https://enterpriseai.economictimes.indiatimes.com/news/case-studies/apollo-tyres-transforms-operations-with-ai-a-10-minute-revolution/125764747"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] hover:text-white transition-colors"
            >
              Read ET Case Study →
            </a>
          </div>
        </div>

        {/* Right: Biography Content */}
        <div className="lg:col-span-7 reveal">
          <h2 className="text-xs uppercase tracking-[0.6em] mb-10 opacity-30 font-bold text-white">The Profile</h2>
          <h3 className="text-5xl md:text-8xl font-serif italic mb-12 text-white leading-[1.1] tracking-tighter">
            Digital Transformation <br /> <span className="font-bold opacity-100 not-italic">Governance.</span>
          </h3>
          
          <div className="prose prose-invert max-w-2xl mb-16">
            <p className="text-xl leading-relaxed text-[#D4AF37] mb-8 font-light italic">
              “Driving the 10-Minute AI Revolution in Industry”
            </p>
            <p className="text-lg leading-relaxed text-zinc-300 font-light">
              {HARSHA_BIO}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-6">Strategic Intelligence</span>
              <div className="space-y-6">
                {INFLUENCE_ROLES.map((role, i) => (
                  <div key={i} className="group">
                    <p className="text-[10px] text-zinc-500 font-black tracking-widest uppercase mb-1 group-hover:text-white transition-colors">{role.org}</p>
                    <p className="text-sm text-white font-medium">{role.role}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-12">
               <div className="bg-white/[0.02] p-8 border border-white/5 rounded-sm">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-6">Expertise Vectors</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Quantum ML', 'Industry 5.0', 'Agentic AI', 'Closed-Loop', 'Cybersecurity', 'GCC Innovation', 'Design Thinking'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
               
               <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4">Leadership Style</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light italic uppercase tracking-wider">
                    Innovate-led Culture • New Gen Tech Socialization • Risk Acceptance (Fail Fast) • Empathy & Collaboration
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;