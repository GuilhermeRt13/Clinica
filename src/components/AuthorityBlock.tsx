import React from 'react';
import { Microscope, ShieldCheck, Target, Award } from 'lucide-react';
import { AUTHORITY_PILLARS } from '../data/clinicData';

const iconMap: Record<string, React.ReactNode> = {
  ciencia: <Microscope className="w-7 h-7 text-[#00A6C6]" strokeWidth={1.3} />,
  seguridad: <ShieldCheck className="w-7 h-7 text-[#00A6C6]" strokeWidth={1.3} />,
  precision: <Target className="w-7 h-7 text-[#00A6C6]" strokeWidth={1.3} />,
  excelencia: <Award className="w-7 h-7 text-[#00A6C6]" strokeWidth={1.3} />,
};

export const AuthorityBlock: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#087A8F]/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="verona-label text-[#00A6C6] tracking-[0.25em] block mb-2">
            RIGOR CLÍNICO & COMPROMISO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E] font-normal tracking-[-0.01em]">
            Belleza con respaldo médico.
          </h2>
          <div className="w-12 h-0.5 bg-[#00A6C6] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {AUTHORITY_PILLARS.map((pillar, index) => {
            return (
              <div
                key={pillar.id}
                className="group relative p-7 rounded-[18px] bg-[#F7F7F7] border border-[#087A8F]/10 hover:border-[#00A6C6]/40 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1"
              >
                {/* Subtle top index marker */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                    {iconMap[pillar.id]}
                  </div>
                  <span className="font-serif text-xs text-[#087A8F]/40 font-medium">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-medium text-[#1E1E1E] tracking-wide mb-2 uppercase">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm text-[#1E1E1E]/75 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Micro accent line at bottom */}
                <div className="w-0 group-hover:w-8 h-[2px] bg-[#00A6C6] mt-4 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
