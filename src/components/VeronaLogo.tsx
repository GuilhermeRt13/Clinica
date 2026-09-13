import React from 'react';

interface VeronaLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'minimal' | 'monogram';
  colorMode?: 'dark' | 'light'; // dark text for light bg, light text for petroleum/dark bg
  showSlogan?: boolean;
}

export const VeronaMonogram: React.FC<{
  className?: string;
  color?: string;
  size?: number | string;
}> = ({ className = '', color = '#00A6C6', size = 48 }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Verona Calligraphic V Monogram */}
      <path
        d="M26 34 C22 22, 38 12, 48 20 C54 26, 44 42, 38 52 C32 63, 44 86, 45 88 C46 89, 49 76, 54 62 C62 42, 74 18, 70 18 C64 18, 56 32, 60 42 C64 52, 78 40, 72 26 C68 18, 80 20, 80 28 C80 44, 60 76, 46 90 C43 93, 41 90, 39 84 C33 66, 20 44, 26 34 Z"
        fill={color}
      />
      {/* Secondary delicate flourish swash */}
      <path
        d="M38 22 C30 26, 26 38, 32 46 C36 50, 42 42, 42 34 C42 28, 40 24, 38 22 Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
};

export const VeronaLogo: React.FC<VeronaLogoProps> = ({
  className = '',
  variant = 'full',
  colorMode = 'dark',
  showSlogan = false,
}) => {
  const isLightMode = colorMode === 'light'; // light text on dark bg
  const textColor = isLightMode ? '#FFFFFF' : '#1E1E1E';
  const subTextColor = isLightMode ? '#E6EEF1' : '#087A8F';
  const turquoiseColor = isLightMode ? '#7ED6E6' : '#00A6C6';
  const dividerColor = isLightMode ? 'rgba(255,255,255,0.2)' : 'rgba(8,122,143,0.2)';

  if (variant === 'monogram') {
    return <VeronaMonogram className={className} color={turquoiseColor} />;
  }

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <VeronaMonogram size={32} color={turquoiseColor} />
        <div className="flex flex-col">
          <span
            className="font-serif font-medium tracking-[0.25em] text-sm leading-tight"
            style={{ color: textColor }}
          >
            VERONA
          </span>
          <span
            className="verona-label text-[9px] tracking-[0.2em] font-medium"
            style={{ color: subTextColor }}
          >
            ESTÉTICA & SALUD
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center select-none text-center ${className}`}>
      {/* Main Brand Lockup with intertwined flourish symbol */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Artistic V flourish background behind VERONA */}
        <div className="absolute -top-3 pointer-events-none transform -translate-y-1">
          <VeronaMonogram size={64} color={turquoiseColor} />
        </div>

        {/* VERONA */}
        <div className="relative z-10 pt-4">
          <h1
            className="font-serif font-normal text-2xl sm:text-3xl tracking-[0.28em] leading-none uppercase pl-1"
            style={{ color: textColor }}
          >
            VERONA
          </h1>
        </div>

        {/* ESTÉTICA & SALUD */}
        <div className="relative z-10 mt-1">
          <span
            className="font-sans font-medium text-[11px] sm:text-xs tracking-[0.26em] uppercase"
            style={{ color: subTextColor }}
          >
            ESTÉTICA & SALUD
          </span>
        </div>
      </div>

      {/* Slogan divider and text if requested */}
      {showSlogan && (
        <div className="w-full mt-2 pt-1.5 border-t max-w-[280px]" style={{ borderColor: dividerColor }}>
          <p
            className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-normal"
            style={{ color: isLightMode ? '#E6EEF1' : '#555555' }}
          >
            Especialistas en Rejuvenecimiento y Reparación de la Piel
          </p>
        </div>
      )}
    </div>
  );
};
