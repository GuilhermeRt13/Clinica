import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.contacts.whatsappRaw}?text=${encodeURIComponent('Hola Clínica Verona, deseo agendar una evaluación médica.')}`;

  return (
    <>
      {/* Desktop Floating Pill on bottom-right */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="desktop-floating-whatsapp"
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white shadow-[0_8px_30px_rgba(0,166,198,0.35)] hover:shadow-[0_12px_36px_rgba(8,122,143,0.45)] transition-all duration-300 hover:-translate-y-1 group"
          aria-label="Agendar evaluación por WhatsApp"
        >
          <div className="relative">
            <MessageCircle size={20} className="text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#7ED6E6] rounded-full ring-2 ring-white animate-pulse" />
          </div>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em]">
            Agendar por WhatsApp
          </span>
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Mobile Persistent Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#087A8F]/15 p-3 px-4 shadow-2xl flex items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#E8F6F8] text-[#087A8F] flex items-center justify-center shrink-0 border border-[#00A6C6]/30"
          aria-label="Abrir WhatsApp directo"
        >
          <MessageCircle size={22} />
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          id="mobile-bottom-bar-cta"
          className="flex-1 py-3 px-4 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] text-center shadow-md flex items-center justify-center gap-1.5"
        >
          <span>Agendar evaluación</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </>
  );
};
