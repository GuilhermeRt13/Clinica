/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorityBlock } from './components/AuthorityBlock';
import { AboutClinic } from './components/AboutClinic';
import { TreatmentsSection } from './components/TreatmentsSection';
import { FullFaceHighlight } from './components/FullFaceHighlight';
import { BioestimulationSection } from './components/BioestimulationSection';
import { TechnologySection } from './components/TechnologySection';
import { MaleAestheticsSection } from './components/MaleAestheticsSection';
import { ResultsSection } from './components/ResultsSection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InstagramGallery } from './components/InstagramGallery';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TreatmentModal } from './components/TreatmentModal';
import { TREATMENTS } from './data/clinicData';
import { Treatment } from './types';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isTreatmentModalOpen, setIsTreatmentModalOpen] = useState(false);
  const [preselectedTreatmentName, setPreselectedTreatmentName] = useState<string>('Full Face');

  const handleOpenBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setPreselectedTreatmentName(treatmentName);
    }
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      // Optional slight focus highlight
      const input = document.getElementById('form-nombre');
      if (input) {
        setTimeout(() => input.focus(), 600);
      }
    }
  };

  const handleSelectTreatment = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setIsTreatmentModalOpen(true);
  };

  const handleOpenBioDetail = () => {
    const bioTreatment = TREATMENTS.find((t) => t.id === 'bioestimuladores') || TREATMENTS[2];
    handleSelectTreatment(bioTreatment);
  };

  const handleExploreTreatments = () => {
    const treatmentsElement = document.getElementById('tratamientos');
    if (treatmentsElement) {
      treatmentsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1E1E1E] flex flex-col selection:bg-[#00A6C6]/20 selection:text-[#087A8F]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreTreatments={handleExploreTreatments}
        />

        {/* 2. Authority Block */}
        <AuthorityBlock />

        {/* 3. La Clínica */}
        <AboutClinic onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Specialized Treatments Grid */}
        <TreatmentsSection
          onSelectTreatment={handleSelectTreatment}
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. Highlight: Full Face */}
        <FullFaceHighlight onOpenBooking={handleOpenBooking} />

        {/* 6. Bioestimulación de Colágeno */}
        <BioestimulationSection
          onOpenBooking={handleOpenBooking}
          onOpenDetail={handleOpenBioDetail}
        />

        {/* 7. Tecnología Médica */}
        <TechnologySection onOpenBooking={handleOpenBooking} />

        {/* 8. Armonización Masculina */}
        <MaleAestheticsSection onOpenBooking={handleOpenBooking} />

        {/* 9. Resultados Clínicos */}
        <ResultsSection onOpenBooking={handleOpenBooking} />

        {/* 10. Especialistas / Equipo */}
        <SpecialistsSection onOpenBooking={() => handleOpenBooking()} />

        {/* 11. Proceso de Atendimento (4 Etapas) */}
        <ProcessSection onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Experiencias Verona (Depoimentos) */}
        <TestimonialsSection />

        {/* 13. Galería Instagram */}
        <InstagramGallery />

        {/* 14. Localización en Iquique */}
        <LocationSection />

        {/* 15. Contato & Agendamiento */}
        <ContactSection preselectedTreatment={preselectedTreatmentName} />
      </main>

      {/* Footer */}
      <Footer
        onSelectTreatmentByName={(name) => {
          const found = TREATMENTS.find((t) => t.name.toLowerCase() === name.toLowerCase());
          if (found) {
            handleSelectTreatment(found);
          } else {
            handleExploreTreatments();
          }
        }}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Treatment Detail Medical Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        isOpen={isTreatmentModalOpen}
        onClose={() => setIsTreatmentModalOpen(false)}
        onBookTreatment={(name) => {
          handleOpenBooking(name);
        }}
      />
    </div>
  );
}
