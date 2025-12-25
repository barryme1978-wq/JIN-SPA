
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#c5a059] font-bold tracking-[0.3em] uppercase text-xs">Menu of Care</span>
          <h2 className="text-4xl md:text-6xl font-bold">Our Curated <span className="italic">Services</span></h2>
          <div className="w-24 h-1 bg-[#c5a059] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-[#faf9f6] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-[#c5a059]/20"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[#c5a059] font-bold">{service.price}</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold group-hover:text-[#c5a059] transition-colors">{service.name}</h3>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{service.duration}</span>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="pt-4 flex items-center text-[#c5a059] text-sm font-bold uppercase tracking-widest cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#2d2d2d] rounded-3xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-white text-3xl font-bold mb-6">First Time Client?</h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">Ask about our seasonal specials and new client discounts. Your journey to wellness starts here.</p>
            <a 
              href="tel:8327085378" 
              className="inline-block px-12 py-4 bg-[#c5a059] text-white rounded-full font-bold uppercase tracking-widest transition-all hover:bg-[#b38f4d] hover:scale-105"
            >
              Call 832-708-5378
            </a>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c5a059]/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
