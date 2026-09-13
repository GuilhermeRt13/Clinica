import React, { useState } from 'react';
import { ArrowRight, Cpu, Zap, Activity, Check } from 'lucide-react';
import { TECHNOLOGIES } from '../data/clinicData';
import { TechnologyItem } from '../types';

interface TechnologySectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenBooking }) => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem>(TECHNOLOGIES[0]);

  return (
    <section id="tecnologia" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-3">
            TECNOLOGÍA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal tracking-[-0.01em] mb-4">
            Tecnología al servicio de la precisión.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/75 leading-relaxed">
            Aparatología médica de última generación para procedimientos con máximo control anatómico, eficacia y confort.
          </p>
        </div>

        {/* Technology Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {TECHNOLOGIES.map((tech) => {
            const isCurrent = selectedTech.id === tech.id;
            return (
              <button
                key={tech.id}
                type="button"
                onClick={() => setSelectedTech(tech)}
                className={`p-6 rounded-[18px] text-left transition-all duration-300 border cursor-pointer ${
                  isCurrent
                    ? 'bg-[#E8F6F8] border-[#00A6C6] shadow-[0_8px_25px_rgba(0,166,198,0.1)]'
                    : 'bg-[#F7F7F7] border-transparent hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="verona-label text-[10px] text-[#087A8F]">
                    {tech.badge}
                  </span>
                  {isCurrent && <div className="w-2.5 h-2.5 rounded-full bg-[#00A6C6]" />}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1E1E1E]">
                  {tech.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Featured Technology Showcase Card */}
        <div className="rounded-[22px] bg-[#F7F7F7] border border-[#087A8F]/15 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            {/* Left: Technology Image Composition */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-gray-200/80 shadow-md">
                <img
                  src={selectedTech.image}
                  alt={selectedTech.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="verona-label text-[#7ED6E6] text-[10px] block mb-0.5">
                    EQUIPAMIENTO CLÍNICO OFICIAL
                  </span>
                  <p className="font-serif text-lg font-medium">{selectedTech.name}</p>
                </div>
              </div>
            </div>

            {/* Right: Certified Official Clinical Description */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="verona-label text-[#00A6C6] text-[11px] mb-2 block">
                {selectedTech.badge}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1E1E] font-medium mb-4">
                {selectedTech.name}
              </h3>

              <div className="p-4 rounded-xl bg-white border border-gray-200/80 mb-6">
                <h4 className="verona-label text-[10px] text-[#087A8F] mb-1">
                  Descripción Oficial
                </h4>
                <p className="font-sans text-sm text-[#1E1E1E]/80 leading-relaxed">
                  {selectedTech.officialDescription}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="verona-label text-[10px] text-[#1E1E1E] mb-2">
                  Aplicación en Protocolos Médicos
                </h4>
                <p className="font-sans text-sm text-[#1E1E1E]/75 leading-relaxed">
                  {selectedTech.clinicalApplication}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-8">
                {selectedTech.scientificHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1E1E1E]/80">
                    <Check className="w-4 h-4 text-[#00A6C6] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  id={`tech-eval-cta-${selectedTech.id}`}
                  onClick={() => onOpenBooking(selectedTech.name)}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Consultar protocolo con {selectedTech.name}</span>
                  <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
