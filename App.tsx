import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Credentials from './components/Credentials';
import Speaking from './components/Speaking';
import AiChat from './components/AiChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black bg-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Credentials />
        <Experience />
        <Speaking />
        <AiChat />
      </main>
      <Footer />
    </div>
  );
}

export default App;