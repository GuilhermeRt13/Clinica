import React from 'react';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { VeronaMonogram } from './VeronaLogo';

interface MaleAestheticsSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const MaleAestheticsSection: React.FC<MaleAestheticsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
      >
        <VeronaMonogram size={550} color="#1E1E1E" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Male Portrait Editorial */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-[460px]">
              <div className="relative rounded-[22px] overflow-hidden border border-[#087A8F]/15 shadow-[0_20px_50px_rgba(0,0,0,0.07)] bg-[#F7F7F7] aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="Armonización estética masculina y definición mandibular en Clínica Verona"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/50 via-transparent to-transparent opacity-60" />

                {/* Micro badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                  <span className="verona-label text-[9px] text-[#087A8F] block mb-0.5">
                    ENFOQUE ANATÓMICO MASCULINO
                  </span>
                  <p className="font-serif text-sm font-medium text-[#1E1E1E]">
                    Estructura mandibular, proyección del mentón & sobriedad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Anatomical Specifics */}
          <div className="lg:col-span-6">
            <div className="mb-3">
              <span className="verona-label text-[#00A6C6] tracking-[0.24em]">
                ESTÉTICA MÉDICA MASCULINA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal leading-[1.14] mb-6">
              Precisión también es masculinidad.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/80 leading-relaxed mb-6 font-normal">
              Protocolos diseñados para definir, equilibrar y realzar las estructuras faciales masculinas
              respetando la anatomía individual.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#1E1E1E]/70 leading-relaxed mb-8 font-normal">
              La dermis del hombre posee mayor espesor, mayor densidad de colágeno y una dinámica muscular
              más potente. Nuestros tratamientos abordan ángulos rectos, soporte óseo y calidad cutánea
              con absoluta discreción y resultados indetectables.
            </p>

            {/* Male Protocol Highlights */}
            <div className="space-y-3 mb-10">
              {[
                'Marcaje y definición del ángulo mandibular (Gonión) y mentón.',
                'Atenuación de mirada cansada y surcos profundos sin feminizar los rasgos.',
                'Procedimientos ambulatorios con retorno inmediato a la rutina profesional.',
                'Privacidad absoluta y asesoría personalizada en cada sesión.',
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#087A8F] shrink-0 mt-0.5" strokeWidth={1.7} />
                  <span className="font-sans text-sm text-[#1E1E1E]/80 leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                id="male-booking-cta"
                onClick={() => onOpenBooking('Armonización Masculina')}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Agendar evaluación</span>
                <ArrowRight size={15} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
