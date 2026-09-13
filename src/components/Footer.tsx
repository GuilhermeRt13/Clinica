import React from 'react';
import { Phone, Mail, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { VeronaLogo, VeronaMonogram } from './VeronaLogo';
import { CLINIC_INFO, TREATMENTS, TECHNOLOGIES } from '../data/clinicData';

interface FooterProps {
  onSelectTreatmentByName?: (name: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTreatmentByName }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#087A8F] text-white relative overflow-hidden pt-20 pb-28 sm:pb-16 border-t border-white/10">
      {/* Background Verona Watermark */}
      <div
        className="absolute -bottom-28 -right-28 pointer-events-none opacity-[0.06]"
        aria-hidden="true"
      >
        <VeronaMonogram size={600} color="#FFFFFF" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Brand Showcase Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-14 border-b border-white/15 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <VeronaLogo colorMode="light" showSlogan={true} className="items-center md:items-start" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CLINIC_INFO.contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#087A8F] flex items-center justify-center transition-all duration-300 border border-white/20"
              aria-label="Instagram Clínica Verona"
            >
              <Instagram size={18} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#087A8F] flex items-center justify-center transition-all duration-300 border border-white/20 cursor-pointer"
              aria-label="Volver arriba"
              title="Volver al inicio"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Columns Grid: Clínica, Tratamientos, Tecnología, Contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          {/* Col 1: Clínica */}
          <div>
            <h4 className="verona-label text-[#7ED6E6] text-xs mb-5 block">
              La Clínica
            </h4>
            <ul className="space-y-3 text-sm text-[#E6EEF1]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio & Filosofía
                </a>
              </li>
              <li>
                <a href="#la-clinica" className="hover:text-white transition-colors">
                  Sobre Verona
                </a>
              </li>
              <li>
                <a href="#especialistas" className="hover:text-white transition-colors">
                  Equipo Especialista
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">
                  Casos Clínicos & Seguridad
                </a>
              </li>
              <li>
                <a href="#localizacion" className="hover:text-white transition-colors">
                  Instalaciones en Iquique
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Tratamientos */}
          <div>
            <h4 className="verona-label text-[#7ED6E6] text-xs mb-5 block">
              Tratamientos
            </h4>
            <ul className="space-y-3 text-sm text-[#E6EEF1]">
              {TREATMENTS.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <a
                    href="#tratamientos"
                    onClick={() => onSelectTreatmentByName?.(t.name)}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tecnología */}
          <div>
            <h4 className="verona-label text-[#7ED6E6] text-xs mb-5 block">
              Tecnología
            </h4>
            <ul className="space-y-3 text-sm text-[#E6EEF1]">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech.id}>
                  <a href="#tecnologia" className="hover:text-white transition-colors">
                    {tech.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Protocolos Dermatofuncionales
                </a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">
                  Corrección Enzimática
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="verona-label text-[#7ED6E6] text-xs mb-5 block">
              Contacto Oficial
            </h4>
            <div className="space-y-3.5 text-sm text-[#E6EEF1]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#7ED6E6] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.location.address}
                  <br />
                  {CLINIC_INFO.location.city} — {CLINIC_INFO.location.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#7ED6E6] shrink-0" />
                <a href={`tel:${CLINIC_INFO.contacts.phoneTel}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.contacts.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-[#7ED6E6] text-xs font-bold shrink-0">WA:</span>
                <a
                  href={`https://wa.me/${CLINIC_INFO.contacts.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.contacts.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#7ED6E6] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.contacts.email}`} className="hover:text-white transition-colors break-all">
                  {CLINIC_INFO.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6EEF1]/70">
          <p>© {new Date().getFullYear()} Clínica Estética Médica Verona. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            “Donde la estética se trabaja con ciencia, seguridad y excelencia.”
          </p>
        </div>
      </div>
    </footer>
  );
};
