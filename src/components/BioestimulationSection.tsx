import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { VeronaMonogram } from './VeronaLogo';

interface BioestimulationSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
  onOpenDetail: () => void;
}

export const BioestimulationSection: React.FC<BioestimulationSectionProps> = ({
  onOpenBooking,
  onOpenDetail,
}) => {
  return (
    <section className="py-20 lg:py-32 bg-[#087A8F] text-white relative overflow-hidden">
      {/* Background Verona Calligraphic Monogram Accent */}
      <div
        className="absolute -bottom-24 -right-24 pointer-events-none opacity-[0.08]"
        aria-hidden="true"
      >
        <VeronaMonogram size={560} color="#7ED6E6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Scientific Narrative in White */}
          <div className="lg:col-span-6">
            <div className="mb-3">
              <span className="verona-label text-[#7ED6E6] tracking-[0.24em] block">
                MEDICINA REGENERATIVA & NEOLOCOLAGÉNESIS
              </span>
            </div>

            {/* H2 white */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.14] mb-6">
              El colágeno como aliado del rejuvenecimiento.
            </h2>

            {/* Subtext white */}
            <p className="font-sans text-base sm:text-lg text-[#E6EEF1] leading-relaxed mb-6 font-light">
              Protocolos personalizados con bioestimuladores como Sculptra y Radiesse.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#E6EEF1]/80 leading-relaxed mb-8 font-light">
              A partir de los 25 años, la producción intrínseca de colágeno disminuye aproximadamente un 1% anual.
              Nuestros inductores estimulan los fibroblastos para reconstruir la malla elástica de soporte dérmico,
              logrando una firmeza sostenida, natural y biológicamente compatible.
            </p>

            {/* Scientific key takeaways */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <span className="font-serif text-lg text-[#7ED6E6] block mb-1">Sculptra®</span>
                <span className="text-xs text-white/80 leading-relaxed block">
                  Ácido Poli-L-Láctico biocompatible que redensifica la dermis profunda progresivamente.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <span className="font-serif text-lg text-[#7ED6E6] block mb-1">Radiesse®</span>
                <span className="text-xs text-white/80 leading-relaxed block">
                  Microesferas de hidroxiapatita cálcica para vectorización, tensado y textura.
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                id="bio-cta-primary"
                onClick={() => onOpenBooking('Bioestimuladores de Colágeno')}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00A6C6] hover:bg-white hover:text-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-lg cursor-pointer group"
              >
                <span>Conocer el tratamiento</span>
                <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                id="bio-cta-detail"
                onClick={onOpenDetail}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent border border-white/40 text-white hover:bg-white/10 font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer"
              >
                <span>Ficha médica completa</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Skin/Woman Photography */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[460px]">
              <div className="rounded-[22px] overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.25)] aspect-[4/5] bg-black/20">
                <img
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85"
                  alt="Estimulación biológica de colágeno en Clínica Verona"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#087A8F]/60 via-transparent to-transparent opacity-60" />

                {/* Floating clinical note */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md text-[#1E1E1E] shadow-xl border border-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#00A6C6]" />
                    <span className="verona-label text-[10px] text-[#087A8F]">
                      Efecto Biológico Progresivo
                    </span>
                  </div>
                  <p className="text-xs text-[#1E1E1E]/80">
                    Evolución visible de la calidad dérmica entre la semana 4 y el mes 6 con duración hasta 24 meses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
