import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col px-6 md:px-12 pt-40 pb-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="mb-12 overflow-hidden">
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.8em] opacity-40 font-bold animate-fade-in-up">
            Harsh Vardhan • Global Head of Digital Innovation @ Apollo Tyres
          </h2>
        </div>
        
        <h1 className="text-6xl md:text-[10rem] lg:text-[13rem] font-serif font-bold leading-[0.85] tracking-tighter mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Industrial <br />
          <span className="italic font-light text-zinc-500">Excellence.</span>
        </h1>
        
        <div className="grid md:grid-cols-12 gap-8 items-end animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="md:col-span-6">
            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-snug tracking-tight">
              Architecting high-velocity closed-loop control systems and agentic AI to build the autonomous industrial future.
            </p>
          </div>
          <div className="md:col-start-10 md:col-span-3 flex flex-col items-end">
             <div className="text-right">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Location</span>
                <span className="text-sm uppercase tracking-widest text-white font-medium">New Delhi / Gurugram</span>
             </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 flex items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
           <a href="#projects" className="group flex items-center gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-700 ease-out">
                <svg className="w-6 h-6 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold opacity-40 group-hover:opacity-100 transition-all">Explore Impact</span>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;