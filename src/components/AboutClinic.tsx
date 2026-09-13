import React from 'react';
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { VeronaMonogram } from './VeronaLogo';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutClinicProps {
  onOpenBooking: () => void;
}

export const AboutClinic: React.FC<AboutClinicProps> = ({ onOpenBooking }) => {
  return (
    <section id="la-clinica" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-[0.035]"
        aria-hidden="true"
      >
        <VeronaMonogram size={700} color="#00A6C6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinic Environment & Modern Architecture Imagery */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Clinical Room Image */}
              <div className="relative rounded-[22px] overflow-hidden border border-[#087A8F]/15 shadow-[0_20px_50px_rgba(0,0,0,0.06)] aspect-[4/3] bg-[#F7F7F7]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="Instalaciones y consultorio médico en Clínica Verona Iquique"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/50 via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-sans tracking-wide">
                  <span className="font-medium">Espacios de atención privada y bioseguridad clínica</span>
                </div>
              </div>

              {/* Overlapping Detail Card: Reception & Care */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-[18px] overflow-hidden border-2 border-white shadow-2xl bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8F6F8] flex items-center justify-center text-[#087A8F] shrink-0">
                    <Building2 size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-sm font-medium text-[#1E1E1E]">
                      Pasaje La Costa #3296
                    </span>
                    <span className="text-[11px] text-[#087A8F]">
                      Iquique, Región de Tarapacá
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="mb-3">
              <span className="verona-label text-[#00A6C6] tracking-[0.24em]">
                LA CLÍNICA VERONA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal leading-[1.15] mb-6">
              Donde la estética se trabaja con ciencia.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/80 leading-relaxed mb-6">
              En <strong className="font-semibold text-[#087A8F]">{CLINIC_INFO.name}</strong> combinamos
              conocimiento médico, tecnología y protocolos personalizados para ofrecer tratamientos orientados
              al rejuvenecimiento y reparación de la piel.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#1E1E1E]/70 leading-relaxed mb-8">
              Creemos firmemente en una medicina estética alejada de transformaciones artificiales y estigmatizantes.
              Cada evaluación parte del análisis anatómico exhaustivo, respetando la fisonomía, la edad biológica
              y las proporciones únicas de cada paciente en la Región de Tarapacá.
            </p>

            {/* Checklist of clinical standards */}
            <div className="space-y-3 mb-8">
              {[
                'Protocolos diseñados exclusivamente bajo criterios médicos y evidencia clínica.',
                'Productos inyectables y bioestimuladores con registro sanitario y certificación mundial.',
                'Atención cercana, confidencial y personalizada en cada etapa del proceso.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A6C6] shrink-0 mt-0.5" strokeWidth={1.8} />
                  <span className="font-sans text-sm text-[#1E1E1E]/85 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                id="about-clinic-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-[0_6px_20px_rgba(0,166,198,0.25)] hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Conocer Verona</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
