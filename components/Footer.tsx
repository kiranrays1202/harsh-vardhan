
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-6xl md:text-7xl font-serif italic mb-10 leading-none text-white">Architecting <br />Intelligence.</h2>
          <p className="opacity-40 text-sm uppercase tracking-[0.3em] max-w-sm mb-12 font-medium text-white">
            Strategic Consulting • Industrial Innovation • Author
          </p>
          <a href="mailto:hello@harshvardhan.ai" className="text-2xl md:text-4xl font-light hover:opacity-50 transition-opacity underline decoration-white/10 underline-offset-[12px] decoration-1 text-white">
            hello@harshvardhan.ai
          </a>
        </div>
        
        <div className="flex flex-col justify-end">
          <div className="flex flex-wrap gap-x-12 gap-y-6 mb-20">
            <a 
              href="https://linkedin.com/in/harshvardhan-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 text-white font-bold"
            >
              LinkedIn
              <svg className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=I_XNyF0AAAAJ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 text-white font-bold"
            >
              Scholar
              <svg className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a 
              href="https://twitter.com/harshvardhan_ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 text-white font-bold"
            >
              Twitter
              <svg className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.5em] opacity-20 flex flex-col md:flex-row justify-between gap-4 text-white">
            <span>© 2026 Harsh Vardhan • AI Evangelist</span>
            <span className="font-bold italic">Apollo Tyres Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
