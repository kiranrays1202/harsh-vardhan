
import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
      <div 
        className="text-xl font-bold tracking-tighter uppercase cursor-pointer hover:text-[#D4AF37] transition-colors" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Harsh Vardhan
      </div>
      <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:opacity-100 hover:text-white transition-all">About</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:opacity-100 hover:text-white transition-all">Impact</a>
        <a href="#research" onClick={(e) => handleScroll(e, 'research')} className="hover:opacity-100 hover:text-white transition-all">Research</a>
        <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:opacity-100 hover:text-white transition-all">Work</a>
        <a href="#speaking" onClick={(e) => handleScroll(e, 'speaking')} className="hover:opacity-100 hover:text-white transition-all">Speaking</a>
        <a href="#chat" onClick={(e) => handleScroll(e, 'chat')} className="hover:opacity-100 hover:text-white transition-all">Ask AI</a>
      </div>
      <a href="mailto:hello@harshvardhan.ai" className="border border-white/20 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
