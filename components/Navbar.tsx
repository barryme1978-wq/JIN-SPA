
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, SPA_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span className={`text-2xl font-bold tracking-widest uppercase transition-colors duration-500 ${isScrolled ? 'text-[#2d2d2d]' : 'text-white'}`}>
            JIN SPA
          </span>
          <span className={`text-[10px] tracking-[0.2em] font-medium transition-colors duration-500 ${isScrolled ? 'text-[#c5a059]' : 'text-[#c5a059]'}`}>
            HOUSTON WELLNESS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-[#c5a059] ${isScrolled ? 'text-[#4a4a4a]' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={`tel:${SPA_INFO.phoneRaw}`}
            className={`px-5 py-2 rounded-full border border-[#c5a059] text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-[#c5a059] hover:text-white ${isScrolled ? 'text-[#c5a059]' : 'text-[#c5a059]'}`}
          >
            {SPA_INFO.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-[#c5a059] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#c5a059] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#c5a059]"></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          className="absolute top-8 right-8 text-3xl text-gray-400"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          &times;
        </button>
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className="text-2xl font-light tracking-widest uppercase hover:text-[#c5a059]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a 
          href={`tel:${SPA_INFO.phoneRaw}`}
          className="text-xl font-bold text-[#c5a059]"
        >
          {SPA_INFO.phone}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
