import React from 'react';
import { X, Clock, Sparkles, CheckCircle2, ShieldAlert, ArrowRight, MessageCircle } from 'lucide-react';
import { Treatment } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { VeronaMonogram } from './VeronaLogo';

interface TreatmentModalProps {
  treatment: Treatment | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  isOpen,
  onClose,
  onBookTreatment,
}) => {
  if (!isOpen || !treatment) return null;

  const whatsappMessage = `Hola Clínica Verona, me gustaría recibir más información y agendar una evaluación para el tratamiento: ${treatment.name} (${treatment.productsOrTech}).`;
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.contacts.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#1E1E1E]/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-[22px] shadow-2xl border border-[#087A8F]/20 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Image Preview */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-[#F7F7F7]">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/80 via-[#1E1E1E]/30 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1E1E1E] flex items-center justify-center shadow-md transition-all cursor-pointer"
            aria-label="Cerrar detalle de tratamiento"
          >
            <X size={20} />
          </button>

          {/* Header Title inside banner */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="verona-label text-[#7ED6E6] tracking-[0.2em] block mb-1">
              PROTOCOLO MÉDICO VERONA
            </span>
            <h3 id="modal-treatment-title" className="font-serif text-2xl sm:text-3xl font-medium">
              {treatment.name}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm font-sans tracking-wide">
              {treatment.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Scientific Tagline */}
          <div className="p-4 rounded-xl bg-[#E8F6F8] border border-[#00A6C6]/20 flex items-center gap-3">
            <VeronaMonogram size={24} color="#087A8F" />
            <p className="font-sans text-xs sm:text-sm font-medium text-[#087A8F]">
              {treatment.tagline}
            </p>
          </div>

          {/* Full Medical Description */}
          <div>
            <h4 className="verona-label text-[#1E1E1E] text-xs mb-2">Descripción del Procedimiento</h4>
            <p className="font-sans text-sm sm:text-base text-[#1E1E1E]/80 leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Quick clinical specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#00A6C6]" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-semibold">
                  Duración de sesión
                </span>
                <span className="text-sm font-medium text-[#1E1E1E]">{treatment.sessionTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#00A6C6]" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block font-semibold">
                  Recuperación estimada
                </span>
                <span className="text-sm font-medium text-[#1E1E1E]">{treatment.recovery}</span>
              </div>
            </div>
          </div>

          {/* Indications & Benefits in 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="verona-label text-[#087A8F] text-[11px] mb-3">Indicaciones Principales</h4>
              <ul className="space-y-2">
                {treatment.indications.map((ind, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1E1E1E]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#00A6C6] shrink-0 mt-0.5" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="verona-label text-[#087A8F] text-[11px] mb-3">Beneficios Clínicos</h4>
              <ul className="space-y-2">
                {treatment.keyBenefits.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#1E1E1E]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#087A8F] shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ethical Medical Note */}
          <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#087A8F] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#1E1E1E]/70 leading-normal">
              <strong>Criterio de Evaluación:</strong> Todo tratamiento estético en Clínica Verona
              requiere valoración previa presencial para determinar la idoneidad anatómica y médica del paciente.
            </p>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#00A6C6] text-[#087A8F] hover:bg-[#E8F6F8] font-sans text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <MessageCircle size={15} />
              <span>Consultar por WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookTreatment(treatment.name);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-all shadow-md cursor-pointer group"
            >
              <span>Agendar evaluación para {treatment.name}</span>
              <ArrowRight size={15} className="ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
