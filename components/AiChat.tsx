import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { Message } from '../types';

const AiChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome. I'm Harsh's AI Digital Twin. How can I assist you with industrial AI strategy or digital transformation insights today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err: any) {
      console.error("Chat Error:", err);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I am currently undergoing a synchronization update. Please try again shortly or contact Harsh directly via hello@harshvardhan.ai." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chat" className="py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[600px] shadow-2xl bg-black">
        <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-center">
          <div>
            <h3 className="font-bold tracking-tight text-white uppercase text-sm">Harsh AI Digital Twin</h3>
            <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">Synchronized with Strategic Intelligence</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-40">Neural Core Active</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/40">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-xl p-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-white text-black font-medium' 
                  : 'bg-zinc-900 text-zinc-300 border border-white/5'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 text-zinc-300 border border-white/5 rounded-xl p-4 text-sm flex gap-3 items-center">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                </div>
                <span className="opacity-40 uppercase text-[10px] tracking-widest">Processing</span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-white/5 border-t border-white/10 flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inquire about industrial AI strategy..."
            className="flex-1 bg-black border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-white/30 transition-all placeholder:opacity-30"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-20 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AiChat;