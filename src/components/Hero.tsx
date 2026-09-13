import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { VeronaMonogram } from './VeronaLogo';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7F7F7]/60 to-[#FFFFFF]"
    >
      {/* Subtle organic watermark inspired by Verona monogram (5-10% opacity) */}
      <div
        className="absolute top-1/4 -right-16 md:-right-8 lg:right-12 pointer-events-none select-none opacity-[0.07] transform rotate-12"
        aria-hidden="true"
      >
        <VeronaMonogram size={480} color="#00A6C6" />
      </div>

      {/* Second subtle background element on left */}
      <div
        className="absolute -bottom-20 -left-20 pointer-events-none select-none opacity-[0.04]"
        aria-hidden="true"
      >
        <VeronaMonogram size={380} color="#087A8F" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Medical Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Location & Clinic tag indicator */}
            <div className="flex items-center gap-2 mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F6F8] border border-[#00A6C6]/20 text-[#087A8F]">
                <MapPin size={12} className="text-[#00A6C6]" />
                <span className="verona-label text-[10px] tracking-[0.18em] font-medium">
                  Iquique • Región de Tarapacá
                </span>
              </div>
            </div>

            {/* Micro Label */}
            <div className="mb-3">
              <span className="verona-label text-[#00A6C6] tracking-[0.24em]">
                ESTÉTICA MÉDICA • REJUVENECIMIENTO • SALUD
              </span>
            </div>

            {/* Main Headline (H1): Playfair Display 60-72px desktop, 38-46px mobile */}
            <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[58px] lg:text-[66px] leading-[1.08] text-[#1E1E1E] font-normal tracking-[-0.02em] mb-6">
              Tu mejor versión,
              <br />
              <span className="italic font-normal text-[#087A8F]">con ciencia</span> y precisión.
            </h1>

            {/* Subheadline: Montserrat 16-18px */}
            <p className="font-sans text-[16px] sm:text-[18px] text-[#1E1E1E]/80 font-normal leading-[1.65] max-w-xl mb-8">
              Especialistas en rejuvenecimiento y reparación de la piel, donde la estética se trabaja
              con ciencia, seguridad y excelencia.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                id="hero-primary-cta"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-[0_8px_24px_rgba(0,166,198,0.28)] hover:shadow-[0_10px_28px_rgba(8,122,143,0.35)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
              >
                <span>Agendar evaluación</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                id="hero-secondary-cta"
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-transparent border border-[#00A6C6] text-[#087A8F] hover:bg-[#E8F6F8] font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer"
              >
                <span>Conocer tratamientos</span>
              </button>
            </div>

            {/* Brand Essence Micro Badge */}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#087A8F] font-normal">100%</span>
                <span className="text-[11px] text-[#1E1E1E]/60 uppercase tracking-wider">Criterio Médico</span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#087A8F] font-normal">Alta Gama</span>
                <span className="text-[11px] text-[#1E1E1E]/60 uppercase tracking-wider">Productos Certificados</span>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#087A8F] font-normal">Iquique</span>
                <span className="text-[11px] text-[#1E1E1E]/60 uppercase tracking-wider">Atención Exclusiva</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Luxury Beauty Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              {/* Outer architectural frame & delicate soft shadow */}
              <div className="relative rounded-[22px] overflow-hidden border border-[#087A8F]/15 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85"
                  alt="Tratamiento estético médico en Clínica Verona - Piel natural y saludable"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/40 via-transparent to-transparent opacity-60" />

                {/* Floating clinical card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="verona-label text-[9px] text-[#00A6C6] tracking-[0.2em]">
                      Filosofía Verona
                    </span>
                    <span className="font-serif text-sm text-[#1E1E1E] font-medium">
                      Naturalidad, equilibrio & precisión
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E8F6F8] flex items-center justify-center text-[#087A8F]">
                    <VeronaMonogram size={18} color="#00A6C6" />
                  </div>
                </div>
              </div>

              {/* Decorative subtle gold accent pin */}
              <div
                className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#F6C88F]/40 border border-[#F6C88F] flex items-center justify-center pointer-events-none"
                title="Detalle Premium Verona"
              >
                <div className="w-2 h-2 rounded-full bg-[#087A8F]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
