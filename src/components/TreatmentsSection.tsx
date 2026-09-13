import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenBooking: (treatmentName?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Tratamientos' },
    { id: 'facial', label: 'Armonización Facial' },
    { id: 'lips', label: 'Labios & Bioplastia' },
    { id: 'bio', label: 'Bioestimuladores' },
    { id: 'male', label: 'Masculino' },
    { id: 'tech', label: 'Tecnología Láser & Aparatología' },
  ];

  const filteredTreatments =
    activeCategory === 'todos'
      ? TREATMENTS
      : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="tratamientos" className="py-20 lg:py-32 bg-[#F7F7F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-3">
            PROCEDIMIENTOS MÉDICO-ESTÉTICOS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal tracking-[-0.01em] mb-4">
            Tratamientos especializados.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/75 leading-relaxed">
            Soluciones diseñadas para realzar tus rasgos, cuidar tu piel y acompañar cada etapa del rejuvenecimiento.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#087A8F] text-white shadow-[0_4px_14px_rgba(8,122,143,0.3)]'
                  : 'bg-white text-[#1E1E1E]/70 hover:text-[#087A8F] hover:bg-white/80 border border-gray-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => (
            <article
              key={treatment.id}
              id={`treatment-card-${treatment.id}`}
              className="group bg-white rounded-[18px] border border-[#087A8F]/12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col justify-between hover:shadow-[0_18px_50px_rgba(0,166,198,0.12)] hover:border-[#00A6C6]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Category / Product badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] uppercase font-semibold tracking-wider text-[#087A8F] shadow-sm">
                      <Sparkles size={10} className="text-[#00A6C6]" />
                      {treatment.productsOrTech.split('/')[0].trim()}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Subtitle tag */}
                  <span className="verona-label text-[10px] text-[#00A6C6] tracking-[0.16em] block mb-1">
                    {treatment.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1E1E1E] mb-3 group-hover:text-[#087A8F] transition-colors">
                    {treatment.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#1E1E1E]/75 leading-relaxed line-clamp-3">
                    {treatment.shortDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-2">
                <button
                  type="button"
                  onClick={() => onSelectTreatment(treatment)}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.14em] text-[#087A8F] hover:text-[#00A6C6] transition-colors group/btn cursor-pointer"
                >
                  <span>{treatment.category === 'tech' ? 'Ver tecnología' : 'Ver tratamiento'}</span>
                  <ArrowRight size={14} className="ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking(treatment.name)}
                  className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-medium text-[#00A6C6] hover:bg-[#E8F6F8] transition-colors cursor-pointer"
                >
                  Evaluar
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner for Personalized Protocol */}
        <div className="mt-14 text-center">
          <p className="font-sans text-sm text-[#1E1E1E]/60 mb-4">
            ¿Tienes dudas sobre qué procedimiento es el más idóneo para tus objetivos faciales?
          </p>
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Agendar evaluación de diagnóstico</span>
            <ArrowRight size={15} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
