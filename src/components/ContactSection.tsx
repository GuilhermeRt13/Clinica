import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, User, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { VeronaMonogram } from './VeronaLogo';

interface ContactSectionProps {
  preselectedTreatment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedTreatment }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    email: '',
    tratamiento: preselectedTreatment || 'Full Face',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Update selected treatment if preselectedTreatment prop changes
  React.useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, tratamiento: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp message payload
    const msg = `*Nueva Solicitud de Evaluación - Clínica Verona*\n` +
      `• *Nombre:* ${formData.nombre}\n` +
      `• *WhatsApp:* ${formData.whatsapp}\n` +
      `• *E-mail:* ${formData.email || 'No especificado'}\n` +
      `• *Tratamiento de Interés:* ${formData.tratamiento}\n` +
      `• *Mensaje:* ${formData.mensaje || 'Deseo coordinar una evaluación médica.'}`;

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.contacts.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const treatmentOptions = [
    'Full Face',
    'Armonización Labial',
    'Bioestimuladores',
    'Hialuronidasa',
    'Armonización Masculina',
    'Láser Nd:YAG',
    'Medicina Dermatofuncional',
    'Otro',
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
      >
        <VeronaMonogram size={700} color="#00A6C6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5">
            <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-3">
              ATENCIÓN PERSONALIZADA
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal leading-[1.14] mb-6">
              Tu próxima etapa comienza aquí.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/80 leading-relaxed mb-8">
              Agenda una evaluación y descubre un protocolo pensado para ti.
            </p>

            {/* Official Contact List */}
            <div className="space-y-4 mb-8">
              {/* WhatsApp CTA Card */}
              <a
                href={`https://wa.me/${CLINIC_INFO.contacts.whatsappRaw}?text=${encodeURIComponent('Hola Clínica Verona, me gustaría agendar una evaluación médica.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-card"
                className="flex items-center gap-4 p-5 rounded-[18px] bg-[#E8F6F8] border border-[#00A6C6]/30 hover:border-[#00A6C6] transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-[#00A6C6] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle size={22} />
                </div>
                <div className="flex-1">
                  <span className="verona-label text-[10px] text-[#087A8F] block">
                    WhatsApp & Agendamientos Directos
                  </span>
                  <span className="font-serif text-lg font-medium text-[#1E1E1E] block">
                    {CLINIC_INFO.contacts.whatsapp}
                  </span>
                  <span className="text-xs text-[#087A8F] font-medium inline-flex items-center gap-1 mt-0.5">
                    <span>Agendar por WhatsApp</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${CLINIC_INFO.contacts.phoneTel}`}
                id="contact-phone-card"
                className="flex items-center gap-4 p-5 rounded-[18px] bg-[#F7F7F7] border border-gray-200/80 hover:border-[#087A8F]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#087A8F] shadow-sm shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="verona-label text-[10px] text-gray-400 block">
                    Línea Telefónica Directa
                  </span>
                  <span className="font-serif text-lg font-medium text-[#1E1E1E] block">
                    {CLINIC_INFO.contacts.phone}
                  </span>
                  <span className="text-xs text-gray-500">Iquique, Chile</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${CLINIC_INFO.contacts.email}`}
                id="contact-email-card"
                className="flex items-center gap-4 p-5 rounded-[18px] bg-[#F7F7F7] border border-gray-200/80 hover:border-[#087A8F]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#087A8F] shadow-sm shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="verona-label text-[10px] text-gray-400 block">
                    Correo Electrónico
                  </span>
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1E1E1E] block break-all">
                    {CLINIC_INFO.contacts.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Commercial Lead Badge */}
            <div className="p-4 rounded-xl bg-white border border-[#087A8F]/15 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E8F6F8] flex items-center justify-center text-[#087A8F] shrink-0">
                <User size={18} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                  Responsable Comercial
                </span>
                <span className="font-serif text-sm font-medium text-[#1E1E1E]">
                  {CLINIC_INFO.commercialLead}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Evaluation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F7F7] p-8 sm:p-10 rounded-[22px] border border-[#087A8F]/15 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
              <div className="mb-6">
                <span className="verona-label text-[#00A6C6] text-[10px] block mb-1">
                  FORMULARIO DE SOLICITUD
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1E1E] font-medium">
                  Solicitud de Evaluación Médica
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#00A6C6]/30 shadow-sm space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8F6F8] text-[#00A6C6] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-serif text-2xl text-[#1E1E1E]">
                    ¡Solicitud Preparada con Éxito!
                  </h4>
                  <p className="font-sans text-sm text-[#1E1E1E]/75 max-w-md mx-auto leading-relaxed">
                    Hemos abierto la conexión directa con WhatsApp para que nuestro equipo confirme el horario de tu evaluación.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#087A8F] underline cursor-pointer pt-2"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="form-nombre"
                      className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E1E1E]/80 mb-2"
                    >
                      Nombre y Apellido *
                    </label>
                    <input
                      id="form-nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej: Carolina Morales"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#00A6C6] focus:ring-1 focus:ring-[#00A6C6] transition-all"
                    />
                  </div>

                  {/* WhatsApp & Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-whatsapp"
                        className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E1E1E]/80 mb-2"
                      >
                        WhatsApp *
                      </label>
                      <input
                        id="form-whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="+56 9 1234 5678"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#00A6C6] focus:ring-1 focus:ring-[#00A6C6] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="form-email"
                        className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E1E1E]/80 mb-2"
                      >
                        E-mail
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.cl"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#00A6C6] focus:ring-1 focus:ring-[#00A6C6] transition-all"
                      />
                    </div>
                  </div>

                  {/* Tratamiento de interés */}
                  <div>
                    <label
                      htmlFor="form-tratamiento"
                      className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E1E1E]/80 mb-2"
                    >
                      Tratamiento de Interés *
                    </label>
                    <select
                      id="form-tratamiento"
                      value={formData.tratamiento}
                      onChange={(e) => setFormData({ ...formData, tratamiento: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#00A6C6] focus:ring-1 focus:ring-[#00A6C6] transition-all cursor-pointer"
                    >
                      {treatmentOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="form-mensaje"
                      className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E1E1E]/80 mb-2"
                    >
                      Mensaje o Consulta (Opcional)
                    </label>
                    <textarea
                      id="form-mensaje"
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Indícanos tus objetivos estéticos o disponibilidad horaria preferida..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#1E1E1E] focus:outline-none focus:border-[#00A6C6] focus:ring-1 focus:ring-[#00A6C6] transition-all"
                    />
                  </div>

                  {/* Button: Solicitar evaluación → */}
                  <div>
                    <button
                      type="submit"
                      id="form-submit-button"
                      className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-[0_6px_22px_rgba(0,166,198,0.28)] hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <span>Solicitar evaluación</span>
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Mensagem de apoio requerida */}
                  <p className="font-sans text-[11px] text-[#1E1E1E]/65 text-center leading-normal">
                    Tus datos serán utilizados únicamente para responder a tu solicitud.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
