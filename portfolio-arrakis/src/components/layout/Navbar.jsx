import { useState } from 'react';
import { NAV_LINKS } from '../../data/portfolio';

/**
 * Navbar Principal.
 * Gerencia a navegação e o estado do menu mobile.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-8 border-b border-arrakis-gold/20 backdrop-blur-md sticky top-0 z-50 bg-arrakis-deep/80">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* 1. LOGO */}
        <div className="font-imperial font-bold text-xl tracking-[0.2em] text-arrakis-gold hover:text-white transition-colors cursor-pointer">
          LORRAN<span className="text-arrakis-spice">.DEV</span>
        </div>

        {/* 2. MENU DESKTOP (Hidden no mobile) */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold text-arrakis-sand/70">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-arrakis-spice hover:scale-105 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* 3. BOTÃO HAMBÚRGUER (Aparece só no mobile) */}
        <button 
          className="md:hidden text-arrakis-gold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* 4. MENU MOBILE (Renderização Condicional) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-arrakis-deep border-b border-arrakis-gold/20 p-8 flex flex-col gap-6 items-center shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-arrakis-sand hover:text-arrakis-spice uppercase tracking-widest text-lg font-bold"
              onClick={() => setIsOpen(false)} // Fecha ao clicar
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}