import React from 'react';
import { ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { SPECIALISTS } from '../data/clinicData';

interface SpecialistsSectionProps {
  onOpenBooking: () => void;
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="especialistas" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-3">
            EQUIPO & DIRECCIÓN CLÍNICA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal tracking-[-0.01em] mb-4">
            Especialistas detrás de cada detalle.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/75 leading-relaxed">
            Un equipo guiado por la ética profesional, la rigurosidad científica y el cuidado cercano del paciente en Iquique.
          </p>
        </div>

        {/* Specialists Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {SPECIALISTS.map((specialist, idx) => (
            <div
              key={idx}
              className="group bg-[#F7F7F7] rounded-[22px] border border-[#087A8F]/12 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_45px_rgba(0,166,198,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Profile Image with subtle clinical frame */}
                <div className="relative h-80 overflow-hidden bg-gray-200">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-[#1E1E1E]/20 to-transparent" />

                  {/* Badges in image */}
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="verona-label text-[#7ED6E6] text-[10px] block mb-1">
                      {specialist.specialty}
                    </span>
                    <h3 className="font-serif text-2xl font-medium">
                      {specialist.name}
                    </h3>
                    <p className="text-white/80 text-xs font-sans mt-0.5">
                      {specialist.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="font-sans text-sm text-[#1E1E1E]/80 leading-relaxed">
                    {specialist.bio}
                  </p>

                  <div className="pt-3 border-t border-gray-200/80 space-y-2">
                    <span className="verona-label text-[10px] text-[#087A8F] block">
                      Enfoque & Compromiso
                    </span>
                    {specialist.credentials.map((cred, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-[#1E1E1E]/75">
                        <ShieldCheck className="w-4 h-4 text-[#00A6C6] shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-white hover:bg-[#087A8F] text-[#087A8F] hover:text-white border border-[#087A8F]/20 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer group/btn"
                >
                  <span>Agendar cita con el equipo</span>
                  <ArrowRight size={14} className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
