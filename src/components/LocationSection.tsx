import React from 'react';
import { MapPin, Clock, Navigation, Phone, Mail } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacion" className="py-20 lg:py-28 bg-[#F7F7F7] relative border-t border-[#087A8F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Location Details & Schedule */}
          <div className="lg:col-span-5">
            <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-2">
              UBICACIÓN & ACCESO
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E] font-normal tracking-[-0.01em] mb-6">
              Visítanos en Iquique.
            </h2>

            <div className="space-y-6 mb-8">
              {/* Address card */}
              <div className="flex items-start gap-4 p-5 rounded-[18px] bg-white border border-[#087A8F]/10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#E8F6F8] flex items-center justify-center text-[#087A8F] shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#1E1E1E]">
                    {CLINIC_INFO.location.address}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E1E1E]/75 mt-0.5">
                    {CLINIC_INFO.location.city} — {CLINIC_INFO.location.region}, {CLINIC_INFO.location.country}
                  </p>
                  <span className="text-[11px] text-[#087A8F] mt-1 block">
                    {CLINIC_INFO.location.reference}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-5 rounded-[18px] bg-white border border-[#087A8F]/10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#E8F6F8] flex items-center justify-center text-[#087A8F] shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-[#1E1E1E]">
                    Horario de Atención
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1E1E1E]/75 mt-0.5">
                    {CLINIC_INFO.contacts.hours}
                  </p>
                  <span className="text-[11px] text-[#00A6C6] mt-1 block font-medium">
                    Atención planificada y previa cita médica
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps Directions CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={CLINIC_INFO.location.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                id="maps-directions-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <Navigation size={14} />
                <span>Cómo llegar</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.contacts.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-[#087A8F] text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Phone size={14} />
                <span>Llamar a recepción</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Styled Map Embed */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[22px] overflow-hidden border border-[#087A8F]/20 shadow-[0_15px_40px_rgba(0,0,0,0.06)] aspect-[16/10] bg-white">
              <iframe
                title="Ubicación Clínica Estética Médica Verona en Iquique"
                src="https://maps.google.com/maps?q=Pasaje+La+Costa+3296+Iquique+Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="border-0 w-full h-full"
                loading="lazy"
                allowFullScreen
              />

              {/* Custom Overlay Tag */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#087A8F] flex items-center justify-center text-white">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="font-serif text-xs font-semibold text-[#1E1E1E] block">
                    Clínica Verona
                  </span>
                  <span className="text-[10px] text-gray-500 font-sans">
                    Pasaje La Costa #3296, Iquique
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
