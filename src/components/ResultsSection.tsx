import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  ShieldAlert,
  ArrowRight,
  SplitSquareVertical,
  Columns2,
  Sparkles,
  CheckCircle2,
  Layers,
  Clock,
  Info,
  Upload,
  RotateCcw,
  Check,
  Maximize2,
  X,
  FileImage,
  FolderUp,
  Image as ImageIcon,
} from 'lucide-react';
import { CLINICAL_CASES } from '../data/clinicData';

interface ResultsSectionProps {
  onOpenBooking: (treatmentName?: string) => void;
}

type ViewMode = 'composite' | 'slider' | 'side-by-side';

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>('composite');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const bulkFileInputRef = useRef<HTMLInputElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentCase = CLINICAL_CASES[activeCaseIndex];

  // Load custom uploaded images from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('verona_clinic_cases_images');
      if (saved) {
        setCustomImages(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load stored case images', e);
    }
  }, []);

  // Save to localStorage when customImages changes
  const handleSaveCustomImage = (caseId: string, dataUrl: string) => {
    const updated = { ...customImages, [caseId]: dataUrl };
    setCustomImages(updated);
    try {
      localStorage.setItem('verona_clinic_cases_images', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save image to localStorage', e);
    }
    setUploadSuccess(caseId);
    setTimeout(() => setUploadSuccess(null), 3500);
  };

  const handleResetImage = (caseId: string) => {
    const updated = { ...customImages };
    delete updated[caseId];
    setCustomImages(updated);
    try {
      localStorage.setItem('verona_clinic_cases_images', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save image reset', e);
    }
  };

  const handleResetAll = () => {
    setCustomImages({});
    try {
      localStorage.removeItem('verona_clinic_cases_images');
    } catch (e) {
      console.warn('Could not clear images', e);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, caseId?: string) => {
    const targetCaseId = caseId || currentCase.id;
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        handleSaveCustomImage(targetCaseId, result);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // Process multiple files uploaded at once and map to the 5 cases
  const handleBatchUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    let matchedCount = 0;

    fileList.forEach((file, index) => {
      const nameLower = file.name.toLowerCase();
      let targetCase = CLINICAL_CASES[index % CLINICAL_CASES.length];

      // Smart match by filename if user uploaded "images (7)", "images (6)", etc.
      if (nameLower.includes('(7)') || nameLower.includes('7') || nameLower.includes('caso-1')) {
        targetCase = CLINICAL_CASES[0];
      } else if (nameLower.includes('(6)') || nameLower.includes('6') || nameLower.includes('caso-2')) {
        targetCase = CLINICAL_CASES[1];
      } else if (nameLower.includes('(5)') || nameLower.includes('5') || nameLower.includes('caso-3')) {
        targetCase = CLINICAL_CASES[2];
      } else if (nameLower.includes('(4)') || nameLower.includes('4') || nameLower.includes('caso-4')) {
        targetCase = CLINICAL_CASES[3];
      } else if (nameLower.includes('(3)') || nameLower.includes('3') || nameLower.includes('caso-5')) {
        targetCase = CLINICAL_CASES[4];
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === 'string') {
          handleSaveCustomImage(targetCase.id, result);
        }
      };
      reader.readAsDataURL(file);
      matchedCount++;
    });

    if (matchedCount > 0) {
      setUploadSuccess(`all-${matchedCount}`);
      setTimeout(() => setUploadSuccess(null), 4000);
    }
  };

  // Drag and drop handler directly on the preview card
  const handleDropOnCard = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (e.dataTransfer.files.length === 1) {
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result;
          if (typeof result === 'string') {
            handleSaveCustomImage(currentCase.id, result);
          }
        };
        reader.readAsDataURL(file);
      } else {
        handleBatchUpload(e.dataTransfer.files);
      }
    }
  };

  // Dragging logic for the interactive split comparison slider
  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleSliderMove(e.touches[0].clientX);
      }
    },
    [handleSliderMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        handleSliderMove(e.clientX);
      }
    },
    [isDragging, handleSliderMove]
  );

  // Active image url for current case: custom uploaded or fallback
  const getActiveImage = (caseItem: typeof currentCase) => {
    if (customImages[caseItem.id]) {
      return customImages[caseItem.id];
    }
    if (caseItem.compositeImage && !imgErrors[caseItem.id]) {
      return caseItem.compositeImage;
    }
    return caseItem.afterImage;
  };

  const activeImage = getActiveImage(currentCase);
  const customPhotosCount = Object.keys(customImages).length;

  return (
    <section id="resultados" className="py-20 lg:py-32 bg-[#F7F7F7] relative border-y border-[#087A8F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A6C6]/10 border border-[#00A6C6]/25 text-[#087A8F] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00A6C6]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
              GALERIA DE ANTES E DEPOIS DE HARMONIZAÇÃO FACIAL
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1E1E] font-normal tracking-[-0.01em] mb-4">
            Casos Reais & Referências Clínicas
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E1E1E]/75 leading-relaxed">
            Resultados que evidenciam a precisão da harmonização facial médica: equilíbrio de proporções, suporte estrutural
            com ácido hialurônico e bioestimulação de colágeno preservando a fisionomia original.
          </p>
        </div>

        {/* Notice & Photo Personalizer Banner */}
        <div className="mb-8 max-w-4xl mx-auto bg-white border border-[#087A8F]/20 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#00A6C6]/10 text-[#087A8F] shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div className="text-xs text-[#1E1E1E]/80 leading-relaxed">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-semibold text-[#1E1E1E] text-sm">Personalizar Fotos dos 5 Casos</span>
                {customPhotosCount > 0 ? (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {customPhotosCount} de 5 fotos ativas
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-gray-100 text-gray-600">
                    Fotos de referência ativas
                  </span>
                )}
              </div>
              <p className="text-gray-500">
                Como os arquivos anexados no chat não gravam no servidor automaticamente, você pode inserir suas fotos diretamente aqui com 1 clique ou arrastando para a tela.
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="shrink-0 flex items-center gap-2 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#087A8F] hover:bg-[#00A6C6] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              <FolderUp className="w-4 h-4" />
              <span>Inserir Minhas Fotos</span>
            </button>

            {/* Hidden individual file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.jfif"
              onChange={(e) => handleFileUpload(e)}
              className="hidden"
              aria-label="Upload foto de antes e depois"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Substituir foto deste caso específico"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
            >
              <Upload className="w-4 h-4" />
            </button>

            {customImages[currentCase.id] && (
              <button
                type="button"
                onClick={() => handleResetImage(currentCase.id)}
                title="Restaurar imagem padrão deste caso"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Success toast notification when image is uploaded */}
        {uploadSuccess && (
          <div className="max-w-md mx-auto mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-center gap-2 shadow-sm animate-fade-in">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              {uploadSuccess.startsWith('all')
                ? 'Suas fotos foram carregadas e sincronizadas com os casos clínicos!'
                : 'Foto atualizada com sucesso para este caso clínico!'}
            </span>
          </div>
        )}

        {/* 5 Case selector tabs matching user's uploaded images */}
        <div className="flex justify-start sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {CLINICAL_CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                activeCaseIndex === idx
                  ? 'bg-[#087A8F] text-white shadow-md'
                  : 'bg-white text-[#1E1E1E]/75 hover:bg-gray-100 border border-gray-200/90'
              }`}
            >
              <span>{item.procedure.split(':')[0]}</span>
              {customImages[item.id] ? (
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-xs" title="Sua foto ativa" />
              ) : (
                <span className="text-[10px] opacity-60">#{idx + 1}</span>
              )}
            </button>
          ))}
        </div>

        {/* Mode Selector (Comparativa Clínica Completa vs Deslizador Interactivo vs Lado a Lado) */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-xs text-gray-500 font-medium hidden sm:inline mr-2">Modo de visualização:</span>
          <div className="inline-flex p-1 bg-white rounded-full border border-gray-200 shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode('composite')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'composite'
                  ? 'bg-[#00A6C6] text-white shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Foto Clínica (Antes & Depois)</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[#00A6C6] text-white shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span>Deslizador (Slider)</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('side-by-side')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                viewMode === 'side-by-side'
                  ? 'bg-[#00A6C6] text-white shadow-xs font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>Lado a Lado</span>
            </button>
          </div>
        </div>

        {/* Main Clinical Case Card */}
        <div className="bg-white rounded-3xl border border-[#087A8F]/15 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Visual Comparative Frame */}
            <div className="lg:col-span-7">
              {/* Header inside frame */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#087A8F]">
                  <span className="w-2 h-2 rounded-full bg-[#00A6C6] animate-pulse" />
                  {currentCase.badge}
                  {customImages[currentCase.id] && (
                    <span className="ml-1 px-2 py-0.5 text-[9px] rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      SUA FOTO APLICADA
                    </span>
                  )}
                </span>
                <span className="text-gray-400 font-mono text-[11px] uppercase">
                  Zona: {currentCase.zone}
                </span>
              </div>

              {/* MODE 1: COMPOSITE CLINICAL PHOTO (Full Before & After in High Resolution) */}
              {viewMode === 'composite' && (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDraggingOver(true);
                  }}
                  onDragLeave={() => setIsDraggingOver(false)}
                  onDrop={handleDropOnCard}
                  className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-950 border transition-all shadow-md group ${
                    isDraggingOver ? 'border-[#00A6C6] ring-4 ring-[#00A6C6]/30' : 'border-gray-200'
                  }`}
                >
                  {/* The Image (custom uploaded or high-res default clinical photo) */}
                  <img
                    src={activeImage}
                    alt={`${currentCase.procedure} - Antes y Después`}
                    onError={() => setImgErrors((prev) => ({ ...prev, [currentCase.id]: true }))}
                    className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Left Pill: ANTES */}
                  <div className="absolute top-4 left-4 z-20 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-[#1E1E1E]/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase shadow-lg border border-white/20">
                      ← ANTES
                    </span>
                  </div>

                  {/* Right Pill: DEPOIS */}
                  <div className="absolute top-4 right-4 z-20 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-[#00A6C6]/95 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase shadow-lg border border-white/20">
                      DESPUÉS →
                    </span>
                  </div>

                  {/* Drag-over overlay */}
                  {isDraggingOver && (
                    <div className="absolute inset-0 z-30 bg-[#087A8F]/85 backdrop-blur-xs flex flex-col items-center justify-center text-white p-4 text-center">
                      <Upload className="w-10 h-10 mb-2 animate-bounce" />
                      <span className="text-base font-bold">Solte a foto aqui!</span>
                      <span className="text-xs text-white/80 mt-1">
                        Ela será aplicada imediatamente ao {currentCase.procedure}
                      </span>
                    </div>
                  )}

                  {/* Bottom Center Indicator & Replace Trigger */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium tracking-wide border border-white/20 shadow-md cursor-pointer inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Upload className="w-3 h-3 text-[#00A6C6]" />
                      <span>{customImages[currentCase.id] ? 'Trocar Foto' : 'Substituir por sua Foto'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* MODE 2: INTERACTIVE SPLIT SLIDER */}
              {viewMode === 'slider' && (
                <div>
                  <div
                    ref={sliderRef}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onClick={(e) => handleSliderMove(e.clientX)}
                    className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200 select-none shadow-inner cursor-ew-resize group"
                  >
                    {/* Background: AFTER (Resultado Obtenido) */}
                    <img
                      src={currentCase.afterImage}
                      alt={`${currentCase.procedure} - Después`}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Clipped Overlay: BEFORE (Estado Inicial) */}
                    <div
                      className="absolute inset-0 overflow-hidden pointer-events-none"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img
                        src={currentCase.beforeImage}
                        alt={`${currentCase.procedure} - Antes`}
                        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                        style={{
                          width: sliderRef.current ? `${sliderRef.current.clientWidth}px` : '100%',
                          maxWidth: 'none',
                        }}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Vertical Dividing Line & Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#087A8F] shadow-[0_4px_16px_rgba(0,0,0,0.3)] border-2 border-[#00A6C6] flex items-center justify-center font-bold text-xs">
                        <span className="tracking-tighter text-[11px] sm:text-xs font-mono">
                          ◀ ▶
                        </span>
                      </div>
                    </div>

                    {/* Left and Right Status Badges */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-[#1E1E1E]/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-md">
                        ANTES (Inicial)
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-20 pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-[#00A6C6]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase shadow-md">
                        DESPUÉS (Armonizado)
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                      <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-medium tracking-wide">
                        ↔ Arrastra para comparar
                      </span>
                    </div>
                  </div>

                  {/* Range slider input */}
                  <div className="mt-4 px-2">
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1 font-medium">
                      <span>100% Antes</span>
                      <span className="text-[#087A8F] font-semibold">
                        Comparación: {Math.round(sliderPosition)}%
                      </span>
                      <span>100% Después</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="w-full accent-[#00A6C6] cursor-pointer h-1.5 bg-gray-200 rounded-lg appearance-none"
                      aria-label="Barra deslizadora de comparación"
                    />
                  </div>
                </div>
              )}

              {/* MODE 3: SIDE-BY-SIDE */}
              {viewMode === 'side-by-side' && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200 shadow-sm">
                    <img
                      src={currentCase.beforeImage}
                      alt={`${currentCase.procedure} - Antes`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#1E1E1E]/85 text-white text-[10px] font-semibold tracking-wider uppercase shadow-sm">
                        ANTES
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-xs text-white text-[9px]">
                        Estado inicial
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-[#00A6C6]/40 shadow-sm">
                    <img
                      src={currentCase.afterImage}
                      alt={`${currentCase.procedure} - Después`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#00A6C6] text-white text-[10px] font-semibold tracking-wider uppercase shadow-sm">
                        DESPUÉS
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="px-2 py-0.5 rounded-md bg-[#087A8F]/80 backdrop-blur-xs text-white text-[9px]">
                        Armonización final
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Clinical & Procedural Dossier Column */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div>
                <span className="verona-label text-[#00A6C6] text-[10px] block mb-1">
                  PROCEDIMIENTO CLÍNICO DE ARMONIZACIÓN
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1E]">
                  {currentCase.procedure}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#087A8F] font-medium mt-1">
                  {currentCase.title}
                </p>
              </div>

              {/* Harmonization Injection Points */}
              <div className="p-4 rounded-2xl bg-[#E8F6F8]/60 border border-[#00A6C6]/20">
                <span className="verona-label text-[10px] text-[#087A8F] block mb-2 font-semibold">
                  ÁREAS ANATÓMICAS ABORDADAS:
                </span>
                <ul className="space-y-1.5">
                  {currentCase.harmonizationPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#1E1E1E]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A6C6] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Observed Clinical Result */}
              <div className="p-4 rounded-2xl bg-[#F7F7F7] border border-gray-200/80">
                <span className="verona-label text-[10px] text-gray-400 block mb-1">
                  RESULTADO OBSERVADO
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#1E1E1E]/85 leading-relaxed">
                  {currentCase.resultSummary}
                </p>
              </div>

              {/* Product and Protocol Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 flex items-start gap-2">
                  <Layers className="w-4 h-4 text-[#087A8F] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium uppercase">Producto</span>
                    <span className="text-[11px] text-[#1E1E1E] font-medium leading-tight line-clamp-2">
                      {currentCase.productUsed}
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-gray-200 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#087A8F] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] text-gray-400 font-medium uppercase">Protocolo</span>
                    <span className="text-[11px] text-[#1E1E1E] font-medium leading-tight">
                      {currentCase.sessionInfo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenBooking(`Armonización Facial: ${currentCase.procedure}`)}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#00A6C6] hover:bg-[#087A8F] text-white font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-all shadow-md cursor-pointer group"
                >
                  <span>Solicitar Evaluación para mi Rostro</span>
                  <ArrowRight size={14} className="ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails for All 5 Cases */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-lg text-[#1E1E1E] font-medium">
              Todos los Casos de Armonización Facial
            </h4>
            <span className="text-xs text-gray-400 font-medium">
              Haz clic en cualquier caso para visualizarlo en detalle
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CLINICAL_CASES.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`group rounded-xl p-2.5 bg-white border transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'border-[#00A6C6] shadow-md ring-2 ring-[#00A6C6]/20'
                    : 'border-gray-200/80 hover:border-gray-300 hover:shadow-xs'
                }`}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-2 bg-gray-100">
                  <img
                    src={getActiveImage(item)}
                    alt={item.procedure}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-1 right-1">
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[#00A6C6] text-white">
                      {idx + 1}
                    </span>
                  </div>
                  {customImages[item.id] && (
                    <div className="absolute bottom-1 left-1">
                      <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-emerald-600 text-white">
                        PERSONALIZADA
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <span className="block text-[11px] font-semibold text-[#1E1E1E] truncate">
                    {item.procedure.split(':')[0]}
                  </span>
                  <span className="block text-[9px] text-[#087A8F] truncate mt-0.5 font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Medical Disclaimer Footer */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-white border border-gray-200/80 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#087A8F] shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#1E1E1E]/65 leading-relaxed">
            <strong>Aviso Médico Ético:</strong> Las imágenes e información expuestas corresponden a casos de referencia clínica
            para fines orientativos sobre las áreas anatómicas de la armonización facial. Cada paciente requiere diagnóstico médico presencial,
            ya que las dosis, planos de aplicación y resultados estéticos varían individualmente según edad, estructura ósea y calidad de la piel.
          </p>
        </div>
      </div>

      {/* POPUP MODAL: GERENCIADOR DE FOTOS DOS CASOS CLÍNICOS */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#087A8F]/20 p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00A6C6]/10 text-[#087A8F] flex items-center justify-center">
                  <FolderUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1E1E1E] font-medium">
                    Inserir Minhas Fotos Clínicas
                  </h3>
                  <p className="text-xs text-gray-500">
                    Sincronize as fotos de antes e depois com os 5 casos de harmonização facial
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 cursor-pointer transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Context Box */}
            <div className="p-3.5 rounded-2xl bg-[#E8F6F8] border border-[#00A6C6]/20 text-xs text-[#087A8F] leading-relaxed mb-6 flex items-start gap-2.5">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong>Por que selecionar aqui?</strong> Quando você anexa arquivos na conversa do chat, a plataforma de IA os analisa visualmente, mas não os grava no servidor web por isolamento de segurança. Carregando aqui, suas fotos ficam salvas no seu navegador e aparecem imediatamente no site!
              </div>
            </div>

            {/* Batch Upload Dropzone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleBatchUpload(e.dataTransfer.files);
              }}
              onClick={() => bulkFileInputRef.current?.click()}
              className="border-2 border-dashed border-[#00A6C6]/40 hover:border-[#00A6C6] bg-gray-50 hover:bg-[#E8F6F8]/30 rounded-2xl p-6 text-center cursor-pointer transition-all mb-6 group"
            >
              <input
                ref={bulkFileInputRef}
                type="file"
                multiple
                accept="image/*,.jfif"
                onChange={(e) => handleBatchUpload(e.target.files)}
                className="hidden"
                aria-label="Selecionar várias fotos de uma vez"
              />
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white shadow-xs border border-gray-200 flex items-center justify-center text-[#087A8F] group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5" />
              </div>
              <p className="font-sans font-semibold text-sm text-[#1E1E1E]">
                Clique aqui ou arraste seus arquivos de imagem
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Você pode selecionar os 5 arquivos de uma só vez (aceita .jfif, .jpg, .png, .webp)
              </p>
            </div>

            {/* Individual Cases List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider px-1">
                <span>Casos Clínicos Mapeados</span>
                <span>{customPhotosCount} de 5 configurados</span>
              </div>

              {CLINICAL_CASES.map((item, idx) => {
                const isCustom = Boolean(customImages[item.id]);
                const inputId = `file-input-${item.id}`;
                return (
                  <div
                    key={item.id}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      isCustom
                        ? 'bg-emerald-50/50 border-emerald-200'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 relative border border-gray-200">
                      <img
                        src={getActiveImage(item)}
                        alt={item.procedure}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1 left-1 px-1 py-0.2 rounded bg-black/70 text-white text-[8px] font-bold">
                        #{idx + 1}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-[#1E1E1E] truncate">
                          {item.procedure.split(':')[0]}
                        </span>
                        {isCustom && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-emerald-600 text-white shrink-0">
                            Ativa
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-500 block truncate">
                        {item.title}
                      </span>
                      {item.fileSlot && (
                        <span className="text-[9px] text-[#087A8F] font-mono block">
                          Arquivo sugerido: {item.fileSlot}
                        </span>
                      )}
                    </div>

                    {/* Action */}
                    <div className="shrink-0 flex items-center gap-1.5">
                      <input
                        id={inputId}
                        type="file"
                        accept="image/*,.jfif"
                        onChange={(e) => handleFileUpload(e, item.id)}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => document.getElementById(inputId)?.click()}
                        className="px-3 py-1.5 rounded-full bg-[#087A8F] hover:bg-[#00A6C6] text-white text-[11px] font-semibold transition-all cursor-pointer inline-flex items-center gap-1"
                      >
                        <Upload className="w-3 h-3" />
                        <span>{isCustom ? 'Alterar' : 'Carregar'}</span>
                      </button>

                      {isCustom && (
                        <button
                          type="button"
                          onClick={() => handleResetImage(item.id)}
                          title="Restaurar padrão"
                          className="p-1.5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              {customPhotosCount > 0 ? (
                <button
                  type="button"
                  onClick={handleResetAll}
                  className="text-xs text-rose-600 hover:text-rose-700 font-medium cursor-pointer"
                >
                  Restaurar todas as fotos padrão
                </button>
              ) : (
                <span className="text-xs text-gray-400">Nenhuma foto personalizada salva</span>
              )}

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-[#1E1E1E] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
