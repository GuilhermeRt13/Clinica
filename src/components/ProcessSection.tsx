import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_PROCESS } from '../data/clinicData';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-3">
            METODOLOGÍA CLÍNICA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal tracking-[-0.01em] mb-4">
            Cada tratamiento comienza con una evaluación.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/75 leading-relaxed">
            Una ruta de atención clara, segura y estructurada para garantizar resultados armoniosos y predecibles.
          </p>
        </div>

        {/* 4 Steps Timeline with fine turquoise line */}
        <div className="relative">
          {/* Connecting fine turquoise line across desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1.5px] bg-[#00A6C6]/30 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {SERVICE_PROCESS.map((item, idx) => (
              <div
                key={item.step}
                className="group relative bg-[#F7F7F7] p-8 rounded-[20px] border border-[#087A8F]/10 hover:border-[#00A6C6]/40 hover:bg-white transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,166,198,0.08)] flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & turquoise marker */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-[#087A8F] group-hover:text-[#00A6C6] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-[#00A6C6]/30 flex items-center justify-center text-[#00A6C6] text-xs font-bold shadow-sm">
                      ✓
                    </div>
                  </div>

                  <span className="verona-label text-[10px] text-[#00A6C6] tracking-[0.2em] block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1E1E1E] mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#1E1E1E]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="w-0 group-hover:w-full h-[2px] bg-[#00A6C6] mt-6 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button below process */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Iniciar con mi evaluación inicial</span>
            <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
