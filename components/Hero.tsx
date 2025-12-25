
import React from 'react';
import { SPA_INFO } from '../constants';

interface HeroProps {
  welcomeMessage: string;
}

const Hero: React.FC<HeroProps> = ({ welcomeMessage }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-[#c5a059] uppercase tracking-[0.4em] text-sm md:text-base font-semibold mb-6 animate-pulse">
          Rejuvenate Your Senses
        </h2>
        <h1 className="text-white text-5xl md:text-8xl font-bold mb-8 leading-tight">
          Welcome to <span className="italic">Jin Spa</span>
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed italic">
          "{welcomeMessage}"
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`tel:${SPA_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-10 py-4 bg-[#c5a059] text-white rounded-full text-lg font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-[#b38f4d] hover:scale-105 shadow-xl shadow-black/20"
          >
            Call to Book Now
          </a>
          <a 
            href="#services"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-white/20"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
