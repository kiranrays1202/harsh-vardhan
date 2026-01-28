import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.05 });

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-40 px-6 md:px-12 bg-[#050505] min-h-screen relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] mb-6 opacity-30 font-bold text-white">Industrial Impact</h2>
            <h3 className="text-6xl md:text-9xl font-serif font-bold text-white leading-tight tracking-tighter">Impact & <br /><span className="italic font-light opacity-50">Scale.</span></h3>
          </div>
          <p className="max-w-sm text-zinc-500 text-lg leading-relaxed mb-6 font-light border-l border-white/10 pl-8">
            Deploying intelligent systems that redefine efficiency, safety, and scale in global manufacturing operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-40">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="reveal group cursor-pointer" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900 rounded-sm mb-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-10 left-10">
                  <span className="px-5 py-2.5 bg-black/60 backdrop-blur-2xl text-[10px] uppercase tracking-[0.4em] text-white border border-white/10 font-black">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                <div className="max-w-md">
                  <h4 className="text-4xl font-serif font-bold text-white mb-6 group-hover:translate-x-3 transition-transform duration-700 tracking-tight">{project.title}</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-light">
                    {project.description}
                  </p>
                </div>
                {project.stats && (
                  <div className="text-right flex flex-col gap-8 pt-2 shrink-0 self-end md:self-start border-r md:border-r-0 md:border-l border-white/5 pr-6 md:pl-6">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-3xl font-serif text-white font-bold tracking-tighter">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-black mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 opacity-30 group-hover:opacity-100 transition-all duration-700 flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.6em] text-white font-black">View Impact Case —</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;