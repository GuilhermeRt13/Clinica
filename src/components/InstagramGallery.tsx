import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { INSTAGRAM_FEED, CLINIC_INFO } from '../data/clinicData';

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Instagram link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="verona-label text-[#00A6C6] tracking-[0.26em] block mb-2">
              GALERÍA VISUAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E] font-normal tracking-[-0.01em]">
              Verona en imágenes.
            </h2>
          </div>

          <a
            href={CLINIC_INFO.contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#087A8F] hover:text-[#00A6C6] transition-colors group"
          >
            <Instagram size={16} />
            <span>Seguir en Instagram</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_FEED.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden aspect-square bg-gray-100 border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#087A8F]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                <span className="verona-label text-[8px] text-[#7ED6E6] mb-1">
                  {item.category}
                </span>
                <p className="text-[10px] font-sans leading-tight line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
