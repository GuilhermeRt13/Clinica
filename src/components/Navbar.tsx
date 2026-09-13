import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { VeronaLogo } from './VeronaLogo';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'La Clínica', href: '#la-clinica' },
    { name: 'Tratamientos', href: '#tratamientos' },
    { name: 'Especialistas', href: '#especialistas' },
    { name: 'Tecnología', href: '#tecnologia' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.04)] py-2.5 border-b border-[#087A8F]/10'
            : 'bg-white/80 backdrop-blur-sm py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo at Left */}
            <a
              href="#inicio"
              id="navbar-logo-link"
              className="flex items-center group transition-transform duration-300 hover:opacity-95"
              aria-label="Verona Estética & Salud - Inicio"
            >
              <VeronaLogo
                variant="minimal"
                className="transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-sans text-[13px] font-medium tracking-[0.08em] text-[#1E1E1E]/85 hover:text-[#00A6C6] transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00A6C6] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${CLINIC_INFO.contacts.phoneTel}`}
                id="header-phone-cta"
                className="p-2 text-[#087A8F] hover:text-[#00A6C6] transition-colors rounded-full hover:bg-[#E8F6F8]"
                title="Llamar a Clínica Verona"
                aria-label="Teléfono clínica"
              >
                <Phone size={18} strokeWidth={1.5} />
              </a>

              <button
                type="button"
                id="header-booking-button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 shadow-[0_4px_16px_rgba(0,166,198,0.22)] hover:shadow-[0_6px_20px_rgba(8,122,143,0.3)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Agendar evaluación</span>
                <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                type="button"
                id="mobile-quick-booking-button"
                onClick={() => onOpenBooking()}
                className="px-3.5 py-1.5 rounded-full bg-[#00A6C6] text-white text-[11px] font-semibold uppercase tracking-wider"
              >
                Agendar
              </button>

              <button
                type="button"
                id="mobile-menu-toggle-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1E1E1E] hover:text-[#00A6C6] transition-colors focus:outline-none"
                aria-label="Abrir menú"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#087A8F]/15 shadow-xl transition-all duration-300 px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm font-medium tracking-wider text-[#1E1E1E] hover:text-[#00A6C6] py-1.5 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 flex flex-col space-y-3">
                <button
                  type="button"
                  id="drawer-booking-button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full bg-[#00A6C6] text-white font-sans text-xs font-semibold uppercase tracking-[0.14em] text-center shadow-md cursor-pointer"
                >
                  Agendar evaluación →
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.contacts.whatsappRaw}?text=${encodeURIComponent('Hola Clínica Verona, deseo agendar una evaluación médica.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-[#00A6C6] text-[#087A8F] font-medium"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${CLINIC_INFO.contacts.phoneTel}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#E8F6F8] text-[#087A8F] font-medium"
                  >
                    <Phone size={14} />
                    <span>Llamar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
