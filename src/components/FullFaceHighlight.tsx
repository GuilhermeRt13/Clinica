import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { VeronaMonogram } from './VeronaLogo';

interface FullFaceHighlightProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const FullFaceHighlight: React.FC<FullFaceHighlightProps> = ({ onOpenBooking }) => {
  const [activeMarker, setActiveMarker] = useState<number>(0);

  const anatomicalMarkers = [
    {
      title: 'Toxina Botulínica',
      area: 'Tercio Superior (Frente, Entrecejo y Patas de Gallo)',
      benefit: 'Relajación selectiva de la musculatura hiperactiva sin inexpresividad ni rigidez.',
      pos: { top: '26%', left: '50%' },
    },
    {
      title: 'Armonización',
      area: 'Tercio Medio (Pómulos y Proyección Malar)',
      benefit: 'Reposición de puntos de luz y vectores de soporte anatómico natural.',
      pos: { top: '46%', left: '32%' },
    },
    {
      title: 'Efecto Nefertiti',
      area: 'Tercio Inferior & Banda Platismal',
      benefit: 'Definición nítida del ángulo mandibular y alisamiento de cuerdas platismales.',
      pos: { top: '74%', left: '62%' },
    },
    {
      title: 'Rejuvenecimiento',
      area: 'Enfoque Global Tridimensional',
      benefit: 'Equilibrio simétrico, luminosidad cutánea y descanso fisonómico armónico.',
      pos: { top: '60%', left: '46%' },
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F7F7F7] border-y border-[#087A8F]/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-[0.035]"
        aria-hidden="true"
      >
        <VeronaMonogram size={600} color="#087A8F" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait with Interactive Anatomical Indicators */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[480px]">
              {/* Image Frame */}
              <div className="relative rounded-[22px] overflow-hidden border border-[#087A8F]/15 shadow-[0_20px_50px_rgba(0,0,0,0.07)] bg-white aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt="Armonización facial integral Full Face en Clínica Verona"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Interactive Anatomical Pins on image */}
                {anatomicalMarkers.map((marker, index) => {
                  const isActive = activeMarker === index;
                  return (
                    <button
                      key={marker.title}
                      type="button"
                      onClick={() => setActiveMarker(index)}
                      style={{ top: marker.pos.top, left: marker.pos.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 z-20`}
                      aria-label={`Ver detalle de ${marker.title}`}
                    >
                      <span className="relative flex h-8 w-8 items-center justify-center">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isActive ? 'bg-[#00A6C6]' : 'bg-white'
                          }`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-7 w-7 items-center justify-center text-[10px] font-bold shadow-md border ${
                            isActive
                              ? 'bg-[#00A6C6] text-white border-white scale-110'
                              : 'bg-white/90 text-[#087A8F] border-[#087A8F]/20 hover:scale-105'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </span>
                    </button>
                  );
                })}

                {/* Floating active point card inside image bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-md">
                  <div className="flex items-center justify-between mb-1">
                    <span className="verona-label text-[10px] text-[#00A6C6]">
                      {anatomicalMarkers[activeMarker].area}
                    </span>
                    <span className="text-[10px] text-gray-400">Punto 0{activeMarker + 1}/04</span>
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#1E1E1E]">
                    {anatomicalMarkers[activeMarker].title}
                  </h4>
                  <p className="text-xs text-[#1E1E1E]/75 mt-0.5">
                    {anatomicalMarkers[activeMarker].benefit}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Information & Indicators List */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="mb-3">
              <span className="verona-label text-[#00A6C6] tracking-[0.24em]">
                TRATAMIENTO DESTACADO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal leading-[1.12] mb-6">
              Armonización facial
              <br />
              <span className="italic text-[#087A8F]">con visión integral.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/80 leading-relaxed mb-8">
              Un enfoque personalizado para analizar el rostro como un conjunto y buscar equilibrio, proporción y naturalidad.
            </p>

            {/* 4 Indicators Interactive List */}
            <div className="space-y-3 mb-10">
              {anatomicalMarkers.map((marker, idx) => {
                const isSelected = activeMarker === idx;
                return (
                  <div
                    key={marker.title}
                    onClick={() => setActiveMarker(idx)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#00A6C6] shadow-sm'
                        : 'bg-white/60 border-gray-200/70 hover:bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                            isSelected ? 'bg-[#00A6C6] text-white' : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <h3 className="font-serif text-base font-medium text-[#1E1E1E]">
                          {marker.title}
                        </h3>
                      </div>
                      <span className="text-[11px] text-[#087A8F] uppercase tracking-wider font-medium">
                        {marker.area.split('(')[0]}
                      </span>
                    </div>

                    {isSelected && (
                      <p className="font-sans text-xs sm:text-sm text-[#1E1E1E]/75 mt-2 pl-9">
                        {marker.benefit}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                id="fullface-cta"
                onClick={() => onOpenBooking('Full Face')}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Solicitar evaluación</span>
                <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="text-xs text-[#1E1E1E]/60 text-center sm:text-left">
                Incluye análisis tridimensional de proporciones
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
