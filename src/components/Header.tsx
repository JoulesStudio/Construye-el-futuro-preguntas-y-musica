import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { InstitutionalBrand } from './Footer';

interface HeaderProps {
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Atlas', href: '#mapa' },
    { label: 'Mitos y realidades', href: '#mitos' },
    { label: 'Civil y Arquitectura', href: '#mision-equipo' },
    { label: 'En Universidad Anáhuac', href: '#anahuac' },
    { label: 'Conecta', href: '#conecta' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#191716]/10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 md:gap-4">
          {/* Zone 1: Brand Zone - Escudo oficial Anáhuac con texto institucional */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3.5 group min-w-0 focus-visible:rounded-lg"
            aria-label="Construye el futuro - Universidad Anáhuac México Campus Norte"
          >
            <InstitutionalBrand />
          </a>

          {/* Zone 2: Navigation Links - 4 single-line text links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 text-sm font-medium text-[#191716]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#FF5900] transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 border-transparent hover:border-[#FF5900]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action - Botón delineado Guía */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenGuide}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#191716] border-2 border-[#191716] rounded-xl hover:bg-[#191716] hover:text-[#FAF8F3] transition-colors duration-150 whitespace-nowrap min-h-[44px] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#FF5900]" />
              <span>Guía</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#191716] hover:bg-[#FAF8F3] min-h-[44px] min-w-[44px]"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#191716]/10 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center px-3 py-2.5 rounded-lg text-sm font-semibold text-[#191716] hover:bg-[#FAF8F3] hover:text-[#FF5900]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#191716]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#191716] border-2 border-[#191716] rounded-xl hover:bg-[#191716] hover:text-[#FAF8F3] transition-colors min-h-[44px]"
            >
              <Compass className="w-4 h-4 text-[#FF5900]" />
              <span>Consultar Guía Vocacional</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
