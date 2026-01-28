
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] mb-6 opacity-40 font-bold">Career Timeline</h2>
            <h3 className="text-5xl md:text-8xl font-serif font-bold leading-tight tracking-tighter">Global <br />Transformation.</h3>
          </div>
          <p className="max-w-xs text-sm uppercase tracking-widest leading-loose opacity-60 mb-2">
            A DECADE OF SCALING INTELLIGENCE ACROSS CONTINENTS AND INDUSTRIES.
          </p>
        </div>

        <div className="space-y-0">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="grid md:grid-cols-12 gap-8 py-20 border-t border-black/10 group hover:bg-zinc-50 transition-all duration-500">
              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-widest font-bold opacity-30 group-hover:opacity-100 transition-opacity mb-2">
                  {exp.period}
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-40 font-medium">
                  {exp.location}
                </div>
              </div>
              <div className="md:col-span-7">
                <h4 className="text-3xl md:text-5xl font-serif font-bold mb-10 group-hover:italic transition-all duration-500 tracking-tight">{exp.role}</h4>
                <div className="space-y-6 max-w-2xl">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <span className="w-6 h-px bg-black/20 mt-3 shrink-0" />
                      <p className="text-lg leading-relaxed text-zinc-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 text-right hidden md:flex flex-col items-end justify-start">
                 <span className="text-[10px] uppercase tracking-[0.3em] font-black py-2 px-4 border border-black/20 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {exp.company}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
