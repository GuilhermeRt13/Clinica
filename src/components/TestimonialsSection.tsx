import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';
import { VeronaMonogram } from './VeronaLogo';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F7F7] relative border-t border-[#087A8F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-3">
            TESTIMONIOS & CONFIANZA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal tracking-[-0.01em]">
            Experiencias Verona.
          </h2>
          <div className="w-12 h-0.5 bg-[#00A6C6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Minimalist Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-[20px] border border-[#087A8F]/12 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between relative hover:shadow-[0_15px_40px_rgba(0,166,198,0.08)] transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-[#00A6C6]/30 mb-4" strokeWidth={1.5} />
                <p className="font-serif text-base sm:text-lg text-[#1E1E1E]/85 leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#1E1E1E]">
                    {t.patientName}
                  </h4>
                  <span className="verona-label text-[10px] text-[#087A8F] block mt-0.5">
                    {t.procedure}
                  </span>
                </div>
                <span className="text-[11px] text-gray-400 font-sans">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
